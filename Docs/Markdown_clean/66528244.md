|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Chức năng này cung cấp một giao diện quản lý tập trung cho tất cả các hóa đơn điện tử được tạo ra trong hệ thống. Người dùng Admin HO/ Admin NPP có thể tìm kiếm, lọc, xem trạng thái, và thực hiện các thao tác nghiệp vụ như phát hành hàng loạt, hủy, điều chỉnh các hóa đơn nháp, và xuất dữ liệu ra file Excel. |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Màn hình Quản lý hóa đơn điện tử

## Chức năng tìm kiếm

| Tên Trường | Loại Dữ Liệu | Chỉnh Sửa? | Bắt Buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| Tìm kiếm theo | | | | |
| Tìm kiếm | Text input | Có | Không | **Chức năng:** Cho phép người dùng nhập Mã đơn hàng, Số hóa đơn, Ký hiệu HĐ để tìm kiếm chính xác hoặc tương đối.   * Tooltip: Tìm kiếm theo Mã đơn hàng, Số hóa đơn, Ký hiệu hóa đơn * Placeholder: Tìm kiếm theo Mã đơn hàng, Số hóa đơn, Ký hiệu hóa đơn * Search: Tìm kiếm theo các từ khóa nhập vào. Tìm kiếm không phân biệt chữ hoa/thường.   **Kết quả lọc:**   * Khi user nhập thông tin vào ô text --> Nhấn Tìm Kiếm --> Lưới danh sách sẽ lọc các mã đơn hàng/ Số hóa đơn/ Ký hiệu hóa đơn có thông tin được nhập trong ô này. Hiển thị danh sách các hóa đơn có phù hợp. * Nếu không có bản ghi nào phù hợp, danh sách kết quả trả về rỗng. |
| Trạng thái | Selectbox multichoice | Có | Không | Danh sách các trạng thái hóa đơn  **Mở danh sách:**   * Khi người dùng nhấp vào trường "Trạng thái", hệ thống hiển thị danh sách tất cả trạng thái hóa đơn    + 1/ Khởi tạo   + 2/ Đã phát hành   + 3/ Đã hủy * Mặc định khi mở màn hình, **không có trạng thái nào được chọn.** * Placeholder: Chọn trạng thái   **Tìm kiếm và chọn:**   * Người dùng có thể gõ từ khóa để lọc nhanh theo tên trạng thái. * Chọn một hoặc nhiều trạng thái để lọc * Trường hợp không có trạng thái phù hợp với từ khóa, hệ thống hiển thị nội dung trống trên lưới danh sách hóa đơn điện tử   **Hiển thị lựa chọn:**   * Trạng thái đã chọn sẽ hiển thị trong hộp chọn dưới dạng nhãn (tags). * Khi **bỏ chọn hoặc nhấn x trên thẻ tag**, hiểu là người dùng **muốn bỏ lọc trạng thái.**   **Xóa lựa chọn:**   * Người dùng có thể nhấp vào biểu tượng xóa trên các nhãn (tag) hoặc chọn lại trong danh sách   **Kết quả lọc:**   * Thông tin các hóa đơn điện tử có trạng thái đã chọn sẽ hiển thị trên lưới danh sách * Kết hợp các điều kiện lọc khác theo điều kiện "Và"   + ví dụ trạng thái "Khởi tạo"; Ngày hóa đơn "Từ ngày: 01-06-2025 → Đến ngày: 06-06-2025"   + **Kết quả lọc** sẽ là tất cả hóa đơn thoả mãn **cả hai điều kiện** sau cùng lúc:      - Hóa đơn có trạng thái là **"Khởi tạo"**     - **Và** ngày tạo hóa đơn nằm trong đoạn từ 01-06-2025 đến 06-06-2025 |
| Trạng thái ký số | Selectbox onechoice | Có | Không | Danh sách các trạng thái ký số  **Mở danh sách:**   * Khi người dùng nhấp vào trường "Trạng thái ký số", hệ thống hiển thị danh sách tất cả trạng thái ký số Thành công/ Thất bại    + 1/ Thất bại   + 2/ Thành công * Mặc định khi mở màn hình, **không có trạng thái nào được chọn.** * Placeholder: Chọn trạng thái ký số   **Tìm kiếm và chọn:**   * Người dùng có thể gõ từ khóa để lọc nhanh theo tên trạng thái. * Chỉ chọn một trạng thái để lọc * Trường hợp không có trạng thái phù hợp với từ khóa, hệ thống hiển thị nội dung trống trên lưới danh sách hóa đơn điện tử   **Hiển thị lựa chọn:**   * Trạng thái đã chọn sẽ hiển thị trong hộp chọn dưới dạng nhãn (tag). * Khi **bỏ chọn hoặc nhấn x trên thẻ tag**, hiểu là người dùng **muốn lọc tất cả trạng thái.**   **Xóa lựa chọn:**   * Người dùng có thể nhấp vào biểu tượng xóa trên các nhãn (tag) hoặc chọn lại trong danh sách   **Kết quả lọc:**   * Thông tin các hóa đơn điện tủ có trạng thái ký số đã chọn sẽ hiển thị trên lưới danh sách * Kết hợp các điều kiện lọc khác theo điều kiện "Và"   + ví dụ trạng thái ký số= "Thất bại"; Ngày tạo hóa đơn "Từ ngày: 01-06-2025 → Đến ngày: 06-06-2025"   + **Kết quả lọc** sẽ là tất cả hóa đơn thoả mãn **cả hai điều kiện** sau cùng lúc:      - Hóa đơn có trạng thái ký số là **"Thất bại"**     - **Và** ngày tạo hóa đơn nằm trong đoạn từ 01-06-2025 đến 06-06-2025 |
| Ngày tạo hóa đơn | Date | Có | Không | Ngày hóa đơn: Từ ngày → Đến ngày  Mô tả: Trường lọc cho phép người dùng chọn khoảng thời gian để tìm các hóa đơn điện tử theo ngày tạo hóa đơn.   * Thành phần giao diện: Gồm hai ô nhập liệu:  * + Từ ngày: Chọn ngày bắt đầu của khoảng thời gian lọc   + Đến ngày: Chọn ngày kết thúc của khoảng thời gian lọc   + Mỗi ô sử dụng Date Picker để người dùng dễ dàng chọn ngày. * Giá trị mặc định: Khi mở màn hình lần đầu cả hai trường Từ ngày và Đến ngày hiển thị 7 ngày quá khứ kể từ ngày hiện tại.   + Ví dụ ngày hiện tại là N → Đến ngày = N; Từ ngày = N-6  * Placeholder:    + Từ ngày (dd-MM-yyyy)   + Đến ngày (dd-MM-yyyy)  * Quy tắc nhập/chọn: Người dùng có thể:  * + Gõ trực tiếp ngày theo định dạng dd-MM-yyyy   + Hoặc chọn từ bảng lịch (Date Picker)   + Bắt buộc phải nhập đủ cả hai: Hệ thống lọc theo khoảng thời gian từ Từ ngày đến Đến ngày * Kết quả lọc:   + Hệ thống lọc danh sách hóa đơn điện tử có ngày tạo hóa đơn thỏa mãn điều kiện trong khoảng thời gian đã chọn   + Kết hợp với điều kiện khác: Điều kiện lọc Ngày hóa đơn sẽ kết hợp với các điều kiện khác (ví dụ: Trạng thái, Mã đơn hàng...) theo logic "VÀ"     - ví dụ trạng thái "Khởi tạo"; Ngày hóa đơn "Từ ngày: 01-06-2025 → Đến ngày: 06-06-2025"     - **Kết quả lọc** sẽ là tất cả hóa đơn thoả mãn **cả hai điều kiện** sau cùng lúc:        * Hóa đơn có trạng thái là **"Khởi tạo"**       * **Và** ngày tạo hóa đơn nằm trong Đoạn từ 01-06-2025 đến 06-06-2025 * Cho phép chọn x để xóa ngày đã chọn |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Ngày xuất hóa đơn | Date | Có | Không | Ngày hóa đơn: Từ ngày → Đến ngày  Mô tả: Trường lọc cho phép người dùng chọn khoảng thời gian để tìm các hóa đơn điện tử theo ngày tạo hóa đơn.   * Thành phần giao diện: Gồm hai ô nhập liệu:  * + Từ ngày: Chọn ngày bắt đầu của khoảng thời gian lọc   + Đến ngày: Chọn ngày kết thúc của khoảng thời gian lọc   + Mỗi ô sử dụng Date Picker để người dùng dễ dàng chọn ngày. * Giá trị mặc định: Khi mở màn hình lần đầu cả hai trường Từ ngày và Đến ngày đều để trống (không áp dụng lọc theo ngày).  * Placeholder:    + Từ ngày (dd-MM-yyyy)   + Đến ngày (dd-MM-yyyy)  * Quy tắc nhập/chọn: Người dùng có thể:  * + Gõ trực tiếp ngày theo định dạng dd-MM-yyyy   + Hoặc chọn từ bảng lịch (Date Picker)   + Bắt buộc phải nhập đủ cả hai: Hệ thống lọc theo khoảng thời gian từ Từ ngày đến Đến ngày * Kết quả lọc:   + Hệ thống lọc danh sách hóa đơn điện tử có ngày tạo hóa đơn thỏa mãn điều kiện trong khoảng thời gian đã chọn   + Kết hợp với điều kiện khác: Điều kiện lọc Ngày xuất hóa đơn sẽ kết hợp với các điều kiện khác (ví dụ: Trạng thái, Mã đơn hàng...) theo logic "VÀ"     - ví dụ trạng thái "**Đã phát hành**"; Ngày xuất hóa đơn "Từ ngày: 01-06-2025 → Đến ngày: 06-06-2025"     - **Kết quả lọc** sẽ là tất cả hóa đơn thoả mãn **cả hai điều kiện** sau cùng lúc:        * Hóa đơn có trạng thái là **"Đã phát hành"**       * **Và** ngày xuất hóa đơn nằm trong Đoạn từ 01-06-2025 đến 06-06-2025 * Cho phép chọn x để xóa ngày đã chọn |
| Tìm kiếm | Button | Có | Không | * Mô tả: Nút thực thi hành động lọc dữ liệu hóa đơn trên lưới danh sách dựa trên các điều kiện người dùng đã chọn/nhập.  * Vị trí: Nằm ở góc dưới bên phải nhóm các điều kiện lọc (hoặc hàng ngang cùng với nút "Làm mới").  * Hành vi: Khi người dùng nhấn "Tìm kiếm", hệ thống thực hiện:  * + Thu thập tất cả giá trị từ các trường lọc: Tìm kiếm, Trạng thái, Từ ngày, Đến ngày   + Kiểm tra tính hợp lệ của các trường ngày hóa đơn   + Hiển thị kết quả danh sách hóa đơn trên lưới theo đúng các điều kiện lọc * Trạng thái: Luôn hiển thị (kể cả khi chưa nhập gì)   + Nếu không nhập bất kỳ dữ liệu nào và nhấn button Tìm kiếm     - Hiển thị kết quả lọc theo bộ lọc mặc định   + **Luôn Orderby hiển thị danh sách theo ngày tạo hóa đơn giảm dần (gần hiện tại nhất)** |
| Làm mới | Button | Có | Không | **Chức năng:**   * Nút "Làm mới" cho phép người dùng tải lại danh sách, xóa mọi bộ lọc và kết quả tìm kiếm hiện tại, đồng thời trả về trạng thái ban đầu của danh sách. * Nút này hữu ích khi người dùng muốn bắt đầu một phiên tìm kiếm mới hoặc khi cần làm mới dữ liệu để đảm bảo rằng các dữ liệu tìm kiếm mới nhất được hiển thị.   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả các bộ lọc, tìm kiếm, và làm mới dữ liệu trên danh sách 2. **Danh sách làm mới:** Sau khi nhấp, danh sách mới nhất sẽ hiển thị theo bộ lọc mặc định.   **Lưu ý:**   * Việc làm mới không thay đổi dữ liệu gốc mà chỉ cập nhật giao diện hiển thị của danh sách * Người dùng cần lưu ý rằng tất cả các bộ lọc hoặc tìm kiếm đã thiết lập sẽ bị xóa khi nút này được nhấn. |

## Lưới danh sách hóa đơn điện tử

| STT | Tên Trường | Loại dữ liệu | Mô tả chi tiết |
| --- | --- | --- | --- |
| (Checkbox) | Checkbox |  | Cho phép check all trên page đang chọn  Cho phép chọn một hoặc nhiều dòng để thực hiện thao tác hàng loạt (chỉ hiển thị checked cho các hóa đơn có trạng thái Khởi tạo). |
| 1 | **Mã đơn hàng** | Datacolumn have copy | Mã đơn hàng bán tạo hóa đơn điện tử |
| 2 | **Số hóa đơn** | Datacolumn have copy | Số của hóa đơn lưu theo mã đơn hàng |
| 3 | **Ký hiệu HĐ** | Datacolumn have copy | Ký hiệu của hóa đơn đã lưu |
| 4 | **Ngày xuất hóa đơn** | Datacolumn | Ngày giờ hóa đơn được phát hành chính thức (ký số thành công). Chỉ hiển thị giá trị khi trạng thái là **Đã phát hành**. Định dạng: dd/mm/yyyy hh:mm:ss. |
| 5 | **Tổng tiền thanh toán VNĐ** | Datacolumn | Tổng giá trị cuối cùng của hóa đơn. Định dạng số, có phân cách hàng nghìn. |
| 6 | **Trạng thái** | Datacolumn (Tag) | Trạng thái hiện tại của hóa đơn. Hiển thị dưới dạng tag màu để dễ phân biệt:   * **Khởi tạo** (Màu xanh dương) * **Đã phát hành** (Màu xanh lá) * **Đã hủy** (Màu đỏ) |
| 7 | **Trạng thái ký số** | Datacolumn (Tag) | Trạng thái ký số của hóa đơn. Hiển thị dưới dạng tag màu để dễ phân biệt:   * **R****ỗng: Khi trạng thái của hóa đơn = Khởi tạo, chưa thực hiện thao tác phát hành hóa đơn điện tử** * **Thành công** (Màu xanh dương) khi thực hiện phát hành hóa đơn điện tử thành công * **Thất bại** (Màu đỏ) khi thực hiện phát hành hóa đơn điện tử thất bại |
| 8 | **Ngày tạo** | Datacolumn | Ngày giờ hóa đơn được tạo trong hệ thống DMS. |
| 9 | **Người tạo** | Datacolumn | Tên người dùng đã tạo hóa đơn. |
| 10 | **Ngày cập nhật** | Datacolumn | Ngày giờ cập nhật trạng thái gần nhất.  Trường hợp Hủy phiếu xuất kho → những hóa đơn chưa phát hành sẽ tự động chuyển thành Đã hủy, ghi nhận người cập nhật, ngày cập nhật Hủy hóa đơn |
| 11 | **Người cập nhật** | Datacolumn | Tên người dùng đã thực hiện cập nhật gần nhất.  Trường hợp Hủy phiếu xuất kho → những hóa đơn chưa phát hành sẽ tự động chuyển thành Đã hủy, ghi nhận người cập nhật, ngày cập nhật Hủy hóa đơn |
| 12 | **Tùy chỉnh** | Actions | Cột chứa các icon chức năng, hiển thị tùy theo trạng thái của hóa đơn. **Phát hành hóa đơn đơn lẻ (Trạng thái Khởi tạo)**   * **Điều kiện:** Chức năng chỉ áp dụng cho các hóa đơn có trạng thái **Khởi tạo**. * **Cách thực hiện:**    + **Đơn lẻ:** Nhấn vào icon "Phát hành" trong cột "Tùy chỉnh".   + Hiển thị confirm: Bạn chắc chắn muốn phát hành hoá đơn cho đơn hàng [Mã đơn hàng] đã chọn ? Đồng ý/ Hủy   + Phát hành hóa đơn  **Hủy hóa đơn (Trạng thái Khởi tạo)**   * **Điều kiện:** Chức năng chỉ áp dụng cho các hóa đơn có trạng thái **Khởi tạo**. * **Cách thực hiện:** Nhấn vào icon "Xóa" trong cột "Tùy chỉnh".  1. **Người dùng** nhấn icon "Xóa". 2. **Hệ thống** hiển thị popup xác nhận: "Hóa đơn này sẽ bị hủy và không thể khôi phục. Bạn có chắc chắn?". Đồng ý/ Hủy 3. Nếu người dùng xác nhận, hệ thống gọi API hủy hóa đơn nháp của HĐĐT: <https://be-docs-test-api.finviet.com.vn:6868/eco-invoice/api/invoices/cancel-waiting-sign> 4. **Xử lý kết quả:**     * **Thành công:** Thông báo cho người dùng: "Đã hủy hóa đơn thành công.". Cập nhật trạng thái hóa đơn trên DMS thành **Đã hủy**.    * **Thất bại:** Hiển thị thông báo lỗi,       + Msg khi trạng thái hóa đơn không phải Khởi tạo: "Trạng thái hóa đơn không phải Khởi tạo. Vui lòng kiếm tra lại!" Đồng ý: tắt popup và reload màn hình  **Điều chỉnh hóa đơn (Trạng thái Khởi tạo)**   * **Điều kiện:** Chức năng chỉ áp dụng cho các hóa đơn có trạng thái **Khởi tạo**. * **Cách thực hiện:** Nhấn vào icon "Điều chỉnh" trong cột "Tùy chỉnh". * **Quy trình:**    1. Người dùng nhấn icon "Điều chỉnh".   2. Hệ thống **điều hướng (redirect)** người dùng đến màn hình **"Chỉnh sửa đơn hàng"** của đơn hàng gốc tương ứng.   3. Tại màn hình này, người dùng có thể chỉnh sửa các thông tin trong khung "Thông tin xuất hóa đơn" (xem chi tiết).   4. Khi người dùng Lưu lại đơn hàng, các thông tin mới sẽ được cập nhật cho hóa đơn ở trạng thái Khởi tạo.  **Xem chi tiết hóa đơn**   * **Điều kiện:** Áp dụng cho tất cả các trạng thái. * **Cách thực hiện:** Nhấn vào icon "Xem"  trong cột "Tùy chỉnh". * **Quy trình:**    1. Người dùng nhấn icon "Xem".   2. Hiển thị tooltip "Xem hóa đơn điện tử". Hiển thị toàn bộ thông tin chi tiết của hóa đơn **đã được lưu trên DMS.**  **Và được tải hóa đơn đang xem về thiết bị** |
| 13 |  | Button | **Phát hành hóa đơn hàng loạt**  * **Điều kiện:**     + Chức năng chỉ áp dụng cho các hóa đơn có trạng thái **Khởi tạo**.   + Mặc định: Disable; Enable khi có chọn từ 1 hóa đơn có trạng thái Khởi tạo * **Cách thực hiện:**    + **Hàng loạt:** Check chọn một hoặc nhiều hóa đơn, sau đó nhấn nút **"Phát hành hóa đơn"** ở phía trên lưới danh sách.   + Hiển thị confirm trước khi phát hành hàng loạt: Bạn có chắc chắn muốn phát hành [X] hóa đơn đã chọn? Đồng ý/ Hủy   + Phát hành hóa đơn |
| 14 |  | Button | **Export danh sách hóa đơn**  * **Cách thực hiện:** Nhấn vào nút **"Export hóa đơn"**. * **Quy trình:**    1. Người dùng nhấn nút.   2. Hệ thống lấy toàn bộ danh sách hóa đơn **đang được hiển thị trên lưới** (dữ liệu đã được lọc theo tiêu chí tìm kiếm của người dùng).   3. Tạo một file Excel và cho phép người dùng tải về. File Excel sẽ chứa tất cả các cột thông tin có trên lưới danh sách.     Tên báo cáo: Export\_InvoiceVAT\_yyyymmddhh24miss.xlsx, với:   * + yyyy: năm xuất báo cáo   + mm: tháng xuất báo cáo   + dd: ngày xuất báo cáo   + h24: giờ xuất báo cáo, theo 24 giờ   + mi: phút xuất báo cáo   + ss: giây xuất báo cáo  | Tên cột | Mô tả | | --- | --- | | **Mã đơn hàng** | Mã đơn hàng bán tạo hóa đơn điện tử | | **Số hóa đơn** | Số của hóa đơn lưu theo mã đơn hàng | | **Ký hiệu HĐ** | Ký hiệu của hóa đơn đã lưu | | **Ngày xuất hóa đơn** | Ngày giờ hóa đơn được phát hành chính thức (ký số thành công). Chỉ hiển thị giá trị khi trạng thái là **Đã phát hành**. Định dạng: dd/mm/yyyy hh:mm:ss. | | **Tổng tiền thanh toán VNĐ** | Tổng giá trị cuối cùng của hóa đơn. Định dạng số, có phân cách hàng nghìn. | | **Trạng thái** | Trạng thái hiện tại của hóa đơn | | **Ngày tạo** | Ngày giờ hóa đơn được tạo trong hệ thống DMS. | | **Người tạo** | Tên người dùng đã tạo hóa đơn. | | **Ngày cập nhật** | Ngày giờ cập nhật trạng thái gần nhất.  Trường hợp Hủy phiếu xuất kho → những hóa đơn chưa phát hành sẽ tự động chuyển thành Đã hủy, ghi nhận người cập nhật, ngày cập nhật Hủy hóa đơn | | **Người cập nhật** | Tên người dùng đã thực hiện cập nhật gần nhất.  Trường hợp Hủy phiếu xuất kho → những hóa đơn chưa phát hành sẽ tự động chuyển thành Đã hủy, ghi nhận người cập nhật, ngày cập nhật Hủy hóa đơn | |
| 15 |  | Button | Luôn hiển thị button để Tạo hóa đơn, Chi tiết |

## **Phát hành hóa đơn**

Phát hành hóa đơn

Khi nhấn button Phát hành hóa đơn hệ thống thực hiện kiểm tra và xử lý:

Kiểm tra trường hợp **Phát hành hóa đơn hàng loạt:**

**Hiển thị popup "Xác nhận phát hành hóa đơn" với nội dung "Bạn có chắc chắn muốn phát hành [X] hóa đơn đã chọn? Đồng ý/ Hủy.**

**Chọn Đồng ý:**

* Nếu bên bán (NPP) không có cấu hình liên kết HDDT; trạng thái = OFF → msg: 'Không thể phát hành hóa đơn cho đơn hàng [Mã ĐH], [Mã ĐH], [Mã ĐH]. Nhà phân phối chưa kích hoạt dịch vụ Hóa đơn điện tử.' Không gọi API phát hành hóa đơn
* Kiểm tra lại lần cuối xem trạng thái đơn hàng có chính xác là Đã xuất kho/ Đã giao hàng hay không (**Trạng thái đơn hàng đã thay đổi** không còn là "Đã xuất kho"/ "Đã giao hàng" - ví dụ: Khởi tạo/ Đã duyệt/ Đã hủy) 
  + Nếu KHÔNG: msg "'Không thể phát hành hóa đơn cho đơn hàng [Mã ĐH], [Mã ĐH], [Mã ĐH]. Trạng thái đơn hàng khác Đã xuất kho hoặc Đã giao hàng". Không gọi API phát hành hóa đơn

--

Kiểm tra trường hợp **Phát hành hóa đơn lẻ:**

**Hiển thị popup: Bạn chắc chắn muốn phát hành hoá đơn cho đơn hàng [Mã đơn hàng] đã chọn ? Đồng ý/ Hủy**

**Chọn Đồng ý:**

* Nếu bên bán (NPP) không có cấu hình liên kết HDDT; trạng thái = OFF → msg: 'Không thể phát hành hóa đơn cho đơn hàng [Mã ĐH] do Nhà phân phối chưa kích hoạt dịch vụ Hóa đơn điện tử.' Không gọi API phát hành hóa đơn
* Kiểm tra lại lần cuối xem trạng thái đơn hàng có chính xác là Đã xuất kho hay không (**Trạng thái đơn hàng đã thay đổi** (không còn là "Đã xuất kho"/ "Đã giao hàng" - ví dụ: Khởi tạo/ Đã duyệt/ Đã hủy) 
  + Nếu KHÔNG: msg "'Không thể phát hành hóa đơn cho đơn hàng [Mã ĐH]. Trạng thái đơn hàng khác Đã xuất kho hoặc Đã giao hàng". Không gọi API phát hành hóa đơn
* Kiểm tra trạng thái hóa đơn = Khởi tạo hay không?
  + Không:  'Không thể phát hành hóa đơn cho đơn hàng [Mã ĐH], [Mã ĐH], [Mã ĐH]. Trạng thái hóa đơn không phải Khởi tạo." Không gọi API phát hành hóa đơn

---

**Hệ thống thực hiện xử lý:**

* Thực hiện gọi API phát hành hóa đơn theo quy trình ký số (API: <https://be-docs-test-api.finviet.com.vn:6868/eco-invoice/api/invoices/release-invoice>),
* + nếu có hóa đơn ký số thất bại thì hệ thống sẽ đánh dấu hóa đơn đó lại. Sau khi hoàn thành, thì màn hình trả ra kết quả ký số như hình .Với các thông tin gồm:

* + Label:  "Thành công:**<Tổng số lượng hóa đơn ký số thành công>**" => Thành công: **1**
  + Label: "Thất bại: **<Tổng số lượng hóa đơn ký số thất bại>" =>** Thất bại: **1**

* + Danh sách: Phân trang hiển thị với các thông tin gồm:
    - STT
    - Số hóa đơn
    - Ký hiệu HĐ
    - Mã đơn hàng
    - Ngày xuất hóa đơn
    - Trạng thái ký số: 
      * Nếu thành công: hiển thị Thành công
      * Nếu thất bại:  hiển thị Thất bại
    - Lý do thất bại: hiển thị lý do ký số thất bại từ hệ thống HDDT.
    - Hiển thị highlight đỏ với dòng Thất bại
  + : Khi nhấn vào thực hiện xuất dữ liệu theo kết quả trên lưới danh sách. với mẫu file format: ExportResultVAT\_yyyymmddhh24miss.xlsx
    - yyyy: năm xuất báo cáo
    - mm: tháng xuất báo cáo
    - dd: ngày xuất báo cáo
    - h24: giờ xuất báo cáo, theo 24 giờ
    - mi: phút xuất báo cáo
    - ss: giây xuất báo cáo
  + Chọn dấu x để tắt màn hình
    - Hệ thống DMS90 nhận và lưu 
      * Hóa đơn thành công lưu trạng thái **Đã phát hành**, Trạng thái ký số = **Thành công** **. Lưu hóa đơn đã phát hành thành công** theo url hóa đơn <https://be-docs-test-api.finviet.com.vn:6868/eco-invoice/api/invoices/get-url-invoice>
      * Hóa đơn phát hành lỗi vẫn giữ nguyên trạng thái **Khởi tạo**, trạng thái ký số = **Thất bại**
    - Cập nhật các thông tin Số hóa đơn, Ký hiệu HĐ này vào các cột tương ứng trên lưới danh sách đơn hàng
    - Bộ lọc nên áp sau khi tắt popup:
      * **Trạng thái: Khởi tạo**
      * **Trạng thái ký số: Thất bại**
      * **Ngày tạo hóa đơn: giữ nguyên ngày theo bộ lọc trước đó**
      * **Ngày xuất hóa đơn: Không lọc**
    - Quy trình kết thúc thành công.
* Hủy: thực hiện đóng popup xác nhận và không lưu dữ liệu

Quy trình

Quy trình:

truePhát hành HĐ thủ côngfalse500autotoptrue7914

**Export**

| STT | Quy trình | Hệ thống | Mô tả |
| --- | --- | --- | --- |
| 1 | Gửi yêu cầu ký số | Admin NPP/ Admin HO | Thực hiện chọn hóa đơn để ký số  thực hiện gọi API phát hành hóa đơn (<https://be-docs-test-api.finviet.com.vn:6868/eco-invoice/api/invoices/release-invoice>) với các thông tin gồm:   * + - reqid = DMS tự gen random mã này để tracking. VD: DMS\_${new Date().getTime()}     - invoiceUid = invoiceUid được lưu tại hóa đơn. |
| 2 | Ký số lên hóa đơn | Hệ thống HDDT | Thực hiện ký số lên hóa đơn theo request từ hệ thống DMS. |
| 3 | Kết quả | Hệ thống HDDT | Trả ra kết quả ký số với:   * Thất bại: chuyển sang bước 4 * Thành công: chuyển sang bước 5 |
| 4 | Nhận thông tin ký số thất bại | Hệ thống DMS | * Hiển thị Lý do thất bại: lý do ký số thất bại từ hệ thống HDDT.  Ví dụ lỗi: INVOICE\_NOT\_FOUND. msg: "Không tìm thấy thông tin hóa đơn." * Lưu thông tin ký số thất bại và kết thúc.   + Trạng thái hóa đơn trên đơn hàng vẫn là Khởi tạo.   + Trạng thái ký số = Thất bại   ---  *Các lỗi tham khảo thêm khác nếu có (tùy vào API failed response từ HDDT)*   | STT | Tình huống lỗi | Thông báo cho Người dùng (UI/Notification) | | --- | --- | --- | | **I. Lỗi do Chứng thư số hoặc dịch vụ ký (Digital Signature Errors)** | | | | 1 | Chứng thư số (USB Token/HSM) hết hạn, bị thu hồi hoặc lỗi. | Chứng thư số của công ty đã hết hạn hoặc đang gặp sự cố | | 2 | Lỗi dịch vụ ký số (HSM không phản hồi, sai cấu hình). | Phát hành hóa đơn thất bại do dịch vụ ký số không phản hồi | | **III. Lỗi do kết nối hoặc từ hệ thống HĐĐT (API/Integration Errors)** | | | | 3 | **Lỗi kết nối API** khi gửi yêu cầu ký số. | Phát hành hóa đơn thất bại do không kết nối được với hệ thống Hóa đơn điện tử | | 4 | Hệ thống HĐĐT báo lỗi trong quá trình ký. | Phát hành hóa đơn thất bại do có lỗi phát sinh từ hệ thống Hóa đơn điện tử | |
| 5 | Cập nhật thông tin hóa đơn với trạng thái **Đã phát hành** | Hệ thống DMS | Phát hành hóa đơn đã ký số. Trạng thái = Đã phát hành  Trạng thái ký số = Thành công |

Điều chỉnh

## **Điều chỉnh thông tin hóa đơn trên đơn hàng**

Màn hình:

**Mô tả:**

* Chức năng này cho phép người dùng chỉnh sửa một số thông tin liên quan đến việc xuất hóa đơn cho một hóa đơn đang ở trạng thái "Khởi tạo". (Còn lại chỉ view, không cho điều chỉnh)
* Hệ thống sẽ điều hướng đến màn hình "Chỉnh sửa đơn hàng", nơi các trường thông tin khác bị vô hiệu hóa, chỉ cho phép thay đổi dữ liệu trong khung "Thông tin xuất hóa đơn". Sau khi có dữ liệu điều chỉnh thì enable button LƯU
* Sau khi lưu, hệ thống sẽ gọi API để cập nhật hóa đơn trên hệ thống HĐĐT mà không làm thay đổi master data của khách hàng

### Quy trình điều chỉnh thông tin hóa đơn trên đơn hàng:

trueĐiều chỉnh thông tin hóa đơn trạng thái HD khởi tạofalse700autotoptrue10813

| Bước | Hành động Người dùng / Hệ thống DMS | Hệ thống HĐĐT |
| --- | --- | --- |
| **1** | **Người dùng bắt đầu hành động**   * Tại màn hình **"Quản lý Hóa đơn điện tử"**, người dùng nhấn vào icon **"Điều chỉnh"** (hình bút chì) trên dòng hóa đơn có trạng thái Khởi tạo. |  |
| **2** | **Người dùng cập nhật thông tin**   * Hệ thống điều hướng người dùng đến màn hình **"Chỉnh sửa đơn hàng"** ở chế độ đặc biệt (vô hiệu hóa tất cả các trường trừ khung "Thông tin xuất hóa đơn"). * Người dùng thực hiện thay đổi  thông tin xuất hóa đơn, thao tác thực hiện xem chi tiết |  |
| **3** | **Người dùng lưu thay đổi**   * **Sau khi hoàn tất chỉnh sửa, người dùng nhấn nút "Lưu".** |  |
| **4** | **Hệ thống kiểm tra trạng thái HĐĐT (Pre-API Check)**   * **Đây là bước kiểm tra an toàn quan trọng.** Trước khi gửi API, hệ thống DMS chủ động truy vấn trạng thái hiện tại của hóa đơn    + **CASE A: Hóa đơn Đã phát hành/ Đã hủy:** Nếu hệ thống HĐĐT trả về trạng thái là **Đã phát hành hoặc Đã hủy**.     - **Hệ thống DMS chặn quy trình.** Hiển thị popup thông báo lỗi cho người dùng: "Không thể cập nhật. Hóa đơn này đã được phát hành hoặc đã hủy bởi một người dùng khác."     - Quy trình **Kết thúc**.   + **CASE B: Hóa đơn vẫn ở trạng thái Khởi tạo**      - Nếu hệ thống HĐĐT xác nhận trạng thái vẫn là Khởi tạo: Chuyển đến **Bước 5**. |  |
| **5** | **Hệ thống gửi yêu cầu cập nhật đến HĐĐT**   * Hệ thống DMS thu thập dữ liệu (chỉ thông tin định danh và thông tin người mua mới) và gọi đến API: <https://be-docs-test-api.finviet.com.vn:6868/eco-invoice/api/invoices/update-invoice> | **Bước 6: Xử lý yêu cầu cập nhật**   * Hệ thống HĐĐT nhận yêu cầu, tìm đến hóa đơn nháp và cập nhật lại thông tin. * Trả về kết quả cho DMS. |
| **7** | **Hệ thống nhận thông tin cập nhật thất bại**   * Nếu API HĐĐT trả về lỗi (ví dụ: lỗi kết nối, lỗi nghiệp vụ từ HĐĐT). Hệ thống hiển thị thông báo lỗi chi tiết cho người dùng: "Cập nhật hóa đơn thất bại. Lý do: [Nguyên văn message lỗi từ HĐĐT]. Vui lòng thử lại." * Người dùng vẫn ở lại màn hình chỉnh sửa. * Quy trình **Kết thúc**. |  |
| **8** | **Hệ thống xử lý cập nhật thành công**   * Hệ thống DMS nhận phản hồi thành công từ HĐĐT.    + Cập nhật thông tin hóa đơn mới vào cơ sở dữ liệu của DMS. Lưu hóa đơn, lưu thông tin điều chỉnh trên đơn hàng và dữ liệu mới sẽ KHÔNG được ghi đè vào bảng Master Data của Điểm bán   + Hiển thị thông báo thành công: "Đã cập nhật thông tin hóa đơn thành công."   + Ghi log update hóa đơn   + Điều hướng người dùng quay trở lại màn hình **"Quản lý Hóa đơn điện tử"**.   + Quy trình **Kết thúc**. |  |

Cập nhật thông tin hóa đơn

#### Cập nhật thông tin xuất hóa đơn

Mô tả:

| **Tên Trường** | **Loại dữ liệu / Field** | **Cho phép thao tác?** | **Bắt buộc nhập liệu?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Xuất hoá đơn VAT | Datacolumns | Không | Không | * Hiển thị theo đơn hàng. Disable không cho thay đổi |
| Điểm bán vãng lai | Datacolumns | Không | Không | * Hiển thị theo đơn hàng. Disable không cho thay đổi |
| Đối tượng yêu cầu hóa đơn | Datacolumns | Không | Không | * Hiển thị theo đơn hàng. Disable không cho thay đổi |
| * Cá nhân: hiển thị field Họ tên, Địa chỉ, Số điện thoại, Email nhận hóa đơn | | | | |
| Họ tên | Text (300) | Có | Có | * **Placeholder: Nhập + [Tên trường]** * Hiển thị thông tin theo đơn hàng đã tạo hóa đơn, cho phép điều chỉnh * Không cho để trống |
| Địa chỉ | Text (300) | Có | Không | * **Placeholder: Nhập + [Tên trường]** * Hiển thị thông tin theo đơn hàng đã tạo hóa đơn, cho phép điều chỉnh * Không bắt buộc nhập |
| Số điện thoại | Text(11) | Có | Không | * **Placeholder: Nhập + [Tên trường]** * Hiển thị thông tin theo đơn hàng đã tạo hóa đơn, cho phép điều chỉnh * Không bắt buộc nhập * Validate Chỉ chứa chữ số (0–9), không có dấu +, không khoảng trắng, không ký tự đặc biệt. nhập sai:  "Số điện thoại không đúng định dạng." |
| Email nhận hoá đơn | Text(300) | Có | Không | * **Placeholder: Nhập + [Tên trường]** * Hiển thị thông tin theo đơn hàng đã tạo hóa đơn, cho phép điều chỉnh * Không bắt buộc nhập * Format email ; ngược lại thông báo "Email không đúng định dạng." |
| * Doanh nghiệp: hiển thị field Mã số thuế, Tên Doanh nghiệp, Địa chỉ doanh nghiệp, Số điện thoại, Email nhận hóa đơn. | | | | |
| Mã số thuế | Text(14) | Không | Không | * Hiển thị theo đơn hàng. Disable không cho thay đổi |
| Tên Doanh nghiệp | Text (300) | Không | Không | * Hiển thị theo đơn hàng. Disable không cho thay đổi |
| Địa chỉ doanh nghiệp | Text (300) | Có | Có | * **Placeholder: Nhập + [Tên trường]** * Hiển thị thông tin theo đơn hàng đã tạo hóa đơn, cho phép điều chỉnh |
| Số điện thoại | Text(11) | Có | Không | * **Placeholder: Nhập + [Tên trường]** * Hiển thị thông tin theo đơn hàng đã tạo hóa đơn, cho phép điều chỉnh * Không bắt buộc nhập * Validate Chỉ chứa chữ số (0–9), không có dấu +, không khoảng trắng, không ký tự đặc biệt. nhập sai:  "Số điện thoại không đúng định dạng." |
| Email nhận hoá đơn | Text (300) | Có | Không | * **Placeholder: Nhập + [Tên trường]** * Hiển thị thông tin theo đơn hàng đã tạo hóa đơn, cho phép điều chỉnh * Không bắt buộc nhập * Format email ; ngược lại thông báo "Email không đúng định dạng." |
| * Hộ kinh doanh: hiển thị field Mã số thuế, Tên Hộ kinh doanh, Địa chỉ Hộ kinh doanh, Căn cước công dân chủ Hộ kinh doanh, Số điện thoại, Email nhận hóa đơn. | | | | |
| Mã số thuế | Text(14) | Không | Không | * Hiển thị theo đơn hàng. Disable không cho thay đổi |
| Tên Hộ kinh doanh | Text (300) | Không | Không | * Hiển thị theo đơn hàng. Disable không cho thay đổi |
| Địa chỉ Hộ kinh doanh | Text (300) | Có | Có | * **Placeholder: Nhập + [Tên trường]** * Hiển thị thông tin theo đơn hàng đã tạo hóa đơn, cho phép điều chỉnh |
| Căn cước công dân chủ Hộ kinh doanh | Text(12) | Không | Không | * Hiển thị theo đơn hàng. Disable không cho thay đổi |
| Số điện thoại | Text(11) | Có | Không | * **Placeholder: Nhập + [Tên trường]** * Hiển thị thông tin theo đơn hàng đã tạo hóa đơn, cho phép điều chỉnh * Không bắt buộc nhập * Validate Chỉ chứa chữ số (0–9), không có dấu +, không khoảng trắng, không ký tự đặc biệt. nhập sai:  "Số điện thoại không đúng định dạng." |
| Email nhận hoá đơn | Text (300) | Có | Không | * **Placeholder: Nhập + [Tên trường]** * Hiển thị thông tin theo đơn hàng đã tạo hóa đơn, cho phép điều chỉnh * Không bắt buộc nhập * Format email ; ngược lại thông báo "Email không đúng định dạng." |
| Lưu | Button | Có | Có | Sau khi có dữ liệu điều chỉnh thì enable button LƯU. Khi người dùng nhấn nút "Lưu" trên đơn hàng   **Kiểm tra (Validate) Khung "Thông tin xuất hóa đơn":**   * **Nếu bất kỳ trường bắt buộc nào bị để trống:**   + Ngăn không cho lưu đơn hàng.   + Hiển thị thông báo lỗi ngay dưới trường bị trống, ví dụ: "Trường @tên trường là bắt buộc!"   + Highlight (tô đỏ) viền của các trường bị lỗi. * **Nếu tất cả các trường đều hợp lệ:** Đến bước 4 của quy trình **điều chỉnh thông tin hóa đơn trên đơn hàng** |

Tạo hóa đơn

# Tạo hóa đơn

**Mục đích:** Chức năng này cung cấp một màn hình riêng biệt cho phép người dùng tìm kiếm và chọn một hoặc nhiều đơn hàng thỏa mãn điều kiện (đã xuất kho/giao hàng và chưa có HĐĐT)

để kích hoạt việc tạo hóa đơn điện tử thủ công. Hệ thống sẽ xử lý yêu cầu hàng loạt, sau đó trả về một popup kết quả chi tiết và đánh dấu các đơn hàng bị lỗi ngay trên giao diện để người dùng có thể dễ dàng xác định và xử lý lại.

**Màn hình:**

**Thao tác:**

Bước 1: Check chọn button  trên màn hình Quản lý hóa đơn điện tử để tạo hóa đơn

Bước 2: Hiển thị màn hình Tạo hóa đơn

Bước 3: Check chọn các đơn hàng có trạng thái Đã xuất kho và chưa phát hành hóa đơn điện tử (hoặc HĐĐT có trạng thái = Đã hủy) trên lưới danh sách

Bước 4: Chọn button Tạo hóa đơn trên màn hình

Bước 5: Hiển thị popup

* Chọn Xác nhận:  Tạo hóa đơn điện tử
* Chọn Hủy bỏ: Tắt popup và ở lại màn hình danh sách đơn hàng

## **Chức năng tìm kiếm**

| Tên Trường | Loại dữ liệu | Cho phép thao tác? | Bắt buộc nhập liệu? | Mô tả |
| --- | --- | --- | --- | --- |
| Mã đơn hàng | Dropdown list  Select multichoice | Có | Không | **Mở danh sách:**   * Khi người dùng nhấp vào trường "Mã đơn hàng", hệ thống hiển thị danh sách tất cả các đơn hàng    + Trạng thái Đơn hàng phải là Đã giao hàng hoặc Đã xuất kho.   + Đơn hàng đó **chưa** có liên kết với bất kỳ hóa đơn điện tử nào có trạng thái Khởi tạo hoặc Đã phát hành * Mặc định khi mở màn hình, **không có đơn hàng nào được chọn.** * Placeholder: Chọn mã đơn hàng   **Tìm kiếm và chọn:**   * Người dùng có thể gõ từ khóa để lọc nhanh theo mã đơn hàng. * Chỉ chọn một mã đơn hàng để lọc * Trường hợp không có đơn hàng phù hợp với từ khóa, hệ thống hiển thị nội dung trống trên lưới danh sách   **Hiển thị lựa chọn:**   * đơn hàng đã chọn sẽ hiển thị trong hộp chọn dưới dạng nhãn (tags). * Khi **bỏ chọn hoặc nhấn x trên thẻ tag**, hiểu là người dùng **muốn bỏ lọc**   **Xóa lựa chọn:**   * Người dùng có thể nhấp vào biểu tượng xóa trên các nhãn (tag) hoặc chọn lại trong danh sách   **Kết quả lọc:**   * Thông tin các đơn hàng sẽ hiển thị trên lưới danh sách, lọc và kết quả không có dữ liệu thì danh sách rỗng * Kết hợp các điều kiện lọc khác theo điều kiện "Và". **Kết quả lọc** sẽ là tất cả hóa đơn thoả mãn **cả hai điều kiện** sau cùng lúc |
| Ngày đặt hàng | Date | Có | Không | Ngày đặt hàng: Từ ngày → Đến ngày  Mô tả: Trường lọc cho phép người dùng chọn khoảng thời gian để tìm các đơn hàng theo ngày đặt hàng   * Thành phần giao diện: Gồm hai ô nhập liệu:  * + Từ ngày: Chọn ngày bắt đầu của khoảng thời gian lọc   + Đến ngày: Chọn ngày kết thúc của khoảng thời gian lọc   + Mỗi ô sử dụng Date Picker để người dùng dễ dàng chọn ngày. * Giá trị mặc định: Khi mở màn hình hiển thị 7 ngày quá khứ. Ví dụ ngày hiện tại = N; Từ ngày = N-6; Đến ngày = N.  * Placeholder:    + Từ ngày (dd-MM-yyyy)   + Đến ngày (dd-MM-yyyy)  * Quy tắc nhập/chọn: Người dùng có thể:  * + Gõ trực tiếp ngày theo định dạng dd-MM-yyyy   + Hoặc chọn từ bảng lịch (Date Picker)   + Bắt buộc phải nhập đủ cả hai: Hệ thống lọc theo khoảng thời gian từ Từ ngày đến Đến ngày * Kết quả lọc:   + Hệ thống lọc danh sách đơn hàng có ngày đặt hàng thỏa mãn điều kiện trong khoảng thời gian đã chọn   + Kết hợp với điều kiện khác: Điều kiện lọc Ngày đặt hàng sẽ kết hợp với các điều kiện Mã đơn hàng theo logic "VÀ"     - **Kết quả lọc** sẽ là tất cả hóa đơn thoả mãn **cả hai điều kiện** sau cùng lúc * Cho phép chọn x để xóa ngày đã chọn |
| Tìm kiếm | Button | Có | Không | * Mô tả: Nút thực thi hành động lọc dữ liệu hóa đơn trên lưới danh sách dựa trên các điều kiện người dùng đã chọn/nhập.  * Vị trí: Nằm ở góc dưới bên phải nhóm các điều kiện lọc (hoặc hàng ngang cùng với nút "Làm mới").  * Hành vi: Khi người dùng nhấn "Tìm kiếm", hệ thống thực hiện:  * + Thu thập tất cả giá trị từ các trường lọc: Mã đơn hàng Từ ngày, Đến ngày   + Kiểm tra tính hợp lệ của các trường   + Hiển thị kết quả danh sách hóa đơn trên lưới theo đúng các điều kiện lọc * Trạng thái: Luôn hiển thị (kể cả khi chưa nhập gì)   + Nếu không nhập bất kỳ dữ liệu nào và nhấn button Tìm kiếm     - Hiển thị kết quả lọc theo bộ lọc mặc định   + **Luôn Orderby hiển thị danh sách đơn hàng theo ngày đặt hàng giảm dần (gần hiện tại nhất)** |
| Làm mới | Button | Có | Không | **Chức năng:**   * Nút "Làm mới" cho phép người dùng tải lại danh sách, xóa mọi bộ lọc và kết quả tìm kiếm hiện tại, đồng thời trả về trạng thái ban đầu của danh sách. * Nút này hữu ích khi người dùng muốn bắt đầu một phiên tìm kiếm mới hoặc khi cần làm mới dữ liệu để đảm bảo rằng các dữ liệu tìm kiếm mới nhất được hiển thị.   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả các bộ lọc, tìm kiếm, và làm mới dữ liệu trên danh sách 2. **Danh sách làm mới:** Sau khi nhấp, danh sách mới nhất sẽ hiển thị theo bộ lọc mặc định.   **Lưu ý:**   * Việc làm mới không thay đổi dữ liệu gốc mà chỉ cập nhật giao diện hiển thị của danh sách * Người dùng cần lưu ý rằng tất cả các bộ lọc hoặc tìm kiếm đã thiết lập sẽ bị xóa khi nút này được nhấn |

## **Lưới danh sách hóa đơn điện tử**

| Tên Trường | Mô tả |
| --- | --- |
| Checkbox | checkbox để check chọn một hoặc nhiều đơn hàng  Cho phép check all trên page đang xem |
| Mã đơn hàng | Mã đơn hàng |
| Điểm bán | Mã - tên điểm bán theo đơn hàng  Định dạng: [Mã Điểm bán] - [Tên Điểm bán]. |
| Ngày đặt hàng | Ngày đặt hàng trên đơn hàng  dd/mm/yyyy |
| Tổng tiền thanh toán VNĐ | Tổng số tiền thanh toán trên đơn hàng   Định dạng số, có phân cách hàng nghìn. |
| Trạng thái | Trạng thái đơn hàng (Đã giao hàng/ Đã xuất kho) |
| Ngày tạo | Ngày giờ tạo đơn hàng |
| Người tạo | Người tạo (mã người tạo đơn hàng) |
| Đã chọn (2) | * **Text đếm số lượng:** Một dòng chữ hiển thị số lượng đơn hàng đã được check, ví dụ: **"Đã chọn: 2"**. |

### Quy trình tạo hóa đơn hàng loạt

trueTạo hóa đơn hàng loạtfalse1000autotoptrue13422

Mô tả:

Quy trình dưới đây được kích hoạt khi người dùng chọn một hoặc nhiều đơn hàng và nhấn nút "Tạo hóa đơn" trên màn hình "Tạo hóa đơn thủ công".

Hệ thống sẽ xử lý từng đơn hàng trong danh sách đã chọn theo các bước sau.

| Bước | Hành động Người dùng / Hệ thống DMS | Hệ thống HĐĐT |
| --- | --- | --- |
| **1** | **Bắt đầu: Gửi yêu cầu tạo HĐĐT**  Hành động của người dùng trên màn hình "Tạo hóa đơn" khởi tạo quy trình cho một hoặc nhiều đơn hàng đã chọn. |  |
| **2** | **Bước kiểm tra #1: Cấu hình kết nối HĐĐT**  Hệ thống DMS kiểm tra xem Nhà phân phối (bên bán) của đơn hàng có được cấu hình kết nối HĐĐT và đang ở trạng thái ON hay không.   * **Không:** Quy trình cho đơn hàng này thất bại. Hệ thống ghi nhận lỗi "Nhà phân phối chưa kích hoạt dịch vụ HĐĐT" và kết thúc xử lý cho đơn hàng này. * **Có:** Chuyển đến Bước 3 |  |
| 3 | **Bước kiểm tra #2: Cấu hình **Mẫu hóa đơn tương ứng với Kênh bán hàng****  Hệ thống DMS kiểm tra xem kênh bán hàng đã có cấu hình mẫu hóa đơn hay chưa?   * **Không:** Quy trình cho đơn hàng này thất bại. Hệ thống ghi nhận lỗi "Kênh bán hàng chưa được cấu hình Mẫu hóa đơn điện tử. Vui lòng kiểm tra cài đặt." và kết thúc xử lý cho đơn hàng này. * **Có:** Chuyển đến Bước 4 |  |
| 4 | **Bước kiểm tra #3: Cờ "Xuất hóa đơn VAT"** Hệ thống kiểm tra xem đơn hàng có được đánh dấu (check) vào ô "Xuất hóa đơn VAT" hay không.   * **Không:** Quy trình cho đơn hàng này thất bại. Hệ thống ghi nhận lỗi "Đơn hàng không có yêu cầu xuất hóa đơn VAT" và kết thúc xử lý cho đơn hàng này. * **Có:** Chuyển đến Bước 5 |  |
| 5 | **Bước kiểm tra #4: Thông tin bắt buộc** Hệ thống kiểm tra xem các thông tin **bắt buộc** để xuất hóa đơn trong đơn hàng đã đầy đủ và hợp lệ hay chưa (ví dụ: Mã số thuế, Tên, Địa chỉ người mua).   * **Không:** Quy trình cho đơn hàng này thất bại. Hệ thống ghi nhận lỗi "Thiếu thông tin bắt buộc để xuất hóa đơn [@tên field bắt buộc bị thiếu], [@tên field bắt buộc bị thiếu]." và kết thúc xử lý cho đơn hàng này. * **Có:** Chuyển đến Bước 6. |  |
| 6 | **Bước kiểm tra #4: Trạng thái Đơn hàng** Hệ thống kiểm tra lại lần cuối trạng thái của đơn hàng.   * **Không phải** Đã giao hàng hoặc Đã xuất kho: Quy trình cho đơn hàng này thất bại. Hệ thống ghi nhận lỗi: "Không thể phát hành hóa đơn do trạng thái đơn hàng khác Đã xuất kho hoặc Đã giao hàng" và kết thúc xử lý cho đơn hàng này. * **Là** Đã giao hàng hoặc Đã xuất kho: Tất cả các điều kiện tiên quyết đã thỏa mãn. Hệ thống tiến hành gọi API đến hệ thống HĐĐT  * + Trường hợp Mẫu hóa đơn = 1 (**Có VAT**):     - Gọi API tạo hóa đơn (<https://be-docs-test-api.finviet.com.vn:6868/eco-invoice/api/invoices/create-invoice>) và thực hiện chuyển sang bước 7, hệ thống DMS sẽ thu thập thông tin từ form để tạo payload gửi đến API của HĐĐT   ***Lưu ý: Dữ liệu tính toán Tổng tiền đơn hàng và tiền thuế phải khớp (sumPaymentAmount). Trường hợp sau khi tính toán không khớp sẽ báo msg trước khi gọi API tạo hóa đơn***  *"Không thể tạo hóa đơn cho đơn hàng [Mã ĐH]. Có lỗi trong quá trình tính toán giá trị đơn hàng. Vui lòng kiểm tra lại!"*     * + - * reqid = DMS tự gen random mã này để tracking. VD: DMS\_${new Date().getTime()}       * taxCode = Mã số thuế của NPP       * connector = cổng kết nối từ thông tin mẫu hóa đơn áp dụng trong cấu hình kết nối HDDT của bên bán "bkav",       * general:         + - invoiceTemplate = Mã mẫu hóa đơn (Mã lấy từ màn hình Hóa đơn điện tử - Mã hóa đơn tương ứng với Kênh bán hàng của điểm bán)           - invoiceType = "1"           - invoiceSerial = Ký hiệu hóa đơn           - invoiceissuedDate = Ngày giờ hiện tại       * seller:         + - legalName = Tên doanh nghiệp/ Hộ kinh doanh của người bán được lưu trong cấu hình HDDT           - address = Địa chỉ doanh nghiệp/ Hộ kinh doanh của người bán được lưu trong cấu hình HDDT           - phone = Số điện thoại của người bán được lưu trong cấu hình HDDT       * buyer:         + - name = Họ tên/ Tên doanh nghiệp/ Hộ kinh doanh người mua nếu có           - taxCode = Mã số thuế người mua nếu có           - address = Địa chỉ người mua nếu có **Lưu ý**: Trường hợp đơn hàng không truyền thông tin xuất nào đơn nào của người mua thì truyền name = "Khách hàng vãng lai"       * receiver:         + - type =  "1"           - name = Họ tên/ Tên doanh nghiệp/ Hộ kinh doanh của người mua nếu có           - email = Email nhận hóa đơn của người mua nếu có           - phone = SĐT của người mua nếu có           - address = Địa chỉ của người mua nếu có       * payment: hiện tại sẽ mặc định truyền là tiền mặt trước         + - method = "1"           - paymentMethodName = "TM"       * items:           + - type = "0"           - code = Mã SKU           - name = Tên đầy đủ của sản phẩm           - unit = Đơn vị tính của sản phẩm           - price: Giá chưa VAT             * + Sản phẩm bán: tính với công thức = giá sau giảm sản phẩm / (1 + %VAT)  (*Làm tròn 2 số thập phân*)               + Sản phẩm khuyên mãi: "0"           - quantity = số lượng sản phẩm           - totalPrice:             * + Sản phẩm bán: price \* quantity.               + Sản phẩm khuyên mãi: "0"           - taxId:             * + Sản phẩm bán: dựa vào Field Thuế VAT trên đơn hàng của sản phẩm trên DMS để suy ngược lại TaxRateID (Phục lục 5 trong bảng phụ lục: <https://be-docs-test-api.finviet.com.vn:6868/eco-invoice/api/invoices/appendix>) để truyền vào. Trường hợp nếu VAT không có trong bảng này thì mặc định truyền TaxRateID = 3.               + Sản phẩm khuyến mãi: "- 1"           - taxRate:             * + Sản phẩm bán: lấy dữ liệu thuế từ màn hình quản lý VAT, lấy VAT áp dụng gần nhất đối với sản phẩm theo taxId:           - taxAmount = tổng tiền thuế của sản phẩm, thực hiện tính theo công thức: (totalPrice - discountAmount) \* %VAT (*Làm tròn 2 số thập phân*)             * discountType = "2", nếu đơn hàng có khuyến mãi đơn hàng sẽ truyền giá trị này.             * discountAmount: nếu đơn hàng có khuyến mãi đơn hàng sẽ truyền giá trị này, khuyến mãi đơn hàng sẽ thực hiện chia bình quân sản phẩm ra để thực hiện tính vào với:               + - Bước 1: tính Tiền **khuyến mãi bình quân của dòng sản phẩm** sau thuế:                   * Item thứ n-1 = (Tổng tiền khuyến mãi đơn hàng [@Khuyến mãi (VND)] / tổng tiền hàng [@Tổng tiền trước VAT (VND)] \* Tổng thành tiền của dòng sản phẩm sau thuế [@Thành tiền sau VAT (VND) ].                   * Item thứ n (Sản phẩm cuối cùng trên đơn hàng = Tổng tiền thanh toán )VND trên đơn hàng - SUM(Tất cả các item thứ n-1 trên đơn hàng)                 - Bước 2: tính discountAmount = **Tiền khuyến mãi bình quân của dòng sản phẩm sau thuế**/ (1 + %VAT). (*Làm tròn 2 số thập phân*)       * sumItem:         + - sumPaymentAmount = sumItemAmount + sumTaxAmount             * sumItemAmount = Tổng tiền hàng sau chiết khấu của các sản phẩm với công thức: SUM(totalPrice của các sản phẩm) - SUM(discountAmount của các sản phẩm)               + sumDiscountAmount = SUM(discountAmount của các sản phẩm)             * sumTaxAmount = SUM(taxAmount của các sản phẩm) |  |
| 7 |  | **Tạo hóa đơn**  Thực hiện tạo hóa đơn theo request từ hệ thống DMS.  Dựa vào Kênh bán hàng của đơn hàng, hệ thống HĐĐT xác định Mẫu hóa đơn và Ký hiệu hóa đơn tương ứng để tạo một bản nháp hóa đơn. |
| 8 |  | **Xử lý kết quả từ HĐĐT** Hệ thống DMS chờ và nhận phản hồi từ API của HĐĐT.   * **Thất bại:** Kết quả trả về là lỗi. Chuyển đến Bước 9. * **Thành công:** Kết quả trả về là thành công. Chuyển đến Bước 10. |
| 9 | **Nhận thông tin tạo hóa đơn thất bại** Hệ thống DMS ghi nhận lại thông điệp lỗi chi tiết trả về từ API HĐĐT cho đơn hàng tương ứng.   * Tình huống lỗi "TAXCODE\_NOT\_FOUND": Không thể tạo hóa đơn do không tìm thấy thông tin mã số thuế. Vui lòng thử lại. * Các lỗi tham khảo khác nếu có (*tùy vào API failed response từ HDDT*):  | ***Lỗi kết nối API** (Mất mạng, timeout).* | *Không thể tạo hóa đơn cho đơn hàng [Mã ĐH] do không kết nối được với hệ thống Hóa đơn điện tử. Vui lòng thử lại.* | | --- | --- | | *Lỗi xác thực (API key sai).* | *Không thể tạo hóa đơn do lỗi xác thực với hệ thống Hóa đơn điện tử. Vui lòng liên hệ hỗ trợ.* | | *Hệ thống HĐĐT từ chối tạo hóa đơn (lỗi nghiệp vụ từ HĐĐT).* | *Hệ thống Hóa đơn điện tử đã từ chối tạo hóa đơn cho đơn hàng. Lý do: [Lý do từ HĐĐT].* |   Quy trình kết thúc. |  |
| 10 |  | **Phát hành hóa đơn chưa ký số**  Phát hành hóa đơn (chưa ký số)   Hóa đơn được tạo thành công trên hệ thống HĐĐT với trạng thái Khởi tạo. Hệ thống HĐĐT trả về số hóa đơn của hóa đơn vừa tạo. |
| 11 | **Lưu thông tin hóa đơn thành công**   * Hệ thống DMS nhận dữ liệu hóa đơn thành công từ HĐĐT.   + Thực hiện tạo dòng hóa đơn trên màn hình Quản lý hóa đơn điện tử với các thông tin gồm:      - Số hóa đơn = invoiceNo từ response thành công     - Ký hiệu hóa đơn = invoiceTemplate từ response thành công     - Mã đơn hàng = Mã đơn hàng được chọn để tạo hóa đơn     - Ngày xuất hóa đơn = invoiceIssuedDate     - Trạng thái = Khởi tạo     - Trạng thái ký số = Rỗng     - Tổng tiền thanh toán     - Ngày tạo     - Người tạo     - Ngày cập nhật     - Người cập nhật     - Lưu thêm thông tin invoiceUid (DMS lưu tất cả các thông tin hóa đơn điện tử có trạng thái khởi tạo phục vụ cho nhu cầu xem hóa đơn và tải hóa đơn trên hệ thống) * Quy trình xử lý cho đơn hàng này kết thúc trong thành công. |  |

Sau khi chạy tất cả các đơn hàng, DMS hiển thị popup:

* **Dòng tiêu đề:** "Kết quả tạo hóa đơn"
* **Dòng thông báo tổng quan:** "Đã tạo thành công [Y] hóa đơn. Có lỗi xảy ra với [Z] đơn hàng."

  + [Y] là số lượng đơn hàng trong successList.
  + [Z] là số lượng đơn hàng trong errorList.
* **Danh sách đơn hàng lỗi (chỉ hiển thị nếu Z > 0):**

  + Tiêu đề: **"Mã ĐH bị lỗi:"**
  + Danh sách các mã đơn hàng bị lỗi, ví dụ: #WD8293479238, #WD8293479239...
* **Nút hành động:** Một nút **"Đóng"** duy nhất để tắt popup.

**Chọn Đóng hiển thị màn hình Tạo đơn hàng như sau:**

Tắt popup, Về màn hình Tạo hóa đơn → cập nhật lại giao diện màn hình "Tạo hóa đơn" như sau:

* Bộ lọc: Filter default các đơn hàng bị lỗi trên Mã đơn hàng, Ngày đặt hàng giữ nguyên như ban đầu đã chọn trước khi thao tác tạo hóa đơn. 
  + Các đơn hàng bị **lỗi** sẽ được giữ lại trên lưới và được đánh dấu đặc biệt:

    - Checkbox của các dòng lỗi sẽ được **tự động check sẵn**.
    - Toàn bộ dòng của đơn hàng lỗi sẽ được **highlight màu đỏ nhạt** để dễ nhận biết.
    - Bên cạnh Mã đơn hàng của dòng lỗi sẽ xuất hiện một **icon thông tin ('i')**.

      * Khi người dùng **di chuột (hover) qua icon ('i')**, một tooltip sẽ xuất hiện và hiển thị **thông điệp lỗi chi tiết** của chính đơn hàng đó (chi tiết lỗi đã mô tả trên quy trình xử lý)
* Tải lại màn hình:
  + Các đánh dấu lỗi (highlight, checkbox, icon 'i') sẽ được duy trì cho đến khi người dùng thực hiện một hành động làm mới danh sách, ví dụ như:  
    - Nhấn nút "Tìm kiếm" lại.
    - Nhấn nút "Làm mới".
    - Thay đổi trang (phân trang).
    - Nhấn nút "Tạo hóa đơn"
    - Sau các hành động trên, danh sách sẽ được tải lại từ đầu và các đánh dấu lỗi sẽ biến mất.

**Lưu ý: Ghi log Tạo; cập nhật; hủy; phát hành hóa đơn**

## **Hóa đơn chưa ký số (Khởi tạo) và đã ký số (Đã phát hành)**