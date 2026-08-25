/**
 * App SaleMan — SVG Icons (outline, stroke 1.75)
 */
(function (global) {
  'use strict';

  const s = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"';
  function svg(inner) {
    return `<svg ${s}>${inner}</svg>`;
  }

  global.SAIcons = {
    visit: svg('<path d="M9 5 4 7v11.5l5-2 6 2 5-2V5.5l-5 2-6-2.5z"/><path d="M9 5v11.5M15 7.5V19"/><path d="M16.25 3.8c0 1.95-2.35 4.05-2.35 4.05S11.55 5.75 11.55 3.8a2.35 2.35 0 1 1 4.7 0z"/><circle cx="13.9" cy="3.75" r="0.85" fill="currentColor" stroke="none"/>'),
    report: svg('<path d="M5 19V11.5M12 19V5M19 19v-6"/>'),
    order: svg('<path d="M5.5 6.5h14.2l-1.35 8H7.05z"/><circle cx="9" cy="19.15" r="1.3"/><circle cx="17" cy="19.15" r="1.3"/><path d="M5.5 6.5 4.35 3.6H2.4"/>'),
    more: svg('<rect x="3.75" y="3.75" width="6.5" height="6.5" rx="1.15"/><rect x="13.75" y="3.75" width="6.5" height="6.5" rx="1.15"/><rect x="3.75" y="13.75" width="6.5" height="6.5" rx="1.15"/><rect x="13.75" y="13.75" width="6.5" height="6.5" rx="1.15"/>'),
    back: svg('<path d="M15 5l-7 7 7 7"/>'),
    user: svg('<circle cx="12" cy="8" r="3.2"/><path d="M5 19.5c1.2-3.2 3.8-5 7-5s5.8 1.8 7 5"/>'),
    search: svg('<circle cx="11" cy="11" r="6.2"/><path d="M20 20l-3.4-3.4"/>'),
    funnel: svg('<path d="M4 5h16l-6.2 7.4V19l-3.6 1.5v-8.1z"/>'),
    sort: svg('<path d="M4 7h12M4 12h8M4 17h5"/>'),
    pin: svg('<path d="M12 21s6.5-6.6 6.5-10.2a6.5 6.5 0 10-13 0C5.5 14.4 12 21 12 21z"/><circle cx="12" cy="10.6" r="2"/>'),
    info: svg('<circle cx="12" cy="12" r="8.2"/><path d="M12 10.5V17M12 7.5h.01"/>'),
    map: svg('<path d="M9 4.5l-5 2v13l5-2 6 2 5-2v-13l-5 2-6-2z"/><path d="M9 4.5v13M15 6.5v13"/>'),
    nav: svg('<path d="M12 21s6.5-6.6 6.5-10.2a6.5 6.5 0 10-13 0C5.5 14.4 12 21 12 21z"/><circle cx="12" cy="10.6" r="2"/>'),
    refresh: svg('<path d="M20 12a8 8 0 11-2.3-5.6"/><path d="M20 5v5h-5"/>'),
    qr: svg('<rect x="4" y="4" width="6.5" height="6.5" rx="1"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1"/><path d="M13.5 13.5h3M20 13.5v3M13.5 20h3M17 17h3"/>'),
    note: svg('<path d="M7 4h8l4 4v12H7z"/><path d="M15 4v4h4M9 12h6M9 16h4"/>'),
    store: svg('<path d="M4 10l1.5-5h13L20 10"/><path d="M5 10v9h14v-9"/><path d="M10 19v-5h4v5"/>'),
    percent: svg('<circle cx="8" cy="8" r="2.2"/><circle cx="16" cy="16" r="2.2"/><path d="M7 17L17 7"/>'),
    bell: svg('<path d="M6 16h12l-1.2-2.2V11a4.8 4.8 0 00-9.6 0v2.8z"/><path d="M10 18.5a2 2 0 004 0"/>'),
    calendar: svg('<rect x="4" y="5.5" width="16" height="14" rx="2"/><path d="M8 3.5v4M16 3.5v4M4 10h16"/>'),
    clipboard: svg('<rect x="6" y="5" width="12" height="15" rx="2"/><path d="M9 5V4h6v1M9 11h6M9 15h4"/>'),
    headset: svg('<path d="M4.5 13.5v3a2 2 0 002 2H8"/><path d="M19.5 13.5v2a2 2 0 01-2 2H16"/><path d="M4.5 14a7.5 7.5 0 1115 0"/>'),
    settings: svg('<circle cx="12" cy="12" r="3"/><path d="M12 3.5v2.2M12 18.3V20.5M4.9 6.5l1.6 1.6M17.5 16.9l1.6 1.6M3.5 12h2.2M18.3 12H20.5M4.9 17.5l1.6-1.6M17.5 7.1l1.6-1.6"/>'),
    file: svg('<path d="M7 4h8l4 4v12H7z"/><path d="M15 4v4h4"/>'),
    dist: svg('<path d="M3 17h13V8H3z"/><path d="M16 11h3.5L22 14.5V17h-6"/><circle cx="7" cy="17" r="1.6"/><circle cx="18" cy="17" r="1.6"/>'),
    source: svg('<rect x="4" y="5" width="16" height="14" rx="2"/><path d="M8 9h8M8 13h5"/>'),
    type: svg('<path d="M7 4h10v4H7zM5 8h14v12H5z"/>'),
    warehouse: svg('<path d="M3 20V10l9-6 9 6v10"/><path d="M9 20v-6h6v6"/>'),
    kpi: svg('<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 4v2M12 18v2M4 12h2M18 12h2"/>'),
    daily: svg('<rect x="4" y="5.5" width="16" height="14" rx="2"/><path d="M8 3.5v4M16 3.5v4M4 10h16M8 14h3"/>'),
    monthly: svg('<rect x="4" y="5.5" width="16" height="14" rx="2"/><path d="M8 3.5v4M16 3.5v4M4 10h16M9 14h6M9 17h4"/>'),
    stock: svg('<path d="M4 8l8-4 8 4v11H4z"/><path d="M4 8h16M12 8v11"/>'),
    tracking: svg('<path d="M4 19V9M10 19V5M16 19v-7M21 19H3"/>'),
    showcase: svg('<rect x="4" y="8" width="16" height="11" rx="1.5"/><path d="M8 8V6h8v2M9 12h6M9 15h4"/>'),
    accumulation: svg('<path d="M8 20V11M12 20V7M16 20v-6"/><path d="M6 20h12"/>'),
    ranking: svg('<path d="M8 20V11M12 20V7M16 20v-6"/>'),
    empty: svg('<circle cx="11" cy="11" r="6.2"/><path d="M20 20l-3.4-3.4M8 11h6"/>'),
    plus: svg('<path d="M12 5v14M5 12h14"/>'),
    clock: svg('<circle cx="12" cy="12" r="8"/><path d="M12 8v5l3 2"/>'),
    checkin: svg('<path d="M12 21s6.5-6.6 6.5-10.2a6.5 6.5 0 10-13 0C5.5 14.4 12 21 12 21z"/><circle cx="12" cy="10.6" r="2"/>'),
    merchandising: svg('<path d="M4 8h16l-1.2 4H5.2z"/><path d="M5 12v8h14v-8"/><path d="M8.5 15.5h2M11.5 15.5h2M14.5 15.5h2"/>'),
    gift: svg('<path d="M12 8v13M4.5 11.5h15v9.5h-15z"/><path d="M3.5 8.5h17v3h-17z"/><path d="M12 8.5c-2.2 0-4-1.3-4-3s1.8-2.5 4-1.2C14.2 2.7 16 3.7 16 5.5s-1.8 3-4 3z"/>'),
    cart: svg('<path d="M6 6h15l-1.5 9h-12z"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M6 6L5 3H2"/>'),
    chevronDown: svg('<path d="M6 9l6 6 6-6"/>'),
    chevronUp: svg('<path d="M6 15l6-6 6 6"/>'),
    edit: svg('<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 013 3L8 18l-4 1 1-4z"/>'),
    gallery: svg('<rect x="4" y="5" width="16" height="14" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="M4 16l4.5-4.5L14 17l3-3 3 3"/>'),
    medal: svg('<circle cx="12" cy="9" r="4"/><path d="M8.5 12.5L7 20l5-2.5L17 20l-1.5-7.5"/>'),
    warning: svg('<path d="M12 4l9 16H3z"/><path d="M12 10v4M12 16.5h.01"/>'),
    star: svg('<path d="M12 3.5l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.8 7.2 18.4l.9-5.4L4.2 9.2l5.4-.8z"/>'),
    close: svg('<path d="M6 6l12 12M18 6L6 18"/>'),
    check: svg('<path d="M5 12.5l4.2 4.2L19 7"/>'),
    sigma: svg('<path d="M6 5h12l-6 7 6 7H6"/>'),
    surveyStaff: svg('<rect x="5" y="3" width="11" height="16" rx="1.5"/><path d="M8 7h5M8 10.5h5M8 14h3"/><circle cx="17.5" cy="8" r="2.2"/><path d="M15.5 13c.6-1.2 1.6-2 3-2s2.4.8 3 2"/>'),
    statusSignal: svg('<path d="M2 17h2M6 14h2M10 11h2M14 8h2"/>'),
    statusWifi: svg('<path d="M5 12.5a10 10 0 0114 0M8 15.5a5.5 5.5 0 017 0M11.5 18.5h1"/>'),
    statusBattery: svg('<rect x="3" y="7" width="16" height="10" rx="2.2"/><path d="M21 10.5v3"/><rect x="5" y="9" width="11" height="6" rx="1" fill="currentColor" stroke="none"/>')
  };
})(window);
