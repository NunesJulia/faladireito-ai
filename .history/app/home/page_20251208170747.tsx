//app/home/page.tsx
"use client";
"lucide-react"
import { AlertTriangle, Key, Search } from ;
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

  return (<div className="min-h-screen bg-gray-100 font-sans" >
    <header className="bg-white shadow-md border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">
          <a href="/" onClick={(e) => { e.preventDefault(); router.push("/"); }}>
            PROJETO.AI
          </a>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <button
                onClick={() => alert('a')}
                className={`hover:scale-105 cursor-pointer text-gray-600 hover:text-indigo-600 transition duration-150 flex items-center`}
              >

              </button>
            </li>

            <li>
              <button
                onClick={() => router.push("/login")}
                className={`hover:scale-105 cursor-pointer text-gray-600 hover:text-indigo-600 transition duration-150 flex items-center `}
              >
                <Key className="w-5 h-5 mr-1" /> Login
              </button>
            </li>

            <li>
              <button
                onClick={() => router.push("/prompt")}
                className={`hover:scale-105 cursor-pointer text-gray-600 hover:text-indigo-600 transition duration-150 flex items-center `}
              >
                <Search className="w-5 h-5 mr-1" /> Prompt
              </button>
            </li>

          </ul>
        </nav>
      </div>
    </header>
    <div className="flex flex-col items-center justify-center min-h-[50vh] h-screen p-8 bg-gray-50 shadow-lg">
      <h1 className="text-5xl font-extrabold text-indigo-700 mb-4 tracking-tight">
        Bem-vindo ao Nosso Serviço
      </h1>

      <p className="text-xl text-gray-600 max-w-2xl text-center mb-8">
        Esta é a página de apresentação do site. Um espaço para descrever
        nossas funcionalidades e atrair novos usuários.
      </p>


    </div>

  </div >

  );
}
