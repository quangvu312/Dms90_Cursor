1. Cấu trúc hành động khuyến mãi

   ### **Khuyến mãi bình thường (NORMAL)**

   * **discount.action**: Thông tin hành động khuyến mãi
     + Các **hành động** được nhóm với nhau bởi `all` hoặc **`any`**
     + **all**: Được nhận tất cả hành động trong danh sách
     + **any**: Được nhận một hành động trong danh sách
   * **discount.maximum\_slots**: Số suất tối đa của khuyến mãi này
   * **discount.applied\_slots**: Số suất áp dụng cho khuyến mãi này ,dùng chung cho tất cả các hình thức trong 1 khuyến mãi
     + Đối với loại hình thức MixAnd,, có 1 số case đặc biệt, dùng slot mặc định = 1:
       - `"operator": "discountPercent"` va `"calculate_on": "totalAmountOfOrder"`
       - `"operator": "discountPercent"` va `"calculate_on": "totalAmountOfSkus"`
       - `"operator": "flatPrice"` va `"calculate_on": "allProductsInCondition"`
   * **discount.discounted\_products**: Danh sách sản phẩm dùng để tính khuyến mãi
   * Ví dụ:

     + **Trả thưởng một hình thức:** Giảm 5000 trên đơn hàng (hình thức giảm tiền trên đơn)

       jsConfluencetrue{
       "discount": {
       "maximum\_slots": 2, // Số suất tối đa của khuyến mãi này
       "applied\_slots": 2, // Số suất áp dụng cho khuyến mãi này
       "discounted\_products": [ // Danh sách sản phẩm thõa điều kiện khuyến mãi
       {
       "id": "1",
       "sku": "SKU1",
       "quantity": 2
       }
       ],
       "action": {
       "all": [
       {
               "id": "14497124-3047-423c-893d-bd694fab36d2",
       "operator": "discountFixedAmount",
       "discount\_value": 10000,
       "discount\_value\_per\_slot": 5000
       }
       ]
       }
       }
       }
     + **Trả thưởng nhiều hình thức:** Giảm 5000 trên đơn hàng và tặng sản phẩm trong danh sách

       jsConfluencetrue{
       "discount": {
       "maximum\_slots": 2, // Số suất tối đa của khuyến mãi này
       "applied\_slots": 2, // Số suất áp dụng cho khuyến mãi này
       "discounted\_products": [ // Danh sách sản phẩm thõa điều kiện khuyến mãi
       {
       "id": "1",
       "sku": "SKU1",
       "quantity": 2
       }
       ],
       "action": {
       "all": [ // Nếu trả thưởng nhiều hình thức cho scheme VÀ(AND) thì mảng all sẽ chứa nhiều phần tử (ví dụ dưới là giảm tiền và tặng kèm sản phẩm)
       {
                "id": "14497124-3047-423c-893d-bd694fab36d2",
       "operator": "discountFixedAmount",
       "discount\_value": 10000,
       "discount\_value\_per\_slot": 5000
       },
       {
       "id": "0cef757f-3fce-42c6-8d59-e46b8c3b0b01",
       "operator": "attachProducts",
       "total\_quantity": 4,
       "total\_quantity\_per\_slot": 2,
       "skus": [
       {
       "id": "1",
       "sku": "SKU3",
       "status": "ACTIVE",
       "available\_quantity": 999999999
       },
       {
       "id": "2",
       "sku": "SKU4",
       "status": "ACTIVE",
       "available\_quantity": 999999999
       }
       ],
               }
       ]
       }
       }
       }

### **Khuyến mãi Bậc thang (SIDE STEP) (Dựa vào method\_apply để xác định)**

* + **discount.action**: Thông tin hành động khuyến mãi   
    - Các gói hành động được nhóm với nhau bởi `all` hoặc **`any`**
      * **all**: Được nhận tất cả gói hành động trong danh sách được liệt kê
      * **any**: Được nhận một gói hành động trong danh sách được liệt kê
      * Trong các gói sẽ được định danh bằng **id\_package**
      * **maximum\_slots**: Số suất tối đa cho từng gói
      * **applied\_slots**: Số suất áp dụng cho từng gói, dùng chung cho tất cả các hình thức trong 1 khuyến goi
        + Đối với loại hình thức MixAnd,, có 1 số case đặc biệt, dùng slot mặc định = 1:
          - `"operator": "discountPercent"` va `"calculate_on": "totalAmountOfOrder"`
          - `"operator": "discountPercent"` va `"calculate_on": "totalAmountOfSkus"`
          - `"operator": "flatPrice"` va `"calculate_on": "allProductsInCondition"`
      * **discounted\_products**: Danh sách sản phẩm dùng để tính khuyến mãi cho từng gói
  + **discount.discounted\_products**: Danh sách sản phẩm dùng để tính khuyến mãi cho cả chương trình khuyến mãi
  + **discount.applied\_slots**: Tổng slot cho tất cả các gói, mà nguời dùng lựa chọn
  + **discount.maximum\_slots:** Tổng max slot cho tất cả các gói
  + Ví dụ: **Gói 1:**Giảm 10% tổng số tiền nhóm sản phẩm (tối đa 200k), **Gói 2:**Tặng sản phẩm trong danh sách, **Gói 3:**Tặng sản phẩm trong danh sách

    jsConfluencetrue{
    "id": "0e62a3c9-5309-4c1f-bb12-dc5a13b79ee5",
    "name": "[Phuong-Test][Sellout]Mua nhóm (A,B,C) đạt 200K giảm 10% nhóm sản phẩm - TH1 - full đối tượng - ĐK hoặc",
    "description": "<p>[Phuong-Test][Sellout]Mua nhóm (A,B,C) đạt 200K giảm 10% nhóm sản phẩm - TH1 - full đối tượng - ĐK hoặc</p>",
    "kind": "ON\_TOP",
    "method\_apply": "SIDE\_STEP", //=================================> Dựa vào field "method\_apply" để xác định khuyến mãi có phải bậc thang hay không
    "action\_operators": [ //Khuyến mãi bậc thang:"SIDE\_STEP", Khuyến mãi bình thường: "NORMAL"
    "discountPercent",
    "attachProducts"
    ],
    "code": "SIDESTEP",
    "sale\_type": "SELL\_OUT",
    "warehouse\_type\_id": "1",
    "start\_time": "2025-05-27T04:10:06.700Z",
    "expire\_time": "2025-08-31T06:48:06.700Z",
    "discount": {
    "action": {
    "all": [ //=================================> Nếu là all thì phải lấy hết các gói, nếu là any thì được chọn giữa các gói
    {
             "id\_package": "d4e24548-e583-42b2-864c-2aa97e80dcc2", //========================> Gói thứ nhất
    "all": [
    {
    "id": "14497124-3047-423c-893d-bd694fab36d2",
    "operator": "discountPercent",
    "calculate\_on": "totalAmountOfSkus",
    "discount\_percent": 10,
    "discount\_value": 20000,
    "discount\_value\_per\_slot": 42000
    }
    ],
    "package\_no": 1                 //=================> Gói bậc 01
    "maximum\_slots": 1, //=================> Số suất tối đa cho gói thứ nhất
    "applied\_slots": 1, //=================> Số suất áp dụng cho gói thứ nhất
    "discounted\_products": [ //=================> Số lượng sản phẩm giảm trừ cho gói thứ nhất
    {
    "id": "556",
    "sku": "DMSP004",
    "quantity": 40
    },
    {
    "id": "553",
    "sku": "DMSP001",
    "quantity": 2
    }
    ]
    },
    {
    "id\_package": "375ff798-9578-48af-b562-9ae58dd1ac99", //==========================> Gói thứ hai
              "all": [
    {
    "id": "0cef757f-3fce-42c6-8d59-e46b8c3b0b01",
    "operator": "attachProducts",
    "total\_quantity": 30,
    "total\_quantity\_per\_slot": 2,
    "skus": [
    {
    "id": "554",
    "sku": "DMSP002",
    "status": "ACTIVE",
    "available\_quantity": 366
    }
    ]
    }
    ],
             "package\_no": 2                 //=================> Gói bậc 02         
    "maximum\_slots": 1, //======================> Số suất tối đa cho gói thứ hai
    "applied\_slots": 1,        //======================> Số suất áp dụng cho gói thứ hai
    "discounted\_products": [   //======================> Số lượng sản phẩm giảm trừ cho gói thứ hai
    {
    "id": "554",
    "sku": "DMSP002",
    "quantity": 2
    }
    ]        
    },
    {
             "id\_package": "aba292c8-4243-406b-8f72-bf9c908481c0", //=================================> Gói thứ ba
    "all": [
    {
    "id": "8916b26c-91c2-4423-ae15-5034f883c128",
    "operator": "attachProducts",
    "total\_quantity": 30,
    "total\_quantity\_per\_slot": 2,
    "skus": [
    {
    "id": "554",
    "sku": "DMSP002",
    "status": "ACTIVE",
    "available\_quantity": 366
    }
    ]
    }
    ],
             "package\_no": 3                //=================> Gói bậc 03          
    "maximum\_slots": 1, //=========================> Số suất tối đa cho gói thứ ba
    "applied\_slots": 1,        //=========================> Số suất áp dụng cho gói thứ ba
    "discounted\_products": [   //=========================> Số lượng sản phẩm giảm trừ cho gói thứ ba
    {
    "id": "554",
    "sku": "DMSP002",
    "quantity": 1
    }
    ]        
    }
    ]
    },
    "maximum\_slots": 3, //===========================> Số suất tối đa cho cả chương trình khuyến mãi
    "applied\_slots": 3, //===========================> Số suất áp dụng cho cả chương trình khuyến mãi
    "discounted\_products": [ //===========================> Số lượng sản phẩm giảm trừ cho cả chương trình khuyến mãi
    {
    "id": "556",
    "sku": "DMSP004",
    "quantity": 40
    },
    {
    "id": "553",
    "sku": "DMSP001",
    "quantity": 2
    },
    {
    "id": "554",
    "sku": "DMSP002",
    "quantity": 3
    }
    ]
    }
    }

    ### **PAYLOAD INTEGRATE FOR API COMBINE**

    - ### **Đối với Khuyến mãi Bình thường (method\_apply = NORMAL)**

      jsConfluencetrue{
      "order": {
      "products": [
      {
      "id": 702,
      "sku": "PHUONGOW004",
      "quantity": 50,
      "price": 22500,
      "package\_unit\_id": "15",
      "group\_ids": []
      }
      ],
      "total\_amount": 1125000,
      "seller": {
      "id": "274",
      "area\_id" : "347" // ====> ID khu vực => Đối với đơn SELL\_OUT cần truyên thông tin area của DISTRIBUTOR, đối với đơn SELL\_IN không cần truyền thông tin area
      },
      "sale\_type": "SELL\_OUT",
      "sale\_channel\_id": 55,
      "order\_date": "2025-06-16",
      "promotions\_to\_apply": [
      {
      "promotion\_id": "a8595eb6-0379-49ed-a78f-525100a94dd5", // Trả thưởng 1 hình thức
      "slots": 3,
      "actions": [
      {
      "id": "a20e037b-c569-4eaa-bfd7-7acd1882412a"
      }
      ]
      },
      {
      "promotion\_id": "10375cd5-e450-438b-af99-a91cc456c290",  // Trả thưởng nhiều hình thức, ví dụ giảm tiền và tặng kèm sản phẩm với số suất bằng 2 (mảng action sẽ chứa nhiều phần tử)
      "slots": 2,
      "actions": [
      {
      "id": "07bf4b12-1ea7-4948-8d71-135d7b23dcd1"
      },
      {
      "id": "a8a4232e-5d79-4b1e-9dd6-81cf4df43629",
      "attached\_products": [
      {
      "id": "333",
      "sku": "SPA",
      "quantity": 3
      },
      {
      "id": "500",
      "sku": "SPB",
      "quantity": 2
      }
      ]
      }
      ]
      }
      ]
      },
      "buyer": {
      "id": 4636,
      "type": "MERCHANT",
      "store\_location\_ids": [100],
      "store\_type\_ids": [43],
      "store\_rank\_ids": [20],
      "sale\_channel\_ids": [10],
      "area\_id": "347" // ====> ID khu vực => Đối với đơn SELL\_IN cần truyên thông tin area của DISTRIBUTOR, đối với đơn SELL\_OUT không cần truyền thông tin area
      },
      "sale\_channel\_id": "4",
      "created\_by": "duc011dis"
      }
    - ### **Đối với Khuyến mãi Bậc Thang (method\_apply = SIDE\_STEP)**

      jsConfluencetrue{
      "order": {
      "products": [
      {
      "id": 702,
      "sku": "PHUONGOW004",
      "quantity": 50,
      "price": 22500,
      "package\_unit\_id": "15",
      "group\_ids": []
      }
      ],
      "total\_amount": 1125000,
      "seller": {
      "id": "274",
           "area\_id" : "347" // ====> ID khu vực => Đối với đơn SELL\_OUT cần truyên thông tin area của DISTRIBUTOR, đối với đơn SELL\_IN không cần truyền thông tin area
      },
      "sale\_type": "SELL\_OUT",
      "sale\_channel\_id": 55,
      "order\_date": "2025-06-16",
      "promotions\_to\_apply": [                           //===============================> Thay đổi cấu trúc payload đối với khuyến mãi bậc thang cho "promotion\_to\_apply"
      {
      "promotion\_id": "918ed000-b95d-4f59-8159-9ffeeb2556b1",                    //======================> Khuyến mãi bậc thang, cấu trúc mới
      "actions": [ // "slots" nằm trong từng gói, mỗi gói cần truyên thêm "id\_package"
      {
      "id\_package": "d4e24548-e583-42b2-864c-2aa97e80dcc2", //========> Gói 1
      "id": "14497124-3047-423c-893d-bd694fab36d2", // Hiện tại đối với chương trình bậc thang, 1 gói chỉ có 1 hình thức trả
      "attached\_products": [], // Nếu mở rộng nhiều hình thức trả cho 1 gói thì truyền thêm phần tử với hình thức trả khác nhưng chung id\_package
      "slots": 1
      },
      {
      "id\_package": "375ff798-9578-48af-b562-9ae58dd1ac99", //=========> Gói 2
      "id": "0cef757f-3fce-42c6-8d59-e46b8c3b0b01",
      "attached\_products": [
      {
      "id": "553",
      "sku": "DMSP001",
      "quantity": 1
      },
      {
      "sku": "DMSP002",
      "id": "554",
      "quantity": 1
      }
      ],
      "slots": 1
      },
      {
      "id\_package": "aba292c8-4243-406b-8f72-bf9c908481c0", //==============> Gói 3
      "id": "8916b26c-91c2-4423-ae15-5034f883c128",
      "attached\_products": [
      {
      "id": "554",
      "sku": "DMSP002",
      "quantity": 2
      }
      ],
      "slots": 1
      }
      ]
      }
      ]
      },
      "buyer": {
      "id": 4636,
      "type": "MERCHANT",
      "store\_location\_ids": [],
      "store\_type\_ids": [],
      "store\_rank\_ids": [],
      "sale\_channel\_ids": [],
      "area\_id": "347" // ====> ID khu vực => Đối với đơn SELL\_IN cần truyên thông tin area của DISTRIBUTOR, đối với đơn SELL\_OUT không cần truyền thông tin area  
      },
      "sale\_channel\_id": "4",
      "created\_by": "duc011dis"
      }
  + Danh sách hành động khuyến mãi

    | Hành động khuyến mãi | Định danh | Dữ liệu mẫu | Mô tả |
    | --- | --- | --- | --- |
    | Giảm giá số tiền cố định | **`discountFixedAmount`** | `{` `"operator": "discountFixedAmount",` `"discount_value": 20000,` `"discount_value_per_slot": 10000` `}` | - `discount_value`: Số tiền giảm giá - `discount_value_per_slot`: Số tiền giảm giá trên mỗi suất |
    | Giảm giá phần trăm | **`discountPercent`** | `{` `"operator": "discountPercent",` `"discount_percent": 10,` `"discount_value": 20000` `}` | - `discount_percent`: Số phần trăm giảm giá - `discount_value`: Số tiền giảm giá |
    | Tặng sản phẩm cùng loại | **`attachSameProduct`** | `{` `"operator": "attachSameProduct",` `"skus": [` `{` `"id": "1",` `"sku": "SKU1",` `"quantity": 5,` `"quantity_per_slot": 1,`    "**lo\_date\_criteria**" : {      "field" : "info\_lo\_date",      "operator" : "range",      "value" : {        "start" : "2025-09-01T00:00:00.000Z", "end" : "2025-10-30T23:59:59.000Z"      }    }  `}` `]` `}` | - * `skus`: Danh sách sản phẩm tặng   * `sku`: SKU sản phẩm   * `quantity`: Số lượng sản phẩm tặng   * `quantity_per_slot`: Số lượng sản phẩm tặng trên mỗi suất   * **lo\_date\_criteria**: Chỉ xuất hiện khi nguời dùng cấu hình thông tin LoDate   * **Note**: Thông tin này chỉ trả về cho Hàm Combine Promotion |
    | Tặng sản phẩm trong danh sách | **`attachProducts`** | `{` `"operator": "attachProducts",` `"total_quantity": 2,` `"total_quantity_per_slot": 1,`       "skus" : [      {        "id" : "209",        "sku" : "OVU\_BANHBAO\_CHIEN",        "**lo\_date\_criteria**" : {          "field" : "info\_batch\_no",          "operator" : "bach\_no",          "value" : ["LO\_001","LO\_002"]        },        "available\_quantity" : 999999999,        "status" : "ACTIVE"      },      {        "id" : "595",        "sku" : "CHIEN100",        "**lo\_date\_criteria**" : {          "field" : "info\_lo\_date",          "operator" : "range",          "value" : {            "start" : "2025-05-01T00:00:00.000Z",            "end" : "2025-05-30T23:59:59.000Z"          }        },        "available\_quantity" : 999999999,        "status" : "ACTIVE"      },      {        "id" : "779",        "sku" : "CISP027",        "**lo\_date\_criteria**" : {          "field" : "info\_lo\_date",          "operator" : "range",          "value" : {            "start" : "2025-06-01T00:00:00.000Z",            "end" : "2025-06-30T23:59:59.000Z"          }        },        "available\_quantity" : 999999999,        "status" : "ACTIVE"      }    ]  `}` | - Có thể chọn bất kì sản phẩm nào trong danh sách, tổng số lượng sản phẩm chọn phải bằng `total_quantity` - `total_quantity`: Tổng số sản phẩm tặng - `total_quantity_per_slot`: Tổng số sản phẩm tặng trên mỗi suất - `skus`: Danh sách sản phẩm tặng   * `sku`: SKU sản phẩm - **lo\_date\_criteria**: Chỉ xuất hiện khi nguời dùng cấu hình thông tin LoDate - **Note**: Thông tin này chỉ trả về cho Hàm Combine Promotion |
    | Đồng giá sản phẩm | **flatPrice** | {   "operator": "**flatPrice**",   "calculate\_on": "allProductsInCondition",   "skus": [     {       "id": "1",       "sku": "SKU1",       "quantity": 10,       "price": 15000,       "flat\_price": 10000     }   ],   "total\_flat\_amount\_discount": 50000 } |  |

    ‎
  + Thông tin mã lỗi khuyến mãi

     ● Cấu trúc mã lỗi hiển thị:

    ● Danh sách mã lỗi khuyến mãi

    | Lỗi khuyến mãi | Định danh | Dữ liệu mẫu | Mô tả |
    | --- | --- | --- | --- |
    | Chương trình khuyến mãi không khả dụng | **promotion\_unavailable** | ```  {     "promotion_id": "770421b6-46a5-42e7-9276-f515a245fd3a",     "kind": "ON_TOP",     "slots": 1,     "actions": [        {          "attached_products": [],          "id": "1ab5efee-e60f-42cb-ac86-cc1d76cdb55d"        }      ],      "errors": [         {           "code":"promotion_unavailable"         }      ]  }, ``` | - `Nguyên nhân:`   * `Đơn hàng không thỏa điều kiện khuyến mãi`   * `Ngân sách cho khuyến mãi đã được sử dụng hết`   * Không đủ sản phẩm tặng trong kho |
    | Sản phẩm hết tồn kho | **product\_out\_of\_stock** | ```  {      "promotion_id": "bf1abbd3-3355-485c-8ac6-f2caae2d2700",      "kind": "NORMAL",      "slots": 2,      "actions": [         {           "attached_products": [              {                "sku": "PHUONG7",                "id": "364",                "quantity": 4,                "errors": [                   {                     "code":"product_out_of_stock"                   }                ]              }           ],           "id": "2d26688d-5792-4d41-936b-b95d82d51697"         }      ],  }, ``` | - `Nguyên nhân:`   * `Sản phẩm tặng trong chương trình khuyến mãi không còn hàng trong kho` |
    | Sản phẩm ngưng hoạt động | **product\_inactive** | ```  {      "promotion_id": "bf1abbd3-3355-485c-8ac6-f2caae2d2700",      "kind": "ON_TOP",      "slots": 2,      "actions": [         {           "attached_products": [              {                "sku": "PHUONG7",                "id": "364",                "quantity": 4,                "errors": [                   {                     "code":"product_inactive"                   }                ]              }           ],           "id": "2d26688d-5792-4d41-936b-b95d82d51697"         }      ],  }, ``` | - `Nguyên nhân:`   * `Sản phẩm tặng trong chương trình khuyến mãi bị ngưng hoạt động` |
  + Thông tin cảnh báo và lỗi của hành động khuyến mãi liên quan đến cấu hình ngân sách khi combine promotions
    - Danh sách mã cảnh báo

      | **Cảnh báo** | Đinh danh | Dữ liệu mẫu | Mô tả |
      | --- | --- | --- | --- |
      | Ngân sách | **budget\_insufficient** | js{   "promotion\_id": "770421b6-46a5-42e7-9276-f515a245fd3a",   "kind": "ON\_TOP",   "slots": 1,   "actions": [     {       "attached\_products": [],       "id": "1ab5efee-e60f-42cb-ac86-cc1d76cdb55d"   }   ],   "warns": [     {       "code": "budget\_insufficient",       "details": [         {           "action\_id": "1ab5efee-e60f-42cb-ac86-cc1d76cdb55d",         "kind": "TOTAL", "type": "AMOUNT",           "value": "250"         }       ]   }   ] } | * `Nguyên nhân:`   + `Đơn hàng thoả điều kiện khuyến mãi tuy nhiên ngân sách tổng tiền của chương trình không đủ theo hành động khuyến mãi người dùng chọn`  **`Giải thích các key:`** Dùng field kind làm key phân loại ngân sách  * "TOTAL": CTKM * "AREA": Khu vực * "DISTRIBUTOR": NPP * "PER\_MERCHANT": Mỗi điểm bán * "PRODUCT\_PER\_MERCHANT": sp mỗi điểm bán, trả chi tiết mỗi sp Suất hay tiền hay SL thì field "type":  "QUANTITY", "SLOT",  "AMOUNT" Giá trị NS còn lại thì field: "value" |
      | js{   "promotion\_id": "770421b6-46a5-42e7-9276-f515a245fd3a",   "kind": "ON\_TOP",   "slots": 1,   "actions": [     {       "attached\_products": [],       "id": "1ab5efee-e60f-42cb-ac86-cc1d76cdb55d"   }   ],   "warns": [     {       "code": "budget\_insufficient",       "details": [         {           "action\_id": "1ab5efee-e60f-42cb-ac86-cc1d76cdb55d",         "kind": "AREA", "type": "SLOT",         "value": "1"         }       ]   }   ] } | * `Nguyên nhân:`   + `Đơn hàng thoả điều kiện khuyến mãi tuy nhiên ngân sách suất khu vực của chương trình không đủ theo hành động khuyến mãi người dùng chọn` |
      | js{   "promotion\_id": "770421b6-46a5-42e7-9276-f515a245fd3a",   "kind": "ON\_TOP",   "slots": 1,   "actions": [     {       "attached\_products": [],       "id": "1ab5efee-e60f-42cb-ac86-cc1d76cdb55d"   }   ],   "warns": [     {       "code": "budget\_insufficient",       "details": [         {           "action\_id": "1ab5efee-e60f-42cb-ac86-cc1d76cdb55d",         "kind": "DISTRIBUTOR", "type": "SLOT",         "value": "1"         }       ]   }   ] } | * `Nguyên nhân:`   + `Đơn hàng thoả điều kiện khuyến mãi tuy nhiên ngân sách suất nhà phân phối của trình chương không đủ theo hành động khuyến mãi người dùng chọn` |
      | js{   "promotion\_id": "770421b6-46a5-42e7-9276-f515a245fd3a",   "kind": "ON\_TOP",   "slots": 1,   "actions": [     {       "attached\_products": [],       "id": "1ab5efee-e60f-42cb-ac86-cc1d76cdb55d"   }   ],   "warns": [     {       "code": "budget\_insufficient",       "details": [         {           "action\_id": "1ab5efee-e60f-42cb-ac86-cc1d76cdb55d",         "kind": "PER\_MERCHANT", "type": "AMOUNT",           "value": "250"         }       ]   }   ] } | * `Nguyên nhân:`   + `Đơn hàng thoả điều kiện khuyến mãi tuy nhiên ngân sách hạn mức tiền điểm bán của chương trình không đủ theo hành động khuyến mãi người dùng chọn` |
      | Ngân sách sản phẩm | **product\_budget\_insufficient** | js{   "promotion\_id": "770421b6-46a5-42e7-9276-f515a245fd3a",   "kind": "ON\_TOP",   "slots": 1, "actions": [ {   "attached\_products": [ { "id": "554", "sku": "DMSP002", "quantity": 2 },   { "id": "555", "sku": "DMSP003", "quantity": 2 } ], "id": "a8a4232e-5d79-4b1e-9dd6-81cf4df43629" }   ], "warns": [ {     "code": "product\_budget\_insufficient",       "details": [         {           "action\_id": "a8a4232e-5d79-4b1e-9dd6-81cf4df43629",         "kind": "PRODUCT\_PER\_MERCHANT", "type": "QUANTITY",          "package\_id": "", // id gói của khuyến mãi bậc thang         "sku": "DMSP002",         "value": "2"       }, {           "action\_id": "a8a4232e-5d79-4b1e-9dd6-81cf4df43629",         "kind": "PRODUCT\_PER\_MERCHANT", "type": "QUANTITY", "package\_id": "", // id gói của khuyến mãi bậc thang "sku": "DMSP003",         "value": "2"         }       ]     }   ] } | * `Nguyên nhân:`   + `Đơn hàng thoả điều kiện khuyến mãi tuy nhiên ngân sách hạn mức sản phẩm điểm bán của chương trình không đủ theo hành động khuyến mãi người dùng chọn` |
    - Danh sách mã lỗi

      | **Cảnh báo** | Đinh danh | Dữ liệu mẫu | Mô tả |
      | --- | --- | --- | --- |
      | Ngân sách | **out\_of\_budget** | js{   "promotion\_id": "770421b6-46a5-42e7-9276-f515a245fd3a",   "kind": "ON\_TOP",   "slots": 1,   "actions": [     {       "attached\_products": [],       "id": "1ab5efee-e60f-42cb-ac86-cc1d76cdb55d"   }   ],   "errors": [     {       "code": "out\_of\_budget",       "details": [         {           "action\_id": "1ab5efee-e60f-42cb-ac86-cc1d76cdb55d",         "kind": "TOTAL", "type": "AMOUNT",           "value": "0"         }       ]   }   ] } | * `Nguyên nhân:`   + `Đơn hàng thoả điều kiện khuyến mãi tuy nhiên ngân sách tổng tiền của chương trình hết` |
      | js{   "promotion\_id": "770421b6-46a5-42e7-9276-f515a245fd3a",   "kind": "ON\_TOP",   "slots": 1,   "actions": [     {       "attached\_products": [],       "id": "1ab5efee-e60f-42cb-ac86-cc1d76cdb55d"   }   ],   "errors": [     {       "code": "out\_of\_budget",       "details": [         {           "action\_id": "1ab5efee-e60f-42cb-ac86-cc1d76cdb55d",         "kind": "AREA", "type": "SLOT",         "value": "0"         }       ]   }   ] } | * `Nguyên nhân:`   + `Đơn hàng thoả điều kiện khuyến mãi tuy nhiên ngân sách suất khu vực của chương trình hết` |
      | js{   "promotion\_id": "770421b6-46a5-42e7-9276-f515a245fd3a",   "kind": "ON\_TOP",   "slots": 1,   "actions": [     {       "attached\_products": [],       "id": "1ab5efee-e60f-42cb-ac86-cc1d76cdb55d"   }   ],   "errors": [     {       "code": "out\_of\_budget",       "details": [         {           "action\_id": "1ab5efee-e60f-42cb-ac86-cc1d76cdb55d",         "kind": "DISTRIBUTOR", "type": "SLOT",         "value": "0"         }       ]   }   ] } | * `Nguyên nhân:`   + `Đơn hàng thoả điều kiện khuyến mãi tuy nhiên ngân sách suất nhà phân phối của chương trình hết` |
      | js{   "promotion\_id": "770421b6-46a5-42e7-9276-f515a245fd3a",   "kind": "ON\_TOP",   "slots": 1,   "actions": [     {       "attached\_products": [],       "id": "1ab5efee-e60f-42cb-ac86-cc1d76cdb55d"   }   ],   "errors": [     {       "code": "out\_of\_budget",       "details": [         {           "action\_id": "1ab5efee-e60f-42cb-ac86-cc1d76cdb55d",         "kind": "PER\_MERCHANT", "type": "AMOUNT",           "value": "0"         }       ]   }   ] } | * `Nguyên nhân:`   + `Đơn hàng thoả điều kiện khuyến mãi tuy nhiên ngân sách hạn mức tiền điểm bán của chương trình hết` |
      | Ngân sách sản phẩm | **out\_of\_product\_budget** | js{   "promotion\_id": "770421b6-46a5-42e7-9276-f515a245fd3a",   "kind": "ON\_TOP",   "slots": 1, "actions": [ {   "attached\_products": [ { "id": "554", "sku": "DMSP002", "quantity": 2 },   { "id": "555", "sku": "DMSP003", "quantity": 2 } ], "id": "a8a4232e-5d79-4b1e-9dd6-81cf4df43629" }   ], "errors": [ {     "code": "out\_of\_product\_budget",       "details": [         {           "action\_id": "a8a4232e-5d79-4b1e-9dd6-81cf4df43629",         "kind": "PRODUCT\_PER\_MERCHANT", "type": "QUANTITY",          "package\_id": "", // id gói của khuyến mãi bậc thang         "sku": "DMSP002",         "value": "0"       }, {           "action\_id": "a8a4232e-5d79-4b1e-9dd6-81cf4df43629",         "kind": "PRODUCT\_PER\_MERCHANT", "type": "QUANTITY", "package\_id": "", // id gói của khuyến mãi bậc thang "sku": "DMSP003",         "value": "0"         }       ]     }   ] } | * `Nguyên nhân:`   + `Đơn hàng thoả điều kiện khuyến mãi tuy nhiên ngân sách hạn mức sản phẩm điểm bán của chương trình hết` |