import type { Customer } from '../types';

interface CustomerHistoryTabProps {
  customer: Customer;
}

interface HistoryEntry {
  time: string;
  actor: string;
  action: string;
  detail: string;
}

function buildHistory(customer: Customer): HistoryEntry[] {
  const entries: HistoryEntry[] = [];

  if (customer.ngayCapNhat && customer.ngayCapNhat !== customer.ngayTao) {
    entries.push({
      time: customer.ngayCapNhat,
      actor: customer.nguoiCapNhat || '—',
      action: 'Cập nhật thông tin',
      detail: 'Chỉnh sửa thông tin khách hàng',
    });
  }
  if (customer.syncStatus === 'Synced') {
    entries.push({
      time: customer.ngayCapNhat || customer.ngayTao,
      actor: 'Hệ thống ERP',
      action: 'Đồng bộ ERP',
      detail: `Đồng bộ thành công — Mã ERP ${customer.erpCode || '—'}`,
    });
  } else if (customer.syncStatus === 'Failed') {
    entries.push({
      time: customer.ngayCapNhat || customer.ngayTao,
      actor: 'Hệ thống ERP',
      action: 'Đồng bộ ERP',
      detail: 'Đồng bộ thất bại — vui lòng kiểm tra lại dữ liệu',
    });
  } else {
    entries.push({
      time: customer.ngayCapNhat || customer.ngayTao,
      actor: 'Hệ thống ERP',
      action: 'Đồng bộ ERP',
      detail: 'Đang chờ đồng bộ',
    });
  }
  entries.push({
    time: customer.ngayTao,
    actor: customer.nguoiTao || '—',
    action: 'Tạo mới khách hàng',
    detail: `Tạo mã khách hàng ${customer.customerCode}`,
  });

  return entries;
}

export function CustomerHistoryTab({ customer }: CustomerHistoryTabProps) {
  const history = buildHistory(customer);

  return (
    <div className="dms-card">
      <div className="dms-card__header">
        <h3 className="dms-card__title">Lịch sử thay đổi khách hàng</h3>
      </div>
      <div className="dms-card__body">
        <div className="dms-table-wrapper">
          <table className="dms-table">
            <thead>
              <tr>
                <th>Thời gian</th>
                <th>Người thực hiện</th>
                <th>Hành động</th>
                <th>Chi tiết</th>
              </tr>
            </thead>
            <tbody>
              {history.map((h, i) => (
                <tr key={i}>
                  <td>{h.time || '—'}</td>
                  <td>{h.actor}</td>
                  <td><span className="dms-tag dms-tag--blue">{h.action}</span></td>
                  <td>{h.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
