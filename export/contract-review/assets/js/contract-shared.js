/**
 * Quản Lý Hợp Đồng — mock store + helpers
 * UI: Contract_List.png / Contract_Create.png
 */
(function (global) {
  'use strict';

  const STATUS_TAG = {
    'Khởi tạo': 'purple',
    'Đã duyệt': 'green',
    'Hết hạn': 'red'
  };

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
  function nowLabel() {
    const d = new Date();
    return `${toDmy(d)} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  }
  function clone(obj) { return JSON.parse(JSON.stringify(obj)); }
  function queryParams() { return new URLSearchParams(location.hash.split('?')[1] || ''); }
  function fieldErr(errors, key) {
    return errors[key] ? `<div class="dms-form-item__error">${DMS.escape(errors[key])}</div>` : '';
  }
  function catalogLabel(list, key) {
    return (list.find((x) => x.value === key || x.id === key) || {}).label || key || '';
  }
  function typeMeta(type) {
    return (persist()?.types || []).find((t) => t.value === type) || { value: type, label: type, shortLabel: type };
  }
  function statusTag(status) {
    return DMS.render('Tag', { text: status || '', type: STATUS_TAG[status] || 'default' });
  }
  function typeTag(type) {
    const t = typeMeta(type);
    return DMS.render('Tag', { text: t.shortLabel || t.label, type: 'cyan' });
  }

  async function loadStore() {
    if (window.__contractStore) return window.__contractStore;
    if (window.__CONTRACT_SEED) {
      window.__contractStore = JSON.parse(JSON.stringify(window.__CONTRACT_SEED));
      return window.__contractStore;
    }
    throw new Error('Không tải được dữ liệu hợp đồng');
  }
  function persist() { return window.__contractStore; }
  function findContract(id) {
    return (window.__contractStore?.contracts || []).find((c) => String(c.id) === String(id));
  }
  function isCodeTaken(code, exceptId) {
    const needle = String(code || '').trim().toLowerCase();
    if (!needle) return false;
    return (persist()?.contracts || []).some((c) => {
      if (exceptId && String(c.id) === String(exceptId)) return false;
      return String(c.contractCode || '').trim().toLowerCase() === needle;
    });
  }

  function customerGroupOptions() {
    return (persist()?.customerGroups || []).map((g) => ({ value: g.id, label: g.label }));
  }
  function customerOptions() {
    return (persist()?.customers || []).map((c) => ({
      value: c.id,
      label: `${c.code} - ${c.name}`
    }));
  }
  function employeeOptions() {
    return (persist()?.employees || []).map((e) => ({
      value: e.id,
      label: `${e.code} - ${e.name}`
    }));
  }
  function groupLabels(ids) {
    const all = persist()?.customerGroups || [];
    return (ids || []).map((id) => (all.find((g) => g.id === id) || {}).label || id);
  }
  function customerLabels(ids) {
    const all = persist()?.customers || [];
    return (ids || []).map((id) => {
      const c = all.find((x) => x.id === id);
      return c ? `${c.code} - ${c.name}` : id;
    });
  }
  function employeeLabels(ids) {
    const all = persist()?.employees || [];
    return (ids || []).map((id) => {
      const e = all.find((x) => x.id === id);
      return e ? `${e.code} - ${e.name}` : id;
    });
  }

  function emptyDraft() {
    return {
      id: '',
      contractCode: '',
      name: '',
      type: '',
      status: 'Khởi tạo',
      applicableObjectType: '',
      applicableCustomerGroups: [],
      applicableCustomers: [],
      viewers: [],
      file: null,
      startDate: '',
      endDate: '',
      description: '',
      createdBy: '',
      createdAt: '',
      _errors: {},
      _src: '',
      _dirty: false,
      _locked: false
    };
  }
  function getDraft() {
    if (!window.__contractDraft) window.__contractDraft = emptyDraft();
    return window.__contractDraft;
  }
  function resetDraft() { window.__contractDraft = emptyDraft(); return window.__contractDraft; }
  function loadDraft(item, mode) {
    const d = emptyDraft();
    if (item) {
      Object.assign(d, {
        id: item.id,
        contractCode: item.contractCode,
        name: item.name,
        type: item.type,
        status: item.status,
        applicableObjectType: item.applicableObjectType || '',
        applicableCustomerGroups: clone(item.applicableCustomerGroups || []),
        applicableCustomers: clone(item.applicableCustomers || []),
        viewers: clone(item.viewers || []),
        file: item.file ? clone(item.file) : null,
        startDate: item.startDate || '',
        endDate: item.endDate || '',
        description: item.description || '',
        createdBy: item.createdBy || '',
        createdAt: item.createdAt || ''
      });
    }
    d._src = (mode || 'view') + (item?.id || '');
    d._locked = mode === 'view' || mode === 'print';
    d._dirty = false;
    d._errors = {};
    window.__contractDraft = d;
    return d;
  }

  function breadcrumb(extra) {
    const items = [
      { label: 'Quản lý hợp đồng', route: '/contract/list' },
      { label: 'Danh sách hợp đồng', route: extra ? '/contract/list' : undefined }
    ];
    if (extra) items.push({ label: extra });
    return DMS.render('Breadcrumb', { items });
  }

  global.ContractShared = {
    STATUS_TAG,
    parseDmy, toDmy, nowLabel, clone, queryParams, fieldErr, catalogLabel,
    typeMeta, statusTag, typeTag,
    loadStore, persist, findContract, isCodeTaken,
    customerGroupOptions, customerOptions, employeeOptions,
    groupLabels, customerLabels, employeeLabels,
    emptyDraft, getDraft, resetDraft, loadDraft, breadcrumb
  };
})(window);
