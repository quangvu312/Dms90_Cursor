/**
 * Quản Lý Hợp Đồng — mock store + helpers
 * Phân hệ (module): template | customer
 * Loại hợp đồng (type): Common Data CONTRACT_TYPE
 */
(function (global) {
  'use strict';

  const ALLOWED_EXTS = ['pdf', 'doc', 'docx', 'txt'];
  const ACCEPT_ATTR = '.pdf,.doc,.docx,.txt,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain';
  const MIME = {
    pdf: 'application/pdf',
    doc: 'application/msword',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    txt: 'text/plain'
  };
  const MODULES = {
    template: {
      key: 'template',
      label: 'Hợp đồng mẫu',
      listPath: '/contract/templates',
      listTitle: 'Danh sách Hợp đồng mẫu'
    },
    customer: {
      key: 'customer',
      label: 'Hợp đồng khách hàng',
      listPath: '/contract/customers',
      listTitle: 'Danh sách Hợp đồng khách hàng'
    }
  };

  function pad(n) { return String(n).padStart(2, '0'); }
  function statusTag(status) {
    return DMS.render('StatusTag', { status: status || '' });
  }
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
  function nowLabel() {
    const d = new Date();
    return `${toDmy(d)} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  }
  function formatContractCode(date, moduleKey) {
    const d = date instanceof Date && !isNaN(date.getTime()) ? date : new Date();
    const prefix = moduleKey === 'template' ? 'TMP' : 'CUS';
    const dd = pad(d.getDate());
    const mo = pad(d.getMonth() + 1);
    const yy = String(d.getFullYear()).slice(-2);
    const hh = pad(d.getHours());
    const mi = pad(d.getMinutes());
    const ss = pad(d.getSeconds());
    return `${prefix}${dd}${mo}${yy}${hh}${mi}${ss}`;
  }
  function nextContractCode(date, moduleKey) {
    let t = date instanceof Date && !isNaN(date.getTime()) ? new Date(date.getTime()) : new Date();
    let code = formatContractCode(t, moduleKey);
    let n = 0;
    while (isCodeTaken(code) && n < 120) {
      t = new Date(t.getTime() + 1000);
      code = formatContractCode(t, moduleKey);
      n += 1;
    }
    return code;
  }
  function clone(obj) { return JSON.parse(JSON.stringify(obj)); }
  function queryParams() {
    const fromHash = location.hash.split('?')[1] || '';
    const fromSearch = (location.search || '').replace(/^\?/, '');
    return new URLSearchParams(fromHash || fromSearch);
  }
  function fieldErr(errors, key) {
    return errors[key] ? `<div class="dms-form-item__error">${DMS.escape(errors[key])}</div>` : '';
  }

  function fileExt(file) {
    const name = String((file && file.name) || '');
    const m = name.match(/\.([a-z0-9]+)$/i);
    return m ? m[1].toLowerCase() : '';
  }
  function fileKind(file) {
    const ext = fileExt(file);
    const type = String((file && file.type) || '').toLowerCase();
    if (ext === 'pdf' || type === 'application/pdf') return 'pdf';
    if (ext === 'txt' || type === 'text/plain') return 'txt';
    if (ext === 'doc' || ext === 'docx' || type === MIME.doc || type === MIME.docx) return 'word';
    return 'other';
  }
  function isAllowedFile(file) {
    const ext = fileExt(file);
    if (ALLOWED_EXTS.indexOf(ext) !== -1) return true;
    const type = String((file && file.type) || '').toLowerCase();
    return type === MIME.pdf || type === MIME.doc || type === MIME.docx || type === MIME.txt;
  }
  function fileTypeLabel(file) {
    const ext = fileExt(file);
    if (ext) return ext.toUpperCase();
    const kind = fileKind(file);
    if (kind === 'pdf') return 'PDF';
    if (kind === 'txt') return 'TXT';
    if (kind === 'word') return 'DOC';
    return 'FILE';
  }
  function formatSize(bytes) {
    const n = Number(bytes);
    if (!n && n !== 0) return '';
    if (n < 1024) return n + ' B';
    if (n < 1024 * 1024) return (n / 1024).toFixed(n < 10 * 1024 ? 1 : 0) + ' KB';
    return (n / (1024 * 1024)).toFixed(1) + ' MB';
  }
  function typeOptionsFrom(list) {
    return (list || [])
      .filter((t) => !t.status || t.status === 'Hoạt động')
      .map((t) => ({
        value: t.code,
        label: t.name,
        shortLabel: t.shortName || t.name
      }));
  }
  function typeMeta(type) {
    const raw = (persist()?.contractTypes || []).find((t) => t.code === type);
    if (raw) return { value: raw.code, label: raw.name, shortLabel: raw.shortName || raw.name };
    const opt = (persist()?.types || []).find((t) => t.value === type);
    return opt || { value: type, label: type, shortLabel: type };
  }
  function typeTag(type) {
    const t = typeMeta(type);
    return DMS.render('Tag', { text: t.shortLabel || t.label, type: 'cyan' });
  }
  function moduleCfg(key) {
    return MODULES[key] || MODULES.customer;
  }

  async function loadStore() {
    if (window.__contractStore) return window.__contractStore;
    const [contractRes, typeRes] = await Promise.all([
      fetch('data/contract.json?v=20260820-ctnosign'),
      fetch('data/common-data-contract-types.json?v=20260820-ctnosign')
    ]);
    if (!contractRes.ok) throw new Error('Không tải được dữ liệu hợp đồng');
    if (!typeRes.ok) throw new Error('Không tải được danh mục Loại hợp đồng');
    const store = await contractRes.json();
    const typeDoc = await typeRes.json();
    store.contractTypes = typeDoc.contractTypes || [];
    store.types = typeOptionsFrom(store.contractTypes);
    window.__contractStore = store;
    (window.__contractStore.contracts || []).forEach(normalizeContract);
    return window.__contractStore;
  }
  function persist() { return window.__contractStore; }
  function findContract(id) {
    return (window.__contractStore?.contracts || []).find((c) => String(c.id) === String(id));
  }
  function contractsByModule(moduleKey) {
    return (persist()?.contracts || []).filter((c) => (c.module || 'customer') === moduleKey);
  }
  function isCodeTaken(code, exceptId) {
    const needle = String(code || '').trim().toLowerCase();
    if (!needle) return false;
    return (persist()?.contracts || []).some((c) => {
      if (exceptId && String(c.id) === String(exceptId)) return false;
      return String(c.contractCode || '').trim().toLowerCase() === needle;
    });
  }

  function normalizeFiles(item) {
    if (!item) return [];
    if (Array.isArray(item.files)) return clone(item.files).filter((f) => f && f.name);
    if (item.file && item.file.name) return [clone(item.file)];
    return [];
  }
  function firstCustomerId(item) {
    if (!item) return '';
    if (item.customerId) return String(item.customerId);
    const ids = item.applicableCustomers || [];
    return ids.length ? String(ids[0]) : '';
  }
  function normalizeContract(item) {
    if (!item) return item;
    item.files = normalizeFiles(item);
    item.module = item.module === 'template' ? 'template' : 'customer';
    item.customerId = item.module === 'customer' ? firstCustomerId(item) : '';
    delete item.file;
    delete item.viewers;
    delete item.applicableObjectType;
    delete item.applicableCustomerGroups;
    delete item.applicableCustomers;
    delete item.signedDate;
    delete item.signDate;
    return item;
  }

  function allCustomers() {
    return persist()?.customers || [];
  }
  function findCustomer(id) {
    return allCustomers().find((c) => String(c.id) === String(id));
  }
  function customerRecord(id) {
    if (!id) return null;
    const c = findCustomer(id);
    if (c) return clone(c);
    return { id, code: id, name: id, phone: '', address: '', status: '' };
  }
  function customerStatusTag(status) {
    return DMS.render('StatusTag', { status: status || '' });
  }
  function customerStatusOptions() {
    return persist()?.customerStatuses || [
      { value: 'Hoạt động', label: 'Hoạt động' },
      { value: 'Ngưng hoạt động', label: 'Ngưng hoạt động' }
    ];
  }
  function filterCustomerMaster(list, q, status) {
    const needle = String(q || '').trim().toLowerCase();
    return (list || []).filter((c) => {
      if (status && c.status !== status) return false;
      if (!needle) return true;
      const hay = `${c.code || ''} ${c.name || ''} ${c.id || ''} ${c.phone || ''} ${c.address || ''}`.toLowerCase();
      return hay.indexOf(needle) !== -1;
    });
  }
  function customerLabel(id) {
    const c = customerRecord(id);
    if (!c) return '';
    return `${c.code} - ${c.name}`;
  }

  function emptyPick() {
    return {
      open: false,
      q: '',
      status: '',
      appliedQ: '',
      appliedStatus: '',
      page: 1,
      pageSize: 10,
      selected: ''
    };
  }
  function emptyCustList() {
    return { q: '', page: 1, pageSize: 10 };
  }

  function emptyDraft(moduleKey) {
    const module = moduleKey === 'template' ? 'template' : 'customer';
    return {
      id: '',
      module,
      contractCode: '',
      name: '',
      type: '',
      status: 'Khởi tạo',
      customerId: '',
      files: [],
      startDate: '',
      endDate: '',
      description: '',
      createdBy: '',
      createdAt: '',
      updatedBy: '',
      updatedAt: '',
      _errors: {},
      _src: '',
      _dirty: false,
      _locked: false,
      _module: module,
      _preview: null,
      _pick: emptyPick(),
      _custList: emptyCustList()
    };
  }
  function getDraft(moduleKey) {
    const key = moduleKey === 'template' ? '__contractDraftTemplate' : '__contractDraftCustomer';
    if (!window[key]) window[key] = emptyDraft(moduleKey);
    return window[key];
  }
  function resetDraft(moduleKey) {
    const key = moduleKey === 'template' ? '__contractDraftTemplate' : '__contractDraftCustomer';
    window[key] = emptyDraft(moduleKey);
    return window[key];
  }
  function loadDraft(item, mode, moduleKey) {
    const d = emptyDraft(moduleKey);
    if (item) {
      Object.assign(d, {
        id: item.id,
        module: moduleKey,
        contractCode: item.contractCode,
        name: item.name,
        type: item.type,
        status: item.status,
        customerId: moduleKey === 'customer' ? firstCustomerId(item) : '',
        files: normalizeFiles(item),
        startDate: item.startDate || '',
        endDate: item.endDate || '',
        description: item.description || '',
        createdBy: item.createdBy || '',
        createdAt: item.createdAt || '',
        updatedBy: item.updatedBy || '',
        updatedAt: item.updatedAt || ''
      });
    }
    d._src = (mode || 'view') + (item?.id || '');
    d._locked = mode === 'view' || mode === 'print';
    d._dirty = false;
    d._errors = {};
    d._preview = null;
    d._pick = emptyPick();
    d._custList = emptyCustList();
    const key = moduleKey === 'template' ? '__contractDraftTemplate' : '__contractDraftCustomer';
    window[key] = d;
    return d;
  }

  function breadcrumb(cfg, extra) {
    const items = [
      { label: 'Quản lý hợp đồng' },
      { label: cfg.label, route: extra ? cfg.listPath : undefined }
    ];
    if (extra) items.push({ label: extra });
    return DMS.render('Breadcrumb', { items });
  }

  function downloadFile(file) {
    if (!file) return false;
    let href = file.objectUrl || file.url || '';
    let revoke = false;
    if (!href && file.textContent != null) {
      href = URL.createObjectURL(new Blob([String(file.textContent)], { type: 'text/plain;charset=utf-8' }));
      revoke = true;
    }
    if (!href) return false;
    const a = document.createElement('a');
    a.href = href;
    a.download = file.name || 'download';
    a.rel = 'noopener';
    document.body.appendChild(a);
    a.click();
    a.remove();
    if (revoke) setTimeout(() => URL.revokeObjectURL(href), 1500);
    return true;
  }

  global.ContractFile = {
    ALLOWED_EXTS, ACCEPT_ATTR, MIME,
    ext: fileExt, kind: fileKind, isAllowed: isAllowedFile,
    typeLabel: fileTypeLabel, formatSize
  };

  global.ContractShared = {
    MODULES, moduleCfg,
    parseDmy, toDmy, nowLabel, formatContractCode, nextContractCode, clone, queryParams, fieldErr,
    typeMeta, statusTag, typeTag, typeOptionsFrom,
    loadStore, persist, findContract, contractsByModule, isCodeTaken, normalizeFiles, fileTypeLabel,
    allCustomers, findCustomer, customerRecord, customerStatusTag, customerStatusOptions,
    filterCustomerMaster, customerLabel, emptyPick, emptyCustList,
    emptyDraft, getDraft, resetDraft, loadDraft, breadcrumb, downloadFile,
    firstCustomerId
  };
})(window);
