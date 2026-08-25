/**
 * Quản Lý Tích Lũy
 * Batch 1 Overview | 2-4 CTTL | 5 Đăng ký | 6 Tiến trình | 7 Trả thưởng
 */
(function () {
  'use strict';

  function toast(msg, type) { DMS.get('Toast').show(msg, type || 'info'); }
  function now() { return AccumulateShared.nowLabel(); }
  function A() { return AccumulateShared; }

  function eventUrl(extra) {
    const p = A().queryParams();
    const next = Object.assign({
      mode: p.get('mode') || '',
      id: p.get('id') || '',
      content: p.get('content') || ''
    }, extra || {});
    const q = [];
    if (next.mode) q.push('mode=' + encodeURIComponent(next.mode));
    if (next.id) q.push('id=' + encodeURIComponent(next.id));
    if (next.content) q.push('content=' + encodeURIComponent(next.content));
    return '/accumulate/event' + (q.length ? '?' + q.join('&') : '');
  }
  function remountEvent(extra) { DMSRouter.navigate(eventUrl(extra), true); }

  function monthRange() {
    const r = A().presetRange('monthly', new Date());
    return { from: A().toDmy(r.from), to: A().toDmy(r.to) };
  }
  function last30() {
    const r = A().lastNDays(30, new Date());
    return { from: A().toDmy(r.from), to: A().toDmy(r.to) };
  }

  function eventState() {
    if (!window.__accEventState) {
      const d = monthRange();
      window.__accEventState = { q: '', status: '', registerMode: '', rewardMode: '', auto: '', from: d.from, to: d.to, page: 1, pageSize: 10 };
    }
    return window.__accEventState;
  }
  function regState() {
    if (!window.__accRegState) {
      const d = last30();
      window.__accRegState = { q: '', dist: '', route: '', programId: '', status: '', from: d.from, to: d.to, approveFrom: '', approveTo: '', page: 1, pageSize: 10 };
    }
    return window.__accRegState;
  }
  function processState() {
    if (!window.__accProcessState) {
      const d = monthRange();
      window.__accProcessState = { q: '', route: '', programId: '', status: '', result: '', rewardMode: '', from: d.from, to: d.to, page: 1, pageSize: 10 };
    }
    return window.__accProcessState;
  }
  function rewardState() {
    if (!window.__accRewardState) {
      const d = monthRange();
      window.__accRewardState = { q: '', route: '', programId: '', rewardMode: '', rewardType: '', result: '', from: d.from, to: d.to, page: 1, pageSize: 10 };
    }
    return window.__accRewardState;
  }
  function histState() {
    if (!window.__accRewardHistState) {
      window.__accRewardHistState = { from: '', to: '', searched: false, page: 1, pageSize: 10 };
    }
    return window.__accRewardHistState;
  }

  function actionBtn(action, id, enabled, type, title) {
    return DMS.render('ActionIconButton', {
      type: type, title: title, disabled: !enabled,
      dataAction: enabled ? action + '-' + id : ''
    });
  }

  /* ========== OVERVIEW ========== */
  function overviewState() {
    if (!window.__accOverviewState) window.__accOverviewState = { preset: 'monthly', from: '', to: '' };
    return window.__accOverviewState;
  }
  function resolveRange(st, today) {
    if (st.preset) return A().presetRange(st.preset, today);
    const from = A().parseDmy(st.from);
    const to = A().parseDmy(st.to);
    if (from && to) return { from, to };
    return A().presetRange('monthly', today);
  }
  function renderPreset(st) {
    const opts = [
      { value: 'today', label: 'Hôm nay' },
      { value: 'weekly', label: 'Tuần này' },
      { value: 'monthly', label: 'Tháng này' }
    ];
    return `<div class="dms-radio-btns" data-acc-preset>
      ${opts.map((o) => `<label class="dms-radio-btns__item ${st.preset === o.value ? 'is-checked' : ''}">
        <input type="radio" name="acc-overview-preset" value="${o.value}" ${st.preset === o.value ? 'checked' : ''} />
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
  async function renderAccumulateOverview() {
    const store = await A().loadStore();
    const st = overviewState();
    const charts = A().buildOverviewCharts(store, resolveRange(st, new Date()));
    const byId = {};
    charts.forEach((c) => { byId[c.id] = c.items; });
    const cards = A().CHART_META.map((meta) => renderChartCard(meta, byId[meta.id] || [])).join('');
    return `<div class="display-page" data-acc-overview>
      ${A().breadcrumb('Tổng Quan Chương Trình Tích Lũy')}
      <div class="dms-page-header"><h1 class="dms-page-header__title">Tổng Quan Chương Trình Tích Lũy</h1></div>
      <p class="display-page__desc">Giúp người dùng theo dõi tình hình hoạt động của các chương trình tích lũy theo thời gian (hôm nay, tuần này, tháng này, thời gian tùy chọn)</p>
      <div class="display-overview-filter">
        ${renderPreset(st)}
        ${DMS.render('DatePicker', { id: 'acc-overview-from', placeholder: 'Ngày bắt đầu', value: st.from })}
        ${DMS.render('DatePicker', { id: 'acc-overview-to', placeholder: 'Ngày kết thúc', value: st.to })}
      </div>
      <div class="display-chart-grid">${cards}</div>
    </div>`;
  }
  async function refreshOverview(container) {
    const store = await A().loadStore();
    const st = overviewState();
    A().buildOverviewCharts(store, resolveRange(st, new Date())).forEach((c) => {
      DMS.get('DonutChart').update(container.querySelector(`[data-donut-chart="${c.id}"]`), c.items);
    });
    container.querySelectorAll('[data-acc-preset] .dms-radio-btns__item').forEach((lab) => {
      const val = lab.querySelector('input')?.value;
      lab.classList.toggle('is-checked', st.preset === val);
      const input = lab.querySelector('input');
      if (input) input.checked = st.preset === val;
    });
  }
  renderAccumulateOverview.onMount = function (container) {
    DMS.get('DonutChart').bindAll(container);
    container.addEventListener('click', (e) => {
      const item = e.target.closest('[data-acc-preset] .dms-radio-btns__item');
      if (!item) return;
      const val = item.querySelector('input')?.value;
      if (!val) return;
      const st = overviewState();
      st.preset = val; st.from = ''; st.to = '';
      const fromInput = container.querySelector('#acc-overview-from');
      const toInput = container.querySelector('#acc-overview-to');
      if (fromInput) fromInput.value = '';
      if (toInput) toInput.value = '';
      refreshOverview(container);
    });
    container.addEventListener('change', (e) => {
      if (!e.target.closest('#acc-overview-from, #acc-overview-to')) return;
      const fromInput = container.querySelector('#acc-overview-from');
      const toInput = container.querySelector('#acc-overview-to');
      const fromVal = fromInput?.value || '';
      const toVal = toInput?.value || '';
      const from = A().parseDmy(fromVal);
      const to = A().parseDmy(toVal);
      const st = overviewState();
      if ((from && !A().yearAllowed(from)) || (to && !A().yearAllowed(to))) {
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
    const from = A().parseDmy(st.from);
    const to = A().parseDmy(st.to);
    return items.filter((it) => {
      if (q && !(String(it.code || '').toLowerCase().includes(q) || String(it.name || '').toLowerCase().includes(q))) return false;
      if (st.status && it.status !== st.status) return false;
      if (st.registerMode && it.registerMode !== st.registerMode) return false;
      if (st.rewardMode && it.rewardMode !== st.rewardMode) return false;
      if (st.auto === 'true' && !it.autoApprove) return false;
      if (st.auto === 'false' && it.autoApprove) return false;
      if (from && to && !A().overlaps(A().parseDmy(it.startDate), A().parseDmy(it.endDate), from, to)) return false;
      return true;
    });
  }
  function eventColumns() {
    return [
      { key: 'stt', title: 'STT', width: '56px', render: (v) => v },
      { key: 'image', title: 'Ảnh', render: () => '<span class="dms-text-secondary">Trống</span>' },
      { key: 'code', title: 'Mã CTTL', render: (val) => A().copyCell(val, DMS.escape(val)) },
      { key: 'name', title: 'Tên CTTL', render: (val, row) => `<a class="dms-table__link" data-route="${eventUrl({ mode: '', id: row.id, content: '' })}">${DMS.escape(val)}</a>` },
      { key: 'content', title: 'Nội dung chương trình', render: (_, row) => `<a class="dms-table__link" data-route="${eventUrl({ mode: '', id: '', content: row.id })}">Xem chi tiết</a>` },
      { key: 'priority', title: 'Độ ưu tiên' },
      { key: 'status', title: 'Trạng thái', render: (val) => A().tagOf(A().PROGRAM_STATUSES, val) },
      { key: 'reason', title: 'Lý do từ chối', render: (val) => DMS.escape(val || '') },
      { key: 'registerMode', title: 'Hình thức đăng ký', render: (val) => A().catalogLabel(A().REGISTER_MODES, val) },
      { key: 'rewardMode', title: 'Hình thức trả thưởng', render: (val) => A().catalogLabel(A().REWARD_MODES, val) },
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
          const a = A().programActions(row);
          return `<div class="dms-action-buttons">
            ${actionBtn('a-view', row.id, a.view, 'view', 'Xem')}
            ${actionBtn('a-edit', row.id, a.edit, 'edit', 'Điều chỉnh')}
            ${actionBtn('a-copy', row.id, a.copy, 'duplicate', 'Sao chép')}
            ${actionBtn('a-tool', row.id, a.approve || a.stop, a.approve ? 'approve' : 'stop', a.approve ? 'Duyệt / Từ chối' : 'Ngưng hoạt động')}
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
    return table + DMS.render('Pagination', { current: st.page, pageSize: st.pageSize, total, unit: 'chương trình tích lũy' });
  }
  function readEventFilters() {
    const st = eventState();
    st.q = document.getElementById('a-ev-q')?.value || '';
    st.status = document.getElementById('a-ev-status')?.value || '';
    st.registerMode = document.getElementById('a-ev-reg')?.value || '';
    st.rewardMode = document.getElementById('a-ev-reward')?.value || '';
    st.auto = document.getElementById('a-ev-auto')?.value || '';
    st.from = document.getElementById('a-ev-from')?.value || '';
    st.to = document.getElementById('a-ev-to')?.value || '';
    st.page = 1;
  }
  async function renderAccumulateEvent() {
    const store = await A().loadStore();
    const params = A().queryParams();
    const mode = params.get('mode') || '';
    const id = params.get('id') || '';
    const contentId = params.get('content') || '';
    const st = eventState();
    if ((mode === 'edit' || mode === 'copy') && id) {
      const item = A().findProgram(id);
      if (item && A().getDraft()._src !== mode + id) {
        A().loadDraft(item, mode);
        A().getDraft()._src = mode + id;
      }
    }
    if (mode === 'create' && A().getDraft()._src !== 'create') {
      A().resetDraft();
      A().getDraft()._src = 'create';
    }
    const filter = DMS.render('FilterPanel', {
      title: 'Tìm kiếm theo',
      fields: [
        { type: 'search', id: 'a-ev-q', label: 'Chương trình tích lũy', placeholder: 'Mã | Tên', value: st.q },
        { type: 'select', id: 'a-ev-status', label: 'Trạng thái', placeholder: 'Chọn trạng thái', value: st.status, options: A().PROGRAM_STATUSES.map((s) => ({ value: s.key, label: s.label })) },
        { type: 'select', id: 'a-ev-reg', label: 'Hình thức đăng ký', placeholder: 'Chọn hình thức đăng ký', value: st.registerMode, options: A().REGISTER_MODES },
        { type: 'select', id: 'a-ev-reward', label: 'Hình thức trả thưởng', placeholder: 'Chọn hình thức trả thưởng', value: st.rewardMode, options: A().REWARD_MODES },
        { type: 'select', id: 'a-ev-auto', label: 'Tự động duyệt', placeholder: 'Tự động duyệt', value: st.auto, options: A().YES_NO },
        { type: 'date', id: 'a-ev-from', label: 'Thời gian', placeholder: 'Từ ngày', value: st.from },
        { type: 'date', id: 'a-ev-to', label: ' ', placeholder: 'Đến ngày', value: st.to }
      ]
    });
    const card = DMS.render('Card', {
      title: 'Danh sách chương trình tích lũy',
      extra: `${DMS.render('Button', { text: 'Export Excel', type: 'default', dataAction: 'a-export-event' })}
        ${DMS.render('Button', { text: 'Tạo mới', type: 'primary', dataAction: 'a-create' })}`,
      body: `<div id="a-event-body">${renderEventListBody(store)}</div>`
    });
    let overlay = '';
    if (mode === 'create' || mode === 'edit' || mode === 'copy' || (id && !contentId && !mode)) {
      const viewMode = (id && !mode) ? 'view' : mode;
      if (viewMode === 'view') {
        const item = A().findProgram(id);
        if (item && A().getDraft()._src !== 'view' + id) {
          A().loadDraft(item, 'edit');
          A().getDraft()._src = 'view' + id;
          A().getDraft().step = 1;
        }
      }
      overlay += A().renderWizard(
        A().getDraft(),
        viewMode === 'view' ? 'view' : (mode === 'edit' ? 'edit' : 'create'),
        A().getDraft()._errors || {}
      );
    }
    if (contentId) {
      const item = A().findProgram(contentId);
      overlay += DMS.render('Modal', {
        id: 'acc-content-modal',
        title: 'Nội dung chương trình',
        size: 'md',
        body: `<div class="display-content-preview">${item ? (item.content || DMS.escape(item.name)) : 'Trống'}</div>`,
        footer: DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'a-close-content' })
      });
    }
    return `<div class="display-page" data-acc-event>
      ${A().breadcrumb('Chương Trình Tích Lũy')}
      <h1 class="dms-page-header__title dms-mt-md">Chương Trình Tích Lũy</h1>
      ${filter}${card}${overlay}
    </div>`;
  }
  function closeWizardIfDirty() {
    const d = A().getDraft();
    const go = () => { A().resetDraft(); remountEvent({ mode: '', id: '', content: '' }); };
    if (A().draftIsDirty(d)) {
      DMS.get('Dialog').confirm('Màn hình đã có dữ liệu, bạn có muốn thoát?', go);
    } else go();
  }
  function bindWizard(container) {
    const modal = container.querySelector('#accumulate-wizard-modal');
    if (!modal) return;
    modal.addEventListener('click', (e) => {
      if (e.target.closest('[data-action="modal-close"]') || e.target.id === 'accumulate-wizard-modal') {
        const params = A().queryParams();
        if (params.get('mode')) closeWizardIfDirty();
        else remountEvent({ mode: '', id: '', content: '' });
        return;
      }
      const d = A().getDraft();
      const params = A().queryParams();
      const mode = params.get('id') && !params.get('mode') ? 'view' : (params.get('mode') === 'edit' ? 'edit' : 'create');
      if (e.target.closest('[data-action="a-target-add"]')) {
        A().readDraftFromDom(d);
        d.targets.push({ type: '', values: [] });
        remountEvent();
        return;
      }
      const del = e.target.closest('[data-action^="a-target-del-"]');
      if (del) {
        A().readDraftFromDom(d);
        d.targets.splice(Number(del.getAttribute('data-action').split('-').pop()), 1);
        remountEvent();
        return;
      }
      if (e.target.closest('[data-action="a-gen-stages"]')) {
        A().readDraftFromDom(d);
        if (!d.startDate || !d.endDate || !d.stageCount || !d.rewardMode) {
          d._errors = A().validateStep(d, 3);
          remountEvent();
          return;
        }
        A().genStages(d);
        remountEvent();
        return;
      }
      if (e.target.closest('[data-action="a-ms-add"]')) {
        A().readDraftFromDom(d);
        d.milestones.push(A().emptyMilestone((d.milestones || []).length + 1));
        remountEvent();
        return;
      }
      const msDel = e.target.closest('[data-action^="a-ms-del-"]');
      if (msDel) {
        A().readDraftFromDom(d);
        d.milestones.splice(Number(msDel.getAttribute('data-action').split('-').pop()), 1);
        remountEvent();
        return;
      }
      const condAdd = e.target.closest('[data-action^="a-cond-add-"]');
      if (condAdd) {
        A().readDraftFromDom(d);
        const idx = Number(condAdd.getAttribute('data-action').replace('a-cond-add-', ''));
        d.milestones[idx].conditions = d.milestones[idx].conditions || [];
        d.milestones[idx].conditions.push(A().emptyCondition());
        remountEvent();
        return;
      }
      const condDel = e.target.closest('[data-action^="a-cond-del-"]');
      if (condDel) {
        A().readDraftFromDom(d);
        const parts = condDel.getAttribute('data-action').replace('a-cond-del-', '').split('-');
        const mi = Number(parts[0]); const cj = Number(parts[1]);
        d.milestones[mi].conditions.splice(cj, 1);
        remountEvent();
        return;
      }
      if (e.target.closest('[data-action="a-back"]')) {
        A().readDraftFromDom(d);
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
      if (e.target.closest('[data-action="a-next"]')) {
        A().readDraftFromDom(d);
        if (mode !== 'view') {
          d._errors = A().validateStep(d, d.step || 1);
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
      if (e.target.closest('[data-action="a-save"]')) {
        A().readDraftFromDom(d);
        d._errors = Object.assign(
          {},
          A().validateStep(d, 1),
          A().validateStep(d, 2),
          A().validateStep(d, 3),
          A().validateStep(d, 4)
        );
        if (Object.keys(d._errors).length) {
          toast('Có lỗi xảy ra ở các ô nhập, vui lòng kiểm tra lại', 'error');
          remountEvent();
          return;
        }
        d._errors = {};
        DMS.get('Dialog').confirm('Bạn chắc chắn thao tác này không?', () => {
          A().saveProgram(d, params.get('mode') === 'edit' ? 'edit' : 'create');
          A().resetDraft();
          toast('Lưu thành công', 'success');
          remountEvent({ mode: '', id: '', content: '' });
        });
      }
    });
    modal.addEventListener('change', (e) => {
      const fid = e.target.id || '';
      if (!fid) return;
      if (fid === 'a-type' || fid === 'a-contract' || fid === 'a-reward-kind' || fid.startsWith('a-ms-rt-') || fid.endsWith('-type') || fid.endsWith('-lim')) {
        const d = A().getDraft();
        A().readDraftFromDom(d);
        if (d.type === 'SALEMAN') d.contractRequired = 'NONE';
        remountEvent();
      }
    });
  }
  renderAccumulateEvent.onMount = function (container) {
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
        const d = monthRange();
        window.__accEventState = { q: '', status: '', registerMode: '', rewardMode: '', auto: '', from: d.from, to: d.to, page: 1, pageSize: 10 };
        remountEvent({ mode: '', id: '', content: '' });
        return;
      }
      if (e.target.closest('[data-action="a-create"]')) {
        A().resetDraft();
        A().getDraft()._src = 'create';
        remountEvent({ mode: 'create', id: '', content: '' });
        return;
      }
      if (e.target.closest('[data-action="a-export-event"]')) { toast('Đã xuất Excel (prototype)', 'success'); return; }
      if (e.target.closest('#acc-content-modal [data-action="modal-close"], [data-action="a-close-content"]') || e.target.id === 'acc-content-modal') {
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
      const viewM = a.match(/^a-view-(.+)$/);
      const editM = a.match(/^a-edit-(.+)$/);
      const copyM = a.match(/^a-copy-(.+)$/);
      const toolM = a.match(/^a-tool-(.+)$/);
      if (viewM) { remountEvent({ mode: '', id: viewM[1], content: '' }); return; }
      if (editM) { remountEvent({ mode: 'edit', id: editM[1], content: '' }); return; }
      if (copyM) { remountEvent({ mode: 'copy', id: copyM[1], content: '' }); return; }
      if (toolM) {
        const p = A().findProgram(toolM[1]);
        if (!p) return;
        const acts = A().programActions(p);
        if (acts.approve) {
          const el = DMS.get('Modal').show({
            id: 'a-approve-modal', title: 'Duyệt chương trình tích lũy', size: 'sm',
            body: `<p>Chọn thao tác cho <strong>${DMS.escape(p.code)}</strong></p>
              ${DMS.render('Radio', { name: 'a-appr', value: 'ok', checked: true, label: 'Duyệt' })}
              ${DMS.render('Radio', { name: 'a-appr', value: 'no', label: 'Từ chối' })}
              <div id="a-appr-reason" hidden>${DMS.render('Input', { id: 'a-appr-reason-val', label: 'Lý do từ chối', placeholder: 'Nhập lý do', requiredMark: true })}
                <div class="dms-form-item__error" id="err-a-appr-reason" hidden>Lý do từ chối là bắt buộc!</div></div>`,
            footer: `${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'modal-close' })}
              ${DMS.render('Button', { text: 'Đồng ý', type: 'primary', dataAction: 'a-appr-ok' })}`
          });
          el.addEventListener('change', () => {
            const no = el.querySelector('input[name="a-appr"][value="no"]')?.checked;
            const box = el.querySelector('#a-appr-reason');
            if (box) box.hidden = !no;
          });
          el.addEventListener('click', (ev) => {
            if (!ev.target.closest('[data-action="a-appr-ok"]')) return;
            const no = el.querySelector('input[name="a-appr"][value="no"]')?.checked;
            if (no) {
              const reason = (el.querySelector('#a-appr-reason-val')?.value || '').trim().slice(0, 100);
              if (!reason) { const err = el.querySelector('#err-a-appr-reason'); if (err) err.hidden = false; return; }
              p.status = 'REJECTED';
              p.reason = 'Lý do từ chối duyệt: ' + reason;
            } else {
              p.status = A().approveProgramStatus(p);
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
            id: 'a-stop-modal', title: 'Ngưng hoạt động', size: 'sm',
            body: `${DMS.render('Input', { id: 'a-stop-reason', label: 'Lý do ngưng hoạt động', placeholder: 'Nhập lý do', requiredMark: true })}
              <div class="dms-form-item__error" id="err-a-stop" hidden>Lý do ngưng hoạt động là bắt buộc!</div>`,
            footer: `${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'modal-close' })}
              ${DMS.render('Button', { text: 'Đồng ý', type: 'primary', dataAction: 'a-stop-ok' })}`
          });
          el.addEventListener('click', (ev) => {
            if (!ev.target.closest('[data-action="a-stop-ok"]')) return;
            const reason = (el.querySelector('#a-stop-reason')?.value || '').trim().slice(0, 100);
            if (!reason) { const err = el.querySelector('#err-a-stop'); if (err) err.hidden = false; return; }
            p.status = 'STOPPED';
            p.reason = 'Lý do ngưng hoạt động: ' + reason;
            p.updatedAt = now(); p.updatedBy = 'NV0001 - Nguyễn An';
            const store = window.__accumulateStore;
            (store.registrations || []).forEach((r) => {
              if (r.programId === p.id && r.status === 'PENDING') {
                r.status = 'REJECTED';
                r.reason = 'Ngưng hoạt động chương trình tích lũy';
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
    const from = A().parseDmy(st.from);
    const to = A().parseDmy(st.to);
    const af = A().parseDmy(st.approveFrom);
    const at = A().parseDmy(st.approveTo);
    return (store.registrations || []).filter((r) => {
      if (q && !(String(r.storeCode || '').toLowerCase().includes(q) || String(r.storeName || '').toLowerCase().includes(q))) return false;
      if (st.dist && r.distCode !== st.dist && r.distName !== st.dist) return false;
      if (st.route && r.routeCode !== st.route) return false;
      if (st.programId && r.programId !== st.programId) return false;
      if (st.status && r.status !== st.status) return false;
      if (from && to && !A().inRange(r.registeredAt, from, to)) return false;
      if (af && at) {
        if (r.status !== 'APPROVED' || !A().inRange(r.approvedAt, af, at)) return false;
      }
      return true;
    });
  }
  function regColumns() {
    return [
      { key: 'pick', title: '', width: '40px', render: (_, row) => row.status === 'PENDING'
        ? `<input type="checkbox" class="dms-checkbox__input" data-reg-check="${DMS.escape(row.id)}" />` : '' },
      { key: 'storeCode', title: 'Mã điểm bán', render: (v) => A().copyCell(v, DMS.escape(v)) },
      { key: 'storeName', title: 'Tên điểm bán' },
      { key: 'phone', title: 'Số điện thoại điểm bán', render: (v) => A().copyCell(v, DMS.escape(v || '')) },
      { key: 'province', title: 'Tỉnh/ thành phố' },
      { key: 'address', title: 'Địa chỉ' },
      { key: 'status', title: 'Trạng thái đăng ký', render: (v) => A().tagOf(A().REG_STATUSES, v) },
      { key: 'routeCode', title: 'Mã tuyến', render: (v) => A().copyCell(v, DMS.escape(v || '')) },
      { key: 'routeName', title: 'Tên tuyến' },
      { key: 'distCode', title: 'Mã NPP' },
      { key: 'distName', title: 'Tên NPP' },
      { key: 'programCode', title: 'Mã CTTL', render: (v, row) => A().copyCell(v, `<a class="dms-table__link" data-route="/accumulate/event?id=${DMS.escape(row.programId)}">${DMS.escape(v)}</a>`) },
      { key: 'programName', title: 'Tên CTTL' },
      { key: 'regStart', title: 'Ngày bắt đầu đăng ký' },
      { key: 'regEnd', title: 'Ngày kết thúc đăng ký' },
      { key: 'milestoneName', title: 'Mốc tích lũy' },
      { key: 'slots', title: 'Số suất đăng ký' },
      { key: 'registeredBy', title: 'Người đăng ký' },
      { key: 'registeredAt', title: 'Thời gian đăng ký' },
      { key: 'approvedAt', title: 'Thời gian duyệt đăng ký' },
      { key: 'reason', title: 'Lý do từ chối' },
      { key: 'images', title: 'Hình ảnh đăng ký', render: (v) => (v && v.length) ? v.length + ' file' : '' },
      { key: 'contract', title: 'Hợp đồng đăng ký', render: () => '' },
      { key: 'updatedBy', title: 'Người cập nhật' },
      { key: 'updatedAt', title: 'Ngày cập nhật' },
      {
        key: 'actions', title: 'Tùy chỉnh', fixed: 'right',
        render: (_, row) => `<div class="dms-action-buttons">
          ${actionBtn('a-reg-edit', row.id, true, 'edit', 'Cập nhật đăng ký')}
          ${actionBtn('a-reg-appr', row.id, row.status === 'PENDING', 'approve', 'Phê duyệt')}
        </div>`
      }
    ];
  }
  function enrichReg(r) {
    const p = A().findProgram(r.programId) || {};
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
    const rows = filtered.slice(start, start + st.pageSize).map((it) => enrichReg(it));
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
  async function renderAccumulateParticipant() {
    const store = await A().loadStore();
    const st = regState();
    const params = A().queryParams();
    const distOpts = [...new Map((store.registrations || []).map((r) => [r.distCode, { value: r.distCode, label: r.distCode + ' - ' + r.distName }])).values()];
    const routeOpts = [...new Map((store.registrations || []).map((r) => [r.routeCode, { value: r.routeCode, label: r.routeCode + ' - ' + r.routeName }])).values()];
    const filter = DMS.render('FilterPanel', {
      title: 'Tìm kiếm theo',
      fields: [
        { type: 'search', id: 'a-rg-q', label: 'Tìm theo mã điểm bán, tên điểm bán', placeholder: 'Tìm theo mã điểm bán, tên điểm bán', value: st.q },
        { type: 'select', id: 'a-rg-dist', label: 'Nhà phân phối', placeholder: 'Nhà phân phối', value: st.dist, options: distOpts },
        { type: 'select', id: 'a-rg-route', label: 'Tuyến bán hàng', placeholder: 'Tuyến bán hàng', value: st.route, options: routeOpts },
        { type: 'select', id: 'a-rg-prog', label: 'Chương trình tích lũy', placeholder: 'Chương trình tích lũy', value: st.programId, options: programOptionsForReg(store) },
        { type: 'select', id: 'a-rg-status', label: 'Trạng thái đăng ký', placeholder: 'Chọn trạng thái', value: st.status, options: A().REG_STATUSES.map((s) => ({ value: s.key, label: s.label })) },
        { type: 'date', id: 'a-rg-from', label: 'Thời gian đăng ký', placeholder: 'Từ ngày', value: st.from },
        { type: 'date', id: 'a-rg-to', label: ' ', placeholder: 'Đến ngày', value: st.to },
        { type: 'date', id: 'a-rg-af', label: 'Thời gian duyệt đăng ký', placeholder: 'Từ ngày', value: st.approveFrom },
        { type: 'date', id: 'a-rg-at', label: ' ', placeholder: 'Đến ngày', value: st.approveTo }
      ]
    });
    const card = DMS.render('Card', {
      title: 'Danh sách đăng ký tích lũy',
      extra: `${DMS.render('Button', { text: 'Import Excel', type: 'default', dataAction: 'a-reg-import' })}
        ${DMS.render('Button', { text: 'Export Excel', type: 'default', dataAction: 'a-reg-export' })}
        ${DMS.render('Button', { text: 'Xét duyệt', type: 'primary', dataAction: 'a-reg-bulk', disabled: true, id: 'a-reg-bulk' })}`,
      body: `<div id="a-reg-body">${renderRegBody(store)}</div>`
    });
    let overlay = '';
    const editId = params.get('edit');
    if (editId) overlay += renderRegUpdateModal(A().findReg(editId));
    return `<div class="display-page" data-acc-reg>
      ${A().breadcrumb('Danh Sách Đăng Ký Tích Lũy')}
      <h1 class="dms-page-header__title dms-mt-md">Danh Sách Đăng Ký Tích Lũy</h1>
      ${filter}${card}${overlay}
    </div>`;
  }
  function renderRegUpdateModal(reg) {
    if (!reg) return '';
    const p = A().findProgram(reg.programId) || {};
    const tab = window.__accRegTab || 'info';
    const info = `<div class="display-form-grid">
      ${[['Mã CTTL', p.code], ['Tên CTTL', p.name], ['Trạng thái CTTL', A().statusMeta(A().PROGRAM_STATUSES, p.status).label],
        ['Thời gian chương trình', (p.startDate || '') + ' → ' + (p.endDate || '')],
        ['Thời gian đăng ký', (p.registerStart || '') + ' → ' + (p.registerEnd || '')],
        ['Mã điểm bán', reg.storeCode], ['Tên điểm bán', reg.storeName], ['Số điện thoại điểm bán', reg.phone],
        ['Mã tuyến', reg.routeCode], ['Tên tuyến', reg.routeName], ['Ngày đăng ký', (reg.registeredAt || '').slice(0, 10)],
        ['Mốc tích lũy', reg.milestoneName], ['Số suất đăng ký', reg.slots],
        ['Trạng thái đăng ký', A().statusMeta(A().REG_STATUSES, reg.status).label],
        ['Loại chương trình', A().catalogLabel(A().TYPES, p.type)]
      ].map(([l, v]) => `<div class="dms-form-item"><label class="dms-form-item__label">${l}</label><div>${v || ''}</div></div>`).join('')}
    </div>`;
    const imgs = (reg.images || []).map((f, i) => `<div class="display-file-card">
      <div class="display-file-card__name">${DMS.escape(f.name)}</div>
      <div class="display-file-card__meta">${DMS.escape(f.at || '')}<br/>${DMS.escape(f.by || '')}</div>
      ${reg.status === 'PENDING' ? DMS.render('Button', { text: 'Xóa', type: 'ghost', size: 'sm', dataAction: 'a-reg-img-del-' + i }) : ''}
    </div>`).join('') || '<p class="dms-text-secondary">Chưa có file.</p>';
    const canAdd = (p.status === 'RUNNING') && (reg.status === 'PENDING' || reg.status === 'APPROVED');
    const files = `<div>
      ${canAdd ? DMS.render('Button', { text: 'Thêm file', type: 'default', dataAction: 'a-reg-add-file' }) : ''}
      <p class="display-page__desc">Tối đa 10 file (PNG, JPEG, JPG, PDF, Word), mỗi file ≤ 10MB.</p>
      <div class="display-file-list">${imgs}</div>
    </div>`;
    const body = `<div class="display-subtabs">
      <button type="button" class="display-subtabs__item ${tab === 'info' ? 'is-active' : ''}" data-reg-tab="info">Thông tin tham gia</button>
      <button type="button" class="display-subtabs__item ${tab === 'img' ? 'is-active' : ''}" data-reg-tab="img">Hình ảnh tham gia</button>
    </div>${tab === 'info' ? info : files}`;
    return DMS.render('Modal', {
      id: 'acc-reg-modal',
      title: 'Cập nhật đăng ký tham gia',
      size: 'xl',
      body,
      footer: `${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'a-reg-close' })}
        ${DMS.render('Button', { text: 'Đồng ý', type: 'primary', dataAction: 'a-reg-save-img', disabled: true, id: 'a-reg-ok' })}`
    });
  }
  function openRegApprove(ids) {
    const el = DMS.get('Modal').show({
      id: 'a-reg-appr-modal', title: 'Xét duyệt', size: 'sm',
      body: `${DMS.render('Radio', { name: 'a-reg-ap', value: 'ok', checked: true, label: 'Duyệt' })}
        ${DMS.render('Radio', { name: 'a-reg-ap', value: 'no', label: 'Từ chối' })}
        <div id="a-reg-ap-reason" hidden>${DMS.render('Input', { id: 'a-reg-ap-val', label: 'Lý do từ chối', placeholder: 'Nhập lý do', requiredMark: true })}
          <div class="dms-form-item__error" id="err-a-reg-ap" hidden>Lý do từ chối là bắt buộc!</div></div>`,
      footer: `${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'modal-close' })}
        ${DMS.render('Button', { text: 'Cập nhật', type: 'primary', dataAction: 'a-reg-ap-ok' })}`
    });
    el.addEventListener('change', () => {
      const no = el.querySelector('input[name="a-reg-ap"][value="no"]')?.checked;
      const box = el.querySelector('#a-reg-ap-reason');
      if (box) box.hidden = !no;
    });
    el.addEventListener('click', (ev) => {
      if (!ev.target.closest('[data-action="a-reg-ap-ok"]')) return;
      const no = el.querySelector('input[name="a-reg-ap"][value="no"]')?.checked;
      let reason = '';
      if (no) {
        reason = (el.querySelector('#a-reg-ap-val')?.value || '').trim().slice(0, 100);
        if (!reason) { const err = el.querySelector('#err-a-reg-ap'); if (err) err.hidden = false; return; }
      }
      ids.forEach((id) => {
        const r = A().findReg(id);
        if (!r || r.status !== 'PENDING') return;
        if (no) { r.status = 'REJECTED'; r.reason = reason; r.approvedAt = ''; }
        else { r.status = 'APPROVED'; r.approvedAt = now(); r.reason = ''; A().genProgressForReg(r); }
        r.updatedAt = now(); r.updatedBy = 'NV0001 - Nguyễn An';
      });
      el.remove();
      toast('Cập nhật thành công', 'success');
      DMSRouter.navigate('/accumulate/participant', true);
    });
  }
  renderAccumulateParticipant.onMount = function (container) {
    const syncBulk = () => {
      const n = container.querySelectorAll('[data-reg-check]:checked').length;
      const btn = container.querySelector('[data-action="a-reg-bulk"]');
      if (btn) btn.disabled = n === 0;
    };
    container.addEventListener('change', (e) => {
      if (e.target.hasAttribute('data-reg-check')) syncBulk();
      if (e.target.closest('.dms-pagination__size select')) {
        regState().pageSize = Number(e.target.value) || 10; regState().page = 1;
        DMSRouter.navigate('/accumulate/participant', true);
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
        st.q = document.getElementById('a-rg-q')?.value || '';
        st.dist = document.getElementById('a-rg-dist')?.value || '';
        st.route = document.getElementById('a-rg-route')?.value || '';
        st.programId = document.getElementById('a-rg-prog')?.value || '';
        st.status = document.getElementById('a-rg-status')?.value || '';
        st.from = document.getElementById('a-rg-from')?.value || '';
        st.to = document.getElementById('a-rg-to')?.value || '';
        st.approveFrom = document.getElementById('a-rg-af')?.value || '';
        st.approveTo = document.getElementById('a-rg-at')?.value || '';
        st.page = 1;
        DMSRouter.navigate('/accumulate/participant', true); return;
      }
      if (e.target.closest('[data-action="filter-reset"]')) {
        const d = last30();
        window.__accRegState = { q: '', dist: '', route: '', programId: '', status: '', from: d.from, to: d.to, approveFrom: '', approveTo: '', page: 1, pageSize: 10 };
        DMSRouter.navigate('/accumulate/participant', true); return;
      }
      if (e.target.closest('[data-page]')) {
        regState().page = Number(e.target.closest('[data-page]').getAttribute('data-page'));
        DMSRouter.navigate('/accumulate/participant', true); return;
      }
      if (e.target.closest('[data-action="a-reg-export"]')) { toast('Đã xuất Excel (prototype)', 'success'); return; }
      if (e.target.closest('[data-action="a-reg-import"]')) {
        const el = DMS.get('Modal').show({
          id: 'a-reg-import-modal', title: 'Import danh sách đăng ký', size: 'md',
          body: `<div class="display-drop">Chọn hoặc Kéo file đến vị trí này
            <input type="file" accept=".xlsx" id="a-reg-file" /></div>
            ${DMS.render('Button', { text: 'Lấy file mẫu', type: 'link', dataAction: 'a-reg-tpl' })}`,
          footer: `${DMS.render('Button', { text: 'Hủy', type: 'default', dataAction: 'modal-close' })}
            ${DMS.render('Button', { text: 'Tiến hành xử lý', type: 'primary', dataAction: 'a-reg-imp-ok' })}`
        });
        el.addEventListener('click', (ev) => {
          if (ev.target.closest('[data-action="a-reg-tpl"]')) { toast('Đã tải file mẫu (prototype)', 'success'); return; }
          if (!ev.target.closest('[data-action="a-reg-imp-ok"]')) return;
          DMS.get('Dialog').confirm('Bạn chắc chắn thao tác này không?', () => {
            el.remove();
            toast('Import thành công', 'success');
          });
        });
        return;
      }
      if (e.target.closest('[data-action="a-reg-bulk"]')) {
        const ids = [...container.querySelectorAll('[data-reg-check]:checked')].map((i) => i.getAttribute('data-reg-check'));
        if (ids.length) openRegApprove(ids);
        return;
      }
      const ap = e.target.closest('[data-action^="a-reg-appr-"]');
      if (ap) { openRegApprove([ap.getAttribute('data-action').replace('a-reg-appr-', '')]); return; }
      const ed = e.target.closest('[data-action^="a-reg-edit-"]');
      if (ed) {
        window.__accRegTab = 'info';
        DMSRouter.navigate('/accumulate/participant?edit=' + ed.getAttribute('data-action').replace('a-reg-edit-', ''), true);
        return;
      }
      if (e.target.closest('[data-reg-tab]')) {
        window.__accRegTab = e.target.closest('[data-reg-tab]').getAttribute('data-reg-tab');
        const id = A().queryParams().get('edit');
        DMSRouter.navigate('/accumulate/participant?edit=' + id, true); return;
      }
      if (e.target.closest('[data-action="a-reg-close"]') || e.target.id === 'acc-reg-modal') {
        window.__accRegTab = 'info';
        DMSRouter.navigate('/accumulate/participant', true); return;
      }
      if (e.target.closest('[data-action="a-reg-add-file"]')) {
        const id = A().queryParams().get('edit');
        const r = A().findReg(id);
        if (!r) return;
        r.images = r.images || [];
        if (r.images.length >= 10) { toast('Số lượng hình ảnh tối đa = 10', 'error'); return; }
        r.images.push({ name: 'file-moi.jpg', at: now(), by: 'NV0001 - Nguyễn An', _new: true });
        const ok = document.getElementById('a-reg-ok');
        if (ok) ok.disabled = false;
        DMSRouter.navigate('/accumulate/participant?edit=' + id, true);
        return;
      }
      const delImg = e.target.closest('[data-action^="a-reg-img-del-"]');
      if (delImg) {
        const id = A().queryParams().get('edit');
        const r = A().findReg(id);
        const idx = Number(delImg.getAttribute('data-action').split('-').pop());
        if (r && r.images) r.images.splice(idx, 1);
        DMSRouter.navigate('/accumulate/participant?edit=' + id, true); return;
      }
      if (e.target.closest('[data-action="a-reg-save-img"]')) {
        toast('Cập nhật thành công', 'success');
      }
    });
  };

  /* ========== PROCESS ========== */
  function filterProgress(store, st) {
    const q = (st.q || '').trim().toLowerCase();
    const from = A().parseDmy(st.from);
    const to = A().parseDmy(st.to);
    return (store.progress || []).filter((g) => {
      const r = A().findReg(g.registrationId) || {};
      const p = A().findProgram(g.programId) || {};
      if (q && !(String(r.storeCode || '').toLowerCase().includes(q) || String(r.storeName || '').toLowerCase().includes(q))) return false;
      if (st.route && r.routeCode !== st.route) return false;
      if (st.programId && g.programId !== st.programId) return false;
      if (st.status && g.status !== st.status) return false;
      if (st.result && g.result !== st.result) return false;
      if (st.rewardMode && p.rewardMode !== st.rewardMode) return false;
      if (from && to && !A().overlaps(A().parseDmy(g.startDate), A().parseDmy(g.endDate), from, to)) return false;
      return true;
    });
  }
  function enrichProgress(g) {
    const r = A().findReg(g.registrationId) || {};
    const p = A().findProgram(g.programId) || {};
    return Object.assign({}, g, {
      storeCode: r.storeCode, storeName: r.storeName, phone: r.phone, province: r.province, address: r.address,
      routeCode: r.routeCode, routeName: r.routeName, empCode: r.empCode, empName: r.empName,
      slots: r.slots, milestoneName: r.milestoneName, milestoneDesc: r.milestoneDesc,
      programCode: p.code, programName: p.name, programStatus: p.status,
      pStart: p.startDate, pEnd: p.endDate, rewardMode: p.rewardMode,
      applyMode: p.applyMode, rewardKind: p.rewardKind
    });
  }
  function processColumns() {
    return [
      { key: 'stageCode', title: 'Mã giai đoạn', render: (v) => A().copyCell(v, DMS.escape(v || '')) },
      { key: 'storeCode', title: 'Mã điểm bán', render: (v) => A().copyCell(v, DMS.escape(v || '')) },
      { key: 'storeName', title: 'Tên điểm bán' },
      { key: 'phone', title: 'Số điện thoại điểm bán' },
      { key: 'province', title: 'Tỉnh/Thành' },
      { key: 'address', title: 'Địa chỉ' },
      { key: 'routeCode', title: 'Mã tuyến', render: (v) => A().copyCell(v, DMS.escape(v || '')) },
      { key: 'routeName', title: 'Tên tuyến' },
      { key: 'empCode', title: 'Mã nhân viên', render: (v) => A().copyCell(v, DMS.escape(v || '')) },
      { key: 'empName', title: 'Tên nhân viên' },
      { key: 'programCode', title: 'Mã chương trình tích lũy', render: (v, row) => A().copyCell(v, `<a class="dms-table__link" data-route="/accumulate/event?id=${DMS.escape(row.programId)}">${DMS.escape(v || '')}</a>`) },
      { key: 'programName', title: 'Tên chương trình tích lũy' },
      { key: 'programStatus', title: 'Trạng thái chương trình', render: (v) => A().tagOf(A().PROGRAM_STATUSES, v) },
      { key: 'pStart', title: 'Ngày bắt đầu chương trình' },
      { key: 'pEnd', title: 'Ngày kết thúc chương trình' },
      { key: 'milestoneName', title: 'Mốc tích lũy' },
      { key: 'milestoneDesc', title: 'Diễn giải mốc đăng ký' },
      { key: 'slots', title: 'Số suất đăng ký' },
      { key: 'stageName', title: 'Giai đoạn tích lũy' },
      { key: 'startDate', title: 'Ngày bắt đầu GĐ' },
      { key: 'endDate', title: 'Ngày kết thúc GĐ' },
      { key: 'status', title: 'Trạng thái giai đoạn', render: (v) => A().tagOf(A().PROGRESS_STATUSES, v) },
      {
        key: 'actualText', title: 'Thực đạt',
        render: (v, row) => v ? `<a class="dms-table__link" data-route="/accumulate/process?actual=${DMS.escape(row.id)}">Chi tiết</a>` : ''
      },
      { key: 'achievedMilestone', title: 'Mốc tích lũy đạt được' },
      { key: 'achievedDesc', title: 'Diễn giải mốc đạt được' },
      { key: 'applyMode', title: 'Hình thức áp dụng', render: (v) => A().catalogLabel(A().APPLY_MODES, v) },
      { key: 'rewardKind', title: 'Loại phần thưởng', render: (v) => A().catalogLabel(A().REWARD_KINDS, v) },
      {
        key: 'rewardText', title: 'Phần thưởng',
        render: (v, row) => v
          ? `<a class="dms-table__link" data-action="a-prg-gift-${DMS.escape(row.id)}">${DMS.escape(v)}</a>`
          : ''
      },
      { key: 'result', title: 'Kết quả giai đoạn', render: (v) => A().tagOf(A().STAGE_RESULTS, v) },
      { key: 'rewardMode', title: 'Hình thức trả thưởng', render: (v) => A().catalogLabel(A().REWARD_MODES, v) },
      { key: 'reason', title: 'Lý do Ngưng hoạt động' },
      { key: 'updatedBy', title: 'Người cập nhật' },
      { key: 'updatedAt', title: 'Thời gian cập nhật' },
      {
        key: 'actions', title: 'Tùy chỉnh', fixed: 'right',
        render: (_, row) => `<div class="dms-action-buttons">
          ${actionBtn('a-prg-stop', row.id, row.status === 'NOT_STARTED', 'stop', 'Ngưng hoạt động')}
        </div>`
      }
    ];
  }
  function renderProcessBody(store) {
    const st = processState();
    const list = filterProgress(store, st).map(enrichProgress);
    const total = list.length;
    const pages = Math.max(1, Math.ceil(total / st.pageSize) || 1);
    if (st.page > pages) st.page = pages;
    const start = (st.page - 1) * st.pageSize;
    const rows = list.slice(start, start + st.pageSize);
    const table = rows.length
      ? DMS.render('Table', { columns: processColumns(), data: rows })
      : `<div class="dms-table-wrapper">${DMS.render('EmptyState', { title: 'Trống' })}</div>`;
    return table + DMS.render('Pagination', { current: st.page, pageSize: st.pageSize, total, unit: 'dòng' });
  }
  function renderActualModal(g) {
    if (!g) return '';
    const tab = window.__accActualTab || 'qty';
    const d = g.actualDetail || { qty: [], rev: [], total: [] };
    const qtyCols = [{ key: 'group', title: 'Nhóm sản phẩm' }, { key: 'target', title: 'Chỉ tiêu' }, { key: 'actual', title: 'Thực đạt' }];
    const revCols = [{ key: 'group', title: 'Nhóm / Sản phẩm' }, { key: 'product', title: 'Sản phẩm' }, { key: 'target', title: 'Chỉ tiêu' }, { key: 'actual', title: 'Thực đạt' }];
    const totCols = [{ key: 'source', title: 'Nguồn mua hàng' }, { key: 'amount', title: 'Doanh số' }];
    const table = tab === 'total'
      ? DMS.render('Table', { columns: totCols, data: d.total || [] })
      : tab === 'rev'
        ? DMS.render('Table', { columns: revCols, data: (d.rev || []).map((x) => Object.assign({ group: x.group || '', product: x.product || '' }, x)) })
        : DMS.render('Table', { columns: qtyCols, data: d.qty || [] });
    const empty = ((tab === 'total' ? d.total : tab === 'rev' ? d.rev : d.qty) || []).length === 0;
    return DMS.render('Modal', {
      id: 'acc-actual-modal',
      title: 'Chi tiết thực đạt',
      size: 'lg',
      body: `<div class="display-subtabs">
        <button type="button" class="display-subtabs__item ${tab === 'qty' ? 'is-active' : ''}" data-act-tab="qty">Số lượng nhóm sản phẩm</button>
        <button type="button" class="display-subtabs__item ${tab === 'rev' ? 'is-active' : ''}" data-act-tab="rev">Doanh số sản phẩm</button>
        <button type="button" class="display-subtabs__item ${tab === 'total' ? 'is-active' : ''}" data-act-tab="total">Doanh số tổng</button>
      </div>${empty ? `<div class="dms-table-wrapper">${DMS.render('EmptyState', { title: 'Trống' })}</div>` : table}`,
      footer: DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'a-prg-close-actual' })
    });
  }
  async function renderAccumulateProcess() {
    const store = await A().loadStore();
    const st = processState();
    const params = A().queryParams();
    const routeOpts = [...new Map((store.registrations || []).map((r) => [r.routeCode, { value: r.routeCode, label: r.routeCode + ' - ' + r.routeName }])).values()];
    const filter = DMS.render('FilterPanel', {
      title: 'Tìm kiếm theo',
      fields: [
        { type: 'search', id: 'a-pr-q', label: 'Tìm theo mã điểm bán, tên điểm bán', placeholder: 'Tìm theo mã điểm bán, tên điểm bán', value: st.q },
        { type: 'select', id: 'a-pr-route', label: 'Tuyến bán hàng', placeholder: 'Tuyến bán hàng', value: st.route, options: routeOpts },
        { type: 'select', id: 'a-pr-prog', label: 'Chương trình tích lũy', placeholder: 'Chương trình tích lũy', value: st.programId, options: programOptionsForReg(store) },
        { type: 'select', id: 'a-pr-status', label: 'Trạng thái giai đoạn', placeholder: 'Chọn Trạng thái giai đoạn', value: st.status, options: A().PROGRESS_STATUSES.map((s) => ({ value: s.key, label: s.label })) },
        { type: 'select', id: 'a-pr-result', label: 'Kết quả giai đoạn', placeholder: 'Chọn kết quả giai đoạn', value: st.result, options: A().STAGE_RESULTS.map((s) => ({ value: s.key, label: s.label })) },
        { type: 'date', id: 'a-pr-from', label: 'Thời gian tích lũy', placeholder: 'Từ ngày', value: st.from },
        { type: 'date', id: 'a-pr-to', label: ' ', placeholder: 'Đến ngày', value: st.to },
        { type: 'select', id: 'a-pr-reward', label: 'Hình thức trả thưởng', placeholder: 'Hình thức trả thưởng', value: st.rewardMode, options: A().REWARD_MODES }
      ]
    });
    const card = DMS.render('Card', {
      title: 'Danh sách tiến trình tích lũy',
      extra: `${DMS.render('Button', { text: 'Import Excel', type: 'default', dataAction: 'a-prg-import' })}
        ${DMS.render('Button', { text: 'Export Excel', type: 'default', dataAction: 'a-prg-export' })}`,
      body: `<div id="a-prg-body">${renderProcessBody(store)}</div>`
    });
    let overlay = '';
    if (params.get('actual')) overlay += renderActualModal(A().findProgress(params.get('actual')));
    return `<div class="display-page" data-acc-process>
      ${A().breadcrumb('Tiến Trình Tích Lũy')}
      <h1 class="dms-page-header__title dms-mt-md">Tiến Trình Tích Lũy</h1>
      ${filter}${card}${overlay}
    </div>`;
  }
  renderAccumulateProcess.onMount = function (container) {
    container.addEventListener('click', (e) => {
      if (e.target.closest('[data-copy]')) {
        const t = e.target.closest('[data-copy]').getAttribute('data-copy');
        if (navigator.clipboard) navigator.clipboard.writeText(t);
        toast('Đã sao chép', 'success'); return;
      }
      if (e.target.closest('[data-action="filter-search"]')) {
        const st = processState();
        st.q = document.getElementById('a-pr-q')?.value || '';
        st.route = document.getElementById('a-pr-route')?.value || '';
        st.programId = document.getElementById('a-pr-prog')?.value || '';
        st.status = document.getElementById('a-pr-status')?.value || '';
        st.result = document.getElementById('a-pr-result')?.value || '';
        st.rewardMode = document.getElementById('a-pr-reward')?.value || '';
        st.from = document.getElementById('a-pr-from')?.value || '';
        st.to = document.getElementById('a-pr-to')?.value || '';
        st.page = 1;
        DMSRouter.navigate('/accumulate/process', true); return;
      }
      if (e.target.closest('[data-action="filter-reset"]')) {
        const d = monthRange();
        window.__accProcessState = { q: '', route: '', programId: '', status: '', result: '', rewardMode: '', from: d.from, to: d.to, page: 1, pageSize: 10 };
        DMSRouter.navigate('/accumulate/process', true); return;
      }
      if (e.target.closest('[data-page]') && !e.target.closest('#acc-actual-modal')) {
        processState().page = Number(e.target.closest('[data-page]').getAttribute('data-page'));
        DMSRouter.navigate('/accumulate/process', true); return;
      }
      if (e.target.closest('[data-action="a-prg-export"]')) { toast('Đã xuất Excel (prototype)', 'success'); return; }
      if (e.target.closest('[data-action="a-prg-import"]')) {
        const el = DMS.get('Modal').show({
          id: 'a-prg-imp', title: 'Import ngưng hoạt động', size: 'md',
          body: `${DMS.render('Radio', { name: 'a-imp', value: 'store', checked: true, label: 'Theo điểm bán' })}
            ${DMS.render('Radio', { name: 'a-imp', value: 'stage', label: 'Theo giai đoạn' })}
            <div class="display-drop dms-mt-md">Chọn hoặc Kéo file đến vị trí này<input type="file" accept=".xlsx" /></div>
            ${DMS.render('Button', { text: 'Lấy file mẫu', type: 'link', dataAction: 'a-prg-tpl' })}`,
          footer: `${DMS.render('Button', { text: 'Hủy', type: 'default', dataAction: 'modal-close' })}
            ${DMS.render('Button', { text: 'Tiến hành xử lý', type: 'primary', dataAction: 'a-prg-imp-ok' })}`
        });
        el.addEventListener('click', (ev) => {
          if (ev.target.closest('[data-action="a-prg-tpl"]')) { toast('Đã tải file mẫu (prototype)', 'success'); return; }
          if (!ev.target.closest('[data-action="a-prg-imp-ok"]')) return;
          DMS.get('Dialog').confirm('Bạn chắc chắn thao tác này không?', () => { el.remove(); toast('Import thành công', 'success'); });
        });
        return;
      }
      if (e.target.closest('[data-act-tab]')) {
        window.__accActualTab = e.target.closest('[data-act-tab]').getAttribute('data-act-tab');
        const id = A().queryParams().get('actual');
        DMSRouter.navigate('/accumulate/process?actual=' + id, true); return;
      }
      if (e.target.closest('[data-action="a-prg-close-actual"]') || e.target.id === 'acc-actual-modal' || e.target.closest('#acc-actual-modal [data-action="modal-close"]')) {
        window.__accActualTab = 'qty';
        DMSRouter.navigate('/accumulate/process', true); return;
      }
      const giftLink = e.target.closest('[data-action^="a-prg-gift-"]');
      if (giftLink) {
        const g = A().findProgress(giftLink.getAttribute('data-action').replace('a-prg-gift-', ''));
        const p = g ? A().findProgram(g.programId) : null;
        const ms = (p?.milestones || []).find((m) => m.name === (g.achievedMilestone || '')) || (p?.milestones || [])[0] || {};
        if (ms.rewardType === 'GIFT' && (ms.gifts || []).length) {
          const rows = (ms.gifts || []).map((x, i) => Object.assign({ stt: i + 1 }, x));
          DMS.get('Modal').show({
            id: 'a-prg-gift-modal', title: 'Chi tiết trả thưởng', size: 'lg',
            body: DMS.render('Table', { columns: [{ key: 'code', title: 'Mã sản phẩm' }, { key: 'name', title: 'Tên sản phẩm' }, { key: 'uom', title: 'Đơn vị' }, { key: 'qty', title: 'Số lượng' }], data: rows }),
            footer: DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'modal-close' })
          });
        } else {
          toast((g?.rewardText || ms.cashAmount || '') + (ms.rewardType === 'DISCOUNT' ? ' %' : ''), 'info');
        }
        return;
      }
      const stop = e.target.closest('[data-action^="a-prg-stop-"]');
      if (stop) {
        const g = A().findProgress(stop.getAttribute('data-action').replace('a-prg-stop-', ''));
        if (!g) return;
        const el = DMS.get('Modal').show({
          id: 'a-prg-stop-modal', title: 'Ngưng hoạt động', size: 'sm',
          body: `${DMS.render('Input', { id: 'a-prg-stop-val', label: 'Lý do', placeholder: 'Nhập lý do', requiredMark: true })}
            <div class="dms-form-item__error" id="err-prg-stop" hidden>Lý do là bắt buộc!</div>`,
          footer: `${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'modal-close' })}
            ${DMS.render('Button', { text: 'Đồng ý', type: 'primary', dataAction: 'a-prg-stop-ok' })}`
        });
        el.addEventListener('click', (ev) => {
          if (!ev.target.closest('[data-action="a-prg-stop-ok"]')) return;
          const reason = (el.querySelector('#a-prg-stop-val')?.value || '').trim().slice(0, 100);
          if (!reason) { const err = el.querySelector('#err-prg-stop'); if (err) err.hidden = false; return; }
          g.status = 'STOPPED'; g.reason = reason; g.updatedAt = now(); g.updatedBy = 'NV0001 - Nguyễn An';
          const all = (window.__accumulateStore.progress || []).filter((x) => x.registrationId === g.registrationId);
          if (all.every((x) => x.status === 'STOPPED')) {
            const r = A().findReg(g.registrationId);
            if (r) { r.status = 'STOPPED'; r.reason = 'Ngưng hoạt động tiến trình tích lũy'; r.updatedAt = now(); }
          }
          el.remove();
          toast('Cập nhật thành công', 'success');
          DMSRouter.navigate('/accumulate/process', true);
        });
      }
    });
    container.addEventListener('change', (e) => {
      if (e.target.closest('.dms-pagination__size select')) {
        processState().pageSize = Number(e.target.value) || 10; processState().page = 1;
        DMSRouter.navigate('/accumulate/process', true);
      }
    });
  };

  /* ========== REWARD ========== */
  function programOptionsReward(store) {
    return (store.programs || [])
      .filter((p) => !['INIT', 'EXPIRED', 'UPCOMING'].includes(p.status))
      .map((p) => ({ value: p.id, label: p.code + ' - ' + p.name }));
  }
  function enrichReward(rw) {
    const g = A().findProgress(rw.progressId) || {};
    const r = A().findReg(g.registrationId || rw.registrationId) || {};
    const p = A().findProgram(rw.programId) || {};
    const stageMode = p.rewardMode === 'STAGE';
    return Object.assign({}, rw, {
      storeCode: rw.storeCode || r.storeCode || '',
      storeName: r.storeName || '',
      phone: r.phone || '',
      province: r.province || '',
      address: r.address || '',
      routeCode: r.routeCode || '',
      routeName: r.routeName || '',
      empCode: r.empCode || '',
      empName: r.empName || '',
      slots: r.slots || '',
      programCode: p.code || '',
      programName: p.name || '',
      rewardMode: p.rewardMode || '',
      stageCode: stageMode ? (g.stageCode || '') : '',
      stageName: stageMode ? (g.stageName || '') : '',
      roleGroup: rw.roleGroup || '',
      orderCode: rw.orderCode || '',
      reason: rw.reason || ''
    });
  }
  function filterRewards(store, st) {
    const q = (st.q || '').trim().toLowerCase();
    const from = A().parseDmy(st.from);
    const to = A().parseDmy(st.to);
    return (store.rewards || []).filter((rw) => {
      const row = enrichReward(rw);
      if (q && !(String(row.storeCode || '').toLowerCase().includes(q) || String(row.storeName || '').toLowerCase().includes(q))) return false;
      if (st.route && row.routeCode !== st.route) return false;
      if (st.programId && rw.programId !== st.programId) return false;
      if (st.rewardMode && row.rewardMode !== st.rewardMode) return false;
      if (st.rewardType && rw.rewardType !== st.rewardType) return false;
      if (st.result && rw.result !== st.result) return false;
      if (from && to && !A().overlaps(A().parseDmy(rw.startDate), A().parseDmy(rw.endDate), from, to)) return false;
      return true;
    });
  }
  function sortRewards(list) {
    return list.slice().sort((a, b) => {
      const da = A().parseDt(a.updatedAt);
      const db = A().parseDt(b.updatedAt);
      return (db ? db.getTime() : 0) - (da ? da.getTime() : 0);
    });
  }
  function canActReward(rw) {
    return rw.result === 'WAITING' || rw.result === 'EXPIRED' || rw.result === 'RECEIVED';
  }
  function rewardColumns() {
    return [
      { key: 'code', title: 'Mã trả thưởng', render: (v) => A().copyCell(v, DMS.escape(v)) },
      { key: 'storeCode', title: 'Mã điểm bán', render: (v) => A().copyCell(v, DMS.escape(v || '')) },
      { key: 'storeName', title: 'Tên điểm bán' },
      { key: 'phone', title: 'Số điện thoại điểm bán' },
      { key: 'province', title: 'Tỉnh/ thành phố' },
      { key: 'address', title: 'Địa chỉ' },
      { key: 'routeCode', title: 'Mã tuyến', render: (v) => v ? A().copyCell(v, DMS.escape(v)) : '' },
      { key: 'routeName', title: 'Tên tuyến' },
      { key: 'empCode', title: 'Mã nhân viên' },
      { key: 'empName', title: 'Tên nhân viên' },
      { key: 'programCode', title: 'Mã chương trình tích lũy', render: (v, row) => A().copyCell(v, `<a class="dms-table__link" data-route="/accumulate/event?id=${DMS.escape(row.programId)}">${DMS.escape(v || '')}</a>`) },
      { key: 'programName', title: 'Tên chương trình tích lũy' },
      { key: 'startDate', title: 'Ngày bắt đầu trả thưởng' },
      { key: 'endDate', title: 'Ngày kết thúc trả thưởng' },
      { key: 'stageCode', title: 'Mã giai đoạn', render: (v) => v ? A().copyCell(v, DMS.escape(v)) : '' },
      { key: 'stageName', title: 'Tên giai đoạn' },
      { key: 'milestoneReg', title: 'Mốc tích lũy đăng ký' },
      { key: 'slots', title: 'Số suất đăng ký' },
      { key: 'milestoneGot', title: 'Mốc tích lũy đạt được' },
      { key: 'rewardMode', title: 'Hình thức trả thưởng', render: (v) => A().catalogLabel(A().REWARD_MODES, v) },
      { key: 'rewardType', title: 'Phần thưởng', render: (v) => A().catalogLabel(A().REWARD_TYPES, v) },
      {
        key: 'amount', title: 'Phần thưởng theo mốc',
        render: (_, row) => row.rewardType === 'GIFT'
          ? `<a class="dms-table__link" data-route="/accumulate/reward?gift=${DMS.escape(row.id)}">Chi tiết</a>`
          : row.rewardType === 'DISCOUNT' ? (row.amount + ' %') : A().formatMoney(row.amount)
      },
      { key: 'paidAt', title: 'Ngày trả thưởng' },
      { key: 'result', title: 'Trạng thái trả thưởng', render: (v) => A().tagOf(A().REWARD_RESULTS, v) },
      { key: 'reason', title: 'Lý do từ chối' },
      { key: 'orderCode', title: 'Mã đơn hàng' },
      { key: 'updatedBy', title: 'Người cập nhật' },
      { key: 'roleGroup', title: 'Nhóm quyền', render: (v) => v ? DMS.render('Tag', { text: v, type: 'blue' }) : '' },
      { key: 'updatedAt', title: 'Thời gian cập nhật' },
      {
        key: 'actions', title: 'Tùy chỉnh', fixed: 'right',
        render: (_, row) => `<div class="dms-action-buttons">${actionBtn('a-rw-act', row.id, canActReward(row) && row.result !== 'REJECTED', 'approve', 'Trả thưởng')}</div>`
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
      { key: 'qty', title: 'Số lượng', render: (v) => A().formatMoney(v) }
    ];
    const table = rows.length
      ? DMS.render('Table', { columns: cols, data: rows })
      : `<div class="dms-table-wrapper">${DMS.render('EmptyState', { title: 'Trống' })}</div>`;
    return DMS.render('Modal', {
      id: 'acc-gift-modal',
      title: 'Chi tiết trả thưởng',
      size: 'lg',
      body: `<p class="dms-form-item__label">Kết quả trả thưởng</p>
        ${A().tagOf(A().REWARD_RESULTS, rw.result)}${table}`,
      footer: DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'a-rw-close-gift' })
    });
  }
  function renderHistoryModal(store) {
    const st = histState();
    let list = st.searched ? (store.rewardHistory || []) : [];
    const from = A().parseDmy(st.from);
    const to = A().parseDmy(st.to);
    if (from && to) list = list.filter((h) => A().inRange(h.at, from, to));
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
      id: 'acc-hist-modal',
      title: 'Chi tiết lịch sử',
      size: 'xxl',
      body: `<p class="display-page__desc">Chọn thời gian xem lịch sử (tối đa 31 ngày)</p>
        <div class="display-date-range dms-mb-md">
          ${DMS.render('DatePicker', { id: 'a-rw-hist-from', placeholder: 'Từ ngày', value: st.from })}
          ${DMS.render('DatePicker', { id: 'a-rw-hist-to', placeholder: 'Đến ngày', value: st.to })}
          ${DMS.render('Button', { text: 'Tìm kiếm', type: 'primary', dataAction: 'a-rw-hist-search' })}
          ${DMS.render('Button', { text: 'Export', type: 'default', dataAction: 'a-rw-hist-export' })}
        </div>
        ${table}
        ${DMS.render('Pagination', { current: st.page, pageSize: st.pageSize, total, unit: 'dòng' })}`,
      footer: DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'a-rw-close-hist' })
    });
  }
  async function renderAccumulateReward() {
    const store = await A().loadStore();
    const st = rewardState();
    const params = A().queryParams();
    const routeOpts = [...new Map((store.registrations || []).map((r) => [r.routeCode, { value: r.routeCode, label: r.routeCode + ' - ' + r.routeName }])).values()];
    const filter = DMS.render('FilterPanel', {
      title: 'Tìm kiếm theo',
      fields: [
        { type: 'search', id: 'a-rw-q', label: 'Tìm kiếm', placeholder: 'Tìm theo mã điểm bán, tên điểm bán', value: st.q },
        { type: 'select', id: 'a-rw-route', label: 'Tuyến bán hàng', placeholder: 'Tuyến bán hàng', value: st.route, options: routeOpts },
        { type: 'select', id: 'a-rw-prog', label: 'Chương trình tích lũy', placeholder: 'Chương trình tích lũy', value: st.programId, options: programOptionsReward(store) },
        { type: 'select', id: 'a-rw-mode', label: 'Hình thức trả thưởng', placeholder: 'Chọn hình thức trả thưởng', value: st.rewardMode, options: A().REWARD_MODES },
        { type: 'select', id: 'a-rw-kind', label: 'Phần thưởng', placeholder: 'Chọn phần thưởng', value: st.rewardType, options: A().REWARD_TYPES },
        { type: 'select', id: 'a-rw-result', label: 'Trạng thái trả thưởng', placeholder: 'Chọn trạng thái trả thưởng', value: st.result, options: A().REWARD_RESULTS.map((s) => ({ value: s.key, label: s.label })) },
        { type: 'date', id: 'a-rw-from', label: 'Thời gian trả thưởng', placeholder: 'Từ ngày', value: st.from },
        { type: 'date', id: 'a-rw-to', label: ' ', placeholder: 'Đến ngày', value: st.to }
      ]
    });
    const card = DMS.render('Card', {
      title: 'Danh sách trả thưởng tích lũy',
      extra: `${DMS.render('Button', { text: 'Xem lịch sử', type: 'default', dataAction: 'a-rw-hist' })}
        ${DMS.render('Button', { text: 'Import Excel', type: 'default', dataAction: 'a-rw-import' })}
        ${DMS.render('Button', { text: 'Export Excel', type: 'default', dataAction: 'a-rw-export' })}`,
      body: `<div id="a-rw-body">${renderRewardBody(store)}</div>`
    });
    let overlay = '';
    if (params.get('gift')) overlay += renderGiftModal(A().findReward(params.get('gift')));
    if (params.get('history')) overlay += renderHistoryModal(store);
    return `<div class="display-page" data-acc-reward>
      ${A().breadcrumb('Danh Sách Trả Thưởng Tích Lũy')}
      <h1 class="dms-page-header__title dms-mt-md">Danh Sách Trả Thưởng Tích Lũy</h1>
      ${filter}${card}${overlay}
    </div>`;
  }
  function openRewardAction(id) {
    const rw = A().findReward(id);
    if (!rw) return;
    if (rw.result === 'REJECTED') {
      toast('Mã trả thưởng đã có trạng thái Từ chối trả thưởng . Vui lòng kiểm tra lại!', 'error');
      return;
    }
    const received = rw.result === 'RECEIVED';
    const el = DMS.get('Modal').show({
      id: 'a-rw-act-modal', title: 'Tuỳ chọn', size: 'sm',
      body: `${DMS.render('Radio', { name: 'a-rw-ap', value: 'ok', checked: true, label: 'Trả thưởng' })}
        ${received ? '' : DMS.render('Radio', { name: 'a-rw-ap', value: 'no', label: 'Từ chối' })}
        <div id="a-rw-order-wrap">${DMS.render('Input', { id: 'a-rw-order', label: 'Mã đơn hàng', placeholder: 'Nhập vào mã đơn hàng', requiredMark: true })}
          <div class="dms-form-item__error" id="err-a-rw-order" hidden>@Mã đơn hàng là bắt buộc!</div></div>
        <div id="a-rw-reason-wrap" hidden>${DMS.render('Textarea', { id: 'a-rw-reason', label: 'Lý do từ chối', placeholder: 'Nhập vào lý do từ chối.', rows: 3 })}
          <div class="dms-form-item__error" id="err-a-rw-reason" hidden>@Lý do từ chối là bắt buộc!</div></div>`,
      footer: `${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'modal-close' })}
        ${DMS.render('Button', { text: 'Cập nhật', type: 'primary', dataAction: 'a-rw-act-ok' })}`
    });
    el.addEventListener('change', () => {
      const no = el.querySelector('input[name="a-rw-ap"][value="no"]')?.checked;
      const order = el.querySelector('#a-rw-order-wrap');
      const reason = el.querySelector('#a-rw-reason-wrap');
      if (order) order.hidden = !!no;
      if (reason) reason.hidden = !no;
    });
    el.addEventListener('click', (ev) => {
      if (!ev.target.closest('[data-action="a-rw-act-ok"]')) return;
      const latest = A().findReward(id);
      if (!latest) { el.remove(); return; }
      const no = el.querySelector('input[name="a-rw-ap"][value="no"]')?.checked;
      if (no) {
        const reason = (el.querySelector('#a-rw-reason')?.value || '').trim().slice(0, 100);
        if (!reason) { const err = el.querySelector('#err-a-rw-reason'); if (err) err.hidden = false; return; }
        latest.result = 'REJECTED';
        latest.reason = reason;
        latest.orderCode = '';
      } else {
        const order = (el.querySelector('#a-rw-order')?.value || '').trim().slice(0, 1000);
        if (!order) { const err = el.querySelector('#err-a-rw-order'); if (err) err.hidden = false; return; }
        latest.result = 'RECEIVED';
        latest.reason = '';
        latest.orderCode = order;
        latest.paidAt = now();
      }
      latest.updatedAt = now();
      latest.updatedBy = 'NV0001 - Nguyễn An';
      latest.roleGroup = 'Admin';
      const store = window.__accumulateStore;
      store.rewardHistory = store.rewardHistory || [];
      store.rewardHistory.unshift({
        at: latest.updatedAt, user: 'NV0001', userName: 'Nguyễn An', roleGroup: 'Admin',
        code: latest.code, field: 'Trạng thái trả thưởng',
        oldValue: rw.result === 'EXPIRED' ? 'Hết hạn trả thưởng' : (rw.result === 'RECEIVED' ? 'Đã trả thưởng' : 'Chờ trả thưởng'),
        newValue: no ? 'Từ chối trả thưởng' : 'Đã trả thưởng'
      });
      el.remove();
      toast('Cập nhật thành công', 'success');
      DMSRouter.navigate('/accumulate/reward', true);
    });
  }
  renderAccumulateReward.onMount = function (container) {
    container.addEventListener('click', (e) => {
      if (e.target.closest('[data-copy]')) {
        const t = e.target.closest('[data-copy]').getAttribute('data-copy');
        if (navigator.clipboard) navigator.clipboard.writeText(t);
        toast('Đã sao chép', 'success'); return;
      }
      if (e.target.closest('[data-action="filter-search"]')) {
        const st = rewardState();
        st.q = document.getElementById('a-rw-q')?.value || '';
        st.route = document.getElementById('a-rw-route')?.value || '';
        st.programId = document.getElementById('a-rw-prog')?.value || '';
        st.rewardMode = document.getElementById('a-rw-mode')?.value || '';
        st.rewardType = document.getElementById('a-rw-kind')?.value || '';
        st.result = document.getElementById('a-rw-result')?.value || '';
        st.from = document.getElementById('a-rw-from')?.value || '';
        st.to = document.getElementById('a-rw-to')?.value || '';
        st.page = 1;
        DMSRouter.navigate('/accumulate/reward', true); return;
      }
      if (e.target.closest('[data-action="filter-reset"]')) {
        const d = monthRange();
        window.__accRewardState = { q: '', route: '', programId: '', rewardMode: '', rewardType: '', result: '', from: d.from, to: d.to, page: 1, pageSize: 10 };
        DMSRouter.navigate('/accumulate/reward', true); return;
      }
      if (e.target.closest('[data-page]') && !e.target.closest('#acc-hist-modal')) {
        rewardState().page = Number(e.target.closest('[data-page]').getAttribute('data-page'));
        DMSRouter.navigate('/accumulate/reward', true); return;
      }
      if (e.target.closest('[data-action="a-rw-export"]')) {
        DMS.get('Dialog').confirm('Bạn có muốn xuất danh sách nhận thưởng không ?', () => {
          toast('Đã xuất Excel (prototype)', 'success');
        });
        return;
      }
      if (e.target.closest('[data-action="a-rw-import"]')) {
        const el = DMS.get('Modal').show({
          id: 'a-rw-imp', title: 'Import Excel', size: 'md',
          body: `<div class="display-drop">Chọn hoặc kéo file đến vị trí này<input type="file" accept=".xlsx" /></div>
            <p class="display-page__desc">Hỗ trợ tải đơn lẻ từng file. Chỉ nhập những file theo đúng định dạng có sẵn.</p>
            ${DMS.render('Button', { text: 'Lấy file mẫu', type: 'link', dataAction: 'a-rw-tpl' })}`,
          footer: `${DMS.render('Button', { text: 'Hủy', type: 'default', dataAction: 'modal-close' })}
            ${DMS.render('Button', { text: 'Tiến hành xử lý', type: 'primary', dataAction: 'a-rw-imp-ok' })}`
        });
        el.addEventListener('click', (ev) => {
          if (ev.target.closest('[data-action="a-rw-tpl"]')) { toast('Đã tải file mẫu (prototype)', 'success'); return; }
          if (!ev.target.closest('[data-action="a-rw-imp-ok"]')) return;
          DMS.get('Dialog').confirm('Bạn chắc chắn thao tác này không?', () => { el.remove(); toast('Import thành công', 'success'); });
        });
        return;
      }
      if (e.target.closest('[data-action="a-rw-hist"]')) {
        histState().searched = false; histState().page = 1;
        DMSRouter.navigate('/accumulate/reward?history=1', true); return;
      }
      if (e.target.closest('[data-action="a-rw-close-hist"]') || e.target.id === 'acc-hist-modal') {
        DMSRouter.navigate('/accumulate/reward', true); return;
      }
      if (e.target.closest('#acc-hist-modal [data-action="modal-close"]')) {
        DMSRouter.navigate('/accumulate/reward', true); return;
      }
      if (e.target.closest('[data-action="a-rw-hist-search"]')) {
        const hs = histState();
        hs.from = document.getElementById('a-rw-hist-from')?.value || '';
        hs.to = document.getElementById('a-rw-hist-to')?.value || '';
        const from = A().parseDmy(hs.from);
        const to = A().parseDmy(hs.to);
        if (from && to) {
          const days = Math.round((to - from) / 86400000) + 1;
          if (days > 31) { toast('Chọn thời gian xem lịch sử (tối đa 31 ngày)', 'error'); return; }
        }
        hs.searched = true; hs.page = 1;
        DMSRouter.navigate('/accumulate/reward?history=1', true); return;
      }
      if (e.target.closest('[data-action="a-rw-hist-export"]')) {
        toast('Đã xuất Excel (prototype)', 'success'); return;
      }
      if (e.target.closest('#acc-hist-modal [data-page]')) {
        histState().page = Number(e.target.closest('[data-page]').getAttribute('data-page'));
        DMSRouter.navigate('/accumulate/reward?history=1', true); return;
      }
      if (e.target.closest('[data-action="a-rw-close-gift"]') || e.target.id === 'acc-gift-modal' || e.target.closest('#acc-gift-modal [data-action="modal-close"]')) {
        DMSRouter.navigate('/accumulate/reward', true); return;
      }
      const act = e.target.closest('[data-action^="a-rw-act-"]');
      if (act && act.getAttribute('data-action') !== 'a-rw-act-ok') {
        openRewardAction(act.getAttribute('data-action').replace('a-rw-act-', ''));
      }
    });
    container.addEventListener('change', (e) => {
      if (e.target.closest('#acc-hist-modal .dms-pagination__size select')) {
        histState().pageSize = Number(e.target.value) || 10; histState().page = 1;
        DMSRouter.navigate('/accumulate/reward?history=1', true); return;
      }
      if (e.target.closest('.dms-pagination__size select')) {
        rewardState().pageSize = Number(e.target.value) || 10; rewardState().page = 1;
        DMSRouter.navigate('/accumulate/reward', true);
      }
    });
  };

  window.renderAccumulateOverview = renderAccumulateOverview;
  window.renderAccumulateEvent = renderAccumulateEvent;
  window.renderAccumulateParticipant = renderAccumulateParticipant;
  window.renderAccumulateProcess = renderAccumulateProcess;
  window.renderAccumulateReward = renderAccumulateReward;
})();
