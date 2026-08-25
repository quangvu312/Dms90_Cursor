/**
 * Report module shared helpers — clone từ HT Portal /report/sale/*
 */
(function (DMS) {
  const TEXT_REPLACEMENTS = [
    ['Nhân viên bán hàng', 'Nhân viên kinh doanh'],
    ['nhân viên bán hàng', 'nhân viên kinh doanh'],
    ['Nhà phân phối', 'Đại lý'],
    ['nhà phân phối', 'đại lý'],
    ['Mã nhà phân phối', 'Mã đại lý'],
    ['Tên nhà phân phối', 'Tên đại lý'],
    ['Mã NPP', 'Mã đại lý'],
    ['Tên NPP', 'Tên đại lý'],
    ['NPP', 'Đại lý'],
    ['NVBH', 'NVKD'],
    ['Loại điểm bán', 'Loại khách hàng'],
    ['SDT điểm bán', 'SDT khách hàng'],
    ['Địa chỉ điểm bán', 'Địa chỉ khách hàng'],
    ['Điểm Bán', 'Khách hàng'],
    ['Điểm bán', 'Khách hàng'],
    ['điểm bán', 'khách hàng']
  ];

  const ORDER_STATUS_OPTIONS = [
    { value: 'ALL', label: 'Tất cả' },
    { value: 'APPROVED', label: 'Đã duyệt' },
    { value: 'INIT', label: 'Khởi tạo' },
    { value: 'CANCELLED', label: 'Đã hủy' }
  ];

  const ORDER_TYPE_OPTIONS = [
    { value: 'SALE', label: 'Bán hàng' },
    { value: 'RETURN', label: 'Trả hàng' }
  ];

  const RETURN_STATUS_OPTIONS = [
    { value: 'ALL', label: 'Tất cả' },
    { value: 'APPROVED', label: 'Đã duyệt' },
    { value: 'INIT', label: 'Khởi tạo' }
  ];

  const ReportShared = {
    mapText(text) {
      if (!text) return text;
      let result = String(text);
      TEXT_REPLACEMENTS.forEach(([from, to]) => {
        result = result.split(from).join(to);
      });
      return result;
    },

    breadcrumb(current, route) {
      return DMS.render('Breadcrumb', {
        items: [
          { label: 'Báo cáo', route: route || '/report/sale/selling-order' },
          { label: 'Bán Hàng', route: route || '/report/sale/selling-order' },
          { label: this.mapText(current) }
        ]
      });
    },

    pickerField(label, placeholder = 'Vui lòng chọn') {
      return `
        <div class="dms-field-picker">
          <input class="dms-input dms-field-picker__input" placeholder="${DMS.escape(this.mapText(placeholder))}" readonly />
          ${DMS.render('Button', { text: 'Chọn', type: 'default', size: 'sm', dataAction: 'picker-open' })}
        </div>`;
    },

    renderQueryFilterControl(field) {
      const copy = { ...field };
      if (copy.label) copy.label = this.mapText(copy.label);
      if (copy.placeholder) copy.placeholder = this.mapText(copy.placeholder);
      switch (copy.type) {
        case 'search':
          return DMS.render('Input', {
            placeholder: copy.placeholder,
            value: copy.value || '',
            className: 'dms-searchbox__input'
          });
        case 'date':
          return DMS.render('DatePicker', { placeholder: copy.placeholder, value: copy.value || '' });
        case 'select':
          return DMS.render('Select', { placeholder: copy.placeholder, options: copy.options || [] });
        case 'picker':
          return this.pickerField(copy.label, copy.placeholder);
        default:
          return DMS.render('Input', copy);
      }
    },

    renderQueryFilterItem(field, rowIndex) {
      const label = this.mapText(field.label || field.placeholder || '');
      const showLabel = field.type !== 'search' ? label : (field.placeholder ? this.mapText(field.placeholder) : label);
      return `
        <div class="dms-report-filter-item" data-filter-row="${rowIndex}">
          <label class="dms-report-filter-item__label" title="${DMS.escape(showLabel)}">${DMS.escape(showLabel)}</label>
          <div class="dms-report-filter-item__control">${this.renderQueryFilterControl(field)}</div>
        </div>`;
    },

    /** HT Portal ant-pro-query-filter layout — dùng cho selling-order, return-order */
    renderQueryFilters(fields, options = {}) {
      const { showCollapse = false } = options;
      const itemsHtml = fields.map((f, i) => this.renderQueryFilterItem(f, Math.floor(i / 4) + 1)).join('');

      const collapseBtn = showCollapse
        ? DMS.render('Button', {
          text: 'Thu gọn',
          type: 'link',
          dataAction: 'filter-collapse',
          className: 'dms-report-collapse-btn'
        })
        : '';

      const actionsRow = `
        <div class="dms-report-query-filter__actions-row">
          ${DMS.render('Button', { text: 'Làm mới', type: 'ghost', dataAction: 'filter-reset' })}
          ${DMS.render('Button', { text: 'Tìm kiếm', type: 'primary', dataAction: 'filter-search' })}
          ${collapseBtn}
        </div>`;

      return DMS.render('Card', {
        className: 'dms-report-query-filter',
        body: `<div class="dms-report-query-filter__grid">${itemsHtml}${actionsRow}</div>`
      });
    },

    renderFilters(fields) {
      const mapped = (fields || []).map((f) => {
        const copy = Object.assign({}, f);
        if (copy.label) copy.label = this.mapText(copy.label);
        if (copy.placeholder) copy.placeholder = this.mapText(copy.placeholder);
        if (copy.type === 'picker') {
          return {
            html: `<div class="dms-form-item">
              <label class="dms-form-item__label">${DMS.escape(copy.label || '')}</label>
              ${this.pickerField(copy.label, copy.placeholder)}
            </div>`
          };
        }
        return copy;
      });
      return DMS.render('FilterPanel', { fields: mapped });
    },

    sellingOrderFilters() {
      return this.renderQueryFilters([
        { type: 'search', placeholder: 'Tìm kiếm theo Mã đơn, Mã đơn hàng ERP' },
        { type: 'select', label: 'Kênh bán hàng', placeholder: 'Kênh bán hàng', options: [
          { value: 'GT', label: 'GENERAL TRADE' }, { value: 'MT', label: 'MODERN TRADE' }
        ]},
        { type: 'select', label: 'Vùng bán hàng', placeholder: 'Vùng bán hàng', options: [] },
        { type: 'select', label: 'Khu vực bán hàng', placeholder: 'Khu vực bán hàng', options: [] },
        { type: 'picker', label: 'Mã NPP', placeholder: 'Mã đại lý' },
        { type: 'picker', label: 'Nhà phân phối', placeholder: 'Đại lý' },
        { type: 'picker', label: 'Nhãn hàng', placeholder: 'Nhãn hàng' },
        { type: 'select', label: 'Loại đơn hàng', placeholder: 'Loại đơn hàng', options: ORDER_TYPE_OPTIONS },
        { type: 'select', label: 'Trạng thái đơn hàng', placeholder: 'Trạng thái đơn hàng', options: ORDER_STATUS_OPTIONS },
        { type: 'date', label: 'Từ ngày', placeholder: 'Từ ngày', value: '01-08-2026' },
        { type: 'date', label: 'Đến ngày', placeholder: 'Đến ngày', value: '07-08-2026' }
      ], { showCollapse: true });
    },

    productRevenueFilters() {
      return this.renderFilters([
        { type: 'search', label: 'Tìm kiếm theo', placeholder: 'Tìm kiếm theo Mã | Tên sản phẩm' },
        { type: 'select', label: 'Trạng thái đơn hàng', placeholder: 'Trạng thái đơn hàng', options: ORDER_STATUS_OPTIONS },
        { type: 'date', label: 'Từ ngày', placeholder: 'Từ ngày', value: '01-08-2026' },
        { type: 'date', label: 'Đến ngày', placeholder: 'Đến ngày', value: '07-08-2026' },
        { type: 'select', label: 'Vùng bán hàng', placeholder: 'Vùng bán hàng', options: [] },
        { type: 'select', label: 'Khu vực bán hàng', placeholder: 'Khu vực bán hàng', options: [] },
        { type: 'select', label: 'Tỉnh/Thành Phố', placeholder: 'Tỉnh/Thành Phố', options: [] },
        { type: 'select', label: 'Phường/Xã', placeholder: 'Phường/Xã', options: [] },
        { type: 'picker', label: 'Nhãn hàng', placeholder: 'Nhãn hàng' },
        { type: 'picker', label: 'Nhà phân phối', placeholder: 'Đại lý' }
      ]);
    },

    customerRevenueFilters() {
      return this.renderFilters([
        { type: 'search', label: 'Tìm kiếm theo', placeholder: 'Tìm kiếm theo Mã | Tên | SĐT khách hàng' },
        { type: 'select', label: 'Trạng thái đơn hàng', placeholder: 'Trạng thái đơn hàng', options: ORDER_STATUS_OPTIONS },
        { type: 'date', label: 'Từ ngày', placeholder: 'Từ ngày', value: '01-08-2026' },
        { type: 'date', label: 'Đến ngày', placeholder: 'Đến ngày', value: '07-08-2026' },
        { type: 'select', label: 'Vùng bán hàng', placeholder: 'Vùng bán hàng', options: [] },
        { type: 'select', label: 'Khu vực bán hàng', placeholder: 'Khu vực bán hàng', options: [] },
        { type: 'select', label: 'Tỉnh/Thành Phố', placeholder: 'Tỉnh/Thành Phố', options: [] },
        { type: 'select', label: 'Phường/Xã', placeholder: 'Phường/Xã', options: [] },
        { type: 'picker', label: 'Nhà phân phối', placeholder: 'Đại lý' }
      ]);
    },

    salesmanRevenueFilters() {
      return this.renderFilters([
        { type: 'search', label: 'Tìm kiếm theo', placeholder: 'Tìm kiếm theo Mã | Tên nhân viên bán hàng' },
        { type: 'select', label: 'Trạng thái đơn hàng', placeholder: 'Trạng thái đơn hàng', options: ORDER_STATUS_OPTIONS },
        { type: 'date', label: 'Từ ngày', placeholder: 'Từ ngày', value: '01-08-2026' },
        { type: 'date', label: 'Đến ngày', placeholder: 'Đến ngày', value: '07-08-2026' },
        { type: 'select', label: 'Vùng bán hàng', placeholder: 'Vùng bán hàng', options: [] },
        { type: 'select', label: 'Khu vực bán hàng', placeholder: 'Khu vực bán hàng', options: [] },
        { type: 'select', label: 'Tỉnh/Thành Phố', placeholder: 'Tỉnh/Thành Phố', options: [] },
        { type: 'select', label: 'Phường/Xã', placeholder: 'Phường/Xã', options: [] },
        { type: 'picker', label: 'Nhà phân phối', placeholder: 'Đại lý' }
      ]);
    },

    returnOrderFilters() {
      return this.renderQueryFilters([
        { type: 'date', label: 'Từ ngày', placeholder: 'Từ ngày', value: '01-08-2026' },
        { type: 'date', label: 'Đến ngày', placeholder: 'Đến ngày', value: '07-08-2026' },
        { type: 'select', label: 'Vùng bán hàng', placeholder: 'Vùng bán hàng', options: [] },
        { type: 'select', label: 'Khu Vực bán hàng', placeholder: 'Khu vực bán hàng', options: [] },
        { type: 'picker', label: 'Nhà phân phối', placeholder: 'Đại lý' },
        { type: 'select', label: 'Trạng thái', placeholder: 'Trạng thái', options: RETURN_STATUS_OPTIONS }
      ], { showCollapse: false });
    },

    columnsFromTitles(titles) {
      return titles.map((title, i) => ({
        key: `col${i}`,
        title: this.mapText(title),
        _rawTitle: title
      }));
    },

    mapRowToColumns(row, columnDefs) {
      const mapped = {};
      columnDefs.forEach(col => {
        mapped[col.key] = row[col.key] ?? row[this.camelKey(col._rawTitle || col.title)] ?? '';
      });
      return mapped;
    },

    camelKey(title) {
      return title
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase())
        .replace(/^./, c => c.toLowerCase())
        .replace(/[^a-zA-Z0-9]/g, '');
    },

    buildColumns(keys, titles) {
      return keys.map((key, i) => ({
        key,
        title: this.mapText(titles[i] || key),
        _rawTitle: titles[i]
      }));
    },

    formatNumber(val) {
      if (val === null || val === undefined || val === '') return '';
      return DMS.formatNumber(val);
    },

    renderReportPage(cfg) {
      const {
        title, route, filterHtml, columns, data, pagination,
        listTitle, emptyTitle = 'Không có dữ liệu'
      } = cfg;
      const items = data?.items || [];
      const page = pagination || data?.pagination || { page: 1, pageSize: 10, total: items.length };

      const tableColumns = columns.map(col => {
        const c = { ...col, title: this.mapText(col.title) };
        if (col.type === 'number') {
          c.render = (v) => this.formatNumber(v);
        } else if ((col.key === 'status' || /trạng thái/i.test(col.title || '')) && !col.render) {
          c.render = (v) => v ? DMS.render('StatusTag', { status: v }) : '';
        }
        return c;
      });

      const tableBody = items.length
        ? DMS.render('Table', { columns: tableColumns, data: items })
        : `<div class="dms-table-wrapper is-sticky-head">
            <table class="dms-table"><thead><tr>${tableColumns.map(c => `<th>${DMS.escape(c.title)}</th>`).join('')}</tr></thead>
            <tbody><tr><td colspan="${tableColumns.length}">${DMS.render('EmptyState', { title: emptyTitle })}</td></tr></tbody></table></div>`;

      const listCard = DMS.render('Card', {
        className: 'dms-report-list-toolbar',
        title: listTitle || 'Danh sách',
        extra: DMS.render('Button', {
          text: 'Export Excel',
          type: 'primary',
          dataAction: 'export-excel'
        }),
        body: tableBody + DMS.render('Pagination', {
          current: page.page,
          pageSize: page.pageSize,
          total: page.total,
          pageSizeOptions: [10, 50, 100]
        })
      });

      return `
        ${this.breadcrumb(title, route)}
        <h1 class="dms-page-header__title dms-mt-md">${DMS.escape(this.mapText(title))}</h1>
        ${filterHtml}
        ${listCard}
      `;
    },

    bindReportActions(container) {
      container.addEventListener('click', (e) => {
        if (e.target.closest('[data-action="export-excel"]')) {
          DMS.get('Dialog').confirm('Bạn có muốn xuất file Excel?', () => {
            DMS.get('Toast').show('Xuất file Excel thành công', 'success');
          });
        }
        if (e.target.closest('[data-action="filter-search"]')) {
          DMS.get('Toast').show('Tìm kiếm thành công', 'success');
        }
        if (e.target.closest('[data-action="filter-reset"]')) {
          DMS.get('Toast').show('Đã làm mới bộ lọc', 'info');
        }
        if (e.target.closest('[data-action="filter-collapse"]')) {
          const panel = container.querySelector('.dms-report-query-filter');
          const btn = e.target.closest('[data-action="filter-collapse"]');
          if (panel && btn) {
            panel.classList.toggle('is-collapsed');
            const label = panel.classList.contains('is-collapsed') ? 'Mở rộng' : 'Thu gọn';
            const textEl = btn.querySelector('.dms-btn__text');
            if (textEl) textEl.textContent = label;
          }
        }
        if (e.target.closest('[data-action="picker-open"]')) {
          DMS.get('Modal').show({
            title: this.mapText('Chọn đại lý'),
            body: DMS.render('SearchBox', { placeholder: 'Tìm kiếm mã, tên đại lý' }) +
              DMS.render('Table', {
                columns: [
                  { key: 'code', title: 'Mã đại lý' },
                  { key: 'name', title: 'Tên đại lý' }
                ],
                data: [
                  { code: 'DL001', name: 'Đại lý Miền Nam 1' },
                  { code: 'DL002', name: 'Đại lý Miền Bắc 1' }
                ]
              }),
            footer: DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'modal-close' })
          });
        }
      });
    },

    loadJson(path) {
      return fetch(path).then(r => r.json());
    },

    registerReportPage(cfg) {
      const self = this;
      const fn = async function () {
        const data = await self.loadJson(cfg.dataPath);
        return self.renderReportPage({
          title: cfg.title,
          route: cfg.route,
          filterHtml: cfg.filterHtml(),
          columns: cfg.columns,
          data,
          listTitle: cfg.listTitle
        });
      };
      fn.onMount = (c) => self.bindReportActions(c);
      window[cfg.handler] = fn;
    },

    SELLING_ORDER_COLUMNS: [
      'orderDate', 'channel', 'region', 'area', 'distributorCode', 'distributorName',
      'supervisorCode', 'supervisorName', 'routeCode', 'routeName', 'salesmanCode', 'salesmanName',
      'salesmanPhone', 'customerCode', 'customerName', 'saleDate', 'deliveryDate', 'orderCode',
      'erpCode', 'referenceCode', 'orderType', 'orderStatus', 'productGroup', 'category', 'brand',
      'subCategory', 'skuCode', 'productName', 'uom', 'unitPrice', 'batch', 'expiryDate',
      'saleQty', 'promoQty', 'promoType', 'promoName', 'vat', 'vatAmount', 'amountBeforeVat',
      'amountAfterVat', 'orderDiscount', 'productDiscountPct', 'ontopDiscount', 'normalDiscount',
      'defaultDiscount', 'discountExVat', 'revenueExVat', 'totalOrderDiscount', 'totalBeforeVat',
      'totalAfterVat', 'paymentMethod', 'moneySource', 'storeType', 'storePhone', 'storeAddress',
      'ward', 'province', 'createdBy', 'orderSource', 'createBusiness'
    ],

    SELLING_ORDER_TITLES: [
      'Ngày đặt hàng', 'Kênh', 'Vùng bán hàng', 'Khu vực bán hàng', 'Mã NPP', 'Tên NPP',
      'Mã GSBH', 'Tên GSBH', 'Mã tuyến bán hàng', 'Tên tuyến bán hàng', 'Mã NVBH', 'Tên NVBH',
      'SĐT của sale', 'Mã khách hàng', 'Tên khách hàng', 'Ngày bán hàng', 'Ngày giao hàng',
      'Mã đơn', 'Mã đơn hàng ERP', 'Mã tham chiếu', 'Loại đơn hàng', 'Trạng thái đơn hàng',
      'Nhóm sản phẩm', 'Ngành hàng', 'Nhãn hiệu', 'Chủng loại', 'Mã SKU', 'Tên sản phẩm',
      'Đơn vị tính', 'Đơn giá', 'Lô', 'Hạn sử dụng', 'Số lượng bán (theo lô)', 'Số lượng khuyến mãi',
      'Loại chương trình khuyến mãi', 'Tên chương trình khuyến mãi', 'VAT', 'Tiền VAT (từng sản phẩm)',
      'Thành tiền trước VAT', 'Thành tiền sau VAT', 'Chiết khấu đơn hàng sau VAT',
      'Chiết khẩu (% từng sản phẩm) sau VAT', 'Tiền chiết khấu ontop trên từng sản phẩm',
      'Tiền chiết khấu bình thường trên từng sản phẩm', 'Chiết khấu mặc định', 'Chiết khấu (-VAT)',
      'Doanh Thu (-VAT)', 'Tổng chiết khấu đơn hàng sau VAT', 'Tổng tiền trước VAT',
      'Tổng tiền sau VAT sau khi trừ chiết khấu', 'Phương thức thanh toán', 'Nguồn tiền',
      'Loại điểm bán', 'SDT điểm bán', 'Địa chỉ điểm bán', 'Phường/Xã', 'Tỉnh/Thành phố',
      'Người tạo', 'Nguồn đơn hàng', 'Nghiệp vụ tạo đơn'
    ]
  };

  window.ReportShared = ReportShared;
})(window.DMS);
