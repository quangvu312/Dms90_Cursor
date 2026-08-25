async function renderSaleOrder() {
  const [orders, statusOptions] = await Promise.all([
    SoShared.load(),
    fetch('data/status-options.json').then(r => r.json())
  ]);
  const filter = DMS.render('FilterPanel', {
    fields: [
      { type: 'search', label: 'Tìm kiếm theo', placeholder: 'Tìm kiếm theo Mã đơn hàng, Mã đơn hàng ERP, Mã tham chiếu' },
      { type: 'date', label: 'Từ ngày', placeholder: 'Từ ngày' },
      { type: 'date', label: 'Đến ngày', placeholder: 'Đến ngày' },
      { type: 'search', label: 'Nhà phân phối', placeholder: 'Nhà phân phối' },
      { type: 'multiselect', label: 'Trạng thái', values: ['INIT', 'APPROVED'], options: statusOptions.orderStatus },
      { type: 'select', label: 'Trạng thái nhập hàng', placeholder: 'Trạng thái nhập hàng', options: statusOptions.importStatus }
    ]
  });
  const columns = [
    { type: 'checkbox' },
    {
      key: 'orderCode',
      title: 'Mã đơn hàng',
      render: (val, row) => `<a class="dms-table__link" data-route="/sale/order/detail?id=${DMS.escape(row.id)}">${DMS.escape(val)}</a>`
    },
    { key: 'erpCode', title: 'Mã đơn hàng ERP' },
    { key: 'referenceCode', title: 'Mã tham chiếu' },
    { key: 'orderDate', title: 'Ngày đặt hàng' },
    { key: 'distributor', title: 'Nhà phân phối' },
    { key: 'totalAmount', title: 'Tổng tiền thanh toán (VNĐ)', render: v => DMS.formatNumber(v) },
    {
      key: 'statusLabel',
      title: 'Trạng thái',
      render: (val, row) => DMS.render('StatusTag', { status: row.status, text: val })
    },
    {
      key: 'importStatusLabel',
      title: 'Trạng thái nhập hàng',
      render: (val) => DMS.render('StatusTag', { status: val === 'Nhập hàng hoàn tất' ? 'IMPORTED' : val, text: val })
    },
    { key: 'inboundCode', title: 'Mã nhập kho' },
    { key: 'createdAt', title: 'Ngày tạo' },
    { key: 'createdBy', title: 'Người tạo' },
    { key: 'updatedAt', title: 'Ngày cập nhật' },
    { key: 'updatedBy', title: 'Người cập nhật' },
    {
      key: 'actions',
      title: 'Tùy chỉnh',
      fixed: 'right',
      render: (_, row) => {
        if (row.status !== 'INIT') return '';
        return DMS.render('TableActions', {
          actions: [
            { type: 'edit', title: 'Cập nhật', dataAction: `so-edit-${row.id}` },
            { type: 'approve', title: 'Duyệt', dataAction: `so-approve-${row.id}` },
            { type: 'cancel', title: 'Hủy', dataAction: `so-cancel-${row.id}` }
          ]
        });
      }
    }
  ];
  const extra = DMS.render('Button', { text: 'Tạo mới', type: 'primary', dataAction: 'so-create' });
  renderSaleOrder.onMount = function (container) {
    container.addEventListener('click', (e) => {
      if (e.target.closest('[data-action="so-create"]')) {
        SoShared.resetDraft();
        DMSRouter.navigate('/sale/order/create');
        return;
      }
      const ed = e.target.closest('[data-action^="so-edit-"]');
      if (ed) {
        const id = ed.dataset.action.replace('so-edit-', '');
        const item = orders.items.find(x => x.id === id);
        if (item) SoShared.loadDraft(item);
        DMSRouter.navigate(`/sale/order/edit?id=${id}`);
        return;
      }
      const ap = e.target.closest('[data-action^="so-approve-"]');
      if (ap) {
        DMS.get('Dialog').confirm('Xác nhận duyệt đơn hàng?', () => {
          DMS.get('Toast').show('Duyệt đơn hàng thành công', 'success');
        });
        return;
      }
      const cxl = e.target.closest('[data-action^="so-cancel-"]');
      if (cxl) {
        DMS.get('Dialog').confirm('Xác nhận hủy đơn hàng?', () => {
          SoShared.promptReason('Lý do hủy', () => {
            DMS.get('Toast').show('Hủy đơn hàng thành công', 'success');
          });
        });
        return;
      }
      if (e.target.closest('[data-action="filter-search"]')) {
        DMS.get('Toast').show('Đã tìm kiếm theo điều kiện', 'info');
      }
    });
  };
  return `
    ${SoShared.breadcrumb('Đặt Hàng NPP')}
    <h1 class="dms-page-header__title">Đặt Hàng NPP</h1>
    ${filter}
    ${DMS.render('Card', {
      extra,
      body: DMS.render('Table', {
        columns,
        data: orders.items,
        summary: `Tổng tiền thanh toán (VNĐ): <strong>${DMS.formatNumber(orders.summary.totalAmount)}</strong>`
      }) + DMS.render('Pagination', {
        current: orders.pagination.page,
        pageSize: orders.pagination.pageSize,
        total: orders.pagination.total,
        pageSizeOptions: [10, 50, 100]
      })
    })}
  `;
}

function soLineTable(draft, readonly, products) {
  const rows = (draft.lines || []).map((l, idx) => {
    const amt = SoShared.lineAmount(l);
    const rate = Number(l.vatRate) || 0;
    const vatAmt = Math.round(amt - amt * 100 / (100 + rate));
    const before = amt - vatAmt;
    return {
      sku: readonly ? l.sku : `<input class="dms-input" data-so-sku="${idx}" value="${DMS.escape(l.sku || '')}" placeholder="Tìm Mã SKU" />`,
      name: l.name || '',
      unit: readonly ? (l.unit || '') : `<select class="dms-input" data-so-unit="${idx}">
        <option ${l.unit === 'Hộp' ? 'selected' : ''}>Hộp</option>
        <option ${l.unit === 'Thùng' ? 'selected' : ''}>Thùng</option>
      </select>`,
      qty: readonly ? l.qty : `<input class="dms-input" data-so-qty="${idx}" value="${DMS.escape(String(l.qty ?? 0))}" />`,
      price: DMS.formatNumber(l.price),
      vat: `${rate}%`,
      before: DMS.formatNumber(before),
      vatAmt: DMS.formatNumber(vatAmt),
      after: DMS.formatNumber(amt),
      nppQty: l.nppQty != null ? l.nppQty : '',
      lot: DMS.render('Button', { text: readonly ? 'Xem' : 'Khai báo', type: 'link', dataAction: `so-lot-${idx}` }),
      del: readonly ? '' : DMS.render('TableActions', {
        actions: [{ type: 'delete', title: 'Xóa', dataAction: `so-del-${idx}` }]
      })
    };
  });
  const cols = [
    { key: 'sku', title: 'Mã SKU', render: v => v },
    { key: 'name', title: 'Tên sản phẩm' },
    { key: 'unit', title: 'Đơn vị tính', render: v => v },
    { key: 'qty', title: 'Số lượng', render: v => v },
    { key: 'price', title: 'Đơn giá (VND)' },
    { key: 'vat', title: 'Thuế suất (%)' },
    { key: 'before', title: 'Thành tiền (VND)' },
    { key: 'vatAmt', title: 'Tiền VAT (VND)' },
    { key: 'after', title: 'Thành tiền sau VAT (VND)' },
    { key: 'lot', title: 'Thông tin lô', render: v => v }
  ];
  if (rows.some(r => r.nppQty !== '')) cols.splice(4, 0, { key: 'nppQty', title: 'Số lượng NPP nhập' });
  if (!readonly) cols.push({ key: 'del', title: '', render: v => v });
  return rows.length
    ? DMS.render('Table', { columns: cols, data: rows })
    : DMS.render('EmptyState', { title: 'Chưa có sản phẩm' });
}

async function renderSaleOrderForm(mode) {
  const [orders, distributors] = await Promise.all([
    SoShared.load(),
    fetch('data/distributor.json').then(r => r.json())
  ]);
  const params = new URLSearchParams(location.hash.split('?')[1] || '');
  const id = params.get('id');
  const readonly = mode === 'view';
  if ((mode === 'edit' || mode === 'view') && id) {
    const item = orders.items.find(x => x.id === id);
    if (item && SoShared.getDraft().id !== item.id) SoShared.loadDraft(item);
  }
  const draft = SoShared.getDraft();
  const nppOpts = (distributors.items || []).filter(d => d.status === 'ACTIVE').map(d => ({
    value: d.id,
    label: `${d.code} - ${d.name}`
  }));
  const titles = { create: 'Tạo mới đơn hàng bán', edit: 'Cập nhật đơn hàng bán', view: 'Xem chi tiết đơn hàng bán' };
  const tot = SoShared.totals(draft);
  const listHtml = await renderSaleOrder();
  const footerBtns = [];
  footerBtns.push(DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'so-close' }));
  if (!readonly) {
    footerBtns.push(DMS.render('Button', { text: 'Lưu', type: 'primary', dataAction: 'so-save' }));
    if (mode === 'edit') footerBtns.push(DMS.render('Button', { text: 'Lưu & duyệt', type: 'primary', dataAction: 'so-save-approve' }));
  } else if (draft.status === 'INIT') {
    footerBtns.push(DMS.render('Button', { text: 'Duyệt đơn', type: 'primary', dataAction: 'so-approve-detail' }));
    footerBtns.push(DMS.render('Button', { text: 'Hủy', type: 'default', dataAction: 'so-cancel-detail' }));
  }
  const body = `
    <div class="dms-form-grid">
      ${DMS.render('Input', { id: 'so-date', label: 'Ngày đặt hàng', value: draft.orderDate, placeholder: 'dd-mm-yyyy', requiredMark: true, disabled: readonly })}
      ${DMS.render('Select', { id: 'so-npp', label: 'Nhà phân phối', placeholder: 'Chọn nhà phân phối', options: nppOpts, value: draft.distributorId || '', requiredMark: true, disabled: readonly })}
      ${DMS.render('Input', { label: 'Tỉnh/Thành phố', value: draft.province || '', disabled: true })}
      ${DMS.render('Input', { label: 'Quận/Huyện', value: draft.district || '', disabled: true })}
      ${DMS.render('Input', { label: 'Phường/Xã', value: draft.ward || '', disabled: true })}
      ${DMS.render('Input', { label: 'Địa chỉ', value: draft.address || '', disabled: true })}
      ${mode === 'view' ? DMS.render('Input', { label: 'Trạng thái', value: draft.statusLabel || '', disabled: true }) : ''}
      ${draft.status === 'CANCELLED' ? DMS.render('Input', { label: 'Lý do hủy', value: draft.cancelReason || '', disabled: true }) : ''}
    </div>
    <div class="dms-price-toolbar">
      <h4 class="dms-form-section__title">Danh sách sản phẩm</h4>
      ${readonly ? '' : DMS.render('Button', { text: 'Thêm sản phẩm', type: 'default', dataAction: 'so-add-line' })}
    </div>
    <div id="so-lines">${soLineTable(draft, readonly)}</div>
    <div class="dms-form-grid dms-mt-md">
      ${DMS.render('Input', { label: 'Tổng tiền trước VAT (VND)', value: DMS.formatNumber(tot.beforeVat), disabled: true })}
      ${DMS.render('Input', { label: 'VAT (VND)', value: DMS.formatNumber(tot.vat), disabled: true })}
      ${DMS.render('Input', { label: 'Khuyến mãi (VND)', value: DMS.formatNumber(tot.promo), disabled: true })}
      ${DMS.render('Input', { id: 'so-adj', label: 'Giảm trừ (VND)', value: String(draft.adjustment || 0), disabled: readonly })}
      ${DMS.render('Input', { label: 'Tổng tiền thanh toán (VND)', value: DMS.formatNumber(tot.pay), disabled: true })}
    </div>
  `;
  const modal = DMS.render('Modal', {
    id: 'so-form-modal',
    title: titles[mode],
    size: 'xxl',
    body,
    footer: footerBtns.join('')
  });

  const bind = function (container) {
    DMS.bindFormControls?.(container);
    const nppFill = () => {
      const idNpp = document.getElementById('so-npp')?.value || draft.distributorId;
      const npp = (distributors.items || []).find(d => d.id === idNpp);
      if (!npp) return;
      draft.distributorId = npp.id;
      draft.province = npp.provinceCode === 'HCM' ? 'TP. Hồ Chí Minh' : npp.region;
      draft.district = npp.area;
      draft.ward = npp.wardCode;
      draft.address = npp.addressLine;
    };
    container.addEventListener('change', (e) => {
      if (e.target.id === 'so-npp') {
        draft.lines = [];
        nppFill();
        DMSRouter.navigate(mode === 'create' ? '/sale/order/create' : `/sale/order/edit?id=${id}`);
      }
      const qty = e.target.closest('[data-so-qty]');
      if (qty) {
        const i = Number(qty.dataset.soQty);
        draft.lines[i].qty = Number(qty.value) || 0;
      }
    });
    container.addEventListener('click', (e) => {
      if (e.target.closest('[data-action="so-close"]') || e.target.id === 'so-form-modal') {
        if (readonly) {
          DMSRouter.navigate('/sale/order');
          return;
        }
        DMS.get('Dialog').confirm('Bạn có muốn đóng? Dữ liệu chưa lưu sẽ không được giữ.', () => {
          SoShared.resetDraft();
          DMSRouter.navigate('/sale/order');
        });
        return;
      }
      if (e.target.closest('[data-action="so-add-line"]')) {
        draft.orderDate = document.getElementById('so-date')?.value || draft.orderDate;
        draft.lines.push({ sku: '102296', name: 'Anlene Total 10 Vani 800G', unit: 'Hộp', qty: 0, price: 245000, vatRate: 8, lots: [] });
        const path = mode === 'create' ? '/sale/order/create' : `/sale/order/edit?id=${id}`;
        DMSRouter.navigate(path);
        return;
      }
      const del = e.target.closest('[data-action^="so-del-"]');
      if (del) {
        draft.lines.splice(Number(del.dataset.action.replace('so-del-', '')), 1);
        DMSRouter.navigate(mode === 'create' ? '/sale/order/create' : `/sale/order/edit?id=${id}`);
        return;
      }
      const lot = e.target.closest('[data-action^="so-lot-"]');
      if (lot) {
        const i = Number(lot.dataset.action.replace('so-lot-', ''));
        const line = draft.lines[i];
        const lots = line.lots || [{ qty: line.qty || 0, lot: '', exp: '' }];
        const el = DMS.get('Modal').show({
          title: 'Thông tin lô',
          size: 'md',
          body: DMS.render('Table', {
            columns: [
              { key: 'qty', title: 'Số lượng', render: (v, r, idx) => readonly ? v : `<input class="dms-input" data-lot-qty="${idx}" value="${DMS.escape(String(v ?? ''))}" />` },
              { key: 'lot', title: 'Số lô', render: (v, r, idx) => readonly ? v : `<input class="dms-input" data-lot-no="${idx}" value="${DMS.escape(v || '')}" />` },
              { key: 'exp', title: 'Hạn sử dụng', render: (v, r, idx) => readonly ? v : `<input class="dms-input" data-lot-exp="${idx}" value="${DMS.escape(v || '')}" />` }
            ],
            data: lots
          }),
          footer: `${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'modal-close' })}
            ${readonly ? '' : DMS.render('Button', { text: 'Hoàn tất', type: 'primary', dataAction: 'lot-ok' })}`
        });
        el.addEventListener('click', (ev) => {
          if (ev.target.closest('[data-action="lot-ok"]')) {
            line.lots = lots;
            el.remove();
            DMS.get('Toast').show('Đã lưu thông tin lô', 'success');
          }
        });
        return;
      }
      const save = e.target.closest('[data-action="so-save"]') || e.target.closest('[data-action="so-save-approve"]');
      if (save) {
        draft.orderDate = document.getElementById('so-date')?.value || draft.orderDate;
        draft.adjustment = Number(document.getElementById('so-adj')?.value || 0);
        if (!draft.orderDate) {
          DMS.get('Toast').show('Trường Ngày đặt hàng là bắt buộc', 'error');
          return;
        }
        if (!draft.distributorId && !document.getElementById('so-npp')?.value) {
          DMS.get('Toast').show('Trường Nhà phân phối là bắt buộc', 'error');
          return;
        }
        if (!(draft.lines || []).length) {
          DMS.get('Toast').show('Vui lòng thêm sản phẩm', 'error');
          return;
        }
        if (draft.lines.some(l => !l.qty)) {
          DMS.get('Toast').show('Vui lòng nhập số lượng cho sản phẩm', 'error');
          return;
        }
        const totNow = SoShared.totals(draft);
        if (Number(draft.adjustment) < 0 && Math.abs(Number(draft.adjustment)) > totNow.pay - Number(draft.adjustment)) {
          DMS.get('Toast').show('Giảm trừ không được lớn hơn tổng tiền thanh toán.', 'error');
          return;
        }
        const approve = !!e.target.closest('[data-action="so-save-approve"]');
        DMS.get('Dialog').confirm(approve ? 'Bạn có muốn lưu và duyệt đơn hàng?' : 'Bạn có muốn lưu đơn hàng?', () => {
          DMS.get('Toast').show(approve ? 'Lưu & duyệt đơn hàng thành công' : 'Lưu đơn hàng thành công', 'success');
          SoShared.resetDraft();
          DMSRouter.navigate('/sale/order');
        });
        return;
      }
      if (e.target.closest('[data-action="so-approve-detail"]')) {
        DMS.get('Dialog').confirm('Xác nhận duyệt đơn hàng?', () => {
          DMS.get('Toast').show('Duyệt đơn hàng thành công', 'success');
          DMSRouter.navigate('/sale/order');
        });
      }
      if (e.target.closest('[data-action="so-cancel-detail"]')) {
        DMS.get('Dialog').confirm('Xác nhận hủy đơn hàng?', () => {
          SoShared.promptReason('Lý do hủy', () => {
            DMS.get('Toast').show('Hủy đơn hàng thành công', 'success');
            DMSRouter.navigate('/sale/order');
          });
        });
      }
    });
  };

  if (mode === 'create') renderSaleOrderCreate.onMount = bind;
  if (mode === 'edit') renderSaleOrderEdit.onMount = bind;
  if (mode === 'view') renderSaleOrderDetail.onMount = bind;
  return listHtml + modal;
}

async function renderSaleOrderCreate() { return renderSaleOrderForm('create'); }
async function renderSaleOrderEdit() { return renderSaleOrderForm('edit'); }
async function renderSaleOrderDetail() { return renderSaleOrderForm('view'); }

window.renderSaleOrder = renderSaleOrder;
window.renderSaleOrderCreate = renderSaleOrderCreate;
window.renderSaleOrderEdit = renderSaleOrderEdit;
window.renderSaleOrderDetail = renderSaleOrderDetail;
