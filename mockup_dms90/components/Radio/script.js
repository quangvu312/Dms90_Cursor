(function (DMS) {
  DMS.register('Radio', {
    render(props = {}) {
      const { id = '', name = '', value = '', checked = false, disabled = false, label = '' } = props;
      return `<label class="dms-radio">
        <input class="dms-radio__input" type="radio" ${DMS.attrs({ id, name, value, disabled })} ${checked ? 'checked' : ''} />
        ${label ? `<span>${DMS.escape(label)}</span>` : ''}
      </label>`;
    }
  });
})(window.DMS);
