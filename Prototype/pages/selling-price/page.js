async function renderSellingPriceList() {
  const data = await SellingPriceShared.loadData();
  const params = new URLSearchParams(location.hash.split('?')[1] || '');
  const tab = params.get('tab') === 'current' ? 'current' : 'list';
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const source = tab === 'current'
    ? data.items.filter(it => SellingPriceShared.isCurrentlyApplicable(it, today))
    : data.items;

  const columns = [
    { key: 'code', title: 'Mã bảng giá' },
    {
      key: 'name',
      title: 'Tên bảng giá',
      render: (val, row) =>
        `<a class="dms-table__link" data-route="/master/product/selling-price/detail?id=${DMS.escape(row.id)}">${DMS.escape(val)}</a>`
    },
    {
      key: 'period',
      title: 'Thời gian áp dụng',
      render: (_, row) => `${DMS.escape(row.fromDate)} → ${DMS.escape(row.toDate)}`
    },
    {
      key: 'applyObject',
      title: 'Đối tượng áp dụng',
      render: (val) => DMS.render('Tag', { text: val || 'Tất cả', type: val && val !== 'Tất cả' ? 'blue' : 'default' })
    },
    {
      key: 'customerGroups',
      title: 'Nhóm khách hàng',
      render: (val) => (val || []).map(g => DMS.render('Tag', { text: g, type: 'blue' })).join(' ')
    },
    {
      key: 'status',
      title: 'Trạng thái',
      render: (val) => {
        const s = SellingPriceShared.statusLabel(val);
        return DMS.render('StatusTag', { status: val, text: s.text });
      }
    },
    { key: 'createdAt', title: 'Ngày tạo' },
    { key: 'createdBy', title: 'Người tạo' },
    { key: 'updatedAt', title: 'Ngày cập nhật' },
    { key: 'updatedBy', title: 'Người cập nhật' },
    {
      key: 'actions',
      title: 'Tùy chỉnh',
      render: (_, row) => row.status === 'DRAFT'
        ? DMS.render('TableActions', {
            actions: [{ type: 'edit', title: 'Chỉnh sửa', dataAction: `edit-sp-${row.id}` }]
          })
        : ''
    }
  ];

  const filter = DMS.render('FilterPanel', {
    fields: [
      { type: 'search', id: 'sp-filter-q', label: 'Tìm kiếm theo', placeholder: 'Theo Mã | Tên bảng giá' },
      { type: 'date', id: 'sp-filter-date', label: 'Thời gian áp dụng', placeholder: 'Chọn thời gian áp dụng' },
      {
        type: 'select',
        id: 'sp-filter-object',
        label: 'Đối tượng áp dụng',
        placeholder: 'Chọn đối tượng áp dụng',
        options: [{ value: 'STORE_GROUP', label: 'Nhóm khách hàng' }]
      },
      {
        type: 'select',
        id: 'sp-filter-status',
        label: 'Trạng thái',
        placeholder: 'Trạng thái',
        options: [
          { value: 'DRAFT', label: 'Khởi tạo' },
          { value: 'CANCELLED', label: 'Đã hủy' },
          { value: 'APPROVED', label: 'Đã duyệt' }
        ]
      }
    ]
  });

  const toolbar = `
    <div class="dms-page-toolbar dms-mt-md">
      <h1 class="dms-page-header__title dms-m-0">Bảng Giá Bán</h1>
    </div>`;

  const tabs = DMS.render('Tabs', {
    active: tab === 'current' ? 1 : 0,
    tabs: [
      { label: 'Danh sách bảng giá' },
      { label: 'Bảng giá áp dụng hiện tại' }
    ]
  });

  const listCard = DMS.render('Card', {
    title: tab === 'current' ? 'Bảng giá áp dụng hiện tại' : 'Danh sách bảng giá',
    extra: `
      ${DMS.render('Button', { text: 'Export Excel', type: 'default', dataAction: 'export-sp' })}
      ${DMS.render('Button', { text: 'Tạo mới', type: 'primary', dataAction: 'create-sp' })}
    `,
    body: `<div id="sp-list-body">${
      DMS.render('Table', { columns, data: source }) +
      DMS.render('Pagination', {
        current: 1,
        pageSize: data.pagination.pageSize,
        total: source.length,
        pageSizeOptions: [10, 50, 100]
      })
    }</div>`
  });

  renderSellingPriceList.onMount = function (container) {
    bindSellingPriceList(container, columns, source, data.pagination.pageSize);
  };

  return `
    ${SellingPriceShared.breadcrumb('Bảng Giá Bán')}
    ${toolbar}
    ${tabs}
    ${filter}
    ${listCard}
  `;
}

function bindSellingPriceList(container, columns, source, pageSize) {
  const refreshList = (rows) => {
    const body = container.querySelector('#sp-list-body');
    if (!body) return;
    const tableHtml = rows.length
      ? DMS.render('Table', { columns, data: rows })
      : `<div class="dms-table-wrapper">${DMS.render('EmptyState', { title: 'Trống' })}</div>`;
    body.innerHTML = tableHtml + DMS.render('Pagination', {
      current: 1,
      pageSize,
      total: rows.length,
      pageSizeOptions: [10, 50, 100]
    });
  };

  const readFilters = () => ({
    q: document.getElementById('sp-filter-q')?.value || '',
    date: document.getElementById('sp-filter-date')?.value || '',
    applyObject: document.getElementById('sp-filter-object')?.value || '',
    status: document.getElementById('sp-filter-status')?.value || ''
  });

  container.addEventListener('click', (e) => {
    const tab = e.target.closest('.dms-tabs__tab');
    if (tab) {
      const idx = Number(tab.dataset.tab);
      DMSRouter.navigate(idx === 1
        ? '/master/product/selling-price?tab=current'
        : '/master/product/selling-price');
      return;
    }
    if (e.target.closest('[data-action="create-sp"]')) {
      SellingPriceShared.resetDraft();
      DMSRouter.navigate('/master/product/selling-price/create');
      return;
    }
    const edit = e.target.closest('[data-action^="edit-sp-"]');
    if (edit) {
      const id = edit.dataset.action.replace('edit-sp-', '');
      DMSRouter.navigate(`/master/product/selling-price/edit?id=${id}`);
      return;
    }
    if (e.target.closest('[data-action="export-sp"]')) {
      const empty = container.querySelector('#sp-list-body .dms-empty');
      if (empty) {
        DMS.get('Toast').show('Không thể xuất file vì không có dữ liệu', 'error');
        return;
      }
      DMS.get('Dialog').confirm('Bạn có muốn xuất danh sách bảng giá bán không ?', () => {
        DMS.get('Toast').show('Xuất file Danhsachbanggia thành công', 'success');
      });
      return;
    }
    if (e.target.closest('[data-action="filter-search"]')) {
      refreshList(SellingPriceShared.filterListItems(source, readFilters()));
      return;
    }
    if (e.target.closest('[data-action="filter-reset"]')) {
      const q = document.getElementById('sp-filter-q');
      const date = document.getElementById('sp-filter-date');
      const obj = document.getElementById('sp-filter-object');
      const status = document.getElementById('sp-filter-status');
      if (q) q.value = '';
      if (date) date.value = '';
      if (obj) obj.value = '';
      if (status) status.value = '';
      refreshList(source);
    }
  });
}

window.renderSellingPriceList = renderSellingPriceList;
