/**
 * Vị trí điểm bán — HT Portal: /base-data/business/store-location
 * Route prototype: #/master/business/store-location
 */
BusinessShared.registerCatalogModule({
  title: 'Vị Trí Điểm Bán',
  route: '/master/business/store-location',
  dataPath: 'data/store-location.json',
  codeLabel: 'Mã vị trí điểm bán',
  nameLabel: 'Tên vị trí điểm bán',
  searchPlaceholder: 'Theo Mã | Tên vị trí điểm bán',
  listTitle: 'Danh sách vị trí điểm bán',
  moduleKey: 'store-location',
  createRoute: '/master/business/store-location/create',
  editRoute: '/master/business/store-location/edit',
  modalCreateTitle: 'Thêm mới Vị trí điểm bán',
  modalEditTitle: 'Chỉnh sửa Vị trí điểm bán',
  listHandler: 'renderBusinessStoreLocation',
  createHandler: 'renderBusinessStoreLocationCreate',
  editHandler: 'renderBusinessStoreLocationEdit',
  showCreate: true,
  showStatus: true,
  showActions: true,
  showStatusFilter: true
});
