(function (DMS) {
  const Dialog = {
    _activeOverlay: null,

    render(props = {}) {
      const { message = '', confirmText = 'Đồng ý', cancelText = 'Hủy' } = props;
      return `<div class="dms-popconfirm">
        <div class="dms-popconfirm__message">${DMS.escape(message)}</div>
        <div class="dms-popconfirm__actions">
          ${DMS.render('Button', { text: cancelText, type: 'default', dataAction: 'dialog-cancel' })}
          ${DMS.render('Button', { text: confirmText, type: 'primary', dataAction: 'dialog-confirm' })}
        </div>
      </div>`;
    },

    confirm(message, onOk, onCancel) {
      // Chỉ cho phép một confirmation hoạt động tại một thời điểm.
      // Tránh overlay cũ tồn tại khi người dùng click Save nhiều lần.
      this._activeOverlay?.remove();

      const hasParent = !!document.querySelector('.dms-modal-overlay');
      const overlay = document.createElement('div');
      overlay.className = hasParent
        ? 'dms-modal-overlay dms-modal-overlay--nested'
        : 'dms-modal-overlay dms-modal-overlay--confirm';
      overlay.dataset.dialogState = 'open';
      overlay.innerHTML = `<div class="dms-modal dms-modal--sm dms-modal--confirm" role="dialog" aria-modal="true">
        <div class="dms-modal__body">${DMS.escape(message)}</div>
        <div class="dms-modal__footer">
          ${DMS.render('Button', { text: 'Hủy', type: 'default', dataAction: 'dialog-cancel' })}
          ${DMS.render('Button', { text: 'Đồng ý', type: 'primary', dataAction: 'dialog-confirm' })}
        </div>
      </div>`;
      document.body.appendChild(overlay);
      this._activeOverlay = overlay;

      const close = () => {
        if (overlay.dataset.dialogState === 'closed') return;
        overlay.dataset.dialogState = 'closed';
        overlay.remove();
        if (this._activeOverlay === overlay) this._activeOverlay = null;
      };

      overlay.addEventListener('click', async (e) => {
        const confirmButton = e.target.closest('[data-action="dialog-confirm"]');
        const cancelButton = e.target.closest('[data-action="dialog-cancel"]');

        if (confirmButton) {
          e.preventDefault();
          e.stopPropagation();
          if (overlay.dataset.dialogState !== 'open') return;

          overlay.dataset.dialogState = 'saving';
          confirmButton.disabled = true;
          try {
            if (onOk) await onOk();
          } finally {
            // Luôn reset state và xóa node thật khỏi DOM sau khi callback hoàn tất.
            close();
          }
        } else if (cancelButton || e.target === overlay) {
          e.preventDefault();
          e.stopPropagation();
          close();
          if (onCancel) await onCancel();
        }
      });

      return { element: overlay, close };
    }
  };

  DMS.register('Dialog', Dialog);
})(window.DMS);
