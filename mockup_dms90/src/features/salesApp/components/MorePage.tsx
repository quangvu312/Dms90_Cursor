import { useNavigate } from 'react-router-dom';
import {
  RefreshCw,
  Percent,
  Store,
  Bell,
  CalendarOff,
  ClipboardList,
  FileText,
  Headphones,
  Settings,
  ChevronRight,
  Grid2x2,
  BookOpen,
  Gift,
} from 'lucide-react';
import { BottomTabBar } from './BottomTabBar';
import { ProfileHeader } from './AppHeaders';
import { CURRENT_ROUTE, MORE_MENU_ITEMS } from '../mockData';
import { SALES_APP_COLORS } from '../theme';

const ICONS = {
  percent: Percent,
  store: Store,
  bell: Bell,
  'calendar-off': CalendarOff,
  clipboard: ClipboardList,
  headset: Headphones,
  settings: Settings,
  file: FileText,
  book: BookOpen,
  gift: Gift,
};

const ROUTE_MAP: Record<string, string> = {
  'khuyen-mai': '/sales-app/khuyen-mai',
  'trung-bay': '/sales-app/trung-bay',
  'khach-hang': '/sales-app/khach-hang',
  'thong-bao': '/sales-app/thong-bao',
  'nghi-phep': '/sales-app/nghi-phep',
  'khao-sat': '/sales-app/khao-sat',
  'ho-tro': '/sales-app/ho-tro',
  'hop-dong': '/sales-app/hop-dong',
  'telling-story': '/sales-app/telling-story',
  'cai-dat': '/sales-app/cai-dat',
};

/**
 * Tab Khác — đồng bộ token Hand-off với Viếng thăm / màn còn lại
 * (banner kem+vàng, chữ thường, brand #1437d6).
 */
export function MorePage() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-[#fafafa]">
      <ProfileHeader />

      {/* Route — cùng pattern Viếng thăm */}
      <div className="shrink-0 px-4 pt-4">
        <p className="text-xs leading-normal text-[#7587a6] mb-1.5 m-0">Tuyến đã chọn</p>
        <div className="flex items-center gap-1 bg-[#faf2d1] rounded-r-md border-l-4 border-[#fec020] pl-3.5 pr-3 py-2">
          <p className="flex-1 text-[14px] font-normal leading-normal text-[#1f2937] min-w-0 m-0">
            {CURRENT_ROUTE.code} - {CURRENT_ROUTE.fullLabel}
          </p>
          <button
            type="button"
            className="shrink-0 w-11 h-11 flex items-center justify-center rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ color: SALES_APP_COLORS.boldBlue, outlineColor: SALES_APP_COLORS.boldBlue }}
            aria-label="Làm mới tuyến"
          >
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Menu list */}
      <div className="flex-1 min-h-0 overflow-y-auto hide-scrollbar mt-3 bg-white">
        {MORE_MENU_ITEMS.map(item => {
          const Icon = ICONS[item.icon];
          const to = ROUTE_MAP[item.key];
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => to && navigate(to)}
              className="w-full flex items-center gap-3.5 px-4 py-3 border-0 border-b border-[#e5e7eb] bg-white text-left active:bg-[#f3f4f6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px]"
              style={{ outlineColor: SALES_APP_COLORS.boldBlue }}
            >
              <Icon className="w-5 h-5 text-[#4b5563] shrink-0" aria-hidden />
              <span className="flex-1 text-[14px] font-normal leading-normal text-[#1f2937]">
                {item.label}
              </span>
              {item.badge != null && (
                <span className="min-w-5 h-5 px-1.5 rounded-full bg-red-500 text-white text-[11px] font-bold flex items-center justify-center shrink-0 tabular-nums">
                  {item.badge}
                </span>
              )}
              <ChevronRight className="w-4 h-4 text-[#9ca3af] shrink-0" aria-hidden />
            </button>
          );
        })}
      </div>

      {/* QR — outline brand như vanilla */}
      <div className="shrink-0 flex justify-center py-4 bg-white">
        <button
          type="button"
          className="flex items-center gap-2 min-h-11 px-[18px] rounded-full bg-white text-[14px] font-normal shadow-[0_2px_8px_rgba(0,0,0,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{
            color: SALES_APP_COLORS.boldBlue,
            border: `1px solid ${SALES_APP_COLORS.boldBlue}`,
            outlineColor: SALES_APP_COLORS.boldBlue,
          }}
        >
          <Grid2x2 className="w-[18px] h-[18px]" aria-hidden />
          Mã QR của tôi
        </button>
      </div>

      <BottomTabBar active="khac" />
    </div>
  );
}
