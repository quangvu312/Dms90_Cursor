import type { KpiCardData } from '../types';

interface Props {
  data: KpiCardData;
}

export function KpiCard({ data }: Props) {
  return (
    <div className="bg-white rounded-xl border border-slate-100 p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
          style={{ background: data.iconBg }}
        >
          <span>{data.iconColor}</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-slate-500 font-medium truncate">{data.title}</p>
          {data.rows.map((row, i) => (
            <div key={i} className="flex items-center justify-between mt-1">
              {row.label && <span className="text-xs text-slate-400">{row.label}</span>}
              <span
                className={`font-bold ${row.highlight !== false ? 'text-blue-600' : 'text-slate-700'} ${!row.label ? 'text-xl' : 'text-sm'}`}
              >
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
