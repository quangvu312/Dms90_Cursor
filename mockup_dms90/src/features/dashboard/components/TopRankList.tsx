import type { TopRankSection } from '../types';

interface Props {
  section: TopRankSection;
}

function RankBadge({ rank }: { rank: number }) {
  if (rank <= 3) {
    return (
      <span className={`dms-rank-medal dms-rank-medal--${rank}`} aria-label={`Hạng ${rank}`}>
        <span className="dms-rank-medal__disc">{rank}</span>
      </span>
    );
  }
  return (
    <span className="dms-rank-num" aria-label={`Hạng ${rank}`}>
      {rank}
    </span>
  );
}

export function TopRankList({ section }: Props) {
  const maxPercent = Math.max(...section.items.map((i) => i.percent), 1);

  return (
    <div className="dms-rank-card">
      <div className="dms-rank-card__header">
        <h3 className="dms-rank-card__title">{section.title}</h3>
        <button type="button" className="dms-rank-card__link">
          Chi tiết
        </button>
      </div>

      <ul className="dms-ranking-list">
        {section.items.map((item) => {
          const width = Math.max(4, (item.percent / maxPercent) * 100);
          return (
            <li key={item.rank} className="dms-ranking-list__item">
              <RankBadge rank={item.rank} />
              <span className="dms-ranking-list__name" title={`${item.code} - ${item.name}`}>
                {item.code} - {item.name}
              </span>
              <div className="dms-ranking-list__bar-track">
                <div className="dms-ranking-list__bar-fill" style={{ width: `${width}%` }} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
