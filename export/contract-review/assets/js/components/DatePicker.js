(function (DMS) {
  function pad(n) { return String(n).padStart(2, '0'); }
  function parseDmy(str) {
    if (!str) return null;
    const iso = String(str).match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (iso) return new Date(Number(iso[1]), Number(iso[2]) - 1, Number(iso[3]));
    const dmy = String(str).match(/^(\d{2})[\/\-](\d{2})[\/\-](\d{4})$/);
    if (dmy) return new Date(Number(dmy[3]), Number(dmy[2]) - 1, Number(dmy[1]));
    return null;
  }
  function toDmy(d) {
    return `${pad(d.getDate())}-${pad(d.getMonth() + 1)}-${d.getFullYear()}`;
  }

  function monthMatrix(year, month) {
    const first = new Date(year, month, 1);
    const start = (first.getDay() + 6) % 7;
    const days = new Date(year, month + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < start; i++) cells.push(null);
    for (let d = 1; d <= days; d++) cells.push(d);
    return cells;
  }

  DMS.register('DatePicker', {
    render(props = {}) {
      const { id = '', name = '', value = '', placeholder = 'Chọn ngày', disabled = false, label = '', className = '' } = props;
      const html = `<div class="dms-datepicker ${disabled ? 'is-disabled' : ''}" data-datepicker>
        <input class="dms-input ${className}" type="text" ${DMS.attrs({ id, name, value, placeholder, disabled, readonly: true })} data-action="datepicker-open" />
        <span class="dms-datepicker__icon">📅</span>
        <div class="dms-datepicker__dropdown" hidden></div>
      </div>`;
      if (label) {
        return `<div class="dms-form-item"><label class="dms-form-item__label">${DMS.escape(label)}</label>${html}</div>`;
      }
      return html;
    },

    bindAll(root) {
      if (!root) return;
      root.querySelectorAll('[data-datepicker]').forEach((el) => this.bind(el));
    },

    bind(el) {
      if (!el || el.dataset.datepickerBound) return;
      el.dataset.datepickerBound = '1';
      const input = el.querySelector('.dms-input');
      const dropdown = el.querySelector('.dms-datepicker__dropdown');
      let view = parseDmy(input.value) || new Date();

      const paint = () => {
        const y = view.getFullYear();
        const m = view.getMonth();
        const selected = parseDmy(input.value);
        const title = `Tháng ${m + 1}/${y}`;
        const cells = monthMatrix(y, m).map(d => {
          if (!d) return '<span class="dms-datepicker__day is-empty"></span>';
          const isSel = selected && selected.getFullYear() === y && selected.getMonth() === m && selected.getDate() === d;
          return `<button type="button" class="dms-datepicker__day ${isSel ? 'is-selected' : ''}" data-day="${d}">${d}</button>`;
        }).join('');
        dropdown.innerHTML = `
          <div class="dms-datepicker__head">
            <button type="button" data-nav="-1">‹</button>
            <strong>${title}</strong>
            <button type="button" data-nav="1">›</button>
          </div>
          <div class="dms-datepicker__week">${['T2','T3','T4','T5','T6','T7','CN'].map(w => `<span>${w}</span>`).join('')}</div>
          <div class="dms-datepicker__grid">${cells}</div>
        `;
      };

      const setOpen = (open) => {
        if (el.classList.contains('is-disabled') || input.disabled) return;
        el.classList.toggle('is-open', open);
        dropdown.hidden = !open;
        if (open) {
          DMS.closeAllOverlays(el);
          paint();
          DMS.placeOverlay(dropdown, input);
        }
      };

      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const nav = e.target.closest('[data-nav]');
        if (nav) {
          view = new Date(view.getFullYear(), view.getMonth() + Number(nav.dataset.nav), 1);
          paint();
          DMS.placeOverlay(dropdown, input);
          return;
        }
        const day = e.target.closest('[data-day]');
        if (day) {
          const d = new Date(view.getFullYear(), view.getMonth(), Number(day.dataset.day));
          input.value = toDmy(d);
          input.dispatchEvent(new Event('change', { bubbles: true }));
          setOpen(false);
          return;
        }
        if (e.target.closest('[data-action="datepicker-open"]') || e.target.closest('.dms-datepicker__icon')) {
          setOpen(!el.classList.contains('is-open'));
        }
      });
    }
  });
})(window.DMS);
