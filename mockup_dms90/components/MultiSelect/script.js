(function (DMS) {
  function optVal(o) { return typeof o === 'object' ? o.value : o; }
  function optLbl(o) { return typeof o === 'object' ? o.label : o; }

  function renderTags(values, options) {
    return (values || []).map(v => {
      const opt = (options || []).find(o => String(optVal(o)) === String(v));
      const lbl = opt ? optLbl(opt) : v;
      return `<span class="dms-multiselect__tag">${DMS.escape(lbl)}<span class="dms-multiselect__tag-close" data-remove="${DMS.escape(v)}">×</span></span>`;
    }).join('');
  }

  DMS.register('MultiSelect', {
    render(props = {}) {
      const {
        id = '',
        values = [],
        options = [],
        placeholder = 'Chọn',
        label = '',
        className = '',
        disabled = false,
        requiredMark = false,
        searchable = true
      } = props;
      const tags = renderTags(values, options);
      const list = (options || []).map(o => {
        const val = optVal(o);
        const lbl = optLbl(o);
        const checked = (values || []).map(String).includes(String(val));
        return `<label class="dms-multiselect__option">
          <input type="checkbox" value="${DMS.escape(val)}" ${checked ? 'checked' : ''} />
          <span>${DMS.escape(lbl)}</span>
        </label>`;
      }).join('');
      const html = `<div class="dms-multiselect ${disabled ? 'is-disabled' : ''} ${className}" ${id ? `id="${DMS.escape(id)}"` : ''} data-multiselect>
        <div class="dms-multiselect__control" data-action="multiselect-open" tabindex="0" role="combobox" aria-expanded="false">
          <div class="dms-multiselect__tags">${tags}</div>
          <input class="dms-multiselect__input" placeholder="${tags ? '' : DMS.escape(placeholder)}" readonly />
          <span class="dms-multiselect__caret">▾</span>
        </div>
        <div class="dms-multiselect__dropdown" hidden>
          ${searchable ? `<input type="text" class="dms-multiselect__search dms-input" placeholder="Tìm kiếm..." data-action="multiselect-search" />` : ''}
          <div class="dms-multiselect__list">${list || `<div class="dms-select__empty">Không có dữ liệu</div>`}</div>
        </div>
      </div>`;
      if (label) {
        return `<div class="dms-form-item" id="${id ? `wrap-${DMS.escape(id)}` : ''}">
          <label class="dms-form-item__label ${requiredMark ? 'is-required' : ''}">${DMS.escape(label)}</label>
          ${html}
        </div>`;
      }
      return html;
    },

    getValues(idOrEl) {
      const el = typeof idOrEl === 'string' ? document.getElementById(idOrEl) : idOrEl;
      if (!el) return [];
      const root = (window.DMS && DMS.getOverlay(el)) || el;
      return [...root.querySelectorAll('.dms-multiselect__list input:checked')].map(i => i.value);
    },

    bindAll(root) {
      if (!root) return;
      root.querySelectorAll('[data-multiselect]').forEach((el) => this.bind(el));
    },

    bind(el) {
      if (!el || el.dataset.multiselectBound) return;
      el.dataset.multiselectBound = '1';
      const control = el.querySelector('.dms-multiselect__control');
      const dropdown = el.querySelector('.dms-multiselect__dropdown');
      const tagsEl = el.querySelector('.dms-multiselect__tags');
      const input = el.querySelector('.dms-multiselect__input');

      const refreshTags = () => {
        const values = this.getValues(el);
        const listRoot = (window.DMS && DMS.getOverlay(el)) || el;
        const options = [...listRoot.querySelectorAll('.dms-multiselect__list input')].map(i => ({
          value: i.value,
          label: i.parentElement.querySelector('span')?.textContent || i.value
        }));
        tagsEl.innerHTML = renderTags(values, options);
        if (input) input.placeholder = values.length ? '' : (input.getAttribute('data-placeholder') || input.placeholder || 'Chọn');
        el.dispatchEvent(new CustomEvent('multiselect:change', { bubbles: true, detail: { values } }));
      };

      const setOpen = (open) => {
        if (el.classList.contains('is-disabled')) return;
        el.classList.toggle('is-open', open);
        control?.setAttribute('aria-expanded', open ? 'true' : 'false');
        if (open) {
          DMS.closeAllOverlays(el);
          DMS.placeOverlay(dropdown, control);
          dropdown.querySelector('.dms-multiselect__search')?.focus();
        } else if (dropdown) {
          DMS.restoreOverlay(dropdown);
        }
      };

      control.addEventListener('click', (e) => {
        if (e.target.closest('[data-remove]')) return;
        e.stopPropagation();
        setOpen(!el.classList.contains('is-open'));
      });

      el.addEventListener('click', (e) => {
        const rm = e.target.closest('[data-remove]');
        if (rm) {
          e.stopPropagation();
          const match = [...el.querySelectorAll('.dms-multiselect__list input[type="checkbox"]')].find(i => i.value === rm.dataset.remove);
          if (match) match.checked = false;
          refreshTags();
          return;
        }
      });

      dropdown?.addEventListener('click', (e) => e.stopPropagation());
      dropdown?.addEventListener('change', (e) => {
        if (e.target.matches('input[type="checkbox"]')) refreshTags();
      });

      dropdown?.addEventListener('input', (e) => {
        if (!e.target.matches('[data-action="multiselect-search"]')) return;
        const kw = e.target.value.trim().toLowerCase();
        dropdown.querySelectorAll('.dms-multiselect__option').forEach((opt) => {
          opt.style.display = !kw || opt.textContent.toLowerCase().includes(kw) ? '' : 'none';
        });
      });
    }
  });
})(window.DMS);
