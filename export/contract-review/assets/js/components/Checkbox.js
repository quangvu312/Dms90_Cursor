(function (DMS) {
  DMS.register('Checkbox', {
    render(props = {}) {
      const { id = '', name = '', checked = false, disabled = false, label = '', className = '' } = props;
      return `<label class="dms-checkbox ${disabled ? 'is-disabled' : ''} ${className}">
        <input class="dms-checkbox__input" type="checkbox" ${DMS.attrs({ id, name, disabled })} ${checked ? 'checked' : ''} />
        ${label ? `<span>${DMS.escape(label)}</span>` : ''}
      </label>`;
    }
  });
})(window.DMS);
