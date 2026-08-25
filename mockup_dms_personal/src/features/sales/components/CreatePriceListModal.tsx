import { useState } from 'react';
import { X, Calendar, Search, Trash2, Upload, Plus, ChevronLeft, ChevronRight, Check, ListEnd } from 'lucide-react';

interface CreatePriceListModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreatePriceListModal({ isOpen, onClose }: CreatePriceListModalProps) {
  const [step, setStep] = useState(1);

  if (!isOpen) return null;

  const renderStepper = () => (
    <div className="flex items-center justify-center mb-8">
      {/* Step 1 */}
      <div className="flex items-center">
        <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
          step >= 1 ? 'bg-indigo-500 text-white' : 'bg-slate-200 text-slate-500'
        }`}>
          {step > 1 ? <Check className="w-5 h-5" /> : '1'}
        </div>
        <span className={`ml-2 text-sm font-medium ${step >= 1 ? 'text-slate-800' : 'text-slate-500'}`}>
          Thông tin chung
        </span>
      </div>

      {/* Divider */}
      <div className={`w-32 h-px mx-4 ${step >= 2 ? 'bg-indigo-500' : 'bg-slate-200'}`}></div>

      {/* Step 2 */}
      <div className="flex items-center">
        <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
          step >= 2 ? 'bg-indigo-500 text-white' : 'bg-slate-200 text-slate-500'
        }`}>
          {step > 2 ? <Check className="w-5 h-5" /> : '2'}
        </div>
        <span className={`ml-2 text-sm font-medium ${step >= 2 ? 'text-slate-800' : 'text-slate-500'}`}>
          Đối tượng áp dụng
        </span>
      </div>

      {/* Divider */}
      <div className={`w-32 h-px mx-4 ${step >= 3 ? 'bg-indigo-500' : 'bg-slate-200'}`}></div>

      {/* Step 3 */}
      <div className="flex items-center">
        <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
          step >= 3 ? 'bg-indigo-500 text-white' : 'bg-slate-200 text-slate-500'
        }`}>
          3
        </div>
        <span className={`ml-2 text-sm font-medium ${step >= 3 ? 'text-slate-800' : 'text-slate-500'}`}>
          Danh sách sản phẩm
        </span>
      </div>
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Mã bảng giá *</label>
          <input
            type="text"
            placeholder="Mã bảng giá"
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Tên bảng giá *</label>
          <input
            type="text"
            placeholder="Tên bảng giá"
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="relative">
          <label className="block text-sm font-medium text-slate-700 mb-1">Từ ngày *</label>
          <input
            type="text"
            placeholder="Chọn ngày"
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
          />
          <Calendar className="absolute right-3 top-8 w-4 h-4 text-slate-400" />
        </div>
        <div className="relative">
          <label className="block text-sm font-medium text-slate-700 mb-1">Đến ngày</label>
          <input
            type="text"
            placeholder="Từ ngày"
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm bg-slate-50 text-slate-400"
            disabled
          />
          <Calendar className="absolute right-3 top-8 w-4 h-4 text-slate-400" />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4 min-h-[200px]">
      <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-lg border border-slate-100">
        <div className="flex-1">
          <label className="block text-sm font-medium text-slate-700 mb-1"><span className="text-red-500">*</span> Điều kiện</label>
          <select className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm bg-white">
            <option>Nhóm khách hàng</option>
          </select>
        </div>
        <div className="flex-[2]">
          <label className="block text-sm font-medium text-slate-700 mb-1"><span className="text-red-500">*</span> Nhóm khách hàng</label>
          <div className="w-full px-2 py-1.5 border border-slate-300 rounded-md bg-white flex flex-wrap gap-2 items-center min-h-[38px]">
            <span className="flex items-center bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">
              Prime <X className="w-3 h-3 ml-1 cursor-pointer hover:text-slate-900" />
            </span>
            <span className="flex items-center bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">
              Diamond <X className="w-3 h-3 ml-1 cursor-pointer hover:text-slate-900" />
            </span>
            <ChevronRight className="w-4 h-4 text-slate-400 ml-auto transform rotate-90" />
          </div>
        </div>
        <div className="pt-6">
          <button className="p-2 border border-red-200 text-red-500 rounded hover:bg-red-50 transition-colors">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="relative flex items-center">
            <input 
              type="text" 
              placeholder="Nhập chiết khấu cho tất cả" 
              className="w-56 px-3 py-1.5 border border-slate-300 rounded-l-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <span className="absolute right-10 text-sm text-slate-500">%</span>
            <button className="bg-[#2155a3] text-white p-1.5 rounded-r-md border border-[#2155a3] hover:bg-[#1a4484]">
              <ListEnd className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Tìm kiếm theo Mã SP/ ..." 
              className="w-64 px-3 py-1.5 pr-8 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <InfoIcon className="absolute right-2 top-2 w-4 h-4 text-slate-400 cursor-pointer" />
          </div>
          <button className="bg-[#2155a3] text-white p-1.5 rounded-md hover:bg-[#1a4484]">
            <Search className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 bg-[#2155a3] text-white px-3 py-1.5 rounded-md text-sm hover:bg-[#1a4484]">
            <Upload className="w-4 h-4" /> Import Excel
          </button>
          <button className="flex items-center gap-1 bg-[#2155a3] text-white px-3 py-1.5 rounded-md text-sm hover:bg-[#1a4484]">
            <Plus className="w-4 h-4" /> Thêm
          </button>
        </div>
      </div>

      <div className="border border-slate-200 rounded-lg overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
            <tr>
              <th className="px-4 py-3 font-medium">Mã sản phẩm</th>
              <th className="px-4 py-3 font-medium">Tên sản phẩm</th>
              <th className="px-4 py-3 font-medium">Đơn vị</th>
              <th className="px-4 py-3 font-medium text-center">Chiết khấu</th>
              <th className="px-4 py-3 font-medium text-right">Giá sau VAT</th>
              <th className="px-4 py-3 font-medium text-right">Giá sau chiết khấu</th>
              <th className="px-4 py-3 font-medium text-center">Tùy chỉnh</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            <tr>
              <td className="px-4 py-3">
                <span className="bg-slate-100 px-2 py-1 rounded text-slate-700 text-xs flex items-center w-max gap-1">
                  SKU123 <CopyIcon className="w-3 h-3" />
                </span>
              </td>
              <td className="px-4 py-3 text-slate-700">Mì gói Hảo Hảo gà</td>
              <td className="px-4 py-3 text-slate-700">Gói</td>
              <td className="px-4 py-3 text-center">
                <div className="relative inline-block w-24">
                  <input type="text" defaultValue="10" className="w-full px-2 py-1 border border-slate-300 rounded text-sm text-center" />
                  <span className="absolute right-2 top-1.5 text-slate-500 text-sm">%</span>
                </div>
              </td>
              <td className="px-4 py-3 text-right text-slate-700">5,000</td>
              <td className="px-4 py-3 text-right text-slate-700">4,500</td>
              <td className="px-4 py-3 text-center">
                <button className="p-1.5 border border-red-200 border-dashed text-red-500 rounded hover:bg-red-50">
                  <Trash2 className="w-4 h-4" />
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3">
                <span className="bg-slate-100 px-2 py-1 rounded text-slate-700 text-xs flex items-center w-max gap-1">
                  SKU123 <CopyIcon className="w-3 h-3" />
                </span>
              </td>
              <td className="px-4 py-3 text-slate-700">Mì gói Omachi tôm</td>
              <td className="px-4 py-3 text-slate-700">Gói</td>
              <td className="px-4 py-3 text-center">
                <div className="relative inline-block w-28">
                  <input type="text" placeholder="Nhập chiết khấu" className="w-full px-2 py-1 border border-slate-300 rounded text-sm pl-2 pr-6" />
                  <span className="absolute right-2 top-1.5 text-slate-400 text-sm">%</span>
                </div>
              </td>
              <td className="px-4 py-3 text-right text-slate-700">4,000</td>
              <td className="px-4 py-3 text-right text-slate-500">-/-</td>
              <td className="px-4 py-3 text-center">
                <button className="p-1.5 border border-red-200 border-dashed text-red-500 rounded hover:bg-red-50">
                  <Trash2 className="w-4 h-4" />
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3">
                <span className="bg-slate-100 px-2 py-1 rounded text-slate-700 text-xs flex items-center w-max gap-1">
                  SKU123 <CopyIcon className="w-3 h-3" />
                </span>
              </td>
              <td className="px-4 py-3 text-slate-700">Mì gói Vifon bò</td>
              <td className="px-4 py-3 text-slate-700">Thùng</td>
              <td className="px-4 py-3 text-center">
                <div className="relative inline-block w-28">
                  <input type="text" placeholder="Nhập chiết khấu" className="w-full px-2 py-1 border border-slate-300 rounded text-sm pl-2 pr-6" />
                  <span className="absolute right-2 top-1.5 text-slate-400 text-sm">%</span>
                </div>
              </td>
              <td className="px-4 py-3 text-right text-slate-700">50,000</td>
              <td className="px-4 py-3 text-right text-slate-500">-/-</td>
              <td className="px-4 py-3 text-center">
                <button className="p-1.5 border border-red-200 border-dashed text-red-500 rounded hover:bg-red-50">
                  <Trash2 className="w-4 h-4" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        
        <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-slate-200 text-sm">
          <div className="flex-1 flex justify-end items-center gap-4">
            <a href="#" className="text-blue-500 hover:underline">Xóa tất cả 3 sản phẩm</a>
            <span className="text-slate-600">1-3 trên 3 sản phẩm</span>
            <div className="flex items-center gap-1">
              <button className="p-1 text-slate-400 hover:text-slate-600"><ChevronLeft className="w-4 h-4" /></button>
              <button className="px-2 py-1 border border-indigo-500 text-indigo-500 rounded rounded text-xs">1</button>
              <button className="p-1 text-slate-400 hover:text-slate-600"><ChevronRight className="w-4 h-4" /></button>
            </div>
            <select className="border border-slate-300 rounded px-2 py-1 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-indigo-500">
              <option>10 / trang</option>
              <option>20 / trang</option>
              <option>50 / trang</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className={`bg-white rounded-lg shadow-xl w-full flex flex-col ${step === 3 ? 'max-w-6xl' : 'max-w-4xl'}`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-2">
          <h2 className="text-xl font-semibold text-slate-800">Tạo mới bảng giá</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 pt-4 flex-1 overflow-y-auto">
          {renderStepper()}
          
          <div className="mt-8">
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && renderStep3()}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-slate-100">
          <div>
            {step > 1 && (
              <button 
                onClick={() => setStep(step - 1)}
                className="px-6 py-2 border border-slate-300 text-slate-700 rounded-md hover:bg-slate-50 font-medium text-sm transition-colors bg-white"
              >
                Quay lại
              </button>
            )}
          </div>
          <div className="flex gap-3">
            {step > 1 && (
              <button 
                onClick={onClose}
                className="px-6 py-2 border border-slate-300 text-slate-700 rounded-md hover:bg-slate-50 font-medium text-sm transition-colors bg-white"
              >
                Đóng
              </button>
            )}
            {step < 3 ? (
              <button 
                onClick={() => setStep(step + 1)}
                className="px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 font-medium text-sm transition-colors"
              >
                Tiếp tục
              </button>
            ) : (
              <button 
                onClick={onClose}
                className="px-6 py-2 bg-[#2155a3] text-white rounded-md hover:bg-[#1a4484] font-medium text-sm transition-colors"
              >
                Lưu
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Simple icons for things that might not be in lucide or exactly match
const CopyIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
  </svg>
);
