async function renderBusinessEmployeeEdit() {
  const id = new URLSearchParams(location.hash.split('?')[1] || '').get('id');
  const [item, teamData] = await Promise.all([
    BusinessShared.findById('data/employee.json', id),
    BusinessShared.loadJson('data/team-hierarchy.json')
  ]);
  const body = BusinessShared.renderEmployeeFormBody(item || {}, 'edit', { teamNodes: teamData.nodes || [] });
  const listHtml = await renderBusinessEmployee();
  const modal = DMS.render('Modal', {
    id: 'emp-edit-modal',
    title: 'Chỉnh sửa nhân viên',
    size: 'lg',
    body,
    footer: `
      ${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'emp-close' })}
      ${DMS.render('Button', { text: 'Lưu', type: 'primary', dataAction: 'emp-save' })}
    `
  });
  return listHtml + modal;
}

renderBusinessEmployeeEdit.onMount = () => BusinessShared.bindEmployeeModalEvents();
window.renderBusinessEmployeeEdit = renderBusinessEmployeeEdit;

async function renderBusinessEmployeeDetail() {
  const id = new URLSearchParams(location.hash.split('?')[1] || '').get('id');
  const item = await BusinessShared.findById('data/employee.json', id) || {};
  const infoBody = BusinessShared.renderEmployeeFormBody(item, 'view');
  const historyTab = `
    <div class="dms-form-grid dms-mt-md">
      ${DMS.render('DatePicker', { label: 'Chọn ngày', value: '' })}
      ${DMS.render('Button', { text: 'Tìm kiếm', type: 'primary', size: 'sm' })}
      ${DMS.render('Button', { text: 'Export', type: 'default', size: 'sm' })}
    </div>
    ${DMS.render('EmptyState', { title: 'Lịch sử thay đổi', description: 'Chọn khoảng ngày (tối đa 30 ngày) để xem lịch sử.' })}
  `;
  const tabs = DMS.render('Tabs', {
    tabs: [
      { label: 'Thông tin', content: infoBody },
      { label: 'Lịch sử', content: historyTab }
    ]
  });
  const listHtml = await renderBusinessEmployee();
  const modal = DMS.render('Modal', {
    id: 'emp-detail-modal',
    title: 'Chi tiết nhân viên',
    size: 'lg',
    body: tabs,
    footer: DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'emp-close' })
  });
  return listHtml + modal;
}

renderBusinessEmployeeDetail.onMount = () => BusinessShared.bindEmployeeModalEvents();
window.renderBusinessEmployeeDetail = renderBusinessEmployeeDetail;
