import { ActionIconButton, TableActions } from '../../../components/ui/ActionIconButton';
import { Pagination } from '../../../components/ui/Pagination';
import type { ContractModule, ContractRecord } from '../types';
import { customerLabel, typeMeta } from '../store';
import { StatusTag } from './StatusTag';

interface Props {
  module: ContractModule;
  rows: ContractRecord[];
  total: number;
  page: number;
  size: number;
  onPageChange: (p: number) => void;
  onSizeChange: (s: number) => void;
  onView: (row: ContractRecord) => void;
  onEdit: (row: ContractRecord) => void;
  onApprove: (row: ContractRecord) => void;
  onDelete: (row: ContractRecord) => void;
  onCreate: () => void;
}

function canMutate(status: string) {
  return status === 'Khởi tạo' || status === 'DRAFT' || status === 'INIT';
}

function isFinal(status: string) {
  return status === 'Đã duyệt' || status === 'Từ chối' || status === 'APPROVED' || status === 'REJECTED';
}

export function ContractTable({
  module, rows, total, page, size, onPageChange, onSizeChange, onView, onEdit, onApprove, onDelete, onCreate,
}: Props) {
  const isCustomer = module === 'customer';
  const title = isCustomer ? 'Danh sách Hợp đồng khách hàng' : 'Danh sách Hợp đồng mẫu';
  const addLabel = isCustomer ? '+ Thêm' : '+ Tạo mới';
  const colCount = isCustomer ? 12 : 11;

  return (
    <div className="dms-card">
      <div className="dms-card__header">
        <h2 className="dms-card__title">{title}</h2>
        <div className="dms-table__toolbar-actions">
          <button type="button" className="dms-btn dms-btn--primary" onClick={onCreate}>{addLabel}</button>
        </div>
      </div>
      <div className="dms-card__body">
        <div className="dms-table-wrapper">
          <table className="dms-table">
            <thead>
              <tr>
                <th>Mã hợp đồng</th>
                <th>Tên hợp đồng</th>
                <th>Loại hợp đồng</th>
                {isCustomer ? <th>Khách hàng</th> : null}
                <th>Từ ngày</th>
                <th>Đến ngày</th>
                <th>Trạng thái</th>
                <th>Ngày tạo</th>
                <th>Người tạo</th>
                <th>Ngày cập nhật</th>
                <th>Người cập nhật</th>
                <th className="dms-table__cell--fixed-right">Tùy chỉnh</th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={colCount}>Không tìm thấy hợp đồng phù hợp điều kiện lọc.</td>
                </tr>
              ) : rows.map((row) => {
                const type = typeMeta(row.type);
                const final = isFinal(row.status);
                const mutate = canMutate(row.status);
                return (
                  <tr key={row.id}>
                    <td>
                      <a className="dms-table__link" onClick={() => onView(row)}>{row.contractCode}</a>
                    </td>
                    <td>{row.name}</td>
                    <td><span className="dms-tag dms-tag--cyan">{type.shortName || type.name}</span></td>
                    {isCustomer ? <td>{customerLabel(row.customerId) || '—'}</td> : null}
                    <td>{row.startDate || '—'}</td>
                    <td>{row.endDate || '—'}</td>
                    <td><StatusTag status={row.status} /></td>
                    <td>{row.createdAt}</td>
                    <td>{row.createdBy}</td>
                    <td>{row.updatedAt || '—'}</td>
                    <td>{row.updatedBy || '—'}</td>
                    <td className="dms-table__cell--fixed-right">
                      {final ? null : (
                        <TableActions>
                          {mutate ? <ActionIconButton type="edit" title="Chỉnh sửa" onClick={() => onEdit(row)} /> : null}
                          {mutate ? <ActionIconButton type="approve" title="Duyệt" onClick={() => onApprove(row)} /> : null}
                          <ActionIconButton type="delete" title="Xóa" onClick={() => onDelete(row)} />
                        </TableActions>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {total > 0 ? (
          <Pagination
            page={page}
            total={total}
            size={size}
            label="hợp đồng"
            sizes={[10, 20, 50]}
            onPageChange={onPageChange}
            onSizeChange={onSizeChange}
          />
        ) : null}
      </div>
    </div>
  );
}


