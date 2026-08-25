import { useEffect, useState } from 'react';
import type { AddressType, ContactAddress } from '../types';
import { VN_PROVINCES } from '../vnAdministrativeUnits';

interface AddressTabProps {
  addresses: ContactAddress[];
  onChange: (addresses: ContactAddress[]) => void;
}

const TYPE_OPTIONS: { value: AddressType; label: string }[] = [
  { value: 'shipping', label: 'Địa chỉ giao hàng mặc định' },
];

const TYPE_BADGE_LABEL: Record<AddressType, string> = {
  billing: 'Địa chỉ xuất hóa đơn mặc định',
  shipping: 'Địa chỉ giao hàng mặc định',
  work: 'Văn phòng',
  home: 'Nhà riêng',
};

const UNIQUE_TYPES: AddressType[] = ['billing', 'shipping'];

const COUNTRY_LABEL: Record<string, string> = {
  Vietnam: 'Việt Nam',
  Singapore: 'Singapore',
  Thailand: 'Thái Lan',
};

function formatAddressLine(addr: ContactAddress): string {
  return [addr.addressLine1, addr.ward, addr.city].filter(Boolean).join(', ');
}

function formatAddressPreviewLines(addr: ContactAddress): string[] {
  return [
    addr.addressee,
    [addr.addressLine1, addr.ward, addr.city].filter(Boolean).join(', '),
    addr.zipCode,
    addr.country ? (COUNTRY_LABEL[addr.country] ?? addr.country) : '',
  ].filter(Boolean);
}

function emptyAddress(): ContactAddress {
  return {
    id: String(Date.now()),
    label: '',
    types: [],
    country: '',
    attention: '',
    addressee: '',
    phone: '',
    addressLine1: '',
    city: '',
    ward: '',
    zipCode: '',
    latitude: '',
    longitude: '',
  };
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="dms-form-item">
      <label className={`dms-form-item__label${required ? ' is-required' : ''}`}>{label}</label>
      {children}
    </div>
  );
}

export function AddressTab({ addresses, onChange }: AddressTabProps) {
  const [selectedId, setSelectedId] = useState<string>(addresses[0]?.id ?? '');

  useEffect(() => {
    if (!addresses.some((a) => a.id === selectedId)) {
      setSelectedId(addresses[0]?.id ?? '');
    }
  }, [addresses, selectedId]);
  const selected = addresses.find((a) => a.id === selectedId) ?? null;

  const updateSelected = (patch: Partial<ContactAddress>) => {
    if (!selected) return;
    onChange(addresses.map((a) => (a.id === selected.id ? { ...a, ...patch } : a)));
  };

  const isTypeLockedOut = (type: AddressType) =>
    !!selected && !selected.types.includes(type) && addresses.some((a) => a.id !== selected.id && a.types.includes(type));

  const handleAdd = () => {
    const next = emptyAddress();
    onChange([...addresses, next]);
    setSelectedId(next.id);
  };

  const handleRemove = (id: string) => {
    if (!window.confirm('Xóa địa chỉ này?')) return;
    const remaining = addresses.filter((a) => a.id !== id);
    onChange(remaining);
    if (selectedId === id) {
      setSelectedId(remaining[0]?.id ?? '');
    }
  };

  const handleToggleType = (type: AddressType, checked: boolean) => {
    if (!selected) return;
    let next = addresses;
    if (checked && UNIQUE_TYPES.includes(type)) {
      next = next.map((a) => (a.id !== selected.id && a.types.includes(type) ? { ...a, types: a.types.filter((t) => t !== type) } : a));
    }
    next = next.map((a) =>
      a.id === selected.id
        ? { ...a, types: checked ? [...a.types, type] : a.types.filter((t) => t !== type) }
        : a,
    );
    onChange(next);
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
            <div
              key={addr.id}
              className={`dms-card${addr.id === selectedId ? ' is-selected' : ''}`}
              onClick={() => setSelectedId(addr.id)}
              style={{ cursor: 'pointer', marginBottom: 8 }}
            >
              <div className="dms-card__body" style={{ padding: '12px 16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, alignItems: 'flex-start' }}>
                  <div>
                    <strong>{addr.label || 'Địa chỉ chưa đặt tên'}</strong>
                    {addr.types.map((t) => (
                      <span key={t} className="dms-tag dms-tag--green" style={{ marginLeft: 8 }}>
                        {TYPE_BADGE_LABEL[t]}
                      </span>
                    ))}
                    {addr.types.length === 0 && (
                      <span className="dms-tag dms-tag--default" style={{ marginLeft: 8 }}>
                        Địa chỉ khác
                      </span>
                    )}
                    {formatAddressLine(addr) && (
                      <p style={{ margin: '4px 0 0', color: 'var(--color-text-secondary)' }}>{formatAddressLine(addr)}</p>
                    )}
                  </div>
                  <button
                    type="button"
                    className="dms-btn dms-btn--link"
                    title="Xóa địa chỉ"
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
              <div>
                {TYPE_OPTIONS.map((opt) => {
                  const lockedOut = UNIQUE_TYPES.includes(opt.value) && isTypeLockedOut(opt.value);
                  return (
                    <label key={opt.value} className={`dms-checkbox${lockedOut ? ' is-disabled' : ''}`}>
                      <input
                        type="checkbox"
                        className="dms-checkbox__input"
                        checked={selected.types.includes(opt.value)}
                        onChange={(e) => handleToggleType(opt.value, e.target.checked)}
                        disabled={lockedOut}
                      />
                      {opt.label}
                    </label>
                  );
                })}
              </div>
            </Field>

            <div className="dms-form-grid">
              <Field label="Nhãn địa chỉ">
                <input
                  className="dms-input"
                  value={selected.label}
                  onChange={(e) => updateSelected({ label: e.target.value })}
                  placeholder="Ví dụ: Tổng công ty, Nhà riêng..."
                />
              </Field>
              <Field label="Quốc gia" required>
                <select
                  className="dms-select"
                  value={selected.country}
                  onChange={(e) => updateSelected({ country: e.target.value })}
                  required
                >
                  <option value="">Chọn quốc gia</option>
                  <option value="Vietnam">Việt Nam</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Thailand">Thái Lan</option>
                </select>
              </Field>
              <Field label="Ghi chú">
                <input
                  className="dms-input"
                  value={selected.attention}
                  onChange={(e) => updateSelected({ attention: e.target.value })}
                  placeholder="Ví dụ: Giao giờ hành chính..."
                />
              </Field>
              <Field label="Tên người nhận">
                <input
                  className="dms-input"
                  value={selected.addressee}
                  onChange={(e) => updateSelected({ addressee: e.target.value })}
                  placeholder="Tên người nhận..."
                />
              </Field>
              <Field label="Số điện thoại nhận hàng">
                <input
                  className="dms-input"
                  value={selected.phone}
                  onChange={(e) => updateSelected({ phone: e.target.value })}
                  placeholder="Ví dụ: 09xxxxxxxx"
                />
              </Field>
              <Field label="Số nhà/ Tên đường" required>
                <input
                  className="dms-input"
                  value={selected.addressLine1}
                  onChange={(e) => updateSelected({ addressLine1: e.target.value })}
                  placeholder="Số nhà, Đường..."
                  required
                />
              </Field>
              <Field label="Thành phố">
                <select
                  className="dms-select"
                  value={selected.city}
                  onChange={(e) => updateSelected({ city: e.target.value, ward: '' })}
                >
                  <option value="">Chọn tỉnh/thành phố</option>
                  {VN_PROVINCES.map((p) => (
                    <option key={p.name} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Phường - Xã">
                <select
                  className="dms-select"
                  value={selected.ward}
                  onChange={(e) => updateSelected({ ward: e.target.value })}
                  disabled={!selected.city}
                >
                  <option value="">Chọn phường/xã</option>
                  {(VN_PROVINCES.find((p) => p.name === selected.city)?.wards ?? []).map((w) => (
                    <option key={w} value={w}>
                      {w}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Mã bưu chính">
                <input
                  className="dms-input"
                  value={selected.zipCode}
                  onChange={(e) => updateSelected({ zipCode: e.target.value })}
                  placeholder="Ví dụ: 700000"
                />
              </Field>
            </div>

            <Field label="Địa chỉ liên hệ">
              <div className="dms-textarea" style={{ minHeight: 92, height: 'auto' }}>
                {formatAddressPreviewLines(selected).length > 0 ? (
                  formatAddressPreviewLines(selected).map((line, i) => <div key={i}>{line}</div>)
                ) : (
                  <span style={{ color: 'var(--color-text-secondary)' }}>Chưa có thông tin địa chỉ</span>
                )}
              </div>
            </Field>
          </div>
        </div>
      )}
    </div>
  );
}
