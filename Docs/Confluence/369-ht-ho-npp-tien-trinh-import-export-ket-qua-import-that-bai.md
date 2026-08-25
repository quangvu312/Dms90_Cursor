|  |  |
| --- | --- |
| Target release | Release name or number |
| US |  |
| Version | trueYellow1.0.0 |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA | Lead tester |

## **Lịch sử tài liệu**

3

**Backlog**

| **#** | **Phiên** **bản** | **Ngày** **cập** **nhật** | **Người** **cập** **nhật** | **Nội dung cập** **nhật** |
| --- | --- | --- | --- | --- |
| 1 | 1.0.0 |  | nhi.pham | Tạo mới tài liệu |

## **Description**

Tính năng cho phép người dùng thực hiện tải về kết quả import thất bại.

## **Requirement**

**Export kết quả import thất bại**

| # | Title | User interaction and wireframe | Description |
| --- | --- | --- | --- |
| 1 |  |  | Đường dẫn: Danh sách tiến trình import → Chọn icon Xem lỗi import  Khi chọn xem lỗi import, hệ thống hiển thị màn hình Chi tiết import. Tại màn hình này, bổ sung thêm button Export Excel để cho phép người dùng xuất kết quả import thất bại về máy.   * Khi nhấn vào nút → hệ thống hiển thị popup xác nhận   + Text: Bạn có muốn xuất Chi tiết import?   + Nút Huỷ: Click vào nút → hệ thống thực hiện đóng popup   + Nút Lưu: Click vào nút → hệ thống thực hiện tải về file kết quả lỗi import theo template:  . Lưu ý: [Danhsach] trong tên file lấy tương ứng với giá trị tại cột "Danh sách" trên màn hình danh sách tiến trình import, viết liền không dấu. Ví dụ: *Chitietimport\_Tuyenbanhang* * Mô tả các trường thông tin trong template  | STT | Tên cột | Mô tả | | --- | --- | --- | | 1 | Số dòng hợp lệ | * Hiển thị tổng số dòng hợp lệ/Tổng số dòng dữ liệu trong file import. | | 2 | Số dòng không hợp lệ | * Hiển thị tổng số dòng không hợp lệ/Tổng số dòng dữ liệu trong file import. VD: 11/21 | | 3 | Dòng thứ | * Hiển thị số thứ tự của dòng có lỗi trong file | | 4 | Mô tả lỗi | * Hiển thị các mô tả lỗi tương ứng của từng dòng tương ứng các trường hợp bên dưới. | |