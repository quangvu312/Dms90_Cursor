/**
 * DonutChart — reusable SVG donut + HTML legend
 * Interactions (CTTB overview): click slice → popup; click legend text → dim/rescale;
 * click legend nav → isolate status.
 */
(function (DMS) {
  'use strict';

  function polar(cx, cy, r, angle) {
    const a = ((angle - 90) * Math.PI) / 180;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  }

  function donutSlice(cx, cy, rOut, rIn, start, end) {
    const sweep = end - start;
    if (sweep <= 0) return '';
    if (sweep >= 359.99) {
      const [o1x, o1y] = polar(cx, cy, rOut, 0);
      const [o2x, o2y] = polar(cx, cy, rOut, 180);
      const [i1x, i1y] = polar(cx, cy, rIn, 0);
      const [i2x, i2y] = polar(cx, cy, rIn, 180);
      return `M ${o1x} ${o1y} A ${rOut} ${rOut} 0 1 1 ${o2x} ${o2y} A ${rOut} ${rOut} 0 1 1 ${o1x} ${o1y} ` +
        `M ${i1x} ${i1y} A ${rIn} ${rIn} 0 1 0 ${i2x} ${i2y} A ${rIn} ${rIn} 0 1 0 ${i1x} ${i1y} Z`;
    }
    const large = sweep > 180 ? 1 : 0;
    const [ox1, oy1] = polar(cx, cy, rOut, start);
    const [ox2, oy2] = polar(cx, cy, rOut, end);
    const [ix2, iy2] = polar(cx, cy, rIn, end);
    const [ix1, iy1] = polar(cx, cy, rIn, start);
    return `M ${ox1} ${oy1} A ${rOut} ${rOut} 0 ${large} 1 ${ox2} ${oy2} ` +
      `L ${ix2} ${iy2} A ${rIn} ${rIn} 0 ${large} 0 ${ix1} ${iy1} Z`;
  }

  function visibleItems(state) {
    if (state.isolated) {
      return state.items.filter((it) => it.key === state.isolated);
    }
    return state.items.filter((it) => !state.hidden[it.key]);
  }

  function paint(el) {
    const state = el._donutState;
    const host = el.querySelector('[data-donut-body]');
    if (!state || !host) return;

    const totalAll = state.items.reduce((s, it) => s + (Number(it.value) || 0), 0);
    const vis = visibleItems(state).filter((it) => Number(it.value) > 0);
    const visTotal = vis.reduce((s, it) => s + (Number(it.value) || 0), 0);
    const emptyText = el.dataset.emptyText || 'Không có dữ liệu';
    const totalLabel = el.dataset.totalLabel || 'Tổng';

    if (totalAll === 0) {
      host.innerHTML = `<div class="dms-donut__empty">${DMS.escape(emptyText)}</div>`;
      return;
    }
    if (visTotal === 0) {
      host.innerHTML = `
        <div class="dms-donut__empty">${DMS.escape(emptyText)}</div>
        <div class="dms-donut__legend"></div>
      `;
      renderLegend(el, state);
      return;
    }

    const size = 220;
    const cx = 110;
    const cy = 110;
    const rOut = 88;
    const rIn = 58;
    let angle = 0;
    const slices = vis.map((it) => {
      const sweep = (Number(it.value) / visTotal) * 360;
      const start = angle;
      const end = angle + sweep;
      angle = end;
      const path = donutSlice(cx, cy, rOut, rIn, start, end);
      return `<path class="dms-donut__slice" data-key="${DMS.escape(it.key)}" d="${path}" fill="${DMS.escape(it.color)}"></path>`;
    }).join('');

    host.innerHTML = `
      <div class="dms-donut__chart">
        <svg viewBox="0 0 ${size} ${size}" class="dms-donut__svg" aria-hidden="true">${slices}</svg>
        <div class="dms-donut__center">
          <div class="dms-donut__center-label">${DMS.escape(totalLabel)}</div>
          <div class="dms-donut__center-value">${DMS.formatNumber(totalAll)}</div>
        </div>
        <div class="dms-donut__popup" hidden></div>
      </div>
      <div class="dms-donut__legend"></div>
    `;
    renderLegend(el, state);
  }

  function renderLegend(el, state) {
    const legend = el.querySelector('.dms-donut__legend');
    if (!legend) return;
    legend.innerHTML = state.items.map((it) => {
      const dim = !!state.hidden[it.key] && !state.isolated;
      const iso = state.isolated === it.key;
      const cls = DMS.classNames(
        'dms-donut__legend-item',
        dim ? 'is-dimmed' : '',
        iso ? 'is-isolated' : ''
      );
      return `<div class="${cls}" data-legend-key="${DMS.escape(it.key)}">
        <button type="button" class="dms-donut__swatch" style="background:${DMS.escape(it.color)}" data-legend-text="${DMS.escape(it.key)}" title="${DMS.escape(it.label)}"></button>
        <button type="button" class="dms-donut__legend-label" data-legend-text="${DMS.escape(it.key)}">${DMS.escape(it.label)}</button>
        <span class="dms-donut__legend-value">${DMS.formatNumber(it.value)}</span>
        <button type="button" class="dms-donut__legend-nav" data-legend-nav="${DMS.escape(it.key)}" title="Lọc theo trạng thái này">›</button>
      </div>`;
    }).join('');
  }

  function showPopup(el, item, evt) {
    const popup = el.querySelector('.dms-donut__popup');
    if (!popup || !item) return;
    popup.hidden = false;
    popup.textContent = `${item.label}: ${DMS.formatNumber(item.value)}`;
    const chart = el.querySelector('.dms-donut__chart');
    const rect = chart.getBoundingClientRect();
    const x = evt.clientX - rect.left;
    const y = evt.clientY - rect.top;
    popup.style.left = `${Math.max(8, Math.min(x + 8, rect.width - 8))}px`;
    popup.style.top = `${Math.max(8, y - 36)}px`;
    clearTimeout(el._donutPopupTimer);
    el._donutPopupTimer = setTimeout(() => { popup.hidden = true; }, 2500);
  }

  function hidePopup(el) {
    const popup = el.querySelector('.dms-donut__popup');
    if (popup) popup.hidden = true;
  }

  DMS.register('DonutChart', {
    render(props = {}) {
      const {
        id = '',
        items = [],
        totalLabel = 'Tổng',
        emptyText = 'Không có dữ liệu',
        className = ''
      } = props;
      const payload = encodeURIComponent(JSON.stringify(items));
      return `<div class="dms-donut ${className}" data-donut-chart="${DMS.escape(id)}" data-total-label="${DMS.escape(totalLabel)}" data-empty-text="${DMS.escape(emptyText)}" data-items="${payload}">
        <div class="dms-donut__body" data-donut-body></div>
      </div>`;
    },

    bindAll(root) {
      if (!root) return;
      root.querySelectorAll('[data-donut-chart]').forEach((el) => this.bind(el));
    },

    bind(el) {
      if (!el || el.dataset.donutBound) return;
      el.dataset.donutBound = '1';
      let items = [];
      try {
        items = JSON.parse(decodeURIComponent(el.dataset.items || '%5B%5D'));
      } catch (err) {
        items = [];
      }
      el._donutState = { items, hidden: {}, isolated: '' };
      paint(el);

      el.addEventListener('click', (e) => {
        const slice = e.target.closest('.dms-donut__slice');
        if (slice) {
          const item = el._donutState.items.find((it) => it.key === slice.getAttribute('data-key'));
          showPopup(el, item, e);
          return;
        }
        const nav = e.target.closest('[data-legend-nav]');
        if (nav) {
          const key = nav.getAttribute('data-legend-nav');
          el._donutState.isolated = el._donutState.isolated === key ? '' : key;
          el._donutState.hidden = {};
          hidePopup(el);
          paint(el);
          return;
        }
        const text = e.target.closest('[data-legend-text]');
        if (text) {
          const key = text.getAttribute('data-legend-text');
          if (el._donutState.isolated) {
            el._donutState.isolated = '';
            el._donutState.hidden = {};
          } else {
            el._donutState.hidden[key] = !el._donutState.hidden[key];
          }
          hidePopup(el);
          paint(el);
        }
      });
    },

    update(el, items) {
      if (!el) return;
      el.dataset.items = encodeURIComponent(JSON.stringify(items || []));
      el._donutState = { items: items || [], hidden: {}, isolated: '' };
      el.dataset.donutBound = '1';
      paint(el);
    }
  });
})(window.DMS);
