import { useState } from 'react';
import { StoreEditTable } from './StoreEditTable';
import type { Route, Store } from '../../types';

interface AssignRouteTabProps {
  route: Route;
}

const mLabel = 'block text-[11px] font-medium text-gray-500 mb-1';
const mInput = 'w-full border border-gray-200 rounded-lg px-3 py-[7px] text-xs focus:outline-none focus:border-blue-400';
const selStyle = { backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%239ca3af'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', paddingRight: 28, appearance: 'none' as const };

const NV_OPTIONS   = ['QCMTNEWSSSE - qcmtnew - ss - south east...', 'ERPTTSSM001 - [ERP][TTS] NVBH - Thúy Vân', 'SSMT - SS thuộc Trà Vinh'];
const NVTT_OPTIONS = ['[KD][Route]All Mission', 'Trong tuyến _Training', '[Th.Vi] Full Tuyến (Required)'];
const NVCS_OPTIONS = ['[KD][Owner]All Mission', 'Ngoại tuyến_trainig', '[Th.Vi] Chăm sóc Full (Not Required)'];

export function AssignRouteTab({ route }: AssignRouteTabProps) {
  const [nv, setNv]     = useState(NV_OPTIONS[0]);
  const [nvtt, setNvtt] = useState(NVTT_OPTIONS[0]);
  const [nvcs, setNvcs] = useState(NVCS_OPTIONS[0]);
  const [stores, setStores] = useState<Store[]>(() => route.stores.map(s => ({ ...s })));

  return (
    <>
      {/* Section 1: Thông tin gán tuyến */}
      <div className="border border-gray-200 rounded-lg p-4 mb-4">
        <p className="text-xs font-semibold text-gray-600 mb-3">Thông tin gán tuyến</p>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <label className={mLabel}>Mã tuyến</label>
            <input
              type="text" value={route.maTuyen} disabled
              className={`${mInput} bg-gray-50 text-gray-400 cursor-not-allowed`}
            />
          </div>
          <div>
            <label className={mLabel}>Mã nhân viên</label>
            <select value={nv} onChange={e => setNv(e.target.value)} className={`${mInput} text-gray-700`} style={selStyle}>
              {NV_OPTIONS.map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div>
            <label className={mLabel}><span className="text-red-500">* </span>Nhiệm vụ theo tuyến</label>
            <select value={nvtt} onChange={e => setNvtt(e.target.value)} className={`${mInput} text-gray-700`} style={selStyle}>
              {NVTT_OPTIONS.map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className={mLabel}>Nhiệm vụ chăm sóc</label>
            <select value={nvcs} onChange={e => setNvcs(e.target.value)} className={`${mInput} text-gray-700`} style={selStyle}>
              {NVCS_OPTIONS.map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Section 2: Thông tin viếng thăm */}
      <div className="border border-gray-200 rounded-lg p-4">
        <p className="text-xs font-semibold text-gray-600 mb-3">Thông tin viếng thăm</p>
        <StoreEditTable stores={stores} onChange={setStores} />
      </div>
    </>
  );
}
