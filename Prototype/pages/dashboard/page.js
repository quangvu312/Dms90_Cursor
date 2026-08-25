async function renderDashboard() {
  const data = await fetch('data/dashboard.json').then(r => r.json());

  const statCards = data.stats.map(s => `
    <div class="dms-stat-card">
      <div class="dms-stat-card__icon" style="background:${s.iconBg}">${s.icon}</div>
      <div>
        <div class="dms-stat-card__label">${s.label}</div>
        ${s.values.map(v => `<div><span class="dms-text-secondary">${v.label}: </span><span class="dms-stat-card__value">${DMS.formatNumber(v.value)}</span></div>`).join('')}
      </div>
    </div>
  `).join('');

  const rankingCards = data.rankings.map(r => {
    const list = r.items.map((item, i) => `
      <li class="dms-ranking-list__item">
        <span class="dms-ranking-list__rank">${i < 3 ? ['🥇','🥈','🥉'][i] : i + 1}</span>
        <span class="dms-truncate" style="flex:1">${DMS.escape(item.label)}</span>
        <div class="dms-ranking-list__bar" style="width:80px"><div class="dms-ranking-list__bar-fill" style="width:${item.percent}%"></div></div>
      </li>
    `).join('');
    return DMS.render('Card', {
      title: r.title,
      extra: DMS.render('Button', { text: 'Chi tiết', type: 'link' }),
      body: `<ul class="dms-ranking-list">${list}</ul>`
    });
  }).join('');

  return `
    <div class="dms-page-header">
      <h1 class="dms-page-header__title">Dashboard</h1>
    </div>
    <div class="dms-page-toolbar dms-mt-md">
      <div class="dms-page-toolbar__left">
        ${DMS.render('DatePicker', { label: '', value: data.dateRange.start, placeholder: 'Ngày bắt đầu' })}
        <span>→</span>
        ${DMS.render('DatePicker', { value: data.dateRange.end, placeholder: 'Ngày kết thúc' })}
      </div>
      ${DMS.render('Button', { text: '🔍 Bộ lọc', type: 'primary' })}
    </div>
    <div class="dms-stat-grid">${statCards}</div>
    <div class="dms-grid-3">${rankingCards}</div>
    ${DMS.render('Card', {
      title: 'Bản đồ hoạt động trong ngày',
      extra: DMS.render('Button', { text: 'Làm mới', type: 'ghost', size: 'sm' }),
      body: `<div style="height:300px;background:#e8e8e8;display:flex;align-items:center;justify-content:center;color:#999">[ Map Placeholder ]</div>`
    })}
  `;
}

window.renderDashboard = renderDashboard;
