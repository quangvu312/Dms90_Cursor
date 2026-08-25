# Order status badges — Hand-off Figma

Nguồn: [Menu đơn hàng](https://www.figma.com/design/JLQNtUG3rqvGnh1h6quGJP/Hand-off_DMS-90?node-id=7237-17756) · component set **trạng thái đơn** (Salesman Ver2).

## Tabs danh sách (Figma)

| Tab | Frame |
|-----|--------|
| Thành công | `7237:17757` |
| Đang xử lý | `7237:17786` |
| Thất bại | `7237:17814` |

## Badge variants (đã xác nhận trên card)

| Label | Figma semantic | Token fg / bg (WCAG AA) | CSS modifier |
|-------|----------------|-------------------------|--------------|
| Khởi tạo | alert/warning | `--sa-order-status-init-*` | `--init` |
| Đã duyệt | alert/progressing | `--sa-order-status-approved-*` | `--approved` |
| Đã trả đơn | alert/error | `--sa-order-status-return-*` | `--return` |
| Thất bại | alert/disable | `--sa-order-status-fail-*` | `--fail` |

## Bổ sung semantic (tab mock / flow đặt hàng)

| Label | Token | CSS |
|-------|-------|-----|
| Đã xuất kho | shipped | `--shipped` |
| Thành công | success | `--success` |
| Đã hủy | cancel | `--cancel` |

> Figma raw `#3b82f6` / `#f97316` / `#ef4444` trên nền nhạt hoặc trắng **không đủ AA cho body 10–12px**. Token đã map sang shade đậm hơn (`#1d4ed8`, `#c2410c`, `#b91c1c`) giữ cùng light background.

## Dùng trong vanilla

```js
SA.render('Pill', { text: 'Đã duyệt', variant: 'approved' })
SA.render('Pill', { text: 'Khởi tạo', variant: 'init' })
SA.render('Pill', { text: 'Thất bại', variant: 'fail' })
```
