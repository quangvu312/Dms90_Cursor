import { Search } from 'lucide-react';
import { MultiTagSelect } from '../../../components/ui/MultiTagSelect';
import type { RouteFilterState } from '../types';
import { NPP_OPTIONS, VUNG_OPTIONS, NV_VIENG_OPTIONS, NV_CHAM_OPTIONS } from '../types';

interface RouteFilterBarProps {
  filters: RouteFilterState;
  onApply: (f: RouteFilterState) => void;
  onReset: () => void;
}

const sel = 'w-full border border-gray-200 rounded-lg px-3 py-[7px] text-xs text-gray-500 bg-white appearance-none focus:outline-none focus:border-blue-400';

export function RouteFilterBar({ filters, onApply, onReset }: RouteFilterBarProps) {
  const set = (key: keyof RouteFilterState, val: string | string[]) =>
    onApply({ ...filters, [key]: val });

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 px-5 pt-4 pb-5 mb-4">
      <p className="text-xs font-semibold text-gray-500 mb-3">Tìm kiếm theo</p>

      {/* Row 1 */}
      <div className="grid grid-cols-4 gap-3 mb-3">
        <div className="relative">
          <input
            value={filters.search}
            onChange={e => set('search', e.target.value)}
            placeholder="Mã tuyến | Mã NV | Tên NV"
            className="w-full border border-gray-200 rounded-lg px-3 py-[7px] pr-8 text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-400"
          />
          <Search className="absolute right-2.5 top-2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
        </div>

        <div className="relative">
          <input
            value={filters.diemBan}
            onChange={e => set('diemBan', e.target.value)}
            placeholder="Tìm kiếm theo khách hàng"
            className="w-full border border-gray-200 rounded-lg px-3 py-[7px] pr-8 text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-400"
          />
          <Search className="absolute right-2.5 top-2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
        </div>

        <select value={filters.vung} onChange={e => set('vung', e.target.value)} className={sel}
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%239ca3af'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', paddingRight: 28 }}>
          <option value="">Vùng</option>
          {VUNG_OPTIONS.map(v => <option key={v}>{v}</option>)}
        </select>

        <MultiTagSelect
          options={NPP_OPTIONS}
          selected={filters.nppSelected}
          placeholder="NPP"
          onChange={val => set('nppSelected', val)}
        />
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <select value={filters.nvVieng} onChange={e => set('nvVieng', e.target.value)} className={sel}
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%239ca3af'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', paddingRight: 28 }}>
          <option value="">Nhiệm vụ viếng thăm</option>
          {NV_VIENG_OPTIONS.map(v => <option key={v}>{v}</option>)}
        </select>

        <select value={filters.nvCham} onChange={e => set('nvCham', e.target.value)} className={sel}
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%239ca3af'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', paddingRight: 28 }}>
          <option value="">Nhiệm vụ chăm sóc</option>
          {NV_CHAM_OPTIONS.map(v => <option key={v}>{v}</option>)}
        </select>

        <select value={filters.trangThai} onChange={e => set('trangThai', e.target.value)} className={sel}
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%239ca3af'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', paddingRight: 28 }}>
          <option value="">Trạng thái</option>
          <option value="1">Hoạt động</option>
          <option value="0">Không hoạt động</option>
        </select>
      </div>

      <div className="flex justify-end gap-2">
        <button onClick={onReset}
          className="px-4 py-[7px] border border-gray-300 rounded-lg text-xs font-medium text-gray-600 bg-white hover:bg-gray-50 transition-colors">
          Làm mới
        </button>
        <button onClick={() => onApply(filters)}
          className="px-5 py-[7px] bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold transition-colors">
          Tìm kiếm
        </button>
      </div>
    </div>
  );
}
