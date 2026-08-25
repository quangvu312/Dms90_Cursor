import { BottomTabBar, type TabKey } from './BottomTabBar';
import { ScreenHeader } from './AppHeaders';

export function PlaceholderTabPage({ title, active }: { title: string; active: TabKey }) {
  return (
    <div className="flex-1 min-h-0 flex flex-col bg-white">
      <ScreenHeader title={title} balanceBack={false} />
      <div className="flex-1 flex items-center justify-center text-slate-400 text-sm">
        Đang cập nhật
      </div>
      <BottomTabBar active={active} />
    </div>
  );
}
