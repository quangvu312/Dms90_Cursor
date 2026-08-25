/**
 * Quản Lý Trưng Bày — shared helpers (Portal HO)
 * Business rule: Docs/Confluence. UI: DEV /display/*
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
  const PERIOD_RESULTS = [
    { key: 'PASS', label: 'Đạt', tag: 'green' },
    { key: 'FAIL', label: 'Không đạt', tag: 'red' },
    { key: 'PENDING', label: 'Chờ duyệt', tag: 'orange' }
  ];
  const STAGE_RESULTS = PERIOD_RESULTS;
  const REWARD_RESULTS = [
    { key: 'WAITING', label: 'Chờ trả thưởng', color: '#faad14', tag: 'orange' },
    { key: 'RECEIVED', label: 'Đã nhận thưởng', color: '#389E0D', tag: 'green' },
    { key: 'REJECTED', label: 'Từ chối', color: '#CF1322', tag: 'red' },
    { key: 'EXPIRED', label: 'Hết hạn', color: '#D46B08', tag: 'orange' }
  ];
  const REWARD_LIST_RESULTS = [
    { key: 'WAITING', label: 'Chờ trả thưởng', color: '#faad14', tag: 'orange' },
    { key: 'RECEIVED', label: 'Đã trả thưởng', color: '#389E0D', tag: 'green' },
    { key: 'REJECTED', label: 'Từ chối', color: '#CF1322', tag: 'red' },
    { key: 'EXPIRED', label: 'Hết hạn', color: '#D46B08', tag: 'orange' }
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
    { value: 'PERIOD', label: 'Theo kỳ' },
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
    { value: 'CHANNEL', label: 'Kênh bán hàng' }
  ];
  const REWARD_TYPES = [
    { value: 'CASH', label: 'Tiền thưởng' },
    { value: 'GIFT', label: 'Quà tặng' }
  ];
  const CHART_PROGRAM_FILTER = ['RUNNING', 'ENDED', 'STOPPED'];
  const CHART_META = [
    { id: 'program', number: 1, title: 'Chương trình trưng bày', icon: '🖥', avatar: '#2ccca5', caption: 'Khởi tạo và quản lý các chương trình trưng bày.' },
    { id: 'participant', number: 2, title: 'Danh sách tham gia', icon: '💾', avatar: '#fb903e', caption: 'Quản lý cửa hàng đã đăng ký tham gia chương trình trưng bày với mỗi hạn mức nhất định.' },
    { id: 'process', number: 3, title: 'Danh sách tiến trình', icon: '📄', avatar: '#0087fe', caption: 'Có thể Phê duyệt hoặc Từ chối cửa hàng trưng bày khi không đáp ứng đủ yêu cầu.' },
    { id: 'reward', number: 4, title: 'Danh sách trả thưởng', icon: '🎁', avatar: '#f70d1a', caption: 'Cửa hàng đã đáp ứng đủ yêu cầu CTTB thì có thể lên danh sách trả thưởng.' }
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
    const from = new Date(t.getFullYear(), t.getMonth(), t.getDate() - (n - 1));
    return { from, to: t };
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

  async function loadStore() {
    if (window.__displayStore) return window.__displayStore;
    const res = await fetch('data/display.json?v=20260820-ts');
    if (!res.ok) throw new Error('Không tải được dữ liệu trưng bày');
    window.__displayStore = await res.json();
    return window.__displayStore;
  }
  function persist() { return window.__displayStore; }
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
  function findProgram(id) { return (window.__displayStore?.programs || []).find((p) => p.id === id); }
  function findReg(id) { return (window.__displayStore?.registrations || []).find((r) => r.id === id); }
  function findProgress(id) { return (window.__displayStore?.progress || []).find((r) => r.id === id); }
  function findReward(id) { return (window.__displayStore?.rewards || []).find((r) => r.id === id); }
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

  function emptyQuota() {
    return { maxSlots: '1', imageReq: '1', reviewReq: '1', faces: '1', rewardType: 'CASH', cashAmount: '100000' };
  }
  function emptyDraft() {
    return {
      id: '', step: 1, imageName: '', code: '', name: '', content: '', type: '', contractRequired: '',
      contractTemplate: '', priority: 1, registerMode: '', autoApprove: false, startDate: '', endDate: '',
      periodCount: 1, rewardMode: '', registerStart: '', registerEnd: '', targets: [], periods: [], quotas: [emptyQuota()]
    };
  }
  function getDraft() {
    if (!window.__displayDraft) window.__displayDraft = emptyDraft();
    return window.__displayDraft;
  }
  function resetDraft() { window.__displayDraft = emptyDraft(); return window.__displayDraft; }
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
      periodCount: item.periodCount || 1,
      rewardMode: item.rewardMode || '',
      registerStart: item.registerStart || '',
      registerEnd: item.registerEnd || '',
      targets: JSON.parse(JSON.stringify(item.targets || [])),
      periods: JSON.parse(JSON.stringify(item.periods || [])),
      quotas: JSON.parse(JSON.stringify(item.quotas || [emptyQuota()])),
      imageName: item.imageName || '',
      status: mode === 'copy' ? 'INIT' : item.status,
      storyId: mode === 'copy' ? '' : (item.storyId || '')
    });
    window.__displayDraft = d;
    return d;
  }
  function draftIsDirty(d) {
    return !!(d.code || d.name || d.content || d.type || d.registerMode || d.rewardMode || (d.targets || []).length);
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
      if (!d.startDate || !d.endDate) errors.programDate = requiredMsg('Thời gian chương trình');
      if (!d.periodCount || Number(d.periodCount) < 1) errors.periodCount = requiredMsg('Số kỳ');
      if (!d.rewardMode) errors.rewardMode = requiredMsg('Hình thức trả thưởng');
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
      if ((d.periods || []).length !== Number(d.periodCount || 0)) {
        errors.periods = 'Số lượng kỳ không khớp với số kỳ';
      }
    }
    if (step === 4) {
      (d.quotas || []).forEach((q, i) => {
        if (!q.rewardType) errors['quota-type-' + i] = requiredMsg('Loại phần thưởng');
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

  function genPeriods(d) {
    const n = Math.max(1, Number(d.periodCount) || 1);
    const start = parseDmy(d.startDate);
    const end = parseDmy(d.endDate);
    const list = [];
    for (let i = 0; i < n; i++) {
      list.push({
        name: 'Kỳ ' + (i + 1),
        buyStart: d.startDate || '',
        buyEnd: d.endDate || '',
        scoreStart: d.endDate || '',
        scoreEnd: d.endDate || '',
        rewardStart: d.endDate || '',
        rewardEnd: d.endDate || ''
      });
    }
    if (start && end && n > 1) {
      const span = Math.max(1, Math.round((end - start) / (n * 86400000)));
      for (let i = 0; i < n; i++) {
        const a = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i * span);
        const b = i === n - 1 ? end : new Date(start.getFullYear(), start.getMonth(), start.getDate() + (i + 1) * span - 1);
        list[i].buyStart = toDmy(a);
        list[i].buyEnd = toDmy(b);
      }
    }
    d.periods = list;
    return list;
  }

  function readDraftFromDom(d) {
    d.code = document.getElementById('d-code')?.value || d.code;
    d.name = document.getElementById('d-name')?.value || d.name;
    d.content = document.getElementById('d-content')?.value || d.content;
    d.type = document.getElementById('d-type')?.value || d.type;
    d.contractRequired = document.getElementById('d-contract')?.value || d.contractRequired;
    d.contractTemplate = document.getElementById('d-template')?.value || d.contractTemplate;
    d.priority = Number(document.getElementById('d-priority')?.value || d.priority || 1);
    d.registerMode = document.getElementById('d-register-mode')?.value || d.registerMode;
    const sw = document.getElementById('d-auto');
    if (sw) d.autoApprove = sw.classList.contains('is-checked');
    d.startDate = document.getElementById('d-start')?.value || d.startDate;
    d.endDate = document.getElementById('d-end')?.value || d.endDate;
    d.periodCount = Number(document.getElementById('d-period-count')?.value || d.periodCount || 1);
    d.rewardMode = document.getElementById('d-reward-mode')?.value || d.rewardMode;
    d.registerStart = document.getElementById('d-reg-start')?.value || d.registerStart;
    d.registerEnd = document.getElementById('d-reg-end')?.value || d.registerEnd;
    (d.targets || []).forEach((tg, i) => {
      tg.type = document.getElementById('d-target-type-' + i)?.value || tg.type;
      const raw = document.getElementById('d-target-val-' + i)?.value || '';
      if (raw) tg.values = raw.split(',').map((s) => s.trim()).filter(Boolean);
    });
    (d.periods || []).forEach((p, i) => {
      p.name = document.getElementById('d-ky-name-' + i)?.value || p.name;
      p.buyStart = document.getElementById('d-ky-buy-from-' + i)?.value || p.buyStart;
      p.buyEnd = document.getElementById('d-ky-buy-to-' + i)?.value || p.buyEnd;
    });
    (d.quotas || []).forEach((q, i) => {
      q.maxSlots = document.getElementById('d-quota-slots-' + i)?.value || q.maxSlots;
      q.imageReq = document.getElementById('d-quota-img-' + i)?.value || q.imageReq;
      q.reviewReq = document.getElementById('d-quota-rev-' + i)?.value || q.reviewReq;
      q.faces = document.getElementById('d-quota-faces-' + i)?.value || q.faces;
      q.rewardType = document.getElementById('d-quota-type-' + i)?.value || q.rewardType;
      q.cashAmount = document.getElementById('d-quota-cash-' + i)?.value || q.cashAmount;
    });
    return d;
  }

  function renderStep1(d, errors, readonly) {
    const lock = readonly || (d.status && d.status !== 'INIT');
    const dis = lock;
    const contractDisabled = dis || d.type === 'SALEMAN';
    return `<div class="display-form-grid">
      ${fieldWrap('Hình ảnh', false, `<div class="display-upload">${d.imageName ? DMS.escape(d.imageName) : 'Upload'}</div>`, 'image', errors)}
      ${fieldWrap('Mã chương trình', true, DMS.render('Input', { id: 'd-code', value: d.code, placeholder: 'Nhập vào mã chương trình.', disabled: dis }), 'code', errors)}
      ${fieldWrap('Tiêu đề', true, DMS.render('Input', { id: 'd-name', value: d.name, placeholder: 'Nhập vào tiêu đề.', disabled: readonly }), 'name', errors)}
      <div class="display-form-grid__full">${fieldWrap('Nội dung', true, DMS.render('Textarea', { id: 'd-content', value: d.content, rows: 5, placeholder: 'Nhập vào nội dung.', disabled: readonly }), 'content', errors)}</div>
      ${fieldWrap('Loại chương trình', true, DMS.render('Select', { id: 'd-type', value: d.type, placeholder: 'Chọn loại chương trình.', options: TYPES, disabled: dis, searchable: true }), 'type', errors)}
      ${fieldWrap('Yêu cầu hợp đồng', true, DMS.render('Select', { id: 'd-contract', value: d.contractRequired, placeholder: 'Chọn yêu cầu hợp đồng.', options: CONTRACTS, disabled: contractDisabled, searchable: true }), 'contractRequired', errors)}
      ${d.type === 'MERCHANT' && d.contractRequired === 'E_CONTRACT'
        ? fieldWrap('Mẫu hợp đồng', true, DMS.render('Input', { id: 'd-template', value: d.contractTemplate, placeholder: 'Chọn mẫu hợp đồng.', disabled: dis }), 'contractTemplate', errors)
        : ''}
      ${fieldWrap('Độ ưu tiên', false, DMS.render('Input', { id: 'd-priority', type: 'number', value: d.priority, placeholder: 'Nhập vào độ ưu tiên.', disabled: dis }), 'priority', errors)}
      ${fieldWrap('Hình thức đăng ký', true, DMS.render('Select', { id: 'd-register-mode', value: d.registerMode, placeholder: 'Chọn hình thức đăng ký.', options: REGISTER_MODES, disabled: dis, searchable: true }), 'registerMode', errors)}
      ${fieldWrap('Tự động duyệt tham gia', false, DMS.render('Switch', { id: 'd-auto', checked: !!d.autoApprove, disabled: dis }), 'auto', errors)}
      <div class="display-form-grid__span2">${fieldWrap('Thời gian chương trình', false, `<div class="display-date-range">
        ${DMS.render('DatePicker', { id: 'd-start', value: d.startDate, placeholder: 'Ngày bắt đầu', disabled: dis })}
        ${DMS.render('DatePicker', { id: 'd-end', value: d.endDate, placeholder: 'Ngày kết thúc', disabled: dis })}
      </div>`, 'programDate', errors)}</div>
      ${fieldWrap('Số kỳ', false, DMS.render('Input', { id: 'd-period-count', type: 'number', value: d.periodCount, placeholder: 'Nhập vào số kỳ.', disabled: dis }), 'periodCount', errors)}
      ${fieldWrap('Hình thức trả thưởng', false, DMS.render('Select', { id: 'd-reward-mode', value: d.rewardMode, placeholder: 'Chọn hình thức trả thưởng.', options: REWARD_MODES, disabled: dis, searchable: true }), 'rewardMode', errors)}
      <div class="display-form-grid__span2">${fieldWrap('Thời gian đăng ký', false, `<div class="display-date-range">
        ${DMS.render('DatePicker', { id: 'd-reg-start', value: d.registerStart, placeholder: 'Ngày bắt đầu', disabled: dis })}
        ${DMS.render('DatePicker', { id: 'd-reg-end', value: d.registerEnd, placeholder: 'Ngày kết thúc', disabled: dis })}
      </div>`, 'registerDate', errors)}</div>
      ${d.storyId && window.TellingStoryShared ? `<div class="display-form-grid__full">${fieldWrap('Tài liệu hướng dẫn', false, TellingStoryShared.storyRefHtml(d.storyId), 'story', {})}</div>` : ''}
    </div>`;
  }
  function renderStep2(d, errors, readonly) {
    const lock = readonly || (d.status && d.status !== 'INIT');
    const rows = (d.targets || []).map((tg, i) => `<div class="display-target-row">
      ${DMS.render('Select', { id: 'd-target-type-' + i, value: tg.type, placeholder: 'Chọn điều kiện', options: TARGET_TYPES, disabled: lock, searchable: true })}
      ${DMS.render('Input', { id: 'd-target-val-' + i, value: (tg.values || []).join(', '), placeholder: 'Giá trị (phân tách bằng dấu phẩy)', disabled: lock })}
      ${lock ? '' : DMS.render('Button', { text: 'Xóa', type: 'ghost', size: 'sm', dataAction: 'd-target-del-' + i })}
      ${errBox('target-' + i, errors)}
    </div>`).join('');
    return `<div>
      <p class="display-page__desc">Có thể thêm đối tượng hoặc bỏ qua bước này (áp dụng tất cả).</p>
      ${rows || '<p class="dms-text-secondary">Chưa có đối tượng áp dụng.</p>'}
      ${lock ? '' : DMS.render('Button', { text: 'Thêm đối tượng', type: 'default', dataAction: 'd-target-add' })}
    </div>`;
  }
  function renderStep3(d, errors, readonly) {
    const lock = readonly || (d.status && d.status !== 'INIT');
    const ky = (d.periods || []).map((p, i) => `<div class="display-ky-row">
      ${fieldWrap('Kỳ', true, DMS.render('Input', { id: 'd-ky-name-' + i, value: p.name, placeholder: 'Nhập vào kỳ ' + (i + 1), disabled: lock }), 'ky-' + i, errors)}
      <div class="display-form-grid__span2">${fieldWrap('Thời gian mua hàng và trưng bày', false, `<div class="display-date-range">
        ${DMS.render('DatePicker', { id: 'd-ky-buy-from-' + i, value: p.buyStart, placeholder: 'Ngày bắt đầu', disabled: lock })}
        ${DMS.render('DatePicker', { id: 'd-ky-buy-to-' + i, value: p.buyEnd, placeholder: 'Ngày kết thúc', disabled: lock })}
      </div>`, 'ky-buy-' + i, errors)}</div>
    </div>`).join('');
    return `${errBox('periods', errors)}
      ${lock ? '' : `<div class="display-ky-toolbar">${DMS.render('Button', { text: 'Tạo kỳ', type: 'primary', dataAction: 'd-gen-periods' })}</div>`}
      ${ky || '<p class="dms-text-secondary">Nhấn Tạo kỳ để sinh danh sách kỳ theo Số kỳ.</p>'}`;
  }
  function renderStep4(d, errors, readonly) {
    const lock = readonly || (d.status && d.status !== 'INIT');
    return (d.quotas || []).map((q, i) => `<div class="display-quota">
      <h4>Hạn mức ${i + 1}</h4>
      <div class="display-form-grid">
        ${fieldWrap('Số suất tối đa', true, DMS.render('Input', { id: 'd-quota-slots-' + i, value: q.maxSlots, placeholder: 'Nhập vào số suất tối đa', disabled: lock }), 'quota-slots-' + i, errors)}
        ${fieldWrap('Số lượng hình ảnh yêu cầu', false, DMS.render('Input', { id: 'd-quota-img-' + i, value: q.imageReq, placeholder: 'Nhập vào số lượng hình ảnh', disabled: lock }), 'quota-img-' + i, errors)}
        ${fieldWrap('Số lần yêu cầu duyệt hình ảnh', false, DMS.render('Input', { id: 'd-quota-rev-' + i, value: q.reviewReq, disabled: lock }), 'quota-rev-' + i, errors)}
        ${fieldWrap('Số mặt trưng bày', false, DMS.render('Input', { id: 'd-quota-faces-' + i, value: q.faces, disabled: lock }), 'quota-faces-' + i, errors)}
        ${fieldWrap('Loại phần thưởng', true, DMS.render('Select', { id: 'd-quota-type-' + i, value: q.rewardType, placeholder: 'Chọn loại phần thưởng', options: REWARD_TYPES, disabled: lock, searchable: true }), 'quota-type-' + i, errors)}
        ${q.rewardType === 'CASH' ? fieldWrap('Tiền thưởng', true, DMS.render('Input', { id: 'd-quota-cash-' + i, value: q.cashAmount, placeholder: 'Nhập vào tiền thưởng', disabled: lock }), 'quota-cash-' + i, errors) : ''}
      </div>
    </div>`).join('') + (lock ? '' : `<div class="dms-mt-md">${DMS.render('Button', { text: 'Thêm hạn mức', type: 'default', dataAction: 'd-quota-add' })}</div>`);
  }

  function wizardTitle(mode) {
    if (mode === 'view') return 'Chi tiết chương trình trưng bày';
    if (mode === 'edit') return 'Cập nhật chương trình trưng bày';
    return 'Thêm mới chương trình trưng bày';
  }
  function wizardFooter(mode, step) {
    const back = step > 1 ? DMS.render('Button', { text: 'Quay lại', type: 'default', dataAction: 'd-back' }) : '';
    if (mode === 'view') {
      return back + (step < 4 ? DMS.render('Button', { text: 'Tiếp tục', type: 'primary', dataAction: 'd-next' }) : '');
    }
    if (step < 4) return back + DMS.render('Button', { text: 'Tiếp tục', type: 'primary', dataAction: 'd-next' });
    const saveLabel = mode === 'edit' ? 'Lưu' : 'Tạo chương trình';
    return back + DMS.render('Button', { text: saveLabel, type: 'primary', dataAction: 'd-save' });
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
      id: 'display-wizard-modal',
      title: wizardTitle(mode),
      size: 'xxl',
      body,
      footer: wizardFooter(mode, step)
    });
  }

  function saveProgram(d, mode) {
    const store = window.__displayStore;
    const item = {
      id: d.id || uid('cttb-'),
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
      periodCount: Number(d.periodCount) || 1,
      targets: d.targets || [],
      periods: d.periods || [],
      quotas: d.quotas || [],
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

  function genProgressForReg(reg) {
    const store = window.__displayStore;
    const p = findProgram(reg.programId);
    if (!p) return;
    const n = Number(p.periodCount) || 1;
    const existing = (store.progress || []).filter((x) => x.registrationId === reg.id);
    if (existing.length) return;
    for (let i = 0; i < n; i++) {
      const per = (p.periods || [])[i];
      store.progress.push({
        id: uid('prg-'),
        registrationId: reg.id,
        programId: p.id,
        periodCode: 'K26' + String(store.progress.length + 1).padStart(10, '0'),
        periodName: per?.name || ('Kỳ ' + (i + 1)),
        status: 'NOT_STARTED',
        result: 'PENDING',
        startDate: per?.buyStart || p.startDate,
        endDate: per?.buyEnd || p.endDate,
        photoCount: 0,
        requestCount: 0,
        updatedBy: 'Hệ thống',
        updatedAt: nowLabel(),
        images: [],
        stages: []
      });
    }
  }

  function breadcrumb(current) {
    return DMS.render('Breadcrumb', {
      items: [
        { label: 'Quản Lý Trưng Bày', route: '/display/overview' },
        { label: current }
      ]
    });
  }
  function copyCell(text, inner) {
    return `${inner}<button type="button" class="display-copy" data-copy="${DMS.escape(text)}" title="Sao chép">⧉</button>`;
  }
  function queryParams() { return new URLSearchParams(location.hash.split('?')[1] || ''); }

  global.DisplayShared = {
    PROGRAM_STATUSES, REG_STATUSES, PROGRESS_STATUSES, PERIOD_RESULTS, STAGE_RESULTS, REWARD_RESULTS, REWARD_LIST_RESULTS,
    TYPES, CONTRACTS, REGISTER_MODES, REWARD_MODES, YES_NO, TARGET_TYPES, REWARD_TYPES, CHART_META,
    parseDmy, toDmy, parseDt, presetRange, lastNDays, overlaps, yearAllowed, inRange, nowLabel, catalogLabel, tagOf, statusMeta, formatMoney,
    loadStore, persist, filteredPrograms, buildOverviewCharts, findProgram, findReg, findProgress, findReward,
    programActions, approveProgramStatus, todayOkForApprove,
    emptyDraft, getDraft, resetDraft, loadDraft, draftIsDirty, readDraftFromDom, validateStep, genPeriods,
    stepper, renderWizard, saveProgram, genProgressForReg, breadcrumb, copyCell, queryParams, uid
  };
})(window);
