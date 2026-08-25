function bindInvList(container, cfg) {
  container.addEventListener('click', (e) => {
    if (e.target.closest('[data-action="filter-search"]')) {
      DMS.get('Toast').show('Đã tìm kiếm theo điều kiện', 'info');
    }
    if (e.target.closest('[data-action="filter-reset"]')) {
      DMS.get('Toast').show('Đã làm mới bộ lọc', 'info');
    }
    if (e.target.closest('[data-action="inv-export"]')) {
      DMS.get('Dialog').confirm(cfg.exportConfirm || 'Bạn có muốn xuất báo cáo?', () => {
        DMS.get('Toast').show('Export Excel thành công', 'success');
      });
    }
    const view = e.target.closest('[data-action^="inv-view-"]');
    if (view && cfg.onView) cfg.onView(view.dataset.action.replace('inv-view-', ''));
    const ap = e.target.closest('[data-action^="inv-approve-"]');
    if (ap && cfg.onApprove) cfg.onApprove(ap.dataset.action.replace('inv-approve-', ''));
    const rj = e.target.closest('[data-action^="inv-reject-"]');
    if (rj && cfg.onReject) cfg.onReject(rj.dataset.action.replace('inv-reject-', ''));
    const mid = e.target.closest('[data-action^="inv-mid-"]');
    if (mid && cfg.onMid) cfg.onMid(mid.dataset.action.replace('inv-mid-', ''));
  });
}

async function renderStocktakeApproval() {
  const data = await InvShared.loadJson('data/inventory-stocktake.json');
  const filter = DMS.render('FilterPanel', {
    fields: [
      { type: 'search', label: 'Tìm kiếm theo', placeholder: 'Theo Mã kiểm kho' },
      { type: 'select', label: 'Nhà phân phối', placeholder: 'Chọn Nhà phân phối', options: [
        { value: 'NPP001', label: 'NPP001 - NPP Miền Nam 1' },
        { value: 'NPP002', label: 'NPP002 - NPP Miền Bắc 1' }
      ]},
      { type: 'date', label: 'Từ ngày', placeholder: 'Từ ngày' },
      { type: 'date', label: 'Đến ngày', placeholder: 'Đến ngày' },
      { type: 'multiselect', label: 'Trạng thái', placeholder: 'Trạng thái', options: [
        { value: 'INIT', label: 'Khởi tạo' },
        { value: 'APPROVED', label: 'Đã duyệt' },
        { value: 'CANCELLED', label: 'Đã hủy' }
      ]}
    ]
  });
  const columns = [
    {
      key: 'code',
      title: 'Mã kiểm kho',
      render: (val, row) => `<a class="dms-table__link" data-action="inv-view-${row.id}">${DMS.escape(val)}</a>`
    },
    { key: 'npp', title: 'Nhà phân phối' },
    { key: 'warehouse', title: 'Kho' },
    { key: 'statusLabel', title: 'Trạng thái', render: (val, row) => InvShared.tag(val, row.status) },
    {
      key: 'midStatus',
      title: 'Trạng thái trung gian',
      render: (val, row) => val
        ? `<a class="dms-table__link" data-action="inv-mid-${row.id}">Xem chi tiết</a>`
        : ''
    },
    { key: 'createdAt', title: 'Ngày tạo' },
    { key: 'createdBy', title: 'Người tạo' },
    { key: 'updatedAt', title: 'Ngày cập nhật' },
    { key: 'updatedBy', title: 'Người cập nhật' },
    {
      key: 'actions',
      title: 'Tùy chỉnh',
      fixed: 'right',
      render: (_, row) => row.status === 'INIT'
        ? DMS.render('TableActions', {
            actions: [
              { type: 'approve', title: 'Duyệt', dataAction: `inv-approve-${row.id}` },
              { type: 'reject', title: 'Từ chối', dataAction: `inv-reject-${row.id}` }
            ]
          })
        : ''
    }
  ];
  const openDetail = (id) => {
    const row = data.items.find(x => x.id === id);
    if (!row) return;
    DMS.get('Modal').show({
      title: 'Chi tiết phiếu kiểm kho NPP',
      size: 'xl',
      body: `<div class="dms-form-grid">
          ${DMS.render('Input', { label: 'Mã kiểm kho', value: row.code, disabled: true })}
          ${DMS.render('Input', { label: 'Nhà phân phối', value: row.npp, disabled: true })}
          ${DMS.render('Input', { label: 'Kho', value: row.warehouse, disabled: true })}
          ${DMS.render('Input', { label: 'Trạng thái', value: row.statusLabel, disabled: true })}
        </div>
        ${row.products.length ? DMS.render('Table', {
          columns: [
            { key: 'sku', title: 'Mã SKU' },
            { key: 'name', title: 'Tên sản phẩm' },
            { key: 'unit', title: 'Đơn vị tính' },
            { key: 'systemQty', title: 'Tồn hệ thống' },
            { key: 'actualQty', title: 'Tồn thực tế' },
            { key: 'diff', title: 'Chênh lệch' }
          ],
          data: row.products
        }) : DMS.render('EmptyState', { title: 'Trống' })}`,
      footer: DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'modal-close' })
    });
  };
  renderStocktakeApproval.onMount = function (container) {
    bindInvList(container, {
      onView: openDetail,
      onApprove: () => DMS.get('Dialog').confirm('Xác nhận duyệt phiếu kiểm kho NPP?', () => {
        DMS.get('Toast').show('Duyệt phiếu kiểm kho thành công', 'success');
      }),
      onReject: () => DMS.get('Dialog').confirm('Xác nhận từ chối phiếu kiểm kho NPP?', () => {
        InvShared.promptReason('Lý do từ chối', () => {
          DMS.get('Toast').show('Từ chối phiếu kiểm kho thành công', 'success');
        });
      }),
      onMid: (id) => {
        const row = data.items.find(x => x.id === id);
        DMS.get('Modal').show({
          title: 'Chi tiết lịch sử trạng thái trung gian',
          size: 'lg',
          body: DMS.render('Table', {
            columns: [
              { key: 'level', title: 'Cấp duyệt' },
              { key: 'status', title: 'Trạng thái trung gian' },
              { key: 'by', title: 'Người cập nhật' },
              { key: 'at', title: 'Ngày cập nhật' }
            ],
            data: [{ level: 'Cấp 1', status: row?.midStatus || '', by: row?.updatedBy, at: row?.updatedAt }]
          }),
          footer: DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'modal-close' })
        });
      }
    });
  };
  return `${InvShared.breadcrumb([{ label: 'Duyệt Kiểm Kho NPP' }])}
    <h1 class="dms-page-header__title dms-mt-md">Duyệt Kiểm Kho NPP</h1>
    ${filter}
    ${DMS.render('Card', { title: 'Danh sách', body: DMS.render('Table', { columns, data: data.items }) + DMS.render('Pagination', { current: data.pagination.page, pageSize: data.pagination.pageSize, total: data.pagination.total, pageSizeOptions: [10, 50, 100] }) })}`;
}

async function renderNppReturnApproval() {
  const data = await InvShared.loadJson('data/inventory-npp-return.json');
  const filter = DMS.render('FilterPanel', {
    fields: [
      { type: 'search', label: 'Tìm kiếm theo', placeholder: 'Tìm kiếm theo Mã trả hàng' },
      { type: 'select', label: 'Nhà phân phối', placeholder: 'Chọn Nhà phân phối', options: [
        { value: 'NPP001', label: 'NPP001 - NPP Miền Nam 1' },
        { value: 'NPP002', label: 'NPP002 - NPP Miền Bắc 1' }
      ]},
      { type: 'date', label: 'Từ ngày', placeholder: 'Từ ngày' },
      { type: 'date', label: 'Đến ngày', placeholder: 'Đến ngày' },
      { type: 'multiselect', label: 'Trạng thái', values: ['PENDING', 'APPROVED'], options: [
        { value: 'PENDING', label: 'Chờ duyệt' },
        { value: 'APPROVED', label: 'Đã duyệt' },
        { value: 'REJECTED', label: 'Đã từ chối' }
      ]}
    ]
  });
  const columns = [
    {
      key: 'code',
      title: 'Mã trả hàng',
      render: (val, row) => `<a class="dms-table__link" data-action="inv-view-${row.id}">${DMS.escape(val)}</a>`
    },
    { key: 'returnDate', title: 'Ngày trả hàng' },
    { key: 'npp', title: 'Nhà phân phối' },
    { key: 'statusLabel', title: 'Trạng thái', render: (val, row) => InvShared.tag(val, row.status) },
    { key: 'createdAt', title: 'Ngày tạo' },
    { key: 'createdBy', title: 'Người tạo' },
    { key: 'updatedAt', title: 'Ngày cập nhật' },
    { key: 'updatedBy', title: 'Người cập nhật' },
    {
      key: 'actions',
      title: 'Tùy chỉnh',
      fixed: 'right',
      render: (_, row) => row.status === 'PENDING'
        ? DMS.render('TableActions', {
            actions: [
              { type: 'approve', title: 'Duyệt', dataAction: `inv-approve-${row.id}` },
              { type: 'reject', title: 'Từ chối', dataAction: `inv-reject-${row.id}` }
            ]
          })
        : ''
    }
  ];
  const openDetail = (id) => {
    const row = data.items.find(x => x.id === id);
    if (!row) return;
    const prodCols = [
      { key: 'sku', title: 'Mã SKU' },
      { key: 'name', title: 'Tên sản phẩm' },
      { key: 'qty', title: 'Số lượng' },
      { key: 'unit', title: 'Đơn vị tính' },
      {
        key: 'lots',
        title: 'Thông tin lô',
        render: (_, p) => DMS.render('Button', { text: 'Xem', type: 'link', dataAction: `lot-${p.sku}` })
      }
    ];
    const el = DMS.get('Modal').show({
      title: 'Chi tiết phiếu trả hàng công ty',
      size: 'xl',
      body: `<div class="dms-form-grid">
          ${DMS.render('Input', { label: 'Ngày trả hàng', value: row.returnDate, disabled: true })}
          ${DMS.render('Input', { label: 'Nhà phân phối', value: row.npp, disabled: true })}
          ${DMS.render('Input', { label: 'Kho', value: row.warehouse, disabled: true })}
          ${DMS.render('Input', { label: 'Kênh', value: row.channel, disabled: true })}
          ${DMS.render('Input', { label: 'Trạng thái', value: row.statusLabel, disabled: true })}
          ${row.status === 'REJECTED' ? DMS.render('Input', { label: 'Lý do từ chối', value: row.rejectReason, disabled: true }) : ''}
        </div>
        ${row.products.length ? DMS.render('Table', { columns: prodCols, data: row.products }) : DMS.render('EmptyState', { title: 'Trống' })}`,
      footer: DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'modal-close' })
    });
    el.addEventListener('click', (ev) => {
      const lotBtn = ev.target.closest('[data-action^="lot-"]');
      if (lotBtn) {
        const sku = lotBtn.dataset.action.replace('lot-', '');
        const p = row.products.find(x => x.sku === sku);
        InvShared.showLot(p?.lots);
      }
    });
  };
  renderNppReturnApproval.onMount = function (container) {
    bindInvList(container, {
      onView: openDetail,
      onApprove: () => DMS.get('Dialog').confirm('Xác nhận duyệt phiếu trả hàng công ty?', () => {
        DMS.get('Toast').show('Duyệt phiếu trả hàng thành công', 'success');
      }),
      onReject: () => DMS.get('Dialog').confirm('Xác nhận từ chối phiếu trả hàng công ty?', () => {
        InvShared.promptReason('Lý do từ chối', () => {
          DMS.get('Toast').show('Từ chối phiếu trả hàng thành công', 'success');
        });
      })
    });
  };
  return `${InvShared.breadcrumb([{ label: 'Duyệt NPP Trả Hàng' }])}
    <h1 class="dms-page-header__title dms-mt-md">Duyệt NPP Trả Hàng</h1>
    ${filter}
    ${DMS.render('Card', { body: DMS.render('Table', { columns, data: data.items }) + DMS.render('Pagination', { current: data.pagination.page, pageSize: data.pagination.pageSize, total: data.pagination.total, pageSizeOptions: [10, 50, 100] }) })}`;
}

async function renderFullReturnApproval() {
  const data = await InvShared.loadJson('data/inventory-full-return.json');
  const filter = DMS.render('FilterPanel', {
    fields: [
      { type: 'search', label: 'Tìm kiếm theo', placeholder: 'Theo Mã trả hàng' },
      { type: 'select', label: 'Mã phiếu nhập kho', placeholder: 'Mã phiếu nhập kho', options: [
        { value: 'RC0000299', label: 'RC0000299' },
        { value: 'RC0000280', label: 'RC0000280' }
      ]},
      { type: 'select', label: 'Nhà phân phối', placeholder: 'Chọn Nhà phân phối', options: [
        { value: 'NPP001', label: 'NPP001 - NPP Miền Nam 1' }
      ]},
      { type: 'multiselect', label: 'Trạng thái', placeholder: 'Trạng thái', options: [
        { value: 'PENDING', label: 'Chờ duyệt' },
        { value: 'APPROVED', label: 'Đã duyệt' },
        { value: 'REJECTED', label: 'Đã từ chối' }
      ]},
      { type: 'date', label: 'Từ ngày', placeholder: 'Từ ngày' },
      { type: 'date', label: 'Đến ngày', placeholder: 'Đến ngày' }
    ]
  });
  const columns = [
    {
      key: 'code',
      title: 'Mã trả hàng',
      render: (val, row) => `<a class="dms-table__link" data-action="inv-view-${row.id}">${DMS.escape(val)}</a>`
    },
    { key: 'returnDate', title: 'Ngày trả hàng' },
    { key: 'inboundCode', title: 'Mã phiếu nhập kho' },
    { key: 'npp', title: 'Nhà phân phối' },
    { key: 'statusLabel', title: 'Trạng thái', render: (val, row) => InvShared.tag(val, row.status) },
    { key: 'createdAt', title: 'Ngày tạo' },
    { key: 'updatedAt', title: 'Ngày cập nhật' },
    { key: 'createdBy', title: 'Người tạo' },
    { key: 'updatedBy', title: 'Người cập nhật' },
    {
      key: 'actions',
      title: 'Tùy chỉnh',
      fixed: 'right',
      render: (_, row) => row.status === 'PENDING'
        ? DMS.render('TableActions', {
            actions: [
              { type: 'approve', title: 'Duyệt', dataAction: `inv-approve-${row.id}` },
              { type: 'reject', title: 'Từ chối', dataAction: `inv-reject-${row.id}` }
            ]
          })
        : ''
    }
  ];
  const openDetail = (id) => {
    const row = data.items.find(x => x.id === id);
    if (!row) return;
    DMS.get('Modal').show({
      title: 'Chi tiết phiếu trả hàng nguyên đơn',
      size: 'xl',
      body: `<div class="dms-form-grid">
          ${DMS.render('Input', { label: 'Ngày trả hàng', value: row.returnDate, disabled: true })}
          ${DMS.render('Input', { label: 'Mã phiếu nhập kho', value: row.inboundCode, disabled: true })}
          ${DMS.render('Input', { label: 'Kho', value: row.warehouse, disabled: true })}
          ${DMS.render('Input', { label: 'Kênh', value: row.channel, disabled: true })}
          ${DMS.render('Input', { label: 'Nhà phân phối', value: row.npp, disabled: true })}
          ${DMS.render('Input', { label: 'Trạng thái', value: row.statusLabel, disabled: true })}
        </div>
        <h4 class="dms-form-section__title">Danh sách sản phẩm</h4>
        ${row.products.length ? DMS.render('Table', {
          columns: [
            { key: 'sku', title: 'Mã SKU' },
            { key: 'name', title: 'Tên sản phẩm' },
            { key: 'unit', title: 'Đơn vị tính' },
            { key: 'qty', title: 'Số lượng' }
          ],
          data: row.products
        }) : DMS.render('EmptyState', { title: 'Trống' })}
        <h4 class="dms-form-section__title">Danh sách CTKM</h4>
        ${row.promotions.length ? DMS.render('Table', {
          columns: [
            { key: 'name', title: 'Tên CTKM' },
            { key: 'rule', title: 'Thể lệ chương trình' },
            { key: 'sku', title: 'Mã SKU' },
            { key: 'skuName', title: 'Tên sản phẩm' },
            { key: 'qty', title: 'Số lượng' },
            { key: 'unit', title: 'Đơn vị' }
          ],
          data: row.promotions
        }) : DMS.render('EmptyState', { title: 'Trống' })}`,
      footer: DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'modal-close' })
    });
  };
  renderFullReturnApproval.onMount = function (container) {
    bindInvList(container, {
      onView: openDetail,
      onApprove: () => DMS.get('Dialog').confirm('Xác nhận duyệt phiếu trả hàng nguyên đơn?', () => {
        DMS.get('Toast').show('Duyệt phiếu trả hàng nguyên đơn thành công', 'success');
      }),
      onReject: () => DMS.get('Dialog').confirm('Xác nhận từ chối phiếu trả hàng nguyên đơn?', () => {
        InvShared.promptReason('Lý do từ chối', () => {
          DMS.get('Toast').show('Từ chối phiếu trả hàng nguyên đơn thành công', 'success');
        });
      })
    });
  };
  return `${InvShared.breadcrumb([{ label: 'Duyệt Trả Hàng Nguyên Đơn' }])}
    <h1 class="dms-page-header__title dms-mt-md">Duyệt Trả Hàng Nguyên Đơn</h1>
    ${filter}
    ${DMS.render('Card', { body: DMS.render('Table', { columns, data: data.items }) + DMS.render('Pagination', { current: data.pagination.page, pageSize: data.pagination.pageSize, total: data.pagination.total, pageSizeOptions: [10, 50, 100] }) })}`;
}

function renderInvReportPage(cfg) {
  const extra = DMS.render('Button', { text: 'Export Excel', type: 'default', dataAction: 'inv-export' });
  cfg.fn.onMount = function (container) {
    bindInvList(container, { exportConfirm: cfg.exportConfirm });
  };
  return `${InvShared.breadcrumb([{ label: 'Báo Cáo', route: cfg.route }, { label: cfg.title }])}
    <h1 class="dms-page-header__title dms-mt-md">${DMS.escape(cfg.title)}</h1>
    ${cfg.filter}
    ${DMS.render('Card', {
      extra,
      body: (cfg.rows.length
        ? DMS.render('Table', { columns: cfg.columns, data: cfg.rows })
        : DMS.render('EmptyState', { title: 'Trống' })) +
        DMS.render('Pagination', { current: (cfg.pagination && cfg.pagination.page) || 1, pageSize: (cfg.pagination && cfg.pagination.pageSize) || 10, total: (cfg.pagination && cfg.pagination.total) || cfg.rows.length, pageSizeOptions: [10, 50, 100] })
    })}`;
}

async function renderInvReportCurrentStock() {
  const data = await InvShared.loadJson('data/report-current-stock.json');
  return renderInvReportPage({
    fn: renderInvReportCurrentStock,
    title: 'Tồn Kho Hiện Tại NPP',
    route: '/inventories/report/distributor',
    exportConfirm: 'Bạn có muốn xuất Báo cáo Tồn kho hiện tại NPP?',
    filter: DMS.render('FilterPanel', {
      fields: [
        { type: 'search', label: 'Tìm kiếm theo', placeholder: 'Mã/ tên sản phẩm' },
        { type: 'select', label: 'Kênh bán hàng', placeholder: 'Kênh bán hàng', options: [{ value: 'GT', label: 'GENERAL TRADE' }] },
        { type: 'select', label: 'Vùng bán hàng', placeholder: 'Vùng bán hàng', options: [{ value: 'MN', label: 'Miền Nam' }] },
        { type: 'select', label: 'Khu vực bán hàng', placeholder: 'Khu vực bán hàng', options: [{ value: 'HCM1', label: 'HCM 1' }] },
        { type: 'select', label: 'Nhà phân phối', placeholder: 'Chọn Nhà phân phối', options: [{ value: 'NPP001', label: 'NPP001 - NPP Miền Nam 1' }] }
      ]
    }),
    columns: [
      { key: 'channel', title: 'Kênh bán hàng' },
      { key: 'region', title: 'Vùng bán hàng' },
      { key: 'area', title: 'Khu vực bán hàng' },
      { key: 'nppCode', title: 'Mã nhà phân phối' },
      { key: 'nppName', title: 'Nhà phân phối' },
      { key: 'warehouse', title: 'Kho' },
      { key: 'productGroup', title: 'Nhóm sản phẩm' },
      { key: 'category', title: 'Ngành hàng' },
      { key: 'brand', title: 'Nhãn hiệu' },
      { key: 'sku', title: 'Mã SKU' },
      { key: 'name', title: 'Tên sản phẩm' },
      { key: 'unit', title: 'Đơn vị tính' },
      { key: 'lot', title: 'Lô' },
      { key: 'exp', title: 'Hạn sử dụng' },
      { key: 'price', title: 'Đơn giá', render: v => DMS.formatNumber(v) },
      { key: 'onHand', title: 'Tồn kho' },
      { key: 'hold', title: 'Tạm giữ' },
      { key: 'available', title: 'Có sẵn' },
      { key: 'value', title: 'Giá trị', render: v => DMS.formatNumber(v) }
    ],
    rows: data.items,
    pagination: data.pagination
  });
}

async function renderInvReportIoStock() {
  const data = await InvShared.loadJson('data/report-io-stock.json');
  return renderInvReportPage({
    fn: renderInvReportIoStock,
    title: 'Nhập Xuất Tồn NPP',
    route: '/inventories/report/existence',
    exportConfirm: 'Bạn có muốn xuất Báo cáo Nhập xuất tồn NPP?',
    filter: DMS.render('FilterPanel', {
      fields: [
        { type: 'search', label: 'Tìm kiếm theo', placeholder: 'Mã/ tên sản phẩm' },
        { type: 'select', label: 'Kênh bán hàng', placeholder: 'Kênh bán hàng', options: [{ value: 'GT', label: 'GENERAL TRADE' }] },
        { type: 'date', label: 'Từ ngày', placeholder: 'Từ ngày' },
        { type: 'date', label: 'Đến ngày', placeholder: 'Đến ngày' },
        { type: 'select', label: 'Nhà phân phối', placeholder: 'Chọn Nhà phân phối', options: [{ value: 'NPP001', label: 'NPP001 - NPP Miền Nam 1' }] },
        { type: 'select', label: 'Nhãn hàng', placeholder: 'Chọn nhãn hàng', options: [{ value: 'ANLENE', label: 'Anlene' }] }
      ]
    }),
    columns: [
      { key: 'npp', title: 'Nhà phân phối' },
      { key: 'channel', title: 'Kênh bán hàng' },
      { key: 'sku', title: 'Mã SKU' },
      { key: 'name', title: 'Tên sản phẩm' },
      { key: 'unit', title: 'Đơn vị tính' },
      { key: 'opening', title: 'Tồn đầu' },
      { key: 'inbound', title: 'Nhập' },
      { key: 'outbound', title: 'Xuất' },
      { key: 'closing', title: 'Tồn cuối' }
    ],
    rows: data.items,
    pagination: data.pagination
  });
}

async function renderInvReportInbound() {
  const data = await InvShared.loadJson('data/report-inbound.json');
  return renderInvReportPage({
    fn: renderInvReportInbound,
    title: 'Nhập Kho',
    route: '/inventories/report/import',
    exportConfirm: 'Bạn có muốn xuất Báo cáo Nhập kho?',
    filter: DMS.render('FilterPanel', {
      fields: [
        { type: 'search', label: 'Tìm kiếm theo', placeholder: 'Mã/ tên sản phẩm' },
        { type: 'select', label: 'Nhà phân phối', placeholder: 'Chọn Nhà phân phối', options: [{ value: 'NPP001', label: 'NPP001 - NPP Miền Nam 1' }] },
        { type: 'select', label: 'Kho', placeholder: 'Kho', options: [{ value: 'KHO_HCM1', label: 'Kho HCM 1' }] },
        { type: 'date', label: 'Từ ngày', placeholder: 'Từ ngày' },
        { type: 'date', label: 'Đến ngày', placeholder: 'Đến ngày' }
      ]
    }),
    columns: [
      { key: 'npp', title: 'Nhà phân phối' },
      { key: 'code', title: 'Mã nhập kho' },
      { key: 'date', title: 'Ngày nhập' },
      { key: 'sku', title: 'Mã SKU' },
      { key: 'name', title: 'Tên sản phẩm' },
      { key: 'warehouse', title: 'Kho' },
      { key: 'qty', title: 'Số lượng' },
      { key: 'unit', title: 'Đơn vị tính' },
      { key: 'status', title: 'Trạng thái' }
    ],
    rows: data.items,
    pagination: data.pagination
  });
}

async function renderInvReportOutbound() {
  const data = await InvShared.loadJson('data/report-outbound.json');
  return renderInvReportPage({
    fn: renderInvReportOutbound,
    title: 'Xuất Kho',
    route: '/inventories/report/export',
    exportConfirm: 'Bạn có muốn xuất Báo cáo Xuất kho?',
    filter: DMS.render('FilterPanel', {
      fields: [
        { type: 'search', label: 'Tìm kiếm theo', placeholder: 'Mã/ tên sản phẩm' },
        { type: 'select', label: 'Nhà phân phối', placeholder: 'Chọn Nhà phân phối', options: [{ value: 'NPP001', label: 'NPP001 - NPP Miền Nam 1' }] },
        { type: 'select', label: 'Kho', placeholder: 'Kho', options: [{ value: 'KHO_HCM1', label: 'Kho HCM 1' }] },
        { type: 'date', label: 'Từ ngày', placeholder: 'Từ ngày' },
        { type: 'date', label: 'Đến ngày', placeholder: 'Đến ngày' }
      ]
    }),
    columns: [
      { key: 'npp', title: 'Nhà phân phối' },
      { key: 'code', title: 'Mã xuất kho' },
      { key: 'date', title: 'Ngày xuất' },
      { key: 'sku', title: 'Mã SKU' },
      { key: 'name', title: 'Tên sản phẩm' },
      { key: 'warehouse', title: 'Kho' },
      { key: 'qty', title: 'Số lượng' },
      { key: 'unit', title: 'Đơn vị tính' },
      { key: 'status', title: 'Trạng thái' }
    ],
    rows: data.items,
    pagination: data.pagination
  });
}

window.renderStocktakeApproval = renderStocktakeApproval;
window.renderNppReturnApproval = renderNppReturnApproval;
window.renderFullReturnApproval = renderFullReturnApproval;
window.renderInvReportCurrentStock = renderInvReportCurrentStock;
window.renderInvReportIoStock = renderInvReportIoStock;
window.renderInvReportInbound = renderInvReportInbound;
window.renderInvReportOutbound = renderInvReportOutbound;
