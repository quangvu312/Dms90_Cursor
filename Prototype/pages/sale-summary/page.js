async function renderSaleSummary() {
  const data = await fetch('data/sale-summary.json').then(r => r.json());
  const filter = DMS.render('FilterPanel', {
    fields: [
      { type: 'search', label: 'Tìm kiếm theo', placeholder: 'Tìm kiếm theo Mã đơn hàng, Mã đơn hàng ERP' },
      { type: 'select', label: 'Nhà phân phối', placeholder: 'Chọn Nhà phân phối', options: [
        { value: 'NPP001', label: 'NPP001 - NPP Miền Nam 1' },
        { value: 'NPP002', label: 'NPP002 - NPP Miền Bắc 1' }
      ]},
      { type: 'select', label: 'Nhãn hàng', placeholder: 'Chọn nhãn hàng', options: [{ value: 'ANLENE', label: 'Anlene' }] },
      { type: 'date', label: 'Từ ngày', placeholder: 'Từ ngày' },
      { type: 'date', label: 'Đến ngày', placeholder: 'Đến ngày' },
      { type: 'multiselect', label: 'Trạng thái', values: ['INIT', 'APPROVED'], options: [
        { value: 'INIT', label: 'Khởi tạo' },
        { value: 'APPROVED', label: 'Đã duyệt' },
        { value: 'CANCELLED', label: 'Đã hủy' },
        { value: 'EXPORTED', label: 'Đã xuất kho' }
      ]},
      { type: 'select', label: 'Loại đơn', placeholder: 'Loại đơn', options: [
        { value: 'SALE', label: 'Đơn bán hàng' },
        { value: 'VANSALES', label: 'Đơn vansales' }
      ]},
      { type: 'select', label: 'Nhân viên', placeholder: 'Nhân viên', options: [
        { value: 'NV001', label: 'NV001 - Nguyễn Văn A' }
      ]}
    ]
  });
  const columns = [
    {
      key: 'orderCode',
      title: 'Mã đơn hàng',
      render: (val, row) => `<a class="dms-table__link" data-action="sum-view-${row.id}">${DMS.escape(val)}</a>`
    },
    { key: 'erpCode', title: 'Mã đơn hàng ERP' },
    { key: 'orderDate', title: 'Ngày đặt hàng' },
    { key: 'distributor', title: 'Nhà phân phối' },
    { key: 'totalAmount', title: 'Tổng tiền thanh toán (VND)', render: v => DMS.formatNumber(v) },
    { key: 'orderType', title: 'Loại đơn' },
    { key: 'status', title: 'Trạng thái', render: v => DMS.render('StatusTag', { status: v }) },
    { key: 'employee', title: 'Nhân viên' },
    { key: 'createdAt', title: 'Ngày tạo' },
    { key: 'createdBy', title: 'Người tạo' },
    { key: 'updatedAt', title: 'Ngày cập nhật' },
    { key: 'updatedBy', title: 'Người cập nhật' }
  ];
  renderSaleSummary.onMount = function (container) {
    container.addEventListener('click', (e) => {
      if (e.target.closest('[data-action="filter-search"]')) {
        const from = container.querySelector('input[placeholder="Từ ngày"]')?.value;
        const to = container.querySelector('input[placeholder="Đến ngày"]')?.value;
        if (!from && !to) {
          DMS.get('Toast').show('Vui lòng chọn thời gian xem báo cáo', 'error');
          return;
        }
        DMS.get('Toast').show('Đã tìm kiếm theo điều kiện', 'info');
      }
      const view = e.target.closest('[data-action^="sum-view-"]');
      if (view) {
        const row = data.items.find(x => x.id === view.dataset.action.replace('sum-view-', ''));
        if (!row) return;
        DMS.get('Modal').show({
          title: 'Chi tiết đơn hàng bán',
          size: 'xl',
          body: `<div class="dms-form-grid">
              ${DMS.render('Input', { label: 'Ngày đặt hàng', value: row.orderDate, disabled: true })}
              ${DMS.render('Input', { label: 'Nhà phân phối', value: row.distributor, disabled: true })}
              ${DMS.render('Input', { label: 'Kho', value: row.warehouse, disabled: true })}
              ${DMS.render('Input', { label: 'Kênh bán hàng', value: row.channel, disabled: true })}
              ${DMS.render('Input', { label: 'Điểm bán', value: row.store, disabled: true })}
              ${DMS.render('Input', { label: 'Nhân viên', value: row.employee, disabled: true })}
              ${DMS.render('Input', { label: 'Loại đơn', value: row.orderType, disabled: true })}
              ${DMS.render('Input', { label: 'Trạng thái', value: row.status, disabled: true })}
              ${row.cancelReason ? DMS.render('Input', { label: 'Lý do hủy', value: row.cancelReason, disabled: true }) : ''}
            </div>
            ${row.lines.length ? DMS.render('Table', {
              columns: [
                { key: 'sku', title: 'Mã SKU' },
                { key: 'name', title: 'Tên sản phẩm' },
                { key: 'unit', title: 'Đơn vị tính' },
                { key: 'qty', title: 'Số lượng' },
                { key: 'price', title: 'Đơn giá (VND)', render: v => DMS.formatNumber(v) },
                { key: 'vat', title: 'Thuế VAT (%)' },
                { key: 'amount', title: 'Thành tiền sau VAT (VND)', render: v => DMS.formatNumber(v) }
              ],
              data: row.lines
            }) : DMS.render('EmptyState', { title: 'Trống' })}`,
          footer: DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'modal-close' })
        });
      }
    });
  };
  const total = data.items.reduce((s, r) => s + (Number(r.totalAmount) || 0), 0);
  return `
    ${DMS.render('Breadcrumb', { items: [
      { label: 'Quản Lý Bán Hàng', route: '/sale/order' },
      { label: 'Tổng Hợp Đơn Hàng Điểm Bán' }
    ]})}
    <h1 class="dms-page-header__title dms-mt-md">Tổng Hợp Đơn Hàng Điểm Bán</h1>
    ${filter}
    ${DMS.render('Card', {
      body: DMS.render('Table', {
        columns,
        data: data.items,
        summary: `Tổng tiền thanh toán (VND): <strong>${DMS.formatNumber(total)}</strong>`
      }) + DMS.render('Pagination', {
        current: data.pagination.page,
        pageSize: data.pagination.pageSize,
        total: data.pagination.total,
        pageSizeOptions: [10, 50, 100]
      })
    })}
  `;
}

window.renderSaleSummary = renderSaleSummary;
