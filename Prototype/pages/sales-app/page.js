(function () {
  'use strict';

  const ICO = {
    visit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="10" r="3"/><path d="M12 21s7-7.2 7-11a7 7 0 10-14 0c0 3.8 7 11 7 11z"/></svg>',
    report: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19V9M12 19V5M20 19v-7"/></svg>',
    order: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6h15l-1.5 9h-12z"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M6 6L5 3H2"/></svg>',
    more: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
    back: '‹',
    user: '👤'
  };

  function S() { return window.SalesAppShared; }
  function esc(s) { return DMS.escape(s == null ? '' : s); }

  function navItem(key, label, icon, active) {
    const routes = {
      'vieng-tham': '/sales-app/vieng-tham',
      'bao-cao': '/sales-app/bao-cao',
      'don-hang': '/sales-app/don-hang',
      khac: '/sales-app/khac'
    };
    return `<button type="button" class="sales-app__nav-item ${active === key ? 'is-active' : ''}" data-route="${routes[key]}">
      ${icon}<span>${label}</span>
    </button>`;
  }

  function bottomNav(active) {
    return `<nav class="sales-app__nav">
      ${navItem('vieng-tham', 'Viếng thăm', ICO.visit, active)}
      ${navItem('bao-cao', 'Báo cáo', ICO.report, active)}
      ${navItem('don-hang', 'Đơn hàng', ICO.order, active)}
      ${navItem('khac', 'Khác', ICO.more, active)}
    </nav>`;
  }

  function statusBar(time, light) {
    return `<div class="sales-app__status ${light ? 'is-light' : ''}"><span>${esc(time || '14:49')}</span><span>▮▮▮ LTE</span></div>`;
  }

  function shell(inner, opts = {}) {
    const back = opts.hideBack ? '' : `<button type="button" class="sales-app__back" data-route="/dashboard">← Quay lại DMS</button>`;
    return `<div class="sales-app">
      ${back}
      <div class="sales-app__phone">
        ${statusBar(opts.time, opts.lightStatus)}
        <div class="sales-app__screen">${inner}</div>
      </div>
    </div>`;
  }

  function renderLogin() {
    return shell(`<div class="sales-app__login">
      <div class="sales-app__login-brand">
        <div class="sales-app__login-logo">🏃</div>
        <h1>ECO<span>salesman</span></h1>
        <p class="hint">Đăng nhập với mã nhân viên của bạn</p>
      </div>
      <div class="sales-app__login-form">
        <input id="sa-emp" placeholder="Nhập mã nhân viên" />
        <input id="sa-pass" type="password" placeholder="Nhập mật khẩu" />
        <label><input type="checkbox" /> Ghi nhớ mật khẩu</label>
        <button type="button" class="sales-app__login-btn" data-action="sa-login">Đăng nhập</button>
        <div class="sales-app__login-links">
          <p class="link">Quên mật khẩu?</p>
          <p>Bạn chưa có tài khoản? <span class="link">Đăng ký</span></p>
        </div>
      </div>
      <div class="sales-app__login-foot">
        <p>Chính sách &amp; điều khoản sử dụng</p>
        <p>HT-uat</p>
        <p>v0.0.1 (131)</p>
      </div>
    </div>`, { time: '14:44' });
  }

  function visitList() {
    const d = S().store();
    const st = S().state();
    const q = (st.visitQ || '').toLowerCase();
    const rows = (d.visits || []).filter((v) => {
      if (!q) return true;
      return [v.code, v.name, v.phone, v.address].join(' ').toLowerCase().includes(q);
    });
    const emp = d.employee;
    const rt = d.route;
    const cards = rows.map((v) => `<article class="sales-app__card">
      <p class="sales-app__card-title">${esc(v.code)} - ${esc(v.name)}</p>
      <div class="sales-app__row"><span class="sales-app__muted">${esc(v.phone)}</span><span class="sales-app__muted">${esc(v.distance)}</span></div>
      <div class="sales-app__row"><span class="sales-app__muted">${esc(v.address)}</span></div>
      <button type="button" class="sales-app__cta" data-route="/sales-app/vieng-tham/${esc(v.code)}">Viếng thăm</button>
    </article>`).join('');
    return shell(`
      <div class="sales-app__header">
        <div class="sales-app__header-row">
          <div class="sales-app__avatar">${ICO.user}</div>
          <div><div class="sales-app__user-name">${esc(emp.name)}</div><div class="sales-app__user-code">${esc(emp.code)}</div></div>
        </div>
      </div>
      <div class="sales-app__route"><span>${esc(rt.code)} - ${esc(rt.label)}</span></div>
      <div class="sales-app__search-row">
        <div class="sales-app__search">
          <span>⌕</span>
          <input id="sa-visit-q" placeholder="Nhập mã, tên, số điện thoại hoặc địa chỉ khách hàng" value="${esc(st.visitQ || '')}" />
        </div>
        <button type="button" class="sales-app__search-filter">☰</button>
      </div>
      <div class="sales-app__list-head">
        <h2>Danh sách khách hàng (${rows.length}/32)</h2>
        <button type="button">Sắp xếp ▾</button>
      </div>
      <div class="sales-app__scroll">${cards || '<p class="sales-app__empty">Không có dữ liệu</p>'}</div>
      ${bottomNav('vieng-tham')}
    `, { time: '14:49' });
  }

  function visitDetail(id) {
    const v = S().findVisit(id);
    const started = !!S().state().visitStarted[id];
    const tasks = [
      { label: 'Đặt hàng', route: `/sales-app/vieng-tham/${id}/don-hang` },
      { label: 'Chương trình trưng bày' },
      { label: 'Chương trình tích lũy' },
      { label: 'Tồn kho' },
      { label: 'Khảo sát' },
      { label: 'Bày hàng', required: true }
    ];
    const taskHtml = tasks.map((t) => `<button type="button" class="sales-app__task" ${t.route ? `data-route="${esc(t.route)}"` : ''}>
      <span>${esc(t.label)}${t.required ? ' *' : ''}</span>
      <span>${started && t.route ? '16:32' : '›'}</span>
    </button>`).join('');
    return shell(`
      <div class="sales-app__header sales-app__header--solid">
        <div class="sales-app__header-row">
          <button type="button" class="sales-app__icon-btn" data-route="/sales-app/vieng-tham">${ICO.back}</button>
          <h1 class="sales-app__title">Viếng thăm</h1>
          <span></span>
        </div>
      </div>
      <div class="sales-app__scroll" style="padding-top:12px">
        <article class="sales-app__card">
          <div style="display:flex;gap:12px">
            <div style="font-size:28px">🏪</div>
            <div>
              <p class="sales-app__card-title">${esc(v.code)} - ${esc(v.name)}</p>
              <p class="sales-app__muted">-</p>
              <p class="sales-app__muted">${esc(v.address)}</p>
            </div>
          </div>
        </article>
        <div style="text-align:center;margin:16px 0">
          ${started ? '' : `<button type="button" class="sales-app__cta" style="max-width:240px" data-action="sa-start-visit" data-id="${esc(id)}">Bắt đầu viếng thăm</button>`}
          <p class="sales-app__muted" style="font-style:italic;margin-top:12px">*Bạn cần thực hiện hết các bước bắt buộc<br/>trước khi rời khỏi khách hàng.</p>
        </div>
        ${taskHtml}
      </div>
      ${started ? `<div class="sales-app__action-bar"><button type="button" class="primary" data-route="/sales-app/vieng-tham">Rời khách hàng</button></div>` : ''}
    `, { time: '22:35', lightStatus: true });
  }

  function visitOrders(id) {
    const orders = S().store().orders || [];
    const cards = orders.map((o) => orderCard(o, id)).join('');
    return shell(`
      <div class="sales-app__header sales-app__header--solid">
        <div class="sales-app__header-row">
          <button type="button" class="sales-app__icon-btn" data-route="/sales-app/vieng-tham/${esc(id)}">${ICO.back}</button>
          <h1 class="sales-app__title">Đơn hàng</h1>
          <button type="button" class="sales-app__icon-btn sales-app__icon-btn--chip" data-route="/sales-app/vieng-tham/${esc(id)}/tao-don-hang">+</button>
        </div>
      </div>
      <div class="sales-app__scroll">${cards}</div>
      <div class="sales-app__action-bar">
        <button type="button" class="primary" data-route="/sales-app/vieng-tham/${esc(id)}/tao-don-hang">Tạo đơn hàng</button>
      </div>
    `, { time: '23:12', lightStatus: true });
  }

  function orderCard(o, visitId) {
    const href = visitId ? `/sales-app/vieng-tham/${visitId}/don-hang/${o.id}` : `/sales-app/don-hang`;
    return `<article class="sales-app__card" data-route="${esc(href)}" style="cursor:pointer">
      <div class="sales-app__header-row" style="margin-bottom:4px">
        <span class="sales-app__order-id">${esc(o.id)}</span>
        <span style="font-size:12px;font-weight:700">${esc(o.status || 'Khởi tạo')}</span>
      </div>
      <p class="sales-app__muted">${esc(o.time)}</p>
      <div class="sales-app__store-box">
        <p class="sales-app__card-title">🏪 ${esc(o.storeName)}</p>
        <p class="sales-app__muted">${esc(o.storeAddress)}</p>
        <p class="sales-app__muted" style="color:#60a5fa">${esc(o.storeId)}</p>
      </div>
      <p class="sales-app__muted">Đại lý: ${esc(o.distributor)}</p>
      <p class="sales-app__muted">Nguồn tạo: ${esc(o.source)} · Loại đơn: ${esc(o.type)}</p>
      <div class="sales-app__header-row" style="margin-top:10px;border-top:1px solid #f1f5f9;padding-top:10px">
        <span>Giá trị đơn hàng</span>
        <span class="sales-app__money">${esc(o.total)}</span>
      </div>
    </article>`;
  }

  function orderDetail(visitId, orderId) {
    const o = S().findOrder(orderId) || (S().store().orders || [])[0] || {};
    const products = S().store().products || [];
    const lines = products.map((p) => `<div class="sales-app__prod">
      <div><div class="sales-app__card-title">${esc(p.id)}</div><div class="sales-app__muted">${esc(p.name)}</div></div>
      <div class="sales-app__muted">${esc(String(p.price))} đ / ${esc(p.uom)}</div>
    </div>`).join('');
    return shell(`
      <div class="sales-app__header sales-app__header--solid">
        <div class="sales-app__header-row">
          <button type="button" class="sales-app__icon-btn" data-route="/sales-app/vieng-tham/${esc(visitId)}/don-hang">${ICO.back}</button>
          <h1 class="sales-app__title">${esc(o.id || orderId)}</h1>
          <span></span>
        </div>
      </div>
      <div class="sales-app__scroll">
        <p class="sales-app__muted">${esc(o.time)}</p>
        <p class="sales-app__card-title">${esc(o.storeName)}</p>
        <p class="sales-app__muted">${esc(o.storeAddress)}</p>
        ${lines}
        <div class="sales-app__header-row"><span>Tổng</span><span class="sales-app__money">${esc(o.total || '0 đ')}</span></div>
      </div>
    `, { time: '23:20', lightStatus: true });
  }

  function createOrder(visitId, step) {
    const products = S().store().products || [];
    const cart = S().state().cart;
    const title = {
      '': 'Tạo đơn hàng',
      'san-pham': 'Sản phẩm',
      'san-pham/bo-loc': 'Bộ lọc',
      'san-pham/khuyen-mai': 'Khuyến mãi',
      'san-pham/xac-nhan': 'Xác nhận',
      'san-pham/xac-nhan/bao-gia': 'Báo giá'
    }[step] || 'Tạo đơn hàng';
    const back = step
      ? `/sales-app/vieng-tham/${visitId}/tao-don-hang` + (step.includes('/') ? '/' + step.split('/').slice(0, -1).join('/') : '')
      : `/sales-app/vieng-tham/${visitId}/don-hang`;
    let body = '';
    if (!step) {
      body = `<p class="sales-app__empty">Chưa có sản phẩm. Thêm sản phẩm để tạo đơn.</p>`;
    } else if (step === 'san-pham') {
      body = products.map((p) => {
        const qty = cart[p.id] || 0;
        return `<div class="sales-app__prod">
          <div><div class="sales-app__card-title">${esc(p.id)}</div><div class="sales-app__muted">${esc(p.name)}</div>
            <div class="sales-app__muted">${esc(String(p.price))} đ / ${esc(p.uom)}</div></div>
          <div class="sales-app__stepper">
            <button type="button" data-action="sa-qty" data-id="${esc(p.id)}" data-d="-1">−</button>
            <span>${qty}</span>
            <button type="button" data-action="sa-qty" data-id="${esc(p.id)}" data-d="1">+</button>
          </div>
        </div>`;
      }).join('');
    } else if (step === 'san-pham/bo-loc') {
      body = `<div class="sales-app__form"><input placeholder="Nhóm sản phẩm" /><input placeholder="Ngành hàng" /><label><input type="checkbox"/> Chỉ hiện còn hàng</label></div>`;
    } else if (step === 'san-pham/khuyen-mai') {
      body = `<article class="sales-app__card"><p class="sales-app__card-title">CTKM mặc định</p><p class="sales-app__muted">Chiết khấu theo dòng hàng — clone từ VIGO mock.</p></article>`;
    } else if (step.indexOf('xac-nhan') === 0) {
      const lines = products.filter((p) => cart[p.id] > 0);
      body = (lines.length ? lines : products).map((p) => `<div class="sales-app__prod"><div>${esc(p.name)}</div><div>${cart[p.id] || 1} ${esc(p.uom)}</div></div>`).join('');
      if (step.indexOf('bao-gia') >= 0) body += `<p class="sales-app__muted" style="margin-top:12px">Phiếu báo giá (prototype)</p>`;
    }
    const bar = !step
      ? `<div class="sales-app__action-bar"><button type="button" class="primary" data-route="/sales-app/vieng-tham/${esc(visitId)}/tao-don-hang/san-pham">Thêm sản phẩm</button></div>`
      : step === 'san-pham'
        ? `<div class="sales-app__action-bar">
            <button type="button" class="ghost" data-route="/sales-app/vieng-tham/${esc(visitId)}/tao-don-hang/san-pham/bo-loc">Bộ lọc</button>
            <button type="button" class="ghost" data-route="/sales-app/vieng-tham/${esc(visitId)}/tao-don-hang/san-pham/khuyen-mai">Khuyến mãi</button>
            <button type="button" class="primary" data-route="/sales-app/vieng-tham/${esc(visitId)}/tao-don-hang/san-pham/xac-nhan">Xác nhận</button>
          </div>`
        : step === 'san-pham/xac-nhan'
          ? `<div class="sales-app__action-bar">
              <button type="button" class="ghost" data-route="/sales-app/vieng-tham/${esc(visitId)}/tao-don-hang/san-pham/xac-nhan/bao-gia">Báo giá</button>
              <button type="button" class="primary" data-action="sa-confirm-order" data-id="${esc(visitId)}">Hoàn tất</button>
            </div>`
          : `<div class="sales-app__action-bar"><button type="button" class="primary" data-route="${esc(back)}">Xong</button></div>`;
    return shell(`
      <div class="sales-app__header sales-app__header--solid">
        <div class="sales-app__header-row">
          <button type="button" class="sales-app__icon-btn" data-route="${esc(back)}">${ICO.back}</button>
          <h1 class="sales-app__title">${esc(title)}</h1>
          <span></span>
        </div>
      </div>
      <div class="sales-app__scroll">${body}</div>
      ${bar}
    `, { time: '16:28', lightStatus: true });
  }

  function reports() {
    return shell(`
      <div class="sales-app__header">
        <div class="sales-app__header-row">
          <h1 class="sales-app__title">Báo cáo</h1>
        </div>
      </div>
      <div class="sales-app__scroll"><p class="sales-app__empty">Chưa có báo cáo trong source Mobile.</p></div>
      ${bottomNav('bao-cao')}
    `, { time: '14:49' });
  }

  function ordersPage() {
    const st = S().state();
    const tabs = ['Khởi tạo', 'Đã duyệt', 'Đã xuất kho', 'Đã hủy'];
    const chips = tabs.map((t) => `<button type="button" class="sales-app__chip ${st.orderStatus === t ? 'is-active' : ''}" data-action="sa-order-tab" data-tab="${esc(t)}">${esc(t)}</button>`).join('');
    const list = (S().store().orders || []).map((o) => orderCard({ ...o, status: st.orderStatus })).join('');
    return shell(`
      <div class="sales-app__header sales-app__header--solid">
        <div class="sales-app__order-tabs">${chips}</div>
      </div>
      <div class="sales-app__search-row">
        <div class="sales-app__search" style="border-radius:999px;background:#f1f5f9">
          <span>⌕</span>
          <input placeholder="Nhập mã đơn hàng, số dt cửa hàng, ..." />
        </div>
      </div>
      <div class="sales-app__scroll">
        <div class="sales-app__section">Hôm nay</div>
        ${list}
        <div class="sales-app__section">15-07-2026</div>
        ${list ? list.split('</article>')[0] + '</article>' : ''}
      </div>
      ${bottomNav('don-hang')}
    `, { time: '23:56', lightStatus: true });
  }

  function morePage() {
    const d = S().store();
    const items = (d.moreMenu || []).map((m) => {
      const routes = { 'khach-hang': '/sales-app/khach-hang', 'hop-dong': '/sales-app/hop-dong', 'telling-story': '/sales-app/telling-story' };
      const go = m.key === 'hop-dong'
        ? 'data-action="sa-ct-open"'
        : (routes[m.key] ? `data-route="${routes[m.key]}"` : '');
      const icon = { percent: '%', store: '🏪', bell: '🔔', calendar: '📅', clipboard: '📋', headset: '🎧', settings: '⚙', file: '📄', book: '📖' }[m.icon] || '•';
      return `<button type="button" class="sales-app__more-item" ${go}>
        <span>${icon}</span><span style="flex:1">${esc(m.label)}</span>
        ${m.badge ? `<span class="sales-app__badge">${m.badge}</span>` : ''}
        <span style="color:#cbd5e1">›</span>
      </button>`;
    }).join('');
    return shell(`
      <div class="sales-app__header">
        <div class="sales-app__header-row">
          <div class="sales-app__avatar">${ICO.user}</div>
          <div style="flex:1"><div class="sales-app__user-name">${esc(d.employee.name)}</div><div class="sales-app__user-code">${esc(d.employee.code)}</div></div>
          <div class="sales-app__sub" style="text-align:right">
            <div>Bắt đầu lúc 14:49:14</div>
            <button type="button" class="sales-app__end-day">Kết thúc ngày công</button>
          </div>
        </div>
      </div>
      <p class="sales-app__muted" style="padding:12px 16px 0;font-weight:600;font-size:11px;letter-spacing:.02em">TUYẾN ĐÃ CHỌN</p>
      <div class="sales-app__route"><span>${esc(d.route.code)} - ${esc(d.route.fullLabel)}</span></div>
      <div class="sales-app__scroll" style="padding:8px 0 0;background:#fff">${items}</div>
      <div class="sales-app__qr"><button type="button">▣ Mã QR của tôi</button></div>
      ${bottomNav('khac')}
    `, { time: '14:49' });
  }

  function customersPage() {
    const d = S().store();
    const st = S().state();
    const q = (st.custQ || '').toLowerCase();
    const tab = st.custTab || 'cham-soc';
    let body = '';
    if (tab === 'cham-soc') {
      const rows = (d.careCustomers || []).filter((c) => !q || [c.code, c.name, c.phone].join(' ').toLowerCase().includes(q));
      body = rows.map((c) => `<article class="sales-app__card" data-route="/sales-app/khach-hang/cham-soc/${esc(c.code)}" style="cursor:pointer">
        <p class="sales-app__card-title">${esc(c.name)} - ${esc(c.code)}</p>
        <p class="sales-app__muted" style="margin-left:20px">${esc(c.phone)}</p>
        <p class="sales-app__muted" style="margin-left:20px">${esc(c.address)}</p>
      </article>`).join('');
    } else {
      body = (d.newCustomers || []).map((g) => {
        const items = (g.items || []).filter((c) => !q || [c.id, c.name].join(' ').toLowerCase().includes(q));
        if (!items.length) return '';
        return `<div class="sales-app__section">${esc(g.date)}</div>` + items.map((c) => `<article class="sales-app__card" data-route="/sales-app/khach-hang/chi-tiet/${esc(c.id)}" style="cursor:pointer">
          <p class="sales-app__card-title">${esc(c.name)} - ${esc(c.id)}</p>
          <p class="sales-app__muted">${esc(c.address)}</p>
          <div class="sales-app__header-row" style="margin-top:8px;border-top:1px solid #f1f5f9;padding-top:8px">
            <span class="sales-app__muted">${esc(c.time)}</span>
            <span class="sales-app__pill ${c.status === 'Hoạt động' ? 'sales-app__pill--on' : 'sales-app__pill--off'}">${esc(c.status)}</span>
          </div>
        </article>`).join('');
      }).join('');
    }
    return shell(`
      <div class="sales-app__header">
        <div class="sales-app__header-row">
          <button type="button" class="sales-app__icon-btn" data-route="/sales-app/khac">${ICO.back}</button>
          <h1 class="sales-app__title">Khách hàng</h1>
          <button type="button" class="sales-app__icon-btn sales-app__icon-btn--chip" data-route="/sales-app/khach-hang/tao-moi">+</button>
        </div>
      </div>
      <div class="sales-app__tabs">
        <button type="button" class="sales-app__tab ${tab === 'cham-soc' ? 'is-active' : ''}" data-action="sa-cust-tab" data-tab="cham-soc">Chăm sóc</button>
        <button type="button" class="sales-app__tab ${tab === 'mo-moi' ? 'is-active' : ''}" data-action="sa-cust-tab" data-tab="mo-moi">Mở mới</button>
      </div>
      <div class="sales-app__search-row">
        <div class="sales-app__search">
          <span>⌕</span>
          <input id="sa-cust-q" placeholder="Nhập mã, tên, số điện thoại khách hàng" value="${esc(st.custQ || '')}" />
        </div>
        <button type="button" class="sales-app__search-filter">☰</button>
      </div>
      <div class="sales-app__scroll">${body || '<p class="sales-app__empty">Không có dữ liệu</p>'}</div>
    `, { time: '14:50' });
  }

  function customerCreate() {
    return shell(`
      <div class="sales-app__header">
        <div class="sales-app__header-row">
          <button type="button" class="sales-app__icon-btn" data-route="/sales-app/khach-hang">${ICO.back}</button>
          <h1 class="sales-app__title">Tạo mới khách hàng</h1>
          <span></span>
        </div>
      </div>
      <div class="sales-app__form">
        <input placeholder="Mã khách hàng" />
        <input placeholder="Tên khách hàng *" />
        <input placeholder="Số điện thoại *" />
        <input placeholder="Địa chỉ" />
      </div>
      <div class="sales-app__action-bar">
        <button type="button" class="ghost" data-route="/sales-app/khach-hang">Hủy</button>
        <button type="button" class="primary" data-action="sa-save-customer">Lưu</button>
      </div>
    `, { time: '14:50' });
  }

  function customerDetail(id) {
    const c = S().findNewCustomer(id) || S().findVisit(id);
    return shell(`
      <div class="sales-app__header">
        <div class="sales-app__header-row">
          <button type="button" class="sales-app__icon-btn" data-route="/sales-app/khach-hang">${ICO.back}</button>
          <h1 class="sales-app__title">Chi tiết khách hàng</h1>
          <span></span>
        </div>
      </div>
      <div class="sales-app__scroll">
        <article class="sales-app__card">
          <p class="sales-app__card-title">${esc(c.name || c.code)} - ${esc(c.id || c.code)}</p>
          <p class="sales-app__muted">${esc(c.address || '—')}</p>
          <p class="sales-app__muted">${esc(c.phone || '—')}</p>
          ${c.status ? `<span class="sales-app__pill ${c.status === 'Hoạt động' ? 'sales-app__pill--on' : 'sales-app__pill--off'}">${esc(c.status)}</span>` : ''}
        </article>
      </div>
    `, { time: '14:51' });
  }

  function customerCare(id) {
    const c = S().findVisit(id);
    const tasks = [
      { id: 'dat-hang', label: 'Đặt hàng', route: `/sales-app/vieng-tham/${id}/don-hang` },
      { id: 'cttb', label: 'Chương trình trưng bày' },
      { id: 'cttl', label: 'Chương trình tích lũy' },
      { id: 'ks', label: 'Khảo sát' },
      { id: 'bh', label: 'Bày hàng' },
      { id: 'tk', label: 'Tồn kho' }
    ];
    return shell(`
      <div class="sales-app__header">
        <div class="sales-app__header-row">
          <button type="button" class="sales-app__icon-btn" data-route="/sales-app/khach-hang">${ICO.back}</button>
          <h1 class="sales-app__title">Chăm sóc khách hàng</h1>
          <button type="button" class="sales-app__icon-btn" data-route="/sales-app/khach-hang/chi-tiet/${esc(id)}">ℹ</button>
        </div>
      </div>
      <div class="sales-app__scroll" style="margin-top:-8px">
        <article class="sales-app__card">
          <div style="display:flex;gap:12px"><div style="font-size:24px">🏪</div>
          <div>
            <p class="sales-app__card-title">${esc(c.code)} - ${esc(c.name)}</p>
            <p class="sales-app__muted">${esc(c.address)}</p>
          </div></div>
        </article>
        ${tasks.map((t) => `<button type="button" class="sales-app__task" ${t.route ? `data-route="${esc(t.route)}"` : ''}><span>${esc(t.label)}</span><span>›</span></button>`).join('')}
      </div>
    `, { time: '23:12' });
  }

  const CT_STATUSES = ['Chờ duyệt', 'Đã duyệt', 'Từ chối', 'Hết hiệu lực'];

  function ctPillClass(status) {
    if (status === 'Đã duyệt') return 'sales-app__pill--on';
    if (status === 'Chờ duyệt') return 'sales-app__pill--wait';
    if (status === 'Từ chối') return 'sales-app__pill--reject';
    return 'sales-app__pill--off';
  }

  function fileNameHtml(name) {
    const raw = String(name || '');
    const i = raw.lastIndexOf('.');
    if (i <= 0) return `<span class="sales-app__file-name">${esc(raw)}</span>`;
    return `<span class="sales-app__file-name"><span class="sales-app__file-base">${esc(raw.slice(0, i))}</span><span class="sales-app__file-ext">${esc(raw.slice(i))}</span></span>`;
  }

  function showSaToast(msg) {
    const phone = document.querySelector('.sales-app__phone');
    if (!phone) {
      if (window.DMS && DMS.get) DMS.get('Toast').show(msg, 'success');
      return;
    }
    const old = phone.querySelector('.sales-app__toast');
    if (old) old.remove();
    const t = document.createElement('div');
    t.className = 'sales-app__toast';
    t.textContent = msg;
    phone.appendChild(t);
    setTimeout(function () { t.remove(); }, 2200);
  }

  function contractFilterSheet() {
    const st = S().state();
    if (!st.contractFilterOpen) return '';
    const d = st.contractDraft || st.contractFilter || S().emptyContractFilter();
    const customers = S().managedCustomers();
    const custOpts = ['<option value="">Tất cả</option>']
      .concat(customers.map((c) => `<option value="${esc(c.code)}" ${d.customer === c.code ? 'selected' : ''}>${esc(c.code)} - ${esc(c.name)}</option>`))
      .join('');
    const stOpts = ['<option value="">Tất cả</option>']
      .concat(CT_STATUSES.map((s) => `<option value="${esc(s)}" ${d.status === s ? 'selected' : ''}>${esc(s)}</option>`))
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
            <input id="sa-ct-f-from" type="date" class="sales-app__select" value="${esc(d.from || '')}" />
          </label>
          <label class="sales-app__date-field">Đến ngày
            <input id="sa-ct-f-to" type="date" class="sales-app__select" value="${esc(d.to || '')}" />
          </label>
        </div>
        <div class="sales-app__sheet-actions">
          <button type="button" class="ghost" data-action="sa-ct-filter-reset">Đặt lại</button>
          <button type="button" class="primary" data-action="sa-ct-filter-apply">Áp dụng</button>
        </div>
      </div>
    </div>`;
  }

  function contractCard(c) {
    return `<article class="sales-app__card sales-app__ct-card" data-route="/sales-app/hop-dong/${esc(c.id)}" style="cursor:pointer">
      <div class="sales-app__ct-main">
        <p class="sales-app__order-id">${esc(c.code)}</p>
        <p class="sales-app__card-title sales-app__ct-name">${esc(c.name)}</p>
        <p class="sales-app__muted">${esc(c.customerCode)} - ${esc(c.customerName)}</p>
        <p class="sales-app__muted">${esc(S().fmtDate(c.startDate))} - ${esc(S().fmtDate(c.endDate))}</p>
        <span class="sales-app__pill ${ctPillClass(c.status)}">${esc(c.status)}</span>
      </div>
      <span class="sales-app__ct-arrow">›</span>
    </article>`;
  }

  function contractsPage() {
    const st = S().state();
    if (st.contractLoading) {
      if (!st._contractLoadTimer) {
        st._contractLoadTimer = true;
        setTimeout(function () {
          st.contractLoading = false;
          st._contractLoadTimer = false;
          const path = (location.hash.slice(1).split('?')[0] || '').replace(/\/+$/, '');
          if (path !== '/sales-app/hop-dong') return;
          const el = DMSRouter.contentEl;
          if (!el) return;
          el.innerHTML = contractsPage();
          bindSalesApp(el);
        }, 450);
      }
      return shell(`
        <div class="sales-app__header sales-app__header--solid">
          <div class="sales-app__header-row">
            <button type="button" class="sales-app__icon-btn" data-route="/sales-app/khac">${ICO.back}</button>
            <h1 class="sales-app__title">Hợp đồng</h1>
            <span class="sales-app__icon-btn"></span>
          </div>
        </div>
        <div class="sales-app__loading"><div class="sales-app__spinner"></div><p>Đang tải danh sách hợp đồng...</p></div>
      `, { time: '14:51', lightStatus: true });
    }

    const all = S().myContracts();
    const rows = S().filterContracts();
    const q = st.contractQ || '';
    const filtered = S().hasContractFilter();
    let body = '';
    if (!all.length) {
      body = `<div class="sales-app__empty">
        <p class="sales-app__empty-title">Chưa có hợp đồng</p>
        <p>Hiện chưa có hợp đồng của khách hàng bạn quản lý.</p>
      </div>`;
    } else if (!rows.length) {
      body = `<div class="sales-app__empty">
        <p class="sales-app__empty-title">Không tìm thấy hợp đồng phù hợp</p>
        ${filtered ? `<button type="button" class="sales-app__empty-action" data-action="sa-ct-clear">Xóa bộ lọc</button>` : ''}
      </div>`;
    } else {
      body = rows.map(contractCard).join('');
    }
    const filterOn = !!(st.contractFilter && (st.contractFilter.customer || st.contractFilter.status || st.contractFilter.from || st.contractFilter.to));

    return shell(`
      <div class="sales-app__header sales-app__header--solid">
        <div class="sales-app__header-row">
          <button type="button" class="sales-app__icon-btn" data-route="/sales-app/khac">${ICO.back}</button>
          <h1 class="sales-app__title">Hợp đồng</h1>
          <span class="sales-app__icon-btn"></span>
        </div>
      </div>
      <div class="sales-app__search-row">
        <div class="sales-app__search">
          <span>⌕</span>
          <input id="sa-ct-q" type="search" placeholder="Tìm mã HĐ, tên HĐ hoặc khách hàng" value="${esc(q)}" />
        </div>
        <button type="button" class="sales-app__search-filter ${filterOn ? 'is-on' : ''}" data-action="sa-ct-filter-open" aria-label="Bộ lọc">☰</button>
      </div>
      <div class="sales-app__scroll" style="padding-bottom:24px">${body}</div>
      ${contractFilterSheet()}
    `, { time: '14:51', lightStatus: true });
  }

  function contractDetail(id) {
    const c = S().findContract(id);
    if (!c) {
      return shell(`
        <div class="sales-app__header sales-app__header--solid">
          <div class="sales-app__header-row">
            <button type="button" class="sales-app__icon-btn" data-route="/sales-app/hop-dong">${ICO.back}</button>
            <h1 class="sales-app__title">Chi tiết hợp đồng</h1>
            <span class="sales-app__icon-btn"></span>
          </div>
        </div>
        <div class="sales-app__empty">
          <p class="sales-app__empty-title">Không tìm thấy hợp đồng phù hợp</p>
        </div>
      `, { time: '14:52', lightStatus: true });
    }
    const rows = [
      ['Mã hợp đồng', c.code],
      ['Tên hợp đồng', c.name],
      ['Khách hàng', c.customerCode + ' - ' + c.customerName],
      ['Loại hợp đồng', c.type],
      ['Ngày ký', S().fmtDate(c.signedDate)],
      ['Từ ngày', S().fmtDate(c.startDate)],
      ['Đến ngày', S().fmtDate(c.endDate)]
    ];
    const info = rows.map((r) => `<div class="sales-app__dl-row">
      <dt>${esc(r[0])}</dt>
      <dd>${esc(r[1] || '—')}</dd>
    </div>`).join('');
    const files = (c.files || []).map((f) => `<div class="sales-app__file">
      <span class="sales-app__file-ico">📄</span>
      <div class="sales-app__file-meta">
        ${fileNameHtml(f.name)}
        <span class="sales-app__muted">${esc(f.size || '')}</span>
      </div>
      <button type="button" class="sales-app__file-dl" data-action="sa-ct-download" data-name="${esc(f.name)}">⬇ Download</button>
    </div>`).join('') || `<p class="sales-app__muted">Không có file đính kèm.</p>`;

    return shell(`
      <div class="sales-app__header sales-app__header--solid">
        <div class="sales-app__header-row">
          <button type="button" class="sales-app__icon-btn" data-route="/sales-app/hop-dong">${ICO.back}</button>
          <h1 class="sales-app__title">Chi tiết hợp đồng</h1>
          <span class="sales-app__icon-btn"></span>
        </div>
      </div>
      <div class="sales-app__scroll">
        <article class="sales-app__card">
          <div class="sales-app__dl">${info}
            <div class="sales-app__dl-row">
              <dt>Trạng thái</dt>
              <dd><span class="sales-app__pill ${ctPillClass(c.status)}">${esc(c.status)}</span></dd>
            </div>
            ${c.note ? `<div class="sales-app__dl-row"><dt>Ghi chú</dt><dd>${esc(c.note)}</dd></div>` : ''}
          </div>
        </article>
        <h2 class="sales-app__section">File hợp đồng</h2>
        <article class="sales-app__card sales-app__file-card">${files}</article>
      </div>
    `, { time: '14:52', lightStatus: true });
  }

  function readContractDraftFromDom() {
    const empty = S().emptyContractFilter();
    const cust = document.getElementById('sa-ct-f-cust');
    const status = document.getElementById('sa-ct-f-status');
    const from = document.getElementById('sa-ct-f-from');
    const to = document.getElementById('sa-ct-f-to');
    return {
      customer: cust ? cust.value : empty.customer,
      status: status ? status.value : empty.status,
      from: from ? from.value : empty.from,
      to: to ? to.value : empty.to
    };
  }

  function tsViewer() {
    const emp = (S().store() || {}).employee || {};
    return { employeeId: emp.code || '135260', regions: ['south'], salesforce: 'SS' };
  }

  function tsVisible(list) {
    return TellingStoryShared.storiesForViewer(list || TellingStoryShared.stories(), tsViewer());
  }

  function tsLightbox(file) {
    if (!file) return '';
    const TS = TellingStoryShared;
    const kind = TS.fileKind(file);
    const src = file.objectUrl || file.url || '';
    let body = '';
    if (kind === 'image' && src) body = `<img alt="" src="${esc(src)}" />`;
    else if (kind === 'video' && src) body = `<video controls ${file.poster ? `poster="${esc(file.poster)}"` : ''} src="${esc(src)}"></video>`;
    else if (kind === 'pdf' && src) body = `<iframe title="${esc(file.name)}" src="${esc(src)}" style="width:100%;height:100%;border:0;background:#fff"></iframe>`;
    else if (kind === 'video') {
      body = `<div style="color:#fff;text-align:center;padding:24px">
        ${file.poster ? `<img src="${esc(file.poster)}" alt="" style="max-width:100%;border-radius:8px;margin-bottom:12px" />` : ''}
        <p>Video (prototype) — chưa có nguồn phát.</p>
      </div>`;
    } else body = `<div style="color:#fff;text-align:center;padding:24px">Không hỗ trợ xem trước. Vui lòng tải xuống.</div>`;
    return `<div class="sales-app__ts-lb">
      <div class="sales-app__ts-lb-bar">
        <span>${esc(file.name || 'Xem')}</span>
        <span>
          <button type="button" data-action="sa-ts-download">⬇</button>
          <button type="button" data-action="sa-ts-preview-close">×</button>
        </span>
      </div>
      <div class="sales-app__ts-lb-body">${body}</div>
    </div>`;
  }

  function tsCatalogsPage() {
    const TS = TellingStoryShared;
    const cards = TS.catalogs().filter((c) => c.status === 'Hoạt động').map((c) => {
      const n = tsVisible(TS.stories().filter((s) => s.catalogId === c.id)).length;
      return `<button type="button" class="sales-app__ts-card" data-route="/sales-app/telling-story/${esc(c.id)}">
        <span class="sales-app__ts-icon">${esc(c.icon || '📁')}</span>
        <span style="flex:1;min-width:0">
          <p class="sales-app__ts-card-title">${esc(c.name)}</p>
          <p class="sales-app__ts-card-sub">${n} bài viết</p>
        </span>
        <span style="color:#cbd5e1">›</span>
      </button>`;
    }).join('');
    return shell(`
      <div class="sales-app__header sales-app__header--solid">
        <div class="sales-app__header-row">
          <button type="button" class="sales-app__icon-btn" data-route="/sales-app/khac">${ICO.back}</button>
          <h1 class="sales-app__title">Telling Story</h1>
          <span class="sales-app__icon-btn"></span>
        </div>
      </div>
      <div class="sales-app__scroll sales-app__ts-scroll">${cards || '<p class="sales-app__empty">Không có danh mục</p>'}</div>
    `, { time: '14:49', lightStatus: true });
  }

  function tsListPage(catalogId) {
    const TS = TellingStoryShared;
    const cat = TS.findCatalog(catalogId);
    const st = S().state();
    if (st.tsCatalog !== catalogId) {
      st.tsCatalog = catalogId;
      st.tsQ = '';
      st.tsTag = '';
      st.tsBrand = '';
    }
    const q = String(st.tsQ || '').trim().toLowerCase();
    const tag = st.tsTag || '';
    const brand = st.tsBrand || '';
    let rows = tsVisible(TS.stories().filter((s) => s.catalogId === catalogId));
    const tags = [];
    const brands = [];
    rows.forEach((s) => {
      (s.tags || []).forEach((t) => { if (tags.indexOf(t) === -1) tags.push(t); });
      (s.brands || []).forEach((b) => { if (brands.indexOf(b) === -1) brands.push(b); });
    });
    rows = rows.filter((s) => {
      if (q && `${s.title} ${s.summary}`.toLowerCase().indexOf(q) === -1) return false;
      if (tag && (s.tags || []).indexOf(tag) === -1) return false;
      if (brand && (s.brands || []).indexOf(brand) === -1) return false;
      return true;
    });
    const tagChips = tags.map((t) =>
      `<button type="button" class="sales-app__ts-chip ${tag === t ? 'is-on' : ''}" data-action="sa-ts-tag" data-val="${esc(t)}">${esc(TS.optLabel(TS.persist().tags, t) || t)}</button>`
    ).join('');
    const brandChips = brands.map((b) =>
      `<button type="button" class="sales-app__ts-chip ${brand === b ? 'is-on' : ''}" data-action="sa-ts-brand" data-val="${esc(b)}">${esc(b)}</button>`
    ).join('');
    const cards = rows.map((s) => {
      const cover = TellingStoryShared.coverImg(s.cover, '');
      const tagHtml = (TS.optLabels(TS.persist().tags, s.tags) || []).slice(0, 3)
        .map((t) => `<span class="sales-app__ts-chip is-on" style="pointer-events:none">${esc(t)}</span>`).join('');
      return `<button type="button" class="sales-app__ts-story" data-route="/sales-app/telling-story/${esc(catalogId)}/${esc(s.id)}">
        ${cover}
        <div class="sales-app__ts-story-body">
          <p class="sales-app__ts-story-title">${esc(s.title)}</p>
          <p class="sales-app__ts-story-sum">${esc(s.summary || '')}</p>
          <div class="sales-app__ts-chips">${tagHtml}</div>
          <p class="sales-app__ts-card-sub">${esc((s.createdAt || '').slice(0, 10))}</p>
        </div>
      </button>`;
    }).join('');
    return shell(`
      <div class="sales-app__header sales-app__header--solid">
        <div class="sales-app__header-row">
          <button type="button" class="sales-app__icon-btn" data-route="/sales-app/telling-story">${ICO.back}</button>
          <h1 class="sales-app__title">${esc((cat && cat.name) || 'Bài viết')}</h1>
          <span class="sales-app__icon-btn"></span>
        </div>
      </div>
      <div class="sales-app__search-row" style="padding:10px 16px 0">
        <div class="sales-app__search">
          <input id="sa-ts-q" placeholder="Tìm bài viết" value="${esc(st.tsQ || '')}" />
        </div>
      </div>
      <div class="sales-app__ts-scroll" style="padding-top:8px">
        ${tagChips ? `<p class="sales-app__muted" style="margin:0 0 6px">Tag</p><div class="sales-app__ts-chips">${tagChips}</div>` : ''}
        ${brandChips ? `<p class="sales-app__muted" style="margin:8px 0 6px">Brand</p><div class="sales-app__ts-chips">${brandChips}</div>` : ''}
        ${cards || '<p class="sales-app__empty">Không có bài viết phù hợp</p>'}
      </div>
    `, { time: '14:49', lightStatus: true });
  }

  function tsDetailPage(storyId, catalogId) {
    const TS = TellingStoryShared;
    const item = TS.findStory(storyId);
    if (!item) {
      return shell(`
        <div class="sales-app__header sales-app__header--solid">
          <div class="sales-app__header-row">
            <button type="button" class="sales-app__icon-btn" data-route="/sales-app/telling-story">${ICO.back}</button>
            <h1 class="sales-app__title">Bài viết</h1>
            <span class="sales-app__icon-btn"></span>
          </div>
        </div>
        <p class="sales-app__empty">Không tìm thấy bài viết</p>
      `, { time: '14:49', lightStatus: true });
    }
    const back = catalogId
      ? `/sales-app/telling-story/${encodeURIComponent(catalogId)}`
      : `/sales-app/telling-story/${encodeURIComponent(item.catalogId)}`;
    const coverSrc = TellingStoryShared.coverSrc(item.cover);
    const cover = `<img class="cover" src="${esc(coverSrc)}" alt="" data-action="sa-ts-preview" data-src="${esc(coverSrc)}" data-name="${esc((item.cover && item.cover.name) || 'cover')}" data-kind="image" onerror="this.onerror=null;this.src='${TellingStoryShared.DEFAULT_COVER}'" />`;
    const files = (item.media || []).map((f, i) => {
      const kind = TS.fileKind(f);
      const src = f.objectUrl || f.url || '';
      if (kind === 'image' && src) {
        return `<img class="cover" src="${esc(src)}" alt="${esc(f.name)}" data-action="sa-ts-preview" data-file-index="${i}" />`;
      }
      if (kind === 'video') {
        if (src) return `<video controls ${f.poster ? `poster="${esc(f.poster)}"` : ''} src="${esc(src)}" style="width:100%;border-radius:8px;margin:8px 0"></video>`;
        return `<div class="ts-video-fallback" style="margin:8px 0">
          ${f.poster ? `<img src="${esc(f.poster)}" alt="" />` : ''}
          <div class="ts-video-fallback__cap">${esc(f.name)} — video prototype</div>
        </div>`;
      }
      return `<div class="sales-app__ts-doc">
        <span style="flex:1;min-width:0">${esc(f.name)} · ${esc(TS.fileTypeLabel(f))}</span>
        <button type="button" data-action="sa-ts-preview" data-file-index="${i}">Xem</button>
        <button type="button" data-action="sa-ts-download" data-file-index="${i}">Tải</button>
      </div>`;
    }).join('');
    const links = (item.links || []).map((l) =>
      `<div class="sales-app__ts-doc"><a href="${esc(l.url || '#')}" target="_blank" rel="noopener">${esc(l.label || l.url)}</a></div>`
    ).join('');
    const tags = (TS.optLabels(TS.persist().tags, item.tags) || []).join(' · ');
    const preview = tsLightbox(S().state().tsPreview);
    return shell(`
      <div class="sales-app__header sales-app__header--solid">
        <div class="sales-app__header-row">
          <button type="button" class="sales-app__icon-btn" data-route="${esc(back)}">${ICO.back}</button>
          <h1 class="sales-app__title">Bài viết</h1>
          <span class="sales-app__icon-btn"></span>
        </div>
      </div>
      <div class="sales-app__scroll">
        <article class="sales-app__ts-article">
          <p class="meta">${esc(TS.catalogName(item.catalogId))}${tags ? ' / ' + esc(tags) : ''}</p>
          <h1>${esc(item.title)}</h1>
          <p class="meta">${esc(item.createdAt || '')}${(item.brands || []).length ? ' · ' + esc(item.brands.join(', ')) : ''}</p>
          ${cover}
          <div class="body">${item.bodyHtml || ''}</div>
          ${files}
          ${links ? `<h3 style="font-size:14px;margin:16px 0 8px">Liên quan</h3>${links}` : ''}
        </article>
      </div>
      ${preview}
    `, { time: '14:49', lightStatus: true });
  }

  function matchScreen(path) {
    const { parts } = S().parseSalesPath(path);
    if (parts.length <= 1) return { name: 'root' };
    const rest = parts.slice(1);
    if (rest[0] === 'login') return { name: 'login' };
    if (rest[0] === 'bao-cao') return { name: 'report' };
    if (rest[0] === 'don-hang') return { name: 'orders' };
    if (rest[0] === 'khac') return { name: 'more' };
    if (rest[0] === 'hop-dong') {
      if (rest[1]) return { name: 'contract-detail', id: rest[1] };
      return { name: 'contracts' };
    }
    if (rest[0] === 'khach-hang') {
      if (rest[1] === 'tao-moi') return { name: 'cust-create' };
      if (rest[1] === 'chi-tiet' && rest[2]) return { name: 'cust-detail', id: rest[2] };
      if (rest[1] === 'cham-soc' && rest[2]) return { name: 'cust-care', id: rest[2] };
      return { name: 'customers' };
    }
    if (rest[0] === 'telling-story') {
      if (!rest[1]) return { name: 'ts-catalogs' };
      if (rest[1] === 'story' && rest[2]) return { name: 'ts-detail', id: rest[2] };
      if (rest[2]) return { name: 'ts-detail', catalogId: rest[1], id: rest[2] };
      return { name: 'ts-list', catalogId: rest[1] };
    }
    if (rest[0] === 'vieng-tham') {
      if (!rest[1]) return { name: 'visits' };
      const id = rest[1];
      if (rest[2] === 'don-hang' && rest[3]) return { name: 'order-detail', id, orderId: rest[3] };
      if (rest[2] === 'don-hang') return { name: 'visit-orders', id };
      if (rest[2] === 'tao-don-hang') return { name: 'create-order', id, step: rest.slice(3).join('/') };
      return { name: 'visit-detail', id };
    }
    return { name: 'root' };
  }

  async function renderSalesApp(path) {
    await S().loadSalesAppStore();
    document.body.classList.add('is-sales-app');
    const screen0 = matchScreen(path);
    let screen = screen0;
    if (screen.name === 'root') {
      const next = S().isAuthed() ? '/sales-app/vieng-tham' : '/sales-app/login';
      history.replaceState({ path: next }, '', '#' + next);
      screen = matchScreen(next);
    }
    if (screen.name !== 'login' && !S().isAuthed()) {
      history.replaceState({ path: '/sales-app/login' }, '', '#/sales-app/login');
      screen = matchScreen('/sales-app/login');
    }
    if (screen.name === 'login') return renderLogin();
    if (screen.name === 'visits') return visitList();
    if (screen.name === 'visit-detail') return visitDetail(screen.id);
    if (screen.name === 'visit-orders') return visitOrders(screen.id);
    if (screen.name === 'order-detail') return orderDetail(screen.id, screen.orderId);
    if (screen.name === 'create-order') return createOrder(screen.id, screen.step);
    if (screen.name === 'report') return reports();
    if (screen.name === 'orders') return ordersPage();
    if (screen.name === 'more') return morePage();
    if (screen.name === 'customers') return customersPage();
    if (screen.name === 'cust-create') return customerCreate();
    if (screen.name === 'cust-detail') return customerDetail(screen.id);
    if (screen.name === 'cust-care') return customerCare(screen.id);
    if (screen.name === 'contracts') return contractsPage();
    if (screen.name === 'contract-detail') return contractDetail(screen.id);
    if (screen.name === 'ts-catalogs' || screen.name === 'ts-list' || screen.name === 'ts-detail') {
      if (window.TellingStoryShared) await TellingStoryShared.loadStore();
    }
    if (screen.name === 'ts-catalogs') return tsCatalogsPage();
    if (screen.name === 'ts-list') return tsListPage(screen.catalogId);
    if (screen.name === 'ts-detail') return tsDetailPage(screen.id, screen.catalogId);
    return visitList();
  }

  function bindSalesApp(root) {
    if (!root) return;
    const visitQ = root.querySelector('#sa-visit-q');
    if (visitQ) {
      visitQ.addEventListener('input', (e) => {
        S().state().visitQ = e.target.value;
      });
      visitQ.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') DMSRouter.handleRoute();
      });
    }
    const custQ = root.querySelector('#sa-cust-q');
    if (custQ) {
      custQ.addEventListener('input', (e) => { S().state().custQ = e.target.value; });
      custQ.addEventListener('keydown', (e) => { if (e.key === 'Enter') DMSRouter.handleRoute(); });
    }
    const tsQ = root.querySelector('#sa-ts-q');
    if (tsQ) {
      tsQ.addEventListener('input', (e) => { S().state().tsQ = e.target.value; });
      tsQ.addEventListener('keydown', (e) => { if (e.key === 'Enter') DMSRouter.handleRoute(); });
      tsQ.addEventListener('blur', () => DMSRouter.handleRoute());
    }
    const ctQ = root.querySelector('#sa-ct-q');
    if (ctQ) {
      ctQ.addEventListener('input', (e) => { S().state().contractQ = e.target.value; });
      ctQ.addEventListener('keydown', (e) => { if (e.key === 'Enter') DMSRouter.handleRoute(); });
      ctQ.addEventListener('search', () => DMSRouter.handleRoute());
      ctQ.addEventListener('blur', () => DMSRouter.handleRoute());
    }
  }

  if (!window.__saClickBound) {
    window.__saClickBound = true;
    document.addEventListener('click', (e) => {
      if (!document.body.classList.contains('is-sales-app')) return;
      const bodyImg = e.target.closest('.sales-app__ts-article .body img');
      if (bodyImg && bodyImg.getAttribute('src')) {
        S().state().tsPreview = { name: bodyImg.getAttribute('alt') || 'Ảnh', type: 'image/jpeg', url: bodyImg.getAttribute('src') };
        DMSRouter.handleRoute();
        return;
      }
      const act = e.target.closest('[data-action]');
      if (!act) return;
      const a = act.dataset.action;
      if (a === 'sa-login') {
        S().login();
        DMSRouter.navigate('/sales-app/vieng-tham');
      }
      if (a === 'sa-start-visit') {
        S().state().visitStarted[act.dataset.id] = true;
        DMSRouter.handleRoute();
      }
      if (a === 'sa-order-tab') {
        S().state().orderStatus = act.dataset.tab;
        DMSRouter.handleRoute();
      }
      if (a === 'sa-cust-tab') {
        S().state().custTab = act.dataset.tab;
        DMSRouter.handleRoute();
      }
      if (a === 'sa-qty') {
        const id = act.dataset.id;
        const d = Number(act.dataset.d);
        const cart = S().state().cart;
        cart[id] = Math.max(0, (cart[id] || 0) + d);
        DMSRouter.handleRoute();
      }
      if (a === 'sa-confirm-order') {
        DMSRouter.navigate('/sales-app/vieng-tham/' + act.dataset.id + '/don-hang');
      }
      if (a === 'sa-save-customer') {
        DMSRouter.navigate('/sales-app/khach-hang');
      }
      if (a === 'sa-ct-open') {
        const st = S().state();
        st.contractLoading = true;
        st.contractFilterOpen = false;
        DMSRouter.navigate('/sales-app/hop-dong');
      }
      if (a === 'sa-ct-filter-open') {
        const st = S().state();
        const cur = st.contractFilter || S().emptyContractFilter();
        st.contractDraft = { customer: cur.customer, status: cur.status, from: cur.from, to: cur.to };
        st.contractFilterOpen = true;
        DMSRouter.handleRoute();
      }
      if (a === 'sa-ct-filter-close') {
        S().state().contractFilterOpen = false;
        DMSRouter.handleRoute();
      }
      if (a === 'sa-ct-filter-apply') {
        const st = S().state();
        st.contractFilter = readContractDraftFromDom();
        st.contractDraft = st.contractFilter;
        st.contractFilterOpen = false;
        DMSRouter.handleRoute();
      }
      if (a === 'sa-ct-filter-reset') {
        const st = S().state();
        st.contractDraft = S().emptyContractFilter();
        DMSRouter.handleRoute();
      }
      if (a === 'sa-ct-clear') {
        const st = S().state();
        st.contractQ = '';
        st.contractFilter = S().emptyContractFilter();
        st.contractDraft = S().emptyContractFilter();
        st.contractFilterOpen = false;
        DMSRouter.handleRoute();
      }
      if (a === 'sa-ct-download') {
        S().downloadMockPdf(act.dataset.name);
        showSaToast('Đã tải file hợp đồng');
      }
      if (a === 'sa-ts-tag') {
        const st = S().state();
        st.tsTag = st.tsTag === act.dataset.val ? '' : act.dataset.val;
        DMSRouter.handleRoute();
      }
      if (a === 'sa-ts-brand') {
        const st = S().state();
        st.tsBrand = st.tsBrand === act.dataset.val ? '' : act.dataset.val;
        DMSRouter.handleRoute();
      }
      if (a === 'sa-ts-preview-close') {
        S().state().tsPreview = null;
        DMSRouter.handleRoute();
      }
      if (a === 'sa-ts-preview') {
        const TS = window.TellingStoryShared;
        const idx = act.dataset.fileIndex;
        const path = (location.hash.slice(1).split('?')[0] || '').split('/');
        const storyId = path[path.length - 1];
        const item = TS && TS.findStory(storyId);
        if (idx != null && idx !== '' && item && item.media && item.media[idx]) {
          S().state().tsPreview = item.media[idx];
        } else {
          S().state().tsPreview = {
            name: act.dataset.name || 'Ảnh',
            type: act.dataset.kind === 'image' ? 'image/jpeg' : '',
            url: act.dataset.src || act.getAttribute('src') || ''
          };
        }
        DMSRouter.handleRoute();
      }
      if (a === 'sa-ts-download') {
        const TS = window.TellingStoryShared;
        const idx = act.dataset.fileIndex;
        const preview = S().state().tsPreview;
        const path = (location.hash.slice(1).split('?')[0] || '').split('/');
        const storyId = path[path.length - 1];
        const item = TS && TS.findStory(storyId);
        const file = (idx != null && idx !== '' && item && item.media && item.media[idx]) ? item.media[idx] : preview;
        const href = file && (file.objectUrl || file.url);
        if (href) {
          const aEl = document.createElement('a');
          aEl.href = href;
          aEl.download = (file && file.name) || 'download';
          aEl.rel = 'noopener';
          document.body.appendChild(aEl);
          aEl.click();
          aEl.remove();
          showSaToast('Đã tải tài liệu');
        } else {
          S().downloadMockPdf((file && file.name) || 'telling-story.pdf');
          showSaToast('Đã tải tài liệu');
        }
      }
    });
  }

  renderSalesApp.onMount = bindSalesApp;
  window.renderSalesApp = renderSalesApp;
})();
