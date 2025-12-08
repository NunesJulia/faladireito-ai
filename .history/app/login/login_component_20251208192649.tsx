// app/login/login_component.tsx
"use client";

import { Loader2, ArrowLeft } from "lucide-react"; // Adicionado ArrowLeft
import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation"; // Adicionado useRouter

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter(); // Inicializando o router
  const errorParam = searchParams.get("error");

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (errorParam === "OAuthAccountNotLinked") {
      setError("Este e-mail está vinculado a outro método de login.");
    } else if (errorParam) {
      setError("Falha ao fazer login. Tente novamente.");
    }
  }, [errorParam]);

  const handleLogin = async () => {
    setIsLoading(true);
    await signIn("google", { callbackUrl: "/prompt" });
  };

  const handleGoBack = () => {
    router.push("/");
  };

  return (
    // Fundo da tela preto
    <div className="flex bg-black flex-col items-center justify-center min-h-[50vh] h-screen p-6">
      {/* Caixa de Login com fundo escuro e borda branca */}
      <div className="relative w-full max-w-sm bg-white p-8 rounded-xl shadow-2xl border border-white">
        
        {/* Botão de Voltar para Home */}
        <button
          onClick={handleGoBack}
          className="absolute top-4 left-4 text-black hover:text-gray-400 transition duration-150"
          aria-label="Voltar para a página inicial"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <h2 className="text-3xl font-bold text-center text-black mt-4 mb-8">
          Acesso Exclusivo
        </h2>

        {error && (
          <p className="text-sm text-red-400 bg-black p-3 rounded-lg mb-4 text-center border border-black">
            {error}
          </p>
        )}

        <button
          onClick={handleLogin}
          disabled={isLoading}
          className={`w-full cursor-pointer py-3 px-4 rounded-lg font-semibold transition duration-300 flex items-center justify-center 
            ${isLoading 
                ? "bg-gray-600 text-gray-400 cursor-not-allowed" 
                : "bg-red-600 hover:bg-red-700 text-white shadow-lg"
            }`}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Redirecionando...
            </>
          ) : (
            <>Entrar com Google</>
          )}
        </button>

        <p className="mt-6 text-xs text-gray-400 text-sm text-center">
          Usamos autenticação do Google para garantir a segurança dos seus dados.
        </p>
      </div>
    </div>
  );
}