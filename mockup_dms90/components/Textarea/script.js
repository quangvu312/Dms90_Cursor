(function (DMS) {
  DMS.register('Textarea', {
    render(props = {}) {
      const { id = '', name = '', value = '', placeholder = '', rows = 4, disabled = false, label = '', className = '' } = props;
      const area = `<textarea class="dms-textarea ${className}" rows="${rows}" ${DMS.attrs({ id, name, placeholder, disabled })}>${DMS.escape(value)}</textarea>`;
      if (label) {
        return `<div class="dms-form-item"><label class="dms-form-item__label">${DMS.escape(label)}</label>${area}</div>`;
      }
      return area;
    }
  });
})(window.DMS);
