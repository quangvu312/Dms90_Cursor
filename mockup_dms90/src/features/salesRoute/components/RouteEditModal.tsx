import { useEffect } from 'react';
import { X, PlusCircle, User } from 'lucide-react';
import { AddRouteTab } from './modal/AddRouteTab';
import { AssignRouteTab } from './modal/AssignRouteTab';
import type { Route } from '../types';

interface RouteEditModalProps {
  route: Route | null;
  tab: 'them' | 'gan';
  onTabChange: (t: 'them' | 'gan') => void;
  onClose: () => void;
}

export function RouteEditModal({ route, tab, onTabChange, onClose }: RouteEditModalProps) {
  useEffect(() => {
    if (route) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [route]);

  if (!route) return null;

  return (
    <div
      className="fixed inset-0 bg-black/45 z-[600] flex items-start justify-center pt-12"
      onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-xl shadow-2xl w-[95%] max-w-[960px] max-h-[88vh] flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 flex-shrink-0">
          <h3 className="text-sm font-semibold text-gray-800">Chỉnh sửa tuyến bán hàng</h3>
          <button
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors text-base"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-100 px-6 flex-shrink-0">
          {(['them', 'gan'] as const).map(t => (
            <button
              key={t}
              onClick={() => onTabChange(t)}
              className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium border-b-2 transition-colors whitespace-nowrap -mb-px ${
                tab === t ? 'text-blue-600 border-blue-600' : 'text-gray-500 border-transparent hover:text-blue-500'
              }`}
            >
              {t === 'them'
                ? <><PlusCircle className="w-3.5 h-3.5" />Thêm tuyến</>
                : <><User className="w-3.5 h-3.5" />Gán tuyến</>}
            </button>
          ))}
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-6 py-5 min-h-0">
          {tab === 'them' ? <AddRouteTab route={route} /> : <AssignRouteTab route={route} />}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 px-6 py-4 border-t border-gray-100 flex-shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 border border-gray-300 rounded-lg text-xs font-medium text-gray-600 bg-white hover:bg-gray-50 transition-colors"
          >Đóng</button>
          <button className="px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold transition-colors">
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
}
