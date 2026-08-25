(function (DMS) {
  DMS.register('Sidebar', {
    render(props = {}) {
      const { menuItems = [], collapsed = false } = props;
      return `<aside class="dms-sidebar ${collapsed ? 'is-collapsed' : ''}" id="dms-sidebar">
        <nav class="dms-sidebar__menu">
          <ul class="dms-menu">${DMS.render('Menu', { items: menuItems })}</ul>
        </nav>
        <button class="dms-sidebar__collapse-btn" data-action="sidebar-toggle" title="Thu gọn">‹</button>
      </aside>`;
    }
  });
})(window.DMS);
