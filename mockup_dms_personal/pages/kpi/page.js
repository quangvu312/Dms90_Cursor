async function renderKpiIndicator() {
  const data = await KpiShared.loadJson('data/kpi-indicator.json');
  const columns = [
    { key: 'code', title: 'Mã chỉ tiêu' },
    { key: 'name', title: 'Tên chỉ tiêu' },
    { key: 'description', title: 'Mô tả' },
    { key: 'object', title: 'Đối tượng áp dụng' },
    { key: 'measure', title: 'Độ đo' },
    {
      key: 'dailyPlan',
      title: 'Cho phép thiết lập kế hoạch trong ngày',
      render: (val) => DMS.render('Switch', { checked: !!val, disabled: true })
    }
  ];
  const table = data.items.length
    ? DMS.render('Table', { columns, data: data.items })
    : DMS.render('EmptyState', { title: 'Trống' });
  return `
    ${KpiShared.breadcrumb([{ label: 'Chỉ Tiêu KPI' }])}
    <h1 class="dms-page-header__title dms-mt-md">Chỉ Tiêu KPI</h1>
    ${DMS.render('Card', {
      body: table + DMS.render('Pagination', {
        current: data.pagination.page,
        pageSize: data.pagination.pageSize,
        total: data.pagination.total,
        pageSizeOptions: [10, 50, 100]
      })
    })}
  `;
}

async function renderKpiTarget() {
  const data = await KpiShared.loadJson('data/kpi-assignment.json');
  const statusOpts = [
    { value: 'INIT', label: 'Khởi tạo' },
    { value: 'APPROVED', label: 'Đã duyệt' },
    { value: 'CANCELLED', label: 'Đã hủy' }
  ];
  const filter = DMS.render('FilterPanel', {
    fields: [
      { type: 'search', id: 'kpi-q', label: 'Tìm kiếm theo', placeholder: 'Theo Mã | Tên phiếu giao KPI' },
      { type: 'select', id: 'kpi-period', label: 'Thời gian áp dụng', placeholder: 'Tháng', options: [
        { value: '08/2026', label: '08/2026' },
        { value: '07/2026', label: '07/2026' },
        { value: '09/2026', label: '09/2026' }
      ]},
      { type: 'multiselect', id: 'kpi-st', label: 'Trạng thái', placeholder: 'Trạng thái', options: statusOpts }
    ]
  });
  const columns = [
    {
      key: 'code',
      title: 'Mã phiếu giao KPI',
      render: (val, row) => `<a class="dms-table__link" data-route="/kpi/target/detail?id=${DMS.escape(row.id)}">${DMS.escape(val)}</a>`
    },
    { key: 'name', title: 'Tên phiếu giao KPI' },
    { key: 'periodLabel', title: 'Thời gian áp dụng' },
    {
      key: 'status',
      title: 'Trạng thái',
      render: (val) => {
        const s = KpiShared.statusOf(val);
        return DMS.render('StatusTag', { status: val, text: s.text });
      }
    },
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
            { type: 'edit', title: 'Cập nhật', dataAction: `kpi-edit-${row.id}` },
            { type: 'approve', title: 'Duyệt', dataAction: `kpi-approve-${row.id}` },
            { type: 'cancel', title: 'Hủy', dataAction: `kpi-cancel-${row.id}` }
          ]
        });
      }
    }
  ];
  const card = DMS.render('Card', {
    title: 'Danh sách Giao KPI',
    extra: DMS.render('Button', { text: 'Tạo mới', type: 'primary', dataAction: 'kpi-create' }),
    body: DMS.render('Table', { columns, data: data.items }) +
      DMS.render('Pagination', {
        current: data.pagination.page,
        pageSize: data.pagination.pageSize,
        total: data.pagination.total,
        pageSizeOptions: [10, 50, 100]
      })
  });

  renderKpiTarget.onMount = function (container) {
    container.addEventListener('click', (e) => {
      if (e.target.closest('[data-action="kpi-create"]')) {
        KpiShared.resetDraft();
        DMSRouter.navigate('/kpi/target/create?step=1');
        return;
      }
      const edit = e.target.closest('[data-action^="kpi-edit-"]');
      if (edit) {
        const id = edit.dataset.action.replace('kpi-edit-', '');
        const item = data.items.find(x => x.id === id);
        if (item) KpiShared.loadDraft(item);
        DMSRouter.navigate(`/kpi/target/edit?id=${id}&step=1`);
        return;
      }
      const ap = e.target.closest('[data-action^="kpi-approve-"]');
      if (ap) {
        DMS.get('Dialog').confirm('Xác nhận duyệt phiếu giao KPI?', () => {
          DMS.get('Toast').show('Duyệt phiếu giao KPI thành công', 'success');
        });
        return;
      }
      const cxl = e.target.closest('[data-action^="kpi-cancel-"]');
      if (cxl) {
        DMS.get('Dialog').confirm('Xác nhận hủy phiếu giao KPI?', () => {
          KpiShared.promptReason('Lý do hủy', () => {
            DMS.get('Toast').show('Hủy phiếu giao KPI thành công', 'success');
          });
        });
        return;
      }
      if (e.target.closest('[data-action="filter-search"]')) {
        DMS.get('Toast').show('Đã tìm kiếm theo điều kiện', 'info');
      }
      if (e.target.closest('[data-action="filter-reset"]')) {
        DMS.get('Toast').show('Đã làm mới bộ lọc', 'info');
      }
    });
  };

  return `${KpiShared.breadcrumb([{ label: 'Giao KPI' }])}<h1 class="dms-page-header__title dms-mt-md">Giao KPI</h1>${filter}${card}`;
}

function kpiWizardFooter(mode, step, readonly) {
  const close = DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'kpi-close' });
  const back = step > 1 ? DMS.render('Button', { text: 'Quay lại', type: 'default', dataAction: 'kpi-back' }) : '';
  if (readonly) {
    const next = step < 3 ? DMS.render('Button', { text: 'Tiếp tục', type: 'primary', dataAction: 'kpi-next' }) : '';
    return `${close}${back}${next}`;
  }
  if (step === 1) {
    return `${close}${DMS.render('Button', { text: 'Tiếp tục', type: 'primary', dataAction: 'kpi-next' })}`;
  }
  if (step === 2) {
    return `${close}${back}${DMS.render('Button', { text: 'Tiếp tục', type: 'primary', dataAction: 'kpi-next' })}`;
  }
  const save = DMS.render('Button', { text: 'Lưu', type: 'primary', dataAction: 'kpi-save' });
  const saveApprove = mode === 'edit'
    ? DMS.render('Button', { text: 'Lưu & Duyệt', type: 'primary', dataAction: 'kpi-save-approve' })
    : '';
  return `${close}${back}${save}${saveApprove}`;
}

async function renderKpiWizard(mode) {
  const [listData, indicators] = await Promise.all([
    KpiShared.loadJson('data/kpi-assignment.json'),
    KpiShared.loadJson('data/kpi-indicator.json')
  ]);
  const params = new URLSearchParams(location.hash.split('?')[1] || '');
  const step = Math.min(3, Math.max(1, Number(params.get('step') || 1)));
  const id = params.get('id');
  const readonly = mode === 'view';
  if ((mode === 'edit' || mode === 'view') && id) {
    const item = listData.items.find(x => x.id === id);
    if (item && KpiShared.getDraft().id !== item.id) KpiShared.loadDraft(item);
  }
  const draft = KpiShared.getDraft();
  const indOpts = (indicators.items || []).map(i => ({ value: i.code, label: `${i.code} - ${i.name}` }));
  let body = KpiShared.stepper(step);
  if (step === 1) {
    body += `<div class="dms-form-grid">
      <div class="dms-form-item" id="wrap-kpi-name">
        ${DMS.render('Input', { id: 'kpi-name', label: 'Tên chỉ tiêu', placeholder: 'Tên chỉ tiêu', value: draft.name, requiredMark: true, disabled: readonly })}
        ${KpiShared.fieldError('kpi-name')}
      </div>
      <div class="dms-form-item" id="wrap-kpi-ind">
        ${DMS.render('MultiSelect', { id: 'kpi-ind', label: 'Chỉ tiêu áp dụng', placeholder: 'Chỉ tiêu áp dụng', options: indOpts, values: draft.indicatorCodes, requiredMark: true, disabled: readonly })}
        ${KpiShared.fieldError('kpi-ind')}
      </div>
      <div class="dms-form-item">
        ${DMS.render('Input', { id: 'kpi-period', label: 'Thời gian áp dụng', placeholder: 'Tháng', value: draft.periodLabel, requiredMark: true, disabled: readonly })}
      </div>
    </div>`;
  }
  if (step === 2) {
    const indCols = (draft.indicatorCodes || []).map(code => {
      const ind = (indicators.items || []).find(i => i.code === code);
      return { key: code, title: ind ? ind.name : code };
    });
    const rows = (draft.assignments || []).map((a, idx) => {
      const cells = {};
      (draft.indicatorCodes || []).forEach(code => {
        const val = (a.targets || {})[code] ?? '';
        cells[code] = readonly
          ? val
          : `<input class="dms-input" data-kpi-target="${idx}:${code}" value="${DMS.escape(String(val))}" />`;
      });
      return {
        emp: `${a.empCode} - ${a.empName}`,
        ...cells,
        actions: readonly ? '' : DMS.render('TableActions', {
          actions: [{ type: 'delete', title: 'Xóa', dataAction: `kpi-del-emp-${idx}` }]
        })
      };
    });
    body += `<div class="dms-price-toolbar">
      <div></div>
      <div class="dms-price-toolbar__actions">
        ${readonly ? '' : DMS.render('Button', { text: 'Thêm đối tượng', type: 'default', dataAction: 'kpi-add-emp' })}
        ${DMS.render('Button', { text: 'Export Excel', type: 'default', dataAction: 'kpi-export' })}
        ${readonly ? '' : DMS.render('Button', { text: 'Import Excel', type: 'default', dataAction: 'kpi-import' })}
      </div>
    </div>
    <div id="kpi-assign-grid">${rows.length ? DMS.render('Table', {
      columns: [
        { key: 'emp', title: 'Đối tượng' },
        ...indCols,
        ...(readonly ? [] : [{ key: 'actions', title: 'Tùy chỉnh', render: (v) => v }])
      ],
      data: rows
    }) : DMS.render('EmptyState', { title: 'Vui lòng thêm đối tượng trước khi thực hiện giao KPI cho đối tượng được chọn.' })}</div>`;
  }
  if (step === 3) {
    body += `<p class="dms-text-secondary">Kế hoạch chỉ tiêu của cấp quản lý sẽ bằng tổng chỉ tiêu của Nhân viên bán hàng cấp dưới.</p>`;
    const mgrs = draft.managers || [];
    const indCols = (draft.indicatorCodes || []).map(code => {
      const ind = (indicators.items || []).find(i => i.code === code);
      return { key: code, title: ind ? ind.name : code };
    });
    const rows = mgrs.map(m => {
      const row = { emp: `${m.empCode} - ${m.empName}`, position: m.position };
      (draft.indicatorCodes || []).forEach(code => { row[code] = (m.targets || {})[code] ?? 0; });
      return row;
    });
    body += rows.length
      ? DMS.render('Table', { columns: [{ key: 'emp', title: 'Nhân viên' }, { key: 'position', title: 'Chức vụ' }, ...indCols], data: rows })
      : DMS.render('EmptyState', { title: 'Trống' });
  }

  const titles = {
    create: 'Thêm mới phiếu giao KPI',
    edit: 'Cập nhật phiếu giao KPI',
    view: 'Chi tiết phiếu giao KPI'
  };
  const listHtml = await renderKpiTarget();
  const modal = DMS.render('Modal', {
    id: 'kpi-wizard-modal',
    title: titles[mode] || titles.create,
    size: 'xxl',
    body,
    footer: kpiWizardFooter(mode, step, readonly)
  });

  const bind = function (container) {
    DMS.bindFormControls?.(container);
    const go = (s) => {
      const base = mode === 'create' ? '/kpi/target/create' : mode === 'edit' ? `/kpi/target/edit?id=${id}` : `/kpi/target/detail?id=${id}`;
      const sep = base.includes('?') ? '&' : '?';
      DMSRouter.navigate(`${base}${sep}step=${s}`);
    };
    const captureStep1 = () => {
      draft.name = document.getElementById('kpi-name')?.value || draft.name;
      draft.periodLabel = document.getElementById('kpi-period')?.value || draft.periodLabel;
      const ms = DMS.get('MultiSelect');
      if (ms?.getValues) draft.indicatorCodes = ms.getValues('kpi-ind');
    };
    container.addEventListener('click', (e) => {
      if (e.target.closest('[data-action="kpi-close"]') || e.target.closest('[data-action="modal-close"]') || e.target.id === 'kpi-wizard-modal') {
        DMS.get('Dialog').confirm('Bạn có muốn đóng? Dữ liệu chưa lưu sẽ không được giữ.', () => {
          KpiShared.resetDraft();
          DMSRouter.navigate('/kpi/target');
        });
        return;
      }
      if (e.target.closest('[data-action="kpi-next"]')) {
        if (step === 1 && !readonly) {
          captureStep1();
          let ok = true;
          if (!draft.name.trim()) {
            const err = document.getElementById('err-kpi-name');
            if (err) { err.textContent = 'Tên chỉ tiêu là bắt buộc.'; err.hidden = false; }
            ok = false;
          }
          if (!(draft.indicatorCodes || []).length) {
            const err = document.getElementById('err-kpi-ind');
            if (err) { err.textContent = 'Chỉ tiêu áp dụng là bắt buộc.'; err.hidden = false; }
            ok = false;
          }
          if (!ok) return;
        }
        go(step + 1);
        return;
      }
      if (e.target.closest('[data-action="kpi-back"]')) go(step - 1);
      if (e.target.closest('[data-action="kpi-add-emp"]')) {
        draft.assignments.push({ empId: 'NV001', empCode: 'NV001', empName: 'Nguyễn Văn A', targets: {} });
        go(2);
        return;
      }
      const del = e.target.closest('[data-action^="kpi-del-emp-"]');
      if (del) {
        const idx = Number(del.dataset.action.replace('kpi-del-emp-', ''));
        draft.assignments.splice(idx, 1);
        go(2);
        return;
      }
      if (e.target.closest('[data-action="kpi-export"]')) {
        DMS.get('Toast').show('Export Excel thành công', 'success');
        return;
      }
      if (e.target.closest('[data-action="kpi-import"]')) {
        DMS.get('Modal').show({
          title: 'Import Excel',
          body: `<p>Chọn hoặc kéo file đến vị trí này</p><input type="file" class="dms-input" accept=".xlsx,.xls" />`,
          footer: `${DMS.render('Button', { text: 'Lấy file mẫu', type: 'link', dataAction: 'modal-close' })}
            ${DMS.render('Button', { text: 'Tiến hành xử lý', type: 'primary', dataAction: 'modal-close' })}`
        });
        return;
      }
      const save = e.target.closest('[data-action="kpi-save"]') || e.target.closest('[data-action="kpi-save-approve"]');
      if (save) {
        if (!(draft.assignments || []).length) {
          DMS.get('Toast').show('Vui lòng chọn ít nhất 1 đối tượng để giao KPI.', 'error');
          return;
        }
        const approve = !!e.target.closest('[data-action="kpi-save-approve"]');
        DMS.get('Dialog').confirm(approve ? 'Bạn có muốn lưu và duyệt phiếu giao KPI?' : 'Bạn có muốn lưu phiếu giao KPI?', () => {
          DMS.get('Toast').show(approve ? 'Lưu & duyệt phiếu giao KPI thành công' : 'Lưu phiếu giao KPI thành công', 'success');
          KpiShared.resetDraft();
          DMSRouter.navigate('/kpi/target');
        });
      }
    });
  };

  if (mode === 'create') renderKpiTargetCreate.onMount = bind;
  if (mode === 'edit') renderKpiTargetEdit.onMount = bind;
  if (mode === 'view') renderKpiTargetDetail.onMount = bind;
  return listHtml + modal;
}

async function renderKpiTargetCreate() { return renderKpiWizard('create'); }
async function renderKpiTargetEdit() { return renderKpiWizard('edit'); }
async function renderKpiTargetDetail() { return renderKpiWizard('view'); }

async function renderKpiReport() {
  const data = await KpiShared.loadJson('data/kpi-report.json');
  const filter = DMS.render('FilterPanel', {
    fields: [
      { type: 'search', label: 'Mã | Tên nhân viên bán hàng', placeholder: 'Mã | Tên nhân viên bán hàng' },
      { type: 'select', label: 'Chức vụ', placeholder: 'Nhân viên bán hàng', options: [
        { value: 'SM', label: 'Nhân viên bán hàng' },
        { value: 'SS', label: 'Giám sát bán hàng' }
      ]},
      { type: 'select', label: 'Bộ KPI', placeholder: 'Bộ KPI', options: data.kpiSets, value: data.kpiSets[0]?.value },
      { type: 'select', label: 'Vùng bán hàng', placeholder: 'Vùng bán hàng', options: [{ value: 'MN', label: 'Miền Nam' }] },
      { type: 'select', label: 'Khu vực bán hàng', placeholder: 'Khu vực bán hàng', options: [{ value: 'HCM1', label: 'HCM 1' }] },
      { type: 'select', label: 'Tỉnh/Thành Phố', placeholder: 'Tỉnh/Thành Phố', options: [{ value: 'HCM', label: 'TP. Hồ Chí Minh' }] },
      { type: 'select', label: 'Nhà phân phối', placeholder: 'Nhà phân phối', options: [{ value: 'NPP001', label: 'NPP001 - NPP Miền Nam 1' }] }
    ]
  });
  const columns = [
    { key: 'stt', title: 'STT' },
    { key: 'company', title: 'Đơn vị kinh doanh' },
    { key: 'region', title: 'Vùng bán hàng' },
    { key: 'area', title: 'Khu vực bán hàng' },
    { key: 'province', title: 'Tỉnh/Thành Phố' },
    { key: 'nppCode', title: 'Mã Nhà phân phối' },
    { key: 'nppName', title: 'Tên Nhà phân phối' },
    { key: 'ssCode', title: 'Mã giám sát' },
    { key: 'ssName', title: 'Tên giám sát' },
    { key: 'empCode', title: 'Mã nhân viên bán hàng' },
    { key: 'empName', title: 'Tên nhân viên bán hàng' },
    { key: 'visitPlan', title: 'Tỉ lệ viếng thăm - Kế hoạch' },
    { key: 'visitActual', title: 'Tỉ lệ viếng thăm - Thực hiện' },
    { key: 'visitPct', title: 'Tỉ lệ viếng thăm - %' },
    { key: 'orderPlan', title: 'Số đơn hàng - Kế hoạch' },
    { key: 'orderActual', title: 'Số đơn hàng - Thực hiện' },
    { key: 'orderPct', title: 'Số đơn hàng - %' },
    { key: 'dailyPlan', title: 'Doanh thu TB ngày - Kế hoạch', render: v => DMS.formatNumber(v) },
    { key: 'dailyActual', title: 'Doanh thu TB ngày - Thực hiện', render: v => DMS.formatNumber(v) },
    { key: 'monthPlan', title: 'Doanh thu tháng - Kế hoạch', render: v => DMS.formatNumber(v) },
    { key: 'monthActual', title: 'Doanh thu tháng - Thực hiện', render: v => DMS.formatNumber(v) }
  ];
  const extra = `
    ${DMS.render('Button', { text: 'Khoá sổ chỉ tiêu', type: 'default', dataAction: 'kpi-lock' })}
    ${DMS.render('Button', { text: 'Export Excel', type: 'default', dataAction: 'kpi-export-report' })}
  `;
  renderKpiReport.onMount = function (container) {
    container.addEventListener('click', (e) => {
      if (e.target.closest('[data-action="kpi-lock"]')) {
        DMS.get('Dialog').confirm('Bạn có muốn khoá sổ chỉ tiêu?', () => {
          DMS.get('Toast').show('Khoá sổ chỉ tiêu thành công', 'success');
        });
      }
      if (e.target.closest('[data-action="kpi-export-report"]')) {
        DMS.get('Dialog').confirm('Bạn có muốn xuất Báo cáo KPI?', () => {
          DMS.get('Toast').show('Export Excel thành công', 'success');
        });
      }
      if (e.target.closest('[data-action="filter-search"]')) {
        DMS.get('Toast').show('Đã tìm kiếm theo điều kiện', 'info');
      }
    });
  };
  return `
    ${KpiShared.breadcrumb([{ label: 'Báo Cáo KPI' }])}
    <h1 class="dms-page-header__title dms-mt-md">Báo Cáo KPI</h1>
    ${filter}
    ${DMS.render('Card', {
      extra,
      body: DMS.render('Table', { columns, data: data.items })
    })}
  `;
}

window.renderKpiIndicator = renderKpiIndicator;
window.renderKpiTarget = renderKpiTarget;
window.renderKpiTargetCreate = renderKpiTargetCreate;
window.renderKpiTargetEdit = renderKpiTargetEdit;
window.renderKpiTargetDetail = renderKpiTargetDetail;
window.renderKpiReport = renderKpiReport;
