(function (DMS) {
  DMS.register('Input', {
    render(props = {}) {
      const {
        id = '',
        name = '',
        type = 'text',
        value = '',
        placeholder = '',
        disabled = false,
        readonly = false,
        required = false,
        className = '',
        label = '',
        requiredMark = false
      } = props;

      const input = `<input
        class="dms-input ${className}"
        ${DMS.attrs({ id, name, type, value, placeholder, disabled, readonly, required })}
      />`;

      if (label) {
        return `<div class="dms-form-item">
          <label class="dms-form-item__label ${requiredMark ? 'is-required' : ''}" ${id ? `for="${DMS.escape(id)}"` : ''}>${DMS.escape(label)}</label>
          ${input}
        </div>`;
      }
      return input;
    }
  });
})(window.DMS);
