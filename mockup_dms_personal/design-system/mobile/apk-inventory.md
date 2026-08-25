# Inventory UI — VIGO Saleman (từ Hermes bundle)

> Nguồn: `index.android.bundle` (Hermes bytecode v96) trong APK `vn.thevigocorp.dms.uat`  
> File extract: `_apk-decompiled/_bundle-strings/ui-vn.txt` (1339 chuỗi VN)

| Token | Giá trị APK (lịch sử) | Figma Vigo (đang dùng) |
|-------|----------------------|------------------------|
| Primary | `#1A49D6` / `#0033CC` | `#1437D6` (primary-boldblue) |
| Background screen | `#F5F7F9` | `#FAFAFA` (Surface/primary) |
| Store box | `#E8F0FE` | `#EFF6FF` (Surface/brand-light) |
| Order ID tag | `#7988A3` | `#6B7280` (Text/secondary) |
| Text muted | `#757575` | `#6B7280` (Text/secondary) |
| Border card | `#E0E0E0` | `#E5E7EB` (Border/light) |

| Thuộc tính | Giá trị |
|------------|---------|
| App name | VIGO Saleman |
| Login hint | Đăng nhập với mã nhân viên của bạn |
| Version | 0.0.1 (3) |

## Bottom tabs (xác nhận)

1. **Viếng thăm**
2. **Báo cáo**
3. **Đơn hàng**
4. **Khác**

## Báo cáo (menu KPIReport)

| Label APK | Route mockup |
|-----------|--------------|
| Báo cáo KPI | `/sales-app/bao-cao/kpi` |
| Báo cáo doanh số ngày | `/sales-app/bao-cao/daily` |
| Báo cáo doanh số tháng | `/sales-app/bao-cao/monthly` |
| Báo cáo tồn kho hiện tại | `/sales-app/bao-cao/stock` |
| Báo cáo theo dõi đơn hàng | `/sales-app/bao-cao/tracking` |
| Báo cáo chương trình trưng bày | `/sales-app/bao-cao/showcase` |
| Báo cáo chương trình tích lũy | `/sales-app/bao-cao/accumulation` |

## Tab Khác — menu

| Label APK | Có trong mockup |
|-----------|-----------------|
| Chương trình khuyến mãi | ✓ |
| Khách hàng | ✓ |
| Thông báo | ✓ |
| Nghỉ phép | ✓ |
| Khảo sát | ✓ |
| Ghi chú | ✓ |
| Hỗ trợ | ✓ |
| Hợp đồng (econtract API) | ✓ |
| Cài đặt ứng dụng | ✓ |

## Nhiệm vụ viếng thăm

| Nhiệm vụ | Icon APK (`ic_*`) | Icon mockup |
|----------|-------------------|-------------|
| Bày hàng | `ic_buckets` / takePhotoDisplay | `merchandising` |
| Tồn kho | `ic_rp_stock` | `stock` |
| Khảo sát | `ic_survey_staff` | `surveyStaff` |
| Đặt hàng | `ic_menu_shopping` | `shopping` |
| CT trưng bày | `ic_rp_showcase` | `showcase` |
| CT tích lũy | `ic_rp_accumulation_program_status` | `accumulation` |
| Ghi chú (header) | `ic_note` | `note` |

- Đặt hàng
- Chương trình trưng bày
- Chương trình tích lũy
- Tồn kho
- Khảo sát
- Bày hàng (*)
- Ghi chú

## Flow Tạo đơn hàng mới (Hand-off Figma `7237:15611`)

```
Viếng thăm → Đặt hàng → Đơn hàng
  → [Tạo đơn hàng] → Sheet «Chọn hình thức» (Đơn bán / Đơn đặt)
  → Chọn sản phẩm (NPP + search + filter + gift KM)
      → Bộ lọc / Khuyến mãi / Chi tiết SP / Chọn ĐVT
  → [Đặt hàng] → Chi tiết đơn hàng (xác nhận)
  → [Xác nhận đặt hàng] → toast «Đặt hàng thành công» → Đơn hàng
```

Mock: `scripts/sales-app/sa-order.js` · Data: `products`, `orderPromos`, `distributor` trong `data/sales-app.json`


## Screen class names (RN) — tham chiếu

`VisitScreen`, `OrdersScreen`, `LoginScreen`, `TabOthersScreen`, `ReportKPIScreen`, `DailyReportScreen`, `DailyRevenueReportScreen`, `CheckinScreen`, `CreateCustomerScreen`, `ListSurveyScreen`, `SupportTicketScreen`, `ListNoteScreen`, `HistoryOrderAccuScreen`, …

## API econtract (Hợp đồng)

- `/v1/econtract/list`
- `/v1/econtract/detail/`
- `/v1/econtract/create`
- `/v1/econtract/get-type`
- `/v1/econtract/template`
