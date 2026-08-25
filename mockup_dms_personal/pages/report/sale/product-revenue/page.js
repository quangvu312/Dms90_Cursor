/**
 * Báo cáo: Doanh thu theo sản phẩm
 * UAT: /report/sale/product-revenu
 */
ReportShared.registerReportPage({
  handler: 'renderReportProductRevenue',
  title: 'Doanh thu theo sản phẩm',
  route: '/report/sale/product-revenue',
  dataPath: 'data/report-product-revenue.json',
  listTitle: 'Danh sách doanh thu theo sản phẩm',
  filterHtml: () => ReportShared.productRevenueFilters(),
  columns: ReportShared.buildColumns(
    ['stt', 'region', 'area', 'province', 'ward', 'distributorCode', 'distributorName',
      'productCode', 'productName', 'orderCount', 'customerCount', 'volume', 'revenueBeforeVat'],
    ['STT', 'Vùng bán hàng', 'Khu vực bán hàng', 'Tỉnh/Thành phố', 'Phường/Xã',
      'Mã nhà phân phối', 'Tên nhà phân phối', 'Mã sản phẩm', 'Tên sản phẩm',
      'Số đơn bán', 'Số khách hàng', 'Sản lượng', 'Doanh số trước VAT']
  ).map(col => col.key === 'revenueBeforeVat' ? { ...col, type: 'number' } : col)
});
