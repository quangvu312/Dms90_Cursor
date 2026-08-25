/**
 * SaleMan App — shared mock + helpers (cùng process với Web DMS)
 */
(function (global) {
  'use strict';

  const AUTH_KEY = 'dms90_auth_session';
  const SESSION_TTL_MS = 24 * 60 * 60 * 1000;
  const VALID_USERNAME = 'admin';
  const VALID_PASSWORD = '123456';
  const ADMIN_DISPLAY_NAME = 'Vu_La';
  const LEGACY_ADMIN_DISPLAY_NAMES = ['Qin Qin'];

  function normalizeDisplayName(role, displayName) {
    if (role === 'admin' || !role) {
      if (!displayName || LEGACY_ADMIN_DISPLAY_NAMES.indexOf(displayName) >= 0) {
        return ADMIN_DISPLAY_NAME;
      }
      return displayName;
    }
    return displayName || 'NPP';
  }

  function readSession() {
    try {
      const raw = localStorage.getItem(AUTH_KEY);
      if (!raw) return null;
      const session = JSON.parse(raw);
      if (!session.expiresAt || Date.now() > session.expiresAt) {
        localStorage.removeItem(AUTH_KEY);
        return null;
      }
      const displayName = normalizeDisplayName(session.role, session.displayName);
      if (displayName !== session.displayName) {
        session.displayName = displayName;
        localStorage.setItem(AUTH_KEY, JSON.stringify(session));
      }
      return session;
    } catch (e) {
      localStorage.removeItem(AUTH_KEY);
      return null;
    }
  }

  function notifyAuthChange() {
    window.dispatchEvent(new Event('dms90:auth-change'));
  }

  function isAuthed() { return !!readSession(); }

  function login(username, password) {
    const trimmed = String(username || '').trim();
    if (trimmed !== VALID_USERNAME || password !== VALID_PASSWORD) return false;
    const session = {
      username: trimmed,
      role: 'admin',
      displayName: ADMIN_DISPLAY_NAME,
      expiresAt: Date.now() + SESSION_TTL_MS
    };
    localStorage.setItem(AUTH_KEY, JSON.stringify(session));
    notifyAuthChange();
    return true;
  }

  function logout() {
    localStorage.removeItem(AUTH_KEY);
    notifyAuthChange();
  }

  global.DMSShared = global.DMSShared || {
    customers: [],
    products: [],
    orders: [],
    employees: []
  };

  async function loadSalesAppStore() {
    if (global.__salesAppStore) return global.__salesAppStore;
    const res = await fetch('data/sales-app.json?v=20260820-create-order');
    const data = await res.json();
    global.__salesAppStore = data;
    global.__salesAppState = global.__salesAppState || defaultState();
    const st = global.__salesAppState;
    (data.visits || []).forEach((v) => {
      if (v.status && !st.visitStatus[v.code]) st.visitStatus[v.code] = v.status;
    });
    if (!st.activeVisitId) {
      const visiting = (data.visits || []).find((v) => v.status === 'VISITING');
      if (visiting) st.activeVisitId = visiting.code;
    }
    syncShared(data);
    return data;
  }

  function syncShared(data) {
    const sh = global.DMSShared;
    const visits = (data.visits || []).map((v) => ({
      id: v.code, code: v.code, name: v.name, phone: v.phone, address: v.address
    }));
    const care = (data.careCustomers || []).map((v) => ({
      id: v.code, code: v.code, name: v.name, phone: v.phone, address: v.address
    }));
    sh.customers = visits.concat(care);
    sh.products = (data.products || []).map((p) => ({ id: p.id, code: p.id, name: p.name, uom: p.uom, price: p.price }));
    sh.orders = data.orders || [];
    sh.employees = data.employee ? [data.employee] : [];
    sh.contracts = data.contracts || [];
  }

  function defaultState() {
    return {
      visitStarted: {},
      visitStatus: {},
      visitMissions: {},
      visitCheckin: {},
      activeVisitId: '',
      workCheckedIn: true,
      visitQ: '',
      visitSort: 'order',
      visitFilter: { scope: '', status: '' },
      visitFilterOpen: false,
      visitSortOpen: false,
      visitEndReasonOpen: false,
      visitEndReason: '',
      cart: {},
      cartUom: {},
      orderStatus: 'Đã duyệt',
      orderType: 'Đơn đặt',
      orderTypeOpen: false,
      orderProdQ: '',
      orderProdFilter: { industry: '', inStock: '' },
      orderUomOpen: false,
      orderUomProductId: '',
      orderProdDetailId: '',
      orderNote: '',
      custTab: 'cham-soc',
      custQ: '',
      contractQ: '',
      contractFilter: { customer: '', status: '', from: '', to: '' },
      contractDraft: { customer: '', status: '', from: '', to: '' },
      contractFilterOpen: false,
      contractLoading: false,
      reportKpiTab: 'month'
    };
  }

  const VISIT_MISSIONS = [
    { key: 'display', label: 'Bày hàng', path: 'bay-hang', required: true, icon: 'merchandising', showInList: true },
    { key: 'inventory', label: 'Tồn kho', path: 'ton-kho', required: false, icon: 'stock', showInList: true },
    { key: 'survey', label: 'Khảo sát', path: 'khao-sat', required: false, icon: 'surveyStaff', showInList: true },
    { key: 'order', label: 'Đặt hàng', path: 'don-hang', required: false, icon: 'shopping', showInList: true },
    { key: 'showcase', label: 'Chương trình trưng bày', path: 'trung-bay', required: false, icon: 'showcase', showInList: true },
    { key: 'accumulate', label: 'Chương trình tích lũy', path: 'tich-luy', required: false, icon: 'accumulation', showInList: true },
    { key: 'note', label: 'Ghi chú', path: 'ghi-chu', required: false, icon: 'note', showInList: false },
    { key: 'surveyCheckin', label: 'Checkin khảo sát', path: 'checkin-khao-sat', required: false, icon: 'checkin', showInList: false }
  ];

  function liveVisitStatus(code) {
    const st = state();
    if (st.activeVisitId && String(st.activeVisitId) === String(code)) return 'VISITING';
    if (st.visitStatus[code]) return st.visitStatus[code];
    const v = findVisit(code);
    return (v && v.status) || 'NOT_VISIT';
  }

  function visitCta(v) {
    const status = liveVisitStatus(v.code);
    const off = v.inRoute === false;
    if (status === 'VISITING') return { label: 'Đang viếng thăm', kind: 'visiting' };
    if (status === 'VISITED') return { label: off ? 'Viếng thăm ngoại tuyến' : 'Viếng thăm lại', kind: 'again' };
    if (off) return { label: 'Viếng thăm ngoại tuyến', kind: 'off' };
    return { label: 'Viếng thăm', kind: 'start' };
  }

  function missionsOf(code) {
    const st = state();
    if (!st.visitMissions[code]) st.visitMissions[code] = {};
    return st.visitMissions[code];
  }

  function requiredMissionsPending(code) {
    const done = missionsOf(code);
    return VISIT_MISSIONS.filter((m) => m.required && !done[m.key]);
  }

  function filterVisits() {
    const d = store();
    const st = state();
    const q = String(st.visitQ || '').toLowerCase().trim();
    const f = st.visitFilter || { scope: '', status: '' };
    let rows = (d.visits || []).slice();
    rows = rows.filter((v) => {
      const status = liveVisitStatus(v.code);
      const off = v.inRoute === false;
      if (f.scope === 'in' && off) return false;
      if (f.scope === 'off' && !off) return false;
      if (f.status === 'NOT_VISIT' && status !== 'NOT_VISIT') return false;
      if (f.status === 'VISITING' && status !== 'VISITING') return false;
      if (f.status === 'VISITED' && status !== 'VISITED') return false;
      if (q) {
        const hay = [v.code, v.name, v.phone, v.address].join(' ').toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
    if (st.visitSort === 'distance') {
      rows.sort((a, b) => (Number(a.distanceM) || 0) - (Number(b.distanceM) || 0));
    } else {
      rows.sort((a, b) => (a.visitOrder || 0) - (b.visitOrder || 0));
    }
    return rows;
  }

  function store() { return global.__salesAppStore; }
  function state() {
    if (!global.__salesAppState) global.__salesAppState = defaultState();
    return global.__salesAppState;
  }

  function emptyContractFilter() {
    return { customer: '', status: '', from: '', to: '' };
  }

  function managedCustomers() {
    return store().managedCustomers || [];
  }

  function myContracts() {
    const codes = new Set(managedCustomers().map((c) => c.code));
    return (store().contracts || []).filter((c) => codes.has(c.customerCode));
  }

  function hasContractFilter() {
    const st = state();
    const f = st.contractFilter || emptyContractFilter();
    return !!(String(st.contractQ || '').trim() || f.customer || f.status || f.from || f.to);
  }

  function filterContracts() {
    const st = state();
    const f = st.contractFilter || emptyContractFilter();
    const q = String(st.contractQ || '').trim().toLowerCase();
    return myContracts().filter((c) => {
      if (q) {
        const hay = [c.code, c.name, c.customerCode, c.customerName].join(' ').toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (f.customer && c.customerCode !== f.customer) return false;
      if (f.status && c.status !== f.status) return false;
      if (f.from && c.endDate < f.from) return false;
      if (f.to && c.startDate > f.to) return false;
      return true;
    });
  }

  function findContract(id) {
    return myContracts().find((c) => String(c.id) === String(id) || String(c.code) === String(id)) || null;
  }

  function fmtDate(iso) {
    if (!iso) return '—';
    const p = String(iso).split('-');
    if (p.length !== 3) return iso;
    return p[2] + '/' + p[1] + '/' + p[0];
  }

  function downloadMockPdf(filename) {
    const body = [
      '%PDF-1.4',
      '1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj',
      '2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj',
      '3 0 obj<</Type/Page/Parent 2 0 R/MediaBox[0 0 612 792]/Contents 4 0 R/Resources<</Font<</F1 5 0 R>>>>>>endobj',
      '4 0 obj<</Length 68>>stream',
      'BT /F1 16 Tf 72 720 Td (' + String(filename || 'hop-dong.pdf').replace(/[()\\]/g, '') + ') Tj ET',
      'endstream endobj',
      '5 0 obj<</Type/Font/Subtype/Type1/BaseFont/Helvetica>>endobj',
      'xref',
      '0 6',
      '0000000000 65535 f ',
      'trailer<</Size 6/Root 1 0 R>>',
      'startxref',
      '0',
      '%%EOF'
    ].join('\n');
    const blob = new Blob([body], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || 'hop-dong.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1500);
  }

  function parseSalesPath(path) {
    const raw = (path || '').split('?')[0].replace(/\/+$/, '') || '/sales-app';
    const parts = raw.split('/').filter(Boolean);
    return { raw, parts };
  }

  function findVisit(id) {
    const d = store();
    return (d.visits || []).concat(d.careCustomers || []).find((x) => String(x.code) === String(id))
      || { code: id, name: 'NORTH - lần 3 - 254', phone: '—', address: 'NORTH - lần 3 - 254, Phường Bắc Giang, BẮC NINH', distance: '' };
  }

  function findOrder(id) {
    return (store().orders || []).find((o) => o.id === id) || null;
  }

  function findNewCustomer(id) {
    const groups = store().newCustomers || [];
    for (let i = 0; i < groups.length; i++) {
      const hit = (groups[i].items || []).find((x) => x.id === id);
      if (hit) return hit;
    }
    return null;
  }

  global.SalesAppShared = {
    loadSalesAppStore, store, state, isAuthed, login, logout,
    parseSalesPath, findVisit, findOrder, findNewCustomer, AUTH_KEY,
    emptyContractFilter, managedCustomers, myContracts, hasContractFilter,
    filterContracts, findContract, fmtDate, downloadMockPdf,
    VISIT_MISSIONS, liveVisitStatus, visitCta, missionsOf, requiredMissionsPending, filterVisits
  };
})(window);
