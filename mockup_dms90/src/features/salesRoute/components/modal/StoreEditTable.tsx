import { useState, useMemo } from 'react';
import { Pencil, Trash2, Plus, Search, ChevronDown, ChevronUp, MapPin, Upload, Download } from 'lucide-react';
import { FreqBadge } from '../../../../components/ui/FreqBadge';
import { Pagination } from '../../../../components/ui/Pagination';
import type { Store } from '../../types';
import { STORE_OPTIONS } from '../../types';

interface StoreEditTableProps {
  stores: Store[];
  onChange: (stores: Store[]) => void;
}

const TH = 'px-3 py-2 text-left font-semibold whitespace-nowrap text-[11px] text-gray-500 bg-gray-50 border-b border-gray-200';
const TD = 'px-3 py-2 text-xs text-gray-700 border-b border-gray-100';
const sel = { backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%239ca3af'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', paddingRight: 24, appearance: 'none' as const };

export function StoreEditTable({ stores, onChange }: StoreEditTableProps) {
  const [page, setPage]           = useState(1);
  const [size, setSize]           = useState(10);
  const [expanded, setExpanded]   = useState(false);
  const [adding, setAdding]       = useState(false);
  const [newMa, setNewMa]         = useState('');
  const [filterQ, setFilterQ]     = useState('');
  const [filterTs, setFilterTs]   = useState('');
  const [filterThu, setFilterThu] = useState('');

  const filtered = useMemo(() => {
    return stores.filter(s => {
      if (filterQ && ![s.ma, s.ten, s.diaChi].some(f => f.toLowerCase().includes(filterQ.toLowerCase()))) return false;
      if (filterTs && s.tanSuat !== filterTs) return false;
      if (filterThu && !s[filterThu as keyof Store]) return false;
      return true;
    });
  }, [stores, filterQ, filterTs, filterThu]);

  const paged = filtered.slice((page - 1) * size, page * size);

  const confirmAdd = () => {
    if (!newMa) return;
    const newStore: Store = {
      id: Date.now(), ma: newMa, ten: '', sdt: '', diaChi: '',
      tuNgay: '', denNgay: '', tanSuat: '', thuTu: '',
      thu2: '', thu3: '', thu4: '', thu5: '', thu6: '', thu7: '', chunhat: '', active: true,
    };
    onChange([newStore, ...stores]);
    setAdding(false);
    setNewMa('');
    setPage(1);
  };

  const deleteStore = (id: number) => {
    const next = stores.filter(s => s.id !== id);
    onChange(next);
    const maxPage = Math.ceil(next.length / size);
    if (page > maxPage && maxPage > 0) setPage(maxPage);
  };

  const inputCls = 'border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:border-blue-400 bg-white';

  return (
    <div>
      {/* Toolbar */}
      <div className="flex items-center justify-end gap-2 mb-2 flex-wrap">
        <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-xs text-gray-600 hover:bg-gray-50 font-medium transition-colors">
          <MapPin className="w-3.5 h-3.5" />Bản đồ tuyến
        </button>
        <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-xs text-gray-600 hover:bg-gray-50 font-medium transition-colors">
          <Upload className="w-3.5 h-3.5" />Import Khách hàng
        </button>
        <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-xs text-gray-600 hover:bg-gray-50 font-medium transition-colors">
          <Download className="w-3.5 h-3.5" />Export Khách hàng
        </button>
        <button
          onClick={() => { setAdding(true); setPage(1); }}
          className="flex items-center gap-1.5 px-3.5 py-1.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />Thêm khách hàng
        </button>
        <button
          onClick={() => { setExpanded(v => !v); if (expanded) { setFilterQ(''); setFilterTs(''); setFilterThu(''); } }}
          className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-xs text-gray-600 hover:bg-gray-50 font-medium transition-colors"
        >
          {expanded ? <><span>Thu gọn</span><ChevronUp className="w-3 h-3" /></> : <><span>Mở rộng</span><ChevronDown className="w-3 h-3" /></>}
        </button>
      </div>

      {/* Expand filter */}
      {expanded && (
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <div className="relative flex-1 min-w-[220px]">
            <input
              type="text" value={filterQ} onChange={e => setFilterQ(e.target.value)}
              placeholder="Tìm kiếm theo Mã khách hàng, Tên khách hàng..."
              className={`${inputCls} w-full pr-8`}
            />
            <Search className="absolute right-2.5 top-2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
          </div>
          <select value={filterTs} onChange={e => setFilterTs(e.target.value)} className={inputCls} style={{ ...sel, minWidth: 150 }}>
            <option value="">Chọn tần suất</option>
            {['Bộ tần suất F4','Bộ tần suất F8','Bộ tần suất F12','Bộ tần suất F24'].map(o => <option key={o}>{o}</option>)}
          </select>
          <select value={filterThu} onChange={e => setFilterThu(e.target.value)} className={inputCls} style={{ ...sel, minWidth: 130 }}>
            <option value="">Chọn thứ</option>
            {[['thu2','Thứ 2'],['thu3','Thứ 3'],['thu4','Thứ 4'],['thu5','Thứ 5'],['thu6','Thứ 6'],['thu7','Thứ 7'],['chunhat','Chủ nhật']].map(([k,l]) => <option key={k} value={k}>{l}</option>)}
          </select>
          <button
            onClick={() => { setExpanded(false); setFilterQ(''); setFilterTs(''); setFilterThu(''); }}
            className="text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 whitespace-nowrap"
          >
            Thu gọn <ChevronUp className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto border border-gray-200 rounded-lg" style={{ maxHeight: 280, overflowY: 'auto' }}>
        <table className="w-full border-collapse" style={{ minWidth: 1400 }}>
          <thead>
            <tr>
              <th className={TH} style={{ minWidth: 42, textAlign: 'center', position: 'sticky', top: 0 }}>STT</th>
              <th className={TH} style={{ minWidth: 130, position: 'sticky', top: 0 }}>Mã khách hàng</th>
              <th className={TH} style={{ minWidth: 200, position: 'sticky', top: 0 }}>Tên khách hàng</th>
              <th className={TH} style={{ minWidth: 110, position: 'sticky', top: 0 }}>Số điện thoại</th>
              <th className={TH} style={{ minWidth: 200, position: 'sticky', top: 0 }}>Địa chỉ</th>
              <th className={TH} style={{ minWidth: 90, position: 'sticky', top: 0 }}>Từ ngày</th>
              <th className={TH} style={{ minWidth: 90, position: 'sticky', top: 0 }}>Đến ngày</th>
              <th className={TH} style={{ minWidth: 130, position: 'sticky', top: 0 }}>Tần suất</th>
              <th className={`${TH} text-center`} style={{ minWidth: 65, position: 'sticky', top: 0 }}>Thứ tự</th>
              {['Thứ 2','Thứ 3','Thứ 4','Thứ 5','Thứ 6','Thứ 7','Chủ nhật'].map(d => (
                <th key={d} className={`${TH} text-center`} style={{ minWidth: 80, position: 'sticky', top: 0 }}>{d}</th>
              ))}
              <th className={`${TH} text-center`} style={{ minWidth: 80, position: 'sticky', top: 0, right: 0, zIndex: 15 }}>Tùy chỉnh</th>
            </tr>
          </thead>
          <tbody>
            {/* Add row */}
            {adding && (
              <tr className="bg-green-50">
                <td className={`${TD} text-center text-gray-400`}>—</td>
                <td className={TD}>
                  <select value={newMa} onChange={e => setNewMa(e.target.value)}
                    className={`${inputCls} w-full`} style={sel}>
                    <option value="">-- Chọn mã khách hàng --</option>
                    {STORE_OPTIONS.map(o => <option key={o}>{o}</option>)}
                  </select>
                </td>
                <td colSpan={14} className={TD} />
                <td className={`${TD} text-center`} style={{ position: 'sticky', right: 0, background: '#f0fdf4' }}>
                  <div className="flex items-center justify-center gap-1">
                    <button onClick={confirmAdd} className="px-2 py-1 bg-blue-700 text-white rounded text-[10px] font-semibold hover:bg-blue-800 transition-colors">Lưu</button>
                    <button onClick={() => { setAdding(false); setNewMa(''); }} className="px-2 py-1 border border-gray-300 text-gray-600 rounded text-[10px] hover:bg-gray-50 transition-colors">Hủy</button>
                  </div>
                </td>
              </tr>
            )}

            {paged.length === 0 && !adding ? (
              <tr><td colSpan={17} className="text-center py-8 text-xs text-gray-400">Chưa có khách hàng</td></tr>
            ) : paged.map((s, i) => (
              <tr key={s.id} className="hover:bg-blue-50 transition-colors">
                <td className={`${TD} text-center`}>{(page - 1) * size + i + 1}</td>
                <td className="px-3 py-2 text-xs text-blue-600 font-medium cursor-pointer hover:underline border-b border-gray-100">{s.ma}</td>
                <td className={TD}>{s.ten}</td>
                <td className={TD}>{s.sdt}</td>
                <td className={TD}>{s.diaChi}</td>
                <td className={TD}>{s.tuNgay}</td>
                <td className={TD}>{s.denNgay}</td>
                <td className={TD}><FreqBadge value={s.tanSuat} /></td>
                <td className={`${TD} text-center`}>{s.thuTu}</td>
                {[s.thu2, s.thu3, s.thu4, s.thu5, s.thu6, s.thu7, s.chunhat].map((v, j) => (
                  <td key={j} className={`${TD} text-center`}>
                    <FreqBadge value={v ? `F${v.replace('F','')}` : ''} />
                  </td>
                ))}
                <td className={`${TD} text-center`} style={{ position: 'sticky', right: 0, background: '#fff' }}>
                  <div className="flex items-center justify-center gap-1">
                    <button title="Sửa" className="w-7 h-7 flex items-center justify-center rounded border border-blue-200 text-blue-500 hover:bg-blue-50 transition-colors">
                      <Pencil className="w-3.5 h-3.5" />
                    </button>
                    <button title="Xóa" onClick={() => deleteStore(s.id)}
                      className="w-7 h-7 flex items-center justify-center rounded border border-dashed border-red-300 text-red-400 hover:bg-red-50 transition-colors">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-2">
        <Pagination
          page={page} total={filtered.length} size={size}
          label="khách hàng" sizes={[10, 20]} compact
          onPageChange={setPage} onSizeChange={s => { setSize(s); setPage(1); }}
        />
      </div>
    </div>
  );
}
