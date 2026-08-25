/**
 * Chương Trình Khuyến Mãi
 * UI: DEV /promotion/event ; Rule: 283, 086, 087, 115, 334
 */
(function (DMS) {
  const STATUS = {
    INIT: { text: 'Khởi tạo', type: 'default' },
    PENDING: { text: 'Đang chờ duyệt', type: 'gold' },
    UPCOMING: { text: 'Sắp diễn ra', type: 'orange' },
    RUNNING: { text: 'Đang diễn ra', type: 'green' },
    PAUSED: { text: 'Tạm ngưng', type: 'default' },
    REJECTED: { text: 'Từ chối', type: 'red' },
    ENDED: { text: 'Kết thúc', type: 'default' }
  };
  const KIND = {
    ON_TOP: { text: 'Chương trình on top', cls: 'promo-kind--ontop' },
    NORMAL: { text: 'Chương trình bình thường', cls: 'promo-kind--normal' }
  };
  const COND_TYPES = [
    { value: 'IN_SKUS', label: 'Danh sách sản phẩm' },
    { value: 'QTY_EACH', label: 'Số lượng mỗi loại sản phẩm' },
    { value: 'QTY_GROUP', label: 'Tổng số lượng nhóm sản phẩm' },
    { value: 'AMT_GROUP', label: 'Tổng giá trị nhóm sản phẩm' },
    { value: 'AMT_ORDER', label: 'Tổng giá trị đơn hàng' },
    { value: 'IN_GROUPS', label: 'Nhóm sản phẩm' }
  ];
  const ACT_TYPES_ALL = [
    { value: 'PERCENT', label: 'Chiết khấu' },
    { value: 'FIXED', label: 'Giảm tiền' },
    { value: 'GIFT_SAME', label: 'Tặng kèm sản phẩm cùng loại' },
    { value: 'GIFT_LIST', label: 'Tặng kèm sản phẩm theo danh sách' },
    { value: 'FLAT', label: 'Đồng giá sản phẩm' }
  ];
  const TARGET_TYPES = [
    { value: 'DISTRIBUTOR', label: 'Danh sách nhà phân phối', cat: 'distributors' },
    { value: 'MERCHANT', label: 'Danh sách điểm bán', cat: 'stores' },
    { value: 'CHANNEL', label: 'Danh sách kênh bán hàng', cat: 'channels' },
    { value: 'STORE_LOCATION', label: 'Danh sách vị trí điểm bán', cat: 'storeLocations' },
    { value: 'STORE_RANK', label: 'Danh sách hạng điểm bán', cat: 'storeRanks' },
    { value: 'STORE_TYPE', label: 'Danh sách loại điểm bán', cat: 'storeTypes' },
    { value: 'AREA', label: 'Danh sách khu vực', cat: 'areas' }
  ];
  const LOGIC = [
    { value: 'AND', label: 'VÀ' },
    { value: 'OR', label: 'HOẶC' }
  ];

  function uid(prefix) {
    return prefix + Math.random().toString(36).slice(2, 8);
  }
  function nowLabel() {
    const d = new Date();
    const p = (n) => String(n).padStart(2, '0');
    return `${p(d.getDate())}-${p(d.getMonth() + 1)}-${d.getFullYear()} ${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
  }
  function emptyCondition() {
    return { id: uid('c'), type: '', operator: 'GTE', amount: '', products: [], groups: [], qty: '' };
  }
  function emptyAction() {
    return {
      id: uid('a'), type: '', percent: '', maxAmount: '', calcOn: 'totalAmountOfOrder',
      amount: '', qty: '', maxSlot: 1, products: [], flatPrice: '', deductRule: 'CONDITION'
    };
  }
  function emptyTarget() {
    return { id: uid('t'), type: '', codes: [] };
  }
  function emptyPackage() {
    return { id: uid('pkg'), conditions: [emptyCondition()], actions: [emptyAction()] };
  }
  function emptyDraft() {
    return {
      id: '',
      code: '',
      name: '',
      kind: 'ON_TOP',
      status: 'INIT',
      salesType: 'SELL_IN',
      warehouse: 'WH_PROMO',
      calcMethod: 'NORMAL',
      lotDate: false,
      priority: '',
      startAt: '',
      endAt: '',
      terms: '',
      logicCondition: 'AND',
      logicAction: 'AND',
      logicTarget: 'AND',
      conditions: [],
      actions: [],
      targets: [],
      packages: [],
      buyProducts: [],
      budgetType: 'UNLIMITED',
      budget: { program: false, area: false, distributor: false, perStore: false, programAmount: '' },
      createdBy: 'Thảo BA',
      createdAt: '',
      updatedAt: '',
      statusHistory: [],
      versions: [],
      tab: 'info',
      errors: {}
    };
  }

  const PromoShared = {
    STATUS, KIND, COND_TYPES, TARGET_TYPES, LOGIC,

    radioGroup(name, label, value, options, requiredMark) {
      const radios = (options || []).map(o => DMS.render('Radio', {
        name,
        value: o.value,
        checked: String(o.value) === String(value),
        disabled: !!o.disabled,
        label: o.label
      })).join('');
      return `<div class="dms-form-item">${label ? `<label class="dms-form-item__label ${requiredMark ? 'is-required' : ''}">${DMS.escape(label)}</label>` : ''}<div class="dms-flex dms-gap-md" style="flex-wrap:wrap">${radios}</div></div>`;
    },

    actTypes(calcMethod) {
      if (calcMethod === 'SIDE_STEP') return ACT_TYPES_ALL.filter(x => x.value !== 'FLAT');
      return ACT_TYPES_ALL;
    },

    statusOf(code) { return STATUS[code] || { text: code || '', type: 'default' }; },
    kindOf(code) { return KIND[code] || { text: code || '', cls: '' }; },

    can(action, status) {
      const map = {
        edit: ['INIT'],
        delete: ['INIT'],
        carry: ['INIT', 'PENDING', 'UPCOMING', 'RUNNING', 'PAUSED'],
        copy: Object.keys(STATUS)
      };
      return (map[action] || []).includes(status);
    },

    carryLabel(status) {
      if (status === 'INIT' || status === 'PAUSED') return 'Yêu cầu duyệt';
      if (status === 'PENDING') return 'Phê duyệt';
      if (status === 'UPCOMING' || status === 'RUNNING') return 'Tạm ngưng';
      return 'Cập nhật trạng thái';
    },

    nextStatus(status) {
      if (status === 'INIT' || status === 'PAUSED') return 'PENDING';
      if (status === 'PENDING') return 'RUNNING';
      if (status === 'UPCOMING' || status === 'RUNNING') return 'PAUSED';
      return status;
    },

    breadcrumb(items) {
      return DMS.render('Breadcrumb', {
        items: [{ label: 'Chương Trình Khuyến Mãi', route: '/promotion/event' }].concat(items)
      });
    },

    async loadStore() {
      if (!window.__promoStore) {
        window.__promoStore = await fetch('data/promotion.json').then(r => r.json());
      }
      return window.__promoStore;
    },

    catalog(key) {
      const s = window.__promoStore || {};
      return s[key] || [];
    },

    nameOf(key, code) {
      const hit = this.catalog(key).find(x => x.code === code);
      return hit ? `${hit.code} - ${hit.name}` : code;
    },

    getDraft() {
      if (!window.__promoDraft) window.__promoDraft = emptyDraft();
      return window.__promoDraft;
    },
    resetDraft() {
      window.__promoDraft = emptyDraft();
      return window.__promoDraft;
    },
    loadDraft(item, mode) {
      const d = JSON.parse(JSON.stringify(item));
      d.tab = 'info';
      d.errors = {};
      if (mode === 'copy') {
        d.id = '';
        d.code = '';
        d.name = (item.name || '') + ' (Sao chép)';
        d.status = 'INIT';
        d.createdAt = '';
        d.updatedAt = '';
        d.statusHistory = [];
        d.versions = [];
      }
      window.__promoDraft = d;
      return d;
    },

    field(id, msg) {
      const err = (this.getDraft().errors || {})[id] || msg;
      return err ? `<div class="dms-form-item__error">${DMS.escape(err)}</div>` : '';
    },

    logicSelect(id, value) {
      return DMS.render('Select', {
        id, value: value || 'AND', options: LOGIC, searchable: false
      });
    },

    picker(id, selected, catalogKey, readonly) {
      const list = this.catalog(catalogKey);
      const set = new Set(selected || []);
      const rows = list.map(p => `
        <label class="dms-flex dms-gap-sm dms-items-center">
          <input type="checkbox" data-picker="${id}" value="${DMS.escape(p.code)}" ${set.has(p.code) ? 'checked' : ''} ${readonly ? 'disabled' : ''} />
          <span>${DMS.escape(p.code)} - ${DMS.escape(p.name)}</span>
        </label>`).join('');
      return `<div class="promo-picker">
        <div class="promo-picker__tools">
          ${DMS.render('Input', { id: id + '-q', placeholder: 'Tìm kiếm' })}
          ${readonly ? '' : DMS.render('Button', { text: 'Import Excel', type: 'default', dataAction: 'promo-import-picker-' + id })}
          ${readonly ? '' : DMS.render('Button', { text: 'Thêm mới', type: 'default', dataAction: 'promo-add-master-' + id })}
        </div>
        <div class="promo-picker__list">${rows || DMS.render('EmptyState', { title: 'Trống' })}</div>
      </div>`;
    },

    renderConditionFields(cond, prefix, readonly) {
      const typeSel = DMS.render('Select', {
        id: prefix + '-type', label: 'Điều kiện', requiredMark: true,
        value: cond.type, placeholder: 'Chọn điều kiện.',
        options: COND_TYPES, disabled: readonly
      });
      if (!cond.type) return typeSel + this.field(prefix + '-type');
      let extra = '';
      if (cond.type === 'IN_SKUS' || cond.type === 'QTY_EACH' || cond.type === 'QTY_GROUP' || cond.type === 'AMT_GROUP') {
        extra += `<div class="dms-form-item"><label class="dms-form-item__label is-required">Sản phẩm</label>${this.picker(prefix + '-sp', cond.products, 'products', readonly)}${this.field(prefix + '-sp')}</div>`;
      }
      if (cond.type === 'IN_GROUPS') {
        extra += `<div class="dms-form-item"><label class="dms-form-item__label is-required">Nhóm sản phẩm</label>${this.picker(prefix + '-gr', cond.groups, 'groups', readonly)}${this.field(prefix + '-gr')}</div>`;
      }
      if (cond.type === 'QTY_EACH' || cond.type === 'QTY_GROUP') {
        extra += DMS.render('Input', { id: prefix + '-qty', label: 'Số lượng', requiredMark: true, placeholder: 'Nhập vào số lượng.', value: cond.qty || '', disabled: readonly }) + this.field(prefix + '-qty');
      }
      if (cond.type === 'AMT_ORDER' || cond.type === 'AMT_GROUP') {
        extra += `<div class="dms-form-item"><label class="dms-form-item__label">Phương thức</label><div>Lớn hơn hoặc Bằng</div></div>`;
        extra += DMS.render('Input', { id: prefix + '-amt', label: 'Số tiền', requiredMark: true, placeholder: 'Nhập số tiền', value: cond.amount || '', disabled: readonly }) + this.field(prefix + '-amt');
      }
      return typeSel + this.field(prefix + '-type') + extra;
    },

    renderActionFields(act, prefix, calcMethod, readonly) {
      const typeSel = DMS.render('Select', {
        id: prefix + '-type', label: 'Hình thức', requiredMark: true,
        value: act.type, placeholder: 'Chọn hình thức.',
        options: this.actTypes(calcMethod), disabled: readonly
      });
      if (!act.type) return typeSel + this.field(prefix + '-type');
      let extra = '';
      if (act.type === 'PERCENT') {
        extra += DMS.render('Input', { id: prefix + '-percent', label: 'Mức chiết khấu (%)', requiredMark: true, placeholder: 'Nhập vào mức chiết khấu (%).', value: act.percent || '', disabled: readonly }) + this.field(prefix + '-percent');
        extra += DMS.render('Input', { id: prefix + '-max', label: 'Tối đa', placeholder: 'Nhập vào tối đa.', value: act.maxAmount || '', disabled: readonly });
        extra += this.radioGroup(prefix + '-calcon', '', act.calcOn || 'totalAmountOfOrder', [
          { value: 'totalAmountOfOrder', label: 'Chiết khấu % toàn bộ đơn hàng' },
          { value: 'totalAmountOfSkus', label: 'Chiết khấu % giá trị nhóm sản phẩm' },
          { value: 'totalAmountOfSkusByMultiple', label: 'Chiết khấu % giá trị nhóm sản phẩm theo điều kiện' }
        ]);
        if (act.calcOn === 'totalAmountOfSkus' || act.calcOn === 'totalAmountOfSkusByMultiple') {
          extra += `<div class="dms-form-item"><label class="dms-form-item__label">Sản phẩm mua</label>${this.picker(prefix + '-sp', act.products, 'products', readonly)}</div>`;
        }
      }
      if (act.type === 'FIXED') {
        extra += DMS.render('Input', { id: prefix + '-amt', label: 'Số tiền giảm trên đơn', requiredMark: true, placeholder: 'Nhập vào số tiền giảm trên đơn.', value: act.amount || '', disabled: readonly }) + this.field(prefix + '-amt');
        extra += DMS.render('Input', { id: prefix + '-slot', label: 'Số suất tối đa/Đơn', placeholder: 'Nhập vào số suất tối đa/đơn.', value: act.maxSlot || '', disabled: readonly });
        extra += this.radioGroup(prefix + '-calcon', 'Quy tắc giảm trừ', act.calcOn || 'totalAmountOfOrder', [
          { value: 'totalAmountOfOrder', label: 'Giảm giá trên tổng đơn hàng' },
          { value: 'totalAmountOfSkus', label: 'Giảm giá trên tổng giá trị nhóm sản phẩm/bộ sản phẩm' }
        ]);
      }
      if (act.type === 'GIFT_SAME' || act.type === 'GIFT_LIST' || act.type === 'FLAT') {
        extra += DMS.render('Input', { id: prefix + '-qty', label: 'Số lượng', requiredMark: true, placeholder: 'Nhập vào số lượng.', value: act.qty || '', disabled: readonly }) + this.field(prefix + '-qty');
        extra += DMS.render('Input', { id: prefix + '-slot', label: 'Số suất tối đa/Đơn', placeholder: 'Nhập vào số suất tối đa/đơn.', value: act.maxSlot || '', disabled: readonly });
        extra += DMS.render('Select', {
          id: prefix + '-deduct', label: 'Quy tắc giảm trừ', value: act.deductRule || 'CONDITION',
          options: [{ value: 'CONDITION', label: 'Theo điều kiện' }, { value: 'ALL_PRODUCTS', label: 'Tất cả sản phẩm' }],
          disabled: readonly, searchable: false
        });
      }
      if (act.type === 'GIFT_LIST' || act.type === 'FLAT') {
        extra += `<div class="dms-form-item"><label class="dms-form-item__label is-required">Sản phẩm</label>${this.picker(prefix + '-sp', act.products, 'products', readonly)}${this.field(prefix + '-sp')}</div>`;
      }
      if (act.type === 'FLAT') {
        extra += DMS.render('Input', { id: prefix + '-flat', label: 'Đồng giá', requiredMark: true, placeholder: 'Nhập đồng giá', value: act.flatPrice || '', disabled: readonly }) + this.field(prefix + '-flat');
      }
      return typeSel + this.field(prefix + '-type') + extra;
    },

    renderTargetFields(tg, prefix, readonly) {
      const typeSel = DMS.render('Select', {
        id: prefix + '-type', label: 'Đối tượng', requiredMark: true,
        value: tg.type, placeholder: 'Chọn đối tượng.',
        options: TARGET_TYPES, disabled: readonly
      });
      const meta = TARGET_TYPES.find(x => x.value === tg.type);
      let extra = '';
      if (meta) {
        extra = `<div class="dms-form-item">${this.picker(prefix + '-codes', tg.codes, meta.cat, readonly)}${this.field(prefix + '-codes')}</div>`;
      }
      return typeSel + this.field(prefix + '-type') + extra;
    },

    collectPicker(id) {
      return [...document.querySelectorAll(`[data-picker="${id}"]:checked`)].map(i => i.value);
    },

    readDraftFromDom() {
      const d = this.getDraft();
      const val = (id) => document.getElementById(id)?.value ?? '';
      const checked = (name) => document.querySelector(`[name="${name}"]:checked`)?.value;
      d.code = val('promo-code');
      d.name = val('promo-name');
      d.terms = document.getElementById('promo-terms')?.innerText || val('promo-terms') || d.terms;
      d.startAt = val('promo-start');
      d.endAt = val('promo-end');
      d.kind = checked('promo-kind') || d.kind;
      d.salesType = checked('promo-sales') || d.salesType;
      d.warehouse = val('promo-wh');
      d.calcMethod = val('promo-calc');
      const lotEl = document.getElementById('promo-lot');
      d.lotDate = !!(lotEl && (lotEl.checked || lotEl.classList.contains('is-checked') || lotEl.getAttribute('aria-checked') === 'true'));
      const activeTab = document.querySelector('#promo-form-modal .dms-tabs__tab.is-active');
      if (activeTab) d.tab = String(activeTab.dataset.tab) === '1' ? 'budget' : 'info';
      d.priority = val('promo-priority');
      d.logicCondition = val('promo-logic-c') || d.logicCondition;
      d.logicAction = val('promo-logic-a') || d.logicAction;
      d.logicTarget = val('promo-logic-t') || d.logicTarget;
      d.budgetType = checked('promo-budget-type') || d.budgetType;
      d.budget.program = !!document.getElementById('promo-bg-program')?.checked;
      d.budget.area = !!document.getElementById('promo-bg-area')?.checked;
      d.budget.distributor = !!document.getElementById('promo-bg-npp')?.checked;
      d.budget.perStore = !!document.getElementById('promo-bg-store')?.checked;
      d.budget.programAmount = val('promo-bg-amt');
      d.buyProducts = this.collectPicker('promo-buy');
      (d.conditions || []).forEach((c, i) => {
        const p = `promo-c-${i}`;
        c.type = val(p + '-type');
        c.qty = val(p + '-qty');
        c.amount = val(p + '-amt');
        c.products = this.collectPicker(p + '-sp');
        c.groups = this.collectPicker(p + '-gr');
      });
      (d.actions || []).forEach((a, i) => {
        const p = `promo-a-${i}`;
        a.type = val(p + '-type');
        a.percent = val(p + '-percent');
        a.maxAmount = val(p + '-max');
        a.amount = val(p + '-amt');
        a.qty = val(p + '-qty');
        a.maxSlot = val(p + '-slot');
        a.flatPrice = val(p + '-flat');
        a.deductRule = val(p + '-deduct') || a.deductRule;
        a.calcOn = checked(p + '-calcon') || a.calcOn;
        a.products = this.collectPicker(p + '-sp');
      });
      (d.targets || []).forEach((t, i) => {
        const p = `promo-t-${i}`;
        t.type = val(p + '-type');
        t.codes = this.collectPicker(p + '-codes');
      });
      (d.packages || []).forEach((pkg, pi) => {
        (pkg.conditions || []).forEach((c, i) => {
          const p = `promo-p${pi}-c-${i}`;
          c.type = val(p + '-type');
          c.qty = val(p + '-qty');
          c.amount = val(p + '-amt');
          c.products = this.collectPicker(p + '-sp');
          c.groups = this.collectPicker(p + '-gr');
        });
        (pkg.actions || []).forEach((a, i) => {
          const p = `promo-p${pi}-a-${i}`;
          a.type = val(p + '-type');
          a.percent = val(p + '-percent');
          a.maxAmount = val(p + '-max');
          a.amount = val(p + '-amt');
          a.qty = val(p + '-qty');
          a.maxSlot = val(p + '-slot');
          a.flatPrice = val(p + '-flat');
          a.deductRule = val(p + '-deduct') || a.deductRule;
          a.calcOn = checked(p + '-calcon') || a.calcOn;
          a.products = this.collectPicker(p + '-sp');
        });
      });
      return d;
    },

    validate(d) {
      const errors = {};
      const need = (id, ok, msg) => { if (!ok) errors[id] = msg; };
      need('promo-code', !!(d.code || '').trim(), 'Mã chương trình khuyến mãi bắt buộc không để trống!');
      need('promo-name', !!(d.name || '').trim(), 'Tên chương trình khuyến mãi bắt buộc không để trống!');
      need('promo-terms', !!(d.terms || '').trim(), 'Thể lệ chương trình bắt buộc không để trống!');
      need('promo-start', !!(d.startAt || '').trim() && !!(d.endAt || '').trim(), 'Khoảng thời gian áp dụng bắt buộc không để trống!');
      const checkCond = (c, prefix) => {
        need(prefix + '-type', !!c.type, 'Điều kiện bắt buộc không để trống!');
        if (c.type === 'IN_SKUS' || c.type === 'QTY_EACH' || c.type === 'QTY_GROUP' || c.type === 'AMT_GROUP') {
          need(prefix + '-sp', (c.products || []).length > 0, 'Sản phẩm bắt buộc không để trống!');
        }
        if (c.type === 'IN_GROUPS') need(prefix + '-gr', (c.groups || []).length > 0, 'Nhóm sản phẩm bắt buộc không để trống!');
        if (c.type === 'QTY_EACH' || c.type === 'QTY_GROUP') need(prefix + '-qty', c.qty !== '' && c.qty != null, 'Số lượng bắt buộc không để trống!');
        if (c.type === 'AMT_ORDER' || c.type === 'AMT_GROUP') need(prefix + '-amt', c.amount !== '' && c.amount != null, 'Số tiền bắt buộc không để trống!');
      };
      const checkAct = (a, prefix) => {
        need(prefix + '-type', !!a.type, 'Hình thức bắt buộc không để trống!');
        if (a.type === 'PERCENT') need(prefix + '-percent', a.percent !== '' && a.percent != null, 'Mức chiết khấu (%) bắt buộc không để trống!');
        if (a.type === 'FIXED') need(prefix + '-amt', a.amount !== '' && a.amount != null, 'Số tiền giảm trên đơn bắt buộc không để trống!');
        if (a.type === 'GIFT_SAME' || a.type === 'GIFT_LIST' || a.type === 'FLAT') {
          need(prefix + '-qty', a.qty !== '' && a.qty != null, 'Số lượng bắt buộc không để trống!');
        }
        if (a.type === 'GIFT_LIST' || a.type === 'FLAT') need(prefix + '-sp', (a.products || []).length > 0, 'Sản phẩm bắt buộc không để trống!');
        if (a.type === 'FLAT') need(prefix + '-flat', a.flatPrice !== '' && a.flatPrice != null, 'Đồng giá bắt buộc không để trống!');
      };
      if (d.calcMethod === 'SIDE_STEP') {
        need('promo-buy', (d.buyProducts || []).length > 0, 'Sản phẩm mua bắt buộc không để trống!');
        need('promo-pkg', (d.packages || []).length > 0, 'Gói khuyến mãi bắt buộc không để trống!');
        (d.packages || []).forEach((pkg, pi) => {
          (pkg.conditions || []).forEach((c, i) => checkCond(c, `promo-p${pi}-c-${i}`));
          (pkg.actions || []).forEach((a, i) => checkAct(a, `promo-p${pi}-a-${i}`));
        });
      } else {
        (d.conditions || []).forEach((c, i) => checkCond(c, `promo-c-${i}`));
        (d.actions || []).forEach((a, i) => checkAct(a, `promo-a-${i}`));
      }
      (d.targets || []).forEach((t, i) => {
        need(`promo-t-${i}-type`, !!t.type, 'Đối tượng bắt buộc không để trống!');
        if (t.type) need(`promo-t-${i}-codes`, (t.codes || []).length > 0, 'Đối tượng bắt buộc không để trống!');
      });
      d.errors = errors;
      return errors;
    },

    renderInfoTab(d, readonly) {
      const dis = readonly;
      const kindRadios = this.radioGroup('promo-kind', 'Loại khuyến mãi', d.kind, [
        { value: 'ON_TOP', label: 'Chương trình on top' },
        { value: 'NORMAL', label: 'Chương trình bình thường' }
      ], true);
      const salesRadios = this.radioGroup('promo-sales', 'Loại đơn hàng', d.salesType, [
        { value: 'SELL_IN', label: 'Sell in' },
        { value: 'SELL_OUT', label: 'Sell out' }
      ], true);
      const s1 = `<div class="promo-section"><div class="promo-section__head"><span class="promo-section__num">1</span> Thông tin chương trình</div>
        <div class="promo-grid-2">
          <div>
            ${DMS.render('Input', { id: 'promo-code', label: 'Mã chương trình khuyến mãi', requiredMark: true, placeholder: 'Nhập vào mã chương trình khuyến mãi.', value: d.code, disabled: dis || (!!d.id && d.status !== 'INIT') })}
            ${this.field('promo-code')}
            ${DMS.render('Input', { id: 'promo-name', label: 'Tên chương trình khuyến mãi', requiredMark: true, placeholder: 'Nhập vào tên chương trình khuyến mãi.', value: d.name, disabled: dis })}
            ${this.field('promo-name')}
            <div class="dms-form-item">
              <label class="dms-form-item__label is-required">Thể lệ chương trình</label>
              <div class="promo-hint">Đây là nội dung chi tiết khi chọn vào chương trình khuyến mãi (điều kiện áp dụng, hướng dẫn sử dụng, lưu ý v.v..)</div>
              <div class="promo-rte-toolbar">
                <button type="button" data-rte="bold"><b>B</b></button>
                <button type="button" data-rte="italic"><i>I</i></button>
                <button type="button" data-rte="underline"><u>U</u></button>
              </div>
              <div class="promo-rte" id="promo-terms" contenteditable="${dis ? 'false' : 'true'}">${DMS.escape(d.terms || '')}</div>
              ${this.field('promo-terms')}
            </div>
          </div>
          <div>
            <div class="dms-form-item"><label class="dms-form-item__label is-required">Khoảng thời gian áp dụng</label>
              <div class="dms-flex dms-gap-sm">
                ${DMS.render('Input', { id: 'promo-start', placeholder: 'Chọn ngày bắt đầu.', value: d.startAt, disabled: dis })}
                ${DMS.render('Input', { id: 'promo-end', placeholder: 'Chọn ngày kết thúc.', value: d.endAt, disabled: dis })}
              </div>${this.field('promo-start')}
            </div>
            ${kindRadios}
            ${salesRadios}
            ${DMS.render('Select', { id: 'promo-wh', label: 'Kho tặng', requiredMark: true, value: d.warehouse, options: this.catalog('warehouses').map(w => ({ value: w.code, label: w.name })), disabled: dis, searchable: false })}
            ${DMS.render('Select', { id: 'promo-calc', label: 'Điều kiện tính CTKM', requiredMark: true, value: d.calcMethod, options: [{ value: 'NORMAL', label: 'Không bậc thang' }, { value: 'SIDE_STEP', label: 'Bậc thang' }], disabled: dis, searchable: false })}
            ${DMS.render('Switch', { id: 'promo-lot', label: 'Khuyến mãi Lô-Date', checked: !!d.lotDate, disabled: dis })}
            ${DMS.render('Input', { id: 'promo-priority', label: 'Mức độ ưu tiên', placeholder: 'nhập dữ liệu', value: d.priority || '', disabled: dis })}
          </div>
        </div>
      </div>`;

      let s2 = '';
      let s3 = '';
      if (d.calcMethod === 'SIDE_STEP') {
        s2 = `<div class="promo-section"><div class="promo-section__head"><span class="promo-section__num">2</span> Điều kiện khuyến mãi</div>
          <div class="dms-form-item"><label class="dms-form-item__label">Sản phẩm mua</label>${this.picker('promo-buy', d.buyProducts, 'products', dis)}${this.field('promo-buy')}</div>
        </div>`;
        const pkgs = (d.packages || []).map((pkg, pi) => `
          <div class="promo-card">
            <div class="promo-card__head">Gói khuyến mãi ${pi + 1}
              ${dis ? '' : DMS.render('Button', { text: 'Xóa', type: 'danger', size: 'sm', dataAction: 'promo-del-pkg-' + pi })}
            </div>
            <div class="promo-hint">Điều kiện</div>
            ${(pkg.conditions || []).map((c, i) => `
              <div class="promo-card"><div class="promo-card__head">Điều kiện ${i + 1}
                ${dis ? '' : DMS.render('Button', { text: 'Xóa', type: 'danger', size: 'sm', dataAction: `promo-del-pc-${pi}-${i}` })}
              </div>${this.renderConditionFields(c, `promo-p${pi}-c-${i}`, dis)}</div>`).join('')}
            ${dis ? '' : DMS.render('Button', { text: 'Thêm điều kiện', type: 'default', size: 'sm', dataAction: 'promo-add-pc-' + pi })}
            <div class="promo-hint" style="margin-top:12px">Hình thức</div>
            ${(pkg.actions || []).map((a, i) => `
              <div class="promo-card"><div class="promo-card__head">Hình thức ${i + 1}
                ${dis ? '' : DMS.render('Button', { text: 'Xóa', type: 'danger', size: 'sm', dataAction: `promo-del-pa-${pi}-${i}` })}
              </div>${this.renderActionFields(a, `promo-p${pi}-a-${i}`, d.calcMethod, dis)}</div>`).join('')}
            ${dis ? '' : DMS.render('Button', { text: 'Thêm hình thức', type: 'default', size: 'sm', dataAction: 'promo-add-pa-' + pi })}
          </div>`).join('');
        s3 = `<div class="promo-section"><div class="promo-section__head"><span class="promo-section__num">3</span> Gói khuyến mãi
          ${dis ? '' : DMS.render('Button', { text: 'Thêm mới', type: 'default', dataAction: 'promo-add-pkg' })}
        </div>
          <div class="promo-hint">Gói khuyến mãi cấu hình chương trình khuyến mãi</div>
          ${this.field('promo-pkg')}
          ${pkgs}
        </div>`;
      } else {
        const conds = (d.conditions || []).map((c, i) => `
          <div class="promo-card"><div class="promo-card__head">Điều kiện ${i + 1}
            ${dis ? '' : DMS.render('Button', { text: 'Xóa', type: 'danger', size: 'sm', dataAction: 'promo-del-c-' + i })}
          </div>${this.renderConditionFields(c, 'promo-c-' + i, dis)}</div>`).join('');
        s2 = `<div class="promo-section"><div class="promo-section__head"><span class="promo-section__num">2</span> Điều kiện khuyến mãi
          <span class="promo-and">${this.logicSelect('promo-logic-c', d.logicCondition)}</span>
          ${dis ? '' : DMS.render('Button', { text: 'Thêm điều kiện', type: 'default', dataAction: 'promo-add-c' })}
          ${dis ? '' : DMS.render('Button', { text: 'Thêm nhóm', type: 'default', dataAction: 'promo-add-c-group' })}
        </div>
          <div class="promo-hint">Điều kiện khuyến mãi cấu hình chương trình khuyến mãi</div>
          ${conds}
        </div>`;
        const acts = (d.actions || []).map((a, i) => `
          <div class="promo-card"><div class="promo-card__head">Hình thức ${i + 1}
            ${dis ? '' : DMS.render('Button', { text: 'Xóa', type: 'danger', size: 'sm', dataAction: 'promo-del-a-' + i })}
          </div>${this.renderActionFields(a, 'promo-a-' + i, d.calcMethod, dis)}</div>`).join('');
        s3 = `<div class="promo-section"><div class="promo-section__head"><span class="promo-section__num">3</span> Hình thức khuyến mãi
          <span class="promo-and">${this.logicSelect('promo-logic-a', d.logicAction)}</span>
          ${dis ? '' : DMS.render('Button', { text: 'Thêm hình thức', type: 'default', dataAction: 'promo-add-a' })}
        </div>
          <div class="promo-hint">Hình thức khuyến mãi cấu hình chương trình khuyến mãi</div>
          ${acts}
        </div>`;
      }

      const tgs = (d.targets || []).map((t, i) => `
        <div class="promo-card"><div class="promo-card__head">Đối tượng ${i + 1}
          ${dis ? '' : DMS.render('Button', { text: 'Xóa', type: 'danger', size: 'sm', dataAction: 'promo-del-t-' + i })}
        </div>${this.renderTargetFields(t, 'promo-t-' + i, dis)}</div>`).join('');
      const s4 = `<div class="promo-section"><div class="promo-section__head"><span class="promo-section__num">4</span> Đối tượng áp dụng
        <span class="promo-and">${this.logicSelect('promo-logic-t', d.logicTarget)}</span>
        ${dis ? '' : DMS.render('Button', { text: 'Thêm đối tượng', type: 'default', dataAction: 'promo-add-t' })}
      </div>
        <div class="promo-hint">Đối tượng áp dụng cấu hình chương trình khuyến mãi</div>
        <div class="promo-hint">Để trống mục này để áp dụng cho tất cả đối tượng</div>
        ${tgs}
      </div>`;
      return s1 + s2 + s3 + s4;
    },

    renderBudgetTab(d, readonly) {
      const hasPercent = (d.actions || []).some(a => a.type === 'PERCENT') ||
        (d.packages || []).some(p => (p.actions || []).some(a => a.type === 'PERCENT'));
      const slotDisabled = hasPercent;
      return `<div class="promo-section">
        <div class="promo-section__head">Cấu hình Ngân sách</div>
        ${this.radioGroup('promo-budget-type', 'Loại ngân sách', d.budgetType, [
          { value: 'AMOUNT', label: 'Tiền' },
          { value: 'SLOT', label: 'Suất', disabled: slotDisabled },
          { value: 'UNLIMITED', label: 'Không giới hạn' }
        ], true)}
        ${d.budgetType === 'UNLIMITED' ? '' : `
          <label class="dms-flex dms-gap-sm dms-items-center"><input type="checkbox" id="promo-bg-program" ${d.budget.program ? 'checked' : ''} ${readonly ? 'disabled' : ''}/> Ngân sách Chương trình khuyến mãi</label>
          ${d.budget.program ? DMS.render('Input', { id: 'promo-bg-amt', label: 'Ngân sách', value: d.budget.programAmount || '', disabled: readonly }) : ''}
          <label class="dms-flex dms-gap-sm dms-items-center"><input type="checkbox" id="promo-bg-area" ${d.budget.area ? 'checked' : ''} ${readonly ? 'disabled' : ''}/> Ngân sách Khu vực</label>
          <label class="dms-flex dms-gap-sm dms-items-center"><input type="checkbox" id="promo-bg-npp" ${d.budget.distributor ? 'checked' : ''} ${readonly ? 'disabled' : ''}/> Ngân sách Nhà phân phối</label>
          <label class="dms-flex dms-gap-sm dms-items-center"><input type="checkbox" id="promo-bg-store" ${d.budget.perStore ? 'checked' : ''} ${readonly ? 'disabled' : ''}/> Hạn mức Mỗi điểm bán/CTKM</label>
        `}
      </div>`;
    },

    renderForm(d, mode) {
      const readonly = mode === 'view';
      const title = mode === 'create' || mode === 'copy' ? 'Thêm mới chương trình khuyến mãi'
        : mode === 'edit' ? 'Cập nhật chương trình khuyến mãi' : 'Thêm mới chương trình khuyến mãi';
      const tab = d.tab === 'budget' ? 1 : 0;
      const tabs = DMS.render('Tabs', {
        active: tab,
        tabs: [
          { label: 'Thông tin chương trình', content: this.renderInfoTab(d, readonly) },
          { label: 'Ngân sách', content: this.renderBudgetTab(d, readonly) }
        ]
      });
      return DMS.render('Modal', {
        id: 'promo-form-modal',
        title,
        size: 'xxl',
        body: `<div class="promo-modal-body">${tabs}</div>`,
        footer: DMS.render('Button', { text: 'Lưu', type: 'primary', dataAction: 'promo-save' })
      });
    },

    condLabel(type) {
      return (COND_TYPES.find(x => x.value === type) || {}).label || type || '';
    },
    actLabel(type) {
      return (ACT_TYPES_ALL.find(x => x.value === type) || {}).label || type || '';
    },

    renderDetail(item) {
      const st = this.statusOf(item.status);
      const kd = this.kindOf(item.kind);
      const condHtml = (item.calcMethod === 'SIDE_STEP')
        ? `<div>Sản phẩm mua: ${(item.buyProducts || []).map(c => this.nameOf('products', c)).join(', ') || '—'}</div>
           ${(item.packages || []).map((p, i) => `<div class="promo-card"><strong>Gói ${i + 1}</strong>
             ${(p.conditions || []).map(c => `<div>${this.condLabel(c.type)}</div>`).join('')}
             ${(p.actions || []).map(a => `<div>${this.actLabel(a.type)}</div>`).join('')}
           </div>`).join('')}`
        : `<div>Phương thức ${(item.logicCondition === 'OR' ? 'HOẶC' : 'VÀ')}</div>
           ${(item.conditions || []).map((c, i) => `<div class="promo-card"><strong>Điều kiện ${i + 1}</strong>
             <div>${this.condLabel(c.type)}</div>
             ${c.type === 'AMT_ORDER' || c.type === 'AMT_GROUP' ? `<div>Phương thức Lớn hơn hoặc Bằng</div><div>Số tiền ${DMS.formatNumber(c.amount)} ₫</div>` : ''}
             ${(c.products || []).length ? `<div>${c.products.map(x => this.nameOf('products', x)).join(', ')}</div>` : ''}
           </div>`).join('') || '<div class="promo-hint">Chưa có điều kiện</div>'}
           <h4>Hình thức khuyến mãi</h4>
           ${(item.actions || []).map((a, i) => `<div class="promo-card"><strong>Hình thức ${i + 1}</strong><div>${this.actLabel(a.type)}</div></div>`).join('')}`;
      const info = `<div class="promo-section"><div class="promo-section__head"><span class="promo-section__num">1</span> Thông tin chương trình</div>
        <dl class="promo-dl">
          <dt>Tên chương trình khuyến mãi</dt><dd>${DMS.escape(item.name)} <button class="promo-copy" data-copy="${DMS.escape(item.name)}">⧉</button></dd>
          <dt>Khoảng thời gian áp dụng</dt><dd>${DMS.escape(item.startAt)} → ${DMS.escape(item.endAt)}</dd>
          <dt>Loại khuyến mãi</dt><dd><span class="dms-tag ${kd.cls}">${kd.text}</span></dd>
          <dt>Kho tặng</dt><dd>${this.nameOf('warehouses', item.warehouse)}</dd>
          <dt>Loại đơn hàng</dt><dd>${item.salesType === 'SELL_IN' ? 'Sell in' : 'Sell out'}</dd>
          <dt>Khuyến mãi Lô-Date</dt><dd>${item.lotDate ? 'Có thiết lập' : 'Không thiết lập'}</dd>
          <dt>Điều kiện tính CTKM</dt><dd>${item.calcMethod === 'SIDE_STEP' ? 'Bậc thang' : 'Không bậc thang'}</dd>
          <dt>Thể lệ chương trình</dt><dd>${DMS.escape(item.terms || '')}</dd>
        </dl></div>
        <div class="promo-section"><div class="promo-section__head"><span class="promo-section__num">2</span> Điều kiện khuyến mãi</div>${condHtml}</div>
        <div class="promo-section"><div class="promo-section__head"><span class="promo-section__num">4</span> Đối tượng áp dụng</div>
          ${(item.targets || []).length ? item.targets.map(t => `<div>${(TARGET_TYPES.find(x => x.value === t.type) || {}).label}: ${(t.codes || []).join(', ')}</div>`).join('') : '<div class="promo-hint">Để trống mục này để áp dụng cho tất cả đối tượng</div>'}
        </div>`;
      const budget = `<div class="promo-section"><div class="promo-section__head">Cấu hình Ngân sách</div>
        <div>Loại ngân sách: ${item.budgetType === 'AMOUNT' ? 'Tiền' : item.budgetType === 'SLOT' ? 'Suất' : 'Không giới hạn'}</div></div>`;
      const hist = (item.statusHistory || []).length
        ? `<div class="promo-timeline">${item.statusHistory.map(h => `<div class="promo-timeline__item"><strong>${DMS.escape(h.at)}</strong>${this.statusOf(h.status).text}<div>Người thực hiện: ${DMS.escape(h.by)}</div></div>`).join('')}</div>`
        : DMS.render('EmptyState', { title: 'Chưa có lịch sử trạng thái' });
      const ver = (item.versions || []).length
        ? item.versions.map(v => `<div>${DMS.escape(v.at)} — ${DMS.escape(v.by)} — ${DMS.escape(v.note || '')}</div>`).join('')
        : '<div>Chương trình không có lịch sử phiên bản</div>';
      const tabs = DMS.render('Tabs', {
        active: 0,
        tabs: [
          { label: 'Thông tin chi tiết', content: info },
          { label: 'Ngân sách', content: budget },
          { label: 'Lịch sử trạng thái', content: hist },
          { label: 'Lịch sử phiên bản', content: ver }
        ]
      });
      return `<div class="dms-drawer-overlay" id="promo-detail-drawer">
        <div class="dms-drawer" role="dialog">
          <div class="dms-drawer__header">
            <div>
              <h3 class="dms-modal__title">Xem chi tiết chương trình khuyến mãi #${DMS.escape(item.code)}</h3>
              <div>Trạng thái: ${DMS.render('StatusTag', { status: item.status, text: st.text })}</div>
            </div>
            <button class="dms-modal__close" data-action="promo-close-detail">×</button>
          </div>
          <div class="dms-drawer__body">${tabs}</div>
        </div>
      </div>`;
    },

    newCondition() { return emptyCondition(); },
    newAction() { return emptyAction(); },
    newTarget() { return emptyTarget(); },
    newPackage() { return emptyPackage(); },

    persist(d) {
      const store = window.__promoStore;
      const now = nowLabel();
      if (!d.id) {
        d.id = uid('p');
        d.status = 'INIT';
        d.createdAt = now;
        d.createdBy = 'Thảo BA';
        d.statusHistory = [{ at: now, status: 'INIT', by: 'Thảo BA' }];
        d.versions = [];
        store.items.unshift(d);
      } else {
        const idx = store.items.findIndex(x => x.id === d.id);
        d.updatedAt = now;
        if (idx >= 0) store.items[idx] = d;
      }
      d.updatedAt = now;
      return d;
    }
  };

  window.PromoShared = PromoShared;
})(window.DMS);
