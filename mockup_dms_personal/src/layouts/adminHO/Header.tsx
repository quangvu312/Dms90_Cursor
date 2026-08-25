import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../features/auth/context/AuthContext';
import { UserMenuDropdown } from './UserMenuDropdown';

interface HeaderProps {
  onToggleSidebar?: () => void;
}

const ICONS = {
  menu: (
    <svg viewBox="64 64 896 896" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
    </svg>
  ),
  upload: (
    <svg viewBox="64 64 896 896" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 138.8a8.03 8.03 0 00-12.6 0L393.7 304.8c-4.1 5.2-.4 12.9 6.3 12.9zm448 157.3h-60c-4.4 0-8 3.6-8 8v201.6H244V483c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v273.9c0 14.1 11.5 25.6 25.6 25.6h616.8c14.1 0 25.6-11.5 25.6-25.6V483c0-4.4-3.6-8-8-8z" />
    </svg>
  ),
  download: (
    <svg viewBox="64 64 896 896" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V176c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v330.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" />
    </svg>
  ),
  bell: (
    <svg viewBox="64 64 896 896" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.9 50.1 112 112 112s112-50.1 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48z" />
    </svg>
  ),
  global: (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="8" cy="8" rx="2.5" ry="6.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

export function Header({ onToggleSidebar }: HeaderProps) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const role = user?.role === 'admin' ? 'Admin' : 'NPP';
  const userName = user?.displayName ?? 'Qin Qin';

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true }); // Portal → login portal
  };

  return (
    <header className="dms-header">
      <div className="dms-header__left">
        <button
          type="button"
          className="dms-header__icon-btn dms-header__menu-btn"
          title="Menu"
          aria-label="Menu"
          onClick={onToggleSidebar}
        >
          {ICONS.menu}
        </button>
        <span className="dms-header__logo">
          <img src="/assets/eco-dms-logo.svg" width="150" height="45" alt="ECOdms" />
        </span>
      </div>
      <div className="dms-header__right">
        <span className="dms-header__role">Vai trò: {role}</span>
        <div className="dms-header__actions">
          <button type="button" className="dms-header__icon-btn" title="Tải lên" aria-label="Tải lên">
            {ICONS.upload}
          </button>
          <button type="button" className="dms-header__icon-btn" title="Tải xuống" aria-label="Tải xuống">
            {ICONS.download}
          </button>
          <button type="button" className="dms-header__icon-btn" title="Thông báo" aria-label="Thông báo">
            {ICONS.bell}
          </button>
          <button type="button" className="dms-header__icon-btn" title="Ngôn ngữ" aria-label="Ngôn ngữ">
            {ICONS.global}
          </button>
          <UserMenuDropdown userName={userName} onLogout={handleLogout} />
        </div>
      </div>
    </header>
  );
}
