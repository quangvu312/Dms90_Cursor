# Modal & Dialog

> Ghi nhận từ website ht-portal-uat.finviet.com.vn

## Modal (Detail view)

| Property | Value |
|----------|-------|
| Overlay | rgba(0,0,0,0.45) dark backdrop |
| Background | white |
| Border radius | 8px |
| Shadow | Multi-layer shadow |
| Header | Title + close (×) button |
| Footer | Action buttons right-aligned |
| Size | Large (~900-1200px for order detail) |

### Order detail modal observed

- Title area with order info fields (Ngày đặt hàng, Nhà phân phối, Kho, Trạng thái, etc.)
- Section: "Danh sách sản phẩm" h3
- Footer buttons: "In", "Đóng"

## Popconfirm / Dialog

| Property | Value |
|----------|-------|
| Message | "Bạn có chắc chắn muốn in đơn hàng hay không?" |
| Buttons | "Hủy" (default) + "Đồng ý" (primary) |
| Position | Near trigger element |
| Tooltip hint | "Nhấp vào đây để in" (teal callout) |

## Toast / Notification

- Bell icon in header (notification indicator)
- Toast behavior not directly triggered during observation
- Ant Design notification pattern expected

## Animation

- Modal: fade-in overlay (observed ~0.2s)
- Not measured precisely
