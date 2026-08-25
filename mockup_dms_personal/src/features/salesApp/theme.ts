export const SALES_APP_COLORS = {
  /** Brand Vigo — luôn dùng; không map #0d88cb từ Figma ECO */
  boldBlue: '#1437D6',
  cobaltBlue: '#2146C7',
  softDigitalBlue: '#4F6DFF',
  alucardNight: '#0B1028',
  softWhite: '#FAFAFA',
  /** Hand-off Visit: cream route banner */
  routeBg: '#FAF2D1',
  routeBar: '#FEC020',
  /** Secondary text — WCAG-safe for field */
  textMuted: '#4B5563',
  /** Bottom tab inactive — Figma Type_Secondary */
  labelMuted: '#7587A6',
} as const;

/** Header app — đồng bộ tab Khác (alucardNight → cobaltBlue) */
export const headerGradient = `linear-gradient(135deg, ${SALES_APP_COLORS.alucardNight}, ${SALES_APP_COLORS.cobaltBlue})`;
export const primaryButtonGradient = `linear-gradient(135deg, ${SALES_APP_COLORS.boldBlue}, ${SALES_APP_COLORS.cobaltBlue})`;
export const accentGradient = `linear-gradient(135deg, ${SALES_APP_COLORS.cobaltBlue}, ${SALES_APP_COLORS.softDigitalBlue})`;
