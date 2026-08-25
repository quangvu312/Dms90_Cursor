import { DmsDatePicker } from '../../../components/ui/DmsDatePicker';
import { DmsSelect } from '../../../components/ui/DmsSelect';
import type { ContractFilters } from '../types';
import { CONTRACT_STATUS_OPTIONS, CONTRACT_TYPES } from '../store';

interface Props {
  filters: ContractFilters;
  onChange: (filters: ContractFilters) => void;
  onSearch: () => void;
  onReset: () => void;
}

/** Markup/class khớp Prototype FilterPanel (`pages/contract/page.js` → renderFilter). */
export function ContractFilterBar({ filters, onChange, onSearch, onReset }: Props) {
  const set = <K extends keyof ContractFilters>(key: K, val: ContractFilters[K]) =>
    onChange({ ...filters, [key]: val });

  return (
    <div className="dms-card dms-filter-card">
      <div className="dms-card__body">
        <div className="dms-filter-panel">
          <div className="dms-filter-grid">
            <div className="dms-filter-item">
              <div className="dms-form-item">
                <label className="dms-form-item__label" htmlFor="ct-q">Tìm kiếm theo</label>
                <input
                  id="ct-q"
                  className="dms-input dms-searchbox__input"
                  value={filters.q}
                  onChange={(e) => set('q', e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') onSearch(); }}
                  placeholder="Tìm kiếm theo Mã/Tên hợp đồng"
                />
              </div>
            </div>
            <div className="dms-filter-item">
              <div className="dms-form-item">
                <label className="dms-form-item__label">Loại hợp đồng</label>
                <DmsSelect
                  id="ct-type"
                  placeholder="Loại hợp đồng"
                  value={filters.type}
                  options={CONTRACT_TYPES.map((t) => ({ value: t.code, label: t.name }))}
                  onChange={(v) => set('type', v)}
                />
              </div>
            </div>
            <div className="dms-filter-item">
              <div className="dms-form-item">
                <label className="dms-form-item__label">Trạng thái</label>
                <DmsSelect
                  id="ct-status"
                  placeholder="Trạng thái"
                  value={filters.status}
                  options={CONTRACT_STATUS_OPTIONS.map((s) => ({ value: s.value, label: s.label }))}
                  onChange={(v) => set('status', v)}
                />
              </div>
            </div>
            <div className="dms-filter-item">
              <div className="dms-form-item">
                <label className="dms-form-item__label">Thời gian</label>
                <div className="dms-filter-daterange">
                  <DmsDatePicker id="ct-from" placeholder="Từ ngày" value={filters.from} onChange={(v) => set('from', v)} />
                  <span className="dms-filter-daterange__sep" aria-hidden>→</span>
                  <DmsDatePicker id="ct-to" placeholder="Đến ngày" value={filters.to} onChange={(v) => set('to', v)} />
                </div>
              </div>
            </div>
            <div className="dms-filter-panel__actions">
              <button type="button" className="dms-btn dms-btn--default" onClick={onReset}>Làm mới</button>
              <button type="button" className="dms-btn dms-btn--primary" onClick={onSearch}>Tìm kiếm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
