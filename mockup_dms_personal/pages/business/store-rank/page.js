/**
 * Hạng điểm bán — HT Portal: /base-data/business/store-class
 * Route prototype: #/master/business/store-rank
 */
BusinessShared.registerCatalogModule({
  title: 'Hạng Điểm Bán',
  route: '/master/business/store-rank',
  dataPath: 'data/store-rank.json',
  codeLabel: 'Mã hạng điểm bán',
  nameLabel: 'Tên hạng điểm bán',
  searchPlaceholder: 'Theo Mã | Tên hạng điểm bán',
  listTitle: 'Danh sách hạng điểm bán',
  moduleKey: 'store-rank',
  createRoute: '/master/business/store-rank/create',
  editRoute: '/master/business/store-rank/edit',
  modalCreateTitle: 'Thêm mới Hạng điểm bán',
  modalEditTitle: 'Chỉnh sửa Hạng điểm bán',
  listHandler: 'renderBusinessStoreRank',
  createHandler: 'renderBusinessStoreRankCreate',
  editHandler: 'renderBusinessStoreRankEdit',
  showCreate: true,
  showStatus: true,
  showActions: true,
  showStatusFilter: true
});

// Alias handlers cho route cũ store-grade
window.renderBusinessStoreGrade = window.renderBusinessStoreRank;
window.renderBusinessStoreGradeCreate = window.renderBusinessStoreRankCreate;
window.renderBusinessStoreGradeEdit = window.renderBusinessStoreRankEdit;
if (window.renderBusinessStoreRank.onMount) {
  window.renderBusinessStoreGrade.onMount = window.renderBusinessStoreRank.onMount;
  window.renderBusinessStoreGradeCreate.onMount = window.renderBusinessStoreRankCreate.onMount;
  window.renderBusinessStoreGradeEdit.onMount = window.renderBusinessStoreRankEdit.onMount;
}
