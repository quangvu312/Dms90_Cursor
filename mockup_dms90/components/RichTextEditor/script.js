/**
 * RichTextEditor — toolbar + contenteditable (prototype CMS)
 */
(function (DMS) {
  'use strict';

  function btn(cmd, label, title) {
    return `<button type="button" class="ts-rte__btn" data-rte-cmd="${cmd}" title="${DMS.escape(title || label)}">${label}</button>`;
  }

  DMS.register('RichTextEditor', {
    render(props = {}) {
      const id = props.id || 'ts-rte';
      const html = props.value || props.html || '';
      const disabled = !!props.disabled;
      return `<div class="ts-rte ${disabled ? 'is-disabled' : ''}" id="${DMS.escape(id)}">
        ${disabled ? '' : `<div class="ts-rte__toolbar" role="toolbar">
          ${btn('bold', '<b>B</b>', 'Bold')}
          ${btn('italic', '<i>I</i>', 'Italic')}
          ${btn('formatBlock:H2', 'H2', 'Heading')}
          ${btn('insertUnorderedList', '• List', 'Bullet list')}
          ${btn('insertOrderedList', '1. List', 'Number list')}
          ${btn('createLink', 'Link', 'Insert link')}
          ${btn('insertImage', 'Ảnh', 'Insert image')}
        </div>`}
        <div class="ts-rte__body" data-rte-body="1" contenteditable="${disabled ? 'false' : 'true'}">${html}</div>
      </div>`;
    },
    getHtml(root) {
      const el = typeof root === 'string' ? document.getElementById(root) : root;
      const body = el && el.querySelector('[data-rte-body]');
      return body ? body.innerHTML : '';
    },
    exec(cmd, value) {
      const parts = String(cmd || '').split(':');
      const name = parts[0];
      let val = parts[1] || value || null;
      if (name === 'createLink') {
        const url = window.prompt('Nhập URL', 'https://');
        if (!url) return;
        document.execCommand('createLink', false, url);
        return;
      }
      if (name === 'insertImage') {
        const url = window.prompt('Nhập URL hình ảnh', 'assets/telling-story/img-abc.svg');
        if (!url) return;
        document.execCommand('insertImage', false, url);
        return;
      }
      if (name === 'formatBlock') {
        document.execCommand('formatBlock', false, val || 'H2');
        return;
      }
      document.execCommand(name, false, val);
    },
    bindAll(root) {
      const scope = root || document;
      scope.querySelectorAll('.ts-rte [data-rte-cmd]').forEach((btn) => {
        if (btn.dataset.rteBound) return;
        btn.dataset.rteBound = '1';
        btn.addEventListener('mousedown', (e) => e.preventDefault());
      });
    }
  });
})(window.DMS);
