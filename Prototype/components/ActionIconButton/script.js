/**
 * ActionIconButton — icon action dùng chung cho cột Tùy chỉnh.
 * Icon: Ant Design Outlined (cùng hệ SVG với Menu sidebar).
 */
(function (DMS) {
  'use strict';

  const TITLES = {
    edit: 'Chỉnh sửa',
    approve: 'Duyệt',
    delete: 'Xóa',
    view: 'Xem chi tiết',
    preview: 'Preview',
    detail: 'Xem chi tiết',
    download: 'Tải xuống',
    print: 'In',
    duplicate: 'Sao chép',
    copy: 'Sao chép',
    lock: 'Khóa',
    unlock: 'Cấp lại mật khẩu',
    send: 'Gửi',
    stop: 'Ngưng hoạt động',
    tool: 'Duyệt',
    image: 'Xem hình',
    chat: 'Trao đổi',
    swap: 'Chọn nhân viên tiếp nhận',
    carry: 'Chuyển trạng thái',
    cancel: 'Hủy',
    reject: 'Từ chối',
    password: 'Đổi mật khẩu'
  };

  function svg(d) {
    return `<svg viewBox="64 64 896 896" width="16" height="16" fill="currentColor" aria-hidden="true" focusable="false"><path d="${d}"/></svg>`;
  }

  const ICONS = {
    edit: svg('M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z'),
    approve: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    delete: svg('M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-504-72h304v72H360v-72zm371.3 656H292.7l-24.2-512h487l-24.2 512z'),
    view: svg('M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z'),
    duplicate: svg('M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM382 848.2L263.9 730H350c17.7 0 32-14.3 32-32V264h320v624H382z'),
    print: svg('M820 436h-40c-4.4 0-8 3.6-8 8v40c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-40c0-4.4-3.6-8-8-8zm32-104H732V120c0-4.4-3.6-8-8-8H300c-4.4 0-8 3.6-8 8v212H172c-44.2 0-80 35.8-80 80v328c0 17.7 14.3 32 32 32h168v132c0 4.4 3.6 8 8 8h424c4.4 0 8-3.6 8-8V772h168c17.7 0 32-14.3 32-32V412c0-44.2-35.8-80-80-80zM360 180h304v152H360V180zm304 664H360V568h304v276zm200-140H772V516c0-4.4-3.6-8-8-8H260c-4.4 0-8 3.6-8 8v188H172V412c0-6.6 5.4-12 12-12h656c6.6 0 12 5.4 12 12v292z'),
    download: svg('M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z'),
    lock: svg('M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z'),
    unlock: svg('M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H232c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zm-40 376H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z'),
    send: svg('M931.4 498.9L94.9 79.2c-12.5-5.8-27 .3-32.8 12.8-2.3 4.9-2.7 10.4-1.2 15.6l88.5 298.3L575.2 512 149.4 618.1 60.9 916.4c-2.9 9.9 2.8 20.3 12.7 23.2 4.1 1.2 8.4.9 12.2-1L931.4 525c12.5-5.8 17.9-20.4 12.1-32.9-2.3-5-6.2-8.9-11.1-11.2z'),
    stop: svg('M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm-80-540h160c4.4 0 8 3.6 8 8v304c0 4.4-3.6 8-8 8H432c-4.4 0-8-3.6-8-8V352c0-4.4 3.6-8 8-8z'),
    image: svg('M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164L402 658.1 674.2 408.6 888 732.5V792zM769.6 352c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64 64 28.7 64 64z'),
    chat: svg('M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-405.6C877.2 66.7 804.9 32 720 32 547.2 32 406.8 147.6 384 307.2 325.5 286.1 260.3 272 192 272 85.7 272 0 344.2 0 432c0 47.3 24.6 89.7 63.6 117.4-8.3 31.1-22.5 60.3-41.7 86.1a8 8 0 006.6 12.5c17.3 0 32.8-6.3 45.3-17.3 16.8-14.7 32.3-32.1 45.8-51.3 25.3 7.1 52.4 11 80.4 11 23.1 0 45.6-2.4 67.2-6.8C284.3 737.4 424.4 832 608 832c48.8 0 95.2-8.3 137.6-23.4 13.5 19.2 29 36.6 45.8 51.3 12.5 11 28 17.3 45.3 17.3a8 8 0 006.6-12.5c-19.2-25.8-33.4-55-41.7-86.1C999.4 751.7 1024 709.3 1024 662c0-87.8-85.7-160-192-160-18.6 0-36.6 2.2-53.8 6.2C802.7 399.4 837.2 256.3 925.2 106.4z'),
    swap: svg('M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.6-21.1 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.6 21.1-1.6 51.8 25.2 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z'),
    carry: svg('M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zM902 234.2L649.8 506.5c-2.9 3.1-2.8 8 .3 10.9l60.8 54.9c3.1 2.9 8 2.8 10.9-.3L914 299.7c2.9-3.1 2.8-8-.3-10.9l-60.8-54.9c-3.1-2.8-8-2.7-10.9.3z'),
    cancel: svg('M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3 5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z'),
    reject: svg('M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z')
  };
  ICONS.preview = ICONS.view;
  ICONS.detail = ICONS.view;
  ICONS.copy = ICONS.duplicate;
  ICONS.tool = ICONS.approve;
  ICONS.check = ICONS.approve;
  ICONS.password = ICONS.unlock;

  const COLOR_TYPES = {
    edit: 'edit',
    approve: 'approve',
    tool: 'tool',
    check: 'approve',
    delete: 'delete',
    view: 'view',
    preview: 'preview',
    detail: 'view',
    image: 'image',
    cancel: 'cancel',
    reject: 'delete',
    password: 'edit'
  };

  DMS.register('ActionIconButton', {
    icons: ICONS,
    titles: TITLES,
    render(props = {}) {
      const type = props.type || 'edit';
      const title = props.title || TITLES[type] || '';
      const disabled = !!props.disabled;
      const colorType = COLOR_TYPES[type] || type;
      const classes = DMS.classNames(
        'dms-action-icon-btn',
        'dms-action-icon-btn--' + colorType,
        disabled ? 'is-disabled' : '',
        props.className || ''
      );
      const attrs = DMS.attrs({
        type: 'button',
        title: title || undefined,
        'aria-label': title || undefined,
        'aria-expanded': props.ariaExpanded != null ? String(!!props.ariaExpanded) : undefined,
        'aria-haspopup': props.ariaHasPopup || undefined,
        disabled: disabled || undefined,
        'data-action': disabled ? undefined : (props.dataAction || undefined),
        'data-route': props.dataRoute || undefined
      });
      return `<button class="${classes}" ${attrs}>${ICONS[type] || ICONS.edit}</button>`;
    }
  });

  DMS.register('ActionDropdown', {
    render(props = {}) {
      const type = props.type || 'approve';
      const items = (props.menu || props.items || []).map((item) => {
        if (!item || item.show === false || item.hidden) return '';
        return `<button type="button" class="dms-action-dropdown__item" data-action="${DMS.escape(item.dataAction || '')}">${DMS.escape(item.label || '')}</button>`;
      }).join('');
      const trigger = DMS.render('ActionIconButton', {
        type: type,
        title: props.title || TITLES[type] || 'Duyệt',
        className: 'dms-action-dropdown__trigger',
        disabled: props.disabled,
        ariaExpanded: false,
        ariaHasPopup: 'menu'
      });
      return `<div class="dms-action-dropdown">
        ${trigger}
        <div class="dms-action-dropdown__menu" hidden>${items}</div>
      </div>`;
    }
  });

  DMS.register('TableActions', {
    render(props = {}) {
      const parts = [];
      (props.actions || []).forEach((a) => {
        if (!a || a.show === false || a.hidden) return;
        if (a.menu && a.menu.length) {
          parts.push(DMS.render('ActionDropdown', a));
          return;
        }
        parts.push(DMS.render('ActionIconButton', a));
      });
      if (props.html) parts.push(props.html);
      const html = parts.filter(Boolean).join('');
      if (!html.trim()) return '';
      return `<div class="dms-action-buttons">${html}</div>`;
    }
  });

  function closeActionDropdowns(except) {
    document.querySelectorAll('.dms-action-dropdown.is-open').forEach((el) => {
      if (except && el === except) return;
      el.classList.remove('is-open');
      el.querySelector('.dms-action-dropdown__trigger')?.setAttribute('aria-expanded', 'false');
      const menu = DMS.getOverlay(el) || el.querySelector('.dms-action-dropdown__menu');
      if (menu) DMS.restoreOverlay(menu);
    });
  }

  function toggleActionDropdown(host) {
    const willOpen = !host.classList.contains('is-open');
    closeActionDropdowns();
    DMS.closeAllOverlays(host);
    if (!willOpen) return;
    host.classList.add('is-open');
    const trigger = host.querySelector('.dms-action-dropdown__trigger');
    if (trigger) trigger.setAttribute('aria-expanded', 'true');
    const menu = host.querySelector('.dms-action-dropdown__menu') || host._dmsOverlay;
    if (menu) DMS.placeOverlay(menu, trigger || host);
  }

  function fireHostAction(host, action) {
    if (!host || !action) return;
    const proxy = document.createElement('button');
    proxy.type = 'button';
    proxy.hidden = true;
    proxy.setAttribute('data-action', action);
    host.appendChild(proxy);
    proxy.click();
    proxy.remove();
  }

  if (!window.__dmsActionDropdownBound) {
    window.__dmsActionDropdownBound = true;
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('.dms-action-dropdown__trigger');
      const item = e.target.closest('.dms-action-dropdown__item');
      const menu = e.target.closest('.dms-action-dropdown__menu');
      const host = e.target.closest('.dms-action-dropdown') || (menu && menu._dmsHost);
      if (trigger) {
        e.preventDefault();
        e.stopPropagation();
        const wrap = trigger.closest('.dms-action-dropdown');
        if (wrap) toggleActionDropdown(wrap);
        return;
      }
      if (item) {
        e.stopPropagation();
        const action = item.getAttribute('data-action') || '';
        const wrap = (menu && menu._dmsHost) || host;
        closeActionDropdowns();
        fireHostAction(wrap, action);
        return;
      }
      closeActionDropdowns();
    }, true);
  }
})(window.DMS);
