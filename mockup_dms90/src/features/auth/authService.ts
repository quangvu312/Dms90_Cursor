import type { AuthUser, ViewMode } from './types';

export const AUTH_STORAGE_KEY = 'dms90_auth_session';
export const SESSION_TTL_MS = 24 * 60 * 60 * 1000;

/** Display name cho current admin user (Web + SaleMan shared) */
export const ADMIN_DISPLAY_NAME = 'Vu_La';
const LEGACY_ADMIN_DISPLAY_NAMES = ['Qin Qin'];

const VALID_USERNAME = 'admin';
const VALID_PASSWORD = '123456';

interface StoredSession extends AuthUser {
  expiresAt: number;
}

function normalizeDisplayName(role: ViewMode | string | undefined, displayName?: string): string {
  if (role === 'admin' || !role) {
    if (!displayName || LEGACY_ADMIN_DISPLAY_NAMES.includes(displayName)) {
      return ADMIN_DISPLAY_NAME;
    }
    return displayName;
  }
  return displayName || 'NPP';
}

function readSession(): StoredSession | null {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return null;
    const session = JSON.parse(raw) as StoredSession;
    if (!session.expiresAt || Date.now() > session.expiresAt) {
      localStorage.removeItem(AUTH_STORAGE_KEY);
      return null;
    }
    const displayName = normalizeDisplayName(session.role, session.displayName);
    if (displayName !== session.displayName) {
      const migrated: StoredSession = { ...session, displayName };
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(migrated));
      return migrated;
    }
    return session;
  } catch {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    return null;
  }
}

export function getSession(): AuthUser | null {
  const session = readSession();
  if (!session) return null;
  return {
    username: session.username,
    role: session.role,
    displayName: session.displayName,
  };
}

export function isAuthenticated(): boolean {
  return getSession() !== null;
}

/** Seed session mock khi bypass Login (prototype) — không kiểm tra password. */
export function ensurePrototypeSession(role: ViewMode = 'admin'): AuthUser {
  const existing = getSession();
  if (existing) return existing;

  const user: AuthUser = {
    username: VALID_USERNAME,
    role,
    displayName: role === 'admin' ? ADMIN_DISPLAY_NAME : 'NPP',
  };
  const stored: StoredSession = {
    ...user,
    expiresAt: Date.now() + SESSION_TTL_MS,
  };
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(stored));
  return user;
}

export function login(username: string, password: string, role: ViewMode): { ok: true; user: AuthUser } | { ok: false; error: string } {
  const trimmed = username.trim();
  if (trimmed !== VALID_USERNAME || password !== VALID_PASSWORD) {
    return { ok: false, error: 'Tài khoản hoặc mật khẩu không đúng.' };
  }

  const user: AuthUser = {
    username: trimmed,
    role,
    displayName: role === 'admin' ? ADMIN_DISPLAY_NAME : 'NPP',
  };

  const stored: StoredSession = {
    ...user,
    expiresAt: Date.now() + SESSION_TTL_MS,
  };

  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(stored));
  return { ok: true, user };
}

export function logout(): void {
  localStorage.removeItem(AUTH_STORAGE_KEY);
}
