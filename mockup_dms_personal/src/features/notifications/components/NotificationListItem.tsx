import { FileText, GraduationCap, Settings, ShoppingCart, Tag, type LucideIcon } from 'lucide-react';
import type { NotificationIconKey, NotificationItem } from '../types';

const ICON_MAP: Record<NotificationIconKey, { icon: LucideIcon; bg: string; fg: string }> = {
  maintenance: { icon: Settings, bg: 'bg-red-50', fg: 'text-red-500' },
  approval: { icon: ShoppingCart, bg: 'bg-blue-50', fg: 'text-blue-500' },
  policy: { icon: FileText, bg: 'bg-purple-50', fg: 'text-purple-500' },
  promo: { icon: Tag, bg: 'bg-orange-50', fg: 'text-orange-500' },
  event: { icon: GraduationCap, bg: 'bg-green-50', fg: 'text-green-500' },
};

interface NotificationListItemProps {
  item: NotificationItem;
  onClick: () => void;
}

export function NotificationListItem({ item, onClick }: NotificationListItemProps) {
  const { icon: Icon, bg, fg } = ICON_MAP[item.iconKey];

  return (
    <button
      onClick={onClick}
      className={`flex w-full items-start gap-3 border-b border-slate-50 px-4 py-3 text-left transition-colors last:border-b-0 ${
        item.unread ? 'bg-blue-50/60 hover:bg-blue-50' : 'bg-white hover:bg-slate-50'
      }`}
    >
      <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full ${bg}`}>
        <Icon className={`h-4 w-4 ${fg}`} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <span className="truncate text-[13px] font-semibold text-slate-800">{item.title}</span>
          {item.highlight && (
            <span className="flex-shrink-0 rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-bold text-amber-700">
              Nổi bật
            </span>
          )}
        </div>
        <p className="mt-0.5 line-clamp-2 text-[11.5px] text-slate-500">{item.summary}</p>
        <span className="mt-1 inline-block text-[10.5px] text-slate-400">{item.time}</span>
      </div>

      {item.unread && <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600" />}
    </button>
  );
}
