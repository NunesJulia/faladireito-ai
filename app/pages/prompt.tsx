import { Loader2, LogOut, Send, X } from "lucide-react";
import { useState } from "react";

// 3. Rota: /prompt (Rota Credenciada)
const PromptPage: React.FC<PromptPageProps> = ({ user, logout, validateAuth }) => {
  const [promptText, setPromptText] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSending, setIsSending] = useState<boolean>(false);

  // Simulação de Envio de Informação (Validação no Auth)
  const handleSendPrompt = (): void => {
    if (!validateAuth()) {
      setMessage('Erro: Sessão expirada. Por favor, faça login novamente.');
      return;
    }
    
    if (promptText.trim() === '') {
      setMessage('Por favor, digite algo antes de enviar.');
      return;
    }

    setIsSending(true);
    setMessage('');

    console.log(`Enviando prompt: "${promptText}"`);
    console.log(`Token de Autenticação: ${user.token}`);

    setTimeout(() => {
      setIsSending(false);
      setMessage(`Prompt enviado com sucesso para o Nest.JS! (Usuário: ${user.name})`);
      setPromptText('');
    }, 1500);
  };

  return (
    <div className="p-8 space-y-8 bg-white rounded-xl shadow-xl">
      <div className="flex justify-between items-center pb-4 border-b">
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard de Prompt
        </h1>
        <div className="flex items-center space-x-4">
          <p className="text-sm text-gray-600">
            Logado como: <span className="font-medium text-indigo-600">{user.email}</span>
          </p>
          <button
            onClick={logout}
            className="flex cursor-pointer items-center text-sm text-red-600 hover:text-red-800 transition duration-150"
          >
            <LogOut className="w-4 h-4 mr-1" />
            Sair
          </button>
        </div>
      </div>

      <p className="text-lg text-gray-700">
        Digite sua consulta abaixo. Seu token de sessão será enviado ao servidor para validação.
      </p>

      <div className="space-y-4">
        <textarea
          value={promptText}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPromptText(e.target.value)}
          placeholder="Digite seu prompt aqui..."
          rows={5}
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-indigo-500
           focus:border-indigo-500 transition duration-150 shadow-sm text-blue-900"
          disabled={isSending}
        />
        
        {message && (
          <div className={`p-3 rounded-lg ${message.startsWith('Erro') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'} flex items-center`}>
            {message.startsWith('Erro') ? <X className="w-5 h-5 mr-2" /> : <Send className="w-5 h-5 mr-2" />}
            {message}
          </div>
        )}

        <div className="flex justify-end space-x-4">
          <button
            onClick={() => setPromptText('')}
            className="flex cursor-pointer items-center bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-full transition duration-300"
            disabled={isSending}
          >
            <X className="w-5 h-5 mr-2" />
            Limpar
          </button>
          <button
            onClick={handleSendPrompt}
            disabled={isSending || promptText.trim() === ''}
            className={`flex cursor-pointer items-center font-semibold py-2 px-6 rounded-full transition duration-300 
              ${isSending ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg'}`}
          >
            {isSending && <Loader2 className="w-5 h-5 mr-2 animate-spin" />}
            {isSending ? 'Enviando...' : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Enviar
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};



export default PromptPage;