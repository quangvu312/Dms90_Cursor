trueTích hợp Promotionfalseautotoptrue134320

Danh sách API

| STT | API | Mô tả |
| --- | --- | --- |
| 1 | List Promtions | Lấy danh sách chương trình khuyến mãi hợp lệ: + Chương trình khuyến mãi ON\_TOP + Chương trình khuyến mãi Bình thường với thông tin số suất khuyến mãi |
| 2 | Combine Promotions | Tính giá trị khuyến mãi cuối cùng khi chọn nhiều chương trình khuyến mãi kết hợp cùng nhau: + Trả về session dùng cho API Apply Promotions |
| 3 | Apply Promotions | Ghi nhận các khuyến mãi đã trả về ở API Combine Promotions: + Gửi thông tin session nhận được từ API Combine Promotions + Trả về transaction dùng cho API Commit Apply Promotions và Revert Apply Promotions |
| 4 | Commit Apply Promotions | Xác nhận giao dịch khuyến mãi trả về ở API Apply Promotions: + Gửi thông tin transaction nhận được từ API Apply Promotions + Gửi thông tin mã đơn hàng |
| 5 | Revert Apply Promotions | Hủy giao dịch khuyến mãi trả về từ API Apply Promotions: + Gửi thông tin transaction nhận được từ API Apply Promotions |

API Playground: [https://eco-dms-promotion-api-dev.finviet.com.vn](https://eco-dms-promotion-api-dev.finviet.com.vn/)