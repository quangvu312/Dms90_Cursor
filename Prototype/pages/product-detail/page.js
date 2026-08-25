async function renderProductDetail() {
  const params = new URLSearchParams(location.hash.split('?')[1] || '');
  const id = params.get('id');
  const product = id ? await ProductShared.findProduct(id) : null;

  if (!product) {
    return ProductShared.productBreadcrumb('Chi tiết sản phẩm') +
      DMS.render('EmptyState', { title: 'Không tìm thấy sản phẩm', description: `ID: ${DMS.escape(id || '')}` });
  }

  const body = ProductShared.renderDetailBody(product);
  const footer = DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'close-detail' });

  return `
    ${ProductShared.productBreadcrumb('Chi tiết sản phẩm')}
    <h1 class="dms-page-header__title">Chi tiết sản phẩm</h1>
    ${DMS.render('Card', { body, footer })}
  `;
}

renderProductDetail.onMount = function (container) {
  container.addEventListener('click', (e) => {
    if (e.target.closest('[data-action="close-detail"]')) {
      DMSRouter.navigate('/master/product/list');
    }
  });
};

window.renderProductDetail = renderProductDetail;
