none

| Target release |  |
| --- | --- |
| US | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5728 |
| Version | 1.0.0 |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA |  |

## **Lịch sử tài liệu**

3

**Đối tượng áp dụng:**

* Màn hình Xem chi tiết phiếu nhập kho
* Màn hình Xác nhận phiếu nhập kho
* Áp dụng cho tất cả các phiếu nhập kho có nguồn nhập = Đơn hàng

**Phạm vi thay đổi:**

* Bổ sung các cột: Đơn giá, Thành tiền
* Bổ sung tổng tiền hàng

## 1. Mô tả tính năng

Tính năng này cải tiến cách hiển thị thông tin hàng khuyến mãi trên màn hình chi tiết phiếu nhập kho, giúp user dễ dàng xem toàn bộ thông tin mà không cần thao tác click mở từng chương trình khuyến mãi.

### Mục tiêu

* Giảm số lượng thao tác của user khi xem chi tiết phiếu nhập kho
* Hiển thị đầy đủ thông tin hàng khuyến mãi một cách trực quan
* Bổ sung thông tin đơn giá và thành tiền để user dễ dàng kiểm tra và đối chiếu
* Tăng tính minh bạch trong quản lý hàng khuyến mãi

### Phạm vi thay đổi

Cải tiến được áp dụng trên 2 màn hình:

1. **Màn hình Xem chi tiết phiếu nhập kho:** Hiển thị dạng read-only
2. **Màn hình Xác nhận phiếu nhập kho:** Hiển thị với khả năng chỉnh sửa (nếu có quyền)

## 2. Yêu cầu nghiệp vụ

### Bổ sung thông tin đơn giá và thành tiền

1. Bổ sung các cột thông tin tiền cho sản phẩm bao gồm: Đơn giá, Thuế VAT (%), Thành tiền (VND), Tiền VAT (VND), Thành tiền sau VAT (VND).
2. Thông tin tổng tiền của đơn hàng bao gồm: Tổng tiền trước VAT (VND), VAT (VND), Khuyến mãi (VND), Giảm trừ (VND), Tổng tiền thanh toán (VND)

**Lưu ý:** Dữ liệu các thông tin trên lấy từ trường tương ứng của đơn hàng sell-in tương ứng với phiếu nhập kho.