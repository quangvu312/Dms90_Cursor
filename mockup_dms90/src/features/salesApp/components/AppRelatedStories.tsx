import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SALES_APP_COLORS } from '../theme';
import type { TsStory } from '../../tellingStory/types';

export function AppRelatedStories({
  stories,
  fromPath,
}: {
  stories: TsStory[];
  fromPath: string;
}) {
  const navigate = useNavigate();
  if (!stories.length) return null;

  return (
    <section className="mt-4">
      <h3 className="m-0 mb-2 text-[14px] font-semibold text-[#0f172a]">Bài viết liên quan</h3>
      <div className="space-y-2">
        {stories.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => {
              const from = encodeURIComponent(fromPath);
              navigate(`/sales-app/telling-story/${s.catalogId}/${s.id}?from=${from}`);
            }}
            className="w-full text-left bg-white rounded-2xl border border-[#e2e8f0] px-3.5 py-3 flex items-center gap-2"
          >
            <span className="min-w-0 flex-1 text-[14px] font-medium leading-snug" style={{ color: SALES_APP_COLORS.boldBlue }}>
              {s.title}
            </span>
            <ChevronRight className="w-4 h-4 text-[#9ca3af] shrink-0" />
          </button>
        ))}
      </div>
    </section>
  );
}
