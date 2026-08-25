(function (DMS) {
  DMS.register('Spinner', {
    render(props = {}) {
      const { size = 'md' } = props;
      return `<div class="dms-spinner dms-spinner--${size}" role="status"><span class="dms-sr-only">Loading</span></div>`;
    }
  });
})(window.DMS);
