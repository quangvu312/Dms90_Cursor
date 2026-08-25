# Tables

> Ghi nhận từ website ht-portal-uat.finviet.com.vn

## Structure

| Part | Style |
|------|-------|
| Header row | bg `#FAFAFA`, font-weight 600, padding 8px, height ~39px |
| Body row | padding 8px, height ~61px, border-bottom light |
| Row hover | Subtle gray background |

## Features observed

- **Checkbox column** — select all + per-row
- **Link columns** — Mã đơn hàng, Mã đơn hàng ERP (blue link). Click **Tên / Mã / Tiêu đề** để mở Detail — **không** thêm icon 👁 Xem trong cột action nếu đã có hyperlink.
- **Tag columns** — Trạng thái (blue badge), Trạng thái nhập hàng (green badge)
- **Action column** — "Tùy chỉnh" / "Thao tác" với `ActionIconButton`. Duyệt/Từ chối: **một** icon cờ lê → dropdown, không tách 2 icon. Xem rule đầy đủ tại [component-guideline.md](./component-guideline.md#action-trên-table).
- **Summary row** — Above table: "Tổng tiền thanh toán (VNĐ): {number}"
- **Toolbar** — Column visibility icon, fullscreen icon (top right)

## Pagination

| Property | Value |
|----------|-------|
| Info text | "1-10 trên 753 dòng" |
| Page size selector | "10 / trang" dropdown |
| Navigation | ‹ › buttons |
| Position | Bottom right |

## Empty state

- Not observed on list page (data present)

## Number format

- Thousand separator: comma (e.g. 3,343,123,184,182)
