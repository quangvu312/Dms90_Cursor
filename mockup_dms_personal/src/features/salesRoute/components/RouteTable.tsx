import { Pencil, RefreshCw, MapPin } from 'lucide-react';
import { Toggle } from '../../../components/ui/Toggle';
import { CopyButton } from '../../../components/ui/CopyButton';
import { Pagination } from '../../../components/ui/Pagination';
import { StoreSubTable } from './StoreSubTable';
import type { Route } from '../types';

interface RouteTableProps {
  routes: Route[];
  allRoutes: Route[];      // mutable source for toggle updates
  total: number;
  page: number;
  size: number;
  expandedRows: number[];
  subPages: Record<number, number>;
  subSizes: Record<number, number>;
  onPageChange: (p: number) => void;
  onSizeChange: (s: number) => void;
  onToggleRow: (id: number) => void;
  onSubPageChange: (routeId: number, p: number) => void;
  onSubSizeChange: (routeId: number, s: number) => void;
  onToggleActive: (id: number, val: boolean) => void;
  onEdit: (route: Route) => void;
}

const TH = 'px-3 py-2.5 text-left font-semibold whitespace-nowrap text-[11.5px] text-gray-600';
const TD = 'px-3 py-2 text-xs text-gray-600';

function TooltipBtn({ onClick, title, tooltip, children }: {
  onClick?: () => void; title?: string; tooltip?: string; children: React.ReactNode;
}) {
  return (
    <div className="relative group inline-flex">
      <button onClick={onClick} title={title}
        className="w-7 h-7 flex items-center justify-center rounded border border-blue-200 text-blue-500 hover:bg-blue-50 transition-colors">
        {children}
      </button>
      {tooltip && (
        <span className="absolute bottom-[calc(100%+5px)] left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-50">
          {tooltip}
        </span>
      )}
    </div>
  );
}

export function RouteTable({
  routes, total, page, size, expandedRows,
  subPages, subSizes,
  onPageChange, onSizeChange, onToggleRow,
  onSubPageChange, onSubSizeChange,
  onToggleActive, onEdit,
}: RouteTableProps) {
  const start = (page - 1) * size;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100">
        <h2 className="text-sm font-semibold text-gray-800">Danh sách tuyến</h2>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-xs text-gray-600 hover:bg-gray-50 font-medium transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8-4-4-4 4m4-4v12" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Import Excel
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-xs text-gray-600 hover:bg-gray-50 font-medium transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4-4 4-4-4m4 4V4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Export Excel
          </button>
          <button className="flex items-center gap-1.5 px-3.5 py-1.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" strokeLinecap="round"/></svg>
            Tạo mới
          </button>
          <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded" title="Tùy chỉnh cột">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M4 6h16M4 12h10M4 18h6" strokeLinecap="round"/></svg>
          </button>
          <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded" title="Toàn màn hình">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-xs" style={{ minWidth: 2300 }}>
          <thead className="bg-gray-50">
            <tr className="border-b border-gray-200">
              {/* Sticky left: expand btn */}
              <th className={`${TH} text-center border-r border-gray-200`} style={{ position: 'sticky', left: 0, zIndex: 31, background: '#f8fafc', minWidth: 42 }} />
              <th className={`${TH} text-center`} style={{ minWidth: 42 }}>STT</th>
              <th className={TH} style={{ minWidth: 110 }}>Vùng</th>
              <th className={TH} style={{ minWidth: 130 }}>Khu vực</th>
              <th className={TH} style={{ minWidth: 130 }}>NPP</th>
              <th className={TH} style={{ minWidth: 185 }}>Mã tuyến</th>
              <th className={TH} style={{ minWidth: 220 }}>Tên Tuyến</th>
              <th className={TH} style={{ minWidth: 210 }}>Nhân viên</th>
              <th className={TH} style={{ minWidth: 100 }}>Nhãn hàng</th>
              <th className={TH} style={{ minWidth: 180 }}>NV viếng thăm</th>
              <th className={TH} style={{ minWidth: 190 }}>NV chăm sóc</th>
              <th className={`${TH} text-center`} style={{ minWidth: 88 }}>Trạng thái</th>
              <th className={TH} style={{ minWidth: 148 }}>Ngày tạo</th>
              <th className={TH} style={{ minWidth: 90 }}>Người tạo</th>
              <th className={TH} style={{ minWidth: 148 }}>Ngày cập nhật</th>
              <th className={TH} style={{ minWidth: 105 }}>Người cập nhật</th>
              {/* Sticky right: actions */}
              <th className={`${TH} text-center border-l border-gray-200`} style={{ position: 'sticky', right: 0, zIndex: 31, background: '#f8fafc', minWidth: 96 }}>Tùy chỉnh</th>
            </tr>
          </thead>
          <tbody>
            {routes.length === 0 ? (
              <tr>
                <td colSpan={17} className="text-center py-14 text-gray-400 text-xs">Không có dữ liệu phù hợp</td>
              </tr>
            ) : routes.map((r, idx) => {
              const expanded = expandedRows.includes(r.id);
              const rowBg    = expanded ? 'bg-blue-50' : '';

              return (
                <>
                  <tr key={r.id} className={`border-b border-gray-100 transition-colors hover:bg-blue-50 ${rowBg}`}>
                    {/* Expand btn - sticky left */}
                    <td className={`px-3 py-2 text-center border-r border-gray-100 ${expanded ? 'bg-blue-50' : 'bg-white'}`}
                      style={{ position: 'sticky', left: 0, zIndex: 10 }}>
                      <button
                        onClick={() => onToggleRow(r.id)}
                        className={`w-6 h-6 flex items-center justify-center rounded border text-sm font-bold transition-colors ${
                          expanded ? 'border-blue-400 text-blue-600 bg-blue-50' : 'border-gray-300 text-gray-500 hover:border-blue-300 hover:text-blue-500'
                        }`}
                      >
                        {expanded ? '−' : '+'}
                      </button>
                    </td>
                    <td className={`${TD} text-center text-gray-500`}>{start + idx + 1}</td>
                    <td className={`${TD} font-medium text-gray-700`}>{r.vung}</td>
                    <td className={TD}>{r.khuVuc}</td>
                    <td className={TD}>{r.npp}</td>
                    <td className={TD}>
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-gray-800">{r.maTuyen}</span>
                        <CopyButton value={r.maTuyen} />
                      </div>
                    </td>
                    <td className="px-3 py-2 text-xs text-blue-600 font-medium cursor-pointer hover:underline whitespace-nowrap">{r.tenTuyen}</td>
                    <td className={TD}>{r.nhanVien}</td>
                    <td className={TD}>{r.nhanHang}</td>
                    <td className={TD}>{r.nvVieng}</td>
                    <td className={TD}>{r.nvCham}</td>
                    <td className="px-3 py-2 text-center">
                      <Toggle checked={r.active} onChange={val => onToggleActive(r.id, val)} />
                    </td>
                    <td className="px-3 py-2 text-xs text-gray-500">{r.ngayTao}</td>
                    <td className={`${TD} text-gray-700`}>{r.nguoiTao}</td>
                    <td className="px-3 py-2 text-xs text-gray-500">{r.ngayCapNhat}</td>
                    <td className={`${TD} text-gray-700`}>{r.nguoiCapNhat}</td>

                    {/* Actions - sticky right */}
                    <td className={`px-3 py-2 border-l border-gray-100 ${expanded ? 'bg-blue-50' : 'bg-white'}`}
                      style={{ position: 'sticky', right: 0, zIndex: 10 }}>
                      <div className="flex items-center justify-center gap-1.5">
                        <TooltipBtn onClick={() => onEdit(r)} tooltip="Nhấp vào để chỉnh sửa">
                          <Pencil className="w-3.5 h-3.5" />
                        </TooltipBtn>
                        <button title="Đồng bộ" className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">
                          <RefreshCw className="w-3.5 h-3.5" />
                        </button>
                        <button title="Bản đồ" className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">
                          <MapPin className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* Detail row */}
                  {expanded && (
                    <tr key={`det-${r.id}`} className="border-b border-gray-200">
                      <td colSpan={17} className="p-0">
                        <StoreSubTable
                          stores={r.stores}
                          page={subPages[r.id] ?? 1}
                          size={subSizes[r.id] ?? 10}
                          onPageChange={p => onSubPageChange(r.id, p)}
                          onSizeChange={s => onSubSizeChange(r.id, s)}
                        />
                      </td>
                    </tr>
                  )}
                </>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Main pagination */}
      <div className="px-5 py-3 border-t border-gray-100">
        <Pagination
          page={page} total={total} size={size}
          label="tuyến bán hàng" sizes={[10, 20, 50]}
          onPageChange={onPageChange} onSizeChange={onSizeChange}
        />
      </div>
    </div>
  );
}
