"use client";

import { Loader2, LogOut, Send, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import jwt from "jsonwebtoken";

interface ResponseProps {
  response: string;
}

const NavbarHomeStyle = ({
  session,
  imageUrl,
}: {
  session: any;
  imageUrl: string;
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white border-b border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        
        <h1 className="text-3xl font-extrabold text-black">
          <a href="/">FalaDireito.ia</a>
        </h1>

        <nav className="flex items-center space-x-4">
          
          <img
            src={imageUrl}
            className="h-10 w-10 rounded-full object-cover border-2 border-gray-400 shadow-sm"
            alt="profile image"
          />
          
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="flex cursor-pointer items-center text-sm bg-white border border-black text-black hover:bg-gray-100 font-semibold py-2 px-4 rounded-full transition duration-150 shadow-sm"
            aria-label="Sair da conta"
          >
            <LogOut className="w-4 h-4 mr-1" />
            Sair
          </button>
        </nav>
      </div>
    </header>
  );
};

export default function PromptPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [promptText, setPromptText] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  
  const [imageUrl, setImageUrl] = useState<string>("https://th.bing.com/th/id/OIP.Bl6dInu-pv4nnfv-QAxgSwHaHa?w=190&h=190&c=7&r=0&o=7&pid=1.7&rm=3");
  
  const [isSending, setIsSending] = useState<boolean>(false);

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
    const imageUrlString = session?.user?.image
    if (imageUrlString)
      setImageUrl(imageUrlString)
  }, [status, router, session]);


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

    const tokenRes = await fetch("/api/token");
    const { token } = await tokenRes.json();

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_PROMPT_CONSUME!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          texto_juridico: promptText,
        }),
      });

      if (!res.ok) {
        let errorData: any;
        const contentType = res.headers.get("content-type");

        if (contentType && contentType.includes("application/json")) {
            try {
                errorData = await res.json();
            } catch (e) {
                errorData = { message: "Resposta de erro inválida (JSON malformado)." };
            }
        } else {
            if (res.status === 404) {
                errorData = { message: "API de prompt não encontrada (404)." };
            } else if (res.status === 401 || res.status === 403) {
                 errorData = { message: "Acesso não autorizado. Verifique as credenciais ou a rota da API." };
            } else {
                 // Captura o erro HTML/Não-JSON que causa o "Unexpected token '<'"
                 errorData = { message: `Erro interno do servidor (Status: ${res.status}). A resposta esperada não é JSON.` };
            }
        }
        
        const errorMessage = errorData.message || `Erro de processamento (Status: ${res.status}).`;
        setMessage(`Erro: ${errorMessage}`);
        
        throw new Error(`Erro ${res.status}: ${errorMessage}`);
      }

      const data: ResponseProps = await res.json();
      setMessage(`Resposta: \n${data.response}`);
    } catch (error: unknown) {
      console.error(error);
      if (!message.startsWith("Erro")) {
        setMessage("Erro ao enviar prompt.");
      }
    }
    setIsSending(false);
  };

  if (status === "loading")
    return (
      <div className="flex justify-center pt-20">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    );

  const userName = session?.user?.name ? session.user.name.split(' ')[0] : "Usuário";

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <NavbarHomeStyle session={session} imageUrl={imageUrl} />

      <main className="flex-1 pt-24 pb-8 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto w-full"> 
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            Olá, {userName}
        </h1>
        
        <p className="text-xl text-gray-700 mb-8 text-center">
          Qual é a sua dúvida jurídica?
        </p>

        <div className="space-y-6">
          <textarea
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
            placeholder="Digite aqui..."
            rows={8}
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-indigo-500
              focus:border-indigo-500 transition duration-150 shadow-md text-gray-800 resize-none"
            disabled={isSending}
          />

          {message && (
            <div
              className={`p-4 rounded-xl 
                ${message.startsWith("Resposta")
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
                } flex items-start`}
            >
              {message.startsWith("Erro") ? (
                <X className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
              ) : (
                <Send className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
              )}
              <div className="whitespace-pre-wrap">{message.replace(/^(Resposta: \n|Erro: )/, '')}</div> 
            </div>
          )}

          <div className="flex justify-end space-x-4">
            
            <button
              onClick={() => setPromptText("")}
              className="flex cursor-pointer items-center bg-white border border-black hover:bg-gray-100 text-black font-semibold py-3 px-6 rounded-full transition duration-300 shadow-sm"
              disabled={isSending}
            >
              <X className="w-5 h-5 mr-2" />
              Limpar
            </button>

            <button
              onClick={handleSendPrompt}
              disabled={isSending || promptText.trim() === ""}
              className={`flex cursor-pointer items-center font-semibold py-3 px-6 rounded-full transition duration-300 shadow-lg 
                ${isSending
                  ? "bg-gray-500 text-white cursor-not-allowed"
                  : "bg-black hover:bg-gray-800 text-white"
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
      </main>
    </div>
  );
}