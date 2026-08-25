import { ActionIconButton, TableActions } from '../../../components/ui/ActionIconButton';
import { Pagination } from '../../../components/ui/Pagination';
import { Toggle } from '../../../components/ui/Toggle';
import type { ContractModule, ContractRecord } from '../types';
import { customerName, typeName } from '../store';
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
  onDelete: (row: ContractRecord) => void;
  onCreate: () => void;
  onToggleActive?: (row: ContractRecord, isActive: boolean) => void;
}

export function ContractTable({
  module, rows, total, page, size, onPageChange, onSizeChange, onView, onEdit, onDelete, onCreate, onToggleActive,
}: Props) {
  const isCustomer = module === 'customer';
  const title = isCustomer ? 'Danh sách Hợp đồng khách hàng' : 'Danh sách Loại hợp đồng';
  const addLabel = '+ Thêm';
  const colCount = isCustomer ? 9 : 8;
  const emptyLabel = isCustomer ? 'Không tìm thấy hợp đồng phù hợp điều kiện lọc.' : 'Không tìm thấy loại hợp đồng phù hợp điều kiện lọc.';

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
                {isCustomer ? (
                  <>
                    <th>Mã hợp đồng</th>
                    <th>Tên hợp đồng</th>
                    <th>Loại hợp đồng</th>
                    <th>Khách hàng</th>
                    <th>Ngày tạo</th>
                    <th>Người tạo</th>
                    <th>Ngày cập nhật</th>
                    <th>Người cập nhật</th>
                  </>
                ) : (
                  <>
                    <th>Mã loại hợp đồng</th>
                    <th>Tên loại hợp đồng</th>
                    <th>Trạng thái hoạt động</th>
                    <th>Ngày tạo</th>
                    <th>Người tạo</th>
                    <th>Ngày cập nhật</th>
                    <th>Người cập nhật</th>
                  </>
                )}
                <th className="dms-table__cell--fixed-right">Tùy chỉnh</th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={colCount}>{emptyLabel}</td>
                </tr>
              ) : rows.map((row) => (
                <tr key={row.id}>
                  <td>
                    <a className="dms-table__link" onClick={() => onView(row)}>{row.contractCode}</a>
                  </td>
                  <td>{row.name}</td>
                  {isCustomer ? (
                    <>
                      <td>{typeName(row.contractTypeId) || '—'}</td>
                      <td>{customerName(row.customerId) || '—'}</td>
                    </>
                  ) : (
                    <td>
                      {onToggleActive ? (
                        <Toggle checked={row.isActive !== false} onChange={(val) => onToggleActive(row, val)} />
                      ) : (
                        <StatusTag status={row.isActive !== false ? 'Hoạt động' : 'Ngừng hoạt động'} />
                      )}
                    </td>
                  )}
                  <td>{row.createdAt}</td>
                  <td>{row.createdBy}</td>
                  <td>{row.updatedAt || '—'}</td>
                  <td>{row.updatedBy || '—'}</td>
                  <td className="dms-table__cell--fixed-right">
                    <TableActions>
                      <ActionIconButton type="edit" title="Chỉnh sửa" onClick={() => onEdit(row)} />
                      <ActionIconButton type="delete" title="Xóa" onClick={() => onDelete(row)} />
                    </TableActions>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {total > 0 ? (
          <Pagination
            page={page}
            total={total}
            size={size}
            label={isCustomer ? 'hợp đồng' : 'loại hợp đồng'}
            sizes={[10, 20, 50]}
            onPageChange={onPageChange}
            onSizeChange={onSizeChange}
          />
        ) : null}
      </div>
    </div>
  );
}
