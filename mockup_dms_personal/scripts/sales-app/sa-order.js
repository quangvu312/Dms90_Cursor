/**
 * App SaleMan — Flow Tạo đơn hàng mới
 * Nguồn: Hand-off DMS-90 (Figma 7237:15611) + APK VIGO Saleman
 */
(function (global) {
  'use strict';

  const SA = global.SA;
  const ICO = global.SAIcons || {};
  const screens = global.SAScreens || (global.SAScreens = {});
  function S() { return global.SalesAppShared; }

  function fmtMoney(n) {
    const v = Math.round(Number(n) || 0);
    return v.toLocaleString('vi-VN') + ' đ';
  }

  function cartQty(id) {
    return Number(S().state().cart[id] || 0);
  }

  function cartLines() {
    const products = S().store().products || [];
    return products.filter((p) => cartQty(p.id) > 0).map((p) => ({
      ...p,
      qty: cartQty(p.id),
      uom: (S().state().cartUom || {})[p.id] || p.uom,
      lineTotal: cartQty(p.id) * Number(p.price || 0)
    }));
  }

  function cartSubtotal() {
    return cartLines().reduce((sum, p) => sum + p.lineTotal, 0);
  }

  function cartCount() {
    return cartLines().reduce((sum, p) => sum + p.qty, 0);
  }

  function base(visitId) {
    return `/sales-app/vieng-tham/${visitId}/tao-don-hang`;
  }

  function nppBar() {
    const d = S().store().distributor || { name: 'NPP' };
    return `<div class="sales-app__npp-bar">
      <div class="sales-app__npp-card">
        <span class="sales-app__npp-logo">NPP</span>
        <span class="sales-app__npp-name">${SA.esc(d.name)}</span>
      </div>
    </div>`;
  }

  function productCard(p, visitId) {
    const qty = cartQty(p.id);
    const uom = (S().state().cartUom || {})[p.id] || p.uom;
    const action = qty > 0
      ? `<div class="sales-app__stepper sales-app__stepper--brand">
          <button type="button" data-action="sa-qty" data-id="${SA.esc(p.id)}" data-d="-1" aria-label="Giảm">−</button>
          <span>${qty}</span>
          <button type="button" data-action="sa-qty" data-id="${SA.esc(p.id)}" data-d="1" aria-label="Tăng">+</button>
        </div>`
      : `<button type="button" class="sales-app__prod-cart-btn" data-action="sa-qty" data-id="${SA.esc(p.id)}" data-d="1" aria-label="Thêm vào đơn">${ICO.cart}</button>`;

    return `<article class="sales-app__prod-card">
      <button type="button" class="sales-app__prod-thumb" data-action="sa-order-prod-detail" data-id="${SA.esc(p.id)}" aria-label="Chi tiết sản phẩm">
        <span class="sales-app__prod-thumb-ico">${ICO.store}</span>
      </button>
      <div class="sales-app__prod-body">
        <button type="button" class="sales-app__prod-code" data-action="sa-order-prod-detail" data-id="${SA.esc(p.id)}">${SA.esc(p.id)}</button>
        <p class="sales-app__prod-name">${SA.esc(p.name)}</p>
        <div class="sales-app__prod-meta">
          <span>VAT ${SA.esc(String(p.vat != null ? p.vat : 10))}%</span>
          <button type="button" class="sales-app__prod-uom" data-action="sa-order-uom-open" data-id="${SA.esc(p.id)}">
            ${SA.esc(uom)}${ICO.chevronDown}
          </button>
        </div>
        <div class="sales-app__prod-foot">
          <span class="sales-app__muted">Tồn kho: ${SA.esc(String(p.stock != null ? p.stock : '—'))}</span>
          <span class="sales-app__prod-price">${fmtMoney(p.price)}</span>
          ${action}
        </div>
      </div>
    </article>`;
  }

  function orderFooter(visitId, { primaryLabel = 'Đặt hàng', primaryAction = 'sa-order-checkout', disabled = false } = {}) {
    const sub = cartSubtotal();
    return `<div class="sales-app__order-checkout">
      <div class="sales-app__order-subtotal">
        <span class="sales-app__order-subtotal-label">${ICO.sigma || ''}<span>Tạm tính</span></span>
        <span class="sales-app__order-subtotal-val">${fmtMoney(sub)}</span>
      </div>
      <button type="button" class="sales-app__order-place${disabled ? ' is-disabled' : ''}" data-action="${SA.esc(primaryAction)}" data-id="${SA.esc(visitId)}" ${disabled ? 'disabled' : ''}>${SA.esc(primaryLabel)}</button>
    </div>`;
  }

  function typeSheet(visitId) {
    const st = S().state();
    if (!st.orderTypeOpen) return '';
    const cur = st.orderType || 'Đơn đặt';
    const opts = ['Đơn bán', 'Đơn đặt'].map((t) =>
      `<button type="button" class="sales-app__order-type-item${cur === t ? ' is-on' : ''}" data-action="sa-order-type-pick" data-val="${SA.esc(t)}" data-id="${SA.esc(visitId)}">
        <span>${SA.esc(t)}</span>${cur === t ? ICO.check : ''}
      </button>`
    ).join('');
    return `<div class="sales-app__sheet is-open">
      <button type="button" class="sales-app__sheet-backdrop" data-action="sa-order-type-close" aria-label="Đóng"></button>
      <div class="sales-app__sheet-panel">
        <div class="sales-app__sheet-handle"></div>
        <h2 class="sales-app__sheet-title">Chọn hình thức đặt hàng</h2>
        <p class="sales-app__muted sales-app__sheet-desc">Chọn hình thức đặt hàng để tạo đơn hàng</p>
        <div class="sales-app__order-type-list">${opts}</div>
      </div>
    </div>`;
  }

  function uomSheet() {
    const st = S().state();
    if (!st.orderUomOpen || !st.orderUomProductId) return '';
    const p = (S().store().products || []).find((x) => x.id === st.orderUomProductId);
    if (!p) return '';
    const cur = (st.cartUom || {})[p.id] || p.uom;
    const uoms = p.uoms || [p.uom];
    const items = uoms.map((u) =>
      `<button type="button" class="sales-app__uom-chip${cur === u ? ' is-on' : ''}" data-action="sa-order-uom-pick" data-val="${SA.esc(u)}">
        ${SA.esc(u)}${cur === u ? `<span class="sales-app__uom-check">${ICO.check}</span>` : ''}
      </button>`
    ).join('');
    return `<div class="sales-app__sheet is-open">
      <button type="button" class="sales-app__sheet-backdrop" data-action="sa-order-uom-close" aria-label="Đóng"></button>
      <div class="sales-app__sheet-panel">
        <div class="sales-app__sheet-head">
          <h2 class="sales-app__sheet-title">Chọn đơn vị</h2>
          <button type="button" class="sales-app__icon-plain" data-action="sa-order-uom-close" aria-label="Đóng">${ICO.close}</button>
        </div>
        <div class="sales-app__uom-grid">${items}</div>
        <div class="sales-app__sheet-actions">
          <button type="button" class="primary" data-action="sa-order-uom-close">Xác nhận</button>
        </div>
      </div>
    </div>`;
  }

  function prodDetailSheet() {
    const st = S().state();
    if (!st.orderProdDetailId) return '';
    const p = (S().store().products || []).find((x) => x.id === st.orderProdDetailId);
    if (!p) return '';
    const promos = (S().store().orderPromos || []).slice(0, 2);
    const promoHtml = promos.map((km) =>
      `<div class="sales-app__promo-mini">
        <p class="sales-app__card-title">${SA.esc(km.name)}</p>
        <p class="sales-app__muted">${SA.esc(km.period)}</p>
        <p class="sales-app__muted">${SA.esc(km.desc)}</p>
      </div>`
    ).join('') || `<p class="sales-app__muted">Không có khuyến mãi áp dụng</p>`;
    return `<div class="sales-app__sheet is-open">
      <button type="button" class="sales-app__sheet-backdrop" data-action="sa-order-prod-close" aria-label="Đóng"></button>
      <div class="sales-app__sheet-panel sales-app__sheet-panel--tall">
        <div class="sales-app__sheet-handle"></div>
        <div class="sales-app__prod-detail">
          <p class="sales-app__prod-code">${SA.esc(p.id)}</p>
          <p class="sales-app__prod-name">${SA.esc(p.name)}</p>
          <p class="sales-app__prod-price">${fmtMoney(p.price)} <span class="sales-app__muted">/ ${SA.esc(p.uom)}</span></p>
          <div class="sales-app__prod-detail-grid">
            <span class="sales-app__muted">VAT</span><span>${SA.esc(String(p.vat))}%</span>
            <span class="sales-app__muted">Tồn kho</span><span>${SA.esc(String(p.stock))}</span>
            <span class="sales-app__muted">Ngành hàng</span><span>${SA.esc(p.industry || '—')}</span>
          </div>
        </div>
        <div class="sales-app__section">Khuyến mãi</div>
        ${promoHtml}
        <div class="sales-app__sheet-actions">
          <button type="button" class="primary" data-action="sa-qty" data-id="${SA.esc(p.id)}" data-d="1">Thêm vào đơn</button>
        </div>
      </div>
    </div>`;
  }

  function filterProducts(list) {
    const st = S().state();
    const q = String(st.orderProdQ || '').toLowerCase();
    const f = st.orderProdFilter || {};
    return (list || []).filter((p) => {
      if (q && ![p.id, p.name, p.uom].join(' ').toLowerCase().includes(q)) return false;
      if (f.industry && p.industry !== f.industry) return false;
      if (f.inStock && !(Number(p.stock) > 0)) return false;
      return true;
    });
  }

  screens['visit-orders'] = function visitOrders(id) {
    const orders = S().store().orders || [];
    const cards = orders.map((o) => {
      const href = `/sales-app/vieng-tham/${id}/don-hang/${o.id}`;
      return `<article class="sales-app__order-shell">
        <div class="sales-app__order-shell-head" data-route="${SA.esc(href)}">
          <div class="sales-app__order-topline">
            <span class="sales-app__order-id">${SA.esc(o.id)}</span>
            <span class="sales-app__order-status">${SA.esc(o.status || 'Khởi tạo')}</span>
          </div>
          <p class="sales-app__order-time">${SA.esc(o.time)}</p>
        </div>
        <div class="sales-app__order-inner" data-route="${SA.esc(href)}">
          <div class="sales-app__store-box">
            <div class="sales-app__store-box-row">
              <span class="sales-app__store-box-ico">${ICO.store}</span>
              <div>
                <p class="sales-app__card-title">${SA.esc(o.storeName)}</p>
                <p class="sales-app__muted">${SA.esc(o.storeAddress)}</p>
              </div>
            </div>
          </div>
          <div class="sales-app__order-footer">
            <div><span class="sales-app__order-foot-label">Tổng cộng</span><span class="sales-app__money">${SA.esc(o.total || '0 đ')}</span></div>
          </div>
        </div>
      </article>`;
    }).join('');
    return SA.render('Screen', {
      time: '16:28', lightStatus: true,
      header: SA.render('AppHeader', {
        variant: 'solid',
        title: 'Đơn hàng',
        backRoute: `/sales-app/vieng-tham/${id}`,
        rightAction: `<button type="button" class="sales-app__icon-btn sales-app__icon-btn--chip" data-action="sa-order-type-open" data-id="${SA.esc(id)}" aria-label="Tạo đơn">${ICO.plus}</button>`
      }),
      body: SA.render('ScrollArea', {
        children: cards || SA.render('EmptyState', { illustrate: true, title: 'Chưa có đơn hàng', description: 'Tạo đơn hàng mới cho điểm bán này.' })
      }) + typeSheet(id),
      footer: SA.render('ActionBar', {
        buttons: [{ label: 'Tạo đơn hàng', action: 'sa-order-type-open', id }]
      })
    });
  };

  screens['create-order'] = function createOrder(visitId, step) {
    const st = S().state();
    const products = S().store().products || [];
    const filtered = filterProducts(products);
    const stepKey = step || '';

    /* Entry: sheet hình thức (từ Đơn hàng) hoặc CTA */
    if (!stepKey) {
      return SA.render('Screen', {
        time: '16:28', lightStatus: true,
        header: SA.render('AppHeader', {
          variant: 'light',
          title: 'Tạo đơn hàng',
          backRoute: `/sales-app/vieng-tham/${visitId}/don-hang`
        }),
        body: SA.render('EmptyState', {
          illustrate: true,
          title: 'Tạo đơn hàng mới',
          description: 'Chọn hình thức đặt hàng để tiếp tục.',
          actionLabel: 'Chọn hình thức',
          actionAttr: `data-action="sa-order-type-open" data-id="${SA.esc(visitId)}"`
        }) + typeSheet(visitId)
      });
    }

    /* Bộ lọc */
    if (stepKey === 'san-pham/bo-loc') {
      const f = st.orderProdFilter || {};
      const industries = [...new Set(products.map((p) => p.industry).filter(Boolean))];
      const chips = (name, val, label) =>
        `<button type="button" class="sales-app__filter-chip${f[name] === val ? ' is-on' : ''}" data-action="sa-order-filter-set" data-name="${name}" data-val="${SA.esc(val)}">${SA.esc(label)}</button>`;
      return SA.render('Screen', {
        time: '16:28',
        header: SA.render('AppHeader', {
          variant: 'light',
          title: 'Bộ lọc tìm kiếm',
          backRoute: `${base(visitId)}/san-pham`
        }),
        body: `<div class="sales-app__scroll">
          <div class="sales-app__section">Ngành hàng</div>
          <div class="sales-app__chip-row">
            ${chips('industry', '', 'Tất cả')}
            ${industries.map((i) => chips('industry', i, i)).join('')}
          </div>
          <div class="sales-app__section">Tồn kho</div>
          <div class="sales-app__chip-row">
            ${chips('inStock', '', 'Tất cả')}
            <button type="button" class="sales-app__filter-chip${f.inStock ? ' is-on' : ''}" data-action="sa-order-filter-set" data-name="inStock" data-val="1">Chỉ còn hàng</button>
          </div>
        </div>`,
        footer: SA.render('ActionBar', {
          buttons: [
            { label: 'Đặt lại', variant: 'ghost', action: 'sa-order-filter-reset' },
            { label: 'Áp dụng', action: 'sa-order-filter-apply', id: visitId }
          ]
        })
      });
    }

    /* Khuyến mãi */
    if (stepKey === 'san-pham/khuyen-mai') {
      const list = (S().store().orderPromos || []).map((km) =>
        `<article class="sales-app__card">
          <p class="sales-app__card-title">${SA.esc(km.name)}</p>
          <p class="sales-app__muted">${SA.esc(km.type)} · ${SA.esc(km.period)}</p>
          <p class="sales-app__muted">${SA.esc(km.desc)}</p>
        </article>`
      ).join('');
      return SA.render('Screen', {
        time: '16:28',
        header: SA.render('AppHeader', {
          variant: 'light',
          title: 'Danh sách khuyến mãi',
          backRoute: `${base(visitId)}/san-pham`
        }),
        body: SA.render('ScrollArea', {
          children: list || SA.render('EmptyState', { illustrate: true, description: 'Dữ liệu trống' })
        })
      });
    }

    /* Xác nhận đơn */
    if (stepKey === 'xac-nhan' || stepKey.indexOf('san-pham/xac-nhan') === 0) {
      const visit = S().findVisit(visitId) || {};
      const d = S().store().distributor || {};
      const lines = cartLines();
      const items = (lines.length ? lines : []).map((p) =>
        `<article class="sales-app__prod-card sales-app__prod-card--confirm">
          <div class="sales-app__prod-thumb"><span class="sales-app__prod-thumb-ico">${ICO.store}</span></div>
          <div class="sales-app__prod-body">
            <p class="sales-app__prod-name">${SA.esc(p.name)}</p>
            <p class="sales-app__muted">${SA.esc(p.uom)} · VAT ${SA.esc(String(p.vat))}%</p>
            <div class="sales-app__prod-foot">
              <span>x${p.qty}</span>
              <span class="sales-app__prod-price">${fmtMoney(p.lineTotal)}</span>
            </div>
          </div>
        </article>`
      ).join('') || SA.render('EmptyState', { description: 'Chưa có sản phẩm trong đơn' });
      const note = st.orderNote || '';
      return SA.render('Screen', {
        time: '16:32',
        header: SA.render('AppHeader', {
          variant: 'light',
          title: 'Chi tiết đơn hàng',
          backRoute: `${base(visitId)}/san-pham`
        }),
        body: `<div class="sales-app__scroll sales-app__scroll--order">
          <div class="sales-app__order-ticket">
            <div class="sales-app__npp-card sales-app__npp-card--plain">
              <span class="sales-app__npp-logo">NPP</span>
              <div>
                <div class="sales-app__npp-name">${SA.esc(d.name || '—')}</div>
                <div class="sales-app__muted">${SA.esc(d.phone || '')}</div>
              </div>
            </div>
            <div class="sales-app__order-ticket-store">
              <span class="sales-app__cust-pin">${ICO.pin}</span>
              <div>
                <p class="sales-app__card-title">${SA.esc(visit.name || visit.code || 'Điểm bán')}</p>
                <p class="sales-app__muted">${SA.esc(visit.phone || '')}</p>
                <p class="sales-app__muted">${SA.esc(visit.address || '')}</p>
              </div>
            </div>
            <div class="sales-app__order-ticket-meta">
              <span>Hình thức</span><span>${SA.esc(st.orderType || 'Đơn đặt')}</span>
              <span>Nguồn</span><span>APP</span>
              <span>SL sản phẩm</span><span>${cartCount()}</span>
            </div>
          </div>
          <div class="sales-app__section">Sản phẩm</div>
          ${items}
          <div class="sales-app__section">Thông tin thanh toán</div>
          <div class="sales-app__pay-box">
            <div class="sales-app__pay-row"><span>Tổng số lượng</span><span>${cartCount()}</span></div>
            <div class="sales-app__pay-row"><span>Thành tiền</span><span>${fmtMoney(cartSubtotal())}</span></div>
            <div class="sales-app__pay-row sales-app__pay-row--total"><span>Tổng cộng</span><span class="sales-app__money">${fmtMoney(cartSubtotal())}</span></div>
          </div>
          <div class="sales-app__section">Ghi chú đơn hàng</div>
          <textarea id="sa-order-note" class="sales-app__order-note" rows="3" placeholder="Nhập ghi chú giao hàng...">${SA.esc(note)}</textarea>
        </div>`,
        footer: SA.render('ActionBar', {
          buttons: [{ label: 'Xác nhận đặt hàng', action: 'sa-confirm-order', id: visitId }]
        })
      });
    }

    /* Chọn sản phẩm (mặc định) */
    const filterOn = !!(st.orderProdFilter && (st.orderProdFilter.industry || st.orderProdFilter.inStock));
    const list = filtered.map((p) => productCard(p, visitId)).join('');
    return SA.render('Screen', {
      time: '16:28',
      header: SA.render('AppHeader', {
        variant: 'light',
        title: 'Chọn sản phẩm',
        backRoute: `/sales-app/vieng-tham/${visitId}/don-hang`,
        rightAction: `<span class="sales-app__header-actions">
          <button type="button" class="sales-app__icon-btn" data-route="${base(visitId)}/san-pham/khuyen-mai" aria-label="Khuyến mãi">${ICO.gift}</button>
        </span>`
      })
        + nppBar()
        + SA.render('SearchBar', {
          id: 'sa-order-prod-q',
          placeholder: 'Nhập tên, mã, đơn vị sản phẩm',
          value: st.orderProdQ || '',
          filterOn,
          filterAction: 'sa-order-filter-open',
          pill: true
        }),
      body: SA.render('ScrollArea', {
        className: 'sales-app__scroll--prod',
        children: list || SA.render('EmptyState', { illustrate: true, title: 'Dữ liệu trống', description: 'Không tìm thấy sản phẩm phù hợp.' })
      }) + uomSheet() + prodDetailSheet() + typeSheet(visitId),
      footer: orderFooter(visitId, { disabled: cartCount() === 0 })
    });
  };

  global.SAOrder = {
    cartSubtotal,
    cartCount,
    cartLines,
    fmtMoney
  };
})(window);
