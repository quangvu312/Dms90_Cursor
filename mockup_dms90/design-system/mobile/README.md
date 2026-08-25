# Design System — App SaleMan (Mobile)

> **Nguồn UI / typography:** Figma [Hand-off_DMS-90](https://www.figma.com/design/JLQNtUG3rqvGnh1h6quGJP/Hand-off_DMS-90)  
> **Nguồn màu Vigo:** Figma [DMS90 x Vigo — Colors](https://www.figma.com/design/NqdfbUJ6Bkzlks4H0OT0gO/DMS90-x-Vigo?node-id=2348-49063) (mode **Vigo**) — brand `#1437d6`  
> **Nguồn IA/copy:** APK `vn.thevigocorp.dms.uat` (VIGO Saleman)  
> Platform: `[APP]` — Nhân viên kinh doanh (Salesman)

## Bắt buộc khi build mockup

Mọi mockup Salesman (vanilla **hoặc** React) **PHẢI** dùng Design System này — không tự chọn font/màu/spacing lệch Hand-off.

| Việc | Nơi tham chiếu |
|------|----------------|
| Font Helvetica Neue | `guidelines/typography.md` · `styles/fonts-helvetica-neue.css` · `public/fonts/helvetica-neue/` |
| **Quy ước mockup (Vigo, auth, header, tab, Visit)** | **`guidelines/mockup-conventions.md`** ⭐ |
| Token CSS `--sa-*` | `tokens/` (colors, typography, spacing, frame…) |
| Component vanilla | `SA.render()` · `scripts/sales-app/sa-components.js` |
| Component React Hand-off | `src/features/salesApp/components/` (`ScreenHeader`, `ProfileHeader`, `PhoneFrame`, `TabIcons`, `SettingsPage`…) |
| Style runtime | `styles/sales-app.css` |
| Cursor rule | `DMS90_mockup/.cursor/rules/sales-app-mockup.mdc` |

> **Brand:** luôn Vigo `#1437d6`. Layout lấy Figma; nếu Figma ra `#0d88cb` thì map về Vigo — xem `mockup-conventions.md`.

## Cấu trúc

```
design-system/mobile/
├── tokens/          ← CSS variables (màu, typography, spacing, frame)
├── guidelines/      ← Quy tắc (typography bắt buộc đọc trước khi gen UI)
├── components/      ← (tham chiếu — implementation scripts/ + src/features/salesApp/)
└── patterns/        ← layout chuẩn theo loại màn hình
```

## Implementation runtime

**Vanilla SPA**

- `scripts/sales-app/sa-registry.js` — registry
- `scripts/sales-app/sa-components.js` — component library
- `scripts/sales-app/sa-screens.js` / `sa-visit.js` / `sa-order.js` — màn hình
- `styles/sales-app.css` — styles (import tokens)
- `styles/fonts-helvetica-neue.css` — `@font-face` (import qua `prototype.css`)

**React Hand-off (hybrid)**

- `src/features/salesApp/components/*` — UI Figma
- `src/features/salesApp/theme.ts` — brand + `headerGradient`
- `PhoneFrame` / `SalesAppChrome` — khung máy cố định
- Tailwind `fontFamily.sans` → Helvetica Neue (`tailwind.config.js`)

## Typography (tóm tắt)

> Chi tiết bắt buộc: [`guidelines/typography.md`](guidelines/typography.md)

| Vai trò | Size | Weight | Ghi chú |
|---------|------|--------|---------|
| Body / input / list | 14px | 400 | Base/14px Regular · lh 1.5 |
| Label / caption | 12px | 400 | Small/12 Regular |
| Section title | 16px | **700** | text-base/bold · lh 24 |
| Navigation title | **18px** | **700** | Large/18 Bold · bar trắng |
| Font family | — | — | **Helvetica Neue** only |

## Component có sẵn (vanilla)

| Component | Mục đích |
|-----------|----------|
| `PhoneShell` | Khung điện thoại + status bar |
| `Screen` | Wrapper đầy đủ header/body/footer/nav |
| `AppHeader` | Header title / profile |
| `BottomNav` | 4 tab |
| `SearchBar` / `Card` / `EmptyState` / `ActionBar` | … |
| `RouteBanner` | Thanh tuyến (kem + viền vàng) |
| `ProfileHero` | «Nhân viên đã chọn» (Viếng thăm — không header gradient) |
| `MenuListItem` | Item tab Khác |

## Token chính

- Brand: `--sa-blue` = `#1437d6` (Vigo boldblue)
- Text: `--sa-text-primary` `#1f2937` · secondary `#6b7280`
- Surface: `--sa-bg-screen` `#fafafa`
- Phone: `--sa-phone-w` 390 · `--sa-phone-h` 844
- Font: `--sa-font-family` = Helvetica Neue

## Quy tắc

1. **Luôn reuse DS** — `SA.render()` (vanilla) hoặc component React đã có; không copy HTML lệch token
2. **Class prefix `sales-app__`** (vanilla) — không dùng class web `dms-*`
3. **Route** `/sales-app/...` · Login SM `/sales-app/login` · Portal `/login`
4. **Mock data** — `data/sales-app.json` / `src/features/salesApp/mockData.ts`
5. **Typography** — đúng bảng Hand-off; không Inter/Roboto; không faux-bold
6. **Màu mới** — chỉ thêm vào `tokens/colors.css`; brand luôn Vigo (map hex Figma ECO → `#1437d6`)
7. **Quy ước màn** — đọc `guidelines/mockup-conventions.md` (header Visit/Khác, bottom tab, Visit CTA, auth logout)
