/**
 * Quản Lý Khảo Sát — Bộ Khảo Sát + Thống Kê Khảo Sát
 * UI: DEV /survey/setting, /survey/report
 */
(function () {
  'use strict';

  function toast(msg, type) { DMS.get('Toast').show(msg, type || 'info'); }
  function S() { return SurveyShared; }

  function settingUrl(extra) {
    const p = S().queryParams();
    const next = Object.assign({
      mode: p.get('mode') || '',
      id: p.get('id') || '',
      preview: p.get('preview') || ''
    }, extra || {});
    const q = [];
    if (next.mode) q.push('mode=' + encodeURIComponent(next.mode));
    if (next.id) q.push('id=' + encodeURIComponent(next.id));
    if (next.preview) q.push('preview=' + encodeURIComponent(next.preview));
    return '/survey/setting' + (q.length ? '?' + q.join('&') : '');
  }
  function remountSetting(extra) { DMSRouter.navigate(settingUrl(extra), true); }
  function remountReport() { DMSRouter.navigate('/survey/report', true); }

  function todayRange() {
    const t = S().todayDmy();
    return { from: t, to: t };
  }
  function settingState() {
    if (!window.__surveySettingState) {
      const d = todayRange();
      window.__surveySettingState = { q: '', status: '', audience: '', from: d.from, to: d.to, page: 1, pageSize: 10 };
    }
    return window.__surveySettingState;
  }
  function reportState() {
    if (!window.__surveyReportState) {
      const m = S().monthRange();
      window.__surveyReportState = { surveyId: '', from: m.from, to: m.to, regions: [], page: 1, pageSize: 10 };
    }
    return window.__surveyReportState;
  }
  function actionBtn(action, id, enabled, type, title) {
    return DMS.render('ActionIconButton', {
      type: type, title: title, disabled: !enabled,
      dataAction: enabled ? action + '-' + id : ''
    });
  }

  /* ========== SETTING LIST ========== */
  function filterSurveys(items, st) {
    const q = (st.q || '').trim().toLowerCase();
    const from = S().parseDmy(st.from);
    const to = S().parseDmy(st.to);
    return items.filter((it) => {
      if (q && !(String(it.code || '').toLowerCase().includes(q) || String(it.title || '').toLowerCase().includes(q))) return false;
      if (st.status && it.status !== st.status) return false;
      if (st.audience && it.audience !== st.audience) return false;
      if (from && to && !S().overlaps(S().parseDmy(it.startDate), S().parseDmy(it.endDate), from, to)) return false;
      return true;
    });
  }
  function settingColumns() {
    return [
      { key: 'code', title: 'Mã khảo sát', width: '150px', render: (v) => S().copyCell(v, DMS.escape(v)) },
      {
        key: 'title', title: 'Tên khảo sát',
        render: (v, row) => `<a class="dms-table__link survey-title-cell" data-route="${settingUrl({ mode: '', id: row.id, preview: '' })}" title="${DMS.escape(v)}">${DMS.escape(v)}</a>`
      },
      { key: 'audience', title: 'Đối tượng khảo sát', render: (v) => S().audienceLabel(v) },
      { key: 'applyType', title: 'Điều kiện áp dụng', render: (v) => S().applyLabel(v) },
      { key: 'startDate', title: 'Từ ngày' },
      { key: 'endDate', title: 'Đến ngày' },
      { key: 'times', title: 'Số lần khảo sát', render: (v) => S().timesText(v) },
      { key: 'createdAt', title: 'Ngày tạo' },
      { key: 'createdBy', title: 'Người tạo' },
      { key: 'updatedAt', title: 'Ngày cập nhật' },
      { key: 'updatedBy', title: 'Người cập nhật' },
      {
        key: 'status', title: 'Trạng thái',
        render: (v, row) => DMS.render('Switch', { checked: v === 'ACTIVE', dataAction: 'sv-toggle-' + row.id })
      },
      {
        key: 'actions', title: 'Tùy chỉnh', fixed: 'right',
        render: (_, row) => `<div class="dms-action-buttons">
          ${actionBtn('sv-edit', row.id, true, 'edit', 'Chỉnh sửa')}
          ${actionBtn('sv-copy', row.id, true, 'duplicate', 'Sao chép')}
          ${actionBtn('sv-preview', row.id, true, 'preview', 'Preview')}
        </div>`
      }
    ];
  }
  function renderSettingBody(store) {
    const st = settingState();
    const filtered = filterSurveys(store.surveys || [], st);
    const total = filtered.length;
    const pages = Math.max(1, Math.ceil(total / st.pageSize) || 1);
    if (st.page > pages) st.page = pages;
    const start = (st.page - 1) * st.pageSize;
    const rows = filtered.slice(start, start + st.pageSize);
    const table = rows.length
      ? DMS.render('Table', { columns: settingColumns(), data: rows })
      : `<div class="dms-table-wrapper">${DMS.render('EmptyState', { title: 'Trống', icon: '📭' })}</div>`;
    return table + DMS.render('Pagination', { current: st.page, pageSize: st.pageSize, total, unit: 'bộ khảo sát' });
  }
  function readSettingFilters() {
    const st = settingState();
    st.q = document.getElementById('sv-q')?.value || '';
    st.status = document.getElementById('sv-status')?.value || '';
    st.audience = document.getElementById('sv-audience')?.value || '';
    st.from = document.getElementById('sv-from')?.value || '';
    st.to = document.getElementById('sv-to')?.value || '';
    st.page = 1;
  }

  /* ========== FORM ========== */
  function formMode() {
    const p = S().queryParams();
    const mode = p.get('mode') || '';
    const id = p.get('id') || '';
    if (mode === 'create' || mode === 'edit' || mode === 'copy') return mode;
    if (id) return 'view';
    return '';
  }
  function formTitle(mode) {
    if (mode === 'view') return 'Chi tiết khảo sát';
    if (mode === 'edit') return 'Chỉnh sửa khảo sát';
    return 'Thêm mới Khảo sát';
  }
  function readDraftFromDom(d) {
    d.title = document.getElementById('sv-f-title')?.value || d.title;
    d.startDate = document.getElementById('sv-f-from')?.value || d.startDate;
    d.endDate = document.getElementById('sv-f-to')?.value || d.endDate;
    const timesEl = document.getElementById('sv-f-times');
    if (timesEl) d.times = S().clampTimes(timesEl.value);
    d.audience = document.getElementById('sv-f-audience')?.value || d.audience;
    d.applyType = document.getElementById('sv-f-apply')?.value || d.applyType;
    d.requireCheckin = !!document.getElementById('sv-f-checkin')?.checked;
    const i = d.activeQuestion || 0;
    const q = d.questions[i];
    if (q) {
      q.type = document.getElementById('sv-q-type')?.value || q.type;
      q.title = document.getElementById('sv-q-title')?.value || q.title;
      q.desc = document.getElementById('sv-q-desc')?.value || q.desc;
      q.required = !!document.getElementById('sv-q-req')?.checked;
      q.min = Number(document.getElementById('sv-q-min')?.value || q.min || 1);
      q.max = Number(document.getElementById('sv-q-max')?.value || q.max || 1000);
      q.trueLabel = document.getElementById('sv-q-true')?.value || q.trueLabel;
      q.falseLabel = document.getElementById('sv-q-false')?.value || q.falseLabel;
      q.allowOther = !!document.getElementById('sv-q-other')?.checked;
      const up = document.querySelector('input[name="sv-q-upload"]:checked');
      if (up) q.uploadMode = up.value;
      const optInputs = document.querySelectorAll('[data-sv-opt]');
      if (optInputs.length) {
        q.options = [...optInputs].map((el) => ({
          id: el.getAttribute('data-sv-opt'),
          label: el.value
        }));
      }
    }
    if (d.applyType === 'REGION') {
      const ids = DMS.get('MultiSelect').getValues('sv-f-regions') || [];
      const all = S().persist()?.regions || [];
      d.applyItems = all.filter((r) => ids.includes(r.id));
    }
    const tab = document.querySelector('#survey-form-modal .dms-tabs__tab.is-active');
    if (tab && tab.dataset.tab != null) d.tab = Number(tab.dataset.tab);
    d._dirty = true;
  }

  function renderApplyTable(d, locked) {
    const type = d.applyType;
    if (!type) return '<p class="dms-text-secondary">Chọn điều kiện áp dụng để hiển thị danh sách.</p>';
    if (type === 'REGION') {
      const values = (d.applyItems || []).map((x) => x.id);
      return DMS.render('MultiSelect', {
        id: 'sv-f-regions',
        label: 'Vùng / Khu vực',
        placeholder: 'Chọn vùng',
        values,
        options: S().regionOptions(),
        disabled: locked && formMode() === 'view'
      });
    }
    const items = d.applyItems || [];
    const noun = type === 'EMPLOYEE' ? 'nhân viên' : (type === 'ROUTE' ? 'tuyến' : 'điểm bán');
    const cols = type === 'EMPLOYEE'
      ? [
          { key: 'code', title: 'Mã nhân viên', render: (v) => S().copyCell(v, DMS.escape(v)) },
          { key: 'name', title: 'Tên nhân viên' },
          { key: 'manager', title: 'Quản lý trực tiếp', render: (v) => v ? S().copyCell(v, DMS.escape(v)) : '' },
          { key: 'phone', title: 'Số điện thoại' },
          { key: 'role', title: 'Chức vụ', render: (v) => DMS.render('Tag', { text: v || '', type: 'blue' }) },
          { key: 'status', title: 'Trạng thái' }
        ]
      : type === 'ROUTE'
        ? [
            { key: 'code', title: 'Mã tuyến', render: (v) => S().copyCell(v, DMS.escape(v)) },
            { key: 'name', title: 'Tên tuyến' },
            { key: 'employeeCode', title: 'Mã nhân viên' },
            { key: 'employeeName', title: 'Họ tên' },
            { key: 'region', title: 'Vùng' },
            { key: 'area', title: 'Khu vực' }
          ]
        : [
            { key: 'required', title: 'Bắt buộc', render: (v, row) => DMS.render('Checkbox', { checked: !!v, disabled: formMode() === 'view', id: 'sv-store-req-' + row.id }) },
            { key: 'code', title: 'Mã điểm bán', render: (v) => S().copyCell(v, DMS.escape(v)) },
            { key: 'name', title: 'Tên điểm bán' },
            { key: 'phone', title: 'Số điện thoại' },
            { key: 'address', title: 'Địa chỉ' },
            { key: 'status', title: 'Trạng thái' }
          ];
    if (formMode() !== 'view') {
      cols.push({
        key: 'del', title: 'Tùy chỉnh',
        render: (_, row) => `<div class="dms-action-buttons">${actionBtn('sv-apply-del', row.id, true, 'delete', 'Xóa')}</div>`
      });
    }
    const table = items.length
      ? DMS.render('Table', { columns: cols, data: items })
      : `<div class="dms-table-wrapper">${DMS.render('EmptyState', { title: 'Trống' })}</div>`;
    const view = formMode() === 'view';
    return `<div class="survey-apply-toolbar">
      ${view ? '' : DMS.render('Button', { text: 'Thêm', type: 'primary', dataAction: 'sv-apply-add' })}
      ${view ? '' : DMS.render('Button', { text: 'Import Excel', type: 'default', dataAction: 'sv-apply-import' })}
      ${view || !items.length ? '' : `<button type="button" class="survey-clear-link" data-action="sv-apply-clear">Xóa tất cả ${items.length} ${noun}</button>`}
    </div>${table}`;
  }

  function renderTabBasic(d, mode) {
    const locked = !!d._locked && mode === 'edit';
    const ro = mode === 'view' || locked;
    const err = d._errors || {};
    const applyOpts = S().applyOptions(d.audience);
    const checkin = d.audience === 'STORE'
      ? `<div class="display-form-grid__full">${DMS.render('Checkbox', { id: 'sv-f-checkin', checked: !!d.requireCheckin, disabled: ro, label: 'Bắt buộc Checkin' })}</div>`
      : '';
    return `<div class="display-form-grid">
      <div class="display-form-grid__full ${err.title ? 'survey-is-error' : ''}">
        ${DMS.render('Input', { id: 'sv-f-title', label: 'Tiêu đề', requiredMark: true, value: d.title, placeholder: 'Nhập tiêu đề khảo sát', disabled: ro, maxlength: 250 })}
        ${S().fieldErr(err, 'title')}
      </div>
      <div class="${err.startDate || err.endDate ? 'survey-is-error' : ''}">
        <label class="dms-form-item__label is-required">Thời gian</label>
        <div class="survey-date-range">
          ${DMS.render('DatePicker', { id: 'sv-f-from', placeholder: 'Ngày bắt đầu', value: d.startDate, disabled: ro })}
          <span class="survey-date-range__sep">→</span>
          ${DMS.render('DatePicker', { id: 'sv-f-to', placeholder: 'Ngày kết thúc', value: d.endDate, disabled: ro })}
        </div>
        ${S().fieldErr(err, 'startDate')}${S().fieldErr(err, 'endDate')}
      </div>
      <div class="${err.times ? 'survey-is-error' : ''}">
        ${DMS.render('Input', { id: 'sv-f-times', type: 'number', label: 'Số lần khảo sát', requiredMark: true, value: String(d.times || 1), disabled: ro })}
        ${S().fieldErr(err, 'times')}
      </div>
      <div class="${err.audience ? 'survey-is-error' : ''}">
        ${DMS.render('Select', { id: 'sv-f-audience', label: 'Đối tượng khảo sát', requiredMark: true, placeholder: 'Chọn đối tượng khảo sát', value: d.audience, options: S().AUDIENCES, disabled: ro })}
        ${S().fieldErr(err, 'audience')}
      </div>
      <div class="${err.applyType ? 'survey-is-error' : ''}">
        ${DMS.render('Select', { id: 'sv-f-apply', label: 'Điều kiện áp dụng', requiredMark: true, placeholder: 'Chọn điều kiện áp dụng', value: d.applyType, options: applyOpts, disabled: ro || !d.audience })}
        ${S().fieldErr(err, 'applyType')}
      </div>
      ${checkin}
      <div class="display-form-grid__full">${renderApplyTable(d, ro)}</div>
    </div>`;
  }

  function renderQuestionSettings(d, mode) {
    const qs = d.questions || [];
    const i = Math.min(d.activeQuestion || 0, Math.max(0, qs.length - 1));
    const q = qs[i] || S().emptyQuestion(1);
    const ro = mode === 'view' || (!!d._locked && mode === 'edit');
    const err = d._errors || {};
    let extra = '';
    if (q.type === 'TEXT' || q.type === 'NUMBER') {
      extra = `<div class="display-form-grid">
        ${DMS.render('Input', { id: 'sv-q-min', type: 'number', label: 'Giá trị tối thiểu', value: String(q.min || 1), disabled: ro })}
        ${DMS.render('Input', { id: 'sv-q-max', type: 'number', label: 'Giá trị tối đa', value: String(q.max || 1000), disabled: ro })}
      </div>${S().fieldErr(err, 'qminmax-' + i)}`;
    }
    if (q.type === 'YESNO') {
      extra = `${DMS.render('Checkbox', { id: 'sv-q-other', checked: !!q.allowOther, disabled: ro, label: 'Thêm lựa chọn khác' })}
        ${DMS.render('Input', { id: 'sv-q-true', label: 'Nhãn Đúng', value: q.trueLabel || 'Đúng', disabled: ro })}
        ${DMS.render('Input', { id: 'sv-q-false', label: 'Nhãn Sai', value: q.falseLabel || 'Sai', disabled: ro })}
        ${q.allowOther ? DMS.render('Input', { value: 'Khác', label: 'Khác', disabled: true }) : ''}`;
    }
    if (q.type === 'SINGLE' || q.type === 'MULTI') {
      const opts = (q.options && q.options.length ? q.options : [{ id: S().uid('o'), label: '' }]);
      extra = `<div>
        ${opts.map((o) => `<div class="survey-option-row">
          <input class="dms-input" data-sv-opt="${DMS.escape(o.id)}" value="${DMS.escape(o.label || '')}" placeholder="Tên lựa chọn" ${ro ? 'disabled' : ''} />
          ${ro || opts.length <= 1 ? '' : DMS.render('ActionIconButton', { type: 'delete', title: 'Xóa', dataAction: 'sv-opt-del-' + o.id })}
        </div>`).join('')}
        ${S().fieldErr(err, 'qopt-' + i)}
        ${ro ? '' : DMS.render('Button', { text: 'Thêm lựa chọn', type: 'default', size: 'sm', dataAction: 'sv-opt-add' })}
        <div class="dms-mt-sm">${DMS.render('Checkbox', { id: 'sv-q-other', checked: !!q.allowOther, disabled: ro, label: 'Thêm lựa chọn khác' })}</div>
        ${q.allowOther ? `<div class="survey-option-row dms-mt-sm">${DMS.render('Input', { value: 'Khác', disabled: true })}</div>` : ''}
      </div>`;
    }
    if (q.type === 'IMAGE') {
      extra = `<div>
        <label class="dms-form-item__label is-required">Loại upload</label>
        ${DMS.render('Radio', { name: 'sv-q-upload', value: 'one', checked: q.uploadMode !== 'many', disabled: ro, label: 'Chọn một' })}
        ${DMS.render('Radio', { name: 'sv-q-upload', value: 'many', checked: q.uploadMode === 'many', disabled: ro, label: 'Chọn nhiều' })}
      </div>`;
    }
    const attach = q.type && q.type !== 'IMAGE'
      ? `<div class="dms-form-item"><label class="dms-form-item__label">Đính kèm ảnh</label>
          ${DMS.render('Button', { text: 'Tải ảnh lên', type: 'default', size: 'sm', dataAction: 'sv-q-upload', disabled: ro })}
          <span class="dms-text-secondary"> Tối đa 5 hình, png/jpeg/jpg, 10Mb</span></div>`
      : '';
    return `<div class="survey-q-settings">
      <div class="survey-q-settings__head">Cài đặt câu hỏi</div>
      <div class="${err['qtype-' + i] ? 'survey-is-error' : ''}">
        ${DMS.render('Select', { id: 'sv-q-type', label: 'Kiểu câu hỏi', requiredMark: true, placeholder: 'Chọn kiểu câu hỏi.', value: q.type, options: S().QUESTION_TYPES, disabled: ro })}
        ${S().fieldErr(err, 'qtype-' + i)}
      </div>
      <div class="${err['qtitle-' + i] ? 'survey-is-error' : ''}">
        ${DMS.render('Input', { id: 'sv-q-title', label: 'Tiêu đề câu hỏi', requiredMark: true, placeholder: 'Nhập tiêu đề câu hỏi', value: q.title || '', disabled: ro })}
        ${S().fieldErr(err, 'qtitle-' + i)}
      </div>
      ${attach}
      ${DMS.render('Textarea', { id: 'sv-q-desc', label: 'Mô tả', placeholder: 'Nhập mô tả câu hỏi', value: q.desc || '', rows: 2, disabled: ro })}
      ${extra}
      <div class="dms-mt-sm">${DMS.render('Checkbox', { id: 'sv-q-req', checked: !!q.required, disabled: ro, label: 'Bắt buộc' })}</div>
      ${S().fieldErr(err, 'questions')}
    </div>`;
  }

  function renderTabQuestions(d, mode) {
    const qs = d.questions || [];
    const active = d.activeQuestion || 0;
    const ro = mode === 'view' || (!!d._locked && mode === 'edit');
    const list = qs.map((q, i) => `<div class="survey-q-item ${i === active ? 'is-active' : ''}" data-action="sv-q-sel-${i}">
      <span class="survey-q-item__title">${i + 1}. ${DMS.escape(q.title || ('Câu hỏi ' + (i + 1)))}</span>
      ${ro ? '' : DMS.render('ActionIconButton', { type: 'delete', title: 'Xóa', dataAction: 'sv-q-del-' + i })}
    </div>`).join('');
    return `<div class="survey-q-layout">
      <div class="survey-q-list">
        <div class="survey-q-list__head">Danh sách câu hỏi</div>
        <div class="survey-q-list__items">${list}</div>
        <div class="survey-q-list__add">${ro ? '' : DMS.render('Button', { text: '+ Thêm câu hỏi', type: 'default', dataAction: 'sv-q-add' })}</div>
      </div>
      ${renderQuestionSettings(d, mode)}
    </div>`;
  }

  function renderPreviewBody(itemOrDraft) {
    const qs = itemOrDraft.questions || [];
    if (!qs.length) return DMS.render('EmptyState', { title: 'Trống' });
    return qs.map((q, i) => {
      const req = q.required ? ' <span class="is-req">*</span>' : '';
      let control = '';
      if (q.type === 'TEXT') control = DMS.render('Input', { placeholder: 'Nhập câu trả lời', disabled: true });
      else if (q.type === 'NUMBER') control = DMS.render('Input', { type: 'number', placeholder: 'Nhập số', disabled: true });
      else if (q.type === 'YESNO') {
        control = `${DMS.render('Radio', { name: 'pv-' + i, label: q.trueLabel || 'Đúng', disabled: true })}
          ${DMS.render('Radio', { name: 'pv-' + i, label: q.falseLabel || 'Sai', disabled: true })}
          ${q.allowOther ? DMS.render('Radio', { name: 'pv-' + i, label: 'Khác', disabled: true }) : ''}`;
      } else if (q.type === 'SINGLE') {
        control = (q.options || []).map((o) => DMS.render('Radio', { name: 'pv-' + i, label: o.label || 'Lựa chọn', disabled: true })).join('')
          + (q.allowOther ? DMS.render('Radio', { name: 'pv-' + i, label: 'Khác', disabled: true }) : '');
      } else if (q.type === 'MULTI') {
        control = (q.options || []).map((o) => DMS.render('Checkbox', { label: o.label || 'Lựa chọn', disabled: true })).join('')
          + (q.allowOther ? DMS.render('Checkbox', { label: 'Khác', disabled: true }) : '');
      } else if (q.type === 'IMAGE') {
        control = `<div class="dms-text-secondary">${q.uploadMode === 'many' ? 'Tối đa 10 ảnh' : '1 ảnh'} (png/jpeg/jpg)</div>`;
      } else control = '<span class="dms-text-secondary">Chưa chọn kiểu câu hỏi</span>';
      return `<div class="survey-preview-q">
        <div class="survey-preview-q__title">${i + 1}. ${DMS.escape(S().qTypeLabel(q.type) || 'Câu hỏi')} - ${DMS.escape(q.title || '')}${req}</div>
        ${q.desc ? `<p class="dms-text-secondary">${DMS.escape(q.desc)}</p>` : ''}
        ${control}
      </div>`;
    }).join('');
  }

  function renderFormModal(d, mode) {
    const tabs = DMS.render('Tabs', {
      active: d.tab || 0,
      tabs: [
        { label: 'Thông tin cơ bản', content: renderTabBasic(d, mode) },
        { label: 'Câu hỏi khảo sát', content: renderTabQuestions(d, mode) }
      ]
    });
    const footer = mode === 'view'
      ? DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'modal-close' })
      : `${DMS.render('Button', { text: 'Preview', type: 'default', dataAction: 'sv-form-preview' })}
         ${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'modal-close' })}
         ${DMS.render('Button', { text: 'Lưu', type: 'primary', dataAction: 'sv-save' })}`;
    return DMS.render('Modal', {
      id: 'survey-form-modal',
      title: formTitle(mode),
      size: 'xl',
      body: `<div class="survey-modal-body">${tabs}</div>`,
      footer
    });
  }

  function renderPreviewModal(body) {
    return DMS.render('Modal', {
      id: 'survey-preview-modal',
      title: 'Preview',
      size: 'lg',
      body: `<div class="survey-modal-body">${body}</div>`,
      footer: DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'sv-preview-close' })
    });
  }

  async function renderSurveySetting() {
    const store = await S().loadStore();
    const st = settingState();
    const mode = formMode();
    const params = S().queryParams();
    const id = params.get('id') || '';
    const previewId = params.get('preview') || '';
    if ((mode === 'edit' || mode === 'copy') && id) {
      const item = S().findSurvey(id);
      if (item && S().getDraft()._src !== mode + id) S().loadDraft(item, mode);
    }
    if (mode === 'create' && S().getDraft()._src !== 'create') {
      S().resetDraft();
      S().getDraft()._src = 'create';
    }
    if (mode === 'view' && id) {
      const item = S().findSurvey(id);
      if (item && S().getDraft()._src !== 'view' + id) S().loadDraft(item, 'view');
    }
    const filter = DMS.render('FilterPanel', {
      title: 'Tìm kiếm theo',
      fields: [
        { type: 'search', id: 'sv-q', label: 'Bộ khảo sát', placeholder: 'Tìm kiếm theo mã khảo sát, tên khảo sát', value: st.q },
        { type: 'date', id: 'sv-from', label: 'Thời gian từ', placeholder: 'Ngày bắt đầu', value: st.from },
        { type: 'date', id: 'sv-to', label: 'Thời gian đến', placeholder: 'Ngày kết thúc', value: st.to },
        { type: 'select', id: 'sv-status', label: 'Trạng thái', placeholder: 'Chọn trạng thái', value: st.status, options: S().STATUSES },
        { type: 'select', id: 'sv-audience', label: 'Đối tượng khảo sát', placeholder: 'Chọn đối tượng khảo sát', value: st.audience, options: S().AUDIENCES }
      ]
    });
    const card = DMS.render('Card', {
      title: 'Danh sách bộ khảo sát',
      extra: DMS.render('Button', { text: '+ Tạo mới', type: 'primary', dataAction: 'sv-create' }),
      body: `<div id="sv-setting-body">${renderSettingBody(store)}</div>`
    });
    let overlay = '';
    if (mode) overlay += renderFormModal(S().getDraft(), mode);
    if (previewId) {
      const item = S().findSurvey(previewId);
      overlay += renderPreviewModal(item ? renderPreviewBody(item) : DMS.render('EmptyState', { title: 'Trống' }));
    }
    return `<div class="display-page survey-page" data-survey-setting>
      ${S().breadcrumb('Bộ Khảo Sát')}
      <div class="dms-page-header"><h1 class="dms-page-header__title">Bộ Khảo Sát</h1></div>
      ${filter}${card}${overlay}
    </div>`;
  }

  function closeFormIfDirty() {
    const d = S().getDraft();
    const go = () => { S().resetDraft(); remountSetting({ mode: '', id: '', preview: '' }); };
    if (formMode() !== 'view' && S().draftIsDirty(d)) {
      DMS.get('Dialog').confirm('Màn hình đã có dữ liệu, bạn có muốn thoát?', go);
    } else go();
  }

  function openPicker() {
    const d = S().getDraft();
    const type = d.applyType;
    const master = S().masterList(type);
    const selected = new Set((d.applyItems || []).map((x) => x.id));
    const noun = type === 'EMPLOYEE' ? 'nhân viên' : (type === 'ROUTE' ? 'tuyến bán hàng' : 'điểm bán');
    const cols = [
      { key: 'pick', title: '', render: (_, row) => `<input type="checkbox" data-pick="${DMS.escape(row.id)}" ${selected.has(row.id) ? 'checked' : ''} />` },
      { key: 'code', title: 'Mã' },
      { key: 'name', title: 'Tên' }
    ];
    const el = DMS.get('Modal').show({
      id: 'survey-picker-modal',
      title: 'Thêm ' + noun,
      size: 'lg',
      body: `<div class="survey-apply-toolbar">
        ${DMS.render('Input', { id: 'sv-pick-q', placeholder: 'Tìm kiếm' })}
        ${DMS.render('Button', { text: 'Tìm kiếm', type: 'primary', dataAction: 'sv-pick-search' })}
      </div>
      <div id="sv-pick-table">${DMS.render('Table', { columns: cols, data: master })}</div>`,
      footer: `${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'modal-close' })}
        ${DMS.render('Button', { text: 'Lưu', type: 'primary', dataAction: 'sv-pick-save' })}`
    });
    const paint = (q) => {
      const kw = (q || '').trim().toLowerCase();
      const rows = master.filter((x) => !kw || (x.code + ' ' + x.name + ' ' + (x.phone || '')).toLowerCase().includes(kw));
      el.querySelector('#sv-pick-table').innerHTML = DMS.render('Table', { columns: cols, data: rows });
    };
    el.addEventListener('click', (e) => {
      if (e.target.closest('[data-action="sv-pick-search"]')) {
        paint(el.querySelector('#sv-pick-q')?.value || '');
        return;
      }
      if (!e.target.closest('[data-action="sv-pick-save"]')) return;
      const ids = [...el.querySelectorAll('[data-pick]:checked')].map((i) => i.getAttribute('data-pick'));
      const map = {};
      (d.applyItems || []).forEach((x) => { map[x.id] = x; });
      ids.forEach((id) => {
        const src = master.find((x) => x.id === id);
        if (src) map[id] = Object.assign({}, map[id] || {}, src);
      });
      d.applyItems = Object.keys(map).filter((id) => ids.includes(id)).map((id) => map[id]);
      d._dirty = true;
      el.remove();
      remountSetting();
    });
  }

  function bindForm(container) {
    const modal = container.querySelector('#survey-form-modal');
    if (!modal) return;
    modal.addEventListener('click', (e) => {
      if (e.target.closest('[data-action="modal-close"]') || e.target.id === 'survey-form-modal') {
        closeFormIfDirty();
        return;
      }
      const d = S().getDraft();
      const mode = formMode();
      if (e.target.closest('[data-action="sv-form-preview"]')) {
        readDraftFromDom(d);
        const wrap = document.createElement('div');
        wrap.innerHTML = renderPreviewModal(renderPreviewBody(d));
        document.body.appendChild(wrap.firstElementChild);
        return;
      }
      if (e.target.closest('[data-action="sv-q-add"]')) {
        readDraftFromDom(d);
        d.questions.push(S().emptyQuestion(d.questions.length + 1));
        d.activeQuestion = d.questions.length - 1;
        remountSetting();
        return;
      }
      const delQ = e.target.closest('[data-action^="sv-q-del-"]');
      if (delQ) {
        e.stopPropagation();
        readDraftFromDom(d);
        const idx = Number(delQ.getAttribute('data-action').replace('sv-q-del-', ''));
        d.questions.splice(idx, 1);
        if (!d.questions.length) d.questions.push(S().emptyQuestion(1));
        d.activeQuestion = Math.max(0, Math.min(d.activeQuestion, d.questions.length - 1));
        remountSetting();
        return;
      }
      const selQ = e.target.closest('[data-action^="sv-q-sel-"]');
      if (selQ) {
        readDraftFromDom(d);
        d.activeQuestion = Number(selQ.getAttribute('data-action').replace('sv-q-sel-', ''));
        remountSetting();
        return;
      }
      if (e.target.closest('[data-action="sv-opt-add"]')) {
        readDraftFromDom(d);
        const q = d.questions[d.activeQuestion];
        if (q) { q.options = q.options || []; q.options.push({ id: S().uid('o'), label: '' }); }
        remountSetting();
        return;
      }
      const delO = e.target.closest('[data-action^="sv-opt-del-"]');
      if (delO) {
        readDraftFromDom(d);
        const oid = delO.getAttribute('data-action').replace('sv-opt-del-', '');
        const q = d.questions[d.activeQuestion];
        if (q) q.options = (q.options || []).filter((o) => o.id !== oid);
        remountSetting();
        return;
      }
      if (e.target.closest('[data-action="sv-q-upload"]')) { toast('Tải ảnh (prototype) — không gọi API', 'info'); return; }
      if (e.target.closest('[data-action="sv-apply-add"]')) { readDraftFromDom(d); openPicker(); return; }
      if (e.target.closest('[data-action="sv-apply-import"]')) {
        readDraftFromDom(d);
        toast('Import Excel (prototype) — không gọi API', 'info');
        return;
      }
      if (e.target.closest('[data-action="sv-apply-clear"]')) {
        readDraftFromDom(d);
        DMS.get('Dialog').confirm('Bạn chắc chắn muốn xóa?', () => {
          d.applyItems = [];
          remountSetting();
        });
        return;
      }
      const delA = e.target.closest('[data-action^="sv-apply-del-"]');
      if (delA) {
        readDraftFromDom(d);
        const aid = delA.getAttribute('data-action').replace('sv-apply-del-', '');
        d.applyItems = (d.applyItems || []).filter((x) => x.id !== aid);
        remountSetting();
        return;
      }
      if (e.target.closest('[data-action="sv-save"]')) {
        readDraftFromDom(d);
        d._errors = S().validateDraft(d);
        if (Object.keys(d._errors).length) {
          const keys = Object.keys(d._errors);
          d.tab = keys.some((k) => k === 'questions' || k.startsWith('q')) ? 1 : 0;
          toast(d._errors.questions || 'Có lỗi xảy ra ở các ô nhập, vui lòng kiểm tra lại', 'error');
          remountSetting();
          return;
        }
        d._errors = {};
        const msg = mode === 'edit' ? 'Bạn có chắc chắn thao tác này không?' : 'Bạn có chắc chắn thao tác thêm mới hay không?';
        DMS.get('Dialog').confirm(msg, () => {
          S().saveSurvey(d, mode === 'edit' ? 'edit' : 'create');
          S().resetDraft();
          toast('Lưu thành công', 'success');
          remountSetting({ mode: '', id: '', preview: '' });
        });
      }
    });
    modal.addEventListener('change', (e) => {
      const id = e.target.id || '';
      if (id === 'sv-f-audience' || id === 'sv-f-apply' || id === 'sv-q-type' || id === 'sv-q-other') {
        const d = S().getDraft();
        readDraftFromDom(d);
        if (id === 'sv-f-audience') {
          const opts = S().applyOptions(d.audience).map((o) => o.value);
          if (!opts.includes(d.applyType)) { d.applyType = ''; d.applyItems = []; }
          if (d.audience !== 'STORE') d.requireCheckin = false;
        }
        if (id === 'sv-f-apply') d.applyItems = [];
        remountSetting();
      }
    });
    modal.addEventListener('blur', (e) => {
      if (e.target.id !== 'sv-f-times') return;
      e.target.value = String(S().clampTimes(e.target.value));
    }, true);
  }

  renderSurveySetting.onMount = function (container) {
    bindForm(container);
    container.addEventListener('click', (e) => {
      if (e.target.closest('[data-action="sv-preview-close"]') || e.target.id === 'survey-preview-modal') {
        const overlay = e.target.closest('.dms-modal-overlay');
        if (overlay && overlay.id === 'survey-preview-modal' && overlay.parentElement === document.body) {
          overlay.remove();
          return;
        }
        remountSetting({ mode: S().queryParams().get('mode') || '', id: S().queryParams().get('id') || '', preview: '' });
        return;
      }
      if (e.target.closest('[data-copy]')) {
        const t = e.target.closest('[data-copy]').getAttribute('data-copy');
        if (navigator.clipboard) navigator.clipboard.writeText(t);
        toast('Đã sao chép', 'success');
        return;
      }
      if (e.target.closest('[data-action="filter-search"]')) {
        readSettingFilters();
        remountSetting({ mode: '', id: '', preview: '' });
        return;
      }
      if (e.target.closest('[data-action="filter-reset"]')) {
        const d = todayRange();
        window.__surveySettingState = { q: '', status: '', audience: '', from: d.from, to: d.to, page: 1, pageSize: settingState().pageSize };
        remountSetting({ mode: '', id: '', preview: '' });
        return;
      }
      if (e.target.closest('[data-action="sv-create"]')) {
        S().resetDraft();
        S().getDraft()._src = 'create';
        remountSetting({ mode: 'create', id: '', preview: '' });
        return;
      }
      const tog = e.target.closest('[data-action^="sv-toggle-"]');
      if (tog) {
        e.preventDefault();
        e.stopPropagation();
        const id = tog.getAttribute('data-action').replace('sv-toggle-', '');
        const item = S().findSurvey(id);
        if (!item) return;
        DMS.get('Dialog').confirm('Bạn có chắc chắn muốn thay đổi trạng thái?', () => {
          item.status = item.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
          item.updatedAt = S().nowLabel();
          item.updatedBy = 'THAO999';
          toast('Cập nhật thành công', 'success');
          remountSetting({ mode: '', id: '', preview: '' });
        });
        return;
      }
      const act = e.target.closest('[data-action]');
      if (!act) {
        const pageBtn = e.target.closest('[data-page]');
        if (pageBtn) { settingState().page = Number(pageBtn.getAttribute('data-page')); remountSetting({ mode: '', id: '', preview: '' }); }
        return;
      }
      const a = act.getAttribute('data-action') || '';
      const editM = a.match(/^sv-edit-(.+)$/);
      const copyM = a.match(/^sv-copy-(.+)$/);
      const prevM = a.match(/^sv-preview-(.+)$/);
      if (editM) { remountSetting({ mode: 'edit', id: editM[1], preview: '' }); return; }
      if (copyM) { remountSetting({ mode: 'copy', id: copyM[1], preview: '' }); return; }
      if (prevM) { remountSetting({ mode: '', id: '', preview: prevM[1] }); return; }
    });
    container.addEventListener('change', (e) => {
      if (e.target.closest('.dms-pagination__size select')) {
        settingState().pageSize = Number(e.target.value) || 10;
        settingState().page = 1;
        remountSetting({ mode: '', id: '', preview: '' });
      }
    });
  };

  /* ========== REPORT ========== */
  function filterReport(store, st) {
    const survey = S().findSurvey(st.surveyId);
    if (!survey) return [];
    const from = S().parseDmy(st.from);
    const to = S().parseDmy(st.to);
    const regionIds = st.regions || [];
    const regionNames = new Set((store.regions || []).filter((r) => regionIds.includes(r.id)).map((r) => r.name));
    return (store.reportRows || []).filter((row) => {
      if (row.surveyId !== st.surveyId) return false;
      if (regionNames.size && !regionNames.has(row.region) && !regionNames.has(row.area)) return false;
      const dates = row.performedDates || [];
      if (from && to && dates.length && !dates.some((ds) => S().inRange(ds, from, to))) return false;
      return true;
    }).map((row) => Object.assign({}, row, {
      surveyCode: survey.code,
      surveyTitle: survey.title,
      startDate: survey.startDate,
      endDate: survey.endDate,
      ratio: `${row.resultCount}/${row.times}`
    }));
  }
  function reportColumns() {
    return [
      {
        key: 'employeeCode', title: 'Mã nhân viên',
        render: (v, row) => S().copyCell(v, `<a class="dms-table__link" data-action="sv-emp-${row.id}">${DMS.escape(v)}</a>`)
      },
      { key: 'employeeName', title: 'Tên nhân viên' },
      { key: 'region', title: 'Vùng', render: (v) => DMS.render('Tag', { text: v || '', type: 'blue' }) },
      { key: 'area', title: 'Khu vực', render: (v) => DMS.render('Tag', { text: v || '', type: 'green' }) },
      { key: 'surveyCode', title: 'Mã khảo sát' },
      { key: 'surveyTitle', title: 'Tên khảo sát', render: (v) => `<span class="survey-title-cell" title="${DMS.escape(v)}">${DMS.escape(v)}</span>` },
      { key: 'startDate', title: 'Từ ngày' },
      { key: 'endDate', title: 'Đến ngày' },
      { key: 'ratio', title: 'Số kết quả khảo sát/Số lần khảo sát' }
    ];
  }
  function renderReportBody(store) {
    const st = reportState();
    if (!st.surveyId) {
      return `<div class="dms-table-wrapper">${DMS.render('EmptyState', { title: 'Trống' })}</div>`;
    }
    const filtered = filterReport(store, st);
    const total = filtered.length;
    const pages = Math.max(1, Math.ceil(total / st.pageSize) || 1);
    if (st.page > pages) st.page = pages;
    const start = (st.page - 1) * st.pageSize;
    const rows = filtered.slice(start, start + st.pageSize);
    const table = rows.length
      ? DMS.render('Table', { columns: reportColumns(), data: rows })
      : `<div class="dms-table-wrapper">${DMS.render('EmptyState', { title: 'Trống', icon: '📭' })}</div>`;
    const pag = rows.length || total ? DMS.render('Pagination', { current: st.page, pageSize: st.pageSize, total, unit: 'dòng' }) : '';
    return table + pag;
  }
  function readReportFilters() {
    const st = reportState();
    st.surveyId = document.getElementById('sv-rp-survey')?.value || '';
    st.from = document.getElementById('sv-rp-from')?.value || '';
    st.to = document.getElementById('sv-rp-to')?.value || '';
    st.regions = DMS.get('MultiSelect').getValues('sv-rp-region') || [];
    st.page = 1;
  }
  function qaBlock(detail) {
    const answers = detail.answers || [];
    return answers.map((a) => {
      const req = a.required ? ' <span class="is-req">*</span>' : '';
      let ans = DMS.escape(a.answer || '');
      if (a.images && a.images.length) {
        ans = a.images.map((img) => `<span class="survey-img-link" data-img="${DMS.escape(img)}">${DMS.escape(img)}</span>`).join('; ');
      }
      return `<div class="survey-qa">
        <div class="survey-qa__q">${a.index}. ${DMS.escape(a.qType)} - ${DMS.escape(a.question)}${req}</div>
        <div class="survey-qa__a">${ans || ''}</div>
      </div>`;
    }).join('');
  }
  function renderDetailModal(row) {
    const kind = row.kind;
    const details = (row.details || []).slice().sort((a, b) => (a.performedAt || '').localeCompare(b.performedAt || ''));
    let cols;
    let data;
    if (kind === 'STORE') {
      data = details;
      cols = [
        { key: 'storeCode', title: 'Mã Điểm bán', render: (v) => S().copyCell(v, DMS.escape(v || '')) },
        { key: 'storeName', title: 'Tên Điểm bán' },
        { key: 'times', title: 'Lần thực hiện khảo sát' },
        { key: 'performedAt', title: 'Ngày thực hiện' },
        {
          key: 'checkinImage', title: 'Hình ảnh checkin',
          render: (v) => v ? `<span class="survey-checkin-thumb survey-img-link" data-img="${DMS.escape(v)}" title="${DMS.escape(v)}">IMG</span>` : ''
        },
        { key: 'q', title: 'Câu hỏi khảo sát', render: (_, r) => `<div class="survey-qa">${(r.answers || []).map((a) => `<div class="survey-qa__q">${a.index}. ${DMS.escape(a.qType)} - ${DMS.escape(a.question)}${a.required ? ' <span class="is-req">*</span>' : ''}</div>`).join('')}</div>` },
        { key: 'a', title: 'Câu trả lời khảo sát', render: (_, r) => `<div class="survey-qa">${(r.answers || []).map((a) => {
          const ans = (a.images || []).length
            ? a.images.map((img) => `<span class="survey-img-link" data-img="${DMS.escape(img)}">${DMS.escape(img)}</span>`).join('; ')
            : DMS.escape(a.answer || '');
          return `<div class="survey-qa__a">${ans}</div>`;
        }).join('')}</div>` }
      ];
    } else {
      data = details;
      cols = [
        { key: 'performedAt', title: 'Ngày thực hiện' },
        { key: 'times', title: 'Lần thực hiện khảo sát' },
        { key: 'q', title: 'Câu hỏi khảo sát', render: (_, r) => `<div class="survey-qa">${(r.answers || []).map((a) => `<div class="survey-qa__q">${a.index}. ${DMS.escape(a.qType)} - ${DMS.escape(a.question)}${a.required ? ' <span class="is-req">*</span>' : ''}</div>`).join('')}</div>` },
        { key: 'a', title: 'Câu trả lời khảo sát', render: (_, r) => `<div class="survey-qa">${(r.answers || []).map((a) => {
          const ans = (a.images || []).length
            ? a.images.map((img) => `<span class="survey-img-link" data-img="${DMS.escape(img)}">${DMS.escape(img)}</span>`).join('; ')
            : DMS.escape(a.answer || '');
          return `<div class="survey-qa__a">${ans}</div>`;
        }).join('')}</div>` }
      ];
    }
    const title = kind === 'STORE' ? 'Danh sách khảo sát điểm bán' : 'Danh sách khảo sát nhân viên';
    const table = data.length
      ? DMS.render('Table', { columns: cols, data })
      : DMS.render('EmptyState', { title: 'Trống' });
    return DMS.render('Modal', {
      id: 'survey-detail-modal',
      title: `${title} — ${row.employeeCode} ${row.employeeName || ''}`,
      size: 'xl',
      body: `<div class="survey-modal-body">${table}</div>`,
      footer: `${DMS.render('Button', { text: 'Xuất Excel', type: 'default', dataAction: 'sv-detail-export' })}
        ${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'sv-detail-close' })}`
    });
  }
  function renderExportModal(st) {
    return DMS.render('Modal', {
      id: 'survey-export-modal',
      title: 'Xuất Excel',
      size: 'md',
      body: `<div id="sv-ex-err" class="dms-form-item__error" hidden></div>
        ${DMS.render('Select', { id: 'sv-ex-survey', label: 'Chọn khảo sát', requiredMark: true, placeholder: 'Chọn khảo sát', value: st.surveyId, options: S().surveyOptions() })}
        <label class="dms-form-item__label is-required">Thời gian thực hiện khảo sát</label>
        <div class="survey-date-range">
          ${DMS.render('DatePicker', { id: 'sv-ex-from', placeholder: 'Từ ngày', value: st.from })}
          <span class="survey-date-range__sep">→</span>
          ${DMS.render('DatePicker', { id: 'sv-ex-to', placeholder: 'Đến ngày', value: st.to })}
        </div>`,
      footer: `${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'sv-export-close' })}
        ${DMS.render('Button', { text: 'Xuất dữ liệu', type: 'primary', dataAction: 'sv-export-ok' })}`
    });
  }

  async function renderSurveyReport() {
    const store = await S().loadStore();
    const st = reportState();
    if (!st.surveyId) {
      const latest = S().latestSurvey();
      if (latest) st.surveyId = latest.id;
    }
    const err = st._error ? `<div class="dms-form-item__error">${DMS.escape(st._error)}</div>` : '';
    const filter = DMS.render('FilterPanel', {
      title: 'Tìm kiếm theo',
      fields: [
        { type: 'select', id: 'sv-rp-survey', label: 'Bộ khảo sát', requiredMark: true, placeholder: 'Chọn bộ khảo sát', value: st.surveyId, options: S().surveyOptions() },
        { type: 'date', id: 'sv-rp-from', label: 'Thời gian thực hiện từ', placeholder: 'Từ ngày', value: st.from },
        { type: 'date', id: 'sv-rp-to', label: 'Thời gian thực hiện đến', placeholder: 'Đến ngày', value: st.to },
        { type: 'multiselect', id: 'sv-rp-region', label: 'Vùng/Khu Vực', placeholder: 'Chọn vùng, khu vực', values: st.regions, options: S().regionOptions() }
      ]
    });
    const card = DMS.render('Card', {
      title: 'Danh sách khảo sát',
      extra: DMS.render('Button', { text: 'Xuất Excel', type: 'default', dataAction: 'sv-export' }),
      body: `<div id="sv-report-body">${err}${renderReportBody(store)}</div>`
    });
    let overlay = '';
    if (st._detailId) {
      const row = (store.reportRows || []).find((r) => r.id === st._detailId);
      if (row) overlay += renderDetailModal(Object.assign({}, row, {
        surveyCode: S().findSurvey(row.surveyId)?.code,
        employeeName: row.employeeName
      }));
    }
    if (st._export) overlay += renderExportModal(st);
    return `<div class="display-page survey-page" data-survey-report>
      ${S().breadcrumb('Thống Kê Khảo Sát')}
      <div class="dms-page-header"><h1 class="dms-page-header__title">Thống Kê Khảo Sát</h1></div>
      ${filter}${card}${overlay}
    </div>`;
  }

  renderSurveyReport.onMount = function (container) {
    container.addEventListener('click', (e) => {
      if (e.target.closest('[data-copy]')) {
        const t = e.target.closest('[data-copy]').getAttribute('data-copy');
        if (navigator.clipboard) navigator.clipboard.writeText(t);
        toast('Đã sao chép', 'success');
        return;
      }
      if (e.target.closest('.survey-img-link')) {
        const img = e.target.closest('.survey-img-link').getAttribute('data-img');
        DMS.get('Modal').show({
          id: 'survey-img-modal', title: 'Hình ảnh', size: 'md',
          body: `<div class="survey-checkin-thumb" style="width:100%;height:240px">${DMS.escape(img || '')}</div>
            <p class="dms-text-secondary">Prototype: không tải file production.</p>`,
          footer: DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'modal-close' })
        });
        return;
      }
      if (e.target.closest('[data-action="filter-search"]')) {
        readReportFilters();
        const st = reportState();
        st._error = '';
        if (!st.surveyId) {
          st._error = 'Bắt buộc phải chọn 1 bộ khảo sát';
          toast('Bắt buộc phải chọn bộ khảo sát', 'error');
        }
        st._detailId = '';
        st._export = false;
        remountReport();
        return;
      }
      if (e.target.closest('[data-action="filter-reset"]')) {
        const m = S().monthRange();
        const latest = S().latestSurvey();
        window.__surveyReportState = { surveyId: latest ? latest.id : '', from: m.from, to: m.to, regions: [], page: 1, pageSize: 10 };
        remountReport();
        return;
      }
      if (e.target.closest('[data-action="sv-export"]')) {
        reportState()._export = true;
        remountReport();
        return;
      }
      if (e.target.closest('[data-action="sv-export-close"]') || e.target.id === 'survey-export-modal') {
        reportState()._export = false;
        remountReport();
        return;
      }
      if (e.target.closest('[data-action="sv-export-ok"]')) {
        const sid = document.getElementById('sv-ex-survey')?.value || '';
        const from = document.getElementById('sv-ex-from')?.value || '';
        const to = document.getElementById('sv-ex-to')?.value || '';
        const err = document.getElementById('sv-ex-err');
        if (!sid) {
          if (err) { err.hidden = false; err.textContent = 'Vui lòng chọn một khảo sát trước khi Xuất dữ liệu.'; }
          return;
        }
        const f = S().parseDmy(from);
        const t = S().parseDmy(to);
        if (f && t && f.getTime() > t.getTime()) {
          if (err) { err.hidden = false; err.textContent = 'Ngày bắt đầu không thể sau ngày kết thúc'; }
          return;
        }
        if (f && t && S().monthsApart(f, t) > 3) {
          if (err) { err.hidden = false; err.textContent = 'Khoảng thời gian xuất không vượt quá 3 tháng'; }
          return;
        }
        reportState()._export = false;
        toast('Đã xuất Excel (prototype)', 'success');
        remountReport();
        return;
      }
      if (e.target.closest('[data-action="sv-detail-close"]') || e.target.id === 'survey-detail-modal') {
        reportState()._detailId = '';
        remountReport();
        return;
      }
      if (e.target.closest('[data-action="sv-detail-export"]')) {
        toast('Đã xuất Excel chi tiết (prototype)', 'success');
        return;
      }
      const emp = e.target.closest('[data-action^="sv-emp-"]');
      if (emp) {
        reportState()._detailId = emp.getAttribute('data-action').replace('sv-emp-', '');
        remountReport();
        return;
      }
      const pageBtn = e.target.closest('[data-page]');
      if (pageBtn) { reportState().page = Number(pageBtn.getAttribute('data-page')); remountReport(); }
    });
    container.addEventListener('change', (e) => {
      if (e.target.closest('.dms-pagination__size select')) {
        reportState().pageSize = Number(e.target.value) || 10;
        reportState().page = 1;
        remountReport();
      }
    });
  };

  window.renderSurveySetting = renderSurveySetting;
  window.renderSurveyReport = renderSurveyReport;
  window.renderSurvey = renderSurveySetting;
})();
