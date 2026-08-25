async function renderBusinessDistributorCreate() {
  const body = BusinessShared.renderDistributorFormBody({}, 'create');
  const listHtml = await renderBusinessDistributor();
  const modal = DMS.render('Modal', {
    id: 'npp-create-modal',
    title: 'Tạo mới nhà phân phối',
    size: 'lg',
    body,
    footer: `
      ${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'npp-close' })}
      ${DMS.render('Button', { text: 'Lưu', type: 'primary', dataAction: 'npp-save' })}
    `
  });
  return listHtml + modal;
}

renderBusinessDistributorCreate.onMount = function () {
  document.getElementById('npp-create-modal')?.addEventListener('click', (e) => {
    if (e.target.closest('[data-action="npp-close"]') || e.target.id === 'npp-create-modal') {
      DMSRouter.navigate('/master/business/distributor');
    }
    if (e.target.closest('[data-action="npp-save"]')) {
      DMS.get('Dialog').confirm('Bạn có muốn lưu thông tin không?', () => {
        DMS.get('Toast').show('Tạo mới NPP thành công', 'success');
        DMSRouter.navigate('/master/business/distributor');
      });
    }
  });
};

window.renderBusinessDistributorCreate = renderBusinessDistributorCreate;
