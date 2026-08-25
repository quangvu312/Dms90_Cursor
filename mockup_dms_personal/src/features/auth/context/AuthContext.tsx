import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { AuthUser, ViewMode } from '../types';
import { AUTH_STORAGE_KEY, getSession, login as authLogin, logout as authLogout } from '../authService';

interface AuthContextValue {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (username: string, password: string, role: ViewMode) => { ok: true } | { ok: false; error: string };
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function notifyAuthChange() {
  window.dispatchEvent(new Event('dms90:auth-change'));
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => getSession());

  useEffect(() => {
    const sync = () => setUser(getSession());
    window.addEventListener('dms90:auth-change', sync);
    window.addEventListener('storage', (e) => {
      if (e.key === AUTH_STORAGE_KEY) sync();
    });
    const interval = window.setInterval(sync, 60_000);
    return () => {
      window.removeEventListener('dms90:auth-change', sync);
      window.clearInterval(interval);
    };
  }, []);

  const login = useCallback((username: string, password: string, role: ViewMode) => {
    const result = authLogin(username, password, role);
    if (!result.ok) return result;
    setUser(result.user);
    notifyAuthChange();
    return { ok: true as const };
  }, []);

  const logout = useCallback(() => {
    authLogout();
    setUser(null);
    notifyAuthChange();
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: user !== null,
      login,
      logout,
    }),
    [user, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth phải dùng trong AuthProvider');
  return ctx;
}
