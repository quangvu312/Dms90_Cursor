/**
 * DMS Prototype - Main Application
 */
(function () {
  'use strict';

  const COMPONENT_SCRIPTS = [
    'Button', 'Input', 'Textarea', 'Select', 'MultiSelect', 'DatePicker',
    'Checkbox', 'Radio', 'Switch', 'Tag', 'StatusTag', 'Badge', 'Avatar',
    'Table', 'Pagination', 'Card', 'Breadcrumb', 'SearchBox', 'FilterPanel',
    'EmptyState', 'Loading', 'Spinner', 'Modal', 'Dialog', 'Toast', 'Notification',
    'Tabs', 'Collapse', 'Menu', 'Sidebar', 'Header', 'Tree', 'TreeSelect', 'Tooltip', 'DonutChart', 'ActionIconButton', 'FilePreviewModal', 'RichTextEditor'
  ];

  async function loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src + (src.includes('?') ? '&' : '?') + 'v=20260821-ctph';
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  async function loadAllScripts() {
    await loadScript('scripts/component-core.js');
    await loadScript('scripts/status-config.js');
    await loadScript('layouts/main-layout.js');
    for (const name of COMPONENT_SCRIPTS) {
      await loadScript(`components/${name}/script.js`);
    }
    await loadScript('pages/dashboard/page.js');
    await loadScript('scripts/sale-order-shared.js');
    await loadScript('pages/sale-order/page.js');
    await loadScript('pages/sale-summary/page.js');
    await loadScript('scripts/kpi-shared.js');
    await loadScript('pages/kpi/page.js');
    await loadScript('scripts/inventory-shared.js');
    await loadScript('pages/inventory/page.js');
    await loadScript('scripts/product-shared.js');
    await loadScript('pages/product-list/page.js');
    await loadScript('pages/product-detail/page.js');
    await loadScript('pages/product-create/page.js');
    await loadScript('pages/product-edit/page.js');
    await loadScript('pages/product-category/page.js');
    await loadScript('pages/product-uom/page.js');
    await loadScript('pages/product-group/page.js');
    await loadScript('scripts/selling-price-shared.js');
    await loadScript('pages/selling-price/page.js');
    await loadScript('pages/selling-price-create/page.js');
    await loadScript('scripts/business-shared.js');
    await loadScript('pages/business-company/page.js');
    await loadScript('pages/business-channel/page.js');
    await loadScript('pages/business-unit/page.js');
    await loadScript('pages/business-store-type/page.js');
    await loadScript('pages/business/store-rank/page.js');
    await loadScript('pages/business/store-location/page.js');
    await loadScript('pages/business-store-group/page.js');
    await loadScript('pages/business-store-group-detail/page.js');
    await loadScript('pages/business-store-list/page.js');
    await loadScript('pages/business-store-create/page.js');
    await loadScript('pages/business-store-edit/page.js');
    await loadScript('pages/business-distributor/page.js');
    await loadScript('pages/business-distributor-create/page.js');
    await loadScript('pages/business-distributor-edit/page.js');
    await loadScript('pages/business-employee/page.js');
    await loadScript('pages/business-employee-create/page.js');
    await loadScript('pages/business-employee-edit/page.js');
    await loadScript('scripts/report-shared.js');
    await loadScript('pages/report/sale/selling-order/page.js');
    await loadScript('pages/report/sale/product-revenue/page.js');
    await loadScript('pages/report/sale/customer-revenue/page.js');
    await loadScript('pages/report/sale/salesman-revenue/page.js');
    await loadScript('pages/report/sale/return-order/page.js');
    await loadScript('scripts/sales-route-shared.js');
    await loadScript('pages/sales-route/page.js');
    await loadScript('scripts/promotion-shared.js');
    await loadScript('pages/promotion/page.js');
    await loadScript('scripts/display-shared.js');
    await loadScript('pages/display/page.js');
    await loadScript('scripts/accumulate-shared.js');
    await loadScript('pages/accumulate/page.js');
    await loadScript('scripts/survey-shared.js');
    await loadScript('pages/survey/page.js');
    await loadScript('scripts/support-shared.js');
    await loadScript('pages/support/page.js');
    await loadScript('scripts/notification-shared.js');
    await loadScript('pages/notification/page.js');
    await loadScript('scripts/system-shared.js');
    await loadScript('pages/system/page.js');
    await loadScript('scripts/contract-shared.js');
    await loadScript('pages/contract/page.js');
    await loadScript('scripts/telling-story-shared.js');
    await loadScript('pages/telling-story/page.js');
    await loadScript('scripts/sales-app-shared.js');
    await loadScript('pages/sales-app/page.js');
    await loadScript('router/router.js');
  }

  async function fetchJSON(path) {
    const res = await fetch(path + (path.includes('?') ? '&' : '?') + 'v=20260820-ts');
    if (!res.ok) throw new Error(`Failed to load ${path}`);
    return res.json();
  }

  async function initApp() {
    await loadAllScripts();

    const [routeData, menuData] = await Promise.all([
      fetchJSON('data/route.json'),
      fetchJSON('data/menu.json')
    ]);

    document.getElementById('app').innerHTML = DMS.render('MainLayout', {
      menuItems: menuData.items,
      role: 'Admin',
      userName: 'Vũ BA'
    });

    // Register routes
    routeData.routes.forEach(r => {
      DMSRouter.register(r.path, window[r.handler]);
    });
    DMSRouter.register('*', () => DMS.render('EmptyState', {
      title: '404',
      description: 'Trang không tồn tại'
    }));

    DMSRouter.init({ contentEl: document.getElementById('dms-content') });

    // Global event handlers
    initGlobalEvents();
    DMS.get('Tooltip').init();
  }

  function initGlobalEvents() {
    // Menu toggle
    document.addEventListener('click', (e) => {
      const toggle = e.target.closest('.dms-menu__toggle');
      if (toggle) {
        const item = toggle.closest('.dms-menu__item');
        const rootMenu = document.querySelector('#dms-sidebar > nav > ul.dms-menu');
        if (!item || !rootMenu) return;
        const isRoot = item.parentElement === rootMenu;
        const wasOpen = item.classList.contains('is-expanded');
        const hasActiveChild = !!item.querySelector('.dms-menu__item.is-active');
        if (isRoot) {
          [...rootMenu.children].forEach((el) => {
            if (el !== item) el.classList.remove('is-expanded');
          });
          if (wasOpen && !hasActiveChild) {
            item.classList.remove('is-expanded');
          } else {
            item.classList.add('is-expanded');
          }
        } else {
          item.classList.toggle('is-expanded');
        }
      }

      if (e.target.closest('[data-action="sidebar-toggle"]')) {
        document.getElementById('dms-sidebar').classList.toggle('is-collapsed');
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

      // Tabs
      const tab = e.target.closest('.dms-tabs__tab');
      if (tab) {
        const tabs = tab.closest('.dms-tabs');
        tabs.querySelectorAll('.dms-tabs__tab').forEach(t => t.classList.remove('is-active'));
        tabs.querySelectorAll('.dms-tabs__panel').forEach(p => p.classList.add('is-hidden'));
        tab.classList.add('is-active');
        tabs.querySelector(`[data-panel="${tab.dataset.tab}"]`)?.classList.remove('is-hidden');
      }

      // Collapse
      const collapseHeader = e.target.closest('.dms-collapse__header');
      if (collapseHeader) {
        collapseHeader.closest('.dms-collapse__item').classList.toggle('is-open');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
