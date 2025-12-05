// app/login/page.tsx
"use client";

import { Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
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

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-6">
      <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-2xl border border-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Acesso Exclusivo
        </h2>

        {error && (
          <p className="text-sm text-red-600 bg-red-100 p-3 rounded-lg mb-4 text-center">
            {error}
          </p>
        )}

        <button
          onClick={handleLogin}
          disabled={isLoading}
          className={`w-full cursor-pointer py-3 px-4 rounded-lg font-semibold transition duration-300 flex items-center justify-center 
            ${isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700 text-white shadow-md"}`}
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

        <p className="mt-6 text-xs text-gray-500 text-center">
          Usamos autenticação do Google para garantir a segurança dos seus dados.
        </p>
      </div>
    </div>
  );
}
