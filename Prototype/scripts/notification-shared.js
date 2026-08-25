/**
 * Quản Lý Thông Báo — Cài Đặt + Lịch Sử (Portal HO)
 * UI: DEV /notify/setting, /notify/history
 */
(function (global) {
  'use strict';

  const SETTING_STATUSES = [
    { value: 'Khởi tạo', label: 'Khởi tạo' },
    { value: 'Đang xử lý', label: 'Đang xử lý' },
    { value: 'Đã gửi', label: 'Đã gửi' },
    { value: 'Thất bại', label: 'Thất bại' }
  ];
  const HISTORY_NOTIFY_STATUSES = [
    { value: 'Đang xử lý', label: 'Đang xử lý' },
    { value: 'Đã gửi', label: 'Đã gửi' },
    { value: 'Thất bại', label: 'Thất bại' }
  ];
  const RECEIVE_STATUSES = [
    { value: 'Chưa nhận', label: 'Chưa nhận' },
    { value: 'Chưa xem', label: 'Chưa xem' },
    { value: 'Đã xem', label: 'Đã xem' }
  ];
  const TYPE_TAG = { GENERAL: 'gold', PROMO: 'blue' };
  const DISPLAY_TAG = { NORMAL: 'blue', HIGHLIGHT: 'orange' };

  function pad(n) { return String(n).padStart(2, '0'); }
  function parseDmy(str) {
    if (!str) return null;
    const dmy = String(str).match(/^(\d{2})[\/\-](\d{2})[\/\-](\d{4})/);
    if (dmy) return new Date(Number(dmy[3]), Number(dmy[2]) - 1, Number(dmy[1]));
    return null;
  }
  function toDmy(d) {
    if (!d || isNaN(d.getTime())) return '';
    return `${pad(d.getDate())}-${pad(d.getMonth() + 1)}-${d.getFullYear()}`;
  }
  function nowLabel() {
    const d = new Date();
    return `${toDmy(d)} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  }
  function monthRange(today) {
    const t = today || new Date();
    return {
      from: toDmy(new Date(t.getFullYear(), t.getMonth(), 1)),
      to: toDmy(new Date(t.getFullYear(), t.getMonth() + 1, 0))
    };
  }
  function clone(obj) { return JSON.parse(JSON.stringify(obj)); }
  function queryParams() { return new URLSearchParams(location.hash.split('?')[1] || ''); }
  function copyCell(text, inner) {
    return `${inner}<button type="button" class="display-copy" data-copy="${DMS.escape(text)}" title="Sao chép">⧉</button>`;
  }
  function fieldErr(errors, key) {
    return errors[key] ? `<div class="dms-form-item__error">${DMS.escape(errors[key])}</div>` : '';
  }
  function catalogLabel(list, key) {
    return (list.find((x) => x.value === key || x.id === key) || {}).label || key || '';
  }
  function statusTag(status) {
    return DMS.render('StatusTag', { status: status || '' });
  }
  function typeTag(type) {
    const store = persist();
    const label = catalogLabel(store?.types || [], type);
    return DMS.render('Tag', { text: label, type: TYPE_TAG[type] || 'default' });
  }
  function displayTag(display) {
    const store = persist();
    const label = catalogLabel(store?.displays || [], display);
    return DMS.render('Tag', { text: label, type: DISPLAY_TAG[display] || 'default' });
  }
  function audienceLabel(key) {
    return catalogLabel(persist()?.audiences || [], key);
  }
  function regionTags(ids) {
    const all = persist()?.regions || [];
    return (ids || []).map((id) => {
      const r = all.find((x) => x.id === id);
      return DMS.render('Tag', { text: r ? r.label : id, type: 'blue' });
    }).join(' ');
  }
  function daysBetween(from, to) {
    if (!from || !to) return 0;
    return Math.round((to.getTime() - from.getTime()) / 86400000);
  }

  function expandSettings(store) {
    const list = store.settings || [];
    if (list.length >= 16) return;
    const types = ['GENERAL', 'PROMO'];
    const statuses = ['Khởi tạo', 'Đang xử lý', 'Đã gửi', 'Thất bại'];
    const displays = ['NORMAL', 'HIGHLIGHT'];
    for (let i = 0; i < 12; i++) {
      const src = clone(list[i % list.length]);
      src.id = 'nx' + (i + 1);
      src.code = 'NOTI00000004' + String(80 + i);
      src.title = src.title + ' (' + (i + 1) + ')';
      src.type = types[i % 2];
      src.status = statuses[i % 4];
      src.display = displays[i % 2];
      src.updatedBy = src.status === 'Khởi tạo' ? '' : 'THAO999';
      list.push(src);
    }
    store.settings = list;
  }

  function expandHistory(store) {
    const list = store.history || [];
    if (list.length >= 18) return;
    const extra = [];
    for (let i = 0; i < 12; i++) {
      const src = clone(list[i % list.length]);
      src.id = 'hx' + (i + 1);
      src.receiverCode = (store.employees[i % store.employees.length] || {}).code;
      src.receiverName = (store.employees[i % store.employees.length] || {}).name;
      src.receiverRole = (store.employees[i % store.employees.length] || {}).role;
      extra.push(src);
    }
    store.history = list.concat(extra);
  }

  async function loadStore() {
    if (window.__notifyStore) return window.__notifyStore;
    const res = await fetch('data/notification.json?v=20260814-support');
    if (!res.ok) throw new Error('Không tải được dữ liệu thông báo');
    window.__notifyStore = await res.json();
    expandSettings(window.__notifyStore);
    expandHistory(window.__notifyStore);
    return window.__notifyStore;
  }
  function persist() { return window.__notifyStore; }
  function findSetting(id) {
    return (window.__notifyStore?.settings || []).find((s) => String(s.id) === String(id));
  }
  function genCode() {
    const used = new Set((persist()?.settings || []).map((s) => s.code));
    let code = '';
    do {
      let n = '';
      for (let i = 0; i < 10; i++) n += Math.floor(Math.random() * 10);
      code = 'NOTI' + n;
    } while (used.has(code));
    return code;
  }
  function regionOptions() {
    return (persist()?.regions || []).map((r) => ({ value: r.id, label: r.label }));
  }
  function roleOptions() {
    return persist()?.roles || [];
  }
  function emptyDraft() {
    return {
      id: '', code: '', title: '', regions: [], audience: '', roles: [], employeeCodes: [],
      type: '', summary: '', contentHtml: '', display: '', status: 'Khởi tạo',
      autoSend: false, autoSendAt: '',
      _errors: {}, _src: '', _dirty: false, _locked: false
    };
  }
  function getDraft() {
    if (!window.__notifyDraft) window.__notifyDraft = emptyDraft();
    return window.__notifyDraft;
  }
  function resetDraft() { window.__notifyDraft = emptyDraft(); return window.__notifyDraft; }
  function loadDraft(item, mode) {
    const d = emptyDraft();
    if (item) {
      Object.assign(d, {
        id: mode === 'copy' ? '' : item.id,
        code: mode === 'copy' ? '' : item.code,
        title: item.title,
        regions: (item.regions || []).slice(),
        audience: item.audience,
        roles: (item.roles || []).slice(),
        employeeCodes: (item.employeeCodes || []).slice(),
        type: item.type,
        summary: item.summary,
        contentHtml: item.contentHtml,
        display: item.display,
        status: item.status,
        autoSend: !!item.autoSend,
        autoSendAt: item.autoSendAt || ''
      });
    }
    d._src = mode + (item?.id || '');
    d._locked = mode === 'view' || (mode === 'edit' && item && item.status !== 'Khởi tạo');
    window.__notifyDraft = d;
    return d;
  }

  function breadcrumb(current) {
    return DMS.render('Breadcrumb', {
      items: [
        { label: 'Quản Lý Thông Báo', route: '/notify/setting' },
        { label: current }
      ]
    });
  }

  global.NotifyShared = {
    SETTING_STATUSES, HISTORY_NOTIFY_STATUSES, RECEIVE_STATUSES,
    parseDmy, toDmy, nowLabel, monthRange, clone, queryParams, copyCell, fieldErr,
    statusTag, typeTag, displayTag, audienceLabel, regionTags, daysBetween,
    loadStore, persist, findSetting, genCode, regionOptions, roleOptions,
    emptyDraft, getDraft, resetDraft, loadDraft, breadcrumb, catalogLabel
  };
})(window);
