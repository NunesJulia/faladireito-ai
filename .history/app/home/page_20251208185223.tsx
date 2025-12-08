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

// Componente para a Barra de Prompt, agora centralizada e larga
const CentralPromptBar = ({ handleNavigate }: { handleNavigate: () => void }) => {
  return (
    // z-10 para garantir que fique acima das sombras
    <div className="z-10 w-[90%] md:w-[80%] lg:w-[40%] max-w-4xl bg-black rounded-xl p-6 shadow-2xl">
      <h2 className="text-2xl md:text-3xl text-white font-semibold text-center mb-6">
        Quando falar direito faz toda a diferença
      </h2>

      {/* Botões de Ação */}
      <div className="flex items-center justify-between space-x-3">
        
        {/* Grupo de Botões à Esquerda */}
        <div className="flex space-x-2">
          
          {/* Botão Plus com Stroke Branco */}
          <button className="p-3 bg-black hover:bg-gray-800 text-white rounded-full transition duration-150 border border-white">
            <Plus className="w-5 h-5" />
          </button>
          
          {/* Botão Buscar com Stroke Branco */}
          <button className="p-3 bg-black hover:bg-gray-800 text-white rounded-full transition duration-150 flex items-center space-x-1 border border-white">
            <Globe className="w-5 h-5" />
            <span className="text-sm hidden sm:inline">Buscar</span>
          </button>
          
          {/* Botão Investigar com Stroke Branco */}
          <button className="p-3 bg-black hover:bg-gray-800 text-white rounded-full transition duration-150 flex items-center space-x-1 border border-white">
            <Telescope className="w-5 h-5" />
            <span className="text-sm hidden sm:inline">Investigar</span>
          </button>
          
          {/* Botão MoreHorizontal com Stroke Branco */}
          <button className="p-3 bg-black hover:bg-gray-800 text-white rounded-full transition duration-150 border border-white">
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
          <h1 className="text-3xl font-extrabold text-black">
            <a href="/" onClick={(e) => { e.preventDefault(); router.push("/"); }}>
              FalaDireito.ia
            </a>
          </h1>
          
          {/* Botões Login e Prompt */}
          <nav className="flex space-x-2">
            
            {/* Botão Login: Fundo preto original */}
            <button
              onClick={() => router.push("/login")}
              className={`px-5 py-3 bg-black text-white hover:bg-gray-800 rounded-full transition duration-150 flex items-center text-base`}
            >
              Login
            </button>
            
            {/* Botão Prompt: Fill Branco, Borda Preta e Bordas Redondas */}
            <button
              onClick={() => router.push("/prompt")}
              className={`px-5 py-3 bg-white border border-black text-black hover:bg-gray-100 rounded-full transition duration-150 flex items-center text-base`}
            >
              Prompt
            </button>
          </nav>
        </div>
      </header>

      {/* 2. Conteúdo Principal com Barra de Prompt Centralizada (com overflow-hidden) */}
      <main className="relative flex flex-1 items-center justify-center p-4 overflow-hidden">
        
        {/* Sombra Circular na Extrema Direita (CORTADA) */}
        {/* right-[-15rem] para metade do círculo ficar fora da tela */}
        <div className="absolute top-1/2 right-[-15rem] transform -translate-y-1/2 w-[30rem] h-[30rem] bg-black rounded-full filter blur-2xl opacity-8 pointer-events-none z-0"></div>

        {/* Sombra Circular na Extrema Esquerda (CORTADA) */}
        {/* left-[-15rem] para metade do círculo ficar fora da tela */}
        <div className="absolute top-1/2 left-[-15rem] transform -translate-y-1/2 w-[30rem] h-[30rem] bg-black rounded-full filter blur-2xl opacity-8 pointer-events-none z-0"></div>
        
        <CentralPromptBar handleNavigate={handleNavigate} />
      </main>
      
      {/* 3. Rodapé Cinza com Créditos */}
      <footer className="w-full py-4 text-center bg-gray-100 border-t border-black">
        <p className="text-sm text-gray-600"> 
          Leandro Santos . Júlia Nunes . Talisson Mendes
        </p>
      </footer>
    </div>
  );
}