(function (DMS) {
  'use strict';

  function renderControl(f) {
    if (f.html) return f.html;
    switch (f.type) {
      case 'search':
        return DMS.render('SearchBox', f);
      case 'date':
        return DMS.render('DatePicker', f);
      case 'daterange':
        return `<div class="dms-form-item">${f.label ? `<label class="dms-form-item__label">${DMS.escape(f.label)}</label>` : ''}
          <div class="dms-filter-daterange">
            ${DMS.render('DatePicker', {
              id: f.fromId || '',
              placeholder: f.fromPlaceholder || 'Từ ngày',
              value: f.fromValue || f.from || ''
            })}
            <span class="dms-filter-daterange__sep" aria-hidden="true">→</span>
            ${DMS.render('DatePicker', {
              id: f.toId || '',
              placeholder: f.toPlaceholder || 'Đến ngày',
              value: f.toValue || f.to || ''
            })}
          </div>
        </div>`;
      case 'select':
        return DMS.render('Select', f);
      case 'multiselect':
        return DMS.render('MultiSelect', f);
      default:
        return DMS.render('Input', f);
    }
  }

  function renderField(f, advanced) {
    const inner = renderControl(f);
    const adv = advanced ? ' is-advanced' : '';
    return `<div class="dms-filter-item${adv}">${inner}</div>`;
  }

  DMS.register('FilterPanel', {
    render(props = {}) {
      const {
        fields = [],
        actions = true,
        collapsed = false,
        collapseAfter,
        extra = '',
        className = ''
      } = props;

      const itemsHtml = fields.map((f, i) => {
        const advanced = collapseAfter != null && i >= collapseAfter;
        return renderField(f, advanced);
      }).join('');

      let expandHtml = '';
      if (collapseAfter != null && fields.length > collapseAfter) {
        expandHtml = DMS.render('Button', {
          text: collapsed ? 'Mở rộng' : 'Thu gọn',
          type: 'link',
          dataAction: 'filter-expand'
        });
      }

      const actionsHtml = actions
        ? `<div class="dms-filter-panel__actions">
            ${DMS.render('Button', { text: 'Làm mới', type: 'default', dataAction: 'filter-reset' })}
            ${DMS.render('Button', { text: 'Tìm kiếm', type: 'primary', dataAction: 'filter-search' })}
            ${expandHtml}
            ${extra || ''}
          </div>`
        : '';

      const collapsedCls = collapsed ? ' is-collapsed' : '';
      const body = `<div class="dms-filter-panel${collapsedCls}">
        <div class="dms-filter-grid">${itemsHtml}${actionsHtml}</div>
      </div>`;

      return DMS.render('Card', {
        className: ('dms-filter-card ' + (className || '')).trim(),
        body
      });
    }
  });
})(window.DMS);
