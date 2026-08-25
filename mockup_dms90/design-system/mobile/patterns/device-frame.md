# Pattern: Device Frame (App SaleMan)

## Cấu trúc DOM

```
PhoneShell
└── sales-app__device          ← căn giữa khung preview
    └── sales-app__phone       ← vỏ máy (bezel + shadow)
        └── sales-app__phone-bezel
            ├── StatusBar      ← 44px, theme default | brand
            ├── sales-app__screen   ← flex column: header / body / nav
            └── HomeIndicator  ← pill 134×5px, safe area
```

## Token

| Token | Giá trị | Mô tả |
|-------|---------|--------|
| `--sa-phone-w` | 390px | Chiều rộng logic |
| `--sa-phone-h` | 844px | Chiều cao logic |
| `--sa-status-h` | 44px | Status bar |
| `--sa-header-h` | 56px | Chiều cao tham chiếu nav bar (Hand-off); header thực tế `min-height: 0` + pad |
| `--sa-nav-h` | 64px | Bottom tab bar |
| `--sa-home-h` | 34px | Vùng home indicator |
| `--sa-radius-phone` | 44px | Bo góc màn hình |
| `--sa-bezel` | 10px | Viền máy preview |

## StatusBar theme

| Prop `lightStatus` | Class | Dùng khi |
|--------------------|-------|----------|
| `false` | `is-default` | Login, nền sáng — chữ/icon tối |
| `true` | `is-brand` | Tab chính, header gradient — chữ/icon trắng |

## Quy tắc

1. **Không** dùng `position: absolute` + `padding-top` hack cho status — status là flex item cố định 44px.
2. Bottom nav **padding-bottom** đủ chỗ home indicator (`--sa-home-h`).
3. Toast / sheet neo theo `.sales-app__phone-bezel`, không `.sales-app__phone` ngoài bezel.
4. Viewport mobile thật (`max-width: 480px`): bỏ bezel, full bleed 100dvh.
