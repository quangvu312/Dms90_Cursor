/**
 * Telling Story — mock store + helpers
 * Catalog / Story / Segment / display window (frontend mock)
 */
(function (global) {
  'use strict';

  function pad(n) { return String(n).padStart(2, '0'); }
  function clone(obj) { return JSON.parse(JSON.stringify(obj || null)); }
  function queryParams() {
    const fromHash = location.hash.split('?')[1] || '';
    const fromSearch = (location.search || '').replace(/^\?/, '');
    return new URLSearchParams(fromHash || fromSearch);
  }
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

  const TS_STORAGE_KEY = 'dms90_telling_story';
  const TS_STORE_EVENT = 'dms90-ts-changed';

  function blobToDataUrl(blob) {
    return new Promise(function (resolve, reject) {
      const reader = new FileReader();
      reader.onload = function () { resolve(String(reader.result || '')); };
      reader.onerror = function () { reject(reader.error); };
      reader.readAsDataURL(blob);
    });
  }

  async function persistableFile(file) {
    if (!file) return file;
    const out = {
      name: file.name,
      type: file.type,
      size: file.size,
      url: file.url,
      poster: file.poster,
      textContent: file.textContent
    };
    const src = file.objectUrl || file.url || '';
    if (String(src).indexOf('blob:') === 0) {
      try {
        const blob = await fetch(src).then(function (r) { return r.blob(); });
        if (blob.size <= 1.5 * 1024 * 1024) out.url = await blobToDataUrl(blob);
        else if (!out.url) out.url = DEFAULT_COVER;
      } catch (e) { /* keep url */ }
    } else if (src) {
      out.url = src;
    }
    return out;
  }

  async function snapshotForStorage(doc) {
    const stories = [];
    const list = (doc && doc.stories) || [];
    for (let i = 0; i < list.length; i++) {
      const s = list[i];
      const media = [];
      const files = s.media || [];
      for (let j = 0; j < files.length; j++) media.push(await persistableFile(files[j]));
      stories.push(Object.assign({}, s, {
        cover: await persistableFile(s.cover),
        media: media
      }));
    }
    return {
      catalogs: (doc && doc.catalogs) || [],
      stories: stories,
      channels: doc && doc.channels,
      storyStatuses: doc && doc.storyStatuses
    };
  }

  function notifyStore() {
    try { window.dispatchEvent(new CustomEvent(TS_STORE_EVENT)); } catch (e) { /* ignore */ }
  }

  function persistStore() {
    const live = window.__tsStore;
    if (!live) return;
    notifyStore();
    snapshotForStorage(live).then(function (snap) {
      try {
        localStorage.setItem(TS_STORAGE_KEY, JSON.stringify(snap));
      } catch (e) {
        try {
          const slim = JSON.parse(JSON.stringify(snap));
          (slim.stories || []).forEach(function (s) {
            if (s.cover && String(s.cover.url || '').indexOf('data:') === 0) s.cover.url = DEFAULT_COVER;
            (s.media || []).forEach(function (f) {
              if (String(f.url || '').indexOf('data:') === 0) f.url = '';
            });
          });
          localStorage.setItem(TS_STORAGE_KEY, JSON.stringify(slim));
        } catch (e2) { /* quota */ }
      }
    });
  }

  function readLocalStore() {
    try {
      const raw = localStorage.getItem(TS_STORAGE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!parsed || !Array.isArray(parsed.stories) || !Array.isArray(parsed.catalogs)) return null;
      return parsed;
    } catch (e) {
      return null;
    }
  }

  async function loadStore() {
    if (window.__tsStore) return window.__tsStore;
    const fromLs = readLocalStore();
    if (fromLs) {
      window.__tsStore = fromLs;
      return window.__tsStore;
    }
    const res = await fetch('data/telling-story.json?v=20260821-tssync');
    if (!res.ok) throw new Error('Không tải được dữ liệu Telling Story');
    window.__tsStore = await res.json();
    persistStore();
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

  async function loadProgramCatalogs() {
    if (window.__tsProgramCats) return window.__tsProgramCats;
    const [promo, display] = await Promise.all([
      fetch('data/promotion.json?v=20260821-tslink').then((r) => r.json()),
      fetch('data/display.json?v=20260821-tslink').then((r) => r.json())
    ]);
    window.__tsProgramCats = { promo: promo || {}, display: display || {} };
    return window.__tsProgramCats;
  }
  function promoItems() { return (window.__tsProgramCats && window.__tsProgramCats.promo && window.__tsProgramCats.promo.items) || []; }
  function displayItems() { return (window.__tsProgramCats && window.__tsProgramCats.display && window.__tsProgramCats.display.programs) || []; }
  function isActiveProgram(item) { return item && String(item.status) === 'RUNNING'; }
  function programOptions(list, selectedIds) {
    const selected = (selectedIds || []).map(String);
    return (list || [])
      .filter((p) => isActiveProgram(p) || selected.indexOf(String(p.id)) !== -1)
      .map((p) => ({ value: p.id, label: p.name }));
  }
  function activePromoOptions(selectedIds) { return programOptions(promoItems(), selectedIds); }
  function activeDisplayOptions(selectedIds) { return programOptions(displayItems(), selectedIds); }
  function promoLabel(id) {
    const hit = promoItems().find((p) => String(p.id) === String(id) || String(p.code) === String(id));
    return hit ? hit.name : (id || '');
  }
  function displayLabel(id) {
    const hit = displayItems().find((p) => String(p.id) === String(id) || String(p.code) === String(id));
    return hit ? hit.name : (id || '');
  }

  const DEFAULT_COVER = '/assets/telling-story/default-cover.png';
  function coverSrc(cover) {
    if (!cover) return DEFAULT_COVER;
    const raw = cover.objectUrl || cover.url || cover.coverImage || cover.thumbnail || DEFAULT_COVER;
    if (/^(https?:|data:|blob:|\/)/i.test(raw)) return raw;
    return '/' + String(raw).replace(/^\.\//, '');
  }
  function coverImg(cover, className) {
    const src = coverSrc(cover);
    const cls = className ? ` class="${className}"` : '';
    return `<img${cls} src="${DMS.escape(src)}" alt="" onerror="this.onerror=null;this.src='${DEFAULT_COVER}'" />`;
  }
  function defaultCoverFile() {
    return { name: 'default-cover.png', type: 'image/png', url: DEFAULT_COVER, size: 0 };
  }
  function storyStatus(story) {
    return (story && story.status) || 'Khởi tạo';
  }
  function isApproved(story) {
    return storyStatus(story) === 'Đã duyệt';
  }
  function isPendingApproval(story) {
    return storyStatus(story) === 'Khởi tạo';
  }

  function defaultViewer() {
    return { employeeId: '135260', regions: ['south'], salesforce: 'SS' };
  }

  function storyVisibleTo(story) {
    return !!story;
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
  function emptyStoryDraft() {
    return {
      id: '',
      title: '',
      summary: '',
      catalogId: '',
      cover: null,
      bodyHtml: '',
      channels: [],
      startDate: '',
      endDate: '',
      status: 'Khởi tạo',
      promotionProgramIds: [],
      displayProgramIds: [],
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
        channels: clone(item.channels || []),
        startDate: item.startDate || '',
        endDate: item.endDate || '',
        status: item.status || 'Khởi tạo',
        promotionProgramIds: clone(item.promotionProgramIds || []),
        displayProgramIds: clone(item.displayProgramIds || []),
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
    loadStore, loadProgramCatalogs, persist, persistStore, catalogs, stories, findCatalog, findStory, catalogName, storyCount,
    DEFAULT_COVER, coverSrc, coverImg, defaultCoverFile, storyStatus, isApproved, isPendingApproval,
    defaultViewer, storyVisibleTo, storiesForViewer, storyDetailPath, appStoryPath, storyRefHtml, openStory,
    emptyCatalogDraft, getCatDraft, resetCatDraft, loadCatDraft,
    emptyStoryDraft, getStoryDraft, resetStoryDraft, loadStoryDraft,
    activePromoOptions, activeDisplayOptions, promoLabel, displayLabel,
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
