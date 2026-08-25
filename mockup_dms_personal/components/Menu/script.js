(function (DMS) {
  'use strict';

  const ICONS = {
    dashboard: '<svg viewBox="64 64 896 896" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-600-80h536c4.4 0 8-3.6 8-8V232c0-4.4-3.6-8-8-8H288c-4.4 0-8 3.6-8 8v472c0 4.4 3.6 8 8 8z"/></svg>',
    cluster: '<svg viewBox="64 64 896 896" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM305.8 304h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm176 80h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm176 80h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zM305.8 544h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm352 80h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8z"/></svg>',
    fund: '<svg viewBox="64 64 896 896" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M912 302.3L784 499c-3.8 5.8-10.2 9.3-17.1 9.3H568c-6.7 0-10.4-7.7-6.3-12.9l140.5-183.3H568c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8h241c8.8 0 16 7.2 16 16v56.3c0 3.3-1 6.6-3 9.3zM136 240h56c4.4 0 8 3.6 8 8v496h496c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H136c-4.4 0-8-3.6-8-8V248c0-4.4 3.6-8 8-8zm64 120c0-4.4 3.6-8 8-8h120c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8H208c-4.4 0-8-3.6-8-8V360zm216-8c0-4.4 3.6-8 8-8h120c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8H424c-4.4 0-8-3.6-8-8V352z"/></svg>',
    shop: '<svg viewBox="64 64 896 896" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M888 344.1h-51.2V160c0-17.7-14.3-32-32-32H219.2c-17.7 0-32 14.3-32 32v184.1H136c-17.7 0-32 14.3-32 32v464c0 17.7 14.3 32 32 32h752c17.7 0 32-14.3 32-32v-464c0-17.7-14.3-32-32-32zM251.2 192h521.6v152.1H251.2V192zm600.8 616H172V408.1h680V808zM360 536c0-4.4 3.6-8 8-8h288c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H368c-4.4 0-8-3.6-8-8v-48z"/></svg>',
    idcard: '<svg viewBox="64 64 896 896" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136V232h752v560zM272 448a112 112 0 11112 112 112 112 0 01-112-112zm296 95.5V488c0-4.4 3.6-8 8-8h224c4.4 0 8 3.6 8 8v55.5c0 4.4-3.6 8-8 8H576c-4.4 0-8-3.6-8-8zm0 138V626c0-4.4 3.6-8 8-8h224c4.4 0 8 3.6 8 8v55.5c0 4.4-3.6 8-8 8H576c-4.4 0-8-3.6-8-8z"/></svg>',
    'file-text': '<svg viewBox="64 64 896 896" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zM232 868V156h302v214c0 23.2 18.8 42 42 42h214v456H232zm148-298h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H380c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0 160h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H380c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8z"/></svg>',
    'ordered-list': '<svg viewBox="64 64 896 896" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M384 186h448c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H384c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0 384h448c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H384c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0 384h448c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H384c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zM169.1 280.5L224 216v172h48V152h-48.6l-70.3 78.5 33 50zM224 706h-16c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h104v-56c0-39.8-32.2-72-72-72h-16c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"/></svg>',
    gift: '<svg viewBox="64 64 896 896" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M880 310H732.4c13.6-21.4 21.6-46.8 21.6-74 0-76.1-61.9-138-138-138-41.4 0-78.7 18.4-104 47.4-25.3-29-62.6-47.4-104-47.4-76.1 0-138 61.9-138 138 0 27.2 7.9 52.6 21.6 74H144c-17.7 0-32 14.3-32 32v200h40v336c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V542h40V342c0-17.7-14.3-32-32-32zM472 792H232V542h240v250zm0-314H184V374h288v104zm80 314V542h240v250H552zm280-314H552V374h288v104z"/></svg>',
    database: '<svg viewBox="64 64 896 896" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-600 72h560v208H232V136zm560 480H232V408h560v208zm0 272H232V680h560v208zM304 240a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0z"/></svg>',
    tags: '<svg viewBox="64 64 896 896" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M483.2 790.3L861.4 412c1.7-1.7 2.5-4 2.3-6.3l-25.5-301.4c-.7-7.8-6.8-13.9-14.6-14.6L522.2 64.3c-2.3-.2-4.7.6-6.3 2.3L137.7 444.8a8.03 8.03 0 000 11.3l334.2 334.2c3.1 3.2 8.2 3.2 11.3 0zm62.6-651.7l224.6 19 19 224.6L477.5 694 233.9 450.4l311.9-311.8zm60.16 186.23a48 48 0 1067.88-67.89 48 48 0 10-67.88 67.89zM889.7 539.8l-39.6-39.5a8.03 8.03 0 00-11.3 0l-362 361.3-237.6-237a8.03 8.03 0 00-11.3 0l-39.6 39.5a8.03 8.03 0 000 11.3l243.2 242.8 39.6 39.5c3.1 3.1 8.2 3.1 11.3 0l407.3-406.6c3.1-3.1 3.1-8.2 0-11.3z"/></svg>',
    'file-search': '<svg viewBox="64 64 896 896" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216c0 23.2 18.8 42 42 42h216v494zM429 580.5c-38.4-41.8-91.5-66.1-149-66.1-57.5 0-110.6 24.3-149 66.1a8.02 8.02 0 00-.6 10.9l39.5 45.6a8.03 8.03 0 0011.7.7c27.4-24.6 62.7-38.2 98.4-38.2s71 13.6 98.4 38.2a8.03 8.03 0 0011.7-.7l39.5-45.6c2.6-3 2.4-7.5-.6-10.9z"/></svg>',
    profile: '<svg viewBox="64 64 896 896" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM492 400h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zM340 378a40 40 0 1080 0 40 40 0 10-80 0zm0 144a40 40 0 1080 0 40 40 0 10-80 0zm0 144a40 40 0 1080 0 40 40 0 10-80 0z"/></svg>',
    bell: '<svg viewBox="64 64 896 896" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M816 768h-24V428c0-141.1-104.3-257.7-240-290.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v25.9c-135.7 32.4-240 149-240 290.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48z"/></svg>',
    'bar-chart': '<svg viewBox="64 64 896 896" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-600-80h80c4.4 0 8-3.6 8-8V484c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v220c0 4.4 3.6 8 8 8zm180 0h80c4.4 0 8-3.6 8-8V348c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v356c0 4.4 3.6 8 8 8zm180 0h80c4.4 0 8-3.6 8-8V252c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v452c0 4.4 3.6 8 8 8z"/></svg>',
    mobile: '<svg viewBox="64 64 896 896" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zm-8 824H288V134h448v752zM512 810c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40z"/></svg>',
  };

  const ARROW = '<svg class="dms-menu__arrow-icon" viewBox="64 64 896 896" width="10" height="10" fill="currentColor" aria-hidden="true"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"/></svg>';

  function iconHtml(icon) {
    if (!icon) return '';
    if (ICONS[icon]) return ICONS[icon];
    if (String(icon).indexOf('<svg') === 0) return icon;
    return '';
  }

  DMS.register('Menu', {
    render(props = {}) {
      const { items = [], level = 0 } = props;

      const renderItem = (item) => {
        const hasChildren = item.children && item.children.length;
        const isActive = item.active ? ' is-active' : '';
        const isExpanded = item.expanded ? ' is-expanded' : '';
        const pad = 16 + level * 16;
        const icon = iconHtml(item.icon);
        const iconSpan = icon ? `<span class="dms-menu__icon">${icon}</span>` : '';

        if (hasChildren) {
          const sub = DMS.render('Menu', { items: item.children, level: level + 1 });
          return `<li class="dms-menu__item${isExpanded}${isActive}">
            <button class="dms-menu__toggle" type="button" style="padding-left:${pad}px">
              ${iconSpan}
              <span class="dms-menu__label">${DMS.escape(item.label)}</span>
              <span class="dms-menu__arrow">${ARROW}</span>
            </button>
            <ul class="dms-menu__submenu">${sub}</ul>
          </li>`;
        }

        const route = item.route ? `data-route="${DMS.escape(item.route)}" href="#${DMS.escape(item.route)}"` : 'href="#"';
        return `<li class="dms-menu__item${isActive}">
          <a class="dms-menu__link" ${route} style="padding-left:${pad}px">
            ${iconSpan}
            <span class="dms-menu__label">${DMS.escape(item.label)}</span>
          </a>
        </li>`;
      };

      return items.map(renderItem).join('');
    }
  });
})(window.DMS);
