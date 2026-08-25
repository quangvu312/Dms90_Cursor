async function renderBusinessDistributor() {
  const data = await BusinessShared.loadJson('data/distributor.json');
  const columns = [
    { key: 'region', title: 'Vùng' },
    { key: 'area', title: 'Khu vực' },
    { key: 'code', title: 'Mã nhà phân phối' },
    {
      key: 'name',
      title: 'Tên nhà phân phối',
      render: (val, row) =>
        `<a class="dms-table__link" data-route="/master/business/distributor/detail?id=${DMS.escape(row.id)}">${DMS.escape(val)}</a>`
    },
    { key: 'phone', title: 'SĐT' },
    { key: 'address', title: 'Địa chỉ' },
    { key: 'parentName', title: 'Tên NPP trực thuộc' },
    {
      key: 'status',
      title: 'Trạng thái',
      render: (val, row) => BusinessShared.statusSwitch(val, `toggle-npp-${row.id}`)
    },
    { key: 'createdAt', title: 'Ngày tạo' },
    { key: 'updatedAt', title: 'Ngày cập nhật' },
    { key: 'createdBy', title: 'Người tạo' },
    { key: 'updatedBy', title: 'Người cập nhật' },
    {
      key: 'actions',
      title: 'Tùy chỉnh',
      render: (_, row) => DMS.render('TableActions', {
        actions: [{ type: 'edit', title: 'Chỉnh sửa', dataAction: `edit-npp-${row.id}` }]
      })
    }
  ];

  const filter = DMS.render('FilterPanel', {
    fields: [
      { type: 'search', label: 'Tìm kiếm', placeholder: 'Mã | Tên nhà phân phối' },
      { type: 'select', label: 'Trực thuộc', placeholder: 'Trực thuộc', options: [] },
      { type: 'select', label: 'Tỉnh thành', placeholder: 'Tỉnh thành', options: [{ value: 'HCM', label: 'TP. Hồ Chí Minh' }] },
      { type: 'select', label: 'Quận huyện', placeholder: 'Quận huyện', options: [] },
      { type: 'select', label: 'Phường xã', placeholder: 'Phường xã', options: [] }
    ]
  });

  const toolbar = `
    <div class="dms-page-toolbar dms-mt-md">
      <h1 class="dms-page-header__title dms-m-0">Nhà phân phối</h1>
      <div class="dms-flex dms-gap-sm">
        ${DMS.render('Button', { text: 'Export Excel', type: 'default', dataAction: 'export-npp' })}
        ${DMS.render('Button', { text: 'Tạo mới', type: 'primary', dataAction: 'nav-create', dataRoute: '/master/business/distributor/create' })}
      </div>
    </div>`;

  return `
    ${BusinessShared.breadcrumb('Nhà phân phối', '/master/business/distributor')}
    ${toolbar}
    ${filter}
    ${DMS.render('Card', {
      body: DMS.render('Table', { columns, data: data.items }) +
        DMS.render('Pagination', {
          current: data.pagination.page,
          pageSize: data.pagination.pageSize,
          total: data.pagination.total,
          pageSizeOptions: [10, 50, 100]
        })
    })}
  `;
}

renderBusinessDistributor.onMount = function (container) {
  BusinessShared.bindNavCreate(container);
  container.addEventListener('click', (e) => {
    const edit = e.target.closest('[data-action^="edit-npp-"]');
    if (edit) {
      const id = edit.dataset.action.replace('edit-npp-', '');
      DMSRouter.navigate(`/master/business/distributor/edit?id=${id}`);
    }
    if (e.target.closest('[data-action="export-npp"]')) {
      DMS.get('Toast').show('Xuất file Nhà phân phối thành công', 'success');
    }
    if (e.target.closest('[data-action^="toggle-npp-"]')) {
      DMS.get('Dialog').confirm('Bạn có muốn thay đổi trạng thái nhà phân phối?', () => {
        DMS.get('Toast').show('Cập nhật trạng thái thành công', 'success');
      });
    }
  });
};

window.renderBusinessDistributor = renderBusinessDistributor;
