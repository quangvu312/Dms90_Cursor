/**
 * Quản Lý Hợp Đồng — Danh sách hợp đồng
 * UI: Contract_List.png / Contract_Create.png
 */
(function () {
  'use strict';

  function toast(msg, type) { DMS.get('Toast').show(msg, type || 'info'); }
  function S() { return ContractShared; }

  function ctIcon(name) {
    const icons = {
      search: '<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><circle cx="7" cy="7" r="4.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M10.5 10.5L14 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
      calendar: '<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><rect x="2" y="3.5" width="12" height="10.5" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M2 7h12M5.5 2v3M10.5 2v3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
      chevron: '<svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true"><path d="M2.5 4.5L6 8l3.5-3.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      upload: '<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M8 10V3.5M8 3.5L5.5 6M8 3.5L10.5 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 12.5v.5A1.5 1.5 0 0 0 4.5 14.5h7A1.5 1.5 0 0 0 13 13v-.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
      print: '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M4.5 6V3.5h7V6" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="3" y="8" width="10" height="5.5" rx="1" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M5 11.5h6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
      edit: '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M9.5 3.5l3 3L5.5 13H2.5v-3L9.5 3.5z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M8 5l3 3" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>',
      approve: '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      remove: '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M3 4.5h10M6 4.5V3h4v1.5M5.5 4.5v8.5A1 1 0 0 0 6.5 14h3a1 1 0 0 0 1-1V4.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    };
    return icons[name] || '';
  }

  function listQuery(extra) {
    const next = extra || {};
    const q = [];
    if (next.mode) q.push('mode=' + encodeURIComponent(next.mode));
    if (next.id) q.push('id=' + encodeURIComponent(next.id));
    return '/contract/list' + (q.length ? '?' + q.join('&') : '');
  }
  function goList() { DMSRouter.navigate('/contract/list', true); }
  function goMode(mode, id) { DMSRouter.navigate(listQuery({ mode, id: id || '' }), true); }

  function listState() {
    if (!window.__contractListState) {
      window.__contractListState = {
        q: '', type: '', status: '', from: '', to: '',
        page: 1, pageSize: 10
      };
    }
    return window.__contractListState;
  }

  function actionBtn(action, id, icon, title, extraClass) {
    const btn = DMS.render('Button', {
      type: 'default', size: 'sm', iconOnly: true, icon, text: title,
      className: extraClass || '',
      dataAction: action + '-' + id
    });
    return `<span title="${DMS.escape(title)}">${btn}</span>`;
  }

  function filterContracts(items, st) {
    const q = (st.q || '').trim().toLowerCase();
    const from = S().parseDmy(st.from);
    const to = S().parseDmy(st.to);
    return items.filter((it) => {
      if (q && String(it.contractCode || '').toLowerCase().indexOf(q) === -1) return false;
      if (st.type && it.type !== st.type) return false;
      if (st.status && it.status !== st.status) return false;
      const start = S().parseDmy(it.startDate);
      if (from || to) {
        if (!start) return false;
        if (from && start.getTime() < from.getTime()) return false;
        if (to && start.getTime() > to.getTime() + 86400000 - 1) return false;
      }
      return true;
    });
  }

  function columns() {
    return [
      { key: 'name', title: 'Tên' },
      {
        key: 'contractCode', title: 'Mã hợp đồng',
        render: (v, row) => `<a class="dms-table__link" data-action="ct-view-${DMS.escape(row.id)}">${DMS.escape(v)}</a>`
      },
      { key: 'status', title: 'Trạng thái', render: (v) => S().statusTag(v) },
      { key: 'type', title: 'Loại HĐ', render: (v) => S().typeTag(v) },
      { key: 'startDate', title: 'Ngày bắt đầu' },
      { key: 'endDate', title: 'Ngày kết thúc' },
      { key: 'createdBy', title: 'Người tạo' },
      { key: 'createdAt', title: 'Ngày tạo' },
      {
        key: 'actions', title: 'Tùy chỉnh', fixed: 'right', width: '148px',
        render: (_, row) => {
          const canMutate = row.status === 'Khởi tạo';
          return `<div class="display-actions ct-actions">
            ${actionBtn('ct-print', row.id, ctIcon('print'), 'In')}
            ${canMutate ? actionBtn('ct-edit', row.id, ctIcon('edit'), 'Chỉnh sửa', 'ct-act ct-act--edit') : ''}
            ${canMutate ? actionBtn('ct-approve', row.id, ctIcon('approve'), 'Duyệt', 'ct-act ct-act--approve') : ''}
            ${actionBtn('ct-delete', row.id, ctIcon('remove'), 'Xóa', 'ct-act ct-act--delete')}
          </div>`;
        }
      }
    ];
  }

  function renderListBody() {
    const st = listState();
    const filtered = filterContracts(S().persist().contracts || [], st);
    const total = filtered.length;
    const pages = Math.max(1, Math.ceil(total / st.pageSize) || 1);
    if (st.page > pages) st.page = pages;
    const start = (st.page - 1) * st.pageSize;
    const rows = filtered.slice(start, start + st.pageSize);
    const table = rows.length
      ? DMS.render('Table', { columns: columns(), data: rows })
      : `<div class="dms-table-wrapper">${DMS.render('EmptyState', {
          title: 'Không có dữ liệu',
          description: 'Không tìm thấy hợp đồng phù hợp điều kiện lọc.',
          icon: '📭'
        })}</div>`;
    const pag = total
      ? DMS.render('Pagination', { current: st.page, pageSize: st.pageSize, total, unit: 'cấp' })
      : '';
    return table + pag;
  }

  function readFilters() {
    const st = listState();
    st.q = document.getElementById('ct-q')?.value || '';
    st.type = document.getElementById('ct-type')?.value || '';
    st.status = document.getElementById('ct-status')?.value || '';
    st.from = document.getElementById('ct-from')?.value || '';
    st.to = document.getElementById('ct-to')?.value || '';
    st.page = 1;
  }

  function dateFilterOk() {
    const st = listState();
    const from = S().parseDmy(st.from);
    const to = S().parseDmy(st.to);
    if (from && to && to.getTime() < from.getTime()) {
      toast('Ngày kết thúc phải lớn hơn hoặc bằng Ngày bắt đầu', 'warning');
      return false;
    }
    return true;
  }

  function formTitle(mode) {
    if (mode === 'edit') return 'Chỉnh sửa hợp đồng';
    if (mode === 'view') return 'Chi tiết hợp đồng';
    if (mode === 'print') return 'In hợp đồng';
    return 'Tạo mới Hợp Đồng';
  }

  function readDraftDom(d) {
    if (!d || d._locked) return d;
    const codeEl = document.getElementById('ct-f-code');
    if (!codeEl) return d;
    d.contractCode = codeEl.value || '';
    d.name = document.getElementById('ct-f-name')?.value || '';
    d.type = document.getElementById('ct-f-type')?.value || '';
    d.applicableObjectType = document.getElementById('ct-f-object')?.value || '';
    d.startDate = document.getElementById('ct-f-start')?.value || '';
    d.endDate = document.getElementById('ct-f-end')?.value || '';
    d.description = document.getElementById('ct-f-desc')?.value || '';
    const groupsEl = document.getElementById('ct-f-groups');
    const custEl = document.getElementById('ct-f-customers');
    const viewEl = document.getElementById('ct-f-viewers');
    if (groupsEl) d.applicableCustomerGroups = DMS.get('MultiSelect').getValues(groupsEl);
    if (custEl) d.applicableCustomers = DMS.get('MultiSelect').getValues(custEl);
    if (viewEl) d.viewers = DMS.get('MultiSelect').getValues(viewEl);
    return d;
  }

  function validateDraft(d) {
    const err = {};
    if (!(d.contractCode || '').trim()) err.contractCode = 'Mã hợp đồng là bắt buộc';
    else if (S().isCodeTaken(d.contractCode, d.id)) err.contractCode = 'Mã hợp đồng đã tồn tại';
    if (!(d.name || '').trim()) err.name = 'Tên hợp đồng là bắt buộc';
    if (!d.type) err.type = 'Loại hợp đồng là bắt buộc';
    if (!d.file || !d.file.name) err.file = 'File đính kèm là bắt buộc';
    const start = S().parseDmy(d.startDate);
    const end = S().parseDmy(d.endDate);
    if (start && end && end.getTime() < start.getTime()) {
      err.endDate = 'Ngày kết thúc phải lớn hơn hoặc bằng Ngày bắt đầu';
    }
    d._errors = err;
    return !Object.keys(err).length;
  }

  function dynamicFields(d, locked) {
    if (d.applicableObjectType === 'customer_group') {
      return `<div class="dms-form-item ct-form-grid__span-2">
        <label class="dms-form-item__label">Nhóm khách hàng</label>
        ${DMS.render('MultiSelect', {
          id: 'ct-f-groups',
          values: d.applicableCustomerGroups || [],
          options: S().customerGroupOptions(),
          placeholder: 'Chọn nhóm khách hàng',
          disabled: locked
        })}
      </div>`;
    }
    if (d.applicableObjectType === 'customer') {
      return `<div class="dms-form-item ct-form-grid__span-2">
        <label class="dms-form-item__label">Khách hàng</label>
        ${DMS.render('MultiSelect', {
          id: 'ct-f-customers',
          values: d.applicableCustomers || [],
          options: S().customerOptions(),
          placeholder: 'Chọn khách hàng',
          disabled: locked
        })}
      </div>`;
    }
    return '';
  }

  function uploadField(d, locked) {
    const fileName = d.file && d.file.name ? d.file.name : '';
    const inner = fileName
      ? `<span class="ct-upload__name">${DMS.escape(fileName)}</span>
         ${locked ? '' : `<button type="button" class="ct-upload__remove" data-action="ct-file-remove" title="Xóa file">${ctIcon('remove')}</button>`}`
      : `<span class="ct-upload__placeholder">Upload file hợp đồng (.pdf, .txt, .docx)</span>
         <span class="ct-upload__icon" aria-hidden="true">${ctIcon('upload')}</span>`;
    return `<div class="dms-form-item ${d._errors && d._errors.file ? 'is-error' : ''}">
      <label class="dms-form-item__label is-required">File đính kèm</label>
      <div class="ct-upload ${locked ? 'is-disabled' : ''}" data-action="${locked ? '' : 'ct-upload-pick'}">
        <input type="file" id="ct-f-file" accept=".pdf,application/pdf" hidden ${locked ? 'disabled' : ''} />
        ${inner}
      </div>
      ${S().fieldErr(d._errors || {}, 'file')}
    </div>`;
  }

  function extraViewFields(d) {
    if (!d._locked) return '';
    return `<div class="dms-form-item">
        <label class="dms-form-item__label">Trạng thái</label>
        <div class="ct-readonly">${S().statusTag(d.status)}</div>
      </div>
      <div class="dms-form-item">
        <label class="dms-form-item__label">Người tạo</label>
        <div class="ct-readonly">${DMS.escape(d.createdBy || '—')}</div>
      </div>
      <div class="dms-form-item">
        <label class="dms-form-item__label">Ngày tạo</label>
        <div class="ct-readonly">${DMS.escape(d.createdAt || '—')}</div>
      </div>`;
  }

  function renderFormModal(d, mode) {
    const locked = d._locked;
    const store = S().persist();
    const err = d._errors || {};
    const body = `<div class="ct-form-grid">
      <div class="dms-form-item ${err.contractCode ? 'is-error' : ''}">
        <label class="dms-form-item__label is-required">Mã hợp đồng</label>
        ${DMS.render('Input', { id: 'ct-f-code', placeholder: 'Nhập mã hợp đồng', value: d.contractCode || '', disabled: locked })}
        ${S().fieldErr(err, 'contractCode')}
      </div>
      <div class="dms-form-item ${err.name ? 'is-error' : ''}">
        <label class="dms-form-item__label is-required">Tên hợp đồng</label>
        ${DMS.render('Input', { id: 'ct-f-name', placeholder: 'Nhập tên hợp đồng', value: d.name || '', disabled: locked })}
        ${S().fieldErr(err, 'name')}
      </div>
      <div class="dms-form-item ${err.type ? 'is-error' : ''}">
        <label class="dms-form-item__label is-required">Loại hợp đồng</label>
        ${DMS.render('Select', { id: 'ct-f-type', value: d.type, options: store.types, placeholder: 'Chọn loại hợp đồng', disabled: locked })}
        ${S().fieldErr(err, 'type')}
      </div>
      <div class="dms-form-item">
        <label class="dms-form-item__label">Đối tượng áp dụng</label>
        ${DMS.render('Select', { id: 'ct-f-object', value: d.applicableObjectType, options: store.applicableObjectTypes, placeholder: 'Chọn đối tượng áp dụng', disabled: locked })}
      </div>
      ${uploadField(d, locked)}
      <div class="dms-form-item">
        <label class="dms-form-item__label">Ngày bắt đầu</label>
        ${DMS.render('DatePicker', { id: 'ct-f-start', placeholder: 'Từ ngày', value: d.startDate || '', disabled: locked })}
      </div>
      <div class="dms-form-item ${err.endDate ? 'is-error' : ''}">
        <label class="dms-form-item__label">Ngày kết thúc</label>
        ${DMS.render('DatePicker', { id: 'ct-f-end', placeholder: 'Đến ngày', value: d.endDate || '', disabled: locked })}
        ${S().fieldErr(err, 'endDate')}
      </div>
      <div class="dms-form-item">
        <label class="dms-form-item__label">Đối tượng xem hợp đồng</label>
        ${DMS.render('MultiSelect', {
          id: 'ct-f-viewers',
          values: d.viewers || [],
          options: S().employeeOptions(),
          placeholder: 'Chọn đối tượng xem hợp đồng',
          disabled: locked
        })}
      </div>
      ${dynamicFields(d, locked)}
      ${extraViewFields(d)}
      <div class="dms-form-item ct-form-grid__full">
        <label class="dms-form-item__label">Mô tả</label>
        ${DMS.render('Input', { id: 'ct-f-desc', placeholder: 'Nhập mô tả hợp đồng', value: d.description || '', disabled: locked })}
      </div>
    </div>`;
    const footer = locked
      ? `${mode === 'print' ? DMS.render('Button', { text: 'In', type: 'primary', dataAction: 'ct-do-print' }) : ''}
         ${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'ct-close' })}`
      : `${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'ct-close' })}
         ${DMS.render('Button', { text: 'Lưu', type: 'primary', dataAction: 'ct-save' })}`;
    return DMS.render('Modal', {
      id: 'contract-form-modal',
      title: formTitle(mode),
      size: 'xl',
      body,
      footer
    });
  }

  function printSheet(item) {
    if (!item) return '<p>Không tìm thấy hợp đồng.</p>';
    const type = S().typeMeta(item.type);
    const objectLabel = S().catalogLabel(S().persist().applicableObjectTypes || [], item.applicableObjectType);
    const groups = S().groupLabels(item.applicableCustomerGroups).join(', ') || '—';
    const customers = S().customerLabels(item.applicableCustomers).join(', ') || '—';
    const viewers = S().employeeLabels(item.viewers).join(', ') || '—';
    const objectExtra = item.applicableObjectType === 'customer_group'
      ? `<div class="ct-print__row"><span>Nhóm khách hàng</span><strong>${DMS.escape(groups)}</strong></div>`
      : item.applicableObjectType === 'customer'
        ? `<div class="ct-print__row"><span>Khách hàng</span><strong>${DMS.escape(customers)}</strong></div>`
        : '';
    return `<div class="ct-print-sheet" id="ct-print-sheet">
      <h2>Hợp đồng</h2>
      <div class="ct-print__row"><span>Mã hợp đồng</span><strong>${DMS.escape(item.contractCode)}</strong></div>
      <div class="ct-print__row"><span>Tên hợp đồng</span><strong>${DMS.escape(item.name)}</strong></div>
      <div class="ct-print__row"><span>Loại hợp đồng</span><strong>${DMS.escape(type.label)}</strong></div>
      <div class="ct-print__row"><span>Trạng thái</span><strong>${DMS.escape(item.status)}</strong></div>
      <div class="ct-print__row"><span>Đối tượng áp dụng</span><strong>${DMS.escape(objectLabel || '—')}</strong></div>
      ${objectExtra}
      <div class="ct-print__row"><span>Đối tượng xem hợp đồng</span><strong>${DMS.escape(viewers)}</strong></div>
      <div class="ct-print__row"><span>File đính kèm</span><strong>${DMS.escape(item.file?.name || '—')}</strong></div>
      <div class="ct-print__row"><span>Ngày bắt đầu</span><strong>${DMS.escape(item.startDate || '—')}</strong></div>
      <div class="ct-print__row"><span>Ngày kết thúc</span><strong>${DMS.escape(item.endDate || '—')}</strong></div>
      <div class="ct-print__row"><span>Mô tả</span><strong>${DMS.escape(item.description || '—')}</strong></div>
      <div class="ct-print__row"><span>Người tạo</span><strong>${DMS.escape(item.createdBy || '—')}</strong></div>
      <div class="ct-print__row"><span>Ngày tạo</span><strong>${DMS.escape(item.createdAt || '—')}</strong></div>
    </div>`;
  }

  function renderPrintModal(item) {
    return DMS.render('Modal', {
      id: 'contract-print-modal',
      title: 'In hợp đồng',
      size: 'md',
      body: printSheet(item),
      footer: `${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'ct-close' })}
        ${DMS.render('Button', { text: 'In', type: 'primary', dataAction: 'ct-do-print' })}`
    });
  }

  function renderConfirmModal(kind, item) {
    const isDelete = kind === 'delete';
    return DMS.render('Modal', {
      id: 'contract-confirm-modal',
      title: isDelete ? 'Xóa hợp đồng' : 'Duyệt hợp đồng',
      size: 'sm',
      body: `<p class="ct-confirm-msg">${isDelete
        ? 'Bạn có chắc chắn muốn xóa hợp đồng này?'
        : 'Bạn có chắc chắn muốn duyệt hợp đồng này?'}</p>
        <p class="ct-confirm-code">${DMS.escape(item.contractCode || '')} — ${DMS.escape(item.name || '')}</p>`,
      footer: `${DMS.render('Button', { text: 'Hủy', type: 'default', dataAction: 'ct-close' })}
        ${DMS.render('Button', {
          text: isDelete ? 'Xóa' : 'Xác nhận',
          type: isDelete ? 'danger' : 'primary',
          dataAction: 'ct-confirm-ok'
        })}`
    });
  }

  function renderFilter(st, store) {
    return DMS.render('Card', {
      title: 'Tìm kiếm theo',
      body: `<div class="dms-filter-panel">
        <div class="dms-form-grid ct-filter-grid">
          <div class="dms-form-item ct-filter-search">
            <span class="ct-filter-search__icon">${ctIcon('search')}</span>
            ${DMS.render('Input', { id: 'ct-q', placeholder: 'Tìm kiếm theo Mã Hợp Đồng', value: st.q })}
          </div>
          ${DMS.render('Select', { id: 'ct-type', placeholder: 'Loại hợp đồng', value: st.type, options: store.types })}
          ${DMS.render('Select', { id: 'ct-status', placeholder: 'Trạng thái', value: st.status, options: store.statuses })}
          <div class="dms-form-item">
            <div class="ct-date-range">
              ${DMS.render('DatePicker', { id: 'ct-from', placeholder: 'Từ ngày', value: st.from })}
              <span class="ct-date-range__sep">→</span>
              ${DMS.render('DatePicker', { id: 'ct-to', placeholder: 'Đến ngày', value: st.to })}
            </div>
          </div>
        </div>
        <div class="dms-filter-panel__actions">
          ${DMS.render('Button', { text: 'Làm mới', type: 'default', dataAction: 'filter-reset' })}
          ${DMS.render('Button', { text: 'Tìm kiếm', type: 'primary', dataAction: 'filter-search' })}
        </div>
      </div>`
    });
  }

  function crumbLabel(mode) {
    if (mode === 'view') return 'Chi tiết hợp đồng';
    if (mode === 'edit') return 'Chỉnh sửa hợp đồng';
    if (mode === 'print') return 'In hợp đồng';
    return '';
  }

  async function renderContractList() {
    await S().loadStore();
    const st = listState();
    const p = S().queryParams();
    const mode = p.get('mode') || '';
    const id = p.get('id') || '';
    if ((mode === 'edit' || mode === 'view' || mode === 'print') && id) {
      const item = S().findContract(id);
      if (item && S().getDraft()._src !== mode + id) S().loadDraft(item, mode);
    }
    if (mode === 'create' && S().getDraft()._src !== 'create') {
      S().resetDraft();
      S().getDraft()._src = 'create';
    }
    const store = S().persist();
    const filter = renderFilter(st, store);
    const card = DMS.render('Card', {
      title: 'Danh sách hợp đồng',
      extra: DMS.render('Button', { text: '+ Tạo mới', type: 'primary', dataAction: 'ct-create' }),
      body: `<div id="ct-list-body">${renderListBody()}</div>`
    });
    let overlay = '';
    if (mode === 'create' || mode === 'edit' || mode === 'view') overlay += renderFormModal(S().getDraft(), mode);
    if (mode === 'print' && id) overlay += renderPrintModal(S().findContract(id));
    if ((mode === 'delete' || mode === 'approve') && id) {
      const item = S().findContract(id);
      if (item) overlay += renderConfirmModal(mode, item);
    }
    return `<div class="display-page contract-page" data-contract-list>
      ${S().breadcrumb(crumbLabel(mode))}
      <div class="dms-page-header"><h1 class="dms-page-header__title">Danh sách hợp đồng</h1></div>
      ${filter}${card}${overlay}
    </div>`;
  }

  function handleClose() {
    const d = S().getDraft();
    const p = S().queryParams();
    const mode = p.get('mode') || '';
    const go = () => {
      S().resetDraft();
      goList();
    };
    if ((mode === 'create' || mode === 'edit') && d && !d._locked && d._dirty) {
      DMS.get('Dialog').confirm('Màn hình đang có dữ liệu, bạn có muốn đóng?', go);
      return;
    }
    go();
  }

  function handleSubmit() {
    const d = readDraftDom(S().getDraft());
    const mode = d.id ? 'edit' : 'create';
    if (!validateDraft(d)) {
      goMode(mode, d.id || '');
      return;
    }
    const store = S().persist();
    const now = S().nowLabel();
    if (d.id) {
      const item = S().findContract(d.id);
      if (!item) return;
      Object.assign(item, {
        contractCode: d.contractCode.trim(),
        name: d.name.trim(),
        type: d.type,
        applicableObjectType: d.applicableObjectType,
        applicableCustomerGroups: d.applicableObjectType === 'customer_group' ? (d.applicableCustomerGroups || []) : [],
        applicableCustomers: d.applicableObjectType === 'customer' ? (d.applicableCustomers || []) : [],
        viewers: d.viewers || [],
        file: d.file,
        startDate: d.startDate,
        endDate: d.endDate,
        description: d.description
      });
      S().resetDraft();
      goList();
      toast('Cập nhật hợp đồng thành công', 'success');
      return;
    }
    store.contracts.unshift({
      id: 'CT' + Date.now(),
      contractCode: d.contractCode.trim(),
      name: d.name.trim(),
      type: d.type,
      status: 'Khởi tạo',
      applicableObjectType: d.applicableObjectType,
      applicableCustomerGroups: d.applicableObjectType === 'customer_group' ? (d.applicableCustomerGroups || []) : [],
      applicableCustomers: d.applicableObjectType === 'customer' ? (d.applicableCustomers || []) : [],
      viewers: d.viewers || [],
      file: d.file,
      startDate: d.startDate,
      endDate: d.endDate,
      description: d.description,
      createdBy: 'Vũ BA',
      createdAt: now
    });
    S().resetDraft();
    goList();
    toast('Tạo hợp đồng thành công', 'success');
  }

  function handleDelete(id) {
    const store = S().persist();
    store.contracts = (store.contracts || []).filter((c) => c.id !== id);
    S().resetDraft();
    goList();
    toast('Xóa hợp đồng thành công', 'success');
  }

  function handleApprove(id) {
    const item = S().findContract(id);
    if (!item || item.status !== 'Khởi tạo') {
      goList();
      return;
    }
    item.status = 'Đã duyệt';
    S().resetDraft();
    goList();
    toast('Duyệt hợp đồng thành công', 'success');
  }

  function handleConfirmOk() {
    const p = S().queryParams();
    const mode = p.get('mode') || '';
    const id = p.get('id') || '';
    if (mode === 'delete' && id) handleDelete(id);
    else if (mode === 'approve' && id) handleApprove(id);
    else handleClose();
  }

  function onFilePicked(input) {
    const file = input.files && input.files[0];
    const d = readDraftDom(S().getDraft());
    if (!d || !file) return;
    const name = file.name || '';
    const ok = /\.pdf$/i.test(name) || file.type === 'application/pdf';
    const mode = d.id ? 'edit' : 'create';
    if (!ok) {
      input.value = '';
      d._errors = Object.assign({}, d._errors, { file: 'Chỉ được upload file PDF' });
      d._dirty = true;
      goMode(mode, d.id || '');
      return;
    }
    d.file = { name, type: 'application/pdf' };
    if (d._errors) delete d._errors.file;
    d._dirty = true;
    goMode(mode, d.id || '');
  }

  function doPrint() {
    const done = () => {
      document.body.classList.remove('ct-printing');
      window.removeEventListener('afterprint', done);
    };
    window.addEventListener('afterprint', done);
    document.body.classList.add('ct-printing');
    window.print();
  }

  function onContractChange(e) {
    if (e.target.id === 'ct-f-object') {
      const d = readDraftDom(S().getDraft());
      if (!d) return;
      d._dirty = true;
      d.applicableCustomerGroups = [];
      d.applicableCustomers = [];
      goMode(d.id ? 'edit' : 'create', d.id || '');
      return;
    }
    if (e.target.id === 'ct-f-file') {
      onFilePicked(e.target);
      return;
    }
    if (e.target.closest('.dms-pagination__size select')) {
      listState().pageSize = Number(e.target.value) || 10;
      listState().page = 1;
      goList();
      return;
    }
    if (e.target.closest('#ct-f-viewers, #ct-f-groups, #ct-f-customers') ||
        (e.target.id && e.target.id.indexOf('ct-f-') === 0)) {
      const d = S().getDraft();
      if (d) d._dirty = true;
    }
  }

  function onContractInput(e) {
    if (e.target.id && e.target.id.indexOf('ct-f-') === 0) {
      const d = S().getDraft();
      if (d) d._dirty = true;
    }
  }

  function onContractClick(e) {
    if (e.target.closest('[data-action="filter-search"]')) {
      readFilters();
      if (!dateFilterOk()) return;
      goList();
      return;
    }
    if (e.target.closest('[data-action="filter-reset"]')) {
      const pageSize = listState().pageSize;
      window.__contractListState = { q: '', type: '', status: '', from: '', to: '', page: 1, pageSize };
      goList();
      return;
    }
    if (e.target.closest('[data-action="ct-create"]')) {
      S().resetDraft();
      S().getDraft()._src = 'create';
      goMode('create');
      return;
    }

    const inForm = e.target.closest('#contract-form-modal');
    const inPrint = e.target.closest('#contract-print-modal');
    const inConfirm = e.target.closest('#contract-confirm-modal');
    const actEl = e.target.closest('[data-action]');
    const a = actEl ? (actEl.getAttribute('data-action') || '') : '';

    if (a === 'ct-close' || ((inForm || inPrint || inConfirm) && a === 'modal-close')) {
      handleClose();
      return;
    }
    if (e.target.id === 'contract-form-modal' || e.target.id === 'contract-print-modal' || e.target.id === 'contract-confirm-modal') {
      handleClose();
      return;
    }
    if (a === 'ct-save') { handleSubmit(); return; }
    if (a === 'ct-confirm-ok') { handleConfirmOk(); return; }
    if (a === 'ct-do-print') { doPrint(); return; }
    if (a === 'ct-upload-pick' && !e.target.closest('[data-action="ct-file-remove"]')) {
      document.getElementById('ct-f-file')?.click();
      return;
    }
    if (a === 'ct-file-remove') {
      const d = readDraftDom(S().getDraft());
      if (!d) return;
      d.file = null;
      d._dirty = true;
      goMode(d.id ? 'edit' : 'create', d.id || '');
      return;
    }

    const pageBtn = e.target.closest('[data-page]');
    if (!a) {
      if (pageBtn) { listState().page = Number(pageBtn.getAttribute('data-page')); goList(); }
      return;
    }
    const viewM = a.match(/^ct-view-(.+)$/);
    const editM = a.match(/^ct-edit-(.+)$/);
    const printM = a.match(/^ct-print-(.+)$/);
    const apprM = a.match(/^ct-approve-(.+)$/);
    const delM = a.match(/^ct-delete-(.+)$/);
    if (viewM) { goMode('view', viewM[1]); return; }
    if (editM) { goMode('edit', editM[1]); return; }
    if (printM) { goMode('print', printM[1]); return; }
    if (apprM) { goMode('approve', apprM[1]); return; }
    if (delM) { goMode('delete', delM[1]); return; }
    if (pageBtn) { listState().page = Number(pageBtn.getAttribute('data-page')); goList(); }
  }

  renderContractList.onMount = function (container) {
    if (container._ctOnClick) container.removeEventListener('click', container._ctOnClick);
    if (container._ctOnChange) container.removeEventListener('change', container._ctOnChange);
    if (container._ctOnInput) container.removeEventListener('input', container._ctOnInput);
    container._ctOnClick = onContractClick;
    container._ctOnChange = onContractChange;
    container._ctOnInput = onContractInput;
    container.addEventListener('click', onContractClick);
    container.addEventListener('change', onContractChange);
    container.addEventListener('input', onContractInput);
  };

  window.renderContractList = renderContractList;
})();
