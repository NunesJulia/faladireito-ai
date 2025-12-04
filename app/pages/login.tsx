
import { Loader2 } from "lucide-react";
import { useState } from "react";

const LoginPage: React.FC<LoginPageProps> = ({ login, isLoading }) => {
  const [error] = useState<string>(''); // Mantido para simular lógica de erro

  const handleLogin = (): void => {
    // Simula a tentativa de login (que está no hook useAuth)
    login();
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
          className={`w-full py-3 px-4 rounded-lg font-semibold transition duration-300 flex items-center justify-center 
            ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700 text-white shadow-md'}`}
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
          ) : (
            <>
              <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFC107" d="M43.611 20.083H42V20h-20v8h11.941c-1.18 2.924-3.84 5.093-7.94 5.093a10.98 10.98 0 0 1-10.98-10.98c0-6.06 4.92-10.98 10.98-10.98a10.99 10.99 0 0 1 7.787 3.235l5.657-5.657A19.954 19.954 0 0 0 22 4C11.59 4 4 11.59 4 22c0 10.41 7.59 18 18 18 10.41 0 18-7.59 18-18 0-1.745-.224-3.48-.65-5.117z"/>
                <path fill="#FF3D00" d="M6.306 14.691L1.47 19.166C2.65 16.241 4 14.07 6.306 14.691z"/>
                <path fill="#4CAF50" d="M41.332 25.17c0-2.327-.5-4.595-1.47-6.666L34.205 23.33h-12.205v8h10.941c1.18 2.924 3.84 5.093 7.94 5.093 4.606 0 8.775-2.616 10.98-6.059H43.61c.43 1.637.65 3.372.65 5.117 0 1.745-.224 3.48-.65 5.117l5.657 5.657C44.41 42.41 38.627 46 32 46c-10.41 0-18-7.59-18-18 0-10.41 7.59-18 18-18 10.41 0 18 7.59 18 18 0 1.745-.224 3.48-.65 5.117z"/>
                <path fill="#1976D2" d="M14.22 36.562C17.653 39.429 22 41 22 41c-4.41 0-8.528-1.527-11.96-4.403l5.657-5.657z"/>
              </svg>
              Entrar com Google
            </>
          )}
        </button>

        <p className="mt-6 text-xs text-gray-500 text-center">
          Usamos a autenticação do Google para garantir a segurança dos seus dados.
        </p>
      </div>
    </div>
  );
};


export default LoginPage;