/**
 * DMS Component Core - Registry & Utilities
 * Single Source of Truth for component rendering
 */
(function (global) {
  'use strict';

  const DMS = {
    components: {},
    _escapeEl: null,

    register(name, component) {
      this.components[name] = component;
    },

    get(name) {
      return this.components[name];
    },

    render(name, props = {}) {
      const comp = this.components[name];
      if (!comp || typeof comp.render !== 'function') {
        console.warn(`[DMS] Component "${name}" not found`);
        return '';
      }
      return comp.render(props);
    },

    renderAll(fragments) {
      return fragments.map(f => {
        if (typeof f === 'string') return f;
        return this.render(f.component, f.props || {});
      }).join('');
    },

    escape(str) {
      if (str == null) return '';
      if (!this._escapeEl) {
        this._escapeEl = document.createElement('div');
      }
      this._escapeEl.textContent = String(str);
      return this._escapeEl.innerHTML;
    },

    attrs(obj) {
      return Object.entries(obj || {})
        .filter(([, v]) => v != null && v !== false)
        .map(([k, v]) => {
          if (v === true) return k;
          return `${k}="${this.escape(v)}"`;
        })
        .join(' ');
    },

    classNames(...args) {
      return args.flat().filter(Boolean).join(' ');
    },

    formatNumber(num) {
      if (num == null) return '';
      return Number(num).toLocaleString('vi-VN');
    },

    formatDate(dateStr) {
      if (!dateStr) return '';
      const d = new Date(dateStr);
      if (isNaN(d)) return dateStr;
      return d.toLocaleDateString('vi-VN');
    },

    loadScript(src) {
      return new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = src;
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
      });
    },

    overlayHostSelector() {
      return '[data-select], [data-multiselect], [data-treeselect-id], [data-datepicker], .dms-datepicker, .dms-treeselect';
    },

    overlayDropdownSelector() {
      return '.dms-select__dropdown, .dms-multiselect__dropdown, .dms-datepicker__dropdown, .dms-treeselect__dropdown';
    },

    ensureOverlayRoot() {
      let root = document.getElementById('dms-overlay-root');
      if (!root) {
        root = document.createElement('div');
        root.id = 'dms-overlay-root';
        document.body.appendChild(root);
      }
      return root;
    },

    getOverlay(host) {
      if (!host) return null;
      return host._dmsOverlay || host.querySelector(this.overlayDropdownSelector());
    },

    cleanupOrphanOverlays() {
      const root = document.getElementById('dms-overlay-root');
      if (!root) return;
      [...root.children].forEach((d) => {
        if (!d._dmsHost || !d._dmsHost.isConnected) d.remove();
      });
    },

    restoreOverlay(dropdown) {
      if (!dropdown) return;
      dropdown.hidden = true;
      dropdown.style.position = '';
      dropdown.style.left = '';
      dropdown.style.top = '';
      dropdown.style.width = '';
      dropdown.style.minWidth = '';
      dropdown.style.zIndex = '';
      const host = dropdown._dmsHost;
      if (host && host.isConnected && dropdown.parentElement !== host) {
        host.appendChild(dropdown);
      }
    },

    placeOverlay(dropdown, anchor) {
      if (!dropdown || !anchor) return;
      const host = anchor.closest(this.overlayHostSelector());
      if (host) {
        dropdown._dmsHost = host;
        host._dmsOverlay = dropdown;
      }
      dropdown.classList.add('dms-overlay-popup');
      const root = this.ensureOverlayRoot();
      if (dropdown.parentElement !== root) root.appendChild(dropdown);
      dropdown.hidden = false;
      if (!dropdown.dataset.overlayClickBound) {
        dropdown.dataset.overlayClickBound = '1';
        dropdown.addEventListener('mousedown', (e) => e.stopPropagation());
        dropdown.addEventListener('click', (e) => e.stopPropagation());
      }
      const rect = anchor.getBoundingClientRect();
      const isCalendar = dropdown.classList.contains('dms-datepicker__dropdown');
      dropdown.style.position = 'fixed';
      dropdown.style.left = `${Math.max(8, rect.left)}px`;
      dropdown.style.zIndex = '1200';
      if (isCalendar) {
        dropdown.style.width = '280px';
        dropdown.style.minWidth = '280px';
      } else {
        dropdown.style.minWidth = `${rect.width}px`;
        dropdown.style.width = `${Math.max(rect.width, 220)}px`;
      }
      dropdown.style.top = `${rect.bottom + 4}px`;
      const dRect = dropdown.getBoundingClientRect();
      if (dRect.bottom > window.innerHeight - 8) {
        dropdown.style.top = `${Math.max(8, rect.top - dRect.height - 4)}px`;
      }
      if (dRect.right > window.innerWidth - 8) {
        dropdown.style.left = `${Math.max(8, window.innerWidth - dRect.width - 8)}px`;
      }
    },

    closeAllOverlays(except) {
      document.querySelectorAll('.dms-select.is-open, .dms-multiselect.is-open, .dms-treeselect.is-open, .dms-datepicker.is-open').forEach((el) => {
        if (except && (el === except || el.contains(except))) return;
        el.classList.remove('is-open');
        el.querySelector('[aria-expanded]')?.setAttribute('aria-expanded', 'false');
        const drop = this.getOverlay(el);
        if (drop) this.restoreOverlay(drop);
        el.querySelectorAll(this.overlayDropdownSelector()).forEach((d) => { d.hidden = true; });
      });
    },

    resetFormControls(root) {
      const scope = root || document;
      scope.querySelectorAll('[data-select]').forEach((el) => {
        const native = el.querySelector('.dms-select__native');
        const display = el.querySelector('.dms-select__display');
        if (native) native.value = '';
        if (display) {
          const ph = native?.querySelector('option[value=""]')?.textContent || 'Chọn';
          display.textContent = ph;
          display.classList.add('is-placeholder');
        }
        el.querySelectorAll('.dms-select__option.is-selected').forEach((o) => o.classList.remove('is-selected'));
      });
      scope.querySelectorAll('[data-multiselect]').forEach((el) => {
        el.querySelectorAll('.dms-multiselect__list input[type="checkbox"]').forEach((i) => { i.checked = false; });
        const tags = el.querySelector('.dms-multiselect__tags');
        if (tags) tags.innerHTML = '';
        const input = el.querySelector('.dms-multiselect__input');
        if (input) input.placeholder = 'Chọn';
      });
      scope.querySelectorAll('[data-datepicker] .dms-input').forEach((i) => { i.value = ''; });
    },

    bindFormControls(root) {
      this.cleanupOrphanOverlays();
      const scope = root || document;
      this.get('Select')?.bindAll?.(scope);
      this.get('MultiSelect')?.bindAll?.(scope);
      this.get('TreeSelect')?.bindAll?.(scope);
      this.get('DatePicker')?.bindAll?.(scope);
      if (!this._resetBound) {
        this._resetBound = true;
        document.addEventListener('click', (e) => {
          if (!e.target.closest('[data-action="filter-reset"]')) return;
          const panel = e.target.closest('.dms-filter-panel');
          if (panel) this.resetFormControls(panel);
        });
      }
    },

    async loadComponents(names) {
      const base = 'components/';
      for (const name of names) {
        if (!this.components[name]) {
          await this.loadScript(`${base}${name}/script.js`);
        }
      }
    }
  };

  global.DMS = DMS;
})(window);
