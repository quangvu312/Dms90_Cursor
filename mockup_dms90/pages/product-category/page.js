async function renderProductCategory() {
  const data = await fetch('data/product-category.json').then(r => r.json());

  const flattenTree = (nodes, depth = 0) => {
    let rows = [];
    nodes.forEach(n => {
      rows.push({ code: n.code, name: n.name, level: n.level, status: n.status, depth });
      if (n.children) rows = rows.concat(flattenTree(n.children, depth + 1));
    });
    return rows;
  };

  const flat = flattenTree(data.items);
  const treeHtml = DMS.render('Tree', { data: data.items });

  const table = DMS.render('Table', {
    columns: [
      { key: 'code', title: 'Mã phân cấp' },
      { key: 'name', title: 'Tên phân cấp' },
      { key: 'level', title: 'Cấp độ' },
      {
        key: 'status',
        title: 'Trạng thái',
        type: 'tag',
        tagType: 'green',
        render: (v) => DMS.render('StatusTag', { status: v })
      }
    ],
    data: flat.map(r => ({
      ...r,
      name: `${'—'.repeat(r.depth)} ${r.name}`.trim()
    }))
  });

  return `
    ${ProductShared.productBreadcrumb('Cây phân cấp sản phẩm')}
    <h1 class="dms-page-header__title">Cây phân cấp sản phẩm</h1>
    ${DMS.render('Card', {
      title: 'Cây phân cấp',
      body: treeHtml
    })}
    ${DMS.render('Card', { title: 'Danh sách phân cấp', body: table })}
  `;
}

window.renderProductCategory = renderProductCategory;
