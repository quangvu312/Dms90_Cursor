# Quy ước mockup App SaleMan (bắt buộc)

> Tổng hợp quyết định đã chốt khi build mockup (Login, Viếng thăm, Bottom tab, Cài đặt, Auth).  
> Agent **PHẢI** tuân thủ khi tạo/sửa mockup `[APP]` — cùng với `typography.md` và token `--sa-*`.

## 1. Brand & màu

| Mục | Giá trị | Ghi chú |
|-----|---------|---------|
| Brand primary | **Vigo `#1437d6`** | `--sa-blue` / `SALES_APP_COLORS.boldBlue` |
| CTA / link / checkbox checked / focus | Vigo `#1437d6` | |
| Inactive tab / Type_Secondary | `#7587A6` | Bottom tab inactive |
| Text primary | `#18181b` / `#1f2937` | Theo token |
| Text secondary | `#6b7280` | Caption, version |
| Destructive | `#ef4444` | Xoá tài khoản |
| Success CTA | `--sa-success` / `#16a34a` | Nút **Đang viếng thăm** |
| Route banner | `#FAF2D1` + bar `#FEC020` | |

### Figma vs brand

- Layout / icon / spacing: lấy từ Figma (Salesman-Ver2 / Hand-off).
- **Màu brand trên mockup DMS90: luôn Vigo `#1437d6`.**
- Nếu Figma export màu khác (vd `#0d88cb`, `#3b82f6`) → **map sang Vigo** khi code, không copy raw hex brand từ Figma ECO.

```tsx
// ✅
style={{ background: SALES_APP_COLORS.boldBlue }}
// hoặc class / token --sa-blue

// ❌
style={{ background: '#0d88cb' }}  // Figma ECO — không dùng làm brand DMS90
```

## 2. Font

- Family: **Helvetica Neue** (`styles/fonts-helvetica-neue.css` + `public/fonts/helvetica-neue/`).
- Cấm primary: Inter, Roboto, Arial, system-ui.
- `font-synthesis: none` trên shell / `PhoneFrame`.
- Chi tiết size/weight: `guidelines/typography.md`.

## 3. Header patterns (không lẫn)

| Màn | Header |
|-----|--------|
| **Viếng thăm** (list) | Profile **trắng** «Nhân viên đã chọn» + link **Trở về Portal** — **không** gradient title bar |
| **Khác** | `ProfileHeader` gradient + ngày công |
| **Báo cáo** / form có title / **Cài đặt** | `ScreenHeader` **gradient** (title trắng 18 Bold) |
| **Đơn hàng** | Header gradient + chip; **không** thanh scroll-hint ngang dưới chip |

Reuse: React `ScreenHeader` / `ProfileHeader`; vanilla `AppHeader`.

## 4. Bottom tab

Icon chuẩn (Figma Salesman-Ver2 bottom bar) — **không** Lucide mặc định lệch glyph:

| Tab | Icon |
|-----|------|
| Viếng thăm | Bản đồ gấp 3 panel + pin |
| Báo cáo | 3 cột bar chart |
| Đơn hàng | Giỏ hàng outline |
| Khác | Grid 2×2 |

- React: `TabIcons.tsx` + `BottomTabBar.tsx`
- Vanilla: `SAIcons.visit|report|order|more` trong `sa-icons.js`
- Active: Vigo; inactive: `#7587A6`

## 5. Viếng thăm — CTA theo trạng thái

Đồng bộ `data/sales-app.json` / `mockData.ts` (`NOT_VISIT` | `VISITING` | `VISITED`):

| Status | Label nút | Màu |
|--------|-----------|-----|
| `NOT_VISIT` | Viếng thăm | Vigo |
| `VISITING` | **Đang viếng thăm** | Success |
| `VISITED` | Viếng thăm lại | Vigo |

## 6. Login SM

- Route: `/sales-app/login` (ngoài `ProtectedRoute` portal).
- Brand logo/asset: `public/sales-app/login/`.
- CTA cao ≈ input (~48px) cho cân bằng.
- **Trở về Portal** trên login → `/admin/dashboard`.
- Enter trong form = submit đăng nhập.
- Checkbox / CTA / link brand = Vigo.

## 7. Cài đặt ứng dụng

- Figma ref: Salesman-Ver2 node `[Cài đặt ứng dụng]`.
- Rows: Đổi mật khẩu · Cài đặt thông báo · Phiên bản (+ badge Mới) · **Đăng xuất** · **Xoá tài khoản** (đỏ).
- Icon asset: `public/sales-app/settings/`.
- React: `SettingsPage.tsx`; vanilla: `screens.settings`.

## 8. Auth & đăng xuất (FORCE)

Cùng key session: `dms90_auth_session` + `useAuth` / `dms90:auth-change`.

| Hành động | Đích |
|-----------|------|
| Đăng xuất / xoá TK từ **SM** | **`/sales-app/login`** |
| Đăng xuất từ **Portal** (header Thoát) | **`/login`** |
| Hết session trên route `/sales-app/*` | Redirect **`/sales-app/login`** (không sang portal) |
| Hết session trên `/admin/*` | Redirect **`/login`** |

```
/sales-app/login     → GuestRoute (homePath = /sales-app/vieng-tham)
/sales-app/*         → ProtectedRoute(loginPath = /sales-app/login)
/login               → GuestRoute (homePath = /admin/dashboard)
/admin/*             → ProtectedRoute(loginPath = /login)
```

Trong hybrid vanilla: `DMSRouter.navigate('/login')` từ ngữ cảnh SM → map sang `/sales-app/login`.

## 9. Frame & hybrid

- Phone: **390×844**, một `PhoneFrame` / `SalesAppChrome` cố định khi đổi tab.
- Màn đã port React Figma → giữ React; chưa có → vanilla fallback trong cùng frame.
- Không đổi chrome / nhảy layout khi chuyển menu.

## 10. Figma → code

1. `get_design_context` + skill `figma-design-to-code`.
2. Download asset icon/ảnh vào `public/sales-app/...` (không phụ thuộc URL MCP hết hạn).
3. Map màu brand về Vigo; map type về Helvetica Neue + bảng typography.
4. Reuse component DS trước khi viết mới.

## Checklist màn mới

- [ ] Đọc README + typography + **file này**
- [ ] Brand = Vigo `#1437d6` (không copy hex ECO Figma)
- [ ] Font Helvetica Neue
- [ ] Đúng pattern header (Visit trắng / Khác profile / form gradient)
- [ ] Bottom tab dùng `TabIcons` / `SAIcons` chuẩn
- [ ] Auth redirect đúng SM vs Portal
- [ ] Empty state khi list rỗng
- [ ] Token `--sa-*` / `theme.ts` — hạn chế hex rời
