(function (DMS) {
  DMS.register('Avatar', {
    render(props = {}) {
      const { text = '', src = '', size = 'md', className = '' } = props;
      const content = src
        ? `<img src="${DMS.escape(src)}" alt="${DMS.escape(text)}" />`
        : DMS.escape(text.slice(0, 2).toUpperCase());
      return `<span class="dms-avatar dms-avatar--${size} ${className}">${content}</span>`;
    }
  });
})(window.DMS);
