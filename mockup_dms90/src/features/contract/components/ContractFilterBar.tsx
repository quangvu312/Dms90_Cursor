import { DmsSelect } from '../../../components/ui/DmsSelect';
import type { ContractFilters, ContractModule } from '../types';
import { CONTRACT_ACTIVE_OPTIONS, CONTRACT_CUSTOMER_OPTIONS, getContractTypeOptions } from '../store';
import { ContractDateRange } from './ContractDateRange';

interface Props {
  module: ContractModule;
  filters: ContractFilters;
  onChange: (filters: ContractFilters) => void;
  onSearch: () => void;
  onReset: () => void;
}

export function ContractFilterBar({ module, filters, onChange, onSearch, onReset }: Props) {
  const set = <K extends keyof ContractFilters>(key: K, val: ContractFilters[K]) =>
    onChange({ ...filters, [key]: val });
  const isCustomer = module === 'customer';

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
                  placeholder={isCustomer ? 'Tìm kiếm theo Mã/Tên hợp đồng' : 'Tìm kiếm theo Mã/Tên loại hợp đồng'}
                />
              </div>
            </div>
            {isCustomer ? (
              <div className="dms-filter-item">
                <div className="dms-form-item">
                  <label className="dms-form-item__label">Loại hợp đồng</label>
                  <DmsSelect
                    id="ct-type"
                    placeholder="Loại hợp đồng"
                    value={filters.type}
                    options={getContractTypeOptions(undefined, false)}
                    onChange={(v) => set('type', v)}
                  />
                </div>
              </div>
            ) : null}
            {isCustomer ? (
              <div className="dms-filter-item">
                <div className="dms-form-item">
                  <label className="dms-form-item__label">Khách hàng</label>
                  <DmsSelect
                    id="ct-customer"
                    placeholder="Tìm kiếm / chọn khách hàng"
                    value={filters.customerId}
                    options={CONTRACT_CUSTOMER_OPTIONS}
                    onChange={(v) => set('customerId', v)}
                  />
                </div>
              </div>
            ) : (
              <div className="dms-filter-item">
                <div className="dms-form-item">
                  <label className="dms-form-item__label">Trạng thái</label>
                  <DmsSelect
                    id="ct-active"
                    placeholder="Trạng thái"
                    value={filters.active}
                    options={CONTRACT_ACTIVE_OPTIONS}
                    onChange={(v) => set('active', v)}
                  />
                </div>
              </div>
            )}
            {isCustomer ? (
              <div className="dms-filter-item ct-filter-daterange">
                <div className="dms-form-item">
                  <label className="dms-form-item__label">Thời gian áp dụng</label>
                  <ContractDateRange
                    id="ct-filter-effective"
                    from={filters.effectiveFrom}
                    to={filters.effectiveTo}
                    onChange={(from, to) => onChange({ ...filters, effectiveFrom: from, effectiveTo: to })}
                  />
                </div>
              </div>
            ) : null}
          </div>
          <div className="dms-filter-panel__actions">
            <button type="button" className="dms-btn dms-btn--default" onClick={onReset}>Làm mới</button>
            <button type="button" className="dms-btn dms-btn--primary" onClick={onSearch}>Tìm kiếm</button>
          </div>
        </div>
      </div>
    </div>
  );
}
