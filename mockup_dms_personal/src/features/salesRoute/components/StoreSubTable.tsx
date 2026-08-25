import { FreqBadge } from '../../../components/ui/FreqBadge';
import { CopyButton } from '../../../components/ui/CopyButton';
import { Pagination } from '../../../components/ui/Pagination';
import type { Store } from '../types';

interface StoreSubTableProps {
  stores: Store[];
  page: number;
  size: number;
  onPageChange: (p: number) => void;
  onSizeChange: (s: number) => void;
}

function StatusDot({ active }: { active: boolean }) {
  return (
    <span className={`inline-flex items-center gap-1 text-[11px] font-medium ${active ? 'text-green-600' : 'text-gray-400'}`}>
      <span className={`w-1.5 h-1.5 rounded-full inline-block ${active ? 'bg-green-500' : 'bg-gray-300'}`} />
      {active ? 'Hoạt động' : 'Không hoạt động'}
    </span>
  );
}

const TH = 'px-3 py-2 text-left font-semibold whitespace-nowrap text-[11px] text-gray-500';
const TD = 'px-3 py-2 text-xs text-gray-600';

export function StoreSubTable({ stores, page, size, onPageChange, onSizeChange }: StoreSubTableProps) {
  const start  = (page - 1) * size;
  const paged  = stores.slice(start, start + size);

  return (
    <div className="bg-gray-50 border-t border-gray-200 px-5 py-3">
      <p className="text-xs font-semibold text-gray-600 mb-2">Danh sách khách hàng</p>

      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full border-collapse bg-white" style={{ minWidth: 1600 }}>
          <thead className="bg-gray-100">
            <tr className="border-b border-gray-200">
              <th className={TH} style={{ minWidth: 150 }}>Mã khách hàng</th>
              <th className={TH} style={{ minWidth: 165 }}>Tên khách hàng</th>
              <th className={TH} style={{ minWidth: 115 }}>Số điện thoại</th>
              <th className={TH} style={{ minWidth: 270 }}>Địa chỉ</th>
              <th className={TH} style={{ minWidth: 90 }}>Từ ngày</th>
              <th className={TH} style={{ minWidth: 90 }}>Đến ngày</th>
              {(['Thứ 2','Thứ 3','Thứ 4','Thứ 5','Thứ 6','Thứ 7','Chủ nhật'] as const).map(d => (
                <th key={d} className={`${TH} text-center`} style={{ minWidth: 110 }}>{d}</th>
              ))}
              <th className={TH} style={{ minWidth: 120 }}>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {paged.map(s => (
              <tr key={s.id} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                <td className={TD}>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-gray-800">{s.ma}</span>
                    <CopyButton value={s.ma} />
                  </div>
                </td>
                <td className="px-3 py-2 text-xs text-blue-600 font-medium cursor-pointer hover:underline">{s.ten}</td>
                <td className={TD}>{s.sdt}</td>
                <td className={TD}>{s.diaChi}</td>
                <td className={TD}>{s.tuNgay}</td>
                <td className={TD}>{s.denNgay}</td>
                {[s.thu2, s.thu3, s.thu4, s.thu5, s.thu6, s.thu7, s.chunhat].map((v, i) => (
                  <td key={i} className="px-3 py-2 text-center">
                    <FreqBadge value={v ? `Bộ tần suất ${v}` : ''} />
                  </td>
                ))}
                <td className={TD}><StatusDot active={s.active} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-2">
        <Pagination
          page={page} total={stores.length} size={size}
          label="khách hàng" sizes={[10, 20]} compact
          onPageChange={onPageChange} onSizeChange={onSizeChange}
        />
      </div>
    </div>
  );
}
