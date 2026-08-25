/**
 * Báo cáo: Đơn trả hàng
 * UAT: /report/sale/restored-order
 */
ReportShared.registerReportPage({
  handler: 'renderReportReturnOrder',
  title: 'Đơn trả hàng',
  route: '/report/sale/return-order',
  dataPath: 'data/report-return-order.json',
  listTitle: 'Danh sách đơn trả hàng',
  filterHtml: () => ReportShared.returnOrderFilters(),
  columns: ReportShared.buildColumns(
    ['stt', 'channel', 'region', 'area', 'distributorCode', 'distributorName',
      'createdBy', 'status', 'returnInvoiceNo', 'approvedBy', 'returnDate',
      'category', 'brand', 'subCategory', 'productGroup', 'productCode', 'productName',
      'uom', 'warehouse', 'unitPrice', 'unitPriceVat', 'returnQty', 'amount', 'revenue'],
    ['STT', 'Kênh bán hàng', 'Vùng bán hàng', 'Khu Vực bán hàng', 'Mã nhà phân phối',
      'Tên nhà phân phối', 'Người tạo', 'Trạng thái', 'Số hóa đơn trả', 'Người duyệt',
      'Ngày đơn trả', 'Ngành hàng', 'Nhãn hàng', 'Chủng loại', 'Nhóm sản phẩm',
      'Mã sản phẩm', 'Tên sản phẩm', 'ĐVT', 'Kho', 'Đơn Giá', 'Đơn giá VAT',
      'Số lượng trả', 'Thành tiền', 'Doanh thu']
  ).map(col => ['unitPrice', 'unitPriceVat', 'returnQty', 'amount', 'revenue'].includes(col.key)
    ? { ...col, type: 'number' } : col)
});
