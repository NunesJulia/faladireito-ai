

import { Key, Search } from "lucide-react";

const HomePage: React.FC<HomePageProps> = ({ navigateTo, isAuthenticated }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 bg-gray-50 rounded-xl shadow-lg">
      <h1 className="text-5xl font-extrabold text-indigo-700 mb-4 tracking-tight">
        Bem-vindo ao Nosso Serviço
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl text-center mb-8">
        Esta é a página de apresentação do site. Um espaço para descrever
        nossas funcionalidades e atrair novos usuários.
      </p>
      {isAuthenticated ? (
        <button
          onClick={() => navigateTo('/prompt')}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 shadow-md flex items-center"
        >
          <Search className="w-5 h-5 mr-2" />
          Acessar Dashboard
        </button>
      ) : (
        <button
          onClick={() => navigateTo('/login')}
          className="cursor-pointer hover:scale-105 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 shadow-xl flex items-center"
        >
          <Key className="w-5 h-5 mr-2" />
          Fazer Login
        </button>
      )}
    </div>
  );
};

export default HomePage;