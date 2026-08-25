async function renderDashboard() {
  const data = await fetch('data/dashboard.json?v=20260820-dash').then((r) => r.json());

  function fmtValue(v) {
    const num = DMS.formatNumber(v.value);
    return (num || '0') + (v.suffix || '');
  }

  const statCards = data.stats
    .map((s) => {
      const rows = s.values
        .map((v) => {
          if (!v.label) {
            return `<div class="dms-stat-card__value dms-stat-card__value--lg">${fmtValue(v)}</div>`;
          }
          return `<div class="dms-stat-card__row">
            <span class="dms-text-secondary">${DMS.escape(v.label)}</span>
            <span class="dms-stat-card__value">${fmtValue(v)}</span>
          </div>`;
        })
        .join('');
      return `<div class="dms-stat-card">
        <div class="dms-stat-card__icon" style="background:${s.iconBg}">${s.icon}</div>
        <div class="dms-stat-card__body">
          <div class="dms-stat-card__label">${DMS.escape(s.label)}</div>
          ${rows}
        </div>
      </div>`;
    })
    .join('');

  const rankingCards = data.rankings
    .map((r) => {
      const maxPercent = Math.max(...r.items.map((item) => Number(item.percent) || 0), 1);
      const list = r.items
        .map((item, i) => {
          const rank = i + 1;
          const width = Math.max(4, ((Number(item.percent) || 0) / maxPercent) * 100);
          const badge =
            rank <= 3
              ? `<span class="dms-rank-medal dms-rank-medal--${rank}" aria-label="Hạng ${rank}"><span class="dms-rank-medal__disc">${rank}</span></span>`
              : `<span class="dms-rank-num" aria-label="Hạng ${rank}">${rank}</span>`;
          return `<li class="dms-ranking-list__item">
            ${badge}
            <span class="dms-ranking-list__name" title="${DMS.escape(item.label)}">${DMS.escape(item.label)}</span>
            <div class="dms-ranking-list__bar-track"><div class="dms-ranking-list__bar-fill" style="width:${width}%"></div></div>
          </li>`;
        })
        .join('');
      return `<div class="dms-rank-card">
        <div class="dms-rank-card__header">
          <h3 class="dms-rank-card__title">${DMS.escape(r.title)}</h3>
          <button type="button" class="dms-rank-card__link">Chi tiết</button>
        </div>
        <ul class="dms-ranking-list">${list}</ul>
      </div>`;
    })
    .join('');

  const mapCard = DMS.render('Card', {
    title: 'Bản đồ hoạt động trong ngày',
    extra: DMS.render('Button', { text: 'Làm mới', type: 'primary', size: 'sm' }),
    body: `<div class="dms-dash-map">
      <iframe
        title="Bản đồ hoạt động"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.openstreetmap.org/export/embed.html?bbox=104.2%2C8.2%2C109.8%2C12.8&amp;layer=mapnik&amp;marker=10.762622%2C106.660172"
      ></iframe>
    </div>`,
  });

  const onlineCard = DMS.render('Card', {
    title: 'Nhân viên Online',
    body: `<div class="dms-dash-online">
      <div class="dms-dash-online__search">
        <span class="dms-dash-online__search-icon" aria-hidden="true">🔍</span>
        <input type="search" placeholder="Tìm kiếm..." class="dms-dash-online__input" />
      </div>
      <div class="dms-dash-online__empty">
        <div class="dms-dash-online__empty-icon" aria-hidden="true">📄</div>
        <p>Trống</p>
      </div>
    </div>`,
  });

  return `
    <div class="dms-dash">
      <div class="dms-dash__header">
        <h1 class="dms-page-header__title">Dashboard</h1>
        <div class="dms-dash__filters">
          <div class="dms-dash__daterange">
            <span>${DMS.escape(data.dateRange.start)}</span>
            <span class="dms-dash__daterange-sep">→</span>
            <span>${DMS.escape(data.dateRange.end)}</span>
          </div>
          ${DMS.render('Button', { text: '🔍 Bộ lọc', type: 'primary' })}
        </div>
      </div>
      <div class="dms-stat-grid">${statCards}</div>
      <div class="dms-grid-3 dms-dash__rankings">${rankingCards}</div>
      <div class="dms-dash__bottom">
        <div class="dms-dash__map-wrap">${mapCard}</div>
        <div class="dms-dash__online-wrap">${onlineCard}</div>
      </div>
    </div>
  `;
}

window.renderDashboard = renderDashboard;
