/**
 * SaleMan App — shared mock + helpers (cùng process với Web DMS)
 */
(function (global) {
  'use strict';

  const AUTH_KEY = 'dms-sales-app-auth';

  global.DMSShared = global.DMSShared || {
    customers: [],
    products: [],
    orders: [],
    employees: []
  };

  async function loadSalesAppStore() {
    if (global.__salesAppStore) return global.__salesAppStore;
    const res = await fetch('data/sales-app.json?v=20260820-ts');
    const data = await res.json();
    global.__salesAppStore = data;
    global.__salesAppState = global.__salesAppState || defaultState();
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
      cart: {},
      orderStatus: 'Khởi tạo',
      custTab: 'cham-soc',
      custQ: '',
      contractQ: '',
      contractFilter: { customer: '', status: '', from: '', to: '' },
      contractDraft: { customer: '', status: '', from: '', to: '' },
      contractFilterOpen: false,
      contractLoading: false,
      tsQ: '',
      tsTag: '',
      tsBrand: '',
      tsCatalog: '',
      tsPreview: null
    };
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

  function isAuthed() { return sessionStorage.getItem(AUTH_KEY) === '1'; }
  function login() { sessionStorage.setItem(AUTH_KEY, '1'); }
  function logout() { sessionStorage.removeItem(AUTH_KEY); }

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
    filterContracts, findContract, fmtDate, downloadMockPdf
  };
})(window);
