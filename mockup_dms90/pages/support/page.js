/**
 * Hỗ Trợ - Xử Lý Yêu Cầu
 * UI: DEV /support/ticket
 */
(function () {
  'use strict';

  function toast(msg, type) { DMS.get('Toast').show(msg, type || 'info'); }
  function S() { return SupportShared; }

  function ticketUrl(extra) {
    const p = S().queryParams();
    const next = Object.assign({ mode: p.get('mode') || '', id: p.get('id') || '' }, extra || {});
    const q = [];
    if (next.mode) q.push('mode=' + encodeURIComponent(next.mode));
    if (next.id) q.push('id=' + encodeURIComponent(next.id));
    return '/support/ticket' + (q.length ? '?' + q.join('&') : '');
  }
  function remount(extra) { DMSRouter.navigate(ticketUrl(extra), true); }

  function listState() {
    if (!window.__supportListState) {
      window.__supportListState = {
        q: '', store: '', care: '', assignee: '', issue: '', status: '',
        from: '', to: '', page: 1, pageSize: 10
      };
    }
    return window.__supportListState;
  }

  function emptyDraft() {
    return {
      id: '', code: '', storeName: '', storeCode: '', storePhone: '', storeAddress: '',
      issueType: '', careStaffCode: '', careStaffName: '',
      reason: '', staffReason: '', content: '', attachments: [],
      status: 'Khởi tạo', note: '', declineReason: '',
      messages: [], _src: '', _dirty: false, _view: false
    };
  }
  function getDraft() {
    if (!window.__supportDraft) window.__supportDraft = emptyDraft();
    return window.__supportDraft;
  }
  function resetDraft() { window.__supportDraft = emptyDraft(); return window.__supportDraft; }
  function loadDraft(item, view) {
    const d = emptyDraft();
    Object.assign(d, S().clone(item), { _src: (view ? 'view' : 'handle') + item.id, _dirty: false, _view: !!view });
    window.__supportDraft = d;
    return d;
  }

  function filterTickets(items, st) {
    const q = (st.q || '').trim().toLowerCase();
    const from = S().parseDmy(st.from);
    const to = S().parseDmy(st.to);
    return items.filter((it) => {
      if (q && !String(it.code || '').toLowerCase().includes(q)) return false;
      if (st.store && it.storeCode !== st.store) return false;
      if (st.care && it.careStaffCode !== st.care) return false;
      if (st.assignee && it.assigneeCode !== st.assignee) return false;
      if (st.issue && it.issueType !== st.issue) return false;
      if (st.status && it.status !== st.status) return false;
      if (from || to) {
        const d = S().parseDmy(it.createdAt);
        if (!d) return false;
        if (from && d.getTime() < from.getTime()) return false;
        if (to && d.getTime() > to.getTime() + 86400000 - 1) return false;
      }
      return true;
    });
  }

  function actionBtn(action, id, enabled, type, title) {
    return DMS.render('ActionIconButton', {
      type: type, title: title, disabled: !enabled,
      dataAction: enabled ? action + '-' + id : ''
    });
  }

  function columns() {
    return [
      {
        key: 'code', title: 'Mã yêu cầu hỗ trợ', width: '160px',
        render: (v, row) => `<a class="dms-table__link" data-action="sp-view-${DMS.escape(row.id)}">${DMS.escape(v)}</a>`
      },
      { key: 'storeCode', title: 'Mã điểm bán', width: '120px' },
      { key: 'storeName', title: 'Tên điểm bán' },
      {
        key: 'careStaffCode', title: 'Nhân viên chăm sóc',
        render: (_, row) => DMS.escape(S().staffLabel(row.careStaffCode, row.careStaffName))
      },
      {
        key: 'assigneeCode', title: 'Nhân viên tiếp nhận',
        render: (_, row) => DMS.escape(S().staffLabel(row.assigneeCode, row.assigneeName))
      },
      {
        key: 'content', title: 'Nội dung',
        render: (v) => {
          const t = v || '';
          if (t.length <= 50) return DMS.escape(t);
          return `${DMS.escape(t.slice(0, 50))}… <a class="dms-table__link" data-full="${DMS.escape(t)}">Xem thêm</a>`;
        }
      },
      { key: 'issueType', title: 'Loại vấn đề', render: (v) => DMS.escape(S().issueLabel(v)) },
      { key: 'status', title: 'Trạng thái', render: (v) => S().statusTag(v) },
      { key: 'approvedAt', title: 'Ngày duyệt' },
      { key: 'approvedBy', title: 'Người duyệt' },
      { key: 'createdAt', title: 'Ngày tạo' },
      { key: 'createdBy', title: 'Người tạo' },
      { key: 'updatedAt', title: 'Ngày cập nhật' },
      { key: 'updatedBy', title: 'Người cập nhật' },
      {
        key: 'actions', title: 'Trao đổi', width: '90px', fixed: 'right',
        render: (_, row) => {
          const canChat = !S().isTerminal(row.status);
          return `<div class="dms-action-buttons">
            ${actionBtn('sp-chat', row.id, canChat, 'chat', 'Trao đổi')}
            ${actionBtn('sp-assign', row.id, canChat, 'swap', 'Chọn nhân viên tiếp nhận')}
          </div>`;
        }
      }
    ];
  }

  function renderListBody() {
    const st = listState();
    const filtered = filterTickets(S().persist().tickets || [], st);
    const total = filtered.length;
    const pages = Math.max(1, Math.ceil(total / st.pageSize) || 1);
    if (st.page > pages) st.page = pages;
    const start = (st.page - 1) * st.pageSize;
    const rows = filtered.slice(start, start + st.pageSize);
    const table = rows.length
      ? DMS.render('Table', { columns: columns(), data: rows })
      : `<div class="dms-table-wrapper">${DMS.render('EmptyState', { title: 'Trống', icon: '📭' })}</div>`;
    const pag = rows.length || total
      ? DMS.render('Pagination', { current: st.page, pageSize: st.pageSize, total, unit: 'xử lý yêu cầu' })
      : '';
    return table + pag;
  }

  function readFilters() {
    const st = listState();
    st.q = document.getElementById('sp-q')?.value || '';
    st.store = document.getElementById('sp-store')?.value || '';
    st.care = document.getElementById('sp-care')?.value || '';
    st.assignee = document.getElementById('sp-assignee')?.value || '';
    st.issue = document.getElementById('sp-issue')?.value || '';
    st.status = document.getElementById('sp-status')?.value || '';
    st.from = document.getElementById('sp-from')?.value || '';
    st.to = document.getElementById('sp-to')?.value || '';
    st.page = 1;
  }

  function readDraftDom(d) {
    if (d._view) return d;
    d.reason = document.getElementById('sp-f-reason')?.value || d.reason;
    d.status = document.getElementById('sp-f-status')?.value || d.status;
    d.note = document.getElementById('sp-f-note')?.value || d.note;
    d.declineReason = document.getElementById('sp-f-decline')?.value || d.declineReason;
    return d;
  }

  function chatHtml(d, locked) {
    const msgs = (d.messages || []).map((m) => `<div class="sp-chat__msg">
      <div class="sp-chat__meta">${DMS.escape(m.user)} · ${DMS.escape(m.time)}</div>
      <div class="sp-chat__text">${DMS.escape(m.text)}</div>
    </div>`).join('');
    const body = msgs || `<div class="sp-chat__empty">${DMS.render('EmptyState', { title: 'Trống', icon: '📭' })}</div>`;
    const composer = locked ? '' : `<div class="sp-chat__composer">
      ${DMS.render('Textarea', { id: 'sp-f-chat', placeholder: 'Nhập vào nội dung.', rows: 2 })}
      ${DMS.render('Button', { text: 'Gửi', type: 'primary', dataAction: 'sp-send-chat' })}
    </div>`;
    return `<div class="sp-chat">${body}${composer}</div>`;
  }

  function infoGrid(d) {
    return `<div class="sp-info-grid">
      <div><span class="sp-info-grid__label">Tên điểm bán</span><span>${DMS.escape(d.storeName || '')}</span></div>
      <div><span class="sp-info-grid__label">Mã điểm bán</span><span>${S().copyCell(d.storeCode, DMS.escape(d.storeCode || ''))}</span></div>
      <div><span class="sp-info-grid__label">Số điện thoại</span><span>${S().copyCell(d.storePhone, DMS.escape(d.storePhone || ''))}</span></div>
      <div><span class="sp-info-grid__label">Địa chỉ</span><span>${DMS.escape(d.storeAddress || '')}</span></div>
    </div>`;
  }

  function attachHtml(d) {
    if (d.attachments && d.attachments.length) {
      return `<ul class="sp-files">${d.attachments.map((f) => `<li>${DMS.escape(f)}</li>`).join('')}</ul>`;
    }
    return `<div class="sp-files sp-files--empty">📁 Không có hình ảnh</div>`;
  }

  function renderHandleModal(d) {
    const locked = d._view || S().isTerminal(d.status);
    const store = S().persist();
    const declineDisabled = locked || d.status !== 'Từ chối';
    const statusOpts = S().allowedStatuses(d.status);
    const form = `<div class="display-form-grid sp-form">
      <div class="dms-form-item">
        <label class="dms-form-item__label">Loại vấn đề</label>
        ${DMS.render('Select', { id: 'sp-f-issue', value: d.issueType, options: store.issueTypes, disabled: true })}
      </div>
      <div class="dms-form-item">
        <label class="dms-form-item__label">Nhân viên</label>
        ${DMS.render('Input', { value: S().staffLabel(d.careStaffCode, d.careStaffName), disabled: true })}
      </div>
      <div class="dms-form-item">
        <label class="dms-form-item__label">${locked ? '' : '* '}Lý do</label>
        ${DMS.render('Select', { id: 'sp-f-reason', value: d.reason, options: store.reasons, disabled: locked, requiredMark: !locked })}
        ${S().fieldErr(d._errors || {}, 'reason')}
      </div>
      <div class="dms-form-item dms-form-item--full">
        <label class="dms-form-item__label">Lý do nhân viên nhập</label>
        ${DMS.render('Textarea', { value: d.staffReason || '', disabled: true, rows: 3 })}
      </div>
      <div class="dms-form-item dms-form-item--full">
        <label class="dms-form-item__label">Nội dung</label>
        ${DMS.render('Textarea', { value: d.content || '', disabled: true, rows: 3 })}
      </div>
      <div class="dms-form-item dms-form-item--full">
        <label class="dms-form-item__label">Tập tin đính kèm</label>
        ${attachHtml(d)}
      </div>
      <div class="dms-form-item">
        <label class="dms-form-item__label">${locked ? '' : '* '}Trạng thái</label>
        ${DMS.render('Select', { id: 'sp-f-status', value: d.status, options: statusOpts, disabled: locked })}
        ${S().fieldErr(d._errors || {}, 'status')}
      </div>
      <div class="dms-form-item">
        <label class="dms-form-item__label">Ghi chú xét duyệt</label>
        ${DMS.render('Textarea', { id: 'sp-f-note', placeholder: 'Nhập ghi chú xét duyệt.', value: d.note || '', disabled: locked, rows: 3 })}
      </div>
      <div class="dms-form-item">
        <label class="dms-form-item__label">${d.status === 'Từ chối' && !locked ? '* ' : ''}Lý do từ chối duyệt</label>
        ${DMS.render('Select', {
          id: 'sp-f-decline',
          value: d.declineReason,
          options: store.declineReasons,
          placeholder: 'Chọn lý do từ chối duyệt.',
          disabled: declineDisabled
        })}
        ${S().fieldErr(d._errors || {}, 'declineReason')}
      </div>
    </div>
    ${chatHtml(d, locked)}`;

    const footer = locked
      ? DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'sp-close' })
      : `${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'sp-close' })}
         ${DMS.render('Button', { text: 'Lưu', type: 'primary', dataAction: 'sp-save' })}`;

    return DMS.render('Modal', {
      id: 'support-handle-modal',
      title: 'Xử lý yêu cầu',
      size: 'xl',
      body: `${infoGrid(d)}${form}`,
      footer
    });
  }

  async function renderSupportTicket() {
    const store = await S().loadStore();
    const st = listState();
    const mode = S().queryParams().get('mode') || '';
    const id = S().queryParams().get('id') || '';
    if ((mode === 'handle' || mode === 'view') && id) {
      const item = S().findTicket(id);
      if (item && getDraft()._src !== mode + id) loadDraft(item, mode === 'view');
    }
    const filter = DMS.render('FilterPanel', {
      title: 'Tìm kiếm theo',
      fields: [
        { type: 'search', id: 'sp-q', label: 'Tìm theo', placeholder: 'Tìm kiếm theo mã yêu cầu hỗ trợ', value: st.q },
        { type: 'select', id: 'sp-store', label: 'Mã điểm bán', placeholder: 'Mã điểm bán', value: st.store, options: S().storeOptions() },
        { type: 'select', id: 'sp-care', label: 'Nhân viên chăm sóc', placeholder: 'Nhân viên chăm sóc', value: st.care, options: S().careOptions() },
        { type: 'select', id: 'sp-assignee', label: 'Nhân viên tiếp nhận', placeholder: 'Nhân viên tiếp nhận', value: st.assignee, options: S().assigneeOptions() },
        { type: 'select', id: 'sp-issue', label: 'Loại vấn đề', placeholder: 'Loại vấn đề', value: st.issue, options: store.issueTypes },
        { type: 'select', id: 'sp-status', label: 'Trạng thái', placeholder: 'Trạng thái', value: st.status, options: S().STATUSES },
        { type: 'date', id: 'sp-from', label: 'Từ ngày', placeholder: 'Từ ngày', value: st.from },
        { type: 'date', id: 'sp-to', label: 'Đến ngày', placeholder: 'Đến ngày', value: st.to }
      ]
    });
    const card = DMS.render('Card', {
      title: 'Danh sách xử lý yêu cầu',
      extra: DMS.render('Button', { text: 'Export Excel', type: 'primary', dataAction: 'sp-export' }),
      body: `<div id="sp-list-body">${renderListBody()}</div>`
    });
    let overlay = '';
    if ((mode === 'handle' || mode === 'view') && id && S().findTicket(id)) {
      overlay = renderHandleModal(getDraft());
    }
    return `<div class="display-page support-page" data-support-ticket>
      ${S().breadcrumb()}
      <div class="dms-page-header"><h1 class="dms-page-header__title">Hỗ Trợ - Xử Lý Yêu Cầu</h1></div>
      ${filter}${card}${overlay}
    </div>`;
  }

  function closeHandle() {
    const d = getDraft();
    const go = () => { resetDraft(); remount({ mode: '', id: '' }); };
    if (!d._view && d._dirty) {
      DMS.get('Dialog').confirm('Đang có dữ liệu trên màn hình, bạn có muốn Hủy?', go);
    } else go();
  }

  function validate(d) {
    const err = {};
    if (!d.reason) err.reason = 'Lý do là bắt buộc!';
    if (!d.status) err.status = 'Trạng thái là bắt buộc!';
    if (d.status === 'Từ chối' && !d.declineReason) err.declineReason = 'Lý do từ chối duyệt là bắt buộc!';
    d._errors = err;
    return !Object.keys(err).length;
  }

  function saveTicket() {
    const d = readDraftDom(getDraft());
    if (!validate(d)) { remount({ mode: 'handle', id: d.id }); return; }
    const item = S().findTicket(d.id);
    if (!item) return;
    const prev = item.status;
    item.reason = d.reason;
    item.note = d.note;
    item.declineReason = d.status === 'Từ chối' ? d.declineReason : '';
    item.status = d.status;
    item.messages = d.messages || [];
    item.updatedAt = S().nowLabel();
    item.updatedBy = 'THAO999';
    if (S().isTerminal(d.status) && prev !== d.status) {
      item.approvedAt = item.updatedAt;
      item.approvedBy = 'THAO999';
    }
    toast('Cập nhật thành công', 'success');
    resetDraft();
    remount({ mode: '', id: '' });
  }

  function openAssign(id) {
    const item = S().findTicket(id);
    if (!item || S().isTerminal(item.status)) return;
    const el = DMS.get('Modal').show({
      id: 'support-assign-modal',
      title: 'Chọn nhân viên tiếp nhận',
      size: 'md',
      body: `<div class="dms-form-item">
        <label class="dms-form-item__label">Nhân viên tiếp nhận</label>
        ${DMS.render('Select', { id: 'sp-assign-user', value: item.assigneeCode, options: S().assigneeOptions(), placeholder: 'Chọn nhân viên' })}
      </div>`,
      footer: `${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'modal-close' })}
        ${DMS.render('Button', { text: 'Đồng ý', type: 'primary', dataAction: 'sp-assign-ok' })}`
    });
    el.addEventListener('click', (e) => {
      if (!e.target.closest('[data-action="sp-assign-ok"]')) return;
      const code = el.querySelector('#sp-assign-user')?.value || '';
      const opt = S().assigneeOptions().find((o) => o.value === code);
      item.assigneeCode = code;
      item.assigneeName = opt ? String(opt.label).replace(code + ' - ', '') : '';
      item.updatedAt = S().nowLabel();
      item.updatedBy = 'THAO999';
      el.remove();
      toast('Đã chọn nhân viên tiếp nhận', 'success');
      remount({ mode: '', id: '' });
    });
  }

  renderSupportTicket.onMount = function (container) {
    container.addEventListener('change', (e) => {
      if (e.target.id === 'sp-f-status' || e.target.id === 'sp-f-reason' || e.target.id === 'sp-f-note' || e.target.id === 'sp-f-decline') {
        const d = getDraft();
        readDraftDom(d);
        d._dirty = true;
        if (e.target.id === 'sp-f-status') remount({ mode: d._view ? 'view' : 'handle', id: d.id });
      }
      if (e.target.closest('.dms-pagination__size select')) {
        listState().pageSize = Number(e.target.value) || 10;
        listState().page = 1;
        remount({ mode: '', id: '' });
      }
    });
    container.addEventListener('click', (e) => {
      if (e.target.closest('[data-copy]')) {
        const t = e.target.closest('[data-copy]').getAttribute('data-copy');
        if (navigator.clipboard) navigator.clipboard.writeText(t);
        toast('Đã sao chép', 'success');
        return;
      }
      const more = e.target.closest('[data-full]');
      if (more) {
        DMS.get('Modal').show({
          title: 'Nội dung',
          size: 'md',
          body: `<p>${DMS.escape(more.getAttribute('data-full'))}</p>`,
          footer: DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'modal-close' })
        });
        return;
      }
      if (e.target.closest('[data-action="filter-search"]')) {
        readFilters();
        remount({ mode: '', id: '' });
        return;
      }
      if (e.target.closest('[data-action="filter-reset"]')) {
        window.__supportListState = { q: '', store: '', care: '', assignee: '', issue: '', status: '', from: '', to: '', page: 1, pageSize: listState().pageSize };
        remount({ mode: '', id: '' });
        return;
      }
      if (e.target.closest('[data-action="sp-export"]')) {
        toast('Đã xuất file Excel (mock)', 'success');
        return;
      }
      if (e.target.closest('[data-action="sp-close"]') || e.target.closest('#support-handle-modal [data-action="modal-close"]')) {
        closeHandle();
        return;
      }
      if (e.target.closest('[data-action="sp-save"]')) {
        saveTicket();
        return;
      }
      if (e.target.closest('[data-action="sp-send-chat"]')) {
        const d = getDraft();
        const text = (document.getElementById('sp-f-chat')?.value || '').trim();
        if (!text) { toast('Nhập vào nội dung.', 'warning'); return; }
        d.messages = d.messages || [];
        d.messages.push({ user: 'THAO999', time: S().nowLabel(), text });
        d._dirty = true;
        const item = S().findTicket(d.id);
        if (item) item.messages = d.messages;
        remount({ mode: 'handle', id: d.id });
        return;
      }
      const pageBtn = e.target.closest('[data-page]');
      const act = e.target.closest('[data-action]');
      if (!act) {
        if (pageBtn) { listState().page = Number(pageBtn.getAttribute('data-page')); remount({ mode: '', id: '' }); }
        return;
      }
      const a = act.getAttribute('data-action') || '';
      const chatM = a.match(/^sp-chat-(.+)$/);
      const viewM = a.match(/^sp-view-(.+)$/);
      const asgM = a.match(/^sp-assign-(.+)$/);
      if (chatM) { remount({ mode: 'handle', id: chatM[1] }); return; }
      if (viewM) { remount({ mode: 'view', id: viewM[1] }); return; }
      if (asgM) { openAssign(asgM[1]); return; }
      if (pageBtn) { listState().page = Number(pageBtn.getAttribute('data-page')); remount({ mode: '', id: '' }); }
    });
  };

  window.renderSupportTicket = renderSupportTicket;
})();
