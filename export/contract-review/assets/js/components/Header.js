(function (DMS) {
  DMS.register('Header', {
    render(props = {}) {
      const { role = 'Admin', userName = 'User', userAvatar = '' } = props;
      return `<header class="dms-header">
        <span class="dms-header__role">Vai trò: ${DMS.escape(role)}</span>
        <div class="dms-header__actions">
          <button class="dms-header__icon-btn" title="Tải lên">⬆</button>
          <button class="dms-header__icon-btn" title="Tải xuống">⬇</button>
          <button class="dms-header__icon-btn" title="Thông báo">🔔</button>
          <button class="dms-header__icon-btn" title="Ngôn ngữ">🌐</button>
          <div class="dms-header__user">
            ${DMS.render('Avatar', { text: userName, size: 'md' })}
            <span>${DMS.escape(userName)}</span>
          </div>
        </div>
      </header>`;
    }
  });
})(window.DMS);
