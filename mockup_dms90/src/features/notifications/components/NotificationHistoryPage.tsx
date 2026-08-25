import { useMemo, useState } from 'react';
import { Columns3, Maximize2 } from 'lucide-react';
import { Pagination } from '../../../components/ui/Pagination';
import { CopyButton } from '../../../components/ui/CopyButton';
import { NotificationHistoryFilterBar, EMPTY_HISTORY_FILTERS, type HistoryFilters } from './NotificationHistoryFilterBar';
import { NotificationModal } from './NotificationModal';
import { HISTORY_DETAIL_NOTIFICATION, HISTORY_TOTAL_ROWS_DECORATIVE, MOCK_HISTORY_ROWS } from '../mockData';
import type { NotificationHistoryRow } from '../types';

const TH = 'px-3 py-2.5 text-left font-semibold whitespace-nowrap text-[11.5px] text-gray-600';
const TD = 'px-3 py-2 text-xs text-gray-600 whitespace-nowrap';

function isFiltersEmpty(f: HistoryFilters) {
  return !f.search && !f.trangThaiThongBao && !f.trangThaiNhan && !f.tuNgay && !f.denNgay;
}

function matchesDateRange(ngayGuiThongBao: string, tuNgay: string, denNgay: string) {
  if (!tuNgay && !denNgay) return true;
  const [datePart] = ngayGuiThongBao.split(' ');
  const [dd, mm, yyyy] = datePart.split('-');
  const rowDate = `${yyyy}-${mm}-${dd}`;
  if (tuNgay && rowDate < tuNgay) return false;
  if (denNgay && rowDate > denNgay) return false;
  return true;
}

function StatusBadge({ value }: { value: NotificationHistoryRow['trangThaiThongBao'] }) {
  const styles: Record<typeof value, string> = {
    'Đã gửi': 'bg-emerald-50 text-emerald-600',
    'Nháp': 'bg-gray-100 text-gray-500',
    'Đã hủy': 'bg-red-50 text-red-500',
  };
  return <span className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${styles[value]}`}>{value}</span>;
}

function ReceiveStatusBadge({ value }: { value: NotificationHistoryRow['trangThaiNhan'] }) {
  const styles: Record<typeof value, string> = {
    'Đã xem': 'bg-emerald-50 text-emerald-600',
    'Chưa xem': 'bg-amber-50 text-amber-600',
  };
  return <span className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${styles[value]}`}>{value}</span>;
}

export function NotificationHistoryPage() {
  const [draftFilters, setDraftFilters] = useState<HistoryFilters>(EMPTY_HISTORY_FILTERS);
  const [appliedFilters, setAppliedFilters] = useState<HistoryFilters>(EMPTY_HISTORY_FILTERS);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [detailOpen, setDetailOpen] = useState(false);

  const isFiltered = !isFiltersEmpty(appliedFilters);

  const filteredRows = useMemo(() => {
    if (!isFiltered) return MOCK_HISTORY_ROWS;
    const q = appliedFilters.search.trim().toLowerCase();
    return MOCK_HISTORY_ROWS.filter((r) => {
      if (q && !r.tieuDe.toLowerCase().includes(q) && !r.maThongBao.toLowerCase().includes(q)) return false;
      if (appliedFilters.trangThaiThongBao && r.trangThaiThongBao !== appliedFilters.trangThaiThongBao) return false;
      if (appliedFilters.trangThaiNhan && r.trangThaiNhan !== appliedFilters.trangThaiNhan) return false;
      if (!matchesDateRange(r.ngayGuiThongBao, appliedFilters.tuNgay, appliedFilters.denNgay)) return false;
      return true;
    });
  }, [appliedFilters, isFiltered]);

  // Ở trạng thái mặc định (chưa lọc), số liệu phân trang là tĩnh mô phỏng khối
  // lượng dữ liệu thật; danh sách hiển thị luôn là 10 dòng dữ liệu mẫu gốc.
  const total = isFiltered ? filteredRows.length : HISTORY_TOTAL_ROWS_DECORATIVE;
  const rows = isFiltered ? filteredRows.slice((page - 1) * size, page * size) : MOCK_HISTORY_ROWS;

  const handleSearch = () => {
    setAppliedFilters(draftFilters);
    setPage(1);
  };

  const handleReset = () => {
    setDraftFilters(EMPTY_HISTORY_FILTERS);
    setAppliedFilters(EMPTY_HISTORY_FILTERS);
    setPage(1);
  };

  return (
    <div className="min-h-full bg-gray-50 px-5 py-5">
      {/* Breadcrumb */}
      <div className="mb-1.5 flex items-center gap-1.5 text-[11px] text-gray-400">
        <span className="cursor-pointer hover:text-blue-500">Quản Lý Thông Báo</span>
        <span>/</span>
        <span className="font-medium text-gray-600">Lịch Sử Thông Báo</span>
      </div>

      <h1 className="mb-4 text-lg font-bold text-gray-800">Lịch Sử Thông Báo</h1>

      {/* Bộ lọc */}
      <NotificationHistoryFilterBar
        filters={draftFilters}
        onChange={setDraftFilters}
        onSearch={handleSearch}
        onReset={handleReset}
      />

      {/* Bảng dữ liệu */}
      <div className="rounded-xl border border-gray-100 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3.5">
          <h2 className="text-sm font-semibold text-gray-800">Danh sách lịch sử thông báo</h2>
          <div className="flex items-center gap-1">
            <button className="rounded p-1.5 text-gray-400 hover:text-gray-600" title="Tùy chỉnh cột">
              <Columns3 className="h-4 w-4" />
            </button>
            <button className="rounded p-1.5 text-gray-400 hover:text-gray-600" title="Toàn màn hình">
              <Maximize2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-xs" style={{ minWidth: 1700 }}>
            <thead className="bg-gray-50">
              <tr className="border-b border-gray-200">
                <th className={TH}>Mã thông báo</th>
                <th className={TH}>Tiêu đề</th>
                <th className={TH}>Loại thông báo</th>
                <th className={TH}>Nội dung thông báo</th>
                <th className={TH}>Kiểu hiển thị</th>
                <th className={TH}>Trạng thái thông báo</th>
                <th className={TH}>Ngày gửi thông báo</th>
                <th className={TH}>Mã nhân viên nhận thông báo</th>
                <th className={TH}>Tên nhân viên</th>
                <th className={TH}>Chức vụ</th>
                <th className={TH}>Trạng thái nhận thông báo</th>
                <th className={TH}>Ngày nhận thông báo</th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={12} className="py-14 text-center text-xs text-gray-400">
                    Không có dữ liệu phù hợp
                  </td>
                </tr>
              ) : (
                rows.map((r) => (
                  <tr key={r.id} className="border-b border-gray-100 transition-colors hover:bg-blue-50/40">
                    <td className={TD}>
                      <div className="flex items-center gap-1.5">
                        <span className="rounded border border-gray-200 px-2 py-0.5 font-mono text-[11px] text-gray-700">
                          {r.maThongBao}
                        </span>
                        <CopyButton value={r.maThongBao} />
                      </div>
                    </td>
                    <td className={TD}>{r.tieuDe}</td>
                    <td className={TD}>
                      <span className="rounded-full bg-sky-50 px-2.5 py-1 text-[11px] font-medium text-sky-600">
                        {r.loaiThongBao}
                      </span>
                    </td>
                    <td className={TD}>
                      <button
                        onClick={() => setDetailOpen(true)}
                        className="font-medium text-blue-600 hover:underline"
                      >
                        Xem chi tiết
                      </button>
                    </td>
                    <td className={TD}>
                      <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-600">
                        {r.kieuHienThi}
                      </span>
                    </td>
                    <td className={TD}>
                      <StatusBadge value={r.trangThaiThongBao} />
                    </td>
                    <td className={TD}>{r.ngayGuiThongBao}</td>
                    <td className={TD}>
                      <div className="flex items-center gap-1.5">
                        <span className="rounded border border-gray-200 px-2 py-0.5 font-mono text-[11px] text-gray-700">
                          {r.maNhanVien}
                        </span>
                        <CopyButton value={r.maNhanVien} />
                      </div>
                    </td>
                    <td className={TD}>{r.tenNhanVien}</td>
                    <td className={TD}>{r.chucVu}</td>
                    <td className={TD}>
                      <ReceiveStatusBadge value={r.trangThaiNhan} />
                    </td>
                    <td className={TD}>{r.ngayNhanThongBao}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="border-t border-gray-100 px-5 py-3">
          <Pagination
            page={page}
            total={total}
            size={size}
            label="dòng"
            sizes={[10, 20, 50]}
            onPageChange={setPage}
            onSizeChange={(s) => { setSize(s); setPage(1); }}
          />
        </div>
      </div>

      {detailOpen && (
        <NotificationModal notification={HISTORY_DETAIL_NOTIFICATION} onClose={() => setDetailOpen(false)} />
      )}
    </div>
  );
}
