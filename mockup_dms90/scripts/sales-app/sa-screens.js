/**
 * App SaleMan — Screen renderers (tách từ page.js + bổ sung từ APK VIGO Saleman)
 */
(function (global) {
  'use strict';

  const SA = global.SA;
  const ICO = global.SAIcons || {};
  function S() { return global.SalesAppShared; }

  const CT_STATUSES = ['Chờ duyệt', 'Đã duyệt', 'Từ chối', 'Hết hiệu lực'];

  function ctPillClass(status) {
    if (status === 'Đã duyệt') return 'on';
    if (status === 'Chờ duyệt') return 'wait';
    if (status === 'Từ chối') return 'reject';
    return 'off';
  }

  function fileNameHtml(name) {
    const raw = String(name || '');
    const i = raw.lastIndexOf('.');
    if (i <= 0) return `<span class="sales-app__file-name">${SA.esc(raw)}</span>`;
    return `<span class="sales-app__file-name"><span class="sales-app__file-base">${SA.esc(raw.slice(0, i))}</span><span class="sales-app__file-ext">${SA.esc(raw.slice(i))}</span></span>`;
  }

  function orderMetaRow(icon, label, value) {
    return `<div class="sales-app__meta-row">
      <span class="sales-app__meta-ico">${ICO[icon] || ''}</span>
      <span class="sales-app__meta-label">${SA.esc(label)}</span>
      <span class="sales-app__meta-value">${SA.esc(value || '—')}</span>
    </div>`;
  }

  function orderCard(o, visitId) {
    const href = visitId ? `/sales-app/vieng-tham/${visitId}/don-hang/${o.id}` : `/sales-app/don-hang/${o.id}`;
    return `<article class="sales-app__order-shell">
      <div class="sales-app__order-shell-head" data-route="${SA.esc(href)}">
        <div class="sales-app__order-topline">
          <span class="sales-app__order-id">${SA.esc(o.id)}</span>
          <span class="sales-app__order-status">${SA.esc(o.status || 'Khởi tạo')}</span>
        </div>
        <p class="sales-app__order-time">${SA.esc(o.time)}</p>
      </div>
      <div class="sales-app__order-inner">
        <div data-route="${SA.esc(href)}">
          <div class="sales-app__store-box">
            <div class="sales-app__store-box-row">
              <span class="sales-app__store-box-ico">${ICO.store}</span>
              <div>
                <p class="sales-app__card-title">${SA.esc(o.storeName)}</p>
                <p class="sales-app__muted">${SA.esc(o.storeAddress)}</p>
                <p class="sales-app__store-id">${SA.esc(o.storeId)}</p>
              </div>
            </div>
          </div>
          ${orderMetaRow('dist', 'Đại lý', o.distributor)}
          ${orderMetaRow('source', 'Nguồn tạo', o.source)}
          ${orderMetaRow('type', 'Loại đơn', o.type)}
          ${orderMetaRow('warehouse', 'Kho xuất', o.warehouse)}
        </div>
        <div class="sales-app__order-footer">
          <div>
            <span class="sales-app__order-foot-label">Giá trị đơn hàng</span>
            <div class="sales-app__money">${SA.esc(o.total)}</div>
          </div>
          <button type="button" class="sales-app__reorder" data-action="sa-reorder" data-id="${SA.esc(o.id)}">Đặt lại</button>
        </div>
      </div>
    </article>`;
  }

  function contractFilterSheet() {
    const st = S().state();
    if (!st.contractFilterOpen) return '';
    const d = st.contractDraft || st.contractFilter || S().emptyContractFilter();
    const customers = S().managedCustomers();
    const custOpts = ['<option value="">Tất cả</option>']
      .concat(customers.map((c) => `<option value="${SA.esc(c.code)}" ${d.customer === c.code ? 'selected' : ''}>${SA.esc(c.code)} - ${SA.esc(c.name)}</option>`))
      .join('');
    const stOpts = ['<option value="">Tất cả</option>']
      .concat(CT_STATUSES.map((s) => `<option value="${SA.esc(s)}" ${d.status === s ? 'selected' : ''}>${SA.esc(s)}</option>`))
      .join('');
    return `<div class="sales-app__sheet is-open">
      <button type="button" class="sales-app__sheet-backdrop" data-action="sa-ct-filter-close" aria-label="Đóng"></button>
      <div class="sales-app__sheet-panel">
        <div class="sales-app__sheet-handle"></div>
        <h2 class="sales-app__sheet-title">Bộ lọc</h2>
        <label class="sales-app__field-label">Khách hàng</label>
        <select id="sa-ct-f-cust" class="sales-app__select">${custOpts}</select>
        <label class="sales-app__field-label">Trạng thái</label>
        <select id="sa-ct-f-status" class="sales-app__select">${stOpts}</select>
        <label class="sales-app__field-label">Thời gian hiệu lực</label>
        <div class="sales-app__date-row">
          <label class="sales-app__date-field">Từ ngày
            <input id="sa-ct-f-from" type="date" class="sales-app__select" value="${SA.esc(d.from || '')}" />
          </label>
          <label class="sales-app__date-field">Đến ngày
            <input id="sa-ct-f-to" type="date" class="sales-app__select" value="${SA.esc(d.to || '')}" />
          </label>
        </div>
        ${SA.render('ActionBar', { buttons: [
          { label: 'Đặt lại', variant: 'ghost', action: 'sa-ct-filter-reset' },
          { label: 'Áp dụng', variant: 'primary', action: 'sa-ct-filter-apply' }
        ] }).replace('sales-app__action-bar', 'sales-app__sheet-actions')}
      </div>
    </div>`;
  }

  const screens = {};

  screens.login = function login() {
    const A = '/sales-app/login';
    const body = `<div class="sales-app__login sales-app__login--figma">
      <div class="sales-app__login-bg" aria-hidden="true"><img src="${A}/bg.png" alt="" /></div>
      <div class="sales-app__login-top">
        <button type="button" class="sales-app__login-portal" data-route="/admin/dashboard">Trở về Portal</button>
        <button type="button" class="sales-app__login-support" aria-label="Hỗ trợ">
          <img src="${A}/headset.svg" width="24" height="24" alt="" />
        </button>
      </div>
      <form class="sales-app__login-main" data-action-submit="sa-login">
        <div class="sales-app__login-card">
          <img class="sales-app__login-logo-img" src="${A}/logo.png" width="213" height="120" alt="Eco salesman" />
          <div class="sales-app__login-form">
            <p class="hint">Đăng nhập với mã nhân viên của bạn</p>
            <input id="sa-emp" name="employeeCode" autocomplete="username" placeholder="Nhập mã nhân viên" />
            <div class="sales-app__login-pass">
              <input id="sa-pass" name="password" type="password" autocomplete="current-password" placeholder="Nhập mật khẩu" />
              <button type="button" class="sales-app__login-eye" aria-label="Hiện mật khẩu">
                <img src="${A}/eye.svg" width="24" height="24" alt="" />
              </button>
            </div>
            <label class="sales-app__login-remember">
              <span class="sales-app__login-check is-on" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                  <path d="M0 5.333C0 2.388 2.388 0 5.333 0h5.334C13.612 0 16 2.388 16 5.333v5.334C16 13.612 13.612 16 10.667 16H5.333C2.388 16 0 13.612 0 10.667V5.333Z" fill="currentColor"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.638 4.195a.75.75 0 0 1 0 1.06L6.97 9.92a.75.75 0 0 1-1.06 0L4.195 8.204a.75.75 0 1 1 1.06-1.06L6.44 8.327l4.138-4.132a.75.75 0 0 1 1.06 0Z" fill="#fff"/>
                </svg>
              </span>
              <input type="checkbox" checked hidden />
              Ghi nhớ mật khẩu
            </label>
            <button type="submit" class="sales-app__login-btn" data-action="sa-login">Đăng nhập</button>
            <div class="sales-app__login-links">
              <p>Quên mật khẩu?</p>
              <p>Bạn chưa có tài khoản? <span class="link">Đăng ký</span></p>
            </div>
          </div>
        </div>
        <div class="sales-app__login-foot">
          <p class="sales-app__login-terms">Chính sách và điều khoản sử dụng</p>
          <p>v1.00 (29)</p>
        </div>
      </form>
    </div>`;
    return SA.render('Screen', { time: '9:41', body });
  };

  screens.visits = function visitList() {
    const d = S().store();
    const st = S().state();
    const q = (st.visitQ || '').toLowerCase();
    const rows = (d.visits || []).filter((v) => {
      if (!q) return true;
      return [v.code, v.name, v.phone, v.address].join(' ').toLowerCase().includes(q);
    });
    const cards = rows.map((v) => SA.render('Card', {
      title: `${v.code} - ${v.name}`,
      children: `
        <div class="sales-app__row"><span class="sales-app__muted">${SA.esc(v.phone)}</span><span class="sales-app__muted">${SA.esc(v.distance)}</span></div>
        <div class="sales-app__row"><span class="sales-app__muted">${SA.esc(v.address)}</span></div>
        <button type="button" class="sales-app__cta" data-route="/sales-app/vieng-tham/${SA.esc(v.code)}">Viếng thăm</button>`
    })).join('');
    return SA.render('Screen', {
      time: '14:49',
      lightStatus: true,
      nav: 'vieng-tham',
      header: SA.render('ProfileHero', { userName: d.employee.name, userCode: d.employee.code, userPhone: d.employee.phone })
        + SA.render('RouteBanner', { code: d.route.code, label: d.route.label })
        + `<div class="sales-app__search-row"><div class="sales-app__search"><span>⌕</span><input id="sa-visit-q" placeholder="Nhập mã, tên, số điện thoại hoặc địa chỉ khách hàng" value="${SA.esc(st.visitQ || '')}" /></div><button type="button" class="sales-app__search-filter">☰</button></div>`
        + SA.render('ListHead', { title: `Danh sách khách hàng (${rows.length}/32)` }),
      body: SA.render('ScrollArea', { children: cards || SA.render('EmptyState', { description: 'Không có dữ liệu' }) })
    });
  };

  screens['visit-detail'] = function visitDetail(id) {
    const v = S().findVisit(id);
    const started = !!S().state().visitStarted[id];
    const tasks = [
      { label: 'Đặt hàng', route: `/sales-app/vieng-tham/${id}/don-hang` },
      { label: 'Chương trình trưng bày' },
      { label: 'Chương trình tích lũy' },
      { label: 'Tồn kho' },
      { label: 'Khảo sát' },
      { label: 'Bày hàng', required: true },
      { label: 'Ghi chú', route: '/sales-app/ghi-chu' }
    ];
    const taskHtml = tasks.map((t) => SA.render('TaskItem', t)).join('');
    const startBtn = started ? '' : `<button type="button" class="sales-app__cta" style="max-width:240px" data-action="sa-start-visit" data-id="${SA.esc(id)}">Bắt đầu viếng thăm</button>`;
    const footer = started ? SA.render('ActionBar', { buttons: [{ label: 'Rời khách hàng', route: '/sales-app/vieng-tham' }] }) : '';
    return SA.render('Screen', {
      time: '22:35', lightStatus: true,
      header: SA.render('AppHeader', { variant: 'solid', title: 'Viếng thăm', backRoute: '/sales-app/vieng-tham' }),
      body: `<div class="sales-app__scroll" style="padding-top:12px">`
        + SA.render('Card', { children: `<div style="display:flex;gap:12px"><div style="font-size:28px">🏪</div><div><p class="sales-app__card-title">${SA.esc(v.code)} - ${SA.esc(v.name)}</p><p class="sales-app__muted">${SA.esc(v.address)}</p></div></div>` })
        + `<div style="text-align:center;margin:16px 0">${startBtn}<p class="sales-app__muted" style="font-style:italic;margin-top:12px">*Bạn cần thực hiện hết các bước bắt buộc<br/>trước khi rời khỏi khách hàng.</p></div>`
        + taskHtml + `</div>`,
      footer
    });
  };

  screens['order-detail'] = function orderDetail(visitId, orderId) {
    const o = S().findOrder(orderId) || (S().store().orders || [])[0] || {};
    const products = S().store().products || [];
    const lines = products.slice(0, 3).map((p) => `<div class="sales-app__prod-card sales-app__prod-card--confirm">
      <div class="sales-app__prod-thumb"><span class="sales-app__prod-thumb-ico">${ICO.store}</span></div>
      <div class="sales-app__prod-body">
        <p class="sales-app__prod-name">${SA.esc(p.name)}</p>
        <p class="sales-app__muted">${SA.esc(p.uom)}</p>
        <div class="sales-app__prod-foot"><span class="sales-app__prod-price">${SA.esc(String(p.price))} đ</span></div>
      </div>
    </div>`).join('');
    return SA.render('Screen', {
      time: '23:20',
      header: SA.render('AppHeader', { variant: 'light', title: 'Chi tiết đơn hàng', backRoute: `/sales-app/vieng-tham/${visitId}/don-hang` }),
      body: SA.render('ScrollArea', {
        className: 'sales-app__scroll--order',
        children: `<p class="sales-app__muted">${SA.esc(o.time)}</p>
          <p class="sales-app__card-title">${SA.esc(o.storeName)}</p>
          <p class="sales-app__muted">${SA.esc(o.storeAddress)}</p>
          <div class="sales-app__section">Sản phẩm</div>${lines}
          <div class="sales-app__pay-box"><div class="sales-app__pay-row sales-app__pay-row--total"><span>Tổng cộng</span><span class="sales-app__money">${SA.esc(o.total || '0 đ')}</span></div></div>`
      }),
      footer: SA.render('ActionBar', { buttons: [{ label: 'Đặt lại', action: 'sa-order-type-open', id: visitId }] })
    });
  };

  screens.report = function reports() {
    const d = S().store();
    const st = S().state();
    const tab = st.reportKpiTab || 'month';
    const tiles = (d.kpiReports || []).map((r) => SA.render('ReportTile', { icon: r.icon, label: r.label, route: r.route })).join('');
    return SA.render('Screen', {
      time: '15:15', lightStatus: true, nav: 'bao-cao',
      header: SA.render('AppHeader', { variant: 'solid', title: 'Báo cáo', compact: true }),
      body: SA.render('ScrollArea', { children: `
        <div class="sales-app__kpi-block">
          <div class="sales-app__kpi-head">
            <h2>Chỉ tiêu KPI</h2>
            <button type="button" class="sales-app__text-link" data-route="/sales-app/bao-cao/kpi">Xem tất cả</button>
          </div>
          ${SA.render('Tabs', {
            variant: 'underline',
            active: tab,
            tabs: [
              { key: 'month', label: 'Theo tháng', action: 'sa-kpi-tab' },
              { key: 'time', label: 'Theo thời gian', action: 'sa-kpi-tab' }
            ]
          })}
          ${SA.render('EmptyState', { illustrate: true, description: 'Không có dữ liệu' })}
        </div>
        <h2 class="sales-app__block-title">Danh sách báo cáo</h2>
        <div class="sales-app__report-grid">${tiles}</div>` })
    });
  };

  screens['report-detail'] = function reportDetail(slug) {
    const d = S().store();
    const r = (d.kpiReports || []).find((x) => x.slug === slug) || { label: 'Báo cáo', summary: '—' };
    return SA.render('Screen', {
      time: '14:50', lightStatus: true,
      header: SA.render('AppHeader', { variant: 'solid', title: r.label, backRoute: '/sales-app/bao-cao' }),
      body: SA.render('ScrollArea', { children: `
        ${SA.render('Card', { title: 'Tổng quan', children: `<p class="sales-app__money">${SA.esc(r.summary)}</p><p class="sales-app__muted">Dữ liệu mock — [CẦN XÁC NHẬN] nguồn KPI thật</p>` })}
        ${(r.items || []).map((it) => SA.render('Card', { title: it.label, children: `<p class="sales-app__muted">${SA.esc(it.value)}</p>` })).join('')}` })
    });
  };

  screens.orders = function ordersPage() {
    const st = S().state();
    const tabs = ['Khởi tạo', 'Đã duyệt', 'Đã xuất kho', 'Đã hủy'];
    const list = (S().store().orders || []).map((o) => orderCard({ ...o, status: st.orderStatus })).join('');
    return SA.render('Screen', {
      time: '15:15', lightStatus: true, nav: 'don-hang',
      header: `<div class="sales-app__header sales-app__header--tabs">${SA.render('ChipTabs', { chips: tabs, active: st.orderStatus })}</div>`,
      body: `<div class="sales-app__orders-body">
        ${SA.render('SearchBar', { placeholder: 'Nhập mã đơn hàng, số dt cửa hàng, ...' })}
        ${SA.render('ScrollArea', { children: SA.render('SectionTitle', { text: 'Hôm nay' }) + list })}
      </div>`
    });
  };

  screens.more = function morePage() {
    const d = S().store();
    const st = S().state();
    const routeMap = { 'khach-hang': '/sales-app/khach-hang', 'hop-dong': '', 'khuyen-mai': '/sales-app/khuyen-mai', 'thong-bao': '/sales-app/thong-bao', 'nghi-phep': '/sales-app/nghi-phep', 'khao-sat': '/sales-app/khao-sat', 'ghi-chu': '/sales-app/ghi-chu', 'ho-tro': '/sales-app/ho-tro', 'cai-dat': '/sales-app/cai-dat' };
    const items = (d.moreMenu || []).map((m) => SA.render('MenuListItem', {
      icon: m.icon,
      label: m.label,
      badge: m.badge,
      route: m.key === 'hop-dong' ? '' : routeMap[m.key],
      action: m.key === 'hop-dong' ? 'sa-ct-open' : ''
    })).join('');
    const workLabel = st.workCheckedIn ? 'Kết thúc ngày công' : 'Bắt đầu ngày công';
    return SA.render('Screen', {
      time: '15:15', lightStatus: true, nav: 'khac',
      header: SA.render('AppHeader', {
        variant: 'gradient',
        showUser: true,
        userName: d.employee.name,
        userCode: d.employee.code,
        workdayStart: '14:49:14',
        workdayLabel: workLabel,
        workdayAction: 'sa-toggle-workday',
        compact: true
      })
        + `<div class="sales-app__route-wrap">
            <div class="sales-app__route-caption"><span>Tuyến đã chọn</span></div>
            ${SA.render('RouteBanner', { code: d.route.code, label: d.route.fullLabel, refreshAction: 'sa-visit-pick-route' })}
          </div>`,
      body: `<div class="sales-app__more-body">
        <div class="sales-app__more-list">${items}</div>
        <div class="sales-app__qr"><button type="button" data-action="sa-qr">${ICO.qr}<span>Mã QR của tôi</span></button></div>
      </div>`
    });
  };

  screens.customers = function customersPage() {
    const d = S().store();
    const st = S().state();
    const q = (st.custQ || '').toLowerCase();
    const tab = st.custTab || 'cham-soc';
    const draft = st.custFilterDraft || {};
    const filterOn = !!(st.custFilter && Object.keys(st.custFilter).length);
    const filterOpen = !!st.custFilterOpen;

    function careCard(c) {
      return `<article class="sales-app__card sales-app__cust-card" data-route="/sales-app/khach-hang/chi-tiet/${SA.esc(c.code)}" style="cursor:pointer">
        <div class="sales-app__cust-card-top">
          <span class="sales-app__cust-pin">${ICO.pin}</span>
          <div class="sales-app__cust-main">
            <p class="sales-app__card-title">${SA.esc(c.name)} - ${SA.esc(c.code)}</p>
            <p class="sales-app__muted">${SA.esc(c.phone || '—')}</p>
            <p class="sales-app__muted">${SA.esc(c.address || '—')}</p>
          </div>
        </div>
      </article>`;
    }

    function newCard(c) {
      return `<article class="sales-app__card sales-app__cust-card" data-route="/sales-app/khach-hang/chi-tiet/${SA.esc(c.id)}" style="cursor:pointer">
        <div class="sales-app__cust-card-top">
          <span class="sales-app__cust-pin sales-app__cust-pin--muted">${ICO.pin}</span>
          <div class="sales-app__cust-main">
            <p class="sales-app__card-title">${SA.esc(c.name)} - ${SA.esc(c.id)}</p>
            <p class="sales-app__muted">${SA.esc(c.address || '—')}</p>
          </div>
        </div>
        <div class="sales-app__cust-card-foot">
          <span class="sales-app__cust-time">${ICO.clock}<span>${SA.esc(c.time || '')}</span></span>
          ${SA.render('Pill', { text: c.status, variant: c.status === 'Hoạt động' ? 'on' : 'off' })}
        </div>
      </article>`;
    }

    let body = '';
    if (tab === 'cham-soc') {
      body = (d.careCustomers || [])
        .filter((c) => !q || [c.code, c.name, c.phone, c.address].join(' ').toLowerCase().includes(q))
        .map(careCard)
        .join('');
    } else {
      body = (d.newCustomers || []).map((g) => {
        const items = (g.items || []).filter((c) => !q || [c.id, c.name, c.address].join(' ').toLowerCase().includes(q));
        if (!items.length) return '';
        return `<div class="sales-app__cust-group">
          ${SA.render('SectionTitle', { text: g.date })}
          ${items.map(newCard).join('')}
        </div>`;
      }).join('');
    }

    const filterGroups = [
      { key: 'viTri', title: 'Vị trí điểm bán', options: ['Trong tuyến', 'Ngoài tuyến', 'Gần tôi', 'Toàn bộ'] },
      { key: 'loai', title: 'Loại điểm bán', options: ['Điện máy', 'Tạp hóa', 'Siêu thị', 'Khác'] },
      { key: 'hang', title: 'Hạng điểm bán', options: ['A', 'B', 'C', 'Chưa xếp hạng'] },
      { key: 'kenh', title: 'Kênh bán hàng', options: ['GT', 'MT', 'Online', 'Khác'] },
      { key: 'trangThai', title: 'Trạng thái', options: ['Hoạt động', 'Ngưng'] }
    ];

    const filterSheet = filterOpen ? `<div class="sales-app__sheet sales-app__sheet--full" role="dialog" aria-modal="true" aria-label="Bộ lọc tìm kiếm">
      <div class="sales-app__sheet-head">
        <button type="button" class="sales-app__icon-btn" data-action="sa-cust-filter-close" aria-label="Đóng">${ICO.close}</button>
        <h2 class="sales-app__sheet-title">Bộ lọc tìm kiếm</h2>
        <span class="sales-app__sheet-spacer"></span>
      </div>
      <div class="sales-app__sheet-body">
        ${filterGroups.map((g) => {
          const cur = draft[g.key] || '';
          return `<section class="sales-app__filter-group">
            ${SA.render('SectionTitle', { text: g.title })}
            <div class="sales-app__filter-grid">
              ${g.options.map((opt) => {
                const on = cur === opt;
                return `<button type="button" class="sales-app__filter-chip${on ? ' is-on' : ''}" data-action="sa-cust-filter-pick" data-group="${SA.esc(g.key)}" data-value="${SA.esc(opt)}" aria-pressed="${on}">${SA.esc(opt)}</button>`;
              }).join('')}
            </div>
          </section>`;
        }).join('')}
      </div>
      <div class="sales-app__sheet-foot">
        <button type="button" class="sales-app__btn sales-app__btn--ghost" data-action="sa-cust-filter-reset">Đặt lại</button>
        <button type="button" class="sales-app__btn sales-app__btn--primary" data-action="sa-cust-filter-apply">Áp dụng</button>
      </div>
    </div>` : '';

    return SA.render('Screen', {
      time: '14:50',
      lightStatus: true,
      header: SA.render('AppHeader', {
        variant: 'solid',
        title: 'Khách hàng',
        backRoute: '/sales-app/khac',
        rightAction: `<button type="button" class="sales-app__icon-btn sales-app__icon-btn--chip" data-route="/sales-app/khach-hang/tao-moi" aria-label="Tạo mới">${ICO.plus}</button>`
      })
        + SA.render('Tabs', {
          variant: 'underline',
          tabs: [
            { key: 'cham-soc', label: 'Chăm sóc', action: 'sa-cust-tab' },
            { key: 'mo-moi', label: 'Mở mới', action: 'sa-cust-tab' }
          ],
          active: tab
        })
        + SA.render('SearchBar', {
          id: 'sa-cust-q',
          placeholder: 'Nhập mã, tên, số điện thoại khách hàng',
          value: st.custQ || '',
          filterOn,
          filterAction: 'sa-cust-filter-open',
          pill: true
        }),
      body: SA.render('ScrollArea', {
        className: 'sales-app__scroll--cust',
        children: body || SA.render('EmptyState', {
          illustrate: true,
          title: 'Không có dữ liệu',
          description: 'Không tìm thấy khách hàng phù hợp.'
        })
      }) + filterSheet
    });
  };

  screens['cust-create'] = function customerCreate() {
    return SA.render('Screen', {
      time: '14:50',
      lightStatus: true,
      header: SA.render('AppHeader', { variant: 'light', title: 'Tạo mới khách hàng', backRoute: '/sales-app/khach-hang' }),
      body: `<div class="sales-app__form sales-app__form--customer">
        ${SA.render('SectionTitle', { text: 'Định danh khách hàng' })}
        <input class="sales-app__field" placeholder="Mã số thuế / CCCD *" />
        <input class="sales-app__field" placeholder="Tên khách hàng *" />
        <input class="sales-app__field" placeholder="Số điện thoại *" />
        <input class="sales-app__field" placeholder="Email" />
        <input class="sales-app__field" placeholder="Địa chỉ" />
      </div>`,
      footer: SA.render('ActionBar', {
        buttons: [
          { label: 'Hủy', variant: 'ghost', route: '/sales-app/khach-hang' },
          { label: 'Lưu', variant: 'primary', action: 'sa-save-customer' }
        ]
      })
    });
  };

  screens['cust-detail'] = function customerDetail(id) {
    const c = S().findNewCustomer(id) || S().findVisit(id) || {};
    const code = c.id || c.code || id || 'CH4652946';
    const name = (c.name || 'Cô Ba Lagi').replace(/^\[Cici\]\s*/, '');
    const phone = c.phone || '(+84) 964 113 022';
    const address = c.address || '34 Hoàng Việt, Quận Tân Bình, Phường 4, TP. Hồ Chí Minh.';
    const st = S().state();
    const open = st.custDetailOpen || { chung: true, daidien: true, phanloai: true, vitri: true };

    function field(label, value, extra) {
      return `<div class="sales-app__kv"><span class="sales-app__kv-label">${SA.esc(label)}</span><span class="sales-app__kv-value">${SA.esc(value)}${extra || ''}</span></div>`;
    }

    function section(key, title, rows, opts) {
      const isOpen = !!open[key];
      const alert = (opts && opts.alert) ? `<p class="sales-app__store-alert" role="status">${ICO.warning}<span>${SA.esc(opts.alert)}</span></p>` : '';
      const edit = (opts && opts.edit) ? `<button type="button" class="sales-app__icon-btn" data-action="sa-cust-edit" data-section="${SA.esc(key)}" aria-label="Chỉnh sửa">${ICO.edit}</button>` : '';
      const moreRows = (opts && opts.more) ? opts.more : '';
      const hasMore = !!moreRows;
      return `<section class="sales-app__store-section">
        <div class="sales-app__store-section-head">
          ${SA.render('SectionTitle', { text: title })}
          ${edit}
        </div>
        <div class="sales-app__store-section-body">
          ${alert}
          ${rows}
          ${(!hasMore || isOpen) ? moreRows : ''}
        </div>
        ${hasMore ? `<button type="button" class="sales-app__store-more" data-action="sa-cust-section" data-section="${SA.esc(key)}" aria-expanded="${isOpen}">
          ${isOpen ? `Thu gọn ${ICO.chevronUp}` : `Xem thêm ${ICO.chevronDown}`}
        </button>` : ''}
      </section>`;
    }

    const actions = [
      { icon: ICO.gallery, label: 'Hình ảnh điểm bán', dot: true },
      { icon: ICO.store, label: 'Phân tích điểm bán' },
      { icon: ICO.clipboard, label: 'Lịch sử đơn hàng' },
      { icon: ICO.gift, label: 'CT trưng bày' },
      { icon: ICO.medal, label: 'CT tích luỹ' }
    ].map((a) => `<button type="button" class="sales-app__store-action">
      <span class="sales-app__store-action-ico">${a.icon}${a.dot ? '<i class="sales-app__dot"></i>' : ''}</span>
      <span>${SA.esc(a.label)}</span>
    </button>`).join('');

    const hero = `<div class="sales-app__store-hero">
      <div class="sales-app__store-card">
        <div class="sales-app__store-avatar" aria-hidden="true">${ICO.store}</div>
        <div class="sales-app__store-meta">
          <p class="sales-app__store-name">${SA.esc(name)}</p>
          <p class="sales-app__store-phone">${SA.esc(phone)}</p>
          <p class="sales-app__store-addr">${SA.esc(address)}</p>
        </div>
      </div>
      <div class="sales-app__store-badges">
        <span class="sales-app__store-badge sales-app__store-badge--gold">${ICO.star} Tiềm năng</span>
        <span class="sales-app__store-badge sales-app__store-badge--blue">ECO</span>
        <span class="sales-app__store-badge sales-app__store-badge--sky">ECOpay</span>
        <span class="sales-app__store-badge sales-app__store-badge--gold">ECO Co…</span>
      </div>
    </div>
    <div class="sales-app__store-actions">${actions}<div class="sales-app__store-dots" aria-hidden="true"><i class="is-on"></i><i></i></div></div>`;

    const body = hero
      + section('chung', 'Thông tin chung',
        field('Mã điểm bán', code)
        + field('Tên điểm bán', name, `<button type="button" class="sales-app__inline-ico" aria-label="Làm mới">${ICO.refresh}</button>`)
        + field('Số điện thoại', phone === '(+84) 964 113 022' ? '0909909999' : phone)
        + field('Email', 'abc@gmail.com'),
        {
          edit: true,
          more: field('Nhà phân phối', 'NPP001 - Nhà Phân Phối Tổng Hợp')
            + field('Tuyến Bán Hàng', 'TBH001 - Tuyến Sales 0001')
            + field('Tần suất', 'F4 - 1 tuần 1 lần')
            + field('Ngày đi tuyến', 'Thứ 4')
        })
      + section('daidien', 'Thông tin người đại diện',
        field('Tên chủ điểm bán', 'Võ Hoàng Yến')
        + field('Số CMND/CCCD', '025640799')
        + field('Ngày cấp', '25/01/2018')
        + field('Nơi cấp', 'CA Thành phố Hồ Chí Minh'),
        {
          edit: true,
          more: field('Hộ khẩu thường trú', '388 Nguyễn Văn Luông, Phường 12, Quận 6, TP. Hồ Chí Minh')
        })
      + section('phanloai', 'Phân loại điểm bán',
        field('Vị trí điểm bán', '—')
        + field('Loại điểm bán', 'Điện máy và đồ gia dụng')
        + field('Hạng điểm bán', '—')
        + field('Kênh bán hàng', '—'),
        { edit: true })
      + section('vitri', 'Thông tin vị trí',
        field('Tỉnh/Thành phố', 'Hồ Chí Minh')
        + field('Quận/Huyện', 'Quận 6')
        + field('Phường/Xã', 'Phường 12')
        + field('Địa chỉ', '388 Nguyễn Văn Luông')
        + `<div class="sales-app__store-map">
            ${SA.render('SectionTitle', { text: 'Định vị trên bản đồ' })}
            <div class="sales-app__store-map-box"><span class="sales-app__store-map-pin">${ICO.store}</span></div>
            <p class="sales-app__muted sales-app__center">Kinh độ: 394242, Vĩ độ: 274390</p>
          </div>`,
        { edit: true });

    return SA.render('Screen', {
      time: '9:41',
      lightStatus: true,
      header: SA.render('AppHeader', {
        variant: 'light',
        title: 'Thông tin điểm bán',
        backRoute: '/sales-app/khach-hang'
      }),
      body: SA.render('ScrollArea', { className: 'sales-app__scroll--store', children: body })
    });
  };

  screens['cust-care'] = function customerCare(id) {
    const c = S().findVisit(id) || {};
    const name = (c.name || id || '').replace(/^\[Cici\]\s*/, '');
    const phone = c.phone || '—';
    const address = c.address || '—';
    const actions = [
      { icon: ICO.gallery, label: 'Hình ảnh điểm bán', route: `/sales-app/khach-hang/chi-tiet/${id}` },
      { icon: ICO.store, label: 'Phân tích điểm bán' },
      { icon: ICO.clipboard, label: 'Lịch sử đơn hàng' },
      { icon: ICO.gift, label: 'CT trưng bày' },
      { icon: ICO.medal, label: 'CT tích luỹ' }
    ].map((a) => {
      const attr = a.route ? ` data-route="${SA.esc(a.route)}"` : '';
      return `<button type="button" class="sales-app__store-action"${attr}>
        <span class="sales-app__store-action-ico">${a.icon}</span>
        <span>${SA.esc(a.label)}</span>
      </button>`;
    }).join('');

    return SA.render('Screen', {
      time: '23:12',
      lightStatus: true,
      header: SA.render('AppHeader', {
        variant: 'light',
        title: 'Thông tin điểm bán',
        backRoute: '/sales-app/khach-hang',
        rightAction: `<button type="button" class="sales-app__icon-btn" data-route="/sales-app/khach-hang/chi-tiet/${SA.esc(id)}" aria-label="Chi tiết">${ICO.info}</button>`
      }),
      body: SA.render('ScrollArea', {
        className: 'sales-app__scroll--store',
        children: `<div class="sales-app__store-hero">
          <div class="sales-app__store-card">
            <div class="sales-app__store-avatar" aria-hidden="true">${ICO.store}</div>
            <div class="sales-app__store-meta">
              <p class="sales-app__store-name">${SA.esc(name)}</p>
              <p class="sales-app__store-phone">${SA.esc(phone)}</p>
              <p class="sales-app__store-addr">${SA.esc(address)}</p>
            </div>
          </div>
        </div>
        <div class="sales-app__store-actions">${actions}</div>
        <div class="sales-app__task-list">
          ${[
            { label: 'Đặt hàng', route: `/sales-app/vieng-tham/${id}/don-hang` },
            { label: 'Chương trình trưng bày' },
            { label: 'Chương trình tích lũy' },
            { label: 'Khảo sát' },
            { label: 'Bày hàng' },
            { label: 'Tồn kho' },
            { label: 'Ghi chú', route: '/sales-app/ghi-chu' }
          ].map((t) => SA.render('TaskItem', t)).join('')}
        </div>`
      })
    });
  };

  screens.contracts = function contractsPage() {
    const st = S().state();
    if (st.contractLoading) {
      return SA.render('Screen', {
        time: '14:51', lightStatus: true,
        header: SA.render('AppHeader', { variant: 'solid', title: 'Hợp đồng', backRoute: '/sales-app/khac' }),
        body: SA.render('Loading', { text: 'Đang tải danh sách hợp đồng...' })
      });
    }
    const all = S().myContracts();
    const rows = S().filterContracts();
    const filtered = S().hasContractFilter();
    let body = '';
    if (!all.length) body = SA.render('EmptyState', { title: 'Chưa có hợp đồng', description: 'Hiện chưa có hợp đồng của khách hàng bạn quản lý.' });
    else if (!rows.length) body = SA.render('EmptyState', { title: 'Không tìm thấy hợp đồng phù hợp', actionLabel: filtered ? 'Xóa bộ lọc' : '', actionAttr: filtered ? 'data-action="sa-ct-clear"' : '' });
    else body = rows.map((c) => `<article class="sales-app__card sales-app__ct-card" data-route="/sales-app/hop-dong/${SA.esc(c.id)}" style="cursor:pointer"><div class="sales-app__ct-main"><p class="sales-app__order-id">${SA.esc(c.code)}</p><p class="sales-app__card-title sales-app__ct-name">${SA.esc(c.name)}</p><p class="sales-app__muted">${SA.esc(c.customerCode)} - ${SA.esc(c.customerName)}</p><p class="sales-app__muted">${SA.esc(S().fmtDate(c.startDate))} - ${SA.esc(S().fmtDate(c.endDate))}</p>${SA.render('Pill', { text: c.status, variant: ctPillClass(c.status) })}</div><span class="sales-app__ct-arrow">›</span></article>`).join('');
    const filterOn = !!(st.contractFilter && (st.contractFilter.customer || st.contractFilter.status || st.contractFilter.from || st.contractFilter.to));
    return SA.render('Screen', {
      time: '14:51', lightStatus: true,
      header: SA.render('AppHeader', { variant: 'solid', title: 'Hợp đồng', backRoute: '/sales-app/khac' }),
      body: SA.render('SearchBar', { id: 'sa-ct-q', placeholder: 'Tìm mã HĐ, tên HĐ hoặc khách hàng', value: st.contractQ || '', filterOn, filterAction: 'sa-ct-filter-open' })
        + SA.render('ScrollArea', { className: 'style="padding-bottom:24px"', children: body })
        + contractFilterSheet()
    });
  };

  screens['contract-detail'] = function contractDetail(id) {
    const c = S().findContract(id);
    if (!c) {
      return SA.render('Screen', {
        time: '14:52', lightStatus: true,
        header: SA.render('AppHeader', { variant: 'solid', title: 'Chi tiết hợp đồng', backRoute: '/sales-app/hop-dong' }),
        body: SA.render('EmptyState', { title: 'Không tìm thấy hợp đồng phù hợp' })
      });
    }
    const rows = [['Mã hợp đồng', c.code], ['Tên hợp đồng', c.name], ['Khách hàng', c.customerCode + ' - ' + c.customerName], ['Loại hợp đồng', c.type], ['Ngày ký', S().fmtDate(c.signedDate)], ['Từ ngày', S().fmtDate(c.startDate)], ['Đến ngày', S().fmtDate(c.endDate)]];
    const info = rows.map((r) => `<div class="sales-app__dl-row"><dt>${SA.esc(r[0])}</dt><dd>${SA.esc(r[1] || '—')}</dd></div>`).join('');
    const files = (c.files || []).map((f) => `<div class="sales-app__file"><span class="sales-app__file-ico">📄</span><div class="sales-app__file-meta">${fileNameHtml(f.name)}<span class="sales-app__muted">${SA.esc(f.size || '')}</span></div><button type="button" class="sales-app__file-dl" data-action="sa-ct-download" data-name="${SA.esc(f.name)}">⬇ Download</button></div>`).join('') || `<p class="sales-app__muted">Không có file đính kèm.</p>`;
    return SA.render('Screen', {
      time: '14:52', lightStatus: true,
      header: SA.render('AppHeader', { variant: 'solid', title: 'Chi tiết hợp đồng', backRoute: '/sales-app/hop-dong' }),
      body: SA.render('ScrollArea', { children: `<article class="sales-app__card"><div class="sales-app__dl">${info}<div class="sales-app__dl-row"><dt>Trạng thái</dt><dd>${SA.render('Pill', { text: c.status, variant: ctPillClass(c.status) })}</dd></div>${c.note ? `<div class="sales-app__dl-row"><dt>Ghi chú</dt><dd>${SA.esc(c.note)}</dd></div>` : ''}</div></article><h2 class="sales-app__section">File hợp đồng</h2><article class="sales-app__card sales-app__file-card">${files}</article>` })
    });
  };

  /* --- Màn hình mới từ APK (tab Khác) --- */

  screens.promotions = function promotionsPage() {
    const d = S().store();
    const list = (d.promotions || []).map((p) => SA.render('Card', {
      title: p.name,
      children: `<p class="sales-app__muted">${SA.esc(p.period)}</p><p class="sales-app__muted">${SA.esc(p.desc)}</p>${SA.render('Pill', { text: p.status, variant: p.status === 'Đang chạy' ? 'on' : 'off' })}`
    })).join('');
    return SA.render('Screen', {
      time: '15:00',
      header: SA.render('AppHeader', { variant: 'gradient', title: 'Chương trình khuyến mãi', backRoute: '/sales-app/khac' }),
      body: SA.render('ScrollArea', { children: list || SA.render('EmptyState', { description: 'Chưa có chương trình khuyến mãi' }) })
    });
  };

  screens.notifications = function notificationsPage() {
    const d = S().store();
    const list = (d.notifications || []).map((n) => SA.render('Card', {
      title: n.title,
      children: `<p class="sales-app__muted">${SA.esc(n.time)}</p><p>${SA.esc(n.body)}</p>${n.unread ? SA.render('Pill', { text: 'Mới', variant: 'wait' }) : ''}`
    })).join('');
    return SA.render('Screen', {
      time: '15:01',
      header: SA.render('AppHeader', { variant: 'gradient', title: 'Thông báo', backRoute: '/sales-app/khac' }),
      body: SA.render('ScrollArea', { children: list || SA.render('EmptyState', { description: 'Không có thông báo' }) })
    });
  };

  screens.leave = function leavePage() {
    const d = S().store();
    const list = (d.leaveRequests || []).map((l) => SA.render('Card', {
      title: `${l.from} → ${l.to}`,
      children: `<p class="sales-app__muted">${SA.esc(l.reason)}</p>${SA.render('Pill', { text: l.status, variant: l.status === 'Đã duyệt' ? 'on' : 'wait' })}`
    })).join('');
    return SA.render('Screen', {
      time: '15:02',
      header: SA.render('AppHeader', { variant: 'gradient', title: 'Nghỉ phép', backRoute: '/sales-app/khac', rightAction: `<button type="button" class="sales-app__icon-btn sales-app__icon-btn--chip" data-route="/sales-app/nghi-phep/tao-moi">+</button>` }),
      body: SA.render('ScrollArea', { children: list || SA.render('EmptyState', { description: 'Chưa có yêu cầu nghỉ phép' }) }),
      footer: SA.render('ActionBar', { buttons: [{ label: 'Tạo yêu cầu', route: '/sales-app/nghi-phep/tao-moi' }] })
    });
  };

  screens['leave-create'] = function leaveCreate() {
    return SA.render('Screen', {
      time: '15:03',
      header: SA.render('AppHeader', { variant: 'gradient', title: 'Tạo yêu cầu nghỉ phép', backRoute: '/sales-app/nghi-phep' }),
      body: `<div class="sales-app__form"><input type="date" placeholder="Từ ngày" /><input type="date" placeholder="Đến ngày" /><textarea placeholder="Lý do *" rows="4"></textarea></div>`,
      footer: SA.render('ActionBar', { buttons: [{ label: 'Hủy', variant: 'ghost', route: '/sales-app/nghi-phep' }, { label: 'Gửi yêu cầu', action: 'sa-save-leave' }] })
    });
  };

  screens.survey = function surveyPage() {
    const d = S().store();
    const list = (d.surveys || []).map((s) => SA.render('Card', {
      route: `/sales-app/khao-sat/${s.id}`,
      title: s.name,
      children: `<p class="sales-app__muted">${SA.esc(s.deadline)}</p>${SA.render('Pill', { text: s.status, variant: s.status === 'Hoàn thành' ? 'on' : 'wait' })}`
    })).join('');
    return SA.render('Screen', {
      time: '15:04',
      header: SA.render('AppHeader', { variant: 'gradient', title: 'Khảo sát', backRoute: '/sales-app/khac' }),
      body: SA.render('ScrollArea', { children: list || SA.render('EmptyState', { description: 'Không có khảo sát' }) })
    });
  };

  screens['survey-detail'] = function surveyDetail(id) {
    const s = (S().store().surveys || []).find((x) => String(x.id) === String(id)) || { name: 'Khảo sát', questions: [] };
    const qs = (s.questions || []).map((q, i) => `<div class="sales-app__form"><label class="sales-app__field-label">${i + 1}. ${SA.esc(q)}</label><input placeholder="Nhập câu trả lời" /></div>`).join('');
    return SA.render('Screen', {
      time: '15:05',
      header: SA.render('AppHeader', { variant: 'solid', title: s.name, backRoute: '/sales-app/khao-sat' }),
      body: qs || SA.render('EmptyState', { description: 'Không có câu hỏi' }),
      footer: SA.render('ActionBar', { buttons: [{ label: 'Gửi khảo sát', action: 'sa-save-survey' }] })
    });
  };

  screens.support = function supportPage() {
    const d = S().store();
    const list = (d.supportTickets || []).map((t) => SA.render('Card', {
      route: `/sales-app/ho-tro/${t.id}`,
      title: t.subject,
      children: `<p class="sales-app__muted">${SA.esc(t.created)}</p>${SA.render('Pill', { text: t.status, variant: t.status === 'Đã xử lý' ? 'on' : 'wait' })}`
    })).join('');
    return SA.render('Screen', {
      time: '15:06',
      header: SA.render('AppHeader', { variant: 'gradient', title: 'Hỗ trợ', backRoute: '/sales-app/khac', rightAction: `<button type="button" class="sales-app__icon-btn sales-app__icon-btn--chip" data-route="/sales-app/ho-tro/tao-moi">+</button>` }),
      body: SA.render('ScrollArea', { children: list || SA.render('EmptyState', { description: 'Chưa có yêu cầu hỗ trợ' }) }),
      footer: SA.render('ActionBar', { buttons: [{ label: 'Tạo yêu cầu', route: '/sales-app/ho-tro/tao-moi' }] })
    });
  };

  screens['support-create'] = function supportCreate() {
    return SA.render('Screen', {
      time: '15:07',
      header: SA.render('AppHeader', { variant: 'gradient', title: 'Tạo yêu cầu hỗ trợ', backRoute: '/sales-app/ho-tro' }),
      body: `<div class="sales-app__form"><input placeholder="Tiêu đề *" /><textarea placeholder="Mô tả chi tiết *" rows="5"></textarea></div>`,
      footer: SA.render('ActionBar', { buttons: [{ label: 'Hủy', variant: 'ghost', route: '/sales-app/ho-tro' }, { label: 'Gửi', action: 'sa-save-support' }] })
    });
  };

  screens.settings = function settingsPage() {
    const A = '/sales-app/settings';
    const rows = [
      { label: 'Đổi mật khẩu', icon: 'icon-security.svg', action: '' },
      { label: 'Cài đặt thông báo', icon: 'icon-bell.svg', action: '' },
      { label: 'Phiên bản ứng dụng', icon: 'icon-mobile.svg', action: 'sa-settings-version', badge: 'Mới' },
      { label: 'Đăng xuất', icon: 'icon-logout.svg', action: 'sa-settings-logout' },
      { label: 'Xoá tài khoản', icon: 'icon-delete.svg', action: 'sa-settings-delete', danger: true }
    ];
    const list = rows.map((r, i) => {
      const last = i === rows.length - 1;
      const color = r.danger ? ' style="color:#ef4444"' : '';
      const badge = r.badge
        ? `<span class="sales-app__settings-badge">${SA.esc(r.badge)}</span>`
        : '';
      const act = r.action ? ` data-action="${r.action}"` : '';
      return `<button type="button" class="sales-app__settings-row${last ? ' is-last' : ''}"${act}>
        <img class="sales-app__settings-ico" src="${A}/${r.icon}" width="20" height="20" alt="" />
        <span class="sales-app__settings-label"${color}>${SA.esc(r.label)}</span>
        ${badge}
      </button>`;
    }).join('');
    return SA.render('Screen', {
      time: '9:41',
      lightStatus: true,
      header: SA.render('AppHeader', { variant: 'gradient', title: 'Cài đặt ứng dụng', backRoute: '/sales-app/khac' }),
      body: `<div class="sales-app__settings">
        <div class="sales-app__settings-list">${list}</div>
        <p class="sales-app__settings-ver">Phiên bản 1.0.00</p>
      </div>
      <div class="sales-app__sheet is-hidden" id="sa-logout-sheet" hidden>
        <div class="sales-app__sheet-backdrop" data-action="sa-logout-cancel"></div>
        <div class="sales-app__sheet-panel sales-app__settings-dialog" role="dialog" aria-modal="true" aria-labelledby="sa-logout-title">
          <h2 id="sa-logout-title" class="sales-app__settings-dialog-title">Đăng xuất?</h2>
          <p class="sales-app__settings-dialog-desc">Bạn sẽ cần đăng nhập lại để tiếp tục sử dụng ứng dụng.</p>
          <div class="sales-app__sheet-actions">
            <button type="button" class="ghost" data-action="sa-logout-cancel">Hủy</button>
            <button type="button" class="primary" data-action="sa-logout">Đăng xuất</button>
          </div>
        </div>
      </div>
      <div class="sales-app__sheet is-hidden" id="sa-delete-sheet" hidden>
        <div class="sales-app__sheet-backdrop" data-action="sa-delete-cancel"></div>
        <div class="sales-app__sheet-panel sales-app__settings-dialog" role="dialog" aria-modal="true" aria-labelledby="sa-delete-title">
          <h2 id="sa-delete-title" class="sales-app__settings-dialog-title">Xoá tài khoản?</h2>
          <p class="sales-app__settings-dialog-desc">Tài khoản sẽ bị xoá khỏi phiên mockup. Thao tác này không thể hoàn tác trong demo.</p>
          <div class="sales-app__sheet-actions">
            <button type="button" class="ghost" data-action="sa-delete-cancel">Hủy</button>
            <button type="button" class="sales-app__settings-danger-btn" data-action="sa-logout">Xoá tài khoản</button>
          </div>
        </div>
      </div>`
    });
  };

  screens.notes = function notesPage() {
    const d = S().store();
    const list = (d.notes || []).map((n) => SA.render('Card', {
      title: n.title,
      children: `<p class="sales-app__muted">${SA.esc(n.time)}</p><p>${SA.esc(n.body)}</p>`
    })).join('');
    return SA.render('Screen', {
      time: '15:09',
      header: SA.render('AppHeader', { variant: 'gradient', title: 'Ghi chú', backRoute: '/sales-app/khac', rightAction: `<button type="button" class="sales-app__icon-btn sales-app__icon-btn--chip">+</button>` }),
      body: SA.render('ScrollArea', { children: list || SA.render('EmptyState', { description: 'Chưa có ghi chú' }) })
    });
  };

  global.SAScreens = screens;
})(window);
