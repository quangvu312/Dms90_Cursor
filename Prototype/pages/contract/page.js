/**
 * Quản Lý Hợp Đồng — Hợp đồng mẫu / Hợp đồng khách hàng
 * Shared renderer, parameterized by module.
 */
(function () {
  'use strict';

  function toast(msg, type) { DMS.get('Toast').show(msg, type || 'info'); }
  function S() { return ContractShared; }

  function ctIcon(name) {
    const icons = {
      search: '<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><circle cx="7" cy="7" r="4.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M10.5 10.5L14 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
      file: '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M4.5 2.5h5L12.5 5.5v8a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1z" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M9.5 2.5V5.5h3" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>',
      image: '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><rect x="2" y="3" width="12" height="10" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="5.5" cy="6.5" r="1.1" fill="currentColor"/><path d="M3.5 11.5l3-3 2 2 2.5-2.5 3 3.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
      remove: '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M3 4.5h10M6 4.5V3h4v1.5M5.5 4.5v8.5A1 1 0 0 0 6.5 14h3a1 1 0 0 0 1-1V4.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      upload: '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M8 10.5V3.5M8 3.5L5.5 6M8 3.5L10.5 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 12.5h10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>'
    };
    return icons[name] || '';
  }

  function createContractModule(moduleKey) {
    const cfg = S().moduleCfg(moduleKey);
    const isCustomer = moduleKey === 'customer';

    function listQuery(extra) {
      const next = extra || {};
      const q = [];
      if (next.mode) q.push('mode=' + encodeURIComponent(next.mode));
      if (next.id) q.push('id=' + encodeURIComponent(next.id));
      return cfg.listPath + (q.length ? '?' + q.join('&') : '');
    }
    function goList() { DMSRouter.navigate(cfg.listPath, true); }
    function goMode(mode, id) { DMSRouter.navigate(listQuery({ mode, id: id || '' }), true); }

    function listState() {
      if (!window.__contractListState) window.__contractListState = {};
      if (!window.__contractListState[moduleKey]) {
        window.__contractListState[moduleKey] = {
          q: '', type: '', status: '', from: '', to: '',
          page: 1, pageSize: 10
        };
      }
      return window.__contractListState[moduleKey];
    }

    function actionBtn(type, action, id, title) {
      return DMS.render('ActionIconButton', {
        type: type,
        title: title,
        dataAction: action + '-' + id
      });
    }

    function filterContracts(items, st) {
      const q = (st.q || '').trim().toLowerCase();
      const from = S().parseDmy(st.from);
      const to = S().parseDmy(st.to);
      return items.filter((it) => {
        if ((it.module || 'customer') !== moduleKey) return false;
        if (q) {
          const hay = `${it.contractCode || ''} ${it.name || ''}`.toLowerCase();
          if (hay.indexOf(q) === -1) return false;
        }
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
      const cols = [
        {
          key: 'contractCode', title: 'Mã hợp đồng',
          render: (v, row) => `<a class="dms-table__link" data-action="ct-view-${DMS.escape(row.id)}">${DMS.escape(v)}</a>`
        },
        { key: 'name', title: 'Tên hợp đồng' },
        { key: 'type', title: 'Loại hợp đồng', render: (v) => S().typeTag(v) }
      ];
      if (isCustomer) {
        cols.push({
          key: 'customerId', title: 'Khách hàng',
          render: (v) => DMS.escape(S().customerLabel(v) || '—')
        });
      }
      cols.push(
        { key: 'startDate', title: 'Từ ngày' },
        { key: 'endDate', title: 'Đến ngày' },
        { key: 'status', title: 'Trạng thái', render: (v) => S().statusTag(v) },
        { key: 'createdAt', title: 'Ngày tạo' },
        { key: 'createdBy', title: 'Người tạo' },
        { key: 'updatedAt', title: 'Ngày cập nhật', render: (v) => DMS.escape(v || '—') },
        { key: 'updatedBy', title: 'Người cập nhật', render: (v) => DMS.escape(v || '—') },
        {
          key: 'actions', title: 'Tùy chỉnh', fixed: 'right', width: '120px',
          render: (_, row) => {
            const status = row.status;
            const isFinalStatus =
              status === 'APPROVED' ||
              status === 'REJECTED' ||
              status === 'Đã duyệt' ||
              status === 'Từ chối';
            if (isFinalStatus) return '';
            const canMutate = status === 'Khởi tạo' || status === 'DRAFT' || status === 'INIT';
            return `<div class="dms-action-buttons">
              ${canMutate ? actionBtn('edit', 'ct-edit', row.id, 'Chỉnh sửa') : ''}
              ${canMutate ? actionBtn('approve', 'ct-approve', row.id, 'Duyệt') : ''}
              ${actionBtn('delete', 'ct-delete', row.id, 'Xóa')}
            </div>`;
          }
        }
      );
      return cols;
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
        ? DMS.render('Pagination', { current: st.page, pageSize: st.pageSize, total, unit: 'hợp đồng' })
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
      const noun = cfg.label;
      if (mode === 'edit') return 'Chỉnh sửa ' + noun;
      if (mode === 'view') return 'Chi tiết ' + noun;
      if (mode === 'print') return 'In ' + noun;
      return isCustomer ? 'Thêm ' + noun : 'Tạo mới ' + noun;
    }

    function readDraftDom(d) {
      if (!d || d._locked) return d;
      const nameEl = document.getElementById('ct-f-name');
      if (!nameEl) return d;
      d.name = nameEl.value || '';
      d.type = document.getElementById('ct-f-type')?.value || '';
      d.startDate = document.getElementById('ct-f-start')?.value || '';
      d.endDate = document.getElementById('ct-f-end')?.value || '';
      d.description = document.getElementById('ct-f-desc')?.value || '';
      return d;
    }

    function validateDraft(d) {
      const err = {};
      if (!(d.name || '').trim()) err.name = 'Tên hợp đồng là bắt buộc';
      if (!d.type) err.type = 'Loại hợp đồng là bắt buộc';
      if (!d.files || !d.files.length) err.file = 'File đính kèm là bắt buộc';
      if (isCustomer && !d.customerId) err.customer = 'Khách hàng là bắt buộc';
      const start = S().parseDmy(d.startDate);
      const end = S().parseDmy(d.endDate);
      if (start && end && end.getTime() < start.getTime()) {
        err.endDate = 'Đến ngày phải lớn hơn hoặc bằng Từ ngày';
      }
      d._errors = err;
      return !Object.keys(err).length;
    }

    function ensureCustList(d) {
      if (!d._custList) d._custList = S().emptyCustList();
      return d._custList;
    }
    function ensurePick(d) {
      if (!d._pick) d._pick = S().emptyPick();
      return d._pick;
    }

    function paginate(rows, page, pageSize) {
      const total = rows.length;
      const pages = Math.max(1, Math.ceil(total / pageSize) || 1);
      const current = Math.min(Math.max(1, page || 1), pages);
      const start = (current - 1) * pageSize;
      return { total, pages, page: current, rows: rows.slice(start, start + pageSize) };
    }

    function selectedCustomerRows(d) {
      const st = ensureCustList(d);
      const rec = d.customerId ? [S().customerRecord(d.customerId)].filter(Boolean) : [];
      const filtered = S().filterCustomerMaster(rec, st.q, '');
      return paginate(filtered, st.page, st.pageSize || 10);
    }

    function renderSelectedCustomerTable(d, locked) {
      const st = ensureCustList(d);
      const pg = selectedCustomerRows(d);
      st.page = pg.page;
      const table = pg.total
        ? DMS.render('Table', {
            columns: [
              { key: 'code', title: 'Mã KH', width: '110px' },
              { key: 'name', title: 'Tên khách hàng', width: '180px' },
              { key: 'phone', title: 'Số điện thoại', width: '140px' },
              {
                key: 'address', title: 'Địa chỉ',
                render: (v) => `<span class="ct-cust-addr" title="${DMS.escape(v || '—')}">${DMS.escape(v || '—')}</span>`
              },
              { key: 'status', title: 'Trạng thái', width: '120px', render: (v) => S().customerStatusTag(v) },
              {
                key: 'actions', title: 'Tùy chỉnh', width: '100px',
                render: (_, row) => locked ? '' : DMS.render('TableActions', {
                  actions: [{ type: 'delete', title: 'Xóa', dataAction: 'ct-cust-remove-' + row.id }]
                })
              }
            ],
            data: pg.rows
          })
        : `<div class="dms-table-wrapper">${DMS.render('EmptyState', {
            title: 'Chưa có dữ liệu',
            description: locked ? '' : 'Chọn khách hàng để gắn vào hợp đồng.',
            icon: '📭'
          })}</div>`;
      return `<div id="ct-cust-table-wrap">${table}</div>`;
    }

    function renderCustomerSection(d, locked) {
      if (!isCustomer) return '';
      const st = ensureCustList(d);
      const addBtn = locked ? '' : DMS.render('Button', {
        text: d.customerId ? 'Chọn lại' : '+ Thêm', type: 'primary', dataAction: 'ct-cust-add'
      });
      return `<div class="ct-cust-section" id="ct-cust-section">
        <div class="ct-cust-section__head">
          <label class="dms-form-item__label is-required">Khách hàng</label>
        </div>
        ${d._errors && d._errors.customer ? S().fieldErr(d._errors, 'customer') : ''}
        <div class="ct-cust-toolbar">
          <div class="ct-cust-toolbar__search">
            <span class="ct-filter-search__icon">${ctIcon('search')}</span>
            ${DMS.render('Input', { id: 'ct-cust-q', placeholder: 'Tìm kiếm...', value: st.q || '' })}
          </div>
          <div class="ct-cust-toolbar__actions">${addBtn}</div>
        </div>
        ${renderSelectedCustomerTable(d, locked)}
      </div>`;
    }

    function pickFilteredRows(d) {
      const pick = ensurePick(d);
      const filtered = S().filterCustomerMaster(
        S().allCustomers(),
        pick.appliedQ,
        pick.appliedStatus
      );
      return paginate(filtered, pick.page, pick.pageSize || 10);
    }

    function renderPickerBody(d) {
      const pick = ensurePick(d);
      const pg = pickFilteredRows(d);
      pick.page = pg.page;
      const selected = String(pick.selected || '');
      const table = pg.total
        ? `<div class="dms-table-wrapper"><table class="dms-table" id="ct-pick-table">
          <thead><tr>
            <th style="width:40px"></th>
            <th style="width:110px">Mã KH</th>
            <th style="width:180px">Tên khách hàng</th>
            <th style="width:140px">Số điện thoại</th>
            <th>Địa chỉ</th>
            <th style="width:120px">Trạng thái</th>
          </tr></thead>
          <tbody>${pg.rows.map((c) => `<tr data-action="ct-pick-row" data-ct-pick-id="${DMS.escape(c.id)}">
            <td>${DMS.render('Radio', {
              name: 'ct-pick-one',
              value: c.id,
              checked: selected === String(c.id)
            }).replace('<input ', '<input data-ct-pick-id="' + DMS.escape(c.id) + '" ')}</td>
            <td>${DMS.escape(c.code)}</td>
            <td>${DMS.escape(c.name)}</td>
            <td>${DMS.escape(c.phone || '—')}</td>
            <td><span class="ct-cust-addr" title="${DMS.escape(c.address || '—')}">${DMS.escape(c.address || '—')}</span></td>
            <td>${S().customerStatusTag(c.status)}</td>
          </tr>`).join('')}</tbody>
        </table></div>`
        : `<div class="dms-table-wrapper">${DMS.render('EmptyState', {
            title: 'Chưa có dữ liệu',
            description: 'Không tìm thấy khách hàng phù hợp điều kiện lọc.',
            icon: '📭'
          })}</div>`;
      const pag = pg.total
        ? `<div id="ct-pick-pag">${DMS.render('Pagination', {
            current: pg.page, pageSize: pick.pageSize || 10, total: pg.total, unit: 'khách hàng'
          })}</div>`
        : '';
      return `<div class="ct-pick-filter">
          <div class="ct-pick-filter__grid">
            <div class="dms-form-item">
              <label class="dms-form-item__label">Tìm kiếm</label>
              ${DMS.render('Input', { id: 'ct-pick-q', placeholder: 'Tìm kiếm theo Mã KH, Tên khách hàng', value: pick.q || '' })}
            </div>
            <div class="dms-form-item">
              <label class="dms-form-item__label">Trạng thái</label>
              ${DMS.render('Select', {
                id: 'ct-pick-status',
                value: pick.status || '',
                options: S().customerStatusOptions(),
                placeholder: 'Trạng thái'
              })}
            </div>
          </div>
          <div class="ct-pick-filter__actions">
            ${DMS.render('Button', { text: 'Làm mới', type: 'default', dataAction: 'ct-pick-reset' })}
            ${DMS.render('Button', { text: 'Tìm kiếm', type: 'primary', dataAction: 'ct-pick-search' })}
          </div>
        </div>
        <div class="ct-cust-section__head"><label class="dms-form-item__label">Danh sách khách hàng</label></div>
        <div id="ct-pick-table-wrap">${table}${pag}</div>`;
    }

    function renderCustomerPicker(d) {
      return DMS.render('Modal', {
        id: 'ct-pick-modal',
        title: 'Chọn khách hàng',
        size: 'xl',
        body: renderPickerBody(d),
        footer: `${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'ct-pick-close' })}
          ${DMS.render('Button', { text: 'Xác nhận', type: 'primary', dataAction: 'ct-pick-ok' })}`
      });
    }

    function refreshCustomerSection() {
      const d = S().getDraft(moduleKey);
      const el = document.getElementById('ct-cust-section');
      if (!el || !d) return;
      el.outerHTML = renderCustomerSection(d, d._locked);
      const next = document.getElementById('ct-cust-section');
      if (next) DMS.bindFormControls(next);
    }

    function refreshPickerBody() {
      const d = S().getDraft(moduleKey);
      const modal = document.getElementById('ct-pick-modal');
      if (!modal || !d) return;
      const body = modal.querySelector('.dms-modal__body');
      if (!body) return;
      body.innerHTML = renderPickerBody(d);
      DMS.bindFormControls(body);
    }

    function closeCustomerPicker() {
      const d = S().getDraft(moduleKey);
      if (d) {
        const pick = ensurePick(d);
        pick.open = false;
      }
      document.getElementById('ct-pick-modal')?.remove();
    }

    function openCustomerPicker() {
      const d = readDraftDom(S().getDraft(moduleKey));
      if (!d || d._locked || !isCustomer) return;
      const pick = ensurePick(d);
      pick.open = true;
      pick.q = '';
      pick.status = '';
      pick.appliedQ = '';
      pick.appliedStatus = '';
      pick.page = 1;
      pick.pageSize = pick.pageSize || 10;
      pick.selected = d.customerId || '';
      document.getElementById('ct-pick-modal')?.remove();
      const page = document.querySelector('.contract-page');
      if (!page) return;
      page.insertAdjacentHTML('beforeend', renderCustomerPicker(d));
      const modal = document.getElementById('ct-pick-modal');
      if (modal) DMS.bindFormControls(modal);
    }

    function confirmCustomerPicker() {
      const d = S().getDraft(moduleKey);
      if (!d) return;
      const selected = String(ensurePick(d).selected || '');
      if (!selected) {
        toast('Vui lòng chọn 1 khách hàng', 'warning');
        return;
      }
      d.customerId = selected;
      d._dirty = true;
      if (d._errors) delete d._errors.customer;
      closeCustomerPicker();
      refreshCustomerSection();
    }

    function closeFilePreview() {
      const d = S().getDraft(moduleKey);
      if (d) d._preview = null;
      document.getElementById('ct-file-preview-modal')?.remove();
    }

    function openFilePreview(file) {
      if (!file) return;
      const d = S().getDraft(moduleKey);
      if (d) d._preview = file;
      document.getElementById('ct-file-preview-modal')?.remove();
      const page = document.querySelector('.contract-page');
      if (!page) return;
      page.insertAdjacentHTML('beforeend', DMS.render('FilePreviewModal', {
        id: 'ct-file-preview-modal',
        file
      }));
    }

    function fileListVisual(f, i) {
      const kind = ContractFile.kind(f);
      if (kind === 'image') {
        const src = ContractFile.previewSrc(f);
        if (src) {
          return `<button type="button" class="ct-file-list__thumb" data-action="ct-file-preview" data-file-index="${i}" title="Xem ảnh">
            <img src="${DMS.escape(src)}" alt="${DMS.escape(f.name || '')}" onerror="this.style.display='none'" />
          </button>`;
        }
        return `<span class="ct-file-list__icon" aria-hidden="true">${ctIcon('image')}</span>`;
      }
      return `<span class="ct-file-list__icon" aria-hidden="true">${ctIcon('file')}</span>`;
    }

    function uploadField(d, locked, fullWidth) {
      const files = d.files || [];
      const list = files.length
        ? `<ul class="ct-file-list">${files.map((f, i) => `
            <li class="ct-file-list__item${ContractFile.kind(f) === 'image' ? ' ct-file-list__item--image' : ''}">
              ${fileListVisual(f, i)}
              <button type="button" class="ct-file-list__name" data-action="ct-file-preview" data-file-index="${i}">${DMS.escape(f.name)}</button>
              <span class="ct-file-list__type">${DMS.escape(S().fileTypeLabel(f))}</span>
              <span class="ct-file-list__size">${DMS.escape(ContractFile.formatSize(f.size) || '')}</span>
              ${locked ? '' : `<button type="button" class="ct-upload__remove" data-action="ct-file-remove" data-file-index="${i}" title="Xóa file">${ctIcon('remove')}</button>`}
            </li>`).join('')}</ul>`
        : (locked ? `<div class="ct-readonly">—</div>` : '');
      const picker = locked ? '' : `<div class="ct-upload" data-action="ct-upload-pick">
          <input type="file" id="ct-f-file" accept="${ContractFile.ACCEPT_ATTR}" multiple hidden />
          <span class="ct-upload__placeholder">Hỗ trợ PDF, DOC, DOCX, TXT, JPG, JPEG, PNG</span>
          <span class="ct-upload__icon" aria-hidden="true">${ctIcon('upload')}</span>
        </div>`;
      return `<div class="dms-form-item ${fullWidth ? 'ct-form-grid__full ' : ''}${d._errors && d._errors.file ? 'is-error' : ''}">
        <label class="dms-form-item__label is-required">File đính kèm</label>
        ${picker}${list}
        ${S().fieldErr(d._errors || {}, 'file')}
      </div>`;
    }

    function infoItem(opts) {
      const err = opts.errors || {};
      const errKey = opts.errKey || '';
      const extra = opts.className ? ' ' + opts.className : '';
      return `<div class="dms-form-item${errKey && err[errKey] ? ' is-error' : ''}${extra}">
        <label class="dms-form-item__label${opts.required ? ' is-required' : ''}">${opts.label}</label>
        ${opts.html}
        ${errKey ? S().fieldErr(err, errKey) : ''}
      </div>`;
    }

    function contractInfoGrid(d, mode) {
      const locked = !!d._locked;
      const store = S().persist();
      const err = d._errors || {};
      const name = infoItem({
        errors: err, errKey: 'name', required: true, label: 'Tên hợp đồng',
        html: DMS.render('Input', { id: 'ct-f-name', placeholder: 'Nhập tên hợp đồng', value: d.name || '', disabled: locked })
      });
      const start = infoItem({
        label: 'Từ ngày',
        html: DMS.render('DatePicker', { id: 'ct-f-start', placeholder: 'Từ ngày', value: d.startDate || '', disabled: locked })
      });
      const end = infoItem({
        errors: err, errKey: 'endDate', label: 'Đến ngày',
        html: DMS.render('DatePicker', { id: 'ct-f-end', placeholder: 'Đến ngày', value: d.endDate || '', disabled: locked })
      });
      const type = infoItem({
        errors: err, errKey: 'type', required: true, label: 'Loại hợp đồng',
        html: DMS.render('Select', { id: 'ct-f-type', value: d.type, options: store.types, placeholder: 'Chọn loại hợp đồng', disabled: locked })
      });
      const note = infoItem({
        label: 'Ghi chú',
        html: DMS.render('Input', { id: 'ct-f-desc', placeholder: 'Nhập ghi chú', value: d.description || '', disabled: locked })
      });
      if (mode === 'create') {
        return `<div class="ct-form-grid">${name}${start}${end}${uploadField(d, locked, false)}${type}${note}</div>`;
      }
      const code = infoItem({
        label: 'Mã hợp đồng',
        html: DMS.render('Input', {
          id: 'ct-f-code',
          value: d.contractCode || '',
          disabled: true,
          readonly: true
        })
      });
      return `<div class="ct-form-grid">${code}${name}${type}${start}${end}${note}${uploadField(d, locked, true)}</div>`;
    }

    function renderFormModal(d, mode) {
      const locked = d._locked;
      const body = `<div class="ct-form">
        ${contractInfoGrid(d, mode)}
        ${isCustomer ? `<div class="ct-applicable">${renderCustomerSection(d, locked)}</div>` : ''}
      </div>`;
      const footer = locked
        ? `${mode === 'view' || mode === 'print' ? DMS.render('Button', { text: 'In', type: 'primary', dataAction: mode === 'view' ? 'ct-open-print' : 'ct-do-print' }) : ''}
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
      const files = S().normalizeFiles(item).map((f) => f.name).join(', ') || '—';
      const customerRow = isCustomer
        ? `<div class="ct-print__row"><span>Khách hàng</span><strong>${DMS.escape(S().customerLabel(item.customerId) || '—')}</strong></div>`
        : '';
      return `<div class="ct-print-sheet" id="ct-print-sheet">
        <h2>${DMS.escape(cfg.label)}</h2>
        <div class="ct-print__row"><span>Mã hợp đồng</span><strong>${DMS.escape(item.contractCode)}</strong></div>
        <div class="ct-print__row"><span>Tên hợp đồng</span><strong>${DMS.escape(item.name)}</strong></div>
        <div class="ct-print__row"><span>Loại hợp đồng</span><strong>${DMS.escape(type.label)}</strong></div>
        <div class="ct-print__row"><span>Trạng thái</span><strong>${DMS.escape(item.status)}</strong></div>
        ${customerRow}
        <div class="ct-print__row"><span>File đính kèm</span><strong>${DMS.escape(files)}</strong></div>
        <div class="ct-print__row"><span>Từ ngày</span><strong>${DMS.escape(item.startDate || '—')}</strong></div>
        <div class="ct-print__row"><span>Đến ngày</span><strong>${DMS.escape(item.endDate || '—')}</strong></div>
        <div class="ct-print__row"><span>Ghi chú</span><strong>${DMS.escape(item.description || '—')}</strong></div>
        <div class="ct-print__row"><span>Người tạo</span><strong>${DMS.escape(item.createdBy || '—')}</strong></div>
        <div class="ct-print__row"><span>Ngày tạo</span><strong>${DMS.escape(item.createdAt || '—')}</strong></div>
      </div>`;
    }

    function renderPrintModal(item) {
      return DMS.render('Modal', {
        id: 'contract-print-modal',
        title: 'In ' + cfg.label,
        size: 'md',
        body: printSheet(item),
        footer: `${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'ct-close' })}
          ${DMS.render('Button', { text: 'In', type: 'primary', dataAction: 'ct-do-print' })}`
      });
    }

    function renderConfirmModal(kind, item) {
      const isDelete = kind === 'delete';
      if (isDelete) {
        return DMS.render('Modal', {
          id: 'contract-confirm-modal',
          title: 'Xóa ' + cfg.label,
          size: 'sm',
          body: `<p class="ct-confirm-msg">Bạn có chắc chắn muốn xóa hợp đồng này?</p>
            <p class="ct-confirm-code">${DMS.escape(item.contractCode || '')} — ${DMS.escape(item.name || '')}</p>`,
          footer: `${DMS.render('Button', { text: 'Hủy', type: 'default', dataAction: 'ct-close' })}
            ${DMS.render('Button', { text: 'Xóa', type: 'danger', dataAction: 'ct-confirm-ok' })}`
        });
      }
      return DMS.render('Modal', {
        id: 'contract-confirm-modal',
        title: 'Duyệt ' + cfg.label,
        size: 'sm',
        body: `<p class="ct-confirm-msg">Bạn muốn xử lý hợp đồng này?</p>
          <p class="ct-confirm-code">${DMS.escape(item.contractCode || '')} — ${DMS.escape(item.name || '')}</p>`,
        footer: `${DMS.render('Button', { text: 'Từ chối', type: 'default', dataAction: 'ct-reject' })}
          ${DMS.render('Button', { text: 'Duyệt', type: 'primary', dataAction: 'ct-approve-ok' })}`
      });
    }

    function renderFilter(st, store) {
      return DMS.render('FilterPanel', {
        fields: [
          { type: 'search', id: 'ct-q', placeholder: 'Tìm kiếm theo Mã/Tên hợp đồng', value: st.q, label: 'Tìm kiếm theo' },
          { type: 'select', id: 'ct-type', placeholder: 'Loại hợp đồng', value: st.type, options: store.types, label: 'Loại hợp đồng' },
          { type: 'select', id: 'ct-status', placeholder: 'Trạng thái', value: st.status, options: store.statuses, label: 'Trạng thái' },
          {
            type: 'daterange',
            label: 'Thời gian',
            fromId: 'ct-from',
            toId: 'ct-to',
            fromValue: st.from,
            toValue: st.to
          }
        ]
      });
    }

    function crumbLabel(mode) {
      if (mode === 'view') return 'Chi tiết ' + cfg.label;
      if (mode === 'edit') return 'Chỉnh sửa ' + cfg.label;
      if (mode === 'print') return 'In ' + cfg.label;
      return '';
    }

    async function renderPage() {
      await S().loadStore();
      const st = listState();
      const p = S().queryParams();
      const mode = p.get('mode') || '';
      const id = p.get('id') || '';
      if ((mode === 'edit' || mode === 'view' || mode === 'print') && id) {
        const item = S().findContract(id);
        if (item && item.module && item.module !== moduleKey) {
          goList();
          return `<div class="dms-loading">Đang chuyển...</div>`;
        }
        if (item && S().getDraft(moduleKey)._src !== mode + id) S().loadDraft(item, mode, moduleKey);
      }
      if (mode === 'create' && S().getDraft(moduleKey)._src !== 'create') {
        S().resetDraft(moduleKey);
        S().getDraft(moduleKey)._src = 'create';
      }
      const store = S().persist();
      const filter = renderFilter(st, store);
      const card = DMS.render('Card', {
        title: cfg.listTitle,
        extra: DMS.render('Button', { text: isCustomer ? '+ Thêm' : '+ Tạo mới', type: 'primary', dataAction: 'ct-create' }),
        body: `<div id="ct-list-body">${renderListBody()}</div>`
      });
      const draft = S().getDraft(moduleKey);
      let overlay = '';
      if (mode === 'create' || mode === 'edit' || mode === 'view') overlay += renderFormModal(draft, mode);
      if (isCustomer && (mode === 'create' || mode === 'edit') && draft._pick && draft._pick.open) {
        overlay += renderCustomerPicker(draft);
      }
      if (draft._preview) overlay += DMS.render('FilePreviewModal', { id: 'ct-file-preview-modal', file: draft._preview });
      if (mode === 'print' && id) overlay += renderPrintModal(S().findContract(id));
      if ((mode === 'delete' || mode === 'approve') && id) {
        const item = S().findContract(id);
        if (item) overlay += renderConfirmModal(mode, item);
      }
      return `<div class="display-page contract-page" data-contract-module="${moduleKey}">
        ${S().breadcrumb(cfg, crumbLabel(mode))}
        <div class="dms-page-header"><h1 class="dms-page-header__title">${DMS.escape(cfg.listTitle)}</h1></div>
        ${filter}${card}${overlay}
      </div>`;
    }

    function handleClose() {
      const d = S().getDraft(moduleKey);
      const p = S().queryParams();
      const mode = p.get('mode') || '';
      const go = () => {
        S().resetDraft(moduleKey);
        goList();
      };
      if ((mode === 'create' || mode === 'edit') && d && !d._locked && d._dirty) {
        DMS.get('Dialog').confirm('Màn hình đang có dữ liệu, bạn có muốn đóng?', go);
        return;
      }
      go();
    }

    function payloadFromDraft(d, now, existing) {
      const base = {
        module: moduleKey,
        name: d.name.trim(),
        type: d.type,
        files: S().clone(d.files || []).map((f) => {
          const copy = S().clone(f);
          return copy;
        }),
        startDate: d.startDate,
        endDate: d.endDate,
        description: d.description,
        updatedBy: 'Vũ BA',
        updatedAt: now
      };
      if (isCustomer) base.customerId = d.customerId || '';
      else base.customerId = '';
      if (existing) {
        base.contractCode = existing.contractCode;
        base.status = existing.status;
        base.createdBy = existing.createdBy;
        base.createdAt = existing.createdAt;
      }
      return base;
    }

    function handleSubmit() {
      const d = readDraftDom(S().getDraft(moduleKey));
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
        Object.assign(item, payloadFromDraft(d, now, item));
        S().resetDraft(moduleKey);
        goList();
        toast('Cập nhật hợp đồng thành công', 'success');
        return;
      }
      store.contracts.unshift(Object.assign({
        id: 'CT' + Date.now(),
        contractCode: S().nextContractCode(new Date(), moduleKey),
        status: 'Khởi tạo',
        createdBy: 'Vũ BA',
        createdAt: now
      }, payloadFromDraft(d, now, null)));
      S().resetDraft(moduleKey);
      goList();
      toast('Tạo hợp đồng thành công', 'success');
    }

    function handleDelete(id) {
      const store = S().persist();
      store.contracts = (store.contracts || []).filter((c) => c.id !== id);
      S().resetDraft(moduleKey);
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
      item.updatedBy = 'Vũ BA';
      item.updatedAt = S().nowLabel();
      S().resetDraft(moduleKey);
      goList();
      toast('Duyệt hợp đồng thành công', 'success');
    }

    function handleReject(id) {
      const item = S().findContract(id);
      if (!item || item.status !== 'Khởi tạo') {
        goList();
        return;
      }
      item.status = 'Từ chối';
      item.updatedBy = 'Vũ BA';
      item.updatedAt = S().nowLabel();
      S().resetDraft(moduleKey);
      goList();
      toast('Từ chối hợp đồng thành công', 'success');
    }

    function handleConfirmOk() {
      const p = S().queryParams();
      const mode = p.get('mode') || '';
      const id = p.get('id') || '';
      if (mode === 'delete' && id) handleDelete(id);
      else handleClose();
    }

    function toFileRecord(file) {
      return new Promise((resolve) => {
        const ext = ContractFile.ext(file);
        const rec = ContractFile.enrich({
          name: file.name || '',
          type: file.type || ContractFile.MIME[ext] || '',
          size: file.size || 0,
          uploadedAt: S().nowLabel(),
          uploadedBy: 'Vũ BA',
          objectUrl: URL.createObjectURL(file)
        });
        if (ext === 'txt') {
          const reader = new FileReader();
          reader.onload = () => {
            rec.textContent = String(reader.result || '');
            resolve(rec);
          };
          reader.onerror = () => resolve(rec);
          reader.readAsText(file);
          return;
        }
        resolve(rec);
      });
    }

    function onFilePicked(input) {
      const picked = input.files ? Array.from(input.files) : [];
      const d = readDraftDom(S().getDraft(moduleKey));
      if (!d || !picked.length) return;
      const mode = d.id ? 'edit' : 'create';
      if (!d.files) d.files = [];
      const existing = d.files.map((f) => String(f.name || '').toLowerCase());
      const valid = [];
      let invalid = false;
      picked.forEach((file) => {
        if (!ContractFile.isAllowed(file)) {
          invalid = true;
          return;
        }
        const name = file.name || '';
        if (existing.indexOf(name.toLowerCase()) !== -1) return;
        valid.push(file);
        existing.push(name.toLowerCase());
      });
      input.value = '';
      d._dirty = true;
      if (invalid && !valid.length) {
        d._errors = Object.assign({}, d._errors, { file: ContractFile.FORMAT_ERROR });
        goMode(mode, d.id || '');
        return;
      }
      Promise.all(valid.map(toFileRecord)).then((recs) => {
        recs.forEach((rec) => d.files.push(rec));
        if (invalid) {
          d._errors = Object.assign({}, d._errors, {
            file: 'Một số file không đúng định dạng đã bị bỏ qua. ' + ContractFile.FORMAT_ERROR
          });
        } else if (d.files.length && d._errors) {
          delete d._errors.file;
        }
        goMode(mode, d.id || '');
      });
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

    function onChange(e) {
      if (e.target.id === 'ct-pick-status') {
        const d = S().getDraft(moduleKey);
        if (d) ensurePick(d).status = e.target.value || '';
        return;
      }
      if (e.target.id === 'ct-f-file') {
        onFilePicked(e.target);
        return;
      }
      if (e.target.closest('#ct-pick-pag .dms-pagination__size select') ||
          e.target.closest('#ct-pick-modal .dms-pagination__size select')) {
        const d = S().getDraft(moduleKey);
        if (!d) return;
        ensurePick(d).pageSize = Number(e.target.value) || 10;
        d._pick.page = 1;
        refreshPickerBody();
        return;
      }
      if (e.target.hasAttribute('data-ct-pick-id') && e.target.type === 'radio') {
        const d = S().getDraft(moduleKey);
        if (!d) return;
        ensurePick(d).selected = e.target.getAttribute('data-ct-pick-id') || '';
        return;
      }
      if (e.target.closest('.dms-pagination__size select')) {
        listState().pageSize = Number(e.target.value) || 10;
        listState().page = 1;
        goList();
        return;
      }
      if (e.target.id && e.target.id.indexOf('ct-f-') === 0) {
        const d = S().getDraft(moduleKey);
        if (d) d._dirty = true;
      }
    }

    function onInput(e) {
      if (e.target.id === 'ct-cust-q') {
        const d = S().getDraft(moduleKey);
        if (!d) return;
        ensureCustList(d).q = e.target.value || '';
        d._custList.page = 1;
        const wrap = document.getElementById('ct-cust-table-wrap');
        if (wrap) {
          wrap.outerHTML = renderSelectedCustomerTable(d, d._locked);
          const next = document.getElementById('ct-cust-table-wrap');
          if (next) DMS.bindFormControls(next);
        }
        return;
      }
      if (e.target.id === 'ct-pick-q') {
        const d = S().getDraft(moduleKey);
        if (d) ensurePick(d).q = e.target.value || '';
        return;
      }
      if (e.target.id && e.target.id.indexOf('ct-f-') === 0) {
        const d = S().getDraft(moduleKey);
        if (d) d._dirty = true;
      }
    }

    function onClick(e) {
      const inPreview = e.target.closest('#ct-file-preview-modal');
      if (inPreview) {
        const pa = e.target.closest('[data-action]');
        const pact = pa ? (pa.getAttribute('data-action') || '') : '';
        if (pact === 'ct-preview-close' || pact === 'modal-close' || e.target.id === 'ct-file-preview-modal') {
          closeFilePreview();
          return;
        }
        if (pact === 'ct-preview-download') {
          const d = S().getDraft(moduleKey);
          if (!S().downloadFile(d && d._preview)) toast('Không có dữ liệu để tải xuống', 'warning');
          return;
        }
        return;
      }

      const inPick = e.target.closest('#ct-pick-modal');
      const pickActEl = inPick ? e.target.closest('[data-action]') : null;
      const pickAct = pickActEl ? (pickActEl.getAttribute('data-action') || '') : '';

      if (inPick && (pickAct === 'ct-pick-close' || pickAct === 'modal-close' || e.target.id === 'ct-pick-modal')) {
        closeCustomerPicker();
        return;
      }
      if (inPick && pickAct === 'ct-pick-ok') {
        confirmCustomerPicker();
        return;
      }
      if (inPick && pickAct === 'ct-pick-search') {
        const d = S().getDraft(moduleKey);
        if (!d) return;
        const pick = ensurePick(d);
        pick.q = document.getElementById('ct-pick-q')?.value || '';
        pick.status = document.getElementById('ct-pick-status')?.value || '';
        pick.appliedQ = pick.q;
        pick.appliedStatus = pick.status;
        pick.page = 1;
        refreshPickerBody();
        return;
      }
      if (inPick && pickAct === 'ct-pick-reset') {
        const d = S().getDraft(moduleKey);
        if (!d) return;
        const keep = ensurePick(d).selected || '';
        d._pick = S().emptyPick();
        d._pick.open = true;
        d._pick.selected = keep;
        refreshPickerBody();
        return;
      }
      if (inPick && pickAct === 'ct-pick-row') {
        const d = S().getDraft(moduleKey);
        if (!d) return;
        const id = pickActEl.getAttribute('data-ct-pick-id');
        if (id) {
          ensurePick(d).selected = id;
          refreshPickerBody();
        }
        return;
      }
      if (inPick) {
        const pickPage = e.target.closest('#ct-pick-modal [data-page]');
        if (pickPage) {
          const d = S().getDraft(moduleKey);
          if (!d) return;
          ensurePick(d).page = Number(pickPage.getAttribute('data-page')) || 1;
          refreshPickerBody();
        }
        return;
      }

      if (e.target.closest('[data-action="filter-search"]')) {
        readFilters();
        if (!dateFilterOk()) return;
        goList();
        return;
      }
      if (e.target.closest('[data-action="filter-reset"]')) {
        const pageSize = listState().pageSize;
        window.__contractListState[moduleKey] = { q: '', type: '', status: '', from: '', to: '', page: 1, pageSize };
        goList();
        return;
      }
      if (e.target.closest('[data-action="ct-create"]')) {
        S().resetDraft(moduleKey);
        S().getDraft(moduleKey)._src = 'create';
        goMode('create');
        return;
      }

      const inForm = e.target.closest('#contract-form-modal');
      const inPrint = e.target.closest('#contract-print-modal');
      const inConfirm = e.target.closest('#contract-confirm-modal');
      const actEl = e.target.closest('[data-action]');
      const a = actEl ? (actEl.getAttribute('data-action') || '') : '';

      if (a === 'ct-cust-add') {
        openCustomerPicker();
        return;
      }
      const removeM = a.match(/^ct-cust-remove-(.+)$/);
      if (removeM) {
        const d = S().getDraft(moduleKey);
        if (!d || d._locked) return;
        if (String(d.customerId) === String(removeM[1])) d.customerId = '';
        d._dirty = true;
        refreshCustomerSection();
        return;
      }

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
      if (a === 'ct-approve-ok') {
        const id = S().queryParams().get('id') || '';
        if (id) handleApprove(id);
        return;
      }
      if (a === 'ct-reject') {
        const id = S().queryParams().get('id') || '';
        if (id) handleReject(id);
        return;
      }
      if (a === 'ct-open-print') {
        const id = S().queryParams().get('id') || S().getDraft(moduleKey).id || '';
        if (id) goMode('print', id);
        return;
      }
      if (a === 'ct-do-print') { doPrint(); return; }
      if (a === 'ct-file-preview') {
        const d = S().getDraft(moduleKey);
        const idx = Number(actEl.getAttribute('data-file-index'));
        if (d && d.files && d.files[idx]) openFilePreview(d.files[idx]);
        return;
      }
      if (a === 'ct-upload-pick' && !e.target.closest('[data-action="ct-file-remove"]') && !e.target.closest('[data-action="ct-file-preview"]')) {
        document.getElementById('ct-f-file')?.click();
        return;
      }
      if (a === 'ct-file-remove') {
        const d = readDraftDom(S().getDraft(moduleKey));
        if (!d) return;
        const idx = Number(actEl.getAttribute('data-file-index'));
        if (!Number.isNaN(idx) && d.files && d.files[idx]) {
          const removed = d.files[idx];
          if (removed.objectUrl) URL.revokeObjectURL(removed.objectUrl);
          d.files.splice(idx, 1);
        }
        d._dirty = true;
        if (d.files && d.files.length && d._errors) delete d._errors.file;
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

    renderPage.onMount = function (container) {
      if (container._ctOnClick) container.removeEventListener('click', container._ctOnClick);
      if (container._ctOnChange) container.removeEventListener('change', container._ctOnChange);
      if (container._ctOnInput) container.removeEventListener('input', container._ctOnInput);
      container._ctOnClick = onClick;
      container._ctOnChange = onChange;
      container._ctOnInput = onInput;
      container.addEventListener('click', onClick);
      container.addEventListener('change', onChange);
      container.addEventListener('input', onInput);
    };

    return renderPage;
  }

  window.renderContractTemplates = createContractModule('template');
  window.renderContractCustomers = createContractModule('customer');
  window.renderContractList = function () {
    DMSRouter.navigate('/contract/customers', true);
    return '<div class="dms-loading">Đang chuyển...</div>';
  };
  window.renderContractList.onMount = function () {};
})();
