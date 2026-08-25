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
              <a href="#">Powered by Finviet</a><br/>
              Công ty Cổ phần Công nghệ FINVIET
            </footer>
          </div>
        </div>
        <button class="dms-fab" title="Hỗ trợ">💬</button>
      `;
    }
  });
})(window.DMS);
