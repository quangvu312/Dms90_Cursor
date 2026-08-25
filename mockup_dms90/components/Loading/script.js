(function (DMS) {
  DMS.register('Loading', {
    render(props = {}) {
      const { text = 'Đang tải...' } = props;
      return `<div class="dms-loading">
        ${DMS.render('Spinner', { size: 'lg' })}
        <p class="dms-mt-md">${DMS.escape(text)}</p>
      </div>`;
    }
  });
})(window.DMS);
