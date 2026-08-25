/**
 * Báo cáo: Doanh thu theo khách hàng
 * UAT: /report/sale/point-revenu
 */
ReportShared.registerReportPage({
  handler: 'renderReportCustomerRevenue',
  title: 'Doanh thu theo khách hàng',
  route: '/report/sale/customer-revenue',
  dataPath: 'data/report-customer-revenue.json',
  listTitle: 'Danh sách doanh thu theo khách hàng',
  filterHtml: () => ReportShared.customerRevenueFilters(),
  columns: ReportShared.buildColumns(
    ['stt', 'region', 'area', 'province', 'ward', 'distributorCode', 'distributorName',
      'customerCode', 'customerName', 'address', 'phone', 'orderCount', 'volume',
      'skuCount', 'revenueBeforeVat', 'revenueAfterVat'],
    ['STT', 'Vùng bán hàng', 'Khu vực bán hàng', 'Tỉnh/Thành phố', 'Phường/Xã',
      'Mã nhà phân phối', 'Tên nhà phân phối', 'Mã khách hàng', 'Tên khách hàng',
      'Địa chỉ', 'Số điện thoại', 'Số đơn bán', 'Sản lượng', 'Số SKU',
      'Doanh số trước VAT', 'Doanh số sau VAT']
  ).map(col => ['revenueBeforeVat', 'revenueAfterVat'].includes(col.key) ? { ...col, type: 'number' } : col)
});
