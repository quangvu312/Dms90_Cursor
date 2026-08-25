import { useEffect, useState } from 'react';
import type { Customer, CustomerAddress } from '../types';
import { VN_PROVINCES } from '../../contacts/vnAdministrativeUnits';

interface CustomerAddressTabProps {
  formData: Customer;
  onChange: <K extends keyof Customer>(name: K, value: Customer[K]) => void;
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="dms-form-item">
      <label className={`dms-form-item__label${required ? ' is-required' : ''}`}>{label}</label>
      {children}
    </div>
  );
}

function buildMapAddress(addressee: string, addr1: string, ward: string, city: string, country: string): string {
  return [addressee, addr1, ward ? `P. ${ward}` : '', city, country].filter(Boolean).join('; ');
}

function formatAddressLine(addr: CustomerAddress): string {
  return [addr.addressLine1, addr.ward, addr.city].filter(Boolean).join(', ');
}

function emptyAddress(customer: Customer): CustomerAddress {
  return {
    id: String(Date.now()),
    label: '',
    isDefaultShipping: false,
    isDefaultBilling: false,
    addressee: customer.customerType === 'Công ty' ? customer.companyName : `${customer.lastName} ${customer.middleName} ${customer.firstName}`.trim(),
    phone: customer.phone,
    country: 'Việt Nam',
    city: '',
    ward: '',
    addressLine1: '',
  };
}

export function CustomerAddressTab({ formData, onChange }: CustomerAddressTabProps) {
  const { addresses } = formData;
  const [selectedId, setSelectedId] = useState<string>(addresses[0]?.id ?? '');
  const [locating, setLocating] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const selected = addresses.find((a) => a.id === selectedId) ?? null;

  useEffect(() => {
    if (!addresses.some((a) => a.id === selectedId)) {
      setSelectedId(addresses[0]?.id ?? '');
    }
  }, [addresses, selectedId]);

  const setAddresses = (next: CustomerAddress[]) => onChange('addresses', next);

  const updateSelected = (patch: Partial<CustomerAddress>) => {
    if (!selected) return;
    setAddresses(addresses.map((a) => (a.id === selected.id ? { ...a, ...patch } : a)));
  };

  const handleAdd = () => {
    const next = { ...emptyAddress(formData), isDefaultShipping: true };
    const prev = addresses.map((a) => ({ ...a, isDefaultShipping: false }));
    setAddresses([...prev, next]);
    setSelectedId(next.id);
  };

  const handleRemove = (id: string) => {
    if (!window.confirm('Xóa địa chỉ này?')) return;
    const removed = addresses.find((a) => a.id === id);
    const remaining = addresses.filter((a) => a.id !== id);
    if (removed && (removed.isDefaultShipping || removed.isDefaultBilling) && remaining.length > 0) {
      remaining[0] = {
        ...remaining[0],
        isDefaultShipping: remaining[0].isDefaultShipping || removed.isDefaultShipping,
        isDefaultBilling: remaining[0].isDefaultBilling || removed.isDefaultBilling,
      };
    }
    setAddresses(remaining);
    if (selectedId === id) {
      setSelectedId(remaining[0]?.id ?? '');
    }
  };

  const handleToggleDefault = (field: 'isDefaultShipping' | 'isDefaultBilling', checked: boolean) => {
    if (!selected) return;
    const next = addresses.map((a) => {
      if (a.id === selected.id) return { ...a, [field]: checked };
      if (checked && a[field]) return { ...a, [field]: false };
      return a;
    });
    setAddresses(next);
  };

  const isDefaultLockedOut = (field: 'isDefaultShipping' | 'isDefaultBilling') =>
    !!selected && !selected[field] && addresses.some((a) => a.id !== selected.id && a[field]);

  const defaultAddress = selected
    ? buildMapAddress(selected.addressee, selected.addressLine1, selected.ward, selected.city, selected.country)
    : '';

  const handleFindLocation = () => {
    if (!selected) return;
    if (!selected.addressLine1) {
      alert('Vui lòng nhập Số nhà/tên đường trước khi tìm vị trí!');
      return;
    }
    setLocating(true);
    setTimeout(() => {
      setLocating(false);
      onChange('mapAddress', defaultAddress);
      onChange('latitude', '10.776900');
      onChange('longitude', '106.700900');
      setShowPopup(true);
    }, 800);
  };

  const handleUpdateFromMap = () => {
    onChange('mapAddress', defaultAddress);
    onChange('latitude', '10.776900');
    onChange('longitude', '106.700900');
    setShowPopup(false);
  };

  return (
    <div>
      <div className="dms-card">
        <div className="dms-card__header">
          <h3 className="dms-card__title">Danh sách địa chỉ</h3>
        </div>
        <div className="dms-card__body">
          {addresses.length === 0 && (
            <div className="dms-empty">
              <p className="dms-empty__title">Chưa có địa chỉ nào. Bấm &quot;Thêm địa chỉ&quot; để tạo mới.</p>
            </div>
          )}
          {addresses.map((addr) => (
            <div key={addr.id} className="dms-card" onClick={() => setSelectedId(addr.id)} style={{ cursor: 'pointer', marginBottom: 8 }}>
              <div className="dms-card__body" style={{ padding: '12px 16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                  <div>
                    <strong>{addr.label || 'Địa chỉ chưa đặt tên'}</strong>
                    {addr.isDefaultShipping && <span className="dms-tag dms-tag--green" style={{ marginLeft: 8 }}>Giao hàng mặc định</span>}
                    {addr.isDefaultBilling && <span className="dms-tag dms-tag--orange" style={{ marginLeft: 8 }}>Xuất hóa đơn mặc định</span>}
                    {formatAddressLine(addr) && (
                      <p style={{ margin: '4px 0 0', color: 'var(--color-text-secondary)' }}>{formatAddressLine(addr)}</p>
                    )}
                  </div>
                  <button
                    type="button"
                    className="dms-btn dms-btn--link"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemove(addr.id);
                    }}
                  >
                    Xóa
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button type="button" className="dms-btn dms-btn--ghost" onClick={handleAdd}>
            Thêm địa chỉ
          </button>
        </div>
      </div>

      {selected && (
        <div className="dms-card">
          <div className="dms-card__header">
            <h3 className="dms-card__title">Chi tiết địa chỉ</h3>
          </div>
          <div className="dms-card__body">
            <Field label="Loại địa chỉ">
              <label className={`dms-checkbox${isDefaultLockedOut('isDefaultShipping') ? ' is-disabled' : ''}`}>
                <input
                  type="checkbox"
                  className="dms-checkbox__input"
                  checked={selected.isDefaultShipping}
                  onChange={(e) => handleToggleDefault('isDefaultShipping', e.target.checked)}
                  disabled={isDefaultLockedOut('isDefaultShipping')}
                />
                Địa chỉ giao hàng mặc định
              </label>
            </Field>
            {isDefaultLockedOut('isDefaultShipping') && (
              <p className="dms-pagination__info">
                Đã có địa chỉ khác giữ vai trò mặc định — bỏ chọn ở địa chỉ đó trước nếu muốn chuyển sang địa chỉ này.
              </p>
            )}

            <div className="dms-form-grid">
              <Field label="Nhãn địa chỉ">
                <input className="dms-input" value={selected.label} onChange={(e) => updateSelected({ label: e.target.value })} placeholder="Ví dụ: Trụ sở chính, Kho hàng Q7..." />
              </Field>
              <Field label="Tên người nhận (Addressee)">
                <input className="dms-input" value={selected.addressee} onChange={(e) => updateSelected({ addressee: e.target.value })} placeholder="Tự động theo tên khách hàng" />
              </Field>
              <Field label="Số điện thoại nhận hàng">
                <input className="dms-input" value={selected.phone} onChange={(e) => updateSelected({ phone: e.target.value })} placeholder="Ví dụ: 09xxxxxxxx" />
              </Field>
              <Field label="Đất nước" required>
                <select className="dms-select" value={selected.country} onChange={(e) => updateSelected({ country: e.target.value })} required>
                  <option value="Việt Nam">Việt Nam</option>
                </select>
              </Field>
              <Field label="Tỉnh/Thành phố" required>
                <select className="dms-select" value={selected.city} onChange={(e) => updateSelected({ city: e.target.value, ward: '' })} required>
                  <option value="">Chọn tỉnh/thành phố</option>
                  {VN_PROVINCES.map((p) => <option key={p.name} value={p.name}>{p.name}</option>)}
                </select>
              </Field>
              <Field label="Phường/Xã" required>
                <select className="dms-select" value={selected.ward} onChange={(e) => updateSelected({ ward: e.target.value })} disabled={!selected.city} required>
                  <option value="">Chọn phường/xã</option>
                  {(VN_PROVINCES.find((p) => p.name === selected.city)?.wards ?? []).map((w) => <option key={w} value={w}>{w}</option>)}
                </select>
              </Field>
              <Field label="Số nhà/tên đường (Address 1)" required>
                <input className="dms-input" value={selected.addressLine1} onChange={(e) => updateSelected({ addressLine1: e.target.value })} placeholder="Số 12 đường Lê Lợi" required />
              </Field>
              <Field label="Địa chỉ">
                <input className="dms-input" value={defaultAddress || 'Chưa có thông tin địa chỉ'} disabled />
              </Field>
            </div>
          </div>
        </div>
      )}

      <div className="dms-card">
        <div className="dms-card__header">
          <h3 className="dms-card__title">Định vị trên bản đồ</h3>
        </div>
        <div className="dms-card__body">
          <div className="dms-form-grid">
            <Field label="Địa chỉ theo vị trí">
              <input className="dms-input" value={formData.mapAddress || 'Hiển thị địa chỉ theo vị trí'} disabled />
            </Field>
            <Field label="Kinh độ">
              <input className="dms-input" value={formData.longitude || 'Kinh độ'} disabled />
            </Field>
            <Field label="Vĩ độ">
              <input className="dms-input" value={formData.latitude || 'Vĩ độ'} disabled />
            </Field>
          </div>
          <div style={{ margin: '12px 0' }}>
            <button type="button" className="dms-btn dms-btn--primary" onClick={handleFindLocation} disabled={locating || !selected}>
              {locating ? 'Đang định vị...' : 'Tìm vị trí theo địa chỉ đang chọn'}
            </button>
          </div>
          <div className="dms-card" style={{ minHeight: 280, position: 'relative', background: '#e5e3df' }}>
            <button
              type="button"
              className="dms-btn dms-btn--primary"
              onClick={() => setShowPopup((v) => !v)}
              style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
            >
              Pin
            </button>
            {showPopup && (
              <div className="dms-card" style={{ position: 'absolute', left: '50%', top: '40%', transform: 'translate(-50%, -100%)', width: 220 }}>
                <div className="dms-card__body">
                  <button type="button" className="dms-btn dms-btn--primary" onClick={handleUpdateFromMap}>
                    Cập nhật vị trí
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
