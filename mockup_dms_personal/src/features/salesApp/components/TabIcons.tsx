import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { active?: boolean };

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true as const,
};

/** Pin fill active — Salesman-Ver2 (sky trên map) */
const PIN_ACTIVE = '#5BA3E8';

/**
 * Bottom tab icons — Figma Salesman-Ver2 G2wbdoQQMuWWXDhjopOa1x (Home · image 23)
 * Viếng thăm = map gấp 3 panel + pin · Báo cáo = 3 cột · Đơn hàng = cart · Khác = grid 2×2
 */
export function TabIconVisit({ active, ...props }: IconProps) {
  return (
    <svg {...base} width={24} height={24} {...props}>
      {/* Map folded */}
      <path d="M9 5 4 7v11.5l5-2 6 2 5-2V5.5l-5 2-6-2.5Z" />
      <path d="M9 5v11.5M15 7.5V19" />
      {/* Pin trên panel phải */}
      <path
        d="M16.25 3.8c0 1.95-2.35 4.05-2.35 4.05S11.55 5.75 11.55 3.8a2.35 2.35 0 1 1 4.7 0Z"
        fill={active ? PIN_ACTIVE : 'none'}
        stroke={active ? PIN_ACTIVE : 'currentColor'}
      />
      <circle
        cx="13.9"
        cy="3.75"
        r="0.85"
        fill={active ? '#fff' : 'currentColor'}
        stroke="none"
      />
    </svg>
  );
}

export function TabIconReport(props: IconProps) {
  return (
    <svg {...base} width={24} height={24} {...props}>
      <path d="M5 19V11.5" />
      <path d="M12 19V5" />
      <path d="M19 19v-6" />
    </svg>
  );
}

export function TabIconOrder(props: IconProps) {
  return (
    <svg {...base} width={24} height={24} {...props}>
      <path d="M5.5 6.5h14.2l-1.35 8H7.05Z" />
      <circle cx="9" cy="19.15" r="1.3" />
      <circle cx="17" cy="19.15" r="1.3" />
      <path d="M5.5 6.5 4.35 3.6H2.4" />
    </svg>
  );
}

export function TabIconMore(props: IconProps) {
  return (
    <svg {...base} width={24} height={24} {...props}>
      <rect x="3.75" y="3.75" width="6.5" height="6.5" rx="1.15" />
      <rect x="13.75" y="3.75" width="6.5" height="6.5" rx="1.15" />
      <rect x="3.75" y="13.75" width="6.5" height="6.5" rx="1.15" />
      <rect x="13.75" y="13.75" width="6.5" height="6.5" rx="1.15" />
    </svg>
  );
}
