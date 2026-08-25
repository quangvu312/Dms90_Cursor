1. **SSO**

   1. **Resource**: Tài nguyên của hệ thống.
   2. **Quyền**: Thao tác được phép thực hiện trên tài nguyên.
   3. **API Endpoint**: Danh sách các API tương ứng với thao tác trên tài nguyên

      | Resource | Quyền | API Endpoint | Mô tả |
      | --- | --- | --- | --- |
      | PROMOTION | **BROWSE** |  | Truy cập trang quản lý chương trình khuyến mãi |
      | READ | `GET /v1/promotions/:id` | Lấy thông tin chương trình khuyến mãi |
      | `GET /v1/promotions:search` | Tìm kiếm chương trình khuyến mãi |
      | `GET /v1/promotions:count` | Đếm số lượng chương trình khuyến mãi theo trạng thái |
      | **CREATE** | `POST /v1/promotions` | Tạo chương trình khuyến mãi |
      | APPROVE | `POST /v1/promotions:approve/:id` | Phê duyệt chương trình khuyến mãi |
      | REQUEST\_APPROVAL | `POST /v1/promotions:request-approval/:id` | Yêu cầu duyệt chương trình khuyến mãi |
      | POSTPONE | `POST /v1/promotions:postpone/:id` | Tạm ngưng chương trình khuyến mãi |
      | RESUME | `POST /v1/promotions:resume/:id` | Tiếp tục chương trình khuyến mãi đã tạm ngưng |
      | END | `POST /v1/promotions:end/:id` | Kết thúc chương trình khuyến mãi |
      | REJECT | `POST /v1/promotions:reject/:id` | Từ chối chương trình khuyến mãi |
      | UPDATE | `PATCH /v1/promotions/:id` | Cập nhật chương trình khuyến mãi |
      | DELETE | `DELETE /v1/promotions/:id` | Xóa chương trình khuyến mãi |

      ​​​​
2. **CATALOG API**

   1. Sản phẩm

      1. Tìm kiếm sản phẩm

         * <https://eco-dms-api-order-dev.finviet.com.vn/docs/private#api-Products_Danh_s%C3%A1ch_s%E1%BA%A3n_ph%E1%BA%A9m-Get_List_Products_by_list_ids,codes>
      2. List sản phẩm

         * <https://eco-dms-api-order-dev.finviet.com.vn/docs/private#api-Products_Danh_s%C3%A1ch_s%E1%BA%A3n_ph%E1%BA%A9m-Get_List_Products>
      3. List nhóm sản phẩm

         * <https://eco-dms-api-order-dev.finviet.com.vn/docs/private#api-ProductGroup_Nh%C3%B3m_s%E1%BA%A3n_ph%E1%BA%A9m-ListProductGroups>
   2. Nhà phân phối

      1. Tìm kiếm nhà phân phối

         * <https://eco-dms-api-order-dev.finviet.com.vn/docs/private#api-Distributor_Nh%C3%A0_ph%C3%A2n_ph%E1%BB%91i-list_Distributors>
         * <https://eco-dms-api-order-dev.finviet.com.vn/docs/private#api-Distributor_Nh%C3%A0_ph%C3%A2n_ph%E1%BB%91i-list_Distributors_2>
   3. Loại kho
      1. List loại kho
         * <https://eco-dms-api-warehouse-dev.finviet.com.vn/docs/private#api-Warehouse_Type_Lo%E1%BA%A1i_Kho-List_Warehouse_Types>
   4. Cửa hàng
      1. Tìm kiếm/list cửa hàng
         * <https://eco-dms-api-order-dev.finviet.com.vn/docs/private#api-Store_%C4%90i%E1%BB%83m_b%C3%A1n-List_Stores>
         * <https://eco-dms-api-order-dev.finviet.com.vn/docs/private#api-Store_%C4%90i%E1%BB%83m_b%C3%A1n-List_Stores_2>
   5. Quận/huyện
      1. TÌm kiếm/list quận/huyện
         * <https://eco-dms-api-order-dev.finviet.com.vn/docs/private#api-District_Qu%E1%BA%ADn,_Huy%E1%BB%87n-List_Districts>
   6. Kênh bán hàng  
      1. TÌm kiếm/list kênh bán hàng
         * <https://eco-dms-api-order-dev.finviet.com.vn/docs/private#api-Sales_Channel_K%C3%AAnh_b%C3%A1n_h%C3%A0ng-List_Sales_Channels>
         * <https://eco-dms-api-order-dev.finviet.com.vn/docs/private#api-Sales_Channel_K%C3%AAnh_b%C3%A1n_h%C3%A0ng-List_Sales_Channels_2>
   7. Vị trí điểm bán  
      1. TÌm kiếm/list vị trí điểm bán
         * <https://eco-dms-api-order-dev.finviet.com.vn/docs/private#api-Store_Location_V%E1%BB%8B_tr%C3%AD_%C4%91i%E1%BB%83m_b%C3%A1n-List_Store_Locations>
   8. Loại điểm bán  
      1. TÌm kiếm/list loại điểm bán
         * <https://eco-dms-api-order-dev.finviet.com.vn/docs/private#api-Store_Type_Lo%E1%BA%A1i_%C4%91i%E1%BB%83m_b%C3%A1n-List_Store_Types>
   9. Hạng điểm bán
      1. TÌm kiếm/list hạng điểm bán
         * <https://eco-dms-api-order-dev.finviet.com.vn/docs/private#api-Store_Rank_H%E1%BA%A1ng_%C4%91i%E1%BB%83m_b%C3%A1n-List_Store_Ranks>