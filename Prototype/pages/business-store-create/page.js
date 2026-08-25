async function renderBusinessStoreCreate() {
  const refs = await BusinessShared.loadRefs();
  const body = BusinessShared.renderStoreFormBody({}, refs, 'create');
  const listHtml = await renderBusinessStoreList();
  const modal = DMS.render('Modal', {
    id: 'store-create-modal',
    title: 'Tạo mới điểm bán',
    size: 'lg',
    body,
    footer: `
      ${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'store-close' })}
      ${DMS.render('Button', { text: 'Lưu', type: 'primary', dataAction: 'store-save' })}
    `
  });
  return listHtml + modal;
}

renderBusinessStoreCreate.onMount = function () {
  document.getElementById('store-create-modal')?.addEventListener('click', (e) => {
    if (e.target.closest('[data-action="store-close"]') || e.target.id === 'store-create-modal') {
      DMSRouter.navigate('/master/business/store');
    }
    if (e.target.closest('[data-action="store-save"]')) {
      DMS.get('Dialog').confirm('Bạn có chắc chắn thao tác thêm mới?', () => {
        DMS.get('Toast').show('Tạo điểm bán trạng thái Khởi tạo thành công', 'success');
        DMSRouter.navigate('/master/business/store');
      });
    }
    if (e.target.closest('[data-action="find-map-location"]')) {
      DMS.get('Toast').show('Đã cập nhật vị trí trên bản đồ', 'info');
    }
  });
};

window.renderBusinessStoreCreate = renderBusinessStoreCreate;
