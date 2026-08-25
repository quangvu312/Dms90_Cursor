(function (DMS) {
  const containerId = 'dms-toast-container';

  DMS.register('Toast', {
    render(props = {}) {
      const { message = '', type = 'info', duration = 3000 } = props;
      return `<div class="dms-toast dms-toast--${type}" data-duration="${duration}">
        <span>${DMS.escape(message)}</span>
      </div>`;
    },

    show(message, type = 'info', duration = 3000) {
      let container = document.getElementById(containerId);
      if (!container) {
        container = document.createElement('div');
        container.id = containerId;
        container.className = 'dms-toast-container';
        document.body.appendChild(container);
      }
      const el = document.createElement('div');
      el.innerHTML = this.render({ message, type, duration });
      const toast = el.firstElementChild;
      container.appendChild(toast);
      setTimeout(() => toast.remove(), duration);
    }
  });
})(window.DMS);
