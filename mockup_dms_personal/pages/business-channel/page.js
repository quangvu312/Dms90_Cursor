async function renderBusinessChannel() {
  const data = await BusinessShared.loadJson('data/channel.json');
  return BusinessShared.renderCatalogListPage({
    title: 'Kênh Bán Hàng',
    route: '/master/business/channel',
    listTitle: 'Danh sách kênh bán hàng',
    data,
    codeLabel: 'Mã kênh bán hàng',
    nameLabel: 'Tên kênh bán hàng',
    searchPlaceholder: 'Theo mã/ tên kênh bán hàng',
    showCreate: false,
    showStatus: false,
    showActions: false,
    detailRoute: '/master/business/channel/detail',
    moduleKey: 'channel'
  });
}

renderBusinessChannel.onMount = function (container) {
  BusinessShared.bindCatalogListActions(container, { moduleKey: 'channel' });
};

window.renderBusinessChannel = renderBusinessChannel;

async function renderBusinessChannelDetail() {
  const id = new URLSearchParams(location.hash.split('?')[1] || '').get('id');
  const item = await BusinessShared.findById('data/channel.json', id) || {};
  const listHtml = await renderBusinessChannel();
  const modal = DMS.render('Modal', {
    id: 'channel-detail-modal',
    title: 'Chi tiết kênh bán hàng',
    size: 'md',
    body: BusinessShared.masterCatalogFormBody(item, {
      mode: 'edit',
      codeLabel: 'Mã kênh bán hàng',
      nameLabel: 'Tên kênh bán hàng'
    }).replace(/<input/g, '<input disabled').replace(/<select/g, '<select disabled'),
    footer: DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'modal-close' })
  });
  return listHtml + modal;
}

renderBusinessChannelDetail.onMount = function () {
  document.getElementById('channel-detail-modal')?.addEventListener('click', (e) => {
    if (e.target.closest('[data-action="modal-close"]') || e.target.id === 'channel-detail-modal') {
      DMSRouter.navigate('/master/business/channel');
    }
  });
};
window.renderBusinessChannelDetail = renderBusinessChannelDetail;
