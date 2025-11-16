/* eslint-disable react-refresh/only-export-components */
import { createContext, use, useEffect, useState } from 'react';
import { sleep } from './utils';

export interface AuthContext {
  isAuthenticated: boolean;
  login: (email: string) => Promise<void>;
  logout: () => Promise<void>;
  user: string | null;
}

const AuthContext = createContext<AuthContext | null>(null);

const key = 'tanstack.auth.user';

function getStoredUser() {
  return localStorage.getItem(key);
}

function setStoredUser(user: string | null) {
  if (user) {
    localStorage.setItem(key, user);
  } else {
    localStorage.removeItem(key);
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<string | null>(getStoredUser());
  const isAuthenticated = !!user;

  const logout = async () => {
    await sleep(250);
    setStoredUser(null);
    setUser(null);
  };

  const login = async (email: string) => {
    await sleep(500);
    setStoredUser(email);
    setUser(email);
  };
  useEffect(() => {
    setUser(getStoredUser());
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = use(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
