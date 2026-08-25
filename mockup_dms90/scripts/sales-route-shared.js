/**
 * Quản lý tuyến bán hàng — helper
 * UI: eco-dms-dev /mcp/route (+ task, task-group, real-route, distributor-transfer)
 * Business: HO 025/026/017/280 + VG 462/463 (giữ tên website; không check trùng; list đủ 11 nhiệm vụ)
 */
(function (DMS) {
  const LIST = '/route';
  const PAGE_SIZE = 10;
  const CODE_MAX = 50;
  const NAME_MAX = 500;
  const TG_NAME_MAX = 500;
  const PROCESS_STEPS = [
    'Khởi tạo xử lý',
    'Cập nhật tuyến bán hàng',
    'Xóa và tạo lại Tuyến thực tế',
    'Thêm đối tượng áp dụng CTTB',
    'Thêm đối tượng áp dụng CTTL',
    'Cập nhật điểm bán',
    'Xử lý hoàn tất'
  ];
  const WEEKDAYS = [
    { value: 'T2', label: 'Thứ 2' },
    { value: 'T3', label: 'Thứ 3' },
    { value: 'T4', label: 'Thứ 4' },
    { value: 'T5', label: 'Thứ 5' },
    { value: 'T6', label: 'Thứ 6' },
    { value: 'T7', label: 'Thứ 7' },
    { value: 'CN', label: 'CN' }
  ];
  const TYPE_TAG = {
    ROUTE: { text: 'Theo tuyến', type: 'default' },
    OPEN_NEW: { text: 'Mở mới', type: 'blue' },
    CARE: { text: 'Chăm sóc', type: 'green' }
  };
  const TF_STATUS = {
    '': { text: '', type: 'default' },
    EMPTY: { text: '', type: 'default' },
    PROCESSING: { text: 'Đang xử lý', type: 'orange' },
    SUCCESS: { text: 'Thành công', type: 'green' },
    FAILED: { text: 'Thất bại', type: 'red' }
  };

  function pad(n) { return String(n).padStart(2, '0'); }

  function nowStr() {
    const d = new Date();
    return `${pad(d.getDate())}-${pad(d.getMonth() + 1)}-${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  }

  function todayDmy() {
    const d = new Date();
    return `${pad(d.getDate())}-${pad(d.getMonth() + 1)}-${d.getFullYear()}`;
  }

  function includesQ(hay, q) {
    return String(hay || '').toLowerCase().includes(String(q || '').toLowerCase());
  }

  const SalesRouteShared = {
    LIST,
    PAGE_SIZE,
    CODE_MAX,
    NAME_MAX,
    TG_NAME_MAX,
    PROCESS_STEPS,
    WEEKDAYS,

    async loadData() {
      document.getElementById('sr-route-modal')?.remove();
      document.getElementById('sr-tg-modal')?.remove();
      document.getElementById('sr-tf-modal')?.remove();
      document.getElementById('sr-pick-route-modal')?.remove();
      document.getElementById('sr-pick-store-modal')?.remove();
      if (window.__srData) return window.__srData;
      window.__srData = await fetch('data/sales-route.json').then(r => r.json());
      return window.__srData;
    },

    breadcrumb(items) {
      return DMS.render('Breadcrumb', {
        items: [{ label: 'Quản Lý Tuyến Bán Hàng', route: LIST }].concat(items || [])
      });
    },

    nppLabel(npp) {
      if (!npp) return '';
      return `${npp.code} - ${npp.name}`;
    },

    empLabel(emp) {
      if (!emp) return '';
      return `${emp.code} - ${emp.name}`;
    },

    findNpp(data, id) {
      return (data.npps || []).find(n => n.id === id);
    },

    findEmp(data, id) {
      return (data.employees || []).find(e => e.id === id);
    },

    findStore(data, id) {
      return (data.stores || []).find(s => s.id === id);
    },

    findGroup(data, id) {
      return (data.taskGroups || []).find(g => g.id === id);
    },

    findRoute(data, id) {
      return (data.routes || []).find(r => r.id === id);
    },

    nppOptions(data, opts = {}) {
      return (data.npps || [])
        .filter(n => opts.activeOnly ? n.status === 'ACTIVE' : true)
        .filter(n => opts.region ? n.region === opts.region : true)
        .map(n => ({ value: n.id, label: this.nppLabel(n) }));
    },

    empOptions(data) {
      return (data.employees || [])
        .filter(e => e.status === 'ACTIVE')
        .map(e => ({ value: e.id, label: this.empLabel(e) }));
    },

    regionOptions(data) {
      return (data.regions || []).map(r => ({ value: r.name, label: r.name }));
    },

    brandOptions(data) {
      return data.brands || [];
    },

    attrOptions(data) {
      return data.productAttrs || [];
    },

    groupOptions(data, type) {
      return (data.taskGroups || [])
        .filter(g => g.status === 'ACTIVE' && (!type || g.type === type))
        .map(g => ({ value: g.id, label: `${g.code} - ${g.name}` }));
    },

    copyCell(text) {
      const v = text || '';
      if (!v) return '';
      return `<span class="dms-copy">${DMS.escape(v)} ${DMS.render('Button', {
        text: 'Copy',
        type: 'link',
        size: 'sm',
        dataAction: 'sr-copy',
        className: 'dms-copy__btn'
      }).replace('<button', `<button data-copy="${DMS.escape(v)}"`)}</span>`;
    },

    statusSwitch(status, action, disabled) {
      return DMS.render('Switch', {
        checked: status === 'ACTIVE',
        disabled: !!disabled,
        dataAction: action || ''
      });
    },

    typeTag(type) {
      const t = TYPE_TAG[type] || { text: type || '', type: 'default' };
      return DMS.render('Tag', t);
    },

    tfStatusTag(status) {
      const t = TF_STATUS[status] || { text: status || '', type: 'default' };
      if (!t.text) return '';
      return DMS.render('StatusTag', { status, text: t.text });
    },

    brandTags(codes, data) {
      return (codes || []).map(c => {
        const b = (data.brands || []).find(x => x.value === c);
        return DMS.render('Tag', { text: b ? b.label : c, type: 'blue' });
      }).join(' ');
    },

    fieldError(id, msg) {
      return msg
        ? `<div class="dms-form-item__error" id="${id}-error">${DMS.escape(msg)}</div>`
        : `<div class="dms-form-item__error" id="${id}-error"></div>`;
    },

    setError(id, msg) {
      const wrap = document.getElementById(`wrap-${id}`);
      const err = document.getElementById(`${id}-error`);
      if (wrap) wrap.classList.toggle('is-error', !!msg);
      if (err) err.textContent = msg || '';
    },

    requiredMsg() {
      return 'Tên trường là bắt buộc';
    },

    slicePage(rows, page, pageSize) {
      const size = pageSize || PAGE_SIZE;
      const p = Math.max(1, page || 1);
      const start = (p - 1) * size;
      return {
        rows: (rows || []).slice(start, start + size),
        page: p,
        pageSize: size,
        total: (rows || []).length
      };
    },

    renderPager(page, pageSize, total) {
      return DMS.render('Pagination', {
        current: page,
        pageSize,
        total,
        pageSizeOptions: [10, 50, 100]
      });
    },

    bindPager(container, bodyId, state, renderFn) {
      container.addEventListener('click', (e) => {
        const btn = e.target.closest('.dms-pagination__btn[data-page]');
        if (!btn || !container.contains(btn)) return;
        const body = btn.closest(`#${bodyId}`) || container.querySelector(`#${bodyId}`);
        if (!body) return;
        state.page = Number(btn.dataset.page);
        renderFn();
      });
      container.addEventListener('change', (e) => {
        const sel = e.target.closest('.dms-pagination__size select');
        if (!sel) return;
        const body = sel.closest(`#${bodyId}`) || container.querySelector(`#${bodyId}`);
        if (!body) return;
        state.pageSize = Number(sel.value);
        state.page = 1;
        renderFn();
      });
    },

    emptyTgDraft() {
      return {
        id: '',
        code: '',
        name: '',
        regions: [],
        areas: [],
        type: 'ROUTE',
        status: 'ACTIVE',
        tasks: [],
        assignedToRoute: false
      };
    },

    emptyRouteDraft() {
      return {
        id: '',
        code: '',
        name: '',
        nppIds: [],
        brands: [],
        productAttrs: [],
        visitGroupId: '',
        careGroupId: '',
        employeeId: '',
        stores: [],
        status: 'ACTIVE',
        savedInfo: false,
        history: []
      };
    },

    emptyTfDraft() {
      return {
        sourceNppId: '',
        targetNppId: '',
        routes: [],
        processed: false,
        processing: false
      };
    },

    getRouteDraft() {
      if (!window.__srRouteDraft) window.__srRouteDraft = this.emptyRouteDraft();
      return window.__srRouteDraft;
    },

    resetRouteDraft() {
      window.__srRouteDraft = this.emptyRouteDraft();
      return window.__srRouteDraft;
    },

    getTgDraft() {
      if (!window.__srTgDraft) window.__srTgDraft = this.emptyTgDraft();
      return window.__srTgDraft;
    },

    resetTgDraft() {
      window.__srTgDraft = this.emptyTgDraft();
      return window.__srTgDraft;
    },

    getTfDraft() {
      if (!window.__srTfDraft) window.__srTfDraft = this.emptyTfDraft();
      return window.__srTfDraft;
    },

    resetTfDraft() {
      window.__srTfDraft = this.emptyTfDraft();
      return window.__srTfDraft;
    },

    nextTgCode(data) {
      const nums = (data.taskGroups || []).map(g => Number(String(g.code || '').replace(/\D/g, '')) || 0);
      const n = Math.max(0, ...nums) + 1;
      return `BU${String(n).padStart(7, '0')}`;
    },

    nextRouteCode(data) {
      const nums = (data.routes || []).map(r => Number(String(r.code || '').replace(/\D/g, '')) || 0);
      const n = Math.max(0, ...nums) + 1;
      return `ROUTE${String(n).padStart(10, '0')}`;
    },

    loadRouteDraft(item) {
      window.__srRouteDraft = {
        id: item.id,
        code: item.code || '',
        name: item.name || '',
        nppIds: item.nppId ? [item.nppId] : [],
        brands: (item.brands || []).slice(),
        productAttrs: (item.productAttrs || []).slice(),
        visitGroupId: item.visitGroupId || '',
        careGroupId: item.careGroupId || '',
        employeeId: item.employeeId || '',
        stores: (item.stores || []).map(s => ({ ...s, days: (s.days || []).slice() })),
        status: item.status || 'ACTIVE',
        savedInfo: true,
        history: (item.history || []).slice()
      };
      return window.__srRouteDraft;
    },

    duplicateRoute(item) {
      const draft = this.loadRouteDraft(item);
      draft.id = '';
      draft.code = `${item.code}-Copy`;
      draft.name = `${item.name}-Copy`;
      draft.employeeId = '';
      draft.savedInfo = false;
      draft.history = [];
      return draft;
    },

    overflowMsg(label, length) {
      return `${label} tối đa ${length} ký tự!`;
    },

    filterTasks(items, filters) {
      const q = (filters.q || '').trim().toLowerCase();
      const status = filters.status || '';
      return (items || []).filter(it => {
        if (q && !includesQ(it.code, q) && !includesQ(it.name, q)) return false;
        if (status && it.status !== status) return false;
        return true;
      });
    },

    filterTaskGroups(items, filters) {
      const q = (filters.q || '').trim().toLowerCase();
      const type = filters.type || '';
      const status = filters.status || '';
      return (items || []).filter(it => {
        if (q && !includesQ(it.code, q) && !includesQ(it.name, q)) return false;
        if (type && it.type !== type) return false;
        if (status && it.status !== status) return false;
        return true;
      });
    },

    filterRoutes(items, data, filters) {
      const q = (filters.q || '').trim().toLowerCase();
      const storeQ = (filters.storeQ || '').trim().toLowerCase();
      const region = filters.region || '';
      const nppId = filters.nppId || '';
      const visitId = filters.visitId || '';
      const careId = filters.careId || '';
      const status = filters.status || '';
      return (items || []).filter(it => {
        if (q) {
          const emp = this.findEmp(data, it.employeeId);
          const hit = includesQ(it.code, q) || includesQ(it.name, q)
            || includesQ(it.employeeId, q) || includesQ(it.employeeName, q)
            || includesQ(emp && emp.code, q) || includesQ(emp && emp.name, q);
          if (!hit) return false;
        }
        if (storeQ) {
          const hitStore = (it.stores || []).some(s => {
            const st = this.findStore(data, s.storeId);
            return st && (includesQ(st.code, storeQ) || includesQ(st.name, storeQ) || includesQ(st.phone, storeQ));
          });
          if (!hitStore) return false;
        }
        if (region && it.region !== region) return false;
        if (nppId && it.nppId !== nppId) return false;
        if (visitId && it.visitGroupId !== visitId) return false;
        if (careId && it.careGroupId !== careId) return false;
        if (status && it.status !== status) return false;
        return true;
      });
    },

    filterRealRoutes(items, data, filters) {
      const routeQ = (filters.routeQ || '').trim().toLowerCase();
      const date = filters.date || '';
      const empId = filters.empId || '';
      const brand = filters.brand || '';
      const storeQ = (filters.storeQ || '').trim().toLowerCase();
      return (items || []).filter(it => {
        if (routeQ && !includesQ(it.routeCode, routeQ) && !includesQ(it.routeName, routeQ)) return false;
        if (empId && it.employeeId !== empId) return false;
        if (brand && !(it.brands || []).includes(brand)) return false;
        if (date && !(it.days || []).some(d => d.date === date)) return false;
        if (storeQ) {
          const hit = (it.days || []).some(d => (d.stores || []).some(s => {
            const st = this.findStore(data, s.storeId);
            return st && (includesQ(st.code, storeQ) || includesQ(st.name, storeQ));
          }));
          if (!hit) return false;
        }
        return true;
      });
    },

    filterTransfers(items, filters) {
      const src = filters.sourceNppId || '';
      const tgt = filters.targetNppId || '';
      const date = filters.date || '';
      return (items || []).filter(it => {
        if (src && it.sourceNppId !== src) return false;
        if (tgt && it.targetNppId !== tgt) return false;
        if (date && !(it.createdAt || '').startsWith(date)) return false;
        return true;
      });
    },

    realRouteStats(item) {
      const days = item.days || [];
      let totalIn = 0;
      let visitedIn = 0;
      let visitedOut = 0;
      days.forEach(d => {
        (d.stores || []).forEach(s => {
          const done = !!(s.checkin && s.checkout);
          if (s.type === 'Ngoại tuyến') {
            if (done) visitedOut += 1;
          } else {
            totalIn += 1;
            if (done) visitedIn += 1;
          }
        });
      });
      return { totalIn, visitedIn, visitedOut, ratio: `${visitedIn}/${totalIn || 0}` };
    },

    renderChecks(id, label, options, values, required, disabled) {
      return `${DMS.render('MultiSelect', {
        id,
        label,
        options: options || [],
        values: values || [],
        placeholder: `Chọn ${label}`,
        requiredMark: !!required,
        disabled: !!disabled,
        searchable: true
      })}${this.fieldError(id)}`;
    },

    readChecks(id) {
      return DMS.get('MultiSelect')?.getValues(id) || [];
    },

    pageHeader(title) {
      return `<div class="dms-page-toolbar dms-mt-md"><h1 class="dms-page-header__title dms-m-0">${DMS.escape(title)}</h1></div>`;
    },

    renderExpandBtn(id, open) {
      return `<button type="button" class="dms-expand" data-action="sr-expand" data-id="${DMS.escape(id)}" aria-expanded="${open ? 'true' : 'false'}">${open ? '−' : '+'}</button>`;
    }
  };

  window.SalesRouteShared = SalesRouteShared;
})(window.DMS);
