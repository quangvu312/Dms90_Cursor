/**
 * Kho — UI: website /inventories/* ; Rule: 064, 318, 367, 428, 432
 */
(function (DMS) {
  const InvShared = {
    breadcrumb(items) {
      return DMS.render('Breadcrumb', {
        items: [{ label: 'Quản Lý Kho', route: '/inventories/distributor' }].concat(items)
      });
    },

    loadJson(path) {
      return fetch(path).then(r => r.json());
    },

    tag(statusLabel, status) {
      return DMS.render('StatusTag', { status, text: statusLabel });
    },

    promptReason(title, onDone) {
      const el = DMS.get('Modal').show({
        id: 'inv-reason-modal',
        title,
        size: 'sm',
        body: `${DMS.render('Input', { id: 'inv-reason', label: 'Lý do', placeholder: 'Nhập lý do', requiredMark: true })}
          <div class="dms-form-item__error" id="err-inv-reason" hidden>Vui lòng nhập lý do</div>`,
        footer: `${DMS.render('Button', { text: 'Hủy', type: 'default', dataAction: 'modal-close' })}
          ${DMS.render('Button', { text: 'Hoàn tất', type: 'primary', dataAction: 'reason-ok' })}`
      });
      el.addEventListener('click', (e) => {
        if (e.target.closest('[data-action="reason-ok"]')) {
          const val = (document.getElementById('inv-reason')?.value || '').trim();
          const err = document.getElementById('err-inv-reason');
          if (!val) { if (err) err.hidden = false; return; }
          el.remove();
          onDone(val);
        }
      });
    },

    showLot(lots) {
      const rows = (lots || []).map(l => ({ qty: l.qty, lot: l.lot, exp: l.exp }));
      DMS.get('Modal').show({
        title: 'Thông tin lô',
        size: 'md',
        body: rows.length
          ? DMS.render('Table', {
            columns: [
              { key: 'qty', title: 'Số lượng' },
              { key: 'lot', title: 'Số lô' },
              { key: 'exp', title: 'Hạn sử dụng' }
            ],
            data: rows
          })
          : DMS.render('EmptyState', { title: 'Trống' }),
        footer: DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'modal-close' })
      });
    }
  };

  window.InvShared = InvShared;
})(window.DMS);
