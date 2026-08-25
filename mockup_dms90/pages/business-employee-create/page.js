async function renderBusinessEmployeeCreate() {

  const teamData = await BusinessShared.loadJson('data/team-hierarchy.json');

  const body = BusinessShared.renderEmployeeFormBody({}, 'create', { teamNodes: teamData.nodes || [] });

  const listHtml = await renderBusinessEmployee();

  const modal = DMS.render('Modal', {

    id: 'emp-create-modal',

    title: 'Thêm mới nhân viên',

    size: 'lg',

    body,

    footer: `

      ${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'emp-close' })}

      ${DMS.render('Button', { text: 'Lưu', type: 'primary', dataAction: 'emp-save' })}

    `

  });

  return listHtml + modal;

}



renderBusinessEmployeeCreate.onMount = () => BusinessShared.bindEmployeeModalEvents();



window.renderBusinessEmployeeCreate = renderBusinessEmployeeCreate;

