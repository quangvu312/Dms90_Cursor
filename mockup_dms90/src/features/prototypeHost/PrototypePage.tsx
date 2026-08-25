import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { adminPathToProto, protoPathToAdmin } from './routeMap';

declare global {
  interface Window {
    __dmsEnsurePrototype?: () => Promise<void>;
    __dmsRenderPrototypePage?: (
      protoPath: string,
      contentEl: HTMLElement,
      search?: string,
    ) => Promise<void>;
    DMSRouter?: {
      navigate: (path: string, replace?: boolean) => void;
      handleRoute?: () => void | Promise<void>;
      resolveHandler?: (path: string) => ((path: string) => string | Promise<string>) & {
        onMount?: (el: HTMLElement) => void;
      };
      getPath?: () => string;
      contentEl?: HTMLElement | null;
    };
    DMS?: {
      render: (name: string, props?: Record<string, unknown>) => string;
      bindFormControls?: (root: ParentNode) => void;
    };
  }
}

let embedScriptPromise: Promise<void> | null = null;

function loadEmbedScript(): Promise<void> {
  if (embedScriptPromise) return embedScriptPromise;
  embedScriptPromise = new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = '/scripts/embed-react.js?v=20260821-contract-merge';
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('Không tải được scripts/embed-react.js'));
    document.head.appendChild(s);
  });
  return embedScriptPromise;
}

async function renderPrototypeContent(
  protoPath: string,
  host: HTMLElement,
  search: string,
) {
  await loadEmbedScript();
  await window.__dmsEnsurePrototype?.();
  await window.__dmsRenderPrototypePage?.(protoPath, host, search);
}

export function PrototypePage({ protoPath }: { protoPath: string }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const locationRef = useRef(location);
  locationRef.current = location;
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const rerender = async () => {
      const host = hostRef.current;
      if (!host || cancelled) return;
      try {
        await renderPrototypeContent(protoPath, host, locationRef.current.search);
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : String(err));
      }
    };

    (async () => {
      try {
        await loadEmbedScript();
        await window.__dmsEnsurePrototype?.();
        if (window.DMSRouter) {
          window.DMSRouter.contentEl = hostRef.current;
          window.DMSRouter.getPath = () => protoPath.split('?')[0];
          window.DMSRouter.navigate = (path: string, replace?: boolean) => {
            const [p, q] = path.split('?');
            const admin = protoPathToAdmin(p);
            const target = q ? `${admin}?${q}` : admin;
            const current = locationRef.current.pathname + locationRef.current.search;
            if (target === current) {
              void rerender();
              return;
            }
            navigate(target, { replace });
          };
          window.DMSRouter.handleRoute = () => {
            void rerender();
          };
        }
        if (cancelled || !hostRef.current) return;
        await renderPrototypeContent(protoPath, hostRef.current, location.search);
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : String(err));
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [protoPath, location.search, navigate]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest?.('[data-route]');
      if (!link) return;
      e.preventDefault();
      e.stopPropagation();
      const route = link.getAttribute('data-route') || '';
      const [p, q] = route.split('?');
      const admin = protoPathToAdmin(p);
      navigate(q ? `${admin}?${q}` : admin);
    };
    host.addEventListener('click', onClick);
    return () => host.removeEventListener('click', onClick);
  });

  if (error) {
    return (
      <div className="dms-card">
        <div className="dms-card__body">
          <p>Không tải được page Prototype.</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return <div ref={hostRef} id="dms-content" />;
}

export function PrototypeSplatPage() {
  const params = useParams();
  const splat = params['*'] || '';
  return <PrototypePage protoPath={`/${splat}`} />;
}

export function MappedPrototypePage() {
  const location = useLocation();
  const proto = adminPathToProto(location.pathname);
  if (!proto) {
    return (
      <div className="dms-card">
        <div className="dms-card__body">Tính năng đang phát triển vui lòng quay trở lại</div>
      </div>
    );
  }
  return <PrototypePage protoPath={proto} />;
}
