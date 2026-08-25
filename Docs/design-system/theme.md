# Theme

> Ghi nhận từ website ht-portal-uat.finviet.com.vn

## Framework

- **Ant Design** (class prefix `.ant-*`)
- Custom brand theme (eco dms / Finviet)

## CSS Variables (Prototype mapping)

Prototype map observed values vào `Prototype/styles/theme.css`:

```css
--color-primary: #2b579a;
--color-bg-layout: #f5f5f5;
--sidebar-width: 310px;
--header-height: 56px;
--radius-md: 6px;
--radius-lg: 8px;
```

## Brand elements

| Element | Description |
|---------|-------------|
| Logo | "eco dms" — yellow/blue icon + blue text |
| FAB | Yellow circle, bottom-right, chat icon |
| Active menu | Yellow highlight (brand accent) |
| Primary actions | Blue (#2B579A) |

## Shadow system

| Level | Value |
|-------|-------|
| Card | `rgba(0,0,0,0.03) 0 1px 2px, rgba(0,0,0,0.02) 0 1px 6px -1px, rgba(0,0,0,0.02) 0 2px 4px` |
| Button primary | `rgba(0,35,65,0.2) 0 2px 0` |
| Modal | `0 6px 16px rgba(0,0,0,0.08)` |

## Animation

| Element | Transition |
|---------|------------|
| General | `all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)` |
| Menu expand | max-height 0.3s ease |
| Modal | fade + slide ~0.2s |

## Dark mode

- Không quan sát thấy dark mode
