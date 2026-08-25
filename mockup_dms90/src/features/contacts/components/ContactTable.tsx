import { Toggle } from '../../../components/ui/Toggle';
import { Pagination } from '../../../components/ui/Pagination';
import type { Contact } from '../types';

interface ContactTableProps {
  contacts: Contact[];
  total: number;
  page: number;
  size: number;
  onPageChange: (p: number) => void;
  onSizeChange: (s: number) => void;
  onEdit: (contact: Contact) => void;
  onToggleStatus: (id: string, status: 'Active' | 'Inactive') => void;
  onAddNew: () => void;
  onExportExcel: () => void;
}

export function ContactTable({
  contacts, total, page, size, onPageChange, onSizeChange,
  onEdit, onToggleStatus, onAddNew, onExportExcel,
}: ContactTableProps) {
  const start = (page - 1) * size;
  const fullName = (c: Contact) =>
    `${c.lastName} ${c.middleName} ${c.firstName}`.replace(/\s+/g, ' ').trim();

  return (
    <div className="dms-card">
      <div className="dms-card__header">
        <h2 className="dms-card__title">Danh sách liên hệ</h2>
        <div className="dms-table__toolbar-actions">
          <button type="button" className="dms-btn dms-btn--default" onClick={onExportExcel}>
            Export Excel
          </button>
          <button type="button" className="dms-btn dms-btn--primary" onClick={onAddNew}>
            Tạo mới
          </button>
        </div>
      </div>
      <div className="dms-card__body">
        <div className="dms-table-wrapper">
          <table className="dms-table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã liên hệ</th>
                <th>Họ và tên</th>
                <th>Vai trò</th>
                <th>Số điện thoại</th>
                <th>Thư điện tử</th>
                <th>Nguồn tiềm năng</th>
                <th>Khách hàng liên kết</th>
                <th>Trạng thái</th>
                <th>Tùy chỉnh</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length === 0 ? (
                <tr>
                  <td colSpan={10}>Không tìm thấy liên hệ nào</td>
                </tr>
              ) : (
                contacts.map((contact, index) => (
                  <tr key={contact.id}>
                    <td>{start + index + 1}</td>
                    <td>
                      <a className="dms-table__link" onClick={() => onEdit(contact)}>
                        {contact.contactId}
                      </a>
                      {contact.source === 'ERP' && (
                        <span className="dms-tag dms-tag--default" title="Tạo/cập nhật gần nhất qua đồng bộ ERP">
                          ERP
                        </span>
                      )}
                    </td>
                    <td>{fullName(contact)}</td>
                    <td>
                      {contact.role ? <span className="dms-tag dms-tag--blue">{contact.role}</span> : '—'}
                    </td>
                    <td>{contact.mainPhone || '—'}</td>
                    <td>{contact.email || '—'}</td>
                    <td>{contact.leadSource || '—'}</td>
                    <td>{contact.linkedCustomerCount > 0 ? contact.linkedCustomerCount : '—'}</td>
                    <td>
                      <Toggle
                        checked={contact.status === 'Active'}
                        onChange={(checked) => {
                          if (!checked && !window.confirm('Ngưng hoạt động liên hệ này? Contact sẽ chuyển sang Ngưng hoạt động, vẫn giữ lịch sử liên kết với các Khách hàng hiện có.')) {
                            return;
                          }
                          onToggleStatus(contact.id, checked ? 'Active' : 'Inactive');
                        }}
                      />
                    </td>
                    <td>
                      <button
                        type="button"
                        className="dms-btn dms-btn--link"
                        title="Chọn để điều chỉnh"
                        onClick={() => onEdit(contact)}
                      >
                        Sửa
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <Pagination
          page={page}
          total={total}
          size={size}
          label="liên hệ"
          sizes={[10, 20, 50]}
          onPageChange={onPageChange}
          onSizeChange={onSizeChange}
        />
      </div>
    </div>
  );
}
