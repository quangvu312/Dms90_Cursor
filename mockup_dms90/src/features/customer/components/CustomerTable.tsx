import { Toggle } from '../../../components/ui/Toggle';
import { Pagination } from '../../../components/ui/Pagination';
import type { Customer } from '../types';

interface CustomerTableProps {
  customers: Customer[];
  total: number;
  page: number;
  size: number;
  onPageChange: (p: number) => void;
  onSizeChange: (s: number) => void;
  onEdit: (customer: Customer) => void;
  onViewDetail: (customer: Customer) => void;
  onViewContacts: (customer: Customer) => void;
  onToggleActive: (id: string, active: boolean) => void;
  onAddNew: () => void;
  onExportExcel: () => void;
  onImportExcel: () => void;
  onSyncErp: () => void;
  onReviewAdjustments: () => void;
}

const SYNC_TAG: Record<Customer['syncStatus'], string> = {
  Synced: 'dms-tag dms-tag--green',
  Pending: 'dms-tag dms-tag--orange',
  Failed: 'dms-tag dms-tag--red',
};

function formatAddr(addr?: { addressLine1: string; ward: string; city: string } | null) {
  if (!addr) return '—';
  return `${addr.addressLine1}${addr.ward ? `, P. ${addr.ward}` : ''}${addr.city ? `, ${addr.city}` : ''}`;
}

export function CustomerTable({
  customers, total, page, size, onPageChange, onSizeChange,
  onEdit, onViewDetail, onViewContacts, onToggleActive, onAddNew, onExportExcel, onImportExcel, onSyncErp, onReviewAdjustments,
}: CustomerTableProps) {
  return (
    <div className="dms-card">
      <div className="dms-card__header">
        <h2 className="dms-card__title">{total} khách hàng</h2>
        <div className="dms-table__toolbar-actions">
          <button type="button" className="dms-btn dms-btn--default" onClick={onReviewAdjustments}>
            Duyệt điều chỉnh KH
          </button>
          <button type="button" className="dms-btn dms-btn--default" onClick={onImportExcel}>
            Import Excel
          </button>
          <button type="button" className="dms-btn dms-btn--default" onClick={onExportExcel}>
            Export Excel
          </button>
          <button type="button" className="dms-btn dms-btn--primary" onClick={onAddNew}>
            Tạo mới
          </button>
          <button type="button" className="dms-btn dms-btn--ghost" title="Đồng bộ ERP" onClick={onSyncErp}>
            Sync ERP
          </button>
        </div>
      </div>
      <div className="dms-card__body">
        <div className="dms-table-wrapper">
          <table className="dms-table">
            <thead>
              <tr>
                <th>Trạng thái Sync ERP</th>
                <th>Vùng</th>
                <th>Khu vực</th>
                <th>Mã khách hàng</th>
                <th>Mã khách hàng ERP</th>
                <th>Tên khách hàng</th>
                <th>Loại khách hàng</th>
                <th>SĐT</th>
                <th>Email</th>
                <th>MST</th>
                <th>Tình trạng MST</th>
                <th>Địa chỉ hóa đơn</th>
                <th>Địa chỉ giao hàng</th>
                <th>Địa chỉ khách hàng</th>
                <th>Địa chỉ theo vị trí</th>
                <th>Kinh độ</th>
                <th>Vĩ độ</th>
                <th>Trạng thái</th>
                <th>Tuyến</th>
                <th>NV chăm sóc</th>
                <th>Nhóm khách hàng</th>
                <th>Kênh bán hàng</th>
                <th>Danh sách người liên hệ</th>
                <th>Ngày tạo</th>
                <th>Người tạo</th>
                <th>Ngày cập nhật</th>
                <th>Người cập nhật</th>
                <th className="dms-table__cell--fixed-right">Tùy chỉnh</th>
              </tr>
            </thead>
            <tbody>
              {customers.length === 0 ? (
                <tr>
                  <td colSpan={28}>Không tìm thấy khách hàng nào</td>
                </tr>
              ) : (
                customers.map((c) => (
                  <tr key={c.id}>
                    <td>
                      <span className={SYNC_TAG[c.syncStatus]}>{c.syncStatus}</span>
                    </td>
                    <td><span className="dms-tag dms-tag--default">{c.vung}</span></td>
                    <td><span className="dms-tag dms-tag--default">{c.khuVuc}</span></td>
                    <td>{c.customerCode}</td>
                    <td>{c.erpCode || '—'}</td>
                    <td>
                      <a className="dms-table__link" onClick={() => onViewDetail(c)}>
                        {c.customerType === 'Công ty' ? c.companyName : `${c.lastName} ${c.middleName} ${c.firstName}`}
                      </a>
                    </td>
                    <td><span className="dms-tag dms-tag--blue">{c.customerType}</span></td>
                    <td>{c.phone}</td>
                    <td>{c.email}</td>
                    <td>{c.taxCode}</td>
                    <td>{c.taxValidityStatus || '—'}</td>
                    <td>{formatAddr(c.addresses.find((a) => a.isDefaultBilling))}</td>
                    <td>{formatAddr(c.addresses.find((a) => a.isDefaultShipping))}</td>
                    <td>{formatAddr(c.addresses[0])}</td>
                    <td>{c.mapAddress || '—'}</td>
                    <td>{c.longitude || '—'}</td>
                    <td>{c.latitude || '—'}</td>
                    <td>
                      <Toggle checked={c.active} onChange={(val) => onToggleActive(c.id, val)} />
                    </td>
                    <td><span className="dms-tag dms-tag--default">{c.tuyen}</span></td>
                    <td>{c.nvChamSoc}</td>
                    <td>{c.customerGroup}</td>
                    <td>{c.saleChannel}</td>
                    <td>
                      <a className="dms-table__link" onClick={() => onViewContacts(c)}>
                        {c.contacts.length} liên hệ
                      </a>
                    </td>
                    <td>{c.ngayTao}</td>
                    <td>{c.nguoiTao}</td>
                    <td>{c.ngayCapNhat}</td>
                    <td>{c.nguoiCapNhat}</td>
                    <td className="dms-table__cell--fixed-right">
                      <button type="button" className="dms-btn dms-btn--link" title="Chọn để điều chỉnh" onClick={() => onEdit(c)}>
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
          label="khách hàng"
          sizes={[10, 20, 50]}
          onPageChange={onPageChange}
          onSizeChange={onSizeChange}
        />
      </div>
    </div>
  );
}
