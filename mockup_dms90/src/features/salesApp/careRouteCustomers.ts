import { CARE_CUSTOMERS, type CustomerPoint } from './mockData';

/** Khách hàng thuộc tuyến chăm sóc của salesman đang đăng nhập. */
export function getCareCustomers(): CustomerPoint[] {
  return CARE_CUSTOMERS;
}

/** Mã KH tuyến chăm sóc — dùng chung Khách hàng (Chăm sóc) và Hợp đồng khách hàng. */
export function getCareRouteCustomerIds(): string[] {
  return getCareCustomers().map((c) => c.code);
}

export function isCareRouteCustomer(customerId?: string): boolean {
  if (!customerId) return false;
  return getCareRouteCustomerIds().includes(customerId);
}
