import { Search, Calendar } from 'lucide-react';

export interface HistoryFilters {
  search: string;
  trangThaiThongBao: string;
  trangThaiNhan: string;
  tuNgay: string;
  denNgay: string;
}

export const EMPTY_HISTORY_FILTERS: HistoryFilters = {
  search: '',
  trangThaiThongBao: '',
  trangThaiNhan: '',
  tuNgay: '',
  denNgay: '',
};

interface NotificationHistoryFilterBarProps {
  filters: HistoryFilters;
  onChange: (filters: HistoryFilters) => void;
  onSearch: () => void;
  onReset: () => void;
}

const selectCls =
  'w-full appearance-none rounded-lg border border-gray-200 bg-white px-3 py-[7px] text-xs text-gray-600 focus:border-blue-400 focus:outline-none';
const chevronBg = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%239ca3af'/%3E%3C/svg%3E\")",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 10px center',
  paddingRight: 28,
} as const;

export function NotificationHistoryFilterBar({ filters, onChange, onSearch, onReset }: NotificationHistoryFilterBarProps) {
  const set = <K extends keyof HistoryFilters>(key: K, val: HistoryFilters[K]) =>
    onChange({ ...filters, [key]: val });

  return (
    <div className="mb-4 rounded-xl border border-gray-100 bg-white px-5 pb-5 pt-4 shadow-sm">
      <p className="mb-3 text-xs font-semibold text-gray-500">Tìm kiếm theo</p>

      <div className="mb-3 grid grid-cols-1 gap-3 lg:grid-cols-4">
        <div className="relative lg:col-span-1">
          <input
            value={filters.search}
            onChange={(e) => set('search', e.target.value)}
            placeholder="Theo Tiêu đề, Tóm tắt thông báo, nội dung thông báo"
            className="w-full rounded-lg border border-gray-200 px-3 py-[7px] pr-8 text-xs text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none"
          />
          <Search className="pointer-events-none absolute right-2.5 top-2 h-3.5 w-3.5 text-gray-400" />
        </div>

        <select
          value={filters.trangThaiThongBao}
          onChange={(e) => set('trangThaiThongBao', e.target.value)}
          className={selectCls}
          style={chevronBg}
        >
          <option value="">Trạng thái thông báo</option>
          <option value="Đã gửi">Đã gửi</option>
          <option value="Nháp">Nháp</option>
          <option value="Đã hủy">Đã hủy</option>
        </select>

        <select
          value={filters.trangThaiNhan}
          onChange={(e) => set('trangThaiNhan', e.target.value)}
          className={selectCls}
          style={chevronBg}
        >
          <option value="">Trạng thái nhận thông báo</option>
          <option value="Đã xem">Đã xem</option>
          <option value="Chưa xem">Chưa xem</option>
        </select>

        <div>
          <p className="mb-1 text-[10.5px] text-gray-400">Ngày gửi thông báo</p>
          <div className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-2 py-[5px]">
            <input
              type="date"
              value={filters.tuNgay}
              onChange={(e) => set('tuNgay', e.target.value)}
              className="w-full text-xs text-gray-600 focus:outline-none"
            />
            <span className="text-gray-300">→</span>
            <input
              type="date"
              value={filters.denNgay}
              onChange={(e) => set('denNgay', e.target.value)}
              className="w-full text-xs text-gray-600 focus:outline-none"
            />
            <Calendar className="h-3.5 w-3.5 flex-shrink-0 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <button
          onClick={onReset}
          className="rounded-lg border border-gray-300 bg-white px-4 py-[7px] text-xs font-medium text-gray-600 transition-colors hover:bg-gray-50"
        >
          Làm mới
        </button>
        <button
          onClick={onSearch}
          className="rounded-lg bg-blue-700 px-5 py-[7px] text-xs font-semibold text-white transition-colors hover:bg-blue-800"
        >
          Tìm kiếm
        </button>
      </div>
    </div>
  );
}
