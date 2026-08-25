(function (DMS) {
  DMS.register('Card', {
    render(props = {}) {
      const { title = '', extra = '', body = '', footer = '', className = '' } = props;
      const header = title ? `<div class="dms-card__header">
        <h3 class="dms-card__title">${DMS.escape(title)}</h3>
        ${extra ? `<div class="dms-card__extra">${extra}</div>` : ''}
      </div>` : '';
      const foot = footer ? `<div class="dms-card__footer">${footer}</div>` : '';
      return `<div class="dms-card ${className}">${header}<div class="dms-card__body">${body}</div>${foot}</div>`;
    }
  });
})(window.DMS);
