async function renderProductList() {
  const data = await fetch('data/product.json').then(r => r.json());

  const columns = [
    {
      key: 'image',
      title: 'Ảnh',
      width: '60px',
      render: () => DMS.render('Avatar', { text: 'SP', size: 'sm' })
    },
    { key: 'sku', title: 'Mã sản phẩm' },
    {
      key: 'name',
      title: 'Tên sản phẩm',
      render: (val, row) => `<a class="dms-table__link" data-route="/master/product/detail?id=${DMS.escape(row.id)}">${DMS.escape(val)}</a>`
    },
    { key: 'baseUnit', title: 'Đơn vị' },
    { key: 'categoryPath', title: 'Phân cấp' },
    { key: 'businessUnit', title: 'Đơn vị kinh doanh' },
    {
      key: 'status',
      title: 'Trạng thái',
      render: (val) => DMS.render('Switch', { checked: val === 'ACTIVE', label: '' })
    },
    { key: 'createdAt', title: 'Ngày tạo' },
    { key: 'updatedAt', title: 'Ngày cập nhật' },
    { key: 'createdBy', title: 'Người tạo' },
    { key: 'updatedBy', title: 'Người cập nhật' },
    {
      key: 'actions',
      title: 'Tùy chỉnh',
      render: (_, row) => DMS.render('TableActions', {
        actions: [{ type: 'edit', title: 'Chỉnh sửa', dataAction: `edit-product-${row.id}` }]
      })
    }
  ];

  const filter = DMS.render('FilterPanel', {
    fields: [
      { type: 'search', label: 'Tìm kiếm theo', placeholder: 'Tìm kiếm theo mã/tên sản phẩm' },
      {
        type: 'select',
        label: 'Trạng thái',
        placeholder: 'Trạng thái',
        options: [
          { value: 'ACTIVE', label: 'Hoạt động' },
          { value: 'INACTIVE', label: 'Không hoạt động' }
        ]
      }
    ]
  });

  const toolbar = `
    <div class="dms-page-toolbar dms-mt-md">
      <h1 class="dms-page-header__title dms-m-0">Danh sách sản phẩm</h1>
      ${DMS.render('Button', { text: 'Tạo mới', type: 'primary', dataAction: 'create-product' })}
    </div>`;

  const table = DMS.render('Table', { columns, data: data.items });
  const pagination = DMS.render('Pagination', {
    current: data.pagination.page,
    pageSize: data.pagination.pageSize,
    total: data.pagination.total,
    pageSizeOptions: [10, 50, 100]
  });

  return `
    ${ProductShared.productBreadcrumb('Danh sách sản phẩm')}
    ${toolbar}
    ${filter}
    ${DMS.render('Card', { body: table + pagination })}
  `;
}

renderProductList.onMount = function (container) {
  container.addEventListener('click', async (e) => {
    const createBtn = e.target.closest('[data-action="create-product"]');
    if (createBtn) {
      DMSRouter.navigate('/master/product/create');
      return;
    }

    const editBtn = e.target.closest('[data-action^="edit-product-"]');
    if (editBtn) {
      const id = editBtn.dataset.action.replace('edit-product-', '');
      DMSRouter.navigate(`/master/product/edit?id=${id}`);
      return;
    }

    const sw = e.target.closest('.dms-switch');
    if (sw) {
      const confirmed = confirm('Bạn có chắc chắn muốn thay đổi trạng thái hay không?');
      if (!confirmed) e.preventDefault();
    }
  });
};

window.renderProductList = renderProductList;
