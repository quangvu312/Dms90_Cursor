import { Navigate, useLocation } from 'react-router-dom';
import { AUTH_CONFIG } from '../authConfig';
import { ensurePrototypeSession, isAuthenticated } from '../authService';

type Props = {
  children: React.ReactNode;
  /** Mặc định: theo prefix path — SM → /sales-app/login, còn lại → /login portal */
  loginPath?: string;
};

export function ProtectedRoute({ children, loginPath }: Props) {
  const location = useLocation();

  if (!AUTH_CONFIG.enableLogin) {
    ensurePrototypeSession('admin');
    return <>{children}</>;
  }

  if (!isAuthenticated()) {
    const to =
      loginPath ??
      (location.pathname.startsWith('/sales-app') ? '/sales-app/login' : '/login');
    return <Navigate to={to} replace state={{ from: location.pathname }} />;
  }

  return <>{children}</>;
}
