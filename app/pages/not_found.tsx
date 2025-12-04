import React from 'react';
import { Home } from 'lucide-react';

// 4. Rota: /not_a_found (404)
 const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 bg-red-50 rounded-xl shadow-lg">
      <h1 className="text-8xl font-extrabold text-red-600 mb-4">404</h1>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Página Não Encontrada</h2>
      <p className="text-lg text-gray-600 text-center mb-8">
        O endereço que você digitou não corresponde a nenhuma rota válida.
      </p>
      <a 
        href="/" 
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 shadow-md flex items-center"
      >
        <Home className="w-5 h-5 mr-2" />
        Voltar para Home
      </a>
    </div>
  );
};




export default NotFoundPage;