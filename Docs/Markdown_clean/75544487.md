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

# Khuyến mãi không đồng thời

Document Promotion khuyến mãi không đồng thời: [6 - Cấu hình không đồng thời - PROMOTION - Finviet - Document Management](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73146564)

Link UI Km App SM:

Hiển thị trên màn hình Khuyến mãi App Salesman

| Khuyến mãi Ontop | Khuyến mãi bình thường |
| --- | --- |
| | Màn hình | Mô tả | | --- | --- | |  | * Các KM ontop có cấu hình không đồng thời: sắp xếp ở cuối danh sách KM. * Mặc định untick. * Khi user tick chọn KM, App sẽ kiểm tra rule promotion gửi để disable các KM không đồng thời * Khi user untick KM, App sẽ kiểm tra rule promotion gửi để enable lại các KM không đồng thời để user có thể chọn lại * Các KM Ontop còn lại: Mặc định tick chọn và disbale ô tick, user không được untick | | | Màn hình | Mô tả | | --- | --- | |  | * Các KM có cấu hình không đồng thời: Sắp xếp Ở cuối danh sách KM, * Mặc định untick. * Khi user tick chọn KM, app sẽ kiểm tra rule promotion gửi để disable các KM không đồng thời * Khi user untick KM, App sẽ kiểm tra rule promotion gửi để enable lại các KM không đồng thời để user có thể chọn lại * User tick chọn vẫn hiển thị số thứ tự như bình thường | |
| Một số lưu ý khi nhấn Áp dụng:   * Trường hợp 1:   + 2 CTKM A và B không đồng thời, đã chọn xong CTKM   + User tắt cấu hình A không thời B   + Lúc này trên đơn hàng họ bắt buộc phải chọn A và B cho CTKM ontop   + Khi nhấn áp dụng →  Hệ thống sẽ báo lỗi chung chung là "Có lỗi xảy ra, nhấn Đồng ý để thử lại!" →  nhấn Đồng ý →  Reload lại màn hình CTKM ontop → Auto checked A và B * Trường hợp 2:   + 2 CTKM A và B bình thường không cấu hình không đồng thời   + CTKM ontop đã check chọn cả 2   + User bật cấu hình A không thời B   + Lúc này trên đơn hàng chỉ được chọn A hoặc B cho CTKM ontop   + Khi nhấn áp dụng →  Hệ thống sẽ báo lỗi:     - <Tên CTKM A> và <Tên CTKM B> không đồng thời, vui lòng chỉ chọn 1 trong 2.     - Ví dụ: CTKM Mua 1 tặng 1 và CTKM Mua 1 giảm 5000 không đồng thời, vui lòng chỉ chọn 1 trong 2.   + Nhấn Đồng ý →  Reload lại màn hình CTKM ontop → Uncheck A và B để user tự chọn lại CTKM ko đồng thời * Trường hợp 3: User không chọn CTKM không đồng thời nào:  * + Thông báo: Chưa chọn đủ CTKM!   + Không cho nhấn Áp dụng cho đến khi chọn đủ CTKM đồng thời * Trường hợp 4: Có 5 loại CTKM KĐT, user chọn ko đủ (chọn 4/5)   + Thông báo: Chưa chọn đủ CTKM!   + Không cho nhấn Áp dụng cho đến khi chọn đủ CTKM đồng thời | * Trường hợp 3: User không chọn CTKM không đồng thời nào:   + Cho nhấn Áp dụng không bắt buộc chọn. * Trường hợp 4: Có 5 loại CTKM KĐT, user chọn ko đủ (chọn 4/5)   + Cho nhấn Áp dụng không bắt buộc chọn. |