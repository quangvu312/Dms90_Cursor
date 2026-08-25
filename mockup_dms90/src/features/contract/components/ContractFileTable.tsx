import { useRef } from 'react';
import { ActionIconButton } from '../../../components/ui/ActionIconButton';
import type { ContractFile } from '../types';
import {
  ACCEPT_ATTR,
  FORMAT_ERROR,
  FORMAT_HINT,
  fileTypeLabel,
  formatSize,
  isAllowedFile,
  nativeFileToRecord,
} from '../fileRules';
import { nowLabel } from '../store';

interface Props {
  files: ContractFile[];
  sectionTitle: string;
  locked?: boolean;
  error?: string;
  actor: string;
  onChange: (files: ContractFile[], error?: string) => void;
  onPreview: (file: ContractFile) => void;
}

export function ContractFileTable({
  files, sectionTitle, locked, error, actor, onChange, onPreview,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const colCount = locked ? 4 : 5;

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
    const stamp = nowLabel();
    const recs = await Promise.all(valid.map((f) => nativeFileToRecord(f, actor, stamp)));
    onChange(
      [...files, ...recs],
      invalid ? `Một số file không đúng định dạng đã bị bỏ qua. ${FORMAT_ERROR}` : undefined,
    );
  };

  const removeAt = (index: number) => {
    const removed = files[index];
    if (removed?.objectUrl) URL.revokeObjectURL(removed.objectUrl);
    onChange(files.filter((_, i) => i !== index));
  };

  return (
    <div className={`dms-form-item ct-form-grid__full${error ? ' is-error' : ''}`}>
      <label className="dms-form-item__label is-required">{sectionTitle}</label>
      <div className="dms-table-wrapper ct-file-table">
        <table className="dms-table">
          <thead>
            <tr>
              <th>File upload</th>
              <th>Dung lượng</th>
              <th>Định dạng</th>
              <th>Thời gian upload</th>
              {locked ? null : <th>Tùy chỉnh</th>}
            </tr>
          </thead>
          <tbody>
            {files.length === 0 ? (
              <tr>
                <td colSpan={colCount}>{locked ? '—' : 'Chưa có file.'}</td>
              </tr>
            ) : files.map((f, i) => (
              <tr key={f.id || `${f.name}-${i}`}>
                <td>
                  <button
                    type="button"
                    className="dms-table__link"
                    style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer' }}
                    onClick={() => onPreview(f)}
                  >
                    {f.name}
                  </button>
                </td>
                <td>{formatSize(f.size) || '—'}</td>
                <td>{fileTypeLabel(f)}</td>
                <td>{f.uploadedAt || '—'}</td>
                {locked ? null : (
                  <td>
                    <ActionIconButton type="delete" title="Xóa" onClick={() => removeAt(i)} />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {locked ? null : (
        <div className="mt-2">
          <input
            ref={inputRef}
            type="file"
            className="hidden"
            accept={ACCEPT_ATTR}
            multiple
            onChange={(e) => {
              void onPick(e.target.files);
              e.target.value = '';
            }}
          />
          <button type="button" className="dms-btn dms-btn--primary" onClick={() => inputRef.current?.click()}>
            + Upload file
          </button>
          <div className="mt-2 text-[12px] text-[#8c8c8c]">{FORMAT_HINT}</div>
        </div>
      )}
      {error ? <div className="dms-form-item__error">{error}</div> : null}
    </div>
  );
}
