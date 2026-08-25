import { useState } from 'react';
import { CustomerInfoTab } from './CustomerInfoTab';
import { CustomerContactsTab } from './CustomerContactsTab';
import { CustomerAddressTab } from './CustomerAddressTab';
import { CustomerHistoryTab } from './CustomerHistoryTab';
import type { Customer } from '../types';

interface CustomerModalProps {
  isOpen: boolean;
  customer: Customer | null;
  readOnly?: boolean;
  onSave: (customer: Customer) => void;
  onClose: () => void;
}

function emptyCustomer(): Customer {
  return {
    id: '',
    customerCode: '',
    erpCode: '',
    syncStatus: 'Pending',
    customerType: 'Công ty',
    active: true,
    companyName: '',
    lastName: '',
    middleName: '',
    firstName: '',
    parentCustomer: '',
    email: '',
    phone: '',
    fax: '',
    taxCode: '',
    taxIssuePlace: '',
    taxIssueDate: '',
    businessType: '',
    taxValidityStatus: '',
    taxIdentityLocked: false,
    customerGroup: '',
    businessUnit: '',
    saleChannel: '',
    storeType: '',
    storeRank: '',
    storeLocation: '',
    currency: 'VND',
    paymentTerm: '',
    creditLimit: 0,
    images: [],
    contacts: [],
    addresses: [],
    mapAddress: '',
    latitude: '',
    longitude: '',
    vung: '',
    khuVuc: '',
    tuyen: '',
    nvChamSoc: '',
    ngayTao: '',
    nguoiTao: '',
    ngayCapNhat: '',
    nguoiCapNhat: '',
  };
}

type TabKey = 'info' | 'contacts' | 'address' | 'history';

export function CustomerModal({ isOpen, customer, readOnly = false, onSave, onClose }: CustomerModalProps) {
  const [activeTab, setActiveTab] = useState<TabKey>('info');
  const [formData, setFormData] = useState<Customer>(() =>
    customer
      ? { ...customer, addresses: customer.addresses.map((a) => ({ ...a })), contacts: [...customer.contacts], images: [...customer.images] }
      : emptyCustomer(),
  );

  if (!isOpen) return null;

  const isEdit = !!(customer && customer.id);

  const handleFieldChange = <K extends keyof Customer>(name: K, value: Customer[K]) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClose = () => {
    if (readOnly || window.confirm('Bạn có chắc chắn muốn Thoát?')) {
      onClose();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (readOnly) return;

    if (formData.customerType === 'Công ty' && !formData.companyName) {
      setActiveTab('info');
      alert('Vui lòng nhập Tên công ty!');
      return;
    }
    if (formData.customerType === 'Cá nhân' && !formData.lastName) {
      setActiveTab('info');
      alert('Vui lòng nhập Họ!');
      return;
    }
    if (!formData.phone) {
      setActiveTab('info');
      alert('Vui lòng nhập Số điện thoại!');
      return;
    }
    if (!formData.taxCode) {
      setActiveTab('info');
      alert('Vui lòng nhập Mã số thuế/CCCD!');
      return;
    }
    if (formData.addresses.length === 0) {
      setActiveTab('address');
      alert('Vui lòng thêm ít nhất một địa chỉ!');
      return;
    }
    if (formData.addresses.some((a) => !a.city || !a.ward || !a.addressLine1)) {
      setActiveTab('address');
      alert('Vui lòng điền đầy đủ Tỉnh/Thành phố, Phường/Xã, Số nhà/tên đường cho tất cả địa chỉ!');
      return;
    }

    if (!window.confirm(isEdit ? 'Bạn có chắc chắn muốn lưu thay đổi?' : 'Bạn có chắc chắn thao tác thêm mới hay không?')) {
      return;
    }

    onSave(formData);
  };

  const TABS: { key: TabKey; label: string }[] = [
    { key: 'info', label: 'Thông tin khách hàng' },
    { key: 'contacts', label: 'Người liên hệ' },
    { key: 'address', label: 'Địa chỉ' },
    ...(readOnly ? [{ key: 'history' as TabKey, label: 'Lịch sử khách hàng' }] : []),
  ];

  const title = readOnly ? 'Chi tiết Khách hàng' : isEdit ? 'Chỉnh sửa Khách hàng' : 'Thêm mới Khách hàng';

  return (
    <div className="dms-modal-overlay" onClick={handleClose}>
      <div className="dms-modal dms-modal--xl" onClick={(e) => e.stopPropagation()}>
        <div className="dms-modal__header">
          <h2 className="dms-modal__title">{title}</h2>
          <button type="button" className="dms-modal__close" title="Đóng" onClick={handleClose}>
            ×
          </button>
        </div>

        <div className="dms-tabs">
          <div className="dms-tabs__list">
            {TABS.map((t) => (
              <button
                key={t.key}
                type="button"
                className={`dms-tabs__tab${activeTab === t.key ? ' is-active' : ''}`}
                onClick={() => setActiveTab(t.key)}
              >
                {t.label}
                {t.key === 'contacts' && formData.contacts.length > 0 ? ` (${formData.contacts.length})` : ''}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', minHeight: 0, flex: 1 }}>
          <fieldset disabled={readOnly} className="contents" style={{ border: 0, padding: 0, margin: 0, minHeight: 0, display: 'contents' }}>
            <div className="dms-modal__body">
              {activeTab === 'info' && <CustomerInfoTab formData={formData} onChange={handleFieldChange} />}
              {activeTab === 'contacts' && (
                <CustomerContactsTab contacts={formData.contacts} onChange={(contacts) => handleFieldChange('contacts', contacts)} />
              )}
              {activeTab === 'address' && <CustomerAddressTab formData={formData} onChange={handleFieldChange} />}
              {readOnly && activeTab === 'history' && <CustomerHistoryTab customer={formData} />}
            </div>
          </fieldset>
          <div className="dms-modal__footer">
            <button type="button" className="dms-btn dms-btn--default" onClick={handleClose}>
              Đóng
            </button>
            {!readOnly && (
              <button type="submit" className="dms-btn dms-btn--primary">
                Lưu
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
