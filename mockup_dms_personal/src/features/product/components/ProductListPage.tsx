import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ProductFilterBar, EMPTY_PRODUCT_FILTERS } from './ProductFilterBar';
import { ProductTable } from './ProductTable';
import { ProductFormModal } from './ProductFormModal';
import { INITIAL_PRODUCTS } from '../mockData';
import type { Product, ProductFilters } from '../types';

interface ToastItem {
  id: number;
  message: string;
}

export function ProductListPage() {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [draftFilters, setDraftFilters] = useState<ProductFilters>(EMPTY_PRODUCT_FILTERS);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = (message: string) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 3000);
  };

  const handleSearch = () => {
    let result = [...products];
    const f = draftFilters;

    if (f.searchText) {
      const q = f.searchText.toLowerCase();
      result = result.filter(
        (p) =>
          p.sku.toLowerCase().includes(q) ||
          p.name.toLowerCase().includes(q)
      );
    }
    if (f.status) result = result.filter((p) => p.status === f.status);

    setFilteredProducts(result);
    setPage(1);
    showToast(`Tìm thấy ${result.length} sản phẩm!`);
  };

  const handleReset = () => {
    setDraftFilters(EMPTY_PRODUCT_FILTERS);
    setFilteredProducts(products);
    setPage(1);
    showToast('Đã làm mới bộ lọc!');
  };

  const handleToggleStatus = (id: string, newStatus: 'Active' | 'Inactive') => {
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, status: newStatus } : p)));
    setFilteredProducts((prev) => prev.map((p) => (p.id === id ? { ...p, status: newStatus } : p)));
    showToast(`Đã cập nhật trạng thái thành công!`);
  };

  const handleAddNew = () => {
    setEditingProduct(null);
    setIsModalOpen(true);
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleSaveProduct = (savedData: Product) => {
    if (editingProduct) {
      setProducts((prev) => prev.map((p) => (p.id === savedData.id ? savedData : p)));
      setFilteredProducts((prev) => prev.map((p) => (p.id === savedData.id ? savedData : p)));
      showToast('Đã cập nhật sản phẩm thành công!');
    } else {
      const newRecord: Product = { ...savedData, id: String(Date.now()), createdAt: new Date().toLocaleString('vi-VN'), createdBy: 'admin', updatedAt: new Date().toLocaleString('vi-VN'), updatedBy: '' };
      setProducts((prev) => [newRecord, ...prev]);
      setFilteredProducts((prev) => [newRecord, ...prev]);
      showToast('Đã tạo mới sản phẩm thành công!');
    }
    setIsModalOpen(false);
  };

  const pagedProducts = filteredProducts.slice((page - 1) * size, page * size);

  return (
    <div className="min-h-full bg-gray-50 px-5 py-5">
      {/* Breadcrumb */}
      <div className="mb-1.5 flex items-center gap-1.5 text-[11px] text-gray-400">
        <span className="cursor-pointer hover:text-blue-500">Dữ Liệu Nền</span>
        <span>/</span>
        <span className="cursor-pointer hover:text-blue-500">Sản Phẩm</span>
        <span>/</span>
        <span className="font-medium text-gray-600">Danh Sách Sản Phẩm</span>
      </div>

      <h1 className="mb-4 text-lg font-bold text-gray-800">Danh Sách Sản Phẩm</h1>

      <ProductFilterBar filters={draftFilters} onChange={setDraftFilters} onSearch={handleSearch} onReset={handleReset} />

      <ProductTable
        products={pagedProducts}
        total={filteredProducts.length}
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
      />

      <ProductFormModal isOpen={isModalOpen} product={editingProduct} onSave={handleSaveProduct} onClose={() => setIsModalOpen(false)} />

      {/* Toasts */}
      <div className="fixed right-5 top-5 z-[200] flex flex-col gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="flex min-w-[240px] items-center gap-2.5 rounded-lg border-l-4 border-emerald-500 bg-white px-4 py-3 text-xs font-medium text-slate-800 shadow-lg"
          >
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            {toast.message}
          </div>
        ))}
      </div>
    </div>
  );
}
