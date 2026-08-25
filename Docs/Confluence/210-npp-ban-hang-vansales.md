none

| Target release |  |
| --- | --- |
| US | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-1845Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-1846 |
| Version | 1.0.0 |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA |  |

## **Lịch sử tài liệu**

3

## **Description**

Khi người dùng tạo đơn vansales tại app Salesman, hệ thống (NPP Portal) tự động tạo 1 đơn hàng với loại đơn là **Đơn vansales** (trạng thái ~~Đã duyệt~~ **Đã xuất kho**)và phiếu xuất kho Đơn vansales đó (trạng thái Đã duyệt). Người dùng chỉ có thể xem đơn và phiếu xuất kho trên danh sách và xem chi tiết. 

## **Requirements**

### **Xem danh sách bán hàng vansales**

| Title | UI | Description |
| --- | --- | --- |
|  |  | Màn hình danh sach đơn hàng bán bổ sung các thông tin sau:   * Tìm kiếm theo Loại đơn: {Đơn bán hàng, Đơn vansales} * Cột Loại đơn trên danh sách đơn hàng: {Đơn bán hàng, Đơn vansales} |

### Xem chi tiết đơn vansales

| Title | UI | Description |
| --- | --- | --- |
|  |  | Tại màn hình xem chi tiết đơn hàng bán, bổ sung trường Loại đơn:   * Loại đơn bao gồm: Đơn bán hàng, Đơn vansales   Trường hợp Xem chi tiết đơn vansales:   * Loại đơn = "Đơn vansales" * Kho = Kho vansales |