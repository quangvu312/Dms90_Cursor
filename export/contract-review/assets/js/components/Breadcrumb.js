(function (DMS) {
  DMS.register('Breadcrumb', {
    render(props = {}) {
      const { items = [] } = props;
      const lis = items.map((item, i) => {
        const isLast = i === items.length - 1;
        if (isLast) {
          return `<li class="dms-breadcrumb__item"><span class="dms-breadcrumb__current">${DMS.escape(item.label)}</span></li>`;
        }
        const href = item.route ? `data-route="${DMS.escape(item.route)}"` : '';
        return `<li class="dms-breadcrumb__item"><a class="dms-breadcrumb__link" href="#" ${href}>${DMS.escape(item.label)}</a></li>`;
      }).join('');
      return `<ul class="dms-breadcrumb">${lis}</ul>`;
    }
  });
})(window.DMS);
