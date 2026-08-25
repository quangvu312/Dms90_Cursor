import { useState } from 'react';
import { CustomerFilterBar } from './CustomerFilterBar';
import { CustomerTable } from './CustomerTable';
import { CustomerModal } from './CustomerModal';
import { CustomerContactsPopup } from './CustomerContactsPopup';
import { INITIAL_CUSTOMERS } from '../mockData';
import type { Customer, CustomerFilters } from '../types';
import { EMPTY_CUSTOMER_FILTERS, getPrimaryAddress } from '../types';

interface ToastItem {
  id: number;
  message: string;
  type: 'success' | 'info';
}

export default function CustomerManagementPage() {
  const [customers, setCustomers] = useState<Customer[]>(INITIAL_CUSTOMERS);
  const [filteredCustomers, setFilteredCustomers] = useState<Customer[]>(INITIAL_CUSTOMERS);
  const [draftFilters, setDraftFilters] = useState<CustomerFilters>(EMPTY_CUSTOMER_FILTERS);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);
  const [isDetailReadOnly, setIsDetailReadOnly] = useState(false);
  const [contactsPopupCustomer, setContactsPopupCustomer] = useState<Customer | null>(null);
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = (message: string, type: ToastItem['type'] = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 3000);
  };

  const handleSearch = () => {
    let result = [...customers];
    const f = draftFilters;

    if (f.searchText) {
      const q = f.searchText.toLowerCase();
      result = result.filter(
        (c) =>
          c.customerCode.toLowerCase().includes(q) ||
          c.companyName.toLowerCase().includes(q) ||
          `${c.lastName} ${c.middleName} ${c.firstName}`.toLowerCase().includes(q) ||
          c.phone.includes(q),
      );
    }
    if (f.vungSelected.length > 0) result = result.filter((c) => f.vungSelected.includes(c.vung));
    if (f.trangThai) result = result.filter((c) => (f.trangThai === 'active' ? c.active : !c.active));
    if (f.nvChamSoc) result = result.filter((c) => c.nvChamSoc === f.nvChamSoc);
    if (f.customerType) result = result.filter((c) => c.customerType === f.customerType);
    if (f.customerRank) result = result.filter((c) => c.storeRank === f.customerRank);
    if (f.saleChannel) result = result.filter((c) => c.saleChannel === f.saleChannel);
    if (f.customerGroup) result = result.filter((c) => c.customerGroup === f.customerGroup);
    if (f.city) result = result.filter((c) => getPrimaryAddress(c.addresses)?.city === f.city);
    if (f.ward) result = result.filter((c) => getPrimaryAddress(c.addresses)?.ward === f.ward);
    if (f.route) result = result.filter((c) => c.tuyen === f.route);

    setFilteredCustomers(result);
    setPage(1);
    showToast(`Tìm thấy ${result.length} khách hàng!`);
  };

  const handleReset = () => {
    setDraftFilters(EMPTY_CUSTOMER_FILTERS);
    setFilteredCustomers(customers);
    setPage(1);
    showToast('Đã làm mới bộ lọc!', 'info');
  };

  const handleToggleActive = (id: string, active: boolean) => {
    setCustomers((prev) => prev.map((c) => (c.id === id ? { ...c, active } : c)));
    setFilteredCustomers((prev) => prev.map((c) => (c.id === id ? { ...c, active } : c)));
    showToast(`Đã cập nhật trạng thái sang ${active ? 'Hoạt động' : 'Ngừng hoạt động'}!`);
  };

  const handleAddNew = () => {
    setEditingCustomer(null);
    setIsDetailReadOnly(false);
    setIsModalOpen(true);
  };

  const handleEdit = (customer: Customer) => {
    setEditingCustomer(customer);
    setIsDetailReadOnly(false);
    setIsModalOpen(true);
  };

  const handleViewDetail = (customer: Customer) => {
    setEditingCustomer(customer);
    setIsDetailReadOnly(true);
    setIsModalOpen(true);
  };

  const handleSaveCustomer = (savedData: Customer) => {
    if (editingCustomer) {
      setCustomers((prev) => prev.map((c) => (c.id === savedData.id ? savedData : c)));
      setFilteredCustomers((prev) => prev.map((c) => (c.id === savedData.id ? savedData : c)));
      showToast('Đã cập nhật khách hàng thành công!');
    } else {
      const newRecord: Customer = {
        ...savedData,
        id: String(Date.now()),
        customerCode: `KH-${1000 + customers.length + 1}`,
        syncStatus: 'Pending',
        ngayTao: new Date().toLocaleDateString('vi-VN'),
        nguoiTao: 'Bạn',
        ngayCapNhat: new Date().toLocaleDateString('vi-VN'),
        nguoiCapNhat: 'Bạn',
      };
      setCustomers((prev) => [newRecord, ...prev]);
      setFilteredCustomers((prev) => [newRecord, ...prev]);
      showToast('Đã tạo mới khách hàng thành công!');
    }
    setIsModalOpen(false);
  };

  const handleExportExcel = () => showToast(`Đã xuất ${filteredCustomers.length} dòng ra file Excel!`);
  const handleImportExcel = () => showToast('Mở hộp thoại Import Excel (mock)!', 'info');
  const handleSyncErp = () => showToast('Đã gửi yêu cầu đồng bộ ERP!');
  const handleReviewAdjustments = () => showToast('Mở màn hình Duyệt điều chỉnh khách hàng (mock)!', 'info');

  const pagedCustomers = filteredCustomers.slice((page - 1) * size, page * size);

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
          <span className="dms-breadcrumb__current">Danh Sách Khách Hàng</span>
        </li>
      </ul>

      <div className="dms-page-header">
        <h1 className="dms-page-header__title">Danh Sách Khách Hàng</h1>
      </div>

      <CustomerFilterBar filters={draftFilters} onChange={setDraftFilters} onSearch={handleSearch} onReset={handleReset} />

      <CustomerTable
        customers={pagedCustomers}
        total={filteredCustomers.length}
        page={page}
        size={size}
        onPageChange={setPage}
        onSizeChange={(s) => {
          setSize(s);
          setPage(1);
        }}
        onEdit={handleEdit}
        onViewDetail={handleViewDetail}
        onViewContacts={setContactsPopupCustomer}
        onToggleActive={handleToggleActive}
        onAddNew={handleAddNew}
        onExportExcel={handleExportExcel}
        onImportExcel={handleImportExcel}
        onSyncErp={handleSyncErp}
        onReviewAdjustments={handleReviewAdjustments}
      />

      {isModalOpen && (
        <CustomerModal
          key={`${editingCustomer?.id ?? 'new'}-${isDetailReadOnly ? 'view' : 'edit'}`}
          isOpen={isModalOpen}
          customer={editingCustomer}
          readOnly={isDetailReadOnly}
          onSave={handleSaveCustomer}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      <CustomerContactsPopup customer={contactsPopupCustomer} onClose={() => setContactsPopupCustomer(null)} />

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
