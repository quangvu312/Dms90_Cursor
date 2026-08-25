import type { TsCatalog, TsMediaFile, TsStory } from './types';
import {
  ensureStoryStore,
  findCatalog as storeFindCatalog,
  getCatalogs as storeGetCatalogs,
  getStories as storeGetStories,
} from './storyStore';

export const DEFAULT_COVER = '/assets/telling-story/default-cover.png';

export {
  createStory,
  deleteStory,
  updateStory,
  approveStory,
  rejectStory,
  getStories,
  getCatalogs,
  findStory,
  findCatalog,
  useStoryStore,
} from './storyStore';

export function absAssetUrl(url?: string) {
  if (!url) return '';
  if (/^(https?:|data:|blob:|\/)/i.test(url)) return url;
  return '/' + url.replace(/^\.\//, '');
}

export function rewriteAssetHtml(html?: string) {
  if (!html) return '';
  return html.replace(/(src|href)=["'](?!https?:|data:|blob:|\/)([^"']+)["']/gi, (_m, attr, path) => {
    return `${attr}="${absAssetUrl(path)}"`;
  });
}

export function coverSrc(cover?: TsMediaFile | null) {
  if (!cover) return DEFAULT_COVER;
  return absAssetUrl(cover.objectUrl || cover.url) || DEFAULT_COVER;
}

export function optLabel(list: { value: string; label: string }[] | undefined, value: string) {
  const hit = (list || []).find((x) => String(x.value) === String(value));
  return hit?.label || value;
}

export function optLabels(list: { value: string; label: string }[] | undefined, values?: string[]) {
  return (values || []).map((v) => optLabel(list, v)).filter(Boolean);
}

export function storyStatus(story?: TsStory | null) {
  return (story && story.status) || 'Khởi tạo';
}

export function isApproved(story?: TsStory | null) {
  return storyStatus(story) === 'Đã duyệt';
}

export function isPendingApproval(story?: TsStory | null) {
  return storyStatus(story) === 'Khởi tạo';
}

export interface TsViewer {
  employeeId: string;
  regions: string[];
  salesforce: string;
}

export const DEFAULT_VIEWER: TsViewer = {
  employeeId: '135260',
  regions: ['south'],
  salesforce: 'SS',
};

export function storyVisibleTo(_story: TsStory, _viewer: TsViewer = DEFAULT_VIEWER) {
  return true;
}

export function getActiveCatalogs(): TsCatalog[] {
  return storeGetCatalogs().filter((c) => c.status === 'Hoạt động');
}

export function storiesForCatalog(catalogId: string, viewer: TsViewer = DEFAULT_VIEWER) {
  return storeGetStories().filter((s) => s.catalogId === catalogId && storyVisibleTo(s, viewer));
}

export function visibleStoryCount(catalogId: string, viewer: TsViewer = DEFAULT_VIEWER) {
  return storiesForCatalog(catalogId, viewer).length;
}

export function catalogName(id: string) {
  return storeFindCatalog(id)?.name || id || '—';
}

export function getChannelOptions() {
  return ensureStoryStore().channels || [];
}

export function fileKind(file?: TsMediaFile | null) {
  const name = String(file?.name || '').toLowerCase();
  const type = String(file?.type || '').toLowerCase();
  if (/\.(png|jpe?g|gif|webp|svg)$/i.test(name) || type.startsWith('image/')) return 'image';
  if (/\.(mp4|webm|ogg)$/i.test(name) || type.startsWith('video/')) return 'video';
  if (/\.pdf$/i.test(name) || type === 'application/pdf') return 'pdf';
  if (/\.txt$/i.test(name) || type === 'text/plain') return 'txt';
  if (/\.(doc|docx)$/i.test(name)) return 'word';
  return 'other';
}

export function mediaUrl(file?: TsMediaFile | null) {
  return absAssetUrl(file?.objectUrl || file?.url);
}
