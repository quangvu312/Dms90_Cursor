/**
 * Prototype auth switches — bật lại Login bằng `enableLogin: true`.
 * Không xóa Login page / route / mock auth.
 */
export const AUTH_CONFIG = {
  /** false = mở app vào thẳng Dashboard / SaleMan (bypass Login) */
  enableLogin: false,
} as const;
