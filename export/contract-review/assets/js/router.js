/**
 * DMS SPA Router - Pure JavaScript
 */
(function (global) {
  'use strict';

  const Router = {
    routes: {},
    currentRoute: null,
    contentEl: null,
    beforeEach: null,

    init(options = {}) {
      this.contentEl = options.contentEl || document.getElementById('dms-content');
      window.addEventListener('popstate', () => this.handleRoute());
      document.addEventListener('click', (e) => {
        const link = e.target.closest('[data-route]');
        if (link) {
          e.preventDefault();
          this.navigate(link.dataset.route);
        }
      });
      this.handleRoute();
    },

    register(path, handler) {
      this.routes[path] = handler;
    },

    navigate(path, replace = false) {
      const url = path.startsWith('/') ? path : `/${path}`;
      if (replace) {
        history.replaceState({ path: url }, '', `#${url}`);
      } else {
        history.pushState({ path: url }, '', `#${url}`);
      }
      this.handleRoute();
    },

    getPath() {
      const hash = location.hash.slice(1);
      const path = hash.split('?')[0];
      return path || '/contract/list';
    },

    async handleRoute() {
      const path = this.getPath();
      if (this.beforeEach) {
        const result = await this.beforeEach(path);
        if (result === false) return;
      }

      const handler = this.routes[path] || this.routes['*'];
      if (!handler) {
        this.contentEl.innerHTML = DMS.render('EmptyState', {
          title: '404 - Không tìm thấy trang',
          description: `Route "${path}" chưa được đăng ký.`
        });
        return;
      }

      this.currentRoute = path;
      this.contentEl.innerHTML = DMS.render('Loading', { text: 'Đang tải...' });

      try {
        const html = await handler(path);
        this.contentEl.innerHTML = html;
        this.updateActiveMenu(path);
        if (typeof handler.onMount === 'function') {
          handler.onMount(this.contentEl);
        }
        if (window.DMS && typeof DMS.bindFormControls === 'function') {
          DMS.bindFormControls(document);
        }
        document.dispatchEvent(new CustomEvent('dms:route-change', { detail: { path } }));
      } catch (err) {
        console.error('[DMS Router]', err);
        this.contentEl.innerHTML = DMS.render('EmptyState', {
          title: 'Lỗi tải trang',
          description: err.message
        });
      }
    },

    updateActiveMenu(path) {
      document.querySelectorAll('.dms-menu__item').forEach(item => {
        item.classList.remove('is-active');
      });
      document.querySelectorAll(`[data-route="${path}"]`).forEach(el => {
        el.closest('.dms-menu__item')?.classList.add('is-active');
      });
    }
  };

  global.DMSRouter = Router;
})(window);
