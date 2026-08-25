# DMS Prototype Workspace

Prototype UI framework cho hệ thống DMS, clone giao diện từ ht-portal-uat.finviet.com.vn.

## Chạy trên localhost

```bash
cd Prototype
npx serve .
# hoặc
python -m http.server 8080
```

Mở: `http://localhost:8080` (hoặc port tương ứng)

## Cấu trúc

```
Prototype/
├── index.html          # Entry point SPA
├── assets/             # Static assets
├── components/         # UI Component Library (32 components)
├── layouts/            # Layout templates
├── pages/              # Page handlers (màn hình)
├── styles/             # CSS tách file (theme, layout, button, form, table, modal, sidebar, header, utility)
├── scripts/            # App bootstrap + component core
├── data/               # Mock JSON data
└── router/             # SPA router (pure JS)
```

## Design System

Xem `Docs/design-system/` — Single Source of Truth cho UI.

## Quy tắc tạo màn hình mới

1. Chỉ tạo file trong `pages/ten-man-hinh/page.js`
2. Dùng `DMS.render()` cho mọi component
3. Đọc data từ `data/*.json`
4. Không sửa Component Library / Layout trừ khi được yêu cầu
5. Nếu thiếu component → thông báo và chờ xác nhận

## Màn hình mẫu

| Route | Page |
|-------|------|
| `/dashboard` | Dashboard |
| `/sale/order` | Đặt Hàng NPP (List page) |

## Component usage

```javascript
DMS.render('Button', { text: 'Tìm kiếm', type: 'primary' })
DMS.render('Table', { columns: [...], data: [...], rowActions: true })
DMS.render('FilterPanel', { fields: [...] })
```
