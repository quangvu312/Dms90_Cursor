/**
 * KPI module — UI: website /kpi/* ; Rule: 171, 172, 173, 227
 */
(function (DMS) {
  const STATUS = {
    INIT: { text: 'Khởi tạo', type: 'orange' },
    APPROVED: { text: 'Đã duyệt', type: 'green' },
    CANCELLED: { text: 'Đã hủy', type: 'red' }
  };

  function emptyDraft() {
    return {
      name: '',
      indicatorCodes: [],
      periodType: 'MONTH',
      periodLabel: '08/2026',
      assignments: [],
      step: 1
    };
  }

  const KpiShared = {
    statusOf(code) {
      return STATUS[code] || { text: code || '', type: 'default' };
    },

    breadcrumb(items) {
      return DMS.render('Breadcrumb', {
        items: [{ label: 'Quản Lý Chi Tiêu', route: '/kpi/indicator' }].concat(items)
      });
    },

    loadJson(path) {
      return fetch(path).then(r => r.json());
    },

    getDraft() {
      if (!window.__kpiDraft) window.__kpiDraft = emptyDraft();
      return window.__kpiDraft;
    },

    resetDraft() {
      window.__kpiDraft = emptyDraft();
      return window.__kpiDraft;
    },

    loadDraft(item) {
      window.__kpiDraft = {
        id: item.id,
        code: item.code,
        name: item.name,
        indicatorCodes: (item.indicatorCodes || []).slice(),
        periodType: item.periodType || 'MONTH',
        periodLabel: item.periodLabel || '',
        assignments: JSON.parse(JSON.stringify(item.assignments || [])),
        managers: JSON.parse(JSON.stringify(item.managers || [])),
        status: item.status,
        step: 1
      };
      return window.__kpiDraft;
    },

    stepper(step) {
      const items = [
        { n: 1, label: 'Thông tin chung' },
        { n: 2, label: 'Giao KPI' },
        { n: 3, label: 'Chỉ tiêu quản lý' }
      ];
      return `<div class="dms-steps">${items.map(it => `
        <div class="dms-steps__item ${step === it.n ? 'is-active' : ''} ${step > it.n ? 'is-done' : ''}">
          <span class="dms-steps__num">${it.n}</span>
          <span>${it.label}</span>
        </div>`).join('')}</div>`;
    },

    fieldError(id, msg) {
      return `<div class="dms-form-item__error" id="err-${id}" ${msg ? '' : 'hidden'}>${DMS.escape(msg || '')}</div>`;
    },

    promptReason(title, onDone) {
      const el = DMS.get('Modal').show({
        id: 'kpi-reason-modal',
        title,
        size: 'sm',
        body: `${DMS.render('Input', { id: 'kpi-reason', label: 'Lý do', placeholder: 'Nhập lý do', requiredMark: true })}
          <div class="dms-form-item__error" id="err-kpi-reason" hidden>Vui lòng nhập lý do</div>`,
        footer: `${DMS.render('Button', { text: 'Hủy', type: 'default', dataAction: 'modal-close' })}
          ${DMS.render('Button', { text: 'Hoàn tất', type: 'primary', dataAction: 'reason-ok' })}`
      });
      el.addEventListener('click', (e) => {
        if (e.target.closest('[data-action="reason-ok"]')) {
          const val = (document.getElementById('kpi-reason')?.value || '').trim();
          const err = document.getElementById('err-kpi-reason');
          if (!val) {
            if (err) { err.hidden = false; }
            return;
          }
          el.remove();
          onDone(val);
        }
      });
    }
  };

  window.KpiShared = KpiShared;
})(window.DMS);
