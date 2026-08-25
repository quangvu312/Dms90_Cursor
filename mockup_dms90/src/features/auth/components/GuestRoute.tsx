import { Navigate } from 'react-router-dom';
import { AUTH_CONFIG } from '../authConfig';
import { ensurePrototypeSession, isAuthenticated } from '../authService';

type Props = {
  children: React.ReactNode;
  /** Đã đăng nhập thì chuyển về đây (portal dashboard hoặc SM viếng thăm) */
  homePath?: string;
};

export function GuestRoute({ children, homePath = '/admin/dashboard' }: Props) {
  if (!AUTH_CONFIG.enableLogin) {
    ensurePrototypeSession('admin');
    return <Navigate to={homePath} replace />;
  }

  if (isAuthenticated()) {
    return <Navigate to={homePath} replace />;
  }

  return <>{children}</>;
}
