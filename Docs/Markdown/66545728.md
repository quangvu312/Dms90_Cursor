true

|  |  |
| --- | --- |
| Target release | Release name or number |
| US |  |
| Version | trueYellow1.0.0 |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA | Lead tester |

3

**BACKLOG**

| # | Phiên bản | Ngày cập nhật | Người cập nhật | Nội dung cập nhật |
| --- | --- | --- | --- | --- |
| 1 | 1.0.0 |  |  | Tạo mới tài liệu |

# **Requirement**

### Phạm vi áp dụng:

* Đơn sell-out được đặt từ portal/SMApp.

* Trạng thái đơn = "Đã duyệt"

### Mô tả

* **Giao diện:** Tại màn hình **Danh sách đơn hàng bán**, bổ sung icon button "Khởi tạo lại" tại mỗi đơn hàng thoả mãn điều kiện áp dụng.
* **Mô tả**: Khi người dùng click vào nút "**Khởi tạo lại**", hệ thống hiển thị popup xác nhận: "Xác nhận khởi tạo lại đơn hàng."
  + **Đồng ý:**
    - Khi nhấn đồng ý → hệ thống kiểm tra lại trạng thái của đơn hàng
      * Nếu đơn hàng chuyển trạng thái sang **Đã xuất kho** → hệ thống hiển thị thông báo: *"Không thể khởi tạo lại đơn hàng vì đơn hàng đã được xuất kho. Vui lòng làm mới trang để cập nhật."*
      * Nếu đơn hàng vẫn ở trạng thái **Đã duyệt** và đã tạo phiếu xuất kho (trạng thái phiếu xuất kho = "Khởi tạo") → hệ thống hiển thị popup thông báo: *""Đơn hàng đã được tạo phiếu xuất kho. Nếu tiếp tục khởi tạo lại, hệ thống sẽ tự động hủy phiếu xuất kho liên quan. Bạn có chắc chắn muốn tiếp tục?"**"*
        + - Nếu chọn "Xác nhận", hệ thống thực hiện
            * Chuyển trạng thái phiếu xuất kho có chứa đơn hàng được khởi tạo lại sang "Đã hủy" với lý do hủy: "Khởi tạo lại đơn hàng <Mã đơn hàng được khởi tạo lại>."
            * Chuyển trạng thái các đơn hàng còn lại trong phiếu xuất kho về Khởi tạo theo luồng hủy phiếu xuất kho (nếu có).
            * Chuyển trạng thái đơn hàng về "Khởi tạo".
          - Nếu chọn "Hủy", hệ thống thực hiện đóng popup thông báo và không thực hiện khởi tạo lại đơn hàng.
      * Nếu đơn hàng vẫn ở trạng thái **Đã duyệt** và chưa được tạo phiếu xuất kho, hệ thống cập nhật trạng thái của đơn hàng từ "**Đã duyệt**" sang "**Khởi tạo**".
      * Sau khi cập nhật, người dùng có thể thực hiện chỉnh sửa đơn hàng này như một đơn hàng trạng thái "Khởi tạo" khác.
  + **Hủy:** Hệ thống đóng popup và huỷ thao tác cập nhật.