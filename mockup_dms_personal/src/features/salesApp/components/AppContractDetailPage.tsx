import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { Download, FileText } from 'lucide-react';
import { ScreenHeader } from './AppHeaders';
import { SALES_APP_COLORS } from '../theme';
import { downloadMockPdf, findVisibleContract, fmtDate } from '../contractData';

function pillClass(status: string) {
  if (status === 'Đã duyệt') return 'bg-emerald-100 text-emerald-800';
  if (status === 'Khởi tạo' || status === 'Chờ duyệt') return 'bg-amber-100 text-amber-800';
  if (status === 'Từ chối') return 'bg-red-100 text-red-800';
  return 'bg-slate-100 text-slate-700';
}

export function AppContractDetailPage() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const item = findVisibleContract(id);
  const tabFromUrl = searchParams.get('tab');
  const tab = tabFromUrl === 'customer' || tabFromUrl === 'template'
    ? tabFromUrl
    : (item?.module === 'customer' ? 'customer' : 'template');
  const backTo = `/sales-app/hop-dong?tab=${tab}`;

  const rows: [string, string][] = item
    ? [
        ['Mã hợp đồng', item.code],
        ['Tên hợp đồng', item.name],
        ...(item.module === 'customer'
          ? [
              ['Khách hàng', item.customerName || '—'],
              ['Mã khách hàng', item.customerCode || item.customerId || '—'],
            ] as [string, string][]
          : []),
        ['Loại hợp đồng', item.module === 'template' ? 'Hợp đồng mẫu' : (item.typeLabel || 'Hợp đồng khách hàng')],
        ['Ngày bắt đầu', fmtDate(item.startDate)],
        ['Ngày kết thúc', fmtDate(item.endDate)],
      ]
    : [];

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-[#f3f4f6]">
      <ScreenHeader title="Chi tiết hợp đồng" onBack={() => navigate(backTo)} />
      {!item ? (
        <div className="px-6 pt-16 text-center">
          <p className="m-0 text-[15px] font-medium">Không tìm thấy hợp đồng phù hợp</p>
        </div>
      ) : (
        <div className="flex-1 min-h-0 overflow-y-auto hide-scrollbar px-4 pb-6">
          <article className="bg-white rounded-2xl shadow-[0_2px_3px_rgba(191,191,191,0.38)] px-3.5 py-3 mt-3">
            {rows.map(([label, value]) => (
              <div key={label} className="flex gap-3 py-2 border-b border-[#f1f5f9]">
                <dt className="w-[110px] shrink-0 text-[13px] text-[#7587a6] m-0">{label}</dt>
                <dd className="m-0 flex-1 text-[14px] text-[#1f2937] min-w-0 break-words">{value || '—'}</dd>
              </div>
            ))}
            <div className="flex gap-3 py-2 border-b border-[#f1f5f9]">
              <dt className="w-[110px] shrink-0 text-[13px] text-[#7587a6] m-0">Trạng thái</dt>
              <dd className="m-0">
                <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-medium ${pillClass(item.status)}`}>{item.status}</span>
              </dd>
            </div>
            <div className="flex gap-3 py-2">
              <dt className="w-[110px] shrink-0 text-[13px] text-[#7587a6] m-0">Mô tả</dt>
              <dd className="m-0 flex-1 text-[14px] text-[#1f2937]">{item.description || '—'}</dd>
            </div>
          </article>
          <h2 className="text-[13px] font-medium text-[#7587a6] mt-4 mb-2">File đính kèm</h2>
          <article className="bg-white rounded-2xl shadow-[0_2px_3px_rgba(191,191,191,0.38)] px-3.5 py-2">
            {(item.files || []).length === 0 ? (
              <p className="text-[13px] text-[#6b7280]">Không có file đính kèm.</p>
            ) : item.files.map((f) => (
              <div key={f.name} className="flex items-center gap-2 py-2.5 border-b border-[#f1f5f9] last:border-0">
                <FileText className="w-5 h-5 shrink-0" style={{ color: SALES_APP_COLORS.boldBlue }} />
                <div className="min-w-0 flex-1">
                  <p className="m-0 text-[14px] truncate">{f.name}</p>
                  <p className="m-0 text-[12px] text-[#6b7280]">{f.size}</p>
                </div>
                <button
                  type="button"
                  className="shrink-0 min-h-11 px-2 text-[13px] bg-transparent border-0 flex items-center gap-1"
                  style={{ color: SALES_APP_COLORS.boldBlue }}
                  onClick={() => downloadMockPdf(f.name)}
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            ))}
          </article>
        </div>
      )}
    </div>
  );
}
