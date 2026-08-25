import { useNavigate } from 'react-router-dom';
import { User, Map, Search, Filter, Info, MapPin } from 'lucide-react';
import { BottomTabBar } from './BottomTabBar';
import { CURRENT_USER, CURRENT_ROUTE, VISIT_CUSTOMERS } from '../mockData';
import { SALES_APP_COLORS } from '../theme';

/**
 * Màn Viếng thăm — Hand-off: không có header gradient.
 * Profile trắng "Nhân viên đã chọn" + banner tuyến + list.
 */
export function VisitCustomersPage() {
  const navigate = useNavigate();
  const total = VISIT_CUSTOMERS.length;
  const phone = CURRENT_USER.phone ?? '0908706789';

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-[#fafafa]">
      {/* Profile — không dùng header brand */}
      <header className="shrink-0 bg-white rounded-b-2xl border-b border-[#d8d8d8]">
        <div className="flex items-center justify-between gap-2 px-4 pt-2">
          <p className="text-xs leading-normal text-[#7587a6] m-0">
            Nhân viên đã chọn
          </p>
          <button
            type="button"
            onClick={() => navigate('/admin/dashboard')}
            className="shrink-0 text-[12px] font-normal leading-normal underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ color: SALES_APP_COLORS.boldBlue, outlineColor: SALES_APP_COLORS.boldBlue }}
          >
            Trở về Portal
          </button>
        </div>
        <div className="flex items-center gap-2 px-4 py-2">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
            style={{ background: 'color-mix(in srgb, var(--sa-blue, #1437d6) 12%, white)' }}
            aria-hidden
          >
            <User className="w-5 h-5" style={{ color: SALES_APP_COLORS.boldBlue }} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[14px] font-medium leading-normal text-[#18181b] truncate m-0">
              {CURRENT_USER.name}
            </p>
            <p className="text-[14px] font-normal leading-normal text-[#4b5563] truncate m-0">
              {CURRENT_USER.code}
              <span className="mx-1.5 inline-block w-1 h-1 rounded-full bg-[#9ca3af] align-middle" aria-hidden />
              {phone}
            </p>
          </div>
        </div>
      </header>

      {/* Route banner — cream + yellow bar */}
      <div className="shrink-0 px-4 pt-4">
        <div className="flex items-center gap-1 bg-[#faf2d1] rounded-r-md border-l-4 border-[#fec020] pl-3.5 pr-3 py-2">
          <p className="flex-1 text-[14px] leading-normal text-[#1f2937] min-w-0 m-0">
            {CURRENT_ROUTE.code} - {CURRENT_ROUTE.label}
          </p>
          <button
            type="button"
            className="shrink-0 w-11 h-11 flex items-center justify-center rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ color: SALES_APP_COLORS.boldBlue, outlineColor: SALES_APP_COLORS.boldBlue }}
            aria-label="Bản đồ tuyến"
          >
            <Map className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Search + filter — pill, tap ≥44 */}
      <div className="shrink-0 flex items-center gap-2 px-4 pt-4">
        <label className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0" htmlFor="sa-visit-search">
          Tìm kiếm điểm bán
        </label>
        <div className="flex-1 flex items-center gap-1 min-h-11 bg-[#eaeaea] rounded-full px-3 py-2">
          <Search className="w-6 h-6 text-[#4b5563] shrink-0" aria-hidden />
          <input
            id="sa-visit-search"
            type="search"
            placeholder="Tìm kiếm theo mã, tên, số điện thoại..."
            className="flex-1 min-w-0 bg-transparent border-0 text-[14px] leading-normal text-[#1f2937] placeholder:text-[#4b5563] focus:outline-none focus-visible:ring-0"
          />
        </div>
        <button
          type="button"
          className="shrink-0 w-11 h-11 flex items-center justify-center rounded-lg text-[#4b5563] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ outlineColor: SALES_APP_COLORS.boldBlue }}
          aria-label="Bộ lọc tìm kiếm"
        >
          <Filter className="w-6 h-6" />
        </button>
      </div>

      {/* List head — Figma title + brand underline */}
      <div className="shrink-0 px-4 pt-4 pb-2">
        <h2 className="text-[16px] font-normal leading-normal text-[#3e4559] m-0">
          Danh sách điểm bán ({total}/{total})
        </h2>
        <div
          className="mt-1.5 h-0.5 w-[72px] rounded-sm"
          style={{ background: SALES_APP_COLORS.boldBlue }}
          aria-hidden
        />
      </div>

      {/* Cards */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 pb-20 space-y-3">
        {VISIT_CUSTOMERS.length === 0 ? (
          <div className="py-16 text-center" role="status">
            <p className="text-[15px] text-[#1f2937]">Không có dữ liệu</p>
            <p className="text-[13px] text-[#4b5563] mt-1">Không tìm thấy điểm bán phù hợp bộ lọc.</p>
          </div>
        ) : (
          VISIT_CUSTOMERS.map(customer => (
            <article
              key={customer.code}
              className="bg-white rounded-2xl shadow-[0_2px_3px_rgba(191,191,191,0.38)] p-3"
            >
              <div className="flex items-start gap-2.5 mb-2.5">
                <MapPin
                  className="w-5 h-5 shrink-0 mt-0.5"
                  style={{ color: SALES_APP_COLORS.boldBlue }}
                  aria-hidden
                />
                <p className="flex-1 text-[14px] leading-normal text-[#1f2937] m-0">
                  {customer.code} - {customer.name}
                </p>
                <button
                  type="button"
                  className="shrink-0 w-11 h-11 -mr-2 -mt-2 flex items-center justify-center rounded-lg text-[#6b7280] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ outlineColor: SALES_APP_COLORS.boldBlue }}
                  aria-label={`Chi tiết ${customer.code}`}
                  onClick={() => navigate(`/sales-app/vieng-tham/${customer.code}`)}
                >
                  <Info className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-start justify-between gap-2 pl-7 mb-1">
                <span className="text-[12px] leading-normal text-[#4b5563] tabular-nums">
                  {customer.phone}
                </span>
                <span className="text-[12px] leading-normal text-[#4b5563] tabular-nums shrink-0">
                  {customer.distance}
                </span>
              </div>

              <div className="flex items-start justify-between gap-2 pl-7 mb-3">
                <p className="text-[12px] leading-normal text-[#4b5563] m-0 flex-1">
                  {customer.address}
                </p>
                <MapPin className="w-3.5 h-3.5 text-[#9ca3af] shrink-0 mt-0.5" aria-hidden />
              </div>

              <button
                type="button"
                className="w-full min-h-11 rounded-lg text-[14px] font-normal text-white transition-transform active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  background:
                    customer.status === 'VISITING'
                      ? 'var(--sa-success, #16a34a)'
                      : SALES_APP_COLORS.boldBlue,
                  outlineColor: SALES_APP_COLORS.boldBlue,
                }}
                onClick={() => navigate(`/sales-app/vieng-tham/${customer.code}`)}
              >
                {customer.status === 'VISITING'
                  ? 'Đang viếng thăm'
                  : customer.status === 'VISITED'
                    ? 'Viếng thăm lại'
                    : 'Viếng thăm'}
              </button>
            </article>
          ))
        )}
      </div>

      <BottomTabBar active="vieng-tham" />
    </div>
  );
}
