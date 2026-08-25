|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description |  |
| Document version | RedV1.0.0  RedV1.0.1: Với các scheme tặng số lượng sản phẩm cùng loại trong nhóm sẽ không được điều chỉnh số suất trên từng sản phẩm tặng |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Khuyến mãi Ontop trên đơn hàng

* Khuyến mãi Ontop là
  + Khuyến mãi sẽ hiển thị tự động khi sản phẩm/nhóm sản phẩm/đơn hàng đủ điều kiện khuyến mãi
  + Người dùng **không được** điều chỉnh số suất của khuyến mãi
  + Người dùng **không được** thay đổi độ ưu tiên của khuyến mãi
  + Người dùng **có thể** chọn quà tặng/giảm giá/giảm phần trăm trong các loại khuyến mãi có điều kiện hoặc.
* Promotion sẽ trả về 2 loại CTKM:
  + Ontop, Bình thường. Tài liệu này chỉ mô tả chương trình Khuyến mãi Ontop, CTKM Bình thường xem chi tiết ở [Khuyến mãi Bình thường](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53031631&src=contextnavpagetreemode)
  + CTKM Ontop sẽ có lựa chọn KM trên từng đối tượng mua: Sản phẩm, nhóm sản phẩm, đơn hàng. Từ các đối tượng này sẽ chuyển sang màn hình
  + CTKM Bình thường sẽ có màn hình phụ dẫn từ chức năng Khuyến mãi Bình thường , xem chi tiết ở [Khuyến mãi Bình thường](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53031631&src=contextnavpagetreemode)

## Hiển thị tự động Khuyến mãi Ontop

trueFlow hiển thị tự động khuyến mãi ontopztaMJzoZXtObEA6pvADXfalse8006eb6e0a12c6c0c665218f277180d58c2ba963754autotoptrue14723

## Thông tin khuyến mãi trên màn hình Xác nhận đơn hàng

* Khi người dùng chọn Đặt hàng từ màn hình Chọn sản phẩm
* Hệ thống sẽ gửi thông tin qua hệ thống Promotion để trả về thông tin khuyến mãi và hiển thị lên màn hình Xác nhận đơn hàng
  + DMS sẽ gửi sang promotion các thông tin sau:
    1. Người mua hàng: Thông tin điểm bán
    2. Người bán hàng: Thông tin NPP
    3. Giá trị đơn hàng (lấy giá trị đơn hàng sau VAT)
    4. Sản phẩm : [SKU, số lượng, đơn giá, thành tiền]
  + Thông tin promotion phản hồi: Danh sách khuyến mãi khả dụng gồm: 

    - Tên CTKM hiển thị trên app
    - Thời gian áp dụng: Thời gian bắt đầu, Thời gian kết thúc
    - Loại chương trình
    - Thể lệ chương trình
    - Điều kiện mua
    - Trả thưởng (gồm 4 loại )  
      * Trả tiền
      * Trả %
      * Trả sản phẩm (bao gồm cùng loại & khác loại)
      * Trả nhóm sản phẩm
    - Số suất tối đa: Promotion phản hồi về thông tin khuyến mãi với tối đa số suất
* Trường hợp từ màn hình Xác nhận đơn hàng, người dùng nhấn button Back trở về màn hình Chọn sản phẩm
  + Khi nhấn button sẽ hiển thị Lưu ý trước khi thoát
  + Nếu đồng ý sẽ xóa hết toàn bộ khuyến mãi đã apply tại màn hình Xác nhận đơn hàng
  + Khi người dùng từ màn hình Chọn sản phẩm chọn Xác nhận mới gọi lại thông tin và hiển thị lại khuyến mãi
* Tại màn hình Xác nhận đơn hàng có thể pull refresh để làm mới các CTKM trên đơn hàng.
  + Khi pull refresh hệ thống hiển thị cảnh báo: Thao tác này sẽ làm mới lại toàn bộ các CTKM hiện có trên đơn hàng, bạn có muốn tiếp tục
    - Đồng ý:
      * Hệ thống sẽ gửi thông tin qua hệ thống Promotion để trả về thông tin khuyến mãi, reload khuyến mãi và hiển thị lên màn hình Xác nhận đơn hàng
      * Lúc này hệ thống sẽ clear hết các CTKM, thông tin khuyến mãi người dùng đã chọn trước đó và hiển thị CTKM mới
    - Trở lại: Tắt popup và ở lại màn hình hiện tại, không xử lý bất cứ thông tin gì.
* Tại màn hình này sẽ có button 
  + Button này sẽ hiển thị khi đơn hàng có CTKM Ontop
  + Icon số:
    - Số hiển thị số lượng CTKM được áp dụng trên đơn hàng.
    - icon màu xanh: CTKM khả dụng và không có CTKM nào bị lỗi.
    - Icon màu đỏ: CTKM khả dụng và có ít nhất 1 CTKM bị lỗi và kèm theo mess báo lỗi: Có lỗi xảy ra, vui lòng kiểm tra lại!
  + Trường hợp đơn hàng không có CTKM Ontop thì button này sẽ ẩn đi.

## Thông tin khuyến mãi trên màn hình Chi tiết đơn hàng

* Giống màn hình Xác nhận đơn hàng
* Tuy nhiên chỉ hiển thị thông tin khuyến mãi đã chọn khi đặt hàng, người dùng không được chỉnh sửa thông tin

## Mô tả khuyến mãi trên màn hình Xác nhận đơn hàng/Chi tiết đơn hàng

| Màn hình Xác nhận đơn hàng | Màn hình Chi tiết đơn hàng | Thông tin Khuyến mãi | Mô tả |
| --- | --- | --- | --- |
|  | * Button Đặt lại vẫn giữ rule như đã mô tả ở chức năng [Đặt lại đơn hàng](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48444752#id-%5BSMAPP%5D%C4%90%E1%BA%B7th%C3%A0ng%E1%BB%9Fnhi%E1%BB%87mv%E1%BB%A5vi%E1%BA%BFngth%C4%83m(kh%C3%B4ngkhuy%E1%BA%BFnm%C3%A3i)-RE_ORDER) | Click từ ô Khuyến mãi Ontop trong phần Khuyến mãi áp dụng, hiển thị màn hình và focus vào tab Khuyến mãi Ontop như sau: | Khuyến mãi Ontop: Thông tin được mô tả ở    ---   Thông tin thanh toán:     * Tổng sản phẩm đặt:   + Tổng số lượng sản phẩm đặt mua trên đơn hàng (Đếm số tổng không tính theo đơn vị)   + VD mua 2 A, 3 B → Tổng = 5 * Tổng tiền trước giảm: Tổng tiền tất cả các sản phẩm trên đơn hàng * Tổng sản phẩm khuyến mãi:   + Tổng số lượng sản phẩm khuyến mãi trên đơn hàng (Đếm số tổng không tính theo đơn vị)   + VD được khuyến mãi 1A, 2 C → Tổng = 3 * Tổng tiền được giảm: Tổng tiền giảm giá cho đơn hàng = Khuyến mãi đơn hàng + Khuyến mãi sản phẩm * Tiền điều chỉnh: Thông tin tiền điều chỉnh được nhập trên portal khi admin chỉnh sửa/duyệt đơn hàng * Tổng tiền sau giảm:    + Nếu Tiền điều chỉnh>= 0: Thành tiền cho đơn hàng = Tổng tiền trước giảm  - Tổng tiền được giảm + Tiền điều chỉnh   + Nếu Tiền điều chỉnh <0: Thành tiền cho đơn hàng = Tổng tiền trước giảm  - Tổng tiền được giảm - Tiền điều chỉnh  ---   **Button Đặt hàng**:   * Khi nhấn button này sẽ thực hiện kiểm tra như kiểm tra Xác nhận ở màn hình Khuyến mãi Ontop * Tổng tiền sau giảm > 0, trường hợp Tổng tiền sau giảm <= 0, button Đặt hàng sẽ disable.  ---   **Pull Refresh**: Khi pull refresh, hệ thống hiển thị cảnh báo:  Khi đơn hàng được làm mới, các thông tin CTKM đã chọn sẽ mất đi, bạn có muốn tiếp tục?   * Đồng ý:   + Reload lại màn hình Xác nhận đơn hàng   + Kiểm tra các thông tin như nhấn Button Đặt hàng   + Clear hết các lựa chọn trên CTKM Ontop và Bình thường   + Gửi thông tin qua promotion và lấy về các KM mới. * Trở lại: Tắt popup và trở lại màn hình hiện tại và giữ nguyên dữ liệu. |

### Khuyến mãi Ontop On\_top\_Promotion

* Thông tin sản phẩm tặng sẽ được hiển thị khi người dùng chọn vào button "**Khuyến mãi Ontop**", hệ thống mở màn hình phụ chứa tất cả các CTKM Ontop được áp dụng như sau:

| Nội dung | Mô tả |
| --- | --- |
| Button Back | Hiển thị cảnh báo trước khi thoát  Nếu vẫn đồng ý thoát ra, sẽ xem như chưa lựa chọn khuyến mãi nào, màn hình Xác nhận đơn hàng vẫn giữ nguyên lỗi khuyến mãi như trước khi vào màn hình Khuyến mãi Ontop |
| **Thu gọn tất cả/Mở rộng tất cả** | **Thu gọn tất cả**:   * Mặc định khi mở màn hình sẽ mở rộng tất cả các CTKM * Người dùng muốn thu gọn lại tất cả các CTKM trên màn hình thì sẽ click button này * Khi click vào tất cả các CTKM sẽ thu gọn lại và button này sẽ đổi tên thành "Mở rộng tất cả"     **Mở rộng tất cả**:   * Button này sẽ xuất hiện sau khi người dùng click vào "Thu gọn tất cả" * Người dùng click vào button này, hệ thống sẽ mở rộng toàn bộ các CTKM * Lúc này button sẽ đổi tên thành "Thu gọn tất cả" |
| Checkbox | Checkbox:   * Ở trạng thái mặc định checkbox sẽ disable, các CTKM Ontop user không thể bỏ chọn CTKM * Trường hợp khi có >= 2 CTKM có sản phẩm tặng bị hết tồn kho:   + Người dùng cần phải đưa ra quyết định chọn/bỏ chọn CTKM một trong các CTKM để đủ sản phẩm khuyến mãi, thì checkbox này mới enable để người dùng chọn/bỏ chọn CTKM   + Lúc này lỗi sẽ hiển thị ở tất cả các CTKM có sản phẩm không đủ tồn kho      * Ví dụ:   + CTKM 1 tặng 2 sản phẩm   + CTKM 2 tặng 4 sản phẩm   + → Tồn kho chỉ còn 5 sản phẩm → User phải bỏ CTKM 1 hoặc CTKM2 để đủ số lượng sản phẩm tặng. |
| Thông tin CTKM | * Thông tin bao gồm:   + Tên chương trình khuyến mãi     - Click vào có thể [xem chi tiết CTKM](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53029740)  * + Thông tin quà tặng/giảm giá/giảm %     - Quà tặng: Hiển thị Tên sản phẩm tặng     - Giảm giá: Hiển thị số tiền được giảm     - Giảm %:  Hiển thị số tiền được giảm   + Được nhận: Thông tin số suất khuyến mãi đủ điều kiện trên đơn hàng/Số suất tối đa được nhận     - Số suất khuyến mãi đủ điều kiện là số suất khuyến mãi có đủ tồn kho     - Số suất tối đa được nhận là số suất tối đa được trả về từ Promotion khi sản phẩm đạt khuyến mãi.   + Số lượng: Tổng số lượng sản phẩm khuyến mãi được nhận theo số suất khuyến mãi đủ điều kiện.   + Số tiền: Tổng số tiền được giảm (Giảm giá/Giảm %) theo số suất khuyến mãi đủ điều kiện.   * Sắp xếp các đối tượng trên CTKM theo quy tắc từ trên xuống như sau, áp dụng cho tất cả các CTKM trong danh sách và áp dụng trong cùng 1 chương trình khuyến mãi:   + Giảm giá/Giảm %   + Sản phẩm đơn   + Nhóm sản phẩm |
| Số suất | * Số suất:   + Số suất tối đa được hưởng CTKM dựa trên điều kiện mua hàng   + Thông tin được trả về từ hệ thống promotion   + **Người dùng không thể điều chỉnh số suất này.**   + Hệ thống sẽ tự động tính toán lại số suất khả dụng khi:     - Pull refresh ở màn hình này     - Nhấn Áp dụng   + Trường hợp CTKM là giảm %:     - Thì trường này sẽ ẩn đi     - Trường hợp CTKM khác kết hợp cùng giảm % thì được hiểu là số suất của các phần thưởng còn lại, Giảm % sẽ không có số suất. |
| Chi tiết quà tặng | Chi tiết quà tặng: Có thể mở rộng/thu gọn Chi tiết quà tặng |
| Giảm giá | * Giảm giá:   + Sử dụng icon   + Tên của giảm giá sẽ là cụm từ:     - "Giảm " + số tiền được giảm + "trên " + thông tin giảm trên giá trị sản phẩm/giá trị đơn hàng/giá trị nhóm sản phẩm     - Ví dụ:       * Giảm 5,000 trên giá trị sản phẩm       * Giảm 5,000 trên giá trị đơn hàng       * Giảm 5,000 trên giá trị nhóm sản phẩm   + Thành tiền: Tổng tiền giảm giá theo số suất trên đơn hàng |
| Giảm % | * Giảm %:   + Sử dụng icon   + Tên của giảm giá sẽ là cụm từ:     - "Giảm " + % được giảm + "trên " + thông tin giảm trên giá trị sản phẩm/giá trị đơn hàng/giá trị nhóm sản phẩm     - Ví dụ:       * Giảm 5% trên giá trị sản phẩm       * Giảm 5% trên giá trị đơn hàng       * Giảm 5% trên giá trị nhóm sản phẩm   + Thành tiền: Tổng tiền giảm giá tính từ % theo số suất trên đơn hàng   + Trường hợp CTKM là giảm %:     - Thì sẽ không hiển thị số suất     - Trường hợp CTKM khác kết hợp cùng giảm % thì được hiểu là số suất của các phần thưởng còn lại, Giảm % sẽ không có số suất. |
| Số lượng quà trong nhóm | * Số lượng quà trong nhóm: Tổng số lượng quà được tặng dựa trên CTKM * Thông tin sản phẩm tặng   + Hình ảnh sản phẩm   + Tên sản phẩm   + Mức thuế của sản phẩm   + Đơn vị của sản phẩm hiển thị từ thông tin khuyến mãi, không thể thay đổi   + Tồn kho hiện tại của sản phẩm, rule load tồn kho sản phẩm tặng giống sản phẩm bán, đã được mô tả ở chức năng [Đặt hàng không khuyến mãi](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48444752)   + Số suất:     - Trường số suất theo sản phẩm này sẽ xuất hiện trong các CTKM tặng sản phẩm cùng loại theo số suất dựa trên điều kiện mua     - Hiển thị số suất tối đa theo số lượng mua và điều kiện khuyến mãi.     - RedV1.0.1Trong CTKM loại này người dùng không được chỉnh sửa số lượng sản phẩm, cũng không được điều chỉnh số suất   + Số lượng:     - Số lượng sản phẩm tặng trong nhóm sẽ hiển thị = số lượng sản phẩm tặng ở màn hình xác nhận đơn hàng     - Người dùng có thể thay đổi số lượng ở đây, sao cho tổng số lượng các sản phẩm trong nhóm phải bằng = Số lượng quà trong nhóm     - Có thể thay đổi bằng cách tăng giảm hoặc nhập số trực tiếp.     - Chỉ có trường hợp CTKM tặng sản phẩm cùng theo số suất dựa trên điều kiện mua, người dùng không được chỉnh sửa số lượng sản phẩm mà chỉ được điều chỉnh số suất     - Không disable cũng không kiểm tra ở 2 button tăng giảm ở phần này, sẽ check khi nhấn button Áp dụng   + **Lưu ý:** Trường hợp sản phẩm khuyến mãi không thuộc nhãn hàng trên tuyến của nhân viên thì vẫn được áp dụng khuyến mãi trên đơn hàng |
| Tổng quà | * Tổng quà:   + Tổng số lượng sản phẩm đã chọn trên màn hìnhnày   + Ví dụ: 2A, 1B, 1C → Tổng số lượng = 6 |
| Tổng tiền KM | * Tổng tiền khuyến mãi: Tổng tiền khuyến mãi giảm giá và % trên tất cả các CTKM có trên màn hình này. |
| Pull Refresh | Khi pull refresh, hệ thống hiển thị cảnh báo: Bạn có muốn làm mới lại tất cả các CTKM trên đơn hàng?   * Đồng ý: Reload lại màn hình Khuyến mãi Ontop * Trở lại: Tắt popup và trở lại màn hình hiện tại và giữ nguyên dữ liệu. |
| **Kiểm tra khi nhấn Áp dụngConfirm\_Promotion** | | Kiểm tra | Mô tả | | --- | --- | | Trạng thái của sản phẩm có còn hoạt động không | * Nếu có: Tiếp tục kiểm tra điều kiện khác   + Nếu không: Hiển thị thông báo: Sản phẩm bị ngưng hoạt động, vui lòng liên hệ admin để hỗ trợ hoặc xóa sản phẩm khỏi danh sách đã chọn.     - Đóng: Tắt popup và reload màn hình Khuyến mãi Ontop, hiển thị các sản phẩm bị ngưng hoạt động trên CTKM      * Trường hợp tất cả sản phẩm trên CTKM đều bị ngưng hoạt động thì không hiển thị CTKM * Trường hợp chỉ có 1 số sản phẩm trên CTKM bị ngưng hoạt động thì vẫn hiển thị CTKM và hiển thị lỗi, để người dùng có thể lựa chọn sản phẩm khác. | | Tồn kho của sản phẩm có còn đủ để tặng theo CTKM hay không  Phase 1: Trường hợp CTKM có nhiều sản phẩm không hiển thị được tồn kho trên từng SKU mà sẽ hiển thị chung thông báo cho CTKM: "Khuyến mãi đã hết hạn hoặc không còn khả dụng cho đơn hàng."  Phase 2 sẽ enhance chỗ này và đưa về case thông báo tồn kho cho từng SKU. | * Nếu có: Tiếp tục kiểm tra điều kiện khác * Nếu không:   + Hiển thị thông báo: Chỉ còn x sản phẩm.     - Đóng: Tắt popup và reload màn hình Khuyến mãi Ontop, hiển thị các sản phẩm không còn tồn kho trên CTKM      * Lưu ý: Trường hợp sản phẩm tặng nằm trên nhiều scheme khuyến mãi, mà SP tặng đó lại hết tồn kho, thì hiển thị cảnh báo hết tồn kho trên tất cả các scheme của sản phẩm tặng đó. Người dùng cần phải đưa ra quyết định chọn/bỏ chọn CTKM một trong các CTKM để đủ sản phẩm khuyến mãi, thì checkbox này mới enable để người dùng chọn/bỏ chọn CTKM.      * Ví dụ:   + CTKM 1 tặng 2 sản phẩm   + CTKM 2 tặng 4 sản phẩm   + → Tồn kho chỉ còn 5 sản phẩm → User phải bỏ CTKM 1 hoặc CTKM2 để đủ số lượng sản phẩm tặng. | | CTKM trên màn hình xác nhận đơn hàng có đang hoạt động hoặc còn thời hạn hoặc còn đủ điều kiện áp dụng hay không? | * Nếu có: Tiếp tục kiểm tra điều kiện khác * Nếu không: Hiển thị thông báo: Khuyến mãi đã hết hạn hoặc không còn khả dụng cho đơn hàng.   + Đóng: Tắt popup và quay về màn hình Khuyến mãi Ontop, hiển thị các khuyến mãi đã hết hạn, disable nguyên cụm CTKM và kèm button Bỏ khuyến mãi      * + - Nhấn button Bỏ khuyến mãi →  Hệ thống sẽ loại bỏ CTKM ra khỏi màn hình Khuyến mãi Ontop. |  * + Trường hợp không phát hiện lỗi nào trong các lỗi nêu trên, hệ thống sẽ quay về màn hình Xác nhận đơn hàng đồng thời hiển thị thông tin Khuyến mãi Ontop người dùng đã chọn lên màn hình Xác nhận đơn hàng. |

## Chi tiết các chương trình Khuyến mãi Ontop

true