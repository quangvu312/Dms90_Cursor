window.__CONTRACT_SEED = {
  "types": [
    {
      "value": "template",
      "label": "Hợp đồng mẫu",
      "shortLabel": "HĐ mẫu"
    },
    {
      "value": "customer",
      "label": "Hợp đồng khách hàng",
      "shortLabel": "HĐ khách"
    }
  ],
  "statuses": [
    {
      "value": "Khởi tạo",
      "label": "Khởi tạo"
    },
    {
      "value": "Đã duyệt",
      "label": "Đã duyệt"
    },
    {
      "value": "Hết hạn",
      "label": "Hết hạn"
    }
  ],
  "applicableObjectTypes": [
    {
      "value": "customer_group",
      "label": "Nhóm khách hàng"
    },
    {
      "value": "customer",
      "label": "Khách hàng"
    }
  ],
  "customerGroups": [
    {
      "id": "diamond",
      "label": "Diamond"
    },
    {
      "id": "platinum",
      "label": "Platinum"
    },
    {
      "id": "gold",
      "label": "Gold"
    },
    {
      "id": "silver",
      "label": "Silver"
    },
    {
      "id": "bronze",
      "label": "Bronze"
    },
    {
      "id": "vip",
      "label": "VIP"
    },
    {
      "id": "standard",
      "label": "Standard"
    }
  ],
  "customers": [
    {
      "id": "KH001",
      "code": "KH001",
      "name": "Khách hàng A"
    },
    {
      "id": "KH002",
      "code": "KH002",
      "name": "Khách hàng B"
    },
    {
      "id": "KH003",
      "code": "KH003",
      "name": "Khách hàng C"
    },
    {
      "id": "KH004",
      "code": "KH004",
      "name": "Điểm bán Tân Bình"
    },
    {
      "id": "KH005",
      "code": "KH005",
      "name": "Điểm bán Quận 1"
    },
    {
      "id": "KH006",
      "code": "KH006",
      "name": "Điểm bán Hà Nội"
    },
    {
      "id": "KH007",
      "code": "KH007",
      "name": "Siêu thị Mini Mart"
    },
    {
      "id": "KH008",
      "code": "KH008",
      "name": "Cửa hàng Tiện Lợi 24h"
    },
    {
      "id": "KH009",
      "code": "KH009",
      "name": "Đại lý miền Tây"
    },
    {
      "id": "KH010",
      "code": "KH010",
      "name": "Đại lý miền Bắc"
    },
    {
      "id": "KH011",
      "code": "KH011",
      "name": "Khách hàng D"
    },
    {
      "id": "KH012",
      "code": "KH012",
      "name": "Khách hàng E"
    }
  ],
  "employees": [
    {
      "id": "NV001",
      "code": "NV001",
      "name": "Nguyễn Văn A"
    },
    {
      "id": "NV002",
      "code": "NV002",
      "name": "Trần Văn B"
    },
    {
      "id": "NV003",
      "code": "NV003",
      "name": "Lê Văn C"
    },
    {
      "id": "NV004",
      "code": "NV004",
      "name": "Phạm Văn D"
    },
    {
      "id": "NV005",
      "code": "NV005",
      "name": "Hoàng Thị E"
    },
    {
      "id": "NV006",
      "code": "NV006",
      "name": "Đỗ Minh F"
    },
    {
      "id": "NV007",
      "code": "NV007",
      "name": "Vũ Thị G"
    },
    {
      "id": "NV008",
      "code": "NV008",
      "name": "Bùi Văn H"
    },
    {
      "id": "NV009",
      "code": "NV009",
      "name": "Ngô Thị I"
    },
    {
      "id": "NV010",
      "code": "NV010",
      "name": "Đặng Văn K"
    }
  ],
  "contracts": [
    {
      "id": "CT001",
      "contractCode": "SH6786873",
      "name": "Hợp đồng mẫu",
      "type": "template",
      "status": "Khởi tạo",
      "applicableObjectType": "customer_group",
      "applicableCustomerGroups": [
        "diamond",
        "platinum"
      ],
      "applicableCustomers": [],
      "viewers": [
        "NV001",
        "NV002"
      ],
      "file": {
        "name": "hop-dong-mau.pdf",
        "type": "application/pdf"
      },
      "startDate": "02-10-2025",
      "endDate": "02-10-2027",
      "description": "Hợp đồng mẫu áp dụng nhóm Diamond, Platinum.",
      "createdBy": "Nhi Pham",
      "createdAt": "29-08-2024 22:01:10"
    },
    {
      "id": "CT002",
      "contractCode": "SI8268573",
      "name": "HD miền Nam",
      "type": "template",
      "status": "Đã duyệt",
      "applicableObjectType": "customer_group",
      "applicableCustomerGroups": [
        "gold",
        "silver"
      ],
      "applicableCustomers": [],
      "viewers": [
        "NV003"
      ],
      "file": {
        "name": "hd-mien-nam.pdf",
        "type": "application/pdf"
      },
      "startDate": "01-01-2025",
      "endDate": "31-12-2026",
      "description": "Hợp đồng mẫu khu vực miền Nam.",
      "createdBy": "Nhi Pham",
      "createdAt": "15-07-2024 09:12:44"
    },
    {
      "id": "CT003",
      "contractCode": "SH6786874",
      "name": "HD khách hàng",
      "type": "customer",
      "status": "Khởi tạo",
      "applicableObjectType": "customer",
      "applicableCustomerGroups": [],
      "applicableCustomers": [
        "KH001",
        "KH002"
      ],
      "viewers": [
        "NV001",
        "NV004"
      ],
      "file": {
        "name": "hd-khach-hang.pdf",
        "type": "application/pdf"
      },
      "startDate": "10-03-2025",
      "endDate": "10-03-2026",
      "description": "Hợp đồng khách hàng A, B.",
      "createdBy": "THAO999",
      "createdAt": "02-09-2024 14:20:01"
    },
    {
      "id": "CT004",
      "contractCode": "SH6786875",
      "name": "HD Hà Nội",
      "type": "template",
      "status": "Hết hạn",
      "applicableObjectType": "customer_group",
      "applicableCustomerGroups": [
        "bronze"
      ],
      "applicableCustomers": [],
      "viewers": [
        "NV005"
      ],
      "file": {
        "name": "hd-ha-noi.pdf",
        "type": "application/pdf"
      },
      "startDate": "01-01-2023",
      "endDate": "31-12-2023",
      "description": "Hợp đồng mẫu khu vực Hà Nội (đã hết hạn).",
      "createdBy": "Nhi Pham",
      "createdAt": "12-12-2022 08:00:00"
    },
    {
      "id": "CT005",
      "contractCode": "SH6786876",
      "name": "HD miền Bắc",
      "type": "customer",
      "status": "Đã duyệt",
      "applicableObjectType": "customer",
      "applicableCustomerGroups": [],
      "applicableCustomers": [
        "KH006",
        "KH010"
      ],
      "viewers": [
        "NV006",
        "NV007"
      ],
      "file": {
        "name": "hd-mien-bac.pdf",
        "type": "application/pdf"
      },
      "startDate": "15-06-2025",
      "endDate": "15-06-2027",
      "description": "Hợp đồng khách hàng miền Bắc.",
      "createdBy": "THAO999",
      "createdAt": "20-05-2025 11:33:18"
    },
    {
      "id": "CT006",
      "contractCode": "SH6786877",
      "name": "HD miền Tây",
      "type": "template",
      "status": "Khởi tạo",
      "applicableObjectType": "customer_group",
      "applicableCustomerGroups": [
        "vip"
      ],
      "applicableCustomers": [],
      "viewers": [
        "NV008"
      ],
      "file": {
        "name": "hd-mien-tay.pdf",
        "type": "application/pdf"
      },
      "startDate": "01-04-2025",
      "endDate": "01-04-2026",
      "description": "Hợp đồng mẫu miền Tây.",
      "createdBy": "Nhi Pham",
      "createdAt": "01-03-2025 16:45:00"
    },
    {
      "id": "CT007",
      "contractCode": "SH6786878",
      "name": "HD Sài Gòn",
      "type": "customer",
      "status": "Đã duyệt",
      "applicableObjectType": "customer",
      "applicableCustomerGroups": [],
      "applicableCustomers": [
        "KH004",
        "KH005"
      ],
      "viewers": [
        "NV001",
        "NV009"
      ],
      "file": {
        "name": "hd-sai-gon.pdf",
        "type": "application/pdf"
      },
      "startDate": "20-02-2025",
      "endDate": "20-02-2028",
      "description": "Hợp đồng khách hàng khu vực Sài Gòn.",
      "createdBy": "Nhi Pham",
      "createdAt": "10-02-2025 10:10:10"
    },
    {
      "id": "CT008",
      "contractCode": "SH6786879",
      "name": "Hợp đồng mẫu",
      "type": "template",
      "status": "Đã duyệt",
      "applicableObjectType": "",
      "applicableCustomerGroups": [],
      "applicableCustomers": [],
      "viewers": [
        "NV002"
      ],
      "file": {
        "name": "hop-dong-mau-2.pdf",
        "type": "application/pdf"
      },
      "startDate": "05-05-2025",
      "endDate": "05-05-2026",
      "description": "",
      "createdBy": "THAO999",
      "createdAt": "04-05-2025 08:22:31"
    },
    {
      "id": "CT009",
      "contractCode": "SI8268574",
      "name": "HD khách hàng",
      "type": "customer",
      "status": "Hết hạn",
      "applicableObjectType": "customer",
      "applicableCustomerGroups": [],
      "applicableCustomers": [
        "KH003"
      ],
      "viewers": [
        "NV010"
      ],
      "file": {
        "name": "hd-khach-hang-cu.pdf",
        "type": "application/pdf"
      },
      "startDate": "01-06-2022",
      "endDate": "01-06-2023",
      "description": "Hợp đồng khách hàng C đã hết hạn.",
      "createdBy": "Nhi Pham",
      "createdAt": "20-05-2022 13:00:00"
    },
    {
      "id": "CT010",
      "contractCode": "SH6786880",
      "name": "HD miền Nam",
      "type": "template",
      "status": "Khởi tạo",
      "applicableObjectType": "customer_group",
      "applicableCustomerGroups": [
        "gold"
      ],
      "applicableCustomers": [],
      "viewers": [
        "NV003",
        "NV004"
      ],
      "file": {
        "name": "hd-mien-nam-2.pdf",
        "type": "application/pdf"
      },
      "startDate": "01-09-2025",
      "endDate": "01-09-2027",
      "description": "Bản nháp hợp đồng mẫu miền Nam.",
      "createdBy": "Nhi Pham",
      "createdAt": "28-08-2025 19:40:12"
    },
    {
      "id": "CT011",
      "contractCode": "SH6786881",
      "name": "HD Hà Nội",
      "type": "customer",
      "status": "Khởi tạo",
      "applicableObjectType": "customer",
      "applicableCustomerGroups": [],
      "applicableCustomers": [
        "KH006"
      ],
      "viewers": [
        "NV005",
        "NV006"
      ],
      "file": {
        "name": "hd-ha-noi-2.pdf",
        "type": "application/pdf"
      },
      "startDate": "12-11-2025",
      "endDate": "12-11-2026",
      "description": "Hợp đồng khách hàng Hà Nội.",
      "createdBy": "THAO999",
      "createdAt": "01-11-2025 07:15:00"
    },
    {
      "id": "CT012",
      "contractCode": "SI8268575",
      "name": "Hợp đồng mẫu",
      "type": "template",
      "status": "Đã duyệt",
      "applicableObjectType": "customer_group",
      "applicableCustomerGroups": [
        "standard"
      ],
      "applicableCustomers": [],
      "viewers": [
        "NV007"
      ],
      "file": {
        "name": "hop-dong-mau-3.pdf",
        "type": "application/pdf"
      },
      "startDate": "08-08-2025",
      "endDate": "08-08-2028",
      "description": "Hợp đồng mẫu nhóm Standard.",
      "createdBy": "Nhi Pham",
      "createdAt": "01-08-2025 12:00:00"
    },
    {
      "id": "CT013",
      "contractCode": "SH6786882",
      "name": "HD miền Bắc",
      "type": "template",
      "status": "Hết hạn",
      "applicableObjectType": "",
      "applicableCustomerGroups": [],
      "applicableCustomers": [],
      "viewers": [],
      "file": {
        "name": "hd-mien-bac-cu.pdf",
        "type": "application/pdf"
      },
      "startDate": "01-01-2024",
      "endDate": "31-12-2024",
      "description": "Hợp đồng mẫu miền Bắc hết hạn.",
      "createdBy": "Nhi Pham",
      "createdAt": "15-12-2023 21:01:10"
    },
    {
      "id": "CT014",
      "contractCode": "SH6786883",
      "name": "HD miền Tây",
      "type": "customer",
      "status": "Đã duyệt",
      "applicableObjectType": "customer",
      "applicableCustomerGroups": [],
      "applicableCustomers": [
        "KH009"
      ],
      "viewers": [
        "NV008",
        "NV001"
      ],
      "file": {
        "name": "hd-mien-tay-kh.pdf",
        "type": "application/pdf"
      },
      "startDate": "03-03-2025",
      "endDate": "03-03-2027",
      "description": "Hợp đồng khách hàng đại lý miền Tây.",
      "createdBy": "THAO999",
      "createdAt": "01-03-2025 09:09:09"
    },
    {
      "id": "CT015",
      "contractCode": "SI8268576",
      "name": "HD Sài Gòn",
      "type": "template",
      "status": "Khởi tạo",
      "applicableObjectType": "customer_group",
      "applicableCustomerGroups": [
        "diamond"
      ],
      "applicableCustomers": [],
      "viewers": [
        "NV009"
      ],
      "file": {
        "name": "hd-sai-gon-mau.pdf",
        "type": "application/pdf"
      },
      "startDate": "18-12-2025",
      "endDate": "18-12-2026",
      "description": "Nháp hợp đồng mẫu Sài Gòn.",
      "createdBy": "Nhi Pham",
      "createdAt": "10-12-2025 18:30:00"
    },
    {
      "id": "CT016",
      "contractCode": "SH6786884",
      "name": "HD khách hàng",
      "type": "customer",
      "status": "Đã duyệt",
      "applicableObjectType": "customer",
      "applicableCustomerGroups": [],
      "applicableCustomers": [
        "KH007",
        "KH008"
      ],
      "viewers": [
        "NV010",
        "NV002"
      ],
      "file": {
        "name": "hd-chuoi-ban-le.pdf",
        "type": "application/pdf"
      },
      "startDate": "01-07-2025",
      "endDate": "01-07-2026",
      "description": "Hợp đồng chuỗi bán lẻ.",
      "createdBy": "THAO999",
      "createdAt": "20-06-2025 15:44:22"
    },
    {
      "id": "CT017",
      "contractCode": "SH6786885",
      "name": "Hợp đồng mẫu",
      "type": "template",
      "status": "Hết hạn",
      "applicableObjectType": "customer_group",
      "applicableCustomerGroups": [
        "silver",
        "bronze"
      ],
      "applicableCustomers": [],
      "viewers": [
        "NV003"
      ],
      "file": {
        "name": "hop-dong-mau-het-han.pdf",
        "type": "application/pdf"
      },
      "startDate": "01-02-2023",
      "endDate": "01-02-2024",
      "description": "Hợp đồng mẫu đã hết hạn.",
      "createdBy": "Nhi Pham",
      "createdAt": "10-01-2023 11:11:11"
    },
    {
      "id": "CT018",
      "contractCode": "SI8268577",
      "name": "HD miền Nam",
      "type": "customer",
      "status": "Khởi tạo",
      "applicableObjectType": "customer",
      "applicableCustomerGroups": [],
      "applicableCustomers": [
        "KH011",
        "KH012"
      ],
      "viewers": [
        "NV004",
        "NV005"
      ],
      "file": {
        "name": "hd-mien-nam-kh.pdf",
        "type": "application/pdf"
      },
      "startDate": "22-10-2025",
      "endDate": "22-10-2027",
      "description": "Hợp đồng khách hàng D, E.",
      "createdBy": "THAO999",
      "createdAt": "18-10-2025 08:08:08"
    },
    {
      "id": "CT019",
      "contractCode": "SH6786886",
      "name": "HD Hà Nội",
      "type": "template",
      "status": "Đã duyệt",
      "applicableObjectType": "customer_group",
      "applicableCustomerGroups": [
        "platinum",
        "gold"
      ],
      "applicableCustomers": [],
      "viewers": [
        "NV006",
        "NV007",
        "NV001"
      ],
      "file": {
        "name": "hd-ha-noi-mau.pdf",
        "type": "application/pdf"
      },
      "startDate": "09-09-2025",
      "endDate": "09-09-2028",
      "description": "Hợp đồng mẫu Hà Nội nhóm Platinum, Gold.",
      "createdBy": "Nhi Pham",
      "createdAt": "01-09-2025 17:17:17"
    }
  ]
};
window.__contractStore = JSON.parse(JSON.stringify(window.__CONTRACT_SEED));
window.__CONTRACT_MENU_ITEMS = [
  {
    "label": "Quản Lý Hợp Đồng",
    "icon": "📄",
    "expanded": true,
    "children": [
      {
        "label": "Danh sách hợp đồng",
        "route": "/contract/list"
      }
    ]
  }
];
