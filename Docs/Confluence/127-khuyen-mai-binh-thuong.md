|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description |  |
| Document version | RedV1.0.0  RedV1.0.1: Với các scheme tặng số lượng sản phẩm cùng loại trong nhóm khi điều chỉnh số suất sản phẩm thì số suất tổng sẽ giảm  RedV1.1.0: Bổ sung màn hình mới Khuyến mãi khả dụng khi nhấn Áp dụng từ màn hình Khuyến mãi bình thường |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Khuyến mãi bình thường trên đơn hàng

* Khuyến mãi bình thường là
  + Khuyến mãi sẽ hiển thị tự động khi sản phẩm/nhóm sản phẩm/đơn hàng đủ điều kiện khuyến mãi, sau khi áp dụng CTKM đầu tiên, hệ thống sẽ trừ số lượng/số tiền mua hàng đã áp dụng khuyến mãi, sau đó sẽ lấy phần còn lại áp dụng cho CTKM tiếp theo.
  + Người dùng **có thể** điều chỉnh số suất của khuyến mãi
  + Người dùng **có thể** thay đổi độ ưu tiên của khuyến mãi
  + Người dùng **có thể** chọn quà tặng/giảm giá/giảm phần trăm trong các loại khuyến mãi có điều kiện hoặc.
* Promotion sẽ trả về 2 loại CTKM:

  - Ontop, Bình thường. Tài liệu này chỉ mô tả chương trình Khuyến mãi bình thường, CTKM Ontop xem chi tiết ở Khuyến mãi Ontop  
  + Khuyến mãi bình thường sẽ có màn hình phụ dẫn từ chức năng , khi user chọn

## Hiển thị Khuyến mãi bình thường

trueKM\_GIAM\_TRUfalse1500autotoptrue29814

## Thông tin khuyến mãi trên màn hình Xác nhận đơn hàng

* Giống với Thông tin khuyến mãi bên CTKM Ontop, đã mô tả ở [thông tin khuyến mãi Ontop](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53031629#Khuyếnmãiontop-ThôngtinkhuyếnmãitrênmànhìnhXácnhậnđơnhàng)
* Tại màn hình này sẽ có button
* + Button này sẽ hiển thị khi đơn hàng có Khuyến mãi bình thường
  + Icon số:
    - Số hiển thị số lượng CTKM được áp dụng trên đơn hàng.
      * Khi mới mở màn hình, user chưa chọn bất cứ CTKM bình thường nào thì ở đây số lượng sẽ = 0 và hiển thị số lượng các CTKM khả dụng kèm warining "Có x CTKM khả dụng, vui lòng chọn CTKM"như sau: .
      * Trong đó x là số lượng các CTKM thỏa điều kiện áp dụng cho đơn hàng.
      * Hệ thống không tự động chọn CTKM khi mới mở màn hình, mà sẽ để cho user tự chọn.
    - icon màu xanh: CTKM khả dụng và không có CTKM nào bị lỗi.
    - Icon màu đỏ: CTKM khả dụng và có ít nhất 1 CTKM bị lỗi và kèm theo mess báo lỗi: Có lỗi xảy ra, vui lòng kiểm tra lại!
  + Trường hợp đơn hàng không có CTKM bình thường thì button này sẽ ẩn đi.

## Thông tin khuyến mãi trên màn hình Chi tiết đơn hàng

* Giống màn hình Xác nhận đơn hàng
* Tuy nhiên chỉ hiển thị thông tin khuyến mãi đã chọn khi đặt hàng

## Mô tả khuyến mãi trên màn hình Xác nhận đơn hàng/Chi tiết đơn hàng

| Màn hình Xác nhận đơn hàng | Màn hình Chi tiết đơn hàng | Thông tin Khuyến Mãi | Mô tả |
| --- | --- | --- | --- |
| v | * Button Đặt lại vẫn giữ rule như đã mô tả ở chức năng [Đặt lại đơn hàng](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48444752#id-%5BSMAPP%5D%C4%90%E1%BA%B7th%C3%A0ng%E1%BB%9Fnhi%E1%BB%87mv%E1%BB%A5vi%E1%BA%BFngth%C4%83m(kh%C3%B4ngkhuy%E1%BA%BFnm%C3%A3i)-RE_ORDER) | Click từ ô Khuyến mãi Bình thường trong phần Khuyến mãi áp dụng, hiển thị màn hình và focus vào tab Khuyến mãi Bình thường như sau: | Khuyến mãi bình thường: Thông tin được mô tả ở   ---   Thông tin thanh toán:  Đã mô tả ở Khuyến mãi Ontop   ---  * Button Đặt hàng:   + Trường hợp ở màn hình Khuyến mãi bình thường chưa có sự lựa chọn button Đặt hàng sẽ disabled kèm theo thông báo lỗi: Vui lòng lựa chọn CTKM!   + Sau khi người dùng lựa chọn Khuyến mãi bình thường, khi người dùng nhấn button Đặt hàng thì hệ thống sẽ kiểm tra điều kiện CTKM một lần nữa trước khi gửi đơn hàng về hệ thống   + Thông tin điều kiện kiểm tra cho button Đặt hàng giống đã mô tả ở Áp dụng Khuyến mãi bình thường  ---   **Pull Refresh:** Đã mô tả ở**Khuyến mãi Ontop** |

## Khuyến mãi bình thường Tinh\_Khuyen\_Mai

* Chức năng Khuyến mãi bình thường được sử dụng để tính toán giảm trừ các CTKM, khi trên đơn hàng có Khuyến mãi bình thường, người dùng bắt buộc phải nhấn vào Khuyến mãi bình thường và lựa chọn Khuyến mãi bình thường
* Trường hợp ở màn hình Xác nhận đơn hàng chưa có sự lựa chọn Khuyến mãi bình thường, mà người dùng nhấn Đặt hàng → Hệ thống sẽ hiển thị cảnh báo: Vui lòng chọn "Khuyến mãi bình thường" → Đồng ý → Hệ thống đóng popup và trở về màn hình hiện tại để người dùng chọn "Khuyến mãi bình thường"

* Chọn vào chức năng sẽ mở màn hình Khuyến mãi bình thường như sau:

| Tên trường | Mô tả |
| --- | --- |
| Button back | Hiển thị cảnh báo trước khi thoát  Nếu vẫn đồng ý thoát ra, sẽ xem như chưa lựa chọn khuyến mãi nào, màn hình Xác nhận đơn hàng vẫn giữ nguyên khuyến mãi như trước khi vào màn hình Khuyến mãi bình thường |
| Chọn để sắp xếp thứ tự áp dụng cho các chương trình khuyến mãi | * Câu hướng dẫn luôn luôn hiển thị ở màn hình này |
| Bỏ chọn | * Trường hợp chưa có CTKM nào được tick chọn, button này sẽ disable * Trường hợp có ít nhất 1 CTKM được tick chọn, button này sẽ enable * Khi nhấn button này sẽ untick toàn bộ các CTKM đã chọn |
| Thu gọn tất cả | * Mặc định khi mở màn hình sẽ mở rộng tất cả các CTKM * Người dùng muốn thu gọn lại tất cả các CTKM trên màn hình thì sẽ click button này * Khi click vào tất cả các CTKM sẽ thu gọn lại và button này sẽ đổi tên thành "Mở rộng tất cả" |
| Mở rộng tất cả | * Button này sẽ xuất hiện sau khi người dùng click vào "Thu gọn tất cả" * Người dùng click vào button này, hệ thống sẽ mở rộng toàn bộ các CTKM * Lúc này button sẽ đổi tên thành "Thu gọn tất cả" |
| Checkbox và độ ưu tiên | * Ở trạng thái mặc định checkbox sẽ có dạng:      * Khi người dùng tick chọn vào checkbox   + Tick đầu tiên → Checkbox sẽ chuyển sang số 1   + Tick tiếp theo sẽ chuyển sang n+1   + Untick 1 checkbox bất kỳ sẽ thay đổi lại số trên tất cả checkbox đã chọn   + Ví dụ:     - Đầu tiên tick chọn: 1 → 2 → 3 → 4 → 5     - Untick số 2 thì:       * 3 sẽ đổi thành 2       * 4 sẽ đổi thành 3       * 5 sẽ đổi thành 4     - Trong quá trình tick hoặc untick bất kỳ checkbox nào màn hình hiển thị loading và disable tất cả checkbox cho đến khi chuyển số thứ tự độ ưu tiên xong (để tránh trường hợp user tick cùng lúc nhiều checkbox) |
| Thông tin CTKM | * Thông tin bao gồm:   + Tên chương trình khuyến mãi     - Click vào có thể [xem chi tiết CTKM](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53029740)  * + Thông tin quà tặng/giảm giá/giảm %     - Quà tặng: Hiển thị Tên sản phẩm tặng     - Giảm giá: Hiển thị số tiền được giảm     - Giảm %:  Hiển thị số tiền được giảm   + Được nhận: Thông tin số suất khuyến mãi đủ điều kiện trên đơn hàng/Số suất tối đa được nhận     - Số suất khuyến mãi đủ điều kiện là số suất khuyến mãi có đủ tồn kho     - Số suất tối đa được nhận là số suất tối đa được trả về từ Promotion khi sản phẩm đạt khuyến mãi.   + Số lượng: Tổng số lượng sản phẩm khuyến mãi được nhận theo số suất khuyến mãi đủ điều kiện.   + Số tiền: Tổng số tiền được giảm (Giảm giá/Giảm %) theo số suất khuyến mãi đủ điều kiện.     * Sắp xếp các đối tượng trên CTKM theo quy tắc từ trên xuống như sau, áp dụng cho tất cả các CTKM trong danh sách và áp dụng trong cùng 1 chương trình khuyến mãi:   + Giảm giá/Giảm %   + Sản phẩm đơn   + Nhóm sản phẩm |
| Gom nhóm đã chọn | * Floating button sẽ hiển thị nổi trên màn hình khi chọn từ 2 CTKM trở lên hoặc sau khi gom nhóm có chỉnh sửa lại độ ưu tiên của CTKM hoặc tick thêm CTKM mới. * Khi click vào button này   + Hệ thống sẽ thực hiện sắp xếp các CTKM đã chọn đẩy lên đầu danh sách   + Sắp xếp độ ưu tiên CTKM từ 1→n * Sau khi gom nhóm và sắp xếp, button này sẽ ẩn đi cho đến khi có điều chỉnh độ ưu tiên của CTKM hoặc tick thêm CTKM mới thì mới hiện lên để user thực hiện gom nhóm và sắp xếp |
| Số suất | * + Số suất tối đa được hưởng CTKM dựa trên điều kiện mua hàng   + Thông tin được trả về từ hệ thống promotion   + Người dùng có thể điều chỉnh số suất này tăng giảm tùy theo nhu cầu, nhưng chỉ được <= Số suất tối đa   + Hệ thống sẽ tự động tính toán lại số suất khả dụng khi:     - Nhấn Gom nhóm đã chọn     - Nhấn Áp dụng  * + Có thể tăng/giảm bằng button hoặc nhập số trực tiếp, miễn là: 0 < Số suất nhập <= Số suất tối đa   + Trường hợp ban đầu nhập số suất là 3, nhưng khi reload CTKM số suất thay đổi thành 2 hoặc 4 thì thay đổi số suất đã nhập = số suất mới reload lấy về.   + **Số suất và số suất tối đa sẽ thay đổi trong trường hợp CTKM chọn hoặc 1 trong 2 hình thức. Người dùng chọn lại hình thức thì Số suất và số suất tối đa sẽ thay đổi theo** |
| Danh sách quà tặng | * Button này chỉ xuất hiện khi phần thưởng CTKM có sản phẩm/nhóm sản phẩm * Có thể mở rộng/thu gọn Danh sách quà tặng |
| Giảm giá | * + Sử dụng icon   + Tên của giảm giá sẽ là cụm từ:     - "Giảm " + số tiền được giảm + "trên " + thông tin giảm trên giá trị sản phẩm/giá trị đơn hàng/giá trị nhóm sản phẩm     - Ví dụ:       * Giảm 5,000 trên giá trị sản phẩm       * Giảm 5,000 trên giá trị đơn hàng       * Giảm 5,000 trên giá trị nhóm sản phẩm   + Thành tiền: Tổng tiền giảm giá theo số suất trên đơn hàng |
| Giảm % | * + Sử dụng icon   + Tên của giảm giá sẽ là cụm từ:     - "Giảm " + % được giảm + "trên " + thông tin giảm trên giá trị sản phẩm/giá trị đơn hàng/giá trị nhóm sản phẩm     - Ví dụ:       * Giảm 5% trên giá trị sản phẩm       * Giảm 5% trên giá trị đơn hàng       * Giảm 5% trên giá trị nhóm sản phẩm   + Thành tiền: Tổng tiền giảm giá tính từ % theo số suất trên đơn hàng |
| Số lượng quà trong nhóm | Tổng số lượng quà được tặng dựa trên CTKM |
| Thông tin sản phẩm tặng | * + Hình ảnh sản phẩm   + Tên sản phẩm   + Mức thuế của sản phẩm   + Đơn vị của sản phẩm hiển thị từ thông tin khuyến mãi, không thể thay đổi   + Tồn kho hiện tại của sản phẩm, rule load tồn kho sản phẩm tặng giống sản phẩm bán, đã được mô tả ở chức năng [Đặt hàng không khuyến mãi](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48444752)   + Số suất:     - Trường số suất theo sản phẩm này sẽ xuất hiện trong các CTKM tặng sản phẩm cùng loại theo số suất dựa trên điều kiện mua     - Trong CTKM loại này người dùng không được chỉnh sửa số lượng sản phẩm mà chỉ được điều chỉnh số suất     - Người dùng được điều chỉnh số suất sao cho <= số suất tối đa. Khi người dùng điều chỉnh thì tổng số suất của scheme sẽ giảm theo, để phần số lượng mua còn lại sẽ dư ra để có thể tính tiếp cho CTKM khác.   + Số lượng:     - Số lượng sản phẩm tặng trong nhóm sẽ hiển thị = số lượng sản phẩm tặng ở màn hình xác nhận đơn hàng     - Người dùng có thể thay đổi số lượng ở đây, sao cho tổng số lượng các sản phẩm trong nhóm phải bằng = Số lượng quà trong nhóm     - Chỉ có trường hợp CTKM tặng sản phẩm cùng theo số suất dựa trên điều kiện mua, người dùng không được chỉnh sửa số lượng sản phẩm mà chỉ được điều chỉnh số suất     - Không disable cũng không kiểm tra ở 2 button tăng giảm ở phần này, sẽ check khi nhấn button Áp dụng.   + **Lưu ý:** Trường hợp sản phẩm khuyến mãi không thuộc nhãn hàng trên tuyến của nhân viên thì vẫn được hiển thị trên đơn hàng. |
| Tổng tiền khuyến mãi | Tổng tiền khuyến mãi giảm giá/% trên tất cả các CTKM đã chọn trên màn hình này. |
| Tổng quà | * Tổng số lượng sản phẩm đã chọn trên màn hình này * Ví dụ: 2A, 1B, 1C → Tổng số lượng = 6 |
| Pull refresh | * Khi pull refresh, hệ thống hiển thị cảnh báo:  * Bạn có muốn làm mới lại tất cả các CTKM trên đơn hàng?   + Đồng ý: Reload lại màn hình Khuyến mãi bình thường, đưa các checkbox và độ ưu tiên về trạng thái mặc định   + Trở lại: Tắt popup và trở lại màn hình hiện tại và giữ nguyên dữ liệu. |
| Áp dụng | * Khi nhấn button này sẽ thực hiện kiểm tra: Ap\_Dung\_KM\_GiamTru   + Nếu chưa chọn CTKM nào thì sẽ hiển thị thông báo: Vui lòng chọn ít nhất 1 chương trình khuyến mãi!     - Đồng ý: Đóng popup và trở về màn hình hiện tại không cho phép áp dụng CTKM cho tới khi user chọn ít nhất 1 CTKM   + Nếu đã có CTKM được chọn → Gửi thông tin CTKM đã chọn và độ ưu tiên qua hệ thống promotion để thực hiện tính toán giảm trừ và nhận về các CTKM kèm theo số suất khả dụng và hiển thị lên màn hình Khuyến mãi khả dụng bên dưới.   + RedV1.1.0 Khi nhấn Áp dụng sẽ gom CTKM Ontop khả dụng và CTKM bình thường khả dụng để tính toán khuyến mãi. Thứ tự ưu tiên là kiểm tra CTKM ontop → CTKM giảm trừ |

# Khuyến mãi khả dụng

RedV1.1.0: Bổ sung màn hình mới Khuyến mãi khả dụng khi nhấn Áp dụng từ màn hình Khuyến mãi bình thường

| Tên trường | Mô tả |
| --- | --- |
| Thông tin trên màn hình | * Màn hình hiển thị các CTKM khả dụng sau khi tính toán các CTKM theo độ ưu tiên, giảm trừ, số suất, tồn kho sản phẩm có thể áp dụng trên đơn hàng  * Trường hợp thay đổi sau sẽ lấy theo thông tin mới promotion trả về, ghi đè thông tin và hiển thị lên màn hình này.   + Số suất thay đổi do giảm trừ   + Số suất thay đổi do ngân sách   + Số lượng sản phẩm tặng thay đổi do số suất thay đổi   + Số lượng sản phẩm tặng thay đổi do tồn kho thay đổi   + Số lượng sản phẩm tặng thay đổi do ngân sách thay đổi * Trường hợp sau khi kiểm tra CTKM khả dụng mà không có CTKM nao phù hợp thì màn hình này sẽ hiển thị trống như sau: |
| Button back | Quay về màn hình Khuyến mãi bình thường  Giữ nguyên các thông tin mà người dùng nhập trên màn hình và các CTKM trả về trước đó |
| Áp dụng | Lấy các thông tin CTKM khả dụng trên màn hình, quay về màn hình Xác nhận đơn hàng đồng thời hiển thị thông tin khuyến mãi người dùng đã chọn lên màn hình Xác nhận đơn hàng.  Từ màn hình Xác nhận đơn hàng → nhấn vào button Khuyến mãi bình thường, sẽ hiển thị:   * CTKM khả dụng đã chọn hợp lệ từ màn hình Khuyến mãi khả dụng * CTKM khả dụng chưa chọn * CTKM mới thêm vào |

# Chi tiết các chương trình Khuyến mãi bình thường

true