/**
 * DMS Main Layout
 */
(function (DMS) {
  DMS.register('MainLayout', {
    render(props = {}) {
      const { menuItems = [], role = 'Admin', userName = 'User' } = props;
      return `
        <div class="dms-app">
          ${DMS.render('Sidebar', { menuItems })}
          <div class="dms-main">
            ${DMS.render('Header', { role, userName })}
            <main class="dms-content" id="dms-content"></main>
            <footer class="dms-footer">
              <a href="#">Powered by FinViet</a>
              <div class="dms-footer__meta">© 2024 Produced by The development team of FinViet Corp, V2.26.2.1</div>
            </footer>
          </div>
        </div>
        <button class="dms-fab" title="Hỗ trợ">💬</button>
      `;
    }
  });
})(window.DMS);
