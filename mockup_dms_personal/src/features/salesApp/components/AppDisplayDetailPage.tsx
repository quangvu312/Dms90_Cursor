import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ScreenHeader } from './AppHeaders';
import { findDisplayProgram, storiesLinkedToDisplay } from '../../tellingStory/programLinks';
import { useStoryStore } from '../../tellingStory/storyData';
import { AppRelatedStories } from './AppRelatedStories';

export function AppDisplayDetailPage() {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const { stories: allStories } = useStoryStore();
  const item = findDisplayProgram(id);
  const stories = useMemo(() => (item ? storiesLinkedToDisplay(item.id) : []), [item, allStories]);

  if (!item) {
    return (
      <div className="flex-1 min-h-0 flex flex-col bg-[#fafafa]">
        <ScreenHeader title="Chi tiết CTTB" onBack={() => navigate('/sales-app/trung-bay')} />
        <p className="text-center text-[13px] text-[#94a3b8] py-12 m-0">Không tìm thấy chương trình</p>
      </div>
    );
  }

  const fromPath = `/sales-app/trung-bay/${item.id}`;
  const content = String(item.content || '').replace(/<[^>]+>/g, '').trim();

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-[#fafafa]">
      <ScreenHeader title="Chi tiết CTTB" onBack={() => navigate('/sales-app/trung-bay')} />
      <div className="flex-1 min-h-0 overflow-y-auto px-4 py-4 hide-scrollbar">
        <article className="bg-white rounded-2xl px-3.5 py-4">
          <p className="m-0 text-[12px] text-[#64748b]">{item.code}</p>
          <h1 className="m-0 mt-1 text-[18px] font-semibold text-[#0f172a] leading-snug">{item.name}</h1>
          <p className="m-0 mt-2 text-[13px] text-[#6b7280]">{item.startDate || ''} → {item.endDate || ''}</p>
          {content ? <p className="m-0 mt-3 text-[14px] text-[#334155] leading-relaxed">{content}</p> : null}
          <AppRelatedStories stories={stories} fromPath={fromPath} />
        </article>
      </div>
    </div>
  );
}
