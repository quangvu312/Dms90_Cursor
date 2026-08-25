# Pattern: List Screen (App SaleMan)

## Cấu trúc

```
Screen
├── AppHeader (title + back nếu sub-screen)
├── SearchBar (tuỳ chọn)
├── Tabs / ChipTabs (tuỳ chọn)
├── ListHead (tiêu đề + sort)
├── ScrollArea
│   ├── Card × N
│   └── EmptyState (khi rỗng)
└── BottomNav (nếu tab chính)
```

## Ví dụ route

- `/sales-app/vieng-tham` — Danh sách viếng thăm
- `/sales-app/khach-hang` — Danh sách khách hàng
- `/sales-app/hop-dong` — Danh sách hợp đồng
