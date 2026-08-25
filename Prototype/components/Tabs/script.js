(function (DMS) {
  DMS.register('Tabs', {
    render(props = {}) {
      const { tabs = [], active = 0 } = props;
      const tabButtons = tabs.map((tab, i) =>
        `<button class="dms-tabs__tab ${i === active ? 'is-active' : ''}" data-tab="${i}">${DMS.escape(tab.label)}</button>`
      ).join('');
      const panels = tabs.map((tab, i) =>
        `<div class="dms-tabs__panel ${i !== active ? 'is-hidden' : ''}" data-panel="${i}">${tab.content || ''}</div>`
      ).join('');
      return `<div class="dms-tabs"><div class="dms-tabs__list">${tabButtons}</div>${panels}</div>`;
    }
  });
})(window.DMS);
