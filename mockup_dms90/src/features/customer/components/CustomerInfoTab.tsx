import { useState } from 'react';
import { SectionCard } from './SectionCard';
import { Toggle } from '../../../components/ui/Toggle';
import type { Customer, CustomerAddress } from '../types';
import {
  CUSTOMER_GROUP_OPTIONS, BUSINESS_UNIT_OPTIONS, SALE_CHANNEL_OPTIONS,
  STORE_TYPE_OPTIONS, STORE_LOCATION_OPTIONS, PAYMENT_TERM_OPTIONS,
} from '../types';
import { lookupTaxCode } from '../taxLookup';

interface CustomerInfoTabProps {
  formData: Customer;
  onChange: <K extends keyof Customer>(name: K, value: Customer[K]) => void;
}

function Field({
  label, required, span, children,
}: {
  label: string;
  required?: boolean;
  span?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={`dms-form-item${span ? ' dms-form-grid__span-2' : ''}`}>
      <label className={`dms-form-item__label${required ? ' is-required' : ''}`}>{label}</label>
      {children}
    </div>
  );
}

function emptyBillingAddress(): CustomerAddress {
  return {
    id: String(Date.now()),
    label: 'Địa chỉ đăng ký kinh doanh',
    isDefaultShipping: false,
    isDefaultBilling: true,
    addressee: '',
    phone: '',
    country: 'Việt Nam',
    city: '',
    ward: '',
    addressLine1: '',
  };
}

export function CustomerInfoTab({ formData, onChange }: CustomerInfoTabProps) {
  const [validatingTax, setValidatingTax] = useState(false);
  const [taxLookupError, setTaxLookupError] = useState('');

  const handleValidateTax = async () => {
    if (!formData.taxCode) {
      alert('Vui lòng nhập Mã số thuế/CCCD trước khi kiểm tra!');
      return;
    }
    setTaxLookupError('');
    setValidatingTax(true);
    const result = await lookupTaxCode(formData.taxCode);
    setValidatingTax(false);

    if (!result) {
      setTaxLookupError('Không tìm thấy thông tin cho Mã số thuế/CCCD này. Vui lòng kiểm tra lại và thử lại.');
      return;
    }

    if (result.kind === 'individual') {
      onChange('customerType', 'Cá nhân');
      onChange('lastName', result.lastName ?? '');
      onChange('middleName', result.middleName ?? '');
      onChange('firstName', result.firstName ?? '');
    } else {
      onChange('customerType', 'Công ty');
      onChange('companyName', result.companyName ?? '');
    }
    onChange('taxValidityStatus', result.validityStatus || 'Đã xác thực');
    onChange('taxIdentityLocked', true);

    if (result.address) {
      const existingBilling = formData.addresses.find((a) => a.isDefaultBilling);
      const nextAddress: CustomerAddress = {
        ...(existingBilling ?? emptyBillingAddress()),
        city: result.address.city,
        ward: result.address.ward,
        addressLine1: result.address.addressLine1,
      };
      const nextAddresses = existingBilling
        ? formData.addresses.map((a) => (a.id === existingBilling.id ? nextAddress : a))
        : [...formData.addresses, nextAddress];
      onChange('addresses', nextAddresses);
    }
  };

  const billing = formData.addresses.find((a) => a.isDefaultBilling);
  const billingText = billing
    ? formData.customerType === 'Công ty'
      ? [billing.addressLine1, billing.ward, billing.city].filter(Boolean).join(', ')
      : billing.addressLine1
    : '';

  return (
    <div>
      <SectionCard title="Thông tin khách hàng">
        <div className="dms-form-grid">
          <Field label="Loại khách hàng">
            <div>
              <label className="dms-radio">
                <input
                  type="radio"
                  className="dms-radio__input"
                  checked={formData.customerType === 'Công ty'}
                  onChange={() => onChange('customerType', 'Công ty')}
                />
                Công ty
              </label>
              <label className="dms-radio" style={{ marginLeft: 16 }}>
                <input
                  type="radio"
                  className="dms-radio__input"
                  checked={formData.customerType === 'Cá nhân'}
                  onChange={() => onChange('customerType', 'Cá nhân')}
                />
                Cá nhân
              </label>
            </div>
          </Field>
          <Field label="Trạng thái">
            <Toggle
              checked={formData.active}
              onChange={(checked) => onChange('active', checked)}
            />
            <span style={{ marginLeft: 8 }}>{formData.active ? 'Hoạt động' : 'Ngừng hoạt động'}</span>
          </Field>
          <Field label="Mã khách hàng">
            <input className="dms-input" value={formData.customerCode || 'Tự động sinh khi lưu'} disabled />
          </Field>
          <Field label="Mã số thuế / CCCD" required span>
            <div style={{ display: 'flex', gap: 8 }}>
              <input
                className="dms-input"
                value={formData.taxCode}
                onChange={(e) => {
                  onChange('taxCode', e.target.value);
                  onChange('taxIdentityLocked', false);
                  onChange('taxValidityStatus', '');
                  setTaxLookupError('');
                }}
                placeholder="0312xxxxxx"
                required
              />
              <button type="button" className="dms-btn dms-btn--primary" onClick={handleValidateTax} disabled={validatingTax}>
                {validatingTax ? 'Đang kiểm tra...' : 'Kiểm tra MST'}
              </button>
            </div>
            {formData.taxIdentityLocked && (
              <p className="dms-pagination__info">Hợp lệ — đã autofill thông tin Tên, Địa chỉ</p>
            )}
            {taxLookupError && <p className="dms-form-item__error">{taxLookupError}</p>}
          </Field>
          <Field label="Khách hàng cha (Parent)">
            <input className="dms-input" value={formData.parentCustomer || 'Đồng bộ từ ERP'} disabled />
          </Field>

          {formData.taxValidityStatus && (
            <>
              <Field label="Địa chỉ hóa đơn" span>
                <textarea
                  className="dms-textarea"
                  value={billingText}
                  readOnly={formData.customerType === 'Công ty'}
                  onChange={(e) => {
                    const existingBilling = formData.addresses.find((a) => a.isDefaultBilling);
                    const nextAddress: CustomerAddress = {
                      ...(existingBilling ?? emptyBillingAddress()),
                      addressLine1: e.target.value,
                    };
                    const nextAddresses = existingBilling
                      ? formData.addresses.map((a) => (a.id === existingBilling.id ? nextAddress : a))
                      : [...formData.addresses, nextAddress];
                    onChange('addresses', nextAddresses);
                  }}
                  placeholder="Nhập địa chỉ hóa đơn..."
                />
              </Field>
              <Field label="Trạng thái MST">
                <input className="dms-input" value={formData.taxValidityStatus} disabled />
              </Field>
            </>
          )}

          {formData.customerType === 'Công ty' ? (
            <Field label="Tên công ty" required span>
              <input
                className="dms-input"
                value={formData.companyName}
                onChange={(e) => onChange('companyName', e.target.value)}
                placeholder="Nhập tên công ty"
                disabled={formData.taxIdentityLocked}
                required
              />
            </Field>
          ) : (
            <>
              <Field label="Họ" required>
                <input className="dms-input" value={formData.lastName} onChange={(e) => onChange('lastName', e.target.value)} placeholder="Họ" disabled={formData.taxIdentityLocked} required />
              </Field>
              <Field label="Tên đệm">
                <input className="dms-input" value={formData.middleName} onChange={(e) => onChange('middleName', e.target.value)} placeholder="Tên đệm" disabled={formData.taxIdentityLocked} />
              </Field>
              <Field label="Tên" required>
                <input className="dms-input" value={formData.firstName} onChange={(e) => onChange('firstName', e.target.value)} placeholder="Tên" disabled={formData.taxIdentityLocked} required />
              </Field>
              <Field label="Tên khách hàng" span>
                <input
                  className="dms-input"
                  value={[formData.lastName, formData.middleName, formData.firstName].filter(Boolean).join(' ') || '—'}
                  disabled
                />
              </Field>
            </>
          )}

          <Field label="Email">
            <input className="dms-input" type="email" value={formData.email} onChange={(e) => onChange('email', e.target.value)} placeholder="ten@congty.com" />
          </Field>
          <Field label="Số điện thoại" required>
            <input
              className="dms-input"
              type="tel"
              value={formData.phone}
              onChange={(e) => onChange('phone', e.target.value.replace(/[^\d]/g, ''))}
              placeholder="09xxxxxxxx"
              pattern="0\d{9,10}"
              required
            />
          </Field>
          <Field label="Fax">
            <input className="dms-input" value={formData.fax} onChange={(e) => onChange('fax', e.target.value)} placeholder="028-xxxx-xxxx" />
          </Field>
        </div>
      </SectionCard>

      <SectionCard title="Phân loại và kênh">
        <div className="dms-form-grid">
          <Field label="Nhóm khách hàng">
            <select className="dms-select" value={formData.customerGroup} onChange={(e) => onChange('customerGroup', e.target.value)}>
              <option value="">Chọn nhóm khách hàng</option>
              {CUSTOMER_GROUP_OPTIONS.map((v) => <option key={v}>{v}</option>)}
            </select>
          </Field>
          <Field label="Đơn vị kinh doanh (BU)">
            <select className="dms-select" value={formData.businessUnit} onChange={(e) => onChange('businessUnit', e.target.value)}>
              <option value="">Chọn đơn vị</option>
              {BUSINESS_UNIT_OPTIONS.map((v) => <option key={v}>{v}</option>)}
            </select>
          </Field>
          <Field label="Kênh bán hàng">
            <select className="dms-select" value={formData.saleChannel} onChange={(e) => onChange('saleChannel', e.target.value)}>
              <option value="">Chọn kênh bán hàng</option>
              {SALE_CHANNEL_OPTIONS.map((v) => <option key={v}>{v}</option>)}
            </select>
          </Field>
          <Field label="Phân loại khách hàng">
            <select className="dms-select" value={formData.storeType} onChange={(e) => onChange('storeType', e.target.value)}>
              <option value="">Chọn phân loại khách hàng</option>
              {STORE_TYPE_OPTIONS.map((v) => <option key={v}>{v}</option>)}
            </select>
          </Field>
          <Field label="Hạng khách hàng">
            <select className="dms-select" value={formData.storeRank} onChange={(e) => onChange('storeRank', e.target.value)}>
              <option value="">Chọn hạng khách hàng</option>
              <option>Hạng A</option>
              <option>Hạng B</option>
              <option>Hạng C</option>
            </select>
          </Field>
          <Field label="Vị trí khách hàng">
            <select className="dms-select" value={formData.storeLocation} onChange={(e) => onChange('storeLocation', e.target.value)}>
              <option value="">Chọn vị trí khách hàng</option>
              {STORE_LOCATION_OPTIONS.map((v) => <option key={v}>{v}</option>)}
            </select>
          </Field>
        </div>
      </SectionCard>

      <SectionCard title="Thông tin tài chính">
        <div className="dms-form-grid">
          <Field label="Điều khoản thanh toán (Term)">
            <select className="dms-select" value={formData.paymentTerm} onChange={(e) => onChange('paymentTerm', e.target.value)}>
              <option value="">Chọn điều khoản</option>
              {PAYMENT_TERM_OPTIONS.map((v) => <option key={v}>{v}</option>)}
            </select>
          </Field>
          <Field label="Hạn mức tín dụng (Credit Limit)">
            <input
              className="dms-input"
              type="number"
              min={0}
              step={1_000_000}
              value={formData.creditLimit}
              onChange={(e) => onChange('creditLimit', Number(e.target.value))}
              placeholder="0"
            />
          </Field>
        </div>
      </SectionCard>

      <SectionCard title="Hình ảnh khách hàng">
        <p className="dms-pagination__info">Hình ảnh khách hàng ({formData.images.length}/10)</p>
        <div className="dms-form-grid">
          {formData.images.map((img) => (
            <div key={img.id} className="dms-card">
              <img src={img.url} alt={img.name} style={{ width: '100%', height: 80, objectFit: 'cover' }} />
            </div>
          ))}
          {formData.images.length < 10 && (
            <button
              type="button"
              className="dms-btn dms-btn--ghost"
              onClick={() => {
                onChange('images', [
                  ...formData.images,
                  { id: String(Date.now()), url: `https://picsum.photos/seed/${Date.now()}/200`, name: 'Ảnh mẫu' },
                ]);
              }}
            >
              Thêm ảnh
            </button>
          )}
        </div>
      </SectionCard>
    </div>
  );
}
