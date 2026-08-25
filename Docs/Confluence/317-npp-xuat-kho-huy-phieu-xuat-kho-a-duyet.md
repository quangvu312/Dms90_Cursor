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

### 1. Phạm vi áp dụng

* Màn hình: Danh sách phiếu xuất kho.
* Đối tượng áp dụng: Người dùng có quyền thao tác với phiếu xuất kho.
* Điều kiện áp dụng:

  + Chỉ áp dụng cho các phiếu xuất kho có trạng thái **“Đã duyệt”**.
  + Chưa có đơn hàng nào trong phiếu có phát sinh trả hàng nguyên đơn (ở tất cả trạng thái trả hàng khác "Đã hủy").
  + Tháng của ngày xuất kho & **Tháng của ngày đặt hàng của các đơn hàng thuộc phiếu xuất kho** chưa bị chốt sổ

### 2. Mô tả chi tiết

* Bổ sung nút **“Hủy phiếu xuất kho”** ở mỗi dòng phiếu xuất kho **Đã duyệt**.
* Khi người dùng nhấn "Hủy phiếu xuất kho" → hệ thống thực hiện kiểm tra:
  + Nếu phiếu xuất kho có chứa đơn hàng có phát sinh trả hàng nguyên đơn (ở tất cả trạng thái trả hàng khác "Đã hủy") → không cho hủy phiếu xuất kho, báo lỗi: "Không thể hủy phiếu xuất kho do đơn hàng trong phiếu xuất kho này đã phát sinh phiếu trả hàng."
  + Nếu tháng/năm của ngày xuất kho**/ngày đặt hàng** đã bị chốt sổ → không cho hủy phiếu xuất kho, báo lỗi: "Không thể hủy phiếu xuất kho do Tháng*{tháng}/{năm}* đã bị khóa sổ.".
  + Nếu phiếu xuất kho thỏa điều kiện áp dụng, hệ thống hiển thị **Popup nhập lý do hủy**:

* + - * + Tiêu đề: “Xác nhận hủy phiếu xuất kho”
        + Trường bắt buộc "Lý do hủy": Chọn lý do từ danh sách được cấu hình tại **[Dữ liệu chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443415)** **- Loại dữ liệu: Lý do hủy phiếu xuất kho** & thêm 1 option "Khác".

          - Nếu chọn "Khác" → hiển thị textarea nhập lý do khác *[required]*.

* + - * + Nút: **Hoàn tất** / **Hủy**

          - Nếu nhấn **Hoàn tất**: Hệ thống kiểm tra:

            * Nếu không có lý do: hiển thị thông báo inline Lý do hủy: *“Vui lòng chọn lý do.”*.
            * Nếu lý do là "Khác" nhưng không Nhập lý do: hiển thị thông báo inline dưới text area Nhập lý do: *"Vui lòng nhập lý do."*
            * Nếu có lý do: tiến hành xử lý:
              + Cập nhật trạng thái phiếu xuất kho thành **“Đã hủy”**.
              + Cập nhật trạng thái tất cả các đơn hàng thuộc phiếu xuất kho thành **“Khởi tạo”**.
              + Cập nhật tồn kho theo công thức:
                - Cộng số lượng "Tồn kho" của từng lô trong kho tương ứng với số lượng (SP bán, SP KM) được nhập trong phiếu xuất kho.
                - Cộng số lượng "Tạm giữ" của từng lô trong kho tương ứng với số lượng (SP bán, SP KM) được nhập trong phiếu xuất kho.
          - Nếu nhấn **Hủy**: đóng popup, không thực hiện hành động.