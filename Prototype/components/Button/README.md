# Button

## Mục đích

Render button với các variant primary, default, ghost, link, danger.

## Props

| Prop | Type | Default | Mô tả |
|------|------|---------|-------|
| text | string | '' | Nội dung button |
| type | string | 'default' | primary, default, ghost, text, link, danger |
| size | string | 'md' | sm, md, lg |
| disabled | boolean | false | Vô hiệu hóa |
| loading | boolean | false | Trạng thái loading |
| icon | string | '' | Icon HTML/emoji |
| iconOnly | boolean | false | Chỉ hiển thị icon |
| dataAction | string | '' | Data attribute cho event handler |

## Cách sử dụng

```javascript
DMS.render('Button', { text: 'Tìm kiếm', type: 'primary' })
DMS.render('Button', { text: 'Làm mới', type: 'ghost' })
DMS.render('Button', { icon: '🖨', iconOnly: true, type: 'default' })
```

## Ví dụ

```html
<!-- Primary search button (observed) -->
<button class="dms-btn dms-btn--primary">Tìm kiếm</button>

<!-- Ghost reset button (observed) -->
<button class="dms-btn dms-btn--ghost">Làm mới</button>
```
