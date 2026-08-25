(function (DMS) {
  DMS.register('Table', {
    render(props = {}) {
      const {
        columns = [],
        data = [],
        selectable = false,
        summary = '',
        rowActions = false
      } = props;

      let thead = columns.map(col => {
        const fixedClass = col.fixed === 'right' ? ' class="dms-table__cell--fixed-right"' : '';
        if (col.type === 'checkbox') {
          return `<th${fixedClass} style="width:40px">${DMS.render('Checkbox', { label: '' })}</th>`;
        }
        return `<th${fixedClass}${col.width ? ` style="width:${col.width}"` : ''}>${DMS.escape(col.title || col.key)}</th>`;
      }).join('');

      if (rowActions) {
        thead += '<th class="dms-table__cell--fixed-right" style="width:60px">Tùy chỉnh</th>';
      }

      const tbody = data.map((row, idx) => {
        const cells = columns.map(col => {
          const fixedClass = col.fixed === 'right' ? ' class="dms-table__cell--fixed-right"' : '';
          if (col.type === 'checkbox') {
            return `<td${fixedClass}>${DMS.render('Checkbox', {})}</td>`;
          }
          let val = row[col.key];
          if (col.render) {
            val = col.render(val, row, idx);
          } else if (col.type === 'link') {
            val = `<a class="dms-table__link" data-route="${DMS.escape(row._route || '')}">${DMS.escape(val)}</a>`;
          } else if (col.type === 'tag') {
            val = DMS.render('Tag', { text: val, type: col.tagType || 'default' });
          } else {
            val = DMS.escape(val);
          }
          return `<td${fixedClass}>${val}</td>`;
        }).join('');

        const actionCell = rowActions
          ? `<td class="dms-table__cell--fixed-right">${DMS.render('Button', { type: 'default', iconOnly: true, icon: '🖨', size: 'sm', dataAction: `print-${idx}` })}</td>`
          : '';

        return `<tr>${cells}${actionCell}</tr>`;
      }).join('');

      return `
        ${summary ? `<div class="dms-table__summary">${summary}</div>` : ''}
        <div class="dms-table-wrapper">
          <table class="dms-table">
            <thead><tr>${thead}</tr></thead>
            <tbody>${tbody || `<tr><td colspan="${columns.length + (rowActions ? 1 : 0)}">${DMS.render('EmptyState', { title: 'Không có dữ liệu' })}</td></tr>`}</tbody>
          </table>
        </div>`;
    }
  });
})(window.DMS);
