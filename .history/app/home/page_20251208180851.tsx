"use client";

import {
  Key,
  Search,
  ArrowUp,
  Plus,
  Globe,
  Telescope,
  MoreHorizontal,
} from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// Componente para simular o mockup do laptop e a interface de prompt
const LaptopMockup = ({ handleNavigate }) => {
  return (
    // Simulação do laptop (estrutura externa)
    <div className="relative w-full max-w-4xl h-auto mx-auto my-12 p-4 bg-transparent border-none">
      
      {/* Corpo do Laptop - Esta div simula a tela dentro da imagem */}
      <div className="relative w-full pt-[62.5%] bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-300">
        
        {/* Simulação da Tela Ativa */}
        <div className="absolute inset-0 bg-black flex flex-col items-center justify-center p-8">
          
          {/* Barra de Prompt Flutuante */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] lg:w-[70%] max-w-4xl bg-black rounded-xl p-4 shadow-2xl border border-gray-700">
            <h2 className="text-2xl md:text-3xl text-white font-semibold text-center mb-6">
              Quando falar direito faz toda a diferença
            </h2>

            {/* Botões de Ação */}
            <div className="flex items-center justify-between space-x-2">
              
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
              >
                <ArrowUp className="w-5 h-5" />
              </button>

            </div>
          </div>
        </div>
      </div>
      
      {/* Detalhe da base do laptop (opcional, para mais realismo) */}
      <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-[95%] h-4 bg-gray-400 rounded-b-lg"></div>
    </div>
  );
};


export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Função para navegar, igual à sua lógica original
  const handleNavigate = () => {
    if (session) {
      router.push("/prompt");
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      {/* 1. Cabeçalho Minimalista */}
      <header className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          
          {/* Logo "FalaDireito.ia" */}
          <h1 className="text-2xl font-extrabold text-black">
            <a href="/" onClick={(e) => { e.preventDefault(); router.push("/"); }}>
              FalaDireito.ia
            </a>
          </h1>
          
          {/* Botões Login e Prompt - Alinhados à direita com fundo escuro */}
          <nav className="flex space-x-2">
            <button
              onClick={() => router.push("/login")}
              className={`px-4 py-2 bg-black text-white hover:bg-gray-800 rounded-lg transition duration-150 flex items-center text-sm`}
            >
              Login
            </button>
            <button
              onClick={() => router.push("/prompt")}
              className={`px-4 py-2 bg-black text-white hover:bg-gray-800 rounded-lg transition duration-150 flex items-center text-sm`}
            >
              Prompt
            </button>
          </nav>
        </div>
      </header>

      {/* 2. Conteúdo Principal com Mockup do Laptop */}
      <main className="flex flex-1 items-start justify-center p-4">
        <LaptopMockup handleNavigate={handleNavigate} />
      </main>
      
      {/* 3. Rodapé com Créditos */}
      <footer className="w-full py-4 text-center text-xs text-gray-500 bg-white">
        Leandro Santos . Júlia Nunes . Talisson Mendes
      </footer>
    </div>
  );
}