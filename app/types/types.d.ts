// --- 1. Definição de Interfaces de Tipos (Simula app/types.ts) ---

interface User {
  id: string;
  name: string;
  email: string;
  token: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: () => void;
  logout: () => void;
  validateAuth: () => boolean;
}

// Propriedades das Páginas
interface RouterProps {
  navigateTo: (path: string) => void;
}

interface HomePageProps extends RouterProps {
  isAuthenticated: boolean;
}

interface LoginPageProps {
  login: () => void;
  isLoading: boolean;
}

interface PromptPageProps {
  user: User;
  logout: () => void;
  validateAuth: () => boolean;
}