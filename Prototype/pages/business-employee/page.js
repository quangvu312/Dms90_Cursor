async function renderBusinessEmployee() {

  const data = await BusinessShared.loadJson('data/employee.json');

  const positions = BusinessShared.employeePositionOptions();



  const columns = [

    { key: 'code', title: 'Mã nhân viên' },

    {

      key: 'name',

      title: 'Họ và tên',

      render: (val, row) =>

        `<a class="dms-table__link" data-route="/master/business/employee/detail?id=${DMS.escape(row.id)}">${DMS.escape(val)}</a>`

    },

    { key: 'qrCode', title: 'QR Code' },

    { key: 'gender', title: 'Giới tính' },

    { key: 'birthDate', title: 'Ngày sinh' },

    { key: 'phone', title: 'Số điện thoại' },

    {

      key: 'position',

      title: 'Chức vụ',

      render: (val) => {

        const label = BusinessShared.employeePositionLabel(val);

        const typeMap = { SD: 'green', RSM: 'blue', ASM: 'orange', SS: 'purple', SM: 'blue' };

        return DMS.render('Tag', { text: label, type: typeMap[val] || 'default' });

      }

    },

    { key: 'region', title: 'Vùng' },

    { key: 'area', title: 'Khu vực' },

    {

      key: 'routeStatus',

      title: 'Tình trạng gán tuyến',

      render: (val) => DMS.render('StatusTag', { status: val })

    },

    {

      key: 'routeName',

      title: 'Tuyến bán hàng',

      render: (val) => val ? DMS.render('Tag', { text: val, type: 'blue' }) : ''

    },

    {

      key: 'distributorName',

      title: 'Nhà phân phối',

      render: (val) => val ? DMS.render('Tag', { text: val, type: 'blue' }) : ''

    },

    { key: 'channelName', title: 'Kênh bán hàng' },

    { key: 'managerCode', title: 'Mã QL trực tiếp' },

    { key: 'managerName', title: 'Tên QL trực tiếp' },

    {

      key: 'employeeClass',

      title: 'Phân loại nhân viên',

      render: (val) => val || ''

    },

    { key: 'erpArea', title: 'Khu vực ERP' },

    { key: 'startDate', title: 'Ngày vào làm' },

    {

      key: 'status',

      title: 'Trạng thái',

      render: (val, row) => BusinessShared.statusSwitch(val, `toggle-emp-${row.id}`)

    },

    { key: 'createdAt', title: 'Ngày tạo' },

    { key: 'createdBy', title: 'Người tạo' },

    { key: 'updatedAt', title: 'Ngày cập nhật' },

    { key: 'updatedBy', title: 'Người cập nhật' },

    {

      key: 'actions',

      title: 'Tùy chỉnh',

      width: '90px',

      fixed: 'right',

      render: (_, row) => DMS.render('TableActions', {
        actions: [
          { type: 'edit', title: 'Sửa', dataAction: `edit-emp-${row.id}` },
          { type: 'password', title: 'Đổi mật khẩu', dataAction: `pwd-emp-${row.id}` }
        ]
      })

    }

  ];



  const filter = DMS.render('FilterPanel', {

    fields: [

      { type: 'search', label: 'Tìm kiếm theo', placeholder: 'Nhập Mã NV | Tên NV | Mã tham chiếu | SĐT' },

      { type: 'date', label: 'Ngày vào làm', placeholder: 'Từ ngày - Đến ngày' },

      { type: 'select', label: 'Chức vụ', placeholder: 'Chức vụ', options: positions },

      { type: 'select', label: 'Tình trạng gán tuyến', placeholder: 'Tất cả', options: [

        { value: 'ASSIGNED', label: 'Đã gán tuyến' },

        { value: 'UNASSIGNED', label: 'Chưa gán tuyến' }

      ]},

      { type: 'select', label: 'Phân loại nhân viên', placeholder: 'Phân loại nhân viên', options: [

        { value: 'Direct', label: 'Direct' },

        { value: 'Indirect', label: 'Indirect' }

      ]},

      { type: 'date', label: 'Ngày tạo nhân viên', placeholder: 'Từ ngày - Đến ngày' },

      { type: 'select', label: 'Trạng thái', placeholder: 'Trạng thái', options: [

        { value: 'ACTIVE', label: 'Hoạt động' },

        { value: 'INACTIVE', label: 'Không hoạt động' }

      ]},

      { type: 'select', label: 'Vùng/Khu Vực', placeholder: 'Vùng/Khu Vực', options: [] }

    ]

  });



  const toolbar = `

    <div class="dms-page-toolbar dms-mt-md">

      <h1 class="dms-page-header__title dms-m-0">Nhân viên bán hàng</h1>

      <div class="dms-flex dms-gap-sm">

        ${DMS.render('Button', { text: 'Import Excel', type: 'default', dataAction: 'import-emp' })}

        ${DMS.render('Button', { text: 'Export', type: 'default', dataAction: 'export-emp' })}

        ${DMS.render('Button', { text: 'Tạo mới', type: 'primary', dataAction: 'nav-create', dataRoute: '/master/business/employee/create' })}

      </div>

    </div>`;



  return `

    ${BusinessShared.breadcrumb('Nhân viên bán hàng', '/master/business/employee')}

    ${toolbar}

    ${filter}

    ${DMS.render('Card', {

      title: 'Danh sách nhân viên',

      body: DMS.render('Table', { columns, data: data.items }) +

        DMS.render('Pagination', {

          current: data.pagination.page,

          pageSize: data.pagination.pageSize,

          total: data.pagination.total,

          pageSizeOptions: [10, 50, 100]

        })

    })}

  `;

}



renderBusinessEmployee.onMount = function (container) {

  BusinessShared.bindNavCreate(container);

  container.addEventListener('click', (e) => {

    const edit = e.target.closest('[data-action^="edit-emp-"]');

    if (edit) {

      const id = edit.dataset.action.replace('edit-emp-', '');

      DMSRouter.navigate(`/master/business/employee/edit?id=${id}`);

    }

    if (e.target.closest('[data-action^="pwd-emp-"]')) {

      DMS.get('Modal').show({

        title: 'Cấp lại mật khẩu',

        body: `

          ${DMS.render('Input', { label: 'Mã nhân viên', value: 'NV001', disabled: true })}

          ${DMS.render('Input', { label: 'Tên nhân viên', value: 'Nguyễn Văn A', disabled: true })}

          ${DMS.render('Input', { label: 'Mật khẩu mới', type: 'password', requiredMark: true })}

          ${DMS.render('Input', { label: 'Xác nhận mật khẩu mới', type: 'password', requiredMark: true })}

        `,

        footer: `

          ${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'modal-close' })}

          ${DMS.render('Button', { text: 'Lưu', type: 'primary', dataAction: 'modal-confirm' })}

        `

      });

    }

    if (e.target.closest('[data-action="import-emp"]')) {

      DMS.get('Modal').show({

        title: 'Import danh sách nhân viên',

        body: `<p>Tải file mẫu và import theo tài liệu 013-ho-quan-ly-nhan-vien-dms-va-inh-nghia-cay-salesforce.md</p>

          <input type="file" class="dms-input" accept=".xlsx,.xls" />`,

        footer: DMS.render('Button', { text: 'Tiến hành xử lý', type: 'primary', dataAction: 'modal-close' })

      });

    }

    if (e.target.closest('[data-action="export-emp"]')) {

      DMS.get('Dialog').confirm('Bạn có muốn xuất danh sách nhân viên?', () => {

        DMS.get('Toast').show('Xuất file nhân viên thành công', 'success');

      });

    }

    if (e.target.closest('[data-action^="toggle-emp-"]')) {

      DMS.get('Dialog').confirm('Bạn có muốn thay đổi trạng thái nhân viên?', () => {

        DMS.get('Toast').show('Cập nhật trạng thái thành công', 'success');

      });

    }

  });

};



window.renderBusinessEmployee = renderBusinessEmployee;

