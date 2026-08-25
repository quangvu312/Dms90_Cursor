/**
 * Quản Trị Hệ Thống — 9 màn hình
 * UI: DEV /system/*
 */
(function () {
  'use strict';

  function toast(msg, type) { DMS.get('Toast').show(msg, type || 'info'); }
  function S() { return SystemShared; }
  function store() { return S().persist(); }

  function urlOf(path, extra) {
    const p = S().queryParams();
    const next = Object.assign({
      mode: p.get('mode') || '', id: p.get('id') || '', tab: p.get('tab') || '',
      expand: p.get('expand') || ''
    }, extra || {});
    const q = [];
    if (next.mode) q.push('mode=' + encodeURIComponent(next.mode));
    if (next.id) q.push('id=' + encodeURIComponent(next.id));
    if (next.tab) q.push('tab=' + encodeURIComponent(next.tab));
    if (next.expand) q.push('expand=' + encodeURIComponent(next.expand));
    return path + (q.length ? '?' + q.join('&') : '');
  }
  function remount(path, extra) { DMSRouter.navigate(urlOf(path, extra), true); }

  function st(key, init) {
    const k = '__sysSt_' + key;
    if (!window[k]) window[k] = Object.assign({ page: 1, pageSize: 10 }, init || {});
    return window[k];
  }

  function actionBtn(action, enabled, type, title) {
    return DMS.render('ActionIconButton', {
      type: type, title: title, disabled: !enabled, dataAction: enabled ? action : ''
    });
  }
  function switchHtml(id, on, action) {
    return DMS.render('Switch', { checked: on, dataAction: action + '-' + id });
  }
  function pageShell(title, filter, card, overlay, pageKey) {
    return `<div class="display-page system-page" data-sys="${DMS.escape(pageKey)}">
      ${S().breadcrumb(title)}
      <div class="dms-page-header"><h1 class="dms-page-header__title">${DMS.escape(title)}</h1></div>
      ${filter}${card}${overlay || ''}
    </div>`;
  }
  function listBody(rows, columns, stObj, unit) {
    const total = rows.length;
    const pages = Math.max(1, Math.ceil(total / stObj.pageSize) || 1);
    if (stObj.page > pages) stObj.page = pages;
    const start = (stObj.page - 1) * stObj.pageSize;
    const slice = rows.slice(start, start + stObj.pageSize);
    const table = slice.length
      ? DMS.render('Table', { columns, data: slice })
      : `<div class="dms-table-wrapper">${DMS.render('EmptyState', { title: 'Trống', icon: '📭' })}</div>`;
    const pag = slice.length || total
      ? DMS.render('Pagination', { current: stObj.page, pageSize: stObj.pageSize, total, unit })
      : '';
    return table + pag;
  }
  function extraBtns(items) {
    return items.map((it) => DMS.render('Button', it)).join('');
  }
  function locked() {
    const p = S().queryParams();
    return p.get('mode') === 'view';
  }
  function formFooter(saveAction, closeAction, view) {
    if (view) return DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: closeAction });
    return `${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: closeAction })}
      ${DMS.render('Button', { text: 'Lưu', type: 'primary', dataAction: saveAction })}`;
  }
  function confirmClose(kind, path) {
    const d = S().getDraft(kind);
    const go = () => { S().resetDraft(kind); remount(path, { mode: '', id: '' }); };
    if (!d._view && d._dirty) DMS.get('Dialog').confirm('Màn hình đang có dữ liệu, bạn có muốn đóng?', go);
    else go();
  }
  function toggleStatus(list, id, path) {
    const item = list.find((x) => x.id === id);
    if (!item) return;
    DMS.get('Dialog').confirm('Bạn có muốn thay đổi trạng thái?', () => {
      item.status = item.status === 'Hoạt động' ? 'Không hoạt động' : 'Hoạt động';
      item.updatedAt = S().nowLabel(item.updatedAt && item.updatedAt.indexOf('/') >= 0 ? '/' : '-');
      item.updatedBy = 'THAO999';
      toast('Cập nhật thành công', 'success');
      remount(path, { mode: '', id: '' });
    });
  }

  /* ========== ACCOUNT ========== */
  function userState() { return st('user', { q: '', ho: '', npp: '', market: '', status: '' }); }
  function filterUsers(items, s) {
    const q = (s.q || '').trim().toLowerCase();
    const mq = (s.market || '').trim().toLowerCase();
    return items.filter((it) => {
      if (q) {
        const blob = `${it.code} ${it.name} ${it.refCode} ${it.phone} ${it.email}`.toLowerCase();
        if (!blob.includes(q)) return false;
      }
      if (s.ho && it.hoRole !== s.ho) return false;
      if (s.npp && it.nppRole !== s.npp) return false;
      if (mq && !(it.marketAccount || '').toLowerCase().includes(mq)) return false;
      if (s.status && it.status !== s.status) return false;
      return true;
    });
  }
  function userColumns() {
    const cat = store();
    return [
      { key: 'avatar', title: 'Ảnh', width: '56px', render: (_, row) => `<span class="sys-avatar">${DMS.escape((row.name || '?').charAt(0).toUpperCase())}</span>` },
      { key: 'code', title: 'Mã tài khoản', render: (v) => S().copyCell(v, DMS.escape(v)) },
      { key: 'refCode', title: 'Mã tham chiếu', render: (v) => v ? S().copyCell(v, DMS.escape(v)) : '' },
      { key: 'name', title: 'Tên tài khoản', render: (v, row) => `<a class="dms-table__link" data-action="u-view-${DMS.escape(row.id)}">${DMS.escape(v)}</a>` },
      { key: 'regions', title: 'Vùng', render: (v) => S().copyCell((v || []).join(','), DMS.escape(S().labelsJoin(cat.regions, v))) },
      { key: 'areas', title: 'Khu vực', render: (v) => S().labelsJoin(cat.areas, v) },
      { key: 'distributors', title: 'Nhà phân phối chăm sóc', render: (v) => S().labelsJoin(cat.distributors, v) },
      { key: 'phone', title: 'Số điện thoại', render: (v) => v ? S().copyCell(v, DMS.escape(v)) : '' },
      { key: 'email', title: 'Email' },
      { key: 'hoRole', title: 'Nhóm quyền HO' },
      { key: 'nppRole', title: 'Nhóm quyền NPP' },
      { key: 'marketAccount', title: 'Tài khoản thị trường' },
      { key: 'lastLogin', title: 'Đăng nhập gần nhất' },
      { key: 'createdAt', title: 'Ngày tạo' },
      { key: 'createdBy', title: 'Người tạo', render: (v) => v ? S().copyCell(v, DMS.escape(v)) : '' },
      { key: 'updatedAt', title: 'Ngày cập nhật' },
      { key: 'updatedBy', title: 'Người cập nhật', render: (v) => v ? S().copyCell(v, DMS.escape(v)) : '' },
      { key: 'status', title: 'Trạng thái', render: (v, row) => switchHtml(row.id, v === 'Hoạt động', 'u-sw') },
      {
        key: 'actions', title: 'Tùy chỉnh', fixed: 'right', width: '110px',
        render: (_, row) => `<div class="dms-action-buttons">
          ${actionBtn('u-copy-' + row.id, true, 'duplicate', 'Sao chép')}
          ${actionBtn('u-edit-' + row.id, true, 'edit', 'Chỉnh sửa')}
          ${actionBtn('u-unlock-' + row.id, true, 'unlock', 'Cấp lại mật khẩu')}
        </div>`
      }
    ];
  }
  function readUserDraft(d) {
    if (d._view) return d;
    d.code = (document.getElementById('u-f-code')?.value || d.code).toUpperCase().replace(/\s/g, '');
    d.name = document.getElementById('u-f-name')?.value || d.name;
    d.password = document.getElementById('u-f-pass')?.value || d.password;
    d.refCode = document.getElementById('u-f-ref')?.value || d.refCode;
    d.email = document.getElementById('u-f-email')?.value || d.email;
    d.phone = document.getElementById('u-f-phone')?.value || d.phone;
    d.gender = document.getElementById('u-f-gender')?.value || d.gender;
    d.address = document.getElementById('u-f-addr')?.value || d.address;
    const pt = document.querySelector('input[name="u-perm"]:checked');
    if (pt) d.permType = pt.value;
    d.hoRole = document.getElementById('u-f-horole')?.value || d.hoRole;
    d.nppRole = document.getElementById('u-f-npprole')?.value || d.nppRole;
    d.regions = DMS.get('MultiSelect').getValues('u-f-regions') || d.regions;
    d.distributors = DMS.get('MultiSelect').getValues('u-f-npp') || d.distributors;
    d.marketRole = document.getElementById('u-f-mrole')?.value || d.marketRole;
    d.marketAccount = document.getElementById('u-f-macc')?.value || d.marketAccount;
    return d;
  }
  function validateUser(d, mode) {
    const err = {};
    if (!(d.code || '').trim()) err.code = 'Trường Mã tài khoản là bắt buộc!';
    if (!(d.name || '').trim()) err.name = 'Trường Tên tài khoản là bắt buộc!';
    if (mode === 'create' && !(d.password || '').trim()) err.password = 'Trường Mật khẩu là bắt buộc!';
    if (!d.permType) err.permType = 'Trường Quyền là bắt buộc!';
    if (d.permType === 'HO' && !d.hoRole) err.hoRole = 'Trường Nhóm quyền là bắt buộc!';
    if (d.permType === 'NPP' && !d.nppRole) err.nppRole = 'Trường Nhóm quyền là bắt buộc!';
    if (!(d.regions || []).length) err.regions = 'Trường Vùng là bắt buộc!';
    if (d.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) err.email = 'Email không đúng định dạng.';
    d._errors = err;
    return !Object.keys(err).length;
  }
  function userForm(d, mode) {
    const cat = store();
    const view = mode === 'view';
    const isCreate = mode === 'create' || mode === 'copy';
    const title = view ? 'Chi tiết tài khoản' : (mode === 'edit' ? 'Chỉnh sửa tài khoản' : 'Thêm mới tài khoản');
    const roleOpts = d.permType === 'NPP' ? cat.nppRoles : cat.hoRoles;
    const body = `<div class="display-form-grid">
      ${DMS.render('Input', { id: 'u-f-code', label: 'Mã tài khoản', requiredMark: true, value: d.code, disabled: view || mode === 'edit', placeholder: 'Nhập mã tài khoản' })}
      ${S().fieldErr(d._errors || {}, 'code')}
      ${DMS.render('Input', { id: 'u-f-name', label: 'Tên tài khoản', requiredMark: true, value: d.name, disabled: view, placeholder: 'Nhập tên tài khoản' })}
      ${S().fieldErr(d._errors || {}, 'name')}
      ${isCreate ? DMS.render('Input', { id: 'u-f-pass', type: 'password', label: 'Mật khẩu', requiredMark: true, value: d.password || '', disabled: view, placeholder: 'Nhập mật khẩu' }) : ''}
      ${isCreate ? S().fieldErr(d._errors || {}, 'password') : ''}
      ${DMS.render('Input', { id: 'u-f-ref', label: 'Mã tham chiếu', value: d.refCode, disabled: view })}
      ${DMS.render('Input', { id: 'u-f-email', label: 'Email', value: d.email, disabled: view, placeholder: 'Nhập email' })}
      ${S().fieldErr(d._errors || {}, 'email')}
      ${DMS.render('Input', { id: 'u-f-phone', label: 'Số điện thoại liên hệ', value: d.phone, disabled: view })}
      ${DMS.render('Select', { id: 'u-f-gender', label: 'Giới tính', value: d.gender, options: cat.genders, placeholder: 'Chọn giới tính', disabled: view })}
      ${DMS.render('Input', { id: 'u-f-addr', label: 'Địa chỉ', value: d.address, disabled: view })}
      <div class="dms-form-item dms-form-item--full">
        <label class="dms-form-item__label is-required">Quyền HO / Quyền Nhà Phân Phối</label>
        <div class="sys-inline">
          ${DMS.render('Radio', { name: 'u-perm', value: 'HO', checked: d.permType !== 'NPP', disabled: view, label: 'Quyền HO' })}
          ${DMS.render('Radio', { name: 'u-perm', value: 'NPP', checked: d.permType === 'NPP', disabled: view, label: 'Quyền Nhà Phân Phối' })}
        </div>
        ${S().fieldErr(d._errors || {}, 'permType')}
      </div>
      ${d.permType === 'NPP'
        ? DMS.render('Select', { id: 'u-f-npprole', label: 'Nhóm quyền', requiredMark: true, value: d.nppRole, options: roleOpts, placeholder: 'Chọn nhóm quyền', disabled: view })
        : DMS.render('Select', { id: 'u-f-horole', label: 'Nhóm quyền', requiredMark: true, value: d.hoRole, options: roleOpts, placeholder: 'Chọn nhóm quyền', disabled: view })}
      ${S().fieldErr(d._errors || {}, d.permType === 'NPP' ? 'nppRole' : 'hoRole')}
      ${DMS.render('MultiSelect', { id: 'u-f-regions', label: 'Vùng', requiredMark: true, values: d.regions || [], options: cat.regions, placeholder: 'Chọn vùng', disabled: view })}
      ${S().fieldErr(d._errors || {}, 'regions')}
      ${DMS.render('MultiSelect', { id: 'u-f-npp', label: 'Nhà phân phối chăm sóc', values: d.distributors || [], options: cat.distributors, placeholder: 'Chọn NPP', disabled: view })}
      ${DMS.render('Select', { id: 'u-f-mrole', label: 'Vai trò tài khoản thị trường', value: d.marketRole, options: cat.marketRoles, placeholder: 'Chọn vai trò', disabled: view })}
      ${DMS.render('Select', { id: 'u-f-macc', label: 'Tài khoản thị trường', value: d.marketAccount, options: cat.marketAccounts, placeholder: 'Chọn tài khoản thị trường', disabled: view })}
    </div>`;
    return DMS.render('Modal', {
      id: 'sys-user-modal', title, size: 'xl', body,
      footer: formFooter('u-save', 'u-close', view)
    });
  }
  async function renderSystemAccount() {
    await S().loadStore();
    const s = userState();
    const p = S().queryParams();
    const mode = p.get('mode') || '';
    const id = p.get('id') || '';
    if ((mode === 'edit' || mode === 'view' || mode === 'copy') && id) {
      const item = store().users.find((x) => x.id === id);
      if (item && S().getDraft('user')._src !== mode + id) {
        S().loadDraft('user', item, mode === 'view');
        if (mode === 'copy') {
          const d = S().getDraft('user');
          d.id = ''; d.code = ''; d._src = 'copy' + id; d._view = false;
        }
      }
    }
    if (mode === 'create' && S().getDraft('user')._src !== 'create') {
      S().resetDraft('user'); S().getDraft('user')._src = 'create';
    }
    const cat = store();
    const filter = DMS.render('FilterPanel', {
      title: 'Tìm kiếm theo',
      fields: [
        { type: 'search', id: 'u-q', label: 'Nhập Mã NV | Tên NV | Mã tham chiếu | SĐT | Email', placeholder: 'Nhập Mã NV | Tên NV | Mã tham chiếu | SĐT | Email', value: s.q },
        { type: 'select', id: 'u-ho', label: 'Nhóm quyền HO', placeholder: 'Nhóm quyền HO', value: s.ho, options: cat.hoRoles },
        { type: 'select', id: 'u-npp', label: 'Nhóm quyền NPP', placeholder: 'Nhóm quyền NPP', value: s.npp, options: cat.nppRoles },
        { type: 'search', id: 'u-market', label: 'Tài khoản thị trường | tên tài khoản thị trường | sđt tài khoản thị trường | email tài khoản thị trường | mã tham chiếu tài khoản thị trường', placeholder: 'Tài khoản thị trường | tên tài khoản thị trường | sđt tài khoản thị trường | email tài khoản thị trường | mã tham chiếu tài khoản thị trường', value: s.market },
        { type: 'select', id: 'u-status', label: 'Trạng thái', placeholder: 'Trạng thái', value: s.status, options: cat.statuses }
      ]
    });
    const card = DMS.render('Card', {
      title: 'Danh sách nhân viên',
      extra: extraBtns([
        { text: 'Import Excel', type: 'default', dataAction: 'u-import' },
        { text: 'Export Excel', type: 'default', dataAction: 'u-export' },
        { text: '+ Tạo mới', type: 'primary', dataAction: 'u-create' }
      ]),
      body: `<div id="sys-user-body">${listBody(filterUsers(cat.users, s), userColumns(), s, 'nhân viên')}</div>`
    });
    let overlay = '';
    if (mode === 'create' || mode === 'edit' || mode === 'view' || mode === 'copy') overlay = userForm(S().getDraft('user'), mode);
    return pageShell('Tài Khoản Người Dùng', filter, card, overlay, 'account');
  }

  /* ========== CLOSING / UNLOCK ========== */
  function periodState(key) { return st(key, { npp: '', month: '' }); }
  function periodColumns() {
    return [
      { key: 'code', title: 'Mã nhà phân phối' },
      { key: 'name', title: 'Tên nhà phân phối' },
      { key: 'closedAt', title: 'Thời gian khoá sổ' },
      { key: 'closedBy', title: 'Người khoá sổ' },
      { key: 'month', title: 'Tháng khoá sổ' }
    ];
  }
  function filterPeriods(items, s) {
    return items.filter((it) => {
      if (s.npp && it.code !== s.npp) return false;
      if (s.month) {
        const want = String(s.month).replace('-', '/').slice(0, 7);
        const mm = (it.month || '').replace('/', '-');
        if (it.month !== s.month && mm.indexOf(want) === -1 && it.month.indexOf(s.month) === -1) return false;
      }
      return true;
    });
  }
  async function renderSystemClosing() {
    await S().loadStore();
    const s = periodState('close');
    const cat = store();
    const filter = DMS.render('FilterPanel', {
      title: 'Tìm kiếm theo',
      fields: [
        { type: 'select', id: 'cl-npp', label: 'Nhà phân phối', placeholder: 'Nhà phân phối', value: s.npp, options: cat.distributors },
        { type: 'date', id: 'cl-month', label: 'Tháng', placeholder: 'Chọn thời gian', value: s.month }
      ]
    });
    const extra = DMS.render('Button', { text: 'Khoá sổ', type: 'primary', dataAction: 'cl-lock' });
    const card = DMS.render('Card', {
      title: '',
      extra,
      body: listBody(filterPeriods(cat.periods, s), periodColumns(), s, 'dòng')
    });
    return pageShell('Chốt Sổ Kỳ', filter, card, '', 'closing');
  }
  async function renderSystemUnlock() {
    await S().loadStore();
    const s = periodState('open');
    const cat = store();
    const filter = DMS.render('FilterPanel', {
      title: 'Tìm kiếm theo',
      fields: [
        { type: 'select', id: 'op-npp', label: 'Nhà phân phối', placeholder: 'Nhà phân phối', value: s.npp, options: cat.distributors }
      ]
    });
    const extra = DMS.render('Button', { text: 'Mở khóa sổ', type: 'primary', dataAction: 'op-unlock' });
    const card = DMS.render('Card', {
      title: '',
      extra,
      body: listBody(filterPeriods(cat.periods, s), periodColumns(), s, 'dòng')
    });
    return pageShell('Mở Chốt Sổ', filter, card, '', 'unlock');
  }

  /* ========== MASTER ========== */
  function masterState() { return st('master', { q: '', type: '' }); }
  function filterMaster(items, s) {
    const q = (s.q || '').trim().toLowerCase();
    return items.filter((it) => {
      if (q && !`${it.code} ${it.refCode} ${it.name}`.toLowerCase().includes(q)) return false;
      if (s.type && it.type !== s.type) return false;
      return true;
    });
  }
  function masterColumns() {
    return [
      { key: 'code', title: 'Mã', render: (v) => S().copyCell(v, DMS.escape(v)) },
      { key: 'refCode', title: 'Mã tham chiếu' },
      { key: 'refSystem', title: 'Hệ thống tham chiếu' },
      { key: 'name', title: 'Tên', render: (v, row) => `<a class="dms-table__link" data-action="m-view-${DMS.escape(row.id)}">${DMS.escape(v)}</a>` },
      { key: 'type', title: 'Loại' },
      { key: 'createdAt', title: 'Ngày tạo' },
      { key: 'createdBy', title: 'Người tạo' },
      { key: 'updatedAt', title: 'Ngày cập nhật' },
      { key: 'updatedBy', title: 'Người cập nhật' },
      {
        key: 'actions', title: 'Tùy chỉnh', fixed: 'right', width: '70px',
        render: (_, row) => `<div class="dms-action-buttons">${actionBtn('m-edit-' + row.id, true, 'edit', 'Chỉnh sửa')}</div>`
      }
    ];
  }
  function masterForm(d, mode) {
    const view = mode === 'view';
    const title = view ? 'Chi tiết dữ liệu' : (mode === 'edit' ? 'Chỉnh sửa dữ liệu' : 'Thêm mới dữ liệu');
    const body = `<div class="display-form-grid">
      ${DMS.render('Input', { id: 'm-f-code', label: 'Mã', requiredMark: true, value: d.code, disabled: view || mode === 'edit', placeholder: 'Nhập mã dữ liệu chung' })}
      ${S().fieldErr(d._errors || {}, 'code')}
      ${DMS.render('Input', { id: 'm-f-name', label: 'Tên', requiredMark: true, value: d.name, disabled: view, placeholder: 'Nhập vào tên' })}
      ${S().fieldErr(d._errors || {}, 'name')}
      ${DMS.render('Select', { id: 'm-f-type', label: 'Loại', requiredMark: true, value: d.type, options: store().masterTypes, placeholder: 'Chọn loại', disabled: view })}
      ${S().fieldErr(d._errors || {}, 'type')}
    </div>`;
    return DMS.render('Modal', { id: 'sys-master-modal', title, size: 'lg', body, footer: formFooter('m-save', 'm-close', view) });
  }
  async function renderSystemMaster() {
    await S().loadStore();
    const s = masterState();
    const p = S().queryParams();
    const mode = p.get('mode') || '';
    const id = p.get('id') || '';
    if ((mode === 'edit' || mode === 'view') && id) {
      const item = store().masterData.find((x) => x.id === id);
      if (item && S().getDraft('master')._src !== mode + id) S().loadDraft('master', item, mode === 'view');
    }
    if (mode === 'create' && S().getDraft('master')._src !== 'create') {
      S().resetDraft('master'); S().getDraft('master')._src = 'create';
    }
    const cat = store();
    const filter = DMS.render('FilterPanel', {
      title: 'Tìm kiếm theo',
      fields: [
        { type: 'search', id: 'm-q', label: 'Dữ liệu', placeholder: 'Dữ liệu', value: s.q },
        { type: 'select', id: 'm-type', label: 'Loại', placeholder: 'Loại', value: s.type, options: cat.masterTypes }
      ]
    });
    const card = DMS.render('Card', {
      title: 'Danh sách dữ liệu chung',
      extra: DMS.render('Button', { text: '+ Tạo mới', type: 'primary', dataAction: 'm-create' }),
      body: listBody(filterMaster(cat.masterData, s), masterColumns(), s, 'dữ liệu chung')
    });
    let overlay = '';
    if (mode) overlay = masterForm(S().getDraft('master'), mode);
    return pageShell('Dữ Liệu Chung', filter, card, overlay, 'master');
  }

  /* ========== ATTENDANCE CONFIG ========== */
  function attState() { return st('att', { year: '', status: '' }); }
  function attColumns() {
    return [
      { key: 'hours', title: 'Số giờ làm việc' },
      { key: 'workTime', title: 'Thời gian làm việc' },
      { key: 'days', title: 'Ngày làm', render: (v) => (v || []).join('') },
      { key: 'year', title: 'Năm', render: (v, row) => `<a class="dms-table__link" data-action="a-view-${DMS.escape(row.id)}">${DMS.escape(v)}</a>` },
      { key: 'createdAt', title: 'Ngày tạo' },
      { key: 'createdBy', title: 'Người tạo' },
      { key: 'updatedAt', title: 'Ngày cập nhật' },
      { key: 'updatedBy', title: 'Người cập nhật' },
      { key: 'status', title: 'Trạng thái', render: (v, row) => switchHtml(row.id, v === 'Hoạt động', 'a-sw') },
      {
        key: 'actions', title: 'Tùy chỉnh', fixed: 'right', width: '70px',
        render: (_, row) => `<div class="dms-action-buttons">${actionBtn('a-edit-' + row.id, true, 'edit', 'Chỉnh sửa')}</div>`
      }
    ];
  }
  function attForm(d, mode) {
    const view = mode === 'view';
    const tab = Number(S().queryParams().get('tab') || 0);
    const title = view ? 'Chi tiết cấu hình' : (mode === 'edit' ? 'Chỉnh sửa cấu hình' : 'Thêm mới cấu hình');
    const months = [];
    for (let i = 1; i <= 12; i++) {
      const workDays = (d.days || []).length ? Math.round(4.3 * (d.days || []).length) : '';
      months.push(`<tr><td>Tháng ${i}</td><td>${workDays}</td><td>${(d.specials || []).filter((x) => (x.date || '').indexOf('-' + String(i).padStart(2, '0') + '-') >= 0 || (x.date || '').startsWith(String(i).padStart(2, '0'))).map((x) => x.date + ' - ' + x.name).join('; ') || ''}</td></tr>`);
    }
    const specialRows = (d.specials || []).map((sp, i) => `<div class="sys-inline">
      ${DMS.render('Input', { id: 'a-sp-d-' + i, placeholder: 'Chọn thời điểm', value: sp.date, disabled: view })}
      ${DMS.render('Input', { id: 'a-sp-n-' + i, placeholder: 'Tên ngày', value: sp.name, disabled: view })}
      ${view ? '' : DMS.render('Button', { text: 'Xóa', type: 'default', size: 'sm', dataAction: 'a-sp-del-' + i })}
    </div>`).join('');
    const basic = `<div class="display-form-grid">
      ${DMS.render('Select', { id: 'a-f-year', label: 'Năm', requiredMark: true, value: d.year, options: store().years, placeholder: 'Chọn năm', disabled: view || mode === 'edit' })}
      ${S().fieldErr(d._errors || {}, 'year')}
      ${DMS.render('MultiSelect', { id: 'a-f-days', label: 'Ngày trong tuần', requiredMark: true, values: d.days || [], options: store().weekdays, disabled: view })}
      ${S().fieldErr(d._errors || {}, 'days')}
      ${DMS.render('Input', { id: 'a-f-work', label: 'Thời gian làm việc', requiredMark: true, value: d.workTime, disabled: view, placeholder: '08:00 - 17:00' })}
      ${S().fieldErr(d._errors || {}, 'workTime')}
      ${DMS.render('Input', { id: 'a-f-hours', label: 'Số giờ làm việc', value: d.hours, disabled: true })}
      ${DMS.render('Input', { id: 'a-f-lunch', label: 'Thời gian nghỉ trưa', requiredMark: true, value: d.lunch, disabled: view, placeholder: '12:00 - 13:00' })}
      ${S().fieldErr(d._errors || {}, 'lunch')}
      <div class="dms-form-item dms-form-item--full"><label class="dms-form-item__label">Ngày đặc biệt</label>${specialRows || '<div class="dms-text-secondary">Chưa có ngày đặc biệt</div>'}
        ${view ? '' : DMS.render('Button', { text: 'Thêm ngày đặc biệt', type: 'default', dataAction: 'a-sp-add' })}</div>
    </div>`;
    const cfg = `<table class="dms-table"><thead><tr><th>Tháng</th><th>Ngày trong tháng</th><th>Ngày đặc biệt</th></tr></thead><tbody>${months.join('')}</tbody></table>`;
    const body = DMS.render('Tabs', {
      active: tab,
      tabs: [
        { label: 'Thông tin cơ bản', content: basic },
        { label: 'Cấu hình', content: cfg }
      ]
    });
    return DMS.render('Modal', { id: 'sys-att-modal', title, size: 'xl', body, footer: formFooter('a-save', 'a-close', view) });
  }
  async function renderSystemAtt() {
    await S().loadStore();
    const s = attState();
    const p = S().queryParams();
    const mode = p.get('mode') || '';
    const id = p.get('id') || '';
    if ((mode === 'edit' || mode === 'view') && id) {
      const item = store().attendanceConfigs.find((x) => x.id === id);
      if (item && S().getDraft('att')._src !== mode + id) S().loadDraft('att', item, mode === 'view');
    }
    if (mode === 'create' && S().getDraft('att')._src !== 'create') {
      S().resetDraft('att'); S().getDraft('att')._src = 'create';
    }
    const cat = store();
    const rows = cat.attendanceConfigs.filter((it) => {
      if (s.year && it.year !== s.year) return false;
      if (s.status && it.status !== s.status) return false;
      return true;
    });
    const filter = DMS.render('FilterPanel', {
      title: 'Tìm kiếm theo',
      fields: [
        { type: 'select', id: 'a-year', label: 'Năm', placeholder: 'Chọn năm', value: s.year, options: cat.years },
        { type: 'select', id: 'a-status', label: 'Trạng thái', placeholder: 'Trạng thái', value: s.status, options: cat.statuses }
      ]
    });
    const card = DMS.render('Card', {
      title: 'Danh sách cấu hình',
      extra: DMS.render('Button', { text: '+ Tạo mới', type: 'primary', dataAction: 'a-create' }),
      body: listBody(rows, attColumns(), s, 'cấu hình')
    });
    let overlay = '';
    if (mode) overlay = attForm(S().getDraft('att'), mode);
    return pageShell('Cấu Hình Chấm Công', filter, card, overlay, 'att');
  }

  /* ========== LOCATION ========== */
  function locState() { return st('loc', { q: '', emp: '', applyTo: '', status: '' }); }
  function locColumns() {
    return [
      { key: 'code', title: 'Mã cài đặt', render: (v, row) => S().copyCell(v, `<a class="dms-table__link" data-action="l-view-${DMS.escape(row.id)}">${DMS.escape(v)}</a>`) },
      { key: 'startAddr', title: 'Vị trí chấm công đầu ngày' },
      { key: 'startRadius', title: 'Khoảng cách chấm công đầu ngày (m)' },
      { key: 'endAddr', title: 'Vị trí chấm công cuối ngày' },
      { key: 'endRadius', title: 'Khoảng cách chấm công cuối ngày (m)' },
      { key: 'applyTo', title: 'Đối tượng áp dụng' },
      { key: 'status', title: 'Trạng thái', render: (v, row) => switchHtml(row.id, v === 'Hoạt động', 'l-sw') },
      { key: 'createdAt', title: 'Ngày tạo' },
      { key: 'createdBy', title: 'Người tạo' },
      { key: 'updatedAt', title: 'Ngày cập nhật' },
      { key: 'updatedBy', title: 'Người cập nhật' },
      {
        key: 'copy', title: '', width: '90px',
        render: (_, row) => DMS.render('Button', { text: 'Sao chép', type: 'default', size: 'sm', dataAction: 'l-copy-' + row.id })
      }
    ];
  }
  function locForm(d, mode) {
    const view = mode === 'view';
    const title = view ? 'Chi tiết cài đặt vị trí chấm công' : (mode === 'edit' ? 'Chỉnh sửa cài đặt vị trí chấm công' : 'Thêm mới cài đặt vị trí chấm công');
    const empTable = (d.employees || []).map((code) => {
      const e = (store().employees || []).find((x) => x.code === code) || { code, name: code };
      return `<tr><td>${DMS.escape(e.code)}</td><td>${DMS.escape(e.name)}</td><td>${view ? '' : `<button type="button" data-action="l-emp-del-${DMS.escape(code)}">Xóa</button>`}</td></tr>`;
    }).join('');
    const body = `<div class="display-form-grid">
      ${DMS.render('Input', { id: 'l-f-code', label: 'Mã cài đặt', requiredMark: true, value: d.code, disabled: view || mode === 'edit', placeholder: 'Nhập mã cài đặt' })}
      ${S().fieldErr(d._errors || {}, 'code')}
      <div class="dms-form-item dms-form-item--full"><strong>Vị trí chấm công đầu ngày</strong></div>
      ${DMS.render('Input', { id: 'l-f-saddr', label: 'Địa chỉ', requiredMark: true, value: d.startAddr, disabled: view })}
      ${S().fieldErr(d._errors || {}, 'startAddr')}
      ${DMS.render('Input', { id: 'l-f-sr', label: 'Khoảng cách chấm công đầu ngày (m)', value: d.startRadius, disabled: view })}
      <div class="dms-form-item">
        <label class="dms-form-item__label is-required">Tọa độ vị trí</label>
        <div class="sys-inline">
          ${DMS.render('Input', { id: 'l-f-lat', value: d.lat, disabled: true, placeholder: 'Lat' })}
          ${DMS.render('Input', { id: 'l-f-lng', value: d.lng, disabled: true, placeholder: 'Lng' })}
          ${view ? '' : DMS.render('Button', { text: 'Tọa độ', type: 'default', dataAction: 'l-geo' })}
        </div>
      </div>
      <div class="dms-form-item dms-form-item--full">
        <div class="sys-map">${d.lat ? `<div class="sys-map__pin"></div><div class="sys-map__radius"></div><div class="sys-map__label">${DMS.escape(d.lat)}, ${DMS.escape(d.lng)}</div>` : '<span>Mock map — chưa có tọa độ</span>'}</div>
      </div>
      <div class="dms-form-item dms-form-item--full">
        ${DMS.render('Checkbox', { id: 'l-f-endoff', checked: !!d.endDisabled, disabled: view, label: 'Không cài đặt (chấm công cuối ngày)' })}
      </div>
      ${d.endDisabled ? '' : `
        <div class="dms-form-item dms-form-item--full"><strong>Vị trí chấm công cuối ngày</strong></div>
        ${DMS.render('Input', { id: 'l-f-eaddr', label: 'Địa chỉ', requiredMark: true, value: d.endAddr, disabled: view })}
        ${DMS.render('Input', { id: 'l-f-er', label: 'Khoảng cách chấm công cuối ngày (m)', value: d.endRadius, disabled: view })}
      `}
      ${DMS.render('Select', { id: 'l-f-apply', label: 'Đối tượng áp dụng', requiredMark: true, value: d.applyTo, options: store().applyObjects, placeholder: 'Chọn Đối tượng áp dụng để cài đặt.', disabled: view })}
      ${S().fieldErr(d._errors || {}, 'applyTo')}
      ${d.applyTo === 'Vùng' ? DMS.render('MultiSelect', { id: 'l-f-regions', label: 'Vùng', requiredMark: true, values: d.regions || [], options: store().regions, disabled: view }) : ''}
      ${d.applyTo === 'Nhân viên' ? `<div class="dms-form-item dms-form-item--full"><label class="dms-form-item__label">Nhân viên</label>
        <table class="dms-table"><thead><tr><th>Mã nhân viên</th><th>Tên nhân viên</th><th></th></tr></thead><tbody>${empTable || '<tr><td colspan="3">Chưa chọn nhân viên</td></tr>'}</tbody></table>
        ${view ? '' : DMS.render('Button', { text: 'Thêm', type: 'default', dataAction: 'l-emp-add' })}</div>` : ''}
    </div>`;
    return DMS.render('Modal', { id: 'sys-loc-modal', title, size: 'xl', body, footer: formFooter('l-save', 'l-close', view) });
  }
  async function renderSystemLoc() {
    await S().loadStore();
    const s = locState();
    const p = S().queryParams();
    const mode = p.get('mode') || '';
    const id = p.get('id') || '';
    if ((mode === 'edit' || mode === 'view' || mode === 'copy') && id) {
      const item = store().locations.find((x) => x.id === id);
      if (item && S().getDraft('loc')._src !== mode + id) {
        S().loadDraft('loc', item, mode === 'view');
        if (mode === 'copy') {
          const d = S().getDraft('loc');
          d.id = ''; d.code = ''; d._src = 'copy' + id; d._view = false;
        }
      }
    }
    if (mode === 'create' && S().getDraft('loc')._src !== 'create') {
      S().resetDraft('loc'); S().getDraft('loc')._src = 'create';
    }
    const cat = store();
    const rows = cat.locations.filter((it) => {
      const q = (s.q || '').trim().toLowerCase();
      if (q && !(it.code || '').toLowerCase().includes(q)) return false;
      if (s.emp && !(it.employees || []).includes(s.emp)) return false;
      if (s.applyTo && it.applyTo !== s.applyTo) return false;
      if (s.status && it.status !== s.status) return false;
      return true;
    });
    const filter = DMS.render('FilterPanel', {
      title: 'Tìm kiếm theo',
      fields: [
        { type: 'search', id: 'l-q', label: 'theo mã cài đặt', placeholder: 'theo mã cài đặt', value: s.q },
        { type: 'select', id: 'l-emp', label: 'Nhân viên', placeholder: 'Nhân viên', value: s.emp, options: (cat.employees || []).map((e) => ({ value: e.code, label: e.code + ' - ' + e.name })) },
        { type: 'select', id: 'l-apply', label: 'Đối tượng áp dụng', placeholder: 'Đối tượng áp dụng', value: s.applyTo, options: cat.applyObjects },
        { type: 'select', id: 'l-status', label: 'Trạng thái', placeholder: 'Trạng thái', value: s.status, options: cat.statuses }
      ]
    });
    const card = DMS.render('Card', {
      title: 'Danh sách thiết Lập Vị Trí Chấm Công',
      extra: extraBtns([
        { text: 'Import Excel', type: 'default', dataAction: 'l-import' },
        { text: 'Export Excel', type: 'default', dataAction: 'l-export' },
        { text: '+ Tạo mới', type: 'primary', dataAction: 'l-create' }
      ]),
      body: listBody(rows, locColumns(), s, 'dòng')
    });
    let overlay = '';
    if (mode) overlay = locForm(S().getDraft('loc'), mode);
    return pageShell('Thiết Lập Vị Trí Chấm Công', filter, card, overlay, 'loc');
  }

  /* ========== GENERAL CONFIG ========== */
  function cfgState() { return st('cfg', { q: '', target: '', group: '' }); }
  function cfgColumns() {
    return [
      { key: 'name', title: 'Tên cấu hình', render: (v, row) => `<a class="dms-table__link" data-action="c-view-${DMS.escape(row.id)}">${DMS.escape(v)}</a>` },
      { key: 'key', title: 'Từ khóa' },
      { key: 'type', title: 'Loại' },
      { key: 'desc', title: 'Mô tả' },
      {
        key: 'value', title: 'Giá trị hiện tại',
        render: (v, row) => (row.type === 'TABLE' || row.type === 'OBJECT')
          ? `<a class="dms-table__link" data-action="c-view-${DMS.escape(row.id)}">Chi tiết</a>`
          : DMS.escape(v)
      },
      { key: 'target', title: 'Đối tượng áp dụng' },
      { key: 'group', title: 'Tên nhóm' },
      { key: 'createdAt', title: 'Ngày tạo' },
      { key: 'createdBy', title: 'Người tạo' },
      { key: 'updatedAt', title: 'Ngày cập nhật' },
      { key: 'updatedBy', title: 'Người cập nhật' },
      {
        key: 'actions', title: 'Tùy chỉnh', fixed: 'right', width: '90px',
        render: (_, row) => `<div class="dms-action-buttons">
          ${actionBtn('c-edit-' + row.id, true, 'edit', 'Chỉnh sửa')}
          ${actionBtn('c-copy-' + row.id, true, 'duplicate', 'Sao chép')}
        </div>`
      }
    ];
  }
  function cfgForm(d, mode) {
    const view = mode === 'view';
    const title = view ? 'Chi tiết cấu hình' : (mode === 'edit' ? 'Chỉnh sửa cấu hình' : 'Thêm mới cấu hình');
    let valueField = '';
    if (d.type === 'BOOLEAN') {
      valueField = `<div class="dms-form-item"><label class="dms-form-item__label is-required">Giá trị</label>${DMS.render('Switch', { id: 'c-f-bool', checked: !!d.boolValue, disabled: view })}</div>`;
    } else if (d.type === 'TABLE' || d.type === 'OBJECT') {
      valueField = `<div class="dms-form-item dms-form-item--full"><label class="dms-form-item__label">Giá trị</label>
        ${DMS.render('Textarea', { id: 'c-f-text', value: d.textValue || '', disabled: view, rows: 4, placeholder: 'Chi tiết (JSON mock)' })}</div>`;
    } else {
      valueField = DMS.render('Input', { id: 'c-f-text', label: 'Giá trị', requiredMark: true, value: d.textValue || d.value, disabled: view });
    }
    const body = `<div class="display-form-grid">
      ${DMS.render('Input', { id: 'c-f-name', label: 'Tên', requiredMark: true, value: d.name, disabled: view })}
      ${S().fieldErr(d._errors || {}, 'name')}
      ${DMS.render('Select', { id: 'c-f-target', label: 'Đối tượng áp dụng', requiredMark: true, value: d.target, options: store().configTargets, placeholder: 'Đối tượng áp dụng', disabled: view || mode === 'edit' })}
      ${S().fieldErr(d._errors || {}, 'target')}
      ${DMS.render('Input', { id: 'c-f-key', label: 'Từ khóa', requiredMark: true, value: d.key, disabled: view || mode === 'edit', placeholder: 'FROM_KEYWORD' })}
      ${S().fieldErr(d._errors || {}, 'key')}
      ${DMS.render('Select', { id: 'c-f-type', label: 'Loại', requiredMark: true, value: d.type, options: store().configTypes, disabled: view || mode === 'edit' })}
      ${DMS.render('Select', { id: 'c-f-group', label: 'Tên nhóm', requiredMark: true, value: d.group, options: store().configGroups, disabled: view })}
      ${S().fieldErr(d._errors || {}, 'group')}
      ${DMS.render('Input', { id: 'c-f-desc', label: 'Mô tả', value: d.desc, disabled: view })}
      ${valueField}
      <div class="dms-form-item"><label class="dms-form-item__label">Cho phép chỉnh sửa</label>${DMS.render('Switch', { id: 'c-f-edit', checked: d.editable !== false, disabled: view })}</div>
    </div>`;
    return DMS.render('Modal', { id: 'sys-cfg-modal', title, size: 'lg', body, footer: formFooter('c-save', 'c-close', view) });
  }
  async function renderSystemSetting() {
    await S().loadStore();
    const s = cfgState();
    const p = S().queryParams();
    const mode = p.get('mode') || '';
    const id = p.get('id') || '';
    if ((mode === 'edit' || mode === 'view' || mode === 'copy') && id) {
      const item = store().generalConfigs.find((x) => x.id === id);
      if (item && S().getDraft('cfg')._src !== mode + id) {
        S().loadDraft('cfg', item, mode === 'view');
        if (mode === 'copy') {
          const d = S().getDraft('cfg');
          d.id = ''; d.key = ''; d._src = 'copy' + id; d._view = false;
        }
      }
    }
    if (mode === 'create' && S().getDraft('cfg')._src !== 'create') {
      S().resetDraft('cfg'); S().getDraft('cfg')._src = 'create';
    }
    const cat = store();
    const q = (s.q || '').trim().toLowerCase();
    const rows = cat.generalConfigs.filter((it) => {
      if (q && !`${it.name} ${it.key}`.toLowerCase().includes(q)) return false;
      if (s.target && it.target !== s.target) return false;
      if (s.group && it.group !== s.group) return false;
      return true;
    });
    const filter = DMS.render('FilterPanel', {
      title: 'Tìm kiếm theo',
      fields: [
        { type: 'search', id: 'c-q', label: 'Cấu hình', placeholder: 'Cấu hình', value: s.q },
        { type: 'select', id: 'c-target', label: 'Đối tượng áp dụng', placeholder: 'Đối tượng áp dụng', value: s.target, options: cat.configTargets },
        { type: 'select', id: 'c-group', label: 'Tên nhóm', placeholder: 'Tên nhóm', value: s.group, options: cat.configGroups }
      ]
    });
    const card = DMS.render('Card', {
      title: 'Danh sách cấu hình chung',
      extra: DMS.render('Button', { text: '+ Tạo mới', type: 'primary', dataAction: 'c-create' }),
      body: listBody(rows, cfgColumns(), s, 'cấu hình chung')
    });
    let overlay = '';
    if (mode) overlay = cfgForm(S().getDraft('cfg'), mode);
    return pageShell('Cấu Hình Chung', filter, card, overlay, 'cfg');
  }

  /* ========== ROLE ========== */
  function roleState() { return st('role', { q: '', status: 'Hoạt động' }); }
  function roleColumns() {
    const expand = S().queryParams().get('expand') || '';
    return [
      {
        key: 'exp', title: ' ', width: '40px',
        render: (_, row) => `<button type="button" class="dms-btn dms-btn--sm dms-btn--ghost" data-action="r-exp-${DMS.escape(row.id)}" title="Mở rộng dòng">${expand === row.id ? '▾' : '▸'}</button>`
      },
      { key: 'name', title: 'Tên vai trò', render: (v, row) => `<a class="dms-table__link" data-action="r-view-${DMS.escape(row.id)}">${DMS.escape(v)}</a>` },
      { key: 'kind', title: 'Quyền', render: (v) => DMS.render('Tag', { text: v, type: v === 'HO' ? 'blue' : 'green' }) },
      { key: 'createdBy', title: 'Người tạo', render: (v) => v ? S().copyCell(v, DMS.escape(v)) : '' },
      { key: 'createdAt', title: 'Ngày tạo' },
      { key: 'updatedBy', title: 'Người cập nhật', render: (v) => v ? S().copyCell(v, DMS.escape(v)) : '' },
      { key: 'updatedAt', title: 'Ngày cập nhật' },
      { key: 'status', title: 'Trạng thái', render: (v, row) => switchHtml(row.id, v === 'Hoạt động', 'r-sw') },
      {
        key: 'actions', title: 'Tùy chỉnh', fixed: 'right', width: '90px',
        render: (_, row) => `<div class="dms-action-buttons">
          ${actionBtn('r-copy-' + row.id, true, 'duplicate', 'Sao chép')}
          ${actionBtn('r-edit-' + row.id, true, 'edit', 'Chỉnh sửa')}
        </div>`
      }
    ];
  }
  function permMatrix(d, view) {
    const menus = store().permissionMenus;
    const acts = store().permissionActions;
    const head = `<tr><th>Màn hình</th>${acts.map((a) => `<th>${DMS.escape(a)}</th>`).join('')}</tr>`;
    const rows = menus.map((m) => {
      const set = new Set((d.perms && d.perms[m]) || []);
      return `<tr><td>${DMS.escape(m)}</td>${acts.map((a) => {
        const checked = set.has(a) || (a !== 'Tất cả' && set.has('Tất cả'));
        return `<td><input type="checkbox" data-perm="${DMS.escape(m)}|${DMS.escape(a)}" ${checked ? 'checked' : ''} ${view ? 'disabled' : ''} /></td>`;
      }).join('')}</tr>`;
    }).join('');
    return `<div class="sys-perm"><div>${DMS.render('Checkbox', { id: 'r-f-all', checked: !!d.selectAll, disabled: view, label: 'Chọn tất cả' })}</div>
      <div class="sys-perm__table"><table class="dms-table">${head}${rows}</table></div></div>`;
  }
  function roleForm(d, mode) {
    const view = mode === 'view';
    const title = view ? 'Chi tiết vai trò' : (mode === 'edit' ? 'Cập nhật vai trò' : 'Thêm mới vai trò');
    const body = `<div class="display-form-grid">
      ${DMS.render('Input', { id: 'r-f-name', label: 'Tên vai trò', requiredMark: true, value: d.name, disabled: view, placeholder: 'Nhập tên vai trò' })}
      ${S().fieldErr(d._errors || {}, 'name')}
      ${DMS.render('Select', { id: 'r-f-kind', label: 'Quyền', requiredMark: true, value: d.kind, options: store().roleKinds, placeholder: 'Chọn quyền', disabled: view })}
      ${S().fieldErr(d._errors || {}, 'kind')}
      ${DMS.render('Input', { id: 'r-f-desc', label: 'Mô tả', value: d.desc, disabled: view })}
      <div class="dms-form-item dms-form-item--full"><label class="dms-form-item__label">Phân quyền chức năng</label>${permMatrix(d, view)}${S().fieldErr(d._errors || {}, 'perms')}</div>
    </div>`;
    return DMS.render('Modal', { id: 'sys-role-modal', title, size: 'xl', body, footer: formFooter('r-save', 'r-close', view) });
  }
  function expandHtml(row) {
    const perms = row.perms || {};
    const lines = Object.keys(perms).map((m) => `<div><strong>${DMS.escape(m)}</strong>: ${(perms[m] || []).join(', ')}</div>`).join('');
    return `<div class="sys-expand">${lines || 'Chưa gán quyền chức năng.'}</div>`;
  }
  async function renderSystemRole() {
    await S().loadStore();
    const s = roleState();
    const p = S().queryParams();
    const mode = p.get('mode') || '';
    const id = p.get('id') || '';
    if ((mode === 'edit' || mode === 'view' || mode === 'copy') && id) {
      const item = store().roles.find((x) => x.id === id);
      if (item && S().getDraft('role')._src !== mode + id) {
        S().loadDraft('role', item, mode === 'view');
        if (mode === 'copy') {
          const d = S().getDraft('role');
          d.id = ''; d.name = (item.name || '') + ' - Sao chép'; d._src = 'copy' + id; d._view = false;
        }
      }
    }
    if (mode === 'create' && S().getDraft('role')._src !== 'create') {
      S().resetDraft('role'); S().getDraft('role')._src = 'create';
    }
    const cat = store();
    const q = (s.q || '').trim().toLowerCase();
    const rows = cat.roles.filter((it) => {
      if (q && !(it.name || '').toLowerCase().includes(q) && !(it.desc || '').toLowerCase().includes(q)) return false;
      if (s.status && it.status !== s.status) return false;
      return true;
    });
    const expand = p.get('expand') || '';
    const filter = DMS.render('FilterPanel', {
      title: 'Tìm kiếm theo',
      fields: [
        { type: 'search', id: 'r-q', label: 'Tìm kiếm', placeholder: 'Tìm kiếm', value: s.q },
        { type: 'select', id: 'r-status', label: 'Trạng thái', placeholder: 'Trạng thái', value: s.status, options: cat.statuses }
      ]
    });
    let body = listBody(rows, roleColumns(), s, 'dòng');
    if (expand) {
      const row = rows.find((x) => x.id === expand);
      if (row) body = body.replace('</table>', `</table>${expandHtml(row)}`);
    }
    const card = DMS.render('Card', {
      title: 'Danh sách vai trò',
      extra: DMS.render('Button', { text: '+ Tạo mới', type: 'primary', dataAction: 'r-create' }),
      body
    });
    let overlay = '';
    if (mode) overlay = roleForm(S().getDraft('role'), mode);
    return pageShell('Nhóm Quyền', filter, card, overlay, 'role');
  }

  /* ========== ATTRIBUTE ========== */
  function attrState() { return st('attr', { q: '', status: '', dataType: '' }); }
  function attrColumns() {
    return [
      { key: 'code', title: 'Mã thuộc tính' },
      { key: 'name', title: 'Tên thuộc tính', render: (v, row) => `<a class="dms-table__link" data-action="t-view-${DMS.escape(row.id)}">${DMS.escape(v)}</a>` },
      { key: 'dataType', title: 'Kiểu dữ liệu' },
      { key: 'status', title: 'Trạng thái', render: (v, row) => switchHtml(row.id, v === 'Hoạt động', 't-sw') },
      { key: 'createdAt', title: 'Ngày tạo' },
      { key: 'createdBy', title: 'Người tạo' },
      { key: 'updatedAt', title: 'Ngày cập nhật' },
      { key: 'updatedBy', title: 'Người cập nhật' },
      {
        key: 'actions', title: 'Tùy chỉnh', fixed: 'right', width: '70px',
        render: (_, row) => `<div class="dms-action-buttons">${actionBtn('t-edit-' + row.id, true, 'edit', 'Chỉnh sửa')}</div>`
      }
    ];
  }
  function attrForm(d, mode) {
    const view = mode === 'view';
    const title = view ? 'Xem chi tiết thuộc tính' : (mode === 'edit' ? 'Chỉnh sửa thuộc tính' : 'Thêm mới Thuộc tính');
    const isChoice = d.dataType === 'Chọn một' || d.dataType === 'Chọn nhiều';
    const valRows = (d.values || []).map((v, i) => `<div class="sys-inline">
      ${DMS.render('Input', { id: 't-v-c-' + i, placeholder: 'Mã giá trị', value: v.code, disabled: view || mode === 'edit' && !v._new })}
      ${DMS.render('Input', { id: 't-v-n-' + i, placeholder: 'Tên giá trị', value: v.name, disabled: view })}
      ${DMS.render('Switch', { checked: v.status !== 'Không hoạt động', dataAction: view ? '' : 't-v-sw-' + i })}
      ${view || (mode === 'edit' && !v._new) ? '' : DMS.render('Button', { text: 'Xóa', type: 'default', size: 'sm', dataAction: 't-v-del-' + i })}
    </div>`).join('');
    const extra = (d.applyTo === 'STORE' && isChoice) ? `<div class="dms-form-item dms-form-item--full">
      ${DMS.render('Checkbox', { id: 't-x-ctkm', checked: (d.extra || []).includes('CTKM'), disabled: view, label: 'Chương trình khuyến mãi' })}
      ${DMS.render('Checkbox', { id: 't-x-cttb', checked: (d.extra || []).includes('CTTB'), disabled: view, label: 'Chương trình trưng bày' })}
      ${DMS.render('Checkbox', { id: 't-x-cttl', checked: (d.extra || []).includes('CTTL'), disabled: view, label: 'Chương trình tích lũy' })}
    </div>` : '';
    const body = `<div class="display-form-grid">
      ${DMS.render('Input', { id: 't-f-code', label: 'Mã thuộc tính', requiredMark: true, value: d.code, disabled: view || mode === 'edit', placeholder: 'Nhập vào mã thuộc tính.' })}
      ${S().fieldErr(d._errors || {}, 'code')}
      ${DMS.render('Input', { id: 't-f-name', label: 'Tên thuộc tính', requiredMark: true, value: d.name, disabled: view, placeholder: 'Nhập vào tên thuộc tính.' })}
      ${S().fieldErr(d._errors || {}, 'name')}
      ${DMS.render('Select', { id: 't-f-type', label: 'Kiểu dữ liệu', requiredMark: true, value: d.dataType, options: store().attrTypes, placeholder: 'Chọn kiểu dữ liệu.', disabled: view || mode === 'edit' })}
      ${S().fieldErr(d._errors || {}, 'dataType')}
      <div class="dms-form-item">${DMS.render('Checkbox', { id: 't-f-req', checked: !!d.required, disabled: view, label: 'Bắt buộc' })}</div>
      <div class="dms-form-item"><label class="dms-form-item__label">Trạng thái</label>${DMS.render('Switch', { id: 't-f-st', checked: d.status !== 'Không hoạt động', disabled: view })}</div>
      <div class="dms-form-item dms-form-item--full">
        <label class="dms-form-item__label">Đối tượng áp dụng</label>
        <div class="sys-inline">
          ${DMS.render('Radio', { name: 't-apply', value: 'PRODUCT', checked: d.applyTo !== 'STORE', disabled: view, label: 'Sản phẩm' })}
          ${DMS.render('Radio', { name: 't-apply', value: 'STORE', checked: d.applyTo === 'STORE', disabled: view, label: 'Điểm bán' })}
        </div>
      </div>
      ${extra}
      ${isChoice ? `<div class="dms-form-item dms-form-item--full"><label class="dms-form-item__label">Cấu hình lựa chọn</label>${valRows}
        ${view ? '' : DMS.render('Button', { text: 'Thêm giá trị', type: 'default', dataAction: 't-v-add' })}
        ${S().fieldErr(d._errors || {}, 'values')}</div>` : ''}
    </div>`;
    return DMS.render('Modal', { id: 'sys-attr-modal', title, size: 'lg', body, footer: formFooter('t-save', 't-close', view) });
  }
  async function renderSystemAttr() {
    await S().loadStore();
    const s = attrState();
    const p = S().queryParams();
    const mode = p.get('mode') || '';
    const id = p.get('id') || '';
    if ((mode === 'edit' || mode === 'view') && id) {
      const item = store().attributes.find((x) => x.id === id);
      if (item && S().getDraft('attr')._src !== mode + id) S().loadDraft('attr', item, mode === 'view');
    }
    if (mode === 'create' && S().getDraft('attr')._src !== 'create') {
      S().resetDraft('attr'); S().getDraft('attr')._src = 'create';
    }
    const cat = store();
    const q = (s.q || '').trim().toLowerCase();
    const rows = cat.attributes.filter((it) => {
      if (q && !`${it.code} ${it.name}`.toLowerCase().includes(q)) return false;
      if (s.status && it.status !== s.status) return false;
      if (s.dataType && it.dataType !== s.dataType) return false;
      return true;
    });
    const filter = DMS.render('FilterPanel', {
      title: 'Tìm kiếm theo',
      fields: [
        { type: 'search', id: 't-q', label: 'Tìm kiếm', placeholder: 'Tìm kiếm', value: s.q },
        { type: 'select', id: 't-status', label: 'Trạng thái', placeholder: 'Trạng thái', value: s.status, options: cat.statuses },
        { type: 'select', id: 't-type', label: 'Kiểu dữ liệu', placeholder: 'Kiểu dữ liệu', value: s.dataType, options: cat.attrTypes }
      ]
    });
    const card = DMS.render('Card', {
      title: 'Danh sách thuộc tính',
      extra: DMS.render('Button', { text: '+ Tạo mới', type: 'primary', dataAction: 't-create' }),
      body: listBody(rows, attrColumns(), s, 'thuộc tính')
    });
    let overlay = '';
    if (mode) overlay = attrForm(S().getDraft('attr'), mode);
    return pageShell('Thuộc Tính', filter, card, overlay, 'attr');
  }

  async function renderSystemHome() {
    DMSRouter.navigate('/system/account', true);
    return '';
  }

  /* ========== SAVE / ACTIONS ========== */
  function saveUser() {
    const d = readUserDraft(S().getDraft('user'));
    const mode = S().queryParams().get('mode') || 'create';
    if (!validateUser(d, mode === 'edit' ? 'edit' : 'create')) { remount('/system/account', { mode, id: d.id || '' }); return; }
    const dup = store().users.some((u) => u.code.toLowerCase() === d.code.toLowerCase() && u.id !== d.id);
    if (dup) { d._errors = { code: 'Mã tài khoản đã tồn tại, vui lòng thử lại!' }; remount('/system/account', { mode, id: d.id || '' }); return; }
    DMS.get('Dialog').confirm('Bạn có muốn lưu thông tin không?', () => {
      const now = S().nowLabel();
      if (d.id) {
        const item = store().users.find((x) => x.id === d.id);
        Object.assign(item, d, { updatedAt: now, updatedBy: 'THAO999', password: undefined, _errors: undefined, _src: undefined, _dirty: undefined, _view: undefined });
      } else {
        store().users.unshift(Object.assign({}, d, {
          id: 'u' + Date.now(), lastLogin: '', createdAt: now, createdBy: 'THAO999',
          updatedAt: now, updatedBy: '', areas: [], status: 'Hoạt động'
        }));
      }
      toast('Cập nhật thành công', 'success');
      S().resetDraft('user');
      remount('/system/account', { mode: '', id: '' });
    });
  }
  function saveMaster() {
    const d = S().getDraft('master');
    d.code = (document.getElementById('m-f-code')?.value || d.code).trim();
    d.name = document.getElementById('m-f-name')?.value || d.name;
    d.type = document.getElementById('m-f-type')?.value || d.type;
    const err = {};
    if (!d.code) err.code = 'Trường Mã là bắt buộc!';
    if (!d.name) err.name = 'Trường Tên là bắt buộc!';
    if (!d.type) err.type = 'Trường Loại là bắt buộc!';
    const dup = store().masterData.some((m) => m.code.toLowerCase() === d.code.toLowerCase() && m.id !== d.id);
    if (dup) err.code = 'Mã dữ liệu đã tồn tại, vui lòng thử lại!';
    d._errors = err;
    if (Object.keys(err).length) { remount('/system/master-data', { mode: d.id ? 'edit' : 'create', id: d.id || '' }); return; }
    DMS.get('Dialog').confirm('Bạn có muốn lưu thông tin không?', () => {
      const now = S().nowLabel();
      if (d.id) {
        const item = store().masterData.find((x) => x.id === d.id);
        Object.assign(item, { name: d.name, type: d.type, updatedAt: now, updatedBy: 'THAO999' });
      } else {
        store().masterData.unshift({ id: 'm' + Date.now(), code: d.code, name: d.name, type: d.type, refCode: '', refSystem: 'SFA', createdAt: now, createdBy: 'THAO999', updatedAt: now, updatedBy: 'THAO999' });
      }
      toast('Cập nhật thành công', 'success');
      S().resetDraft('master');
      remount('/system/master-data', { mode: '', id: '' });
    });
  }
  function readAttDraft(d) {
    d.year = document.getElementById('a-f-year')?.value || d.year;
    d.days = DMS.get('MultiSelect').getValues('a-f-days') || d.days;
    d.workTime = document.getElementById('a-f-work')?.value || d.workTime;
    d.lunch = document.getElementById('a-f-lunch')?.value || d.lunch;
    d.hours = S().hoursFromRange(d.workTime, d.lunch);
    d.specials = (d.specials || []).map((sp, i) => ({
      date: document.getElementById('a-sp-d-' + i)?.value || sp.date,
      name: document.getElementById('a-sp-n-' + i)?.value || sp.name
    }));
    return d;
  }
  function saveAtt() {
    const d = readAttDraft(S().getDraft('att'));
    const err = {};
    if (!d.year) err.year = 'Trường Năm là bắt buộc!';
    if (!(d.days || []).length) err.days = 'Trường Ngày trong tuần là bắt buộc!';
    if (!d.workTime) err.workTime = 'Trường Thời gian làm việc là bắt buộc!';
    if (!d.lunch) err.lunch = 'Trường Thời gian nghỉ trưa là bắt buộc!';
    const dup = store().attendanceConfigs.some((a) => a.year === d.year && a.id !== d.id);
    if (dup) err.year = 'Năm đã tồn tại khai báo. Vui lòng kiểm tra lại';
    d._errors = err;
    if (Object.keys(err).length) { remount('/system/working-time-setting', { mode: d.id ? 'edit' : 'create', id: d.id || '' }); return; }
    DMS.get('Dialog').confirm('Bạn có muốn lưu thông tin không?', () => {
      const now = S().nowLabel();
      if (d.id) {
        const item = store().attendanceConfigs.find((x) => x.id === d.id);
        Object.assign(item, { days: d.days, workTime: d.workTime, lunch: d.lunch, hours: d.hours, specials: d.specials, updatedAt: now, updatedBy: 'THAO999' });
      } else {
        store().attendanceConfigs.unshift({ id: 'a' + Date.now(), year: d.year, days: d.days, workTime: d.workTime, lunch: d.lunch, hours: d.hours, specials: d.specials, status: 'Hoạt động', createdAt: now, createdBy: 'THAO999', updatedAt: now, updatedBy: 'THAO999' });
      }
      toast('Cập nhật thành công', 'success');
      S().resetDraft('att');
      remount('/system/working-time-setting', { mode: '', id: '' });
    });
  }
  function saveLoc() {
    const d = S().getDraft('loc');
    d.code = (document.getElementById('l-f-code')?.value || d.code).toUpperCase().replace(/\s/g, '');
    d.startAddr = document.getElementById('l-f-saddr')?.value || d.startAddr;
    d.startRadius = document.getElementById('l-f-sr')?.value || d.startRadius;
    d.endAddr = document.getElementById('l-f-eaddr')?.value || d.endAddr;
    d.endRadius = document.getElementById('l-f-er')?.value || d.endRadius;
    d.applyTo = document.getElementById('l-f-apply')?.value || d.applyTo;
    if (d.applyTo === 'Vùng') d.regions = DMS.get('MultiSelect').getValues('l-f-regions') || d.regions;
    const err = {};
    if (!d.code) err.code = 'Trường Mã cài đặt là bắt buộc!';
    if (!d.startAddr) err.startAddr = 'Trường Địa chỉ là bắt buộc!';
    if (!d.applyTo) err.applyTo = 'Trường Đối tượng áp dụng là bắt buộc!';
    const dup = store().locations.some((x) => x.code.toLowerCase() === d.code.toLowerCase() && x.id !== d.id);
    if (dup) err.code = 'Mã cài đặt vị trí chấm công đã tồn tại, vui lòng kiểm tra lại!';
    d._errors = err;
    if (Object.keys(err).length) { remount('/system/time-keeping-position', { mode: d.id ? 'edit' : 'create', id: d.id || '' }); return; }
    DMS.get('Dialog').confirm('Bạn có muốn lưu thông tin không?', () => {
      const now = S().nowLabel('/');
      if (d.id) {
        const item = store().locations.find((x) => x.id === d.id);
        Object.assign(item, d, { updatedAt: now, updatedBy: 'THAO999' });
      } else {
        store().locations.unshift(Object.assign({}, d, { id: 'l' + Date.now(), status: 'Hoạt động', createdAt: now, createdBy: 'THAO999', updatedAt: now, updatedBy: 'THAO999' }));
      }
      toast('Cập nhật thành công', 'success');
      S().resetDraft('loc');
      remount('/system/time-keeping-position', { mode: '', id: '' });
    });
  }
  function saveCfg() {
    const d = S().getDraft('cfg');
    d.name = document.getElementById('c-f-name')?.value || d.name;
    d.key = (document.getElementById('c-f-key')?.value || d.key).toUpperCase().replace(/\s/g, '');
    d.type = document.getElementById('c-f-type')?.value || d.type;
    d.target = document.getElementById('c-f-target')?.value || d.target;
    d.group = document.getElementById('c-f-group')?.value || d.group;
    d.desc = document.getElementById('c-f-desc')?.value || d.desc;
    d.textValue = document.getElementById('c-f-text')?.value || d.textValue;
    d.boolValue = document.getElementById('c-f-bool')?.classList.contains('is-checked') || d.boolValue;
    if (d.type === 'BOOLEAN') d.value = d.boolValue ? 'Bật' : 'Tắt';
    else if (d.type === 'TABLE' || d.type === 'OBJECT') d.value = 'Chi tiết';
    else d.value = d.textValue;
    const err = {};
    if (!d.name) err.name = 'Trường Tên là bắt buộc!';
    if (!d.key) err.key = 'Trường Từ khóa là bắt buộc!';
    if (!d.target) err.target = 'Trường Đối tượng áp dụng là bắt buộc!';
    if (!d.group) err.group = 'Trường Tên nhóm là bắt buộc!';
    d._errors = err;
    if (Object.keys(err).length) { remount('/system/setting', { mode: d.id ? 'edit' : 'create', id: d.id || '' }); return; }
    DMS.get('Dialog').confirm('Bạn có muốn lưu thông tin không?', () => {
      const now = S().nowLabel();
      if (d.id) {
        const item = store().generalConfigs.find((x) => x.id === d.id);
        Object.assign(item, { name: d.name, desc: d.desc, group: d.group, textValue: d.textValue, boolValue: d.boolValue, value: d.value, updatedAt: now, updatedBy: 'THAO999' });
      } else {
        store().generalConfigs.unshift(Object.assign({}, d, { id: 'c' + Date.now(), createdAt: now, createdBy: 'THAO999', updatedAt: now, updatedBy: 'THAO999' }));
      }
      toast('Cập nhật thành công', 'success');
      S().resetDraft('cfg');
      remount('/system/setting', { mode: '', id: '' });
    });
  }
  function readRolePerms(d) {
    d.name = document.getElementById('r-f-name')?.value || d.name;
    d.kind = document.getElementById('r-f-kind')?.value || d.kind;
    d.desc = document.getElementById('r-f-desc')?.value || d.desc;
    const perms = {};
    document.querySelectorAll('[data-perm]:checked').forEach((el) => {
      const [m, a] = el.getAttribute('data-perm').split('|');
      perms[m] = perms[m] || [];
      perms[m].push(a);
    });
    d.perms = perms;
    return d;
  }
  function saveRole() {
    const d = readRolePerms(S().getDraft('role'));
    const err = {};
    if (!d.name) err.name = 'Trường Tên vai trò là bắt buộc!';
    if (!d.kind) err.kind = 'Trường Quyền là bắt buộc!';
    const has = Object.keys(d.perms || {}).some((k) => (d.perms[k] || []).length);
    if (!has) err.perms = 'Lỗi: Vai trò phải được gán ít nhất một quyền chức năng. Vui lòng chọn ít nhất một quyền trước khi lưu.';
    d._errors = err;
    if (Object.keys(err).length) { remount('/system/role', { mode: d.id ? 'edit' : 'create', id: d.id || '' }); return; }
    const msg = d.id ? 'Bạn có muốn cập nhật thông tin không?' : 'Bạn có muốn lưu thông tin không?';
    DMS.get('Dialog').confirm(msg, () => {
      const now = S().nowLabel();
      if (d.id) {
        const item = store().roles.find((x) => x.id === d.id);
        Object.assign(item, { name: d.name, kind: d.kind, desc: d.desc, perms: d.perms, updatedAt: now, updatedBy: 'THAO999' });
      } else {
        store().roles.unshift({ id: 'r' + Date.now(), name: d.name, kind: d.kind, desc: d.desc, perms: d.perms, status: 'Hoạt động', createdAt: now, createdBy: 'THAO999', updatedAt: now, updatedBy: 'THAO999' });
      }
      toast(d.id ? 'Cập nhật vai trò thành công' : 'Lưu vai trò thành công', 'success');
      S().resetDraft('role');
      remount('/system/role', { mode: '', id: '' });
    });
  }
  function readAttrDraft(d) {
    d.code = (document.getElementById('t-f-code')?.value || d.code).replace(/\s/g, '');
    d.name = document.getElementById('t-f-name')?.value || d.name;
    d.dataType = document.getElementById('t-f-type')?.value || d.dataType;
    d.required = !!document.getElementById('t-f-req')?.checked;
    const sw = document.getElementById('t-f-st');
    if (sw) d.status = sw.classList.contains('is-checked') ? 'Hoạt động' : 'Không hoạt động';
    const ap = document.querySelector('input[name="t-apply"]:checked');
    if (ap) d.applyTo = ap.value;
    d.extra = [];
    if (document.getElementById('t-x-ctkm')?.checked) d.extra.push('CTKM');
    if (document.getElementById('t-x-cttb')?.checked) d.extra.push('CTTB');
    if (document.getElementById('t-x-cttl')?.checked) d.extra.push('CTTL');
    d.values = (d.values || []).map((v, i) => ({
      code: document.getElementById('t-v-c-' + i)?.value || v.code,
      name: document.getElementById('t-v-n-' + i)?.value || v.name,
      status: v.status, _new: v._new
    }));
    return d;
  }
  function saveAttr() {
    const d = readAttrDraft(S().getDraft('attr'));
    DMS.get('Dialog').confirm('Bạn có chắc chắn thao tác thêm mới hay không?', () => {
      const err = {};
      if (!d.code) err.code = 'Trường Mã thuộc tính là bắt buộc.';
      if (!d.name) err.name = 'Trường Tên thuộc tính là bắt buộc.';
      if (!d.dataType) err.dataType = 'Trường Kiểu dữ liệu là bắt buộc.';
      const isChoice = d.dataType === 'Chọn một' || d.dataType === 'Chọn nhiều';
      if (isChoice && !(d.values || []).length) err.values = 'Thuộc tính phải có ít nhất một giá trị.';
      const dup = store().attributes.some((x) => x.code.toLowerCase() === d.code.toLowerCase() && x.id !== d.id);
      if (dup) err.code = 'Mã thuộc tính đã tồn tại.';
      d._errors = err;
      if (Object.keys(err).length) { remount('/system/attribute', { mode: d.id ? 'edit' : 'create', id: d.id || '' }); return; }
      const now = S().nowLabel();
      if (d.id) {
        const item = store().attributes.find((x) => x.id === d.id);
        Object.assign(item, { name: d.name, required: d.required, status: d.status, applyTo: d.applyTo, extra: d.extra, values: d.values, updatedAt: now, updatedBy: 'THAO999' });
      } else {
        store().attributes.unshift({ id: 't' + Date.now(), code: d.code, name: d.name, dataType: d.dataType, required: d.required, status: d.status || 'Hoạt động', applyTo: d.applyTo, extra: d.extra, values: d.values, createdAt: now, createdBy: 'THAO999', updatedAt: now, updatedBy: 'THAO999' });
      }
      toast('Cập nhật thành công', 'success');
      S().resetDraft('attr');
      remount('/system/attribute', { mode: '', id: '' });
    });
  }

  function doClosePeriod() {
    const npp = document.getElementById('cl-npp')?.value || periodState('close').npp;
    if (!npp) { toast('Nhà phân phối là bắt buộc.', 'warning'); return; }
    const dist = store().distributors.find((x) => x.value === npp);
    const row = store().periods.find((x) => x.code === npp);
    const next = S().nextMonth(row ? row.month : '');
    const name = dist ? dist.label.replace(npp + ' - ', '') : npp;
    DMS.get('Dialog').confirm(`Bạn chắc chắn muốn khoá sổ tháng ${next} của ${name}?`, () => {
      const now = S().nowLabel();
      if (row) { row.month = next; row.closedAt = now; row.closedBy = 'THAO999'; }
      else store().periods.unshift({ id: 'p' + Date.now(), code: npp, name, closedAt: now, closedBy: 'THAO999', month: next });
      toast('Khoá sổ thành công', 'success');
      remount('/system/closing', { mode: '', id: '' });
    });
  }
  function doOpenPeriod() {
    const npp = document.getElementById('op-npp')?.value || periodState('open').npp;
    if (!npp) { toast('Nhà phân phối là bắt buộc.', 'warning'); return; }
    const dist = store().distributors.find((x) => x.value === npp);
    const row = store().periods.find((x) => x.code === npp);
    if (!row) { toast('Nhà phân phối chưa có tháng khoá sổ.', 'warning'); return; }
    const name = dist ? dist.label.replace(npp + ' - ', '') : row.name;
    DMS.get('Dialog').confirm(`Bạn chắc chắn muốn mở khoá sổ tháng ${row.month} của ${name}?`, () => {
      row.month = S().prevMonth(row.month);
      row.closedAt = S().nowLabel();
      row.closedBy = 'THAO999';
      toast('Mở khóa sổ thành công', 'success');
      remount('/system/unlock', { mode: '', id: '' });
    });
  }

  function bindPage(container) {
    const key = container.querySelector('[data-sys]')?.getAttribute('data-sys');
    const pathMap = {
      account: '/system/account', closing: '/system/closing', unlock: '/system/unlock',
      master: '/system/master-data', att: '/system/working-time-setting',
      loc: '/system/time-keeping-position', cfg: '/system/setting',
      role: '/system/role', attr: '/system/attribute'
    };
    const path = pathMap[key] || '/system/account';
    const readFilters = () => {
      if (key === 'account') {
        const s = userState();
        s.q = document.getElementById('u-q')?.value || '';
        s.ho = document.getElementById('u-ho')?.value || '';
        s.npp = document.getElementById('u-npp')?.value || '';
        s.market = document.getElementById('u-market')?.value || '';
        s.status = document.getElementById('u-status')?.value || '';
        s.page = 1;
      } else if (key === 'closing') {
        const s = periodState('close');
        s.npp = document.getElementById('cl-npp')?.value || '';
        s.month = document.getElementById('cl-month')?.value || '';
        s.page = 1;
      } else if (key === 'unlock') {
        const s = periodState('open');
        s.npp = document.getElementById('op-npp')?.value || '';
        s.page = 1;
      } else if (key === 'master') {
        const s = masterState();
        s.q = document.getElementById('m-q')?.value || '';
        s.type = document.getElementById('m-type')?.value || '';
        s.page = 1;
      } else if (key === 'att') {
        const s = attState();
        s.year = document.getElementById('a-year')?.value || '';
        s.status = document.getElementById('a-status')?.value || '';
        s.page = 1;
      } else if (key === 'loc') {
        const s = locState();
        s.q = document.getElementById('l-q')?.value || '';
        s.emp = document.getElementById('l-emp')?.value || '';
        s.applyTo = document.getElementById('l-apply')?.value || '';
        s.status = document.getElementById('l-status')?.value || '';
        s.page = 1;
      } else if (key === 'cfg') {
        const s = cfgState();
        s.q = document.getElementById('c-q')?.value || '';
        s.target = document.getElementById('c-target')?.value || '';
        s.group = document.getElementById('c-group')?.value || '';
        s.page = 1;
      } else if (key === 'role') {
        const s = roleState();
        s.q = document.getElementById('r-q')?.value || '';
        s.status = document.getElementById('r-status')?.value || '';
        s.page = 1;
      } else if (key === 'attr') {
        const s = attrState();
        s.q = document.getElementById('t-q')?.value || '';
        s.status = document.getElementById('t-status')?.value || '';
        s.dataType = document.getElementById('t-type')?.value || '';
        s.page = 1;
      }
    };
    const resetFilters = () => {
      const k = '__sysSt_' + (key === 'closing' ? 'close' : key === 'unlock' ? 'open' : key);
      const keep = window[k]?.pageSize || 10;
      window[k] = Object.assign({ page: 1, pageSize: keep }, key === 'role' ? { status: 'Hoạt động' } : {});
    };

    container.addEventListener('change', (e) => {
      if (e.target.closest('.dms-pagination__size select')) {
        const k = key === 'closing' ? 'close' : key === 'unlock' ? 'open' : key;
        st(k).pageSize = Number(e.target.value) || 10;
        st(k).page = 1;
        remount(path, { mode: '', id: '' });
      }
      if (e.target.name === 'u-perm' || e.target.id === 't-f-type' || e.target.id === 'l-f-apply' || e.target.name === 't-apply' || e.target.id === 'c-f-type') {
        if (key === 'account') { readUserDraft(S().getDraft('user')); S().getDraft('user')._dirty = true; remount(path, { mode: S().queryParams().get('mode'), id: S().queryParams().get('id') || '' }); }
        if (key === 'attr') { readAttrDraft(S().getDraft('attr')); S().getDraft('attr')._dirty = true; remount(path, { mode: S().queryParams().get('mode'), id: S().queryParams().get('id') || '' }); }
        if (key === 'loc') { S().getDraft('loc').applyTo = document.getElementById('l-f-apply')?.value; S().getDraft('loc')._dirty = true; remount(path, { mode: S().queryParams().get('mode'), id: S().queryParams().get('id') || '' }); }
        if (key === 'cfg') { S().getDraft('cfg').type = document.getElementById('c-f-type')?.value; S().getDraft('cfg')._dirty = true; remount(path, { mode: S().queryParams().get('mode'), id: S().queryParams().get('id') || '' }); }
      }
      if (e.target.id === 'l-f-endoff') {
        S().getDraft('loc').endDisabled = e.target.checked;
        S().getDraft('loc')._dirty = true;
        remount(path, { mode: S().queryParams().get('mode'), id: S().queryParams().get('id') || '' });
      }
      if (e.target.id === 'r-f-all') {
        const d = S().getDraft('role');
        d.selectAll = e.target.checked;
        if (d.selectAll) {
          const all = {};
          store().permissionMenus.forEach((m) => { all[m] = store().permissionActions.slice(); });
          d.perms = all;
        } else d.perms = {};
        remount(path, { mode: S().queryParams().get('mode'), id: S().queryParams().get('id') || '' });
      }
    });

    container.addEventListener('click', (e) => {
      if (e.target.closest('[data-copy]')) {
        const t = e.target.closest('[data-copy]').getAttribute('data-copy');
        if (navigator.clipboard) navigator.clipboard.writeText(t);
        toast('Đã sao chép', 'success');
        return;
      }
      if (e.target.closest('[data-action="filter-search"]')) { readFilters(); remount(path, { mode: '', id: '' }); return; }
      if (e.target.closest('[data-action="filter-reset"]')) { resetFilters(); remount(path, { mode: '', id: '' }); return; }
      const pageBtn = e.target.closest('[data-page]');
      if (pageBtn && !e.target.closest('[data-action]')) {
        const k = key === 'closing' ? 'close' : key === 'unlock' ? 'open' : key;
        st(k).page = Number(pageBtn.getAttribute('data-page'));
        remount(path, { mode: '', id: '' });
        return;
      }
      const tab = e.target.closest('.dms-tabs__tab');
      if (tab && e.target.closest('#sys-att-modal')) {
        remount(path, { mode: S().queryParams().get('mode'), id: S().queryParams().get('id') || '', tab: tab.getAttribute('data-tab') });
        return;
      }
      const act = e.target.closest('[data-action]');
      if (!act) return;
      const a = act.getAttribute('data-action') || '';
      if (a === 'modal-close' || a.endsWith('-close')) {
        const kind = { account: 'user', master: 'master', att: 'att', loc: 'loc', cfg: 'cfg', role: 'role', attr: 'attr' }[key];
        if (kind) confirmClose(kind, path);
        return;
      }
      if (a === 'u-create') { S().resetDraft('user'); remount(path, { mode: 'create' }); return; }
      if (a === 'u-save') { saveUser(); return; }
      if (a === 'u-import' || a === 'u-export' || a === 'l-import' || a === 'l-export') { toast('Đã xuất/nhập file Excel (mock)', 'success'); return; }
      if (a === 'm-create') { S().resetDraft('master'); remount(path, { mode: 'create' }); return; }
      if (a === 'm-save') { saveMaster(); return; }
      if (a === 'a-create') { S().resetDraft('att'); remount(path, { mode: 'create' }); return; }
      if (a === 'a-save') { saveAtt(); return; }
      if (a === 'a-sp-add') { S().getDraft('att').specials = S().getDraft('att').specials || []; S().getDraft('att').specials.push({ date: '', name: '' }); remount(path, { mode: S().queryParams().get('mode'), id: S().queryParams().get('id') || '' }); return; }
      if (a === 'l-create') { S().resetDraft('loc'); remount(path, { mode: 'create' }); return; }
      if (a === 'l-save') { saveLoc(); return; }
      if (a === 'l-geo') {
        const d = S().getDraft('loc');
        d.startAddr = document.getElementById('l-f-saddr')?.value || d.startAddr;
        if (!d.startAddr) { toast('Không tìm thấy tọa độ địa chỉ, vui lòng kiểm tra lại!', 'warning'); return; }
        d.lat = '10.7769'; d.lng = '106.7009'; d._dirty = true;
        remount(path, { mode: S().queryParams().get('mode'), id: S().queryParams().get('id') || '' });
        return;
      }
      if (a === 'l-emp-add') {
        const d = S().getDraft('loc');
        const pick = (store().employees || []).find((x) => !(d.employees || []).includes(x.code));
        if (pick) { d.employees = d.employees || []; d.employees.push(pick.code); }
        remount(path, { mode: S().queryParams().get('mode'), id: S().queryParams().get('id') || '' });
        return;
      }
      if (a === 'c-create') { S().resetDraft('cfg'); remount(path, { mode: 'create' }); return; }
      if (a === 'c-save') { saveCfg(); return; }
      if (a === 'r-create') { S().resetDraft('role'); remount(path, { mode: 'create' }); return; }
      if (a === 'r-save') { saveRole(); return; }
      if (a === 't-create') { S().resetDraft('attr'); remount(path, { mode: 'create' }); return; }
      if (a === 't-save') { saveAttr(); return; }
      if (a === 't-v-add') { S().getDraft('attr').values = S().getDraft('attr').values || []; S().getDraft('attr').values.push({ code: '', name: '', status: 'Hoạt động', _new: true }); remount(path, { mode: S().queryParams().get('mode'), id: S().queryParams().get('id') || '' }); return; }
      if (a === 'cl-lock') { doClosePeriod(); return; }
      if (a === 'op-unlock') { doOpenPeriod(); return; }

      const m = a.match(/^([a-z]+)-([a-z]+)-(.+)$/);
      if (!m) return;
      const [, ns, op, id] = m;
      if (ns === 'u' && op === 'view') remount(path, { mode: 'view', id });
      if (ns === 'u' && op === 'edit') remount(path, { mode: 'edit', id });
      if (ns === 'u' && op === 'copy') remount(path, { mode: 'copy', id });
      if (ns === 'u' && op === 'sw') toggleStatus(store().users, id, path);
      if (ns === 'u' && op === 'unlock') {
        DMS.get('Dialog').confirm('Bạn có muốn cấp lại mật khẩu cho tài khoản này?', () => toast('Đã cấp lại mật khẩu (mock)', 'success'));
      }
      if (ns === 'm' && (op === 'view' || op === 'edit')) remount(path, { mode: op, id });
      if (ns === 'a' && (op === 'view' || op === 'edit')) remount(path, { mode: op, id });
      if (ns === 'a' && op === 'sw') toggleStatus(store().attendanceConfigs, id, path);
      if (ns === 'a' && op === 'sp' && a.indexOf('a-sp-del-') === 0) {
        const i = Number(a.replace('a-sp-del-', ''));
        S().getDraft('att').specials.splice(i, 1);
        remount(path, { mode: S().queryParams().get('mode'), id: S().queryParams().get('id') || '' });
      }
      if (ns === 'l' && op === 'view') remount(path, { mode: 'view', id });
      if (ns === 'l' && op === 'copy') remount(path, { mode: 'copy', id });
      if (ns === 'l' && op === 'sw') toggleStatus(store().locations, id, path);
      if (ns === 'l' && op === 'emp') {
        const code = a.replace('l-emp-del-', '');
        S().getDraft('loc').employees = (S().getDraft('loc').employees || []).filter((x) => x !== code);
        remount(path, { mode: S().queryParams().get('mode'), id: S().queryParams().get('id') || '' });
      }
      if (ns === 'c' && (op === 'view' || op === 'edit' || op === 'copy')) remount(path, { mode: op, id });
      if (ns === 'r' && (op === 'view' || op === 'edit' || op === 'copy')) remount(path, { mode: op, id });
      if (ns === 'r' && op === 'sw') toggleStatus(store().roles, id, path);
      if (ns === 'r' && op === 'exp') {
        const cur = S().queryParams().get('expand');
        remount(path, { expand: cur === id ? '' : id });
      }
      if (ns === 't' && (op === 'view' || op === 'edit')) remount(path, { mode: op, id });
      if (ns === 't' && op === 'sw') toggleStatus(store().attributes, id, path);
      if (ns === 't' && op === 'v') {
        if (a.indexOf('t-v-del-') === 0) {
          S().getDraft('attr').values.splice(Number(a.replace('t-v-del-', '')), 1);
          remount(path, { mode: S().queryParams().get('mode'), id: S().queryParams().get('id') || '' });
        }
        if (a.indexOf('t-v-sw-') === 0) {
          const i = Number(a.replace('t-v-sw-', ''));
          const v = S().getDraft('attr').values[i];
          if (v) v.status = v.status === 'Hoạt động' ? 'Không hoạt động' : 'Hoạt động';
          remount(path, { mode: S().queryParams().get('mode'), id: S().queryParams().get('id') || '' });
        }
      }
    });
  }

  function attach(fn) {
    fn.onMount = function (container) {
      if (DMS.get('MultiSelect')?.bindAll) DMS.get('MultiSelect').bindAll(container);
      bindPage(container);
    };
  }

  attach(renderSystemAccount);
  attach(renderSystemClosing);
  attach(renderSystemUnlock);
  attach(renderSystemMaster);
  attach(renderSystemAtt);
  attach(renderSystemLoc);
  attach(renderSystemSetting);
  attach(renderSystemRole);
  attach(renderSystemAttr);
  attach(renderSystemHome);

  window.renderSystemAccount = renderSystemAccount;
  window.renderSystemClosing = renderSystemClosing;
  window.renderSystemUnlock = renderSystemUnlock;
  window.renderSystemMaster = renderSystemMaster;
  window.renderSystemAtt = renderSystemAtt;
  window.renderSystemLoc = renderSystemLoc;
  window.renderSystemSetting = renderSystemSetting;
  window.renderSystemRole = renderSystemRole;
  window.renderSystemAttr = renderSystemAttr;
  window.renderSystemHome = renderSystemHome;
})();
