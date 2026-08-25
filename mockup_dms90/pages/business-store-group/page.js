async function renderBusinessStoreGroup() {
  const data = await BusinessShared.loadJson('data/store-group.json');
  return BusinessShared.renderCatalogListPage({
    title: 'Nhóm Điểm Bán',
    route: '/master/business/store-group',
    listTitle: 'Danh sách nhóm điểm bán',
    data,
    codeLabel: 'Mã nhóm điểm bán',
    nameLabel: 'Tên nhóm điểm bán',
    searchPlaceholder: 'Theo mã/ tên nhóm điểm bán',
    showCreate: false,
    showStatus: true,
    showActions: false,
    detailRoute: '/master/business/store-group/detail',
    moduleKey: 'store-group'
  });
}

renderBusinessStoreGroup.onMount = function (container) {
  BusinessShared.bindCatalogListActions(container, { moduleKey: 'store-group' });
};

window.renderBusinessStoreGroup = renderBusinessStoreGroup;
