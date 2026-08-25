/**
 * Cài Đặt Thông Báo + Lịch Sử Thông Báo
 * UI: DEV /notify/setting, /notify/history
 */
(function () {
  'use strict';

  function toast(msg, type) { DMS.get('Toast').show(msg, type || 'info'); }
  function S() { return NotifyShared; }

  function settingUrl(extra) {
    const p = S().queryParams();
    const next = Object.assign({ mode: p.get('mode') || '', id: p.get('id') || '', preview: p.get('preview') || '' }, extra || {});
    const q = [];
    if (next.mode) q.push('mode=' + encodeURIComponent(next.mode));
    if (next.id) q.push('id=' + encodeURIComponent(next.id));
    if (next.preview) q.push('preview=' + encodeURIComponent(next.preview));
    return '/notify/setting' + (q.length ? '?' + q.join('&') : '');
  }
  function remountSetting(extra) { DMSRouter.navigate(settingUrl(extra), true); }
  function remountHistory() { DMSRouter.navigate('/notify/history', true); }

  function settingState() {
    if (!window.__notifySettingState) {
      window.__notifySettingState = { q: '', type: '', audience: '', status: '', page: 1, pageSize: 10 };
    }
    return window.__notifySettingState;
  }
  function historyState() {
    if (!window.__notifyHistoryState) {
      const m = S().monthRange();
      window.__notifyHistoryState = { q: '', notifyStatus: '', receiveStatus: '', from: m.from, to: m.to, page: 1, pageSize: 10 };
    }
    return window.__notifyHistoryState;
  }

  function actionBtn(action, id, enabled, type, title) {
    return DMS.render('ActionIconButton', {
      type: type, title: title, disabled: !enabled,
      dataAction: enabled ? action + '-' + id : ''
    });
  }

  function filterSettings(items, st) {
    const q = (st.q || '').trim().toLowerCase();
    return items.filter((it) => {
      if (q) {
        const blob = `${it.title} ${it.summary} ${it.contentHtml}`.toLowerCase();
        if (!blob.includes(q)) return false;
      }
      if (st.type && it.type !== st.type) return false;
      if (st.audience && it.audience !== st.audience) return false;
      if (st.status && it.status !== st.status) return false;
      return true;
    });
  }

  function settingColumns() {
    return [
      {
        key: 'code', title: 'Mã thông báo', width: '160px',
        render: (v) => S().copyCell(v, DMS.escape(v))
      },
      {
        key: 'title', title: 'Tiêu đề',
        render: (v, row) => `<a class="dms-table__link" data-action="nt-view-${DMS.escape(row.id)}">${DMS.escape(v)}</a>`
      },
      { key: 'regions', title: 'Vùng áp dụng', render: (v) => S().regionTags(v) },
      {
        key: 'audience', title: 'Đối tượng',
        render: (v) => DMS.render('Tag', { text: S().audienceLabel(v), type: 'default' })
      },
      { key: 'type', title: 'Loại thông báo', render: (v) => S().typeTag(v) },
      { key: 'summary', title: 'Tóm tắt thông báo' },
      {
        key: 'contentHtml', title: 'Nội dung thông báo',
        render: (_, row) => `<a class="dms-table__link" data-action="nt-preview-${DMS.escape(row.id)}">Xem chi tiết</a>`
      },
      { key: 'display', title: 'Kiểu hiển thị', render: (v) => S().displayTag(v) },
      { key: 'status', title: 'Trạng thái', render: (v) => S().statusTag(v) },
      { key: 'createdAt', title: 'Ngày tạo' },
      { key: 'createdBy', title: 'Người tạo', render: (v) => v ? S().copyCell(v, DMS.escape(v)) : '' },
      { key: 'updatedAt', title: 'Ngày cập nhật' },
      { key: 'updatedBy', title: 'Người cập nhật', render: (v) => v ? S().copyCell(v, DMS.escape(v)) : '' },
      {
        key: 'actions', title: 'Tùy chỉnh', fixed: 'right', width: '90px',
        render: (_, row) => {
          const canEdit = row.status === 'Khởi tạo';
          return `<div class="dms-action-buttons">
            ${actionBtn('nt-edit', row.id, canEdit, 'edit', 'Chỉnh sửa')}
            ${actionBtn('nt-send', row.id, canEdit, 'send', 'Gửi')}
          </div>`;
        }
      }
    ];
  }

  function renderSettingBody() {
    const st = settingState();
    const filtered = filterSettings(S().persist().settings || [], st);
    const total = filtered.length;
    const pages = Math.max(1, Math.ceil(total / st.pageSize) || 1);
    if (st.page > pages) st.page = pages;
    const start = (st.page - 1) * st.pageSize;
    const rows = filtered.slice(start, start + st.pageSize);
    const table = rows.length
      ? DMS.render('Table', { columns: settingColumns(), data: rows })
      : `<div class="dms-table-wrapper">${DMS.render('EmptyState', { title: 'Trống', icon: '📭' })}</div>`;
    const pag = rows.length || total
      ? DMS.render('Pagination', { current: st.page, pageSize: st.pageSize, total, unit: 'dòng' })
      : '';
    return table + pag;
  }

  function readSettingFilters() {
    const st = settingState();
    st.q = document.getElementById('nt-q')?.value || '';
    st.type = document.getElementById('nt-type')?.value || '';
    st.audience = document.getElementById('nt-audience')?.value || '';
    st.status = document.getElementById('nt-status')?.value || '';
    st.page = 1;
  }

  function formTitle(mode) {
    if (mode === 'edit') return 'Chỉnh sửa Thông báo';
    if (mode === 'view') return 'Chi tiết Thông báo';
    return 'Thêm mới Thông báo';
  }

  function readDraftDom(d) {
    if (d._locked) return d;
    d.title = document.getElementById('nt-f-title')?.value || d.title;
    d.regions = DMS.get('MultiSelect').getValues('nt-f-regions') || d.regions;
    d.type = document.getElementById('nt-f-type')?.value || d.type;
    d.display = document.getElementById('nt-f-display')?.value || d.display;
    d.audience = document.getElementById('nt-f-audience')?.value || d.audience;
    d.roles = DMS.get('MultiSelect').getValues('nt-f-roles') || d.roles || [];
    d.summary = document.getElementById('nt-f-summary')?.value || d.summary;
    d.contentHtml = document.getElementById('nt-f-content')?.value || d.contentHtml;
    d.autoSend = !!document.getElementById('nt-f-auto')?.checked;
    d.autoSendAt = document.getElementById('nt-f-autotime')?.value || d.autoSendAt;
    return d;
  }

  function validateDraft(d) {
    const err = {};
    if (!(d.title || '').trim()) err.title = 'Tiêu đề là bắt buộc!';
    if (!(d.regions || []).length) err.regions = 'Vùng áp dụng là bắt buộc!';
    if (!d.type) err.type = 'Loại thông báo là bắt buộc!';
    if (!d.display) err.display = 'Kiểu hiển thị là bắt buộc!';
    if (!d.audience) err.audience = 'Đối tượng là bắt buộc!';
    if (d.audience === 'ROLE' && !(d.roles || []).length) err.roles = 'Chức vụ là bắt buộc!';
    if (d.audience === 'EMPLOYEE' && !(d.employeeCodes || []).length) err.employees = 'Nhân viên là bắt buộc!';
    if (!(d.summary || '').trim()) err.summary = 'Tóm tắt thông báo là bắt buộc!';
    if ((d.summary || '').length > 200) err.summary = 'Tối đa 200 ký tự.';
    if (!(d.contentHtml || '').trim()) err.contentHtml = 'Nội dung thông báo là bắt buộc!';
    if (d.autoSend) {
      if (!d.autoSendAt) err.autoSendAt = 'Thời gian gửi tự động là bắt buộc!';
    }
    d._errors = err;
    return !Object.keys(err).length;
  }

  function extraAudience(d, locked) {
    const store = S().persist();
    if (d.audience === 'ROLE') {
      return `<div class="dms-form-item">
        <label class="dms-form-item__label is-required">Chức vụ</label>
        ${DMS.render('MultiSelect', { id: 'nt-f-roles', values: d.roles || [], options: S().roleOptions(), placeholder: 'Chọn Chức vụ để cài đặt thông báo', disabled: locked })}
        ${S().fieldErr(d._errors || {}, 'roles')}
      </div>`;
    }
    if (d.audience === 'EMPLOYEE') {
      const emps = (store.employees || []).filter((e) => (d.employeeCodes || []).includes(e.code));
      const cols = [
        { key: 'code', title: 'Mã nhân viên', render: (v) => S().copyCell(v, DMS.escape(v)) },
        { key: 'name', title: 'Tên nhân viên' },
        { key: 'manager', title: 'Quản lý trực tiếp' },
        { key: 'phone', title: 'Số điện thoại' },
        { key: 'role', title: 'Chức vụ' },
        { key: 'status', title: 'Trạng thái' },
        {
          key: 'x', title: 'Tùy chỉnh',
          render: (_, row) => locked ? '' : DMS.render('TableActions', {
            actions: [{ type: 'delete', title: 'Xóa', dataAction: 'nt-emp-del-' + row.code }]
          })
        }
      ];
      return `<div class="dms-form-item dms-form-item--full">
        <label class="dms-form-item__label is-required">Nhân viên</label>
        ${locked ? '' : DMS.render('Button', { text: '+ Thêm', type: 'primary', dataAction: 'nt-emp-add' })}
        ${emps.length ? DMS.render('Table', { columns: cols, data: emps }) : DMS.render('EmptyState', { title: 'Trống', icon: '📭' })}
        ${S().fieldErr(d._errors || {}, 'employees')}
      </div>`;
    }
    return '';
  }

  function editorToolbar() {
    return `<div class="nt-editor-toolbar" aria-hidden="true">
      <span>B</span><span>U</span><span>I</span><span>S</span><span>Link</span><span>Image</span>
    </div>`;
  }

  function renderFormModal(d, mode) {
    const locked = d._locked;
    const store = S().persist();
    const autoTime = d.autoSend ? `<div class="dms-form-item">
      <label class="dms-form-item__label">Thời gian gửi</label>
      ${DMS.render('Input', { id: 'nt-f-autotime', placeholder: 'DD-MM-YYYY HH:MM:SS', value: d.autoSendAt || '', disabled: locked })}
      ${S().fieldErr(d._errors || {}, 'autoSendAt')}
    </div>` : '';
    const body = `<div class="display-form-grid nt-form">
      <div class="dms-form-item">
        <label class="dms-form-item__label is-required">Tiêu đề</label>
        ${DMS.render('Input', { id: 'nt-f-title', placeholder: 'Nhập vào tiêu đề.', value: d.title || '', disabled: locked })}
        ${S().fieldErr(d._errors || {}, 'title')}
      </div>
      <div class="dms-form-item">
        <label class="dms-form-item__label is-required">Vùng áp dụng</label>
        ${DMS.render('MultiSelect', { id: 'nt-f-regions', values: d.regions || [], options: S().regionOptions(), placeholder: 'Chọn vùng áp dụng', disabled: locked })}
        ${S().fieldErr(d._errors || {}, 'regions')}
      </div>
      <div class="dms-form-item">
        <label class="dms-form-item__label is-required">Loại thông báo</label>
        ${DMS.render('Select', { id: 'nt-f-type', value: d.type, options: store.types, placeholder: 'Chọn Loại thông báo.', disabled: locked })}
        ${S().fieldErr(d._errors || {}, 'type')}
      </div>
      <div class="dms-form-item">
        <label class="dms-form-item__label is-required">Kiểu hiển thị</label>
        ${DMS.render('Select', { id: 'nt-f-display', value: d.display, options: store.displays, placeholder: 'Chọn Kiểu hiển thị.', disabled: locked })}
        ${S().fieldErr(d._errors || {}, 'display')}
      </div>
      <div class="dms-form-item">
        <label class="dms-form-item__label is-required">Đối tượng</label>
        ${DMS.render('Select', { id: 'nt-f-audience', value: d.audience, options: store.audiences, placeholder: 'Chọn đối tượng.', disabled: locked })}
        ${S().fieldErr(d._errors || {}, 'audience')}
      </div>
      <div class="dms-form-item nt-autosend">
        ${DMS.render('Checkbox', { id: 'nt-f-auto', label: 'Gửi tự động', checked: !!d.autoSend, disabled: locked })}
      </div>
      ${autoTime}
      ${extraAudience(d, locked)}
      <div class="dms-form-item dms-form-item--full">
        <label class="dms-form-item__label is-required">Tóm tắt thông báo</label>
        ${DMS.render('Textarea', { id: 'nt-f-summary', placeholder: 'Nhập vào tóm tắt thông báo.', value: d.summary || '', disabled: locked, rows: 3 })}
        ${S().fieldErr(d._errors || {}, 'summary')}
      </div>
      <div class="dms-form-item dms-form-item--full">
        <label class="dms-form-item__label is-required">Nội dung thông báo</label>
        ${locked ? '' : editorToolbar()}
        ${DMS.render('Textarea', { id: 'nt-f-content', placeholder: 'Nhập vào nội dung thông báo.', value: d.contentHtml || '', disabled: locked, rows: 8 })}
        ${S().fieldErr(d._errors || {}, 'contentHtml')}
      </div>
    </div>`;
    const footer = locked
      ? DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'nt-close' })
      : DMS.render('Button', { text: 'Lưu', type: 'primary', dataAction: 'nt-save' });
    return DMS.render('Modal', {
      id: 'notify-form-modal',
      title: formTitle(mode),
      size: 'xl',
      body,
      footer
    });
  }

  function renderPreviewModal(item) {
    return DMS.render('Modal', {
      id: 'notify-preview-modal',
      title: 'Nội dung thông báo',
      size: 'lg',
      body: `<div class="nt-preview">${item ? item.contentHtml : ''}</div>`,
      footer: DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'nt-preview-close' })
    });
  }

  async function renderNotifySetting() {
    await S().loadStore();
    const st = settingState();
    const p = S().queryParams();
    const mode = p.get('mode') || '';
    const id = p.get('id') || '';
    const preview = p.get('preview') || '';
    if ((mode === 'edit' || mode === 'view') && id) {
      const item = S().findSetting(id);
      if (item && S().getDraft()._src !== mode + id) S().loadDraft(item, mode);
    }
    if (mode === 'create' && S().getDraft()._src !== 'create') {
      S().resetDraft();
      S().getDraft()._src = 'create';
    }
    const store = S().persist();
    const filter = DMS.render('FilterPanel', {
      title: 'Tìm kiếm theo',
      fields: [
        { type: 'search', id: 'nt-q', label: 'theo Tiêu đề, Tóm tắt thông báo, nội dung thông báo', placeholder: 'theo Tiêu đề, Tóm tắt thông báo, nội dung thông báo', value: st.q },
        { type: 'select', id: 'nt-type', label: 'Loại thông báo', placeholder: 'Loại thông báo', value: st.type, options: store.types },
        { type: 'select', id: 'nt-audience', label: 'Đối tượng', placeholder: 'Đối tượng', value: st.audience, options: store.audiences },
        { type: 'select', id: 'nt-status', label: 'Trạng thái', placeholder: 'Trạng thái', value: st.status, options: S().SETTING_STATUSES }
      ]
    });
    const card = DMS.render('Card', {
      title: 'Danh sách cài đặt thông báo',
      extra: DMS.render('Button', { text: '+ Tạo mới', type: 'primary', dataAction: 'nt-create' }),
      body: `<div id="nt-setting-body">${renderSettingBody()}</div>`
    });
    let overlay = '';
    if (mode === 'create' || mode === 'edit' || mode === 'view') overlay += renderFormModal(S().getDraft(), mode);
    if (preview) {
      const item = S().findSetting(preview);
      overlay += renderPreviewModal(item);
    }
    return `<div class="display-page notify-page" data-notify-setting>
      ${S().breadcrumb('Cài Đặt Thông Báo')}
      <div class="dms-page-header"><h1 class="dms-page-header__title">Cài Đặt Thông Báo</h1></div>
      ${filter}${card}${overlay}
    </div>`;
  }

  function closeForm() {
    const d = S().getDraft();
    const go = () => { S().resetDraft(); remountSetting({ mode: '', id: '', preview: '' }); };
    if (!d._locked && d._dirty) {
      DMS.get('Dialog').confirm('Màn hình đang có dữ liệu, bạn có muốn đóng?', go);
    } else go();
  }

  function saveSetting() {
    const d = readDraftDom(S().getDraft());
    if (!validateDraft(d)) { remountSetting({ mode: d.id ? 'edit' : 'create', id: d.id || '' }); return; }
    DMS.get('Dialog').confirm('Bạn có muốn lưu thông tin không?', () => {
      const store = S().persist();
      const now = S().nowLabel();
      if (d.id) {
        const item = S().findSetting(d.id);
        Object.assign(item, {
          title: d.title, regions: d.regions, audience: d.audience, roles: d.roles,
          employeeCodes: d.employeeCodes, type: d.type, summary: d.summary,
          contentHtml: d.contentHtml, display: d.display, autoSend: d.autoSend,
          autoSendAt: d.autoSendAt, updatedAt: now, updatedBy: 'THAO999'
        });
      } else {
        store.settings.unshift({
          id: 'n' + Date.now(),
          code: S().genCode(),
          title: d.title, regions: d.regions, audience: d.audience, roles: d.roles,
          employeeCodes: d.employeeCodes, type: d.type, summary: d.summary,
          contentHtml: d.contentHtml, display: d.display, status: 'Khởi tạo',
          createdAt: now, createdBy: 'THAO999', updatedAt: now, updatedBy: '',
          autoSend: d.autoSend, autoSendAt: d.autoSendAt
        });
      }
      toast('Cập nhật thành công', 'success');
      S().resetDraft();
      remountSetting({ mode: '', id: '', preview: '' });
    });
  }

  function sendNotify(id) {
    const item = S().findSetting(id);
    if (!item) return;
    DMS.get('Dialog').confirm('Bạn có muốn gửi thông báo này không?', () => {
      item.status = 'Đang xử lý';
      item.updatedAt = S().nowLabel();
      item.updatedBy = 'THAO999';
      setTimeout(() => {
        item.status = 'Đã gửi';
        item.updatedAt = S().nowLabel();
        toast('Đã gửi thông báo', 'success');
        remountSetting({ mode: '', id: '', preview: '' });
      }, 400);
    });
  }

  function openEmpPicker() {
    const d = S().getDraft();
    const all = S().persist().employees || [];
    const selected = new Set(d.employeeCodes || []);
    const cols = [
      { key: 'pick', title: '', render: (_, row) => `<input type="checkbox" data-pick="${DMS.escape(row.code)}" ${selected.has(row.code) ? 'checked' : ''} />` },
      { key: 'code', title: 'Mã nhân viên' },
      { key: 'name', title: 'Tên nhân viên' },
      { key: 'phone', title: 'Số điện thoại' },
      { key: 'role', title: 'Chức vụ' }
    ];
    const el = DMS.get('Modal').show({
      id: 'notify-emp-modal',
      title: 'Thêm nhân viên',
      size: 'lg',
      body: `<div id="nt-emp-table">${DMS.render('Table', { columns: cols, data: all })}</div>`,
      footer: `${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'modal-close' })}
        ${DMS.render('Button', { text: 'Đồng ý', type: 'primary', dataAction: 'nt-emp-ok' })}`
    });
    el.addEventListener('click', (e) => {
      if (!e.target.closest('[data-action="nt-emp-ok"]')) return;
      d.employeeCodes = [...el.querySelectorAll('[data-pick]:checked')].map((i) => i.getAttribute('data-pick'));
      d._dirty = true;
      el.remove();
      remountSetting({ mode: d.id ? 'edit' : 'create', id: d.id || '' });
    });
  }

  /* ===== HISTORY ===== */
  function filterHistory(items, st) {
    const q = (st.q || '').trim().toLowerCase();
    const from = S().parseDmy(st.from);
    const to = S().parseDmy(st.to);
    return items.filter((it) => {
      if (q) {
        const blob = `${it.title} ${it.contentHtml}`.toLowerCase();
        if (!blob.includes(q)) return false;
      }
      if (st.notifyStatus && it.notifyStatus !== st.notifyStatus) return false;
      if (st.receiveStatus && it.receiveStatus !== st.receiveStatus) return false;
      const d = S().parseDmy(it.sentAt);
      if (from && d && d.getTime() < from.getTime()) return false;
      if (to && d && d.getTime() > to.getTime() + 86400000 - 1) return false;
      return true;
    });
  }

  function historyColumns() {
    return [
      { key: 'code', title: 'Mã thông báo', width: '160px', render: (v) => S().copyCell(v, DMS.escape(v)) },
      { key: 'title', title: 'Tiêu đề' },
      { key: 'type', title: 'Loại thông báo', render: (v) => S().typeTag(v) },
      {
        key: 'contentHtml', title: 'Nội dung thông báo',
        render: (_, row) => `<a class="dms-table__link" data-action="nh-preview-${DMS.escape(row.id)}">Xem chi tiết</a>`
      },
      { key: 'display', title: 'Kiểu hiển thị', render: (v) => S().displayTag(v) },
      { key: 'notifyStatus', title: 'Trạng thái thông báo', render: (v) => S().statusTag(v) },
      { key: 'sentAt', title: 'Ngày gửi thông báo' },
      { key: 'receiverCode', title: 'Mã nhân viên nhận thông báo', render: (v) => S().copyCell(v, DMS.escape(v)) },
      { key: 'receiverName', title: 'Tên nhân viên' },
      { key: 'receiverRole', title: 'Chức vụ' },
      { key: 'receiveStatus', title: 'Trạng thái nhận thông báo', render: (v) => S().statusTag(v) },
      { key: 'receivedAt', title: 'Ngày nhận thông báo' }
    ];
  }

  function renderHistoryBody() {
    const st = historyState();
    const filtered = filterHistory(S().persist().history || [], st);
    const total = filtered.length;
    const pages = Math.max(1, Math.ceil(total / st.pageSize) || 1);
    if (st.page > pages) st.page = pages;
    const start = (st.page - 1) * st.pageSize;
    const rows = filtered.slice(start, start + st.pageSize);
    const table = rows.length
      ? DMS.render('Table', { columns: historyColumns(), data: rows })
      : `<div class="dms-table-wrapper">${DMS.render('EmptyState', { title: 'Trống', icon: '📭' })}</div>`;
    const pag = rows.length || total
      ? DMS.render('Pagination', { current: st.page, pageSize: st.pageSize, total, unit: 'dòng' })
      : '';
    return table + pag;
  }

  function readHistoryFilters() {
    const st = historyState();
    st.q = document.getElementById('nh-q')?.value || '';
    st.notifyStatus = document.getElementById('nh-nstatus')?.value || '';
    st.receiveStatus = document.getElementById('nh-rstatus')?.value || '';
    st.from = document.getElementById('nh-from')?.value || '';
    st.to = document.getElementById('nh-to')?.value || '';
    st.page = 1;
  }

  function historyDateOk() {
    const st = historyState();
    const from = S().parseDmy(st.from);
    const to = S().parseDmy(st.to);
    if (!from || !to) {
      toast('Ngày gửi thông báo là bắt buộc.', 'warning');
      return false;
    }
    if (to.getTime() < from.getTime()) {
      toast('Đến ngày phải lớn hơn hoặc bằng Từ ngày.', 'warning');
      return false;
    }
    if (S().daysBetween(from, to) > 90) {
      toast('Khoảng thời gian tối đa 90 ngày.', 'warning');
      return false;
    }
    return true;
  }

  async function renderNotifyHistory() {
    await S().loadStore();
    const st = historyState();
    const filter = DMS.render('FilterPanel', {
      title: 'Tìm kiếm theo',
      fields: [
        { type: 'search', id: 'nh-q', label: 'Theo Tiêu đề, Tóm tắt thông báo, nội dung thông báo', placeholder: 'Theo Tiêu đề, Tóm tắt thông báo, nội dung thông báo', value: st.q },
        { type: 'select', id: 'nh-nstatus', label: 'Trạng thái thông báo', placeholder: 'Trạng thái thông báo', value: st.notifyStatus, options: S().HISTORY_NOTIFY_STATUSES },
        { type: 'select', id: 'nh-rstatus', label: 'Trạng thái nhận thông báo', placeholder: 'Trạng thái nhận thông báo', value: st.receiveStatus, options: S().RECEIVE_STATUSES },
        { type: 'date', id: 'nh-from', label: 'Từ ngày', placeholder: 'Từ ngày', value: st.from },
        { type: 'date', id: 'nh-to', label: 'Đến ngày', placeholder: 'Đến ngày', value: st.to }
      ]
    });
    const preview = S().queryParams().get('preview') || '';
    let overlay = '';
    if (preview) {
      const item = (S().persist().history || []).find((h) => h.id === preview);
      overlay = DMS.render('Modal', {
        id: 'notify-hist-preview',
        title: 'Nội dung thông báo',
        size: 'lg',
        body: `<div class="nt-preview">${item ? item.contentHtml : ''}</div>`,
        footer: DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'nh-preview-close' })
      });
    }
    const card = DMS.render('Card', {
      title: 'Danh sách lịch sử thông báo',
      body: `<div id="nh-body">${renderHistoryBody()}</div>`
    });
    return `<div class="display-page notify-page" data-notify-history>
      ${S().breadcrumb('Lịch Sử Thông Báo')}
      <div class="dms-page-header"><h1 class="dms-page-header__title">Lịch Sử Thông Báo</h1></div>
      ${filter}${card}${overlay}
    </div>`;
  }

  renderNotifySetting.onMount = function (container) {
    container.addEventListener('change', (e) => {
      if (e.target.id === 'nt-f-audience' || e.target.id === 'nt-f-auto') {
        const d = readDraftDom(S().getDraft());
        d._dirty = true;
        if (e.target.id === 'nt-f-audience') { d.roles = []; d.employeeCodes = []; }
        remountSetting({ mode: d.id ? 'edit' : 'create', id: d.id || '' });
      }
      if (e.target.closest('.dms-pagination__size select')) {
        settingState().pageSize = Number(e.target.value) || 10;
        settingState().page = 1;
        remountSetting({ mode: '', id: '', preview: '' });
      }
      if (e.target.id && e.target.id.indexOf('nt-f-') === 0) S().getDraft()._dirty = true;
    });
    container.addEventListener('click', (e) => {
      if (e.target.closest('[data-copy]')) {
        const t = e.target.closest('[data-copy]').getAttribute('data-copy');
        if (navigator.clipboard) navigator.clipboard.writeText(t);
        toast('Đã sao chép', 'success');
        return;
      }
      if (e.target.closest('[data-action="filter-search"]')) {
        readSettingFilters();
        remountSetting({ mode: '', id: '', preview: '' });
        return;
      }
      if (e.target.closest('[data-action="filter-reset"]')) {
        window.__notifySettingState = { q: '', type: '', audience: '', status: '', page: 1, pageSize: settingState().pageSize };
        remountSetting({ mode: '', id: '', preview: '' });
        return;
      }
      if (e.target.closest('[data-action="nt-create"]')) {
        S().resetDraft();
        S().getDraft()._src = 'create';
        remountSetting({ mode: 'create', id: '', preview: '' });
        return;
      }
      if (e.target.closest('[data-action="nt-close"]') || e.target.closest('#notify-form-modal [data-action="modal-close"]')) {
        closeForm();
        return;
      }
      if (e.target.closest('[data-action="nt-save"]')) { saveSetting(); return; }
      if (e.target.closest('[data-action="nt-preview-close"]')) {
        remountSetting({ mode: S().queryParams().get('mode') || '', id: S().queryParams().get('id') || '', preview: '' });
        return;
      }
      if (e.target.closest('[data-action="nt-emp-add"]')) { readDraftDom(S().getDraft()); openEmpPicker(); return; }
      const empDel = e.target.closest('[data-action^="nt-emp-del-"]');
      if (empDel) {
        const code = empDel.getAttribute('data-action').replace('nt-emp-del-', '');
        const d = S().getDraft();
        d.employeeCodes = (d.employeeCodes || []).filter((c) => c !== code);
        d._dirty = true;
        remountSetting({ mode: d.id ? 'edit' : 'create', id: d.id || '' });
        return;
      }
      const pageBtn = e.target.closest('[data-page]');
      const act = e.target.closest('[data-action]');
      if (!act) {
        if (pageBtn) { settingState().page = Number(pageBtn.getAttribute('data-page')); remountSetting({ mode: '', id: '', preview: '' }); }
        return;
      }
      const a = act.getAttribute('data-action') || '';
      const editM = a.match(/^nt-edit-(.+)$/);
      const sendM = a.match(/^nt-send-(.+)$/);
      const viewM = a.match(/^nt-view-(.+)$/);
      const prevM = a.match(/^nt-preview-(.+)$/);
      if (editM) { remountSetting({ mode: 'edit', id: editM[1], preview: '' }); return; }
      if (sendM) { sendNotify(sendM[1]); return; }
      if (viewM) { remountSetting({ mode: 'view', id: viewM[1], preview: '' }); return; }
      if (prevM) { remountSetting({ mode: S().queryParams().get('mode') || '', id: S().queryParams().get('id') || '', preview: prevM[1] }); return; }
      if (pageBtn) { settingState().page = Number(pageBtn.getAttribute('data-page')); remountSetting({ mode: '', id: '', preview: '' }); }
    });
  };

  renderNotifyHistory.onMount = function (container) {
    container.addEventListener('change', (e) => {
      if (e.target.closest('.dms-pagination__size select')) {
        historyState().pageSize = Number(e.target.value) || 10;
        historyState().page = 1;
        remountHistory();
      }
    });
    container.addEventListener('click', (e) => {
      if (e.target.closest('[data-copy]')) {
        const t = e.target.closest('[data-copy]').getAttribute('data-copy');
        if (navigator.clipboard) navigator.clipboard.writeText(t);
        toast('Đã sao chép', 'success');
        return;
      }
      if (e.target.closest('[data-action="filter-search"]')) {
        readHistoryFilters();
        if (!historyDateOk()) return;
        remountHistory();
        return;
      }
      if (e.target.closest('[data-action="filter-reset"]')) {
        const m = S().monthRange();
        window.__notifyHistoryState = { q: '', notifyStatus: '', receiveStatus: '', from: m.from, to: m.to, page: 1, pageSize: 10 };
        remountHistory();
        return;
      }
      if (e.target.closest('[data-action="nh-preview-close"]')) {
        DMSRouter.navigate('/notify/history', true);
        return;
      }
      const pageBtn = e.target.closest('[data-page]');
      const act = e.target.closest('[data-action]');
      if (!act) {
        if (pageBtn) { historyState().page = Number(pageBtn.getAttribute('data-page')); remountHistory(); }
        return;
      }
      const a = act.getAttribute('data-action') || '';
      const prevM = a.match(/^nh-preview-(.+)$/);
      if (prevM) { DMSRouter.navigate('/notify/history?preview=' + encodeURIComponent(prevM[1]), true); return; }
      if (pageBtn) { historyState().page = Number(pageBtn.getAttribute('data-page')); remountHistory(); }
    });
  };

  window.renderNotifySetting = renderNotifySetting;
  window.renderNotifyHistory = renderNotifyHistory;
})();
