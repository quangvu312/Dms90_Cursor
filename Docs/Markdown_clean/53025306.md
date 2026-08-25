1. Cấu trúc điều kiện khuyến mãi

   ### **Khuyến mãi bình thường (NORMAL)**

   * Các **điều kiện** được nhóm với nhau bởi `and` hoặc **`or`**, mỗi nhóm có thể chứa điều kiện hoặc nhóm khác
     + **điều kiện**: mô tả về điều kiện khuyến mãi
     + **and**: phải thõa tất cả điều kiện trong danh sách
     + **or**: phải thõa một điều kiện trong danh sách
   * Ví dụ: Mua 10 sản phẩm trong danh sách SKU1, SKU2

     jsConfluencetrue{
     "all": [
     {
     "fact": "data",
     "operator": "inSkus",
     "value": {
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
     },
     {
     "fact": "data",
     "operator": "totalQuantityInSkusGreaterThanInclusive",
     "value": {
     "total\_quantity": 10
     }
     }
     ]
     }

     ### **Khuyến mãi Bậc thang (SIDE STEP)**
   * Các gói điều kiện được thể hiện bởi **any** hoặc **or**, bên trong sẽ chứa các điều kiện cùng với **id\_package** để định danh từng gói
   * Các **điều kiện** được nhóm với nhau bởi `and` hoặc **`or`**, mỗi nhóm có thể chứa điều kiện hoặc nhóm khác
     + - **điều kiện**: mô tả về điều kiện khuyến mãi
       - **and**: phải thõa tất cả điều kiện trong danh sách
       - **or**: phải thõa một điều kiện trong danh sách

* + Ví dụ: **Gói 1:** Mua 10 sản phẩm trong danh sách SKU1, SKU2, **Gói 2**: Mua 5 sản phẩm trong danh sách SKU3, SKU4

    jsConfluencetrue{
    "any": [
    {
    "id\_package": "129b1c16-472d-4ae3-94cf-fff6dbaa7648", //=============================> GÓI THỨ NHẤT
    "all": [
    {
    "fact": "data",
    "operator": "inSkus",
    "value": {
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
    },
    {
    "fact": "data",
    "operator": "totalQuantityInSkusGreaterThanInclusive",
    "value": {
    "total\_quantity": 10
    }
    }
    ]
    },
    {
    "id\_package": "8f2a2b10-94b0-43ee-98b6-309c54419ee3", //=====================================> GÓI THỨ 2
    "all": [
    {
    "fact": "data",
    "operator": "inSkus",
    "value": {
    "skus": [
    {
    "id": "3",
    "sku": "SKU3"
    },
    {
    "id": "4",
    "sku": "SKU4"
    }
    ]
    }
    },
    {
    "fact": "data",
    "operator": "totalQuantityInSkusGreaterThanInclusive",
    "value": {
    "total\_quantity": 5
    }
    }
    ]
    }
    ]
    }

1. Danh sách điều kiện khuyến mãi
   * Set **`quantity`** trên mỗi sản phẩm trong điều kiện **`inSkus`** khi kết hợp với điều kiện **`totalQuantityOfGroupsGreaterThanInclusive`**, **`totalAmountOfGroupsGreaterThanInclusive`** để định nghĩa bộ sản phẩm. Bộ sản phẩm là một danh sách các sản phẩm kèm theo số lượng trên mỗi sản phẩm.
   * Set **`value.multiple=true`** tại điều kiện **`quantityOfProductGreaterThanInclusive`**, **`totalQuantityInSkusGreaterThanInclusive`**, **`totalAmountInSkusGreaterThanInclusive`**, **`totalQuantityOfGroupsGreaterThanInclusive`**, **`totalAmountOfGroupsGreaterThanInclusive`**, **`totalAmountOfOrderGreaterThanInclusive`** để tính bội số và giá trị khuyến mãi sẽ tính theo bội số.

     | Điều kiện khuyến mãi | Định danh | Dữ liệu mẫu | Mô tả |
     | --- | --- | --- | --- |
     | Trong danh sách sản phẩm | **`inSkus`** | `{` `"fact": "data",` `"operator": "inSkus",` `"value": {` `"skus": [` `{` `"id": "1",` `"sku": "SKU1"` `},` `{` `"id": "2",` `"sku": "SKU2"` `}` `]` `}` `}` | + Set **`value.``skus[].quantity`** để định nghĩa bộ sản phẩm |
     | Trong nhóm sản phẩm | **`inGroups`** | `{` `"fact": "data",` `"operator": "inGroups",` `"value": {` `"groups": [` `{` `"id": "1"` `},` `{` `"id": "2"` `}` `]` `}` `}` |  |
     | Số lượng sản phẩm | **`quantityOfProductGreaterThanInclusive`** | `{` `"fact": "data",` `"operator": "quantityOfProductGreaterThanInclusive",` `"value": {` `"quantity": 3` `}` `}` |  |
     | Tổng số lượng nhóm sản phẩm | **`totalQuantityInSkusGreaterThanInclusive`** | `{` `"fact": "data",` `"operator": "totalQuantityInSkusGreaterThanInclusive",` `"value": {` `"total_quantity": 3` `}` `}` |  |
     | Tổng giá trị nhóm sản phẩm | **`totalAmountInSkusGreaterThanInclusive`** | `{` `"fact": "data",` `"operator": "totalAmountInSkusGreaterThanInclusive",` `"value": {` `"total_amount": 300000` `}` `}` |  |
     | Tổng số lượng bộ sản phẩm | **`quantityOfGroupGreaterThanInclusive`** | `{` `"fact": "data",` `"operator": "quantityOfGroupGreaterThanInclusive",` `"value": {` `"quantity": 3` `}` `}` |  |
     | Tổng giá trị đơn hàng | **`totalAmountOfOrderGreaterThanInclusive`** | `{` `"fact": "data",` `"operator": "totalAmountOfOrderGreaterThanInclusive",` `"value": {` `"total_amount": 300000` `}` `}` |  |
     |  |  |  |  |
     |  |  |  |  |
2. Danh sách điều kiện đối tượng sử dụng

   | Điều kiện đối tượng | Định danh | Dữ liệu mẫu | Mô tả |
   | --- | --- | --- | --- |
   | Trong danh sách khu vực | **inAreas** | `{` `"fact": "data",` `"operator": "inAreas",` `"value": {` `"areas": [` `{` `"id": "1"` `},` `{` `"id": "2"` `}` `]` `}` `}` |  |
   | Trong danh sách nhà phân phối | `inDistributors` | `{` `"fact": "data",` `"operator": "inDistributors",` `"value": {` `"distributors": [` `{` `"id": "1"` `},` `{` `"id": "2"` `}` `]` `}` `}` |  |
   | Trong danh sách cửa hàng | `inMerchants` | `{` `"fact": "data",` `"operator": "inMerchants",` `"value": {` `"merchants": [` `{` `"id": "1"` `},` `{` `"id": "2"` `}` `]` `}` `}` |  |
   | Trong danh sách kênh bán hàng | `inSalesChannels` | `{` `"fact": "data",` `"operator": "inSalesChannels",` `"value": {` `"sales_channels": [` `{` `"id": "1"` `},` `{` `"id": "2"` `}` `]` `}` `}` |  |
   | Trong danh sách vị trí điểm bán | `inStoreLocations` | `{` `"fact": "data",` `"operator": "inStoreLocations",` `"value": {` `"store_locations": [` `{` `"id": "1"` `},` `{` `"id": "2"` `}` `]` `}` `}` |  |
   | Trong danh sách loại điểm bán | `inStoreTypes` | `{` `"fact": "data",` `"operator": "inStoreTypes",` `"value": {` `"store_types": [` `{` `"id": "1"` `},` `{` `"id": "2"` `}` `]` `}` `}` |  |
   | Trong danh sách hạng điểm bán | `inStoreRanks` | `{` `"fact": "data",` `"operator": "inStoreRanks",` `"value": {` `"store_ranks": [` `{` `"id": "1"` `},` `{` `"id": "2"` `}` `]` `}` `}` |  |
3. Danh sách điều kiện đối tượng bán:

   | Điều kiện đối tượng | Định danh | Dữ liệu mẫu | Mô tả |
   | --- | --- | --- | --- |
   | Trong danh sách khu vực | **inAreas** | `{` `"fact": "data",` `"operator": "inAreas",` `"value": {` `"areas": [` `{` `"id": "1"` `},` `{` `"id": "2"` `}` `]` `}` `}` |  |
   | Trong danh sách nhà phân phối | `inDistributors` | `{` `"fact": "data",` `"operator": "inDistributors",` `"value": {` `"distributors": [` `{` `"id": "1"` `},` `{` `"id": "2"` `}` `]` `}` `}` |  |