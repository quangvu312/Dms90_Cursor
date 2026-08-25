(function (DMS) {
  DMS.register('Sidebar', {
    render(props = {}) {
      const { menuItems = [], collapsed = false } = props;
      return `<aside class="dms-sidebar ${collapsed ? 'is-collapsed' : ''}" id="dms-sidebar">
        <div class="dms-sidebar__logo">
          <div class="dms-sidebar__logo-icon">eco</div>
          <span class="dms-sidebar__logo-text">dms</span>
        </div>
        <nav class="dms-sidebar__menu">
          <ul class="dms-menu">${DMS.render('Menu', { items: menuItems })}</ul>
        </nav>
        <button class="dms-sidebar__collapse-btn" data-action="sidebar-toggle" title="Thu gọn">‹</button>
      </aside>`;
    }
  });
})(window.DMS);
