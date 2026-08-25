/**
 * Báo cáo: Tổng hợp đơn hàng bán Đại lý
 * UAT: /report/sale/selling-order
 */
ReportShared.registerReportPage({
  handler: 'renderReportSellingOrder',
  title: 'Tổng hợp đơn hàng bán Đại lý',
  route: '/report/sale/selling-order',
  dataPath: 'data/report-selling-order.json',
  listTitle: 'Danh sách đơn hàng bán',
  filterHtml: () => ReportShared.sellingOrderFilters(),
  columns: ReportShared.buildColumns(
    ReportShared.SELLING_ORDER_COLUMNS,
    ReportShared.SELLING_ORDER_TITLES
  ).map(col => {
    if (['unitPrice', 'vatAmount', 'amountBeforeVat', 'amountAfterVat', 'orderDiscount',
      'ontopDiscount', 'normalDiscount', 'defaultDiscount', 'discountExVat', 'revenueExVat',
      'totalOrderDiscount', 'totalBeforeVat', 'totalAfterVat'].includes(col.key)) {
      return { ...col, type: 'number' };
    }
    return col;
  })
});
