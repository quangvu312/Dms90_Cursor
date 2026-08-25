import { useMemo, useState } from 'react';
import { Search, Filter, Store, Truck, Layers, Package, Warehouse } from 'lucide-react';
import { BottomTabBar } from './BottomTabBar';
import { ORDERS, ORDER_STATUS_TABS } from '../mockData';
import { headerGradient, SALES_APP_COLORS } from '../theme';

type OrderRow = (typeof ORDERS)[number];

function MetaRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Store;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-2 py-1.5">
      <Icon className="w-[18px] h-[18px] text-[#6b7280] shrink-0 mt-0.5" aria-hidden />
      <span className="text-[12px] font-normal leading-normal text-[#7587a6] w-[78px] shrink-0">{label}</span>
      <span className="flex-1 text-[14px] font-normal leading-normal text-[#1f2937] min-w-0">{value || '—'}</span>
    </div>
  );
}

function OrderCard({ order, statusLabel }: { order: OrderRow; statusLabel: string }) {
  return (
    <article className="bg-white rounded-2xl shadow-[0_2px_3px_rgba(191,191,191,0.38)] overflow-hidden">
      <div className="px-3.5 pt-3 pb-2">
        <div className="flex items-center justify-between gap-2">
          <span
            className="inline-block text-[14px] font-normal leading-normal text-white px-2.5 py-1 rounded-md"
            style={{ background: SALES_APP_COLORS.boldBlue }}
          >
            {order.id}
          </span>
          <span className="text-[14px] font-normal leading-normal text-[#16a34a]">{statusLabel}</span>
        </div>
        <p className="text-[12px] font-normal leading-normal text-[#6b7280] m-0 mt-1.5">{order.time}</p>
      </div>

      <div className="px-3.5 pb-3">
        <div
          className="rounded-xl p-3 mb-2"
          style={{ background: 'color-mix(in srgb, #1437d6 8%, white)' }}
        >
          <div className="flex items-start gap-2.5">
            <Store className="w-5 h-5 shrink-0 mt-0.5" style={{ color: SALES_APP_COLORS.boldBlue }} aria-hidden />
            <div className="min-w-0">
              <p className="text-[14px] font-normal text-[#1f2937] m-0 leading-normal">{order.storeName}</p>
              <p className="text-[12px] font-normal text-[#6b7280] m-0 mt-1 leading-normal">{order.storeAddress}</p>
              <p className="text-[14px] font-normal m-0 mt-1 leading-normal" style={{ color: SALES_APP_COLORS.boldBlue }}>
                {order.storeId}
              </p>
            </div>
          </div>
        </div>

        <MetaRow icon={Truck} label="Đại lý" value={order.distributor} />
        <MetaRow icon={Layers} label="Nguồn tạo" value={order.source} />
        <MetaRow icon={Package} label="Loại đơn" value={order.type} />
        <MetaRow icon={Warehouse} label="Kho xuất" value={order.warehouse} />

        <div className="flex items-end justify-between gap-3 mt-2.5 pt-2.5 border-t border-[#e5e7eb]">
          <div>
            <span className="block text-[12px] font-normal leading-normal text-[#7587a6] mb-0.5">Giá trị đơn hàng</span>
            <span className="text-[14px] font-normal leading-normal" style={{ color: SALES_APP_COLORS.boldBlue }}>
              {order.total}
            </span>
          </div>
          <button
            type="button"
            className="min-h-11 px-4 rounded-lg text-[14px] font-normal text-white border-0 cursor-pointer active:scale-[0.98]"
            style={{ background: SALES_APP_COLORS.boldBlue }}
          >
            Đặt lại
          </button>
        </div>
      </div>
    </article>
  );
}

/**
 * Tab Đơn hàng — typography đồng bộ Visit/More (section 16 · body 14 · meta 12).
 */
export function OrdersPage() {
  const [status, setStatus] = useState<(typeof ORDER_STATUS_TABS)[number]>('Khởi tạo');
  const [query, setQuery] = useState('');

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ORDERS.filter(o => {
      if (!q) return true;
      return [o.id, o.storeName, o.storeId, o.storeAddress].join(' ').toLowerCase().includes(q);
    });
  }, [query]);

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-[#fafafa]">
      <header className="shrink-0 px-3 pt-2 pb-2" style={{ background: headerGradient }}>
        <div className="flex gap-1 overflow-x-auto hide-scrollbar">
          {ORDER_STATUS_TABS.map(tab => {
            const on = status === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setStatus(tab)}
                className={`shrink-0 min-h-10 px-3.5 rounded-full text-[14px] font-normal leading-normal border-0 cursor-pointer ${
                  on ? 'bg-white shadow-sm' : 'bg-transparent text-white/90'
                }`}
                style={on ? { color: SALES_APP_COLORS.boldBlue } : undefined}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </header>

      <div className="shrink-0 flex items-center gap-2 px-4 py-3 bg-[#fafafa]">
        <div className="flex-1 flex items-center gap-2 min-h-11 bg-[#f1f5f9] border border-[#e5e7eb] rounded-full px-3">
          <Search className="w-5 h-5 text-[#4b5563] shrink-0" aria-hidden />
          <input
            type="search"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Nhập mã đơn hàng, số dt cửa hàng, ..."
            className="flex-1 min-w-0 bg-transparent border-0 text-[14px] leading-normal text-[#1f2937] placeholder:text-[#6b7280] focus:outline-none"
            aria-label="Tìm đơn hàng"
          />
        </div>
        <button
          type="button"
          className="w-11 h-11 shrink-0 rounded-xl border border-[#e5e7eb] bg-white flex items-center justify-center text-[#4b5563]"
          aria-label="Bộ lọc"
        >
          <Filter className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto hide-scrollbar px-4 pb-4">
        <h2 className="text-[16px] font-normal leading-normal text-[#3e4559] m-0 mb-3">Hôm nay</h2>
        {rows.length === 0 ? (
          <div className="py-16 text-center" role="status">
            <Store className="w-12 h-12 mx-auto text-[#d1d5db] mb-2" aria-hidden />
            <p className="text-[15px] text-[#1f2937] m-0">Không có đơn hàng</p>
          </div>
        ) : (
          <div className="space-y-3">
            {rows.map(o => (
              <OrderCard key={o.id} order={o} statusLabel={status} />
            ))}
          </div>
        )}
      </div>

      <BottomTabBar active="don-hang" />
    </div>
  );
}
