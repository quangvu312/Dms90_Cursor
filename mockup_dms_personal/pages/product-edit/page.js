async function renderProductEdit() {
  const params = new URLSearchParams(location.hash.split('?')[1] || '');
  const id = params.get('id');
  const [product, refs] = await Promise.all([
    ProductShared.findProduct(id),
    ProductShared.loadRefs()
  ]);

  if (!product) {
    return ProductShared.productBreadcrumb('Chỉnh sửa sản phẩm') +
      DMS.render('EmptyState', { title: 'Không tìm thấy sản phẩm' });
  }

  const formBody = ProductShared.renderFormBody({ mode: 'edit', product, refs });
  const modal = DMS.render('Modal', {
    id: 'product-edit-modal',
    title: 'Chỉnh sửa sản phẩm',
    size: 'lg',
    body: formBody,
    footer: `
      ${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'modal-close' })}
      ${DMS.render('Button', { text: 'Lưu', type: 'primary', dataAction: 'save-product' })}
    `
  });

  const listHtml = await renderProductList();
  return listHtml + modal;
}

renderProductEdit.onMount = function () {
  document.getElementById('product-edit-modal')?.addEventListener('click', (e) => {
    if (e.target.closest('[data-action="modal-close"]') || e.target.id === 'product-edit-modal') {
      DMSRouter.navigate('/master/product/list');
    }
    if (e.target.closest('[data-action="save-product"]')) {
      DMS.get('Toast').show('Chỉnh sửa sản phẩm thành công', 'success');
      DMSRouter.navigate('/master/product/list');
    }
  });
};

window.renderProductEdit = renderProductEdit;
