import type { ReactNode } from 'react';
import { PhoneFrame } from './PhoneFrame';

/**
 * Khung phone cố định — mọi màn React/vanilla fallback dùng chung
 * để không đổi frame khi chuyển menu.
 */
export function SalesAppChrome({
  children,
  statusTime = '9:41',
  battery = '69',
}: {
  children: ReactNode;
  statusTime?: string;
  battery?: string;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 py-10">
      <PhoneFrame statusTime={statusTime} battery={battery}>
        {children}
      </PhoneFrame>
    </div>
  );
}
