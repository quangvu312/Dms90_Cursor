(function (DMS) {
  DMS.register('FilterPanel', {
    render(props = {}) {
      const { fields = [], actions = true, title = '' } = props;
      const fieldsHtml = fields.map(f => {
        switch (f.type) {
          case 'search':
            return DMS.render('SearchBox', f);
          case 'date':
            return DMS.render('DatePicker', f);
          case 'select':
            return DMS.render('Select', f);
          case 'multiselect':
            return DMS.render('MultiSelect', f);
          default:
            return DMS.render('Input', f);
        }
      }).join('');

      const actionsHtml = actions ? `<div class="dms-filter-panel__actions">
        ${DMS.render('Button', { text: 'Làm mới', type: 'ghost', dataAction: 'filter-reset' })}
        ${DMS.render('Button', { text: 'Tìm kiếm', type: 'primary', dataAction: 'filter-search' })}
      </div>` : '';

      return DMS.render('Card', {
        title,
        body: `<div class="dms-filter-panel"><div class="dms-form-grid">${fieldsHtml}</div>${actionsHtml}</div>`
      });
    }
  });
})(window.DMS);
