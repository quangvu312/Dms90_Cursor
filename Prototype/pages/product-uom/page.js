async function renderProductUom() {
  const data = await fetch('data/product-uom.json').then(r => r.json());

  const filter = DMS.render('FilterPanel', {
    fields: [
      { type: 'search', label: 'Tìm kiếm', placeholder: 'Tìm kiếm theo tên đơn vị tính' },
      {
        type: 'select',
        label: 'Loại',
        placeholder: 'Loại đơn vị',
        options: [
          { value: 'base', label: 'Đơn vị cơ bản' },
          { value: 'conversion', label: 'Đơn vị quy đổi' }
        ]
      },
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

  const table = DMS.render('Table', {
    columns: [
      { key: 'code', title: 'Mã đơn vị' },
      { key: 'name', title: 'Tên đơn vị tính' },
      {
        key: 'type',
        title: 'Loại',
        render: (v) => v === 'base' ? 'Đơn vị cơ bản' : 'Đơn vị quy đổi'
      },
      {
        key: 'status',
        title: 'Trạng thái',
        render: (v) => DMS.render('StatusTag', { status: v })
      }
    ],
    data: data.items
  });

  return `
    ${ProductShared.productBreadcrumb('Đơn vị đo lường')}
    <h1 class="dms-page-header__title">Đơn vị đo lường</h1>
    ${filter}
    ${DMS.render('Card', { body: table })}
  `;
}

window.renderProductUom = renderProductUom;
