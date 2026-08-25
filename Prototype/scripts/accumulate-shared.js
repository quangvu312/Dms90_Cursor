/**
 * Quản Lý Tích Lũy — shared helpers (Portal HO)
 * Business rule: Docs/Confluence 191/200/206/216/228. UI: DEV /accumulate/*
 */
(function (global) {
  'use strict';

  const PROGRAM_STATUSES = [
    { key: 'INIT', label: 'Khởi tạo', color: '#faad14', tag: 'orange' },
    { key: 'UPCOMING', label: 'Sắp diễn ra', color: '#15CD74', tag: 'green' },
    { key: 'RUNNING', label: 'Đang diễn ra', color: '#0958D9', tag: 'blue' },
    { key: 'ENDED', label: 'Kết thúc', color: '#A5A5A5', tag: 'default' },
    { key: 'REJECTED', label: 'Từ chối duyệt', color: '#CF1322', tag: 'red' },
    { key: 'EXPIRED', label: 'Hết hạn duyệt', color: '#D46B08', tag: 'orange' },
    { key: 'STOPPED', label: 'Ngưng hoạt động', color: '#FF4D4F', tag: 'red' }
  ];
  const REG_STATUSES = [
    { key: 'PENDING', label: 'Chờ duyệt', color: '#faad14', tag: 'orange' },
    { key: 'APPROVED', label: 'Đã duyệt', color: '#0958D9', tag: 'blue' },
    { key: 'REJECTED', label: 'Từ chối duyệt', color: '#CF1322', tag: 'red' },
    { key: 'EXPIRED', label: 'Hết hạn duyệt', color: '#D46B08', tag: 'orange' },
    { key: 'STOPPED', label: 'Ngưng hoạt động', color: '#FF4D4F', tag: 'red' }
  ];
  const PROGRESS_STATUSES = [
    { key: 'NOT_STARTED', label: 'Chưa diễn ra', color: '#faad14', tag: 'orange' },
    { key: 'RUNNING', label: 'Đang diễn ra', color: '#0958D9', tag: 'blue' },
    { key: 'ENDED', label: 'Đã kết thúc', color: '#A5A5A5', tag: 'default' },
    { key: 'STOPPED', label: 'Ngưng hoạt động', color: '#FF4D4F', tag: 'red' }
  ];
  const STAGE_RESULTS = [
    { key: 'PENDING', label: 'Chờ duyệt', tag: 'orange' },
    { key: 'PASS', label: 'Đạt', tag: 'green' },
    { key: 'FAIL', label: 'Không đạt', tag: 'red' }
  ];
  const REWARD_RESULTS = [
    { key: 'WAITING', label: 'Chờ trả thưởng', color: '#faad14', tag: 'orange' },
    { key: 'RECEIVED', label: 'Đã trả thưởng', color: '#389E0D', tag: 'green' },
    { key: 'REJECTED', label: 'Từ chối trả thưởng', color: '#CF1322', tag: 'red' },
    { key: 'EXPIRED', label: 'Hết hạn trả thưởng', color: '#D46B08', tag: 'orange' }
  ];
  const TYPES = [
    { value: 'MERCHANT', label: 'Merchant' },
    { value: 'SALEMAN', label: 'Saleman' }
  ];
  const CONTRACTS = [
    { value: 'E_CONTRACT', label: 'Hợp đồng điện tử' },
    { value: 'PAPER', label: 'Hợp đồng giấy' },
    { value: 'NONE', label: 'Không yêu cầu hợp đồng' }
  ];
  const REGISTER_MODES = [
    { value: 'WEB', label: 'Đăng ký trên Web' },
    { value: 'APP', label: 'Đăng ký trên App' },
    { value: 'WEB_APP', label: 'Đăng ký trên Web và App' }
  ];
  const REWARD_MODES = [
    { value: 'STAGE', label: 'Theo giai đoạn' },
    { value: 'PROGRAM', label: 'Theo chương trình' }
  ];
  const YES_NO = [
    { value: 'true', label: 'Có' },
    { value: 'false', label: 'Không' }
  ];
  const TARGET_TYPES = [
    { value: 'AREA', label: 'Vùng bán hàng' },
    { value: 'DISTRIBUTOR', label: 'Nhà phân phối' },
    { value: 'STORE', label: 'Điểm bán' },
    { value: 'STORE_TYPE', label: 'Loại điểm bán' },
    { value: 'STORE_LOCATION', label: 'Vị trí điểm bán' },
    { value: 'STORE_RANK', label: 'Hạng điểm bán' },
    { value: 'CHANNEL', label: 'Kênh bán hàng' },
    { value: 'SOURCE', label: 'Nguồn bán hàng' }
  ];
  const REWARD_TYPES = [
    { value: 'CASH', label: 'Tiền thưởng' },
    { value: 'GIFT', label: 'Quà tặng' },
    { value: 'DISCOUNT', label: 'Chiết khấu %' }
  ];
  const APPLY_MODES = [
    { value: 'HIGHEST', label: 'Trả thưởng theo mốc cao nhất đạt được' },
    { value: 'REGISTERED', label: 'Trả thưởng theo mốc đăng ký của điểm bán' }
  ];
  const REWARD_KINDS = [
    { value: 'MILESTONE', label: 'Thưởng cho mốc tích lũy' },
    { value: 'PER_PRODUCT', label: 'Thưởng cho mỗi sản phẩm tích lũy' }
  ];
  const PURCHASE_SOURCES = [
    { value: 'WEB', label: 'Web' },
    { value: 'APP', label: 'App' },
    { value: 'MERCHANT', label: 'Merchant' }
  ];
  const CONDITION_TYPES = [
    { value: 'QTY_GROUP', label: 'Số lượng nhóm sản phẩm' },
    { value: 'REV_GROUP', label: 'Doanh số nhóm sản phẩm' },
    { value: 'PCT_GROUP', label: '% Doanh số nhóm sản phẩm' },
    { value: 'REV_PRODUCT', label: 'Doanh số sản phẩm' }
  ];
  const JOIN_OPTS = [
    { value: 'AND', label: 'Và' },
    { value: 'OR', label: 'Hoặc' }
  ];
  const METHOD_OPTS = [
    { value: 'INCLUDE', label: 'Bao gồm' },
    { value: 'EXCLUDE', label: 'Loại trừ' }
  ];
  const CHART_PROGRAM_FILTER = ['RUNNING', 'ENDED', 'STOPPED'];
  const CHART_META = [
    { id: 'program', number: 1, title: 'Chương trình tích lũy', icon: '🖥', avatar: '#2ccca5', caption: 'Khởi tạo và quản lý các chương trình tích lũy.' },
    { id: 'participant', number: 2, title: 'Danh sách tham gia', icon: '💾', avatar: '#fb903e', caption: 'Quản lý điểm bán đã đăng ký tham gia chương trình tích lũy với mỗi mốc tích lũy nhất định.' },
    { id: 'process', number: 3, title: 'Danh sách tiến trình', icon: '📄', avatar: '#0087fe', caption: 'Quản lý tiến trình tích lũy theo các giai đoạn tích lũy.' },
    { id: 'reward', number: 4, title: 'Danh sách trả thưởng', icon: '🎁', avatar: '#f70d1a', caption: 'Điểm bán có kết quả tích lũy Đạt và đã được lên danh sách trả thưởng tích lũy' }
  ];

  function pad(n) { return String(n).padStart(2, '0'); }
  function parseDmy(str) {
    if (!str) return null;
    const iso = String(str).match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (iso) return new Date(Number(iso[1]), Number(iso[2]) - 1, Number(iso[3]));
    const dmy = String(str).match(/^(\d{2})[\/\-](\d{2})[\/\-](\d{4})/);
    if (dmy) return new Date(Number(dmy[3]), Number(dmy[2]) - 1, Number(dmy[1]));
    return null;
  }
  function toDmy(d) {
    if (!d || isNaN(d.getTime())) return '';
    return `${pad(d.getDate())}-${pad(d.getMonth() + 1)}-${d.getFullYear()}`;
  }
  function startOfDay(d) { return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
  function nowLabel() {
    const d = new Date();
    return `${toDmy(d)} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  }
  function presetRange(preset, today) {
    const t = startOfDay(today || new Date());
    if (preset === 'today') return { from: t, to: t };
    if (preset === 'weekly') {
      const dow = (t.getDay() + 6) % 7;
      const from = new Date(t.getFullYear(), t.getMonth(), t.getDate() - dow);
      const to = new Date(from.getFullYear(), from.getMonth(), from.getDate() + 6);
      return { from, to };
    }
    return { from: new Date(t.getFullYear(), t.getMonth(), 1), to: new Date(t.getFullYear(), t.getMonth() + 1, 0) };
  }
  function lastNDays(n, today) {
    const t = startOfDay(today || new Date());
    const from = new Date(t.getFullYear(), t.getMonth(), t.getDate() - n);
    return { from, to: t };
  }
  function currentMonth(today) {
    const t = startOfDay(today || new Date());
    return { from: toDmy(new Date(t.getFullYear(), t.getMonth(), 1)), to: toDmy(new Date(t.getFullYear(), t.getMonth() + 1, 0)) };
  }
  function overlaps(aStart, aEnd, bStart, bEnd) {
    if (!aStart || !aEnd || !bStart || !bEnd) return false;
    return aStart.getTime() <= bEnd.getTime() && aEnd.getTime() >= bStart.getTime();
  }
  function yearAllowed(d, today) {
    if (!d) return true;
    const y = (today || new Date()).getFullYear();
    return d.getFullYear() >= y - 2 && d.getFullYear() <= y;
  }
  function inRange(dateStr, from, to) {
    const d = parseDmy(dateStr);
    if (!d || !from || !to) return true;
    return d.getTime() >= from.getTime() && d.getTime() <= to.getTime();
  }
  function catalogLabel(list, key) {
    return (list.find((x) => x.key === key || x.value === key) || {}).label || key || '';
  }
  function statusMeta(list, key) {
    return list.find((x) => x.key === key) || { label: key || '', tag: 'default' };
  }
  function tagOf(list, key) {
    const s = statusMeta(list, key);
    return DMS.render('StatusTag', { status: key, text: s.label });
  }
  function uid(prefix) { return prefix + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }
  function formatMoney(n) {
    const x = Number(n);
    if (!Number.isFinite(x)) return '';
    return x.toLocaleString('en-US');
  }
  function parseDt(str) {
    const d = parseDmy(str);
    if (!d) return null;
    const t = String(str).match(/(\d{2}):(\d{2}):(\d{2})/);
    if (t) d.setHours(Number(t[1]), Number(t[2]), Number(t[3]));
    return d;
  }

  async function loadStore() {
    if (window.__accumulateStore) return window.__accumulateStore;
    const res = await fetch('data/accumulate.json?v=20260814-accumulate');
    if (!res.ok) throw new Error('Không tải được dữ liệu tích lũy');
    window.__accumulateStore = await res.json();
    return window.__accumulateStore;
  }
  function persist() { return window.__accumulateStore; }
  function countBy(list, key, catalog) {
    const map = {};
    list.forEach((item) => { map[item[key]] = (map[item[key]] || 0) + 1; });
    return catalog.map((s) => ({ key: s.key, label: s.label, color: s.color, value: map[s.key] || 0 }));
  }
  function filteredPrograms(store, range) {
    return (store.programs || []).filter((p) => overlaps(parseDmy(p.startDate), parseDmy(p.endDate), range.from, range.to));
  }
  function relatedProgramIds(programs) {
    return new Set(programs.filter((p) => CHART_PROGRAM_FILTER.includes(p.status)).map((p) => p.id));
  }
  function buildOverviewCharts(store, range) {
    const programs = filteredPrograms(store, range);
    const relatedIds = relatedProgramIds(programs);
    return [
      { id: 'program', items: countBy(programs, 'status', PROGRAM_STATUSES) },
      { id: 'participant', items: countBy((store.registrations || []).filter((r) => relatedIds.has(r.programId)), 'status', REG_STATUSES) },
      { id: 'process', items: countBy((store.progress || []).filter((r) => relatedIds.has(r.programId)), 'status', PROGRESS_STATUSES) },
      { id: 'reward', items: countBy((store.rewards || []).filter((r) => relatedIds.has(r.programId)), 'result', REWARD_RESULTS) }
    ];
  }
  function findProgram(id) { return (window.__accumulateStore?.programs || []).find((p) => p.id === id); }
  function findReg(id) { return (window.__accumulateStore?.registrations || []).find((r) => r.id === id); }
  function findProgress(id) { return (window.__accumulateStore?.progress || []).find((r) => r.id === id); }
  function findReward(id) { return (window.__accumulateStore?.rewards || []).find((r) => r.id === id); }

  function todayOkForApprove(p, today) {
    const end = parseDmy(p.endDate);
    const t = startOfDay(today || new Date());
    return !!(end && t.getTime() <= end.getTime());
  }
  function programActions(p, today) {
    const t = startOfDay(today || new Date());
    const canApprove = p.status === 'INIT' && todayOkForApprove(p, t);
    const canStop = (p.status === 'UPCOMING' || p.status === 'RUNNING') && todayOkForApprove(p, t);
    const canEdit = p.status === 'INIT' || p.status === 'UPCOMING' || p.status === 'RUNNING';
    return { view: true, edit: canEdit, copy: true, approve: canApprove, reject: canApprove, stop: canStop };
  }
  function approveProgramStatus(p, today) {
    const t = startOfDay(today || new Date());
    const start = parseDmy(p.startDate);
    if (start && t.getTime() < start.getTime()) return 'UPCOMING';
    return 'RUNNING';
  }

  function emptyCondition() {
    return { type: '', join: 'AND', groups: [{ name: '', from: 1, to: 2, limited: true }], method: 'INCLUDE', products: [], target: '', from: 1, to: 2, limited: true };
  }
  function emptyMilestone(n) {
    return { name: 'Mốc tích lũy ' + n, conditions: [], rewardType: 'CASH', cashAmount: '100000', discountPct: '', maxReward: '', gifts: [], giftJoin: 'AND' };
  }
  function emptyDraft() {
    return {
      id: '', step: 1, imageName: '', code: '', name: '', content: '', type: '', contractRequired: '',
      contractTemplate: '', priority: 1, registerMode: '', autoApprove: false, startDate: '', endDate: '',
      stageCount: 1, rewardMode: '', registerStart: '', registerEnd: '', targets: [], stages: [],
      maxSlots: '1', applyMode: '', purchaseSources: [], rewardKind: '', excludePromo: false, promos: [],
      milestones: [], _stagesGenerated: false
    };
  }
  function getDraft() {
    if (!window.__accumulateDraft) window.__accumulateDraft = emptyDraft();
    return window.__accumulateDraft;
  }
  function resetDraft() { window.__accumulateDraft = emptyDraft(); return window.__accumulateDraft; }
  function loadDraft(item, mode) {
    const d = emptyDraft();
    Object.assign(d, {
      id: mode === 'copy' ? '' : item.id,
      code: mode === 'copy' ? (item.code || '') + '-Copy' : (item.code || ''),
      name: mode === 'copy' ? (item.name || '') + '-Copy' : (item.name || ''),
      content: (item.content || '').replace(/<[^>]+>/g, ''),
      type: item.type || '',
      contractRequired: item.contractRequired || '',
      contractTemplate: item.contractTemplate || '',
      priority: item.priority || 1,
      registerMode: item.registerMode || '',
      autoApprove: !!item.autoApprove,
      startDate: item.startDate || '',
      endDate: item.endDate || '',
      stageCount: item.stageCount || 1,
      rewardMode: item.rewardMode || '',
      registerStart: item.registerStart || '',
      registerEnd: item.registerEnd || '',
      targets: JSON.parse(JSON.stringify(item.targets || [])),
      stages: JSON.parse(JSON.stringify(item.stages || [])),
      maxSlots: item.maxSlots || '1',
      applyMode: item.applyMode || '',
      purchaseSources: JSON.parse(JSON.stringify(item.purchaseSources || [])),
      rewardKind: item.rewardKind || '',
      excludePromo: !!item.excludePromo,
      promos: JSON.parse(JSON.stringify(item.promos || [])),
      milestones: JSON.parse(JSON.stringify(item.milestones || [])),
      imageName: item.imageName || '',
      status: mode === 'copy' ? 'INIT' : item.status,
      _stagesGenerated: !!(item.stages || []).length
    });
    window.__accumulateDraft = d;
    return d;
  }
  function draftIsDirty(d) {
    return !!(d.code || d.name || d.content || d.type || d.registerMode || d.rewardMode || (d.targets || []).length || (d.milestones || []).length);
  }

  function requiredMsg(label) { return label + ' là bắt buộc!'; }
  function validateStep(d, step) {
    const errors = {};
    if (step === 1) {
      if (!String(d.code || '').trim()) errors.code = requiredMsg('Mã chương trình');
      if (!String(d.name || '').trim()) errors.name = requiredMsg('Tiêu đề');
      if (!String(d.content || '').trim()) errors.content = requiredMsg('Nội dung');
      if (!d.type) errors.type = requiredMsg('Loại chương trình');
      if (!d.contractRequired) errors.contractRequired = requiredMsg('Yêu cầu hợp đồng');
      if (!d.registerMode) errors.registerMode = requiredMsg('Hình thức đăng ký');
      if (d.type === 'MERCHANT' && d.contractRequired === 'E_CONTRACT' && !d.contractTemplate) {
        errors.contractTemplate = requiredMsg('Mẫu hợp đồng');
      }
    }
    if (step === 2) {
      (d.targets || []).forEach((tg, i) => {
        if (!tg.type) errors['target-' + i] = requiredMsg('Điều kiện');
        if ((tg.type === 'DISTRIBUTOR' || tg.type === 'STORE') && !(tg.values || []).length) {
          errors['target-' + i] = tg.type === 'DISTRIBUTOR'
            ? 'Vui lòng thêm ít nhất một Nhà Phân Phối trước khi tiếp tục.'
            : 'Vui lòng thêm ít nhất một điểm bán trước khi tiếp tục.';
        }
      });
    }
    if (step === 3) {
      if (!d.startDate || !d.endDate) errors.programDate = requiredMsg('Thời gian chương trình');
      if (!d.stageCount || Number(d.stageCount) < 1) errors.stageCount = requiredMsg('Số giai đoạn');
      if (!d.rewardMode) errors.rewardMode = requiredMsg('Hình thức trả thưởng');
      if (!d._stagesGenerated) {
        errors.stages = 'Vui lòng nhấn Tạo giai đoạn trước khi tiếp tục!';
      } else if ((d.stages || []).length !== Number(d.stageCount || 0)) {
        errors.stages = 'Số lượng giai đoạn không khớp với Số giai đoạn. Vui lòng nhấn Tạo giai đoạn trước khi tiếp tục!';
      }
    }
    if (step === 4) {
      if (!d.maxSlots || Number(d.maxSlots) < 1) errors.maxSlots = requiredMsg('Số suất tối đa');
      if (!d.applyMode) errors.applyMode = requiredMsg('Hình thức áp dụng');
      if (!(d.purchaseSources || []).length) errors.purchaseSources = requiredMsg('Nguồn mua hàng');
      if (!d.rewardKind) errors.rewardKind = requiredMsg('Loại phần thưởng');
      if (!(d.milestones || []).length) errors.milestones = 'Vui lòng thêm ít nhất một mốc tích lũy';
      (d.milestones || []).forEach((m, i) => {
        if (!String(m.name || '').trim()) errors['ms-name-' + i] = requiredMsg('Mốc tích lũy');
        if (!(m.conditions || []).length) errors['ms-cond-' + i] = requiredMsg('Điều kiện');
        (m.conditions || []).forEach((c, j) => {
          if (!c.type) errors['ms-' + i + '-ct-' + j] = requiredMsg('Điều kiện');
          if (c.type === 'REV_PRODUCT' && !(c.products || []).length) {
            errors['ms-' + i + '-ct-' + j] = 'Bắt buộc phải chọn ít nhất 1 Mã sản phẩm';
          }
          if ((c.type === 'QTY_GROUP' || c.type === 'REV_GROUP' || c.type === 'PCT_GROUP') && !(c.groups || []).filter((g) => g.name).length) {
            errors['ms-' + i + '-ct-' + j] = 'Vui lòng thêm ít nhất 1 nhóm sản phẩm';
          }
        });
        if (d.rewardKind === 'MILESTONE' && !m.rewardType) errors['ms-rt-' + i] = requiredMsg('Phần thưởng');
        if ((m.rewardType || (d.rewardKind === 'PER_PRODUCT' ? 'CASH' : '')) === 'CASH' && !m.cashAmount) {
          errors['ms-cash-' + i] = requiredMsg('Tiền thưởng');
        }
        if (m.rewardType === 'DISCOUNT' && !m.discountPct) errors['ms-disc-' + i] = requiredMsg('Chiết khấu %');
        if (m.rewardType === 'GIFT' && !(m.gifts || []).length) errors['ms-gift-' + i] = requiredMsg('Quà tặng');
      });
    }
    return errors;
  }

  function stepper(step) {
    const items = [
      { n: 1, label: 'Thông tin chung' },
      { n: 2, label: 'Đối tượng áp dụng' },
      { n: 3, label: 'Thời gian áp dụng' },
      { n: 4, label: 'Hạn mức' }
    ];
    return `<div class="dms-steps">${items.map((it) => `
      <div class="dms-steps__item ${step === it.n ? 'is-active' : ''} ${step > it.n ? 'is-done' : ''}">
        <span class="dms-steps__num">${it.n}</span>
        <span>${it.label}</span>
      </div>`).join('')}</div>`;
  }
  function errBox(id, errors) {
    const msg = errors[id];
    return `<div class="dms-form-item__error" id="err-${id}" ${msg ? '' : 'hidden'}>${DMS.escape(msg || '')}</div>`;
  }
  function fieldWrap(label, required, inner, errId, errors) {
    return `<div class="dms-form-item ${errors[errId] ? 'is-error' : ''}">
      <label class="dms-form-item__label ${required ? 'is-required' : ''}">${DMS.escape(label)}</label>
      ${inner}${errBox(errId, errors)}
    </div>`;
  }

  function genStages(d) {
    const n = Math.max(1, Number(d.stageCount) || 1);
    const start = parseDmy(d.startDate);
    const end = parseDmy(d.endDate);
    const list = [];
    for (let i = 0; i < n; i++) {
      list.push({ name: 'Giai đoạn ' + (i + 1), startDate: d.startDate || '', endDate: d.endDate || '' });
    }
    if (start && end && n > 1) {
      const span = Math.max(1, Math.round((end - start) / (n * 86400000)));
      for (let i = 0; i < n; i++) {
        const a = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i * span);
        const b = i === n - 1 ? end : new Date(start.getFullYear(), start.getMonth(), start.getDate() + (i + 1) * span - 1);
        list[i].startDate = toDmy(a);
        list[i].endDate = toDmy(b);
      }
    }
    d.stages = list;
    d._stagesGenerated = true;
    return list;
  }

  function readDraftFromDom(d) {
    d.code = document.getElementById('a-code')?.value || d.code;
    d.name = document.getElementById('a-name')?.value || d.name;
    d.content = document.getElementById('a-content')?.value || d.content;
    d.type = document.getElementById('a-type')?.value || d.type;
    d.contractRequired = document.getElementById('a-contract')?.value || d.contractRequired;
    d.contractTemplate = document.getElementById('a-template')?.value || d.contractTemplate;
    d.priority = Number(document.getElementById('a-priority')?.value || d.priority || 1);
    d.registerMode = document.getElementById('a-register-mode')?.value || d.registerMode;
    const sw = document.getElementById('a-auto');
    if (sw) d.autoApprove = sw.classList.contains('is-checked');
    d.startDate = document.getElementById('a-start')?.value || d.startDate;
    d.endDate = document.getElementById('a-end')?.value || d.endDate;
    const nextCount = Number(document.getElementById('a-stage-count')?.value || d.stageCount || 1);
    const nextMode = document.getElementById('a-reward-mode')?.value || d.rewardMode;
    if (nextCount !== Number(d.stageCount) || nextMode !== d.rewardMode) d._stagesGenerated = false;
    d.stageCount = nextCount;
    d.rewardMode = nextMode;
    d.registerStart = document.getElementById('a-reg-start')?.value || d.registerStart;
    d.registerEnd = document.getElementById('a-reg-end')?.value || d.registerEnd;
    (d.targets || []).forEach((tg, i) => {
      tg.type = document.getElementById('a-target-type-' + i)?.value || tg.type;
      const raw = document.getElementById('a-target-val-' + i)?.value || '';
      if (raw) tg.values = raw.split(',').map((s) => s.trim()).filter(Boolean);
    });
    (d.stages || []).forEach((p, i) => {
      p.name = document.getElementById('a-gd-name-' + i)?.value || p.name;
      p.startDate = document.getElementById('a-gd-from-' + i)?.value || p.startDate;
      p.endDate = document.getElementById('a-gd-to-' + i)?.value || p.endDate;
    });
    d.maxSlots = document.getElementById('a-max-slots')?.value || d.maxSlots;
    d.applyMode = document.getElementById('a-apply-mode')?.value || d.applyMode;
    d.rewardKind = document.getElementById('a-reward-kind')?.value || d.rewardKind;
    if (d.rewardKind === 'PER_PRODUCT') {
      (d.milestones || []).forEach((m) => { m.rewardType = 'CASH'; });
    }
    const srcEl = document.getElementById('a-sources');
    if (srcEl && DMS.get('MultiSelect')) d.purchaseSources = DMS.get('MultiSelect').getValues('a-sources');
    const ex = document.getElementById('a-exclude-promo');
    if (ex) d.excludePromo = !!ex.checked;
    (d.milestones || []).forEach((m, i) => {
      m.name = document.getElementById('a-ms-name-' + i)?.value || m.name;
      m.rewardType = document.getElementById('a-ms-rt-' + i)?.value || m.rewardType;
      m.cashAmount = document.getElementById('a-ms-cash-' + i)?.value || m.cashAmount;
      m.discountPct = document.getElementById('a-ms-disc-' + i)?.value || m.discountPct;
      m.maxReward = document.getElementById('a-ms-max-' + i)?.value || m.maxReward;
      m.giftJoin = document.getElementById('a-ms-gift-join-' + i)?.value || m.giftJoin;
      (m.conditions || []).forEach((c, j) => {
        const pfx = `a-ms-${i}-c-${j}`;
        c.type = document.getElementById(pfx + '-type')?.value || c.type;
        c.join = document.getElementById(pfx + '-join')?.value || c.join;
        c.method = document.getElementById(pfx + '-method')?.value || c.method;
        c.target = document.getElementById(pfx + '-target')?.value || c.target;
        c.from = document.getElementById(pfx + '-from')?.value || c.from;
        c.to = document.getElementById(pfx + '-to')?.value || c.to;
        const lim = document.getElementById(pfx + '-lim');
        if (lim) c.limited = !!lim.checked;
        const gRaw = document.getElementById(pfx + '-groups')?.value || '';
        if (gRaw !== undefined && document.getElementById(pfx + '-groups')) {
          c.groups = gRaw.split(',').map((s) => s.trim()).filter(Boolean).map((name) => ({
            name, from: c.from, to: c.to, limited: c.limited
          }));
        }
        const pRaw = document.getElementById(pfx + '-products')?.value || '';
        if (document.getElementById(pfx + '-products')) {
          c.products = pRaw.split(',').map((s) => s.trim()).filter(Boolean).map((code) => ({ code, name: code }));
        }
      });
      const gRaw = document.getElementById('a-ms-gifts-' + i)?.value || '';
      if (document.getElementById('a-ms-gifts-' + i)) {
        m.gifts = gRaw.split(',').map((s) => s.trim()).filter(Boolean).map((code) => ({ code, name: code, uom: 'Cái', qty: 1 }));
      }
    });
    return d;
  }

  function renderStep1(d, errors, readonly) {
    const lock = readonly || (d.status && d.status !== 'INIT');
    const dis = lock;
    const contractDisabled = dis || d.type === 'SALEMAN';
    return `<div class="display-form-grid">
      ${fieldWrap('Hình ảnh', false, `<div class="display-upload">${d.imageName ? DMS.escape(d.imageName) : 'Upload'}</div>`, 'image', errors)}
      ${fieldWrap('Mã chương trình', true, DMS.render('Input', { id: 'a-code', value: d.code, placeholder: 'Nhập vào mã chương trình.', disabled: dis }), 'code', errors)}
      ${fieldWrap('Tiêu đề', true, DMS.render('Input', { id: 'a-name', value: d.name, placeholder: 'Nhập vào tiêu đề.', disabled: readonly }), 'name', errors)}
      <div class="display-form-grid__full">${fieldWrap('Nội dung', true, DMS.render('Textarea', { id: 'a-content', value: d.content, rows: 5, placeholder: 'Nhập vào nội dung.', disabled: readonly }), 'content', errors)}</div>
      ${fieldWrap('Loại chương trình', true, DMS.render('Select', { id: 'a-type', value: d.type, placeholder: 'Chọn loại chương trình.', options: TYPES, disabled: dis, searchable: true }), 'type', errors)}
      ${fieldWrap('Yêu cầu hợp đồng', true, DMS.render('Select', { id: 'a-contract', value: d.contractRequired, placeholder: 'Chọn yêu cầu hợp đồng.', options: CONTRACTS, disabled: contractDisabled, searchable: true }), 'contractRequired', errors)}
      ${d.type === 'MERCHANT' && d.contractRequired === 'E_CONTRACT'
        ? fieldWrap('Mẫu hợp đồng', true, DMS.render('Input', { id: 'a-template', value: d.contractTemplate, placeholder: 'Chọn mẫu hợp đồng.', disabled: dis }), 'contractTemplate', errors)
        : ''}
      ${fieldWrap('Độ ưu tiên', false, DMS.render('Input', { id: 'a-priority', type: 'number', value: d.priority, placeholder: 'Nhập vào độ ưu tiên.', disabled: dis }), 'priority', errors)}
      ${fieldWrap('Hình thức đăng ký', true, DMS.render('Select', { id: 'a-register-mode', value: d.registerMode, placeholder: 'Chọn hình thức đăng ký.', options: REGISTER_MODES, disabled: dis, searchable: true }), 'registerMode', errors)}
      ${fieldWrap('Tự động duyệt tham gia', false, DMS.render('Switch', { id: 'a-auto', checked: !!d.autoApprove, disabled: dis }), 'auto', errors)}
    </div>`;
  }
  function renderStep2(d, errors, readonly) {
    const lock = readonly || (d.status && d.status !== 'INIT');
    const used = (d.targets || []).map((t) => t.type).filter(Boolean);
    const rows = (d.targets || []).map((tg, i) => {
      const opts = TARGET_TYPES.map((o) => Object.assign({}, o, { disabled: used.includes(o.value) && o.value !== tg.type }));
      return `<div class="display-target-row">
        ${DMS.render('Select', { id: 'a-target-type-' + i, value: tg.type, placeholder: 'Chọn điều kiện', options: opts, disabled: lock, searchable: true })}
        ${DMS.render('Input', { id: 'a-target-val-' + i, value: (tg.values || []).join(', '), placeholder: 'Giá trị (phân tách bằng dấu phẩy)', disabled: lock })}
        ${lock ? '' : DMS.render('Button', { text: 'Xóa', type: 'ghost', size: 'sm', dataAction: 'a-target-del-' + i })}
        ${errBox('target-' + i, errors)}
      </div>`;
    }).join('');
    return `<div>
      <p class="display-page__desc">Có thể thêm đối tượng hoặc bỏ qua bước này (áp dụng tất cả).</p>
      ${rows || '<p class="dms-text-secondary">Chưa có đối tượng áp dụng.</p>'}
      ${lock ? '' : DMS.render('Button', { text: 'Thêm đối tượng', type: 'default', dataAction: 'a-target-add' })}
    </div>`;
  }
  function renderStep3(d, errors, readonly) {
    const lock = readonly || (d.status && d.status !== 'INIT');
    const gd = (d.stages || []).map((p, i) => `<div class="display-ky-row">
      ${fieldWrap('Giai đoạn', true, DMS.render('Input', { id: 'a-gd-name-' + i, value: p.name, placeholder: 'Nhập vào giai đoạn ' + (i + 1), disabled: lock }), 'gd-' + i, errors)}
      <div class="display-form-grid__span2">${fieldWrap('Thời gian giai đoạn', false, `<div class="display-date-range">
        ${DMS.render('DatePicker', { id: 'a-gd-from-' + i, value: p.startDate, placeholder: 'Ngày bắt đầu', disabled: lock })}
        ${DMS.render('DatePicker', { id: 'a-gd-to-' + i, value: p.endDate, placeholder: 'Ngày kết thúc', disabled: lock })}
      </div>`, 'gd-date-' + i, errors)}</div>
    </div>`).join('');
    return `<div class="display-form-grid">
      <div class="display-form-grid__span2">${fieldWrap('Thời gian chương trình', true, `<div class="display-date-range">
        ${DMS.render('DatePicker', { id: 'a-start', value: d.startDate, placeholder: 'Ngày bắt đầu', disabled: lock })}
        ${DMS.render('DatePicker', { id: 'a-end', value: d.endDate, placeholder: 'Ngày kết thúc', disabled: lock })}
      </div>`, 'programDate', errors)}</div>
      ${fieldWrap('Số giai đoạn', true, DMS.render('Input', { id: 'a-stage-count', type: 'number', value: d.stageCount, placeholder: 'Nhập vào số giai đoạn.', disabled: lock }), 'stageCount', errors)}
      ${fieldWrap('Hình thức trả thưởng', true, DMS.render('Select', { id: 'a-reward-mode', value: d.rewardMode, placeholder: 'Chọn hình thức trả thưởng.', options: REWARD_MODES, disabled: lock, searchable: true }), 'rewardMode', errors)}
      <div class="display-form-grid__span2">${fieldWrap('Thời gian đăng ký', false, `<div class="display-date-range">
        ${DMS.render('DatePicker', { id: 'a-reg-start', value: d.registerStart, placeholder: 'Ngày bắt đầu', disabled: lock })}
        ${DMS.render('DatePicker', { id: 'a-reg-end', value: d.registerEnd, placeholder: 'Ngày kết thúc', disabled: lock })}
      </div>`, 'registerDate', errors)}</div>
    </div>
    ${errBox('stages', errors)}
    ${lock ? '' : `<div class="display-ky-toolbar">${DMS.render('Button', { text: 'Tạo giai đoạn', type: 'primary', dataAction: 'a-gen-stages' })}</div>`}
    ${gd || '<p class="dms-text-secondary">Nhấn Tạo giai đoạn để sinh danh sách giai đoạn theo Số giai đoạn.</p>'}`;
  }

  function conditionLabel(type) {
    return catalogLabel(CONDITION_TYPES, type) || 'Điều kiện';
  }
  function usedConditionTypes(m, exceptJ) {
    return (m.conditions || []).map((c, j) => (j === exceptJ ? '' : c.type)).filter(Boolean);
  }
  function renderCondition(m, i, c, j, errors, lock) {
    const pfx = `a-ms-${i}-c-${j}`;
    const used = usedConditionTypes(m, j);
    const opts = CONDITION_TYPES.map((o) => Object.assign({}, o, { disabled: used.includes(o.value) }));
    const isGroup = c.type === 'QTY_GROUP' || c.type === 'REV_GROUP' || c.type === 'PCT_GROUP';
    const isPct = c.type === 'PCT_GROUP';
    const isProd = c.type === 'REV_PRODUCT';
    const groupVal = (c.groups || []).map((g) => g.name).join(', ');
    const prodVal = (c.products || []).map((p) => p.code || p.name).join(', ');
    return `<div class="acc-condition">
      <div class="acc-condition__head">
        <strong>Điều kiện ${j + 1}</strong>
        ${j > 0 ? DMS.render('Select', { id: pfx + '-join', value: c.join || 'AND', options: JOIN_OPTS, disabled: lock }) : `<input type="hidden" id="${pfx}-join" value="AND" />`}
        ${lock ? '' : DMS.render('Button', { text: 'Xóa', type: 'ghost', size: 'sm', dataAction: 'a-cond-del-' + i + '-' + j })}
      </div>
      ${fieldWrap('Điều kiện', true, DMS.render('Select', { id: pfx + '-type', value: c.type, placeholder: 'Chọn điều kiện', options: opts, disabled: lock, searchable: true }), 'ms-' + i + '-ct-' + j, errors)}
      ${isProd ? fieldWrap('Phương thức', true, DMS.render('Select', { id: pfx + '-method', value: c.method || 'INCLUDE', options: METHOD_OPTS, disabled: lock }), 'ms-' + i + '-md-' + j, errors) : ''}
      ${isPct ? fieldWrap('Chỉ tiêu', true, DMS.render('Input', { id: pfx + '-target', value: c.target || '', placeholder: 'Nhập vào chỉ tiêu', disabled: lock }), 'ms-' + i + '-tg-' + j, errors) : ''}
      ${isGroup ? fieldWrap('Nhóm sản phẩm', true, DMS.render('Input', { id: pfx + '-groups', value: groupVal, placeholder: 'Nhập tên nhóm, phân tách dấu phẩy', disabled: lock }), 'ms-' + i + '-gr-' + j, errors) : ''}
      ${isProd ? fieldWrap('Sản phẩm', true, DMS.render('Input', { id: pfx + '-products', value: prodVal, placeholder: 'Nhập mã sản phẩm, phân tách dấu phẩy', disabled: lock }), 'ms-' + i + '-pr-' + j, errors) : ''}
      ${c.type ? `<div class="acc-range">
        ${fieldWrap('Từ', true, DMS.render('Input', { id: pfx + '-from', value: c.from == null ? 1 : c.from, disabled: lock }), 'ms-' + i + '-from-' + j, errors)}
        ${fieldWrap('Đến', true, DMS.render('Input', { id: pfx + '-to', value: c.limited === false ? '' : (c.to == null ? 2 : c.to), placeholder: c.limited === false ? 'Không giới hạn' : '', disabled: lock || c.limited === false }), 'ms-' + i + '-to-' + j, errors)}
        <label class="acc-range__lim"><input type="checkbox" id="${pfx}-lim" ${c.limited !== false ? 'checked' : ''} ${lock ? 'disabled' : ''} /> Có giới hạn</label>
      </div>` : ''}
    </div>`;
  }
  function renderMilestone(d, m, i, errors, lock) {
    const rewardLocked = lock || d.rewardKind === 'PER_PRODUCT';
    const rt = d.rewardKind === 'PER_PRODUCT' ? 'CASH' : (m.rewardType || '');
    const rewardOpts = d.rewardKind === 'PER_PRODUCT' ? REWARD_TYPES.filter((x) => x.value === 'CASH') : REWARD_TYPES;
    const conds = (m.conditions || []).map((c, j) => renderCondition(m, i, c, j, errors, lock)).join('');
    const canAddCond = !lock && (m.conditions || []).length < 4;
    return `<div class="acc-milestone">
      <div class="acc-milestone__head">
        ${fieldWrap('Mốc tích lũy', true, DMS.render('Input', { id: 'a-ms-name-' + i, value: m.name, placeholder: 'Nhập vào mốc tích lũy', disabled: lock }), 'ms-name-' + i, errors)}
        ${!lock && (d.milestones || []).length > 1 ? DMS.render('Button', { text: 'Xóa mốc', type: 'ghost', size: 'sm', dataAction: 'a-ms-del-' + i }) : ''}
      </div>
      ${errBox('ms-cond-' + i, errors)}
      ${conds}
      ${canAddCond ? DMS.render('Button', { text: 'Thêm điều kiện', type: 'default', size: 'sm', dataAction: 'a-cond-add-' + i }) : ''}
      <h4>Phần thưởng</h4>
      ${fieldWrap('Phần thưởng', true, DMS.render('Select', { id: 'a-ms-rt-' + i, value: rt, placeholder: 'Chọn phần thưởng', options: rewardOpts, disabled: rewardLocked, searchable: true }), 'ms-rt-' + i, errors)}
      ${rt === 'CASH' ? fieldWrap('Tiền thưởng', true, DMS.render('Input', { id: 'a-ms-cash-' + i, value: m.cashAmount, placeholder: 'Nhập vào tiền thưởng', disabled: lock }), 'ms-cash-' + i, errors) : ''}
      ${rt === 'DISCOUNT' ? `${fieldWrap('Chiết khấu %', true, DMS.render('Input', { id: 'a-ms-disc-' + i, value: m.discountPct, placeholder: 'Nhập vào chiết khấu %', disabled: lock }), 'ms-disc-' + i, errors)}
        ${fieldWrap('Phần thưởng tối đa', false, DMS.render('Input', { id: 'a-ms-max-' + i, value: m.maxReward, placeholder: 'Nhập phần thưởng tối đa', disabled: lock }), 'ms-max-' + i, errors)}` : ''}
      ${rt === 'GIFT' ? `${fieldWrap('Điều kiện quà', false, DMS.render('Select', { id: 'a-ms-gift-join-' + i, value: m.giftJoin || 'AND', options: JOIN_OPTS, disabled: lock }), 'ms-gj-' + i, errors)}
        ${fieldWrap('Quà tặng', true, DMS.render('Input', { id: 'a-ms-gifts-' + i, value: (m.gifts || []).map((g) => g.code || g.name).join(', '), placeholder: 'Mã sản phẩm quà, phân tách dấu phẩy', disabled: lock }), 'ms-gift-' + i, errors)}` : ''}
    </div>`;
  }
  function renderStep4(d, errors, readonly) {
    const lock = readonly || (d.status && d.status !== 'INIT');
    const ms = (d.milestones || []).map((m, i) => renderMilestone(d, m, i, errors, lock)).join('');
    return `<div class="display-form-grid">
      ${fieldWrap('Số suất tối đa', true, DMS.render('Input', { id: 'a-max-slots', value: d.maxSlots, placeholder: 'Nhập vào số suất tối đa.', disabled: lock }), 'maxSlots', errors)}
      ${fieldWrap('Hình thức áp dụng', true, DMS.render('Select', { id: 'a-apply-mode', value: d.applyMode, placeholder: 'Chọn hình thức áp dụng', options: APPLY_MODES, disabled: lock, searchable: true }), 'applyMode', errors)}
      ${fieldWrap('Nguồn mua hàng', true, DMS.render('MultiSelect', { id: 'a-sources', values: d.purchaseSources || [], placeholder: 'Chọn nguồn mua hàng', options: PURCHASE_SOURCES, disabled: lock, searchable: true }), 'purchaseSources', errors)}
      ${fieldWrap('Loại phần thưởng', true, DMS.render('Select', { id: 'a-reward-kind', value: d.rewardKind, placeholder: 'Chọn loại phần thưởng', options: REWARD_KINDS, disabled: lock, searchable: true }), 'rewardKind', errors)}
      <div class="display-form-grid__full"><label class="dms-checkbox"><input type="checkbox" id="a-exclude-promo" ${d.excludePromo ? 'checked' : ''} ${lock ? 'disabled' : ''} /> CTKM loại trừ</label></div>
    </div>
    ${errBox('milestones', errors)}
    ${ms || '<p class="dms-text-secondary">Vui lòng thêm ít nhất một mốc tích lũy</p>'}
    ${lock ? '' : `<div class="dms-mt-md">${DMS.render('Button', { text: 'Thêm mốc tích lũy', type: 'default', dataAction: 'a-ms-add' })}</div>`}`;
  }

  function wizardTitle(mode) {
    if (mode === 'view') return 'Chi tiết chương trình tích lũy';
    if (mode === 'edit') return 'Cập nhật chương trình tích lũy';
    return 'Thêm mới chương trình tích lũy';
  }
  function wizardFooter(mode, step) {
    const back = step > 1 ? DMS.render('Button', { text: 'Quay lại', type: 'default', dataAction: 'a-back' }) : '';
    if (mode === 'view') {
      return back + (step < 4 ? DMS.render('Button', { text: 'Tiếp tục', type: 'primary', dataAction: 'a-next' }) : '');
    }
    if (step < 4) return back + DMS.render('Button', { text: 'Tiếp tục', type: 'primary', dataAction: 'a-next' });
    const saveLabel = mode === 'edit' ? 'Lưu' : 'Tạo chương trình';
    return back + DMS.render('Button', { text: saveLabel, type: 'primary', dataAction: 'a-save' });
  }
  function renderWizard(d, mode, errors) {
    const readonly = mode === 'view';
    const step = d.step || 1;
    let body = stepper(step);
    if (step === 1) body += renderStep1(d, errors, readonly);
    if (step === 2) body += renderStep2(d, errors, readonly);
    if (step === 3) body += renderStep3(d, errors, readonly);
    if (step === 4) body += renderStep4(d, errors, readonly);
    return DMS.render('Modal', {
      id: 'accumulate-wizard-modal',
      title: wizardTitle(mode),
      size: 'xxl',
      body,
      footer: wizardFooter(mode, step)
    });
  }

  function saveProgram(d, mode) {
    const store = window.__accumulateStore;
    const item = {
      id: d.id || uid('cttl-'),
      code: d.code,
      name: d.name,
      content: '<p>' + DMS.escape(d.content) + '</p>',
      status: mode === 'edit' ? (findProgram(d.id)?.status || 'INIT') : 'INIT',
      type: d.type,
      contractRequired: d.type === 'SALEMAN' ? 'NONE' : d.contractRequired,
      contractTemplate: d.contractTemplate || '',
      registerMode: d.registerMode,
      rewardMode: d.rewardMode,
      autoApprove: !!d.autoApprove,
      priority: Number(d.priority) || 1,
      startDate: d.startDate,
      endDate: d.endDate,
      registerStart: d.registerStart,
      registerEnd: d.registerEnd,
      stageCount: Number(d.stageCount) || 1,
      maxSlots: d.maxSlots,
      applyMode: d.applyMode,
      purchaseSources: d.purchaseSources || [],
      rewardKind: d.rewardKind,
      excludePromo: !!d.excludePromo,
      targets: d.targets || [],
      stages: d.stages || [],
      milestones: d.milestones || [],
      createdAt: findProgram(d.id)?.createdAt || nowLabel(),
      createdBy: findProgram(d.id)?.createdBy || 'NV0001 - Nguyễn An',
      updatedAt: nowLabel(),
      updatedBy: 'NV0001 - Nguyễn An',
      reason: findProgram(d.id)?.reason || ''
    };
    const idx = store.programs.findIndex((p) => p.id === item.id);
    if (idx >= 0) store.programs[idx] = Object.assign({}, store.programs[idx], item);
    else store.programs.unshift(item);
    return item;
  }

  function nextStageCode() {
    const store = window.__accumulateStore;
    const yy = String(new Date().getFullYear()).slice(-2);
    const n = String((store.progress || []).length + 1).padStart(10, '0');
    return 'GD' + yy + n;
  }
  function nextRewardCode() {
    const store = window.__accumulateStore;
    const n = String((store.rewards || []).length + 1).padStart(10, '0');
    return 'REWARD' + n;
  }
  function stageStatusByDate(st, en, today) {
    const t = startOfDay(today || new Date());
    const a = parseDmy(st);
    const b = parseDmy(en);
    if (!a || !b) return 'NOT_STARTED';
    if (t.getTime() < a.getTime()) return 'NOT_STARTED';
    if (t.getTime() > b.getTime()) return 'ENDED';
    return 'RUNNING';
  }
  function genProgressForReg(reg) {
    const store = window.__accumulateStore;
    const p = findProgram(reg.programId);
    if (!p) return;
    const n = Number(p.stageCount) || 1;
    const existing = (store.progress || []).filter((x) => x.registrationId === reg.id);
    if (existing.length) return;
    store.progress = store.progress || [];
    for (let i = 0; i < n; i++) {
      const stg = (p.stages || [])[i];
      store.progress.push({
        id: uid('prg-'),
        registrationId: reg.id,
        programId: p.id,
        stageCode: nextStageCode(),
        stageName: stg?.name || ('Giai đoạn ' + (i + 1)),
        status: stageStatusByDate(stg?.startDate || p.startDate, stg?.endDate || p.endDate),
        result: 'PENDING',
        startDate: stg?.startDate || p.startDate,
        endDate: stg?.endDate || p.endDate,
        actualText: 'Chi tiết',
        achievedMilestone: '',
        achievedDesc: '',
        rewardText: '',
        reason: '',
        updatedBy: 'Hệ thống',
        updatedAt: nowLabel(),
        actualDetail: { qty: [], rev: [], total: [] }
      });
    }
  }
  function maybeGenReward(progressRow) {
    const store = window.__accumulateStore;
    const p = findProgram(progressRow.programId);
    const r = findReg(progressRow.registrationId);
    if (!p || !r || progressRow.result !== 'PASS') return;
    store.rewards = store.rewards || [];
    if (p.rewardMode === 'STAGE') {
      if (store.rewards.some((x) => x.progressId === progressRow.id)) return;
      store.rewards.unshift(buildReward(p, r, progressRow));
      return;
    }
    const all = (store.progress || []).filter((x) => x.registrationId === r.id);
    if (!all.length || all.some((x) => x.result !== 'PASS')) return;
    if (store.rewards.some((x) => x.programId === p.id && x.progressId === all[0].id && p.rewardMode === 'PROGRAM')) return;
    store.rewards.unshift(buildReward(p, r, all[all.length - 1]));
  }
  function buildReward(p, r, g) {
    const ms = (p.milestones || [])[0] || {};
    return {
      id: uid('rw-'),
      code: nextRewardCode(),
      programId: p.id,
      progressId: g.id,
      result: 'WAITING',
      rewardType: ms.rewardType || 'CASH',
      amount: Number(ms.cashAmount || ms.discountPct || 0),
      milestoneReg: r.milestoneName || ms.name || '',
      milestoneGot: g.achievedMilestone || ms.name || '',
      startDate: g.startDate,
      endDate: g.endDate,
      paidAt: '',
      orderCode: '',
      reason: '',
      roleGroup: 'Admin',
      updatedBy: 'Hệ thống',
      updatedAt: nowLabel(),
      gifts: JSON.parse(JSON.stringify(ms.gifts || []))
    };
  }

  function conditionDesc(p) {
    const m = (p.milestones || [])[0];
    if (!m) return '';
    return (m.conditions || []).map((c) => {
      const lab = conditionLabel(c.type);
      const from = c.from != null ? c.from : ((c.groups || [])[0] || {}).from;
      const to = c.to != null ? c.to : ((c.groups || [])[0] || {}).to;
      return lab + ' từ ' + from + ' đến ' + to;
    }).join(' Và ');
  }

  function breadcrumb(current) {
    return DMS.render('Breadcrumb', {
      items: [
        { label: 'Quản Lý Tích Lũy', route: '/accumulate/overview' },
        { label: current }
      ]
    });
  }
  function copyCell(text, inner) {
    return `${inner}<button type="button" class="display-copy" data-copy="${DMS.escape(text)}" title="Sao chép">⧉</button>`;
  }
  function queryParams() { return new URLSearchParams(location.hash.split('?')[1] || ''); }

  global.AccumulateShared = {
    PROGRAM_STATUSES, REG_STATUSES, PROGRESS_STATUSES, STAGE_RESULTS, REWARD_RESULTS,
    TYPES, CONTRACTS, REGISTER_MODES, REWARD_MODES, YES_NO, TARGET_TYPES, REWARD_TYPES,
    APPLY_MODES, REWARD_KINDS, PURCHASE_SOURCES, CONDITION_TYPES, CHART_META,
    parseDmy, toDmy, parseDt, presetRange, lastNDays, currentMonth, overlaps, yearAllowed, inRange, nowLabel,
    catalogLabel, tagOf, statusMeta, formatMoney,
    loadStore, persist, filteredPrograms, buildOverviewCharts, findProgram, findReg, findProgress, findReward,
    programActions, approveProgramStatus, todayOkForApprove,
    emptyDraft, emptyCondition, emptyMilestone, getDraft, resetDraft, loadDraft, draftIsDirty, readDraftFromDom,
    validateStep, genStages, stepper, renderWizard, saveProgram, genProgressForReg, maybeGenReward,
    conditionDesc, breadcrumb, copyCell, queryParams, uid
  };
})(window);
