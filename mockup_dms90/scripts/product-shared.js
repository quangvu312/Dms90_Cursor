/**
 * Product module shared helpers
 * Nguồn: 354-ho-danh-sach-san-pham.md, 460-vg-quan-li-san-pham.md
 */
(function (DMS) {
  const ProductShared = {
    breadcrumb(items) {
      return DMS.render('Breadcrumb', { items });
    },

    productBreadcrumb(current) {
      return this.breadcrumb([
        { label: 'Dữ Liệu Nền', route: '/master/product/list' },
        { label: 'Sản Phẩm', route: '/master/product/list' },
        { label: current }
      ]);
    },

    renderDetailBody(product) {
      const attrs = product.attributes || {};
      const attrRows = Object.entries({
        Division: attrs.division,
        Segmentation: attrs.segmentation,
        'Product type': attrs.productType,
        Indication: attrs.indication,
        Function: attrs.function,
        Brand: attrs.brand,
        'Cost elements': attrs.costElements,
        Method: attrs.method,
        Pathology: attrs.pathology,
        'Skin laye': attrs.skinLaye
      }).filter(([, v]) => v).map(([k, v]) =>
        `<div class="dms-form-item"><label class="dms-form-item__label">${DMS.escape(k)}</label><div>${DMS.escape(v)}</div></div>`
      ).join('');

      const units = (product.conversionUnits || []).map(u =>
        `<tr><td>${DMS.escape(u.unit)}</td><td>${DMS.escape(u.value)}</td></tr>`
      ).join('');

      return `
        <div class="dms-grid-2">
          <div>
            ${product.image ? `<img src="${DMS.escape(product.image)}" alt="" style="max-width:120px;border-radius:8px" />` : DMS.render('Avatar', { text: product.sku, size: 'lg' })}
          </div>
          <div>
            ${DMS.render('StatusTag', { status: product.status })}
          </div>
        </div>
        ${DMS.render('Tabs', {
          tabs: [
            {
              label: 'Thông tin cơ bản',
              content: `<div class="dms-form-grid">
                ${DMS.render('Input', { label: 'Mã SKU', value: product.sku, disabled: true })}
                ${DMS.render('Input', { label: 'Tên sản phẩm', value: product.name, disabled: true })}
                ${DMS.render('Input', { label: 'Phân cấp sản phẩm', value: product.categoryPath, disabled: true })}
                ${DMS.render('Input', { label: 'Đơn vị kinh doanh', value: product.businessUnit, disabled: true })}
                ${DMS.render('Input', { label: 'Thuế', value: product.taxName, disabled: true })}
                ${DMS.render('Input', { label: 'VAT', value: product.vat, disabled: true })}
              </div>`
            },
            {
              label: 'Thông tin sản phẩm',
              content: `<div class="dms-form-grid">${attrRows || DMS.render('EmptyState', { title: 'Không có thuộc tính bổ sung' })}</div>`
            },
            {
              label: 'Đơn vị tính',
              content: `
                ${DMS.render('Input', { label: 'Đơn vị cơ bản', value: product.baseUnit, disabled: true })}
                ${units ? `<div class="dms-table-wrapper dms-mt-md"><table class="dms-table"><thead><tr><th>Đơn vị quy đổi</th><th>Giá trị quy đổi</th></tr></thead><tbody>${units}</tbody></table></div>` : ''}`
            }
          ]
        })}
      `;
    },

    renderFormBody(options = {}) {
      const { mode = 'create', product = {}, refs = {} } = options;
      const disabled = mode === 'edit' && product.hasTransaction;

      return `
        <div class="dms-form-grid">
          <div class="dms-form-item">
            <label class="dms-form-item__label">Ảnh</label>
            <input type="file" class="dms-input" accept="image/jpeg,image/png,image/svg+xml" />
          </div>
          <div></div><div></div>
          ${DMS.render('Input', { label: 'Mã SKU', value: product.sku || '', placeholder: 'Nhập mã sản phẩm', requiredMark: true, disabled: disabled && product.hasTransaction })}
          ${DMS.render('Input', { label: 'Tên sản phẩm', value: product.name || '', placeholder: 'Nhập tên sản phẩm', requiredMark: true, disabled: disabled && product.hasTransaction })}
          <div class="dms-form-item">
            <label class="dms-form-item__label">Trạng thái</label>
            ${DMS.render('Switch', { checked: product.status !== 'INACTIVE', label: 'Hoạt động' })}
          </div>
          ${DMS.render('Select', { label: 'Thuế', placeholder: 'Chọn thuế', options: refs.taxes || [], value: product.taxCode || '', requiredMark: true })}
          ${DMS.render('Input', { label: 'VAT', value: product.vat || '', disabled: true })}
          ${DMS.render('Select', { label: 'Phân cấp', placeholder: 'Chọn phân cấp sản phẩm', options: refs.categories || [], value: product.categoryCode || '', requiredMark: true })}
          ${DMS.render('Select', { label: 'Đơn vị kinh doanh', placeholder: 'Chọn đơn vị kinh doanh', options: refs.businessUnits || [], value: product.businessUnitCode || '', requiredMark: true })}
          ${DMS.render('Select', { label: 'Đơn vị cơ bản', placeholder: 'Chọn đơn vị tính', options: refs.uoms || [], value: product.baseUnitCode || '', requiredMark: true })}
        </div>
        <div class="dms-mt-md">
          <strong>Đơn vị quy đổi</strong>
          ${DMS.render('Button', { text: 'Thêm đơn vị quy đổi', type: 'ghost', size: 'sm', dataAction: 'add-conversion-unit' })}
          <div id="conversion-units-container" class="dms-mt-sm"></div>
        </div>
      `;
    },

    async loadRefs() {
      const [taxes, categories, businessUnits, uoms] = await Promise.all([
        fetch('data/product-tax.json').then(r => r.json()),
        fetch('data/product-category-flat.json').then(r => r.json()),
        fetch('data/product-business-unit.json').then(r => r.json()),
        fetch('data/product-uom.json').then(r => r.json())
      ]);
      return {
        taxes: taxes.items.map(t => ({ value: t.code, label: t.name })),
        categories: categories.items.map(c => ({ value: c.code, label: c.path })),
        businessUnits: businessUnits.items.map(b => ({ value: b.code, label: b.name })),
        uoms: uoms.items.map(u => ({ value: u.code, label: u.name }))
      };
    },

    findProduct(id) {
      return fetch('data/product.json').then(r => r.json()).then(data =>
        data.items.find(p => p.id === id || p.sku === id)
      );
    }
  };

  window.ProductShared = ProductShared;
})(window.DMS);
