import { useState, useEffect } from 'react';
import { X, Upload, Image as ImageIcon, Calendar, Compass, Plus } from 'lucide-react';
import type { Product } from '../types';

interface ProductFormModalProps {
  isOpen: boolean;
  product: Product | null;
  onSave: (p: Product) => void;
  onClose: () => void;
}

export function ProductFormModal({ isOpen, product, onSave, onClose }: ProductFormModalProps) {
  const [formData, setFormData] = useState<Partial<Product>>({});

  useEffect(() => {
    if (isOpen) {
      if (product) {
        setFormData(product);
      } else {
        setFormData({ status: 'Active' });
      }
    }
  }, [isOpen, product]);

  if (!isOpen) return null;

  const handleChange = (field: keyof Product, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onSave(formData as Product);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40">
      <div className="flex h-[95vh] w-full max-w-5xl flex-col rounded-lg bg-white shadow-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <h2 className="text-lg font-bold text-gray-800">{product ? 'Cập nhật sản phẩm' : 'Thêm mới sản phẩm'}</h2>
          <button onClick={onClose} className="rounded-full p-1.5 hover:bg-gray-100">
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-auto bg-gray-50 p-6 space-y-6">
          {/* Top section */}
          <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg border border-gray-200">
            {/* Image upload */}
            <div className="w-full md:w-64 flex flex-col items-center">
              <div className="h-48 w-full bg-gray-100 rounded-md border border-gray-200 flex items-center justify-center text-gray-400 mb-4">
                <ImageIcon className="h-16 w-16 opacity-50" />
              </div>
              <button className="flex items-center justify-center gap-2 rounded border border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 w-32">
                <Upload className="h-4 w-4" /> Upload
              </button>
            </div>

            {/* Basic Info */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  <span className="text-red-500">*</span> Mã SKU
                </label>
                <input
                  type="text"
                  placeholder="Nhập mã SKU"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={formData.sku || ''}
                  onChange={(e) => handleChange('sku', e.target.value)}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  <span className="text-red-500">*</span> Tên sản phẩm
                </label>
                <input
                  type="text"
                  placeholder="Nhập tên sản phẩm"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={formData.name || ''}
                  onChange={(e) => handleChange('name', e.target.value)}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  <span className="text-red-500">*</span> Phân cấp sản phẩm
                </label>
                <select
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={formData.category || ''}
                  onChange={(e) => handleChange('category', e.target.value)}
                >
                  <option value="">Chọn phân cấp sản phẩm</option>
                  <option value="ERP">ERP</option>
                  <option value="HARIBO">HARIBO</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  <span className="text-red-500">*</span> Đơn vị kinh doanh
                </label>
                <select
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={formData.businessUnit || ''}
                  onChange={(e) => handleChange('businessUnit', e.target.value)}
                >
                  <option value="">Chọn đơn vị kinh doanh</option>
                  <option value="ERP">ERP</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  <span className="text-red-500">*</span> Thuế
                </label>
                <select
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={formData.tax || ''}
                  onChange={(e) => handleChange('tax', e.target.value)}
                >
                  <option value="">Chọn thuế</option>
                  <option value="8%">8%</option>
                  <option value="10%">10%</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  <span className="text-red-500">*</span> VAT
                </label>
                <input
                  type="text"
                  placeholder="Nhập VAT"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={formData.vat || ''}
                  onChange={(e) => handleChange('vat', e.target.value)}
                />
              </div>
              <div className="md:col-span-2">
                <label className="mb-1 block text-sm font-medium text-gray-700">Trạng thái</label>
                <button
                  className={`relative inline-flex h-5 w-10 items-center rounded-full transition-colors ${
                    formData.status === 'Active' ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  onClick={() => handleChange('status', formData.status === 'Active' ? 'Inactive' : 'Active')}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      formData.status === 'Active' ? 'translate-x-5' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Product Info Section */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
              <Calendar className="h-5 w-5 text-gray-600" />
              <h3 className="font-medium text-gray-800">Thông tin sản phẩm</h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700"><span className="text-red-500">*</span> Division</label>
                <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-400 focus:border-blue-500">
                  <option value="">Chọn division</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700"><span className="text-red-500">*</span> Segmentation</label>
                <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-400 focus:border-blue-500">
                  <option value="">Chọn segmentation</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700"><span className="text-red-500">*</span> Product type</label>
                <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-400 focus:border-blue-500">
                  <option value="">Chọn product type</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700"><span className="text-red-500">*</span> Indication</label>
                <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-400 focus:border-blue-500">
                  <option value="">Chọn indication</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700"><span className="text-red-500">*</span> Function</label>
                <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-400 focus:border-blue-500">
                  <option value="">Chọn function</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700"><span className="text-red-500">*</span> Brand</label>
                <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-400 focus:border-blue-500">
                  <option value="">Chọn brand</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700"><span className="text-red-500">*</span> Cost elements</label>
                <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-400 focus:border-blue-500">
                  <option value="">Chọn indication</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700"><span className="text-red-500">*</span> Method</label>
                <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-400 focus:border-blue-500">
                  <option value="">Chọn method</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700"><span className="text-red-500">*</span> Pathology</label>
                <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-400 focus:border-blue-500">
                  <option value="">Chọn pathology</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700"><span className="text-red-500">*</span> Skin laye</label>
                <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-400 focus:border-blue-500">
                  <option value="">Chọn skin laye</option>
                </select>
              </div>
            </div>
          </div>

          {/* Unit Section */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
              <Compass className="h-5 w-5 text-gray-600" />
              <h3 className="font-medium text-gray-800">Đơn vị tính</h3>
            </div>
            <div className="p-6">
              <div className="w-full md:w-1/3 mb-4">
                <label className="mb-1 block text-sm font-medium text-gray-700"><span className="text-red-500">*</span> Đơn vị cơ bản</label>
                <select
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-400 focus:border-blue-500"
                  value={formData.baseUnit || ''}
                  onChange={(e) => handleChange('baseUnit', e.target.value)}
                >
                  <option value="">Chọn đơn vị cơ bản</option>
                  <option value="Cái">Cái</option>
                  <option value="Hộp">Hộp</option>
                  <option value="Thùng">Thùng</option>
                </select>
              </div>

              <button className="w-full py-2 border border-dashed border-blue-400 text-blue-600 text-sm font-medium rounded-md hover:bg-blue-50 flex items-center justify-center gap-2">
                <Plus className="h-4 w-4" /> Thêm đơn vị quy đổi
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 border-t border-gray-100 px-6 py-4 bg-white">
          <button
            onClick={onClose}
            className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Đóng
          </button>
          <button
            onClick={handleSave}
            className="rounded-md bg-[#2B4B8C] px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
}
