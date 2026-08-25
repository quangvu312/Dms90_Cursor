/**
 * Hỗ Trợ — Xử Lý Yêu Cầu (Portal HO)
 * UI: DEV /support/ticket
 */
(function (global) {
  'use strict';

  const STATUSES = [
    { value: 'Khởi tạo', label: 'Khởi tạo' },
    { value: 'Đang xử lý', label: 'Đang xử lý' },
    { value: 'Từ chối', label: 'Từ chối' },
    { value: 'Đã giải quyết', label: 'Đã giải quyết' }
  ];
  const TERMINAL = { 'Từ chối': true, 'Đã giải quyết': true };

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
  function clone(obj) { return JSON.parse(JSON.stringify(obj)); }
  function catalogLabel(list, key) {
    return (list.find((x) => x.value === key || x.code === key) || {}).label || key || '';
  }
  function queryParams() { return new URLSearchParams(location.hash.split('?')[1] || ''); }
  function copyCell(text, inner) {
    return `${inner}<button type="button" class="display-copy" data-copy="${DMS.escape(text)}" title="Sao chép">⧉</button>`;
  }
  function fieldErr(errors, key) {
    return errors[key] ? `<div class="dms-form-item__error">${DMS.escape(errors[key])}</div>` : '';
  }
  function statusTag(status) {
    return DMS.render('StatusTag', { status: status || '' });
  }
  function isTerminal(status) { return !!TERMINAL[status]; }
  function allowedStatuses(current) {
    if (current === 'Khởi tạo') return STATUSES;
    if (current === 'Đang xử lý') return STATUSES.filter((s) => s.value !== 'Khởi tạo');
    return STATUSES.filter((s) => s.value === current);
  }
  function staffLabel(code, name) {
    if (!code) return '';
    return name ? `${code} - ${name}` : code;
  }

  function expandTickets(store) {
    const seeds = store.tickets || [];
    if (seeds.length >= 22) return;
    const statuses = ['Khởi tạo', 'Đang xử lý', 'Từ chối', 'Đã giải quyết'];
    let n = 62700;
    for (let i = 0; i < 20; i++) {
      const src = clone(seeds[i % seeds.length]);
      const st = store.stores[i % store.stores.length];
      const care = store.careStaff[i % store.careStaff.length];
      const asg = i % 3 === 0 ? store.assignees[i % store.assignees.length] : { code: '', name: '' };
      const status = statuses[i % statuses.length];
      src.id = 'x' + (i + 1);
      src.code = 'SP65973' + String(n++);
      src.storeCode = st.code;
      src.storeName = st.name;
      src.storePhone = st.phone;
      src.storeAddress = st.address;
      src.careStaffCode = care.code;
      src.careStaffName = care.name;
      src.assigneeCode = asg.code;
      src.assigneeName = asg.name;
      src.status = status;
      src.content = i % 4 === 0 ? '' : ('Nội dung hỗ trợ mẫu #' + (i + 1));
      if (status === 'Từ chối' || status === 'Đã giải quyết') {
        src.approvedAt = src.updatedAt;
        src.approvedBy = asg.code || 'THAO999';
        if (status === 'Từ chối' && !src.declineReason) src.declineReason = 'D1';
      } else {
        src.approvedAt = '';
        src.approvedBy = '';
      }
      if (isTerminal(status)) src.messages = src.messages || [];
      seeds.push(src);
    }
    store.tickets = seeds;
  }

  async function loadStore() {
    if (window.__supportStore) return window.__supportStore;
    const res = await fetch('data/support.json?v=20260814-support');
    if (!res.ok) throw new Error('Không tải được dữ liệu hỗ trợ');
    window.__supportStore = await res.json();
    expandTickets(window.__supportStore);
    return window.__supportStore;
  }
  function persist() { return window.__supportStore; }
  function findTicket(id) {
    return (window.__supportStore?.tickets || []).find((t) => String(t.id) === String(id));
  }
  function issueLabel(key) {
    return catalogLabel(persist()?.issueTypes || [], key);
  }
  function reasonLabel(key) {
    return catalogLabel(persist()?.reasons || [], key);
  }
  function declineLabel(key) {
    return catalogLabel(persist()?.declineReasons || [], key);
  }
  function storeOptions() {
    return (persist()?.stores || []).map((s) => ({ value: s.code, label: s.code + ' - ' + s.name }));
  }
  function careOptions() {
    return (persist()?.careStaff || []).map((s) => ({ value: s.code, label: s.code + ' - ' + s.name }));
  }
  function assigneeOptions() {
    return (persist()?.assignees || []).map((s) => ({ value: s.code, label: s.code + ' - ' + s.name }));
  }

  function breadcrumb() {
    return DMS.render('Breadcrumb', {
      items: [
        { label: 'Hỗ Trợ', route: '/support/ticket' },
        { label: 'Hỗ Trợ - Xử Lý Yêu Cầu' }
      ]
    });
  }

  global.SupportShared = {
    STATUSES, TERMINAL,
    parseDmy, toDmy, nowLabel, clone, queryParams, copyCell, fieldErr,
    statusTag, isTerminal, allowedStatuses, staffLabel,
    loadStore, persist, findTicket, issueLabel, reasonLabel, declineLabel,
    storeOptions, careOptions, assigneeOptions, breadcrumb
  };
})(window);
