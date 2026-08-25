import { useEffect, useRef, useState } from 'react';
import { Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useNotifications } from '../context/NotificationsContext';
import { NotificationDropdown } from './NotificationDropdown';
import { NotificationModal } from './NotificationModal';
import type { NotificationItem } from '../types';

export function NotificationBell() {
  const { unreadCount, markAsRead } = useNotifications();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<NotificationItem | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const handleSelect = (item: NotificationItem) => {
    markAsRead(item.id);
    setSelected(item);
  };

  const badgeLabel = unreadCount > 99 ? '99+' : String(unreadCount);

  return (
    <div className="relative" ref={wrapRef}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="dms-header__icon-btn relative"
        title="Thông báo"
      >
        <Bell className="h-4 w-4" />
        {unreadCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold leading-none text-white">
            {badgeLabel}
          </span>
        )}
      </button>

      {open && (
        <NotificationDropdown
          onSelect={handleSelect}
          onViewAll={() => {
            setOpen(false);
            navigate('/admin/quan-ly-thong-bao/lich-su-thong-bao');
          }}
        />
      )}

      {selected && <NotificationModal notification={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
