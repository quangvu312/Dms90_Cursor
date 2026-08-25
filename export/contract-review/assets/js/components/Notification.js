(function (DMS) {
  DMS.register('Notification', {
    render(props = {}) {
      const { title = '', message = '', type = 'info' } = props;
      return `<div class="dms-toast dms-toast--${type}">
        <div>
          ${title ? `<strong>${DMS.escape(title)}</strong><br/>` : ''}
          ${DMS.escape(message)}
        </div>
      </div>`;
    },

    show(title, message, type = 'info') {
      DMS.get('Toast').show(`${title}: ${message}`, type, 4000);
    }
  });
})(window.DMS);
