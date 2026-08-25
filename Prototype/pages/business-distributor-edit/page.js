async function renderBusinessDistributorEdit() {
  const id = new URLSearchParams(location.hash.split('?')[1] || '').get('id');
  const item = await BusinessShared.findById('data/distributor.json', id) || {};
  const body = BusinessShared.renderDistributorFormBody(item, 'edit');
  const listHtml = await renderBusinessDistributor();
  const modal = DMS.render('Modal', {
    id: 'npp-edit-modal',
    title: 'Chỉnh sửa nhà phân phối',
    size: 'lg',
    body,
    footer: `
      ${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'npp-close' })}
      ${DMS.render('Button', { text: 'Lưu', type: 'primary', dataAction: 'npp-save' })}
    `
  });
  return listHtml + modal;
}

renderBusinessDistributorEdit.onMount = renderBusinessDistributorCreate.onMount;
window.renderBusinessDistributorEdit = renderBusinessDistributorEdit;

async function renderBusinessDistributorDetail() {
  const id = new URLSearchParams(location.hash.split('?')[1] || '').get('id');
  const item = await BusinessShared.findById('data/distributor.json', id) || {};
  const body = BusinessShared.renderDistributorFormBody(item, 'view');
  const listHtml = await renderBusinessDistributor();
  const modal = DMS.render('Modal', {
    id: 'npp-detail-modal',
    title: 'Xem chi tiết nhà phân phối',
    size: 'lg',
    body,
    footer: DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'npp-close' })
  });
  return listHtml + modal;
}

renderBusinessDistributorDetail.onMount = function () {
  document.getElementById('npp-detail-modal')?.addEventListener('click', (e) => {
    if (e.target.closest('[data-action="npp-close"]') || e.target.id === 'npp-detail-modal') {
      DMSRouter.navigate('/master/business/distributor');
    }
  });
};
window.renderBusinessDistributorDetail = renderBusinessDistributorDetail;
