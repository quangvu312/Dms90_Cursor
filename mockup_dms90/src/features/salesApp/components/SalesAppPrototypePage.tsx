import { useEffect, useRef } from 'react';
import { Navigate, Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { ADMIN_DISPLAY_NAME, AUTH_STORAGE_KEY, SESSION_TTL_MS, getSession } from '../../auth/authService';
import { VisitCustomersPage } from './VisitCustomersPage';
import { MorePage } from './MorePage';
import { CustomerListPage } from './CustomerListPage';
import { CustomerDetailPage } from './CustomerDetailPage';
import { CreateCustomerPage } from './CreateCustomerPage';
import { SalesAppChrome } from './SalesAppChrome';
import { ReportsPage, ReportDetailPage } from './ReportsPage';
import { OrdersPage } from './OrdersPage';
import { SettingsPage } from './SettingsPage';
import { AppContractListPage } from './AppContractListPage';
import { AppContractDetailPage } from './AppContractDetailPage';
import { AppTellingStoryCatalogPage } from './AppTellingStoryCatalogPage';
import { AppTellingStoryListPage } from './AppTellingStoryListPage';
import { AppTellingStoryDetailPage } from './AppTellingStoryDetailPage';
import { AppPromotionListPage } from './AppPromotionListPage';
import { AppPromotionDetailPage } from './AppPromotionDetailPage';
import { AppDisplayListPage } from './AppDisplayListPage';
import { AppDisplayDetailPage } from './AppDisplayDetailPage';

/**
 * Hybrid runtime (không đổi UI Hand-off):
 * - Có component React Figma → render nguyên file đó
 * - Chưa có → fallback vanilla embed
 * - PhoneFrame cố định qua layout Outlet — không nhảy khi đổi menu
 */

function ensureSalesAppSession() {
  // Reuse / migrate shared auth session (Qin Qin → Vu_La nếu còn cache cũ)
  if (getSession()) return;
  localStorage.setItem(
    AUTH_STORAGE_KEY,
    JSON.stringify({
      username: 'admin',
      role: 'admin',
      displayName: ADMIN_DISPLAY_NAME,
      expiresAt: Date.now() + SESSION_TTL_MS,
    }),
  );
}

let embedScriptPromise: Promise<void> | null = null;

function loadEmbedScript(): Promise<void> {
  if (embedScriptPromise) return embedScriptPromise;
  embedScriptPromise = new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = '/scripts/embed-react.js?v=20260821-hybrid-figma';
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('Không tải được scripts/embed-react.js'));
    document.head.appendChild(s);
  });
  return embedScriptPromise;
}

async function renderVanillaSalesAppPage(
  host: HTMLElement,
  pathname: string,
  navigate: (path: string, opts?: { replace?: boolean }) => void,
) {
  ensureSalesAppSession();
  await loadEmbedScript();
  await window.__dmsEnsurePrototype?.();

  const router = window.DMSRouter;
  if (!router) throw new Error('DMSRouter chưa sẵn sàng');

  router.getPath = () => pathname;
  router.contentEl = host;

  router.navigate = (path: string, replace = false) => {
    const url = path.startsWith('/') ? path : `/${path}`;
    if (url.startsWith('/admin') || url === '/dashboard') {
      navigate(url.startsWith('/admin') ? url : '/admin/dashboard', { replace });
      return;
    }
    if (url === '/login' || url === '/sales-app/login') {
      navigate('/sales-app/login', { replace });
      return;
    }
    navigate(url, { replace });
  };

  router.handleRoute = async () => {
    const current = window.location.pathname + window.location.search;
    await renderVanillaSalesAppPage(host, current.split('?')[0], navigate);
  };

  const pathOnly = pathname.split('?')[0];
  const handler = router.resolveHandler?.(pathOnly);
  if (!handler) {
    host.innerHTML =
      window.DMS?.render('EmptyState', {
        title: '404 - Không tìm thấy trang',
        description: `Route "${pathOnly}" chưa được đăng ký.`,
      }) ?? '';
    return;
  }

  host.innerHTML = window.DMS?.render('Loading', { text: 'Đang tải...' }) ?? '';
  const html = await handler(pathOnly);
  host.innerHTML = html;
  if (typeof handler.onMount === 'function') {
    handler.onMount(host);
  }
  window.DMS?.bindFormControls?.(host);
}

/** Layout cố định — PhoneFrame không remount khi đổi route */
function FramedLayout() {
  return (
    <SalesAppChrome>
      <Outlet />
    </SalesAppChrome>
  );
}

/** Fallback vanilla — nhét vào PhoneFrame chung, ẩn chrome máy vanilla */
function VanillaFallback() {
  const hostRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const host = hostRef.current;
        if (!host) return;
        await renderVanillaSalesAppPage(host, location.pathname, navigate);
        if (cancelled) return;
      } catch (err) {
        if (!cancelled && hostRef.current) {
          hostRef.current.innerHTML = `<div class="p-6 text-red-600">${err instanceof Error ? err.message : String(err)}</div>`;
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [location.pathname, navigate]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest?.('[data-route]');
      if (!link || !host.contains(link)) return;
      e.preventDefault();
      e.stopPropagation();
      const route = link.getAttribute('data-route') || '';
      if (route === '/dashboard') {
        navigate('/admin/dashboard');
        return;
      }
      navigate(route);
    };
    host.addEventListener('click', onClick);
    return () => host.removeEventListener('click', onClick);
  }, [navigate, location.pathname]);

  return (
    <div
      ref={hostRef}
      className="sales-app-host sales-app-host--in-frame flex-1 min-h-0 w-full overflow-hidden"
    />
  );
}

export function SalesAppPrototypePage() {
  useEffect(() => {
    document.body.classList.add('is-sales-app');
    return () => document.body.classList.remove('is-sales-app');
  }, []);

  /* Warm-up embed nền — menu phụ (KM, thông báo…) mở nhanh hơn lần đầu */
  useEffect(() => {
    const t = window.setTimeout(() => {
      loadEmbedScript()
        .then(() => window.__dmsEnsurePrototype?.())
        .catch(() => {
          /* ignore warm-up errors */
        });
    }, 1200);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <Routes>
      <Route element={<FramedLayout />}>
        <Route index element={<Navigate to="vieng-tham" replace />} />

        {/* Hand-off Figma React — chỉ nội dung màn, frame ở layout */}
        <Route path="vieng-tham" element={<VisitCustomersPage />} />
        <Route path="khac" element={<MorePage />} />
        <Route path="cai-dat" element={<SettingsPage />} />
        <Route path="khach-hang" element={<CustomerListPage />} />
        <Route path="khach-hang/tao-moi" element={<CreateCustomerPage />} />
        <Route path="khach-hang/chi-tiet/:id" element={<CustomerDetailPage />} />
        <Route path="khach-hang/cham-soc/:id" element={<CustomerDetailPage />} />

        {/* Tab chính — React ngay, không chờ embed portal */}
        <Route path="bao-cao" element={<ReportsPage />} />
        <Route path="bao-cao/:slug" element={<ReportDetailPage />} />
        <Route path="don-hang" element={<OrdersPage />} />
        <Route path="hop-dong" element={<AppContractListPage />} />
        <Route path="hop-dong/:id" element={<AppContractDetailPage />} />
        <Route path="telling-story" element={<AppTellingStoryCatalogPage />} />
        <Route path="telling-story/:catalogId" element={<AppTellingStoryListPage />} />
        <Route path="telling-story/:catalogId/:storyId" element={<AppTellingStoryDetailPage />} />
        <Route path="khuyen-mai" element={<AppPromotionListPage />} />
        <Route path="khuyen-mai/:id" element={<AppPromotionDetailPage />} />
        <Route path="trung-bay" element={<AppDisplayListPage />} />
        <Route path="trung-bay/:id" element={<AppDisplayDetailPage />} />

        {/* Menu phụ / deep link chưa port → vanilla (preload nền) */}
        <Route path="*" element={<VanillaFallback />} />
      </Route>
    </Routes>
  );
}
