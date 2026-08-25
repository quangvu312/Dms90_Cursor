# Skill: Review Specification

## Mục tiêu

Đánh giá chất lượng của Functional Specification trước khi chuyển cho Developer hoặc QA.

Không chỉnh sửa trực tiếp tài liệu.

Chỉ ra các điểm còn thiếu, chưa rõ hoặc có rủi ro.

---

## Điều kiện thực hiện

Chỉ thực hiện khi đã có Functional Specification.

Nếu chưa có Specification thì dừng.

---

## Nguồn thông tin

Ưu tiên kiểm tra dựa trên:

1. Functional Specification

2. Review Checklist của dự án

3. Tài liệu Confluence liên quan

4. Business Rule hiện có

---

## Các hạng mục cần kiểm tra

### 1. Business Goal

- Mục tiêu có rõ ràng không?

- Có đúng với yêu cầu ban đầu không?

---

### 2. Scope

- Đã xác định đầy đủ phạm vi chưa?

- Có phần nào bị mở rộng ngoài yêu cầu không?

---

### 3. Business Rule

Kiểm tra:

- Có thiếu Rule không?

- Có Rule mâu thuẫn không?

- Có Rule trùng nhau không?

---

### 4. Luồng xử lý

- Có đầy đủ các bước không?

- Có Case bị bỏ sót không?

- Có Exception Case không?

---

### 5. Validate

Kiểm tra:

- Validate bắt buộc

- Validate dữ liệu

- Message lỗi

- Điều kiện thành công

---

### 6. Impact

Đã đánh giá:

- UI

- Database

- API

- Mobile

- Import

- Export

- Permission

- Config

chưa?

---

### 7. Tính nhất quán

Kiểm tra:

- Thuật ngữ có thống nhất không?

- Tên module có đúng không?

- Có sử dụng đúng tên trong Confluence không?

---

### 8. Khả năng phát triển

Developer có thể implement ngay không?

Nếu không, ghi rõ lý do.

---

## Kết quả

Trả về báo cáo theo mẫu:

# Review Summary

## Điểm đạt

...

## Vấn đề phát hiện

...

## Thiếu thông tin

...

## Rủi ro

...

## Khuyến nghị

...

---

## Quy tắc

Không tự sửa Specification.

Không tự thêm Requirement.

Không suy diễn.

Chỉ đưa ra nhận xét và đề xuất.

Nếu phát hiện thiếu thông tin thì yêu cầu bổ sung.

---

## Không được

❌ Viết lại Specification

❌ Sinh Code

❌ Thiết kế Database

❌ Thêm Business Rule mới