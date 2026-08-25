/**
 * Bảng giá bán — helper
 * UI baseline: eco-dms-dev selling-price-store
 * Business change: [VG] Bảng giá - Thêm chiết khấu bảng giá (Docs/Confluence/459-vg-bang-gia-ban.md)
 */
(function (DMS) {
  const LIST_ROUTE = '/master/product/selling-price';
  const STATUS_MAP = {
    DRAFT: { text: 'Khởi tạo', type: 'orange' },
    APPROVED: { text: 'Đã duyệt', type: 'green' },
    CANCELLED: { text: 'Đã hủy', type: 'red' }
  };

  function emptyDraft() {
    return {
      id: '',
      code: '',
      name: '',
      fromDate: '',
      toDate: '',
      condition: '',
      customerGroupIds: [],
      products: [],
      dirty: false
    };
  }

  function parseDmy(str) {
    if (!str) return null;
    const iso = str.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (iso) return new Date(Number(iso[1]), Number(iso[2]) - 1, Number(iso[3]));
    const dmy = str.match(/^(\d{2})[\/\-](\d{2})[\/\-](\d{4})$/);
    if (dmy) return new Date(Number(dmy[3]), Number(dmy[2]) - 1, Number(dmy[1]));
    return null;
  }

  function toIso(str) {
    const d = parseDmy(str);
    if (!d) return '';
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${d.getFullYear()}-${mm}-${dd}`;
  }

  function toDmy(str) {
    const d = parseDmy(str);
    if (!d) return str || '';
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${dd}-${mm}-${d.getFullYear()}`;
  }

  function todayStart() {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }

  function formatMoney(num) {
    if (num == null || num === '') return '';
    return Number(num).toLocaleString('vi-VN');
  }

  function priceAfterDiscount(price, discount) {
    if (discount === '' || discount == null) return '';
    const d = Number(discount);
    if (Number.isNaN(d)) return '';
    const p = Number(price) || 0;
    return Math.round(p * (1 - d / 100));
  }

  function skuFormatOk(sku) {
    return /^[A-Za-z0-9_]+$/.test(sku || '');
  }

  function discountOk(val) {
    if (val === '' || val == null) return false;
    if (!/^\d+(\.\d{1,2})?$/.test(String(val).trim())) return false;
    const n = Number(val);
    return n >= 0 && n <= 100;
  }

  const SellingPriceShared = {
    LIST_ROUTE,

    statusLabel(code) {
      return STATUS_MAP[code] || { text: code || '', type: 'default' };
    },

    breadcrumb(current) {
      return DMS.render('Breadcrumb', {
        items: [
          { label: 'Dữ Liệu Nền', route: LIST_ROUTE },
          { label: 'Sản Phẩm', route: '/master/product/list' },
          { label: current || 'Bảng Giá Bán' }
        ]
      });
    },

    async loadData() {
      ['sp-import-modal', 'sp-add-modal'].forEach(id => document.getElementById(id)?.remove());
      document.querySelectorAll('.dms-modal-overlay').forEach(el => {
        if (el.id !== 'sp-wizard-modal') {
          const title = el.querySelector('.dms-modal__title')?.textContent || '';
          if (title === 'Import sản phẩm' || title === 'Thêm sản phẩm') el.remove();
        }
      });
      return fetch('data/selling-price.json').then(r => r.json());
    },

    getDraft() {
      if (!window.__spWizard) window.__spWizard = emptyDraft();
      return window.__spWizard;
    },

    resetDraft() {
      window.__spWizard = emptyDraft();
      return window.__spWizard;
    },

    loadDraftFromItem(item) {
      const groups = item.customerGroups || [];
      window.__spWizard = {
        id: item.id,
        code: item.code || '',
        name: item.name || '',
        fromDate: toIso(item.fromDate),
        toDate: toIso(item.toDate),
        condition: item.applyObject === 'Nhóm khách hàng' ? 'STORE_GROUP' : '',
        customerGroupIds: groups.slice(),
        products: (item.products || []).map(p => ({ ...p })),
        dirty: false,
        status: item.status
      };
      return window.__spWizard;
    },

    isCurrentlyApplicable(item, today) {
      const from = parseDmy(item.fromDate);
      const to = parseDmy(item.toDate);
      if (!from || !to) return false;
      return item.status === 'APPROVED' && from <= today && today <= to;
    },

    filterListItems(items, filters) {
      const q = (filters.q || '').trim().toLowerCase();
      const date = parseDmy(filters.date);
      const applyObject = filters.applyObject || '';
      const status = filters.status || '';
      return (items || []).filter(it => {
        if (q && !(String(it.code || '').toLowerCase().includes(q) || String(it.name || '').toLowerCase().includes(q))) {
          return false;
        }
        if (applyObject === 'STORE_GROUP' && it.applyObject !== 'Nhóm khách hàng') return false;
        if (status && it.status !== status) return false;
        if (date) {
          const from = parseDmy(it.fromDate);
          const to = parseDmy(it.toDate);
          if (!from || !to || date < from || date > to) return false;
        }
        return true;
      });
    },

    renderStepper(step) {
      const items = [
        { n: 1, label: 'Thông tin chung' },
        { n: 2, label: 'Đối tượng áp dụng' },
        { n: 3, label: 'Danh sách sản phẩm' }
      ];
      return `<div class="dms-steps">${items.map(it => `
        <div class="dms-steps__item ${step === it.n ? 'is-active' : ''} ${step > it.n ? 'is-done' : ''}">
          <span class="dms-steps__num">${it.n}</span>
          <span>${it.label}</span>
        </div>`).join('')}</div>`;
    },

    fieldError(id, msg) {
      return msg ? `<div class="dms-form-item__error" id="${id}-error">${DMS.escape(msg)}</div>` : `<div class="dms-form-item__error" id="${id}-error"></div>`;
    },

    renderStep1(draft, readonly) {
      const dis = readonly ? 'disabled' : '';
      return `
        <div class="dms-form-grid">
          <div class="dms-form-item" id="wrap-sp-code">
            <label class="dms-form-item__label is-required">Mã bảng giá</label>
            <input class="dms-input" id="sp-code" ${dis} ${draft.id ? 'disabled' : ''}
              placeholder="Nhập vào Mã bảng giá" value="${DMS.escape(draft.code)}" maxlength="100" />
            ${this.fieldError('sp-code')}
          </div>
          <div class="dms-form-item" id="wrap-sp-name">
            <label class="dms-form-item__label is-required">Tên bảng giá</label>
            <input class="dms-input" id="sp-name" ${dis}
              placeholder="Nhập vào Tên bảng giá" value="${DMS.escape(draft.name)}" maxlength="100" />
            ${this.fieldError('sp-name')}
          </div>
          <div class="dms-form-item" id="wrap-sp-from">
            <label class="dms-form-item__label is-required">Từ ngày</label>
            <input class="dms-input" id="sp-from" type="date" ${dis} value="${DMS.escape(draft.fromDate)}" />
            ${this.fieldError('sp-from')}
          </div>
          <div class="dms-form-item" id="wrap-sp-to">
            <label class="dms-form-item__label is-required">Đến ngày</label>
            <input class="dms-input" id="sp-to" type="date" ${dis} value="${DMS.escape(draft.toDate)}" />
            ${this.fieldError('sp-to')}
          </div>
        </div>`;
    },

    renderStep2(draft, groups, readonly) {
      const showGroups = draft.condition === 'STORE_GROUP';
      const groupOpts = (groups || []).map(g => ({ value: g.name, label: g.name }));
      return `
        <div class="dms-form-grid">
          <div class="dms-form-item" id="wrap-sp-condition">
            <label class="dms-form-item__label is-required">Điều kiện</label>
            ${DMS.render('Select', {
              id: 'sp-condition',
              placeholder: 'Chọn điều kiện',
              options: [{ value: 'STORE_GROUP', label: 'Nhóm khách hàng' }],
              value: draft.condition || '',
              disabled: readonly,
              searchable: false
            })}
            ${this.fieldError('sp-condition')}
          </div>
          <div class="dms-form-item ${showGroups ? '' : 'dms-hidden'}" id="wrap-sp-groups">
            ${DMS.render('MultiSelect', {
              id: 'sp-groups',
              label: 'Nhóm khách hàng',
              placeholder: 'Chọn nhóm khách hàng',
              options: groupOpts,
              values: draft.customerGroupIds || [],
              requiredMark: true,
              disabled: readonly
            })}
            ${this.fieldError('sp-groups')}
          </div>
        </div>`;
    },

    renderProductRows(products, readonly, keyword) {
      const q = (keyword || '').trim().toLowerCase();
      const rows = (products || []).filter(p => {
        if (!q) return true;
        return (p.sku || '').toLowerCase().includes(q) || (p.name || '').toLowerCase().includes(q);
      });
      if (!rows.length) {
        return `<tr><td colspan="7">${DMS.render('EmptyState', { title: 'Trống' })}</td></tr>`;
      }
      return rows.map(p => {
        const after = priceAfterDiscount(p.priceAfterVat, p.discount);
        const discVal = p.discount === 0 || p.discount ? String(p.discount) : '';
        return `<tr data-sku="${DMS.escape(p.sku)}">
          <td>${DMS.escape(p.sku)}</td>
          <td>${DMS.escape(p.name)}</td>
          <td>${DMS.escape(p.unit)}</td>
          <td>${readonly
            ? DMS.escape(discVal === '' ? '' : discVal)
            : `<input class="dms-input" data-action="sp-discount" data-sku="${DMS.escape(p.sku)}" placeholder="Nhập chiết khấu" value="${DMS.escape(discVal)}" />`}
          </td>
          <td>${formatMoney(p.priceAfterVat)}</td>
          <td data-col="after-disc">${after === '' ? '' : formatMoney(after)}</td>
          <td>${readonly ? '' : DMS.render('TableActions', {
            actions: [{ type: 'delete', title: 'Xóa', dataAction: `sp-del-${p.sku}` }]
          })}</td>
        </tr>`;
      }).join('');
    },

    renderStep3(draft, readonly) {
      const search = `<div class="dms-price-toolbar__search">
        ${DMS.render('Input', { id: 'sp-prod-search', placeholder: 'Tìm kiếm theo Mã SP/ Tên SP.' })}
      </div>`;
      const actions = readonly ? '' : `
        <div class="dms-price-toolbar__actions">
          <div class="dms-price-discount-all">
            <input class="dms-input" id="sp-discount-all" placeholder="Nhập chiết khấu cho tất cả." />
          </div>
          ${DMS.render('Button', { text: 'Import Excel', type: 'default', dataAction: 'sp-import' })}
          ${DMS.render('Button', { text: 'Thêm', type: 'primary', dataAction: 'sp-add-product' })}
          ${DMS.render('Button', { text: 'Xóa tất cả sản phẩm', type: 'default', dataAction: 'sp-clear-products' })}
        </div>`;
      return `
        <div class="dms-price-toolbar">${search}${actions}</div>
        <div class="dms-price-table-wrap">
          <table class="dms-table" id="sp-product-table">
            <thead><tr>
              <th>Mã sản phẩm</th>
              <th>Tên sản phẩm</th>
              <th>Đơn vị</th>
              <th>Chiết khấu</th>
              <th>Giá sau VAT</th>
              <th>Giá sau chiết khấu</th>
              <th>Tùy chỉnh</th>
            </tr></thead>
            <tbody>${this.renderProductRows(draft.products, readonly, '')}</tbody>
          </table>
        </div>`;
    },

    renderHistory(item) {
      const rows = (item.history || []);
      if (!rows.length) return DMS.render('EmptyState', { title: 'Trống' });
      return DMS.render('Table', {
        columns: [
          { key: 'stt', title: 'Stt', render: (_, __, i) => i + 1 },
          { key: 'updatedAt', title: 'Ngày cập nhật' },
          { key: 'updatedBy', title: 'Người cập nhật' },
          { key: 'field', title: 'Trường thông tin' },
          { key: 'oldValue', title: 'Nội dung cũ' },
          { key: 'newValue', title: 'Nội dung mới' }
        ],
        data: rows
      });
    },

    wizardTitle(mode) {
      if (mode === 'edit') return 'Chỉnh sửa Bảng giá';
      if (mode === 'view') return 'Chi tiết Bảng giá';
      return 'Thêm mới Bảng giá';
    },

    wizardFooter(mode, step) {
      if (mode === 'view') {
        if (step === 1) {
          return `
            ${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'sp-close' })}
            ${DMS.render('Button', { text: 'Tiếp tục', type: 'primary', dataAction: 'sp-next' })}`;
        }
        if (step === 2) {
          return `
            ${DMS.render('Button', { text: 'Quay lại', type: 'default', dataAction: 'sp-back' })}
            ${DMS.render('Button', { text: 'Tiếp tục', type: 'primary', dataAction: 'sp-next' })}`;
        }
        return `
          ${DMS.render('Button', { text: 'Quay lại', type: 'default', dataAction: 'sp-back' })}
          ${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'sp-close' })}`;
      }
      if (step === 1) {
        return `
          ${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'sp-close' })}
          ${DMS.render('Button', { text: 'Tiếp tục', type: 'primary', dataAction: 'sp-next' })}`;
      }
      if (step === 2) {
        return `
          ${DMS.render('Button', { text: 'Quay lại', type: 'default', dataAction: 'sp-back' })}
          ${DMS.render('Button', { text: 'Tiếp tục', type: 'primary', dataAction: 'sp-next' })}`;
      }
      return `
        ${DMS.render('Button', { text: 'Quay lại', type: 'default', dataAction: 'sp-back' })}
        ${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'sp-close' })}
        ${DMS.render('Button', { text: 'Lưu', type: 'primary', dataAction: 'sp-save' })}`;
    },

    collectStep1(draft) {
      const code = document.getElementById('sp-code');
      const name = document.getElementById('sp-name');
      const from = document.getElementById('sp-from');
      const to = document.getElementById('sp-to');
      if (code) draft.code = code.value.trim();
      if (name) draft.name = name.value.trim();
      if (from) draft.fromDate = from.value;
      if (to) draft.toDate = to.value;
    },

    collectStep2(draft) {
      const cond = document.getElementById('sp-condition');
      if (cond) draft.condition = cond.value;
      draft.customerGroupIds = DMS.get('MultiSelect')?.getValues('sp-groups') || [];
    },

    setError(id, msg) {
      const wrap = document.getElementById(`wrap-${id}`) || document.getElementById(id)?.closest('.dms-form-item');
      const box = document.getElementById(`${id}-error`);
      if (wrap) wrap.classList.toggle('is-error', !!msg);
      if (box) box.textContent = msg || '';
    },

    validateStep1(draft, items, mode) {
      let ok = true;
      const required = [
        ['sp-code', draft.code, 'Mã bảng giá là bắt buộc!'],
        ['sp-name', draft.name, 'Tên bảng giá là bắt buộc!'],
        ['sp-from', draft.fromDate, 'Từ ngày là bắt buộc!'],
        ['sp-to', draft.toDate, 'Đến ngày là bắt buộc!']
      ];
      required.forEach(([id, val, msg]) => {
        if (!val) { this.setError(id, msg); ok = false; }
        else this.setError(id, '');
      });
      if (!ok) return false;

      const dup = (items || []).some(it =>
        it.code.toLowerCase() === draft.code.toLowerCase() && it.id !== draft.id
      );
      if (mode === 'create' && dup) {
        this.setError('sp-code', 'Mã bảng giá bán đã tồn tại, vui lòng thử lại!');
        return false;
      }

      const from = parseDmy(draft.fromDate);
      const to = parseDmy(draft.toDate);
      const today = todayStart();
      if (mode === 'create' && from < today) {
        this.setError('sp-from', 'Từ ngày chỉ được chọn từ hiện tại trở đi');
        return false;
      }
      if (to < from) {
        this.setError('sp-to', 'Đến ngày phải lớn hơn hoặc bằng Từ ngày');
        return false;
      }
      return true;
    },

    validateStep2(draft) {
      let ok = true;
      if (!draft.condition) {
        this.setError('sp-condition', 'Tên trường là bắt buộc');
        ok = false;
      } else this.setError('sp-condition', '');
      if (draft.condition === 'STORE_GROUP' && !(draft.customerGroupIds || []).length) {
        this.setError('sp-groups', 'Tên trường là bắt buộc');
        ok = false;
      } else this.setError('sp-groups', '');
      return ok;
    },

    inactiveProduct(draft, catalog) {
      const map = {};
      (catalog || []).forEach(p => { map[p.sku] = p; });
      return (draft.products || []).find(p => {
        const src = map[p.sku];
        return (src && src.status !== 'ACTIVE') || p.status === 'INACTIVE';
      });
    },

    refreshProductTable(readonly, keyword) {
      const draft = this.getDraft();
      const tbody = document.querySelector('#sp-product-table tbody');
      if (tbody) tbody.innerHTML = this.renderProductRows(draft.products, readonly, keyword);
    },

    addProducts(newItems, mode) {
      const draft = this.getDraft();
      const exist = new Set(draft.products.map(p => p.sku));
      let added = 0;
      let skipped = 0;
      const limit = mode === 'edit' ? 200 : Infinity;
      let batch = 0;
      newItems.forEach(p => {
        if (exist.has(p.sku)) { skipped += 1; return; }
        if (batch >= limit) return;
        draft.products.push({
          sku: p.sku,
          name: p.name,
          unit: p.unit,
          priceAfterVat: p.priceAfterVat,
          discount: p.discount == null ? '' : p.discount,
          status: p.status || 'ACTIVE'
        });
        exist.add(p.sku);
        added += 1;
        batch += 1;
      });
      draft.dirty = true;
      return { added, skipped };
    },

    renderAddProductModal(catalog, selectedSkus) {
      const active = (catalog || []).filter(p => p.status === 'ACTIVE');
      const rows = active.map(p => {
        const checked = selectedSkus.has(p.sku) ? 'checked' : '';
        return `<tr>
          <td><input type="checkbox" class="dms-checkbox__input" data-action="sp-pick" value="${DMS.escape(p.sku)}" ${checked} /></td>
          <td>${DMS.escape(p.sku)}</td>
          <td>${DMS.escape(p.name)}</td>
          <td>${DMS.escape(p.categoryPath || '')}</td>
          <td>${DMS.escape(p.businessUnit || '')}</td>
          <td>${DMS.render('StatusTag', { status: 'ACTIVE', text: 'Hoạt động' })}</td>
        </tr>`;
      }).join('');
      return `
        <div class="dms-price-toolbar">
          <div class="dms-price-toolbar__search">
            <input class="dms-input" id="sp-add-search" placeholder="Tìm kiếm theo Mã, tên sản phẩm" title="Tìm kiếm theo Mã, tên sản phẩm" />
          </div>
          <div class="dms-price-toolbar__actions">
            ${DMS.render('Button', { text: 'Làm mới', type: 'ghost', dataAction: 'sp-add-reset' })}
            ${DMS.render('Button', { text: 'Tìm kiếm', type: 'primary', dataAction: 'sp-add-search' })}
          </div>
        </div>
        <div class="dms-price-table-wrap">
          <table class="dms-table" id="sp-add-table">
            <thead><tr>
              <th></th><th>Mã sản phẩm</th><th>Tên sản phẩm</th><th>Phân cấp</th><th>Đơn vị kinh doanh</th><th>Trạng thái</th>
            </tr></thead>
            <tbody>${rows || `<tr><td colspan="6">${DMS.render('EmptyState', { title: 'Trống' })}</td></tr>`}</tbody>
          </table>
        </div>`;
    },

    renderImportModal() {
      return `
        <p>File mẫu: <strong>IMPORT_PRICE_PRODUCT_DD-MM-YYYY_hhmmss.xlsx</strong></p>
        <p>Cột: Mã sản phẩm (*), Tên sản phẩm, Chiết khấu (%)</p>
        <div class="dms-mb-md">
          ${DMS.render('Button', { text: 'Lấy file mẫu', type: 'link', dataAction: 'sp-import-template' })}
        </div>
        <div class="dms-import-drop">
          <p>Chọn hoặc kéo file đến vị trí này</p>
          <input type="file" id="sp-import-file" class="dms-input" accept=".xlsx,.xls" />
        </div>
        <div id="sp-import-result" class="dms-mt-md"></div>`;
    },

    mockImportFile(file, catalog) {
      if (!file) {
        return { ok: false, message: 'File import không đúng định dạng. Vui lòng kiểm tra lại' };
      }
      const name = (file.name || '').toLowerCase();
      if (!name.endsWith('.xlsx') && !name.endsWith('.xls')) {
        return { ok: false, message: 'File import không đúng định dạng. Vui lòng kiểm tra lại' };
      }
      if (name.includes('error')) {
        return {
          ok: false,
          errors: [
            { line: 2, message: 'Dòng thứ 2: Mã sản phẩm nhập không đúng định dạng. Vui lòng kiểm tra lại!' },
            { line: 3, message: 'Dòng thứ 3: Mã sản phẩm không tồn tại. Vui lòng kiểm tra lại!' },
            { line: 4, message: 'Dòng thứ 4: Mã sản phẩm không hoạt động. Vui lòng kiểm tra lại!' },
            { line: 5, message: 'Dòng thứ 5: Chiết khấu nhập không đúng định dạng/ bị bỏ trống. Vui lòng kiểm tra lại!' }
          ]
        };
      }
      const rows = (catalog || []).filter(p => p.status === 'ACTIVE').slice(0, 3).map((p, i) => ({
        ...p,
        discount: [35, 40, 50][i]
      }));
      return { ok: true, rows };
    },

    bindWizard(container, cfg) {
      const { mode, step, data } = cfg;
      const readonly = mode === 'view';
      const modal = document.getElementById('sp-wizard-modal');
      if (!modal || modal.dataset.bound) return;
      modal.dataset.bound = '1';
      DMS.bindFormControls(modal);
      const draft = this.getDraft();

      const go = (nextStep) => {
        const idPart = draft.id ? `?id=${encodeURIComponent(draft.id)}` : '';
        const base = mode === 'edit'
          ? `/master/product/selling-price/edit${idPart}${idPart ? '&' : '?'}step=${nextStep}`
          : mode === 'view'
            ? `/master/product/selling-price/detail${idPart}${idPart ? '&' : '?'}step=${nextStep}`
            : `/master/product/selling-price/create?step=${nextStep}`;
        DMSRouter.navigate(base.replace('?&', '?'));
      };

      const closeWizard = (force) => {
        const doClose = () => {
          this.resetDraft();
          DMSRouter.navigate(LIST_ROUTE);
        };
        if (!force && !readonly && draft.dirty) {
          DMS.get('Dialog').confirm('Màn hình đang có dữ liệu, bạn có muốn đóng?', doClose);
        } else {
          doClose();
        }
      };

      modal.addEventListener('input', (e) => {
        if (readonly) return;
        draft.dirty = true;
        if (e.target.id === 'sp-prod-search') {
          this.refreshProductTable(false, e.target.value);
        }
        if (e.target.dataset.action === 'sp-discount') {
          const sku = e.target.dataset.sku;
          const prod = draft.products.find(p => p.sku === sku);
          if (!prod) return;
          const val = e.target.value.trim();
          if (val && !discountOk(val)) {
            e.target.classList.add('is-error');
            return;
          }
          e.target.classList.remove('is-error');
          prod.discount = val === '' ? '' : Number(val);
          const td = e.target.closest('tr')?.querySelector('[data-col="after-disc"]');
          if (td) {
            const after = priceAfterDiscount(prod.priceAfterVat, prod.discount);
            td.textContent = after === '' ? '' : formatMoney(after);
          }
        }
      });

      modal.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && e.target.id === 'sp-discount-all') {
          e.preventDefault();
          const val = e.target.value.trim();
          if (!discountOk(val)) {
            DMS.get('Toast').show('Chiết khấu chỉ được nhập số từ 0 đến 100, tối đa 2 số thập phân', 'error');
            return;
          }
          const n = Number(val);
          draft.products.forEach(p => { p.discount = n; });
          this.refreshProductTable(false, document.getElementById('sp-prod-search')?.value || '');
          DMS.get('Toast').show('Đã áp dụng chiết khấu cho tất cả sản phẩm', 'success');
        }
      });

      modal.addEventListener('change', (e) => {
        if (e.target.id === 'sp-condition') {
          draft.condition = e.target.value;
          const wrap = document.getElementById('wrap-sp-groups');
          if (wrap) wrap.classList.toggle('dms-hidden', draft.condition !== 'STORE_GROUP');
        }
      });

      modal.addEventListener('click', (e) => {
        if (e.target.closest('[data-action="sp-close"]') || e.target.closest('[data-action="modal-close"]') || e.target.id === 'sp-wizard-modal') {
          closeWizard(false);
          return;
        }
        if (e.target.closest('[data-action="sp-next"]')) {
          if (readonly) {
            go(Math.min(3, step + 1));
            return;
          }
          if (step === 1) {
            this.collectStep1(draft);
            if (!this.validateStep1(draft, data.items, mode)) return;
            go(2);
          } else if (step === 2) {
            this.collectStep2(draft);
            if (!this.validateStep2(draft)) return;
            go(3);
          }
          return;
        }
        if (e.target.closest('[data-action="sp-back"]')) {
          if (step === 2) this.collectStep2(draft);
          if (step === 3) { /* keep products */ }
          go(step - 1);
          return;
        }
        if (e.target.closest('[data-action="sp-save"]')) {
          const inactive = this.inactiveProduct(draft, data.catalog);
          if (inactive) {
            DMS.get('Toast').show(`${inactive.sku} - ${inactive.name} có trạng thái ngưng hoạt động, không thể thêm vào bảng giá!`, 'error');
            return;
          }
          DMS.get('Dialog').confirm('Bạn có muốn lưu thông tin?', () => {
            DMS.get('Toast').show('Lưu bảng giá bán thành công', 'success');
            this.resetDraft();
            DMSRouter.navigate(LIST_ROUTE);
          });
          return;
        }

        const del = e.target.closest('[data-action^="sp-del-"]');
        if (del) {
          const sku = del.dataset.action.replace('sp-del-', '');
          draft.products = draft.products.filter(p => p.sku !== sku);
          this.refreshProductTable(false, document.getElementById('sp-prod-search')?.value || '');
          return;
        }
        if (e.target.closest('[data-action="sp-clear-products"]')) {
          DMS.get('Dialog').confirm('Bạn chắc chắn muốn xóa?', () => {
            draft.products = [];
            this.refreshProductTable(false, '');
          });
          return;
        }
        if (e.target.closest('[data-action="sp-add-product"]')) {
          this.openAddProduct(data.catalog, mode);
          return;
        }
        if (e.target.closest('[data-action="sp-import"]')) {
          this.openImport(data.catalog, mode);
        }
      });
    },

    openAddProduct(catalog, mode) {
      const self = this;
      const selected = new Set(this.getDraft().products.map(p => p.sku));
      const el = DMS.get('Modal').show({
        id: 'sp-add-modal',
        title: 'Thêm sản phẩm',
        size: 'xl',
        body: this.renderAddProductModal(catalog, selected),
        footer: `
          ${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'modal-close' })}
          ${DMS.render('Button', { text: 'Đồng ý', type: 'primary', dataAction: 'sp-add-ok' })}
        `
      });
      const filterRows = () => {
        const q = (document.getElementById('sp-add-search')?.value || '').trim().toLowerCase();
        el.querySelectorAll('#sp-add-table tbody tr').forEach(tr => {
          const text = tr.innerText.toLowerCase();
          tr.style.display = !q || text.includes(q) ? '' : 'none';
        });
      };
      el.addEventListener('click', (e) => {
        if (e.target.closest('[data-action="sp-add-search"]')) filterRows();
        if (e.target.closest('[data-action="modal-close"]') || e.target === el) {
          el.remove();
          return;
        }
        if (e.target.closest('[data-action="sp-add-reset"]')) {
          const input = document.getElementById('sp-add-search');
          if (input) input.value = '';
          input?.setAttribute('placeholder', 'Tìm kiếm theo Mã, tên sản phẩm');
        }
        if (e.target.closest('[data-action="sp-add-ok"]')) {
          const picked = [...el.querySelectorAll('[data-action="sp-pick"]:checked')].map(i => i.value);
          const map = {};
          (catalog || []).forEach(p => { map[p.sku] = p; });
          const firstInactive = picked.map(sku => map[sku]).find(p => p && p.status !== 'ACTIVE');
          if (firstInactive) {
            DMS.get('Toast').show(`${firstInactive.sku} - ${firstInactive.name} có trạng thái ngưng hoạt động, không thể thêm vào bảng giá!`, 'error');
            return;
          }
          const items = picked.map(sku => map[sku]).filter(Boolean);
          const draft = self.getDraft();
          const keep = new Set(picked);
          draft.products = draft.products.filter(p => keep.has(p.sku));
          self.addProducts(items, mode);
          self.refreshProductTable(false, document.getElementById('sp-prod-search')?.value || '');
          el.remove();
        }
      });
    },

    openImport(catalog, mode) {
      const self = this;
      const el = DMS.get('Modal').show({
        id: 'sp-import-modal',
        title: 'Import sản phẩm',
        size: 'lg',
        body: this.renderImportModal(),
        footer: `
          ${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'modal-close' })}
          ${DMS.render('Button', { text: 'Tiến hành xử lý', type: 'primary', dataAction: 'sp-import-run' })}
        `
      });
      el.addEventListener('click', (e) => {
        if (e.target.closest('[data-action="modal-close"]') || e.target === el) {
          el.remove();
          return;
        }
        if (e.target.closest('[data-action="sp-import-template"]')) {
          const now = new Date();
          const pad = n => String(n).padStart(2, '0');
          const fname = `IMPORT_PRICE_PRODUCT_${pad(now.getDate())}-${pad(now.getMonth() + 1)}-${now.getFullYear()}_${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}.xlsx`;
          DMS.get('Toast').show(`Đã tải file mẫu ${fname}`, 'success');
        }
        if (e.target.closest('[data-action="sp-import-run"]')) {
          const file = document.getElementById('sp-import-file')?.files?.[0];
          const result = self.mockImportFile(file, catalog);
          const box = document.getElementById('sp-import-result');
          if (!result.ok && result.message) {
            DMS.get('Toast').show(result.message, 'error');
            return;
          }
          if (!result.ok && result.errors) {
            box.innerHTML = DMS.render('Table', {
              columns: [
                { key: 'line', title: 'Dòng' },
                { key: 'message', title: 'Thông báo lỗi' }
              ],
              data: result.errors
            }) + DMS.render('Pagination', { current: 1, pageSize: 10, total: result.errors.length });
            return;
          }
          const { added, skipped } = self.addProducts(result.rows, mode);
          self.refreshProductTable(false, document.getElementById('sp-prod-search')?.value || '');
          DMS.get('Toast').show(`Import thành công ${added} sản phẩm${skipped ? `, bỏ qua ${skipped} sản phẩm đã tồn tại` : ''}`, 'success');
          el.remove();
        }
      });
    }
  };

  window.SellingPriceShared = SellingPriceShared;
})(window.DMS);
