(function (DMS) {
  DMS.register('SearchBox', {
    render(props = {}) {
      const { id = '', placeholder = 'Tìm kiếm...', value = '', label = '' } = props;
      const input = DMS.render('Input', { id, placeholder, value, className: 'dms-searchbox__input' });
      if (label) {
        return `<div class="dms-form-item"><label class="dms-form-item__label">${DMS.escape(label)}</label>${input}</div>`;
      }
      return input;
    }
  });
})(window.DMS);
