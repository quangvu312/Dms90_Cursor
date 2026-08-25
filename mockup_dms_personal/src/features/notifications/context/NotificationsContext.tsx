import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { MOCK_NOTIFICATIONS } from '../mockData';
import type { NotificationItem, NotificationTabKey } from '../types';

interface NotificationsContextValue {
  notifications: NotificationItem[];
  unreadCount: number;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  getByTab: (tab: NotificationTabKey) => NotificationItem[];
}

const NotificationsContext = createContext<NotificationsContextValue | null>(null);

export function NotificationsProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState<NotificationItem[]>(MOCK_NOTIFICATIONS);

  const markAsRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, unread: false } : n)));
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  const getByTab = (tab: NotificationTabKey) => notifications.filter((n) => n.tab === tab);

  const unreadCount = useMemo(() => notifications.filter((n) => n.unread).length, [notifications]);

  const value: NotificationsContextValue = {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    getByTab,
  };

  return <NotificationsContext.Provider value={value}>{children}</NotificationsContext.Provider>;
}

export function useNotifications() {
  const ctx = useContext(NotificationsContext);
  if (!ctx) throw new Error('useNotifications phải được dùng bên trong NotificationsProvider');
  return ctx;
}
