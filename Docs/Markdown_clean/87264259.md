|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description |  |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# 1/ Thay đổi mặc định kho khuyến mãi khi nhập hàng

Từ yêu cầu Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fOR-4078

Hương Thủy có nhu cầu muốn mặc định kho khuyến mãi cho các dòng SP khuyến mãi, disable không điều chỉnh thông tin này.

* Khi thực hiện nhập hàng:

  + Đối với sản phẩm khuyến mãi (Không quan tâm kho tặng hàng được setup trên CTKM), hiển thị mặc định kho nhập hàng = Kho khyến mãi, disable không cho phép chỉnh sửa.
* Trường hợp kho khuyến mãi bị inactive, chỗ này sẽ hiển thị rỗng
* Khi nhấn Duyệt sẽ thực hiện kiểm tra trạng thái của kho khuyến mãi
  + Trường hợp kho khuyến mãi active: Nhập hàng theo rule nhập hàng cũ.
  + Trường hợp kho khuyến mãi inactive, hiển thị thông báo: "Kho nhận là bắt buộc!"
* Ticket phát triển: Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5629