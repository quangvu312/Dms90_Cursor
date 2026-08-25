# Component Guideline

> Quy tắc sử dụng Component Library cho DMS Prototype

## Nguyên tắc

1. **Single Source of Truth** — Design System + Component Library là nguồn duy nhất
2. **Không hardcode** — Mọi UI element phải qua `DMS.render('ComponentName', props)`
3. **Không copy HTML** giữa các màn hình
4. **Không tạo CSS mới** nếu đã có trong `Prototype/styles/`

## Cách render component

```javascript
// Trong page handler (pages/ten-man-hinh/page.js)
DMS.render('Button', { text: 'Tìm kiếm', type: 'primary' })
DMS.render('Table', { columns: [...], data: [...] })
DMS.render('FilterPanel', { fields: [...] })
```

## Component Registry

| Component | Mục đích |
|-----------|----------|
| Button | Actions, submit, cancel |
| Input / Textarea | Text entry |
| Select / MultiSelect | Dropdown, multi-tag select |
| DatePicker | Date input |
| Checkbox / Radio / Switch | Boolean / single choice |
| Table / Pagination | Data list |
| Card | Content container |
| FilterPanel | Search/filter form |
| Breadcrumb | Navigation path |
| Tag / Badge | Status display |
| Modal / Dialog | Overlay, confirm |
| Toast / Notification | Feedback messages |
| Sidebar / Header / Menu | Layout |
| EmptyState / Loading / Spinner | Feedback states |
| Tabs / Collapse / Tree | Complex navigation |
| ActionIconButton / TableActions | Icon action trên cột table |
| ActionDropdown | Nhóm action (cờ lê → dropdown Duyệt/Từ chối) |

## ACTION TRÊN TABLE

Rule chung cho cột **Thao tác / Tùy chỉnh**. Áp dụng mọi module list (Telling Story, Hợp đồng, Đơn hàng, …).

### Rule 1 – Xem chi tiết bằng hyperlink

Nếu entity đã có **Tên / Mã / Tiêu đề** dạng hyperlink (`dms-table__link`) và click được để mở Detail View thì **KHÔNG tạo thêm icon "Xem"** trong cột Thao tác.

Ví dụ đúng:

- Tên hợp đồng / Mã hợp đồng → xem Hợp đồng
- Tiêu đề bài viết → xem Story
- Mã đơn hàng → xem Đơn hàng

Mục tiêu: giảm action thừa, không duplicate chức năng, table gọn, UX đồng nhất.

### Rule 2 – Duyệt/Từ chối dùng một action group

Với module có nghiệp vụ Duyệt + Từ chối: **không tạo 2 icon riêng** trên table.

Pattern chuẩn (reuse `ActionDropdown` + icon cờ lê `type: 'approve'`):

```text
Icon cờ lê
   ↓
Dropdown
├── Duyệt
└── Từ chối
```

- Icon cờ lê chỉ hiện khi bản ghi còn ở trạng thái chờ duyệt (Hợp đồng: `Khởi tạo`; Telling Story: `Chờ duyệt`).
- Chọn **Duyệt** → popup xác nhận (Modal size `sm`) → cập nhật status → Toast thành công → đóng popup.
- Chọn **Từ chối** → popup nhập `Lý do từ chối *` (nếu module yêu cầu) → validate bắt buộc → cập nhật status → Toast → đóng popup.

Reference implementation: module **Hợp đồng** (icon cờ lê + Modal duyệt) và **Telling Story** (dropdown Duyệt/Từ chối trên cùng icon).

### Rule 3 – Không tự tạo icon khi hệ thống đã có pattern

Trước khi thêm action mới vào table:

1. Search các module hiện có.
2. Kiểm tra action tương tự đã tồn tại chưa (`ActionIconButton` types: edit, approve, delete, view, …).
3. Reuse icon/component/pattern hiện tại (`DMS.render('TableActions' | 'ActionDropdown' | 'ActionIconButton')`).
4. Chỉ tạo mới khi thực sự chưa có component phù hợp.

Không tự thêm icon chỉ vì chức năng mới được bổ sung.

### Rule 4 – Tránh duplicate action

Một nghiệp vụ chỉ có **một entry point**.

Sai: hyperlink Tên bài + icon mắt cùng mở Detail.  
Đúng: chỉ hyperlink Tên bài.

Sai: icon cờ lê + icon Duyệt + icon Từ chối.  
Đúng: một icon cờ lê → dropdown Duyệt / Từ chối.

## COMPONENT STYLE CONSISTENCY

Rule bắt buộc khi implement/sửa feature trong `mockup_dms90` (và Prototype).

1. **Không được tự ý thay đổi style của shared component.**
2. Khi module đã có reference chuẩn trong `prototype`, **prototype là source of truth về component style** (FilterPanel, DatePicker, Select, ActionIconButton, Button, Table, Tag, Modal, …).
3. Feature mới phải **reuse** component/style hiện tại — không redesign, không đổi icon library nếu chưa có requirement.
4. Chỉ thay đổi **behavior/data** khi requirement yêu cầu. Không overwrite requirement mới hơn của `mockup_dms90` khi đồng bộ UI từ prototype.
5. Nếu bắt buộc cần style khác:
   - Kiểm tra đã có variant chưa.
   - Nếu chưa, tạo **scoped variant** (ví dụ class/module-specific), không sửa default/global style.
   - Không ảnh hưởng màn hình khác.
6. Không thay icon/component bằng icon “gần giống” (Lucide, emoji, Unicode) khi Prototype/`ActionIconButton` đã có type tương ứng.

Áp dụng đặc biệt: Button, IconButton, Input, SearchInput, Select, MultiSelect, DatePicker, Table, Pagination, Tag, StatusTag, Modal, Drawer, Upload, FilterPanel, Sidebar, Breadcrumb, Tabs, Tooltip, Popconfirm.

## STANDARD FILTER LAYOUT

Layout chuẩn cho Filter trên các màn hình List trong `mockup_dms90` (và khi reuse `DMS.render('FilterPanel')`).

### Cấu trúc

```text
┌───────────────────────────────────────────────────────────────┐
│ Filter Card                                                   │
│                                                               │
│ [Field 1] [Field 2] [Field 3] [Field 4 …]                     │
│                                                               │
│                                      [Làm mới] [Tìm kiếm]     │
└───────────────────────────────────────────────────────────────┘
```

1. Filter nằm trong Card riêng (`dms-filter-card` / `FilterPanel`).
2. Có title **"Tìm kiếm theo"** nếu màn hình hiện tại dùng pattern này (label trên search field hoặc header Card).
3. Các điều kiện Filter nằm trên **cùng một row/grid** responsive (`.dms-filter-grid`).
4. Action button nằm **row dưới**, căn phải (`.dms-filter-panel__actions` — nằm ngoài grid fields).
5. Thứ tự button:
   - Làm mới
   - Tìm kiếm
6. Không tự đổi height/style Input, Select, DatePicker, Button của FilterPanel.
7. Khi thêm field mới, ưu tiên reflow grid, không ép field quá nhỏ.
8. Không tự redesign Filter nếu chưa có requirement.
9. Module đã có Filter chuẩn thì phải reuse layout/component chuẩn (`FilterPanel` / `dms-filter-panel`).

### Responsive

- Desktop: fields trên 1 hàng (thường 4 cột), actions hàng dưới căn phải.
- ≤1200px: grid 2 cột.
- ≤768px: grid 1 cột; actions vẫn hàng dưới.

### Không làm

- Không nhét button cùng hàng với input/select/date nếu đang follow STANDARD FILTER LAYOUT.
- Không đổi danh sách field / filter logic chỉ để “cho đẹp”.
- Không hard-code layout riêng từng module nếu có thể dùng shared FilterPanel CSS/structure.

Reference: module **Quản lý hợp đồng** (`ContractFilterBar`) + `styles/filter-panel.css` + `components/FilterPanel`.

## DYNAMIC FIELD LAYOUT RULE

Khi một field điều kiện (condition field) sinh ra field phụ (dynamic field) trên form trong `mockup_dms90`:

1. **Không tự tạo thêm một row** nếu row kế tiếp còn vị trí cột phù hợp.
2. Field phụ phải **ưu tiên đặt vào grid/hàng kế tiếp** cùng các field đang có (ví dụ: Ghi chú | Dynamic | Trạng thái).
3. **Luôn tận dụng khoảng trống** trước khi tạo thêm line.
4. Form phải **compact và ổn định** khi switch condition — không nhảy chiều cao bất thường do chèn row giữa.
5. **Không dùng** spacer / min-height / `visibility:hidden` / absolute / translate để “giữ chỗ”.
6. Dynamic field phải **conditional render thật sự** (không render DOM rỗng khi chưa chọn).
7. Chỉ tạo row riêng nếu requirement hoặc nội dung field thực sự cần **full width**.

Ví dụ đúng (Loại hợp đồng):

```text
Line 1: Mã | Tên | Đối tượng xem
Line 2: Ghi chú | [Dynamic theo Đối tượng xem] | Trạng thái
```

Khi chưa chọn điều kiện: Ghi chú có thể span rộng hơn; không để container/border rỗng.

## Tạo màn hình mới

1. Tạo `Prototype/pages/ten-man-hinh/page.js`
2. Export handler: `window.renderTenManHinh = async function() { ... }`
3. Thêm route vào `data/route.json`
4. Thêm menu item vào `data/menu.json` (nếu cần)
5. Đọc dữ liệu từ `data/*.json`

## Khi thiếu component

1. Thông báo component còn thiếu
2. Đề xuất bổ sung
3. **Chờ xác nhận** trước khi tạo

## File structure mỗi component

```
ComponentName/
  index.html   — Demo standalone
  style.css    — (reference, styles chính ở Prototype/styles/)
  script.js    — DMS.register('ComponentName', { render })
  README.md    — Props, usage, examples
```

## Quy tắc AI (Phase 9)

Khi user yêu cầu "Tạo màn hình ...":

- ✅ Chỉ sinh `pages/ten-man-hinh/`
- ❌ Không sửa Design System, Component Library, Layout (trừ khi được yêu cầu)
