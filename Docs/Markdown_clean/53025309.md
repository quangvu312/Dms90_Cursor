1. Cấu trúc hình thức khuyến mãi

   ### **Khuyến mãi bình thường (NORMAL)**

   * Các **hình thức** được nhóm với nhau bởi `and` hoặc **`or`**, mỗi nhóm có thể chứa hình thức hoặc nhóm khác
     + **hình thức**: mô tả về hình thức khuyến mãi mà người dùng được nhận
     + **and**: được nhận tất cả hình thức khuyến mãi trong danh sách
     + **or**: được nhận một hình thức khuyến mãi trong danh sách
   * Ví dụ: Giảm giá bội số 10000 trên tổng đơn và tặng kèm bội số 2 sản phẩm trong danh sách SKU1, SKU2

     jsConfluencetrue{
     "all": [
     {
     "operator": "discountFixedAmount",
     "value": {
     "discount\_amount": 10000,
     "calculate\_on": "totalAmountOfOrder"
     }
     },
     {
     "operator": "attachProducts",
     "value": {
     "total\_quantity": 2,
     "skus": [
     {
     "id": "1",
     "sku": "SKU1"
     },
     {
     "id": "2",
     "sku": "SKU2"
     }
     ]
     }
     }
     ]
     }

     ### **Khuyến mãi Bậc thang (SIDE STEP)**
   * Các gói hình thức được thể hiện bởi **any** hoặc **or**, bên trong sẽ chứa các điều kiện cùng với **id\_package** để định danh từng gói
   * Các **hình thức** được nhóm với nhau bởi `and` hoặc **`or`**, mỗi nhóm có thể chứa hình thức hoặc nhóm khác
     + **hình thức**: mô tả về hình thức khuyến mãi mà người dùng được nhận
     + **and**: được nhận tất cả hình thức khuyến mãi trong danh sách
     + **or**: được nhận một hình thức khuyến mãi trong danh sách
   * Ví dụ: **Gói 1:** Giảm 10% tổng số tiền nhóm sản phẩm (tối đa 200k), **Gói 2:** Tặng sản phẩm trong danh sách, **Gói 3:** Tặng sản phẩm trong danh sách

     jsConfluencetrue{
     "any": [
     {
     "id\_package": "6b12b371-5844-40db-823c-4c2c95b1e48a", //===============================> Gói thứ nhất
     "all": [
     {
     "fact": "data",
     "operator": "discountPercent",
     "value": {
     "calculate\_on": "totalAmountOfSkus",
     "discount\_percent": 10,
     "discount\_maximum\_amount": "20000"
     },
     "params": {
     "rule": "RULE",
     "id": "26d68d84-cb90-43a4-83e8-393ccbd07fc3",
     "option": "ActionSetupPercentDiscount"
     },
     "id": "14497124-3047-423c-893d-bd694fab36d2"
     }
     ],
     "kind\_of\_user": "MERCHANT",
     "slot\_desired": 3,
     "budget\_desired": {
     "type\_of\_budget": "SLOT",
     "value\_of\_budget": 12
     },
     "kind\_of\_deduction": "DESIRED"
     },
     {
     "id\_package": "abd3c440-e1d9-4cb0-8534-68d9e204465b", //=====================================> Gói thứ 2
     "all": [
     {
     "fact": "data",
     "operator": "attachProducts",
     "value": {
     "total\_quantity": 2,
     "skus": [
     {
     "id": "553",
     "sku": "DMSP001"
     },
     {
     "id": "554",
     "sku": "DMSP002"
     }
     ]
     },
     "params": {
     "rule": "RULE",
     "id": "26d68d84-cb90-43a4-83e8-393ccbd07fc3",
     "option": "ActionSetupAmountDiscount"
     },
     "id": "0cef757f-3fce-42c6-8d59-e46b8c3b0b01"
     }
     ],
     "kind\_of\_deduction": "ALL\_PRODUCTS",
     "slot\_desired": "3"
     },
     {
     "id\_package": "129b1c16-472d-4ae3-94cf-fff6dbaa7648", //========================================> Gói thứ 3
     "all": [
     {
     "fact": "data",
     "operator": "attachProducts",
     "value": {
     "total\_quantity": 2,
     "skus": [
     {
     "id": "553",
     "sku": "DMSP001"
     },
     {
     "id": "554",
     "sku": "DMSP002"
     }
     ]
     },
     "params": {
     "rule": "RULE",
     "id": "26d68d84-cb90-43a4-83e8-393ccbd07fc3",
     "option": "ActionSetupAmountDiscount"
     },
     "id": "8916b26c-91c2-4423-ae15-5034f883c128"
     }
     ],
     "kind\_of\_deduction": "DESIRED",
     "slot\_desired": "3"
     }
     ]
     }
2. Danh sách hình thức khuyến mãi

   | Hình thức khuyến mãi | Định danh | Tính dựa trên | Dữ liệu mẫu | Ghi chú |
   | --- | --- | --- | --- | --- |
   | Giảm số tiền cố định | **`discountFixedAmount`** | Tổng giá trị đơn hàng | `{` `"operator": "discountFixedAmount",` `"value": {` `"discount_amount": 10000,` `"calculate_on": "totalAmountOfOrder"` `}` `}` | * `value.calculate_on`:   + **`totalAmountOfOrder`**: Tính khuyến mãi trên tổng giá trị đơn hàng   + **`totalAmountOfOrder`**: Tính khuyến mãi trên tổng giá trị nhóm sản phẩm |
   | Giảm số tiền theo phần trăm | **`discountPercent`** | Tổng giá trị đơn hàng | `{` `"operator": "discountPercent",` `"value": {` `"discount_percent": 10,` `"discount_maximum_amount": 10000,` `"calculate_on": "totalAmountOfOrder"` `}` `}` | * `value.calculate_on`:   + **`totalAmountOfOrder`**: Tính khuyến mãi trên tổng giá trị đơn hàng   + **`totalAmountOfOrder`**: Tính khuyến mãi trên tổng giá trị nhóm sản phẩm |
   | Tặng kèm sản phẩm cùng loại | **`attachSameProduct`** |  | `{` `"operator": "attachSameProduct",` `"value": {` `"quantity": 1,`  "**lo\_date\_criteria**":      {               "field": "info\_lo\_date",                 "operator": "range",                    "value": {                                 "start": "2025-06-01T00:00:00.000Z",                                    "end":   "2025-06-30T23:59:59.000Z"                                          }          },   gift\_recommended: BY\_CONDITION/ BY\_CONFIG  `}` `}` | * **gift\_recommended**: skus chỉ xuất hiện khi cấu hình về LoDate * **BY\_CONDITION**: Lấy điều kiện LoDate từ cấu hình Condition * **BY\_CONFIG**: Lấy điều kiện LoDate từ việc nguời dùng tự cấu hình * **lo\_date\_criteria**: thông tin này chỉ có xuất hiện khi cấu hình lodate |
   | Tặng kèm n sản phẩm trong danh sách | **`attachProducts`** |  | `{` `"operator": "attachProducts",` `"value": {` `"total_quantity": 2,` `"skus": [` `{` `"id": "1",` `"sku": "SKU1",`                    "**lo\_date\_criteria**":  {                                          "field": "info\_lo\_date",                                          "operator": "range",                                          "value": {                                            "start": "2025-06-01T00:00:00.000Z",                                            "end":   "2025-06-30T23:59:59.000Z"                                          }                                  }                  }.  `{` `"id": "2",` `"sku": "SKU2",`                    "**lo\_date\_criteria**": {                                          "field": "info\_bach\_no",                                          "operator": "bach\_no",                                          "value": ["LO\_123213", "LO\_3b2hhc3", "LO\_376ewbc"]                                      }                     } `],`       "gift\_recommended":  BY\_CONFIG `}` `}` | * **lo\_date\_criteria**: thông tin này chỉ có xuất hiện khi cấu hình lodate * **gift\_recommended**: skus chỉ xuất hiện khi cấu hình về LoDate * **BY\_CONFIG**: Lấy điều kiện LoDate từ việc nguời dùng tự cấu hình |
   | Đồng giá sản phẩm | **`flatPrice`** |  | `{` `"operator": "flatPrice",` `"value": {` `"flat_price": 2000,` `"calculate_on": "allProductsInCondition"` `}` `}` | * `allProductsInCondition`: Giảm trừ trên tất cả sản phẩm thoả điều kiện |