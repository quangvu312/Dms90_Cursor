import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { adminHOMenu, type MenuItem, type Level2Item } from './menuConfig';
import { isAdminRouteEnabled } from '../../features/prototypeHost/routeMap';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const DEV_NOTICE_MESSAGE = 'Tính năng đang phát triển vui lòng quay trở lại';

function findInitialL1(pathname: string): string | null {
  for (const l1 of adminHOMenu) {
    if (!l1.children) continue;
    for (const l2 of l1.children) {
      if (pathname.includes(l2.key)) return l1.key;
      if (l2.children?.some((l3) => pathname.includes(l3.key))) return l1.key;
    }
  }
  return null;
}

function findInitialL2(pathname: string): string | null {
  for (const l1 of adminHOMenu) {
    if (!l1.children) continue;
    for (const l2 of l1.children) {
      if (l2.children?.some((l3) => pathname.includes(l3.key))) {
        return `${l1.key}|${l2.key}`;
      }
    }
  }
  return null;
}

interface Level3ListProps {
  l2: Level2Item;
  l1Key: string;
  onLockedClick: () => void;
}

function Level3List({ l2, l1Key, onLockedClick }: Level3ListProps) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <ul className="dms-menu__submenu" style={{ maxHeight: 1200 }}>
      {l2.children!.map((l3) => {
        const isActive = location.pathname.includes(l3.key);
        const routeKey = `${l1Key}/${l2.key}/${l3.key}`;
        const isDeveloped = isAdminRouteEnabled(routeKey);
        return (
          <li key={l3.key} className={`dms-menu__item${isActive ? ' is-active' : ''}`}>
            <button
              type="button"
              className="dms-menu__link"
              onClick={() => (isDeveloped ? navigate(`/admin/${routeKey}`) : onLockedClick())}
            >
              <span className="dms-menu__label">{l3.label}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

interface Level2ListProps {
  l1: MenuItem;
  openL2: string | null;
  onL2Toggle: (key: string) => void;
  onLockedClick: () => void;
}

function Level2List({ l1, openL2, onL2Toggle, onLockedClick }: Level2ListProps) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <ul className="dms-menu__submenu" style={{ maxHeight: 1200 }}>
      {l1.children!.map((l2) => {
        const l2CompositeKey = `${l1.key}|${l2.key}`;
        const hasL3 = !!l2.children?.length;
        const routeKey = `${l1.key}/${l2.key}`;
        const isDeveloped = !hasL3 && isAdminRouteEnabled(routeKey);
        const isL2Open = openL2 === l2CompositeKey;
        const isL2DirectActive = !hasL3 && location.pathname.includes(l2.key);

        return (
          <li
            key={l2.key}
            className={`dms-menu__item${isL2DirectActive ? ' is-active' : ''}${isL2Open ? ' is-expanded' : ''}`}
          >
            <button
              type="button"
              className={hasL3 ? 'dms-menu__toggle' : 'dms-menu__link'}
              onClick={() => {
                if (hasL3) onL2Toggle(l2CompositeKey);
                else if (isDeveloped) navigate(`/admin/${routeKey}`);
                else onLockedClick();
              }}
            >
              <span className="dms-menu__label">{l2.label}</span>
              {hasL3 && (
                <span className="dms-menu__arrow">
                  <ChevronDown className="dms-menu__arrow-icon h-2.5 w-2.5" />
                </span>
              )}
            </button>
            {hasL3 && isL2Open && (
              <Level3List l2={l2} l1Key={l1.key} onLockedClick={onLockedClick} />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [openL1, setOpenL1] = useState<string | null>(() => findInitialL1(location.pathname));
  const [openL2, setOpenL2] = useState<string | null>(() => findInitialL2(location.pathname));
  const [showDevNotice, setShowDevNotice] = useState(false);

  useEffect(() => {
    setOpenL1(findInitialL1(location.pathname));
    setOpenL2(findInitialL2(location.pathname));
  }, [location.pathname]);

  useEffect(() => {
    if (!showDevNotice) return;
    const timer = window.setTimeout(() => setShowDevNotice(false), 2500);
    return () => window.clearTimeout(timer);
  }, [showDevNotice]);

  const handleL1Toggle = (key: string) => {
    if (collapsed) return;
    const next = openL1 === key ? null : key;
    setOpenL1(next);
    if (next !== openL1) setOpenL2(null);
  };

  const handleL2Toggle = (compositeKey: string) => {
    setOpenL2((prev) => (prev === compositeKey ? null : compositeKey));
  };

  return (
    <>
      <aside className={`dms-sidebar${collapsed ? ' is-collapsed' : ''}`} id="dms-sidebar">
        <nav className="dms-sidebar__menu">
          <ul className="dms-menu">
            {adminHOMenu.map((l1) => {
              const Icon = l1.icon;
              const hasL2 = !!l1.children?.length;
              const isL1Open = openL1 === l1.key;
              const isL1Active = location.pathname.includes(l1.key);
              const isL1DirectActive = !hasL2 && (isL1Active || (l1.key === 'app-saleman' && location.pathname.startsWith('/sales-app')));

              return (
                <li
                  key={l1.key}
                  className={`dms-menu__item${isL1DirectActive ? ' is-active' : ''}${isL1Open ? ' is-expanded' : ''}`}
                >
                  <button
                    type="button"
                    className={hasL2 ? 'dms-menu__toggle' : 'dms-menu__link'}
                    title={collapsed ? l1.label : undefined}
                    onClick={() => {
                      if (l1.key === 'app-saleman') navigate('/sales-app');
                      else if (hasL2) handleL1Toggle(l1.key);
                      else navigate(`/admin/${l1.key}`);
                    }}
                  >
                    <span className="dms-menu__icon">
                      <Icon />
                    </span>
                    <span className="dms-menu__label">{l1.label}</span>
                    {hasL2 && (
                      <span className="dms-menu__arrow">
                        <ChevronDown className="dms-menu__arrow-icon h-2.5 w-2.5" />
                      </span>
                    )}
                  </button>
                  {!collapsed && isL1Open && hasL2 && (
                    <Level2List
                      l1={l1}
                      openL2={openL2}
                      onL2Toggle={handleL2Toggle}
                      onLockedClick={() => setShowDevNotice(true)}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
        <button
          type="button"
          className="dms-sidebar__collapse-btn"
          title={collapsed ? 'Mở rộng' : 'Thu gọn'}
          onClick={onToggle}
        >
          {collapsed ? '›' : '‹'}
        </button>
      </aside>
      {showDevNotice && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-md bg-[rgba(0,0,0,0.85)] px-4 py-2.5 text-[13px] text-white">
          {DEV_NOTICE_MESSAGE}
        </div>
      )}
    </>
  );
}
