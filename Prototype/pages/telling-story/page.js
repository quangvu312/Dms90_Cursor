/**
 * Telling Story — Quản lý danh mục + Quản lý nội dung (CMS)
 */
(function () {
  'use strict';

  function toast(msg, type) { DMS.get('Toast').show(msg, type || 'info'); }
  function S() { return TellingStoryShared; }
  function store() { return S().persist(); }

  function urlOf(path, extra) {
    const p = S().queryParams();
    const next = Object.assign({ mode: p.get('mode') || '', id: p.get('id') || '' }, extra || {});
    const q = [];
    if (next.mode) q.push('mode=' + encodeURIComponent(next.mode));
    if (next.id) q.push('id=' + encodeURIComponent(next.id));
    return path + (q.length ? '?' + q.join('&') : '');
  }
  function go(path, extra, replace) { DMSRouter.navigate(urlOf(path, extra), !!replace); }

  function catState() {
    if (!window.__tsCatSt) window.__tsCatSt = { q: '', status: '', page: 1, pageSize: 10 };
    return window.__tsCatSt;
  }
  function storyState() {
    if (!window.__tsStorySt) {
      window.__tsStorySt = {
        q: '', catalogId: '', product: '', tag: '', brand: '', channel: '', region: '',
        from: '', to: '', status: '', approval: '', collapsed: true, page: 1, pageSize: 10
      };
    }
    return window.__tsStorySt;
  }

  function paginate(rows, st, unit) {
    const total = rows.length;
    const pages = Math.max(1, Math.ceil(total / st.pageSize) || 1);
    if (st.page > pages) st.page = pages;
    const start = (st.page - 1) * st.pageSize;
    const slice = rows.slice(start, start + st.pageSize);
    const table = slice.length
      ? null
      : `<div class="dms-table-wrapper">${DMS.render('EmptyState', { title: 'Không có dữ liệu', icon: '📭' })}</div>`;
    const pag = total ? DMS.render('Pagination', { current: st.page, pageSize: st.pageSize, total, unit }) : '';
    return { total, slice, empty: table, pag, offset: start };
  }

  function catalogActions(rowId) {
    return DMS.render('TableActions', {
      actions: [
        { type: 'edit', title: 'Chỉnh sửa', dataAction: 'ts-cat-edit-' + rowId },
        { type: 'delete', title: 'Xóa', dataAction: 'ts-cat-del-' + rowId }
      ]
    });
  }

  function storyActions(row) {
    const list = [
      { type: 'edit', title: 'Chỉnh sửa', dataAction: 'ts-st-edit-' + row.id }
    ];
    if (S().isPendingApproval(row)) {
      list.push({
        type: 'approve',
        title: 'Duyệt',
        menu: [
          { label: 'Duyệt', dataAction: 'ts-st-approve-' + row.id },
          { label: 'Từ chối', dataAction: 'ts-st-reject-' + row.id }
        ]
      });
    }
    list.push({ type: 'delete', title: 'Xóa', dataAction: 'ts-st-del-' + row.id });
    return DMS.render('TableActions', { actions: list });
  }

  /* ========== CATALOG ========== */
  function filterCatalogs(list, st) {
    const q = (st.q || '').trim().toLowerCase();
    return (list || []).filter((c) => {
      if (st.status && c.status !== st.status) return false;
      if (q && `${c.name} ${c.description}`.toLowerCase().indexOf(q) === -1) return false;
      return true;
    });
  }

  function catalogColumns(offset) {
    return [
      { key: 'stt', title: 'STT', width: '64px', render: (_, __, i) => offset + i + 1 },
      { key: 'name', title: 'Tên danh mục', render: (v, row) => `<a class="dms-table__link" data-action="ts-cat-view-${DMS.escape(row.id)}">${DMS.escape(v)}</a>` },
      { key: 'description', title: 'Mô tả', render: (v) => DMS.escape(v || '—') },
      { key: 'count', title: 'Số lượng bài viết', width: '140px', render: (_, row) => S().storyCount(row.id) },
      { key: 'status', title: 'Trạng thái', render: (v) => DMS.render('StatusTag', { status: v }) },
      { key: 'createdAt', title: 'Ngày tạo' },
      { key: 'actions', title: 'Thao tác', fixed: 'right', width: '104px', render: (_, row) => catalogActions(row.id) }
    ];
  }

  function catalogForm(d) {
    const view = d._view;
    const err = d._errors || {};
    const title = view ? 'Chi tiết danh mục' : (d.id ? 'Chỉnh sửa danh mục' : 'Thêm danh mục');
    const body = `<div class="ts-form-grid">
      <div class="dms-form-item ${err.name ? 'is-error' : ''} ts-form-grid__full">
        <label class="dms-form-item__label is-required">Tên danh mục</label>
        ${DMS.render('Input', { id: 'ts-cat-name', value: d.name || '', placeholder: 'Nhập tên danh mục', disabled: view })}
        ${S().fieldErr(err, 'name')}
      </div>
      <div class="dms-form-item ts-form-grid__full">
        <label class="dms-form-item__label">Mô tả</label>
        ${DMS.render('Textarea', { id: 'ts-cat-desc', value: d.description || '', placeholder: 'Nhập mô tả', rows: 3, disabled: view })}
      </div>
      <div class="dms-form-item">
        <label class="dms-form-item__label">Trạng thái</label>
        ${DMS.render('Select', {
          id: 'ts-cat-status',
          value: d.status || 'Hoạt động',
          options: [{ value: 'Hoạt động', label: 'Hoạt động' }, { value: 'Không hoạt động', label: 'Không hoạt động' }],
          disabled: view
        })}
      </div>
    </div>`;
    const footer = view
      ? DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'ts-cat-close' })
      : `${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'ts-cat-close' })}
         ${DMS.render('Button', { text: 'Lưu', type: 'primary', dataAction: 'ts-cat-save' })}`;
    return DMS.render('Modal', { id: 'ts-cat-modal', title, size: 'md', body, footer });
  }

  async function renderTellingStoryCatalog() {
    await S().loadStore();
    const st = catState();
    const p = S().queryParams();
    const mode = p.get('mode') || '';
    const id = p.get('id') || '';
    if ((mode === 'edit' || mode === 'view') && id) {
      const item = S().findCatalog(id);
      if (item && S().getCatDraft()._src !== mode + id) S().loadCatDraft(item, mode === 'view');
    }
    if (mode === 'create' && S().getCatDraft()._src !== 'create') {
      S().resetCatDraft();
      S().getCatDraft()._src = 'create';
    }
    const filtered = filterCatalogs(S().catalogs(), st);
    const pg = paginate(filtered, st, 'danh mục');
    const filter = DMS.render('FilterPanel', {
      fields: [
        { type: 'search', id: 'ts-cat-q', label: 'Tìm kiếm theo', placeholder: 'Tên / mô tả danh mục', value: st.q },
        { type: 'select', id: 'ts-cat-st', label: 'Trạng thái', placeholder: 'Trạng thái', value: st.status, options: [{ value: 'Hoạt động', label: 'Hoạt động' }, { value: 'Không hoạt động', label: 'Không hoạt động' }] }
      ]
    });
    const card = DMS.render('Card', {
      title: 'Danh sách danh mục',
      extra: DMS.render('Button', { text: '+ Thêm danh mục', type: 'primary', dataAction: 'ts-cat-create' }),
      body: (pg.slice.length ? DMS.render('Table', { columns: catalogColumns(pg.offset), data: pg.slice }) : pg.empty) + pg.pag
    });
    let overlay = '';
    if (mode === 'create' || mode === 'edit' || mode === 'view') overlay = catalogForm(S().getCatDraft());
    if (mode === 'delete' && id) {
      const item = S().findCatalog(id);
      if (item) overlay = DMS.render('Modal', {
        id: 'ts-cat-confirm',
        title: 'Xóa danh mục',
        size: 'sm',
        body: `<p>Bạn có chắc muốn xóa danh mục <strong>${DMS.escape(item.name)}</strong>?</p>`,
        footer: `${DMS.render('Button', { text: 'Hủy', type: 'default', dataAction: 'ts-cat-close' })}
          ${DMS.render('Button', { text: 'Xóa', type: 'danger', dataAction: 'ts-cat-confirm-del' })}`
      });
    }
    return `<div class="display-page ts-page" data-ts="catalog">
      ${S().breadcrumb([{ label: 'Telling Story' }, { label: 'Quản lý danh mục' }])}
      <div class="dms-page-header"><h1 class="dms-page-header__title">Quản lý danh mục</h1></div>
      ${filter}${card}${overlay}
    </div>`;
  }

  /* ========== STORY LIST ========== */
  function filterStories(list, st) {
    const q = (st.q || '').trim().toLowerCase();
    const from = S().parseDmy(st.from);
    const to = S().parseDmy(st.to);
    return (list || []).filter((s) => {
      if (q && `${s.title} ${s.summary}`.toLowerCase().indexOf(q) === -1) return false;
      if (st.catalogId && s.catalogId !== st.catalogId) return false;
      if (st.product && (s.productGroups || []).indexOf(st.product) === -1) return false;
      if (st.tag && (s.tags || []).indexOf(st.tag) === -1) return false;
      if (st.brand && (s.brands || []).indexOf(st.brand) === -1) return false;
      if (st.channel && (s.channels || []).indexOf(st.channel) === -1) return false;
      if (st.region && (s.regions || []).indexOf(st.region) === -1) return false;
      if (st.approval && S().approvalLabel(s) !== st.approval) return false;
      if (st.status && S().displayStatus(s) !== st.status) return false;
      const start = S().parseDmy(s.startDate);
      if (from || to) {
        if (!start) return false;
        if (from && start.getTime() < from.getTime()) return false;
        if (to && start.getTime() > to.getTime() + 86400000 - 1) return false;
      }
      return true;
    });
  }

  function storyColumns(offset) {
    const cat = store();
    return [
      { key: 'stt', title: 'STT', width: '56px', render: (_, __, i) => offset + i + 1 },
      {
        key: 'cover', title: 'Ảnh đại diện', width: '88px',
        render: (v) => S().coverImg(v, 'ts-thumb')
      },
      { key: 'title', title: 'Tiêu đề', render: (v, row) => `<a class="dms-table__link" data-action="ts-st-view-${DMS.escape(row.id)}">${DMS.escape(v)}</a>` },
      { key: 'catalogId', title: 'Danh mục', render: (v) => DMS.escape(S().catalogName(v)) },
      { key: 'tags', title: 'Tag', render: (v) => (S().optLabels(cat.tags, v) || []).map((t) => DMS.render('Tag', { text: t, type: 'cyan' })).join(' ') || '—' },
      { key: 'brands', title: 'Brand', render: (v) => DMS.escape((v || []).join(', ') || '—') },
      { key: 'channels', title: 'Kênh', render: (v) => DMS.escape(S().optLabels(cat.channels, v).join(', ') || '—') },
      {
        key: 'range', title: 'Thời gian áp dụng',
        render: (_, row) => DMS.escape((row.startDate || '—') + ' → ' + (row.endDate || '—'))
      },
      { key: 'approvalStatus', title: 'Trạng thái duyệt', render: (_, row) => DMS.render('StatusTag', { status: S().approvalLabel(row) }) },
      { key: 'status', title: 'Trạng thái', render: (_, row) => DMS.render('StatusTag', { status: S().displayStatus(row) }) },
      { key: 'createdAt', title: 'Ngày tạo' },
      { key: 'actions', title: 'Thao tác', fixed: 'right', width: '120px', render: (_, row) => storyActions(row) }
    ];
  }

  function storyFilter(st, cat) {
    const catOpts = S().catalogs().map((c) => ({ value: c.id, label: c.name }));
    return DMS.render('FilterPanel', {
      collapsed: !!st.collapsed,
      collapseAfter: 4,
      fields: [
        { type: 'search', id: 'ts-st-q', label: 'Từ khóa', placeholder: 'Tiêu đề / mô tả', value: st.q },
        { type: 'select', id: 'ts-st-cat', label: 'Danh mục', placeholder: 'Danh mục', value: st.catalogId, options: catOpts },
        {
          type: 'select', id: 'ts-st-approval', label: 'Trạng thái duyệt', placeholder: 'Tất cả', value: st.approval,
          options: [
            { value: 'Chờ duyệt', label: 'Chờ duyệt' },
            { value: 'Đã duyệt', label: 'Đã duyệt' },
            { value: 'Từ chối', label: 'Từ chối' }
          ]
        },
        { type: 'select', id: 'ts-st-prod', label: 'Dòng sản phẩm', placeholder: 'Dòng sản phẩm', value: st.product, options: cat.productGroups },
        { type: 'select', id: 'ts-st-tag', label: 'Campaign / Tag', placeholder: 'Tag', value: st.tag, options: cat.tags },
        { type: 'select', id: 'ts-st-brand', label: 'Brand', placeholder: 'Brand', value: st.brand, options: cat.brands },
        { type: 'select', id: 'ts-st-ch', label: 'Kênh', placeholder: 'Kênh', value: st.channel, options: cat.channels },
        { type: 'select', id: 'ts-st-reg', label: 'Khu vực', placeholder: 'Khu vực', value: st.region, options: cat.regions },
        { type: 'daterange', label: 'Thời gian', fromId: 'ts-st-from', toId: 'ts-st-to', fromValue: st.from, toValue: st.to },
        {
          type: 'select', id: 'ts-st-status', label: 'Trạng thái', placeholder: 'Trạng thái', value: st.status,
          options: [
            { value: 'Nháp', label: 'Nháp' },
            { value: 'Chưa hiệu lực', label: 'Chưa hiệu lực' },
            { value: 'Đang hiệu lực', label: 'Đang hiệu lực' },
            { value: 'Hết hiệu lực', label: 'Hết hiệu lực' }
          ]
        }
      ]
    });
  }

  /* ========== COMPOSER ========== */
  function coverBlock(d) {
    const cover = d.cover;
    const img = S().coverImg(cover, 'ts-cover-preview');
    return `<div class="dms-form-item">
      <label class="dms-form-item__label">Ảnh đại diện / Thumbnail</label>
      ${img}
      <div class="ts-cover-actions">
        <input type="file" id="ts-cover-file" accept="image/*" hidden />
        ${DMS.render('Button', { text: 'Tải ảnh lên', type: 'default', dataAction: 'ts-cover-pick' })}
        ${cover ? DMS.render('Button', { text: 'Xóa ảnh', type: 'link', dataAction: 'ts-cover-remove' }) : ''}
      </div>
    </div>`;
  }

  function mediaList(d) {
    const files = d.media || [];
    if (!files.length) return `<p class="ts-muted">Chưa có file đính kèm.</p>`;
    return `<ul class="ts-file-list">${files.map((f, i) => `<li class="ts-file-list__item">
      <button type="button" class="ts-file-list__name" data-action="ts-file-preview" data-file-index="${i}">${DMS.escape(f.name)}</button>
      <span class="ts-file-list__type">${DMS.escape(S().fileTypeLabel(f))}</span>
      <span class="ts-file-list__size">${DMS.escape(S().formatSize(f.size) || '')}</span>
      <button type="button" class="ts-file-list__name" data-action="ts-file-preview" data-file-index="${i}">Xem</button>
      <button type="button" class="ts-file-list__name" data-action="ts-file-dl" data-file-index="${i}">Tải xuống</button>
      <button type="button" class="ts-file-list__x" data-action="ts-file-remove" data-file-index="${i}">Xóa</button>
    </li>`).join('')}</ul>`;
  }

  function linkList(d) {
    const links = d.links || [];
    const rows = links.map((l, i) => `<div class="ts-link-row">
      ${DMS.render('Input', { id: 'ts-link-label-' + i, value: l.label || '', placeholder: 'Tên link' })}
      ${DMS.render('Input', { id: 'ts-link-url-' + i, value: l.url || '', placeholder: 'https://...' })}
      ${DMS.render('Button', { text: 'Xóa', type: 'link', dataAction: 'ts-link-remove-' + i })}
    </div>`).join('');
    return rows + `<div>${DMS.render('Button', { text: '+ Thêm link', type: 'default', dataAction: 'ts-link-add' })}</div>`;
  }

  function audienceFields(d, cat) {
    const aud = d.audience || S().emptyAudience();
    const type = aud.type || 'all';
    const radios = (cat.audienceTypes || []).map((t) =>
      DMS.render('Radio', { name: 'ts-aud-type', value: t.value, checked: type === t.value, label: t.label })
    ).join('');
    let extra = '';
    if (type === 'region') {
      extra = DMS.render('MultiSelect', { id: 'ts-aud-values', values: aud.values || [], options: cat.regions, placeholder: 'Chọn khu vực' });
    } else if (type === 'salesforce') {
      extra = DMS.render('MultiSelect', { id: 'ts-aud-values', values: aud.values || [], options: cat.salesforces, placeholder: 'Chọn lực lượng bán hàng' });
    } else if (type === 'employee') {
      extra = DMS.render('MultiSelect', { id: 'ts-aud-values', values: aud.values || [], options: cat.employees, placeholder: 'Chọn nhân viên kinh doanh' });
    }
    return `<div class="ts-audience">
      <div class="ts-audience__types">${radios}</div>
      ${extra ? `<div class="ts-audience__values">${extra}</div>` : ''}
    </div>`;
  }

  function composer(d, mode) {
    const cat = store();
    const err = d._errors || {};
    const catOpts = S().catalogs().filter((c) => c.status === 'Hoạt động' || c.id === d.catalogId).map((c) => ({ value: c.id, label: c.name }));
    return `<div class="ts-composer">
      <div class="ts-composer__main">
        <section class="ts-panel">
          <h3 class="ts-panel__title">Nội dung bài viết</h3>
          <div class="dms-form-item ${err.title ? 'is-error' : ''}">
            <label class="dms-form-item__label is-required">Tiêu đề bài viết</label>
            ${DMS.render('Input', { id: 'ts-title', className: 'ts-title-input', value: d.title || '', placeholder: 'Nhập tiêu đề bài viết' })}
            ${S().fieldErr(err, 'title')}
          </div>
          ${coverBlock(d)}
          <div class="dms-form-item ${err.bodyHtml ? 'is-error' : ''}">
            <label class="dms-form-item__label is-required">Nội dung</label>
            ${DMS.render('RichTextEditor', { id: 'ts-rte', value: d.bodyHtml || '' })}
            ${S().fieldErr(err, 'bodyHtml')}
          </div>
        </section>
        <section class="ts-panel">
          <h3 class="ts-panel__title">Media</h3>
          <p class="ts-muted">Hình ảnh, video, PDF / tài liệu. Có thể tải nhiều file.</p>
          <input type="file" id="ts-media-file" multiple hidden accept="image/*,video/*,.pdf,.doc,.docx,.txt" />
          ${DMS.render('Button', { text: 'Tải file lên', type: 'default', dataAction: 'ts-media-pick' })}
          ${mediaList(d)}
        </section>
        <section class="ts-panel">
          <h3 class="ts-panel__title">Link liên quan</h3>
          ${linkList(d)}
        </section>
      </div>
      <aside class="ts-composer__side">
        <section class="ts-panel">
          <h3 class="ts-panel__title">Phân loại</h3>
          <div class="dms-form-item ${err.catalogId ? 'is-error' : ''}">
            <label class="dms-form-item__label is-required">Danh mục</label>
            ${DMS.render('Select', { id: 'ts-catalog', value: d.catalogId, options: catOpts, placeholder: 'Chọn danh mục' })}
            ${S().fieldErr(err, 'catalogId')}
          </div>
          ${DMS.render('MultiSelect', { id: 'ts-products', label: 'Dòng sản phẩm / Nhóm sản phẩm', values: d.productGroups, options: cat.productGroups, placeholder: 'Chọn nhóm sản phẩm' })}
          ${DMS.render('MultiSelect', { id: 'ts-tags', label: 'Campaign / Tag', values: d.tags, options: cat.tags, placeholder: 'Chọn tag' })}
          ${DMS.render('MultiSelect', { id: 'ts-brands', label: 'Brand', values: d.brands, options: cat.brands, placeholder: 'Chọn brand' })}
          ${DMS.render('MultiSelect', { id: 'ts-channels', label: 'Kênh', values: d.channels, options: cat.channels, placeholder: 'Chọn kênh' })}
          ${DMS.render('MultiSelect', { id: 'ts-regions', label: 'Khu vực', values: d.regions, options: cat.regions, placeholder: 'Chọn khu vực' })}
        </section>
        <section class="ts-panel">
          <h3 class="ts-panel__title">Đối tượng xem</h3>
          ${audienceFields(d, cat)}
        </section>
        <section class="ts-panel">
          <h3 class="ts-panel__title">Thời gian áp dụng</h3>
          <p class="ts-muted">Khoảng thời gian Story được hiển thị.</p>
          <div class="ts-date-2">
            ${DMS.render('DatePicker', { id: 'ts-from', label: 'Từ ngày', value: d.startDate || '', placeholder: 'Từ ngày' })}
            ${DMS.render('DatePicker', { id: 'ts-to', label: 'Đến ngày', value: d.endDate || '', placeholder: 'Đến ngày' })}
          </div>
          ${DMS.render('Select', { id: 'ts-publish', label: 'Xuất bản', value: d.publishStatus, options: cat.publishStatuses })}
        </section>
      </aside>
    </div>${d._preview ? DMS.render('FilePreviewModal', { id: 'ts-file-preview-modal', file: d._preview }) : ''}`;
  }

  function articleView(item) {
    if (!item) return DMS.render('EmptyState', { title: 'Không tìm thấy bài viết' });
    const cat = store();
    const tags = S().optLabels(cat.tags, item.tags);
    const meta = [
      item.createdAt ? 'Ngày đăng: ' + item.createdAt : '',
      (item.brands || []).length ? 'Brand: ' + item.brands.join(', ') : '',
      tags.length ? 'Campaign: ' + tags.join(', ') : ''
    ].filter(Boolean).join('  ·  ');
    const cover = S().coverImg(item.cover, 'ts-article__cover');
    const files = (item.media || []);
    const visuals = files.filter((f) => { const k = S().fileKind(f); return k === 'image' || k === 'video'; });
    const docs = files.filter((f) => { const k = S().fileKind(f); return k !== 'image' && k !== 'video'; });
    const visualHtml = visuals.map((f) => {
      const kind = S().fileKind(f);
      const src = f.objectUrl || f.url;
      const idx = files.indexOf(f);
      if (kind === 'image' && src) {
        return `<div class="ts-article__media"><img src="${DMS.escape(src)}" alt="${DMS.escape(f.name)}" data-action="ts-art-preview" data-file-index="${idx}" /></div>`;
      }
      if (kind === 'video' && src) {
        const poster = f.poster ? ` poster="${DMS.escape(f.poster)}"` : '';
        return `<div class="ts-article__media"><video controls${poster} src="${DMS.escape(src)}"></video></div>`;
      }
      return `<div class="ts-article__media ts-video-fallback">
        ${f.poster ? `<img src="${DMS.escape(f.poster)}" alt="" />` : ''}
        <div class="ts-video-fallback__cap">Video (prototype) — chưa có nguồn phát. Có thể tải file nếu có.</div>
      </div>`;
    }).join('');
    const filesHtml = docs.map((f, i) => `<li class="ts-file-list__item">
      <button type="button" class="ts-file-list__name" data-action="ts-art-preview" data-file-index="${files.indexOf(f)}">${DMS.escape(f.name)}</button>
      <span class="ts-file-list__type">${DMS.escape(S().fileTypeLabel(f))}</span>
      <span class="ts-file-list__size">${DMS.escape(S().formatSize(f.size) || '')}</span>
      ${DMS.render('Button', { text: 'Tải xuống', type: 'link', dataAction: 'ts-art-dl-' + files.indexOf(f) })}
    </li>`).join('');
    const links = (item.links || []).map((l) =>
      `<li><a class="dms-table__link" href="${DMS.escape(l.url || '#')}" target="_blank" rel="noopener">${DMS.escape(l.label || l.url)}</a></li>`
    ).join('');
    return `<article class="ts-article">
      <p class="ts-article__kicker">${DMS.escape(S().catalogName(item.catalogId))}${tags.length ? '  /  ' + DMS.escape(tags.join(' · ')) : ''}</p>
      <h1 class="ts-article__title">${DMS.escape(item.title)}</h1>
      <p class="ts-article__meta">${DMS.escape(meta)}  ·  ${DMS.render('StatusTag', { status: S().displayStatus(item) })}</p>
      <div class="ts-article__approval">
        <span>Trạng thái duyệt:</span>
        ${DMS.render('StatusTag', { status: S().approvalLabel(item) })}
        ${S().approvalLabel(item) === 'Từ chối' && item.rejectionReason
          ? `<span class="ts-article__reject">Lý do từ chối: ${DMS.escape(item.rejectionReason)}</span>`
          : ''}
      </div>
      ${cover}
      <div class="ts-article__body">${item.bodyHtml || ''}</div>
      ${visualHtml}
      ${filesHtml ? `<section class="ts-article__docs"><h2>Tài liệu đính kèm</h2><ul class="ts-file-list">${filesHtml}</ul></section>` : ''}
      ${links ? `<section class="ts-article__docs"><h2>Thông tin liên quan</h2><ul class="ts-related">${links}</ul></section>` : ''}
    </article>`;
  }

  function composerFooter(mode) {
    return `${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'ts-st-close' })}
      ${DMS.render('Button', { text: 'Lưu nháp', type: 'default', dataAction: 'ts-st-save-draft' })}
      ${DMS.render('Button', { text: 'Lưu', type: 'primary', dataAction: 'ts-st-save' })}`;
  }

  async function renderTellingStoryContent() {
    await S().loadStore();
    const st = storyState();
    const p = S().queryParams();
    const mode = p.get('mode') || '';
    const id = p.get('id') || '';
    const cat = store();

    if ((mode === 'edit' || mode === 'view') && id) {
      const item = S().findStory(id);
      if (item && S().getStoryDraft()._src !== mode + id) S().loadStoryDraft(item, mode);
    }
    if (mode === 'create' && S().getStoryDraft()._src !== 'create') {
      S().resetStoryDraft();
      S().getStoryDraft()._src = 'create';
    }

    if (mode === 'create' || mode === 'edit') {
      const d = S().getStoryDraft();
      const title = mode === 'edit' ? 'Chỉnh sửa bài viết' : 'Thêm bài viết';
      return `<div class="display-page ts-page" data-ts="composer">
        ${S().breadcrumb([
          { label: 'Telling Story' },
          { label: 'Quản lý nội dung', route: '/telling-story/content' },
          { label: title }
        ])}
        <div class="dms-page-header ts-page-header">
          <h1 class="dms-page-header__title">${DMS.escape(title)}</h1>
          <div class="ts-page-header__actions">${composerFooter(mode)}</div>
        </div>
        ${composer(d, mode)}
      </div>`;
    }

    if (mode === 'view' && id) {
      const item = S().findStory(id);
      let preview = '';
      const d = S().getStoryDraft();
      if (d._preview) preview = DMS.render('FilePreviewModal', { id: 'ts-file-preview-modal', file: d._preview });
      return `<div class="display-page ts-page" data-ts="article">
        ${S().breadcrumb([
          { label: 'Telling Story' },
          { label: 'Quản lý nội dung', route: '/telling-story/content' },
          { label: 'Xem bài viết' }
        ])}
        <div class="dms-page-header ts-page-header">
          <h1 class="dms-page-header__title">Xem bài viết</h1>
          <div class="ts-page-header__actions">
            ${DMS.render('Button', { text: 'Chỉnh sửa', type: 'primary', dataAction: 'ts-st-edit-' + id })}
            ${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'ts-st-close' })}
          </div>
        </div>
        ${articleView(item)}${preview}
      </div>`;
    }

    const filtered = filterStories(S().stories(), st);
    const pg = paginate(filtered, st, 'bài viết');
    const card = DMS.render('Card', {
      title: 'Danh sách bài viết',
      extra: DMS.render('Button', { text: '+ Thêm bài viết', type: 'primary', dataAction: 'ts-st-create' }),
      body: (pg.slice.length ? DMS.render('Table', { columns: storyColumns(pg.offset), data: pg.slice }) : pg.empty) + pg.pag
    });
    let overlay = '';
    if (mode === 'delete' && id) {
      const item = S().findStory(id);
      if (item) overlay = DMS.render('Modal', {
        id: 'ts-st-confirm',
        title: 'Xóa bài viết',
        size: 'sm',
        body: `<p>Bạn có chắc muốn xóa bài <strong>${DMS.escape(item.title)}</strong>?</p>`,
        footer: `${DMS.render('Button', { text: 'Hủy', type: 'default', dataAction: 'ts-st-close' })}
          ${DMS.render('Button', { text: 'Xóa', type: 'danger', dataAction: 'ts-st-confirm-del' })}`
      });
    }
    if (mode === 'approve' && id) {
      const item = S().findStory(id);
      if (item) overlay = DMS.render('Modal', {
        id: 'ts-st-approve-modal',
        title: 'Duyệt nội dung',
        size: 'sm',
        body: `<p class="ct-confirm-msg">Bạn muốn xử lý bài viết này?</p>
          <p class="ct-confirm-code">${DMS.escape(item.title || '')}</p>`,
        footer: `${DMS.render('Button', { text: 'Hủy', type: 'default', dataAction: 'ts-st-close' })}
          ${DMS.render('Button', { text: 'Duyệt', type: 'primary', dataAction: 'ts-st-approve-ok' })}`
      });
    }
    if (mode === 'reject' && id) {
      const item = S().findStory(id);
      if (item) overlay = DMS.render('Modal', {
        id: 'ts-st-reject-modal',
        title: 'Từ chối nội dung',
        size: 'sm',
        body: `<p class="ct-confirm-msg">Bạn muốn xử lý bài viết này?</p>
          <p class="ct-confirm-code">${DMS.escape(item.title || '')}</p>
          <div class="dms-form-item" id="ts-reject-item">
            <label class="dms-form-item__label is-required">Lý do từ chối</label>
            ${DMS.render('Textarea', { id: 'ts-reject-reason', placeholder: 'Nhập lý do từ chối', rows: 3, value: '' })}
            <div class="dms-form-item__error" id="ts-reject-err" style="display:none">Vui lòng nhập lý do từ chối</div>
          </div>`,
        footer: `${DMS.render('Button', { text: 'Hủy', type: 'default', dataAction: 'ts-st-close' })}
          ${DMS.render('Button', { text: 'Từ chối', type: 'danger', dataAction: 'ts-st-reject-ok' })}`
      });
    }
    return `<div class="display-page ts-page" data-ts="list">
      ${S().breadcrumb([{ label: 'Telling Story' }, { label: 'Quản lý nội dung' }])}
      <div class="dms-page-header"><h1 class="dms-page-header__title">Quản lý nội dung</h1></div>
      ${storyFilter(st, cat)}${card}${overlay}
    </div>`;
  }

  /* ========== READ / SAVE ========== */
  function msValues(id) {
    const el = document.getElementById(id);
    return el && DMS.get('MultiSelect') ? DMS.get('MultiSelect').getValues(el) : [];
  }

  function readCatDom(d) {
    d.name = document.getElementById('ts-cat-name')?.value || '';
    d.description = document.getElementById('ts-cat-desc')?.value || '';
    d.status = document.getElementById('ts-cat-status')?.value || 'Hoạt động';
    return d;
  }

  function readLinks(d) {
    const n = (d.links || []).length;
    const out = [];
    for (let i = 0; i < n; i++) {
      const label = document.getElementById('ts-link-label-' + i)?.value || '';
      const url = document.getElementById('ts-link-url-' + i)?.value || '';
      if (label || url) out.push({ label, url });
    }
    d.links = out;
  }

  function readStoryDom(d) {
    d.title = document.getElementById('ts-title')?.value || d.title;
    d.catalogId = document.getElementById('ts-catalog')?.value || d.catalogId;
    d.productGroups = msValues('ts-products');
    d.tags = msValues('ts-tags');
    d.brands = msValues('ts-brands');
    d.channels = msValues('ts-channels');
    d.regions = msValues('ts-regions');
    d.startDate = document.getElementById('ts-from')?.value || d.startDate;
    d.endDate = document.getElementById('ts-to')?.value || d.endDate;
    d.publishStatus = document.getElementById('ts-publish')?.value || d.publishStatus;
    const rte = DMS.get('RichTextEditor');
    if (rte && document.getElementById('ts-rte')) d.bodyHtml = rte.getHtml('ts-rte');
    const typeEl = document.querySelector('input[name="ts-aud-type"]:checked');
    if (typeEl) {
      d.audience = d.audience || S().emptyAudience();
      d.audience.type = typeEl.value;
      d.audience.values = typeEl.value === 'all' ? [] : msValues('ts-aud-values');
    }
    readLinks(d);
    d._dirty = true;
    return d;
  }

  function saveCatalog() {
    const d = readCatDom(S().getCatDraft());
    const err = {};
    if (!(d.name || '').trim()) err.name = 'Tên danh mục là bắt buộc';
    d._errors = err;
    if (Object.keys(err).length) {
      go('/telling-story/catalog', { mode: d.id ? 'edit' : 'create', id: d.id || '' });
      return;
    }
    const now = S().nowLabel();
    if (d.id) {
      const item = S().findCatalog(d.id);
      if (item) Object.assign(item, { name: d.name.trim(), description: d.description, status: d.status });
      toast('Cập nhật danh mục thành công', 'success');
    } else {
      store().catalogs.push({
        id: 'cat-' + Date.now(),
        name: d.name.trim(),
        description: d.description,
        status: d.status,
        createdAt: now,
        createdBy: 'Vũ BA',
        icon: '📁'
      });
      toast('Thêm danh mục thành công', 'success');
    }
    S().resetCatDraft();
    go('/telling-story/catalog', { mode: '', id: '' });
  }

  function saveStory(asDraft) {
    const d = readStoryDom(S().getStoryDraft());
    if (asDraft) d.publishStatus = 'Nháp';
    const err = {};
    if (!(d.title || '').trim()) err.title = 'Tiêu đề là bắt buộc';
    if (!(d.catalogId || '').trim()) err.catalogId = 'Danh mục là bắt buộc';
    const text = String(d.bodyHtml || '').replace(/<[^>]+>/g, '').trim();
    if (!text) err.bodyHtml = 'Nội dung là bắt buộc';
    d._errors = err;
    const mode = d.id ? 'edit' : 'create';
    if (Object.keys(err).length) {
      go('/telling-story/content', { mode, id: d.id || '' });
      return;
    }
    const now = S().nowLabel();
    const payload = {
      title: d.title.trim(),
      summary: d.summary || String(text).slice(0, 140),
      catalogId: d.catalogId,
      cover: d.cover ? S().clone(d.cover) : S().defaultCoverFile(),
      bodyHtml: d.bodyHtml || '',
      productGroups: d.productGroups || [],
      tags: d.tags || [],
      brands: d.brands || [],
      channels: d.channels || [],
      regions: d.regions || [],
      audience: d.audience || S().emptyAudience(),
      startDate: d.startDate,
      endDate: d.endDate,
      publishStatus: d.publishStatus || 'Nháp',
      media: S().clone(d.media || []),
      links: d.links || [],
      updatedAt: now,
      updatedBy: 'Vũ BA'
    };
    if (d.id) {
      const item = S().findStory(d.id);
      if (item) {
        const prev = S().approvalLabel(item);
        payload.approvalStatus = prev === 'Từ chối' && !asDraft ? 'Chờ duyệt' : (item.approvalStatus || 'Chờ duyệt');
        if (payload.approvalStatus === 'Chờ duyệt') {
          payload.rejectionReason = '';
          payload.rejectedAt = '';
        } else {
          payload.rejectionReason = item.rejectionReason || '';
          payload.rejectedAt = item.rejectedAt || '';
        }
        Object.assign(item, payload);
      }
      toast('Cập nhật bài viết thành công', 'success');
    } else {
      store().stories.unshift(Object.assign({
        id: 'ST' + Date.now(),
        createdAt: now,
        createdBy: 'Vũ BA',
        approvalStatus: 'Chờ duyệt'
      }, payload));
      toast('Thêm bài viết thành công', 'success');
    }
    S().resetStoryDraft();
    go('/telling-story/content', { mode: '', id: '' });
  }

  function downloadFile(file) {
    const href = file && (file.objectUrl || file.url);
    if (!href) {
      toast('Không có dữ liệu để tải xuống', 'warning');
      return;
    }
    const a = document.createElement('a');
    a.href = href;
    a.download = file.name || 'download';
    a.rel = 'noopener';
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  function openPreview(file) {
    const d = S().getStoryDraft();
    d._preview = file;
    document.getElementById('ts-file-preview-modal')?.remove();
    const page = document.querySelector('.ts-page');
    if (!page || !file) return;
    page.insertAdjacentHTML('beforeend', DMS.render('FilePreviewModal', { id: 'ts-file-preview-modal', file }));
  }

  function toFileRec(file) {
    return {
      name: file.name,
      type: file.type || '',
      size: file.size || 0,
      objectUrl: URL.createObjectURL(file),
      uploadedAt: S().nowLabel(),
      uploadedBy: 'Vũ BA'
    };
  }

  /* ========== EVENTS ========== */
  function onTsClick(e) {
    const page = e.target.closest('.ts-page');
    if (!page) return;
    const actEl = e.target.closest('[data-action]');
    const a = actEl ? (actEl.getAttribute('data-action') || '') : '';

    if (e.target.closest('#ts-file-preview-modal')) {
      const pa = e.target.closest('[data-action]');
      const pact = pa ? pa.getAttribute('data-action') : '';
      if (pact === 'ct-preview-close' || pact === 'modal-close' || e.target.id === 'ts-file-preview-modal') {
        S().getStoryDraft()._preview = null;
        document.getElementById('ts-file-preview-modal')?.remove();
        return;
      }
      if (pact === 'ct-preview-download') {
        downloadFile(S().getStoryDraft()._preview);
        return;
      }
      return;
    }

    if (a.indexOf('ts-rte') === 0 || e.target.closest('[data-rte-cmd]')) {
      const cmd = e.target.closest('[data-rte-cmd]')?.getAttribute('data-rte-cmd');
      if (cmd) {
        e.preventDefault();
        DMS.get('RichTextEditor').exec(cmd);
        S().getStoryDraft()._dirty = true;
      }
      return;
    }

    if (e.target.closest('[data-action="filter-search"]')) {
      const kind = page.getAttribute('data-ts');
      if (kind === 'catalog') {
        const st = catState();
        st.q = document.getElementById('ts-cat-q')?.value || '';
        st.status = document.getElementById('ts-cat-st')?.value || '';
        st.page = 1;
        go('/telling-story/catalog', { mode: '', id: '' });
      } else {
        const st = storyState();
        st.q = document.getElementById('ts-st-q')?.value || '';
        st.catalogId = document.getElementById('ts-st-cat')?.value || '';
        st.product = document.getElementById('ts-st-prod')?.value || '';
        st.tag = document.getElementById('ts-st-tag')?.value || '';
        st.brand = document.getElementById('ts-st-brand')?.value || '';
        st.channel = document.getElementById('ts-st-ch')?.value || '';
        st.region = document.getElementById('ts-st-reg')?.value || '';
        st.from = document.getElementById('ts-st-from')?.value || '';
        st.to = document.getElementById('ts-st-to')?.value || '';
        st.status = document.getElementById('ts-st-status')?.value || '';
        st.approval = document.getElementById('ts-st-approval')?.value || '';
        st.page = 1;
        go('/telling-story/content', { mode: '', id: '' });
      }
      return;
    }
    if (e.target.closest('[data-action="filter-reset"]')) {
      if (page.getAttribute('data-ts') === 'catalog') {
        window.__tsCatSt = { q: '', status: '', page: 1, pageSize: catState().pageSize };
        go('/telling-story/catalog', { mode: '', id: '' });
      } else {
        const ps = storyState().pageSize;
        window.__tsStorySt = { q: '', catalogId: '', product: '', tag: '', brand: '', channel: '', region: '', from: '', to: '', status: '', approval: '', collapsed: true, page: 1, pageSize: ps };
        go('/telling-story/content', { mode: '', id: '' });
      }
      return;
    }

    if (a === 'ts-cat-create') { S().resetCatDraft(); S().getCatDraft()._src = 'create'; go('/telling-story/catalog', { mode: 'create' }); return; }
    if (a === 'ts-cat-close' || e.target.id === 'ts-cat-modal' || e.target.id === 'ts-cat-confirm' || (a === 'modal-close' && e.target.closest('#ts-cat-modal, #ts-cat-confirm'))) {
      S().resetCatDraft(); go('/telling-story/catalog', { mode: '', id: '' }); return;
    }
    if (a === 'ts-cat-save') { saveCatalog(); return; }
    if (a === 'ts-cat-confirm-del') {
      const id = S().queryParams().get('id');
      store().catalogs = S().catalogs().filter((c) => c.id !== id);
      S().resetCatDraft();
      go('/telling-story/catalog', { mode: '', id: '' });
      toast('Xóa danh mục thành công', 'success');
      return;
    }
    const catView = a.match(/^ts-cat-view-(.+)$/);
    const catEdit = a.match(/^ts-cat-edit-(.+)$/);
    const catDel = a.match(/^ts-cat-del-(.+)$/);
    if (catView) { go('/telling-story/catalog', { mode: 'view', id: catView[1] }); return; }
    if (catEdit) { go('/telling-story/catalog', { mode: 'edit', id: catEdit[1] }); return; }
    if (catDel) { go('/telling-story/catalog', { mode: 'delete', id: catDel[1] }); return; }

    if (a === 'ts-st-create') { S().resetStoryDraft(); S().getStoryDraft()._src = 'create'; go('/telling-story/content', { mode: 'create' }); return; }
    if (a === 'ts-st-close' || e.target.id === 'ts-st-confirm' || e.target.id === 'ts-st-approve-modal' || e.target.id === 'ts-st-reject-modal' || (a === 'modal-close' && e.target.closest('#ts-st-confirm, #ts-st-approve-modal, #ts-st-reject-modal'))) { S().resetStoryDraft(); go('/telling-story/content', { mode: '', id: '' }); return; }
    if (a === 'ts-st-save') { saveStory(false); return; }
    if (a === 'ts-st-save-draft') { saveStory(true); return; }
    if (a === 'ts-st-confirm-del') {
      const id = S().queryParams().get('id');
      store().stories = S().stories().filter((s) => s.id !== id);
      S().resetStoryDraft();
      go('/telling-story/content', { mode: '', id: '' });
      toast('Xóa bài viết thành công', 'success');
      return;
    }
    if (a === 'ts-st-approve-ok') {
      const sid = S().queryParams().get('id');
      const item = S().findStory(sid);
      if (item && S().isPendingApproval(item)) {
        item.approvalStatus = 'Đã duyệt';
        item.rejectionReason = '';
        item.rejectedAt = '';
        item.updatedAt = S().nowLabel();
        item.updatedBy = 'Vũ BA';
        toast('Duyệt nội dung thành công', 'success');
      }
      S().resetStoryDraft();
      go('/telling-story/content', { mode: '', id: '' });
      return;
    }
    if (a === 'ts-st-reject-ok') {
      const reason = (document.getElementById('ts-reject-reason')?.value || '').trim();
      const errEl = document.getElementById('ts-reject-err');
      const wrap = document.getElementById('ts-reject-item');
      if (!reason) {
        if (errEl) errEl.style.display = 'block';
        if (wrap) wrap.classList.add('is-error');
        return;
      }
      if (errEl) errEl.style.display = 'none';
      if (wrap) wrap.classList.remove('is-error');
      const sid = S().queryParams().get('id');
      const item = S().findStory(sid);
      if (item && S().isPendingApproval(item)) {
        item.approvalStatus = 'Từ chối';
        item.rejectionReason = reason;
        item.rejectedAt = S().nowLabel();
        item.updatedAt = item.rejectedAt;
        item.updatedBy = 'Vũ BA';
        toast('Từ chối nội dung thành công', 'success');
      }
      S().resetStoryDraft();
      go('/telling-story/content', { mode: '', id: '' });
      return;
    }
    const stView = a.match(/^ts-st-view-(.+)$/);
    const stEdit = a.match(/^ts-st-edit-(.+)$/);
    const stDel = a.match(/^ts-st-del-(.+)$/);
    const stAppr = a.match(/^ts-st-approve-(.+)$/);
    const stRej = a.match(/^ts-st-reject-(.+)$/);
    if (stView) { go('/telling-story/content', { mode: 'view', id: stView[1] }); return; }
    if (stEdit) { go('/telling-story/content', { mode: 'edit', id: stEdit[1] }); return; }
    if (stDel) { go('/telling-story/content', { mode: 'delete', id: stDel[1] }); return; }
    if (stAppr) { go('/telling-story/content', { mode: 'approve', id: stAppr[1] }); return; }
    if (stRej) { go('/telling-story/content', { mode: 'reject', id: stRej[1] }); return; }

    if (a === 'ts-cover-pick') { document.getElementById('ts-cover-file')?.click(); return; }
    if (a === 'ts-cover-remove') {
      const d = readStoryDom(S().getStoryDraft());
      d.cover = null;
      go('/telling-story/content', { mode: d.id ? 'edit' : 'create', id: d.id || '' });
      return;
    }
    if (a === 'ts-media-pick') { document.getElementById('ts-media-file')?.click(); return; }
    if (a === 'ts-file-preview') {
      const d = S().getStoryDraft();
      const i = Number(actEl.getAttribute('data-file-index'));
      if (d.media && d.media[i]) openPreview(d.media[i]);
      return;
    }
    if (a === 'ts-file-dl') {
      const d = S().getStoryDraft();
      const i = Number(actEl.getAttribute('data-file-index'));
      if (d.media && d.media[i]) downloadFile(d.media[i]);
      return;
    }
    if (a === 'ts-file-remove') {
      const d = readStoryDom(S().getStoryDraft());
      const i = Number(actEl.getAttribute('data-file-index'));
      if (d.media && d.media[i]) d.media.splice(i, 1);
      go('/telling-story/content', { mode: d.id ? 'edit' : 'create', id: d.id || '' });
      return;
    }
    if (a === 'ts-link-add') {
      const d = readStoryDom(S().getStoryDraft());
      d.links = d.links || [];
      d.links.push({ label: '', url: '' });
      go('/telling-story/content', { mode: d.id ? 'edit' : 'create', id: d.id || '' });
      return;
    }
    const linkRm = a.match(/^ts-link-remove-(\d+)$/);
    if (linkRm) {
      const d = readStoryDom(S().getStoryDraft());
      d.links.splice(Number(linkRm[1]), 1);
      go('/telling-story/content', { mode: d.id ? 'edit' : 'create', id: d.id || '' });
      return;
    }
    const artImg = e.target.closest('.ts-article__body img');
    if (artImg && artImg.getAttribute('src')) {
      openPreview({ name: artImg.getAttribute('alt') || 'Ảnh', type: 'image/jpeg', url: artImg.getAttribute('src') });
      return;
    }
    if (a === 'ts-art-preview') {
      const item = S().findStory(S().queryParams().get('id'));
      const i = Number(actEl.getAttribute('data-file-index'));
      if (item && item.media && item.media[i]) openPreview(item.media[i]);
      return;
    }
    const artDl = a.match(/^ts-art-dl-(\d+)$/);
    if (artDl) {
      const item = S().findStory(S().queryParams().get('id'));
      if (item && item.media && item.media[artDl[1]]) downloadFile(item.media[artDl[1]]);
      return;
    }

    const pageBtn = e.target.closest('[data-page]');
    if (pageBtn) {
      if (page.getAttribute('data-ts') === 'catalog') {
        catState().page = Number(pageBtn.getAttribute('data-page')) || 1;
        go('/telling-story/catalog', { mode: '', id: '' });
      } else {
        storyState().page = Number(pageBtn.getAttribute('data-page')) || 1;
        go('/telling-story/content', { mode: '', id: '' });
      }
    }
  }

  function onTsChange(e) {
    const page = e.target.closest('.ts-page');
    if (!page) return;
    if (e.target.id === 'ts-cover-file' && e.target.files && e.target.files[0]) {
      const d = readStoryDom(S().getStoryDraft());
      d.cover = toFileRec(e.target.files[0]);
      d._dirty = true;
      go('/telling-story/content', { mode: d.id ? 'edit' : 'create', id: d.id || '' });
      return;
    }
    if (e.target.id === 'ts-media-file' && e.target.files && e.target.files.length) {
      const d = readStoryDom(S().getStoryDraft());
      d.media = d.media || [];
      Array.from(e.target.files).forEach((f) => d.media.push(toFileRec(f)));
      go('/telling-story/content', { mode: d.id ? 'edit' : 'create', id: d.id || '' });
      return;
    }
    if (e.target.name === 'ts-aud-type') {
      const d = readStoryDom(S().getStoryDraft());
      d.audience.values = [];
      go('/telling-story/content', { mode: d.id ? 'edit' : 'create', id: d.id || '' });
      return;
    }
    if (e.target.closest('.dms-pagination__size select')) {
      const n = Number(e.target.value) || 10;
      if (page.getAttribute('data-ts') === 'catalog') { catState().pageSize = n; catState().page = 1; go('/telling-story/catalog', { mode: '', id: '' }); }
      else { storyState().pageSize = n; storyState().page = 1; go('/telling-story/content', { mode: '', id: '' }); }
    }
  }

  function bind(container) {
    if (container._tsClick) container.removeEventListener('click', container._tsClick);
    if (container._tsChange) container.removeEventListener('change', container._tsChange);
    container._tsClick = onTsClick;
    container._tsChange = onTsChange;
    container.addEventListener('click', onTsClick);
    container.addEventListener('change', onTsChange);
    DMS.get('RichTextEditor')?.bindAll?.(container);
  }

  renderTellingStoryCatalog.onMount = bind;
  renderTellingStoryContent.onMount = bind;
  window.renderTellingStoryCatalog = renderTellingStoryCatalog;
  window.renderTellingStoryContent = renderTellingStoryContent;
})();
