/**
 * Bootstrap Prototype pages inside React (no MainLayout).
 * Style + component DMS là nguồn gốc.
 */
(function () {
  'use strict';

  const COMPONENT_SCRIPTS = [
    'Button', 'Input', 'Textarea', 'Select', 'MultiSelect', 'DatePicker',
    'Checkbox', 'Radio', 'Switch', 'Tag', 'StatusTag', 'Badge', 'Avatar',
    'Table', 'Pagination', 'Card', 'Breadcrumb', 'SearchBox', 'FilterPanel',
    'EmptyState', 'Loading', 'Spinner', 'Modal', 'Dialog', 'Toast', 'Notification',
    'Tabs', 'Collapse', 'Menu', 'Sidebar', 'Header', 'Tree', 'TreeSelect', 'Tooltip', 'DonutChart',
    'ActionIconButton', 'FilePreviewModal', 'RichTextEditor'
  ];

  const PAGE_SCRIPTS = [
    'layouts/main-layout.js',
    'pages/dashboard/page.js',
    'scripts/sale-order-shared.js',
    'pages/sale-order/page.js',
    'pages/sale-summary/page.js',
    'scripts/kpi-shared.js',
    'pages/kpi/page.js',
    'scripts/inventory-shared.js',
    'pages/inventory/page.js',
    'scripts/product-shared.js',
    'pages/product-list/page.js',
    'pages/product-detail/page.js',
    'pages/product-create/page.js',
    'pages/product-edit/page.js',
    'pages/product-category/page.js',
    'pages/product-uom/page.js',
    'pages/product-group/page.js',
    'scripts/selling-price-shared.js',
    'pages/selling-price/page.js',
    'pages/selling-price-create/page.js',
    'scripts/business-shared.js',
    'pages/business-company/page.js',
    'pages/business-channel/page.js',
    'pages/business-unit/page.js',
    'pages/business-store-type/page.js',
    'pages/business/store-rank/page.js',
    'pages/business/store-location/page.js',
    'pages/business-store-group/page.js',
    'pages/business-store-group-detail/page.js',
    'pages/business-store-list/page.js',
    'pages/business-store-create/page.js',
    'pages/business-store-edit/page.js',
    'pages/business-distributor/page.js',
    'pages/business-distributor-create/page.js',
    'pages/business-distributor-edit/page.js',
    'pages/business-employee/page.js',
    'pages/business-employee-create/page.js',
    'pages/business-employee-edit/page.js',
    'scripts/report-shared.js',
    'pages/report/sale/selling-order/page.js',
    'pages/report/sale/product-revenue/page.js',
    'pages/report/sale/customer-revenue/page.js',
    'pages/report/sale/salesman-revenue/page.js',
    'pages/report/sale/return-order/page.js',
    'scripts/sales-route-shared.js',
    'pages/sales-route/page.js',
    'scripts/promotion-shared.js',
    'pages/promotion/page.js',
    'scripts/display-shared.js',
    'pages/display/page.js',
    'scripts/accumulate-shared.js',
    'pages/accumulate/page.js',
    'scripts/survey-shared.js',
    'pages/survey/page.js',
    'scripts/support-shared.js',
    'pages/support/page.js',
    'scripts/notification-shared.js',
    'pages/notification/page.js',
    'scripts/system-shared.js',
    'pages/system/page.js',
    'scripts/contract-shared.js',
    'pages/contract/page.js',
    'scripts/telling-story-shared.js',
    'pages/telling-story/page.js',
    'scripts/sales-app-shared.js',
    'scripts/sales-app/sa-registry.js',
    'scripts/sales-app/sa-icons.js',
    'scripts/sales-app/sa-components.js',
    'scripts/sales-app/sa-screens.js',
    'scripts/sales-app/sa-visit.js',
    'scripts/sales-app/sa-order.js',
    'pages/sales-app/page.js',
    'router/router.js'
  ];

  function toAbs(src) {
    if (!src || typeof src !== 'string') return src;
    if (/^(https?:)?\/\//.test(src) || src.charAt(0) === '/' || src.indexOf('data:') === 0) return src;
    return '/' + src.replace(/^\.\//, '');
  }

  function patchFetch() {
    if (window.__dmsFetchPatched) return;
    window.__dmsFetchPatched = true;
    const orig = window.fetch.bind(window);
    window.fetch = function (input, init) {
      if (typeof input === 'string') input = toAbs(input);
      return orig(input, init);
    };
  }

  function loadScript(src) {
    src = toAbs(src);
    return new Promise(function (resolve, reject) {
      const existing = document.querySelector('script[data-dms-src="' + src + '"]');
      if (existing) {
        if (existing.dataset.loaded === '1') {
          resolve();
          return;
        }
        existing.addEventListener('load', resolve);
        existing.addEventListener('error', reject);
        return;
      }
      const s = document.createElement('script');
      s.dataset.dmsSrc = src;
      s.src = src + (src.indexOf('?') >= 0 ? '&' : '?') + 'v=20260820-visit-icons';
      s.onload = function () {
        s.dataset.loaded = '1';
        resolve();
      };
      s.onerror = function () { reject(new Error('Failed to load ' + src)); };
      document.head.appendChild(s);
    });
  }

  async function loadAll() {
    patchFetch();
    await loadScript('/scripts/component-core.js');
    await loadScript('/scripts/status-config.js');
    for (let i = 0; i < COMPONENT_SCRIPTS.length; i++) {
      await loadScript('/components/' + COMPONENT_SCRIPTS[i] + '/script.js');
    }
    for (let j = 0; j < PAGE_SCRIPTS.length; j++) {
      await loadScript(PAGE_SCRIPTS[j]);
    }
  }

  function bindChromeEvents() {
    if (window.__dmsChromeBound) return;
    window.__dmsChromeBound = true;
    document.addEventListener('click', function (e) {
      const tab = e.target.closest('.dms-tabs__tab');
      if (tab) {
        const tabs = tab.closest('.dms-tabs');
        tabs.querySelectorAll('.dms-tabs__tab').forEach(function (t) { t.classList.remove('is-active'); });
        tabs.querySelectorAll('.dms-tabs__panel').forEach(function (p) { p.classList.add('is-hidden'); });
        tab.classList.add('is-active');
        const panel = tabs.querySelector('[data-panel="' + tab.dataset.tab + '"]');
        if (panel) panel.classList.remove('is-hidden');
      }
      const collapseHeader = e.target.closest('.dms-collapse__header');
      if (collapseHeader) {
        collapseHeader.closest('.dms-collapse__item').classList.toggle('is-open');
      }
      const expandBtn = e.target.closest('[data-action="filter-expand"]');
      if (expandBtn) {
        const panel = expandBtn.closest('.dms-filter-panel');
        if (panel) {
          panel.classList.toggle('is-collapsed');
          const isCollapsed = panel.classList.contains('is-collapsed');
          expandBtn.textContent = isCollapsed ? 'Mở rộng' : 'Thu gọn';
        }
      }
    });
  }

  window.__dmsEnsurePrototype = async function () {
    if (window.__dmsPrototypeReady) return window.__dmsPrototypeReady;
    window.__dmsPrototypeReady = (async function () {
      await loadAll();
      const res = await fetch('/data/route.json?v=20260821-telling-story');
      const routeData = await res.json();
      routeData.routes.forEach(function (r) {
        if (typeof window[r.handler] === 'function') {
          window.DMSRouter.register(r.path, window[r.handler]);
        }
      });
      bindChromeEvents();
      if (window.DMS && window.DMS.get('Tooltip')) {
        window.DMS.get('Tooltip').init();
      }
    })();
    return window.__dmsPrototypeReady;
  };

  window.__dmsRenderPrototypePage = async function (protoPath, contentEl, search) {
    await window.__dmsEnsurePrototype();
    const pathOnly = protoPath.split('?')[0];
    const query = search || (protoPath.indexOf('?') >= 0 ? protoPath.slice(protoPath.indexOf('?')) : '');
    const hash = '#' + pathOnly + query;
    if (location.hash !== hash) {
      history.replaceState(history.state, '', location.pathname + location.search + hash);
    }
    const handler = window.DMSRouter.resolveHandler(pathOnly);
    if (!handler) {
      contentEl.innerHTML = window.DMS.render('EmptyState', {
        title: '404 - Không tìm thấy trang',
        description: 'Route "' + pathOnly + '" chưa được đăng ký.'
      });
      return;
    }
    contentEl.innerHTML = window.DMS.render('Loading', { text: 'Đang tải...' });
    const html = await handler(pathOnly);
    contentEl.innerHTML = html;
    if (typeof handler.onMount === 'function') {
      handler.onMount(contentEl);
    }
    if (window.DMS && typeof window.DMS.bindFormControls === 'function') {
      window.DMS.bindFormControls(contentEl);
    }
  };
})();
