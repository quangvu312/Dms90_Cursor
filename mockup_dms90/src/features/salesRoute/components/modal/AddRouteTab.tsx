import { useState } from 'react';
import { Toggle } from '../../../../components/ui/Toggle';
import type { Route } from '../../types';
import { NPP_OPTIONS } from '../../types';

interface AddRouteTabProps {
  route: Route;
}

const mLabel = 'block text-[11px] font-medium text-gray-500 mb-1';
const mInput = 'w-full border border-gray-200 rounded-lg px-3 py-[7px] text-xs text-gray-700 focus:outline-none focus:border-blue-400';
const sel    = { backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%239ca3af'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', paddingRight: 28 };

export function AddRouteTab({ route }: AddRouteTabProps) {
  const [npp, setNpp]               = useState(route.npp);
  const [nhanHangCount, setCount]   = useState(10);
  const [tenTuyen, setTenTuyen]     = useState(route.tenTuyen);
  const [active, setActive]         = useState(route.active);

  return (
    <div className="grid gap-4 items-end" style={{ gridTemplateColumns: '2fr 1.4fr 2fr auto' }}>
      {/* Nhà phân phối */}
      <div>
        <label className={mLabel}><span className="text-red-500">* </span>Nhà phân phối</label>
        <select
          value={npp} onChange={e => setNpp(e.target.value)}
          className={`${mInput} appearance-none`} style={sel}
        >
          {NPP_OPTIONS.map(o => <option key={o}>{o}</option>)}
          <option>ERP_HN - Nhà phân phối HN</option>
        </select>
      </div>

      {/* Nhãn hàng */}
      <div>
        <label className={mLabel}>Nhãn hàng</label>
        <div className="flex items-center gap-2">
          <div className="flex-1 flex items-center gap-1.5 border border-gray-200 rounded-lg px-3 py-[7px] text-xs text-gray-700 bg-white min-w-0">
            <span className="truncate">
              Đã chọn <span className="font-semibold text-blue-700">{nhanHangCount}</span> nhãn
            </span>
            <button onClick={() => setCount(0)} className="text-gray-400 hover:text-gray-600 flex-shrink-0 text-sm leading-none">&times;</button>
          </div>
          <button className="px-3 py-[7px] bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold whitespace-nowrap transition-colors">
            Chọn
          </button>
        </div>
      </div>

      {/* Tên tuyến */}
      <div>
        <label className={mLabel}><span className="text-red-500">* </span>Tên tuyến</label>
        <input
          type="text" value={tenTuyen} onChange={e => setTenTuyen(e.target.value)}
          placeholder="Nhập tên tuyến" className={mInput}
        />
      </div>

      {/* Trạng thái */}
      <div className="pb-[3px]">
        <label className={`${mLabel} whitespace-nowrap`}>Trạng thái</label>
        <Toggle checked={active} onChange={setActive} />
      </div>
    </div>
  );
}
