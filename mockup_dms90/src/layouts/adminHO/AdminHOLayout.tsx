import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { NotificationsProvider } from '../../features/notifications/context/NotificationsContext';
import { formatFooterBuildInfo } from '../../config/buildInfo';

export function AdminHOLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <NotificationsProvider>
      <div className="dms-app">
        <Header onToggleSidebar={() => setCollapsed((v) => !v)} />
        <div className="dms-app__body">
          <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((v) => !v)} />
          <div className="dms-main">
            <main className="dms-content">
              <Outlet />
            </main>
            <footer className="dms-footer">
              <a href="#">Powered by FinViet</a>
              <div className="dms-footer__meta">{formatFooterBuildInfo()}</div>
            </footer>
          </div>
        </div>
      </div>
    </NotificationsProvider>
  );
}
