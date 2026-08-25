# Layout

> Ghi nhận từ website ht-portal-uat.finviet.com.vn

## Overall Structure

```
┌─────────────┬──────────────────────────────────┐
│   Sidebar   │  Header (role, icons, user)      │
│   310px     ├──────────────────────────────────┤
│             │  Breadcrumb                      │
│   Logo      │  Page Title                      │
│   Menu      │  Content (cards, tables, etc.)   │
│             │                                  │
│             ├──────────────────────────────────┤
│             │  Footer: Powered by Finviet      │
└─────────────┴──────────────────────────────────┘
                                    [FAB chat 💬]
```

## Sidebar

- Fixed left, full height
- White background
- Logo top: "eco dms" with icon
- Collapsible menu with sub-items
- Collapse toggle button (observed on edge)

## Header

- Height: 56px
- Transparent/white background
- Right-aligned: Role label, action icons, user avatar + name

## Content Area

- Background: #F5F5F5
- Padding: horizontal ~24px
- Cards float on gray background

## Footer

- "Powered by Finviet" link
- "Công ty Cổ phần Công nghệ FINVIET"

## Dashboard layout

- 6 stat cards in row
- 3 ranking cards in row below
- Map section full width
- Date range picker + filter button in toolbar

## List page layout

- Breadcrumb + title
- Filter card (white)
- Table card (white)
- Pagination bottom

## Responsive

- Desktop viewport observed: 1920×1080
- Mobile behavior not fully observed
