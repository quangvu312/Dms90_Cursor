import { useState } from 'react';
import {
  Download, Maximize2, Settings2, ChevronLeft, ChevronRight, Info, Plus
} from 'lucide-react';
import { CreatePriceListModal } from './CreatePriceListModal';

// --- MOCK DATA ---
const mockPriceLists = [
  { id: 1, code: '20270124reportXX224011_new9', name: '20270124_reportXX LE 2027', period: '01-01-2027', target: 'Tất cả', salesRegion: 'Toàn quốc', salesArea: 'Toàn quốc', status: 'Đã duyệt', createDate: '28-06-2026 04:54:10', createdBy: 'service-account-erp-ht', updateDate: '28-06-2026 04:54:10', updatedBy: '' },
  { id: 2, code: '20260628VerifyBug', name: '20260628_Verify_Bug', period: '28-06-2026 → 30-07-2026', target: 'Tất cả', salesRegion: 'Toàn quốc', salesArea: 'Toàn quốc', status: 'Đã duyệt', createDate: '28-06-2026 03:09:43', createdBy: 'service-account-erp-ht', updateDate: '28-06-2026 03:56:14', updatedBy: 'service-account-erp-ht' },
  { id: 3, code: '20260601_auto_uat_ht_price_329', name: '20260601_auto_uat_ht_price_329', period: '01-06-2026', target: 'Tất cả', salesRegion: 'Toàn quốc', salesArea: 'Toàn quốc', status: 'Đã duyệt', createDate: '01-06-2026 10:18:32', createdBy: 'service-account-erp-ht', updateDate: '01-06-2026 10:18:32', updatedBy: '' },
  { id: 4, code: '20260601_auto_uat_ht_price_310', name: '20260601_auto_uat_ht_price_310', period: '01-06-2026', target: 'Khách hàng', salesRegion: 'Toàn quốc', salesArea: 'Toàn quốc', status: 'Đã duyệt', createDate: '01-06-2026 10:18:33', createdBy: 'service-account-erp-ht', updateDate: '01-06-2026 10:18:33', updatedBy: '' },
  { id: 5, code: '20260601_auto_uat_ht_price_315', name: '20260601_auto_uat_ht_price_315', period: '01-06-2026', target: 'Tất cả', salesRegion: 'Toàn quốc', salesArea: 'Toàn quốc', status: 'Đã duyệt', createDate: '01-06-2026 10:18:36', createdBy: 'service-account-erp-ht', updateDate: '01-06-2026 10:18:36', updatedBy: '' },
  { id: 6, code: '20260601_auto_uat_ht_price_716', name: '20260601_auto_uat_ht_price_716', period: '01-06-2026 → 01-07-2026', target: 'Tất cả', salesRegion: 'Toàn quốc', salesArea: 'Toàn quốc', status: 'Đã duyệt', createDate: '01-06-2026 10:18:38', createdBy: 'service-account-erp-ht', updateDate: '01-06-2026 10:18:39', updatedBy: 'service-account-erp-ht' },
  { id: 7, code: 'test', name: 'test', period: '14-05-2026 → 14-05-2026', target: 'Nhóm khách hàng', salesRegion: 'Toàn quốc', salesArea: 'Toàn quốc', status: 'Đã duyệt', createDate: '14-05-2026 10:36:40', createdBy: 'kdho', updateDate: '14-05-2026 10:39:19', updatedBy: 'kdho' },
  { id: 8, code: 'KDBG000', name: '[KD]BGB-000', period: '14-05-2026 → 15-05-2026', target: 'Nhóm khách hàng', salesRegion: 'Toàn quốc', salesArea: 'Toàn quốc', status: 'Đã duyệt', createDate: '14-05-2026 10:58:39', createdBy: 'service-account-erp-ht', updateDate: '14-05-2026 11:01:26', updatedBy: 'kdho' },
  { id: 9, code: '20260513_auto_uat_ht_store_827', name: '20260513_auto_uat_ht_store_827', period: '13-05-2026 → 13-05-2026', target: 'Khách hàng', salesRegion: 'Toàn quốc', salesArea: 'Toàn quốc', status: 'Đã duyệt', createDate: '13-05-2026 14:58:37', createdBy: 'service-account-erp-ht', updateDate: '13-05-2026 14:58:37', updatedBy: '' },
  { id: 10, code: '20260513_auto_uat_ht_store_857', name: '20260513_auto_uat_ht_store_857', period: '13-05-2026 → 13-05-2026', target: 'Khách hàng', salesRegion: 'Toàn quốc', salesArea: 'Toàn quốc', status: 'Đã duyệt', createDate: '13-05-2026 14:59:08', createdBy: 'service-account-erp-ht', updateDate: '13-05-2026 14:59:08', updatedBy: '' },
];

export function SalesPriceListPage() {
  const [activeTab, setActiveTab] = useState<'list' | 'applied'>('list');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const renderTabContent = (isAppliedTab: boolean) => (
    <div className="flex flex-col space-y-6 animate-in fade-in duration-300 mt-6">
      
      {/* --- FILTER BAR --- */}
      <div className="bg-white p-5 rounded-md border border-slate-200 shadow-sm">
        <h3 className="text-[13px] font-medium text-slate-600 mb-3">Tìm kiếm theo</h3>
        
        {isAppliedTab ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-2">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Theo Mã | Tên bảng giá" 
                className="block w-full px-3 py-2 text-[13px] border border-slate-300 rounded focus:ring-1 focus:ring-[#2155a3] focus:border-[#2155a3] outline-none"
              />
              <Info className="absolute right-3 top-2.5 h-4 w-4 text-slate-300" />
            </div>
            <div>
              <select className="block w-full px-3 py-2 text-[13px] border border-slate-300 rounded focus:ring-1 focus:ring-[#2155a3] focus:border-[#2155a3] outline-none bg-white text-slate-500 appearance-none">
                <option value="" disabled selected hidden>Đối tượng áp dụng</option>
                <option value="all">Tất cả</option>
                <option value="store">Khách hàng</option>
              </select>
            </div>
            <div>
              <select className="block w-full px-3 py-2 text-[13px] border border-slate-300 rounded focus:ring-1 focus:ring-[#2155a3] focus:border-[#2155a3] outline-none bg-white text-slate-500 appearance-none">
                <option value="" disabled selected hidden>Vùng bán hàng</option>
                <option value="all">Toàn quốc</option>
              </select>
            </div>
            <div>
              <select className="block w-full px-3 py-2 text-[13px] border border-slate-300 rounded focus:ring-1 focus:ring-[#2155a3] focus:border-[#2155a3] outline-none bg-white text-slate-500 appearance-none">
                <option value="" disabled selected hidden>Khu vực bán hàng</option>
                <option value="all">Toàn quốc</option>
              </select>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Theo Mã | Tên bảng giá" 
                  className="block w-full px-3 py-2 text-[13px] border border-slate-300 rounded focus:ring-1 focus:ring-[#2155a3] focus:border-[#2155a3] outline-none"
                />
                <Info className="absolute right-3 top-2.5 h-4 w-4 text-slate-300" />
              </div>
              <div>
                <select className="block w-full px-3 py-2 text-[13px] border border-slate-300 rounded focus:ring-1 focus:ring-[#2155a3] focus:border-[#2155a3] outline-none bg-white text-slate-500 appearance-none">
                  <option value="" disabled selected hidden>Đối tượng áp dụng</option>
                  <option value="all">Tất cả</option>
                  <option value="store">Khách hàng</option>
                </select>
              </div>
              <div className="relative">
                <label className="absolute -top-2 left-2 bg-white px-1 text-[11px] text-slate-500">Trạng thái</label>
                <select className="block w-full px-3 py-2 text-[13px] border border-slate-300 rounded focus:ring-1 focus:ring-[#2155a3] focus:border-[#2155a3] outline-none bg-white text-slate-800 appearance-none">
                  <option value="approved">Đã duyệt</option>
                  <option value="pending">Chờ duyệt</option>
                </select>
              </div>
              <div>
                <select className="block w-full px-3 py-2 text-[13px] border border-slate-300 rounded focus:ring-1 focus:ring-[#2155a3] focus:border-[#2155a3] outline-none bg-white text-slate-500 appearance-none">
                  <option value="" disabled selected hidden>Vùng bán hàng</option>
                  <option value="all">Toàn quốc</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-2">
               <div>
                <select className="block w-full px-3 py-2 text-[13px] border border-slate-300 rounded focus:ring-1 focus:ring-[#2155a3] focus:border-[#2155a3] outline-none bg-white text-slate-500 appearance-none">
                  <option value="" disabled selected hidden>Khu vực bán hàng</option>
                  <option value="all">Toàn quốc</option>
                </select>
              </div>
            </div>
          </>
        )}
        
        <div className="flex justify-end space-x-3 mt-4">
          <button className="px-4 py-1.5 text-[13px] font-medium text-slate-600 bg-white border border-slate-300 rounded hover:bg-slate-50 transition-colors">
            Làm mới
          </button>
          <button className="px-5 py-1.5 text-[13px] font-medium text-white bg-[#2155a3] rounded hover:bg-[#1a4484] transition-colors">
            Tìm kiếm
          </button>
        </div>
      </div>

      {/* --- DATA GRID --- */}
      <div className="bg-white rounded-md border border-slate-200 shadow-sm flex flex-col">
        
        {/* Toolbar */}
        <div className="p-4 flex justify-between items-center border-b border-slate-100">
          <h2 className="text-[15px] font-semibold text-slate-800">
            {isAppliedTab ? 'Bảng giá áp dụng hiện tại' : 'Danh sách bảng giá'}
          </h2>
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setIsCreateModalOpen(true)}
              className="flex items-center gap-2 bg-[#2155a3] text-white px-3 py-1.5 rounded-md hover:bg-[#1a4484] transition-colors font-medium text-[13px] shadow-sm"
            >
              <Plus className="w-4 h-4" /> Tạo bảng giá
            </button>
            <button className="flex items-center px-3 py-1.5 text-[13px] font-medium text-slate-700 bg-white border border-slate-300 rounded hover:bg-slate-50 transition-colors">
              <Download className="w-4 h-4 mr-2" /> Export Excel
            </button>
            <div className="h-4 w-px bg-slate-300"></div>
            <button className="text-slate-500 hover:text-slate-800">
              <Settings2 className="w-4 h-4" />
            </button>
            <button className="text-slate-500 hover:text-slate-800">
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-[13px] text-left whitespace-nowrap">
            <thead className="bg-white border-b border-slate-200 text-slate-700 font-medium">
              <tr>
                <th className="px-4 py-3">Mã bảng giá</th>
                <th className="px-4 py-3">Tên bảng giá</th>
                <th className="px-4 py-3">Thời gian áp dụng</th>
                <th className="px-4 py-3">Đối tượng áp dụng</th>
                <th className="px-4 py-3">Vùng bán hàng</th>
                <th className="px-4 py-3">Khu vực bán hàng</th>
                <th className="px-4 py-3">Trạng thái</th>
                <th className="px-4 py-3">Ngày tạo</th>
                <th className="px-4 py-3">Người tạo</th>
                <th className="px-4 py-3">Ngày cập nhật</th>
                <th className="px-4 py-3">Người cập nhật</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {mockPriceLists.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="px-4 py-3">
                    <span className="text-[#2155a3] hover:underline cursor-pointer">{item.code}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-[#2155a3] hover:underline cursor-pointer">{item.name}</span>
                  </td>
                  <td className="px-4 py-3 text-slate-700">{item.period}</td>
                  <td className="px-4 py-3">
                    <span className="text-[#2155a3] bg-blue-50/50 px-2 py-0.5 rounded">{item.target}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-[#2155a3] bg-blue-50/50 px-2 py-0.5 rounded">{item.salesRegion}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-[#2155a3] bg-blue-50/50 px-2 py-0.5 rounded">{item.salesArea}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-block px-2.5 py-1 text-[11px] font-medium text-white bg-[#2155a3] rounded whitespace-nowrap">
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-700">{item.createDate}</td>
                  <td className="px-4 py-3 text-slate-700">{item.createdBy}</td>
                  <td className="px-4 py-3 text-slate-700">{item.updateDate}</td>
                  <td className="px-4 py-3 text-slate-700">{item.updatedBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-4 border-t border-slate-200 flex items-center justify-end bg-white text-[13px]">
          <div className="flex items-center space-x-6">
            <div className="text-slate-600">
              1-10 trên 1960 bảng giá
            </div>
            
            <div className="flex space-x-1 items-center text-slate-600">
              <button className="p-1 hover:bg-slate-100 rounded text-slate-400">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="px-2.5 py-1 rounded border border-[#2155a3] text-[#2155a3] font-medium">1</button>
              <button className="px-2.5 py-1 hover:bg-slate-100 rounded">2</button>
              <button className="px-2.5 py-1 hover:bg-slate-100 rounded">3</button>
              <button className="px-2.5 py-1 hover:bg-slate-100 rounded">4</button>
              <button className="px-2.5 py-1 hover:bg-slate-100 rounded">5</button>
              <span className="px-1 text-slate-400">...</span>
              <button className="px-2.5 py-1 hover:bg-slate-100 rounded">196</button>
              <button className="p-1 hover:bg-slate-100 rounded text-slate-600">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center">
              <select className="border border-slate-300 rounded px-2 py-1 bg-white outline-none focus:ring-1 focus:ring-[#2155a3] text-slate-600">
                <option>10 / trang</option>
                <option>20 / trang</option>
                <option>50 / trang</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-full bg-[#f8f9fa] text-slate-800 p-6 space-y-4 min-h-[calc(100vh-64px)]">
      
      {/* --- BREADCRUMB & TITLE --- */}
      <div className="flex flex-col space-y-2 mb-2">
        <div className="text-sm text-slate-500">
          Dữ Liệu Nền <span className="mx-1">/</span> Sản Phẩm <span className="mx-1">/</span> <span className="font-medium text-slate-900">Bảng Giá Bán</span>
        </div>
        <h1 className="text-xl font-semibold text-slate-900">Bảng Giá Bán</h1>
      </div>

      {/* --- TABS --- */}
      <div className="flex space-x-6 border-b border-gray-200">
        <button 
          onClick={() => setActiveTab('list')}
          className={`pb-3 text-[15px] font-medium transition-colors ${
            activeTab === 'list' 
              ? 'text-[#2155a3] border-b-2 border-[#2155a3]' 
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          Danh sách bảng giá
        </button>
        <button 
          onClick={() => setActiveTab('applied')}
          className={`pb-3 text-[15px] font-medium transition-colors ${
            activeTab === 'applied' 
              ? 'text-[#2155a3] border-b-2 border-[#2155a3]' 
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          Bảng giá áp dụng hiện tại
        </button>
      </div>

      {renderTabContent(activeTab === 'applied')}

      <CreatePriceListModal 
        isOpen={isCreateModalOpen} 
        onClose={() => setIsCreateModalOpen(false)} 
      />
    </div>
  );
}
