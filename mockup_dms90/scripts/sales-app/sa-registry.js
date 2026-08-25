/**
 * App SaleMan — Component Registry (prefix SA_)
 * Pattern giống DMS.register — dùng cho mọi mockup mobile Salesman.
 */
(function (global) {
  'use strict';

  const registry = {};

  function register(name, def) {
    registry[name] = def;
  }

  function render(name, props) {
    const def = registry[name];
    if (!def || typeof def.render !== 'function') {
      console.warn('[SA] Component not found:', name);
      return '';
    }
    return def.render(props || {});
  }

  function esc(s) {
    if (global.DMS && typeof global.DMS.escape === 'function') return global.DMS.escape(s == null ? '' : s);
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  global.SA = {
    register,
    render,
    esc,
    registry
  };
})(window);
