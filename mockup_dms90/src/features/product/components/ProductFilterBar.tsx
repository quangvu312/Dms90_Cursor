import { Search } from 'lucide-react';
import type { ProductFilters } from '../types';

export const EMPTY_PRODUCT_FILTERS: ProductFilters = {
  searchText: '',
  status: '',
};

interface ProductFilterBarProps {
  filters: ProductFilters;
  onChange: (f: ProductFilters) => void;
  onSearch: () => void;
  onReset: () => void;
}

export function ProductFilterBar({ filters, onChange, onSearch, onReset }: ProductFilterBarProps) {
  return (
    <div className="mb-4 rounded-lg bg-white p-4 shadow-sm border border-gray-100">
      <div className="mb-3 text-sm font-medium text-gray-700">Tìm kiếm theo</div>
      <div className="flex flex-col gap-4 md:flex-row md:items-end">
        <div className="flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Theo mã / tên sản phẩm"
              className="w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={filters.searchText}
              onChange={(e) => onChange({ ...filters, searchText: e.target.value })}
              onKeyDown={(e) => e.key === 'Enter' && onSearch()}
            />
            <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
        </div>

        <div className="flex-1 md:max-w-xs">
          <select
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={filters.status}
            onChange={(e) => onChange({ ...filters, status: e.target.value })}
          >
            <option value="">Trạng thái</option>
            <option value="Active">Hoạt động</option>
            <option value="Inactive">Không hoạt động</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onReset}
            className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Làm mới
          </button>
          <button
            onClick={onSearch}
            className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Tìm kiếm
          </button>
        </div>
      </div>
    </div>
  );
}
