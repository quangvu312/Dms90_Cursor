(function (DMS) {
  function optVal(o) { return typeof o === 'object' ? o.value : o; }
  function optLbl(o) { return typeof o === 'object' ? o.label : o; }

  DMS.register('Select', {
    render(props = {}) {
      const {
        id = '',
        name = '',
        value = '',
        options = [],
        placeholder = '',
        disabled = false,
        label = '',
        className = '',
        requiredMark = false,
        searchable = true
      } = props;
      const selected = (options || []).find(o => String(optVal(o)) === String(value));
      const display = selected ? optLbl(selected) : '';
      const nativeOpts = (options || []).map(o => {
        const val = optVal(o);
        const lbl = optLbl(o);
        return `<option value="${DMS.escape(val)}" ${String(val) === String(value) ? 'selected' : ''}>${DMS.escape(lbl)}</option>`;
      }).join('');
      const list = (options || []).map(o => {
        const val = optVal(o);
        const lbl = optLbl(o);
        const sel = String(val) === String(value) ? ' is-selected' : '';
        return `<div class="dms-select__option${sel}" data-value="${DMS.escape(val)}" role="option">${DMS.escape(lbl)}</div>`;
      }).join('');
      const html = `<div class="dms-select ${disabled ? 'is-disabled' : ''} ${className}" data-select ${searchable ? 'data-searchable' : ''}>
        <select class="dms-select__native" ${DMS.attrs({ id, name, disabled })}>
          ${placeholder ? `<option value="">${DMS.escape(placeholder)}</option>` : ''}
          ${nativeOpts}
        </select>
        <div class="dms-select__control" data-action="select-open" tabindex="0" role="combobox" aria-expanded="false">
          <span class="dms-select__display ${display ? '' : 'is-placeholder'}">${DMS.escape(display || placeholder || 'Chọn')}</span>
          <span class="dms-select__caret">▾</span>
        </div>
        <div class="dms-select__dropdown" hidden>
          ${searchable ? `<input type="text" class="dms-select__search dms-input" placeholder="Tìm kiếm..." data-action="select-search" />` : ''}
          <div class="dms-select__list">${list || `<div class="dms-select__empty">Không có dữ liệu</div>`}</div>
        </div>
      </div>`;
      if (label) {
        return `<div class="dms-form-item"><label class="dms-form-item__label ${requiredMark ? 'is-required' : ''}">${DMS.escape(label)}</label>${html}</div>`;
      }
      return html;
    },

    bindAll(root) {
      if (!root) return;
      root.querySelectorAll('[data-select]').forEach((el) => this.bind(el));
      if (!this._docBound) {
        this._docBound = true;
        document.addEventListener('click', (e) => {
          if (e.target.closest('[data-select], [data-multiselect], [data-treeselect-id], .dms-datepicker, .dms-overlay-popup, #dms-overlay-root')) return;
          DMS.closeAllOverlays();
        });
        const repositionOpenOverlays = () => {
          document.querySelectorAll('.dms-select.is-open, .dms-multiselect.is-open, .dms-treeselect.is-open, .dms-datepicker.is-open').forEach((open) => {
            const control = open.querySelector('.dms-select__control, .dms-multiselect__control, .dms-treeselect__control, .dms-datepicker .dms-input');
            const drop = DMS.getOverlay(open);
            if (control && drop && !drop.hidden) DMS.placeOverlay(drop, control);
          });
        };
        window.addEventListener('scroll', repositionOpenOverlays, true);
        window.addEventListener('resize', repositionOpenOverlays);
      }
    },

    bind(el) {
      if (!el || el.dataset.selectBound) return;
      el.dataset.selectBound = '1';
      const native = el.querySelector('.dms-select__native');
      const control = el.querySelector('.dms-select__control');
      const dropdown = el.querySelector('.dms-select__dropdown');
      const display = el.querySelector('.dms-select__display');
      const list = el.querySelector('.dms-select__list');

      const setOpen = (open) => {
        if (el.classList.contains('is-disabled')) return;
        el.classList.toggle('is-open', open);
        control?.setAttribute('aria-expanded', open ? 'true' : 'false');
        if (open) {
          DMS.closeAllOverlays(el);
          DMS.placeOverlay(dropdown, control);
          dropdown.querySelector('.dms-select__search')?.focus();
        } else if (dropdown) {
          DMS.restoreOverlay(dropdown);
        }
      };

      const syncDisplay = () => {
        if (!native || !display) return;
        const opt = [...native.options].find(o => o.value === native.value);
        const ph = native.querySelector('option[value=""]')?.textContent || 'Chọn';
        const text = native.value && opt ? opt.textContent : '';
        display.textContent = text || ph;
        display.classList.toggle('is-placeholder', !native.value);
      };

      const applyFilter = (q) => {
        const kw = (q || '').trim().toLowerCase();
        list.querySelectorAll('.dms-select__option').forEach((opt) => {
          const show = !kw || opt.textContent.toLowerCase().includes(kw);
          opt.style.display = show ? '' : 'none';
        });
      };

      native?.addEventListener('change', syncDisplay);

      control.addEventListener('click', (e) => {
        e.stopPropagation();
        setOpen(!el.classList.contains('is-open'));
      });

      list?.addEventListener('click', (e) => {
        const opt = e.target.closest('.dms-select__option');
        if (!opt) return;
        e.stopPropagation();
        const val = opt.dataset.value;
        if (native) {
          native.value = val;
          native.dispatchEvent(new Event('change', { bubbles: true }));
        }
        list.querySelectorAll('.dms-select__option').forEach((o) => o.classList.toggle('is-selected', o === opt));
        display.textContent = opt.textContent;
        display.classList.remove('is-placeholder');
        setOpen(false);
      });

      el.querySelector('[data-action="select-search"]')?.addEventListener('input', (e) => {
        applyFilter(e.target.value);
      });
    }
  });
})(window.DMS);
