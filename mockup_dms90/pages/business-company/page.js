async function renderBusinessCompany() {
  const company = await BusinessShared.loadJson('data/company.json');
  return BusinessShared.renderCompanyFormPage(company);
}

renderBusinessCompany.onMount = function (container) {
  container.addEventListener('click', (e) => {
    if (e.target.closest('[data-action="save-company"]')) {
      DMS.get('Dialog').confirm('Bạn có muốn lưu thông tin công ty?', () => {
        DMS.get('Toast').show('Lưu thông tin công ty thành công', 'success');
      });
    }
    if (e.target.closest('[data-action="upload-logo"]')) {
      container.querySelector('input[type="file"]')?.click();
    }
  });
};

window.renderBusinessCompany = renderBusinessCompany;
