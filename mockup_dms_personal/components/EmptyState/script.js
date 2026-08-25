(function (DMS) {
  DMS.register('EmptyState', {
    render(props = {}) {
      const { title = 'Không có dữ liệu', description = '', icon = '📭' } = props;
      return `<div class="dms-empty">
        <div class="dms-empty__icon">${icon}</div>
        <div class="dms-empty__title">${DMS.escape(title)}</div>
        ${description ? `<p>${DMS.escape(description)}</p>` : ''}
      </div>`;
    }
  });
})(window.DMS);
