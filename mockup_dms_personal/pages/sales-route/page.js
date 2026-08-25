/* Quản lý tuyến bán hàng — list / create / edit / detail */
(function () {
  const S = () => window.SalesRouteShared;
  const Toast = () => DMS.get('Toast');
  const Dialog = () => DMS.get('Dialog');

  function qs() {
    return new URLSearchParams(location.hash.split('?')[1] || '');
  }

  function copyBtn(text) {
    if (!text) return '';
    return `<span class="dms-copy">${DMS.escape(text)} <button type="button" class="dms-btn dms-btn--link dms-btn--sm" data-action="sr-copy" data-copy="${DMS.escape(text)}">⧉</button></span>`;
  }

  function handleCopy(e) {
    const btn = e.target.closest('[data-action="sr-copy"]');
    if (!btn) return false;
    const v = btn.dataset.copy || '';
    if (navigator.clipboard && v) navigator.clipboard.writeText(v);
    Toast().show('Đã sao chép', 'success');
    return true;
  }

  function closeModalNav(listPath) {
    document.getElementById('sr-route-modal')?.remove();
    document.getElementById('sr-tg-modal')?.remove();
    document.getElementById('sr-tf-modal')?.remove();
    document.getElementById('sr-pick-route-modal')?.remove();
    DMSRouter.navigate(listPath);
  }

  function bindModalClose(container, listPath) {
    container.addEventListener('click', (e) => {
      if (e.target.closest('[data-action="modal-close"]') || e.target.id === 'sr-route-modal' || e.target.id === 'sr-tg-modal' || e.target.id === 'sr-tf-modal') {
        if (e.target.closest('.dms-modal') && e.target.dataset.action !== 'modal-close' && !['sr-route-modal', 'sr-tg-modal', 'sr-tf-modal'].includes(e.target.id)) return;
        closeModalNav(listPath);
      }
    });
  }

  function renderListBody(id, columns, rows, state) {
    const page = S().slicePage(rows, state.page, state.pageSize);
    const table = page.rows.length
      ? DMS.render('Table', { columns, data: page.rows })
      : `<div class="dms-table-wrapper">${DMS.render('EmptyState', { title: 'Trống' })}</div>`;
    return `<div id="${id}">${table}${S().renderPager(page.page, page.pageSize, page.total)}</div>`;
  }

  /* ========== Nhiệm vụ ========== */
  async function renderRouteTask() {
    const data = await S().loadData();
    const source = data.tasks || [];
    const columns = [
      {
        key: 'thumb',
        title: 'Ảnh',
        render: () => '<div class="dms-task-thumb" title="Icon nhiệm vụ"></div>'
      },
      { key: 'code', title: 'Mã nhiệm vụ' },
      { key: 'name', title: 'Tên nhiệm vụ' },
      { key: 'createdAt', title: 'Ngày tạo' },
      { key: 'createdBy', title: 'Người tạo' },
      { key: 'updatedAt', title: 'Ngày cập nhật' },
      { key: 'updatedBy', title: 'Người cập nhật' },
      {
        key: 'status',
        title: 'Trạng thái',
        render: (val) => S().statusSwitch(val, '', true)
      }
    ];
    const filter = DMS.render('FilterPanel', {
      fields: [
        { type: 'search', id: 'sr-task-q', label: 'Nhiệm vụ', placeholder: 'Mã | Tên nhiệm vụ' },
        {
          type: 'select', id: 'sr-task-status', label: 'Trạng thái', placeholder: 'Trạng thái',
          options: [{ value: 'ACTIVE', label: 'Hoạt động' }, { value: 'INACTIVE', label: 'Không hoạt động' }]
        }
      ]
    });
    const state = { page: 1, pageSize: 10, rows: source };
    const card = DMS.render('Card', {
      title: 'Danh sách nhiệm vụ',
      body: renderListBody('sr-task-body', columns, source, state)
    });

    renderRouteTask.onMount = function (container) {
      const refresh = (rows) => {
        state.rows = rows;
        state.page = 1;
        const body = container.querySelector('#sr-task-body');
        if (body) body.outerHTML = renderListBody('sr-task-body', columns, rows, state);
      };
      S().bindPager(container, 'sr-task-body', state, () => {
        const body = container.querySelector('#sr-task-body');
        if (body) body.outerHTML = renderListBody('sr-task-body', columns, state.rows, state);
      });
      container.addEventListener('click', (e) => {
        if (handleCopy(e)) return;
        if (e.target.closest('[data-action="filter-search"]')) {
          refresh(S().filterTasks(source, {
            q: document.getElementById('sr-task-q')?.value || '',
            status: document.getElementById('sr-task-status')?.value || ''
          }));
        }
        if (e.target.closest('[data-action="filter-reset"]')) {
          const q = document.getElementById('sr-task-q');
          const st = document.getElementById('sr-task-status');
          if (q) q.value = '';
          if (st) st.value = '';
          refresh(source);
        }
      });
    };

    return `${S().breadcrumb([{ label: 'Nhiệm Vụ' }])}${S().pageHeader('Nhiệm Vụ')}${filter}${card}`;
  }

  /* ========== Nhóm nhiệm vụ ========== */
  function tgColumns(data) {
    return [
      { key: 'code', title: 'Mã', render: (val) => copyBtn(val) },
      {
        key: 'name',
        title: 'Tên',
        render: (val, row) => `<a class="dms-table__link" data-route="/route/task-group/detail?id=${DMS.escape(row.id)}">${DMS.escape(val)}</a>`
      },
      {
        key: 'regions',
        title: 'Vùng',
        render: (val) => (val || []).map(r => DMS.render('Tag', { text: r, type: 'blue' })).join(' ')
      },
      {
        key: 'areas',
        title: 'Khu vực',
        render: (val) => (val || []).map(r => DMS.render('Tag', { text: r, type: 'default' })).join(' ')
      },
      { key: 'type', title: 'Loại', render: (val) => S().typeTag(val) },
      { key: 'createdAt', title: 'Ngày tạo' },
      { key: 'createdBy', title: 'Người tạo' },
      { key: 'updatedAt', title: 'Ngày cập nhật' },
      { key: 'updatedBy', title: 'Người cập nhật' },
      {
        key: 'status',
        title: 'Trạng thái',
        render: (val, row) => S().statusSwitch(val, `toggle-tg-${row.id}`)
      },
      {
        key: 'actions',
        title: 'Tùy chỉnh',
        render: (_, row) => `
          ${DMS.render('TableActions', {
            actions: [
              { type: 'edit', title: 'Sửa', dataAction: `edit-tg-${row.id}` },
              { type: 'duplicate', title: 'Duplicate', dataAction: `dup-tg-${row.id}` }
            ]
          })}
        `
      }
    ];
  }

  function renderTgForm(draft, data, readonly) {
    const dis = readonly ? 'disabled' : '';
    const typeOpts = data.taskGroupTypes || [];
    const regionOpts = (data.regions || []).map(r => ({ value: r.name, label: r.name }));
    const areaOpts = (data.regions || []).flatMap(r =>
      (draft.regions || []).includes(r.name) ? r.areas.map(a => ({ value: a, label: a })) : []
    );
    const taskOpts = (data.tasks || []).filter(t => t.status === 'ACTIVE');
    const selectedCodes = (draft.tasks || []).map(t => t.code);
    return `
      ${DMS.render('Tabs', {
        active: 0,
        tabs: [
          { label: 'Thông tin cơ bản', content: `
            <div class="dms-form-grid">
              <div class="dms-form-item" id="wrap-tg-code">
                <label class="dms-form-item__label">Mã nhóm nhiệm vụ</label>
                <input class="dms-input" id="tg-code" disabled value="${DMS.escape(draft.code || (draft.id ? draft.code : 'Tự sinh khi lưu'))}" />
              </div>
              <div class="dms-form-item" id="wrap-tg-name">
                <label class="dms-form-item__label is-required">Tên nhóm nhiệm vụ</label>
                <input class="dms-input" id="tg-name" ${dis} maxlength="${S().TG_NAME_MAX}"
                  placeholder="Nhập tên nhóm nhiệm vụ" value="${DMS.escape(draft.name)}" />
                ${S().fieldError('tg-name')}
              </div>
              <div class="dms-form-item" id="wrap-tg-type">
                <label class="dms-form-item__label">Loại</label>
                ${DMS.render('Select', {
                  id: 'tg-type',
                  options: typeOpts,
                  value: draft.type,
                  disabled: readonly,
                  searchable: false
                })}
              </div>
            </div>
            ${S().renderChecks('tg-regions', 'Vùng', regionOpts, draft.regions, true, readonly)}
            ${S().renderChecks('tg-areas', 'Khu vực', areaOpts, draft.areas, false, readonly)}
          ` },
          { label: 'Nhiệm vụ', content: `
            <div class="dms-form-item" id="wrap-tg-tasks">
              <label class="dms-form-item__label is-required">Chọn nhiệm vụ</label>
              <div id="tg-tasks" class="dms-task-pick">
                ${taskOpts.map((t, i) => {
                  const picked = (draft.tasks || []).find(x => x.code === t.code);
                  return `<div class="dms-task-pick__row">
                    <label class="dms-checkbox">
                      <input class="dms-checkbox__input" type="checkbox" value="${DMS.escape(t.code)}" ${picked ? 'checked' : ''} ${readonly ? 'disabled' : ''} />
                      <span>${DMS.escape(t.name)}</span>
                    </label>
                    <label class="dms-checkbox">Bắt buộc
                      <input class="dms-checkbox__input" type="checkbox" data-req="${DMS.escape(t.code)}" ${picked && picked.required ? 'checked' : ''} ${readonly ? 'disabled' : ''} />
                    </label>
                    <input class="dms-input dms-input--sm" style="width:80px" data-order="${DMS.escape(t.code)}"
                      placeholder="Thứ tự" value="${picked ? picked.order : i + 1}" ${readonly ? 'disabled' : ''} />
                  </div>`;
                }).join('')}
              </div>
              ${S().fieldError('tg-tasks')}
            </div>
          ` }
        ]
      })}
    `;
  }

  function readTgForm(draft) {
    draft.name = document.getElementById('tg-name')?.value.trim() || '';
    draft.type = document.getElementById('tg-type')?.value || 'ROUTE';
    draft.regions = S().readChecks('tg-regions');
    draft.areas = S().readChecks('tg-areas');
    const tasks = [];
    document.querySelectorAll('#tg-tasks > .dms-task-pick__row').forEach(row => {
      const cb = row.querySelector('input[type="checkbox"][value]');
      if (!cb || !cb.checked) return;
      const code = cb.value;
      const name = row.querySelector('.dms-checkbox span')?.textContent || code;
      const required = !!row.querySelector(`[data-req="${code}"]`)?.checked;
      const order = Number(row.querySelector(`[data-order="${code}"]`)?.value || 0);
      tasks.push({ code, name, required, order });
    });
    draft.tasks = tasks;
    return draft;
  }

  function validateTg(draft) {
    let ok = true;
    if (!draft.name) { S().setError('tg-name', S().requiredMsg()); ok = false; }
    else if (draft.name.length > S().TG_NAME_MAX) { S().setError('tg-name', S().overflowMsg('Tên nhóm nhiệm vụ', S().TG_NAME_MAX)); ok = false; }
    else S().setError('tg-name', '');
    if (!draft.regions.length) { S().setError('tg-regions', S().requiredMsg()); ok = false; }
    else S().setError('tg-regions', '');
    if (!draft.tasks.length) { S().setError('tg-tasks', S().requiredMsg()); ok = false; }
    else S().setError('tg-tasks', '');
    return ok;
  }

  function saveTg(data, draft) {
    const now = nowUser();
    if (!draft.id) {
      draft.id = `tg-${Date.now()}`;
      draft.code = S().nextTgCode(data);
      draft.createdAt = now.at;
      draft.createdBy = now.by;
      data.taskGroups.unshift({ ...draft, updatedAt: now.at, updatedBy: now.by, assignedToRoute: false });
    } else {
      const item = S().findGroup(data, draft.id);
      if (item) Object.assign(item, {
        name: draft.name, type: draft.type, regions: draft.regions, areas: draft.areas,
        tasks: draft.tasks, updatedAt: now.at, updatedBy: now.by
      });
    }
  }

  function nowUser() {
    return { at: (function () {
      const d = new Date();
      const p = n => String(n).padStart(2, '0');
      return `${p(d.getDate())}-${p(d.getMonth() + 1)}-${d.getFullYear()} ${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
    })(), by: 'thao999' };
  }

  async function renderRouteTaskGroup() {
    const data = await S().loadData();
    const source = data.taskGroups || [];
    const columns = tgColumns(data);
    const filter = DMS.render('FilterPanel', {
      fields: [
        { type: 'search', id: 'sr-tg-q', label: 'Nhóm nhiệm vụ', placeholder: 'Mã | Tên nhóm nhiệm vụ' },
        {
          type: 'select', id: 'sr-tg-type', label: 'Loại', placeholder: 'Loại',
          options: (data.taskGroupTypes || []).map(t => ({ value: t.value, label: t.label }))
        },
        {
          type: 'select', id: 'sr-tg-status', label: 'Trạng thái', placeholder: 'Trạng thái',
          options: [{ value: 'ACTIVE', label: 'Hoạt động' }, { value: 'INACTIVE', label: 'Không hoạt động' }]
        }
      ]
    });
    const state = { page: 1, pageSize: 10 };
    const card = DMS.render('Card', {
      title: 'Danh sách nhóm nhiệm vụ',
      extra: DMS.render('Button', { text: 'Tạo mới', type: 'primary', dataAction: 'create-tg' }),
      body: renderListBody('sr-tg-body', columns, source, state)
    });

    renderRouteTaskGroup.onMount = function (container) {
      const refresh = (rows) => {
        state.page = 1;
        const body = container.querySelector('#sr-tg-body');
        if (body) body.outerHTML = renderListBody('sr-tg-body', columns, rows, state);
      };
      let current = source;
      S().bindPager(container, 'sr-tg-body', state, () => {
        const body = container.querySelector('#sr-tg-body');
        if (body) body.outerHTML = renderListBody('sr-tg-body', columns, current, state);
      });
      container.addEventListener('click', (e) => {
        if (handleCopy(e)) return;
        if (e.target.closest('[data-action="create-tg"]')) {
          S().resetTgDraft();
          DMSRouter.navigate('/route/task-group/create');
          return;
        }
        const edit = e.target.closest('[data-action^="edit-tg-"]');
        if (edit) {
          DMSRouter.navigate(`/route/task-group/edit?id=${edit.dataset.action.replace('edit-tg-', '')}`);
          return;
        }
        const dup = e.target.closest('[data-action^="dup-tg-"]');
        if (dup) {
          const item = S().findGroup(data, dup.dataset.action.replace('dup-tg-', ''));
          if (item) {
            const d = S().resetTgDraft();
            Object.assign(d, {
              name: '',
              regions: (item.regions || []).slice(),
              areas: (item.areas || []).slice(),
              type: item.type,
              tasks: (item.tasks || []).map(t => ({ ...t }))
            });
            DMSRouter.navigate('/route/task-group/create');
          }
          return;
        }
        const tog = e.target.closest('[data-action^="toggle-tg-"]');
        if (tog) {
          const id = tog.dataset.action.replace('toggle-tg-', '');
          const item = S().findGroup(data, id);
          if (!item) return;
          Dialog().confirm('Bạn có muốn thay đổi trạng thái?', () => {
            if (item.assignedToRoute && item.status === 'ACTIVE') {
              Toast().show('Nhóm nhiệm vụ đã được gán vào tuyến, không thể ngưng hoạt động.', 'error');
              return;
            }
            item.status = item.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
            Toast().show('Cập nhật trạng thái thành công', 'success');
            DMSRouter.navigate('/route/task-group');
          });
          return;
        }
        if (e.target.closest('[data-action="filter-search"]')) {
          current = S().filterTaskGroups(source, {
            q: document.getElementById('sr-tg-q')?.value || '',
            type: document.getElementById('sr-tg-type')?.value || '',
            status: document.getElementById('sr-tg-status')?.value || ''
          });
          refresh(current);
        }
        if (e.target.closest('[data-action="filter-reset"]')) {
          ['sr-tg-q', 'sr-tg-type', 'sr-tg-status'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.value = '';
          });
          current = source;
          refresh(current);
        }
      });
    };

    return `${S().breadcrumb([{ label: 'Nhóm Nhiệm Vụ' }])}${S().pageHeader('Nhóm Nhiệm Vụ')}${filter}${card}`;
  }

  async function renderTgWizard(mode) {
    const data = await S().loadData();
    const id = qs().get('id');
    const readonly = mode === 'view';
    if ((mode === 'edit' || mode === 'view') && id) {
      const item = S().findGroup(data, id);
      if (!item) {
        return S().breadcrumb([{ label: 'Nhóm Nhiệm Vụ' }]) + DMS.render('EmptyState', { title: 'Không tìm thấy nhóm nhiệm vụ' });
      }
      const d = S().resetTgDraft();
      Object.assign(d, JSON.parse(JSON.stringify(item)));
    } else if (mode === 'create') {
      const d = S().getTgDraft();
      if (d.id) S().resetTgDraft();
    }
    const draft = S().getTgDraft();
    const title = mode === 'view' ? 'Chi tiết nhóm nhiệm vụ' : (mode === 'edit' ? 'Chỉnh sửa nhóm nhiệm vụ' : 'Thêm nhóm nhiệm vụ');
    const listHtml = await renderRouteTaskGroup();
    const footer = readonly
      ? DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'modal-close' })
      : `${DMS.render('Button', { text: 'Hủy', type: 'default', dataAction: 'modal-close' })}
         ${DMS.render('Button', { text: 'Lưu', type: 'primary', dataAction: 'save-tg' })}`;
    const modal = DMS.render('Modal', {
      id: 'sr-tg-modal',
      title,
      size: 'xl',
      body: renderTgForm(draft, data, readonly),
      footer
    });
    const bind = function (container) {
      bindModalClose(container, '/route/task-group');
      DMS.bindFormControls(container);
      container.addEventListener('click', (e) => {
        if (e.target.closest('[data-action="save-tg"]')) {
          const d = readTgForm(S().getTgDraft());
          Dialog().confirm('Bạn có muốn lưu nhóm nhiệm vụ?', () => {
            if (!validateTg(d)) return;
            saveTg(data, d);
            Toast().show('Lưu thành công', 'success');
            closeModalNav('/route/task-group');
          });
        }
      });
    };
    if (mode === 'create') renderRouteTaskGroupCreate.onMount = bind;
    if (mode === 'edit') renderRouteTaskGroupEdit.onMount = bind;
    if (mode === 'view') renderRouteTaskGroupDetail.onMount = bind;
    return listHtml + modal;
  }

  async function renderRouteTaskGroupCreate() { return renderTgWizard('create'); }
  async function renderRouteTaskGroupEdit() { return renderTgWizard('edit'); }
  async function renderRouteTaskGroupDetail() { return renderTgWizard('view'); }

  /* ========== Tuyến bán hàng ========== */
  function routeNestedStores(row, data) {
    const stores = row.stores || [];
    if (!stores.length) return `<div class="dms-nested">${DMS.render('EmptyState', { title: 'Chưa gán điểm bán' })}</div>`;
    const cols = [
      { key: 'code', title: 'Mã điểm bán' },
      { key: 'name', title: 'Tên điểm bán' },
      { key: 'phone', title: 'SĐT' },
      { key: 'address', title: 'Địa chỉ' },
      { key: 'frequency', title: 'Tần suất' },
      { key: 'days', title: 'Thứ' }
    ];
    const rows = stores.map(s => {
      const st = S().findStore(data, s.storeId) || {};
      return {
        code: st.code || s.storeId,
        name: st.name || '',
        phone: st.phone || '',
        address: st.address || '',
        frequency: s.frequency,
        days: (s.days || []).join(', ')
      };
    });
    return `<div class="dms-nested">${DMS.render('Table', { columns: cols, data: rows })}</div>`;
  }

  function routeColumns(data, expanded) {
    return [
      {
        key: '_exp',
        title: '',
        width: '40px',
        render: (_, row) => S().renderExpandBtn(row.id, expanded.has(row.id))
      },
      { key: '_stt', title: 'STT', render: (_, __, idx) => idx + 1 },
      { key: 'region', title: 'Vùng' },
      { key: 'area', title: 'Khu vực' },
      { key: 'nppName', title: 'NPP', render: (val, row) => {
        const n = S().findNpp(data, row.nppId);
        return n ? S().nppLabel(n) : (val || '');
      } },
      { key: 'code', title: 'Mã tuyến', render: (val) => copyBtn(val) },
      {
        key: 'name',
        title: 'Tên',
        render: (val, row) => `<a class="dms-table__link" data-route="/route/detail?id=${DMS.escape(row.id)}">${DMS.escape(val)}</a>`
      },
      { key: 'employeeName', title: 'Nhân viên' },
      {
        key: 'brands',
        title: 'Nhãn hàng',
        render: (val) => S().brandTags(val, data)
      },
      { key: 'visitGroupName', title: 'NV viếng thăm' },
      { key: 'careGroupName', title: 'NV chăm sóc' },
      {
        key: 'status',
        title: 'Trạng thái',
        render: (val, row) => S().statusSwitch(val, `toggle-rt-${row.id}`)
      },
      { key: 'createdAt', title: 'Ngày tạo' },
      { key: 'createdBy', title: 'Người tạo' },
      { key: 'updatedAt', title: 'Ngày cập nhật' },
      { key: 'updatedBy', title: 'Người cập nhật' },
      {
        key: 'actions',
        title: 'Tùy chỉnh',
        render: (_, row) => `
          ${DMS.render('TableActions', {
            actions: [
              { type: 'edit', title: 'Sửa', dataAction: `edit-rt-${row.id}` },
              { type: 'duplicate', title: 'Duplicate', dataAction: `dup-rt-${row.id}` }
            ]
          })}
        `
      }
    ];
  }

  function renderRouteTable(data, rows, state, expanded) {
    const page = S().slicePage(rows, state.page, state.pageSize);
    const columns = routeColumns(data, expanded);
    if (!page.rows.length) {
      return `<div id="sr-rt-body"><div class="dms-table-wrapper">${DMS.render('EmptyState', { title: 'Trống' })}</div>${S().renderPager(page.page, page.pageSize, page.total)}</div>`;
    }
    const table = DMS.render('Table', { columns, data: page.rows });
    return `<div id="sr-rt-body">${table}${S().renderPager(page.page, page.pageSize, page.total)}</div>`;
  }

  function injectExpanded(container, data, expanded) {
    container.querySelectorAll('#sr-rt-body tbody tr').forEach(tr => {
      const btn = tr.querySelector('[data-action="sr-expand"]');
      if (!btn) return;
      const id = btn.dataset.id;
      if (!expanded.has(id)) return;
      const row = S().findRoute(data, id);
      if (!row) return;
      const colCount = tr.children.length;
      const extra = document.createElement('tr');
      extra.className = 'dms-expand-row';
      extra.innerHTML = `<td colspan="${colCount}">${routeNestedStores(row, data)}</td>`;
      tr.after(extra);
    });
  }

  async function renderSalesRouteList() {
    const data = await S().loadData();
    const source = data.routes || [];
    const expanded = new Set();
    const filter = DMS.render('FilterPanel', {
      fields: [
        { type: 'search', id: 'sr-rt-q', label: 'Tìm kiếm theo', placeholder: 'Mã tuyến | Mã NV | Tên NV' },
        { type: 'search', id: 'sr-rt-store', label: 'Tìm kiếm theo điểm bán', placeholder: 'Mã | Tên | SĐT điểm bán' },
        {
          type: 'select', id: 'sr-rt-region', label: 'Vùng', placeholder: 'Vùng',
          options: S().regionOptions(data)
        },
        {
          type: 'select', id: 'sr-rt-npp', label: 'NPP', placeholder: 'Nhà phân phối',
          options: S().nppOptions(data)
        },
        {
          type: 'select', id: 'sr-rt-visit', label: 'NV viếng thăm', placeholder: 'Nhóm nhiệm vụ viếng thăm',
          options: S().groupOptions(data, 'ROUTE')
        },
        {
          type: 'select', id: 'sr-rt-care', label: 'NV chăm sóc', placeholder: 'Nhóm nhiệm vụ chăm sóc',
          options: S().groupOptions(data, 'CARE')
        },
        {
          type: 'select', id: 'sr-rt-status', label: 'Trạng thái', placeholder: 'Trạng thái',
          options: [{ value: 'ACTIVE', label: 'Hoạt động' }, { value: 'INACTIVE', label: 'Không hoạt động' }]
        }
      ]
    });
    const state = { page: 1, pageSize: 10 };
    let current = source;
    const extra = `
      ${DMS.render('Button', { text: 'Import Excel', type: 'default', dataAction: 'import-rt' })}
      ${DMS.render('Button', { text: 'Export Excel', type: 'default', dataAction: 'export-rt' })}
      ${DMS.render('Button', { text: 'Tạo mới', type: 'primary', dataAction: 'create-rt' })}
    `;
    const card = DMS.render('Card', {
      title: 'Danh sách tuyến bán hàng',
      extra,
      body: renderRouteTable(data, source, state, expanded)
    });

    const bindList = function (container) {
      const paint = () => {
        const body = container.querySelector('#sr-rt-body');
        if (body) body.outerHTML = renderRouteTable(data, current, state, expanded);
        injectExpanded(container, data, expanded);
      };
      S().bindPager(container, 'sr-rt-body', state, paint);
      injectExpanded(container, data, expanded);
      container.addEventListener('click', (e) => {
        if (handleCopy(e)) return;
        const exp = e.target.closest('[data-action="sr-expand"]');
        if (exp) {
          const id = exp.dataset.id;
          if (expanded.has(id)) expanded.delete(id);
          else expanded.add(id);
          paint();
          return;
        }
        if (e.target.closest('[data-action="create-rt"]')) {
          S().resetRouteDraft();
          const d = S().getRouteDraft();
          d.code = S().nextRouteCode(data);
          DMSRouter.navigate('/route/create');
          return;
        }
        const edit = e.target.closest('[data-action^="edit-rt-"]');
        if (edit) {
          DMSRouter.navigate(`/route/edit?id=${edit.dataset.action.replace('edit-rt-', '')}`);
          return;
        }
        const dup = e.target.closest('[data-action^="dup-rt-"]');
        if (dup) {
          const item = S().findRoute(data, dup.dataset.action.replace('dup-rt-', ''));
          if (!item) return;
          const draft = S().duplicateRoute(item);
          if (draft.code.length > S().CODE_MAX) Toast().show(S().overflowMsg('Mã tuyến', S().CODE_MAX), 'error');
          if (draft.name.length > S().NAME_MAX) Toast().show(S().overflowMsg('Tên tuyến', S().NAME_MAX), 'error');
          DMSRouter.navigate('/route/create');
          return;
        }
        const tog = e.target.closest('[data-action^="toggle-rt-"]');
        if (tog) {
          const item = S().findRoute(data, tog.dataset.action.replace('toggle-rt-', ''));
          if (!item) return;
          Dialog().confirm('Bạn có muốn thay đổi trạng thái?', () => {
            if (item.employeeId && item.status === 'ACTIVE') {
              Toast().show('Vui lòng gỡ nhân viên khỏi tuyến trước khi thay đổi trạng thái.', 'error');
              return;
            }
            item.status = item.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
            Toast().show('Cập nhật trạng thái thành công', 'success');
            paint();
          });
          return;
        }
        if (e.target.closest('[data-action="export-rt"]')) {
          if (!current.length) {
            Toast().show('Không thể xuất file vì không có dữ liệu', 'error');
            return;
          }
          Dialog().confirm('Bạn có muốn xuất danh sách tuyến bán hàng không ?', () => {
            Toast().show('Xuất file Danhsachtuyenbanhang thành công', 'success');
          });
          return;
        }
        if (e.target.closest('[data-action="import-rt"]')) {
          Toast().show('Import Excel — prototype: chọn file sẽ được xử lý ở bản chính thức', 'info');
          return;
        }
        if (e.target.closest('[data-action="filter-search"]')) {
          current = S().filterRoutes(source, data, {
            q: document.getElementById('sr-rt-q')?.value || '',
            storeQ: document.getElementById('sr-rt-store')?.value || '',
            region: document.getElementById('sr-rt-region')?.value || '',
            nppId: document.getElementById('sr-rt-npp')?.value || '',
            visitId: document.getElementById('sr-rt-visit')?.value || '',
            careId: document.getElementById('sr-rt-care')?.value || '',
            status: document.getElementById('sr-rt-status')?.value || ''
          });
          state.page = 1;
          paint();
        }
        if (e.target.closest('[data-action="filter-reset"]')) {
          ['sr-rt-q', 'sr-rt-store', 'sr-rt-region', 'sr-rt-npp', 'sr-rt-visit', 'sr-rt-care', 'sr-rt-status'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.value = '';
          });
          current = source;
          state.page = 1;
          paint();
        }
      });
    };

    renderSalesRouteList.onMount = bindList;
    return `${S().breadcrumb([{ label: 'Tuyến Bán Hàng' }])}${S().pageHeader('Tuyến Bán Hàng')}${filter}${card}`;
  }

  function renderRouteInfoTab(draft, data, readonly) {
    const dis = readonly ? 'disabled' : '';
    return `
      <div class="dms-form-grid">
        <div class="dms-form-item" id="wrap-rt-code">
          <label class="dms-form-item__label">Mã tuyến</label>
          <input class="dms-input" id="rt-code" disabled value="${DMS.escape(draft.code)}" maxlength="${S().CODE_MAX}" />
          ${S().fieldError('rt-code')}
        </div>
        <div class="dms-form-item" id="wrap-rt-name">
          <label class="dms-form-item__label is-required">Tên tuyến</label>
          <input class="dms-input" id="rt-name" ${dis} maxlength="${S().NAME_MAX}"
            placeholder="Nhập tên tuyến" value="${DMS.escape(draft.name)}" />
          ${S().fieldError('rt-name')}
        </div>
      </div>
      ${S().renderChecks('rt-npp', 'Nhà phân phối', S().nppOptions(data, { activeOnly: true }), draft.nppIds, true, readonly)}
      ${S().renderChecks('rt-brands', 'Nhãn hàng', S().brandOptions(data), draft.brands, false, readonly)}
      ${S().renderChecks('rt-attrs', 'Thuộc tính sản phẩm', S().attrOptions(data), draft.productAttrs, false, readonly)}
      <div class="dms-form-grid">
        <div class="dms-form-item" id="wrap-rt-visit">
          <label class="dms-form-item__label is-required">Nhiệm vụ theo tuyến</label>
          ${DMS.render('Select', {
            id: 'rt-visit',
            placeholder: 'Chọn nhóm nhiệm vụ viếng thăm',
            options: S().groupOptions(data, 'ROUTE'),
            value: draft.visitGroupId,
            disabled: readonly
          })}
          ${S().fieldError('rt-visit')}
        </div>
        <div class="dms-form-item" id="wrap-rt-care">
          <label class="dms-form-item__label">Nhiệm vụ chăm sóc</label>
          ${DMS.render('Select', {
            id: 'rt-care',
            placeholder: 'Chọn nhóm nhiệm vụ chăm sóc',
            options: S().groupOptions(data, 'CARE'),
            value: draft.careGroupId,
            disabled: readonly
          })}
        </div>
      </div>
    `;
  }

  function renderStoreTbody(draft, data, readonly) {
    const dis = readonly ? 'disabled' : '';
    const rows = (draft.stores || []).map((s) => {
      const st = S().findStore(data, s.storeId) || {};
      const days = S().WEEKDAYS.map(d =>
        `<label class="dms-checkbox"><input type="checkbox" data-day="${d.value}" ${(s.days || []).includes(d.value) ? 'checked' : ''} ${dis}/> ${d.label}</label>`
      ).join('');
      return `<tr data-store="${DMS.escape(s.storeId)}">
        <td>${DMS.escape(st.code || '')}</td>
        <td>${DMS.escape(st.name || '')}</td>
        <td>${DMS.escape(st.phone || '')}</td>
        <td><input class="dms-input" type="date" data-from ${dis} value="${toIso(s.fromDate)}" /></td>
        <td><input class="dms-input" type="date" data-to ${dis} value="${toIso(s.toDate)}" /></td>
        <td>${DMS.render('Select', {
          id: `rt-freq-${s.storeId}`,
          options: (data.frequencies || []).map(f => ({ value: f, label: f })),
          value: s.frequency || 'F4',
          disabled: readonly,
          searchable: false
        })}</td>
        <td><div class="dms-chip-list">${days}</div></td>
        <td>${readonly ? '' : DMS.render('TableActions', {
          actions: [{ type: 'delete', title: 'Xóa', dataAction: `del-store-${s.storeId}` }]
        })}</td>
      </tr>`;
    }).join('');
    return rows || `<tr><td colspan="8">${DMS.render('EmptyState', { title: 'Chưa gán điểm bán' })}</td></tr>`;
  }

  function renderRouteAssignTab(draft, data, readonly) {
    const dis = readonly ? 'disabled' : '';
    const storeRows = renderStoreTbody(draft, data, readonly);
    return `
      <div class="dms-form-grid">
        <div class="dms-form-item">
          <label class="dms-form-item__label">Nhân viên</label>
          ${DMS.render('Select', {
            id: 'rt-emp',
            placeholder: 'Chọn nhân viên',
            options: S().empOptions(data),
            value: draft.employeeId,
            disabled: readonly
          })}
        </div>
      </div>
      <div class="dms-price-toolbar">
        <div></div>
        <div class="dms-price-toolbar__actions">
          ${readonly ? '' : DMS.render('Button', { text: 'Thêm điểm bán', type: 'primary', dataAction: 'add-store' })}
        </div>
      </div>
      <div class="dms-table-wrapper">
        <table class="dms-table">
          <thead><tr>
            <th>Mã điểm bán</th><th>Tên điểm bán</th><th>SĐT</th>
            <th>Từ ngày</th><th>Đến ngày</th><th>Tần suất</th><th>Thứ</th><th></th>
          </tr></thead>
          <tbody id="rt-store-body">${storeRows}</tbody>
        </table>
      </div>
      ${readonly && (draft.history || []).length ? `<h4 class="dms-form-section__title dms-mt-md">Lịch sử thay đổi</h4>${DMS.render('Table', {
        columns: [
          { key: 'updatedAt', title: 'Ngày cập nhật' },
          { key: 'updatedBy', title: 'Người cập nhật' },
          { key: 'screen', title: 'Màn hình' },
          { key: 'field', title: 'Trường' },
          { key: 'action', title: 'Thao tác' },
          { key: 'oldValue', title: 'Giá trị cũ' },
          { key: 'newValue', title: 'Giá trị mới' }
        ],
        data: draft.history
      })}` : ''}
    `;
  }

  function toIso(dmy) {
    if (!dmy) return '';
    const m = String(dmy).match(/^(\d{2})-(\d{2})-(\d{4})$/);
    return m ? `${m[3]}-${m[2]}-${m[1]}` : dmy;
  }
  function toDmy(iso) {
    if (!iso) return '';
    const m = String(iso).match(/^(\d{4})-(\d{2})-(\d{2})$/);
    return m ? `${m[3]}-${m[2]}-${m[1]}` : iso;
  }

  function readRouteInfo(draft) {
    draft.name = document.getElementById('rt-name')?.value.trim() || '';
    draft.nppIds = S().readChecks('rt-npp');
    draft.brands = S().readChecks('rt-brands');
    draft.productAttrs = S().readChecks('rt-attrs');
    draft.visitGroupId = document.getElementById('rt-visit')?.value || '';
    draft.careGroupId = document.getElementById('rt-care')?.value || '';
    return draft;
  }

  function readRouteAssign(draft) {
    draft.employeeId = document.getElementById('rt-emp')?.value || '';
    document.querySelectorAll('#rt-store-body tr[data-store]').forEach(tr => {
      const sid = tr.dataset.store;
      const row = (draft.stores || []).find(s => s.storeId === sid);
      if (!row) return;
      row.fromDate = toDmy(tr.querySelector('[data-from]')?.value || '');
      row.toDate = toDmy(tr.querySelector('[data-to]')?.value || '');
      row.frequency = document.getElementById(`rt-freq-${sid}`)?.value || 'F4';
      row.days = [...tr.querySelectorAll('[data-day]:checked')].map(i => i.getAttribute('data-day'));
    });
    return draft;
  }

  function validateRouteInfo(draft) {
    let ok = true;
    if (!draft.name) { S().setError('rt-name', S().requiredMsg()); ok = false; }
    else if (draft.name.length > S().NAME_MAX) { S().setError('rt-name', S().overflowMsg('Tên tuyến', S().NAME_MAX)); ok = false; }
    else S().setError('rt-name', '');
    if (draft.code && draft.code.length > S().CODE_MAX) { S().setError('rt-code', S().overflowMsg('Mã tuyến', S().CODE_MAX)); ok = false; }
    else S().setError('rt-code', '');
    if (!draft.nppIds.length) { S().setError('rt-npp', S().requiredMsg()); ok = false; }
    else S().setError('rt-npp', '');
    if (!draft.visitGroupId) { S().setError('rt-visit', S().requiredMsg()); ok = false; }
    else S().setError('rt-visit', '');
    return ok;
  }

  function persistRoute(data, draft) {
    const now = nowUser();
    const npp = S().findNpp(data, draft.nppIds[0]);
    const visit = S().findGroup(data, draft.visitGroupId);
    const care = S().findGroup(data, draft.careGroupId);
    const emp = S().findEmp(data, draft.employeeId);
    const payload = {
      id: draft.id || `rt-${Date.now()}`,
      code: draft.code || S().nextRouteCode(data),
      name: draft.name,
      region: npp ? npp.region : '',
      area: npp ? npp.area : '',
      nppId: draft.nppIds[0] || '',
      nppName: npp ? npp.name : '',
      employeeId: draft.employeeId || '',
      employeeName: emp ? S().empLabel(emp) : '',
      brands: draft.brands.slice(),
      productAttrs: draft.productAttrs.slice(),
      visitGroupId: draft.visitGroupId,
      visitGroupName: visit ? visit.name : '',
      careGroupId: draft.careGroupId || '',
      careGroupName: care ? care.name : '',
      status: draft.status || 'ACTIVE',
      stores: draft.stores.map(s => ({ ...s })),
      history: draft.history || [],
      createdAt: now.at,
      createdBy: now.by,
      updatedAt: now.at,
      updatedBy: now.by
    };
    if (!draft.id) {
      data.routes.unshift(payload);
      draft.id = payload.id;
    } else {
      const item = S().findRoute(data, draft.id);
      if (item) {
        payload.createdAt = item.createdAt;
        payload.createdBy = item.createdBy;
        Object.assign(item, payload);
      }
    }
    if (visit) visit.assignedToRoute = true;
    if (care) care.assignedToRoute = true;
  }

  async function renderRouteWizard(mode) {
    const data = await S().loadData();
    const id = qs().get('id');
    const readonly = mode === 'view';
    if ((mode === 'edit' || mode === 'view') && id) {
      const item = S().findRoute(data, id);
      if (!item) {
        return S().breadcrumb([{ label: 'Tuyến Bán Hàng' }]) + DMS.render('EmptyState', { title: 'Không tìm thấy tuyến' });
      }
      const cur = S().getRouteDraft();
      if (cur.id !== item.id) S().loadRouteDraft(item);
    } else if (mode === 'create') {
      const d = S().getRouteDraft();
      if (!d.code) d.code = S().nextRouteCode(data);
    }
    const draft = S().getRouteDraft();
    const title = mode === 'view' ? 'Chi tiết tuyến bán hàng' : (mode === 'edit' ? 'Chỉnh sửa tuyến bán hàng' : 'Thêm mới tuyến bán hàng');
    const listHtml = await renderSalesRouteList();
    const tab0 = renderRouteInfoTab(draft, data, readonly);
    const tab1 = renderRouteAssignTab(draft, data, readonly);
    const body = `
      <div class="dms-tabs" id="sr-route-tabs">
        <div class="dms-tabs__list">
          <button class="dms-tabs__tab is-active" type="button" data-sr-tab="0">Thêm tuyến</button>
          <button class="dms-tabs__tab" type="button" data-sr-tab="1" ${draft.savedInfo || readonly ? '' : 'disabled'}>Gán tuyến</button>
        </div>
        <div class="dms-tabs__panel" data-sr-panel="0">${tab0}</div>
        <div class="dms-tabs__panel is-hidden" data-sr-panel="1">${tab1}</div>
      </div>`;
    const footer = readonly
      ? DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'modal-close' })
      : `${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'modal-close' })}
         ${DMS.render('Button', { text: 'Lưu', type: 'primary', dataAction: 'save-rt' })}`;
    const modal = DMS.render('Modal', { id: 'sr-route-modal', title, size: 'xxl', body, footer });

    const bind = function (container) {
      bindModalClose(container, '/route');
      DMS.bindFormControls(container);
      const showTab = (n) => {
        container.querySelectorAll('[data-sr-tab]').forEach(t => t.classList.toggle('is-active', t.dataset.srTab === String(n)));
        container.querySelectorAll('[data-sr-panel]').forEach(p => p.classList.toggle('is-hidden', p.dataset.srPanel !== String(n)));
      };
      if (readonly || draft.savedInfo) showTab(0);
      container.addEventListener('click', (e) => {
        const tabBtn = e.target.closest('[data-sr-tab]');
        if (tabBtn && !tabBtn.disabled) {
          e.stopPropagation();
          showTab(tabBtn.dataset.srTab);
          return;
        }
        if (e.target.closest('[data-action="add-store"]')) {
          const assigned = new Set((draft.stores || []).map(s => s.storeId));
          const available = (data.stores || []).filter(st => st.status === 'ACTIVE');
          document.getElementById('sr-pick-store-modal')?.remove();
          document.body.insertAdjacentHTML('beforeend', DMS.render('Modal', {
            id: 'sr-pick-store-modal',
            title: 'Thêm điểm bán',
            size: 'lg',
            body: available.length ? DMS.render('Table', {
              columns: [
                { key: 'check', title: '', render: (val) => val },
                { key: 'code', title: 'Mã điểm bán' },
                { key: 'name', title: 'Tên điểm bán' },
                { key: 'phone', title: 'SĐT' },
                { key: 'address', title: 'Địa chỉ' }
              ],
              data: available.map(st => ({
                check: `<input type="checkbox" class="dms-checkbox__input" data-pick-store="${DMS.escape(st.id)}" ${assigned.has(st.id) ? 'checked' : ''} />`,
                code: st.code,
                name: st.name,
                phone: st.phone,
                address: st.address
              }))
            }) : DMS.render('EmptyState', { title: 'Trống' }),
            footer: `${DMS.render('Button', { text: 'Hủy', type: 'default', dataAction: 'pick-store-close' })}
              ${DMS.render('Button', { text: 'Đồng ý', type: 'primary', dataAction: 'pick-store-ok' })}`
          }));
          const pick = document.getElementById('sr-pick-store-modal');
          DMS.bindFormControls(pick);
          pick.addEventListener('click', (ev) => {
            if (ev.target.closest('[data-action="pick-store-close"]') || ev.target === pick) {
              pick.remove();
              return;
            }
            if (ev.target.closest('[data-action="pick-store-ok"]')) {
              const ids = [...pick.querySelectorAll('[data-pick-store]:checked')].map(i => i.dataset.pickStore);
              ids.forEach(sid => {
                if (!(draft.stores || []).some(s => s.storeId === sid)) {
                  draft.stores.push({
                    storeId: sid, fromDate: '', toDate: '', frequency: 'F4',
                    order: draft.stores.length + 1, days: ['T2'], hasVisitToday: false, hasCttb: false
                  });
                }
              });
              draft.stores = (draft.stores || []).filter(s => ids.includes(s.storeId));
              pick.remove();
              const tbody = container.querySelector('#rt-store-body');
              if (tbody) {
                tbody.innerHTML = renderStoreTbody(draft, data, false);
                DMS.bindFormControls(tbody);
              }
            }
          });
          return;
        }
        const del = e.target.closest('[data-action^="del-store-"]');
        if (del) {
          const sid = del.dataset.action.replace('del-store-', '');
          const row = (draft.stores || []).find(s => s.storeId === sid);
          const st = S().findStore(data, sid);
          const label = st ? `${st.code} - ${st.name}` : sid;
          if (row && row.hasVisitToday) {
            Toast().show(`Không thể xóa điểm bán đã viếng thăm ${label}`, 'error');
            return;
          }
          if (row && row.hasCttb) {
            Toast().show(`Không thể xóa điểm bán ${label} vì đang tham gia CTTB/CTTL`, 'error');
            return;
          }
          Dialog().confirm('Bạn có chắc chắn thao tác xóa hay không?', () => {
            draft.stores = draft.stores.filter(s => s.storeId !== sid);
            Toast().show('Đã xóa điểm bán khỏi tuyến', 'success');
            const tbody = container.querySelector('#rt-store-body');
            if (tbody) {
              tbody.innerHTML = renderStoreTbody(draft, data, false);
              DMS.bindFormControls(tbody);
            }
          });
          return;
        }
        if (e.target.closest('[data-action="save-rt"]')) {
          const infoPanel = container.querySelector('[data-sr-panel="0"]');
          const isInfo = infoPanel && !infoPanel.classList.contains('is-hidden');
          if (isInfo) {
            readRouteInfo(draft);
            Dialog().confirm('Bạn có muốn lưu tuyến bán hàng?', () => {
              if (!validateRouteInfo(draft)) return;
              draft.savedInfo = true;
              persistRoute(data, draft);
              const tab1 = container.querySelector('[data-sr-tab="1"]');
              if (tab1) tab1.disabled = false;
              Toast().show('Lưu thành công', 'success');
              showTab(1);
            });
          } else {
            readRouteAssign(draft);
            Dialog().confirm('Bạn có muốn lưu tuyến bán hàng?', () => {
              persistRoute(data, draft);
              Toast().show('Lưu thành công', 'success');
              closeModalNav('/route');
            });
          }
        }
      }, true);
    };

    if (mode === 'create') renderSalesRouteCreate.onMount = bind;
    if (mode === 'edit') renderSalesRouteEdit.onMount = bind;
    if (mode === 'view') renderSalesRouteDetail.onMount = bind;
    return listHtml + modal;
  }

  async function renderSalesRouteCreate() { return renderRouteWizard('create'); }
  async function renderSalesRouteEdit() { return renderRouteWizard('edit'); }
  async function renderSalesRouteDetail() { return renderRouteWizard('view'); }

  /* ========== Tuyến thực tế ========== */
  async function renderRealRoute() {
    const data = await S().loadData();
    const source = data.realRoutes || [];
    const expanded = new Set();
    const today = (function () {
      const d = new Date();
      const p = n => String(n).padStart(2, '0');
      return `${p(d.getDate())}-${p(d.getMonth() + 1)}-${d.getFullYear()}`;
    })();
    const columnsFor = (rows) => [
      { key: '_exp', title: '', width: '40px', render: (_, row) => S().renderExpandBtn(row.id, expanded.has(row.id)) },
      {
        key: 'employeeName',
        title: 'Mã / Tên NV',
        render: (val, row) => `<a class="dms-table__link">${DMS.escape(row.employeeId)} - ${DMS.escape(val)}</a>`
      },
      { key: 'routeCode', title: 'Mã tuyến' },
      { key: 'routeName', title: 'Tên tuyến' },
      { key: 'brands', title: 'Nhãn hàng', render: (val) => S().brandTags(val, data) },
      { key: 'totalIn', title: 'Số ĐB trong tuyến', render: (_, row) => S().realRouteStats(row).totalIn },
      { key: 'visitedOut', title: 'Số ĐB ngoại tuyến đã VT', render: (_, row) => S().realRouteStats(row).visitedOut },
      { key: 'ratio', title: 'Số ĐB trong tuyến đã VT/Tuyến', render: (_, row) => S().realRouteStats(row).ratio },
      { key: 'createdAt', title: 'Ngày tạo' },
      { key: 'updatedAt', title: 'Ngày cập nhật' }
    ];
    const filter = DMS.render('FilterPanel', {
      fields: [
        { type: 'search', id: 'sr-rr-route', label: 'Tuyến bán hàng', placeholder: 'Mã | Tên tuyến' },
        { type: 'search', id: 'sr-rr-date', label: 'Thời gian', placeholder: 'dd-mm-yyyy', value: today },
        {
          type: 'select', id: 'sr-rr-emp', label: 'Nhân viên', placeholder: 'Nhân viên',
          options: S().empOptions(data)
        },
        {
          type: 'select', id: 'sr-rr-brand', label: 'Nhãn hàng', placeholder: 'Nhãn hàng',
          options: S().brandOptions(data)
        },
        { type: 'search', id: 'sr-rr-store', label: 'Điểm bán', placeholder: 'Mã | Tên điểm bán' }
      ]
    });
    const state = { page: 1, pageSize: 10 };
    let current = S().filterRealRoutes(source, data, { date: today });
    const paintHtml = () => {
      const page = S().slicePage(current, state.page, state.pageSize);
      const table = page.rows.length
        ? DMS.render('Table', { columns: columnsFor(page.rows), data: page.rows })
        : `<div class="dms-table-wrapper">${DMS.render('EmptyState', { title: 'Trống' })}</div>`;
      return `<div id="sr-rr-body">${table}${S().renderPager(page.page, page.pageSize, page.total)}</div>`;
    };
    const card = DMS.render('Card', { title: 'Danh sách tuyến thực tế', body: paintHtml() });

    renderRealRoute.onMount = function (container) {
      const dateEl = document.getElementById('sr-rr-date');
      if (dateEl && !dateEl.value) dateEl.value = today;
      const inject = () => {
        container.querySelectorAll('#sr-rr-body tbody tr').forEach(tr => {
          const btn = tr.querySelector('[data-action="sr-expand"]');
          if (!btn || !expanded.has(btn.dataset.id)) return;
          const item = source.find(r => r.id === btn.dataset.id);
          if (!item) return;
          const daysHtml = (item.days || []).map(d => {
            const stores = (d.stores || []).map(s => {
              const st = S().findStore(data, s.storeId) || {};
              const visited = !!(s.checkin && s.checkout);
              const canDel = d.date === today && !visited;
              return `<tr>
                <td>${DMS.escape(st.code || '')}</td>
                <td>${DMS.escape(st.name || '')}</td>
                <td>${DMS.escape(s.type)}</td>
                <td>${DMS.escape(s.checkin || '')}</td>
                <td>${DMS.escape(s.checkout || '')}</td>
                <td>${canDel ? DMS.render('TableActions', {
                  actions: [{ type: 'delete', title: 'Xóa', dataAction: `del-rr-${item.id}|${d.date}|${s.storeId}` }]
                }) : ''}</td>
              </tr>`;
            }).join('');
            return `<div class="dms-nested">
              <div class="dms-nested__title">Ngày đi tuyến: ${DMS.escape(d.date)} — VT ${d.visitedInRoute}/${d.totalInRoute}</div>
              <table class="dms-table"><thead><tr>
                <th>Mã ĐB</th><th>Tên ĐB</th><th>Loại</th><th>Check-in</th><th>Check-out</th><th></th>
              </tr></thead><tbody>${stores}</tbody></table>
            </div>`;
          }).join('');
          const extra = document.createElement('tr');
          extra.className = 'dms-expand-row';
          extra.innerHTML = `<td colspan="${tr.children.length}">${daysHtml}</td>`;
          tr.after(extra);
        });
      };
      const paint = () => {
        const body = container.querySelector('#sr-rr-body');
        if (body) body.outerHTML = paintHtml();
        inject();
      };
      inject();
      S().bindPager(container, 'sr-rr-body', state, paint);
      container.addEventListener('click', (e) => {
        const exp = e.target.closest('[data-action="sr-expand"]');
        if (exp) {
          const id = exp.dataset.id;
          if (expanded.has(id)) expanded.delete(id); else expanded.add(id);
          paint();
          return;
        }
        const del = e.target.closest('[data-action^="del-rr-"]');
        if (del) {
          const [rid, date, sid] = del.dataset.action.replace('del-rr-', '').split('|');
          const item = source.find(r => r.id === rid);
          const day = item && (item.days || []).find(d => d.date === date);
          const store = day && (day.stores || []).find(s => s.storeId === sid);
          if (!store) return;
          if (date !== today || (store.checkin && store.checkout)) {
            Toast().show('Chỉ được xóa điểm bán của ngày hiện tại và chưa viếng thăm', 'error');
            return;
          }
          Dialog().confirm('Bạn có chắc chắn thao tác xóa hay không?', () => {
            day.stores = day.stores.filter(s => s.storeId !== sid);
            Toast().show('Đã xóa điểm bán khỏi tuyến thực tế', 'success');
            paint();
          });
          return;
        }
        if (e.target.closest('[data-action="filter-search"]')) {
          current = S().filterRealRoutes(source, data, {
            routeQ: document.getElementById('sr-rr-route')?.value || '',
            date: document.getElementById('sr-rr-date')?.value || '',
            empId: document.getElementById('sr-rr-emp')?.value || '',
            brand: document.getElementById('sr-rr-brand')?.value || '',
            storeQ: document.getElementById('sr-rr-store')?.value || ''
          });
          state.page = 1;
          paint();
        }
        if (e.target.closest('[data-action="filter-reset"]')) {
          ['sr-rr-route', 'sr-rr-emp', 'sr-rr-brand', 'sr-rr-store'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.value = '';
          });
          const d = document.getElementById('sr-rr-date');
          if (d) d.value = today;
          current = S().filterRealRoutes(source, data, { date: today });
          state.page = 1;
          paint();
        }
      });
    };

    return `${S().breadcrumb([{ label: 'Tuyến Thực Tế' }])}${S().pageHeader('Tuyến Thực Tế')}${filter}${card}`;
  }

  /* ========== Chuyển tuyến NPP ========== */
  function tfRouteLabel(data, routeId) {
    const r = S().findRoute(data, routeId);
    return r || { code: routeId, name: '', employeeId: '', employeeName: '' };
  }

  function renderTfGrid(data, draft, readonly) {
    const rows = (draft.routes || []).map(r => {
      const route = tfRouteLabel(data, r.routeId);
      const emp = S().findEmp(data, route.employeeId);
      const canDel = !readonly && (!r.status || r.status === 'FAILED' || r.status === 'EMPTY') && !draft.processing;
      return {
        _exp: S().renderExpandBtn(r.routeId, !!r.open),
        code: copyBtn(route.code),
        name: route.name,
        empCode: copyBtn(emp ? emp.code : route.employeeId),
        empName: emp ? emp.name : (route.employeeName || ''),
        status: S().tfStatusTag(r.status),
        error: r.error || '',
        actions: canDel ? DMS.render('TableActions', {
          actions: [{ type: 'delete', title: 'Xóa', dataAction: `del-tf-rt-${r.routeId}` }]
        }) : ''
      };
    });
    const html = (val) => val || '';
    const columns = [
      { key: '_exp', title: '', render: html },
      { key: 'code', title: 'Mã tuyến', render: html },
      { key: 'name', title: 'Tên tuyến' },
      { key: 'empCode', title: 'Mã NV chăm sóc', render: html },
      { key: 'empName', title: 'Tên NV chăm sóc' },
      { key: 'status', title: 'Trạng thái xử lý', render: html },
      { key: 'error', title: 'Chi tiết lỗi' },
      { key: 'actions', title: 'Tùy chỉnh', render: html }
    ];
    if (!rows.length) return `<div class="dms-table-wrapper">${DMS.render('EmptyState', { title: 'Trống' })}</div>`;
    return DMS.render('Table', { columns, data: rows });
  }

  function processSummary(draft) {
    const total = (draft.routes || []).length;
    const ok = (draft.routes || []).filter(r => r.status === 'SUCCESS').length;
    const fail = (draft.routes || []).filter(r => r.status === 'FAILED').length;
    if (draft.processing) return `<div class="dms-process-summary">Đang xử lý... [ ${total ? Math.round(((ok + fail) / total) * 100) : 0}% ] - Thành công: ${ok}/${total} - Thất bại: ${fail}/${total}</div>`;
    if (draft.processed) return `<div class="dms-process-summary">Thành công: ${ok}/${total} - Thất bại: ${fail}/${total}</div>`;
    return '';
  }

  function mockProcessRoute(data, draft, item) {
    const route = S().findRoute(data, item.routeId);
    const steps = S().PROCESS_STEPS.map(name => ({ name, status: 'PENDING' }));
    item.steps = steps;
    if (!route) {
      item.status = 'FAILED';
      item.error = 'Cập nhật tuyến bán hàng không thành công!';
      steps[0].status = 'FAILED';
      return;
    }
    const visited = (route.stores || []).find(s => s.hasVisitToday);
    if (visited) {
      const st = S().findStore(data, visited.storeId);
      item.status = 'FAILED';
      item.error = `Không thể thay đổi NPP vì đã có sale viếng thăm điểm bán ${st ? `${st.code} - ${st.name}` : visited.storeId}`;
      steps[0].status = 'FAILED';
      return;
    }
    const target = S().findNpp(data, draft.targetNppId);
    if (target && target.status !== 'ACTIVE') {
      item.status = 'FAILED';
      item.error = 'Nhà phân phối không hoạt động!';
      steps[0].status = 'OK';
      steps[1].status = 'FAILED';
      return;
    }
    if (route.status !== 'ACTIVE') {
      item.status = 'FAILED';
      item.error = 'Mã tuyến không hoạt động!';
      steps[0].status = 'OK';
      steps[1].status = 'FAILED';
      return;
    }
    steps.forEach((s, i) => { s.status = 'OK'; });
    item.status = 'SUCCESS';
    item.error = '';
    route.nppId = draft.targetNppId;
    route.nppName = target ? target.name : route.nppName;
    if (target) {
      route.region = target.region;
      route.area = target.area;
    }
    route.history = route.history || [];
    const src = S().findNpp(data, draft.sourceNppId);
    route.history.unshift({
      updatedAt: nowUser().at, updatedBy: nowUser().by, screen: 'Chuyển tuyến NPP',
      field: 'NPP', action: 'Chuyển tuyến NPP',
      oldValue: src ? S().nppLabel(src) : draft.sourceNppId,
      newValue: target ? S().nppLabel(target) : draft.targetNppId
    });
  }

  async function renderDistributorTransfer() {
    const data = await S().loadData();
    const source = data.transfers || [];
    const columns = [
      { key: 'createdAt', title: 'Ngày tạo' },
      { key: 'sourceNppId', title: 'NPP nguồn', render: (val) => {
        const n = S().findNpp(data, val); return n ? S().nppLabel(n) : val;
      } },
      { key: 'targetNppId', title: 'NPP đích', render: (val) => {
        const n = S().findNpp(data, val); return n ? S().nppLabel(n) : val;
      } },
      { key: 'total', title: 'Tổng tuyến' },
      { key: 'success', title: 'Thành công' },
      { key: 'fail', title: 'Thất bại' },
      { key: 'createdBy', title: 'Người tạo' },
      { key: 'updatedAt', title: 'Ngày cập nhật' },
      { key: 'updatedBy', title: 'Người cập nhật' },
      {
        key: 'actions',
        title: 'Tùy chỉnh',
        render: (_, row) => row.fail > 0
          ? DMS.render('TableActions', {
              actions: [{ type: 'view', title: 'Xem chi tiết', dataAction: `view-tf-${row.id}` }]
            })
          : ''
      }
    ];
    const filter = DMS.render('FilterPanel', {
      fields: [
        { type: 'select', id: 'sr-tf-src', label: 'NPP nguồn', placeholder: 'Chọn nhà phân phối nguồn', options: S().nppOptions(data) },
        { type: 'select', id: 'sr-tf-tgt', label: 'NPP đích', placeholder: 'Chọn nhà phân phối đích', options: S().nppOptions(data) },
        { type: 'search', id: 'sr-tf-date', label: 'Ngày thực hiện', placeholder: 'dd-mm-yyyy' }
      ]
    });
    const state = { page: 1, pageSize: 10 };
    const card = DMS.render('Card', {
      title: 'Danh sách chuyển tuyến nhà phân phối',
      extra: DMS.render('Button', { text: 'Tạo mới', type: 'primary', dataAction: 'create-tf' }),
      body: renderListBody('sr-tf-body', columns, source, state)
    });

    renderDistributorTransfer.onMount = function (container) {
      let current = source;
      const refresh = (rows) => {
        current = rows;
        state.page = 1;
        const body = container.querySelector('#sr-tf-body');
        if (body) body.outerHTML = renderListBody('sr-tf-body', columns, rows, state);
      };
      S().bindPager(container, 'sr-tf-body', state, () => {
        const body = container.querySelector('#sr-tf-body');
        if (body) body.outerHTML = renderListBody('sr-tf-body', columns, current, state);
      });
      container.addEventListener('click', (e) => {
        if (e.target.closest('[data-action="create-tf"]')) {
          S().resetTfDraft();
          DMSRouter.navigate('/route/distributor-transfer/create');
          return;
        }
        const view = e.target.closest('[data-action^="view-tf-"]');
        if (view) {
          const tf = source.find(t => t.id === view.dataset.action.replace('view-tf-', ''));
          if (!tf) return;
          const d = S().resetTfDraft();
          d.sourceNppId = tf.sourceNppId;
          d.targetNppId = tf.targetNppId;
          d.processed = true;
          d.viewId = tf.id;
          d.routes = (tf.routes || []).filter(r => r.status === 'FAILED').map(r => ({ ...r }));
          DMSRouter.navigate(`/route/distributor-transfer/create?id=${tf.id}`);
          return;
        }
        if (e.target.closest('[data-action="filter-search"]')) {
          refresh(S().filterTransfers(source, {
            sourceNppId: document.getElementById('sr-tf-src')?.value || '',
            targetNppId: document.getElementById('sr-tf-tgt')?.value || '',
            date: document.getElementById('sr-tf-date')?.value || ''
          }));
        }
        if (e.target.closest('[data-action="filter-reset"]')) {
          ['sr-tf-src', 'sr-tf-tgt', 'sr-tf-date'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
          refresh(source);
        }
      });
    };

    return `${S().breadcrumb([{ label: 'Chuyển Tuyến Nhà Phân Phối' }])}${S().pageHeader('Chuyển Tuyến Nhà Phân Phối')}${filter}${card}`;
  }

  function renderPickRouteModal(data, draft) {
    const sourceRoutes = (data.routes || []).filter(r =>
      r.status === 'ACTIVE' && r.nppId === draft.sourceNppId && !r.inTransferQueue
    );
    const selected = new Set((draft.routes || []).map(r => r.routeId));
    const rows = sourceRoutes.map(r => ({
      id: r.id,
      check: `<input type="checkbox" class="dms-checkbox__input" data-pick="${DMS.escape(r.id)}" ${selected.has(r.id) ? 'checked' : ''} />`,
      code: copyBtn(r.code),
      name: r.name,
      empCode: copyBtn(r.employeeId),
      empName: r.employeeName,
      status: 'Hoạt động'
    }));
    return DMS.render('Modal', {
      id: 'sr-pick-route-modal',
      title: 'Thêm tuyến bán hàng',
      size: 'xl',
      body: `
        <div class="dms-form-grid">
          ${DMS.render('Input', { id: 'sr-pick-q', label: 'Tìm theo', placeholder: 'Tìm theo mã tuyến, tên tuyến' })}
          ${DMS.render('Select', { id: 'sr-pick-emp', label: 'Nhân viên chăm sóc', placeholder: 'Nhân viên chăm sóc', options: S().empOptions(data) })}
        </div>
        <div class="dms-filter-panel__actions dms-mb-md">
          ${DMS.render('Button', { text: 'Làm mới', type: 'ghost', dataAction: 'pick-reset' })}
          ${DMS.render('Button', { text: 'Tìm kiếm', type: 'primary', dataAction: 'pick-search' })}
        </div>
        <div id="sr-pick-body">${rows.length ? DMS.render('Table', {
          columns: [
            { key: 'check', title: '', render: (val) => val },
            { key: 'code', title: 'Mã tuyến', render: (val) => val },
            { key: 'name', title: 'Tên tuyến' },
            { key: 'empCode', title: 'Mã NV chăm sóc', render: (val) => val },
            { key: 'empName', title: 'Tên NV chăm sóc' },
            { key: 'status', title: 'Trạng thái' }
          ],
          data: rows
        }) : DMS.render('EmptyState', { title: 'Trống' })}</div>
      `,
      footer: `${DMS.render('Button', { text: 'Hủy', type: 'default', dataAction: 'pick-close' })}
        ${DMS.render('Button', { text: 'Đồng ý', type: 'primary', dataAction: 'pick-ok' })}`
    });
  }

  async function renderDistributorTransferCreate() {
    const data = await S().loadData();
    const listHtml = await renderDistributorTransfer();
    const draft = S().getTfDraft();
    const id = qs().get('id');
    const viewMode = !!(id && draft.processed);
    const srcOpts = S().nppOptions(data);
    const src = S().findNpp(data, draft.sourceNppId);
    const tgtOpts = draft.sourceNppId
      ? S().nppOptions(data, { region: src && src.region })
      : [];
    const canProcess = (draft.routes || []).some(r => !r.status || r.status === 'FAILED' || r.status === 'EMPTY') && !draft.processing;
    const nppDisabled = viewMode || draft.processed || draft.processing ? 'disabled' : '';
    const body = `
      <div class="dms-form-grid">
        <div class="dms-form-item" id="wrap-tf-src">
          <label class="dms-form-item__label is-required">Nhà phân phối nguồn</label>
          ${DMS.render('Select', {
            id: 'tf-src',
            placeholder: 'Chọn nhà phân phối nguồn',
            options: srcOpts,
            value: draft.sourceNppId || '',
            disabled: !!nppDisabled
          })}
          ${S().fieldError('tf-src')}
        </div>
        <div class="dms-form-item" id="wrap-tf-tgt">
          <label class="dms-form-item__label is-required">Nhà phân phối đích</label>
          ${DMS.render('Select', {
            id: 'tf-tgt',
            placeholder: 'Chọn nhà phân phối đích',
            options: tgtOpts,
            value: draft.targetNppId || '',
            disabled: !!nppDisabled
          })}
          ${S().fieldError('tf-tgt')}
        </div>
      </div>
      <div class="dms-price-toolbar">
        <div></div>
        <div class="dms-price-toolbar__actions">
          ${viewMode ? '' : `${DMS.render('Button', { text: 'Import Excel', type: 'default', dataAction: 'tf-import', disabled: draft.processing })}
            ${DMS.render('Button', { text: 'Chọn tuyến', type: 'default', dataAction: 'tf-pick', disabled: draft.processing })}`}
        </div>
      </div>
      <div id="sr-tf-grid">${renderTfGrid(data, draft, viewMode)}</div>
      ${processSummary(draft)}
    `;
    const footer = `
      ${DMS.render('Button', { text: 'Hủy', type: 'default', dataAction: 'modal-close' })}
      ${DMS.render('Button', {
        text: 'Tiến hành xử lý',
        type: 'primary',
        dataAction: 'tf-run',
        disabled: !canProcess
      })}
    `;
    const modal = DMS.render('Modal', {
      id: 'sr-tf-modal',
      title: viewMode ? 'Chi tiết chuyển tuyến nhà phân phối' : 'Thêm chuyển tuyến nhà phân phối',
      size: 'xxl',
      body,
      footer
    });

    renderDistributorTransferCreate.onMount = function (container) {
      bindModalClose(container, '/route/distributor-transfer');
      DMS.bindFormControls(container);
      const paintGrid = () => {
        const grid = container.querySelector('#sr-tf-grid');
        if (grid) grid.innerHTML = renderTfGrid(data, draft, viewMode);
        const sum = container.querySelector('.dms-process-summary');
        const html = processSummary(draft);
        if (sum) sum.outerHTML = html || '<div class="dms-process-summary"></div>';
        else if (html) container.querySelector('#sr-tf-modal .dms-modal__body')?.insertAdjacentHTML('beforeend', html);
        const runBtn = container.querySelector('[data-action="tf-run"]');
        if (runBtn) {
          const enable = (draft.routes || []).some(r => !r.status || r.status === 'FAILED') && !draft.processing;
          runBtn.disabled = !enable;
        }
      };
      const injectSteps = () => {
        container.querySelectorAll('#sr-tf-grid tbody tr').forEach(tr => {
          const btn = tr.querySelector('[data-action="sr-expand"]');
          if (!btn) return;
          const rec = (draft.routes || []).find(r => r.routeId === btn.dataset.id);
          if (!rec || !rec.open || !rec.steps) return;
          const steps = rec.steps.map(s => {
            const icon = s.status === 'OK' ? '✓' : (s.status === 'FAILED' ? '✕' : '…');
            const cls = s.status === 'OK' ? 'is-ok' : (s.status === 'FAILED' ? 'is-fail' : 'is-wait');
            return `<li class="dms-process-step ${cls}"><span>${icon}</span> ${DMS.escape(s.name)}</li>`;
          }).join('');
          const extra = document.createElement('tr');
          extra.className = 'dms-expand-row';
          extra.innerHTML = `<td colspan="${tr.children.length}"><ol class="dms-process-list">${steps}</ol></td>`;
          tr.after(extra);
        });
      };
      paintGrid();
      injectSteps();

      container.addEventListener('change', (e) => {
        if (e.target.id === 'tf-src') {
          const v = e.target.value;
          if (v && v === document.getElementById('tf-tgt')?.value) {
            S().setError('tf-src', 'Nhà phân phối nguồn không được trùng với nhà phân phối đích');
            e.target.value = draft.sourceNppId;
            return;
          }
          S().setError('tf-src', '');
          draft.sourceNppId = v;
          draft.targetNppId = '';
          draft.routes = [];
          DMSRouter.navigate('/route/distributor-transfer/create');
        }
        if (e.target.id === 'tf-tgt') {
          const v = e.target.value;
          if (v && v === document.getElementById('tf-src')?.value) {
            S().setError('tf-tgt', 'Nhà phân phối đích không được trùng với nhà phân phối nguồn');
            e.target.value = '';
            return;
          }
          S().setError('tf-tgt', '');
          draft.targetNppId = v;
        }
      });

      container.addEventListener('click', (e) => {
        if (handleCopy(e)) return;
        const exp = e.target.closest('#sr-tf-grid [data-action="sr-expand"]');
        if (exp) {
          const rec = (draft.routes || []).find(r => r.routeId === exp.dataset.id);
          if (rec) rec.open = !rec.open;
          paintGrid();
          injectSteps();
          return;
        }
        if (e.target.closest('[data-action="tf-import"]')) {
          Toast().show('Import Excel — prototype: chọn file sẽ được xử lý ở bản chính thức', 'info');
          return;
        }
        if (e.target.closest('[data-action="tf-pick"]')) {
          if (!draft.sourceNppId) {
            S().setError('tf-src', S().requiredMsg());
            return;
          }
          document.getElementById('sr-pick-route-modal')?.remove();
          document.body.insertAdjacentHTML('beforeend', renderPickRouteModal(data, draft));
          const pick = document.getElementById('sr-pick-route-modal');
          DMS.bindFormControls(pick);
          pick.addEventListener('click', (ev) => {
            if (ev.target.closest('[data-action="pick-close"]') || ev.target === pick) {
              pick.remove();
              return;
            }
            if (ev.target.closest('[data-action="pick-ok"]')) {
              const ids = [...pick.querySelectorAll('[data-pick]:checked')].map(i => i.dataset.pick);
              ids.forEach(rid => {
                if (!(draft.routes || []).some(r => r.routeId === rid)) {
                  draft.routes.push({ routeId: rid, status: '', error: '', steps: [] });
                }
              });
              draft.routes = (draft.routes || []).filter(r => ids.includes(r.routeId) || r.status);
              pick.remove();
              paintGrid();
            }
          });
          return;
        }
        const del = e.target.closest('[data-action^="del-tf-rt-"]');
        if (del) {
          const rid = del.dataset.action.replace('del-tf-rt-', '');
          Dialog().confirm('Bạn có chắc chắn thao tác xóa hay không?', () => {
            draft.routes = (draft.routes || []).filter(r => r.routeId !== rid);
            paintGrid();
          });
          return;
        }
        if (e.target.closest('[data-action="tf-run"]')) {
          if (!draft.sourceNppId) { S().setError('tf-src', S().requiredMsg()); return; }
          if (!draft.targetNppId) { S().setError('tf-tgt', S().requiredMsg()); return; }
          Dialog().confirm('Quá trình thực hiện thành công sẽ không thể khôi phục được dữ liệu trước đó. Bạn có chắc muốn chuyển tuyến nhà phân phối?', () => {
            draft.processing = true;
            draft.processed = true;
            (draft.routes || []).filter(r => !r.status || r.status === 'FAILED').forEach(r => {
              r.status = 'PROCESSING';
              mockProcessRoute(data, draft, r);
            });
            draft.processing = false;
            const ok = (draft.routes || []).filter(r => r.status === 'SUCCESS').length;
            const fail = (draft.routes || []).filter(r => r.status === 'FAILED').length;
            const existing = (data.transfers || []).find(t => t.id === draft.viewId);
            const rec = existing || {
              id: `tf-${Date.now()}`,
              createdAt: nowUser().at,
              sourceNppId: draft.sourceNppId,
              targetNppId: draft.targetNppId,
              createdBy: nowUser().by
            };
            rec.total = (draft.routes || []).length;
            rec.success = ok;
            rec.fail = fail;
            rec.updatedAt = nowUser().at;
            rec.updatedBy = nowUser().by;
            rec.routes = (draft.routes || []).map(r => ({ routeId: r.routeId, status: r.status, error: r.error, steps: r.steps }));
            if (!existing) data.transfers.unshift(rec);
            draft.viewId = rec.id;
            Toast().show('Đã hoàn tất xử lý chuyển tuyến', 'success');
            paintGrid();
            injectSteps();
            const srcEl = document.getElementById('tf-src');
            const tgtEl = document.getElementById('tf-tgt');
            if (srcEl) srcEl.disabled = true;
            if (tgtEl) tgtEl.disabled = true;
          });
        }
      });
    };

    return listHtml + modal;
  }

  window.renderRouteTask = renderRouteTask;
  window.renderRouteTaskGroup = renderRouteTaskGroup;
  window.renderRouteTaskGroupCreate = renderRouteTaskGroupCreate;
  window.renderRouteTaskGroupEdit = renderRouteTaskGroupEdit;
  window.renderRouteTaskGroupDetail = renderRouteTaskGroupDetail;
  window.renderSalesRouteList = renderSalesRouteList;
  window.renderSalesRouteCreate = renderSalesRouteCreate;
  window.renderSalesRouteEdit = renderSalesRouteEdit;
  window.renderSalesRouteDetail = renderSalesRouteDetail;
  window.renderRealRoute = renderRealRoute;
  window.renderDistributorTransfer = renderDistributorTransfer;
  window.renderDistributorTransferCreate = renderDistributorTransferCreate;
})();
