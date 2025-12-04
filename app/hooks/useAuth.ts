"use client";
import { useCallback, useEffect, useState } from "react";


// --- Variáveis Globais e Configuração ---
const AUTH_KEY = 'google_auth_token';
const USER_KEY = 'logged_in_user';

// Mock User Data
const mockUser = {
  id: 'user-123',
  name: 'Usuário Gemini',
  email: 'usuario.gemini@example.com',
  token: 'mock-google-jwt-token-12345',
};


// Hook de Autenticação Centralizado
const useAuth = (): AuthContextType => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Carregar estado da autenticação no início
  useEffect(() => {
    const storedToken = localStorage.getItem(AUTH_KEY);
    const storedUser = localStorage.getItem(USER_KEY);
    
    if (storedToken && storedUser) {
      try {
        const parsedUser: Omit<User, 'token'> = JSON.parse(storedUser);
        // Reconstituir o objeto User completo (ou quase)
        setUser({ ...parsedUser, token: storedToken });
        setToken(storedToken);
      } catch (error) {
        console.error("Erro ao carregar dados do usuário do localStorage:", error);
        localStorage.removeItem(AUTH_KEY);
        localStorage.removeItem(USER_KEY);
      }
    }
    setIsLoading(false);
  }, []);

  // Simulação de Login com Google Auth
  const login = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      localStorage.setItem(AUTH_KEY, mockUser.token);
      // Armazenamos apenas dados não-sensíveis no USER_KEY
      localStorage.setItem(USER_KEY, JSON.stringify({ id: mockUser.id, name: mockUser.name, email: mockUser.email }));
      
      setUser(mockUser);
      setToken(mockUser.token);
      setIsLoading(false);
      
      window.history.pushState({}, '', '/prompt');
      window.dispatchEvent(new Event('popstate'));
    }, 1000); 
  }, []);

  // Logout
  const logout = useCallback(() => {
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(USER_KEY);
    setUser(null);
    setToken(null);
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new Event('popstate'));
  }, []);

  // Função de validação mock
  const validateAuth = useCallback((): boolean => {
    return !!token;
  }, [token]);

  return { user, token, isLoading, login, logout, validateAuth };
};

export default useAuth;