async function renderBusinessStoreGroupDetail() {
  const id = new URLSearchParams(location.hash.split('?')[1] || '').get('id');
  const item = await BusinessShared.findById('data/store-group.json', id) || {};
  const listHtml = await renderBusinessStoreGroup();
  const body = BusinessShared.masterCatalogFormBody(item, {
    mode: 'edit',
    codeLabel: 'Mã nhóm điểm bán',
    nameLabel: 'Tên nhóm điểm bán'
  }).replace(/<input/g, '<input disabled').replace(/<select/g, '<select disabled');
  const modal = DMS.render('Modal', {
    id: 'sg-detail-modal',
    title: 'Chi tiết Nhóm điểm bán',
    size: 'md',
    body,
    footer: DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'sg-close' })
  });
  return listHtml + modal;
}

renderBusinessStoreGroupDetail.onMount = function () {
  document.getElementById('sg-detail-modal')?.addEventListener('click', (e) => {
    if (e.target.closest('[data-action="sg-close"]') || e.target.id === 'sg-detail-modal') {
      DMSRouter.navigate('/master/business/store-group');
    }
  });
};
window.renderBusinessStoreGroupDetail = renderBusinessStoreGroupDetail;
