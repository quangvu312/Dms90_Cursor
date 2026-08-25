(function (DMS) {
  DMS.register('Tag', {
    render(props = {}) {
      const { text = '', type = 'default', className = '' } = props;
      return `<span class="dms-tag dms-tag--${type} ${className}">${DMS.escape(text)}</span>`;
    }
  });
})(window.DMS);
