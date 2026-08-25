import type { ContractFile } from './types';

export const ALLOWED_EXTS = ['pdf', 'doc', 'docx', 'txt', 'jpg', 'jpeg', 'png'] as const;
export const ACCEPT_ATTR = '.pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain,image/jpeg,image/png';
export const FORMAT_HINT = 'Hỗ trợ PDF, DOC, DOCX, TXT, JPG, JPEG, PNG';
export const FORMAT_ERROR = 'Định dạng hỗ trợ: PDF, DOC, DOCX, TXT, JPG, JPEG, PNG.';

const MIME: Record<string, string> = {
  pdf: 'application/pdf',
  doc: 'application/msword',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  txt: 'text/plain',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
};

const IMAGE_EXTS = ['jpg', 'jpeg', 'png'];
const IMAGE_MIMES = ['image/jpeg', 'image/jpg', 'image/png', 'image/pjpeg'];

export function fileExt(file: { name?: string }): string {
  const m = String(file.name || '').match(/\.([a-z0-9]+)$/i);
  return m ? m[1].toLowerCase() : '';
}

export function fileKind(file: { name?: string; type?: string }): 'image' | 'pdf' | 'txt' | 'word' | 'other' {
  const ext = fileExt(file);
  const type = String(file.type || '').toLowerCase();
  if (IMAGE_EXTS.includes(ext) || IMAGE_MIMES.includes(type)) return 'image';
  if (ext === 'pdf' || type === 'application/pdf') return 'pdf';
  if (ext === 'txt' || type === 'text/plain') return 'txt';
  if (ext === 'doc' || ext === 'docx' || type === MIME.doc || type === MIME.docx) return 'word';
  return 'other';
}

export function isAllowedFile(file: { name?: string; type?: string }): boolean {
  const ext = fileExt(file);
  if ((ALLOWED_EXTS as readonly string[]).includes(ext)) return true;
  const type = String(file.type || '').toLowerCase();
  if (!type) return false;
  return type === MIME.pdf || type === MIME.doc || type === MIME.docx || type === MIME.txt
    || IMAGE_MIMES.includes(type);
}

export function fileTypeLabel(file: { name?: string; type?: string }): string {
  const ext = fileExt(file);
  if (ext) return ext.toUpperCase();
  const kind = fileKind(file);
  if (kind === 'image') return 'IMG';
  if (kind === 'pdf') return 'PDF';
  if (kind === 'txt') return 'TXT';
  if (kind === 'word') return 'DOC';
  return 'FILE';
}

export function formatSize(bytes?: number): string {
  const n = Number(bytes);
  if (!n && n !== 0) return '';
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(n < 10 * 1024 ? 1 : 0)} KB`;
  return `${(n / (1024 * 1024)).toFixed(1)} MB`;
}

export function previewSrc(file: ContractFile): string {
  return file.objectUrl || file.previewUrl || file.url || '';
}

export function toPublicUrl(url?: string): string {
  if (!url) return '';
  if (url.startsWith('blob:') || url.startsWith('http') || url.startsWith('/')) return url;
  return `/${url.replace(/^\.\//, '')}`;
}

export function enrichFile(file: ContractFile, idHint?: string): ContractFile {
  const ext = fileExt(file);
  const kind = fileKind(file);
  const next: ContractFile = {
    ...file,
    extension: file.extension || ext,
    category: file.category || (kind === 'image' ? 'image' : 'document'),
    type: file.type || MIME[ext] || file.type,
  };
  if (next.url) next.url = toPublicUrl(next.url);
  if (next.previewUrl) next.previewUrl = toPublicUrl(next.previewUrl);
  if (next.category === 'image' && !next.previewUrl) {
    next.previewUrl = next.objectUrl || next.url || '';
  }
  if (!next.id && idHint) next.id = idHint;
  return next;
}

export async function nativeFileToRecord(file: File, uploadedBy: string, now: string): Promise<ContractFile> {
  const ext = fileExt(file);
  const objectUrl = URL.createObjectURL(file);
  const rec = enrichFile({
    name: file.name || '',
    type: file.type || MIME[ext] || '',
    size: file.size || 0,
    uploadedAt: now,
    uploadedBy,
    objectUrl,
  });
  if (ext === 'txt') {
    rec.textContent = await file.text();
  }
  return rec;
}
