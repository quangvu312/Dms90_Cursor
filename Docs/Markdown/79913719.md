1. **URI:** /v1/integrations:filter-promotions
2. **Method**: GET
3. **Query Parameters**:

   1. **distributor\_id** (optional):
      1. Mô tả: **Id** của nhà phân phối. Nếu không có tuyến → không truyền **distributor\_id**, ngược lại có tuyến sẽ truyền **distributor\_id**
      2. Kiểu dữ liệu: **string**
4. **Response**: Gồm danh sách CTKM gồm các thuộc tính theo yêu cầu và tổng số lượng CTKM
5. **Ví dụ:**   

   {  
     "promotions": [  
        {  
          "id": "string",  
          "name": "string",  
          "description": string,  
          "kind": string,  
          "method\_apply": string,  
          "is\_lo\_date": boolean,  
          "allow\_editable\_slots": boolean,  
          "action\_operators": string[],  
          "sale\_type": string,  
          "warehouse\_type\_id": string,  
          "start\_time": Date,,  
          "expire\_time": Date,  
          "status": string  
      }  
    ],  
     "total": number  
   }
6. Đường dẫn OpenAPI: <https://eco-dms-promotion-api-dev.finviet.com.vn/#/operations/IntegrationController_FilterPromotions_v1>