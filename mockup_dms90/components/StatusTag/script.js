(function (DMS) {
  DMS.register('StatusTag', {
    render(props = {}) {
      const { status = '', text, className = '' } = props;
      const cfg = typeof DMS.resolveStatus === 'function'
        ? DMS.resolveStatus(status)
        : { label: text || status || '', variant: 'default' };
      const label = text != null && String(text) !== '' ? text : cfg.label;
      if (!label) return '';
      const variant = cfg.variant || 'default';
      return `<span class="dms-status-tag dms-status-tag--${DMS.escape(variant)} ${className}">${DMS.escape(label)}</span>`;
    }
  });
})(window.DMS);
