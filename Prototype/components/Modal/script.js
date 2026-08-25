(function (DMS) {
  DMS.register('Modal', {
    render(props = {}) {
      const { title = '', body = '', footer = '', size = 'md', visible = true, id = 'dms-modal' } = props;
      if (!visible) return '';
      const defaultFooter = footer || `
        ${DMS.render('Button', { text: 'Hủy', type: 'default', dataAction: 'modal-close' })}
        ${DMS.render('Button', { text: 'Đồng ý', type: 'primary', dataAction: 'modal-confirm' })}
      `;
      return `<div class="dms-modal-overlay" id="${DMS.escape(id)}">
        <div class="dms-modal dms-modal--${size}" role="dialog">
          <div class="dms-modal__header">
            <h3 class="dms-modal__title">${DMS.escape(title)}</h3>
            <button class="dms-modal__close" data-action="modal-close">×</button>
          </div>
          <div class="dms-modal__body">${body}</div>
          <div class="dms-modal__footer">${defaultFooter}</div>
        </div>
      </div>`;
    },

    show(options) {
      const overlay = document.createElement('div');
      overlay.innerHTML = this.render({ ...options, visible: true });
      const el = overlay.firstElementChild;
      document.body.appendChild(el);
      el.addEventListener('click', (e) => {
        if (e.target.dataset.action === 'modal-close' || e.target === el) {
          el.remove();
        }
      });
      return el;
    }
  });
})(window.DMS);
