import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, MapPin, Plus, Clock, X } from 'lucide-react';
import { NEW_CUSTOMERS_GROUPED } from '../mockData';
import { getCareCustomers } from '../careRouteCustomers';
import { SALES_APP_COLORS } from '../theme';
import { ScreenHeader } from './AppHeaders';

type CustomerTab = 'cham-soc' | 'mo-moi';

type FilterGroup = {
  key: string;
  title: string;
  options: string[];
};

/** Bộ lọc Hand-off Figma 7184:4180 */
const FILTER_GROUPS: FilterGroup[] = [
  { key: 'vi-tri', title: 'Vị trí điểm bán', options: ['Trong tuyến', 'Ngoài tuyến', 'Gần tôi', 'Toàn bộ'] },
  { key: 'loai', title: 'Loại điểm bán', options: ['Điện máy', 'Tạp hóa', 'Siêu thị', 'Khác'] },
  { key: 'hang', title: 'Hạng điểm bán', options: ['A', 'B', 'C', 'Chưa xếp hạng'] },
  { key: 'kenh', title: 'Kênh bán hàng', options: ['GT', 'MT', 'Online', 'Khác'] },
  { key: 'trang-thai', title: 'Trạng thái', options: ['Hoạt động', 'Ngưng'] },
];

export function CustomerListPage() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<CustomerTab>('cham-soc');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [selected, setSelected] = useState<Record<string, Set<string>>>({});

  const normalizedQuery = searchQuery.toLowerCase();
  const filterCount = Object.values(selected).reduce((n, s) => n + s.size, 0);

  const filteredCareCustomers = getCareCustomers().filter(customer =>
    customer.name.toLowerCase().includes(normalizedQuery) ||
    customer.code.toLowerCase().includes(normalizedQuery) ||
    (customer.phone && customer.phone.toLowerCase().includes(normalizedQuery))
  );

  const filteredNewCustomersGrouped = NEW_CUSTOMERS_GROUPED.map(group => ({
    ...group,
    items: group.items.filter(item =>
      item.name.toLowerCase().includes(normalizedQuery) ||
      item.id.toLowerCase().includes(normalizedQuery) ||
      ((item as { phone?: string }).phone && (item as { phone?: string }).phone!.toLowerCase().includes(normalizedQuery))
    )
  })).filter(group => group.items.length > 0);

  const toggleOption = (groupKey: string, option: string) => {
    setSelected(prev => {
      const next = { ...prev };
      const set = new Set(next[groupKey] || []);
      if (set.has(option)) set.delete(option);
      else set.add(option);
      next[groupKey] = set;
      return next;
    });
  };

  const clearFilters = () => setSelected({});

  const empty = useMemo(() => {
    if (tab === 'cham-soc') return filteredCareCustomers.length === 0;
    return filteredNewCustomersGrouped.length === 0;
  }, [tab, filteredCareCustomers.length, filteredNewCustomersGrouped.length]);

  return (
        <div className="flex-1 min-h-0 flex flex-col bg-[#f3f4f6] relative">
          <ScreenHeader
            title="Khách hàng"
            onBack={() => navigate('/sales-app/khac')}
            right={
              <button
                type="button"
                onClick={() => navigate('/sales-app/khach-hang/tao-moi')}
                className="w-11 h-11 rounded-lg flex items-center justify-center text-[#1f2937] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1437d6]"
                aria-label="Tạo mới"
              >
                <Plus className="w-5 h-5" />
              </button>
            }
          />

          <div className="shrink-0 flex gap-6 px-4 bg-white border-b border-slate-100" role="tablist">
            {(
              [
                ['cham-soc', 'Chăm sóc'],
                ['mo-moi', 'Mở mới'],
              ] as const
            ).map(([key, label]) => {
              const on = tab === key;
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => setTab(key)}
                  className={`py-3 min-h-11 text-[14px] border-b-2 -mb-px transition-colors focus-visible:outline focus-visible:outline-2 ${
                    on ? 'font-medium' : 'text-slate-500 border-transparent'
                  }`}
                  style={
                    on
                      ? { color: SALES_APP_COLORS.boldBlue, borderColor: SALES_APP_COLORS.boldBlue, outlineColor: SALES_APP_COLORS.boldBlue }
                      : { outlineColor: SALES_APP_COLORS.boldBlue }
                  }
                >
                  {label}
                </button>
              );
            })}
          </div>

          <div className="shrink-0 px-4 py-2 flex items-center gap-2 bg-[#f3f4f6]">
            <div className="flex-1 flex items-center gap-2 bg-white border border-slate-200 rounded-full px-3 min-h-11">
              <Search className="w-4 h-4 text-slate-500 shrink-0" aria-hidden />
              <input
                type="search"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Nhập mã, tên, số điện thoại khách hàng"
                className="flex-1 text-[13px] text-slate-800 bg-transparent outline-none placeholder:text-slate-500 font-normal min-w-0"
                aria-label="Tìm khách hàng"
              />
            </div>
            <button
              type="button"
              onClick={() => setFilterOpen(true)}
              className={`relative w-11 h-11 shrink-0 rounded-xl border bg-white flex items-center justify-center focus-visible:outline focus-visible:outline-2 ${
                filterCount ? 'border-[#1437d6] text-[#1437d6]' : 'border-slate-200 text-slate-600'
              }`}
              style={{ outlineColor: SALES_APP_COLORS.boldBlue }}
              aria-label={filterCount ? `Bộ lọc, ${filterCount} điều kiện` : 'Bộ lọc'}
            >
              <Filter className="w-4 h-4" />
              {filterCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-red-500 text-white text-[10px] font-medium flex items-center justify-center">
                  {filterCount}
                </span>
              )}
            </button>
          </div>

          {tab === 'cham-soc' ? (
            <div className="flex-1 min-h-0 overflow-y-auto hide-scrollbar px-4 pb-4 space-y-3">
              {filteredCareCustomers.map(customer => (
                <button
                  key={customer.code}
                  type="button"
                  onClick={() => navigate(`/sales-app/khach-hang/chi-tiet/${customer.code}`)}
                  className="w-full text-left bg-white rounded-xl shadow-sm p-3.5 focus-visible:outline focus-visible:outline-2"
                  style={{ outlineColor: SALES_APP_COLORS.boldBlue }}
                >
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-[18px] h-[18px] shrink-0 mt-0.5" style={{ color: SALES_APP_COLORS.boldBlue }} aria-hidden />
                    <div className="min-w-0 flex-1">
                      <p className="text-[14px] font-medium text-slate-800 leading-normal mb-1.5 m-0">
                        {customer.name} - {customer.code}
                      </p>
                      <p className="text-[12px] text-slate-600 mb-0.5 m-0 tabular-nums">{customer.phone}</p>
                      <p className="text-[12px] text-slate-600 m-0">{customer.address}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="flex-1 min-h-0 overflow-y-auto hide-scrollbar px-4 pb-4 space-y-6">
              {filteredNewCustomersGrouped.map(group => (
                <div key={group.date}>
                  <h3
                    className="text-[15px] font-medium text-slate-900 mb-3 border-b-[3px] inline-block pb-1 m-0"
                    style={{ borderColor: SALES_APP_COLORS.boldBlue }}
                  >
                    {group.date}
                  </h3>
                  <div className="space-y-3">
                    {group.items.map(item => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => navigate(`/sales-app/khach-hang/chi-tiet/${item.id}`)}
                        className="w-full text-left bg-white rounded-xl shadow-sm focus-visible:outline focus-visible:outline-2"
                        style={{ outlineColor: SALES_APP_COLORS.boldBlue }}
                      >
                        <div className="p-3.5 pb-3">
                          <div className="flex items-start gap-2.5">
                            <MapPin className="w-[18px] h-[18px] shrink-0 text-slate-800 mt-0.5" aria-hidden />
                            <div className="min-w-0 flex-1">
                              <p className="text-[14px] font-medium text-slate-800 leading-normal mb-1.5 m-0">
                                {item.name} - {item.id}
                              </p>
                              <p className="text-[12px] text-slate-600 m-0">{item.address}</p>
                            </div>
                          </div>
                        </div>
                        <div className="px-3.5 py-2.5 border-t border-slate-100 flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-slate-600 text-[12px]">
                            <Clock className="w-[14px] h-[14px]" aria-hidden />
                            {item.time}
                          </div>
                          <span
                            className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                              item.status === 'Hoạt động' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            {item.status}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {empty && (
            <div className="absolute inset-x-0 top-40 bottom-0 flex flex-col items-center justify-center px-8 pointer-events-none">
              <p className="text-[15px] font-medium text-slate-800 m-0">Không có dữ liệu</p>
              <p className="text-[13px] text-slate-600 mt-1 text-center m-0">Không tìm thấy khách hàng phù hợp.</p>
            </div>
          )}

          {filterOpen && (
            <div className="absolute inset-0 z-20 flex flex-col bg-white" role="dialog" aria-modal="true" aria-label="Bộ lọc tìm kiếm">
              <div className="flex items-center gap-2 px-4 h-14 border-b border-slate-100 shrink-0">
                <button
                  type="button"
                  onClick={() => setFilterOpen(false)}
                  className="w-11 h-11 -ml-2 flex items-center justify-center rounded-lg"
                  aria-label="Đóng"
                >
                  <X className="w-5 h-5 text-slate-700" />
                </button>
                <h2 className="flex-1 text-center text-[18px] font-bold text-slate-800 m-0 pr-9">Bộ lọc tìm kiếm</h2>
              </div>
              <div className="flex-1 overflow-y-auto hide-scrollbar px-5 py-4 space-y-6">
                {FILTER_GROUPS.map(group => (
                  <div key={group.key}>
                    <h3 className="text-[14px] font-medium text-slate-800 m-0 mb-3">
                      <span className="border-b-2 border-[#1437d6] pb-0.5 inline-block">{group.title}</span>
                    </h3>
                    <div className="grid grid-cols-2 gap-2.5">
                      {group.options.map(opt => {
                        const on = selected[group.key]?.has(opt);
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => toggleOption(group.key, opt)}
                            className={`min-h-[52px] px-3 py-2 rounded-xl border text-[13px] text-left transition-colors ${
                              on
                                ? 'border-[#1437d6] bg-blue-50 text-[#1437d6] font-medium'
                                : 'border-slate-200 bg-white text-slate-700'
                            }`}
                            aria-pressed={!!on}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
              <div className="shrink-0 p-4 border-t border-slate-100 flex gap-3 bg-white">
                <button
                  type="button"
                  onClick={clearFilters}
                  className="flex-1 min-h-12 rounded-lg border border-slate-200 text-slate-700 text-[15px] font-medium"
                >
                  Đặt lại
                </button>
                <button
                  type="button"
                  onClick={() => setFilterOpen(false)}
                  className="flex-1 min-h-12 rounded-lg text-white text-[15px] font-medium"
                  style={{ background: SALES_APP_COLORS.boldBlue }}
                >
                  Áp dụng
                </button>
              </div>
            </div>
          )}
        </div>
  );
}
