(function (DMS) {
  DMS.register('Pagination', {
    render(props = {}) {
      const {
        current = 1,
        pageSize = 10,
        total = 0,
        pageSizeOptions = [10, 20, 50, 100],
        unit = 'dòng'
      } = props;

      const start = total === 0 ? 0 : (current - 1) * pageSize + 1;
      const end = Math.min(current * pageSize, total);
      const totalPages = Math.ceil(total / pageSize);

      const sizeOpts = pageSizeOptions.map(s =>
        `<option value="${s}" ${s === pageSize ? 'selected' : ''}>${s} / trang</option>`
      ).join('');

      return `<div class="dms-pagination">
        <span class="dms-pagination__info">${start}-${end} trên ${total} ${DMS.escape(unit)}</span>
        <button class="dms-pagination__btn" ${current <= 1 ? 'disabled' : ''} data-page="${current - 1}">‹</button>
        <button class="dms-pagination__btn is-active">${current}</button>
        ${totalPages > 1 ? `<button class="dms-pagination__btn" data-page="${current + 1}" ${current >= totalPages ? 'disabled' : ''}>›</button>` : ''}
        <div class="dms-pagination__size">
          <select>${sizeOpts}</select>
        </div>
      </div>`;
    }
  });
})(window.DMS);
