/**
 * Báo cáo: Doanh thu theo nhân viên kinh doanh
 * UAT: /report/sale/employee-revenu
 */
ReportShared.registerReportPage({
  handler: 'renderReportSalesmanRevenue',
  title: 'Doanh thu theo nhân viên kinh doanh',
  route: '/report/sale/salesman-revenue',
  dataPath: 'data/report-salesman-revenue.json',
  listTitle: 'Danh sách doanh thu theo nhân viên kinh doanh',
  filterHtml: () => ReportShared.salesmanRevenueFilters(),
  columns: ReportShared.buildColumns(
    ['stt', 'region', 'area', 'province', 'ward', 'distributorCode', 'distributorName',
      'salesmanCode', 'salesmanName', 'orderCount', 'customerCount', 'volume',
      'skuCount', 'revenueBeforeVat', 'revenueAfterVat'],
    ['STT', 'Vùng bán hàng', 'Khu vực bán hàng', 'Tỉnh/Thành phố', 'Phường/Xã',
      'Mã nhà phân phối', 'Tên nhà phân phối', 'Mã Nhân viên bán hàng', 'Tên Nhân viên bán hàng',
      'Số đơn bán', 'Số khách hàng', 'Sản lượng', 'Số SKU',
      'Doanh số trước VAT', 'Doanh số sau VAT']
  ).map(col => ['revenueBeforeVat', 'revenueAfterVat'].includes(col.key) ? { ...col, type: 'number' } : col)
});
