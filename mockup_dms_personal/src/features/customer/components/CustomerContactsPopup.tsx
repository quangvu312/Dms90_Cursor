import type { Customer } from '../types';

interface CustomerContactsPopupProps {
  customer: Customer | null;
  onClose: () => void;
}

export function CustomerContactsPopup({ customer, onClose }: CustomerContactsPopupProps) {
  if (!customer) return null;

  const displayName =
    customer.customerType === 'Công ty'
      ? customer.companyName
      : `${customer.lastName} ${customer.middleName} ${customer.firstName}`.replace(/\s+/g, ' ').trim();

  return (
    <div className="dms-modal-overlay" onClick={onClose}>
      <div className="dms-modal dms-modal--lg" onClick={(e) => e.stopPropagation()}>
        <div className="dms-modal__header">
          <div>
            <h2 className="dms-modal__title">Danh sách người liên hệ</h2>
            <p className="dms-pagination__info">{displayName} · {customer.customerCode}</p>
          </div>
          <button type="button" className="dms-modal__close" title="Đóng" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="dms-modal__body">
          <div className="dms-table-wrapper">
            <table className="dms-table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã người liên hệ</th>
                  <th>Tên người liên hệ</th>
                  <th>Số điện thoại</th>
                  <th>Chức vụ</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {customer.contacts.length === 0 ? (
                  <tr>
                    <td colSpan={6}>Chưa có người liên hệ nào</td>
                  </tr>
                ) : (
                  customer.contacts.map((c, i) => (
                    <tr key={c.id}>
                      <td>{i + 1}</td>
                      <td>{c.contactCode}</td>
                      <td>{c.name}</td>
                      <td>{c.phone}</td>
                      <td>{c.jobTitle}</td>
                      <td>
                        <span className={`dms-tag ${c.status === 'Active' ? 'dms-tag--green' : 'dms-tag--default'}`}>
                          {c.status === 'Active' ? 'Hoạt động' : 'Ngừng hoạt động'}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="dms-modal__footer">
          <button type="button" className="dms-btn dms-btn--default" onClick={onClose}>
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}
