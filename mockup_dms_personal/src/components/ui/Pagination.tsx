interface PaginationProps {
  page: number;
  total: number;
  size: number;
  label?: string;
  sizes?: number[];
  compact?: boolean;
  onPageChange: (page: number) => void;
  onSizeChange: (size: number) => void;
}

function buildPages(cur: number, total: number): (number | '…')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const arr: (number | '…')[] = [1];
  if (cur > 3) arr.push('…');
  for (let i = Math.max(2, cur - 1); i <= Math.min(total - 1, cur + 1); i++) arr.push(i);
  if (cur < total - 2) arr.push('…');
  arr.push(total);
  return arr;
}

export function Pagination({
  page, total, size, label = 'bản ghi',
  sizes = [10, 20, 50], compact = false,
  onPageChange, onSizeChange,
}: PaginationProps) {
  const totalPages = Math.ceil(total / size);
  const from = total ? (page - 1) * size + 1 : 0;
  const to = Math.min(page * size, total);
  const pages = buildPages(page, totalPages);

  return (
    <div className={`dms-pagination${compact ? ' is-compact' : ''}`}>
      <span className="dms-pagination__info">
        {from}-{to} trên {total} {label}
      </span>
      <button
        type="button"
        className="dms-pagination__btn"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
      >
        ‹
      </button>
      {pages.map((p, i) =>
        p === '…' ? (
          <span key={`e${i}`}>…</span>
        ) : (
          <button
            type="button"
            key={p}
            onClick={() => onPageChange(p as number)}
            className={`dms-pagination__btn${p === page ? ' is-active' : ''}`}
          >
            {p}
          </button>
        )
      )}
      <button
        type="button"
        className="dms-pagination__btn"
        disabled={page === totalPages || totalPages === 0}
        onClick={() => onPageChange(page + 1)}
      >
        ›
      </button>
      <label className="dms-pagination__size">
        <select
          value={size}
          onChange={(e) => onSizeChange(Number(e.target.value))}
        >
          {sizes.map((s) => (
            <option key={s} value={s}>{s} / trang</option>
          ))}
        </select>
      </label>
    </div>
  );
}
