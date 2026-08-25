import { useState } from 'react';
import { GeneralInfoTab } from './GeneralInfoTab';
import { AddressTab } from './AddressTab';
import type { Contact } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  contact: Contact | null;
  onSave: (contact: Contact) => void;
  onClose: () => void;
}

const EMPTY_CONTACT: Contact = {
  id: '',
  contactId: '',
  role: '',
  salutation: '',
  lastName: '',
  middleName: '',
  firstName: '',
  jobTitle: '',
  category: '',
  email: '',
  mainPhone: '',
  fax: '',
  leadSource: '',
  comments: '',
  addresses: [],
  status: 'Active',
  linkedCustomerCount: 0,
  source: 'DMS',
};

function nextContactId() {
  return `CON_${String(Date.now()).slice(-6)}`;
}

export function ContactModal({ isOpen, contact, onSave, onClose }: ContactModalProps) {
  const [activeTab, setActiveTab] = useState<'general' | 'address'>('general');
  const [formData, setFormData] = useState<Contact>(() =>
    contact
      ? { ...contact, addresses: contact.addresses.map((a) => ({ ...a })) }
      : { ...EMPTY_CONTACT, contactId: nextContactId() },
  );

  if (!isOpen) return null;

  const handleFieldChange = (name: keyof Contact, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.contactId) {
      setActiveTab('general');
      alert('Vui lòng điền Mã liên hệ!');
      return;
    }
    if (!formData.firstName) {
      setActiveTab('general');
      alert('Vui lòng điền Tên!');
      return;
    }
    if (!formData.mainPhone) {
      setActiveTab('general');
      alert('Vui lòng điền Số điện thoại chính!');
      return;
    }
    if (formData.addresses.length === 0) {
      setActiveTab('address');
      alert('Vui lòng thêm ít nhất một địa chỉ!');
      return;
    }
    if (formData.addresses.some((a) => !a.country || !a.addressLine1)) {
      setActiveTab('address');
      alert('Vui lòng điền Quốc gia và Địa chỉ dòng 1 cho tất cả địa chỉ!');
      return;
    }

    onSave(formData);
  };

  const isEdit = !!(contact && contact.id);

  return (
    <div className="dms-modal-overlay" onClick={onClose}>
      <div className="dms-modal dms-modal--lg" onClick={(e) => e.stopPropagation()}>
        <div className="dms-modal__header">
          <h2 className="dms-modal__title">{isEdit ? 'Chỉnh sửa Liên hệ' : 'Thêm mới Liên hệ'}</h2>
          <button type="button" className="dms-modal__close" title="Đóng" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="dms-tabs">
          <div className="dms-tabs__list">
            <button
              type="button"
              className={`dms-tabs__tab${activeTab === 'general' ? ' is-active' : ''}`}
              onClick={() => setActiveTab('general')}
            >
              Thông tin cơ bản
            </button>
            <button
              type="button"
              className={`dms-tabs__tab${activeTab === 'address' ? ' is-active' : ''}`}
              onClick={() => setActiveTab('address')}
            >
              Địa chỉ
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', minHeight: 0, flex: 1 }}>
          <div className="dms-modal__body">
            <div className={activeTab === 'general' ? undefined : 'is-hidden'} hidden={activeTab !== 'general'}>
              <GeneralInfoTab formData={formData} onChange={handleFieldChange} />
            </div>
            <div className={activeTab === 'address' ? undefined : 'is-hidden'} hidden={activeTab !== 'address'}>
              <AddressTab addresses={formData.addresses} onChange={(addresses) => setFormData((prev) => ({ ...prev, addresses }))} />
            </div>
          </div>
          <div className="dms-modal__footer">
            <button type="button" className="dms-btn dms-btn--default" onClick={onClose}>
              Đóng
            </button>
            <button type="submit" className="dms-btn dms-btn--primary">
              Lưu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
