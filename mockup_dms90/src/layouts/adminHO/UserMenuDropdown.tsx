import { useEffect, useRef, useState } from 'react';
import {
  Download,
  FileText,
  History,
  KeyRound,
  LogOut,
  RefreshCw,
  Upload,
} from 'lucide-react';
import { BUILD_INFO, formatBuildInfoLabel } from '../../config/buildInfo';

interface UserMenuDropdownProps {
  userName: string;
  onLogout: () => void;
}

const MENU_ITEMS = [
  { id: 'sync-history', label: 'Lịch sử đồng bộ', icon: RefreshCw },
  { id: 'activity-history', label: 'Lịch sử hoạt động', icon: History },
  { id: 'import-progress', label: 'Tiến trình Import', icon: Upload },
  { id: 'export-history', label: 'Lịch sử export', icon: Download },
  { id: 'report-files', label: 'File báo cáo', icon: FileText },
  { id: 'change-password', label: 'Đổi mật khẩu', icon: KeyRound },
  { id: 'logout', label: 'Thoát', icon: LogOut },
] as const;

export function UserMenuDropdown({ userName, onLogout }: UserMenuDropdownProps) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const initial = userName.trim().charAt(0).toUpperCase() || 'U';

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const handleItemClick = (id: (typeof MENU_ITEMS)[number]['id']) => {
    if (id === 'logout') {
      setOpen(false);
      onLogout();
      return;
    }
    setOpen(false);
  };

  return (
    <div className="dms-header__user-wrap" ref={wrapRef}>
      <button
        type="button"
        className="dms-header__user-trigger"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="dms-avatar dms-avatar--header dms-avatar--circle">{initial}</span>
        <span className="dms-header__username">{userName}</span>
      </button>

      {open ? (
        <div className="dms-header__user-menu" role="menu" aria-label="Menu người dùng">
          {MENU_ITEMS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              role="menuitem"
              className={`dms-header__user-menu-item${id === 'logout' ? ' is-logout' : ''}`}
              onClick={() => handleItemClick(id)}
            >
              <Icon className="dms-header__user-menu-icon" aria-hidden="true" />
              <span>{label}</span>
            </button>
          ))}
          <div className="dms-header__user-menu-build">
            <span>{BUILD_INFO.environment}</span>
            <span>{formatBuildInfoLabel()}</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
