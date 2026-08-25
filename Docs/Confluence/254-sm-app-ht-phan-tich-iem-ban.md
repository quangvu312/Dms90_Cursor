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

# 1 Điều chỉnh Màn hình Thông tin điểm bán

## 1.1 Thêm mục Chương trình khuyến mãi

| Màn hình | Mô tả |
| --- | --- |
|  | Khi click vào mục CTKM, hệ thống hiển thị màn hình danh sách CTKM được áp dụng cho điểm bán    CTKM ở đây sẽ hiển thị theo quy tắc (các quy tắc dưới đây theo điều kiện "và"):   * CTKM còn thời hạn áp dụng: Từ ngày <= Ngày hiện tại <= Đến ngày * CTKM có đối tượng áp dụng là điểm bán được chọn để xem chi tiết * CTKM có đối tượng áp dụng là NPP trên tuyến đã chọn của nhân viên khi login. * CTKM có sản phẩm áp dụng là sản phẩm thuộc danh sách sản phẩm bán thuộc tuyến bán hàng của nhân viên   + Trường hợp tuyến không chọn nhãn hàng thì hiểu là chọn tất cả các nhãn. Lấy danh sách sản phẩm từ bảng giá bán được áp dụng cho cửa hàng.   + Tuyến bán hàng đang tính tuyến đã chọn của nhân viên khi login .   Giao diện danh sách CTKM như sau hình bên trái   * **Tab Giảm Giá**: Hiển thị danh sách các CTKM thuộc loại Giảm %, Giảm Tiền   + Giảm tiền sử dụng icon:   + Giảm % sử dụng icon: * **Tab Tặng Quà**: Hiển thị danh sách các CTKM thuộc loại Tặng quà * Danh sách khuyến mãi hiển thị thông tin:   + Tên CTKM: Lấy từ trường "Tên hiển thị trên app" trên Portal Promotion khi cài đặt CTKM   + Ngày hết hạn CTKM: hh:mm dd/mm/yyyy.   + Lấy từ trường "Khoảng thời gian áp dụng" trên Portal Promotion khi cài đặt CTKM * Chọn vào chương trình khuyến mãi hiển thị chi tiết CTKM như sau:      * Loại khuyến mãi:   + Giảm giá/Giảm %/Tặng quà   + Trường hợp CTKM mix nhiều hình thức KM sẽ để chung thành: Khuyến mãi * Tên CTKM: Lấy từ trường "Tên hiển thị trên app" trên Portal Promotion khi cài đặt CTKM * Thời gian áp dụng:   + Lấy từ trường "Khoảng thời gian áp dụng" trên Portal Promotion khi cài đặt CTKM   + Format hh:mm dd/mm/yyyy * Thể lệ chương trình: Lấy từ trường "Thể lệ chương trình" trên Portal Promotion khi cài đặt CTKM   **Lưu ý**: Không hiển thị các CTKM có ngân sách < 0 (áp dụng trên tất cả các điều kiện ngân sách) |

## 1.1 Thêm mục Phân tích điểm bán

Chọn vào mục Phân tích điểm bán, hiển thị màn hình Phân tích điểm bán như sau:

| Màn hình | Nội dung | Mô tả |
| --- | --- | --- |
|  | Bộ lọc | * Selectbox onechoice gồm các mục thời gian sau:   + 7 ngày   + 9 ngày   + 30 ngày   + 60 ngày   + 90 ngày * Khi người dùng chọn thời gian ở trường này, tất cả thông tin bên dưới sẽ được hiển thị theo thời gian được chọn * Thời gian được tính từ (Số ngày trên bộ lọc - 1) đến Ngày hiện tại * Ví dụ:   + Chọn 7 ngày: dữ liệu sẽ lấy 6 ngày liền trước →  ngày hiện tại   + Chọn 9 ngày: dữ liệu sẽ lấy 8 ngày liền trước →  ngày hiện tại |
| Doanh số | Quy tắc tính doanh số:   * Tính tổng doanh số của sản phẩm trên đơn hàng mà điểm bán đặt hàng trong khoảng thời gian được chọn. * Doanh số được tính theo công thức được mô tả ở [Công thức tính doanh số](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443956#id-%5BHO%5DB%C3%A1oC%C3%A1o-C%C3%B4ngth%E1%BB%A9ct%C3%ADnhdoanhs%E1%BB%91) và theo config [VAT\_DISPLAY\_CONFIGURATION](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66525466) * Biểu đồ sẽ hiển thị số ngày tương ứng với bộ lọc đã chọn. Auto focus ngày hiện tại |
| Tần suất mua hàng | * Số lượng đơn hàng trung bình/ngày   + **Số lượng đơn hàng trung bình = Tổng số lượng đơn hàng đặt trong khoảng thời gian được chọn ở bộ lọc / Thời gian được chọn ở bộ lọc**   + Tổng số lượng đơn hàng: Lấy tất cả các trạng thái của đơn hàng thỏa điều kiện ở mục Doanh số   + Số lượng đơn hàng trung bình lấy số nguyên, làm tròn lên 0.5 * Ngày mua gần nhất: Dựa trên bộ lọc thời gian đã chọn, lấy ra ngày đặt hàng cuối cùng trong khoảng đó * Ngày mua xa nhất: Dựa trên bộ lọc thời gian đã chọn, lấy ra ngày đặt hàng đầu tiên trong khoảng đó |
| Top sản phẩm bán chạy | * Hiển thị thông tin 10 sản phẩm được đặt hàng nhiều nhất trên tất cả đơn hàng của điểm bán trong khoảng thời gian được chọn  * Đơn hàng thỏa điều kiện ở mục Doanh số. * Thông tin sản phẩm bao gồm:   + Hình ảnh sản phẩm   + Tên sản phẩm   + Đơn vị cơ bản   + Đã bán: Số lượng sản phẩm được đặt theo đơn vị cơ bản     - Đưa về đơn vị cơ bản     - Sản phẩm nào có số lượng và doanh số cao nhất thì đưa lên đầu tiên     - Sản phẩm nào có số lượng và doanh số bằng nhau thì sắp xếp theo Alphabet tên của sản phẩm   + Doanh số: Doanh số của sản phẩm trên đơn hàng thỏa điều kiện ở mục Doanh số |
| Sản phẩm chưa từng mua | * Hiển thị thông tin 10 sản phẩm (Kết hợp VÀ cho các điều kiện bên dưới)   + Sản phẩm có số lượng và doanh số mua lớn nhất (Sắp xếp theo doanh số cao nhất trước, nếu doanh số bằng nhau thì sắp xếp theo số lượng)     - Trong tất cả đơn hàng tất cả các điểm bán trong tuyến của nhân viên (không cần quan tâm tần suất hay ngày đi tuyến, chỉ cần lấy ra các điểm bán không trùng trên tuyến bán hàng ngay tại thời điểm đặt hàng, điểm bán có trạng thái đang hoạt động trong tuyến thực tế)     - Đơn hàng hợp lệ để tính toán thỏa điều kiện ở mục Doanh số.     - Sản phẩm đang hoạt động     - Sản phẩm có tồn kho > 0 thuộc NPP thuộc tuyến bán hàng của Sales đã chọn khi login     - Sản phẩm có giá bán > 0 áp dụng cho điểm bán đang chọn để xem thông tin     - Sản phẩm thuộc nhãn hàng trên tuyến bán hàng của Sales đã chọn khi login     - Sản phẩm chưa từng được đặt hàng trên tất cả các đơn hàng của điểm bán (tất cả trạng thái đơn hàng kể cả đơn trả) trong khoảng thời gian được chọn ở bộ lọc   + Lưu ý: Trường hợp tuyến nhân viên chỉ có 1 điểm bán, hoặc trên tuyến chưa có điểm bán nào có đơn hàng đủ điều kiện để gợi ý thì sẽ lấy danh sách sản phẩm:     - Sản phẩm có tồn kho > 0 thuộc NPP thuộc tuyến bán hàng của Sales đã chọn khi login     - Sản phẩm có giá bán > 0 áp dụng cho điểm bán đang chọn để xem thông tin     - Sản phẩm thuộc nhãn hàng trên tuyến bán hàng của Sales đã chọn khi login     - Sản phẩm chưa từng được đặt hàng trên tất cả các đơn hàng của điểm bán (tất cả trạng thái đơn hàng kể cả đơn trả) trong khoảng thời gian được chọn ở bộ lọc     - Lấy 10 sản phẩm có tồn kho lớn nhất. * Thông tin sản phẩm bao gồm:   + Hình ảnh sản phẩm   + Tên sản phẩm   + Đơn vị cơ bản   + Sắp xếp theo Alphabet tên của sản phẩm |