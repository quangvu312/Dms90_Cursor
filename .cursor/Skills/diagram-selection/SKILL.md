---
name: diagram-selection
description: >-
  Chọn đúng loại sơ đồ nghiệp vụ (sequence, activity, swimlane, BPMN, state,
  ERD, DBML, use case, architecture). Dùng khi user muốn vẽ diagram nhưng chưa
  biết loại nào, hoặc hỏi "vẽ sơ đồ cho X" / "dùng skill diagram nào".
---

# diagram-selection — Chọn đúng loại sơ đồ

## Goal

Giúp BA chọn đúng 1 (hoặc vài) skill diagram trước khi vẽ. Không tự vẽ khi chưa chốt loại.

## Decision matrix (nhanh)

| Muốn thể hiện | Skill |
|---|---|
| Ai gọi ai theo thời gian (login, thanh toán, webhook) | `sequence` |
| Entity ≥3 trạng thái + transition | `state` |
| Quy trình đa vai trò, tương tác chéo (mặc định) | `activity-swimlane` ⭐ |
| Flow 1–2 vai, nhúng inline Mermaid trong .md | `activity` |
| Flow nhiều nhánh, hình đẹp standalone | `d2-activity` |
| Chuẩn OMG / import Camunda-Bizagi | `bpmn` |
| Data model nhúng tài liệu BA | `erd` |
| Data model hình đẹp (slide/export) | `d2-erd` |
| Schema bàn giao dev + SQL/enum/index | `dbdiagram` |
| Phạm vi: actor + use case | `usecase-diagram` |
| Kiến trúc component/service/DB | `d2-architect` |

## Approach

1. Hỏi (nếu chưa rõ): muốn cho thấy **thời gian / trạng thái / quy trình / phạm vi / dữ liệu / kiến trúc**?
2. Nếu quy trình → hỏi thêm số vai trò + nhu cầu nhúng inline / chuẩn OMG / hình đẹp.
3. Nếu dữ liệu → hỏi đối tượng đọc (BA trong doc / slide / dev+SQL).
4. Đề xuất skill + lý do ngắn; chờ user xác nhận rồi mới chạy skill tương ứng.
5. Không suy diễn nghiệp vụ; thiếu fact thì hỏi bằng ngôn ngữ nghiệp vụ (theo `ba-conventions`).

## References

- Hub đầy đủ: `.cursor/Skills/diagram-skills/explain-skills/diagram-selection.md`
- Rule máy: `.cursor/Skills/diagram-skills/rules/diagram-selection.md`
- Approval gate: `.cursor/Skills/diagram-skills/rules/approval-gate.md`
- BA conventions: `.cursor/Skills/diagram-skills/rules/ba-conventions.md`
- Hướng dẫn từng skill: `.cursor/Skills/diagram-skills/huong-dan/03-huong-dan-tung-skill.md`
- Ví dụ: `.cursor/Skills/diagram-skills/example/food-delivery/`
