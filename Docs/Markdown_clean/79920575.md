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

# BỔ SUNG CONFIG TRẠNG THÁI ĐƠN HÀNG CHO KPI

Bổ sung config ORDER\_STATUS\_FOR\_KPI: Cấu hình trạng thái đơn hàng cho KPI

* Ở đây sẽ liệt kê các trạng thái của đơn hàng để apply vào tính KPI

# Áp dụng config trạng thái đơn hàng cho báo cáo KPI web

* Báo cáo KPI sẽ thay đổi khi config trạng thái đơn hàng thay đổi
* Nhưng sau khi Khóa sổ chỉ tiêu thì sẽ không thay đổi nữa.

|  | Mã chỉ tiêu | Tên chỉ tiêu | Mô tả | Công thức hiện tại | Đơn Sellout thỏa hiện tại | Trạng thái đơn hàng thay đổi cho Hương Thủy |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ACTIVE\_OUTLET | Điểm bán đang hoạt động | Số lượng Điểm bán có phát sinh doanh số | Công thức: Count distinct (Điểm bán) có phát sinh doanh số. Trong đó:  Có doanh số sau VAT > 0 trong thời gian tính KPI  Đơn hàng được truy xuất để xét doanh số:  Trạng thái đơn hàng = "Đã xuất kho" Đơn không có trả hàng trong thời gian diễn ra KPI  Đơn hàng có ngày đặt hàng diễn ra trong thời gian tính KPI  Tính cả đơn trong tuyến & ngoại tuyến. | * Trạng thái đơn hàng = "Đã xuất kho" * Đơn không có trả hàng trong thời gian diễn ra KPI * Đơn hàng có ngày đặt hàng diễn ra trong thời gian tính KPI * Tính cả đơn trong tuyến & ngoại tuyến. | Trạng thái đơn hàng lấy theo config ORDER\_STATUS\_FOR\_KPI  Các điều kiện khác vẫn giữ như cũ |
| 2 | ACTIVE\_OUTLET\_PERCENTAGE | Tỷ lệ điểm bán đang hoạt động | Tỉ lệ điểm bán có phát sinh doanh số trong tuyến bán hàng | Công thức: (Active Outlet/Service Outlet)\*100% . Trong đó:   Active Outlet: Công thức tính như thực hiện KPI Điểm bán hoạt động  Service Outlet: Count distinct số điểm bán có trong tuyến thực tế của Salesman tính tới ngày cuối cùng được áp dụng phiếu giao KPI. Bao gồm điểm bán Hoạt động và Không hoạt động.   * Đơn sellout thỏa:   + Trạng thái đơn hàng = "Đã xuất kho"   + Đơn không có trả hàng trong thời gian diễn ra KPI   + Đơn hàng có **ngày đặt hàng** diễn ra trong thời gian tính KPI   + Tính cả đơn trong tuyến & ngoại tuyến. | * Trạng thái đơn hàng = "Đã xuất kho" * Đơn không có trả hàng trong thời gian diễn ra KPI * Đơn hàng có ngày đặt hàng diễn ra trong thời gian tính KPI * Tính cả đơn trong tuyến & ngoại tuyến. | Trạng thái đơn hàng lấy theo config ORDER\_STATUS\_FOR\_KPI  Các điều kiện khác vẫn giữ như cũ |
| 3 | NEW\_ORDER | Số đơn hàng | Tổng số lượng đơn hàng trong tháng không tính đơn trả | Công thức: Count (số đơn Sellout) theo key NVBH - SS - NPP   Tương tự ví dụ của Doanh thu tháng, Số đơn hàng theo cặp key NVBH - SS - NPP: | * Đơn KHÔNG ở trạng thái Hủy. * Order Date nằm trong thời gian diễn ra KPI. * Không có phiếu trả hàng đã duyệt có ngày trả hàng nằm trong thời gian KPI. * Bao gồm tất cả đơn Sellout trong tuyến và ngoài tuyến. | Trạng thái đơn hàng lấy theo config ORDER\_STATUS\_FOR\_KPI  Các điều kiện khác vẫn giữ như cũ |
| 4 | PENETRATION | % Penetration | Đo lường độ thâm nhập, bao phủ | Công thức: (Tổng số Điểm bán có mua hàng trong tháng / Tổng số điểm bán có tuyến) \* 100%  Tổng số điểm bán có tuyến: Count Distinct (Điểm bán) thuộc các tuyến thực tế của salesman theo key NVBH - NPP (GSBH được lấy từ Master Data của NVBH) Tổng số Điểm bán có mua hàng trong tháng = Count Distinct (Điểm bán trong tuyến thực tế) có tối thiểu 1 đơn sellout trong danh sách sellout được truy xuất ở trên | * Đơn KHÔNG ở trạng thái Hủy. * Order Date nằm trong thời gian diễn ra KPI. * Không có phiếu trả hàng đã duyệt có ngày trả hàng nằm trong thời gian KPI. * Bao gồm tất cả đơn Sellout trong tuyến và ngoài tuyến. | Trạng thái đơn hàng lấy theo config ORDER\_STATUS\_FOR\_KPI  Các điều kiện khác vẫn giữ như cũ |
| 5 | SKU\_ORDER | SKUs/Đơn hàng | Đo lường trung bình số lượng SKUs/ đơn hàng của từng nhân viên | Công thức= Tổng số lần xuất hiện SKU chỉ định / Tổng đơn hàng bán được   Tổng đơn hàng bán được = Số lượng đơn hàng sellout được truy xuất ở trên theo key NVBH - SS - NPP Tổng số lần xuất hiện SKU chỉ định = Số lần SKU thuộc danh sách SKU chỉ định xuất hiện trong các đơn hàng sellout được truy xuất ở trên theo cặp key NVBH - SS - NPP | * Đơn KHÔNG ở trạng thái Hủy. * Order Date nằm trong thời gian diễn ra KPI. * Không có phiếu trả hàng đã duyệt có ngày trả hàng nằm trong thời gian KPI. * Bao gồm tất cả đơn Sellout trong tuyến và ngoài tuyến. | Trạng thái đơn hàng lấy theo config ORDER\_STATUS\_FOR\_KPI  Các điều kiện khác vẫn giữ như cũ |
| 6 | DAILY\_SELL\_OUT | Doanh thu trung bình theo ngày | Chỉ tiêu doanh số bình quân hằng ngày của nhân viên bán hàng | Công thức: (Doanh số tháng/số ngày làm việc)  theo cặp key NVBH - SS - NPP   Dựa vào đơn Sellout được truy xuất ở trên, tính:  Doanh số tháng = Sum(Thành tiền sau VAT - Khuyến mãi + Giảm trừ) các đơn sellout Số ngày làm việc = Count (số ngày có phát sinh đơn sellout) | * Đơn KHÔNG ở trạng thái Hủy. * Order Date nằm trong thời gian diễn ra KPI. * Không có phiếu trả hàng đã duyệt có ngày trả hàng nằm trong thời gian KPI. * Bao gồm tất cả đơn Sellout trong tuyến và ngoài tuyến. | Trạng thái đơn hàng lấy theo config ORDER\_STATUS\_FOR\_KPI  Các điều kiện khác vẫn giữ như cũ |
| 7 | MONTHLY\_SELL\_OUT | Doanh thu tháng | Là tổng doanh số bán hàng trong kỳ NVBH cần đạt. | Công thức: Doanh thu tháng = Sum(Thành tiền sau VAT - Khuyến mãi + Giảm trừ) các đơn sellout theo cặp key NVBH - SS - NPP   Dựa vào đơn Sellout được truy xuất ở trên, tính Doanh thu theo cặp key NVBH - SS - NPP | * Đơn KHÔNG ở trạng thái Hủy. * Order Date nằm trong thời gian diễn ra KPI. * Không có phiếu trả hàng đã duyệt có ngày trả hàng nằm trong thời gian KPI. * Bao gồm tất cả đơn Sellout trong tuyến và ngoài tuyến. | Trạng thái đơn hàng lấy theo config ORDER\_STATUS\_FOR\_KPI  Các điều kiện khác vẫn giữ như cũ |

# Áp dụng config trạng thái đơn hàng cho báo cáo KPI app

* Giống với KPI Web + danh sách đơn hàng cũng hiển thị danh sách đơn hàng đúng theo trạng thái trong config
* Báo cáo KPI sẽ thay đổi khi config trạng thái đơn hàng thay đổi
* Nhưng sau khi Khóa sổ chỉ tiêu thì sẽ không thay đổi nữa.

| Mã chỉ tiêu | Tên chỉ tiêu | Mô tả | Trạng thái đơn hàng thay đổi cho Hương Thủy | Danh sách đơn hàng |
| --- | --- | --- | --- | --- |
| NEW\_ORDER | Số đơn hàng | Tổng số lượng đơn hàng trong tháng không tính đơn trả | Trạng thái đơn hàng lấy theo config ORDER\_STATUS\_FOR\_KPI  Các điều kiện khác vẫn giữ như cũ | Danh sách đơn hàng đúng theo trạng thái trong config |
| DAILY\_SELL\_OUT | Doanh thu trung bình theo ngày | Chỉ tiêu doanh số bình quân hằng ngày của nhân viên bán hàng | Trạng thái đơn hàng lấy theo config ORDER\_STATUS\_FOR\_KPI  Các điều kiện khác vẫn giữ như cũ | Danh sách đơn hàng đúng theo trạng thái trong config |
| MONTHLY\_SELL\_OUT | Doanh thu tháng | Là tổng doanh số bán hàng trong kỳ NVBH cần đạt. | Trạng thái đơn hàng lấy theo config ORDER\_STATUS\_FOR\_KPI  Các điều kiện khác vẫn giữ như cũ | Danh sách đơn hàng đúng theo trạng thái trong config |