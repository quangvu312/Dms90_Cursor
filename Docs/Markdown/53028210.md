|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Chức năng lịch sử đơn hàng trong phần chi tiết điểm bán |
| Document version | RedV1.0.0  .RedV1.0.11:  : Thêm trạng thái Đã xuất kho |
| Document status | GreenDONE |
| Document owner | Hoàng Quyên (BA - Product Team) |
| Chage History | 2 |

truenonenone

# 1 Lịch sử đơn hàng

Từ màn hình chi tiết điểm bán → Chọn menu Lịch sử đơn hàng → Hệ thống hiển thị chi tiết lịch sử đơn hàng của điểm bán:

* + Hiển thị danh sách tất cả đơn hàng của tất cả điểm bán được tạo bởi nhân viên:
  + - App:
      * Salesman đang đăng nhập: Đơn hàng phải được tạo từ Salesman
      * SUP đang đăng nhập: Đơn hàng phải được tạo từ nhân viên đang được chọn.
    - Web: Đơn hàng phải có chọn nhân viên trên đơn hàng, nhân viên đó phải là:
      * Salesman đang đăng nhập
      * SUP đang đăng nhập và chọn nhân viên
  + Đơn hàng được tạo từ chức năng viếng thăm điểm bán hoặc chức năng chăm sóc điểm bán hoặc được tạo trên web portal và có NPP trên đơn hàng = NPP của tuyến bán hàng được chọn lúc đăng nhập.
  + Trạng thái đơn hàng = Khởi tạo, Đã duyệt, Đã hủy.
  + Trường hợp tuyến nhân viên có chọn nhãn hàng, chỉ hiển thị các đơn hàng của điểm bán có chứa sản phẩm thuộc nhãn hàng đã chọn
    - Chỉ cần trên đơn hàng có 1 sản phẩm thuộc nhãn hàng của tuyến thì hiển thị
    - Đơn hàng không có sản phẩm nào thuộc nhãn hàng của tuyến thì không hiển thị
  + Trường hợp tuyến nhân viên không chọn nhãn hàng, hiển thị tất cả các đơn hàng của tất cả các điểm bán (điểm bán thuộc tuyến đang được chọn)
  + Group theo ngày tạo đơn hàng, ngày gần nhất sẽ để trên lên
    - Ngày tạo = Ngày hiện tại, label sẽ hiển thị "Hôm nay"
    - Trong 1 group ngày tạo, sắp xếp đơn hàng theo thời gian cập nhật từ mới nhất → Cũ nhất
  + **Thông tin đơn hàng sẽ hiển thị theo cập nhật mới nhất trên portal**

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc nhập liệu?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Tìm kiếm | Textbox (200) | Có | Không | Nhập mã đơn hàng, số điện thoại điểm bán, tên điểm bán, mã điểm bán để tìm kiếm  Search like theo mã đơn hàng, số điện thoại điểm bán, tên điểm bán, mã điểm bán |
| Bộ lọc | Button | Có | Không | Click vào bộ lọc hiển thị màn hình lọc như sau:    **Có thể lọc theo các tiêu chí sau**   * **Ngày tạo đơn hàng:**   + Chọn từ ngày - đến ngày để lọc thông tin đơn hàng   + Đến ngày >= Từ ngày   + Phải chọn cả từ ngày và đến ngày   + Lọc theo ngày tạo đơn hàng * **Loại đơn hàng (multichoice)**   + Đơn đặt: Đơn đặt mua hàng     - Được tạo trên App Salesman DMS (ở chức năng viếng thăm điểm bán, chăm sóc điểm bán)     - Được tạo trên web portal   + Đơn trả: Hiển thị đơn trả hàng được tạo trên web portal (trả nguyên đơn, trả hàng lẻ), loại đơn = Đơn trả hàng,   + Đơn trả thưởng: Đơn trả thưởng được tạo ra khi người dùng trả thưởng CTTB/CTTL với loại phần thưởng = số lượng sản phẩm. Sẽ mô tả chi tiết ở giai đoạn phát triển chức năng trả thưởng CTTB/CTTL   + Đơn vansales: Đơn hàng Vansales được tạo trên App từ chức năng Đặt hàng * **Nguồn tạo (multichoice)**   + APP: Đơn hàng được tạo trên app Salesman   + WEB: Đơn hàng được tạo trên web port * **Trạng thái (multichoice)**   + Khởi tạo: Nhân viên mới tạo đơn hàng   + Đã duyệt: Đơn hàng được chuyển sang trạng thái Đã duyệt.   + Đã hủy: Đơn hàng được chuyển sang trạng thái Đã hủy.   + Đã xuất kho: Đơn hàng có trạng thái Đã duyệt và có Phiếu xuất kho ở trạng thái Đã duyệt. * **Giá trị đơn hàng:**Nhập giá trị đơn hàng → hệ thống sẽ lọc theo tiêu chí:   + Format phần nghìn khi user nhập thông tin trong 2 ô Tối thiểu, tối đa. Không nhập số thập phân   + Có nhập Tối thiểu và tối đa     - Tối thiểu <= Giá trị đơn hàng <= Tối đa   + Chỉ nhập Tối thiểu     - Tối thiểu <= Giá trị đơn hàng   + Chỉ nhập tối đa     - Giá trị đơn hàng <= Tối đa * Đặt lại: Clear hết dữ liệu tìm kiếm đã chọn/nhập, đưa về trạng thái ban đầu * Áp dụng: Áp dụng các dữ liệu tìm kiếm đã chọn/nhập vào danh sách đơn hàng và reload danh sách đơn hàng hiển thị kết quả tìm kiếm |
| Dữ liệu trống | Icon | Không | N/A | Trường hợp  tất cả điểm bán thuộc tuyến đang được chọn của nhân viên  Thì hiển thị icon dữ liệu trống |
| Danh sách đơn hàng | | | | |
| Mã đơn hàng | Label | Không | N/A | Thông tin mã của đơn hàng  : Đơn hàng có dấu hiệu này là đơn hàng có loại đơn = đơn trả, và loại trả hàng = trả nguyên đơn  : Đơn hàng có dấu hiệu này là đơn hàng có loại đơn = đơn đặt nhưng đã bị trả hàng và loại trả hàng = trả nguyên đơn (đơn hàng gốc của đơn trả), đơn trả có trạng thái = Đã duyệt |
| Thời gian tạo đơn | Label | Không | N/A | Thời gian tạo đơn hàng  Format: ~~hh:mm~~ dd/mm/yyyy |
| Trạng thái | Label | Không | N/A | Trạng thái của đơn hàng   * + Khởi tạo: Nhân viên mới tạo đơn hàng   + Đã duyệt: Đơn hàng được chuyển sang trạng thái Đã duyệt.   + Đã hủy: Đơn hàng được chuyển sang trạng thái Đã hủy.   + RedV1.0.1Đã xuất kho: Đơn hàng có trạng thái Đã duyệt và có Phiếu xuất kho ở trạng thái Đã duyệt. |
| Điểm bán | Label | Không | N/A | Thông tin điểm bán trên đơn hàng   * Hình ảnh điểm bán: Lấy hình ảnh được chụp gần nhất của điểm bán * Tên điểm bán * Địa chỉ điểm bán * Số điện thoại điểm bán |
| Nhà phân phối | Label | Không | N/A | Thông tin nhà phân phối user đã chọn để tạo đơn hàng |
| Loại đơn | Label | Không | N/A | Loại đơn hàng:   * Đơn đặt: Đơn đặt mua hàng   + Được tạo trên App Salesman DMS (ở chức năng viếng thăm điểm bán, chăm sóc điểm bán)   + Được tạo trên web portal * Đơn trả: Hiển thị đơn trả hàng được tạo trên web portal (trả nguyên đơn, trả hàng lẻ), loại đơn = Đơn trả hàng, * Đơn trả thưởng: Đơn trả thưởng được tạo ra khi người dùng trả thưởng CTTB/CTTL với loại phần thưởng = số lượng sản phẩm. Sẽ mô tả chi tiết ở giai đoạn phát triển chức năng trả thưởng CTTB/CTTL * Đơn vansales: Đơn hàng Vansales được tạo trên App từ chức năng Đặt hàng |
| Nguồn tạo | Label | Không | N/A | Nguồn tạo:   * APP: Đơn hàng được tạo trên app Salesman * WEB: Đơn hàng được tạo trên web portal |
| Giá trị đơn hàng | Label | Không | N/A | Tổng tiền cuối cùng mà điểm bán phải thanh toán cho đơn hàng  Format tiền tệ hàng nghìn kèm icon tiền tệ |
| Chi tiết đơn hàng | Thẻ đơn hàng | Có | Không | Chọn vào từng thẻ đơn hàng, hiển thị thông tin [Chi tiết đơn hàng](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48444752#id-[SMAPP]%C4%90%E1%BA%B7th%C3%A0ng%E1%BB%9Fnhi%E1%BB%87mv%E1%BB%A5vi%E1%BA%BFngth%C4%83m(kh%C3%B4ngkhuy%E1%BA%BFnm%C3%A3i)-2.2.Chiti%E1%BA%BFt%C4%91%C6%A1nh%C3%A0ngDETAIL_ORDER) |