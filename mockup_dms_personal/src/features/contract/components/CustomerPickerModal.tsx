import { useMemo, useState } from 'react';
import { Pagination } from '../../../components/ui/Pagination';
import type { ContractCustomer } from '../types';
import { CONTRACT_CUSTOMERS } from '../store';
import { StatusTag } from './StatusTag';

interface Props {
  open: boolean;
  selectedId?: string;
  onClose: () => void;
  onConfirm: (customer: ContractCustomer) => void;
}

export function CustomerPickerModal({ open, selectedId, onClose, onConfirm }: Props) {
  const [q, setQ] = useState('');
  const [status, setStatus] = useState('');
  const [appliedQ, setAppliedQ] = useState('');
  const [appliedStatus, setAppliedStatus] = useState('');
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [picked, setPicked] = useState(selectedId || '');

  const filtered = useMemo(() => {
    const needle = appliedQ.trim().toLowerCase();
    return CONTRACT_CUSTOMERS.filter((c) => {
      if (appliedStatus && c.status !== appliedStatus) return false;
      if (!needle) return true;
      const hay = `${c.code} ${c.name} ${c.phone} ${c.address}`.toLowerCase();
      return hay.includes(needle);
    });
  }, [appliedQ, appliedStatus]);

  const total = filtered.length;
  const rows = filtered.slice((page - 1) * size, page * size);

  if (!open) return null;

  return (
    <div className="dms-modal-overlay dms-modal-overlay--nested" onClick={onClose}>
      <div className="dms-modal dms-modal--xl" onClick={(e) => e.stopPropagation()}>
        <div className="dms-modal__header">
          <h2 className="dms-modal__title">Chọn khách hàng</h2>
          <button type="button" className="dms-modal__close" title="Đóng" onClick={onClose}>×</button>
        </div>
        <div className="dms-modal__body">
          <div className="dms-form-grid" style={{ marginBottom: 12 }}>
            <div className="dms-form-item">
              <label className="dms-form-item__label">Tìm kiếm</label>
              <input className="dms-input" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Tìm kiếm theo Mã KH, Tên khách hàng" />
            </div>
            <div className="dms-form-item">
              <label className="dms-form-item__label">Trạng thái</label>
              <select className="dms-select" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="">Trạng thái</option>
                <option value="Hoạt động">Hoạt động</option>
                <option value="Ngưng hoạt động">Ngưng hoạt động</option>
              </select>
            </div>
          </div>
          <div className="dms-filter-panel__actions" style={{ marginBottom: 16 }}>
            <button type="button" className="dms-btn dms-btn--ghost" onClick={() => { setQ(''); setStatus(''); setAppliedQ(''); setAppliedStatus(''); setPage(1); }}>Làm mới</button>
            <button type="button" className="dms-btn dms-btn--primary" onClick={() => { setAppliedQ(q); setAppliedStatus(status); setPage(1); }}>Tìm kiếm</button>
          </div>
          <label className="dms-form-item__label">Danh sách khách hàng</label>
          <div className="dms-table-wrapper">
            <table className="dms-table">
              <thead>
                <tr>
                  <th style={{ width: 40 }} />
                  <th>Mã KH</th>
                  <th>Tên khách hàng</th>
                  <th>Số điện thoại</th>
                  <th>Địa chỉ</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {rows.length === 0 ? (
                  <tr><td colSpan={6}>Không tìm thấy khách hàng phù hợp điều kiện lọc.</td></tr>
                ) : rows.map((c) => (
                  <tr key={c.id} onClick={() => setPicked(c.id)} style={{ cursor: 'pointer' }}>
                    <td>
                      <input type="radio" name="ct-pick-one" checked={picked === c.id} onChange={() => setPicked(c.id)} />
                    </td>
                    <td>{c.code}</td>
                    <td>{c.name}</td>
                    <td>{c.phone || '—'}</td>
                    <td>{c.address || '—'}</td>
                    <td><StatusTag status={c.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {total > 0 ? (
            <Pagination page={page} total={total} size={size} label="khách hàng" sizes={[10, 20, 50]} onPageChange={setPage} onSizeChange={(s) => { setSize(s); setPage(1); }} />
          ) : null}
        </div>
        <div className="dms-modal__footer">
          <button type="button" className="dms-btn dms-btn--default" onClick={onClose}>Đóng</button>
          <button
            type="button"
            className="dms-btn dms-btn--primary"
            onClick={() => {
              const c = CONTRACT_CUSTOMERS.find((x) => x.id === picked);
              if (c) onConfirm(c);
            }}
          >
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  );
}
