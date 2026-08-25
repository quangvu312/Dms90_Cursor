import type { ReactNode } from 'react';
import type { ContractFile } from '../types';
import { fileKind, fileTypeLabel, formatSize, previewSrc } from '../fileRules';

interface Props {
  file: ContractFile | null;
  onClose: () => void;
}

function download(file: ContractFile) {
  const href = file.objectUrl || file.previewUrl || file.url;
  if (!href && file.textContent != null) {
    const blob = new Blob([file.textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name || 'download';
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
    return;
  }
  if (!href) return;
  const a = document.createElement('a');
  a.href = href;
  a.download = file.name || 'download';
  a.rel = 'noopener';
  a.click();
}

export function ContractFilePreviewModal({ file, onClose }: Props) {
  if (!file) return null;
  const kind = fileKind(file);
  const src = previewSrc(file);

  let body: ReactNode;
  if (kind === 'image' && src) {
    body = <img className="block max-w-full max-h-[480px] mx-auto rounded" alt={file.name} src={src} />;
  } else if (kind === 'pdf' && src) {
    body = <iframe className="w-full h-[480px] border border-solid border-[#d9d9d9] rounded bg-[#f5f5f5]" title={file.name} src={src} />;
  } else if (kind === 'txt' && file.textContent) {
    body = <pre className="max-h-[480px] overflow-auto m-0 p-4 border border-solid border-[#d9d9d9] rounded bg-[#fafafa] whitespace-pre-wrap text-[13px]">{file.textContent}</pre>;
  } else if (kind === 'word') {
    body = (
      <div className="text-center p-10 border border-solid border-[#f0f0f0] rounded bg-[#fafafa]">
        <p className="m-0 mb-2 font-medium">Không hỗ trợ xem trước trực tiếp định dạng này.</p>
        <p className="m-0 text-[#8c8c8c]">Vui lòng tải file để xem nội dung.</p>
      </div>
    );
  } else {
    body = <div className="text-center p-10 text-[#8c8c8c]">Không hỗ trợ xem trước định dạng này.</div>;
  }

  return (
    <div className="dms-modal-overlay dms-modal-overlay--nested" onClick={onClose}>
      <div className="dms-modal dms-modal--lg" onClick={(e) => e.stopPropagation()}>
        <div className="dms-modal__header">
          <h2 className="dms-modal__title">Xem chi tiết file</h2>
          <button type="button" className="dms-modal__close" title="Đóng" onClick={onClose}>×</button>
        </div>
        <div className="dms-modal__body">
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-4 text-sm">
            <div><span className="text-[#8c8c8c]">Tên file</span> <strong>{file.name || '—'}</strong></div>
            <div><span className="text-[#8c8c8c]">Loại file</span> <strong>{fileTypeLabel(file)}</strong></div>
            <div><span className="text-[#8c8c8c]">Dung lượng</span> <strong>{formatSize(file.size) || '—'}</strong></div>
            <div><span className="text-[#8c8c8c]">Ngày upload</span> <strong>{file.uploadedAt || '—'}</strong></div>
            <div><span className="text-[#8c8c8c]">Người upload</span> <strong>{file.uploadedBy || '—'}</strong></div>
          </div>
          {body}
        </div>
        <div className="dms-modal__footer">
          <button type="button" className="dms-btn dms-btn--default" onClick={onClose}>Đóng</button>
          <button type="button" className="dms-btn dms-btn--primary" onClick={() => download(file)}>Tải xuống</button>
        </div>
      </div>
    </div>
  );
}
