async function renderProductGroup() {
  const data = await fetch('data/product-group.json').then(r => r.json());

  const table = DMS.render('Table', {
    columns: [
      { key: 'code', title: 'Mã nhóm' },
      { key: 'name', title: 'Tên nhóm sản phẩm' },
      { key: 'description', title: 'Mô tả' },
      {
        key: 'status',
        title: 'Trạng thái',
        render: (v) => DMS.render('StatusTag', { status: v })
      }
    ],
    data: data.items
  });

  return `
    ${ProductShared.productBreadcrumb('Nhóm sản phẩm')}
    <h1 class="dms-page-header__title">Nhóm sản phẩm</h1>
    ${DMS.render('Card', { body: table })}
  `;
}

window.renderProductGroup = renderProductGroup;
