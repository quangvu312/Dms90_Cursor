/**
 * Quản Trị Hệ Thống — shared helpers
 * UI: DEV /system/*
 */
(function (global) {
  'use strict';

  let _store = null;
  let _load = null;

  function pad(n) { return String(n).padStart(2, '0'); }
  function parseDmy(str) {
    if (!str) return null;
    const m = String(str).match(/^(\d{2})[\/\-](\d{2})[\/\-](\d{4})/);
    if (m) return new Date(Number(m[3]), Number(m[2]) - 1, Number(m[1]));
    return null;
  }
  function nowLabel(sep) {
    const d = new Date();
    const s = sep || '-';
    return `${pad(d.getDate())}${s}${pad(d.getMonth() + 1)}${s}${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
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
  function labelsJoin(list, ids) {
    return (ids || []).map((id) => catalogLabel(list, id)).filter(Boolean).join(' · ');
  }

  function loadStore() {
    if (_store) return Promise.resolve(_store);
    if (_load) return _load;
    _load = fetch('data/system.json?v=20260814-system').then((r) => r.json()).then((data) => {
      _store = data;
      expandUsers(_store);
      expandMaster(_store);
      expandRoles(_store);
      expandAttrs(_store);
      expandConfigs(_store);
      expandLocations(_store);
      return _store;
    });
    return _load;
  }
  function persist() { return _store; }

  function expandUsers(store) {
    const list = store.users || [];
    if (list.length >= 16) return;
    for (let i = 0; i < 12; i++) {
      const src = clone(list[i % list.length]);
      src.id = 'ux' + (i + 1);
      src.code = 'USER' + String(1000 + i);
      src.name = src.name + ' ' + (i + 1);
      src.status = i % 4 === 0 ? 'Không hoạt động' : 'Hoạt động';
      src.lastLogin = i % 3 === 0 ? '' : src.lastLogin;
      list.push(src);
    }
    store.users = list;
  }
  function expandMaster(store) {
    const list = store.masterData || [];
    if (list.length >= 14) return;
    for (let i = 0; i < 8; i++) {
      const src = clone(list[i % list.length]);
      src.id = 'mx' + (i + 1);
      src.code = src.code + '_' + (i + 1);
      src.name = src.name + ' (' + (i + 1) + ')';
      list.push(src);
    }
    store.masterData = list;
  }
  function expandRoles(store) {
    const list = store.roles || [];
    if (list.length >= 14) return;
    for (let i = 0; i < 10; i++) {
      const src = clone(list[i % list.length]);
      src.id = 'rx' + (i + 1);
      src.name = src.name + ' copy ' + (i + 1);
      src.status = i % 5 === 0 ? 'Không hoạt động' : 'Hoạt động';
      list.push(src);
    }
    store.roles = list;
  }
  function expandAttrs(store) {
    const list = store.attributes || [];
    if (list.length >= 14) return;
    for (let i = 0; i < 10; i++) {
      const src = clone(list[i % list.length]);
      src.id = 'tx' + (i + 1);
      src.code = src.code + i;
      src.name = src.name + ' ' + (i + 1);
      list.push(src);
    }
    store.attributes = list;
  }
  function expandConfigs(store) {
    const list = store.generalConfigs || [];
    if (list.length >= 12) return;
    for (let i = 0; i < 8; i++) {
      const src = clone(list[i % list.length]);
      src.id = 'cx' + (i + 1);
      src.key = src.key + '_' + i;
      src.name = src.name + ' (' + (i + 1) + ')';
      list.push(src);
    }
    store.generalConfigs = list;
  }
  function expandLocations(store) {
    const list = store.locations || [];
    if (list.length >= 12) return;
    for (let i = 0; i < 8; i++) {
      const src = clone(list[i % list.length]);
      src.id = 'lx' + (i + 1);
      src.code = src.code + '_' + i;
      list.push(src);
    }
    store.locations = list;
  }

  function breadcrumb(current) {
    return DMS.render('Breadcrumb', {
      items: [
        { label: 'Quản Trị Hệ Thống', route: '/system/account' },
        { label: current }
      ]
    });
  }

  function emptyDraft(kind) {
    const base = { id: '', _src: '', _dirty: false, _view: false, _errors: {} };
    if (kind === 'user') {
      return Object.assign(base, {
        code: '', name: '', password: '', refCode: '', email: '', phone: '',
        gender: '', province: '', district: '', ward: '', address: '',
        permType: 'HO', hoRole: '', nppRole: '', regions: [], distributors: [],
        marketRole: '', marketAccount: '', status: 'Hoạt động'
      });
    }
    if (kind === 'master') return Object.assign(base, { code: '', name: '', type: '', refCode: '', refSystem: 'SFA' });
    if (kind === 'att') {
      return Object.assign(base, {
        year: '2026', days: [], workTime: '', lunch: '', hours: '', specials: [], status: 'Hoạt động'
      });
    }
    if (kind === 'loc') {
      return Object.assign(base, {
        code: '', startAddr: '', startRadius: '', endAddr: '', endRadius: '',
        applyTo: '', regions: [], employees: [], lat: '', lng: '',
        endDisabled: false, status: 'Hoạt động',
        province: '', district: '', ward: ''
      });
    }
    if (kind === 'cfg') {
      return Object.assign(base, {
        name: '', key: '', type: 'BOOLEAN', desc: '', target: '', group: '',
        editable: true, boolValue: false, textValue: '', value: ''
      });
    }
    if (kind === 'role') {
      return Object.assign(base, { name: '', kind: '', desc: '', status: 'Hoạt động', perms: {}, selectAll: false });
    }
    if (kind === 'attr') {
      return Object.assign(base, {
        code: '', name: '', dataType: '', required: false, status: 'Hoạt động',
        applyTo: 'PRODUCT', extra: [], values: []
      });
    }
    return base;
  }

  function draftKey(kind) { return '__sysDraft_' + kind; }
  function getDraft(kind) {
    const k = draftKey(kind);
    if (!window[k]) window[k] = emptyDraft(kind);
    return window[k];
  }
  function resetDraft(kind) {
    window[draftKey(kind)] = emptyDraft(kind);
    return window[draftKey(kind)];
  }
  function loadDraft(kind, item, view) {
    const d = emptyDraft(kind);
    Object.assign(d, clone(item), { _src: (view ? 'view' : 'edit') + item.id, _dirty: false, _view: !!view });
    window[draftKey(kind)] = d;
    return d;
  }

  function prevMonth(mmYyyy) {
    const m = String(mmYyyy || '').match(/^(\d{2})\/(\d{4})$/);
    if (!m) return mmYyyy;
    let mo = Number(m[1]) - 1;
    let y = Number(m[2]);
    if (mo < 1) { mo = 12; y -= 1; }
    return pad(mo) + '/' + y;
  }
  function nextMonth(mmYyyy) {
    const m = String(mmYyyy || '').match(/^(\d{2})\/(\d{4})$/);
    if (!m) {
      const d = new Date();
      return pad(d.getMonth() + 1) + '/' + d.getFullYear();
    }
    let mo = Number(m[1]) + 1;
    let y = Number(m[2]);
    if (mo > 12) { mo = 1; y += 1; }
    return pad(mo) + '/' + y;
  }
  function hoursFromRange(work, lunch) {
    function mins(t) {
      const p = String(t || '').split(':');
      if (p.length < 2) return 0;
      return Number(p[0]) * 60 + Number(p[1]);
    }
    const wr = String(work || '').split(' - ');
    const lr = String(lunch || '').split(' - ');
    if (wr.length < 2) return '';
    let h = (mins(wr[1]) - mins(wr[0])) / 60;
    if (lr.length === 2) h -= (mins(lr[1]) - mins(lr[0])) / 60;
    return h.toFixed(2);
  }

  global.SystemShared = {
    parseDmy, nowLabel, clone, queryParams, copyCell, fieldErr, catalogLabel, labelsJoin,
    loadStore, persist, breadcrumb, emptyDraft, getDraft, resetDraft, loadDraft,
    prevMonth, nextMonth, hoursFromRange
  };
})(window);
