import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import { ScreenHeader } from './AppHeaders';
import {
  catalogName,
  coverSrc,
  DEFAULT_COVER,
  findCatalog,
  storiesForCatalog,
  storyStatus,
  useStoryStore,
} from '../../tellingStory/storyData';

export function AppTellingStoryListPage() {
  const { catalogId = '' } = useParams();
  const navigate = useNavigate();
  const { stories } = useStoryStore();
  const cat = findCatalog(catalogId);
  const [q, setQ] = useState('');

  const allRows = useMemo(() => storiesForCatalog(catalogId), [catalogId, stories]);

  const rows = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return allRows.filter((s) => {
      if (needle && !`${s.title} ${s.summary || ''}`.toLowerCase().includes(needle)) return false;
      return true;
    });
  }, [allRows, q]);

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-[#fafafa]">
      <ScreenHeader title={cat?.name || catalogName(catalogId) || 'Bài viết'} onBack={() => navigate('/sales-app/telling-story')} />

      <div className="shrink-0 px-4 pt-3 pb-2">
        <div className="flex items-center gap-2 bg-white border border-[#e2e8f0] rounded-xl px-3 py-2.5">
          <Search className="w-4 h-4 text-[#94a3b8] shrink-0" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Tìm bài viết"
            className="flex-1 min-w-0 border-0 outline-none text-[13px] bg-transparent text-[#334155]"
          />
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto px-4 pb-4 space-y-2.5 hide-scrollbar">
        {rows.length === 0 ? (
          <p className="text-center text-[13px] text-[#94a3b8] py-12 m-0">Không có bài viết phù hợp</p>
        ) : (
          rows.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => navigate(`/sales-app/telling-story/${catalogId}/${s.id}`)}
              className="w-full text-left bg-white rounded-2xl shadow-[0_2px_3px_rgba(191,191,191,0.38)] overflow-hidden"
            >
              <img
                src={coverSrc(s.cover)}
                alt=""
                className="w-full h-36 object-cover bg-[#f1f5f9]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = DEFAULT_COVER;
                }}
              />
              <div className="px-3.5 py-3">
                <p className="m-0 text-[14px] font-medium text-[#1f2937] leading-snug line-clamp-2">{s.title}</p>
                {s.summary ? (
                  <p className="m-0 mt-1 text-[12px] text-[#6b7280] line-clamp-2">{s.summary}</p>
                ) : null}
                <p className="m-0 mt-2 text-[11px] text-[#94a3b8]">
                  {storyStatus(s)} · {(s.createdAt || '').slice(0, 10)}
                </p>
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
}
