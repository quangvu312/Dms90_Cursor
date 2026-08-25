# Skill: Impact Analysis

## Mục tiêu

Phân tích phạm vi ảnh hưởng của yêu cầu trước khi viết Specification.

Mục tiêu là xác định đầy đủ các chức năng, dữ liệu và hệ thống có thể bị tác động.

Không đề xuất giải pháp kỹ thuật.

Không viết Specification.

---

## Cách thực hiện

Dựa trên:

- Kết quả Discovery

- Scope Analysis

- Brainstorm Solution

- Tài liệu Confluence liên quan

để phân tích các ảnh hưởng.

---

## Cần đánh giá

### 1. Chức năng bị ảnh hưởng

Ví dụ:

- Danh sách

- Tạo mới

- Chỉnh sửa

- Xóa

- Chi tiết

---

### 2. Dữ liệu

Có thay đổi dữ liệu không?

Có thêm trường mới không?

Có cần migrate dữ liệu không?

Có ảnh hưởng dữ liệu cũ không?

---

### 3. Import / Export

Có ảnh hưởng file Import không?

Có thay đổi template không?

Có thay đổi Export không?

---

### 4. API

Có API nào bị ảnh hưởng?

Có cần thay đổi Request/Response không?

Có cần version API không?

---

### 5. Mobile

Có ảnh hưởng ứng dụng Mobile không?

Nếu có, mô tả ngắn gọn.

---

### 6. Phân quyền

Có thay đổi quyền sử dụng không?

Có role mới không?

Có thay đổi hành vi theo quyền không?

---

### 7. Cấu hình

Có cần thêm Config mới không?

Config dùng ở đâu?

Ảnh hưởng tới khách hàng hiện tại không?

---

### 8. Báo cáo

Có ảnh hưởng Dashboard không?

Có ảnh hưởng Report không?

Có thay đổi KPI không?

---

## Kết quả

Trả về bảng tổng hợp:

| Thành phần | Ảnh hưởng | Ghi chú |

|------------|-----------|---------|

| UI | Có / Không | |

| Database | Có / Không | |

| API | Có / Không | |

| Import | Có / Không | |

| Export | Có / Không | |

| Mobile | Có / Không | |

| Config | Có / Không | |

| Permission | Có / Không | |

| Report | Có / Không | |

---

## Nếu chưa đủ thông tin

Không suy đoán.

Đặt câu hỏi bổ sung.

---

## Không được

❌ Tự thiết kế Database

❌ Viết API

❌ Viết Specification

❌ Sinh Code