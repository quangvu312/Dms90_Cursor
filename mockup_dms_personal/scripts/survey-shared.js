/**
 * Quản Lý Khảo Sát — shared helpers (Portal HO)
 * UI: DEV /survey/setting, /survey/report
 * Rule: Docs/Confluence 050, 078 — website thắng khi khác doc.
 */
(function (global) {
  'use strict';

  const STATUSES = [
    { value: 'ACTIVE', label: 'Hoạt động' },
    { value: 'INACTIVE', label: 'Không hoạt động' }
  ];
  const AUDIENCES = [
    { value: 'EMPLOYEE', label: 'Nhân viên' },
    { value: 'STORE', label: 'Điểm bán' }
  ];
  const APPLY_STORE = [
    { value: 'REGION', label: 'Vùng' },
    { value: 'EMPLOYEE', label: 'Nhân viên' },
    { value: 'ROUTE', label: 'Tuyến bán hàng' },
    { value: 'STORE', label: 'Điểm bán' }
  ];
  const APPLY_EMPLOYEE = [
    { value: 'REGION', label: 'Vùng' },
    { value: 'EMPLOYEE', label: 'Nhân viên' }
  ];
  const QUESTION_TYPES = [
    { value: 'TEXT', label: 'Kiểu chữ' },
    { value: 'NUMBER', label: 'Kiểu số' },
    { value: 'YESNO', label: 'Đúng/Sai' },
    { value: 'SINGLE', label: 'Chọn một' },
    { value: 'MULTI', label: 'Chọn nhiều' },
    { value: 'IMAGE', label: 'Ảnh' }
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
  function todayDmy(today) { return toDmy(startOfDay(today || new Date())); }
  function monthRange(today) {
    const t = startOfDay(today || new Date());
    return {
      from: toDmy(new Date(t.getFullYear(), t.getMonth(), 1)),
      to: toDmy(new Date(t.getFullYear(), t.getMonth() + 1, 0))
    };
  }
  function overlaps(aStart, aEnd, bStart, bEnd) {
    if (!aStart || !aEnd || !bStart || !bEnd) return false;
    return aStart.getTime() <= bEnd.getTime() && aEnd.getTime() >= bStart.getTime();
  }
  function inRange(dateStr, from, to) {
    const d = parseDmy(dateStr);
    if (!d || !from || !to) return true;
    return d.getTime() >= from.getTime() && d.getTime() <= to.getTime();
  }
  function monthsApart(from, to) {
    if (!from || !to) return 0;
    return (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth()) + (to.getDate() >= from.getDate() ? 0 : -1);
  }
  function catalogLabel(list, key) {
    return (list.find((x) => x.value === key || x.key === key) || {}).label || key || '';
  }
  function audienceLabel(key) { return catalogLabel(AUDIENCES, key); }
  function applyLabel(key) { return catalogLabel(APPLY_STORE, key); }
  function qTypeLabel(key) { return catalogLabel(QUESTION_TYPES, key); }
  function applyOptions(audience) {
    return audience === 'STORE' ? APPLY_STORE : APPLY_EMPLOYEE;
  }
  function uid(prefix) { return prefix + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }
  function genCode(existing) {
    const used = new Set((existing || []).map((s) => s.code));
    let code = '';
    do {
      let n = '';
      for (let i = 0; i < 10; i++) n += Math.floor(Math.random() * 10);
      code = 'SV' + n;
    } while (used.has(code));
    return code;
  }
  function clampTimes(val) {
    const n = parseInt(String(val).replace(/[^\d-]/g, ''), 10);
    if (!Number.isFinite(n) || n < 1) return 1;
    if (n > 999) return 999;
    return n;
  }
  function timesText(n) { return `${n} lần`; }

  async function loadStore() {
    if (window.__surveyStore) return window.__surveyStore;
    const res = await fetch('data/survey.json?v=20260814-survey2');
    if (!res.ok) throw new Error('Không tải được dữ liệu khảo sát');
    window.__surveyStore = await res.json();
    return window.__surveyStore;
  }
  function persist() { return window.__surveyStore; }
  function findSurvey(id) {
    return (window.__surveyStore?.surveys || []).find((s) => s.id === id);
  }
  function latestSurvey() {
    const list = (window.__surveyStore?.surveys || []).slice().sort((a, b) => {
      const da = parseDmy(a.createdAt) || new Date(0);
      const db = parseDmy(b.createdAt) || new Date(0);
      return db.getTime() - da.getTime();
    });
    return list[0] || null;
  }
  function surveyOptions() {
    return (window.__surveyStore?.surveys || []).map((s) => ({
      value: s.id,
      label: `${s.code} - ${s.title}`
    }));
  }
  function regionOptions() {
    return (window.__surveyStore?.regions || []).map((r) => ({
      value: r.id,
      label: `${r.code} - ${r.name}`
    }));
  }

  function emptyQuestion(index) {
    return {
      id: uid('q'),
      type: '',
      title: 'Câu hỏi ' + index,
      desc: '',
      required: false,
      min: 1,
      max: 1000,
      trueLabel: 'Đúng',
      falseLabel: 'Sai',
      allowOther: false,
      options: [{ id: uid('o'), label: '' }],
      uploadMode: 'one'
    };
  }
  function emptyDraft() {
    const today = todayDmy();
    return {
      id: '',
      code: '',
      title: '',
      startDate: today,
      endDate: today,
      times: 1,
      audience: '',
      applyType: '',
      requireCheckin: false,
      applyItems: [],
      questions: [emptyQuestion(1)],
      activeQuestion: 0,
      tab: 0,
      _errors: {},
      _src: '',
      _dirty: false,
      _locked: false
    };
  }
  function clone(obj) { return JSON.parse(JSON.stringify(obj)); }
  function getDraft() {
    if (!window.__surveyDraft) window.__surveyDraft = emptyDraft();
    return window.__surveyDraft;
  }
  function resetDraft() {
    window.__surveyDraft = emptyDraft();
    return window.__surveyDraft;
  }
  function isLocked(item, mode) {
    if (mode === 'view' || mode === 'create' || mode === 'copy') return mode === 'view';
    if (!item) return false;
    if (item.hasResponses) return true;
    const start = parseDmy(item.startDate);
    const today = startOfDay(new Date());
    return !!(start && start.getTime() <= today.getTime());
  }
  function loadDraft(item, mode) {
    const d = emptyDraft();
    if (item) {
      Object.assign(d, {
        id: mode === 'copy' ? '' : item.id,
        code: mode === 'copy' ? '' : item.code,
        title: item.title || '',
        startDate: item.startDate || '',
        endDate: item.endDate || '',
        times: item.times || 1,
        audience: item.audience || '',
        applyType: item.applyType || '',
        requireCheckin: !!item.requireCheckin,
        applyItems: clone(item.applyItems || []),
        questions: clone(item.questions && item.questions.length ? item.questions : [emptyQuestion(1)]),
        activeQuestion: 0,
        tab: 0
      });
    }
    d._src = mode + (item ? item.id : '');
    d._locked = isLocked(item, mode);
    d._errors = {};
    window.__surveyDraft = d;
    return d;
  }
  function draftIsDirty(d) {
    if (!d) return false;
    if (d._dirty) return true;
    if ((d.title || '').trim()) return true;
    if ((d.audience || '') || (d.applyType || '')) return true;
    if ((d.applyItems || []).length) return true;
    const qs = d.questions || [];
    return qs.some((q) => (q.type || '') || ((q.title || '').trim() && q.title !== 'Câu hỏi 1'));
  }

  function valErr(field) { return `@${field} là bắt buộc!`; }
  function validateDraft(d) {
    const errors = {};
    if (!(d.title || '').trim()) errors.title = valErr('Tiêu đề');
    if (!d.startDate) errors.startDate = valErr('Thời gian');
    if (!d.endDate) errors.endDate = valErr('Thời gian');
    const start = parseDmy(d.startDate);
    const end = parseDmy(d.endDate);
    const today = startOfDay(new Date());
    if (start && end && end.getTime() < start.getTime()) errors.endDate = 'Ngày kết thúc phải lớn hơn hoặc bằng ngày bắt đầu';
    if (!d._locked && start && start.getTime() < today.getTime() && !d.id) {
      errors.startDate = 'Ngày bắt đầu phải lớn hơn hoặc bằng ngày hiện tại';
    }
    if (!d.times) errors.times = valErr('Số lần khảo sát');
    if (!d.audience) errors.audience = valErr('Đối tượng khảo sát');
    if (!d.applyType) errors.applyType = valErr('Điều kiện áp dụng');
    const qs = d.questions || [];
    if (!qs.length) errors.questions = 'Bắt buộc phải có ít nhất 01 câu hỏi khảo sát';
    qs.forEach((q, i) => {
      if (!q.type) errors['qtype-' + i] = valErr('Kiểu câu hỏi');
      if (!(q.title || '').trim()) errors['qtitle-' + i] = valErr('Tiêu đề câu hỏi');
      if ((q.type === 'TEXT' || q.type === 'NUMBER') && Number(q.min) > Number(q.max)) {
        errors['qminmax-' + i] = 'Giá trị tối thiểu phải nhỏ hơn hoặc bằng tối đa';
      }
      if ((q.type === 'SINGLE' || q.type === 'MULTI')) {
        const opts = (q.options || []).filter((o) => (o.label || '').trim());
        if (!opts.length) errors['qopt-' + i] = valErr('Tên lựa chọn');
      }
    });
    if (qs.length && qs.every((q) => !q.type && !(q.title || '').trim())) {
      errors.questions = 'Bắt buộc phải có ít nhất 01 câu hỏi khảo sát';
    }
    return errors;
  }

  function saveSurvey(d, mode) {
    const store = persist();
    const now = nowLabel();
    if (mode === 'edit') {
      const item = findSurvey(d.id);
      if (!item) return null;
      Object.assign(item, {
        title: d.title.trim(),
        startDate: d.startDate,
        endDate: d.endDate,
        times: clampTimes(d.times),
        audience: d.audience,
        applyType: d.applyType,
        requireCheckin: d.audience === 'STORE' ? !!d.requireCheckin : false,
        applyItems: clone(d.applyItems || []),
        questions: clone(d.questions || []),
        updatedAt: now,
        updatedBy: 'THAO999'
      });
      return item;
    }
    const item = {
      id: uid('s'),
      code: genCode(store.surveys),
      title: d.title.trim(),
      startDate: d.startDate,
      endDate: d.endDate,
      times: clampTimes(d.times),
      audience: d.audience,
      applyType: d.applyType,
      status: 'ACTIVE',
      requireCheckin: d.audience === 'STORE' ? !!d.requireCheckin : false,
      hasResponses: false,
      createdAt: now,
      createdBy: 'THAO999',
      updatedAt: now,
      updatedBy: 'THAO999',
      applyItems: clone(d.applyItems || []),
      questions: clone(d.questions || [])
    };
    store.surveys.unshift(item);
    return item;
  }

  function breadcrumb(current) {
    return DMS.render('Breadcrumb', {
      items: [
        { label: 'Quản Lý Khảo Sát', route: '/survey/setting' },
        { label: current }
      ]
    });
  }
  function copyCell(text, inner) {
    return `${inner}<button type="button" class="display-copy" data-copy="${DMS.escape(text)}" title="Sao chép">⧉</button>`;
  }
  function queryParams() { return new URLSearchParams(location.hash.split('?')[1] || ''); }
  function fieldErr(errors, key) {
    return errors[key] ? `<div class="dms-form-item__error">${DMS.escape(errors[key])}</div>` : '';
  }
  function masterList(applyType) {
    const store = persist() || {};
    if (applyType === 'EMPLOYEE') return store.employees || [];
    if (applyType === 'STORE') return store.stores || [];
    if (applyType === 'ROUTE') return store.routes || [];
    return store.regions || [];
  }

  global.SurveyShared = {
    STATUSES, AUDIENCES, APPLY_STORE, APPLY_EMPLOYEE, QUESTION_TYPES,
    parseDmy, toDmy, nowLabel, todayDmy, monthRange, overlaps, inRange, monthsApart,
    catalogLabel, audienceLabel, applyLabel, qTypeLabel, applyOptions,
    uid, genCode, clampTimes, timesText,
    loadStore, persist, findSurvey, latestSurvey, surveyOptions, regionOptions,
    emptyQuestion, emptyDraft, getDraft, resetDraft, loadDraft, draftIsDirty, isLocked,
    validateDraft, saveSurvey, clone,
    breadcrumb, copyCell, queryParams, fieldErr, masterList
  };
})(window);
