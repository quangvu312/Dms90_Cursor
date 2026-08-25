(function (DMS) {
  DMS.register('Collapse', {
    render(props = {}) {
      const { items = [] } = props;
      const html = items.map((item, i) => `
        <div class="dms-collapse__item ${item.open ? 'is-open' : ''}" data-collapse="${i}">
          <div class="dms-collapse__header">${DMS.escape(item.title)}<span>▼</span></div>
          <div class="dms-collapse__body">${item.content || ''}</div>
        </div>
      `).join('');
      return `<div class="dms-collapse">${html}</div>`;
    }
  });
})(window.DMS);
