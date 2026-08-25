(function (DMS) {
  DMS.register('Menu', {
    render(props = {}) {
      const { items = [], level = 0 } = props;

      const renderItem = (item) => {
        const hasChildren = item.children && item.children.length;
        const isActive = item.active ? ' is-active' : '';
        const isExpanded = item.expanded ? ' is-expanded' : '';

        if (hasChildren) {
          const sub = DMS.render('Menu', { items: item.children, level: level + 1 });
          return `<li class="dms-menu__item${isExpanded}${isActive}">
            <button class="dms-menu__toggle" type="button">
              ${item.icon ? `<span class="dms-menu__icon">${item.icon}</span>` : ''}
              <span>${DMS.escape(item.label)}</span>
              <span class="dms-menu__arrow">›</span>
            </button>
            <ul class="dms-menu__submenu">${sub}</ul>
          </li>`;
        }

        const route = item.route ? `data-route="${DMS.escape(item.route)}" href="#${DMS.escape(item.route)}"` : 'href="#"';
        return `<li class="dms-menu__item${isActive}">
          <a class="dms-menu__link" ${route}>
            ${item.icon ? `<span class="dms-menu__icon">${item.icon}</span>` : ''}
            <span>${DMS.escape(item.label)}</span>
          </a>
        </li>`;
      };

      return items.map(renderItem).join('');
    }
  });
})(window.DMS);
