async function renderProductCreate() {
  const refs = await ProductShared.loadRefs();
  const formBody = ProductShared.renderFormBody({ mode: 'create', refs });

  const modal = DMS.render('Modal', {
    id: 'product-create-modal',
    title: 'Tạo mới sản phẩm',
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

renderProductCreate.onMount = function () {
  document.getElementById('product-create-modal')?.addEventListener('click', (e) => {
    if (e.target.closest('[data-action="modal-close"]') || e.target.id === 'product-create-modal') {
      DMSRouter.navigate('/master/product/list');
    }
    if (e.target.closest('[data-action="save-product"]')) {
      DMS.get('Toast').show('Tạo mới sản phẩm thành công', 'success');
      DMSRouter.navigate('/master/product/list');
    }
  });
};

window.renderProductCreate = renderProductCreate;
