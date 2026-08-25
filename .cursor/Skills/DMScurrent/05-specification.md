# Skill: Specification

## Mục tiêu

Viết Functional Specification dựa trên kết quả của các bước trước.

Specification phải phản ánh đúng yêu cầu nghiệp vụ.

Không được tự bổ sung yêu cầu ngoài phạm vi đã xác nhận.

---

## Điều kiện trước khi thực hiện

Chỉ được viết Specification khi đã hoàn thành:

- Discovery

- Scope Analysis

- Brainstorm Solution

- Impact Analysis

Nếu còn thiếu thông tin, dừng và yêu cầu người dùng bổ sung.

---

## Nguồn thông tin

Ưu tiên sử dụng theo thứ tự:

1. Tài liệu Confluence

2. Business Rule hiện có

3. Requirement của người dùng

4. Các cấu hình liên quan

5. Specification cũ (nếu có)

Không tự suy diễn nếu không có tài liệu.

---

## Cấu trúc Specification

Specification nên bao gồm:

### 1. Mục tiêu

Tóm tắt ngắn gọn mục đích của tính năng.

---

### 2. Phạm vi

Bao gồm:

- Module

- Đối tượng sử dụng

- Chức năng bị ảnh hưởng

---

### 3. Hiện trạng

Mô tả hành vi hiện tại.

Nếu không có tài liệu thì ghi rõ:

"Chưa có thông tin."

---

### 4. Yêu cầu mới

Mô tả đầy đủ logic nghiệp vụ.

Không viết mơ hồ.

Nên sử dụng:

- Nếu...

- Khi...

- Thì...

---

### 5. Business Rule

Liệt kê toàn bộ rule.

Ví dụ:

BR-01

BR-02

...

---

### 6. Luồng xử lý

Có thể mô tả theo từng bước.

Ví dụ:

Bước 1

...

Bước 2

...

---

### 7. Điều kiện kiểm tra

Bao gồm:

- Validate

- Message lỗi

- Điều kiện thành công

---

### 8. Ảnh hưởng

Tóm tắt:

- UI

- Database

- API

- Mobile

- Import

- Export

- Config

---

### 9. Ghi chú

Những điều cần lưu ý khi phát triển.

---

## Quy tắc

Không viết quá ngắn.

Không bỏ sót Business Rule.

Nếu có nhiều Rule, đánh số.

Nếu có nhiều Case, tách rõ từng Case.

---

## Không được

❌ Sinh SQL

❌ Sinh API

❌ Sinh Source Code

❌ Thiết kế Database

❌ Đoán Requirement

---

## Kết quả

Trả về một Functional Specification hoàn chỉnh theo format của công ty.