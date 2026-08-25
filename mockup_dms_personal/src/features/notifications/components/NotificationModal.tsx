import { Calendar, X } from 'lucide-react';
import type { ContentBlock, NotificationItem } from '../types';

interface NotificationModalProps {
  notification: NotificationItem;
  onClose: () => void;
}

function ContentBlockView({ block }: { block: ContentBlock }) {
  if (block.type === 'paragraph') {
    return <p className="mb-3 text-sm leading-relaxed text-slate-700">{block.text}</p>;
  }

  return (
    <ol className="mb-3 space-y-2.5">
      {block.items.map((raw, idx) => {
        const [main, ...subLines] = raw.split('\n');
        return (
          <li key={idx} className="text-sm leading-relaxed text-slate-700">
            <span className="font-semibold">{idx + 1}. </span>
            {main}
            {subLines.length > 0 && (
              <ul className="ml-5 mt-1.5 list-disc space-y-1 marker:text-slate-400">
                {subLines.map((sub, j) => (
                  <li key={j} className="text-slate-600">{sub.replace(/^-\s*/, '')}</li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ol>
  );
}

export function NotificationModal({ notification, onClose }: NotificationModalProps) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/50 px-4"
      onClick={onClose}
    >
      <div
        className="flex max-h-[85vh] w-full max-w-xl flex-col rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header: badges + nút đóng */}
        <div className="flex items-start justify-between px-6 pt-5">
          <div className="flex items-center gap-2">
            <span className="rounded-md border border-amber-300 bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-700">
              {notification.typeLabel}
            </span>
            {notification.highlight && (
              <span className="rounded-md border border-pink-300 bg-pink-50 px-2 py-0.5 text-[11px] font-semibold text-pink-600">
                Nổi bật
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 transition-colors hover:text-slate-700"
            title="Đóng"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tiêu đề đầy đủ */}
        <h2 className="px-6 pt-3 text-xl font-bold leading-snug text-slate-900">
          {notification.fullTitle}
        </h2>

        {/* Thanh metadata: ngày gửi + loại */}
        <div className="mx-6 mt-4 flex items-center gap-5 rounded-xl bg-slate-50 px-4 py-3 text-xs text-slate-600">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-slate-400" />
            Ngày gửi: {notification.sentDate}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
            Loại: {notification.category}
          </span>
        </div>

        {/* Nội dung chi tiết */}
        <div className="overflow-y-auto px-6 py-4">
          {notification.content.map((block, idx) => (
            <ContentBlockView key={idx} block={block} />
          ))}
        </div>

        {/* Nút đóng cửa sổ */}
        <div className="flex justify-end border-t border-slate-100 px-6 py-4">
          <button
            onClick={onClose}
            className="rounded-lg bg-slate-900 px-5 py-2 text-xs font-bold text-white transition-colors hover:bg-slate-800"
          >
            Đóng cửa sổ
          </button>
        </div>
      </div>
    </div>
  );
}
