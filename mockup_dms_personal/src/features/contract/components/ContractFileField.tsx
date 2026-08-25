import { FileText, Trash2, Upload } from 'lucide-react';
import type { ContractFile } from '../types';
import {
  ACCEPT_ATTR,
  FORMAT_ERROR,
  FORMAT_HINT,
  fileKind,
  fileTypeLabel,
  formatSize,
  isAllowedFile,
  nativeFileToRecord,
  previewSrc,
} from '../fileRules';

interface Props {
  files: ContractFile[];
  locked?: boolean;
  error?: string;
  actor: string;
  now: string;
  onChange: (files: ContractFile[], error?: string) => void;
  onPreview: (file: ContractFile) => void;
}

export function ContractFileField({ files, locked, error, actor, now, onChange, onPreview }: Props) {
  const onPick = async (list: FileList | null) => {
    if (!list || !list.length) return;
    const picked = Array.from(list);
    const existing = files.map((f) => String(f.name || '').toLowerCase());
    const valid: File[] = [];
    let invalid = false;
    picked.forEach((file) => {
      if (!isAllowedFile(file)) {
        invalid = true;
        return;
      }
      const name = (file.name || '').toLowerCase();
      if (existing.includes(name)) return;
      valid.push(file);
      existing.push(name);
    });
    if (invalid && !valid.length) {
      onChange(files, FORMAT_ERROR);
      return;
    }
    const recs = await Promise.all(valid.map((f) => nativeFileToRecord(f, actor, now)));
    const next = [...files, ...recs];
    onChange(
      next,
      invalid ? `Một số file không đúng định dạng đã bị bỏ qua. ${FORMAT_ERROR}` : undefined,
    );
  };

  return (
    <div className={`dms-form-item${error ? ' is-error' : ''}`}>
      <label className="dms-form-item__label is-required">File đính kèm</label>
      {locked ? null : (
        <label className="flex items-center gap-2 min-h-[32px] px-3 border border-solid border-[#d9d9d9] rounded-md bg-white cursor-pointer hover:border-[#1677ff]">
          <input
            type="file"
            className="hidden"
            accept={ACCEPT_ATTR}
            multiple
            onChange={(e) => {
              void onPick(e.target.files);
              e.target.value = '';
            }}
          />
          <span className="flex-1 min-w-0 text-[#8c8c8c] whitespace-nowrap overflow-hidden text-ellipsis">
            {FORMAT_HINT}
          </span>
          <Upload className="w-3.5 h-3.5 text-[#8c8c8c] shrink-0" />
        </label>
      )}
      {files.length ? (
        <ul className="list-none m-0 mt-2 p-0 flex flex-col gap-1.5">
          {files.map((f, i) => {
            const kind = fileKind(f);
            const src = previewSrc(f);
            return (
              <li key={`${f.name}-${i}`} className="flex items-center gap-2 min-h-8 px-3 py-1 border border-solid border-[#f0f0f0] rounded-md">
                {kind === 'image' && src ? (
                  <button
                    type="button"
                    className="w-9 h-9 p-0 border border-solid border-[#f0f0f0] rounded overflow-hidden bg-[#f5f5f5] shrink-0"
                    onClick={() => onPreview(f)}
                    title="Xem ảnh"
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
                  </button>
                ) : (
                  <FileText className="w-3.5 h-3.5 text-[#1677ff] shrink-0" />
                )}
                <button type="button" className="flex-1 min-w-0 text-left text-[#1677ff] bg-transparent border-0 p-0 truncate" onClick={() => onPreview(f)}>
                  {f.name}
                </button>
                <span className="text-xs text-[#8c8c8c] shrink-0">{fileTypeLabel(f)}</span>
                <span className="text-xs text-[#8c8c8c] shrink-0">{formatSize(f.size)}</span>
                {locked ? null : (
                  <button
                    type="button"
                    className="w-4 h-4 p-0 border-0 bg-transparent text-[#8c8c8c] hover:text-[#ff4d4f]"
                    title="Xóa file"
                    onClick={() => {
                      const removed = files[i];
                      if (removed.objectUrl) URL.revokeObjectURL(removed.objectUrl);
                      onChange(files.filter((_, idx) => idx !== i));
                    }}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      ) : locked ? <div className="min-h-8 flex items-center">—</div> : null}
      {error ? <div className="dms-form-item__error">{error}</div> : null}
    </div>
  );
}
