(function (DMS) {
  DMS.register('Badge', {
    render(props = {}) {
      const { count = 0, max = 99 } = props;
      const display = count > max ? `${max}+` : count;
      if (!count) return '';
      return `<span class="dms-badge">${DMS.escape(display)}</span>`;
    }
  });
})(window.DMS);
