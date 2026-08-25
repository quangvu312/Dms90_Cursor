export type ViewMode = 'admin' | 'npp';

export interface LoginForm {
  username: string;
  password: string;
}

export interface AuthUser {
  username: string;
  role: ViewMode;
  displayName: string;
}
