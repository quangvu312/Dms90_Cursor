/**
 * Telling Story — mock store + helpers
 * Catalog / Story / Segment / display window (frontend mock)
 */
(function (global) {
  'use strict';

  function pad(n) { return String(n).padStart(2, '0'); }
  function clone(obj) { return JSON.parse(JSON.stringify(obj || null)); }
  function queryParams() { return new URLSearchParams(location.hash.split('?')[1] || ''); }
  function fieldErr(errors, key) {
    return errors[key] ? `<div class="dms-form-item__error">${DMS.escape(errors[key])}</div>` : '';
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
  function today() {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }
  function optLabel(list, value) {
    const hit = (list || []).find((x) => String(x.value) === String(value) || String(x.id) === String(value));
    return hit ? (hit.label || hit.name || value) : (value || '');
  }
  function optLabels(list, values) {
    return (values || []).map((v) => optLabel(list, v)).filter(Boolean);
  }
  function formatSize(bytes) {
    const n = Number(bytes);
    if (!n && n !== 0) return '';
    if (n < 1024) return n + ' B';
    if (n < 1024 * 1024) return (n / 1024).toFixed(n < 10 * 1024 ? 1 : 0) + ' KB';
    return (n / (1024 * 1024)).toFixed(1) + ' MB';
  }
  function fileExt(file) {
    const name = String((file && file.name) || '');
    const m = name.match(/\.([a-z0-9]+)$/i);
    return m ? m[1].toLowerCase() : '';
  }
  function fileKind(file) {
    const ext = fileExt(file);
    const type = String((file && file.type) || '').toLowerCase();
    if (['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg'].indexOf(ext) !== -1 || type.indexOf('image/') === 0) return 'image';
    if (['mp4', 'webm', 'ogg'].indexOf(ext) !== -1 || type.indexOf('video/') === 0) return 'video';
    if (ext === 'pdf' || type === 'application/pdf') return 'pdf';
    if (ext === 'txt' || type === 'text/plain') return 'txt';
    if (['doc', 'docx'].indexOf(ext) !== -1) return 'word';
    return 'other';
  }
  function fileTypeLabel(file) {
    const ext = fileExt(file);
    if (ext) return ext.toUpperCase();
    const kind = fileKind(file);
    return kind === 'image' ? 'IMG' : kind === 'video' ? 'VIDEO' : kind === 'pdf' ? 'PDF' : 'FILE';
  }

  async function loadStore() {
    if (window.__tsStore) return window.__tsStore;
    const res = await fetch('data/telling-story.json?v=20260820-tsappr');
    if (!res.ok) throw new Error('Không tải được dữ liệu Telling Story');
    window.__tsStore = await res.json();
    return window.__tsStore;
  }
  function persist() { return window.__tsStore; }
  function catalogs() { return persist()?.catalogs || []; }
  function stories() { return persist()?.stories || []; }
  function findCatalog(id) { return catalogs().find((c) => String(c.id) === String(id)); }
  function findStory(id) { return stories().find((s) => String(s.id) === String(id)); }
  function catalogName(id) { return (findCatalog(id) || {}).name || id || '—'; }
  function storyCount(catalogId) {
    return stories().filter((s) => String(s.catalogId) === String(catalogId)).length;
  }

  const DEFAULT_COVER = 'assets/telling-story/default-cover.png';
  function coverSrc(cover) {
    if (!cover) return DEFAULT_COVER;
    return cover.objectUrl || cover.url || cover.coverImage || cover.thumbnail || DEFAULT_COVER;
  }
  function coverImg(cover, className) {
    const src = coverSrc(cover);
    const cls = className ? ` class="${className}"` : '';
    return `<img${cls} src="${DMS.escape(src)}" alt="" onerror="this.onerror=null;this.src='${DEFAULT_COVER}'" />`;
  }
  function defaultCoverFile() {
    return { name: 'default-cover.png', type: 'image/png', url: DEFAULT_COVER, size: 0 };
  }
  function approvalLabel(story) {
    const raw = (story && (story.approvalStatus || story.approval_status)) || 'Chờ duyệt';
    if (raw === 'PENDING' || raw === 'Chờ duyệt') return 'Chờ duyệt';
    if (raw === 'APPROVED' || raw === 'Đã duyệt') return 'Đã duyệt';
    if (raw === 'REJECTED' || raw === 'Từ chối') return 'Từ chối';
    return raw;
  }
  function isApproved(story) {
    return approvalLabel(story) === 'Đã duyệt';
  }
  function isPendingApproval(story) {
    return approvalLabel(story) === 'Chờ duyệt';
  }
  function displayStatus(story) {
    if (!story) return '';
    if (story.publishStatus === 'Nháp') return 'Nháp';
    const from = parseDmy(story.startDate);
    const to = parseDmy(story.endDate);
    const t = today().getTime();
    if (from && t < from.getTime()) return 'Chưa hiệu lực';
    if (to && t > to.getTime() + 86400000 - 1) return 'Hết hiệu lực';
    return 'Đang hiệu lực';
  }

  function defaultViewer() {
    return { employeeId: '135260', regions: ['south'], salesforce: 'SS' };
  }

  function storyVisibleTo(story, viewer) {
    if (!story) return false;
    if (story.publishStatus === 'Nháp') return false;
    if (!isApproved(story)) return false;
    const aud = story.audience || { type: 'all', values: [] };
    const type = aud.type || 'all';
    const values = (aud.values || []).map(String);
    const v = viewer || defaultViewer();
    if (type === 'all' || !type) return true;
    if (type === 'region') {
      const regs = (v.regions || []).map(String);
      return values.some((x) => regs.indexOf(x) !== -1);
    }
    if (type === 'salesforce') return values.indexOf(String(v.salesforce || '')) !== -1;
    if (type === 'employee') return values.indexOf(String(v.employeeId || '')) !== -1;
    return true;
  }

  function storiesForViewer(list, viewer) {
    return (list || stories()).filter((s) => storyVisibleTo(s, viewer));
  }

  function storyDetailPath(id) {
    return '/telling-story/content?mode=view&id=' + encodeURIComponent(id);
  }
  function appStoryPath(id, catalogId) {
    if (catalogId) return '/sales-app/telling-story/' + encodeURIComponent(catalogId) + '/' + encodeURIComponent(id);
    return '/sales-app/telling-story/story/' + encodeURIComponent(id);
  }
  function storyRefHtml(storyId, label) {
    if (!storyId) return '';
    const text = label || 'Xem Telling Story';
    const id = String(storyId).replace(/"/g, '');
    return `<div class="ts-ref">
      <button type="button" class="dms-btn dms-btn--link" data-action="ts-open-story" data-story-id="${id}">${DMS.escape(text)}</button>
    </div>`;
  }
  function openStory(storyId, target) {
    if (!storyId || !window.DMSRouter) return;
    const path = target === 'app' ? appStoryPath(storyId) : storyDetailPath(storyId);
    DMSRouter.navigate(path);
  }

  function emptyCatalogDraft() {
    return { id: '', name: '', description: '', status: 'Hoạt động', _errors: {}, _src: '', _dirty: false, _view: false };
  }
  function emptyAudience() { return { type: 'all', values: [] }; }
  function emptyStoryDraft() {
    return {
      id: '',
      title: '',
      summary: '',
      catalogId: '',
      cover: null,
      bodyHtml: '',
      productGroups: [],
      tags: [],
      brands: [],
      channels: [],
      regions: [],
      audience: emptyAudience(),
      startDate: '',
      endDate: '',
      publishStatus: 'Nháp',
      approvalStatus: 'Chờ duyệt',
      rejectionReason: '',
      rejectedAt: '',
      media: [],
      links: [],
      createdAt: '',
      createdBy: '',
      _errors: {},
      _src: '',
      _dirty: false,
      _preview: null
    };
  }
  function getCatDraft() {
    if (!window.__tsCatDraft) window.__tsCatDraft = emptyCatalogDraft();
    return window.__tsCatDraft;
  }
  function resetCatDraft() { window.__tsCatDraft = emptyCatalogDraft(); return window.__tsCatDraft; }
  function loadCatDraft(item, view) {
    const d = emptyCatalogDraft();
    if (item) Object.assign(d, { id: item.id, name: item.name, description: item.description || '', status: item.status || 'Hoạt động' });
    d._src = (view ? 'view' : (item ? 'edit' : 'create')) + (item?.id || '');
    d._view = !!view;
    d._dirty = false;
    d._errors = {};
    window.__tsCatDraft = d;
    return d;
  }
  function getStoryDraft() {
    if (!window.__tsStoryDraft) window.__tsStoryDraft = emptyStoryDraft();
    return window.__tsStoryDraft;
  }
  function resetStoryDraft() { window.__tsStoryDraft = emptyStoryDraft(); return window.__tsStoryDraft; }
  function loadStoryDraft(item, mode) {
    const d = emptyStoryDraft();
    if (item) {
      Object.assign(d, {
        id: item.id,
        title: item.title,
        summary: item.summary || '',
        catalogId: item.catalogId,
        cover: item.cover ? clone(item.cover) : null,
        bodyHtml: item.bodyHtml || '',
        productGroups: clone(item.productGroups || []),
        tags: clone(item.tags || []),
        brands: clone(item.brands || []),
        channels: clone(item.channels || []),
        regions: clone(item.regions || []),
        audience: clone(item.audience || emptyAudience()),
        startDate: item.startDate || '',
        endDate: item.endDate || '',
        publishStatus: item.publishStatus || 'Nháp',
        approvalStatus: item.approvalStatus || 'Chờ duyệt',
        rejectionReason: item.rejectionReason || '',
        rejectedAt: item.rejectedAt || '',
        media: clone(item.media || []),
        links: clone(item.links || []),
        createdAt: item.createdAt || '',
        createdBy: item.createdBy || ''
      });
    }
    d._src = (mode || 'view') + (item?.id || '');
    d._dirty = false;
    d._errors = {};
    d._preview = null;
    window.__tsStoryDraft = d;
    return d;
  }

  function breadcrumb(items) {
    return DMS.render('Breadcrumb', { items });
  }

  global.TellingStoryShared = {
    clone, queryParams, fieldErr, parseDmy, toDmy, nowLabel, today,
    optLabel, optLabels, formatSize, fileExt, fileKind, fileTypeLabel,
    loadStore, persist, catalogs, stories, findCatalog, findStory, catalogName, storyCount,
    DEFAULT_COVER, coverSrc, coverImg, defaultCoverFile, approvalLabel, isApproved, isPendingApproval,
    displayStatus, defaultViewer, storyVisibleTo, storiesForViewer, storyDetailPath, appStoryPath, storyRefHtml, openStory,
    emptyCatalogDraft, getCatDraft, resetCatDraft, loadCatDraft,
    emptyAudience, emptyStoryDraft, getStoryDraft, resetStoryDraft, loadStoryDraft,
    breadcrumb
  };

  if (!window.__tsOpenBound) {
    window.__tsOpenBound = true;
    document.addEventListener('click', function (e) {
      const el = e.target.closest('[data-action="ts-open-story"]');
      if (!el) return;
      const id = el.getAttribute('data-story-id');
      if (id) openStory(id);
    });
  }
})(window);
