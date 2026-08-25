/**
 * App SaleMan — Design System Components
 * Mọi màn hình Salesman PHẢI dùng SA.render() — không tự viết HTML lặp lại.
 */
(function (global) {
  'use strict';

  const SA = global.SA;
  const ICO = global.SAIcons || {};
  if (!SA) return;

  const BOTTOM_NAV = [
    { key: 'vieng-tham', label: 'Viếng thăm', icon: 'visit', route: '/sales-app/vieng-tham' },
    { key: 'bao-cao', label: 'Báo cáo', icon: 'report', route: '/sales-app/bao-cao' },
    { key: 'don-hang', label: 'Đơn hàng', icon: 'order', route: '/sales-app/don-hang' },
    { key: 'khac', label: 'Khác', icon: 'more', route: '/sales-app/khac' }
  ];

  SA.register('StatusBar', {
    render({ time = '15:15', light = false } = {}) {
      const theme = light ? 'is-brand' : 'is-default';
      return `<header class="sales-app__status-bar ${theme}" role="status" aria-label="Thanh trạng thái">
        <span class="sales-app__status-time">${SA.esc(time)}</span>
        <span class="sales-app__status-notch" aria-hidden="true"></span>
        <div class="sales-app__status-trailing">
          <span class="sales-app__status-ico">${ICO.statusSignal || ''}</span>
          <span class="sales-app__status-ico">${ICO.statusWifi || ''}</span>
          <span class="sales-app__status-ico">${ICO.statusBattery || ''}</span>
        </div>
      </header>`;
    }
  });

  SA.register('BottomNav', {
    render({ active = '' } = {}) {
      const items = BOTTOM_NAV.map((n) => {
        const icon = ICO[n.icon] || '';
        return `<button type="button" class="sales-app__nav-item ${active === n.key ? 'is-active' : ''}" data-route="${n.route}">
          ${icon}<span>${SA.esc(n.label)}</span>
        </button>`;
      }).join('');
      return `<nav class="sales-app__nav">${items}</nav>`;
    }
  });

  SA.register('PhoneShell', {
    render({ inner = '', time, lightStatus, hideBack = false } = {}) {
      const back = hideBack ? '' : `<button type="button" class="sales-app__back" data-route="/dashboard">← Quay lại DMS</button>`;
      return `<div class="sales-app">
        ${back}
        <div class="sales-app__device">
          <div class="sales-app__phone" data-device="iphone-14">
            <div class="sales-app__phone-bezel">
              ${SA.render('StatusBar', { time, light: lightStatus })}
              <div class="sales-app__screen">${inner}</div>
              <div class="sales-app__home-indicator" aria-hidden="true"><span></span></div>
            </div>
          </div>
        </div>
      </div>`;
    }
  });

  SA.register('AppHeader', {
    render({
      variant = 'gradient',
      title = '',
      showUser = false,
      userName = '',
      userCode = '',
      userPhone = '',
      workdayLabel = '',
      workdayAction = '',
      workdayStart = '',
      backRoute = '',
      rightAction = '',
      children = '',
      compact = false
    } = {}) {
      const solid = variant === 'solid' ? ' sales-app__header--solid' : '';
      const light = variant === 'light' ? ' sales-app__header--light' : '';
      const compactCls = compact ? ' sales-app__header--compact' : '';
      let row = '';
      if (showUser) {
        const startAt = workdayStart || '14:49:14';
        const endLabel = workdayLabel || 'Kết thúc ngày công';
        const workBtn = `<button type="button" class="sales-app__end-day" ${workdayAction ? `data-action="${SA.esc(workdayAction)}"` : ''}>${SA.esc(endLabel)}</button>`;
        row = `<div class="sales-app__header-row sales-app__header-row--profile">
          <div class="sales-app__avatar">${ICO.user}</div>
          <div class="sales-app__header-user">
            <div class="sales-app__user-name">${SA.esc(userName)}</div>
            <div class="sales-app__user-code">${SA.esc(userCode)}</div>
          </div>
          <div class="sales-app__workday">
            <p class="sales-app__workday-time">Bắt đầu lúc ${SA.esc(startAt)}</p>
            ${workBtn}
          </div>
        </div>`;
      } else {
        row = `<div class="sales-app__header-row">
          ${backRoute ? `<button type="button" class="sales-app__icon-btn" data-route="${SA.esc(backRoute)}" aria-label="Quay lại">${ICO.back}</button>` : '<span class="sales-app__icon-btn"></span>'}
          <h1 class="sales-app__title">${SA.esc(title)}</h1>
          ${rightAction || '<span class="sales-app__icon-btn"></span>'}
        </div>`;
      }
      return `<div class="sales-app__header${solid}${light}${compactCls}">${row}${children || ''}</div>`;
    }
  });

  SA.register('ProfileHero', {
    render({ userName = '', userCode = '', userPhone = '', portalRoute = '/dashboard' } = {}) {
      const sub = [userCode, userPhone].filter(Boolean).join(' • ');
      return `<div class="sales-app__profile-hero">
        <div class="sales-app__profile-top">
          <p class="sales-app__profile-label">Nhân viên đã chọn</p>
          <button type="button" class="sales-app__portal-link" data-route="${SA.esc(portalRoute)}">Trở về Portal</button>
        </div>
        <div class="sales-app__profile-card">
          <div class="sales-app__avatar sales-app__avatar--light">${ICO.user}</div>
          <div>
            <div class="sales-app__profile-name">${SA.esc(userName)}</div>
            <div class="sales-app__profile-meta">${SA.esc(sub)}</div>
          </div>
        </div>
      </div>`;
    }
  });

  SA.register('SearchBar', {
    render({ id = '', placeholder = '', value = '', filterOn = false, filterAction = '', pill = true } = {}) {
      const filterCls = filterOn ? ' is-on' : '';
      const filterAttr = filterAction ? ` data-action="${SA.esc(filterAction)}"` : '';
      return `<div class="sales-app__search-row ${pill ? 'sales-app__search-row--pill' : ''}">
        <div class="sales-app__search ${pill ? 'sales-app__search--pill' : ''}">
          <span class="sales-app__search-ico">${ICO.search}</span>
          <input ${id ? `id="${SA.esc(id)}"` : ''} placeholder="${SA.esc(placeholder)}" value="${SA.esc(value)}" />
        </div>
        <button type="button" class="sales-app__search-filter${filterCls}"${filterAttr} aria-label="Bộ lọc">${ICO.funnel}</button>
      </div>`;
    }
  });

  SA.register('Card', {
    render({ title = '', children = '', route = '', className = '' } = {}) {
      const attrs = route ? ` data-route="${SA.esc(route)}" style="cursor:pointer"` : '';
      const titleHtml = title ? `<p class="sales-app__card-title">${SA.esc(title)}</p>` : '';
      return `<article class="sales-app__card ${className}"${attrs}>${titleHtml}${children || ''}</article>`;
    }
  });

  SA.register('Pill', {
    render({ text = '', variant = 'off' } = {}) {
      const orderMap = {
        init: 'sales-app__order-status-badge--init',
        approved: 'sales-app__order-status-badge--approved',
        shipped: 'sales-app__order-status-badge--shipped',
        success: 'sales-app__order-status-badge--success',
        return: 'sales-app__order-status-badge--return',
        cancel: 'sales-app__order-status-badge--cancel',
        fail: 'sales-app__order-status-badge--fail'
      };
      if (orderMap[variant]) {
        return `<span class="sales-app__order-status-badge ${orderMap[variant]}">${SA.esc(text)}</span>`;
      }
      const map = { on: 'sales-app__pill--on', off: 'sales-app__pill--off', wait: 'sales-app__pill--wait', reject: 'sales-app__pill--reject' };
      return `<span class="sales-app__pill ${map[variant] || map.off}">${SA.esc(text)}</span>`;
    }
  });

  SA.register('EmptyState', {
    render({ title = '', description = '', actionLabel = '', actionAttr = '', illustrate = false } = {}) {
      const action = actionLabel
        ? `<button type="button" class="sales-app__empty-action" ${actionAttr}>${SA.esc(actionLabel)}</button>`
        : '';
      const art = illustrate ? `<div class="sales-app__empty-art">${ICO.empty}</div>` : '';
      return `<div class="sales-app__empty">
        ${art}
        ${title ? `<p class="sales-app__empty-title">${SA.esc(title)}</p>` : ''}
        ${description ? `<p>${SA.esc(description)}</p>` : ''}
        ${action}
      </div>`;
    }
  });

  SA.register('ActionBar', {
    render({ buttons = [] } = {}) {
      const btns = (buttons || []).map((b) => {
        const cls = b.variant === 'ghost' ? 'ghost' : 'primary';
        const attrs = [];
        if (b.route) attrs.push(`data-route="${SA.esc(b.route)}"`);
        if (b.action) attrs.push(`data-action="${SA.esc(b.action)}"`);
        if (b.id) attrs.push(`data-id="${SA.esc(b.id)}"`);
        if (b.mission) attrs.push(`data-mission="${SA.esc(b.mission)}"`);
        return `<button type="button" class="${cls}" ${attrs.join(' ')}>${SA.esc(b.label)}</button>`;
      }).join('');
      return `<div class="sales-app__action-bar">${btns}</div>`;
    }
  });

  SA.register('RouteBanner', {
    render({ code = '', label = '', mapRoute = '', refreshAction = '', tapAction = '' } = {}) {
      const map = mapRoute
        ? `<button type="button" class="sales-app__route-ico" data-route="${SA.esc(mapRoute)}" aria-label="Bản đồ tuyến">${ICO.map}</button>`
        : '';
      const refresh = refreshAction
        ? `<button type="button" class="sales-app__route-ico" data-action="${SA.esc(refreshAction)}" aria-label="Làm mới tuyến">${ICO.refresh}</button>`
        : '';
      const tap = tapAction ? ` data-action="${SA.esc(tapAction)}"` : '';
      const extra = tapAction ? ' sales-app__route--tap' : '';
      return `<div class="sales-app__route${extra}"><span${tap}>${SA.esc(code)} - ${SA.esc(label)}</span>${refresh}${map}</div>`;
    }
  });

  SA.register('ListHead', {
    render({ title = '', count = '', sortAction = '', sortLabel = 'Sắp xếp' } = {}) {
      const sort = sortAction
        ? `<button type="button" class="sales-app__sort-btn" data-action="${SA.esc(sortAction)}">${ICO.sort}<span>${SA.esc(sortLabel)}</span></button>`
        : '';
      const countHtml = count ? ` <span class="sales-app__list-count">(${SA.esc(count)})</span>` : '';
      return `<div class="sales-app__list-head">
        <h2><span class="sales-app__list-mark">${SA.esc(title)}</span>${countHtml}</h2>
        ${sort}
      </div>`;
    }
  });

  SA.register('ScrollArea', {
    render({ children = '', className = '' } = {}) {
      return `<div class="sales-app__scroll ${className}">${children || ''}</div>`;
    }
  });

  SA.register('MenuListItem', {
    render({ icon = 'store', label = '', badge = '', route = '', action = '' } = {}) {
      const go = action
        ? `data-action="${SA.esc(action)}"`
        : (route ? `data-route="${SA.esc(route)}"` : '');
      const badgeHtml = badge ? `<span class="sales-app__badge">${SA.esc(badge)}</span>` : '';
      const ico = ICO[icon] || ICO.store;
      return `<button type="button" class="sales-app__more-item" ${go}>
        <span class="sales-app__more-ico">${ico}</span>
        <span class="sales-app__more-label">${SA.esc(label)}</span>
        ${badgeHtml}
      </button>`;
    }
  });

  SA.register('ReportTile', {
    render({ icon = 'kpi', label = '', route = '' } = {}) {
      const ico = ICO[icon] || icon;
      return `<button type="button" class="sales-app__report-tile" data-route="${SA.esc(route)}">
        <span class="sales-app__report-tile-icon">${ico}</span>
        <span class="sales-app__report-tile-label">${SA.esc(label)}</span>
      </button>`;
    }
  });

  SA.register('TaskItem', {
    render({ label = '', required = false, route = '', trailing = '', disabled = false, icon = 'store' } = {}) {
      const req = required ? ' *' : '';
      const routeAttr = route && !disabled ? `data-route="${SA.esc(route)}"` : '';
      const cls = disabled ? ' is-disabled' : '';
      const ico = ICO[icon] || ICO.store || '';
      const trailText = trailing || (route && !disabled && !trailing ? '›' : '');
      const trailCls = trailing === '✓' ? ' sales-app__task-trail--done' : '';
      const trail = trailText ? `<span class="sales-app__task-trail${trailCls}">${SA.esc(trailText)}</span>` : '';
      return `<button type="button" class="sales-app__task${cls}" ${routeAttr} ${disabled ? 'disabled' : ''}>
        <span class="sales-app__task-ico">${ico}</span>
        <span class="sales-app__task-label">${SA.esc(label)}${req}</span>
        ${trail}
      </button>`;
    }
  });

  SA.register('Tabs', {
    render({ tabs = [], active = '', variant = 'pill' } = {}) {
      const wrap = variant === 'underline' ? 'sales-app__tabs sales-app__tabs--line' : 'sales-app__tabs';
      const items = tabs.map((t) =>
        `<button type="button" class="sales-app__tab ${variant === 'underline' ? 'sales-app__tab--line' : ''} ${active === t.key ? 'is-active' : ''}" data-action="${SA.esc(t.action || '')}" data-tab="${SA.esc(t.key)}">${SA.esc(t.label)}</button>`
      ).join('');
      return `<div class="${wrap}">${items}</div>`;
    }
  });

  SA.register('ChipTabs', {
    render({ chips = [], active = '', action = 'sa-order-tab' } = {}) {
      const items = chips.map((c) =>
        `<button type="button" class="sales-app__chip ${active === c ? 'is-active' : ''}" data-action="${SA.esc(action)}" data-tab="${SA.esc(c)}">${SA.esc(c)}</button>`
      ).join('');
      return `<div class="sales-app__order-tabs-wrap">
        <div class="sales-app__order-tabs">${items}</div>
      </div>`;
    }
  });

  SA.register('SectionTitle', {
    render({ text = '' } = {}) {
      return `<div class="sales-app__section">${SA.esc(text)}</div>`;
    }
  });

  SA.register('Loading', {
    render({ text = 'Đang tải...' } = {}) {
      return `<div class="sales-app__loading"><div class="sales-app__spinner"></div><p>${SA.esc(text)}</p></div>`;
    }
  });

  SA.register('Screen', {
    render(props = {}) {
      return SA.render('PhoneShell', {
        time: props.time,
        lightStatus: props.lightStatus,
        hideBack: props.hideBack,
        inner: [
          props.header || '',
          props.body || '',
          props.footer || '',
          props.nav ? SA.render('BottomNav', { active: props.nav }) : ''
        ].join('')
      });
    }
  });

})(window);
