/**
 * Business module shared helpers
 * Nguồn: 247-ho-ht-nhom-iem-ban.md, 018-ho-danh-sach-iem-ban.md,
 *        370-ho-nha-phan-phoi.md, 013-ho-quan-ly-nhan-vien-dms-va-inh-nghia-cay-salesforce.md
 */
(function (DMS) {
  const STATUS_OPTIONS = [
    { value: 'ACTIVE', label: 'Hoạt động' },
    { value: 'INACTIVE', label: 'Không hoạt động' }
  ];

  const BusinessShared = {
    breadcrumb(current, parentRoute) {
      return DMS.render('Breadcrumb', {
        items: [
          { label: 'Dữ Liệu Nền', route: parentRoute || '/master/business/store' },
          { label: 'Kinh Doanh', route: parentRoute || '/master/business/store' },
          { label: current }
        ]
      });
    },

    /** HT Portal master catalog: filter card + list card */
    renderCatalogListPage(cfg) {
      const {
        title, route, listTitle, data,
        codeLabel, nameLabel, searchPlaceholder,
        createRoute, showCreate = false, showStatus = true,
        showActions = false, showStatusFilter = true, moduleKey
      } = cfg;
      const items = data?.items || [];
      const pagination = data?.pagination || { page: 1, pageSize: 10, total: items.length };

      const columns = [
        { key: 'code', title: codeLabel },
        { key: 'name', title: nameLabel },
        ...(showStatus ? [{
          key: 'status',
          title: 'Trạng thái',
          render: (val, row) => this.statusSwitch(val, `toggle-${moduleKey}-${row.id}`)
        }] : []),
        { key: 'createdAt', title: 'Ngày tạo' },
        { key: 'createdBy', title: 'Người tạo' },
        { key: 'updatedAt', title: 'Ngày cập nhật' },
        { key: 'updatedBy', title: 'Người cập nhật' },
        ...(showActions ? [{
          key: 'actions',
          title: 'Tùy chỉnh',
          render: (_, row) => DMS.render('TableActions', {
            actions: [{ type: 'edit', title: 'Chỉnh sửa', dataAction: `edit-${moduleKey}-${row.id}` }]
          })
        }] : [])
      ];

      const filterFields = [
        { type: 'search', label: 'Tìm kiếm theo', placeholder: searchPlaceholder }
      ];
      if (showStatusFilter) {
        filterFields.push({
          type: 'select',
          label: 'Trạng thái',
          placeholder: 'Trạng thái',
          options: STATUS_OPTIONS
        });
      }

      const filterCard = DMS.render('FilterPanel', { fields: filterFields, actions: true });

      const listExtra = showCreate
        ? DMS.render('Button', { text: 'Tạo mới', type: 'primary', dataAction: 'nav-create', dataRoute: createRoute })
        : '';

      const listCard = DMS.render('Card', {
        title: listTitle || `Danh sách ${title.toLowerCase()}`,
        extra: listExtra,
        body: DMS.render('Table', { columns, data: items }) +
          DMS.render('Pagination', {
            current: pagination.page,
            pageSize: pagination.pageSize,
            total: pagination.total,
            pageSizeOptions: [10, 50, 100]
          })
      });

      return `
        ${this.breadcrumb(title, route)}
        <h1 class="dms-page-header__title dms-mt-md">${DMS.escape(title)}</h1>
        ${filterCard}
        ${listCard}
      `;
    },

    masterCatalogModalForm(entity, options = {}) {
      const { mode = 'create', codeLabel, nameLabel } = options;
      const readonly = mode === 'view';
      const codeDisabled = readonly || mode === 'edit';
      return `
        <div class="dms-form-grid">
          ${DMS.render('Input', {
            label: codeLabel,
            value: entity.code || '',
            placeholder: `Nhập ${codeLabel.toLowerCase()}`,
            requiredMark: true,
            disabled: codeDisabled,
            maxLength: 100
          })}
          ${DMS.render('Input', {
            label: nameLabel,
            value: entity.name || '',
            placeholder: `Nhập ${nameLabel.toLowerCase()}`,
            requiredMark: true,
            disabled: readonly,
            maxLength: 500
          })}
          <div class="dms-form-item">
            <label class="dms-form-item__label">Trạng thái</label>
            ${DMS.render('Switch', {
              checked: entity.status !== 'INACTIVE',
              label: 'Hoạt động',
              disabled: readonly
            })}
          </div>
        </div>`;
    },

    registerCatalogModule(cfg) {
      const self = this;
      const listFn = async function () {
        const data = await self.loadJson(cfg.dataPath);
        return self.renderCatalogListPage({ ...cfg, data });
      };
      listFn.onMount = (container) => self.bindCatalogListActions(container, {
        moduleKey: cfg.moduleKey,
        editRoutePrefix: cfg.editRoute,
        createRoute: cfg.createRoute
      });

      const modalFn = async function (mode) {
        const id = mode === 'edit' ? new URLSearchParams(location.hash.split('?')[1] || '').get('id') : null;
        const item = id ? await self.findById(cfg.dataPath, id) : {};
        const body = self.masterCatalogModalForm(item || {}, {
          mode: mode === 'edit' ? 'edit' : 'create',
          codeLabel: cfg.codeLabel,
          nameLabel: cfg.nameLabel
        });
        const listHtml = await listFn();
        const titles = { create: cfg.modalCreateTitle, edit: cfg.modalEditTitle };
        return listHtml + DMS.render('Modal', {
          id: `${cfg.moduleKey}-modal`,
          title: titles[mode],
          size: 'md',
          body,
          footer: `
            ${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'catalog-close' })}
            ${DMS.render('Button', { text: 'Lưu', type: 'primary', dataAction: 'catalog-save' })}
          `
        });
      };

      const bindModal = function () {
        document.getElementById(`${cfg.moduleKey}-modal`)?.addEventListener('click', (e) => {
          if (e.target.closest('[data-action="catalog-close"]') || e.target.id === `${cfg.moduleKey}-modal`) {
            DMSRouter.navigate(cfg.route);
          }
          if (e.target.closest('[data-action="catalog-save"]')) {
            DMS.get('Dialog').confirm('Bạn có muốn lưu thông tin?', () => {
              DMS.get('Toast').show('Lưu thành công', 'success');
              DMSRouter.navigate(cfg.route);
            });
          }
        });
      };

      const createFn = async function () { return modalFn('create'); };
      const editFn = async function () { return modalFn('edit'); };
      createFn.onMount = bindModal;
      editFn.onMount = bindModal;

      window[cfg.listHandler] = listFn;
      window[cfg.createHandler] = createFn;
      window[cfg.editHandler] = editFn;
    },

    bindCatalogListActions(container, cfg) {
      const { moduleKey, editRoutePrefix, createRoute } = cfg;
      this.bindNavCreate(container);
      container.addEventListener('click', (e) => {
        const edit = e.target.closest(`[data-action^="edit-${moduleKey}-"]`);
        if (edit && editRoutePrefix) {
          const id = edit.dataset.action.replace(`edit-${moduleKey}-`, '');
          DMSRouter.navigate(`${editRoutePrefix}?id=${id}`);
        }
        if (e.target.closest(`[data-action^="toggle-${moduleKey}-"]`)) {
          DMS.get('Dialog').confirm('Bạn có muốn thay đổi trạng thái?', () => {
            DMS.get('Toast').show('Cập nhật trạng thái thành công', 'success');
          });
        }
        if (e.target.closest('[data-action="filter-search"]')) {
          DMS.get('Toast').show('Đã tìm kiếm theo điều kiện', 'info');
        }
        if (e.target.closest('[data-action="filter-reset"]')) {
          DMS.get('Toast').show('Đã làm mới bộ lọc', 'info');
        }
        if (createRoute && e.target.closest('[data-action="nav-create"]')) {
          DMSRouter.navigate(createRoute);
        }
      });
    },

    renderCompanyFormPage(company) {
      const c = company || {};
      const basicSection = DMS.render('Card', {
        title: 'Thông tin cơ bản',
        body: `
          <div class="dms-flex dms-gap-lg">
            <div class="dms-form-item">
              <label class="dms-form-item__label">Ảnh đại diện</label>
              ${DMS.render('Avatar', { text: 'HT', size: 'lg' })}
              <div class="dms-mt-sm">${DMS.render('Button', { text: 'Upload', type: 'default', size: 'sm', dataAction: 'upload-logo' })}</div>
              <input type="file" class="dms-hidden" accept="image/jpeg,image/png,image/svg+xml" />
            </div>
            <div class="dms-flex-1 dms-form-grid">
              ${DMS.render('Input', { label: 'Mã công ty', value: c.code || '', placeholder: 'Nhập công ty', requiredMark: true })}
              ${DMS.render('Input', { label: 'Tên công ty', value: c.name || '', placeholder: 'Nhập tên công ty', requiredMark: true })}
              ${DMS.render('Input', { label: 'Người đại diện', value: c.representative || '', placeholder: 'Nhập người đại diện' })}
              ${DMS.render('Input', { label: 'Số điện thoại', value: c.phone || '', placeholder: 'Nhập số điện thoại', requiredMark: true })}
              ${DMS.render('Input', { label: 'Email', value: c.email || '', placeholder: 'Nhập email' })}
            </div>
          </div>`
      });
      const addressSection = DMS.render('Card', {
        title: 'Thông tin địa chỉ',
        body: `<div class="dms-form-grid">
          ${DMS.render('Select', { label: 'Tỉnh/Thành Phố', placeholder: 'Chọn tỉnh', options: [{ value: 'HCM', label: 'TP HCM' }], value: c.provinceCode || '', requiredMark: true })}
          ${DMS.render('Select', { label: 'Phường/Xã', placeholder: 'Chọn phường', options: [{ value: 'TB', label: 'Phường Tân Bình' }], value: c.wardCode || '', requiredMark: true })}
          ${DMS.render('Input', { label: 'Địa chỉ', value: c.addressLine || '', placeholder: 'Nhập địa chỉ', requiredMark: true })}
        </div>`
      });
      const otherSection = DMS.render('Card', {
        title: 'Thông tin khác',
        body: `<div class="dms-form-item">
          <label class="dms-form-item__label">Trạng thái</label>
          ${DMS.render('Switch', { checked: c.status !== 'INACTIVE', label: 'Hoạt động' })}
        </div>`
      });
      return `
        ${this.breadcrumb('Công ty', '/master/business/company')}
        <h1 class="dms-page-header__title dms-mt-md">Công Ty</h1>
        ${basicSection}
        ${addressSection}
        ${otherSection}
        <div class="dms-flex dms-justify-end dms-mt-md">
          ${DMS.render('Button', { text: 'Lưu', type: 'primary', dataAction: 'save-company' })}
        </div>`;
    },

    masterCatalogFormBodyExtended(entity, options = {}) {
      const { mode = 'create', codeLabel, nameLabel, withCompany = false, companyOptions = [] } = options;
      const readonly = mode === 'view';
      const codeDisabled = readonly || mode === 'edit';
      return `
        <div class="dms-form-grid">
          ${DMS.render('Input', {
            label: codeLabel,
            value: entity.code || '',
            placeholder: codeLabel,
            requiredMark: true,
            disabled: codeDisabled,
            maxLength: 100
          })}
          ${DMS.render('Input', {
            label: nameLabel,
            value: entity.name || '',
            placeholder: nameLabel,
            requiredMark: true,
            maxLength: 500
          })}
          ${withCompany ? DMS.render('Select', {
            label: 'Công ty',
            placeholder: 'Chọn công ty',
            options: companyOptions,
            value: entity.companyCode || companyOptions[0]?.value || '',
            requiredMark: true,
            disabled: readonly
          }) : ''}
          ${mode === 'edit' || mode === 'create' ? `
            <div class="dms-form-item">
              <label class="dms-form-item__label">Trạng thái</label>
              ${DMS.render('Switch', { checked: entity.status !== 'INACTIVE', label: 'Hoạt động', disabled: readonly })}
            </div>` : ''}
        </div>`;
    },

    statusTag(status) {
      return DMS.render('StatusTag', { status: status || '' });
    },

    statusSwitch(status, extra = '') {
      if (status === 'INIT') return this.statusTag('INIT');
      return DMS.render('Switch', {
        checked: status === 'ACTIVE',
        label: '',
        dataAction: extra
      });
    },

    async loadJson(path) {
      const res = await fetch(path);
      return res.json();
    },

    async loadRefs() {
      const [channels, businessUnits, storeTypes, storeGrades, storeLocations, storeGroups, distributors] =
        await Promise.all([
          this.loadJson('data/channel.json'),
          this.loadJson('data/business-unit.json'),
          this.loadJson('data/store-type.json'),
          this.loadJson('data/store-rank.json'),
          this.loadJson('data/store-location.json'),
          this.loadJson('data/store-group.json'),
          this.loadJson('data/distributor.json')
        ]);
      const active = (items) => items.filter(i => i.status === 'ACTIVE');
      const opts = (items, codeKey = 'code', nameKey = 'name') =>
        items.map(i => ({ value: i[codeKey], label: i[nameKey] }));
      return {
        channels: opts(active(channels.items)),
        businessUnits: opts(active(businessUnits.items)),
        storeTypes: opts(active(storeTypes.items)),
        storeGrades: opts(active(storeGrades.items)),
        storeLocations: opts(active(storeLocations.items)),
        storeGroups: opts(active(storeGroups.items)),
        distributors: active(distributors.items).map(i => ({
          value: i.code,
          label: `${i.code} - ${i.name}`
        }))
      };
    },

    masterCatalogToolbar(title, createRoute, extraButtons = '') {
      return `
        <div class="dms-page-toolbar dms-mt-md">
          <h1 class="dms-page-header__title dms-m-0">${DMS.escape(title)}</h1>
          <div class="dms-flex dms-gap-sm">
            ${extraButtons}
            ${createRoute ? DMS.render('Button', { text: 'Tạo mới', type: 'primary', dataAction: 'nav-create', dataRoute: createRoute }) : ''}
          </div>
        </div>`;
    },

    masterCatalogFilter(searchPlaceholder) {
      return DMS.render('FilterPanel', {
        fields: [
          { type: 'search', label: 'Tìm kiếm theo', placeholder: searchPlaceholder },
          { type: 'select', label: 'Trạng thái', placeholder: 'Trạng thái', options: STATUS_OPTIONS }
        ]
      });
    },

    masterCatalogFormBody(entity, options = {}) {
      const { mode = 'create', codeLabel = 'Mã', nameLabel = 'Tên', codeMax = 100, nameMax = 500 } = options;
      const codeDisabled = mode === 'edit';
      return `
        <div class="dms-form-grid">
          ${DMS.render('Input', {
            label: codeLabel,
            value: entity.code || '',
            placeholder: codeLabel,
            requiredMark: true,
            disabled: codeDisabled,
            maxLength: codeMax
          })}
          ${DMS.render('Input', {
            label: nameLabel,
            value: entity.name || '',
            placeholder: nameLabel,
            requiredMark: true,
            maxLength: nameMax
          })}
          ${mode === 'edit' ? `
            <div class="dms-form-item">
              <label class="dms-form-item__label">Trạng thái</label>
              ${DMS.render('Switch', { checked: entity.status !== 'INACTIVE', label: 'Hoạt động' })}
            </div>` : ''}
        </div>`;
    },

    renderStoreListPage(data, refs) {
      const columns = [
        { key: 'region', title: 'Vùng' },
        { key: 'area', title: 'Khu vực' },
        { key: 'distributorName', title: 'Nhà phân phối' },
        { key: 'code', title: 'Mã điểm bán' },
        {
          key: 'name',
          title: 'Tên điểm bán',
          render: (val, row) =>
            `<a class="dms-table__link" data-route="/master/business/store/detail?id=${DMS.escape(row.id)}">${DMS.escape(val)}</a>`
        },
        { key: 'phone', title: 'Số điện thoại' },
        { key: 'address', title: 'Địa chỉ' },
        { key: 'longitude', title: 'Kinh độ' },
        { key: 'latitude', title: 'Vĩ độ' },
        {
          key: 'status',
          title: 'Trạng thái',
          render: (val) => this.statusSwitch(val)
        },
        { key: 'routeName', title: 'Tuyến' },
        { key: 'salesmanName', title: 'NV chăm sóc' },
        { key: 'storeTypeName', title: 'Loại điểm bán' },
        { key: 'storeGradeName', title: 'Hạng điểm bán' },
        { key: 'createdAt', title: 'Ngày tạo' },
        { key: 'createdBy', title: 'Người tạo' },
        {
          key: 'actions',
          title: 'Tùy chỉnh',
          render: (_, row) => {
            const actions = [
              { type: 'edit', title: 'Cập nhật', dataAction: `edit-store-${row.id}` }
            ];
            if (row.status === 'INIT') {
              actions.push({ type: 'approve', title: 'Duyệt', dataAction: `approve-store-${row.id}` });
              actions.push({ type: 'cancel', title: 'Hủy', dataAction: `cancel-store-${row.id}` });
            }
            return DMS.render('TableActions', { actions });
          }
        }
      ];

      const filter = DMS.render('FilterPanel', {
        fields: [
          { type: 'search', label: 'Tìm kiếm theo', placeholder: 'Mã | Tên | SĐT điểm bán' },
          { type: 'select', label: 'Nhà phân phối', placeholder: 'Nhà phân phối', options: refs.distributors },
          { type: 'select', label: 'Trạng thái', placeholder: 'Trạng thái', options: [
            { value: 'INIT', label: 'Khởi tạo' },
            ...STATUS_OPTIONS,
            { value: 'CANCELLED', label: 'Đã hủy' }
          ]},
          { type: 'select', label: 'Loại điểm bán', placeholder: 'Loại điểm bán', options: refs.storeTypes },
          { type: 'select', label: 'Hạng điểm bán', placeholder: 'Hạng điểm bán', options: refs.storeGrades },
          { type: 'select', label: 'Kênh bán hàng', placeholder: 'Kênh bán hàng', options: refs.channels },
          { type: 'select', label: 'Vị trí điểm bán', placeholder: 'Vị trí điểm bán', options: refs.storeLocations }
        ]
      });

      const toolbar = `
        <div class="dms-page-toolbar dms-mt-md">
          <h1 class="dms-page-header__title dms-m-0">Danh sách điểm bán</h1>
          <div class="dms-flex dms-gap-sm">
            ${DMS.render('Button', { text: 'Import', type: 'default', dataAction: 'import-store' })}
            ${DMS.render('Button', { text: 'Export Excel', type: 'default', dataAction: 'export-store' })}
            ${DMS.render('Button', { text: 'Tạo mới', type: 'primary', dataAction: 'create-store' })}
          </div>
        </div>`;

      return `
        ${this.breadcrumb('Danh sách điểm bán', '/master/business/store')}
        ${toolbar}
        ${filter}
        ${DMS.render('Card', {
          body: DMS.render('Table', { columns, data: data.items }) +
            DMS.render('Pagination', {
              current: data.pagination.page,
              pageSize: data.pagination.pageSize,
              total: data.pagination.total,
              pageSizeOptions: [10, 50, 100]
            })
        })}
      `;
    },

    renderStoreFormBody(store, refs, mode) {
      const readonly = mode === 'view';
      const tabs = DMS.render('Tabs', {
        tabs: [
          {
            label: 'Thông tin cơ bản',
            content: `
              <div class="dms-form-grid">
                ${DMS.render('Input', { label: 'Mã điểm bán', value: store.code || '', requiredMark: true, disabled: readonly || mode === 'edit' })}
                ${DMS.render('Input', { label: 'Tên điểm bán', value: store.name || '', requiredMark: true, disabled: readonly })}
                ${DMS.render('Input', { label: 'SĐT', value: store.phone || '', disabled: readonly })}
                ${DMS.render('Select', { label: 'Nhà phân phối', placeholder: 'Chọn NPP', options: refs.distributors, value: store.distributorCode || '', requiredMark: true, disabled: readonly || mode === 'edit' })}
                ${DMS.render('Select', { label: 'Vị trí điểm bán', placeholder: 'Chọn vị trí', options: refs.storeLocations, value: store.storeLocationCode || '', disabled: readonly })}
                ${DMS.render('Select', { label: 'Loại điểm bán', placeholder: 'Chọn loại', options: refs.storeTypes, value: store.storeTypeCode || '', disabled: readonly })}
                ${DMS.render('Select', { label: 'Hạng điểm bán', placeholder: 'Chọn hạng', options: refs.storeGrades, value: store.storeGradeCode || '', disabled: readonly })}
                ${DMS.render('Select', { label: 'Kênh bán hàng', placeholder: 'Chọn kênh', options: refs.channels, value: store.channelCode || '', disabled: readonly })}
                ${DMS.render('Input', { label: 'Tên chủ cửa hàng', value: store.ownerName || '', disabled: readonly })}
                ${DMS.render('Input', { label: 'Email', value: store.email || '', disabled: readonly })}
              </div>
              ${!readonly ? `
                <div class="dms-form-item dms-mt-md">
                  <label class="dms-form-item__label">Hình ảnh điểm bán</label>
                  <input type="file" class="dms-input" accept="image/jpeg,image/png,image/svg+xml" multiple />
                  <small class="dms-text-muted">JPEG/PNG ≤10MB, SVG ≤1MB, tối đa 10 ảnh</small>
                </div>` : ''}
            `
          },
          {
            label: 'Địa chỉ',
            content: `
              <div class="dms-form-grid">
                ${DMS.render('Select', { label: 'Tỉnh thành', placeholder: 'Chọn tỉnh', options: [{ value: 'HCM', label: 'TP. Hồ Chí Minh' }], value: store.provinceCode || '', requiredMark: true, disabled: readonly })}
                ${DMS.render('Select', { label: 'Quận huyện', placeholder: 'Chọn quận', options: [{ value: 'Q1', label: 'Quận 1' }], value: store.districtCode || '', requiredMark: true, disabled: readonly })}
                ${DMS.render('Select', { label: 'Phường xã', placeholder: 'Chọn phường', options: [{ value: 'P1', label: 'Phường Bến Nghé' }], value: store.wardCode || '', requiredMark: true, disabled: readonly })}
                ${DMS.render('Input', { label: 'Địa chỉ', value: store.addressLine || '', requiredMark: true, disabled: readonly })}
                ${DMS.render('Input', { label: 'Địa chỉ hiển thị theo vị trí', value: store.mapAddress || '', disabled: true })}
                ${DMS.render('Input', { label: 'Kinh độ', value: store.longitude || '', disabled: true })}
                ${DMS.render('Input', { label: 'Vĩ độ', value: store.latitude || '', disabled: true })}
              </div>
              ${!readonly ? `<div class="dms-mt-md">${DMS.render('Button', { text: 'Tìm vị trí', type: 'primary', size: 'sm', dataAction: 'find-map-location' })}</div>` : ''}
            `
          }
        ]
      });
      if (mode === 'edit' && store.status !== 'INIT') {
        return tabs + `<div class="dms-mt-md"><label class="dms-form-item__label">Trạng thái</label>${DMS.render('Switch', { checked: store.status === 'ACTIVE', label: 'Hoạt động' })}</div>`;
      }
      return tabs;
    },

    renderDistributorFormBody(item, mode) {
      const readonly = mode === 'view';
      return `
        <div class="dms-form-grid">
          ${!readonly ? `
            <div class="dms-form-item">
              <label class="dms-form-item__label">Ảnh đại diện</label>
              <input type="file" class="dms-input" accept="image/jpeg,image/png,image/svg+xml" />
            </div><div></div><div></div>` : ''}
          ${DMS.render('Input', { label: 'Mã nhà phân phối', value: item.code || '', requiredMark: true, disabled: readonly || mode === 'edit' })}
          ${DMS.render('Input', { label: 'Tên nhà phân phối', value: item.name || '', requiredMark: true, disabled: readonly })}
          ${mode !== 'create' ? `<div class="dms-form-item"><label class="dms-form-item__label">Trạng thái</label>${DMS.render('Switch', { checked: item.status === 'ACTIVE', label: 'Hoạt động', disabled: readonly })}</div>` : ''}
          ${DMS.render('Input', { label: 'SĐT', value: item.phone || '', disabled: readonly })}
          ${DMS.render('Input', { label: 'Email', value: item.email || '', disabled: readonly })}
          ${DMS.render('Select', { label: 'Tỉnh thành', placeholder: 'Chọn tỉnh', options: [{ value: 'HCM', label: 'TP. Hồ Chí Minh' }], value: item.provinceCode || '', requiredMark: true, disabled: readonly })}
          ${DMS.render('Select', { label: 'Quận huyện', placeholder: 'Chọn quận', options: [{ value: 'Q1', label: 'Quận 1' }], value: item.districtCode || '', requiredMark: true, disabled: readonly })}
          ${DMS.render('Select', { label: 'Phường xã', placeholder: 'Chọn phường', options: [{ value: 'P1', label: 'Phường Bến Nghé' }], value: item.wardCode || '', requiredMark: true, disabled: readonly })}
          ${DMS.render('Input', { label: 'Địa chỉ', value: item.addressLine || '', requiredMark: true, disabled: readonly })}
          ${DMS.render('Select', { label: 'Trực thuộc', placeholder: 'Chọn NPP trực thuộc', options: [], value: item.parentCode || '', disabled: readonly })}
        </div>`;
    },

    employeePositionOptions() {
      return [
        { value: 'SD', label: 'Giám đốc toàn quốc' },
        { value: 'RSM', label: 'Quản lý vùng' },
        { value: 'ASM', label: 'Quản lý khu vực' },
        { value: 'SS', label: 'Giám sát bán hàng' },
        { value: 'SM', label: 'Nhân viên bán hàng' }
      ];
    },

    employeePositionLabel(code) {
      return this.employeePositionOptions().find(p => p.value === code)?.label || code || '';
    },

    employeeTeamDisplay(emp) {
      if (emp.teamPath?.length) return emp.teamPath.join(' > ');
      if (emp.teamName) return emp.teamName;
      return '';
    },

    renderEmployeeFormBody(emp, mode, options = {}) {
      const readonly = mode === 'view';
      const positions = this.employeePositionOptions();
      const teamNodes = options.teamNodes || [];
      const teamDisplay = this.employeeTeamDisplay(emp);
      const pos = emp.position || '';

      const avatarCol = `
        <div class="dms-employee-form__avatar">
          <label class="dms-form-item__label">Hình đại diện</label>
          ${readonly
            ? `<div class="dms-employee-form__avatar-box"><span class="dms-text-muted">—</span></div>`
            : `<div class="dms-employee-form__avatar-box"><span class="dms-employee-form__avatar-icon">🖼</span></div>
               ${DMS.render('Button', { text: 'Upload', type: 'default', size: 'sm', dataAction: 'emp-avatar-upload' })}`}
        </div>`;

      const generalInfo = `
        <h4 class="dms-form-section__title">Thông tin chung</h4>
        <div class="dms-form-grid dms-form-grid--employee">
          ${DMS.render('Input', { label: 'Mã nhân viên', value: emp.code || '', placeholder: 'Nhập vào mã nhân viên.', requiredMark: true, disabled: readonly || mode === 'edit' })}
          ${DMS.render('Input', { label: 'Họ và tên', value: emp.name || '', placeholder: 'Nhập vào họ và tên.', requiredMark: true, disabled: readonly })}
          ${mode === 'create' ? DMS.render('Input', { label: 'Mật khẩu', value: '', placeholder: 'Nhập vào mật khẩu.', requiredMark: true, type: 'password' }) : '<div></div>'}
          ${DMS.render('Input', { label: 'Mã tham chiếu', value: emp.refCode || '', placeholder: 'Nhập mã tham chiếu', disabled: readonly })}
          ${DMS.render('Input', { label: 'QR Code', value: emp.qrCode || '', placeholder: 'Nhập QR Code', disabled: readonly })}
          ${DMS.render('Input', { label: 'SĐT', value: emp.phone || '', placeholder: 'Nhập vào số điện thoại.', disabled: readonly })}
          ${DMS.render('DatePicker', { label: 'Ngày sinh', value: emp.birthDate || '', placeholder: 'Chọn ngày sinh', disabled: readonly })}
          ${DMS.render('Select', { label: 'Giới tính', options: [{ value: 'Nam', label: 'Nam' }, { value: 'Nữ', label: 'Nữ' }, { value: 'Khác', label: 'Khác' }], value: emp.gender || 'Nam', disabled: readonly })}
          ${DMS.render('Input', { label: 'CMND/CCCD', value: emp.idNumber || '', placeholder: 'Nhập vào CMND/CCCD.', disabled: readonly })}
          ${DMS.render('Input', { label: 'Địa chỉ email', value: emp.email || '', placeholder: 'Nhập vào địa chỉ email.', disabled: readonly })}
          ${DMS.render('Select', { label: 'Tỉnh/Thành Phố', placeholder: 'Chọn tỉnh/thành phố', options: [{ value: 'HCM', label: 'TP. Hồ Chí Minh' }], value: emp.provinceCode || '', disabled: readonly })}
          ${DMS.render('Select', { label: 'Phường/Xã', placeholder: 'Chọn phường/xã', options: [{ value: 'TB', label: 'Phường Tân Bình' }], value: emp.wardCode || '', disabled: readonly })}
          ${DMS.render('Input', { label: 'Địa chỉ', value: emp.addressLine || '', placeholder: 'Nhập địa chỉ', disabled: readonly, className: 'dms-form-grid__span-2' })}
          ${DMS.render('DatePicker', { label: 'Ngày vào làm', value: emp.startDate || '', placeholder: 'Chọn ngày vào làm.', requiredMark: true, disabled: readonly })}
        </div>`;

      const warehouseFields = (mode === 'view' && emp.employeeClass === 'Direct') ? `
        ${DMS.render('Input', { label: 'Kho bán hàng', value: (emp.warehouses || []).join(', '), disabled: true })}
        ${DMS.render('Input', { label: 'Kho bán hàng mặc định', value: emp.defaultWarehouse || '', disabled: true })}
      ` : '';

      const teamField = readonly
        ? DMS.render('Input', { label: 'Tổ đội', value: teamDisplay, disabled: true })
        : DMS.render('TreeSelect', {
          id: 'emp-team-select',
          label: 'Tổ đội',
          value: emp.teamId || '',
          displayValue: teamDisplay,
          placeholder: 'Chọn tổ đội',
          data: teamNodes,
          requiredMark: false
        });

      const showRegion = ['RSM', 'ASM'].includes(pos);
      const showManager = pos && pos !== 'SD';

      const positionInfo = `
        <h4 class="dms-form-section__title dms-mt-lg">Thông tin chức vụ</h4>
        <div class="dms-form-grid dms-form-grid--employee">
          ${DMS.render('Select', { label: 'Kênh bán hàng', placeholder: 'Chọn kênh bán hàng', options: [{ value: 'GT', label: 'GENERAL TRADE' }, { value: 'MT', label: 'MODERN TRADE' }, { value: 'HA', label: 'H&A' }], value: emp.channelCode || '', disabled: readonly })}
          ${DMS.render('Select', { label: 'Chức vụ', placeholder: 'Chọn chức vụ', options: positions, value: pos, requiredMark: true, disabled: readonly })}
          ${DMS.render('Select', { label: 'Nhóm quyền', placeholder: 'Chọn nhóm quyền', options: positions, value: emp.roleGroup || '', requiredMark: true, disabled: readonly })}
          ${showManager ? DMS.render('Select', { label: 'Quản lý trực tiếp', placeholder: 'Chọn quản lý trực tiếp', options: [{ value: emp.managerCode, label: emp.managerName }].filter(o => o.value), value: emp.managerCode || '', requiredMark: true, disabled: readonly }) : ''}
          ${teamField}
          ${showRegion ? DMS.render('Select', { label: 'Vùng/Khu vực', placeholder: 'Chọn Vùng/Khu vực', options: [{ value: emp.regionCode, label: `${emp.region || ''}${emp.area ? ' / ' + emp.area : ''}`.trim() }].filter(o => o.value), value: emp.regionCode || '', requiredMark: true, disabled: readonly }) : ''}
          ${warehouseFields}
          <div class="dms-form-item">
            <label class="dms-form-item__label">${readonly ? 'Trạng thái' : 'Hoạt động'}</label>
            ${readonly
              ? DMS.render('StatusTag', { status: emp.status })
              : DMS.render('Switch', { checked: emp.status !== 'INACTIVE', label: 'Hoạt động', disabled: readonly })}
          </div>
        </div>`;

      return `
        <div class="dms-employee-form">
          <div class="dms-employee-form__layout">
            ${avatarCol}
            <div class="dms-employee-form__main">
              ${generalInfo}
              ${positionInfo}
            </div>
          </div>
        </div>`;
    },

    bindEmployeeFormWidgets(container) {
      DMS.get('TreeSelect')?.bindAll(container);
    },

    bindEmployeeModalEvents() {
      const modal = document.getElementById('emp-create-modal')
        || document.getElementById('emp-edit-modal')
        || document.getElementById('emp-detail-modal');
      if (!modal || modal.dataset.empBound) return;
      modal.dataset.empBound = '1';
      this.bindEmployeeFormWidgets(modal);
      modal.addEventListener('click', (e) => {
        if (e.target.closest('[data-action="emp-close"]') || e.target.id === modal.id) {
          DMSRouter.navigate('/master/business/employee');
        }
        if (e.target.closest('[data-action="emp-save"]')) {
          DMS.get('Dialog').confirm('Bạn có muốn lưu thông tin nhân viên?', () => {
            DMS.get('Toast').show('Lưu thông tin nhân viên thành công', 'success');
            DMSRouter.navigate('/master/business/employee');
          });
        }
      });
    },

    bindNavCreate(container) {
      container.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-action="nav-create"]');
        if (btn?.dataset.route) DMSRouter.navigate(btn.dataset.route);
      });
    },

    bindStoreListActions(container) {
      container.addEventListener('click', (e) => {
        if (e.target.closest('[data-action="create-store"]')) DMSRouter.navigate('/master/business/store/create');
        if (e.target.closest('[data-action="import-store"]')) {
          DMS.get('Modal').show({
            title: 'Import điểm bán',
            body: `<p>Chọn loại import và tải file mẫu theo tài liệu 018-ho-danh-sach-iem-ban.md</p>
              <input type="file" class="dms-input" accept=".xlsx,.xls" />
              ${DMS.render('Button', { text: 'Lấy file mẫu', type: 'link', size: 'sm' })}`,
            footer: DMS.render('Button', { text: 'Tiến hành xử lý', type: 'primary', dataAction: 'modal-close' })
          });
        }
        if (e.target.closest('[data-action="export-store"]')) {
          DMS.get('Dialog').confirm('Bạn có muốn xuất Điểm bán?', () => {
            DMS.get('Toast').show('Xuất file Danhsachdiemban thành công', 'success');
          });
        }
        const edit = e.target.closest('[data-action^="edit-store-"]');
        if (edit) {
          const id = edit.dataset.action.replace('edit-store-', '');
          DMSRouter.navigate(`/master/business/store/edit?id=${id}`);
        }
        if (e.target.closest('[data-action^="approve-store-"]')) {
          DMS.get('Dialog').confirm('Xác nhận duyệt điểm bán?', () => {
            DMS.get('Toast').show('Duyệt điểm bán thành công', 'success');
          });
        }
      });
    },

    findById(jsonPath, id) {
      return this.loadJson(jsonPath).then(data =>
        data.items.find(x => x.id === id || x.code === id)
      );
    }
  };

  window.BusinessShared = BusinessShared;
})(window.DMS);
