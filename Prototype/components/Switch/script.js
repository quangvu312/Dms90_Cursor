(function (DMS) {
  DMS.register('Switch', {
    render(props = {}) {
      const { id = '', checked = false, disabled = false, label = '', dataAction = '' } = props;
      return `<label class="dms-flex dms-items-center dms-gap-sm">
        <button type="button" class="dms-switch ${checked ? 'is-checked' : ''}" ${DMS.attrs({ id, disabled, 'data-action': dataAction || undefined })} role="switch" aria-checked="${checked}">
          <span class="dms-switch__handle"></span>
        </button>
        ${label ? `<span>${DMS.escape(label)}</span>` : ''}
      </label>`;
    }
  });
})(window.DMS);
