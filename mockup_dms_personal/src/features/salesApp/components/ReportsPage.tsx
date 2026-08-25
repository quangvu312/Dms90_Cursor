import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  BarChart3,
  Package,
  CalendarDays,
  Warehouse,
  TrendingUp,
  ClipboardList,
  Gift,
  Layers,
} from 'lucide-react';
import { BottomTabBar } from './BottomTabBar';
import { ScreenHeader } from './AppHeaders';
import { KPI_REPORTS } from '../mockData';
import { SALES_APP_COLORS } from '../theme';

const TILE_ICONS = [
  BarChart3,
  ClipboardList,
  TrendingUp,
  CalendarDays,
  Warehouse,
  CalendarDays,
  Gift,
  Layers,
];

/**
 * Tab Báo cáo — typography đồng bộ Visit/More (section 16 · body 14 · meta 12).
 */
export function ReportsPage() {
  const navigate = useNavigate();
  const [kpiTab, setKpiTab] = useState<'month' | 'time'>('month');

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-[#fafafa]">
      <ScreenHeader title="Báo cáo" balanceBack={false} variant="gradient" />

      <div className="flex-1 min-h-0 overflow-y-auto hide-scrollbar px-4 pt-3 pb-4">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-[16px] font-normal leading-normal text-[#3e4559] m-0">Chỉ tiêu KPI</h2>
            <button
              type="button"
              onClick={() => navigate('/sales-app/bao-cao/kpi')}
              className="text-[14px] font-normal leading-normal border-0 bg-transparent p-0 cursor-pointer"
              style={{ color: SALES_APP_COLORS.boldBlue }}
            >
              Xem tất cả
            </button>
          </div>
          <div className="flex gap-4 border-b border-[#e5e7eb] mb-3" role="tablist">
            {(
              [
                ['month', 'Theo tháng'],
                ['time', 'Theo thời gian'],
              ] as const
            ).map(([key, label]) => {
              const on = kpiTab === key;
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => setKpiTab(key)}
                  className={`py-2.5 text-[14px] font-normal leading-normal border-0 border-b-2 -mb-px bg-transparent cursor-pointer ${
                    on ? '' : 'text-[#6b7280] border-transparent'
                  }`}
                  style={
                    on
                      ? { color: SALES_APP_COLORS.boldBlue, borderBottomColor: SALES_APP_COLORS.boldBlue }
                      : undefined
                  }
                >
                  {label}
                </button>
              );
            })}
          </div>
          <div className="py-10 text-center" role="status">
            <Package className="w-12 h-12 mx-auto text-[#d1d5db] mb-2" aria-hidden />
            <p className="text-[15px] text-[#1f2937] m-0">Không có dữ liệu</p>
          </div>
        </div>

        <h2 className="text-[16px] font-normal leading-normal text-[#3e4559] m-0 mb-3">Danh sách báo cáo</h2>
        <div className="grid grid-cols-2 gap-3 pb-2">
          {KPI_REPORTS.map((r, i) => {
            const Icon = TILE_ICONS[i % TILE_ICONS.length];
            return (
              <button
                key={r.slug}
                type="button"
                onClick={() => navigate(`/sales-app/bao-cao/${r.slug}`)}
                className="flex flex-col items-start gap-2.5 min-h-[92px] text-left bg-white rounded-xl p-3.5 shadow-[0_2px_3px_rgba(191,191,191,0.38)] border-0 cursor-pointer active:translate-y-px focus-visible:outline focus-visible:outline-2"
                style={{ outlineColor: SALES_APP_COLORS.boldBlue }}
              >
                <Icon className="w-6 h-6" style={{ color: SALES_APP_COLORS.boldBlue }} aria-hidden />
                <span className="text-[14px] font-normal leading-normal text-[#1f2937]">{r.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <BottomTabBar active="bao-cao" />
    </div>
  );
}

export function ReportDetailPage() {
  const { slug = '' } = useParams();
  const navigate = useNavigate();
  const report = KPI_REPORTS.find(r => r.slug === slug) || {
    label: 'Báo cáo',
    summary: '—',
    items: [] as { label: string; value: string }[],
  };

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-[#fafafa]">
      <ScreenHeader title={report.label} onBack={() => navigate('/sales-app/bao-cao')} variant="gradient" />
      <div className="flex-1 min-h-0 overflow-y-auto hide-scrollbar px-4 py-3 space-y-3">
        <article className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="text-[14px] font-normal leading-normal text-[#1f2937] m-0 mb-2">Tổng quan</h3>
          <p className="text-[16px] font-normal leading-normal m-0" style={{ color: SALES_APP_COLORS.boldBlue }}>
            {report.summary}
          </p>
          <p className="text-[12px] font-normal leading-normal text-[#6b7280] m-0 mt-2">
            Dữ liệu mock — [CẦN XÁC NHẬN] nguồn KPI thật
          </p>
        </article>
        {report.items.map(it => (
          <article key={it.label} className="bg-white rounded-xl p-4 shadow-sm">
            <h3 className="text-[14px] font-normal leading-normal text-[#1f2937] m-0 mb-1">{it.label}</h3>
            <p className="text-[14px] font-normal leading-normal text-[#6b7280] m-0">{it.value}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
