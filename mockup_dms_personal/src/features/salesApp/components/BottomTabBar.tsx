import { useNavigate } from 'react-router-dom';
import { SALES_APP_COLORS } from '../theme';
import { TabIconVisit, TabIconReport, TabIconOrder, TabIconMore } from './TabIcons';
import type { ComponentType, SVGProps } from 'react';

export type TabKey = 'vieng-tham' | 'bao-cao' | 'don-hang' | 'khac';

type TabIconProps = SVGProps<SVGSVGElement> & { active?: boolean };

const TABS: {
  key: TabKey;
  label: string;
  path: string;
  Icon: ComponentType<TabIconProps>;
}[] = [
  { key: 'vieng-tham', label: 'Viếng thăm', path: '/sales-app/vieng-tham', Icon: TabIconVisit },
  { key: 'bao-cao', label: 'Báo cáo', path: '/sales-app/bao-cao', Icon: TabIconReport },
  { key: 'don-hang', label: 'Đơn hàng', path: '/sales-app/don-hang', Icon: TabIconOrder },
  { key: 'khac', label: 'Khác', path: '/sales-app/khac', Icon: TabIconMore },
];

/** Inactive — Figma Type_Secondary */
const INACTIVE = '#7587A6';

/**
 * Bottom tab — icon theo Figma Salesman-Ver2 (G2wbdo… node Home / image 23).
 */
export function BottomTabBar({ active }: { active: TabKey }) {
  const navigate = useNavigate();
  return (
    <nav className="shrink-0 flex border-t border-[#e5e7eb] bg-white" aria-label="Điều hướng chính">
      {TABS.map(tab => {
        const isActive = tab.key === active;
        const Icon = tab.Icon;
        return (
          <button
            key={tab.key}
            type="button"
            onClick={() => navigate(tab.path)}
            aria-current={isActive ? 'page' : undefined}
            className="flex-1 flex flex-col items-center justify-center gap-1 min-h-14 py-2 text-[12px] leading-normal transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px]"
            style={{
              color: isActive ? SALES_APP_COLORS.boldBlue : INACTIVE,
              fontWeight: isActive ? 500 : 400,
              outlineColor: SALES_APP_COLORS.boldBlue,
            }}
          >
            <Icon className="w-6 h-6" active={isActive} />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
