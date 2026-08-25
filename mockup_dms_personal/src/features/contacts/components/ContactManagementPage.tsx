import { useState } from 'react';
import { ContactFilterBar, EMPTY_CONTACT_FILTERS } from './ContactFilterBar';
import { ContactTable } from './ContactTable';
import { ContactModal } from './ContactModal';
import { INITIAL_CONTACTS } from '../mockData';
import type { Contact, ContactFilters } from '../types';

interface ToastItem {
  id: number;
  message: string;
  type: 'success' | 'info';
}

export default function ContactManagementPage() {
  const [contacts, setContacts] = useState<Contact[]>(INITIAL_CONTACTS);
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>(INITIAL_CONTACTS);
  const [draftFilters, setDraftFilters] = useState<ContactFilters>(EMPTY_CONTACT_FILTERS);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = (message: string, type: ToastItem['type'] = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 3000);
  };

  const handleSearch = () => {
    let result = [...contacts];
    const f = draftFilters;

    if (f.searchText) {
      const q = f.searchText.toLowerCase();
      result = result.filter(
        (c) =>
          c.contactId.toLowerCase().includes(q) ||
          `${c.lastName} ${c.middleName} ${c.firstName}`.toLowerCase().includes(q) ||
          (c.email && c.email.toLowerCase().includes(q)) ||
          (c.mainPhone && c.mainPhone.includes(q)),
      );
    }
    if (f.role) result = result.filter((c) => c.role === f.role);
    if (f.status) result = result.filter((c) => c.status === f.status);
    if (f.leadSource) result = result.filter((c) => c.leadSource === f.leadSource);

    setFilteredContacts(result);
    setPage(1);
    showToast(`Tìm thấy ${result.length} dòng!`);
  };

  const handleReset = () => {
    setDraftFilters(EMPTY_CONTACT_FILTERS);
    setFilteredContacts(contacts);
    setPage(1);
    showToast('Đã làm mới bộ lọc!', 'info');
  };

  const handleToggleStatus = (id: string, newStatus: 'Active' | 'Inactive') => {
    setContacts((prev) => prev.map((c) => (c.id === id ? { ...c, status: newStatus } : c)));
    setFilteredContacts((prev) => prev.map((c) => (c.id === id ? { ...c, status: newStatus } : c)));
    showToast(`Đã cập nhật trạng thái sang ${newStatus === 'Active' ? 'Hoạt động' : 'Không hoạt động'}!`);
  };

  const handleAddNew = () => {
    setEditingContact(null);
    setIsModalOpen(true);
  };

  const handleEdit = (contact: Contact) => {
    setEditingContact(contact);
    setIsModalOpen(true);
  };

  const handleSaveContact = (savedData: Contact) => {
    const matched = contacts.find((c) => c.mainPhone && c.mainPhone === savedData.mainPhone && c.id !== editingContact?.id);

    if (matched) {
      const overwritten: Contact = {
        ...savedData,
        id: matched.id,
        status: 'Active',
        linkedCustomerCount: matched.linkedCustomerCount,
        source: 'DMS',
      };
      setContacts((prev) => prev.map((c) => (c.id === matched.id ? overwritten : c)));
      setFilteredContacts((prev) => prev.map((c) => (c.id === matched.id ? overwritten : c)));
      showToast(`Số điện thoại đã tồn tại — đã cập nhật liên hệ ${matched.contactId} theo dữ liệu vừa nhập!`);
    } else if (editingContact) {
      setContacts((prev) => prev.map((c) => (c.id === savedData.id ? savedData : c)));
      setFilteredContacts((prev) => prev.map((c) => (c.id === savedData.id ? savedData : c)));
      showToast('Đã cập nhật liên hệ thành công!');
    } else {
      const newRecord: Contact = { ...savedData, id: String(Date.now()) };
      setContacts((prev) => [newRecord, ...prev]);
      setFilteredContacts((prev) => [newRecord, ...prev]);
      showToast('Đã tạo mới liên hệ thành công!');
    }
    setIsModalOpen(false);
  };

  const handleExportExcel = () => {
    showToast(`Đã xuất ${filteredContacts.length} dòng ra file Excel!`);
  };

  const pagedContacts = filteredContacts.slice((page - 1) * size, page * size);

  return (
    <div>
      <ul className="dms-breadcrumb">
        <li className="dms-breadcrumb__item">
          <span className="dms-breadcrumb__link">Dữ Liệu Nền</span>
        </li>
        <li className="dms-breadcrumb__item">
          <span className="dms-breadcrumb__link">Kinh Doanh</span>
        </li>
        <li className="dms-breadcrumb__item">
          <span className="dms-breadcrumb__current">Danh Sách Liên Hệ</span>
        </li>
      </ul>

      <div className="dms-page-header">
        <h1 className="dms-page-header__title">Danh Sách Liên Hệ</h1>
      </div>

      <ContactFilterBar filters={draftFilters} onChange={setDraftFilters} onSearch={handleSearch} onReset={handleReset} />

      <ContactTable
        contacts={pagedContacts}
        total={filteredContacts.length}
        page={page}
        size={size}
        onPageChange={setPage}
        onSizeChange={(s) => {
          setSize(s);
          setPage(1);
        }}
        onEdit={handleEdit}
        onToggleStatus={handleToggleStatus}
        onAddNew={handleAddNew}
        onExportExcel={handleExportExcel}
      />

      {isModalOpen && (
        <ContactModal
          key={editingContact?.id ?? 'new'}
          isOpen={isModalOpen}
          contact={editingContact}
          onSave={handleSaveContact}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      <div className="dms-toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className={`dms-toast dms-toast--${toast.type}`}>
            {toast.message}
          </div>
        ))}
      </div>
    </div>
  );
}
