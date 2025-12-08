"use client";

import { Loader2, LogOut, Send, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import jwt from "jsonwebtoken"

interface ResponseProps {
  response: string
}

export default function PromptPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [promptText, setPromptText] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("https://th.bing.com/th/id/OIP.Bl6dInu-pv4nnfv-QAxgSwHaHa?w=190&h=190&c=7&r=0&o=7&pid=1.7&rm=3");
  const [isSending, setIsSending] = useState<boolean>(false);

  // se não estiver autenticado, redireciona
  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
    const imageUrlString = session?.user?.image
    if (imageUrlString)
      setImageUrl(imageUrlString)
  }, [status, router]);


  const handleSendPrompt = async () => {
    if (!session) {
      setMessage("Erro: Sessão expirada. Por favor, faça login novamente.");
      return;
    }

    if (promptText.trim() === "") {
      setMessage("Por favor, digite algo antes de enviar.");
      return;
    }

    setIsSending(true);
    setMessage("");

    // configurando payload

    const tokenRes = await fetch("/api/token");
    const { token } = await tokenRes.json();

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_PROMPT_CONSUME!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}` // enviando o token com o payload
        },
        body: JSON.stringify({
          texto_juridico: promptText
        })
      });

      if (!res.ok) {
        setMessage("Possivelmente seu texto não é juridico.");
        throw new Error("Erro ao enviar o prompt para o servidor.");
      }

      const data: ResponseProps = await res.json();
      setMessage(`\n${data.response}`);


    } catch (error: unknown) {
      console.error(error);
      setMessage("Erro ao enviar prompt.");
    }
    setIsSending(false);

  };

  if (status === "loading")
    return (
      <div className="flex justify-center pt-20">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    );

  return (
    <div className="p-8 space-y-8 bg-white rounded-xl h-screen shadow-xl">
      <div className="flex justify-between items-center pb-4 border-b">
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard de Prompt
        </h1>
        <div className="flex items-center space-x-4">
          <img src={imageUrl} className=" h-12 w-12 
        rounded-full 
        object-cover 
        border-4 
        border-indigo-500 
        shadow-lg" alt="profile image" />
          <p className="text-sm text-gray-600">
            Logado como:{" "}
            <span className="font-medium text-indigo-600">
              {session?.user?.name}
            </span>
          </p>
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="flex cursor-pointer items-center text-sm text-red-600 hover:text-red-800 transition duration-150"
          >
            <LogOut className="w-4 h-4 mr-1" />
            Sair
          </button>
        </div>
      </div>

      <p className="text-lg text-gray-700">
        Digite sua consulta abaixo.
      </p>

      <div className="space-y-4">
        <textarea
          value={promptText}
          onChange={(e) => setPromptText(e.target.value)}
          placeholder="Digite seu prompt aqui..."
          rows={5}
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-indigo-500
           focus:border-indigo-500 transition duration-150 shadow-sm text-blue-900"
          disabled={isSending}
        />

        {message && (
          <div
            className={`p-3 rounded-lg ${message.startsWith("Erro")
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
              } flex items-center`}
          >
            {message.startsWith("Erro") ? (
              <X className="w-5 h-5 mr-2" />
            ) : (
              <Send className="w-5 h-5 mr-2" />
            )}
            {message}
          </div>
        )}

        <div className="flex justify-end space-x-4">
          <button
            onClick={() => setPromptText("")}
            className="flex cursor-pointer items-center bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-full transition duration-300"
            disabled={isSending}
          >
            <X className="w-5 h-5 mr-2" />
            Limpar
          </button>

          <button
            onClick={handleSendPrompt}
            disabled={isSending || promptText.trim() === ""}
            className={`flex cursor-pointer items-center font-semibold py-2 px-6 rounded-full transition duration-300 
              ${isSending
                ? "bg-indigo-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg"
              }`}
          >
            {isSending && <Loader2 className="w-5 h-5 mr-2 animate-spin" />}
            {isSending ? (
              "Enviando..."
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Enviar
              </>
            )}
          </button>
        </div>
      </div>

    </div>
  );
}
