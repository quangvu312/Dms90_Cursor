# Typography — App SaleMan `[APP]`

> **Nguồn chuẩn:** Hand-off Figma  
> [Hand-off_DMS-90](https://www.figma.com/design/JLQNtUG3rqvGnh1h6quGJP/Hand-off_DMS-90)  
> Xác nhận typography: node `7105:7003` (và Navigation bar / Text field trong cùng file).  
> Token: `tokens/typography.css` · Font face: `styles/fonts-helvetica-neue.css` · Files: `public/fonts/helvetica-neue/`

---

## Font bắt buộc

| Thuộc tính | Giá trị |
|------------|---------|
| **Family** | **Helvetica Neue** (không Inter, Roboto, Segoe UI, system-ui làm primary) |
| **Files** | `public/fonts/helvetica-neue/*.ttf` + `@font-face` trong `styles/fonts-helvetica-neue.css` |
| **CSS stack** | `"Helvetica Neue", Helvetica, Arial, ui-sans-serif, system-ui, sans-serif` |
| **Token** | `--sa-font-family` / `--sa-font-display` |
| **Rendering** | `font-synthesis: none` · `-webkit-font-smoothing: antialiased` |

### Weight map (phải khớp `@font-face`)

| CSS weight | Face file | Figma style |
|------------|-----------|-------------|
| 100 | UltraLight | — |
| 300 | Light | — |
| **400** | **Regular** | Small/Base Regular |
| **500** | **Medium** | Small Medium |
| 600 / **700** | **Bold** | text-base/bold · Large/18 Bold |

❌ Không bịa font khác. ❌ Không để browser faux-bold khi thiếu face.

---

## Text styles Hand-off (đã xác nhận từ Figma variables)

| Figma style | Size | Weight | Line-height | Dùng cho |
|-------------|------|--------|-------------|----------|
| Small/12px - Regular | 12 | 400 | 1.5 | Label field, caption, tab bar label |
| Small/12px - Medium | 12 | 500 | 1.5 | Label nhấn nhẹ |
| Base/14px - Regular | 14 | 400 | 1.5 | Body, input value, list item |
| text-sm/normal | 14 | 400 | 20px | Body compact |
| text-xs/normal | 12 | 400 | 16px | Meta compact |
| **text-base/bold** | **16** | **700** | **24px** | Section title (vd «Thông tin chung») |
| **Large/18px - Bold** | **18** | **700** | **1.5** | **Navigation bar title** |

Màu chữ chuẩn Figma:
- Primary: `#1f2937` (`Text/primary`)
- Secondary: `#6b7280` (`Text/secondary`)

---

## Quy tắc cốt lõi

1. **Body / field / list / card** → Regular **400** (`--sa-text-default-weight`).
2. **Navigation title** → Bold **700**, **18px**, nền **trắng**, chữ `#1f2937` (không gradient trắng trên title bar form).
3. **Section title** (underline brand) → Bold **700**, **16px**, lh 24px.
4. **Nhấn mạnh nội dung** (tên KH, meta) → ưu tiên **màu semantic**; chỉ dùng Medium 500 khi Figma chỉ định.
5. **Line-height mặc định** → `1.5` (`--sa-leading-normal`).
6. React / Tailwind: `font-sans` phải trỏ Helvetica Neue (xem `tailwind.config.js`); không hard-code `font-['Inter']` / Roboto.

---

## Vai trò text — Card

| Vai trò | Token size | Token weight | Màu |
|---------|------------|--------------|-----|
| Tiêu đề card | `--sa-card-title-size` | `--sa-card-title-weight` (400) | `--sa-text-primary` |
| Body / phụ | `--sa-card-body-size` | 400 | `--sa-text-secondary` |
| Giá trị / số | `--sa-card-value-size` | 400 | `--sa-text-primary` |
| Tiền | `--sa-card-money-size` | 400 | `--sa-text-brand` |
| Caption | `--sa-card-caption-size` | 400 | `--sa-label-muted` |

## Vai trò text — Route banner

| Vai trò | Token | Weight |
|---------|-------|--------|
| Mã + tên tuyến | `--sa-route-label-*` | 400 |
| Caption «Tuyến đã chọn» | `--sa-route-caption-*` | 400 |

## Vai trò text — Header

| Vai trò | Implementation | Spec |
|---------|----------------|------|
| Form / list title | React `ScreenHeader` · vanilla `.sales-app__title` | 18 Bold, white bar |
| Profile + ngày công (tab Khác) | React `ProfileHeader` · vanilla `AppHeader showUser` | Gradient header riêng |
| Viếng thăm list | Profile trắng «Nhân viên đã chọn» — **không** dùng title bar gradient | Hand-off Visit |

---

## Khi gen UI / mockup (bắt buộc)

1. Đọc token `design-system/mobile/tokens/` trước khi viết CSS/Tailwind.
2. Import / kế thừa `styles/fonts-helvetica-neue.css` (qua `prototype.css` hoặc `index.css`).
3. Map size/weight → token `--sa-*` hoặc đúng bảng Figma ở trên.
4. Title bar form: dùng `ScreenHeader` / `AppHeader` light|title — **không** tự invent font size.
5. Checklist font:
   - [ ] Family = Helvetica Neue
   - [ ] Body 14/400/1.5
   - [ ] Nav title 18/700
   - [ ] Section 16/700/24
   - [ ] `font-synthesis: none` trên shell

## Ngoại lệ weight cao

- Badge số (`.sales-app__badge`)
- Status bar hệ thống trong PhoneFrame
- Chữ trên button primary (theo Figma Button)
