import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Search } from 'lucide-react';
import { ScreenHeader } from './AppHeaders';
import { SALES_APP_COLORS } from '../theme';
import { activeDisplaysForApp } from '../../tellingStory/programLinks';

export function AppDisplayListPage() {
  const navigate = useNavigate();
  const [q, setQ] = useState('');
  const all = useMemo(() => activeDisplaysForApp(), []);
  const rows = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return all.filter((p) => !needle || `${p.name} ${p.code || ''}`.toLowerCase().includes(needle));
  }, [all, q]);

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-[#fafafa]">
      <ScreenHeader title="Chương trình trưng bày" onBack={() => navigate('/sales-app/khac')} />
      <div className="shrink-0 px-4 pt-3 pb-2">
        <div className="flex items-center gap-2 bg-white border border-[#e2e8f0] rounded-xl px-3 py-2.5">
          <Search className="w-4 h-4 text-[#94a3b8] shrink-0" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Tìm CTTB"
            className="flex-1 min-w-0 border-0 outline-none text-[13px] bg-transparent text-[#334155]"
          />
        </div>
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto px-4 pb-4 space-y-2.5 hide-scrollbar">
        {rows.length === 0 ? (
          <p className="text-center text-[13px] text-[#94a3b8] py-12 m-0">Không có chương trình trưng bày đang hoạt động</p>
        ) : (
          rows.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => navigate(`/sales-app/trung-bay/${p.id}`)}
              className="w-full text-left bg-white rounded-2xl shadow-[0_2px_3px_rgba(191,191,191,0.38)] px-3.5 py-3 flex items-center gap-2"
            >
              <span className="min-w-0 flex-1">
                <p className="m-0 text-[14px] font-medium text-[#1f2937] leading-normal">{p.name}</p>
                <p className="m-0 mt-0.5 text-[12px]" style={{ color: SALES_APP_COLORS.boldBlue }}>{p.code}</p>
                <p className="m-0 mt-1 text-[12px] text-[#6b7280]">{p.startDate || ''} → {p.endDate || ''}</p>
                <span className="inline-block mt-1.5 px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-100 text-emerald-800">Đang diễn ra</span>
              </span>
              <ChevronRight className="w-4 h-4 text-[#9ca3af] shrink-0" />
            </button>
          ))
        )}
      </div>
    </div>
  );
}
