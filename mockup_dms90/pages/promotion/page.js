/**
 * Chương Trình Khuyến Mãi
 * UI: DEV /promotion/event, /promotion/report/budget, /promotion/report/used
 */
(function () {
  const STATUS_TABS = [
    { value: 'ALL', label: 'Tất cả' },
    { value: 'INIT', label: 'Khởi tạo' },
    { value: 'PENDING', label: 'Đang chờ duyệt', cls: 'is-pending' },
    { value: 'UPCOMING', label: 'Sắp diễn ra', cls: 'is-upcoming' },
    { value: 'RUNNING', label: 'Đang diễn ra', cls: 'is-running' },
    { value: 'PAUSED', label: 'Tạm ngưng' },
    { value: 'REJECTED', label: 'Từ chối' },
    { value: 'ENDED', label: 'Kết thúc' }
  ];

  function listState() {
    if (!window.__promoListState) {
      window.__promoListState = { q: '', kind: '', from: '', to: '', status: 'ALL', page: 1, pageSize: 10 };
    }
    return window.__promoListState;
  }

  function nowLabel() {
    const d = new Date();
    const p = (n) => String(n).padStart(2, '0');
    return `${p(d.getDate())}-${p(d.getMonth() + 1)}-${d.getFullYear()} ${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
  }

  function queryParams() {
    return new URLSearchParams(location.hash.split('?')[1] || '');
  }

  function eventUrl(extra) {
    const p = queryParams();
    const next = Object.assign({
      mode: p.get('mode') || '',
      id: p.get('id') || '',
      promotion_id: p.get('promotion_id') || ''
    }, extra || {});
    const q = [];
    if (next.mode) q.push('mode=' + encodeURIComponent(next.mode));
    if (next.id) q.push('id=' + encodeURIComponent(next.id));
    if (next.promotion_id) q.push('promotion_id=' + encodeURIComponent(next.promotion_id));
    return '/promotion/event' + (q.length ? '?' + q.join('&') : '');
  }

  function remount(extra) {
    DMSRouter.navigate(eventUrl(extra), true);
  }

  function parseDate(str) {
    if (!str) return null;
    const m = String(str).match(/^(\d{2})[-\/](\d{2})[-\/](\d{4})/);
    if (!m) return null;
    return new Date(Number(m[3]), Number(m[2]) - 1, Number(m[1]));
  }

  function filterItems(items, st) {
    const q = (st.q || '').trim().toLowerCase();
    return items.filter((it) => {
      if (q && !(String(it.code || '').toLowerCase().includes(q) || String(it.name || '').toLowerCase().includes(q))) return false;
      if (st.kind && it.kind !== st.kind) return false;
      const start = parseDate(it.startAt);
      const from = parseDate(st.from);
      const to = parseDate(st.to);
      if (from && start && start < from) return false;
      if (to && start && start > to) return false;
      return true;
    });
  }

  function actionBtn(action, id, enabled, type, title) {
    return DMS.render('ActionIconButton', {
      type: type,
      title: title,
      disabled: !enabled,
      dataAction: enabled ? `promo-${action}-${id}` : ''
    });
  }

  function copyCell(text, inner) {
    return `${inner}<button type="button" class="promo-copy" data-copy="${DMS.escape(text)}" title="Sao chép">⧉</button>`;
  }

  function readListFilters() {
    const st = listState();
    st.q = document.getElementById('promo-filter-q')?.value || '';
    st.kind = document.getElementById('promo-filter-kind')?.value || '';
    st.from = document.getElementById('promo-filter-from')?.value || '';
    st.to = document.getElementById('promo-filter-to')?.value || '';
    st.page = 1;
  }

  function toast(msg, type) {
    DMS.get('Toast').show(msg, type || 'info');
  }

  function confirmSaveThenValidate() {
    DMS.get('Dialog').confirm('Lưu Chương trình khuyến mãi? Bạn có chắc chắn muốn lưu dữ liệu này?', () => {
      const d = PromoShared.readDraftFromDom();
      const errors = PromoShared.validate(d);
      if (Object.keys(errors).length) {
        toast('Có lỗi xảy ra ở các ô nhập, vui lòng kiểm tra lại', 'error');
        remount();
        return;
      }
      PromoShared.persist(d);
      PromoShared.resetDraft();
      toast('Lưu chương trình khuyến mãi thành công', 'success');
      DMSRouter.navigate('/promotion/event');
    });
  }

  function renderStatusTabs(counts, active) {
    return `<div class="promo-status-tabs">
      ${STATUS_TABS.map((t) => {
        const n = t.value === 'ALL' ? counts.ALL : (counts[t.value] || 0);
        const cls = [
          'promo-status-tabs__item',
          t.cls || '',
          active === t.value ? 'is-active' : ''
        ].filter(Boolean).join(' ');
        return `<button type="button" class="${cls}" data-status="${t.value}">${t.label}<span class="promo-status-tabs__count">${n}</span></button>`;
      }).join('')}
    </div>`;
  }

  function listColumns() {
    return [
      { key: 'stt', title: 'STT', width: '56px', render: (v) => v },
      {
        key: 'code',
        title: 'Mã',
        render: (val) => copyCell(val, DMS.escape(val))
      },
      {
        key: 'name',
        title: 'Tên',
        render: (val, row) => copyCell(val, `<a class="promo-link" data-route="/promotion/event?promotion_id=${DMS.escape(row.id)}">${DMS.escape(val)}</a>`)
      },
      {
        key: 'kind',
        title: 'Loại',
        render: (val) => {
          const kd = PromoShared.kindOf(val);
          return `<span class="dms-tag ${kd.cls}">${DMS.escape(kd.text)}</span>`;
        }
      },
      {
        key: 'status',
        title: 'Trạng thái',
        render: (val) => {
          const s = PromoShared.statusOf(val);
          return DMS.render('StatusTag', { status: val, text: s.text });
        }
      },
      { key: 'startAt', title: 'Ngày bắt đầu' },
      { key: 'endAt', title: 'Ngày kết thúc' },
      { key: 'createdBy', title: 'Người tạo' },
      { key: 'createdAt', title: 'Ngày tạo' },
      { key: 'updatedAt', title: 'Ngày cập nhật' },
      {
        key: 'actions',
        title: 'Tùy chỉnh',
        fixed: 'right',
        render: (_, row) => `<div class="dms-action-buttons">
          ${actionBtn('edit', row.id, PromoShared.can('edit', row.status), 'edit', 'Cập nhật')}
          ${actionBtn('carry', row.id, PromoShared.can('carry', row.status), 'carry', PromoShared.carryLabel(row.status))}
          ${actionBtn('copy', row.id, PromoShared.can('copy', row.status), 'duplicate', 'Sao chép')}
          ${actionBtn('remove', row.id, PromoShared.can('delete', row.status), 'delete', 'Xóa')}
        </div>`
      }
    ];
  }

  function renderListBody(store) {
    const st = listState();
    const filtered = filterItems(store.items || [], st);
    const counts = { ALL: filtered.length };
    STATUS_TABS.forEach((t) => {
      if (t.value !== 'ALL') counts[t.value] = filtered.filter((x) => x.status === t.value).length;
    });
    const byStatus = st.status === 'ALL' ? filtered : filtered.filter((x) => x.status === st.status);
    const total = byStatus.length;
    const pages = Math.max(1, Math.ceil(total / st.pageSize) || 1);
    if (st.page > pages) st.page = pages;
    const start = (st.page - 1) * st.pageSize;
    const rows = byStatus.slice(start, start + st.pageSize).map((it, i) => Object.assign({}, it, { stt: start + i + 1 }));
    const table = rows.length
      ? DMS.render('Table', { columns: listColumns(), data: rows })
      : `<div class="dms-table-wrapper">${DMS.render('EmptyState', { title: 'Trống' })}</div>`;
    return renderStatusTabs(counts, st.status) + table + DMS.render('Pagination', {
      current: st.page,
      pageSize: st.pageSize,
      total,
      pageSizeOptions: [10, 20, 50, 100]
    });
  }

  async function renderPromotionEvent() {
    const store = await PromoShared.loadStore();
    const params = queryParams();
    const mode = params.get('mode');
    const id = params.get('id');
    const promotionId = params.get('promotion_id');
    const st = listState();

    if (mode === 'edit' && id) {
      const item = store.items.find((x) => x.id === id);
      if (item && PromoShared.getDraft().id !== item.id) PromoShared.loadDraft(item);
    } else if (mode === 'copy' && id) {
      const item = store.items.find((x) => x.id === id);
      const d = PromoShared.getDraft();
      if (item && d._copiedFrom !== id) {
        PromoShared.loadDraft(item, 'copy');
        PromoShared.getDraft()._copiedFrom = id;
      }
    }

    const filter = DMS.render('FilterPanel', {
      fields: [
        { type: 'search', id: 'promo-filter-q', label: 'Tìm kiếm theo', placeholder: 'Mã | Tên', value: st.q },
        {
          type: 'select', id: 'promo-filter-kind', label: 'Loại CTKM', placeholder: 'Tất cả',
          value: st.kind, searchable: false,
          options: [
            { value: 'ON_TOP', label: 'Chương trình on top' },
            { value: 'NORMAL', label: 'Chương trình bình thường' }
          ]
        },
        { type: 'date', id: 'promo-filter-from', label: 'Ngày bắt đầu từ', value: st.from },
        { type: 'date', id: 'promo-filter-to', label: 'Ngày bắt đầu đến', value: st.to }
      ]
    });

    const card = DMS.render('Card', {
      title: 'Danh sách chương trình khuyến mãi',
      extra: `
        ${DMS.render('Button', { text: 'Import Excel', type: 'default', dataAction: 'promo-import-list' })}
        ${DMS.render('Button', { text: 'Tạo mới', type: 'primary', dataAction: 'promo-create' })}
      `,
      body: `<div id="promo-list-body">${renderListBody(store)}</div>`
    });

    let overlay = '';
    if (mode === 'create' || mode === 'edit' || mode === 'copy') {
      overlay += PromoShared.renderForm(PromoShared.getDraft(), mode === 'edit' ? 'edit' : 'create');
    }
    if (promotionId) {
      const item = store.items.find((x) => x.id === promotionId);
      overlay += item
        ? PromoShared.renderDetail(item)
        : `<div class="dms-drawer-overlay" id="promo-detail-drawer">${DMS.render('EmptyState', { title: 'Không tìm thấy chương trình khuyến mãi' })}</div>`;
    }

    return `
      ${PromoShared.breadcrumb([{ label: 'Quản Lý Khuyến Mãi' }])}
      <h1 class="dms-page-header__title dms-mt-md">Quản Lý Khuyến Mãi</h1>
      ${filter}
      ${card}
      ${overlay}
    `;
  }

  function findItem(id) {
    return (window.__promoStore?.items || []).find((x) => x.id === id);
  }

  function bindEventPage(container) {
    container.addEventListener('click', (e) => {
      const statusTab = e.target.closest('[data-status]');
      if (statusTab) {
        listState().status = statusTab.dataset.status;
        listState().page = 1;
        remount({ mode: '', id: '', promotion_id: queryParams().get('promotion_id') || '' });
        return;
      }

      if (e.target.closest('[data-action="filter-search"]')) {
        readListFilters();
        remount({ mode: queryParams().get('mode') || '', id: queryParams().get('id') || '', promotion_id: queryParams().get('promotion_id') || '' });
        return;
      }
      if (e.target.closest('[data-action="filter-reset"]')) {
        window.__promoListState = { q: '', kind: '', from: '', to: '', status: 'ALL', page: 1, pageSize: listState().pageSize };
        remount({ mode: queryParams().get('mode') || '', id: queryParams().get('id') || '', promotion_id: queryParams().get('promotion_id') || '' });
        return;
      }

      if (e.target.closest('[data-action="promo-create"]')) {
        PromoShared.resetDraft();
        DMSRouter.navigate('/promotion/event?mode=create');
        return;
      }

      if (e.target.closest('[data-action="promo-import-list"]')) {
        DMS.get('Modal').show({
          id: 'promo-import-modal',
          title: 'Import Excel',
          size: 'md',
          body: `<div class="dms-form-item"><label class="dms-form-item__label">Chọn file</label><input class="dms-input" type="file" accept=".xlsx,.xls" /></div>
            <div class="promo-hint">Mockup: không ghi dữ liệu thật. Tải template và import chỉ hiển thị thông báo.</div>`,
          footer: `
            ${DMS.render('Button', { text: 'Tải template', type: 'default', dataAction: 'promo-import-template' })}
            ${DMS.render('Button', { text: 'Hủy', type: 'default', dataAction: 'modal-close' })}
            ${DMS.render('Button', { text: 'Import', type: 'primary', dataAction: 'promo-import-go' })}
          `
        });
        return;
      }

      const edit = e.target.closest('[data-action^="promo-edit-"]');
      if (edit) {
        const item = findItem(edit.dataset.action.replace('promo-edit-', ''));
        if (!item) return;
        PromoShared.loadDraft(item);
        DMSRouter.navigate(`/promotion/event?mode=edit&id=${item.id}`);
        return;
      }
      const copy = e.target.closest('[data-action^="promo-copy-"]');
      if (copy) {
        const item = findItem(copy.dataset.action.replace('promo-copy-', ''));
        if (!item) return;
        PromoShared.loadDraft(item, 'copy');
        PromoShared.getDraft()._copiedFrom = item.id;
        DMSRouter.navigate(`/promotion/event?mode=copy&id=${item.id}`);
        return;
      }
      const remove = e.target.closest('[data-action^="promo-remove-"]');
      if (remove) {
        const item = findItem(remove.dataset.action.replace('promo-remove-', ''));
        if (!item) return;
        DMS.get('Dialog').confirm('Xóa chương trình khuyến mãi?', () => {
          const store = window.__promoStore;
          store.items = store.items.filter((x) => x.id !== item.id);
          toast('Xóa chương trình khuyến mãi thành công', 'success');
          DMSRouter.navigate('/promotion/event');
        });
        return;
      }
      const carry = e.target.closest('[data-action^="promo-carry-"]');
      if (carry) {
        const item = findItem(carry.dataset.action.replace('promo-carry-', ''));
        if (!item) return;
        const label = PromoShared.carryLabel(item.status);
        DMS.get('Dialog').confirm(`${label} chương trình khuyến mãi?`, () => {
          const next = PromoShared.nextStatus(item.status);
          item.status = next;
          item.updatedAt = nowLabel();
          item.statusHistory = (item.statusHistory || []).concat([{ at: item.updatedAt, status: next, by: 'Thảo BA' }]);
          toast(`${label} thành công`, 'success');
          remount({ mode: '', id: '', promotion_id: queryParams().get('promotion_id') || '' });
        });
        return;
      }

      const pageBtn = e.target.closest('.dms-pagination__btn[data-page]');
      if (pageBtn && !pageBtn.disabled) {
        listState().page = Number(pageBtn.dataset.page);
        remount();
        return;
      }

      const copyBtn = e.target.closest('[data-copy]');
      if (copyBtn) {
        const text = copyBtn.getAttribute('data-copy') || '';
        if (navigator.clipboard?.writeText) {
          navigator.clipboard.writeText(text).then(() => toast('Đã sao chép', 'success')).catch(() => toast('Không sao chép được', 'error'));
        } else {
          toast('Đã sao chép', 'success');
        }
        return;
      }

      if (e.target.closest('[data-action="modal-close"]') || e.target.id === 'promo-form-modal') {
        PromoShared.resetDraft();
        DMSRouter.navigate(eventUrl({ mode: '', id: '' }));
        return;
      }
      if (e.target.closest('[data-action="promo-close-detail"]') || e.target.id === 'promo-detail-drawer') {
        DMSRouter.navigate(eventUrl({ promotion_id: '' }));
        return;
      }

      if (e.target.closest('[data-action="promo-save"]')) {
        confirmSaveThenValidate();
        return;
      }

      const sw = e.target.closest('.dms-switch');
      if (sw && sw.id === 'promo-lot') {
        const on = !sw.classList.contains('is-checked');
        sw.classList.toggle('is-checked', on);
        sw.setAttribute('aria-checked', on ? 'true' : 'false');
        return;
      }

      const rte = e.target.closest('[data-rte]');
      if (rte) {
        document.execCommand(rte.dataset.rte, false, null);
        document.getElementById('promo-terms')?.focus();
        return;
      }

      if (e.target.closest('[data-action="promo-add-c"]') || e.target.closest('[data-action="promo-add-c-group"]')) {
        const d = PromoShared.readDraftFromDom();
        d.conditions = d.conditions || [];
        d.conditions.push(PromoShared.newCondition());
        remount();
        return;
      }
      if (e.target.closest('[data-action="promo-add-a"]')) {
        const d = PromoShared.readDraftFromDom();
        d.actions = d.actions || [];
        d.actions.push(PromoShared.newAction());
        remount();
        return;
      }
      if (e.target.closest('[data-action="promo-add-t"]')) {
        const d = PromoShared.readDraftFromDom();
        d.targets = d.targets || [];
        d.targets.push(PromoShared.newTarget());
        remount();
        return;
      }
      if (e.target.closest('[data-action="promo-add-pkg"]')) {
        const d = PromoShared.readDraftFromDom();
        d.packages = d.packages || [];
        d.packages.push(PromoShared.newPackage());
        remount();
        return;
      }

      const addPc = e.target.closest('[data-action^="promo-add-pc-"]');
      if (addPc) {
        const pi = Number(addPc.dataset.action.replace('promo-add-pc-', ''));
        const d = PromoShared.readDraftFromDom();
        d.packages[pi].conditions.push(PromoShared.newCondition());
        remount();
        return;
      }
      const addPa = e.target.closest('[data-action^="promo-add-pa-"]');
      if (addPa) {
        const pi = Number(addPa.dataset.action.replace('promo-add-pa-', ''));
        const d = PromoShared.readDraftFromDom();
        d.packages[pi].actions.push(PromoShared.newAction());
        remount();
        return;
      }

      const delC = e.target.closest('[data-action^="promo-del-c-"]');
      if (delC) {
        const i = Number(delC.dataset.action.replace('promo-del-c-', ''));
        const d = PromoShared.readDraftFromDom();
        d.conditions.splice(i, 1);
        remount();
        return;
      }
      const delA = e.target.closest('[data-action^="promo-del-a-"]');
      if (delA) {
        const i = Number(delA.dataset.action.replace('promo-del-a-', ''));
        const d = PromoShared.readDraftFromDom();
        d.actions.splice(i, 1);
        remount();
        return;
      }
      const delT = e.target.closest('[data-action^="promo-del-t-"]');
      if (delT) {
        const i = Number(delT.dataset.action.replace('promo-del-t-', ''));
        const d = PromoShared.readDraftFromDom();
        d.targets.splice(i, 1);
        remount();
        return;
      }
      const delPkg = e.target.closest('[data-action^="promo-del-pkg-"]');
      if (delPkg) {
        const i = Number(delPkg.dataset.action.replace('promo-del-pkg-', ''));
        const d = PromoShared.readDraftFromDom();
        d.packages.splice(i, 1);
        remount();
        return;
      }
      const delPc = e.target.closest('[data-action^="promo-del-pc-"]');
      if (delPc) {
        const parts = delPc.dataset.action.replace('promo-del-pc-', '').split('-');
        const d = PromoShared.readDraftFromDom();
        d.packages[Number(parts[0])].conditions.splice(Number(parts[1]), 1);
        remount();
        return;
      }
      const delPa = e.target.closest('[data-action^="promo-del-pa-"]');
      if (delPa) {
        const parts = delPa.dataset.action.replace('promo-del-pa-', '').split('-');
        const d = PromoShared.readDraftFromDom();
        d.packages[Number(parts[0])].actions.splice(Number(parts[1]), 1);
        remount();
        return;
      }

      const importPicker = e.target.closest('[data-action^="promo-import-picker-"]');
      if (importPicker) {
        const pid = importPicker.dataset.action.replace('promo-import-picker-', '');
        document.querySelectorAll(`[data-picker="${pid}"]`).forEach((cb) => { cb.checked = true; });
        toast('Import Excel thành công (mockup)', 'success');
        return;
      }
      const addMaster = e.target.closest('[data-action^="promo-add-master-"]');
      if (addMaster) {
        toast('Mockup: thêm mới master ngoài phạm vi màn này', 'info');
        return;
      }
    });

    container.addEventListener('change', (e) => {
      const t = e.target;
      const sizeSel = t.closest?.('.dms-pagination__size select') ? t : null;
      if (sizeSel && !document.getElementById('promo-form-modal')) {
        listState().pageSize = Number(t.value) || 10;
        listState().page = 1;
        remount();
        return;
      }
      if (!document.getElementById('promo-form-modal')) return;
      if (t.id === 'promo-calc') {
        const d = PromoShared.readDraftFromDom();
        if (d.calcMethod === 'SIDE_STEP') {
          d.conditions = [];
          d.actions = [];
          if (!(d.packages || []).length) d.packages = [PromoShared.newPackage()];
        } else {
          d.packages = [];
          d.buyProducts = [];
        }
        d.tab = 'info';
        remount();
        return;
      }
      if (t.id && t.id.startsWith('promo-') && /-type$/.test(t.id)) {
        PromoShared.readDraftFromDom();
        remount();
        return;
      }
      if (t.name && String(t.name).endsWith('-calcon')) {
        PromoShared.readDraftFromDom();
        remount();
        return;
      }
      if (t.name === 'promo-budget-type' || t.id === 'promo-bg-program') {
        PromoShared.readDraftFromDom();
        PromoShared.getDraft().tab = 'budget';
        remount();
      }
    });

    container.addEventListener('input', (e) => {
      const inp = e.target.closest('.promo-picker__tools input');
      if (!inp) return;
      const picker = inp.closest('.promo-picker');
      const q = (inp.value || '').toLowerCase();
      picker.querySelectorAll('.promo-picker__list label').forEach((lab) => {
        lab.style.display = lab.textContent.toLowerCase().includes(q) ? '' : 'none';
      });
    });
  }

  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-action="promo-import-template"]')) {
      toast('Tải template thành công (mockup)', 'success');
      return;
    }
    if (e.target.closest('[data-action="promo-import-go"]')) {
      toast('Import Excel thành công (mockup)', 'success');
      document.getElementById('promo-import-modal')?.remove();
    }
  });

  renderPromotionEvent.onMount = function (container) {
    bindEventPage(container);
  };

  function budgetTypeLabel(code) {
    if (code === 'AMOUNT') return 'Tiền';
    if (code === 'SLOT') return 'Suất';
    if (code === 'UNLIMITED') return 'Không giới hạn';
    return code || '';
  }

  async function renderPromotionReportBudget() {
    const data = window.__promoReportBudget || (window.__promoReportBudget = await fetch('data/promotion-report-budget.json').then((r) => r.json()));
    const st = window.__promoBudgetFilter || (window.__promoBudgetFilter = { q: '', kind: '', from: '', to: '' });
    const q = (st.q || '').toLowerCase();
    const rows = (data.items || []).filter((it) => {
      if (q && !(String(it.code || '').toLowerCase().includes(q) || String(it.name || '').toLowerCase().includes(q))) return false;
      if (st.kind && it.kind !== st.kind) return false;
      const start = parseDate(it.startAt);
      if (parseDate(st.from) && start && start < parseDate(st.from)) return false;
      if (parseDate(st.to) && start && start > parseDate(st.to)) return false;
      return true;
    }).map((it, i) => Object.assign({}, it, { stt: i + 1 }));

    const filter = DMS.render('FilterPanel', {
      fields: [
        { type: 'search', id: 'promo-bg-q', label: 'Tìm kiếm theo', placeholder: 'Mã | Tên', value: st.q },
        {
          type: 'select', id: 'promo-bg-kind', label: 'Loại', placeholder: 'Tất cả', value: st.kind, searchable: false,
          options: [
            { value: 'ON_TOP', label: 'Chương trình on top' },
            { value: 'NORMAL', label: 'Chương trình bình thường' }
          ]
        },
        { type: 'date', id: 'promo-bg-from', label: 'Từ ngày', value: st.from },
        { type: 'date', id: 'promo-bg-to', label: 'Đến ngày', value: st.to }
      ]
    });

    const columns = [
      { key: 'stt', title: 'STT', width: '56px' },
      { key: 'code', title: 'Mã' },
      { key: 'name', title: 'Tên' },
      {
        key: 'status',
        title: 'Trạng thái',
        render: (val) => {
          const s = PromoShared.statusOf(val);
          return DMS.render('StatusTag', { status: val, text: s.text });
        }
      },
      { key: 'startAt', title: 'Ngày bắt đầu' },
      { key: 'endAt', title: 'Ngày kết thúc' },
      { key: 'budgetType', title: 'Loại ngân sách', render: (val) => budgetTypeLabel(val) },
      { key: 'total', title: 'Tổng' },
      { key: 'used', title: 'Đã dùng' },
      { key: 'remain', title: 'Còn lại' }
    ];

    const body = rows.length
      ? DMS.render('Table', { columns, data: rows })
      : `<div class="dms-table-wrapper">${DMS.render('EmptyState', { title: 'Trống' })}</div>`;

    return `
      ${PromoShared.breadcrumb([{ label: 'Báo Cáo Tổng Hợp CTKM' }])}
      <h1 class="dms-page-header__title dms-mt-md">Báo Cáo Tổng Hợp CTKM</h1>
      <div class="promo-toolbar">${DMS.render('Button', { text: 'Export Excel', type: 'default', dataAction: 'promo-export-budget' })}</div>
      ${filter}
      ${DMS.render('Card', {
        title: 'Danh sách',
        body: body + DMS.render('Pagination', { current: 1, pageSize: 10, total: rows.length, pageSizeOptions: [10, 20, 50, 100] })
      })}
    `;
  }

  renderPromotionReportBudget.onMount = function (container) {
    container.addEventListener('click', (e) => {
      if (e.target.closest('[data-action="filter-search"]')) {
        window.__promoBudgetFilter = {
          q: document.getElementById('promo-bg-q')?.value || '',
          kind: document.getElementById('promo-bg-kind')?.value || '',
          from: document.getElementById('promo-bg-from')?.value || '',
          to: document.getElementById('promo-bg-to')?.value || ''
        };
        DMSRouter.navigate('/promotion/report/budget', true);
        return;
      }
      if (e.target.closest('[data-action="filter-reset"]')) {
        window.__promoBudgetFilter = { q: '', kind: '', from: '', to: '' };
        DMSRouter.navigate('/promotion/report/budget', true);
        return;
      }
      if (e.target.closest('[data-action="promo-export-budget"]')) {
        const empty = container.querySelector('.dms-empty');
        if (empty) {
          toast('Không thể xuất file vì không có dữ liệu', 'error');
          return;
        }
        DMS.get('Dialog').confirm('Bạn có muốn xuất báo cáo tổng hợp CTKM không?', () => {
          toast('Xuất Excel thành công (mockup)', 'success');
        });
      }
    });
  };

  async function renderPromotionReportUsed() {
    const data = window.__promoReportUsed || (window.__promoReportUsed = await fetch('data/promotion-report-used.json').then((r) => r.json()));
    const st = window.__promoUsedFilter || (window.__promoUsedFilter = { q: '', promo: '', orderSt: '', applySt: '', from: '', to: '', store: '', npp: '', channel: '', area: '', collapsed: false });
    const q = (st.q || '').toLowerCase();
    const rows = (data.items || []).filter((it) => {
      if (q && !String(it.orderCode || '').toLowerCase().includes(q)) return false;
      if (st.promo && !(String(it.promoCode || '').includes(st.promo) || String(it.promoName || '').toLowerCase().includes(st.promo.toLowerCase()))) return false;
      if (st.orderSt && it.orderStatus !== st.orderSt) return false;
      if (st.applySt && it.applyStatus !== st.applySt) return false;
      if (st.store && !(String(it.storeCode || '').includes(st.store) || String(it.storeName || '').toLowerCase().includes(st.store.toLowerCase()))) return false;
      if (st.npp && !(String(it.nppCode || '').includes(st.npp) || String(it.nppName || '').toLowerCase().includes(st.npp.toLowerCase()))) return false;
      if (st.channel && it.channel !== st.channel) return false;
      if (st.area && it.area !== st.area) return false;
      const dt = parseDate(it.applyTime || it.orderDate);
      if (parseDate(st.from) && dt && dt < parseDate(st.from)) return false;
      if (parseDate(st.to) && dt && dt > parseDate(st.to)) return false;
      return true;
    }).map((it, i) => Object.assign({}, it, { stt: i + 1 }));

    const filter = DMS.render('FilterPanel', {
      collapsed: !!st.collapsed,
      collapseAfter: 6,
      fields: [
        { type: 'search', id: 'promo-used-q', label: 'Mã đơn', placeholder: 'Mã đơn', value: st.q },
        { type: 'search', id: 'promo-used-promo', label: 'CTKM', placeholder: 'Mã | Tên CTKM', value: st.promo },
        {
          type: 'select', id: 'promo-used-ost', label: 'Trạng thái đơn', placeholder: 'Tất cả', value: st.orderSt, searchable: false,
          options: [{ value: 'Thành công', label: 'Thành công' }, { value: 'Đã duyệt', label: 'Đã duyệt' }]
        },
        {
          type: 'select', id: 'promo-used-ast', label: 'Trạng thái áp dụng', placeholder: 'Tất cả', value: st.applySt, searchable: false,
          options: [{ value: 'Đã áp dụng', label: 'Đã áp dụng' }]
        },
        { type: 'date', id: 'promo-used-from', label: 'Từ ngày', value: st.from },
        { type: 'date', id: 'promo-used-to', label: 'Đến ngày', value: st.to },
        { type: 'search', id: 'promo-used-store', label: 'Điểm bán', placeholder: 'Mã | Tên điểm bán', value: st.store },
        { type: 'search', id: 'promo-used-npp', label: 'Nhà phân phối', placeholder: 'Mã | Tên NPP', value: st.npp },
        { type: 'search', id: 'promo-used-channel', label: 'Kênh', placeholder: 'Kênh bán hàng', value: st.channel },
        { type: 'search', id: 'promo-used-area', label: 'Vùng / Khu vực', placeholder: 'Khu vực', value: st.area }
      ]
    });

    const columns = [
      { key: 'stt', title: 'STT', width: '56px' },
      { key: 'orderCode', title: 'Mã đơn' },
      { key: 'orderDate', title: 'Ngày đơn' },
      { key: 'orderStatus', title: 'Trạng thái đơn' },
      { key: 'applyStatus', title: 'Trạng thái áp dụng' },
      { key: 'channel', title: 'Kênh' },
      { key: 'region', title: 'Vùng' },
      { key: 'area', title: 'Khu vực' },
      { key: 'nppCode', title: 'Mã NPP' },
      { key: 'nppName', title: 'Tên NPP' },
      { key: 'smCode', title: 'Mã NVBH' },
      { key: 'smName', title: 'Tên NVBH' },
      { key: 'promoCode', title: 'Mã CTKM' },
      { key: 'promoName', title: 'Tên CTKM' },
      { key: 'applyTime', title: 'Thời gian áp dụng' },
      { key: 'discountAmount', title: 'Chiết khấu' },
      { key: 'division', title: 'Ngành hàng' },
      { key: 'brand', title: 'Nhãn hiệu' },
      { key: 'category', title: 'Ngành hàng con' },
      { key: 'giftCode', title: 'Mã SP tặng' },
      { key: 'giftName', title: 'Tên SP tặng' },
      { key: 'giftQty', title: 'SL tặng' },
      { key: 'storeCode', title: 'Mã điểm bán' },
      { key: 'storeName', title: 'Tên điểm bán' },
      { key: 'storePhone', title: 'SĐT điểm bán' },
      { key: 'storeType', title: 'Loại điểm bán' },
      { key: 'storeAddress', title: 'Địa chỉ' },
      { key: 'ward', title: 'Phường/Xã' },
      { key: 'province', title: 'Tỉnh/TP' }
    ];

    const body = rows.length
      ? DMS.render('Table', { columns, data: rows })
      : `<div class="dms-table-wrapper">${DMS.render('EmptyState', { title: 'Trống' })}</div>`;

    return `
      ${PromoShared.breadcrumb([{ label: 'Báo Cáo Chi Tiết CTKM' }])}
      <h1 class="dms-page-header__title dms-mt-md">Báo Cáo Chi Tiết CTKM</h1>
      <div class="promo-toolbar">
        ${DMS.render('Button', { text: 'Export Excel', type: 'default', dataAction: 'promo-export-used' })}
      </div>
      ${filter}
      ${DMS.render('Card', {
        title: 'Danh sách',
        body: body + DMS.render('Pagination', { current: 1, pageSize: 10, total: rows.length, pageSizeOptions: [10, 20, 50, 100] })
      })}
    `;
  }

  renderPromotionReportUsed.onMount = function (container) {
    const read = () => {
      window.__promoUsedFilter = Object.assign({}, window.__promoUsedFilter, {
        q: document.getElementById('promo-used-q')?.value || '',
        promo: document.getElementById('promo-used-promo')?.value || '',
        orderSt: document.getElementById('promo-used-ost')?.value || '',
        applySt: document.getElementById('promo-used-ast')?.value || '',
        from: document.getElementById('promo-used-from')?.value || '',
        to: document.getElementById('promo-used-to')?.value || '',
        store: document.getElementById('promo-used-store')?.value || '',
        npp: document.getElementById('promo-used-npp')?.value || '',
        channel: document.getElementById('promo-used-channel')?.value || '',
        area: document.getElementById('promo-used-area')?.value || ''
      });
    };
    container.addEventListener('click', (e) => {
      if (e.target.closest('[data-action="filter-search"]')) {
        read();
        DMSRouter.navigate('/promotion/report/used', true);
        return;
      }
      if (e.target.closest('[data-action="filter-reset"]')) {
        window.__promoUsedFilter = { q: '', promo: '', orderSt: '', applySt: '', from: '', to: '', store: '', npp: '', channel: '', area: '', collapsed: false };
        DMSRouter.navigate('/promotion/report/used', true);
        return;
      }
      if (e.target.closest('[data-action="promo-export-used"]')) {
        const empty = container.querySelector('.dms-empty');
        if (empty) {
          toast('Không thể xuất file vì không có dữ liệu', 'error');
          return;
        }
        DMS.get('Dialog').confirm('Bạn có muốn xuất báo cáo chi tiết CTKM không?', () => {
          toast('Xuất Excel thành công (mockup)', 'success');
        });
      }
    });
  };

  window.renderPromotionEvent = renderPromotionEvent;
  window.renderPromotionReportBudget = renderPromotionReportBudget;
  window.renderPromotionReportUsed = renderPromotionReportUsed;
})();
