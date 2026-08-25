export interface Store {
  id: number;
  ma: string;
  ten: string;
  sdt: string;
  diaChi: string;
  tuNgay: string;
  denNgay: string;
  tanSuat: string;
  thuTu: string;
  thu2: string;
  thu3: string;
  thu4: string;
  thu5: string;
  thu6: string;
  thu7: string;
  chunhat: string;
  active: boolean;
}

export interface Route {
  id: number;
  vung: string;
  khuVuc: string;
  npp: string;
  maTuyen: string;
  tenTuyen: string;
  nhanVien: string;
  nhanHang: string;
  nvVieng: string;
  nvCham: string;
  active: boolean;
  ngayTao: string;
  nguoiTao: string;
  ngayCapNhat: string;
  nguoiCapNhat: string;
  stores: Store[];
}

export interface RouteFilterState {
  search: string;
  diemBan: string;
  vung: string;
  nppSelected: string[];
  nvVieng: string;
  nvCham: string;
  trangThai: string;
}

export const NPP_OPTIONS = ['[Th.Vi] NPP Trà Vinh', 'ERP_HN', 'ERP_MEKONG', 'NPP_CANTHO', 'NPP_DANANG'];
export const STORE_OPTIONS = ['STORE001', 'STORE002', 'STORE007', 'STORE009', 'STORE015'];
export const VUNG_OPTIONS = ['HANOI', 'MEKONG', '[Th.Vi] Vùng Trà Vinh', 'HCM'];
export const NV_VIENG_OPTIONS = ['Trong tuyến _Training', '[KD][Route]All Mission', '[Th.Vi] Full Tuyến (Required)'];
export const NV_CHAM_OPTIONS  = ['Ngoại tuyến_trainig', '[KD][Owner]All Mission', '[Th.Vi] Chăm sóc Full (Not Required)'];

export const DEFAULT_FILTERS: RouteFilterState = {
  search: '', diemBan: '', vung: '',
  nppSelected: ['[Th.Vi] NPP Trà Vinh', 'ERP_HN', 'ERP_MEKONG'],
  nvVieng: '', nvCham: '', trangThai: '',
};
