import { Image, Maximize2, MoreVertical, Plus } from 'lucide-react';
import type { Product } from '../types';

interface ProductTableProps {
  products: Product[];
  total: number;
  page: number;
  size: number;
  onPageChange: (p: number) => void;
  onSizeChange: (s: number) => void;
  onEdit: (p: Product) => void;
  onToggleStatus: (id: string, newStatus: 'Active' | 'Inactive') => void;
  onAddNew: () => void;
}

export function ProductTable({
  products,
  total,
  page,
  size,
  onPageChange,
  onSizeChange,
  onEdit,
  onToggleStatus,
  onAddNew,
}: ProductTableProps) {
  const totalPages = Math.ceil(total / size) || 1;

  return (
    <div className="rounded-lg bg-white shadow-sm border border-gray-100 overflow-hidden flex flex-col h-[calc(100vh-280px)] min-h-[400px]">
      <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3 bg-white">
        <h2 className="text-base font-semibold text-gray-800">Danh sách sản phẩm</h2>
        <div className="flex items-center gap-2 text-gray-400">
          <button onClick={onAddNew} className="flex items-center gap-1 rounded bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700 mr-2">
            <Plus className="h-4 w-4" /> Thêm mới
          </button>
          <Maximize2 className="h-4 w-4 cursor-pointer hover:text-gray-600" />
          <MoreVertical className="h-4 w-4 cursor-pointer hover:text-gray-600" />
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <table className="w-full text-left text-xs">
          <thead className="sticky top-0 z-10 bg-gray-50 text-gray-500 shadow-sm">
            <tr>
              <th className="whitespace-nowrap px-4 py-3 font-medium">Ảnh</th>
              <th className="whitespace-nowrap px-4 py-3 font-medium">Mã SKU</th>
              <th className="whitespace-nowrap px-4 py-3 font-medium">Tên sản phẩm</th>
              <th className="whitespace-nowrap px-4 py-3 font-medium">Đơn vị</th>
              <th className="whitespace-nowrap px-4 py-3 font-medium">Phân cấp</th>
              <th className="whitespace-nowrap px-4 py-3 font-medium">Đơn vị kinh doanh</th>
              <th className="whitespace-nowrap px-4 py-3 font-medium text-center">Trạng thái</th>
              <th className="whitespace-nowrap px-4 py-3 font-medium">Ngày tạo</th>
              <th className="whitespace-nowrap px-4 py-3 font-medium">Người tạo</th>
              <th className="whitespace-nowrap px-4 py-3 font-medium">Ngày cập nhật</th>
              <th className="whitespace-nowrap px-4 py-3 font-medium">Người cập nhật</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-600 bg-white">
            {products.length === 0 ? (
              <tr>
                <td colSpan={11} className="px-4 py-8 text-center text-gray-400">
                  Không có dữ liệu
                </td>
              </tr>
            ) : (
              products.map((p) => (
                <tr key={p.id} className="hover:bg-blue-50/50 cursor-pointer" onClick={() => onEdit(p)}>
                  <td className="px-4 py-2">
                    <div className="h-8 w-8 bg-gray-100 rounded flex items-center justify-center text-gray-400">
                      <Image className="h-4 w-4" />
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{p.sku}</td>
                  <td className="min-w-[200px] px-4 py-2 text-blue-600 hover:underline">{p.name}</td>
                  <td className="whitespace-nowrap px-4 py-2">{p.unit}</td>
                  <td className="whitespace-nowrap px-4 py-2">{p.category}</td>
                  <td className="whitespace-nowrap px-4 py-2">{p.businessUnit}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-center" onClick={(e) => e.stopPropagation()}>
                    <button
                      className={`relative inline-flex h-4 w-8 items-center rounded-full transition-colors ${
                        p.status === 'Active' ? 'bg-blue-500' : 'bg-gray-300'
                      }`}
                      onClick={() => onToggleStatus(p.id, p.status === 'Active' ? 'Inactive' : 'Active')}
                    >
                      <span
                        className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                          p.status === 'Active' ? 'translate-x-4' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-500">{p.createdAt}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-500">{p.createdBy}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-500">{p.updatedAt}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-500">{p.updatedBy}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between border-t border-gray-100 bg-white px-4 py-3 text-xs text-gray-500">
        <div>
          {1 + (page - 1) * size}-{Math.min(page * size, total)} trên {total} sản phẩm
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <button
              onClick={() => onPageChange(Math.max(1, page - 1))}
              disabled={page === 1}
              className="flex h-6 w-6 items-center justify-center rounded hover:bg-gray-100 disabled:opacity-50"
            >
              &lt;
            </button>
            {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
              const p = i + 1;
              return (
                <button
                  key={p}
                  onClick={() => onPageChange(p)}
                  className={`flex h-6 w-6 items-center justify-center rounded ${
                    page === p ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'
                  }`}
                >
                  {p}
                </button>
              );
            })}
            {totalPages > 5 && <span className="px-1">...</span>}
            {totalPages > 5 && (
              <button
                onClick={() => onPageChange(totalPages)}
                className={`flex h-6 w-6 items-center justify-center rounded ${
                  page === totalPages ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'
                }`}
              >
                {totalPages}
              </button>
            )}
            <button
              onClick={() => onPageChange(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              className="flex h-6 w-6 items-center justify-center rounded hover:bg-gray-100 disabled:opacity-50"
            >
              &gt;
            </button>
          </div>
          <div className="flex items-center gap-1 ml-4">
            <select
              className="rounded border border-gray-300 py-1 pl-2 pr-6 text-xs focus:border-blue-500 focus:outline-none"
              value={size}
              onChange={(e) => onSizeChange(Number(e.target.value))}
            >
              <option value={10}>10 / trang</option>
              <option value={20}>20 / trang</option>
              <option value={50}>50 / trang</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
