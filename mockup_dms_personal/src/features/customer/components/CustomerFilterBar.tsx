import { useState } from 'react';
import { MultiTagSelect } from '../../../components/ui/MultiTagSelect';
import type { CustomerFilters } from '../types';
import {
  VUNG_OPTIONS, NV_CHAM_SOC_OPTIONS, CUSTOMER_RANK_OPTIONS,
  SALE_CHANNEL_OPTIONS, CUSTOMER_GROUP_OPTIONS, ROUTE_OPTIONS,
} from '../types';
import { VN_PROVINCES } from '../../contacts/vnAdministrativeUnits';

interface CustomerFilterBarProps {
  filters: CustomerFilters;
  onChange: (filters: CustomerFilters) => void;
  onSearch: () => void;
  onReset: () => void;
}

export function CustomerFilterBar({ filters, onChange, onSearch, onReset }: CustomerFilterBarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const set = <K extends keyof CustomerFilters>(key: K, val: CustomerFilters[K]) =>
    onChange({ ...filters, [key]: val });

  return (
    <div className="dms-card">
      <div className="dms-card__header">
        <h2 className="dms-card__title">Tìm kiếm theo</h2>
      </div>
      <div className="dms-card__body">
        <div className="dms-filter-panel">
          <div className="dms-form-item">
            <input
              className="dms-input"
              value={filters.searchText}
              onChange={(e) => set('searchText', e.target.value)}
              placeholder="Theo Mã | Tên | SĐT khách hàng"
            />
          </div>

          {!collapsed && (
            <div className="dms-form-grid">
              <div className="dms-form-item">
                <label className="dms-form-item__label">Vùng</label>
                <MultiTagSelect options={VUNG_OPTIONS} selected={filters.vungSelected} placeholder="Chọn vùng" onChange={(v) => set('vungSelected', v)} />
              </div>
              <div className="dms-form-item">
                <label className="dms-form-item__label">Từ ngày – Đến ngày</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <input type="date" className="dms-input" value={filters.tuNgay} onChange={(e) => set('tuNgay', e.target.value)} />
                  <span>→</span>
                  <input type="date" className="dms-input" value={filters.denNgay} onChange={(e) => set('denNgay', e.target.value)} />
                </div>
              </div>
              <div className="dms-form-item">
                <label className="dms-form-item__label">Trạng thái</label>
                <select className="dms-select" value={filters.trangThai} onChange={(e) => set('trangThai', e.target.value)}>
                  <option value="">Tất cả</option>
                  <option value="active">Hoạt động</option>
                  <option value="inactive">Ngừng hoạt động</option>
                </select>
              </div>
              <div className="dms-form-item">
                <label className="dms-form-item__label">NV chăm sóc</label>
                <select className="dms-select" value={filters.nvChamSoc} onChange={(e) => set('nvChamSoc', e.target.value)}>
                  <option value="">Tất cả nhân viên</option>
                  {NV_CHAM_SOC_OPTIONS.map((v) => <option key={v}>{v}</option>)}
                </select>
              </div>
              <div className="dms-form-item">
                <label className="dms-form-item__label">Loại khách hàng</label>
                <select className="dms-select" value={filters.customerType} onChange={(e) => set('customerType', e.target.value)}>
                  <option value="">Tất cả</option>
                  <option value="Công ty">Công ty</option>
                  <option value="Cá nhân">Cá nhân</option>
                </select>
              </div>
              <div className="dms-form-item">
                <label className="dms-form-item__label">Hạng khách hàng</label>
                <select className="dms-select" value={filters.customerRank} onChange={(e) => set('customerRank', e.target.value)}>
                  <option value="">Tất cả hạng</option>
                  {CUSTOMER_RANK_OPTIONS.map((v) => <option key={v}>{v}</option>)}
                </select>
              </div>
              <div className="dms-form-item">
                <label className="dms-form-item__label">Kênh bán hàng</label>
                <select className="dms-select" value={filters.saleChannel} onChange={(e) => set('saleChannel', e.target.value)}>
                  <option value="">Tất cả kênh</option>
                  {SALE_CHANNEL_OPTIONS.map((v) => <option key={v}>{v}</option>)}
                </select>
              </div>
              <div className="dms-form-item">
                <label className="dms-form-item__label">Nhóm khách hàng</label>
                <select className="dms-select" value={filters.customerGroup} onChange={(e) => set('customerGroup', e.target.value)}>
                  <option value="">Tất cả nhóm</option>
                  {CUSTOMER_GROUP_OPTIONS.map((v) => <option key={v}>{v}</option>)}
                </select>
              </div>
              <div className="dms-form-item">
                <label className="dms-form-item__label">Tỉnh/Thành phố</label>
                <select className="dms-select" value={filters.city} onChange={(e) => set('city', e.target.value)}>
                  <option value="">Tất cả tỉnh/thành</option>
                  {VN_PROVINCES.map((p) => <option key={p.name} value={p.name}>{p.name}</option>)}
                </select>
              </div>
              <div className="dms-form-item">
                <label className="dms-form-item__label">Phường/Xã</label>
                <select className="dms-select" value={filters.ward} onChange={(e) => set('ward', e.target.value)}>
                  <option value="">Tất cả phường/xã</option>
                  {(VN_PROVINCES.find((p) => p.name === filters.city)?.wards ?? []).map((w) => (
                    <option key={w} value={w}>{w}</option>
                  ))}
                </select>
              </div>
              <div className="dms-form-item">
                <label className="dms-form-item__label">Tuyến bán hàng</label>
                <select className="dms-select" value={filters.route} onChange={(e) => set('route', e.target.value)}>
                  <option value="">Tất cả tuyến</option>
                  {ROUTE_OPTIONS.map((v) => <option key={v}>{v}</option>)}
                </select>
              </div>
            </div>
          )}

          <div className="dms-filter-panel__actions">
            <button type="button" className="dms-btn dms-btn--link" style={{ marginRight: 'auto' }} onClick={() => setCollapsed((v) => !v)}>
              {collapsed ? 'Mở rộng' : 'Thu gọn'}
            </button>
            <button type="button" className="dms-btn dms-btn--ghost" onClick={onReset}>
              Làm mới
            </button>
            <button type="button" className="dms-btn dms-btn--primary" onClick={onSearch}>
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
