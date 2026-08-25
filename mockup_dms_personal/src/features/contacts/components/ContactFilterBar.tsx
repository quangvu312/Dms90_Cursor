import type { ContactFilters } from '../types';

export const EMPTY_CONTACT_FILTERS: ContactFilters = {
  searchText: '',
  role: '',
  status: '',
  leadSource: '',
};

interface ContactFilterBarProps {
  filters: ContactFilters;
  onChange: (filters: ContactFilters) => void;
  onSearch: () => void;
  onReset: () => void;
}

export function ContactFilterBar({ filters, onChange, onSearch, onReset }: ContactFilterBarProps) {
  const set = <K extends keyof ContactFilters>(key: K, val: ContactFilters[K]) =>
    onChange({ ...filters, [key]: val });

  return (
    <div className="dms-card">
      <div className="dms-card__header">
        <h2 className="dms-card__title">Tìm kiếm theo</h2>
      </div>
      <div className="dms-card__body">
        <div className="dms-filter-panel">
          <div className="dms-form-grid">
            <div className="dms-form-item">
              <input
                className="dms-input"
                value={filters.searchText}
                onChange={(e) => set('searchText', e.target.value)}
                placeholder="Theo Tên | Số điện thoại | email"
              />
            </div>
            <div className="dms-form-item">
              <select className="dms-select" value={filters.role} onChange={(e) => set('role', e.target.value)}>
                <option value="">Chọn vai trò</option>
                <option value="Chủ doanh nghiệp">Chủ doanh nghiệp</option>
                <option value="Mua hàng">Mua hàng</option>
                <option value="Người nhận hàng">Người nhận hàng</option>
                <option value="Quản lý">Quản lý</option>
              </select>
            </div>
            <div className="dms-form-item">
              <select className="dms-select" value={filters.status} onChange={(e) => set('status', e.target.value)}>
                <option value="">Chọn trạng thái</option>
                <option value="Active">Hoạt động</option>
                <option value="Inactive">Không hoạt động</option>
              </select>
            </div>
            <div className="dms-form-item">
              <select className="dms-select" value={filters.leadSource} onChange={(e) => set('leadSource', e.target.value)}>
                <option value="">Chọn nguồn</option>
                <option value="Ad">Quảng cáo</option>
                <option value="Event">Sự kiện</option>
                <option value="Zalo">Zalo</option>
                <option value="Facebook">Facebook</option>
                <option value="Website">Website</option>
                <option value="Partner Referral">Giới thiệu</option>
                <option value="Trade Show">Triển lãm</option>
              </select>
            </div>
          </div>
          <div className="dms-filter-panel__actions">
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
