const CATALOG = {
  title: 'Loại Điểm Bán',
  route: '/master/business/store-type',
  dataPath: 'data/store-type.json',
  codeLabel: 'Mã loại điểm bán',
  nameLabel: 'Tên loại điểm bán',
  searchPlaceholder: 'Theo mã/ tên loại điểm bán',
  moduleKey: 'store-type',
  createRoute: '/master/business/store-type/create',
  editRoute: '/master/business/store-type/edit',
  modalCreateTitle: 'Thêm mới Loại điểm bán',
  modalEditTitle: 'Chỉnh sửa Loại điểm bán'
};

async function renderBusinessStoreType() {
  const data = await BusinessShared.loadJson(CATALOG.dataPath);
  return BusinessShared.renderCatalogListPage({
    ...CATALOG,
    listTitle: 'Danh sách loại điểm bán',
    data,
    showCreate: true,
    showStatus: true,
    showActions: true
  });
}
renderBusinessStoreType.onMount = (c) => BusinessShared.bindCatalogListActions(c, {
  moduleKey: CATALOG.moduleKey, editRoutePrefix: CATALOG.editRoute, createRoute: CATALOG.createRoute
});
window.renderBusinessStoreType = renderBusinessStoreType;

async function renderCatalogModal(mode) {
  const id = mode !== 'create' ? new URLSearchParams(location.hash.split('?')[1] || '').get('id') : null;
  const item = id ? await BusinessShared.findById(CATALOG.dataPath, id) : {};
  const body = BusinessShared.masterCatalogFormBodyExtended(item || {}, {
    mode: mode === 'detail' ? 'view' : mode,
    codeLabel: CATALOG.codeLabel,
    nameLabel: CATALOG.nameLabel
  });
  if (mode === 'create') {
    body; // status in form via masterCatalogFormBodyExtended - need fix for create status
  }
  const listHtml = await renderBusinessStoreType();
  const readonly = mode === 'detail';
  const formBody = mode === 'create'
    ? BusinessShared.masterCatalogFormBody(item || {}, { mode: 'create', codeLabel: CATALOG.codeLabel, nameLabel: CATALOG.nameLabel })
        + `<div class="dms-form-item dms-mt-md"><label class="dms-form-item__label">Trạng thái</label>${DMS.render('Switch', { checked: true, label: 'Hoạt động' })}</div>`
    : body;
  return listHtml + DMS.render('Modal', {
    id: 'catalog-modal',
    title: mode === 'create' ? CATALOG.modalCreateTitle : mode === 'edit' ? CATALOG.modalEditTitle : 'Chi tiết',
    size: 'md',
    body: readonly ? formBody.replace(/<input/g, '<input disabled').replace(/<select/g, '<select disabled') : formBody,
    footer: readonly
      ? DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'catalog-close' })
      : `${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'catalog-close' })}
         ${DMS.render('Button', { text: 'Lưu', type: 'primary', dataAction: 'catalog-save' })}`
  });
}

async function renderBusinessStoreTypeCreate() { return renderCatalogModal('create'); }
async function renderBusinessStoreTypeEdit() { return renderCatalogModal('edit'); }

function bindModal() {
  document.getElementById('catalog-modal')?.addEventListener('click', (e) => {
    if (e.target.closest('[data-action="catalog-close"]') || e.target.id === 'catalog-modal') DMSRouter.navigate(CATALOG.route);
    if (e.target.closest('[data-action="catalog-save"]')) {
      DMS.get('Dialog').confirm('Bạn có muốn lưu thông tin?', () => {
        DMS.get('Toast').show('Lưu thành công', 'success');
        DMSRouter.navigate(CATALOG.route);
      });
    }
  });
}
renderBusinessStoreTypeCreate.onMount = bindModal;
renderBusinessStoreTypeEdit.onMount = bindModal;
window.renderBusinessStoreTypeCreate = renderBusinessStoreTypeCreate;
window.renderBusinessStoreTypeEdit = renderBusinessStoreTypeEdit;
