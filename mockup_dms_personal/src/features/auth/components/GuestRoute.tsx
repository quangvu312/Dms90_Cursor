import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../authService';

type Props = {
  children: React.ReactNode;
  /** Đã đăng nhập thì chuyển về đây (portal dashboard hoặc SM viếng thăm) */
  homePath?: string;
};

export function GuestRoute({ children, homePath = '/admin/dashboard' }: Props) {
  if (isAuthenticated()) {
    return <Navigate to={homePath} replace />;
  }

  return <>{children}</>;
}
