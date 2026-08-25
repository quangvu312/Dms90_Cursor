(function () {
  'use strict';

  const screens = () => window.SAScreens || {};
  function S() { return window.SalesAppShared; }

  function currentPath() {
    if (typeof DMSRouter !== 'undefined' && typeof DMSRouter.getPath === 'function') {
      return String(DMSRouter.getPath() || '').split('?')[0].replace(/\/+$/, '');
    }
    const hash = location.hash.slice(1).split('?')[0];
    return String(hash || location.pathname || '').replace(/\/+$/, '');
  }

  function navigateSalesApp(path, replace) {
    if (typeof DMSRouter !== 'undefined' && typeof DMSRouter.navigate === 'function') {
      DMSRouter.navigate(path, !!replace);
      return;
    }
    if (replace) history.replaceState({ path: path }, '', '#' + path);
    else history.pushState({ path: path }, '', '#' + path);
  }

  function showSaToast(msg) {
    const phone = document.querySelector('.sales-app__phone-bezel') || document.querySelector('.sales-app__phone');
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

  function matchScreen(path) {
    const { parts } = S().parseSalesPath(path);
    if (parts.length <= 1) return { name: 'root' };
    const rest = parts.slice(1);
    if (rest[0] === 'login') return { name: 'login' };
    if (rest[0] === 'bao-cao') {
      if (rest[1]) return { name: 'report-detail', slug: rest[1] };
      return { name: 'report' };
    }
    if (rest[0] === 'don-hang') return { name: 'orders' };
    if (rest[0] === 'khac') return { name: 'more' };
    if (rest[0] === 'khuyen-mai') return { name: 'promotions' };
    if (rest[0] === 'thong-bao') return { name: 'notifications' };
    if (rest[0] === 'nghi-phep') {
      if (rest[1] === 'tao-moi') return { name: 'leave-create' };
      return { name: 'leave' };
    }
    if (rest[0] === 'khao-sat') {
      if (rest[1]) return { name: 'survey-detail', id: rest[1] };
      return { name: 'survey' };
    }
    if (rest[0] === 'ho-tro') {
      if (rest[1] === 'tao-moi') return { name: 'support-create' };
      return { name: 'support' };
    }
    if (rest[0] === 'cai-dat') return { name: 'settings' };
    if (rest[0] === 'ghi-chu') return { name: 'notes' };
    if (rest[0] === 'hop-dong') {
      if (rest[1]) return { name: 'contract-detail', id: rest[1] };
      return { name: 'contracts' };
    }
    if (rest[0] === 'khach-hang') {
      if (rest[1] === 'tao-moi') return { name: 'cust-create' };
      if ((rest[1] === 'chi-tiet' || rest[1] === 'cham-soc') && rest[2]) return { name: 'cust-detail', id: rest[2] };
      return { name: 'customers' };
    }
    if (rest[0] === 'vieng-tham') {
      if (!rest[1]) return { name: 'visits' };
      if (rest[1] === 'ban-do') return { name: 'visit-map' };
      const id = rest[1];
      if (rest[2] === 'don-hang' && rest[3]) return { name: 'order-detail', id, orderId: rest[3] };
      if (rest[2] === 'don-hang') return { name: 'visit-orders', id };
      if (rest[2] === 'tao-don-hang') return { name: 'create-order', id, step: rest.slice(3).join('/') };
      if (rest[2] === 'checkin') return { name: 'visit-checkin', id };
      if (rest[2] === 'ton-kho') return { name: 'visit-inventory', id };
      if (rest[2] === 'bay-hang') return { name: 'visit-display', id };
      if (rest[2] === 'khao-sat' && rest[3]) return { name: 'survey-detail', id: rest[3] };
      if (rest[2] === 'khao-sat') return { name: 'visit-survey', id };
      if (rest[2] === 'checkin-khao-sat') return { name: 'visit-survey-checkin', id };
      if (rest[2] === 'trung-bay') return { name: 'visit-showcase', id };
      if (rest[2] === 'tich-luy') return { name: 'visit-accumulate', id };
      if (rest[2] === 'ghi-chu') return { name: 'visit-note', id };
      return { name: 'visit-detail', id };
    }
    return { name: 'root' };
  }

  function renderByScreen(screen) {
    const sc = screens();
    const map = {
      login: () => sc.login(),
      visits: () => sc.visits(),
      'visit-detail': () => sc['visit-detail'](screen.id),
      'visit-map': () => sc['visit-map'](),
      'visit-checkin': () => sc['visit-checkin'](screen.id),
      'visit-inventory': () => sc['visit-inventory'](screen.id),
      'visit-display': () => sc['visit-display'](screen.id),
      'visit-survey': () => sc['visit-survey'](screen.id),
      'visit-survey-checkin': () => sc['visit-survey-checkin'](screen.id),
      'visit-showcase': () => sc['visit-showcase'](screen.id),
      'visit-accumulate': () => sc['visit-accumulate'](screen.id),
      'visit-note': () => sc['visit-note'](screen.id),
      'visit-orders': () => sc['visit-orders'](screen.id),
      'order-detail': () => sc['order-detail'](screen.id, screen.orderId),
      'create-order': () => sc['create-order'](screen.id, screen.step),
      report: () => sc.report(),
      'report-detail': () => sc['report-detail'](screen.slug),
      orders: () => sc.orders(),
      more: () => sc.more(),
      customers: () => sc.customers(),
      'cust-create': () => sc['cust-create'](),
      'cust-detail': () => sc['cust-detail'](screen.id),
      'cust-care': () => sc['cust-care'](screen.id),
      contracts: () => sc.contracts(),
      'contract-detail': () => sc['contract-detail'](screen.id),
      promotions: () => sc.promotions(),
      notifications: () => sc.notifications(),
      leave: () => sc.leave(),
      'leave-create': () => sc['leave-create'](),
      survey: () => sc.survey(),
      'survey-detail': () => sc['survey-detail'](screen.id),
      support: () => sc.support(),
      'support-create': () => sc['support-create'](),
      settings: () => sc.settings(),
      notes: () => sc.notes()
    };
    const fn = map[screen.name];
    return fn ? fn() : sc.visits();
  }

  async function renderSalesApp(path) {
    await S().loadSalesAppStore();
    document.body.classList.add('is-sales-app');
    let screen = matchScreen(path);
    if (screen.name === 'root') {
      const next = S().isAuthed() ? '/sales-app/vieng-tham' : '/sales-app/login';
      navigateSalesApp(next, true);
      screen = matchScreen(next);
    }
    if (screen.name !== 'login' && !S().isAuthed()) {
      navigateSalesApp('/sales-app/login', true);
      screen = matchScreen('/sales-app/login');
    }
    if (screen.name === 'contracts' && S().state().contractLoading) {
      scheduleContractLoad();
    }
    return renderByScreen(screen);
  }

  function scheduleContractLoad() {
    const st = S().state();
    if (st._contractLoadTimer) return;
    st._contractLoadTimer = true;
    setTimeout(function () {
      st.contractLoading = false;
      st._contractLoadTimer = false;
      if (currentPath() !== '/sales-app/hop-dong') return;
      const el = DMSRouter.contentEl;
      if (!el) return;
      el.innerHTML = renderByScreen({ name: 'contracts' });
      bindSalesApp(el);
    }, 450);
  }

  function bindSalesApp(root) {
    if (!root) return;
    const visitQ = root.querySelector('#sa-visit-q');
    if (visitQ) {
      visitQ.addEventListener('input', (e) => { S().state().visitQ = e.target.value; });
      visitQ.addEventListener('keydown', (e) => { if (e.key === 'Enter') DMSRouter.handleRoute(); });
    }
    const custQ = root.querySelector('#sa-cust-q');
    if (custQ) {
      custQ.addEventListener('input', (e) => { S().state().custQ = e.target.value; });
      custQ.addEventListener('keydown', (e) => { if (e.key === 'Enter') DMSRouter.handleRoute(); });
    }
    const orderProdQ = root.querySelector('#sa-order-prod-q');
    if (orderProdQ) {
      orderProdQ.addEventListener('input', (e) => { S().state().orderProdQ = e.target.value; });
      orderProdQ.addEventListener('keydown', (e) => { if (e.key === 'Enter') DMSRouter.handleRoute(); });
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
    document.addEventListener('submit', (e) => {
      const form = e.target;
      if (!(form instanceof HTMLFormElement) || !document.body.classList.contains('is-sales-app')) return;
      if (!form.classList.contains('sales-app__login-main') && form.dataset.actionSubmit !== 'sa-login') return;
      e.preventDefault();
      const emp = document.getElementById('sa-emp');
      const pass = document.getElementById('sa-pass');
      if (S().login(emp ? emp.value : '', pass ? pass.value : '')) {
        DMSRouter.navigate('/sales-app/vieng-tham');
      } else {
        showSaToast('Tài khoản hoặc mật khẩu không đúng');
      }
    });
    document.addEventListener('click', (e) => {
      const act = e.target.closest('[data-action]');
      if (!act || !document.body.classList.contains('is-sales-app')) return;
      const a = act.dataset.action;
      if (a === 'sa-login') {
        e.preventDefault();
        const emp = document.getElementById('sa-emp');
        const pass = document.getElementById('sa-pass');
        if (S().login(emp ? emp.value : '', pass ? pass.value : '')) {
          DMSRouter.navigate('/sales-app/vieng-tham');
        } else {
          showSaToast('Tài khoản hoặc mật khẩu không đúng');
        }
      }
      if (a === 'sa-settings-logout') {
        const sheet = document.getElementById('sa-logout-sheet');
        if (sheet) {
          sheet.hidden = false;
          sheet.classList.remove('is-hidden');
        }
      }
      if (a === 'sa-settings-delete') {
        const sheet = document.getElementById('sa-delete-sheet');
        if (sheet) {
          sheet.hidden = false;
          sheet.classList.remove('is-hidden');
        }
      }
      if (a === 'sa-settings-version') {
        showSaToast('Phiên bản hiện tại: 1.0.00');
      }
      if (a === 'sa-logout-cancel' || a === 'sa-delete-cancel') {
        ['sa-logout-sheet', 'sa-delete-sheet'].forEach((id) => {
          const sheet = document.getElementById(id);
          if (sheet) {
            sheet.hidden = true;
            sheet.classList.add('is-hidden');
          }
        });
      }
      if (a === 'sa-logout') {
        ['sa-logout-sheet', 'sa-delete-sheet'].forEach((id) => {
          const sheet = document.getElementById(id);
          if (sheet) {
            sheet.hidden = true;
            sheet.classList.add('is-hidden');
          }
        });
        S().logout();
        DMSRouter.navigate('/sales-app/login');
      }
      if (a === 'sa-open-visit') {
        const st = S().state();
        if (!st.workCheckedIn) {
          showSaToast('Vui lòng chấm công hàng ngày trước khi viếng thăm');
          return;
        }
        const id = act.dataset.id;
        if (st.activeVisitId && st.activeVisitId !== id) {
          const other = S().findVisit(st.activeVisitId);
          showSaToast('Bạn đang viếng thăm một ' + (other.name || 'cửa hàng') + '. Vui lòng viếng thăm ' + (other.name || '') + ' trước.');
          return;
        }
        DMSRouter.navigate('/sales-app/vieng-tham/' + id);
      }
      if (a === 'sa-start-visit') {
        const st = S().state();
        if (st.activeVisitId && st.activeVisitId !== act.dataset.id) {
          showSaToast('Bạn đang viếng thăm một cửa hàng khác');
          return;
        }
        DMSRouter.navigate('/sales-app/vieng-tham/' + act.dataset.id + '/checkin');
      }
      if (a === 'sa-checkin-capture') {
        const st = S().state();
        st.visitCheckin[act.dataset.id] = Object.assign({}, st.visitCheckin[act.dataset.id], { captured: true });
        DMSRouter.handleRoute();
      }
      if (a === 'sa-checkin-confirm') {
        const st = S().state();
        const id = act.dataset.id;
        st.visitStarted[id] = true;
        st.visitStatus[id] = 'VISITING';
        st.activeVisitId = id;
        showSaToast('Bắt đầu viếng thăm');
        DMSRouter.navigate('/sales-app/vieng-tham/' + id);
      }
      if (a === 'sa-display-capture') {
        const st = S().state();
        st.visitCheckin[act.dataset.id] = Object.assign({}, st.visitCheckin[act.dataset.id], { displayShot: true });
        DMSRouter.handleRoute();
      }
      if (a === 'sa-mission-done') {
        const st = S().state();
        const id = act.dataset.id;
        const path = currentPath();
        const map = {
          'don-hang': 'order', 'trung-bay': 'showcase', 'tich-luy': 'accumulate',
          'ton-kho': 'inventory', 'khao-sat': 'survey', 'bay-hang': 'display',
          'ghi-chu': 'note', 'checkin-khao-sat': 'surveyCheckin'
        };
        const key = act.dataset.mission || map[path.split('/').pop()] || 'order';
        const done = S().missionsOf(id);
        done[key] = true;
        done[key + 'At'] = '16:32';
        showSaToast('Hoàn thành');
        DMSRouter.navigate('/sales-app/vieng-tham/' + id);
      }
      if (a === 'sa-end-visit') {
        const id = act.dataset.id;
        const pending = S().requiredMissionsPending(id);
        const st = S().state();
        if (pending.length) {
          st.visitEndReasonOpen = true;
          DMSRouter.handleRoute();
          return;
        }
        st.visitStatus[id] = 'VISITED';
        st.activeVisitId = '';
        st.visitStarted[id] = false;
        showSaToast('Kết thúc viếng thăm');
        DMSRouter.navigate('/sales-app/vieng-tham');
      }
      if (a === 'sa-visit-end-cancel') { S().state().visitEndReasonOpen = false; DMSRouter.handleRoute(); }
      if (a === 'sa-visit-end-confirm') {
        const reasonEl = document.getElementById('sa-visit-end-reason');
        const reason = reasonEl ? String(reasonEl.value || '').trim() : '';
        if (!reason) { showSaToast('Bắt buộc nhập lý do khác'); return; }
        const st = S().state();
        const id = act.dataset.id;
        st.visitEndReason = reason;
        st.visitEndReasonOpen = false;
        st.visitStatus[id] = 'VISITED';
        st.activeVisitId = '';
        st.visitStarted[id] = false;
        showSaToast('Kết thúc viếng thăm');
        DMSRouter.navigate('/sales-app/vieng-tham');
      }
      if (a === 'sa-visit-filter-open') { S().state().visitFilterOpen = true; S().state().visitSortOpen = false; DMSRouter.handleRoute(); }
      if (a === 'sa-visit-filter-close') { S().state().visitFilterOpen = false; DMSRouter.handleRoute(); }
      if (a === 'sa-visit-filter-set') {
        const st = S().state();
        st.visitFilter = st.visitFilter || { scope: '', status: '' };
        st.visitFilter[act.dataset.name] = act.dataset.val;
        DMSRouter.handleRoute();
      }
      if (a === 'sa-visit-filter-reset') { S().state().visitFilter = { scope: '', status: '' }; DMSRouter.handleRoute(); }
      if (a === 'sa-visit-filter-apply') { S().state().visitFilterOpen = false; DMSRouter.handleRoute(); }
      if (a === 'sa-visit-sort-open') { S().state().visitSortOpen = true; S().state().visitFilterOpen = false; DMSRouter.handleRoute(); }
      if (a === 'sa-visit-sort-close') { S().state().visitSortOpen = false; DMSRouter.handleRoute(); }
      if (a === 'sa-visit-sort') { S().state().visitSort = act.dataset.val; S().state().visitSortOpen = false; DMSRouter.handleRoute(); }
      if (a === 'sa-visit-pick-route') { showSaToast('Chọn tuyến bán hàng'); }
      if (a === 'sa-inv-qty') {
        const key = 'inv-' + act.dataset.id;
        const cart = S().state().cart;
        cart[key] = Math.max(0, (cart[key] || 0) + Number(act.dataset.d));
        DMSRouter.handleRoute();
      }
      if (a === 'sa-order-tab') { S().state().orderStatus = act.dataset.tab; DMSRouter.handleRoute(); }
      if (a === 'sa-cust-tab') { S().state().custTab = act.dataset.tab; DMSRouter.handleRoute(); }
      if (a === 'sa-cust-filter-open') {
        const st = S().state();
        st.custFilterOpen = true;
        st.custFilterDraft = Object.assign({}, st.custFilter || {});
        DMSRouter.handleRoute();
      }
      if (a === 'sa-cust-filter-close') {
        S().state().custFilterOpen = false;
        DMSRouter.handleRoute();
      }
      if (a === 'sa-cust-filter-reset') {
        S().state().custFilterDraft = {};
        DMSRouter.handleRoute();
      }
      if (a === 'sa-cust-filter-pick') {
        const st = S().state();
        const draft = st.custFilterDraft || (st.custFilterDraft = {});
        const g = act.dataset.group;
        const v = act.dataset.value;
        if (draft[g] === v) delete draft[g];
        else draft[g] = v;
        DMSRouter.handleRoute();
      }
      if (a === 'sa-cust-filter-apply') {
        const st = S().state();
        st.custFilter = Object.assign({}, st.custFilterDraft || {});
        st.custFilterOpen = false;
        DMSRouter.handleRoute();
      }
      if (a === 'sa-cust-section') {
        const st = S().state();
        const open = st.custDetailOpen || (st.custDetailOpen = { chung: true, daidien: true, phanloai: true, vitri: true });
        const key = act.dataset.section;
        open[key] = !open[key];
        DMSRouter.handleRoute();
      }
      if (a === 'sa-cust-edit') {
        showSaToast('Mở màn hình chỉnh sửa (mock)');
      }
      if (a === 'sa-qty') {
        const id = act.dataset.id;
        const d = Number(act.dataset.d);
        const cart = S().state().cart;
        cart[id] = Math.max(0, (cart[id] || 0) + d);
        if (d > 0) S().state().orderProdDetailId = '';
        DMSRouter.handleRoute();
      }
      if (a === 'sa-order-type-open') {
        S().state().orderTypeOpen = true;
        DMSRouter.handleRoute();
      }
      if (a === 'sa-order-type-close') {
        S().state().orderTypeOpen = false;
        DMSRouter.handleRoute();
      }
      if (a === 'sa-order-type-pick') {
        const st = S().state();
        st.orderType = act.dataset.val || 'Đơn đặt';
        st.orderTypeOpen = false;
        const id = act.dataset.id;
        DMSRouter.navigate('/sales-app/vieng-tham/' + id + '/tao-don-hang/san-pham');
      }
      if (a === 'sa-order-filter-open') {
        const path = currentPath();
        const m = path.match(/\/vieng-tham\/([^/]+)\/tao-don-hang/);
        if (m) DMSRouter.navigate('/sales-app/vieng-tham/' + m[1] + '/tao-don-hang/san-pham/bo-loc');
      }
      if (a === 'sa-order-filter-set') {
        const st = S().state();
        st.orderProdFilter = st.orderProdFilter || { industry: '', inStock: '' };
        const name = act.dataset.name;
        let val = act.dataset.val || '';
        if (name === 'inStock') val = val === '1' ? '1' : '';
        st.orderProdFilter[name] = val;
        DMSRouter.handleRoute();
      }
      if (a === 'sa-order-filter-reset') {
        S().state().orderProdFilter = { industry: '', inStock: '' };
        DMSRouter.handleRoute();
      }
      if (a === 'sa-order-filter-apply') {
        const id = act.dataset.id;
        DMSRouter.navigate('/sales-app/vieng-tham/' + id + '/tao-don-hang/san-pham');
      }
      if (a === 'sa-order-uom-open') {
        const st = S().state();
        st.orderUomOpen = true;
        st.orderUomProductId = act.dataset.id;
        DMSRouter.handleRoute();
      }
      if (a === 'sa-order-uom-close') {
        S().state().orderUomOpen = false;
        S().state().orderUomProductId = '';
        DMSRouter.handleRoute();
      }
      if (a === 'sa-order-uom-pick') {
        const st = S().state();
        st.cartUom = st.cartUom || {};
        if (st.orderUomProductId) st.cartUom[st.orderUomProductId] = act.dataset.val;
        DMSRouter.handleRoute();
      }
      if (a === 'sa-order-prod-detail') {
        S().state().orderProdDetailId = act.dataset.id;
        DMSRouter.handleRoute();
      }
      if (a === 'sa-order-prod-close') {
        S().state().orderProdDetailId = '';
        DMSRouter.handleRoute();
      }
      if (a === 'sa-order-checkout') {
        const id = act.dataset.id;
        const noteEl = document.getElementById('sa-order-note');
        if (noteEl) S().state().orderNote = noteEl.value;
        DMSRouter.navigate('/sales-app/vieng-tham/' + id + '/tao-don-hang/xac-nhan');
      }
      if (a === 'sa-confirm-order') {
        const id = act.dataset.id;
        const noteEl = document.getElementById('sa-order-note');
        if (noteEl) S().state().orderNote = noteEl.value;
        const done = S().missionsOf(id);
        done.order = true;
        done.orderAt = '16:32';
        S().state().cart = {};
        S().state().orderNote = '';
        showSaToast('Đặt hàng thành công');
        DMSRouter.navigate('/sales-app/vieng-tham/' + id + '/don-hang');
      }
      if (a === 'sa-save-customer') { DMSRouter.navigate('/sales-app/khach-hang'); }
      if (a === 'sa-save-leave') { showSaToast('Đã gửi yêu cầu nghỉ phép'); DMSRouter.navigate('/sales-app/nghi-phep'); }
      if (a === 'sa-save-survey') { showSaToast('Đã gửi khảo sát'); DMSRouter.navigate('/sales-app/khao-sat'); }
      if (a === 'sa-save-support') { showSaToast('Đã tạo yêu cầu hỗ trợ'); DMSRouter.navigate('/sales-app/ho-tro'); }
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
      if (a === 'sa-ct-filter-close') { S().state().contractFilterOpen = false; DMSRouter.handleRoute(); }
      if (a === 'sa-ct-filter-apply') {
        const st = S().state();
        st.contractFilter = readContractDraftFromDom();
        st.contractDraft = st.contractFilter;
        st.contractFilterOpen = false;
        DMSRouter.handleRoute();
      }
      if (a === 'sa-ct-filter-reset') { S().state().contractDraft = S().emptyContractFilter(); DMSRouter.handleRoute(); }
      if (a === 'sa-ct-clear') {
        const st = S().state();
        st.contractQ = '';
        st.contractFilter = S().emptyContractFilter();
        st.contractDraft = S().emptyContractFilter();
        st.contractFilterOpen = false;
        DMSRouter.handleRoute();
      }
      if (a === 'sa-ct-download') { S().downloadMockPdf(act.dataset.name); showSaToast('Đã tải file hợp đồng'); }
      if (a === 'sa-reorder') { showSaToast('Đã tạo đơn hàng mới từ ' + (act.dataset.id || 'đơn đã chọn')); }
      if (a === 'sa-kpi-tab') {
        S().state().reportKpiTab = act.dataset.tab || 'month';
        DMSRouter.handleRoute();
      }
      if (a === 'sa-toggle-workday') {
        const st = S().state();
        st.workCheckedIn = !st.workCheckedIn;
        showSaToast(st.workCheckedIn ? 'Đã bắt đầu ngày công' : 'Đã kết thúc ngày công');
        DMSRouter.handleRoute();
      }
      if (a === 'sa-qr') { showSaToast('Mã QR của tôi'); }
    });
  }

  renderSalesApp.onMount = bindSalesApp;
  window.renderSalesApp = renderSalesApp;
})();
