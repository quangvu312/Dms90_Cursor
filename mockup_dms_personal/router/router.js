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

    resolveHandler(path) {
      if (this.routes[path]) return this.routes[path];
      const keys = Object.keys(this.routes);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (key.length > 2 && key.slice(-2) === '/*') {
          const prefix = key.slice(0, -2);
          if (path === prefix || path.indexOf(prefix + '/') === 0) return this.routes[key];
        }
      }
      return this.routes['*'];
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
      return path || '/dashboard';
    },

    async handleRoute() {
      const path = this.getPath();
      if (this.beforeEach) {
        const result = await this.beforeEach(path);
        if (result === false) return;
      }

      const handler = this.resolveHandler(path);
      document.body.classList.toggle('is-sales-app', path.indexOf('/sales-app') === 0);
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

    findMenuLinks(sidebar, path) {
      const all = [...sidebar.querySelectorAll('a[data-route]')];
      if (!all.length) return [];
      const exact = all.filter((el) => el.getAttribute('data-route') === path);
      if (exact.length) return exact;

      let best = null;
      let bestLen = 0;
      all.forEach((el) => {
        const r = el.getAttribute('data-route') || '';
        if (!r) return;
        if (path.startsWith(r + '/') || path.startsWith(r + '?')) {
          if (r.length > bestLen) {
            best = el;
            bestLen = r.length;
          }
        }
      });
      if (best) return [best];

      const parts = path.split('/').filter(Boolean);
      while (parts.length) {
        parts.pop();
        if (!parts.length) break;
        const prefix = '/' + parts.join('/');
        const candidates = all.filter((el) => {
          const r = el.getAttribute('data-route') || '';
          return r === prefix || r.startsWith(prefix + '/');
        });
        if (candidates.length === 1) return candidates;
        if (candidates.length > 1) {
          const listPref = candidates.find((el) => /\/list$/.test(el.getAttribute('data-route') || ''));
          if (listPref) return [listPref];
          candidates.sort((a, b) =>
            (a.getAttribute('data-route') || '').length - (b.getAttribute('data-route') || '').length
          );
          return [candidates[0]];
        }
      }
      return [];
    },

    updateActiveMenu(path) {
      const sidebar = document.getElementById('dms-sidebar');
      if (!sidebar) return;

      sidebar.querySelectorAll('.dms-menu__item').forEach((item) => {
        item.classList.remove('is-active');
        item.classList.remove('is-expanded');
      });

      const links = this.findMenuLinks(sidebar, path);
      links.forEach((el) => {
        const item = el.closest('.dms-menu__item');
        item?.classList.add('is-active');
        let parentSub = el.closest('.dms-menu__submenu');
        while (parentSub) {
          const parentItem = parentSub.parentElement?.closest('.dms-menu__item');
          parentItem?.classList.add('is-expanded');
          parentSub = parentItem?.parentElement?.closest('.dms-menu__submenu');
        }
      });

      if (path.indexOf('/sales-app') === 0) {
        sidebar.querySelectorAll('[data-route="/sales-app"]').forEach((el) => {
          el.closest('.dms-menu__item')?.classList.add('is-active');
        });
      }
    }
  };

  global.DMSRouter = Router;
})(window);
