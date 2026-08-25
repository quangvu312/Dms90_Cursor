import { useState } from 'react';
import { CheckCheck } from 'lucide-react';
import { useNotifications } from '../context/NotificationsContext';
import { NotificationListItem } from './NotificationListItem';
import type { NotificationItem, NotificationTabKey } from '../types';

interface NotificationDropdownProps {
  onSelect: (item: NotificationItem) => void;
  onViewAll: () => void;
}

const TABS: { key: NotificationTabKey; label: string }[] = [
  { key: 'chung', label: 'Chung' },
  { key: 'khuyenmai', label: 'Khuyến mãi' },
];

export function NotificationDropdown({ onSelect, onViewAll }: NotificationDropdownProps) {
  const { unreadCount, markAllAsRead, getByTab } = useNotifications();
  const [tab, setTab] = useState<NotificationTabKey>('chung');

  const items = getByTab(tab);

  return (
    <div className="absolute right-0 top-full z-50 mt-2 w-[360px] overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pb-3 pt-4">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-bold text-slate-800">Thông báo</h3>
          <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-semibold text-blue-700">
            {unreadCount} chưa đọc
          </span>
        </div>
        <button
          onClick={markAllAsRead}
          className="flex items-center gap-1 text-[11px] font-medium text-slate-500 transition-colors hover:text-blue-700"
        >
          <CheckCheck className="h-3 w-3" />
          Đánh dấu đọc tất cả
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-100 px-4">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`mr-5 border-b-2 px-1 pb-2.5 text-xs font-semibold transition-colors ${
              tab === t.key ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Danh sách thông báo */}
      <div className="max-h-[360px] overflow-y-auto">
        {items.length === 0 ? (
          <div className="py-10 text-center text-xs text-slate-400">Không có thông báo</div>
        ) : (
          items.map((item) => (
            <NotificationListItem key={item.id} item={item} onClick={() => onSelect(item)} />
          ))
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-slate-100 p-3">
        <button
          onClick={onViewAll}
          className="w-full rounded-lg bg-slate-900 py-2 text-xs font-bold tracking-wide text-white transition-colors hover:bg-slate-800"
        >
          XEM TẤT CẢ THÔNG BÁO
        </button>
      </div>
    </div>
  );
}
