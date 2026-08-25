import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ChevronRight } from 'lucide-react';
import { ScreenHeader } from './AppHeaders';
import { SALES_APP_COLORS } from '../theme';
import { useStoryStore } from '../../tellingStory/storyData';

export function AppTellingStoryCatalogPage() {
  const navigate = useNavigate();
  const { stories, catalogs: allCatalogs } = useStoryStore();
  const catalogs = useMemo(
    () => allCatalogs.filter((c) => c.status === 'Hoạt động'),
    [allCatalogs],
  );

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-[#fafafa]">
      <ScreenHeader title="Telling Story" onBack={() => navigate('/sales-app/khac')} />
      <div className="flex-1 min-h-0 overflow-y-auto px-4 py-3 space-y-2.5 hide-scrollbar">
        {catalogs.length === 0 ? (
          <p className="text-center text-[13px] text-[#94a3b8] py-12 m-0">Không có danh mục</p>
        ) : (
          catalogs.map((c) => {
            const count = stories.filter((s) => s.catalogId === c.id).length;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => navigate(`/sales-app/telling-story/${c.id}`)}
                className="w-full text-left bg-white rounded-2xl shadow-[0_2px_3px_rgba(191,191,191,0.38)] px-3.5 py-3 flex items-center gap-3"
              >
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-lg"
                  style={{ background: '#eef2ff', color: SALES_APP_COLORS.boldBlue }}
                  aria-hidden
                >
                  {c.icon || <BookOpen className="w-5 h-5" />}
                </span>
                <span className="min-w-0 flex-1">
                  <p className="m-0 text-[14px] font-medium text-[#1f2937] leading-normal">{c.name}</p>
                  <p className="m-0 mt-0.5 text-[12px] text-[#6b7280]">{count} bài viết</p>
                </span>
                <ChevronRight className="w-4 h-4 text-[#9ca3af] shrink-0" />
              </button>
            );
          })
        )}
      </div>
    </div>
  );
}
