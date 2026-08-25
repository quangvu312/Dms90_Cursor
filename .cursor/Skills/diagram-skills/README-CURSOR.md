# Diagram Skills (AI4BA) — đã cài cho Cursor

Nguồn: `diagram-skills-package` (AI4BA). Đã port sang Cursor tại workspace này.

## Cách dùng

Mô tả nghiệp vụ bằng lời, ví dụ:

- `Vẽ sequence: khách thanh toán qua Momo, có nhánh fail --feature food-delivery`
- `Vẽ swimlane quy trình duyệt hoàn tiền --feature refund`
- `Chưa biết vẽ loại nào cho luồng đặt hàng` → skill `diagram-selection` sẽ chỉ đường

## 11 skill + 1 router

| Skill | Engine | Khi nào |
|---|---|---|
| `diagram-selection` | — | Chưa biết chọn loại nào |
| `sequence` | Mermaid | Ai gọi ai theo thời gian |
| `activity` | Mermaid | Flow 1–2 vai, nhúng inline |
| `activity-swimlane` ⭐ | PlantUML | Quy trình đa vai (mặc định) |
| `bpmn` | Node engine | Chuẩn OMG / Camunda |
| `state` | Mermaid | Vòng đời entity |
| `erd` | Mermaid | Data model nhúng tài liệu |
| `d2-erd` | D2 | ERD đẹp standalone |
| `dbdiagram` | DBML | Bàn giao dev + SQL |
| `d2-activity` | D2 | Activity đẹp standalone |
| `d2-architect` | D2 | Kiến trúc hệ thống |
| `usecase-diagram` | PlantUML | Actor + use case |

## Nguyên tắc bắt buộc

1. **Không suy diễn nghiệp vụ** — thiếu thì hỏi (ngôn ngữ BA, không hỏi endpoint/column).
2. **Approval gate** — L1 plan trước khi ghi; L2 diff khi sửa file cũ.
3. **Compile-check** trước khi báo xong (Mermaid / D2 / DBML / BPMN / PlantUML).
4. Output theo `docs/{feature}/...` (xem `huong-dan/04-cach-hoat-dong.md`).

## Tài liệu trong gói

- `huong-dan/` — hướng dẫn dùng
- `explain-skills/` — giải thích nghiệp vụ từng loại sơ đồ
- `rules/` — approval-gate, diagram-selection, ba-conventions...
- `example/food-delivery/` — ví dụ đủ 11 skill
- `scripts/mermaid-verify.mjs` → cũng copy tại `.cursor/scripts/`

## Công cụ render (tuỳ skill)

Xem `huong-dan/01-cai-dat-cong-cu.md`. Thử nhanh nhất: `activity-swimlane` / `usecase-diagram` (chỉ cần internet).
