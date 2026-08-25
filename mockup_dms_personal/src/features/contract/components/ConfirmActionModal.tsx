import type { ContractRecord } from '../types';

interface Props {
  mode: 'delete' | 'approve' | null;
  item: ContractRecord | null;
  onClose: () => void;
  onDelete: () => void;
  onApprove: () => void;
  onReject: () => void;
}

export function ConfirmActionModal({ mode, item, onClose, onDelete, onApprove, onReject }: Props) {
  if (!mode || !item) return null;
  const isDelete = mode === 'delete';
  return (
    <div className="dms-modal-overlay" onClick={onClose}>
      <div className="dms-modal dms-modal--sm" onClick={(e) => e.stopPropagation()}>
        <div className="dms-modal__header">
          <h2 className="dms-modal__title">{isDelete ? 'Xóa hợp đồng' : 'Duyệt hợp đồng'}</h2>
          <button type="button" className="dms-modal__close" title="Đóng" onClick={onClose}>×</button>
        </div>
        <div className="dms-modal__body">
          <p className="m-0 mb-2">{isDelete ? 'Bạn có chắc chắn muốn xóa hợp đồng này?' : 'Bạn muốn xử lý hợp đồng này?'}</p>
          <p className="m-0 text-[#8c8c8c] text-sm">{item.contractCode} — {item.name}</p>
        </div>
        <div className="dms-modal__footer">
          {isDelete ? (
            <>
              <button type="button" className="dms-btn dms-btn--default" onClick={onClose}>Hủy</button>
              <button type="button" className="dms-btn dms-btn--primary" onClick={onDelete}>Xóa</button>
            </>
          ) : (
            <>
              <button type="button" className="dms-btn dms-btn--default" onClick={onReject}>Từ chối</button>
              <button type="button" className="dms-btn dms-btn--primary" onClick={onApprove}>Duyệt</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
