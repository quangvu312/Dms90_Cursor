(function (DMS) {
  DMS.register('Button', {
    render(props = {}) {
      const {
        text = '',
        type = 'default',
        size = 'md',
        disabled = false,
        loading = false,
        icon = '',
        iconOnly = false,
        id = '',
        className = '',
        htmlType = 'button',
        dataAction = '',
        dataRoute = ''
      } = props;

      const classes = DMS.classNames(
        'dms-btn',
        `dms-btn--${type}`,
        size !== 'md' ? `dms-btn--${size}` : '',
        iconOnly ? 'dms-btn--icon' : '',
        loading ? 'is-loading' : '',
        disabled ? 'is-disabled' : '',
        className
      );

      const attrs = DMS.attrs({
        type: htmlType,
        id: id || undefined,
        disabled: disabled || loading,
        'data-action': dataAction || undefined,
        'data-route': dataRoute || undefined
      });

      return `<button class="${classes}" ${attrs}>
        ${icon ? `<span class="dms-btn__icon">${icon}</span>` : ''}
        ${!iconOnly ? `<span class="dms-btn__text">${DMS.escape(text)}</span>` : ''}
      </button>`;
    }
  });
})(window.DMS);
