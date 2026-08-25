none

| Target release |  |
| --- | --- |
| US | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-1723Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-2554Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-2566 |
| Version | 1.0.0 |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA |  |

## **Lịch sử tài liệu**

3

**Backlog**

| **#** | **Phiên** **bản** | **Ngày** **cập** **nhật** | **Người** **cập** **nhật** | **Nội dung cập** **nhật** |
| --- | --- | --- | --- | --- |
| 1 | 1.0.0 |  | nhi.pham | Tạo mới tài liệu |
| 2 | 1.1.0 | 6/5/2025 | nhi.pham | Bổ sung các chỉ tiêu mới bao gồm: Điểm bán đang hoạt động, Tỷ lệ điểm bán đang hoạt động  Bổ sung tính năng Thiết lập kế hoạch trong ngày |

## **Description**

## **Requirements**

### Xem danh sách chỉ tiêu KPI

| Title | UI | Description |
| --- | --- | --- |
|  |  | 1. Đường dẫn: Quản lý chỉ tiêu → Chỉ tiêu KPI 2. Mô tả   Màn hình Chỉ tiêu KPI bao gồm:   * Mã chỉ tiêu * Tên chỉ tiêu * Mô tả * Đối tượng áp dụng * Độ đo * Phân trang theo 10; 50; 100 |

| STT | Tên KPI | Mã KPI | Mô tả | Đối tượng | Độ đo |
| --- | --- | --- | --- | --- | --- |
| 1 | Điểm bán đang hoạt động | ACTIVE\_OUTLET | Số lượng Điểm bán có phát sinh doanh số | Salesman, Sales Supervisor, Areas Sales Manager, Region Sales Manager | Đếm |
| 2 | Tỷ lệ điểm bán đang hoạt động | ACTIVE\_OUTLET\_PERCENTAGE | Tỉ lệ điểm bán có phát sinh doanh số trong tuyến bán hàng | Salesman, Sales Supervisor, Areas Sales Manager, Region Sales Manager | Phần trăm |

### Thiết lập kế hoạch trong ngày

| Title | UI | Description |
| --- | --- | --- |
|  |  | Hệ thống cho phép người dùng thiết lập timegone cho từng chỉ tiêu KPI trong danh sách chỉ tiêu. Khi bật thiết lập này, app SM và app Manager sẽ hiển thị timegone (xem cách tính timegone [**tại đây**](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53047110#:~:text=K%E1%BA%BF%20ho%E1%BA%A1ch%20trong%20ng%C3%A0y%20%2B%20ch%E1%BB%89%20ti%C3%AAu%20c%E1%BA%A7n%20%C4%91%E1%BA%A1t%20theo%20timegold.%20C%C3%B4ng%20th%E1%BB%A9c%20t%C3%ADnh%20timegold%20nh%C6%B0%20sau%3A)). timegone hiển thị cho nhân viên biêt nhân viên đó cần phải thực hiện mỗi ngày bao nhiêu để hoàn thành KPI trong khoảng thời gian còn lại.   * Tại danh sách chỉ tiêu KPI, người dùng có thể chọn bật “Thiết lập kế hoạch trong ngày” đối với từng chỉ tiêu KPI. * Khi thiết lập này được bật: App SM và Manager hiển thị timegone cho nhân viên bán hàng và các cấp quản lý. |