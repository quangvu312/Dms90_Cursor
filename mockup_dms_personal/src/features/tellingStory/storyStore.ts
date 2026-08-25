import { useEffect, useState } from 'react';
import seedRaw from '../../../data/telling-story.json';
import type { TsCatalog, TsMediaFile, TsStore, TsStory } from './types';

export const TS_STORAGE_KEY = 'dms90_telling_story';
export const TS_STORE_EVENT = 'dms90-ts-changed';

const seed = seedRaw as TsStore;
const listeners = new Set<() => void>();

declare global {
  interface Window {
    __tsStore?: TsStore;
  }
}

function cloneStore(doc: TsStore): TsStore {
  return JSON.parse(JSON.stringify(doc || { catalogs: [], stories: [] }));
}

function readLocal(): TsStore | null {
  try {
    const raw = localStorage.getItem(TS_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as TsStore;
    if (!parsed || !Array.isArray(parsed.stories) || !Array.isArray(parsed.catalogs)) return null;
    return parsed;
  } catch {
    return null;
  }
}

function blobToDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}

async function persistableFile(file?: TsMediaFile | null): Promise<TsMediaFile | null> {
  if (!file) return null;
  const out: TsMediaFile = {
    name: file.name,
    type: file.type,
    size: file.size,
    url: file.url,
    poster: file.poster,
    textContent: file.textContent,
  };
  const src = file.objectUrl || file.url || '';
  if (src.indexOf('blob:') === 0) {
    try {
      const blob = await fetch(src).then((r) => r.blob());
      if (blob.size <= 1.5 * 1024 * 1024) {
        out.url = await blobToDataUrl(blob);
      } else if (!out.url) {
        out.url = '/assets/telling-story/default-cover.png';
      }
    } catch {
      /* keep existing url */
    }
  } else if (src) {
    out.url = src;
  }
  return out;
}

async function snapshotForStorage(doc: TsStore): Promise<TsStore> {
  const stories: TsStory[] = [];
  for (const story of doc.stories || []) {
    const cover = await persistableFile(story.cover);
    const media: TsMediaFile[] = [];
    for (const f of story.media || []) {
      const next = await persistableFile(f);
      if (next) media.push(next);
    }
    stories.push({ ...story, cover, media });
  }
  return {
    catalogs: cloneStore({ catalogs: doc.catalogs || [], stories: [] }).catalogs,
    stories,
    channels: doc.channels,
    storyStatuses: doc.storyStatuses,
  };
}

function writeLocal(doc: TsStore) {
  try {
    localStorage.setItem(TS_STORAGE_KEY, JSON.stringify(doc));
  } catch {
    try {
      const slim: TsStore = {
        ...doc,
        stories: (doc.stories || []).map((s) => ({
          ...s,
          cover: s.cover
            ? { ...s.cover, url: s.cover.url && !String(s.cover.url).startsWith('data:') ? s.cover.url : '/assets/telling-story/default-cover.png', objectUrl: undefined }
            : s.cover,
          media: (s.media || []).map((f) => ({
            ...f,
            url: f.url && !String(f.url).startsWith('data:') ? f.url : undefined,
            objectUrl: undefined,
          })),
        })),
      };
      localStorage.setItem(TS_STORAGE_KEY, JSON.stringify(slim));
    } catch {
      /* quota */
    }
  }
}

export function notifyStoryStore() {
  listeners.forEach((fn) => fn());
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(TS_STORE_EVENT));
  }
}

export function persistStoryStore(doc?: TsStore) {
  const live = doc || ensureStoryStore();
  void snapshotForStorage(live).then((snap) => {
    writeLocal(snap);
  });
  notifyStoryStore();
}

export function ensureStoryStore(): TsStore {
  if (typeof window !== 'undefined' && window.__tsStore) {
    return window.__tsStore;
  }
  const fromLs = typeof window !== 'undefined' ? readLocal() : null;
  const next = fromLs || cloneStore(seed);
  if (typeof window !== 'undefined') window.__tsStore = next;
  return next;
}

export function getStoryStore(): TsStore {
  return ensureStoryStore();
}

export function getStories(): TsStory[] {
  return ensureStoryStore().stories || [];
}

export function getCatalogs(): TsCatalog[] {
  return ensureStoryStore().catalogs || [];
}

export function findStory(id: string) {
  return getStories().find((s) => String(s.id) === String(id));
}

export function findCatalog(id: string) {
  return getCatalogs().find((c) => String(c.id) === String(id));
}

export function nextStoryId() {
  return 'ST' + Date.now();
}

export function createStory(input: Partial<TsStory> & Pick<TsStory, 'title' | 'catalogId'>): TsStory {
  const store = ensureStoryStore();
  const now = nowTsLabel();
  const story: TsStory = {
    id: input.id || nextStoryId(),
    title: input.title,
    summary: input.summary || '',
    catalogId: input.catalogId,
    cover: input.cover || null,
    bodyHtml: input.bodyHtml || '',
    channels: input.channels || [],
    startDate: input.startDate || '',
    endDate: input.endDate || '',
    status: input.status || 'Khởi tạo',
    promotionProgramIds: input.promotionProgramIds || [],
    displayProgramIds: input.displayProgramIds || [],
    rejectionReason: '',
    rejectedAt: '',
    media: input.media || [],
    links: input.links || [],
    createdAt: now,
    createdBy: input.createdBy || 'Vũ BA',
    updatedAt: now,
    updatedBy: input.updatedBy || 'Vũ BA',
  };
  store.stories = [story, ...(store.stories || [])];
  persistStoryStore(store);
  return story;
}

export function updateStory(id: string, patch: Partial<TsStory>): TsStory | null {
  const store = ensureStoryStore();
  const item = (store.stories || []).find((s) => String(s.id) === String(id));
  if (!item) return null;
  Object.assign(item, patch, { updatedAt: nowTsLabel() });
  persistStoryStore(store);
  return item;
}

export function deleteStory(id: string) {
  const store = ensureStoryStore();
  store.stories = (store.stories || []).filter((s) => String(s.id) !== String(id));
  persistStoryStore(store);
}

export function approveStory(id: string, actor = 'Vũ BA') {
  return updateStory(id, { status: 'Đã duyệt', rejectionReason: '', rejectedAt: '', updatedBy: actor });
}

export function rejectStory(id: string, reason: string, actor = 'Vũ BA') {
  const now = nowTsLabel();
  return updateStory(id, { status: 'Từ chối', rejectionReason: reason, rejectedAt: now, updatedBy: actor });
}

function nowTsLabel() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(d.getDate())}-${pad(d.getMonth() + 1)}-${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

export function subscribeStoryStore(fn: () => void) {
  listeners.add(fn);
  if (typeof window !== 'undefined') {
    const onEvt = () => fn();
    window.addEventListener(TS_STORE_EVENT, onEvt);
    const onStorage = (e: StorageEvent) => {
      if (e.key === TS_STORAGE_KEY) {
        if (e.newValue) {
          try {
            window.__tsStore = JSON.parse(e.newValue) as TsStore;
          } catch {
            /* ignore */
          }
        }
        fn();
      }
    };
    window.addEventListener('storage', onStorage);
    return () => {
      listeners.delete(fn);
      window.removeEventListener(TS_STORE_EVENT, onEvt);
      window.removeEventListener('storage', onStorage);
    };
  }
  return () => {
    listeners.delete(fn);
  };
}

export function useStoryStore() {
  const [, bump] = useState(0);
  useEffect(() => subscribeStoryStore(() => bump((x) => x + 1)), []);
  const store = ensureStoryStore();
  return {
    catalogs: store.catalogs || [],
    stories: store.stories || [],
  };
}

ensureStoryStore();

