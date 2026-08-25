import type { ContractRecord } from '../types';

interface Props {
  item: ContractRecord | null;
  onClose: () => void;
  onDelete: () => void;
}

export function ConfirmActionModal({ item, onClose, onDelete }: Props) {
  if (!item) return null;
  const isType = item.module === 'template';
  const noun = isType ? 'loại hợp đồng' : 'hợp đồng';
  return (
    <div className="dms-modal-overlay" onClick={onClose}>
      <div className="dms-modal dms-modal--sm" onClick={(e) => e.stopPropagation()}>
        <div className="dms-modal__header">
          <h2 className="dms-modal__title">{isType ? 'Xóa loại hợp đồng' : 'Xóa hợp đồng'}</h2>
          <button type="button" className="dms-modal__close" title="Đóng" onClick={onClose}>×</button>
        </div>
        <div className="dms-modal__body">
          <p className="m-0 mb-2">Bạn có chắc chắn muốn xóa {noun} này?</p>
          <p className="m-0 text-[#8c8c8c] text-sm">{item.contractCode} — {item.name}</p>
        </div>
        <div className="dms-modal__footer">
          <button type="button" className="dms-btn dms-btn--default" onClick={onClose}>Hủy</button>
          <button type="button" className="dms-btn dms-btn--primary" onClick={onDelete}>Xóa</button>
        </div>
      </div>
    </div>
  );
}
