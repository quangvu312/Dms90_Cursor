async function renderSellingPriceWizard(mode) {
  const data = await SellingPriceShared.loadData();
  const params = new URLSearchParams(location.hash.split('?')[1] || '');
  const step = Math.min(3, Math.max(1, Number(params.get('step') || 1)));
  const id = params.get('id');
  const readonly = mode === 'view';

  if ((mode === 'edit' || mode === 'view') && id) {
    const item = data.items.find(it => it.id === id);
    if (!item) {
      return SellingPriceShared.breadcrumb('Bảng Giá Bán') +
        DMS.render('EmptyState', { title: 'Không tìm thấy bảng giá' });
    }
    if (mode === 'edit' && item.status !== 'DRAFT') {
      return SellingPriceShared.breadcrumb('Bảng Giá Bán') +
        DMS.render('EmptyState', { title: 'Chỉ bảng giá trạng thái Khởi tạo mới được chỉnh sửa' });
    }
    const draft = SellingPriceShared.getDraft();
    if (draft.id !== item.id) SellingPriceShared.loadDraftFromItem(item);
  } else if (mode === 'create') {
    const draft = SellingPriceShared.getDraft();
    if (draft.id) SellingPriceShared.resetDraft();
  }

  const draft = SellingPriceShared.getDraft();
  let body = SellingPriceShared.renderStepper(step);
  if (step === 1) body += SellingPriceShared.renderStep1(draft, readonly);
  if (step === 2) body += SellingPriceShared.renderStep2(draft, data.customerGroups, readonly);
  if (step === 3) body += SellingPriceShared.renderStep3(draft, readonly);
  if (mode === 'view' && step === 3) {
    const item = data.items.find(it => it.id === id);
    body += `<div class="dms-mt-md"><h4 class="dms-form-section__title">Lịch sử cập nhật</h4>${SellingPriceShared.renderHistory(item || { history: [] })}</div>`;
  }

  const listHtml = await renderSellingPriceList();
  window.__spDataCache = data;
  const modal = DMS.render('Modal', {
    id: 'sp-wizard-modal',
    title: SellingPriceShared.wizardTitle(mode),
    size: 'xxl',
    body,
    footer: SellingPriceShared.wizardFooter(mode, step)
  });
  return listHtml + modal;
}

async function renderSellingPriceCreate() {
  return renderSellingPriceWizard('create');
}
renderSellingPriceCreate.onMount = function (container) {
  const step = Number(new URLSearchParams(location.hash.split('?')[1] || '').get('step') || 1);
  SellingPriceShared.loadData().then(data => {
    SellingPriceShared.bindWizard(container, { mode: 'create', step, data });
  });
};

async function renderSellingPriceEdit() {
  return renderSellingPriceWizard('edit');
}
renderSellingPriceEdit.onMount = function (container) {
  const step = Number(new URLSearchParams(location.hash.split('?')[1] || '').get('step') || 1);
  SellingPriceShared.loadData().then(data => {
    SellingPriceShared.bindWizard(container, { mode: 'edit', step, data });
  });
};

async function renderSellingPriceDetail() {
  return renderSellingPriceWizard('view');
}
renderSellingPriceDetail.onMount = function (container) {
  const step = Number(new URLSearchParams(location.hash.split('?')[1] || '').get('step') || 1);
  SellingPriceShared.loadData().then(data => {
    SellingPriceShared.bindWizard(container, { mode: 'view', step, data });
  });
};

window.renderSellingPriceCreate = renderSellingPriceCreate;
window.renderSellingPriceEdit = renderSellingPriceEdit;
window.renderSellingPriceDetail = renderSellingPriceDetail;
window.renderSellingPriceWizard = renderSellingPriceWizard;
