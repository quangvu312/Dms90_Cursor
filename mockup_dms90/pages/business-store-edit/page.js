async function renderBusinessStoreEdit() {
  const id = new URLSearchParams(location.hash.split('?')[1] || '').get('id');
  const [item, refs] = await Promise.all([
    BusinessShared.findById('data/store.json', id),
    BusinessShared.loadRefs()
  ]);
  const body = BusinessShared.renderStoreFormBody(item || {}, refs, 'edit');
  const listHtml = await renderBusinessStoreList();
  const modal = DMS.render('Modal', {
    id: 'store-edit-modal',
    title: 'Cập nhật điểm bán',
    size: 'lg',
    body,
    footer: `
      ${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'store-close' })}
      ${DMS.render('Button', { text: 'Lưu', type: 'primary', dataAction: 'store-save' })}
    `
  });
  return listHtml + modal;
}

renderBusinessStoreEdit.onMount = renderBusinessStoreCreate.onMount;
window.renderBusinessStoreEdit = renderBusinessStoreEdit;

async function renderBusinessStoreDetail() {
  const id = new URLSearchParams(location.hash.split('?')[1] || '').get('id');
  const [item, refs] = await Promise.all([
    BusinessShared.findById('data/store.json', id),
    BusinessShared.loadRefs()
  ]);
  const body = BusinessShared.renderStoreFormBody(item || {}, refs, 'view');
  const listHtml = await renderBusinessStoreList();
  const modal = DMS.render('Modal', {
    id: 'store-detail-modal',
    title: 'Xem chi tiết điểm bán',
    size: 'lg',
    body,
    footer: DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'store-close' })
  });
  return listHtml + modal;
}

renderBusinessStoreDetail.onMount = function () {
  document.getElementById('store-detail-modal')?.addEventListener('click', (e) => {
    if (e.target.closest('[data-action="store-close"]') || e.target.id === 'store-detail-modal') {
      DMSRouter.navigate('/master/business/store');
    }
  });
};
window.renderBusinessStoreDetail = renderBusinessStoreDetail;
