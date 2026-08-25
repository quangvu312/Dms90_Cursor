/**
 * Đặt Hàng NPP (HO sell-in) — UI: /sale/order ; Rule: 022
 */
(function (DMS) {
  function emptyDraft() {
    return {
      orderDate: '',
      distributorId: '',
      warehouse: '',
      province: '',
      district: '',
      ward: '',
      address: '',
      adjustment: 0,
      promotion: 0,
      lines: []
    };
  }

  const SoShared = {
    LIST: '/sale/order',

    breadcrumb(current) {
      return DMS.render('Breadcrumb', {
        items: [
          { label: 'Quản Lý Bán Hàng', route: '/sale/order' },
          { label: current || 'Đặt Hàng NPP' }
        ]
      });
    },

    load() {
      return fetch('data/sales-order.json').then(r => r.json());
    },

    getDraft() {
      if (!window.__soDraft) window.__soDraft = emptyDraft();
      return window.__soDraft;
    },

    resetDraft() {
      window.__soDraft = emptyDraft();
      return window.__soDraft;
    },

    loadDraft(item) {
      window.__soDraft = {
        id: item.id,
        orderCode: item.orderCode,
        orderDate: item.orderDate,
        distributorId: item.distributorId,
        distributor: item.distributor,
        warehouse: item.warehouse,
        province: item.province,
        district: item.district,
        ward: item.ward,
        address: item.address,
        adjustment: item.adjustment || 0,
        promotion: item.promotion || 0,
        status: item.status,
        statusLabel: item.statusLabel,
        cancelReason: item.cancelReason || '',
        lines: JSON.parse(JSON.stringify(item.lines || []))
      };
      return window.__soDraft;
    },

    lineAmount(line) {
      const qty = Number(line.qty) || 0;
      const price = Number(line.price) || 0;
      return Math.round(qty * price);
    },

    totals(draft) {
      const afterVat = (draft.lines || []).reduce((s, l) => s + this.lineAmount(l), 0);
      const vat = (draft.lines || []).reduce((s, l) => {
        const amt = this.lineAmount(l);
        const rate = Number(l.vatRate) || 0;
        return s + Math.round(amt - amt * 100 / (100 + rate));
      }, 0);
      const beforeVat = afterVat - vat;
      const promo = Number(draft.promotion) || 0;
      const adj = Number(draft.adjustment) || 0;
      const pay = beforeVat + vat - promo + adj;
      return { beforeVat, vat, afterVat, promo, adj, pay };
    },

    promptReason(title, onDone) {
      const el = DMS.get('Modal').show({
        title,
        size: 'sm',
        body: `${DMS.render('Input', { id: 'so-reason', label: 'Lý do', placeholder: 'Nhập lý do', requiredMark: true })}
          <div class="dms-form-item__error" id="err-so-reason" hidden>Vui lòng nhập lý do</div>`,
        footer: `${DMS.render('Button', { text: 'Hủy', type: 'default', dataAction: 'modal-close' })}
          ${DMS.render('Button', { text: 'Hoàn tất', type: 'primary', dataAction: 'reason-ok' })}`
      });
      el.addEventListener('click', (e) => {
        if (e.target.closest('[data-action="reason-ok"]')) {
          const val = (document.getElementById('so-reason')?.value || '').trim();
          const err = document.getElementById('err-so-reason');
          if (!val) { if (err) err.hidden = false; return; }
          el.remove();
          onDone(val);
        }
      });
    }
  };

  window.SoShared = SoShared;
})(window.DMS);
