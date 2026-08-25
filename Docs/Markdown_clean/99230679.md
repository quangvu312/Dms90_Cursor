true

|  |  |
| --- | --- |
| Target release | Release name or number |
| US | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-2570Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-2571Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-2572Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-2573 |
| Version | trueYellow1.0.0 |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA | Lead tester |

3

**BACKLOG**

| **#** | **Phiên** **bản** | **Ngày** **cập** **nhật** | **Người** **cập** **nhật** | **Nội dung cập** **nhật** |
| --- | --- | --- | --- | --- |
| 1 | 1.0.0 |  |  | Tạo mới tài liệu |

# **Requirement**

## **Xem báo cáo KPI**

Đường dẫn: Quản lý chỉ tiêu | Báo cáo tổng hợp phân tích KPI

### Wireframe

### Bộ lọc & Tìm kiếm

| UI | Type | Bắt buộc | Mô tả |
| --- | --- | --- | --- |
| **UI Bộ Lọc & Tìm kiếm báo cáo:**Bổ sung thêm điều kiện lọc theo Chức vụ của nhân viên trong bộ KPI được chọn | | | |
|  |  |  |  |
| --- | --- | --- | --- |
| Chức vụ | Auto Completed | Có | Giá trị mặc định là Nhân viên bán hàng  Khi click vào và nhập keyword → Hệ thống popup dropdown danh sách các chức vụ của nhân viên  Chỉ được chọn một chức vụ  Hệ thống lọc danh sách nhân viên có chức vụ như giá trị đã được chọn  ~~Nếu không có chức vụ nào được chọn, hệ thống thực hiện load dữ liệu của tất cả các chức vụ trong bộ KPI~~ Nếu Chức vụI trống → Báo lỗi "Vui lòng chọn chức vụ để xem báo cáo" |

**UI Danh sách nhân viên theo bộ KPI**

* Nếu người dùng không chọn thỏa các điều kiện của UI Bộ lọc & Tìm kiếm → Hiển thị Empty Table với nội dung "Vui lòng chọn Bộ KPI để xem báo cáo"
* Nếu thỏa → Hiển thị Danh sách nhân viên theo mô tả dưới đây:

| Quy tắc lấy báo cáo |
| --- |
| 1. Quy tắc hiển thị danh sách nhân viên trong báo cáo KPI    * Hiển thị danh sách các nhân viên ứng với chức vụ được chọn tại Bộ lọc & Tìm kiếm được được giao chỉ tiêu trong Bộ KPI 2. Dựa vào thời gian diễn ra KPI, NVBH (1), Bộ lọc ở trên, lấy danh sách **Đơn Sellout & Tuyến bán hàng & Tuyến thực tế** của NVBH đó theo quy tắc:    * Đơn sellout thỏa:      + Trạng thái đơn hàng theo config [ORDER\_STATUS\_FOR\_KPI](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66525466): Cấu hình trạng thái đơn hàng cho KPI, không thay đổi theo config sau khi khoá chỉ tiêu.      + Đơn không có trả hàng trong thời gian diễn ra KPI      + Đơn hàng có **ngày đặt hàng** diễn ra trong thời gian tính KPI      + Tính cả đơn trong tuyến & ngoại tuyến.    * Danh sng & (2) → Dữ liệu sẽ được **nhóm theo cặp key N****hân viên - Quản lý - Nhà phân phối** . Từ đó dựa vào từng KPI, tính theo công thức ra được cho từng dòng **Nhân viên - Quản lý - NPP**   **Lưu ý:**   * Rules tính kết quả thực hiện không cover trường hợp Trả hàng lẻ * **By pass các trường hợp liên quan đến đổi role của nhân viên (Ví dụ: SS lên ASM, ASM xuống SS,...)** * Trường hợp nhân viên chuyển sang trực thuộc quản lý khác, thực hiện của nhân viên đó ghi nhận cho quản lý mới nhất. * Thực hiện của các cấp quản lý được tính theo công thức: Tổng thực hiện của mỗi quản lý = Tổng thực hiện của các nhân viên trực thuộc + Thực hiện của chính quản lý đó. Ví dụ:    + SS01 có các nhân viên cấp dưới gồm: SM01, SM02, SM03   + Kế hoạch Doanh số tháng của SS01 được tính dựa trên Kế hoạch của các SM là 100.000.000 VND   + Thực hiện của SM01 là 10.000.000 VND   + Thực hiện của SM02 là 15.000.000 VND   + Thực hiện của SM03 là 15.000.000 VND   + Thực hiện của SS1 là 2.500.000 VND   → Tổng thực hiện của SS1 là 10.000.000 + 15.000.000 + 15.000.000 + 2.500.000 = 42.500.000 VND → % = 42.500.000/100.000.000 x 100% = 42,50% |

**Quy tắc tính KPI cho Salesman**

| Chỉ tiêu KPI |  | Mô tả |
| --- | --- | --- |
| **Kế hoạch viếng thăm** | N/A | Công thức: Count số điểm bán có trong tuyến thực tế của Salesman   * Bao gồm tất cả các tuyến thực tế của salesman * Ngày đi tuyến phải nằm trong thời gian giao KPI * Chỉ lấy điểm bán có loại tuyến là "Trong tuyến"   Ví dụ: Giả sử nhân viên được giao KPI tháng 5.  Nhân viên SM01 có các tuyến thực tế sau:   | Mã tuyến | Tổng số điểm bán trong tuyến | Ngày đi tuyến | Số điểm bán trong ngày đi tuyến (Mã điểm bán) | | --- | --- | --- | --- | | ROUTE001 | 4 | 29-04-2025 | 2 (ST001) | | ROUTE001 | 02-05-2025 | 2 (ST003, ST004) | | ROUTE002 | 2 | 10-05-2025 | 1 (ST001) | | ROUTE002 | 12-05-2025 | 1 (ST003) |    → Dựa theo công thức, các dữ liệu được count trong Kế hoạch viếng thăm của tháng 5 là:   | Mã tuyến | Ngày đi tuyến | Số điểm bán trong ngày đi tuyến (Mã điểm bán) | | --- | --- | --- | | ROUTE001 | 02-05-2025 | 2 (ST003, ST004) | | ROUTE002 | 10-05-2025 | 1 (ST001) | | ROUTE002 | 12-05-2025 | 1 (ST003) |   → Kế hoạch viếng thăm được ghi nhận là 4. |
| **Điểm bán hoạt động** | **Kế hoạch** | Lấy theo thông tin của HO đã khai báo theo KPI: **Điểm bán hoạt động** |
| **Thực hiện** | Công thức: Count distinct (Điểm bán) có phát sinh doanh số. Trong đó:   * Có doanh số sau VAT > 0 trong thời gian tính KPI * Đơn hàng được truy xuất để xét doanh số:     + Trạng thái đơn hàng lấy theo config [ORDER\_STATUS\_FOR\_KPI](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66525466)   + Đơn không có trả hàng trong thời gian diễn ra KPI   + Đơn hàng có **ngày đặt hàng** diễn ra trong thời gian tính KPI   + Tính cả đơn trong tuyến & ngoại tuyến.   Ví dụ:  Giả sử KPI được áp dụng cho tháng 5, danh sách các điểm bán trên hệ thống ghi nhận thông tin đơn hàng như sau:   | Điểm bán | Đơn hàng | Trạng thái đơn hàng | Ngày đặt hàng | Doanh số sau V | Đơn trả hàng | | --- | --- | --- | --- | --- | --- | | Điểm bán A | SO001 | Đã xuất kho | 2/5/2025 | 0 | Không có | | Điểm bán A | SO002 | Đã xuất kho | 2/5/2025 | 2.000.000 | Không có | | Điểm bán B | SO011 | Đã xuất kho | 30/4/2025 | 12.000.000 | Không có | | Điểm bán B | SO477 | Khởi tạo | Không có | 5.000.000 | Không có | | Điểm bán C | SO874 | Đã xuất kho | 7/5/2025 | 13.000.000 | 10/5/2025 | | Điểm bán D | Không có | Không có | Không có | Không có | Không có |   → Chỉ có Điểm bán A được ghi nhận là điểm bán có phát sinh doanh số (đơn hàng được truy xuất để xét doanh số là: SO002). Suy ra, thực hiện của KPI **Điểm bán hoạt động** trong tháng 5 là 1. |
| **%** | % = Thực hiện/ Kế hoạch \* 100 → Cho phép % > 100% |
| **Tỷ lệ điểm bán hoạt động** | **Kế hoạch** | Lấy theo thông tin của HO đã khai báo theo KPI: **Tỷ lệ điểm bán hoạt động** |
| **Thực hiện** | Công thức: (Active Outlet/Service Outlet)\*100% . Trong đó:   * Active Outlet: Công thức tính như thực hiện KPI **Điểm bán hoạt động** * Service Outlet:   + Count distinct số điểm bán có trong tuyến thực tế của Salesman tính tới ngày cuối cùng được áp dụng phiếu giao KPI.   + Bao gồm điểm bán Hoạt động và Không hoạt động. |
| **%** | % = Thực hiện/ Kế hoạch \* 100 → Cho phép % > 100% |
| Khi kết thúc danh sách record của 1 NVBH - SS - NPP , có 1 dòng Sum lại theo NVBH    * Để trống các cột Đơn vị Kinh doanh, Vùng bán hàng, Khu vực bán hàng, Tỉnh thành, Mã NPP, Tên NPP, Mã giám sát, Tên giám sát và merge row lại | | |
| **Kế hoạch viếng thăm** | Sum các record của nhân viên trên | |
| **Điểm bán hoạt động** | Kế hoạch | Lấy theo thông tin của HO đã khai báo theo KPI: **Điểm bán hoạt động** |
| Thực hiện | Sum cột**Thực hiện** ở các record của nhân viên trên |
| % | % = Thực hiện/ Kế hoạch \* 100 → Cho phép % > 100% |
| **Tỷ lệ điểm bán hoạt động** | Kế hoạch | Lấy theo thông tin của HO đã khai báo theo KPI: **Tỷ lệ điểm bán hoạt động** |
| Thực hiện | Sum cột**Thực hiện** ở các record của nhân viên trên |
| % | % = Thực hiện/ Kế hoạch \* 100 → Cho phép % > 100% |

**Báo cáo mẫu**

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **STT** | **...** | **Mã Nhà phân phối** | **Tên Nhà phân phối** | **Mã quản lí** | **Tên quản lí** | **Mã nhân viên** | **Tên nhân viên** | **Kế hoạch viếng thăm** | **Điểm bán hoạt động** | | | **Tỷ lệ Điểm bán hoạt động** | | |
| **Thực hiện** | **Kế hoạch** | **%** | **Thực hiện** | **Kế hoạch** | **%** |
| 1 |  | NPP01 | Công ty A | SS01 | Lê Văn Cường | SM02 | Nguyễn Văn Em | 12 | 6 | 15 | 40% | 60% | 84% | 71,43% |
| 2 |  | NPP02 | Công ty B | SS01 | Lê Văn Cường | SM02 | Nguyễn Văn Em | 22 | 8 | 15 | 53,33% | 50% | 84% | 59,52% |
|  | | | | | | **SM02** | **Nguyễn Văn Em** | **34** | **14** | **15** | **93,33%** | **110%** | **84%** | **130,95%** |
| 3 |  | NPP01 | Công ty A | SS01 | Lê Văn Cường | SM01 | Phạm Thị Duyên | 12 | 5 | 10 | 50% | 20% | 85% | 23,53% |
| 4 |  | NPP02 | Công ty B | SS01 | Lê Văn Cường | SM01 | Phạm Thị Duyên | 24 | 4 | 10 | 40% | 30% | 85% | 35,29% |
|  | | | | | | **SM01** | **Phạm Thị Duyên** | **36** | **9** | **10** | **90%** | **50%** | **85%** | **58,82%** |

Ví du:  Giả sử Thực hiện các KPI của SS01 - Lê Văn Cường như sau:

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| **Mã Nhà phân phối** | **Tên Nhà phân phối** | **Mã nhân viên** | **Tên nhân viên** | **Kế hoạch viếng thăm** | **Điểm bán hoạt động** | **Tỷ lệ Điểm bán hoạt động** |
| NPP01 | Công ty A | SS01 | Lê Văn Cường | 5 | 3 | 10% |
| NPP02 | Công ty B | SS01 | Lê Văn Cường | 7 | 5 | 15% |

→ Theo quy tắc tính thực hiện cho cấp quản lý và dữ liệu sẽ được **nhóm theo cặp key N****hân viên - Quản lý - Nhà phân phối**, ta có kết quả báo cáo KPI của SS01 - Lê Văn Cường như sau:

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **STT** | **...** | **Mã Nhà phân phối** | **Tên Nhà phân phối** | **Mã quản lí** | **Tên quản lí** | **Mã nhân viên** | **Tên nhân viên** | **Kế hoạch viếng thăm** | **Điểm bán hoạt động** | | | **Tỷ lệ Điểm bán hoạt động** | | |
| **Thực hiện** | **Kế hoạch** | **%** | **Thực hiện** | **Kế hoạch** | **%** |
| 1 |  | NPP01 | Công ty A | ASM01 | Nguyễn Văn Nguyên | SS01 | Lê Văn Cường | 29 (12+12+5) | 14 (6+5+3) | 25 (15+10) | 56% | 90% (60% + 20% + 10%) | 169% (84% + 85%) | 53,25% |
| 2 |  | NPP02 | Công ty B | ASM01 | Nguyễn Văn Nguyên | SS01 | Lê Văn Cường | 53 (22+24+7) | 17 (8+4+5) | 25 (15+10) | 68% | 95% (50% + 30% + 15%) | 169% (84% + 85%) | 56,21% |
|  | | | | | | **SS01** | **Lê Văn Cường** | **82 (29+53)** | **31 (14+17)** | **25 (15+10)** | **124%** | **185% (90% + 95%)** | **169% (84% + 85%)** | **109,47%** |

## **Xuất báo cáo KPI**

| UI | Type | Mô tả |
| --- | --- | --- |
| Export excel | Button | Template export báo cáo bổ sung các cột chỉ tiêu: Điểm bán hoạt động và Tỷ lệ điểm bán hoạt động, Kế hoạch viếng thăm  Template Excel: <https://docs.google.com/spreadsheets/d/1te3SX9ME4wfZfzyKlHdz0Vy8t5V-63NB/edit?usp=drive_link&ouid=106646539584081727110&rtpof=true&sd=true>  Mô tả column của Export Excel được mô tả như Xem báo cáo KPI |

## **Khoá sổ chỉ tiêu**

### Logic xử lý nghiệp vụ

* Người dùng có quyền (ví dụ: Giám đốc vùng hoặc Quản lý KPI) thực hiện thao tác "Khoá sổ chỉ tiêu" cho một báo cáo KPI.
* Hệ thống ghi lại **mốc thời gian chốt** và **người thực hiện chốt**.
* Sau khi chốt:

  + Hệ thống **khóa ghi nhận dữ liệu mới** vào KPI kỳ đã chốt (bao gồm doanh số, đơn hàng, viếng thăm, trưng bày…).
  + Các dữ liệu phát sinh sau thời điểm chốt sẽ **không được tính vào thực hiện KPI** của báo cáo đó.

Wireframe

| Title | UI | Description |
| --- | --- | --- |
|  |  | Tại màn hình Báo cáo chỉ tiêu, bổ sung thêm nút "Khoá sổ chỉ tiêu".   * Chỉ hiển thị khi báo cáo chưa được chốt * Bấm vào nút **“Khóa sổ chỉ tiêu”**, h**ệ thống hiển thị** popup xác nhận**:** *"Sau khi chốt, dữ liệu phát sinh mới sẽ không được tính vào thực hiện.Bạn có chắc muốn khoá sổ báo cáo này?"*    + Nếu đồng ý: Hệ thống thực hiện khoá sổ chỉ tiêu này   + Nếu không: Không thực hiện khoá sổ   Sau khi khoá sổ chỉ tiêu thành công, báo cáo hiển thị:   * Trạng thái "Đã khóa sổ" * Tooltip: *"Báo cáo này đã được chốt vào lúc [mm-dd-yyyy hh:mm:ss] bởi [username người khoá sổ chỉ tiêu]. Dữ liệu sau thời điểm này sẽ không được tính vào thực hiện."* |