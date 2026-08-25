# Buttons

> Ghi nhận từ website ht-portal-uat.finviet.com.vn

## Variants quan sát

| Type | Background | Text | Border | Shadow |
|------|------------|------|--------|--------|
| Primary | `#2B579A` | `#FFFFFF` | transparent 0.8px | `rgba(0,35,65,0.2) 0 2px 0` |
| Default/Ghost | transparent / white | `rgba(0,0,0,0.88)` | `#D9D9D9` | none |
| Link | transparent | `#2B579A` | none | none |
| Icon only | transparent | — | transparent | none |

## Sizes

| Size | Height | Padding | Font |
|------|--------|---------|------|
| Default | 32px | 0 15px | 14px |
| Large (filter/search) | ~41px | 0 20px | 14px |
| Icon | 32×32px | 0 | — |

## Border Radius

- `6px` (observed on `.ant-btn`)

## States

| State | Behavior |
|-------|----------|
| Hover | Primary → darker blue; Default → border/text primary |
| Active | Primary → darker |
| Disabled | Reduced opacity, cursor not-allowed |
| Loading | Not observed in detail |

## Ví dụ sử dụng quan sát

- **"Bộ lọc"** — Primary, có icon funnel
- **"Tìm kiếm"** — Primary
- **"Làm mới"** — Default/Ghost outline
- **"Chi tiết"** — Link style
- **"Chọn"** — Primary, appended to input
- **"Hủy" / "Đồng ý"** — Popconfirm: Default + Primary
- **Printer icon** — Icon button in table row
