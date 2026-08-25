# Lưu ý chung cho các template báo cáo

| Chức năng | Nội dung | Mô tả |
| --- | --- | --- |
| Xuất excel | Tên báo cáo khi xuất excel | Tên báo cáo\_DDMMYYYYHHMMSS  BaoCaoChamCong\_DDMMYYYYHHMMSS |
| Header báo cáo | Header báo cáo | Người xuất báo cáo:   Mã nhân viên xuất báo cáo - Tên nhân viên xuất báo cáo                                          Thời gian xuất báo cáo:    DD/MM/YYYY - HH:MM:SS                                                 Dữ liệu theo thời gian:    Từ ngày DD/MM/YYYY đến ngày DD/MM/YYYY |
| Công thức tính doanh số | Công thức tính doanh số | * Tính tổng doanh số của sản phẩm trên đơn hàng được nhân viên đặt hàng trong khoảng thời gian được chọn. * Trên Portal     | Doanh số trước VAT | Doanh số sau VAT |   | --- | --- |   | **Doanh số** = Số lượng x giá bán (Giá bán chưa tính VAT, không tính toán CTKM) | **Doanh số** = Số lượng × Đơn giá sau V – Khuyến mãi + Giảm trừ | * Trên App Salesman   + Trường hợp user login = Salesman, thì xem doanh số của nhân viên Salesman   + Trường hợp user login = SUP, user được chọn = SUP, thì xem doanh số của nhân viên SUP * Trên App Manager   + Trường hợp user login = Sup trở lên, thì xem doanh số của nhân viên được chọn + tất cả nhân viên cấp dưới của nhân viên được chọn * Format tiền tệ * Doanh số được tính vào "**Ngày đặt hàng**", điều kiện tính có đơn hàng cũng sẽ được tính tại "**Ngày đặt hàng**"   + Ví dụ đặt hàng ngày 4/6, duyệt ngày 5/6, xuất kho 6/6 → Doanh số tính ngày 4/6. * Đơn hàng hợp lệ để tính toán phải thỏa tất cả các điều kiện như:   + Nguồn đơn hàng: Tùy từng báo cáo   + Trạng thái đơn hàng:     - Trên Portal: Theo bộ lọc Trạng thái đơn hàng     - Trên App: Theo config ORDER\_STATUS\_FOR\_APP\_REPORT   + Đơn hàng không có trạng thái “**Đã hủy**”:     - Ví dụ:       * Ngày 10/6, điểm bán đặt đơn hàng A001.       * Ngày 11/6, đơn hàng bị cập nhật trạng thái "Đã hủy". → Khi xem báo cáo doanh số ngày 10/6, đơn hàng này sẽ **không được** tính vì đã bị hủy.       * → Khi xem báo cáo doanh số ngày 11/6,đơn hàng này sẽ **không được** tính vì đã bị hủy.   + Đơn hàng không có **đơn hàng trả**. Trong đó:     - Chỉ tính trả nguyên đơn     - Phải có ngày trả hàng trong khoảng thời gian xem báo cáo     - Phải có trạng thái = Đã duyệt     - Ví dụ:       * Ngày viếng thăm là 10/1, có đặt đơn hàng ngày đặt hàng = 10/1       * Ngày 11/1 đơn hàng chuyển trạng thái **Đã duyệt/Đã xuất kho/Đã giao hàng/...**       * Ngày 12/1 điểm bán trả đơn hàng, ngày trả hàng = 12/1       * Xem báo cáo         + Xem báo cáo ngày 10/1, điểm bán không có đơn hàng         + Xem báo cáo ngày 11/1, chọn ngày xem báo cáo = 10/1 điểm bán có đơn hàng (giả định xem sau thời điểm duyệt đơn hàng)         + Xem báo cáo ngày 12/1, chọn ngày xem báo cáo = 10/1 điểm bán không có đơn hàng (giả định xem sau thời điểm trả đơn hàng) |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |

# Danh sách báo cáo

true