/**
 * Viếng thăm — tái hiện flow React Native:
 * VisitScreen@ListOfStore → CheckinScreen → VisitMission → EndVisit
 */
(function (global) {
  'use strict';

  const SA = global.SA;
  const ICO = global.SAIcons || {};
  function S() { return global.SalesAppShared; }

  function statusLabel(status, inRoute) {
    if (status === 'VISITING') return 'Đang viếng thăm';
    if (status === 'VISITED') return inRoute === false ? 'Ngoại tuyến đã viếng thăm' : 'Đã viếng thăm';
    if (inRoute === false) return 'Ngoại tuyến';
    return 'Chưa viếng thăm';
  }

  function visitFilterSheet() {
    const st = S().state();
    if (!st.visitFilterOpen) return '';
    const f = st.visitFilter || { scope: '', status: '' };
    const opt = (name, val, label) =>
      `<button type="button" class="sales-app__filter-chip ${f[name] === val ? 'is-on' : ''}" data-action="sa-visit-filter-set" data-name="${name}" data-val="${SA.esc(val)}">${SA.esc(label)}</button>`;
    return `<div class="sales-app__sheet is-open">
      <button type="button" class="sales-app__sheet-backdrop" data-action="sa-visit-filter-close" aria-label="Đóng"></button>
      <div class="sales-app__sheet-panel">
        <div class="sales-app__sheet-handle"></div>
        <h2 class="sales-app__sheet-title">Bộ lọc tìm kiếm</h2>
        <label class="sales-app__field-label">Tuyến</label>
        <div class="sales-app__chip-row">
          ${opt('scope', '', 'Tất cả')}
          ${opt('scope', 'in', 'Trong tuyến')}
          ${opt('scope', 'off', 'Ngoại tuyến')}
        </div>
        <label class="sales-app__field-label">Trạng thái viếng thăm</label>
        <div class="sales-app__chip-row">
          ${opt('status', '', 'Tất cả')}
          ${opt('status', 'NOT_VISIT', 'Chưa viếng thăm')}
          ${opt('status', 'VISITING', 'Đang viếng thăm')}
          ${opt('status', 'VISITED', 'Đã viếng thăm')}
        </div>
        <div class="sales-app__sheet-actions">
          <button type="button" class="ghost" data-action="sa-visit-filter-reset">Đặt lại</button>
          <button type="button" class="primary" data-action="sa-visit-filter-apply">Áp dụng</button>
        </div>
      </div>
    </div>`;
  }

  function visitSortSheet() {
    const st = S().state();
    if (!st.visitSortOpen) return '';
    const cur = st.visitSort || 'order';
    const row = (val, label) =>
      `<button type="button" class="sales-app__sort-row ${cur === val ? 'is-on' : ''}" data-action="sa-visit-sort" data-val="${val}">${SA.esc(label)}${cur === val ? ' ✓' : ''}</button>`;
    return `<div class="sales-app__sheet is-open">
      <button type="button" class="sales-app__sheet-backdrop" data-action="sa-visit-sort-close" aria-label="Đóng"></button>
      <div class="sales-app__sheet-panel">
        <div class="sales-app__sheet-handle"></div>
        <h2 class="sales-app__sheet-title">Sắp xếp theo</h2>
        ${row('order', 'Thứ tự viếng thăm (mặc định)')}
        ${row('distance', 'Khoảng cách gần nhất')}
      </div>
    </div>`;
  }

  function visitCard(v) {
    const cta = S().visitCta(v);
    return `<article class="sales-app__card sales-app__visit-card">
      <div class="sales-app__visit-card-top">
        <span class="sales-app__visit-pin">${ICO.pin}</span>
        <div class="sales-app__visit-main">
          <p class="sales-app__card-title">${SA.esc(v.code)} - ${SA.esc(v.name)}</p>
        </div>
        <button type="button" class="sales-app__icon-plain" data-route="/sales-app/vieng-tham/${SA.esc(v.code)}" aria-label="Chi tiết">${ICO.info}</button>
      </div>
      <div class="sales-app__visit-mid">
        <span class="sales-app__muted">—</span>
        <span class="sales-app__visit-dist-val">${SA.esc(v.distance)}</span>
      </div>
      <div class="sales-app__visit-addr">
        <p class="sales-app__muted">${SA.esc(v.address)}</p>
        <span class="sales-app__visit-nav">${ICO.nav}</span>
      </div>
      <button type="button" class="sales-app__cta sales-app__cta--${cta.kind}" data-action="sa-open-visit" data-id="${SA.esc(v.code)}">${SA.esc(cta.label)}</button>
    </article>`;
  }

  function endReasonSheet(id) {
    const st = S().state();
    if (!st.visitEndReasonOpen) return '';
    return `<div class="sales-app__sheet is-open">
      <button type="button" class="sales-app__sheet-backdrop" data-action="sa-visit-end-cancel" aria-label="Đóng"></button>
      <div class="sales-app__sheet-panel">
        <div class="sales-app__sheet-handle"></div>
        <h2 class="sales-app__sheet-title">Lý do không thực hiện nhiệm vụ bắt buộc</h2>
        <textarea id="sa-visit-end-reason" class="sales-app__select" rows="4" placeholder="Nhập lý do không thực hiện nhiệm vụ bắt buộc">${SA.esc(st.visitEndReason || '')}</textarea>
        <div class="sales-app__sheet-actions">
          <button type="button" class="ghost" data-action="sa-visit-end-cancel">Hủy</button>
          <button type="button" class="primary" data-action="sa-visit-end-confirm" data-id="${SA.esc(id)}">Xác nhận</button>
        </div>
      </div>
    </div>`;
  }

  const screens = global.SAScreens || {};

  screens.visits = function visitList() {
    const d = S().store();
    const st = S().state();
    const rows = S().filterVisits();
    const total = (d.visits || []).length;
    const filterOn = !!(st.visitFilter && (st.visitFilter.scope || st.visitFilter.status));
    const cards = rows.map(visitCard).join('');
    return SA.render('Screen', {
      time: '15:15',
      lightStatus: true,
      nav: 'vieng-tham',
      header: SA.render('ProfileHero', { userName: d.employee.name, userCode: d.employee.code, userPhone: d.employee.phone })
        + SA.render('RouteBanner', {
          code: d.route.code,
          label: d.route.label,
          mapRoute: '/sales-app/vieng-tham/ban-do',
          tapAction: 'sa-visit-pick-route'
        })
        + SA.render('SearchBar', {
          id: 'sa-visit-q',
          placeholder: 'Nhập mã, tên, số điện thoại hoặc địa chỉ điểm...',
          value: st.visitQ || '',
          filterOn,
          filterAction: 'sa-visit-filter-open'
        })
        + SA.render('ListHead', {
          title: 'Danh sách điểm bán',
          count: `${rows.length}/${total}`,
          sortAction: 'sa-visit-sort-open'
        }),
      body: SA.render('ScrollArea', { children: cards || SA.render('EmptyState', { illustrate: true, title: 'Không có dữ liệu', description: 'Không tìm thấy điểm bán phù hợp bộ lọc.' }) })
        + visitFilterSheet() + visitSortSheet()
    });
  };

  screens['visit-map'] = function visitMap() {
    const rows = S().filterVisits();
    const pins = rows.map((v) => `<button type="button" class="sales-app__map-pin ${S().liveVisitStatus(v.code) === 'VISITING' ? 'is-on' : ''}" data-action="sa-open-visit" data-id="${SA.esc(v.code)}">📍 ${SA.esc(v.code)} · ${SA.esc(v.distance)}</button>`).join('');
    return SA.render('Screen', {
      time: '14:49', lightStatus: true,
      header: SA.render('AppHeader', { variant: 'solid', title: 'Bản đồ tuyến', backRoute: '/sales-app/vieng-tham' }),
      body: `<div class="sales-app__map-mock">
        <p class="sales-app__muted">Định vị trên bản đồ · ${rows.length} điểm</p>
        <div class="sales-app__map-pins">${pins}</div>
      </div>`
    });
  };

  screens['visit-detail'] = function visitDetail(id) {
    const v = S().findVisit(id);
    const st = S().state();
    const status = S().liveVisitStatus(id);
    const started = status === 'VISITING';
    const done = S().missionsOf(id);
    const tasks = S().VISIT_MISSIONS
      .filter((m) => m.showInList !== false)
      .map((m) => {
      const finished = !!done[m.key];
      return SA.render('TaskItem', {
        label: m.label,
        required: m.required,
        icon: m.icon,
        route: started ? `/sales-app/vieng-tham/${id}/${m.path}` : '',
        trailing: finished ? '✓' : '',
        disabled: !started
      });
    }).join('');
    const startBtn = started ? '' : `<button type="button" class="sales-app__cta sales-app__cta--pill" data-action="sa-start-visit" data-id="${SA.esc(id)}">Bắt đầu viếng thăm</button>`;
    const footer = started
      ? SA.render('ActionBar', { buttons: [{ label: 'Kết thúc viếng thăm', action: 'sa-end-visit', id }] })
      : '';
    return SA.render('Screen', {
      time: '15:15', lightStatus: true,
      header: SA.render('AppHeader', {
        variant: 'solid',
        title: 'Viếng thăm',
        backRoute: '/sales-app/vieng-tham',
        rightAction: `<span class="sales-app__header-actions">
          <button type="button" class="sales-app__icon-btn" data-route="/sales-app/ghi-chu" aria-label="Ghi chú">${ICO.note}</button>
          <button type="button" class="sales-app__icon-btn" aria-label="Thông tin">${ICO.info}</button>
        </span>`
      }),
      body: `<div class="sales-app__scroll sales-app__scroll--mission">`
        + `<article class="sales-app__card sales-app__store-hero">
            <div class="sales-app__store-illu">${ICO.store}</div>
            <div>
              <p class="sales-app__card-title">${SA.esc(v.code)} - ${SA.esc(v.name)}</p>
              <p class="sales-app__muted">${SA.esc(v.address)}</p>
            </div>
          </article>`
        + `<div class="sales-app__visit-start">${startBtn}
            <p class="sales-app__muted sales-app__visit-hint">*Bạn cần thực hiện hết các bước bắt buộc trước khi rời khỏi điểm bán.</p>
          </div>`
        + tasks + `</div>` + endReasonSheet(id),
      footer
    });
  };

  screens['visit-checkin'] = function visitCheckin(id) {
    const v = S().findVisit(id);
    const ck = S().state().visitCheckin[id] || {};
    const over = (Number(v.distanceM) || 0) > 100;
    return SA.render('Screen', {
      time: '22:36', lightStatus: true,
      header: SA.render('AppHeader', { variant: 'solid', title: 'Bắt buộc checkin', backRoute: `/sales-app/vieng-tham/${id}` }),
      body: `<div class="sales-app__scroll">
        <article class="sales-app__card">
          <p class="sales-app__card-title">${SA.esc(v.code)} - ${SA.esc(v.name)}</p>
          <p class="sales-app__muted">Khoảng cách: ${SA.esc(v.distance)}</p>
          ${over ? '<p class="sales-app__warn">Khoảng cách nằm ngoài giới hạn cho phép chấm công. Vui lòng điều chỉnh vị trí hoặc bổ sung lý do vượt khoảng cách.</p>' : ''}
        </article>
        <div class="sales-app__camera">${ck.captured ? 'Ảnh check-in đã chụp' : 'Chụp ảnh'}</div>
        ${over ? `<div class="sales-app__form"><label class="sales-app__field-label">Lý do vượt khoảng cách</label><input id="sa-checkin-reason" placeholder="Nhập lý do vượt khoảng cách" value="${SA.esc(ck.reason || '')}" /></div>` : ''}
      </div>`,
      footer: SA.render('ActionBar', {
        buttons: ck.captured
          ? [{ label: 'Xác nhận', action: 'sa-checkin-confirm', id }]
          : [{ label: 'Chụp ảnh', action: 'sa-checkin-capture', id }]
      })
    });
  };

  function missionShell(id, title, inner, extraFooter) {
    return SA.render('Screen', {
      time: '16:32', lightStatus: true,
      header: SA.render('AppHeader', { variant: 'solid', title, backRoute: `/sales-app/vieng-tham/${id}` }),
      body: SA.render('ScrollArea', { children: inner }),
      footer: extraFooter || SA.render('ActionBar', { buttons: [{ label: 'Hoàn thành', action: 'sa-mission-done', id }] })
    });
  }

  screens['visit-inventory'] = function visitInventory(id) {
    const products = S().store().products || [];
    const lines = products.map((p) => `<div class="sales-app__prod">
      <div><div class="sales-app__card-title">${SA.esc(p.id)}</div><div class="sales-app__muted">${SA.esc(p.name)}</div></div>
      <div class="sales-app__stepper">
        <button type="button" data-action="sa-inv-qty" data-id="${SA.esc(p.id)}" data-d="-1">−</button>
        <span>${S().state().cart['inv-' + p.id] || 0}</span>
        <button type="button" data-action="sa-inv-qty" data-id="${SA.esc(p.id)}" data-d="1">+</button>
      </div>
    </div>`).join('');
    return missionShell(id, 'Tồn kho',
      `<p class="sales-app__muted">Cập nhật tồn kho</p>${lines}`,
      SA.render('ActionBar', { buttons: [{ label: 'Kiểm tra tồn kho', action: 'sa-mission-done', id, mission: 'inventory' }] }));
  };

  screens['visit-display'] = function visitDisplay(id) {
    const ck = S().state().visitCheckin[id] || {};
    return missionShell(id, 'Bày hàng',
      `<p class="sales-app__muted">Sắp xếp sản phẩm lên kệ/tủ và chụp hình để hoàn tất nghiệp vụ</p>
       <div class="sales-app__camera">${ck.displayShot ? 'Hình ảnh bày hàng đã chụp' : 'Chụp hình'}</div>
       <p class="sales-app__muted">Chụp ít nhất 1 hình, tối đa 10 hình</p>`,
      SA.render('ActionBar', {
        buttons: ck.displayShot
          ? [{ label: 'Hoàn thành', action: 'sa-mission-done', id }]
          : [{ label: 'Chụp hình', action: 'sa-display-capture', id }]
      }));
  };

  screens['visit-survey'] = function visitSurvey(id) {
    const surveys = S().store().surveys || [];
    const list = surveys.map((s) => SA.render('Card', {
      title: s.name,
      children: `<p class="sales-app__muted">${SA.esc(s.deadline)}</p><p class="sales-app__muted">Số lần bắt buộc khảo sát: 1</p>`,
      route: `/sales-app/vieng-tham/${id}/khao-sat/${s.id}`
    })).join('');
    return missionShell(id, 'Khảo sát', list || SA.render('EmptyState', { description: 'Không có khảo sát' }),
      SA.render('ActionBar', { buttons: [{ label: 'Hoàn thành', action: 'sa-mission-done', id }] }));
  };

  screens['visit-survey-checkin'] = function visitSurveyCheckin(id) {
    return missionShell(id, 'Checkin khảo sát',
      `<div class="sales-app__camera">Checkin khảo sát</div><p class="sales-app__muted">Chụp ảnh check-in tại điểm khảo sát</p>`);
  };

  screens['visit-showcase'] = function visitShowcase(id) {
    return missionShell(id, 'Chương trình trưng bày',
      SA.render('Card', { title: 'CT trưng bày Q3', children: '<p class="sales-app__muted">Đăng ký trưng bày · Số mặt trưng bày: 3</p>' })
      + SA.render('Card', { title: 'Hình ảnh trưng bày', children: '<p class="sales-app__muted">Gửi hình trưng bày theo hình mẫu</p>' }));
  };

  screens['visit-accumulate'] = function visitAccumulate(id) {
    return missionShell(id, 'Chương trình tích lũy',
      SA.render('Card', { title: 'CT tích lũy 2026', children: '<p class="sales-app__muted">Tiến độ tích lũy · Mốc tích lũy đăng ký</p>' }));
  };

  screens['visit-note'] = function visitNote(id) {
    return missionShell(id, 'Ghi chú',
      `<div class="sales-app__form"><input placeholder="Nhập tên ghi chú" /><textarea placeholder="Nhập nội dung ghi chú" rows="5"></textarea></div>`);
  };

  global.SAScreens = screens;
})(window);
