/** Đơn vị hành chính Việt Nam 2 cấp (Tỉnh/Thành phố + Phường/Xã) sau sáp nhập 2025. */
export interface Province {
  name: string;
  wards: string[];
}

export const VN_PROVINCES: Province[] = [
  { name: 'Hà Nội', wards: ['Ba Đình', 'Hoàn Kiếm', 'Đống Đa', 'Cầu Giấy', 'Tây Hồ'] },
  { name: 'TP. Hồ Chí Minh', wards: ['Bến Nghé', 'Bến Thành', 'An Phú', 'Thủ Đức', 'Tân Định'] },
  { name: 'Hải Phòng', wards: ['Hồng Bàng', 'Ngô Quyền', 'Lê Chân'] },
  { name: 'Đà Nẵng', wards: ['Hải Châu', 'Thanh Khê', 'Sơn Trà'] },
  { name: 'Huế', wards: ['Phú Hội', 'Vĩnh Ninh', 'Thuận Hòa'] },
  { name: 'Cần Thơ', wards: ['Ninh Kiều', 'Cái Răng', 'Bình Thủy'] },
  { name: 'Lai Châu', wards: ['Tân Phong', 'Đông Phong'] },
  { name: 'Điện Biên', wards: ['Mường Thanh', 'Him Lam'] },
  { name: 'Sơn La', wards: ['Chiềng Lề', 'Tô Hiệu'] },
  { name: 'Lạng Sơn', wards: ['Vĩnh Trại', 'Hoàng Văn Thụ'] },
  { name: 'Cao Bằng', wards: ['Sông Bằng', 'Hợp Giang'] },
  { name: 'Tuyên Quang', wards: ['Minh Xuân', 'Tân Quang'] },
  { name: 'Lào Cai', wards: ['Cốc Lếu', 'Kim Tân'] },
  { name: 'Thái Nguyên', wards: ['Trưng Vương', 'Phan Đình Phùng'] },
  { name: 'Phú Thọ', wards: ['Tân Dân', 'Vân Cơ'] },
  { name: 'Bắc Ninh', wards: ['Suối Hoa', 'Ninh Xá'] },
  { name: 'Quảng Ninh', wards: ['Hồng Gai', 'Bãi Cháy'] },
  { name: 'Hải Dương', wards: ['Trần Phú', 'Ngọc Châu'] },
  { name: 'Hưng Yên', wards: ['Hiến Nam', 'Lam Sơn'] },
  { name: 'Ninh Bình', wards: ['Đông Thành', 'Vân Giang'] },
  { name: 'Thanh Hóa', wards: ['Điện Biên', 'Ba Đình'] },
  { name: 'Nghệ An', wards: ['Hưng Bình', 'Lê Lợi'] },
  { name: 'Hà Tĩnh', wards: ['Nam Hà', 'Bắc Hà'] },
  { name: 'Quảng Trị', wards: ['Đông Lương', 'Đông Lễ'] },
  { name: 'Quảng Ngãi', wards: ['Nghĩa Lộ', 'Trần Phú'] },
  { name: 'Gia Lai', wards: ['Hoa Lư', 'Phù Đổng'] },
  { name: 'Đắk Lắk', wards: ['Tân Lợi', 'Thắng Lợi'] },
  { name: 'Khánh Hòa', wards: ['Vĩnh Nguyên', 'Phước Hải'] },
  { name: 'Lâm Đồng', wards: ['Xuân An', 'Xuân Trường'] },
  { name: 'Đồng Nai', wards: ['Trảng Dài', 'Tân Phong'] },
  { name: 'Tây Ninh', wards: ['Hiệp Ninh', 'Ninh Thạnh'] },
  { name: 'Vĩnh Long', wards: ['Phường 1', 'Phường 4'] },
  { name: 'Đồng Tháp', wards: ['Mỹ Phú', 'Hòa Thuận'] },
  { name: 'An Giang', wards: ['Mỹ Bình', 'Mỹ Long'] },
  { name: 'Cà Mau', wards: ['Phường 5', 'Phường 9'] },
];
