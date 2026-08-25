import { useState } from 'react';
import { Filter, RefreshCw, Search, FileText } from 'lucide-react';
import { KpiCard } from './KpiCard';
import { TopRankList } from './TopRankList';
import type { KpiCardData, TopRankSection } from '../types';

const KPI_DATA: KpiCardData[] = [
  {
    key: 'don-hang',
    title: 'Số đơn hàng',
    iconBg: '#fff0f6',
    iconColor: '📋',
    rows: [{ value: '45' }],
  },
  {
    key: 'doanh-so',
    title: 'Doanh số',
    iconBg: '#f6ffed',
    iconColor: '💲',
    rows: [
      { label: 'Trước VAT', value: '169.854.334 VND' },
      { label: 'Sau VAT', value: '178.718.890 VND' },
    ],
  },
  {
    key: 'diem-ban',
    title: 'Điểm bán',
    iconBg: '#fff7e6',
    iconColor: '📍',
    rows: [
      { label: 'Mới', value: '2' },
      { label: 'Đang hoạt động', value: '40.978' },
    ],
  },
  {
    key: 'nhan-vien',
    title: 'Nhân viên bán hàng',
    iconBg: '#f9f0ff',
    iconColor: '👤',
    rows: [
      { label: 'Mới', value: '4.040' },
      { label: 'Đang hoạt động', value: '12.053' },
    ],
  },
  {
    key: 'nha-phan-phoi',
    title: 'Nhà phân phối',
    iconBg: '#e6fffb',
    iconColor: '🏠',
    rows: [
      { label: 'Mới', value: '0' },
      { label: 'Đang hoạt động', value: '1.346' },
    ],
  },
  {
    key: 'vieng-tham',
    title: 'Viếng thăm',
    iconBg: '#fffbe6',
    iconColor: '📅',
    rows: [
      { label: 'Điểm bán', value: '9' },
      { label: 'Lượt viếng thăm', value: '11' },
    ],
  },
];

const TOP_PRODUCTS: TopRankSection = {
  title: 'Top 10 sản phẩm bán chạy (Sau VAT)',
  items: [
    { rank: 1, code: '102296', name: 'F25-Bộ 2 Anlene Total 10 Vani 800G & 400G_HKM', percent: 100 },
    { rank: 2, code: '212036', name: 'TĂM BÔNG KHÁNG KHUẨN SAKURA TIÊU CHUẨN ZIPPER...', percent: 28 },
    { rank: 3, code: '102283', name: 'TPBS Anlene Hương Vani 800G', percent: 18 },
    { rank: 4, code: '102233', name: 'TPBS Anlene Gold 3X Hương Vani 400G', percent: 12 },
    { rank: 5, code: '102316', name: 'TPBS Anlene Total 10 Hương Vani 800G', percent: 10 },
    { rank: 6, code: '102290', name: 'TPBS Anlene Total 10 Hương Vani 800G', percent: 8 },
    { rank: 7, code: '102240', name: 'TPBS Anlene Gold 5X Hương Vani 800g', percent: 7 },
    { rank: 8, code: '102276', name: 'Anlene Heart Plus...', percent: 6 },
    { rank: 9, code: '224035', name: 'Kẹo Gừng Gingerbon Classic', percent: 5 },
    { rank: 10, code: '102210', name: 'TPBS Anlene MoveMax Hương Vani', percent: 4 },
  ],
};

const TOP_NVBH: TopRankSection = {
  title: 'Top 10 nhân viên bán hàng doanh số cao nhất (Sau VAT)',
  items: [
    { rank: 1, code: 'ERPTTSSM001', name: '[ERP][TTS] NVBH - Thủy Vân', percent: 100 },
    { rank: 2, code: 'QCMTNEWSMNORTH', name: 'QCMTNEW - SM - NORTH - BÁN HÀNG...', percent: 8 },
    { rank: 3, code: 'ERPQCMTSM001', name: 'ERP QC MT SM 001 - KÊNH M&B...', percent: 7 },
    { rank: 4, code: 'SMVH3ABV', name: '[VH] SM ABV', percent: 6 },
    { rank: 5, code: 'SMFV16', name: 'SMFV16', percent: 5 },
    { rank: 6, code: 'QCMTNEWSNORTH', name: 'QCMTNEW - SS - NORTH -...', percent: 4 },
    { rank: 7, code: 'QCMTSM10', name: 'QCMT SM 10 - NPP RECKITT', percent: 3 },
    { rank: 8, code: 'CTSM001', name: '[TTS] CENTRAL - NVBH0 - Sa Môn Quét Rác', percent: 2 },
  ],
};

const TOP_NPP: TopRankSection = {
  title: 'Top 10 NPP có doanh số cao nhất (Sau VAT)',
  items: [
    { rank: 1, code: 'ERPHCM', name: 'ERP_HCM', percent: 100 },
    { rank: 2, code: 'ERPMEKONG', name: 'ERP_MEKONG', percent: 7 },
    { rank: 3, code: '5160044', name: '[TTS-HCM] NPP - 5160044', percent: 6 },
    { rank: 4, code: '9901124', name: 'VPDD RECKITT BENCKISER (THAILAND)...', percent: 5 },
    { rank: 5, code: '1002324', name: '20250926_[QC] [VH] 3', percent: 4 },
    { rank: 6, code: '1148790', name: '[TTS-HCM] NPP - 1148790', percent: 3 },
    { rank: 7, code: 'CTNPP001100', name: 'CENTRAL NPP 001100', percent: 2 },
    { rank: 8, code: '3000005', name: '[QC][MT] NPP - lock inventories-3000005', percent: 2 },
  ],
};

export function DashboardPage() {
  const [dateFrom] = useState('01/08/2026');
  const [dateTo] = useState('20/08/2026');

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-3 pt-[18px]">
        <h1 className="text-xl font-semibold text-slate-800 m-0">Dashboard</h1>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 h-8 text-sm text-slate-700 shadow-sm">
            <span>{dateFrom}</span>
            <span className="text-slate-400">→</span>
            <span>{dateTo}</span>
          </div>
          <button
            type="button"
            className="flex items-center gap-2 px-4 h-8 rounded-lg text-sm font-semibold text-white shadow-sm transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #1e3a5f, #2d5282)' }}
          >
            <Filter className="w-4 h-4" />
            Bộ lọc
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-4">
        {KPI_DATA.map((kpi) => (
          <KpiCard key={kpi.key} data={kpi} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <TopRankList section={TOP_PRODUCTS} />
        <TopRankList section={TOP_NVBH} />
        <TopRankList section={TOP_NPP} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-4">
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
            <h3 className="text-sm font-semibold text-slate-700 m-0">Bản đồ hoạt động trong ngày</h3>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 px-3 h-7 rounded-md text-xs font-semibold text-white"
              style={{ background: 'linear-gradient(135deg, #1e3a5f, #2d5282)' }}
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Làm mới
            </button>
          </div>
          <div className="h-[360px] bg-slate-100">
            <iframe
              title="Bản đồ hoạt động"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
              src="https://www.openstreetmap.org/export/embed.html?bbox=104.2%2C8.2%2C109.8%2C12.8&layer=mapnik&marker=10.762622%2C106.660172"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden flex flex-col min-h-[360px]">
          <div className="px-4 py-3 border-b border-slate-100">
            <h3 className="text-sm font-semibold text-slate-700 m-0">Nhân viên Online</h3>
          </div>
          <div className="relative px-4 py-3 border-b border-slate-100">
            <Search className="w-3.5 h-3.5 absolute left-7 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              placeholder="Tìm kiếm..."
              className="w-full h-9 pl-9 pr-3 rounded-lg border border-slate-200 text-sm outline-none focus:border-blue-400"
            />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-2 text-slate-400 py-8">
            <FileText className="w-10 h-10 opacity-40" />
            <p className="text-sm m-0">Trống</p>
          </div>
        </div>
      </div>
    </div>
  );
}
