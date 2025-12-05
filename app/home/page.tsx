//app/home/page.tsx
"use client";

import { Key, Search } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleNavigate = () => {
    if (session) {
      router.push("/prompt");
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 bg-gray-50 rounded-xl shadow-lg">
      <h1 className="text-5xl font-extrabold text-indigo-700 mb-4 tracking-tight">
        Bem-vindo ao Nosso Serviço
      </h1>

      <p className="text-xl text-gray-600 max-w-2xl text-center mb-8">
        Esta é a página de apresentação do site. Um espaço para descrever
        nossas funcionalidades e atrair novos usuários.
      </p>

      <button
        onClick={handleNavigate}
        className={`cursor-pointer font-bold py-3 px-6 rounded-full transition duration-300 shadow-xl flex items-center
          ${
            session
              ? "bg-green-500 hover:bg-green-600 text-white"
              : "bg-indigo-600 hover:bg-indigo-700 text-white"
          }
        `}
      >
        {session ? (
          <>
            <Search className="w-5 h-5 mr-2" />
            Acessar Dashboard
          </>
        ) : (
          <>
            <Key className="w-5 h-5 mr-2" />
            Fazer Login
          </>
        )}
      </button>
    </div>
  );
}
