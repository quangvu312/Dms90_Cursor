async function renderBusinessStoreList() {
  const [data, refs] = await Promise.all([
    BusinessShared.loadJson('data/store.json'),
    BusinessShared.loadRefs()
  ]);
  return BusinessShared.renderStoreListPage(data, refs);
}

renderBusinessStoreList.onMount = function (container) {
  BusinessShared.bindStoreListActions(container);
};

window.renderBusinessStoreList = renderBusinessStoreList;
