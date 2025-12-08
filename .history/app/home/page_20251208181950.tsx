"use client";

import {
  ArrowUp,
  Plus,
  Globe,
  Telescope,
  MoreHorizontal,
} from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// Novo componente para a Barra de Prompt, agora centralizada e larga
const CentralPromptBar = ({ handleNavigate }) => {
  return (
    // Centralizando e alargando a barra de prompt
    <div className="w-[90%] md:w-[90%] lg:w-[50%] max-w-4xl bg-black rounded-xl p-6 shadow-2xl">
      <h2 className="text-2xl md:text-3xl text-white font-semibold text-center mb-6">
        Quando falar direito faz toda a diferença
      </h2>

      {/* Botões de Ação */}
      <div className="flex items-center justify-between space-x-3">
        
        {/* Grupo de Botões à Esquerda */}
        <div className="flex space-x-2">
          <button className="p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition duration-150">
            <Plus className="w-5 h-5" />
          </button>
          <button className="p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition duration-150 flex items-center space-x-1">
            <Globe className="w-5 h-5" />
            <span className="text-sm hidden sm:inline">Buscar</span>
          </button>
          <button className="p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition duration-150 flex items-center space-x-1">
            <Telescope className="w-5 h-5" />
            <span className="text-sm hidden sm:inline">Investigar</span>
          </button>
          <button className="p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition duration-150">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        {/* Botão de Envio (Seta para Cima) */}
        <button
          onClick={handleNavigate}
          className="p-3 bg-white hover:bg-gray-200 text-black rounded-full transition duration-150"
          aria-label="Avançar"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

      </div>
    </div>
  );
};


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
    <div className="min-h-screen bg-white font-sans flex flex-col">
      {/* 1. Navbar com Fill Branco e Stroke Interior Preto */}
      <header className="w-full bg-white border-b border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          
          {/* Logo "FalaDireito.ia" */}
          <h1 className="text-2xl font-extrabold text-black">
            <a href="/" onClick={(e) => { e.preventDefault(); router.push("/"); }}>
              FalaDireito.ia
            </a>
          </h1>
          
          {/* Botões Login e Prompt */}
          <nav className="flex space-x-2">
            
            {/* Botão Login: Fundo preto original */}
            <button
              onClick={() => router.push("/login")}
              className={`px-4 py-2 bg-black text-white hover:bg-gray-800 rounded-lg transition duration-150 flex items-center text-sm`}
            >
              Login
            </button>
            
            {/* Botão Prompt: Fill Branco, Borda Preta e Bordas Redondas */}
            <button
              onClick={() => router.push("/prompt")}
              // Aplica borda preta (border-black), fundo branco (bg-white) e bordas arredondadas (rounded-lg)
              className={`px-4 py-2 bg-white border border-black text-black hover:bg-gray-100 rounded-lg transition duration-150 flex items-center text-sm`}
            >
              Prompt
            </button>
          </nav>
        </div>
      </header>

      {/* 2. Conteúdo Principal com Barra de Prompt Centralizada (sem notebook) */}
      <main className="flex flex-1 items-center justify-center p-4">
        <CentralPromptBar handleNavigate={handleNavigate} />
      </main>
      
      {/* 3. Rodapé Cinza com Créditos */}
      
    </div>
  );
}