const CATALOG_UNIT = {
  title: 'Đơn Vị Kinh Doanh',
  route: '/master/business/business-unit',
  dataPath: 'data/business-unit.json',
  codeLabel: 'Mã đơn vị kinh doanh',
  nameLabel: 'Tên đơn vị kinh doanh',
  searchPlaceholder: 'Theo mã/ tên đơn vị kinh doanh',
  moduleKey: 'unit',
  createRoute: '/master/business/business-unit/create',
  editRoute: '/master/business/business-unit/edit',
  detailRoute: '/master/business/business-unit/detail',
  modalCreateTitle: 'Thêm mới Đơn vị kinh doanh',
  modalEditTitle: 'Chỉnh sửa Đơn vị kinh doanh',
  withCompany: true
};

async function renderBusinessUnit() {
  const data = await BusinessShared.loadJson(CATALOG_UNIT.dataPath);
  return BusinessShared.renderCatalogListPage({
    ...CATALOG_UNIT,
    listTitle: 'Danh sách đơn vị kinh doanh',
    data,
    showCreate: true,
    showStatus: true,
    showActions: true
  });
}

renderBusinessUnit.onMount = (c) => BusinessShared.bindCatalogListActions(c, {
  moduleKey: CATALOG_UNIT.moduleKey,
  editRoutePrefix: CATALOG_UNIT.editRoute,
  createRoute: CATALOG_UNIT.createRoute
});

window.renderBusinessUnit = renderBusinessUnit;

async function renderCatalogModal(mode, cfg) {
  const id = mode !== 'create' ? new URLSearchParams(location.hash.split('?')[1] || '').get('id') : null;
  const item = id ? await BusinessShared.findById(cfg.dataPath, id) : {};
  const company = await BusinessShared.loadJson('data/company.json');
  const companyOpts = [{ value: company.code, label: company.name }];
  const body = BusinessShared.masterCatalogFormBodyExtended(item || {}, {
    mode: mode === 'detail' ? 'view' : mode,
    codeLabel: cfg.codeLabel,
    nameLabel: cfg.nameLabel,
    withCompany: cfg.withCompany,
    companyOptions: companyOpts
  });
  const listHtml = await renderBusinessUnit();
  const readonly = mode === 'detail';
  const modal = DMS.render('Modal', {
    id: 'unit-modal',
    title: mode === 'create' ? cfg.modalCreateTitle : mode === 'edit' ? cfg.modalEditTitle : 'Chi tiết',
    size: 'md',
    body: readonly ? body.replace(/<input/g, '<input disabled').replace(/<select/g, '<select disabled') : body,
    footer: readonly
      ? DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'catalog-close' })
      : `${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'catalog-close' })}
         ${DMS.render('Button', { text: 'Lưu', type: 'primary', dataAction: 'catalog-save' })}`
  });
  return listHtml + modal;
}

async function renderBusinessUnitCreate() { return renderCatalogModal('create', CATALOG_UNIT); }
async function renderBusinessUnitEdit() { return renderCatalogModal('edit', CATALOG_UNIT); }
async function renderBusinessUnitDetail() { return renderCatalogModal('detail', CATALOG_UNIT); }

function bindCatalogModal() {
  document.getElementById('unit-modal')?.addEventListener('click', (e) => {
    if (e.target.closest('[data-action="catalog-close"]') || e.target.id === 'unit-modal') {
      DMSRouter.navigate(CATALOG_UNIT.route);
    }
    if (e.target.closest('[data-action="catalog-save"]')) {
      DMS.get('Dialog').confirm('Bạn có muốn lưu thông tin?', () => {
        DMS.get('Toast').show('Lưu thành công', 'success');
        DMSRouter.navigate(CATALOG_UNIT.route);
      });
    }
  });
}
renderBusinessUnitCreate.onMount = bindCatalogModal;
renderBusinessUnitEdit.onMount = bindCatalogModal;
renderBusinessUnitDetail.onMount = bindCatalogModal;
window.renderBusinessUnitCreate = renderBusinessUnitCreate;
window.renderBusinessUnitEdit = renderBusinessUnitEdit;
window.renderBusinessUnitDetail = renderBusinessUnitDetail;
