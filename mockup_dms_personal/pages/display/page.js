/**
 * Quản Lý Trưng Bày
 * Batch 1: Overview | 2-3: CTTB list/detail/create | 4: Đăng ký | 5: Tiến trình
 */
(function () {
  'use strict';

  function toast(msg, type) { DMS.get('Toast').show(msg, type || 'info'); }
  function now() { return DisplayShared.nowLabel(); }

  function eventUrl(extra) {
    const p = DisplayShared.queryParams();
    const next = Object.assign({
      mode: p.get('mode') || '',
      id: p.get('id') || '',
      content: p.get('content') || ''
    }, extra || {});
    const q = [];
    if (next.mode) q.push('mode=' + encodeURIComponent(next.mode));
    if (next.id) q.push('id=' + encodeURIComponent(next.id));
    if (next.content) q.push('content=' + encodeURIComponent(next.content));
    return '/display/event' + (q.length ? '?' + q.join('&') : '');
  }
  function remountEvent(extra) { DMSRouter.navigate(eventUrl(extra), true); }

  function last7() {
    const r = DisplayShared.lastNDays(7, new Date());
    return { from: DisplayShared.toDmy(r.from), to: DisplayShared.toDmy(r.to) };
  }
  function last30() {
    const r = DisplayShared.lastNDays(30, new Date());
    return { from: DisplayShared.toDmy(r.from), to: DisplayShared.toDmy(r.to) };
  }

  function eventState() {
    if (!window.__displayEventState) {
      const d = last7();
      window.__displayEventState = { q: '', status: '', registerMode: '', rewardMode: '', auto: '', type: '', from: d.from, to: d.to, page: 1, pageSize: 10 };
    }
    return window.__displayEventState;
  }
  function regState() {
    if (!window.__displayRegState) {
      const d = last7();
      window.__displayRegState = { q: '', dist: '', route: '', programId: '', status: '', from: d.from, to: d.to, approveFrom: '', approveTo: '', page: 1, pageSize: 10 };
    }
    return window.__displayRegState;
  }
  function processState() {
    if (!window.__displayProcessState) {
      const d = last30();
      window.__displayProcessState = { tab: 'period', q: '', route: '', programId: '', status: '', result: '', rewardMode: '', stageStatus: '', from: d.from, to: d.to, page: 1, pageSize: 10 };
    }
    return window.__displayProcessState;
  }

  function actionBtn(action, id, enabled, type, title) {
    return DMS.render('ActionIconButton', {
      type: type, title: title, disabled: !enabled,
      dataAction: enabled ? action + '-' + id : ''
    });
  }

  /* ========== OVERVIEW ========== */
  function overviewState() {
    if (!window.__displayOverviewState) window.__displayOverviewState = { preset: 'monthly', from: '', to: '' };
    return window.__displayOverviewState;
  }
  function resolveRange(st, today) {
    if (st.preset) return DisplayShared.presetRange(st.preset, today);
    const from = DisplayShared.parseDmy(st.from);
    const to = DisplayShared.parseDmy(st.to);
    if (from && to) return { from, to };
    return DisplayShared.presetRange('monthly', today);
  }
  function renderPreset(st) {
    const opts = [
      { value: 'today', label: 'Hôm nay' },
      { value: 'weekly', label: 'Tuần này' },
      { value: 'monthly', label: 'Tháng này' }
    ];
    return `<div class="dms-radio-btns" data-display-preset>
      ${opts.map((o) => `<label class="dms-radio-btns__item ${st.preset === o.value ? 'is-checked' : ''}">
        <input type="radio" name="display-overview-preset" value="${o.value}" ${st.preset === o.value ? 'checked' : ''} />
        ${DMS.escape(o.label)}
      </label>`).join('')}
    </div>`;
  }
  function renderChartCard(meta, items) {
    const giftCls = meta.number === 4 ? ' is-gift' : '';
    return `<div class="dms-card display-chart-card">
      <div class="dms-card__header"><div class="display-chart-card__head">
        <span class="display-chart-card__avatar${giftCls}" style="background:${meta.avatar}">${meta.icon}</span>
        <h3 class="display-chart-card__title">${DMS.escape(meta.title)}</h3>
        <span class="display-chart-card__num">${meta.number}</span>
      </div></div>
      <div class="dms-card__body">
        ${DMS.render('DonutChart', { id: meta.id, items, totalLabel: 'Tổng', emptyText: 'Không có dữ liệu' })}
        <p class="display-chart-card__caption">${DMS.escape(meta.caption)}</p>
      </div>
    </div>`;
  }
  async function renderDisplayOverview() {
    const store = await DisplayShared.loadStore();
    const st = overviewState();
    const charts = DisplayShared.buildOverviewCharts(store, resolveRange(st, new Date()));
    const byId = {};
    charts.forEach((c) => { byId[c.id] = c.items; });
    const cards = DisplayShared.CHART_META.map((meta) => renderChartCard(meta, byId[meta.id] || [])).join('');
    return `<div class="display-page" data-display-overview>
      ${DisplayShared.breadcrumb('Tổng Quan Chương Trình Trưng Bày')}
      <div class="dms-page-header"><h1 class="dms-page-header__title">Tổng Quan Chương Trình Trưng Bày</h1></div>
      <p class="display-page__desc">Giúp người dùng theo dõi tình hình hoạt động của các chương trình trưng bày theo thời gian (hôm nay, tuần này, tháng này, thời gian tùy chọn)</p>
      <div class="display-overview-filter">
        ${renderPreset(st)}
        ${DMS.render('DatePicker', { id: 'display-overview-from', placeholder: 'Ngày bắt đầu', value: st.from })}
        ${DMS.render('DatePicker', { id: 'display-overview-to', placeholder: 'Ngày kết thúc', value: st.to })}
      </div>
      <div class="display-chart-grid">${cards}</div>
    </div>`;
  }
  async function refreshOverview(container) {
    const store = await DisplayShared.loadStore();
    const st = overviewState();
    DisplayShared.buildOverviewCharts(store, resolveRange(st, new Date())).forEach((c) => {
      DMS.get('DonutChart').update(container.querySelector(`[data-donut-chart="${c.id}"]`), c.items);
    });
    container.querySelectorAll('[data-display-preset] .dms-radio-btns__item').forEach((lab) => {
      const val = lab.querySelector('input')?.value;
      lab.classList.toggle('is-checked', st.preset === val);
      const input = lab.querySelector('input');
      if (input) input.checked = st.preset === val;
    });
  }
  renderDisplayOverview.onMount = function (container) {
    DMS.get('DonutChart').bindAll(container);
    container.addEventListener('click', (e) => {
      const item = e.target.closest('[data-display-preset] .dms-radio-btns__item');
      if (!item) return;
      const val = item.querySelector('input')?.value;
      if (!val) return;
      const st = overviewState();
      st.preset = val; st.from = ''; st.to = '';
      const fromInput = container.querySelector('#display-overview-from');
      const toInput = container.querySelector('#display-overview-to');
      if (fromInput) fromInput.value = '';
      if (toInput) toInput.value = '';
      refreshOverview(container);
    });
    container.addEventListener('change', (e) => {
      if (!e.target.closest('#display-overview-from, #display-overview-to')) return;
      const fromInput = container.querySelector('#display-overview-from');
      const toInput = container.querySelector('#display-overview-to');
      const fromVal = fromInput?.value || '';
      const toVal = toInput?.value || '';
      const from = DisplayShared.parseDmy(fromVal);
      const to = DisplayShared.parseDmy(toVal);
      const st = overviewState();
      if ((from && !DisplayShared.yearAllowed(from)) || (to && !DisplayShared.yearAllowed(to))) {
        if (fromInput) fromInput.value = st.from || '';
        if (toInput) toInput.value = st.to || '';
        return;
      }
      if (!from || !to) return;
      st.preset = ''; st.from = fromVal; st.to = toVal;
      refreshOverview(container);
    });
  };

  /* ========== EVENT LIST ========== */
  function filterPrograms(items, st) {
    const q = (st.q || '').trim().toLowerCase();
    const from = DisplayShared.parseDmy(st.from);
    const to = DisplayShared.parseDmy(st.to);
    return items.filter((it) => {
      if (q && !(String(it.code || '').toLowerCase().includes(q) || String(it.name || '').toLowerCase().includes(q))) return false;
      if (st.status && it.status !== st.status) return false;
      if (st.registerMode && it.registerMode !== st.registerMode) return false;
      if (st.rewardMode && it.rewardMode !== st.rewardMode) return false;
      if (st.type && it.type !== st.type) return false;
      if (st.auto === 'true' && !it.autoApprove) return false;
      if (st.auto === 'false' && it.autoApprove) return false;
      if (from && to && !DisplayShared.overlaps(DisplayShared.parseDmy(it.startDate), DisplayShared.parseDmy(it.endDate), from, to)) return false;
      return true;
    });
  }
  function eventColumns() {
    return [
      { key: 'stt', title: 'STT', width: '56px', render: (v) => v },
      { key: 'image', title: 'Ảnh', render: () => '<span class="dms-text-secondary">Trống</span>' },
      { key: 'code', title: 'Mã chương trình', render: (val) => DisplayShared.copyCell(val, DMS.escape(val)) },
      { key: 'name', title: 'Tên chương trình', render: (val, row) => `<a class="dms-table__link" data-route="${eventUrl({ mode: '', id: row.id, content: '' })}">${DMS.escape(val)}</a>` },
      { key: 'content', title: 'Nội dung chương trình', render: (_, row) => `<a class="dms-table__link" data-route="${eventUrl({ mode: '', id: '', content: row.id })}">Chi tiết lịch sử</a>` },
      { key: 'priority', title: 'Độ ưu tiên' },
      { key: 'status', title: 'Trạng thái', render: (val) => DisplayShared.tagOf(DisplayShared.PROGRAM_STATUSES, val) },
      { key: 'reason', title: 'Lý do', render: (val) => DMS.escape(val || '') },
      { key: 'type', title: 'Loại chương trình', render: (val) => DisplayShared.catalogLabel(DisplayShared.TYPES, val) },
      { key: 'contractRequired', title: 'Yêu cầu hợp đồng', render: (val) => DisplayShared.catalogLabel(DisplayShared.CONTRACTS, val) },
      { key: 'contractTemplate', title: 'Mẫu hợp đồng', render: (val) => val ? `<a class="dms-table__link" href="#">${DMS.escape(val)}</a>` : '' },
      { key: 'registerMode', title: 'Hình thức đăng ký', render: (val) => DisplayShared.catalogLabel(DisplayShared.REGISTER_MODES, val) },
      { key: 'rewardMode', title: 'Hình thức trả thưởng', render: (val) => DisplayShared.catalogLabel(DisplayShared.REWARD_MODES, val) },
      { key: 'autoApprove', title: 'Tự động duyệt', render: (val) => val ? 'Có' : 'Không' },
      { key: 'startDate', title: 'Ngày bắt đầu' },
      { key: 'endDate', title: 'Ngày kết thúc' },
      { key: 'createdAt', title: 'Ngày tạo' },
      { key: 'createdBy', title: 'Người tạo' },
      { key: 'updatedAt', title: 'Ngày cập nhật' },
      { key: 'updatedBy', title: 'Người cập nhật' },
      {
        key: 'actions', title: 'Tùy chỉnh', fixed: 'right',
        render: (_, row) => {
          const a = DisplayShared.programActions(row);
          return `<div class="dms-action-buttons">
            ${actionBtn('d-view', row.id, a.view, 'view', 'Xem')}
            ${actionBtn('d-edit', row.id, a.edit, 'edit', 'Điều chỉnh')}
            ${actionBtn('d-copy', row.id, a.copy, 'duplicate', 'Sao chép')}
            ${actionBtn('d-tool', row.id, a.approve || a.stop, a.approve ? 'approve' : 'stop', a.approve ? 'Duyệt / Từ chối' : 'Ngưng hoạt động')}
          </div>`;
        }
      }
    ];
  }
  function renderEventListBody(store) {
    const st = eventState();
    const filtered = filterPrograms(store.programs || [], st);
    const total = filtered.length;
    const pages = Math.max(1, Math.ceil(total / st.pageSize) || 1);
    if (st.page > pages) st.page = pages;
    const start = (st.page - 1) * st.pageSize;
    const rows = filtered.slice(start, start + st.pageSize).map((it, i) => Object.assign({}, it, { stt: start + i + 1 }));
    const table = rows.length
      ? DMS.render('Table', { columns: eventColumns(), data: rows })
      : `<div class="dms-table-wrapper">${DMS.render('EmptyState', { title: 'Trống' })}</div>`;
    return table + DMS.render('Pagination', { current: st.page, pageSize: st.pageSize, total, unit: 'chương trình trưng bày' });
  }
  function readEventFilters() {
    const st = eventState();
    st.q = document.getElementById('d-ev-q')?.value || '';
    st.status = document.getElementById('d-ev-status')?.value || '';
    st.registerMode = document.getElementById('d-ev-reg')?.value || '';
    st.rewardMode = document.getElementById('d-ev-reward')?.value || '';
    st.auto = document.getElementById('d-ev-auto')?.value || '';
    st.type = document.getElementById('d-ev-type')?.value || '';
    st.from = document.getElementById('d-ev-from')?.value || '';
    st.to = document.getElementById('d-ev-to')?.value || '';
    st.page = 1;
  }
  async function renderDisplayEvent() {
    const store = await DisplayShared.loadStore();
    const params = DisplayShared.queryParams();
    const mode = params.get('mode') || '';
    const id = params.get('id') || '';
    const contentId = params.get('content') || '';
    const st = eventState();
    if ((mode === 'edit' || mode === 'copy') && id) {
      const item = DisplayShared.findProgram(id);
      if (item && DisplayShared.getDraft()._src !== mode + id) {
        DisplayShared.loadDraft(item, mode);
        DisplayShared.getDraft()._src = mode + id;
      }
    }
    if (mode === 'create' && DisplayShared.getDraft()._src !== 'create') {
      DisplayShared.resetDraft();
      DisplayShared.getDraft()._src = 'create';
    }
    const filter = DMS.render('FilterPanel', {
      fields: [
        { type: 'search', id: 'd-ev-q', label: 'Chương trình', placeholder: 'Mã | Tên', value: st.q },
        { type: 'select', id: 'd-ev-status', label: 'Trạng thái', placeholder: 'Chọn trạng thái', value: st.status, options: DisplayShared.PROGRAM_STATUSES.map((s) => ({ value: s.key, label: s.label })) },
        { type: 'select', id: 'd-ev-reg', label: 'Hình thức đăng ký', placeholder: 'Chọn hình thức đăng ký', value: st.registerMode, options: DisplayShared.REGISTER_MODES },
        { type: 'select', id: 'd-ev-reward', label: 'Hình thức trả thưởng', placeholder: 'Chọn hình thức trả thưởng', value: st.rewardMode, options: DisplayShared.REWARD_MODES },
        { type: 'date', id: 'd-ev-from', label: 'Thời gian từ', placeholder: 'Từ ngày', value: st.from },
        { type: 'date', id: 'd-ev-to', label: 'Thời gian đến', placeholder: 'Đến ngày', value: st.to },
        { type: 'select', id: 'd-ev-auto', label: 'Tự động duyệt', placeholder: 'Tự động duyệt', value: st.auto, options: DisplayShared.YES_NO },
        { type: 'select', id: 'd-ev-type', label: 'Loại chương trình', placeholder: 'Chọn loại chương trình', value: st.type, options: DisplayShared.TYPES }
      ]
    });
    const card = DMS.render('Card', {
      title: 'Danh sách chương trình trưng bày',
      extra: `${DMS.render('Button', { text: 'Export Excel', type: 'default', dataAction: 'd-export-event' })}
        ${DMS.render('Button', { text: 'Tạo mới', type: 'primary', dataAction: 'd-create' })}`,
      body: `<div id="d-event-body">${renderEventListBody(store)}</div>`
    });
    let overlay = '';
    if (mode === 'create' || mode === 'edit' || mode === 'copy' || (id && !contentId && !mode)) {
      const viewMode = (id && !mode) ? 'view' : mode;
      if (viewMode === 'view') {
        const item = DisplayShared.findProgram(id);
        if (item && DisplayShared.getDraft()._src !== 'view' + id) {
          DisplayShared.loadDraft(item, 'edit');
          DisplayShared.getDraft()._src = 'view' + id;
          DisplayShared.getDraft().step = 1;
        }
      }
      overlay += DisplayShared.renderWizard(
        DisplayShared.getDraft(),
        viewMode === 'view' ? 'view' : (mode === 'edit' ? 'edit' : 'create'),
        DisplayShared.getDraft()._errors || {}
      );
    }
    if (contentId) {
      const item = DisplayShared.findProgram(contentId);
      overlay += DMS.render('Modal', {
        id: 'display-content-modal',
        title: 'Nội dung chương trình',
        size: 'md',
        body: `<div class="display-content-preview">${item ? (item.content || DMS.escape(item.name)) : 'Trống'}</div>`,
        footer: DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'd-close-content' })
      });
    }
    return `<div class="display-page" data-display-event>
      ${DisplayShared.breadcrumb('Chương Trình Trưng Bày')}
      <h1 class="dms-page-header__title dms-mt-md">Chương Trình Trưng Bày</h1>
      ${filter}${card}${overlay}
    </div>`;
  }
  function closeWizardIfDirty() {
    const d = DisplayShared.getDraft();
    const go = () => { DisplayShared.resetDraft(); remountEvent({ mode: '', id: '', content: '' }); };
    if (DisplayShared.draftIsDirty(d)) {
      DMS.get('Dialog').confirm('Màn hình đã có dữ liệu, bạn có muốn thoát?', go);
    } else go();
  }
  function bindWizard(container) {
    const modal = container.querySelector('#display-wizard-modal');
    if (!modal) return;
    modal.addEventListener('click', (e) => {
      if (e.target.closest('[data-action="modal-close"]') || e.target.id === 'display-wizard-modal') {
        const params = DisplayShared.queryParams();
        if (params.get('mode')) closeWizardIfDirty();
        else remountEvent({ mode: '', id: '', content: '' });
        return;
      }
      const d = DisplayShared.getDraft();
      const params = DisplayShared.queryParams();
      const mode = params.get('id') && !params.get('mode') ? 'view' : (params.get('mode') === 'edit' ? 'edit' : 'create');
      if (e.target.closest('[data-action="d-target-add"]')) {
        DisplayShared.readDraftFromDom(d);
        d.targets.push({ type: '', values: [] });
        remountEvent();
        return;
      }
      const del = e.target.closest('[data-action^="d-target-del-"]');
      if (del) {
        DisplayShared.readDraftFromDom(d);
        d.targets.splice(Number(del.getAttribute('data-action').split('-').pop()), 1);
        remountEvent();
        return;
      }
      if (e.target.closest('[data-action="d-gen-periods"]')) {
        DisplayShared.readDraftFromDom(d);
        DisplayShared.genPeriods(d);
        remountEvent();
        return;
      }
      if (e.target.closest('[data-action="d-quota-add"]')) {
        DisplayShared.readDraftFromDom(d);
        d.quotas.push({ maxSlots: '1', imageReq: '1', reviewReq: '1', faces: '1', rewardType: 'CASH', cashAmount: '' });
        remountEvent();
        return;
      }
      if (e.target.closest('[data-action="d-back"]')) {
        DisplayShared.readDraftFromDom(d);
        d.step = Math.max(1, (d.step || 1) - 1);
        remountEvent();
        return;
      }
      const sw = e.target.closest('.dms-switch');
      if (sw && !sw.disabled) {
        sw.classList.toggle('is-checked');
        sw.setAttribute('aria-checked', sw.classList.contains('is-checked') ? 'true' : 'false');
        return;
      }
      if (e.target.closest('[data-action="d-next"]')) {
        DisplayShared.readDraftFromDom(d);
        if (mode !== 'view') {
          d._errors = DisplayShared.validateStep(d, d.step || 1);
          if (Object.keys(d._errors).length) {
            remountEvent();
            return;
          }
        }
        d._errors = {};
        d.step = Math.min(4, (d.step || 1) + 1);
        remountEvent();
        return;
      }
      if (e.target.closest('[data-action="d-save"]')) {
        DisplayShared.readDraftFromDom(d);
        d._errors = Object.assign(
          {},
          DisplayShared.validateStep(d, 1),
          DisplayShared.validateStep(d, 2),
          DisplayShared.validateStep(d, 3),
          DisplayShared.validateStep(d, 4)
        );
        if (Object.keys(d._errors).length) {
          toast('Có lỗi xảy ra ở các ô nhập, vui lòng kiểm tra lại', 'error');
          remountEvent();
          return;
        }
        d._errors = {};
        DMS.get('Dialog').confirm('Bạn chắc chắn thao tác này không?', () => {
          DisplayShared.saveProgram(d, params.get('mode') === 'edit' ? 'edit' : 'create');
          DisplayShared.resetDraft();
          toast('Lưu thành công', 'success');
          remountEvent({ mode: '', id: '', content: '' });
        });
      }
    });
    modal.addEventListener('change', (e) => {
      const fid = e.target.id || '';
      if (!fid || !(fid === 'd-type' || fid === 'd-contract' || fid === 'd-reward-mode' || fid.startsWith('d-quota-type-'))) return;
      const d = DisplayShared.getDraft();
      DisplayShared.readDraftFromDom(d);
      if (d.type === 'SALEMAN') d.contractRequired = 'NONE';
      remountEvent();
    });
  }
  renderDisplayEvent.onMount = function (container) {
    bindWizard(container);
    container.addEventListener('click', (e) => {
      if (e.target.closest('[data-copy]')) {
        const t = e.target.closest('[data-copy]').getAttribute('data-copy');
        if (navigator.clipboard) navigator.clipboard.writeText(t);
        toast('Đã sao chép', 'success');
        return;
      }
      if (e.target.closest('[data-action="filter-search"]')) {
        readEventFilters();
        remountEvent({ mode: '', id: '', content: '' });
        return;
      }
      if (e.target.closest('[data-action="filter-reset"]')) {
        const d = last7();
        window.__displayEventState = { q: '', status: '', registerMode: '', rewardMode: '', auto: '', type: '', from: d.from, to: d.to, page: 1, pageSize: 10 };
        remountEvent({ mode: '', id: '', content: '' });
        return;
      }
      if (e.target.closest('[data-action="d-create"]')) {
        DisplayShared.resetDraft();
        DisplayShared.getDraft()._src = 'create';
        remountEvent({ mode: 'create', id: '', content: '' });
        return;
      }
      if (e.target.closest('[data-action="d-export-event"]')) { toast('Đã xuất Excel (prototype)', 'success'); return; }
      if (e.target.closest('#display-content-modal [data-action="modal-close"], [data-action="d-close-content"]') || e.target.id === 'display-content-modal') {
        remountEvent({ mode: '', id: '', content: '' });
        return;
      }
      const act = e.target.closest('[data-action]');
      if (!act) {
        const pageBtn = e.target.closest('[data-page]');
        if (pageBtn) { eventState().page = Number(pageBtn.getAttribute('data-page')); remountEvent({ mode: '', id: '', content: '' }); }
        return;
      }
      const a = act.getAttribute('data-action') || '';
      const viewM = a.match(/^d-view-(.+)$/);
      const editM = a.match(/^d-edit-(.+)$/);
      const copyM = a.match(/^d-copy-(.+)$/);
      const toolM = a.match(/^d-tool-(.+)$/);
      if (viewM) { remountEvent({ mode: '', id: viewM[1], content: '' }); return; }
      if (editM) { remountEvent({ mode: 'edit', id: editM[1], content: '' }); return; }
      if (copyM) { remountEvent({ mode: 'copy', id: copyM[1], content: '' }); return; }
      if (toolM) {
        const p = DisplayShared.findProgram(toolM[1]);
        if (!p) return;
        const acts = DisplayShared.programActions(p);
        if (acts.approve) {
          const el = DMS.get('Modal').show({
            id: 'd-approve-modal', title: 'Duyệt chương trình trưng bày', size: 'sm',
            body: `<p>Chọn thao tác cho <strong>${DMS.escape(p.code)}</strong></p>
              ${DMS.render('Radio', { name: 'd-appr', value: 'ok', checked: true, label: 'Duyệt' })}
              ${DMS.render('Radio', { name: 'd-appr', value: 'no', label: 'Từ chối' })}
              <div id="d-appr-reason" hidden>${DMS.render('Input', { id: 'd-appr-reason-val', label: 'Lý do từ chối', placeholder: 'Nhập lý do', requiredMark: true })}
                <div class="dms-form-item__error" id="err-d-appr-reason" hidden>Lý do từ chối là bắt buộc!</div></div>`,
            footer: `${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'modal-close' })}
              ${DMS.render('Button', { text: 'Đồng ý', type: 'primary', dataAction: 'd-appr-ok' })}`
          });
          el.addEventListener('change', () => {
            const no = el.querySelector('input[name="d-appr"][value="no"]')?.checked;
            const box = el.querySelector('#d-appr-reason');
            if (box) box.hidden = !no;
          });
          el.addEventListener('click', (ev) => {
            if (!ev.target.closest('[data-action="d-appr-ok"]')) return;
            const no = el.querySelector('input[name="d-appr"][value="no"]')?.checked;
            if (no) {
              const reason = (el.querySelector('#d-appr-reason-val')?.value || '').trim().slice(0, 100);
              if (!reason) { const err = el.querySelector('#err-d-appr-reason'); if (err) err.hidden = false; return; }
              p.status = 'REJECTED';
              p.reason = 'Lý do từ chối duyệt: ' + reason;
            } else {
              p.status = DisplayShared.approveProgramStatus(p);
              p.reason = '';
            }
            p.updatedAt = now(); p.updatedBy = 'NV0001 - Nguyễn An';
            el.remove();
            toast('Cập nhật thành công', 'success');
            remountEvent({ mode: '', id: '', content: '' });
          });
          return;
        }
        if (acts.stop) {
          const el = DMS.get('Modal').show({
            id: 'd-stop-modal', title: 'Ngưng hoạt động', size: 'sm',
            body: `${DMS.render('Input', { id: 'd-stop-reason', label: 'Lý do ngưng hoạt động', placeholder: 'Nhập lý do', requiredMark: true })}
              <div class="dms-form-item__error" id="err-d-stop" hidden>Lý do ngưng hoạt động là bắt buộc!</div>`,
            footer: `${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'modal-close' })}
              ${DMS.render('Button', { text: 'Đồng ý', type: 'primary', dataAction: 'd-stop-ok' })}`
          });
          el.addEventListener('click', (ev) => {
            if (!ev.target.closest('[data-action="d-stop-ok"]')) return;
            const reason = (el.querySelector('#d-stop-reason')?.value || '').trim().slice(0, 100);
            if (!reason) { const err = el.querySelector('#err-d-stop'); if (err) err.hidden = false; return; }
            p.status = 'STOPPED';
            p.reason = 'Lý do ngưng hoạt động: ' + reason;
            p.updatedAt = now(); p.updatedBy = 'NV0001 - Nguyễn An';
            const store = window.__displayStore;
            (store.registrations || []).forEach((r) => {
              if (r.programId === p.id && r.status === 'PENDING') {
                r.status = 'REJECTED';
                r.reason = 'Ngưng hoạt động chương trình trưng bày';
              }
            });
            (store.progress || []).forEach((g) => {
              if (g.programId === p.id && g.status === 'NOT_STARTED') {
                g.status = 'STOPPED';
                g.reason = reason;
              }
            });
            el.remove();
            toast('Cập nhật thành công', 'success');
            remountEvent({ mode: '', id: '', content: '' });
          });
        }
      }
    });
    container.addEventListener('change', (e) => {
      if (e.target.closest('.dms-pagination__size select')) {
        eventState().pageSize = Number(e.target.value) || 10;
        eventState().page = 1;
        remountEvent({ mode: '', id: '', content: '' });
      }
    });
  };

  /* ========== REGISTRATION ========== */
  function filterRegs(store, st) {
    const q = (st.q || '').trim().toLowerCase();
    const from = DisplayShared.parseDmy(st.from);
    const to = DisplayShared.parseDmy(st.to);
    const af = DisplayShared.parseDmy(st.approveFrom);
    const at = DisplayShared.parseDmy(st.approveTo);
    return (store.registrations || []).filter((r) => {
      const p = DisplayShared.findProgram(r.programId);
      if (q && !(String(r.storeCode || '').toLowerCase().includes(q) || String(r.storeName || '').toLowerCase().includes(q))) return false;
      if (st.dist && r.distCode !== st.dist && r.distName !== st.dist) return false;
      if (st.route && r.routeCode !== st.route) return false;
      if (st.programId && r.programId !== st.programId) return false;
      if (st.status && r.status !== st.status) return false;
      if (from && to && !DisplayShared.inRange(r.registeredAt, from, to)) return false;
      if (af && at) {
        if (r.status !== 'APPROVED' || !DisplayShared.inRange(r.approvedAt, af, at)) return false;
      }
      return true;
    });
  }
  function regColumns() {
    return [
      { key: 'pick', title: '', width: '40px', render: (_, row) => row.status === 'PENDING'
        ? `<input type="checkbox" class="dms-checkbox__input" data-reg-check="${DMS.escape(row.id)}" />` : '' },
      { key: 'storeCode', title: 'Mã điểm bán', render: (v) => DisplayShared.copyCell(v, DMS.escape(v)) },
      { key: 'storeName', title: 'Tên điểm bán' },
      { key: 'phone', title: 'Số điện thoại điểm bán', render: (v) => DisplayShared.copyCell(v, DMS.escape(v || '')) },
      { key: 'address', title: 'Địa chỉ' },
      { key: 'province', title: 'Tỉnh/thành' },
      { key: 'status', title: 'Trạng thái đăng ký', render: (v) => DisplayShared.tagOf(DisplayShared.REG_STATUSES, v) },
      { key: 'routeCode', title: 'Mã tuyến', render: (v) => DisplayShared.copyCell(v, DMS.escape(v || '')) },
      { key: 'routeName', title: 'Tên tuyến' },
      { key: 'distCode', title: 'Mã NPP' },
      { key: 'distName', title: 'Tên NPP' },
      { key: 'programCode', title: 'Mã CTTB', render: (v, row) => DisplayShared.copyCell(v, `<a class="dms-table__link" data-route="/display/event?id=${DMS.escape(row.programId)}">${DMS.escape(v)}</a>`) },
      { key: 'programName', title: 'Tên CTTB' },
      { key: 'regStart', title: 'Ngày bắt đầu' },
      { key: 'regEnd', title: 'Ngày kết thúc' },
      { key: 'quota', title: 'Hạn mức đăng ký' },
      { key: 'slots', title: 'Số suất đăng ký' },
      { key: 'registeredAt', title: 'Thời gian đăng ký' },
      { key: 'contract', title: 'Hợp đồng đăng ký', render: () => '' },
      { key: 'images', title: 'Hình ảnh đăng ký', render: (v) => (v && v.length) ? v.length + ' file' : '' },
      { key: 'registeredBy', title: 'Người đăng ký' },
      { key: 'approvedAt', title: 'Thời gian duyệt đăng ký' },
      { key: 'reason', title: 'Lý do' },
      { key: 'updatedBy', title: 'Người cập nhật' },
      { key: 'updatedAt', title: 'Ngày cập nhật' },
      {
        key: 'actions', title: 'Tùy chỉnh', fixed: 'right',
        render: (_, row) => `<div class="dms-action-buttons">
          ${actionBtn('d-reg-edit', row.id, true, 'edit', 'Cập nhật đăng ký')}
          ${actionBtn('d-reg-appr', row.id, row.status === 'PENDING', 'approve', 'Phê duyệt')}
        </div>`
      }
    ];
  }
  function enrichReg(r) {
    const p = DisplayShared.findProgram(r.programId) || {};
    return Object.assign({}, r, {
      programCode: p.code || '',
      programName: p.name || '',
      regStart: p.registerStart || p.startDate || '',
      regEnd: p.registerEnd || p.endDate || ''
    });
  }
  function renderRegBody(store) {
    const st = regState();
    const filtered = filterRegs(store, st);
    const total = filtered.length;
    const pages = Math.max(1, Math.ceil(total / st.pageSize) || 1);
    if (st.page > pages) st.page = pages;
    const start = (st.page - 1) * st.pageSize;
    const rows = filtered.slice(start, start + st.pageSize).map((it, i) => Object.assign(enrichReg(it), { stt: start + i + 1 }));
    const table = rows.length
      ? DMS.render('Table', { columns: regColumns(), data: rows })
      : `<div class="dms-table-wrapper">${DMS.render('EmptyState', { title: 'Trống' })}</div>`;
    return table + DMS.render('Pagination', { current: st.page, pageSize: st.pageSize, total, unit: 'dòng' });
  }
  function programOptionsForReg(store) {
    return (store.programs || [])
      .filter((p) => ['RUNNING', 'STOPPED', 'ENDED'].includes(p.status))
      .map((p) => ({ value: p.id, label: p.code + ' - ' + p.name }));
  }
  async function renderDisplayParticipant() {
    const store = await DisplayShared.loadStore();
    const st = regState();
    const params = DisplayShared.queryParams();
    const distOpts = [...new Map((store.registrations || []).map((r) => [r.distCode, { value: r.distCode, label: r.distCode + ' - ' + r.distName }])).values()];
    const routeOpts = [...new Map((store.registrations || []).map((r) => [r.routeCode, { value: r.routeCode, label: r.routeCode + ' - ' + r.routeName }])).values()];
    const filter = DMS.render('FilterPanel', {
      fields: [
        { type: 'search', id: 'd-rg-q', label: 'Tìm theo', placeholder: 'Tìm theo mã điểm bán, tên điểm bán', value: st.q },
        { type: 'select', id: 'd-rg-dist', label: 'Nhà phân phối', placeholder: 'Nhà phân phối', value: st.dist, options: distOpts },
        { type: 'select', id: 'd-rg-route', label: 'Tuyến bán hàng', placeholder: 'Tuyến bán hàng', value: st.route, options: routeOpts },
        { type: 'select', id: 'd-rg-prog', label: 'Chương trình trưng bày', placeholder: 'Chương trình trưng bày', value: st.programId, options: programOptionsForReg(store) },
        { type: 'select', id: 'd-rg-status', label: 'Trạng thái', placeholder: 'Trạng thái', value: st.status, options: DisplayShared.REG_STATUSES.map((s) => ({ value: s.key, label: s.label })) },
        { type: 'date', id: 'd-rg-from', label: 'Thời gian đăng ký', placeholder: 'Từ ngày', value: st.from },
        { type: 'date', id: 'd-rg-to', label: ' ', placeholder: 'Đến ngày', value: st.to },
        { type: 'date', id: 'd-rg-af', label: 'Thời gian duyệt', placeholder: 'Từ ngày', value: st.approveFrom },
        { type: 'date', id: 'd-rg-at', label: ' ', placeholder: 'Đến ngày', value: st.approveTo }
      ]
    });
    const card = DMS.render('Card', {
      title: 'Danh sách đăng ký trưng bày',
      extra: `${DMS.render('Button', { text: 'Import Excel', type: 'default', dataAction: 'd-reg-import' })}
        ${DMS.render('Button', { text: 'Export Excel', type: 'default', dataAction: 'd-reg-export' })}
        ${DMS.render('Button', { text: 'Xét duyệt', type: 'primary', dataAction: 'd-reg-bulk', disabled: true, id: 'd-reg-bulk' })}`,
      body: `<div id="d-reg-body">${renderRegBody(store)}</div>`
    });
    let overlay = '';
    const editId = params.get('edit');
    if (editId) overlay += renderRegUpdateModal(DisplayShared.findReg(editId));
    return `<div class="display-page" data-display-reg>
      ${DisplayShared.breadcrumb('Danh Sách Đăng Ký Trưng Bày')}
      <h1 class="dms-page-header__title dms-mt-md">Danh Sách Đăng Ký Trưng Bày</h1>
      ${filter}${card}${overlay}
    </div>`;
  }
  function renderRegUpdateModal(reg) {
    if (!reg) return '';
    const p = DisplayShared.findProgram(reg.programId) || {};
    const tab = window.__displayRegTab || 'info';
    const info = `<div class="display-form-grid">
      ${[['Mã CTTB', p.code], ['Tên CTTB', p.name], ['Trạng thái CTTB', DisplayShared.statusMeta(DisplayShared.PROGRAM_STATUSES, p.status).label],
        ['Thời gian chương trình', (p.startDate || '') + ' → ' + (p.endDate || '')],
        ['Thời gian đăng ký', (p.registerStart || '') + ' → ' + (p.registerEnd || '')],
        ['Mã điểm bán', reg.storeCode], ['Tên điểm bán', reg.storeName], ['Số điện thoại điểm bán', reg.phone],
        ['Mã tuyến', reg.routeCode], ['Tên tuyến', reg.routeName], ['Ngày đăng ký', (reg.registeredAt || '').slice(0, 10)],
        ['Hạn mức đăng ký', reg.quota], ['Số suất đăng ký', reg.slots],
        ['Trạng thái đăng ký', DisplayShared.statusMeta(DisplayShared.REG_STATUSES, reg.status).label],
        ['Loại chương trình', DisplayShared.catalogLabel(DisplayShared.TYPES, p.type)]
      ].map(([l, v]) => `<div class="dms-form-item"><label class="dms-form-item__label">${l}</label><div>${v || ''}</div></div>`).join('')}
    </div>`;
    const imgs = (reg.images || []).map((f, i) => `<div class="display-file-card">
      <div class="display-file-card__name">${DMS.escape(f.name)}</div>
      <div class="display-file-card__meta">${DMS.escape(f.at || '')}<br/>${DMS.escape(f.by || '')}</div>
      ${reg.status === 'PENDING' ? DMS.render('Button', { text: 'Xóa', type: 'ghost', size: 'sm', dataAction: 'd-reg-img-del-' + i }) : ''}
    </div>`).join('') || '<p class="dms-text-secondary">Chưa có file.</p>';
    const canAdd = (p.status === 'RUNNING') && (reg.status === 'PENDING' || reg.status === 'APPROVED');
    const files = `<div>
      ${canAdd ? DMS.render('Button', { text: 'Thêm file', type: 'default', dataAction: 'd-reg-add-file' }) : ''}
      <p class="display-page__desc">Tối đa 10 file (PNG, JPEG, JPG, PDF, Word), mỗi file ≤ 10MB.</p>
      <div class="display-file-list">${imgs}</div>
    </div>`;
    const body = `<div class="display-subtabs">
      <button type="button" class="display-subtabs__item ${tab === 'info' ? 'is-active' : ''}" data-reg-tab="info">Thông tin tham gia</button>
      <button type="button" class="display-subtabs__item ${tab === 'img' ? 'is-active' : ''}" data-reg-tab="img">Hình ảnh tham gia</button>
    </div>${tab === 'info' ? info : files}`;
    return DMS.render('Modal', {
      id: 'display-reg-modal',
      title: 'Cập nhật đăng ký tham gia',
      size: 'xl',
      body,
      footer: `${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'd-reg-close' })}
        ${DMS.render('Button', { text: 'Đồng ý', type: 'primary', dataAction: 'd-reg-save-img', disabled: true, id: 'd-reg-ok' })}`
    });
  }
  function openRegApprove(ids) {
    const el = DMS.get('Modal').show({
      id: 'd-reg-appr-modal', title: 'Xét duyệt', size: 'sm',
      body: `${DMS.render('Radio', { name: 'd-reg-ap', value: 'ok', checked: true, label: 'Duyệt' })}
        ${DMS.render('Radio', { name: 'd-reg-ap', value: 'no', label: 'Từ chối' })}
        <div id="d-reg-ap-reason" hidden>${DMS.render('Input', { id: 'd-reg-ap-val', label: 'Lý do từ chối', placeholder: 'Nhập lý do', requiredMark: true })}
          <div class="dms-form-item__error" id="err-d-reg-ap" hidden>Lý do từ chối là bắt buộc!</div></div>`,
      footer: `${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'modal-close' })}
        ${DMS.render('Button', { text: 'Cập nhật', type: 'primary', dataAction: 'd-reg-ap-ok' })}`
    });
    el.addEventListener('change', () => {
      const no = el.querySelector('input[name="d-reg-ap"][value="no"]')?.checked;
      const box = el.querySelector('#d-reg-ap-reason');
      if (box) box.hidden = !no;
    });
    el.addEventListener('click', (ev) => {
      if (!ev.target.closest('[data-action="d-reg-ap-ok"]')) return;
      const no = el.querySelector('input[name="d-reg-ap"][value="no"]')?.checked;
      let reason = '';
      if (no) {
        reason = (el.querySelector('#d-reg-ap-val')?.value || '').trim().slice(0, 100);
        if (!reason) { const err = el.querySelector('#err-d-reg-ap'); if (err) err.hidden = false; return; }
      }
      ids.forEach((id) => {
        const r = DisplayShared.findReg(id);
        if (!r || r.status !== 'PENDING') return;
        if (no) { r.status = 'REJECTED'; r.reason = reason; r.approvedAt = ''; }
        else { r.status = 'APPROVED'; r.approvedAt = now(); r.reason = ''; DisplayShared.genProgressForReg(r); }
        r.updatedAt = now(); r.updatedBy = 'NV0001 - Nguyễn An';
      });
      el.remove();
      toast('Cập nhật thành công', 'success');
      DMSRouter.navigate('/display/participant', true);
    });
  }
  renderDisplayParticipant.onMount = function (container) {
    const syncBulk = () => {
      const n = container.querySelectorAll('[data-reg-check]:checked').length;
      const btn = container.querySelector('[data-action="d-reg-bulk"]');
      if (btn) btn.disabled = n === 0;
    };
    container.addEventListener('change', (e) => {
      if (e.target.hasAttribute('data-reg-check')) syncBulk();
      if (e.target.closest('.dms-pagination__size select')) {
        regState().pageSize = Number(e.target.value) || 10; regState().page = 1;
        DMSRouter.navigate('/display/participant', true);
      }
    });
    container.addEventListener('click', (e) => {
      if (e.target.closest('[data-copy]')) {
        const t = e.target.closest('[data-copy]').getAttribute('data-copy');
        if (navigator.clipboard) navigator.clipboard.writeText(t);
        toast('Đã sao chép', 'success'); return;
      }
      if (e.target.closest('[data-action="filter-search"]')) {
        const st = regState();
        st.q = document.getElementById('d-rg-q')?.value || '';
        st.dist = document.getElementById('d-rg-dist')?.value || '';
        st.route = document.getElementById('d-rg-route')?.value || '';
        st.programId = document.getElementById('d-rg-prog')?.value || '';
        st.status = document.getElementById('d-rg-status')?.value || '';
        st.from = document.getElementById('d-rg-from')?.value || '';
        st.to = document.getElementById('d-rg-to')?.value || '';
        st.approveFrom = document.getElementById('d-rg-af')?.value || '';
        st.approveTo = document.getElementById('d-rg-at')?.value || '';
        st.page = 1;
        DMSRouter.navigate('/display/participant', true); return;
      }
      if (e.target.closest('[data-action="filter-reset"]')) {
        const d = last7();
        window.__displayRegState = { q: '', dist: '', route: '', programId: '', status: '', from: d.from, to: d.to, approveFrom: '', approveTo: '', page: 1, pageSize: 10 };
        DMSRouter.navigate('/display/participant', true); return;
      }
      if (e.target.closest('[data-page]')) {
        regState().page = Number(e.target.closest('[data-page]').getAttribute('data-page'));
        DMSRouter.navigate('/display/participant', true); return;
      }
      if (e.target.closest('[data-action="d-reg-export"]')) { toast('Đã xuất Excel (prototype)', 'success'); return; }
      if (e.target.closest('[data-action="d-reg-import"]')) {
        const el = DMS.get('Modal').show({
          id: 'd-reg-import-modal', title: 'Import danh sách đăng ký', size: 'md',
          body: `<div class="display-drop">Chọn hoặc Kéo file đến vị trí này
            <input type="file" accept=".xlsx" id="d-reg-file" /></div>
            ${DMS.render('Button', { text: 'Lấy file mẫu', type: 'link', dataAction: 'd-reg-tpl' })}`,
          footer: `${DMS.render('Button', { text: 'Hủy', type: 'default', dataAction: 'modal-close' })}
            ${DMS.render('Button', { text: 'Tiến hành xử lý', type: 'primary', dataAction: 'd-reg-imp-ok' })}`
        });
        el.addEventListener('click', (ev) => {
          if (ev.target.closest('[data-action="d-reg-tpl"]')) { toast('Đã tải file mẫu (prototype)', 'success'); return; }
          if (!ev.target.closest('[data-action="d-reg-imp-ok"]')) return;
          DMS.get('Dialog').confirm('Bạn chắc chắn thao tác này không?', () => {
            el.remove();
            toast('Import thành công', 'success');
          });
        });
        return;
      }
      if (e.target.closest('[data-action="d-reg-bulk"]')) {
        const ids = [...container.querySelectorAll('[data-reg-check]:checked')].map((i) => i.getAttribute('data-reg-check'));
        if (ids.length) openRegApprove(ids);
        return;
      }
      const ap = e.target.closest('[data-action^="d-reg-appr-"]');
      if (ap) { openRegApprove([ap.getAttribute('data-action').replace('d-reg-appr-', '')]); return; }
      const ed = e.target.closest('[data-action^="d-reg-edit-"]');
      if (ed) {
        window.__displayRegTab = 'info';
        DMSRouter.navigate('/display/participant?edit=' + ed.getAttribute('data-action').replace('d-reg-edit-', ''), true);
        return;
      }
      if (e.target.closest('[data-reg-tab]')) {
        window.__displayRegTab = e.target.closest('[data-reg-tab]').getAttribute('data-reg-tab');
        const id = DisplayShared.queryParams().get('edit');
        DMSRouter.navigate('/display/participant?edit=' + id, true); return;
      }
      if (e.target.closest('[data-action="d-reg-close"]') || e.target.id === 'display-reg-modal') {
        window.__displayRegTab = 'info';
        DMSRouter.navigate('/display/participant', true); return;
      }
      if (e.target.closest('[data-action="d-reg-add-file"]')) {
        const id = DisplayShared.queryParams().get('edit');
        const r = DisplayShared.findReg(id);
        if (!r) return;
        r.images = r.images || [];
        if (r.images.length >= 10) { toast('Số lượng hình ảnh tối đa = 10', 'error'); return; }
        r.images.push({ name: 'file-moi.jpg', at: now(), by: 'NV0001 - Nguyễn An', _new: true });
        const ok = document.getElementById('d-reg-ok');
        if (ok) ok.disabled = false;
        DMSRouter.navigate('/display/participant?edit=' + id, true);
        return;
      }
      const delImg = e.target.closest('[data-action^="d-reg-img-del-"]');
      if (delImg) {
        const id = DisplayShared.queryParams().get('edit');
        const r = DisplayShared.findReg(id);
        const idx = Number(delImg.getAttribute('data-action').split('-').pop());
        if (r && r.images) r.images.splice(idx, 1);
        DMSRouter.navigate('/display/participant?edit=' + id, true); return;
      }
      if (e.target.closest('[data-action="d-reg-save-img"]')) {
        toast('Cập nhật thành công', 'success');
      }
    });
  };

  /* ========== PROCESS ========== */
  function filterProgress(store, st) {
    const q = (st.q || '').trim().toLowerCase();
    const from = DisplayShared.parseDmy(st.from);
    const to = DisplayShared.parseDmy(st.to);
    return (store.progress || []).filter((g) => {
      const r = DisplayShared.findReg(g.registrationId) || {};
      const p = DisplayShared.findProgram(g.programId) || {};
      if (q && !(String(r.storeCode || '').toLowerCase().includes(q) || String(r.storeName || '').toLowerCase().includes(q))) return false;
      if (st.route && r.routeCode !== st.route) return false;
      if (st.programId && g.programId !== st.programId) return false;
      if (st.status && g.status !== st.status) return false;
      if (st.result && g.result !== st.result) return false;
      if (st.rewardMode && p.rewardMode !== st.rewardMode) return false;
      if (from && to && !DisplayShared.overlaps(DisplayShared.parseDmy(g.startDate), DisplayShared.parseDmy(g.endDate), from, to)) return false;
      return true;
    });
  }
  function flattenStages(list, st) {
    const rows = [];
    list.forEach((g) => {
      const stages = g.stages && g.stages.length ? g.stages : [{ name: '—', startDate: '', endDate: '', status: '', photoCount: g.photoCount || 0, passCount: 0, reviewCount: 0, requestCount: g.requestCount || 0 }];
      stages.forEach((s) => {
        if (st.stageStatus && s.status !== st.stageStatus) return;
        rows.push(Object.assign({}, g, {
          stageName: s.name, stageStart: s.startDate, stageEnd: s.endDate, stageStatus: s.status,
          stagePhoto: s.photoCount, stagePass: s.passCount, stageReview: s.reviewCount, stageReq: s.requestCount
        }));
      });
    });
    return rows;
  }
  function processPeriodColumns() {
    return [
      { key: 'periodCode', title: 'Mã kỳ', render: (v) => DisplayShared.copyCell(v, DMS.escape(v)) },
      { key: 'periodName', title: 'Tên kỳ' },
      { key: 'startDate', title: 'Ngày bắt đầu kỳ' },
      { key: 'endDate', title: 'Ngày kết thúc kỳ' },
      { key: 'status', title: 'Trạng thái kỳ', render: (v) => DisplayShared.tagOf(DisplayShared.PROGRESS_STATUSES, v) },
      { key: 'reason', title: 'Lý do Ngưng hoạt động' },
      { key: 'storeCode', title: 'Mã điểm bán', render: (v) => DisplayShared.copyCell(v, DMS.escape(v || '')) },
      { key: 'storeName', title: 'Tên điểm bán' },
      { key: 'phone', title: 'Số điện thoại điểm bán' },
      { key: 'province', title: 'Tỉnh/Thành' },
      { key: 'address', title: 'Địa chỉ' },
      { key: 'result', title: 'Kết quả kỳ', render: (v) => DisplayShared.tagOf(DisplayShared.PERIOD_RESULTS, v) },
      { key: 'requestCount', title: 'Số lần yêu cầu duyệt' },
      { key: 'routeCode', title: 'Mã tuyến' },
      { key: 'routeName', title: 'Tên tuyến' },
      { key: 'programCode', title: 'Mã chương trình trưng bày', render: (v, row) => DisplayShared.copyCell(v, `<a class="dms-table__link" data-route="/display/event?id=${DMS.escape(row.programId)}">${DMS.escape(v)}</a>`) },
      { key: 'programName', title: 'Tên chương trình trưng bày' },
      { key: 'programStatus', title: 'Trạng thái chương trình', render: (v) => DisplayShared.tagOf(DisplayShared.PROGRAM_STATUSES, v) },
      { key: 'pStart', title: 'Ngày bắt đầu' },
      { key: 'pEnd', title: 'Ngày kết thúc' },
      { key: 'rewardMode', title: 'Hình thức trả thưởng', render: (v) => DisplayShared.catalogLabel(DisplayShared.REWARD_MODES, v) },
      { key: 'quota', title: 'Hạn mức đăng ký', render: (v, row) => `<a class="dms-table__link" data-route="/display/participant?edit=${DMS.escape(row.registrationId)}">${DMS.escape(v || '')}</a>` },
      { key: 'slots', title: 'Số suất đăng ký' },
      { key: 'registeredAt', title: 'Thời gian đăng ký' },
      { key: 'approvedAt', title: 'Thời gian duyệt đăng ký' },
      { key: 'photoCount', title: 'Số lần chụp hình của Kỳ' },
      { key: 'updatedBy', title: 'Người cập nhật' },
      { key: 'updatedAt', title: 'Thời gian cập nhật' },
      {
        key: 'actions', title: 'Tùy chỉnh', fixed: 'right',
        render: (_, row) => `<div class="dms-action-buttons">
          ${actionBtn('d-prg-img', row.id, true, 'image', 'Xem hình')}
          ${actionBtn('d-prg-stop', row.id, row.status !== 'STOPPED' && row.status !== 'ENDED', 'stop', 'Ngưng hoạt động')}
        </div>`
      }
    ];
  }
  function processStageColumns() {
    return [
      { key: 'periodCode', title: 'Mã kỳ', render: (v) => DisplayShared.copyCell(v, DMS.escape(v || '')) },
      { key: 'periodName', title: 'Tên kỳ' },
      { key: 'startDate', title: 'Ngày bắt đầu kỳ' },
      { key: 'endDate', title: 'Ngày kết thúc kỳ' },
      { key: 'status', title: 'Trạng thái kỳ', render: (v) => DisplayShared.tagOf(DisplayShared.PROGRESS_STATUSES, v) },
      { key: 'result', title: 'Kết quả kỳ', render: (v) => DisplayShared.tagOf(DisplayShared.PERIOD_RESULTS, v) },
      { key: 'stageName', title: 'Tên giai đoạn' },
      { key: 'stageStart', title: 'Ngày bắt đầu GĐ' },
      { key: 'stageEnd', title: 'Ngày kết thúc GĐ' },
      { key: 'stageStatus', title: 'Trạng thái giai đoạn', render: (v) => v ? DisplayShared.tagOf(DisplayShared.STAGE_RESULTS, v) : '' },
      { key: 'storeCode', title: 'Mã điểm bán' },
      { key: 'storeName', title: 'Tên điểm bán' },
      { key: 'phone', title: 'Số điện thoại điểm bán' },
      { key: 'province', title: 'Tỉnh/Thành' },
      { key: 'address', title: 'Địa chỉ' },
      { key: 'stagePass', title: 'Số lần duyệt đạt' },
      { key: 'stageReview', title: 'Số lần duyệt' },
      { key: 'stageReq', title: 'Số lần yêu cầu duyệt' },
      { key: 'routeCode', title: 'Mã tuyến' },
      { key: 'routeName', title: 'Tên tuyến' },
      { key: 'programCode', title: 'Mã chương trình trưng bày', render: (v, row) => `<a class="dms-table__link" data-route="/display/event?id=${DMS.escape(row.programId)}">${DMS.escape(v || '')}</a>` },
      { key: 'programName', title: 'Tên chương trình trưng bày' },
      { key: 'programStatus', title: 'Trạng thái chương trình', render: (v) => DisplayShared.tagOf(DisplayShared.PROGRAM_STATUSES, v) },
      { key: 'rewardMode', title: 'Hình thức trả thưởng', render: (v) => DisplayShared.catalogLabel(DisplayShared.REWARD_MODES, v) },
      { key: 'pStart', title: 'Ngày bắt đầu' },
      { key: 'pEnd', title: 'Ngày kết thúc' },
      { key: 'quota', title: 'Hạn mức đăng ký', render: (v, row) => `<a class="dms-table__link" data-route="/display/participant?edit=${DMS.escape(row.registrationId)}">${DMS.escape(v || '')}</a>` },
      { key: 'slots', title: 'Số suất đăng ký' },
      { key: 'registeredAt', title: 'Thời gian đăng ký' },
      { key: 'approvedAt', title: 'Thời gian duyệt đăng ký' },
      { key: 'stagePhoto', title: 'Số lần chụp hình của giai đoạn' },
      { key: 'updatedBy', title: 'Người cập nhật' },
      { key: 'updatedAt', title: 'Thời gian cập nhật' },
      { key: 'actions', title: 'Tùy chỉnh', fixed: 'right', render: (_, row) => `<div class="dms-action-buttons">${actionBtn('d-prg-img', row.id, true, 'image', 'Xem hình')}</div>` }
    ];
  }
  function enrichProgress(g) {
    const r = DisplayShared.findReg(g.registrationId) || {};
    const p = DisplayShared.findProgram(g.programId) || {};
    return Object.assign({}, g, {
      storeCode: r.storeCode, storeName: r.storeName, phone: r.phone, province: r.province, address: r.address,
      routeCode: r.routeCode, routeName: r.routeName, quota: r.quota, slots: r.slots,
      registeredAt: r.registeredAt, approvedAt: r.approvedAt,
      programCode: p.code, programName: p.name, programStatus: p.status, pStart: p.startDate, pEnd: p.endDate, rewardMode: p.rewardMode
    });
  }
  function renderProcessBody(store) {
    const st = processState();
    let list = filterProgress(store, st).map(enrichProgress);
    if (st.tab === 'stage') list = flattenStages(list, st);
    const total = list.length;
    const pages = Math.max(1, Math.ceil(total / st.pageSize) || 1);
    if (st.page > pages) st.page = pages;
    const start = (st.page - 1) * st.pageSize;
    const rows = list.slice(start, start + st.pageSize);
    const cols = st.tab === 'stage' ? processStageColumns() : processPeriodColumns();
    const table = rows.length
      ? DMS.render('Table', { columns: cols, data: rows })
      : `<div class="dms-table-wrapper">${DMS.render('EmptyState', { title: 'Trống' })}</div>`;
    return table + DMS.render('Pagination', { current: st.page, pageSize: st.pageSize, total, unit: 'dòng' });
  }
  async function renderDisplayProcess() {
    const store = await DisplayShared.loadStore();
    const st = processState();
    const routeOpts = [...new Map((store.registrations || []).map((r) => [r.routeCode, { value: r.routeCode, label: r.routeCode + ' - ' + r.routeName }])).values()];
    const fields = [
      { type: 'search', id: 'd-pr-q', label: 'Tìm kiếm', placeholder: 'Tìm theo mã điểm bán, tên điểm bán', value: st.q },
      { type: 'select', id: 'd-pr-route', label: 'Tuyến bán hàng', placeholder: 'Tuyến bán hàng', value: st.route, options: routeOpts },
      { type: 'select', id: 'd-pr-prog', label: 'Chương trình trưng bày', placeholder: 'Chương trình trưng bày', value: st.programId, options: programOptionsForReg(store) },
      { type: 'select', id: 'd-pr-status', label: 'Trạng thái kỳ', placeholder: 'Trạng thái kỳ', value: st.status, options: DisplayShared.PROGRESS_STATUSES.map((s) => ({ value: s.key, label: s.label })) },
      { type: 'select', id: 'd-pr-result', label: 'Kết quả kỳ', placeholder: 'Kết quả kỳ', value: st.result, options: DisplayShared.PERIOD_RESULTS.map((s) => ({ value: s.key, label: s.label })) },
      { type: 'date', id: 'd-pr-from', label: 'Thời gian trưng bày', placeholder: 'Từ ngày', value: st.from },
      { type: 'date', id: 'd-pr-to', label: ' ', placeholder: 'Đến ngày', value: st.to },
      { type: 'select', id: 'd-pr-reward', label: 'Hình thức trả thưởng', placeholder: 'Hình thức trả thưởng', value: st.rewardMode, options: DisplayShared.REWARD_MODES }
    ];
    if (st.tab === 'stage') {
      fields.push({ type: 'select', id: 'd-pr-stage', label: 'Trạng thái giai đoạn', placeholder: 'Trạng thái giai đoạn', value: st.stageStatus, options: DisplayShared.STAGE_RESULTS.map((s) => ({ value: s.key, label: s.label })) });
    }
    const filter = DMS.render('FilterPanel', { fields });
    const tabs = `<div class="display-subtabs">
      <button type="button" class="display-subtabs__item ${st.tab === 'period' ? 'is-active' : ''}" data-prg-tab="period">Theo kỳ</button>
      <button type="button" class="display-subtabs__item ${st.tab === 'stage' ? 'is-active' : ''}" data-prg-tab="stage">Theo giai đoạn</button>
    </div>`;
    const card = DMS.render('Card', {
      title: 'Danh sách tiến trình trưng bày',
      extra: `${DMS.render('Button', { text: 'Import Excel', type: 'default', dataAction: 'd-prg-import' })}
        ${DMS.render('Button', { text: 'Export Excel', type: 'default', dataAction: 'd-prg-export' })}
        ${DMS.render('Button', { text: 'Thông báo', type: 'default', dataAction: 'd-prg-notify' })}`,
      body: tabs + `<div id="d-prg-body">${renderProcessBody(store)}</div>`
    });
    return `<div class="display-page" data-display-process>
      ${DisplayShared.breadcrumb('Tiến Trình Trưng Bày')}
      <h1 class="dms-page-header__title dms-mt-md">Tiến Trình Trưng Bày</h1>
      ${filter}${card}
    </div>`;
  }
  renderDisplayProcess.onMount = function (container) {
    container.addEventListener('click', (e) => {
      if (e.target.closest('[data-copy]')) {
        const t = e.target.closest('[data-copy]').getAttribute('data-copy');
        if (navigator.clipboard) navigator.clipboard.writeText(t);
        toast('Đã sao chép', 'success'); return;
      }
      if (e.target.closest('[data-prg-tab]')) {
        processState().tab = e.target.closest('[data-prg-tab]').getAttribute('data-prg-tab');
        processState().page = 1;
        DMSRouter.navigate('/display/process', true); return;
      }
      if (e.target.closest('[data-action="filter-search"]')) {
        const st = processState();
        st.q = document.getElementById('d-pr-q')?.value || '';
        st.route = document.getElementById('d-pr-route')?.value || '';
        st.programId = document.getElementById('d-pr-prog')?.value || '';
        st.status = document.getElementById('d-pr-status')?.value || '';
        st.result = document.getElementById('d-pr-result')?.value || '';
        st.rewardMode = document.getElementById('d-pr-reward')?.value || '';
        st.stageStatus = document.getElementById('d-pr-stage')?.value || '';
        st.from = document.getElementById('d-pr-from')?.value || '';
        st.to = document.getElementById('d-pr-to')?.value || '';
        st.page = 1;
        DMSRouter.navigate('/display/process', true); return;
      }
      if (e.target.closest('[data-action="filter-reset"]')) {
        const d = last30();
        window.__displayProcessState = { tab: processState().tab, q: '', route: '', programId: '', status: '', result: '', rewardMode: '', stageStatus: '', from: d.from, to: d.to, page: 1, pageSize: 10 };
        DMSRouter.navigate('/display/process', true); return;
      }
      if (e.target.closest('[data-page]')) {
        processState().page = Number(e.target.closest('[data-page]').getAttribute('data-page'));
        DMSRouter.navigate('/display/process', true); return;
      }
      if (e.target.closest('[data-action="d-prg-export"]')) {
        const el = DMS.get('Modal').show({
          id: 'd-prg-exp', title: 'Export', size: 'sm',
          body: `${DMS.render('Radio', { name: 'd-exp', value: 'list', checked: true, label: 'Danh sách tiến trình trưng bày' })}
            ${DMS.render('Radio', { name: 'd-exp', value: 'img', label: 'Hình ảnh trưng bày' })}`,
          footer: `${DMS.render('Button', { text: 'Hủy', type: 'default', dataAction: 'modal-close' })}
            ${DMS.render('Button', { text: 'Đồng ý', type: 'primary', dataAction: 'd-prg-exp-ok' })}`
        });
        el.addEventListener('click', (ev) => {
          if (!ev.target.closest('[data-action="d-prg-exp-ok"]')) return;
          el.remove(); toast('Đã xuất Excel (prototype)', 'success');
        });
        return;
      }
      if (e.target.closest('[data-action="d-prg-import"]')) {
        const el = DMS.get('Modal').show({
          id: 'd-prg-imp', title: 'Import ngưng hoạt động', size: 'md',
          body: `${DMS.render('Radio', { name: 'd-imp', value: 'store', checked: true, label: 'Theo điểm bán' })}
            ${DMS.render('Radio', { name: 'd-imp', value: 'ky', label: 'Theo kỳ' })}
            <div class="display-drop dms-mt-md">Chọn hoặc Kéo file đến vị trí này<input type="file" accept=".xlsx" /></div>
            ${DMS.render('Button', { text: 'Lấy file mẫu', type: 'link', dataAction: 'd-prg-tpl' })}`,
          footer: `${DMS.render('Button', { text: 'Hủy', type: 'default', dataAction: 'modal-close' })}
            ${DMS.render('Button', { text: 'Tiến hành xử lý', type: 'primary', dataAction: 'd-prg-imp-ok' })}`
        });
        el.addEventListener('click', (ev) => {
          if (ev.target.closest('[data-action="d-prg-tpl"]')) { toast('Đã tải file mẫu (prototype)', 'success'); return; }
          if (!ev.target.closest('[data-action="d-prg-imp-ok"]')) return;
          DMS.get('Dialog').confirm('Bạn chắc chắn thao tác này không?', () => { el.remove(); toast('Import thành công', 'success'); });
        });
        return;
      }
      if (e.target.closest('[data-action="d-prg-notify"]')) {
        toast('Chưa đủ thông tin trên website để clone nội dung Thông báo.', 'info');
        return;
      }
      const img = e.target.closest('[data-action^="d-prg-img-"]');
      if (img) {
        const g = DisplayShared.findProgress(img.getAttribute('data-action').replace('d-prg-img-', ''));
        const files = (g?.images || []).map((f) => `<li>${DMS.escape(f.name)} — ${DMS.escape(f.at || '')}</li>`).join('') || '<li>Trống</li>';
        DMS.get('Modal').show({
          id: 'd-prg-img-modal', title: 'Hình ảnh trưng bày', size: 'md',
          body: `<ul class="display-img-list">${files}</ul>`,
          footer: DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'modal-close' })
        });
        return;
      }
      const stop = e.target.closest('[data-action^="d-prg-stop-"]');
      if (stop) {
        const g = DisplayShared.findProgress(stop.getAttribute('data-action').replace('d-prg-stop-', ''));
        if (!g) return;
        const el = DMS.get('Modal').show({
          id: 'd-prg-stop-modal', title: 'Ngưng hoạt động', size: 'sm',
          body: `${DMS.render('Input', { id: 'd-prg-stop-val', label: 'Lý do', placeholder: 'Nhập lý do', requiredMark: true })}
            <div class="dms-form-item__error" id="err-prg-stop" hidden>Lý do là bắt buộc!</div>`,
          footer: `${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'modal-close' })}
            ${DMS.render('Button', { text: 'Đồng ý', type: 'primary', dataAction: 'd-prg-stop-ok' })}`
        });
        el.addEventListener('click', (ev) => {
          if (!ev.target.closest('[data-action="d-prg-stop-ok"]')) return;
          const reason = (el.querySelector('#d-prg-stop-val')?.value || '').trim().slice(0, 100);
          if (!reason) { const err = el.querySelector('#err-prg-stop'); if (err) err.hidden = false; return; }
          g.status = 'STOPPED'; g.reason = reason; g.updatedAt = now(); g.updatedBy = 'NV0001 - Nguyễn An';
          const all = (window.__displayStore.progress || []).filter((x) => x.registrationId === g.registrationId);
          if (all.every((x) => x.status === 'STOPPED')) {
            const r = DisplayShared.findReg(g.registrationId);
            if (r) { r.status = 'STOPPED'; r.reason = reason; r.updatedAt = now(); }
          }
          el.remove();
          toast('Cập nhật thành công', 'success');
          DMSRouter.navigate('/display/process', true);
        });
      }
    });
    container.addEventListener('change', (e) => {
      if (e.target.closest('.dms-pagination__size select')) {
        processState().pageSize = Number(e.target.value) || 10; processState().page = 1;
        DMSRouter.navigate('/display/process', true);
      }
    });
  };

  /* ========== REWARD ========== */
  function rewardState() {
    if (!window.__displayRewardState) {
      window.__displayRewardState = { q: '', route: '', programId: '', type: '', rewardMode: '', rewardType: '', result: '', page: 1, pageSize: 10 };
    }
    return window.__displayRewardState;
  }
  function histState() {
    if (!window.__displayRewardHistState) {
      window.__displayRewardHistState = { from: '', to: '', searched: false, page: 1, pageSize: 10 };
    }
    return window.__displayRewardHistState;
  }
  function programOptionsAllExceptInit(store) {
    return (store.programs || [])
      .filter((p) => p.status !== 'INIT')
      .map((p) => ({ value: p.id, label: p.code + ' - ' + p.name }));
  }
  function enrichReward(rw) {
    const g = DisplayShared.findProgress(rw.progressId) || {};
    const r = DisplayShared.findReg(g.registrationId) || {};
    const p = DisplayShared.findProgram(rw.programId) || {};
    const periodMode = p.rewardMode === 'PERIOD';
    return Object.assign({}, rw, {
      storeCode: rw.storeCode || r.storeCode || '',
      storeName: r.storeName || '',
      phone: r.phone || '',
      province: r.province || '',
      address: r.address || '',
      routeCode: r.routeCode || '',
      routeName: r.routeName || '',
      quota: r.quota || '',
      slots: r.slots || '',
      programCode: p.code || '',
      programName: p.name || '',
      programType: p.type || '',
      rewardMode: p.rewardMode || '',
      periodCode: periodMode ? (g.periodCode || '') : '',
      periodName: periodMode ? (g.periodName || '') : '',
      roleGroup: rw.roleGroup || '',
      orderCode: rw.orderCode || '',
      reason: rw.reason || ''
    });
  }
  function filterRewards(store, st) {
    const q = (st.q || '').trim().toLowerCase();
    return (store.rewards || []).filter((rw) => {
      const row = enrichReward(rw);
      if (q && !(String(row.storeCode || '').toLowerCase().includes(q) || String(row.storeName || '').toLowerCase().includes(q))) return false;
      if (st.route && row.routeCode !== st.route) return false;
      if (st.programId && rw.programId !== st.programId) return false;
      if (st.type && row.programType !== st.type) return false;
      if (st.rewardMode && row.rewardMode !== st.rewardMode) return false;
      if (st.rewardType && rw.rewardType !== st.rewardType) return false;
      if (st.result && rw.result !== st.result) return false;
      return true;
    });
  }
  function sortRewards(list) {
    return list.slice().sort((a, b) => {
      const da = DisplayShared.parseDt(a.updatedAt);
      const db = DisplayShared.parseDt(b.updatedAt);
      return (db ? db.getTime() : 0) - (da ? da.getTime() : 0);
    });
  }
  function canActReward(rw) {
    return rw.result === 'WAITING' || rw.result === 'EXPIRED';
  }
  function rewardColumns() {
    return [
      { key: 'code', title: 'Mã trả thưởng', render: (v) => DisplayShared.copyCell(v, DMS.escape(v)) },
      { key: 'periodCode', title: 'Mã kỳ', render: (v) => v ? DisplayShared.copyCell(v, DMS.escape(v)) : '' },
      { key: 'periodName', title: 'Tên kỳ' },
      { key: 'storeCode', title: 'Mã điểm bán', render: (v) => DisplayShared.copyCell(v, DMS.escape(v || '')) },
      { key: 'storeName', title: 'Tên điểm bán' },
      { key: 'phone', title: 'Số điện thoại điểm bán' },
      { key: 'province', title: 'Tỉnh/Thành phố' },
      { key: 'address', title: 'Địa chỉ' },
      { key: 'programCode', title: 'Mã chương trình trưng bày', render: (v, row) => DisplayShared.copyCell(v, `<a class="dms-table__link" data-route="/display/event?id=${DMS.escape(row.programId)}">${DMS.escape(v || '')}</a>`) },
      { key: 'programName', title: 'Tên chương trình trưng bày' },
      { key: 'programType', title: 'Loại chương trình', render: (v) => DisplayShared.catalogLabel(DisplayShared.TYPES, v) },
      { key: 'quota', title: 'Hạn mức đăng ký' },
      { key: 'slots', title: 'Số suất đăng ký' },
      { key: 'rewardMode', title: 'Hình thức trả thưởng', render: (v) => DisplayShared.catalogLabel(DisplayShared.REWARD_MODES, v) },
      { key: 'rewardType', title: 'Loại phần thưởng', render: (v) => DisplayShared.catalogLabel(DisplayShared.REWARD_TYPES, v) },
      {
        key: 'amount', title: 'Phần thưởng',
        render: (_, row) => row.rewardType === 'GIFT'
          ? `<a class="dms-table__link" data-route="/display/reward?gift=${DMS.escape(row.id)}">Chi tiết</a>`
          : DisplayShared.formatMoney(row.amount)
      },
      { key: 'result', title: 'Kết quả trả thưởng', render: (v) => DisplayShared.tagOf(DisplayShared.REWARD_LIST_RESULTS, v) },
      { key: 'routeCode', title: 'Mã tuyến', render: (v) => v ? DisplayShared.copyCell(v, DMS.escape(v)) : '' },
      { key: 'routeName', title: 'Tên tuyến' },
      { key: 'startDate', title: 'Ngày bắt đầu trả thưởng' },
      { key: 'endDate', title: 'Ngày kết thúc trả thưởng' },
      { key: 'orderCode', title: 'Mã đơn hàng', render: (v) => DMS.escape(v || '') },
      { key: 'reason', title: 'Lý do từ chối' },
      { key: 'updatedBy', title: 'Người cập nhật' },
      { key: 'roleGroup', title: 'Nhóm quyền' },
      { key: 'updatedAt', title: 'Thời gian cập nhật' },
      {
        key: 'actions', title: 'Tùy chỉnh', fixed: 'right',
        render: (_, row) => `<div class="dms-action-buttons">${actionBtn('d-rw-act', row.id, canActReward(row), 'approve', 'Trả thưởng')}</div>`
      }
    ];
  }
  function renderRewardBody(store) {
    const st = rewardState();
    const filtered = sortRewards(filterRewards(store, st).map(enrichReward));
    const total = filtered.length;
    const pages = Math.max(1, Math.ceil(total / st.pageSize) || 1);
    if (st.page > pages) st.page = pages;
    const start = (st.page - 1) * st.pageSize;
    const rows = filtered.slice(start, start + st.pageSize);
    const table = rows.length
      ? DMS.render('Table', { columns: rewardColumns(), data: rows })
      : `<div class="dms-table-wrapper">${DMS.render('EmptyState', { title: 'Trống' })}</div>`;
    return table + DMS.render('Pagination', { current: st.page, pageSize: st.pageSize, total, unit: 'dòng' });
  }
  function renderGiftModal(rw) {
    if (!rw) return '';
    const gifts = rw.gifts || [];
    const rows = gifts.map((g, i) => Object.assign({ stt: i + 1 }, g));
    const cols = [
      { key: 'code', title: 'Mã sản phẩm' },
      { key: 'name', title: 'Tên sản phẩm' },
      { key: 'uom', title: 'Đơn vị' },
      { key: 'qty', title: 'Số lượng' }
    ];
    const table = rows.length
      ? DMS.render('Table', { columns: cols, data: rows })
      : `<div class="dms-table-wrapper">${DMS.render('EmptyState', { title: 'Trống' })}</div>`;
    return DMS.render('Modal', {
      id: 'display-gift-modal',
      title: 'Chi tiết trả thưởng',
      size: 'lg',
      body: `<p class="dms-form-item__label">Kết quả trả thưởng</p>
        ${DisplayShared.tagOf(DisplayShared.REWARD_LIST_RESULTS, rw.result)}${table}`,
      footer: DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'd-rw-close-gift' })
    });
  }
  function renderHistoryModal(store) {
    const st = histState();
    let list = st.searched ? (store.rewardHistory || []) : [];
    const from = DisplayShared.parseDmy(st.from);
    const to = DisplayShared.parseDmy(st.to);
    if (from && to) {
      list = list.filter((h) => DisplayShared.inRange(h.at, from, to));
    }
    const total = list.length;
    const pages = Math.max(1, Math.ceil(total / st.pageSize) || 1);
    if (st.page > pages) st.page = pages;
    const start = (st.page - 1) * st.pageSize;
    const rows = list.slice(start, start + st.pageSize).map((h, i) => Object.assign({}, h, { stt: start + i + 1 }));
    const cols = [
      { key: 'stt', title: 'STT' },
      { key: 'at', title: 'Thời gian cập nhật' },
      { key: 'user', title: 'Người cập nhật' },
      { key: 'userName', title: 'Tên người cập nhật' },
      { key: 'roleGroup', title: 'Nhóm quyền' },
      { key: 'code', title: 'Mã trả thưởng' },
      { key: 'field', title: 'Trường thông tin' },
      { key: 'oldValue', title: 'Nội dung cũ' },
      { key: 'newValue', title: 'Nội dung mới' }
    ];
    const table = rows.length
      ? DMS.render('Table', { columns: cols, data: rows })
      : `<div class="dms-table-wrapper">${DMS.render('EmptyState', { title: 'Trống' })}</div>`;
    return DMS.render('Modal', {
      id: 'display-hist-modal',
      title: 'Chi tiết lịch sử',
      size: 'xxl',
      body: `<p class="display-page__desc">Chọn thời gian xem lịch sử (tối đa 31 ngày)</p>
        <div class="display-date-range dms-mb-md">
          ${DMS.render('DatePicker', { id: 'd-rw-hist-from', placeholder: 'Từ ngày', value: st.from })}
          ${DMS.render('DatePicker', { id: 'd-rw-hist-to', placeholder: 'Đến ngày', value: st.to })}
          ${DMS.render('Button', { text: 'Tìm kiếm', type: 'primary', dataAction: 'd-rw-hist-search' })}
          ${DMS.render('Button', { text: 'Export', type: 'default', dataAction: 'd-rw-hist-export' })}
        </div>
        ${table}
        ${DMS.render('Pagination', { current: st.page, pageSize: st.pageSize, total, unit: 'dòng' })}`,
      footer: DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'd-rw-close-hist' })
    });
  }
  async function renderDisplayReward() {
    const store = await DisplayShared.loadStore();
    const st = rewardState();
    const params = DisplayShared.queryParams();
    const routeOpts = [...new Map((store.registrations || []).map((r) => [r.routeCode, { value: r.routeCode, label: r.routeCode + ' - ' + r.routeName }])).values()];
    const filter = DMS.render('FilterPanel', {
      fields: [
        { type: 'search', id: 'd-rw-q', label: 'Tìm kiếm', placeholder: 'Tìm theo mã điểm bán, tên điểm bán', value: st.q },
        { type: 'select', id: 'd-rw-route', label: 'Tuyến bán hàng', placeholder: 'Tuyến bán hàng', value: st.route, options: routeOpts },
        { type: 'select', id: 'd-rw-prog', label: 'Chương trình trưng bày', placeholder: 'Chương trình trưng bày', value: st.programId, options: programOptionsAllExceptInit(store) },
        { type: 'select', id: 'd-rw-type', label: 'Loại chương trình', placeholder: 'Loại chương trình', value: st.type, options: DisplayShared.TYPES },
        { type: 'select', id: 'd-rw-mode', label: 'Hình thức trả thưởng', placeholder: 'Hình thức trả thưởng', value: st.rewardMode, options: DisplayShared.REWARD_MODES },
        { type: 'select', id: 'd-rw-kind', label: 'Loại phần thưởng', placeholder: 'Loại phần thưởng', value: st.rewardType, options: DisplayShared.REWARD_TYPES },
        { type: 'select', id: 'd-rw-result', label: 'Kết quả trả thưởng', placeholder: 'Kết quả trả thưởng', value: st.result, options: DisplayShared.REWARD_LIST_RESULTS.map((s) => ({ value: s.key, label: s.label })) }
      ]
    });
    const card = DMS.render('Card', {
      title: 'Danh sách trả thưởng trưng bày',
      extra: `${DMS.render('Button', { text: 'Lịch sử cập nhật', type: 'default', dataAction: 'd-rw-hist' })}
        ${DMS.render('Button', { text: 'Import Excel', type: 'default', dataAction: 'd-rw-import' })}
        ${DMS.render('Button', { text: 'Export Excel', type: 'default', dataAction: 'd-rw-export' })}`,
      body: `<div id="d-rw-body">${renderRewardBody(store)}</div>`
    });
    let overlay = '';
    if (params.get('gift')) overlay += renderGiftModal(DisplayShared.findReward(params.get('gift')));
    if (params.get('history')) overlay += renderHistoryModal(store);
    return `<div class="display-page" data-display-reward>
      ${DisplayShared.breadcrumb('Danh Sách Trả Thưởng Trưng Bày')}
      <h1 class="dms-page-header__title dms-mt-md">Danh Sách Trả Thưởng Trưng Bày</h1>
      ${filter}${card}${overlay}
    </div>`;
  }
  function openRewardAction(id) {
    const rw = DisplayShared.findReward(id);
    if (!rw) return;
    if (!canActReward(rw)) {
      toast('Mã trả thưởng đã có trạng thái Đã trả thưởng/ Từ chối/ Hết hạn . Vui lòng kiểm tra lại!', 'error');
      return;
    }
    const el = DMS.get('Modal').show({
      id: 'd-rw-act-modal', title: 'Tuỳ chọn', size: 'sm',
      body: `${DMS.render('Radio', { name: 'd-rw-ap', value: 'ok', checked: true, label: 'Trả thưởng' })}
        ${DMS.render('Radio', { name: 'd-rw-ap', value: 'no', label: 'Từ chối' })}
        <div id="d-rw-order-wrap">${DMS.render('Input', { id: 'd-rw-order', label: 'Mã đơn hàng', placeholder: 'Mã đơn hàng' })}</div>
        <div id="d-rw-reason-wrap" hidden>${DMS.render('Textarea', { id: 'd-rw-reason', label: 'Lý do từ chối', placeholder: 'Nhập vào lý do từ chối.', rows: 3 })}
          <div class="dms-form-item__error" id="err-d-rw-reason" hidden>Lý do từ chối là bắt buộc!</div></div>`,
      footer: `${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'modal-close' })}
        ${DMS.render('Button', { text: 'Cập nhật', type: 'primary', dataAction: 'd-rw-act-ok' })}`
    });
    el.addEventListener('change', () => {
      const no = el.querySelector('input[name="d-rw-ap"][value="no"]')?.checked;
      const order = el.querySelector('#d-rw-order-wrap');
      const reason = el.querySelector('#d-rw-reason-wrap');
      if (order) order.hidden = !!no;
      if (reason) reason.hidden = !no;
    });
    el.addEventListener('click', (ev) => {
      if (!ev.target.closest('[data-action="d-rw-act-ok"]')) return;
      const latest = DisplayShared.findReward(id);
      if (!latest || !canActReward(latest)) {
        toast('Mã trả thưởng đã có trạng thái Đã trả thưởng/ Từ chối/ Hết hạn . Vui lòng kiểm tra lại!', 'error');
        el.remove();
        return;
      }
      const no = el.querySelector('input[name="d-rw-ap"][value="no"]')?.checked;
      if (no) {
        const reason = (el.querySelector('#d-rw-reason')?.value || '').trim().slice(0, 100);
        if (!reason) { const err = el.querySelector('#err-d-rw-reason'); if (err) err.hidden = false; return; }
        latest.result = 'REJECTED';
        latest.reason = reason;
        latest.orderCode = '';
      } else {
        latest.result = 'RECEIVED';
        latest.reason = '';
        latest.orderCode = (el.querySelector('#d-rw-order')?.value || '').trim();
      }
      latest.updatedAt = now();
      latest.updatedBy = 'NV0001 - Nguyễn An';
      const store = window.__displayStore;
      store.rewardHistory = store.rewardHistory || [];
      store.rewardHistory.unshift({
        at: latest.updatedAt, user: 'NV0001', userName: 'Nguyễn An', roleGroup: '',
        code: latest.code, field: 'Kết quả trả thưởng',
        oldValue: rw.result === 'EXPIRED' ? 'Hết hạn' : 'Chờ trả thưởng',
        newValue: no ? 'Từ chối' : 'Đã trả thưởng'
      });
      el.remove();
      toast('Cập nhật thành công', 'success');
      DMSRouter.navigate('/display/reward', true);
    });
  }
  renderDisplayReward.onMount = function (container) {
    container.addEventListener('click', (e) => {
      if (e.target.closest('[data-copy]')) {
        const t = e.target.closest('[data-copy]').getAttribute('data-copy');
        if (navigator.clipboard) navigator.clipboard.writeText(t);
        toast('Đã sao chép', 'success'); return;
      }
      if (e.target.closest('[data-action="filter-search"]')) {
        const st = rewardState();
        st.q = document.getElementById('d-rw-q')?.value || '';
        st.route = document.getElementById('d-rw-route')?.value || '';
        st.programId = document.getElementById('d-rw-prog')?.value || '';
        st.type = document.getElementById('d-rw-type')?.value || '';
        st.rewardMode = document.getElementById('d-rw-mode')?.value || '';
        st.rewardType = document.getElementById('d-rw-kind')?.value || '';
        st.result = document.getElementById('d-rw-result')?.value || '';
        st.page = 1;
        DMSRouter.navigate('/display/reward', true); return;
      }
      if (e.target.closest('[data-action="filter-reset"]')) {
        window.__displayRewardState = { q: '', route: '', programId: '', type: '', rewardMode: '', rewardType: '', result: '', page: 1, pageSize: 10 };
        DMSRouter.navigate('/display/reward', true); return;
      }
      if (e.target.closest('[data-page]') && !e.target.closest('#display-hist-modal')) {
        rewardState().page = Number(e.target.closest('[data-page]').getAttribute('data-page'));
        DMSRouter.navigate('/display/reward', true); return;
      }
      if (e.target.closest('[data-action="d-rw-export"]')) {
        DMS.get('Dialog').confirm('Bạn có muốn xuất danh sách nhận thưởng không ?', () => {
          toast('Đã xuất Excel (prototype)', 'success');
        });
        return;
      }
      if (e.target.closest('[data-action="d-rw-import"]')) {
        const el = DMS.get('Modal').show({
          id: 'd-rw-imp', title: 'Import Excel', size: 'md',
          body: `<div class="display-drop">Chọn hoặc kéo file đến vị trí này<input type="file" accept=".xlsx" /></div>
            <p class="display-page__desc">Hỗ trợ tải đơn lẻ từng file. Chỉ nhập những file theo đúng định dạng có sẵn.</p>
            ${DMS.render('Button', { text: 'Lấy file mẫu', type: 'link', dataAction: 'd-rw-tpl' })}`,
          footer: `${DMS.render('Button', { text: 'Hủy', type: 'default', dataAction: 'modal-close' })}
            ${DMS.render('Button', { text: 'Tiến hành xử lý', type: 'primary', dataAction: 'd-rw-imp-ok' })}`
        });
        el.addEventListener('click', (ev) => {
          if (ev.target.closest('[data-action="d-rw-tpl"]')) { toast('Đã tải file mẫu (prototype)', 'success'); return; }
          if (!ev.target.closest('[data-action="d-rw-imp-ok"]')) return;
          DMS.get('Dialog').confirm('Bạn chắc chắn thao tác này không?', () => { el.remove(); toast('Import thành công', 'success'); });
        });
        return;
      }
      if (e.target.closest('[data-action="d-rw-hist"]')) {
        histState().searched = false; histState().page = 1;
        DMSRouter.navigate('/display/reward?history=1', true); return;
      }
      if (e.target.closest('[data-action="d-rw-close-hist"]') || e.target.id === 'display-hist-modal') {
        DMSRouter.navigate('/display/reward', true); return;
      }
      if (e.target.closest('#display-hist-modal [data-action="modal-close"]')) {
        DMSRouter.navigate('/display/reward', true); return;
      }
      if (e.target.closest('[data-action="d-rw-hist-search"]')) {
        const hs = histState();
        hs.from = document.getElementById('d-rw-hist-from')?.value || '';
        hs.to = document.getElementById('d-rw-hist-to')?.value || '';
        const from = DisplayShared.parseDmy(hs.from);
        const to = DisplayShared.parseDmy(hs.to);
        if (from && to) {
          const days = Math.round((to - from) / 86400000) + 1;
          if (days > 31) { toast('Chọn thời gian xem lịch sử (tối đa 31 ngày)', 'error'); return; }
        }
        hs.searched = true; hs.page = 1;
        DMSRouter.navigate('/display/reward?history=1', true); return;
      }
      if (e.target.closest('[data-action="d-rw-hist-export"]')) {
        toast('Đã xuất Excel (prototype)', 'success'); return;
      }
      if (e.target.closest('#display-hist-modal [data-page]')) {
        histState().page = Number(e.target.closest('[data-page]').getAttribute('data-page'));
        DMSRouter.navigate('/display/reward?history=1', true); return;
      }
      if (e.target.closest('[data-action="d-rw-close-gift"]') || e.target.id === 'display-gift-modal' || e.target.closest('#display-gift-modal [data-action="modal-close"]')) {
        DMSRouter.navigate('/display/reward', true); return;
      }
      const act = e.target.closest('[data-action^="d-rw-act-"]');
      if (act && act.getAttribute('data-action') !== 'd-rw-act-ok') {
        openRewardAction(act.getAttribute('data-action').replace('d-rw-act-', ''));
      }
    });
    container.addEventListener('change', (e) => {
      if (e.target.closest('#display-hist-modal .dms-pagination__size select')) {
        histState().pageSize = Number(e.target.value) || 10; histState().page = 1;
        DMSRouter.navigate('/display/reward?history=1', true); return;
      }
      if (e.target.closest('.dms-pagination__size select')) {
        rewardState().pageSize = Number(e.target.value) || 10; rewardState().page = 1;
        DMSRouter.navigate('/display/reward', true);
      }
    });
  };

  window.renderDisplayOverview = renderDisplayOverview;
  window.renderDisplayEvent = renderDisplayEvent;
  window.renderDisplayParticipant = renderDisplayParticipant;
  window.renderDisplayProcess = renderDisplayProcess;
  window.renderDisplayReward = renderDisplayReward;
})();
