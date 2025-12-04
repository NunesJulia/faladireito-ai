"use client";
import { Home, Key, Loader2, Search } from "lucide-react";
import { useEffect, useState } from "react";
import LoginPage from "./pages/login";
import PromptPage from "./pages/prompt";

import HomePage from "./pages/Home";

import useAuth from "./hooks/useAuth";
import NotFoundPage from "./pages/not_found";
// --- Componente Principal (Router) ---
export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);
  const { user, isLoading, login, logout, validateAuth } = useAuth();
  const isAuthenticated: boolean = !!user;

  // Lógica de Roteamento Simples (Ouvinte de eventos popstate e links)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    // Limpeza do listener
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const navigateTo = (path: string): void => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  // Verificação de Rotas Protegidas
  useEffect(() => {
    if (!isLoading) {
      if (currentPath === '/prompt' && !isAuthenticated) {
        navigateTo('/login');
      } 
      else if ((currentPath === '/login' || currentPath === '/') && isAuthenticated) {
        if (currentPath === '/') {
             navigateTo('/prompt');
        }
      }
    }
  }, [currentPath, isAuthenticated, isLoading]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <Loader2 className="w-10 h-10 animate-spin text-indigo-600" />
        <span className="ml-3 text-lg text-indigo-600">Carregando Sessão...</span>
      </div>
    );
  }

  // Renderização condicional (Switch-like structure)
  let PageComponent: React.ComponentType<any>;
  let componentProps: any = {}; // Usamos 'any' para o objeto de props, pois ele muda dinamicamente

  if (currentPath === '/') {
    PageComponent = HomePage;
    componentProps = { navigateTo, isAuthenticated };
  } else if (currentPath === '/login') {
    PageComponent = LoginPage;
    componentProps = { login, isLoading };
  } else if (currentPath === '/prompt') {
    if (isAuthenticated && user) {
      PageComponent = PromptPage;
      // Espalhamos as propriedades tipadas do PromptPageProps
      componentProps = { user, logout, validateAuth };
    } else {
       // Fallback de segurança (embora o useEffect já tenha redirecionado)
       PageComponent = LoginPage; 
       componentProps = { login, isLoading };
    }
  } else {
    PageComponent = NotFoundPage;
  }

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">
            <a href="/" onClick={(e) => { e.preventDefault(); navigateTo('/'); }}>
              PROJETO.AI
            </a>
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <button
                  onClick={() => navigateTo('/')}
                  className={`hover:scale-105 cursor-pointer text-gray-600 hover:text-indigo-600 transition duration-150 flex items-center ${currentPath === '/' ? 'text-indigo-600 font-semibold' : ''}`}
                >
                  <Home className="w-5 h-5 mr-1" /> Home
                </button>
              </li>
              {!isAuthenticated ? (
                <li>
                  <button
                    onClick={() => navigateTo('/login')}
                    className={`hover:scale-105 cursor-pointer text-gray-600 hover:text-indigo-600 transition duration-150 flex items-center ${currentPath === '/login' ? 'text-indigo-600 font-semibold' : ''}`}
                  >
                    <Key className="w-5 h-5 mr-1" /> Login
                  </button>
                </li>
              ) : (
                <li>
                  <button
                    onClick={() => navigateTo('/prompt')}
                    className={`text-gray-600 hover:text-indigo-600 transition duration-150 flex items-center ${currentPath === '/prompt' ? 'text-indigo-600 font-semibold' : ''}`}
                  >
                    <Search className="w-5 h-5 mr-1" /> Prompt
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Passamos as props dinamicamente, mas a tipagem interna do componente garante a segurança */}
        <PageComponent {...componentProps} /> 
      </main>
    </div>
   
  );
}
