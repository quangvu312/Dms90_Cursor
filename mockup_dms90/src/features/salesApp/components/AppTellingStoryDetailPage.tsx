import { useMemo, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { Download, Eye, X } from 'lucide-react';
import { ScreenHeader } from './AppHeaders';
import { SALES_APP_COLORS } from '../theme';
import {
  catalogName,
  coverSrc,
  DEFAULT_COVER,
  fileKind,
  findStory,
  mediaUrl,
  rewriteAssetHtml,
  storyStatus,
  useStoryStore,
} from '../../tellingStory/storyData';
import { displayLabel, promotionLabel } from '../../tellingStory/programLinks';
import type { TsMediaFile } from '../../tellingStory/types';

function downloadFile(file: TsMediaFile) {
  const href = mediaUrl(file);
  if (!href && file.textContent == null) return;
  let url = href;
  let revoke = false;
  if (!url && file.textContent != null) {
    url = URL.createObjectURL(new Blob([String(file.textContent)], { type: 'text/plain;charset=utf-8' }));
    revoke = true;
  }
  const a = document.createElement('a');
  a.href = url;
  a.download = file.name || 'download';
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  a.remove();
  if (revoke) setTimeout(() => URL.revokeObjectURL(url), 1500);
}

export function AppTellingStoryDetailPage() {
  const { catalogId = '', storyId = '' } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  useStoryStore();
  const item = findStory(storyId);
  const [preview, setPreview] = useState<TsMediaFile | null>(null);

  const catalogBack = catalogId
    ? `/sales-app/telling-story/${catalogId}`
    : item
      ? `/sales-app/telling-story/${item.catalogId}`
      : '/sales-app/telling-story';
  const from = searchParams.get('from');
  const back = from || catalogBack;

  const promoNames = useMemo(
    () => (item ? (item.promotionProgramIds || []).map((id) => promotionLabel(id)).filter(Boolean) : []),
    [item],
  );
  const displayNames = useMemo(
    () => (item ? (item.displayProgramIds || []).map((id) => displayLabel(id)).filter(Boolean) : []),
    [item],
  );

  if (!item) {
    return (
      <div className="flex-1 min-h-0 flex flex-col bg-[#fafafa]">
        <ScreenHeader title="Bài viết" onBack={() => navigate('/sales-app/telling-story')} />
        <p className="text-center text-[13px] text-[#94a3b8] py-12 m-0">Không tìm thấy bài viết</p>
      </div>
    );
  }

  const previewKind = fileKind(preview);
  const previewSrc = preview ? mediaUrl(preview) : '';

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-[#fafafa] relative">
      <ScreenHeader title="Bài viết" onBack={() => navigate(back)} />
      <div className="flex-1 min-h-0 overflow-y-auto hide-scrollbar">
        <article className="bg-white px-4 py-4">
          <p className="m-0 text-[12px] text-[#64748b]">{catalogName(item.catalogId)}</p>
          <h1 className="m-0 mt-2 text-[18px] font-semibold text-[#0f172a] leading-snug">{item.title}</h1>
          <p className="m-0 mt-1.5 text-[12px] text-[#94a3b8]">
            Trạng thái: {storyStatus(item)}
            {(item.createdAt || '').slice(0, 16) ? ` · ${(item.createdAt || '').slice(0, 16)}` : ''}
          </p>

          <button
            type="button"
            className="block w-full mt-3 p-0 border-0 bg-transparent"
            onClick={() => item.cover && setPreview(item.cover)}
          >
            <img
              src={coverSrc(item.cover)}
              alt=""
              className="w-full rounded-xl object-cover bg-[#f1f5f9] max-h-56"
              onError={(e) => {
                (e.target as HTMLImageElement).src = DEFAULT_COVER;
              }}
            />
          </button>

          <div
            className="mt-4 text-[14px] text-[#334155] leading-relaxed prose-p:my-2 prose-h2:text-[16px] prose-h2:font-semibold prose-h2:mt-4 prose-ul:my-2 prose-ol:my-2"
            dangerouslySetInnerHTML={{ __html: rewriteAssetHtml(item.bodyHtml || '') }}
          />

          {(item.media || []).map((f, i) => {
            const kind = fileKind(f);
            const src = mediaUrl(f);
            if (kind === 'image' && src) {
              return (
                <button key={`${f.name}-${i}`} type="button" className="block w-full mt-3 p-0 border-0 bg-transparent" onClick={() => setPreview(f)}>
                  <img src={src} alt={f.name} className="w-full rounded-xl object-cover bg-[#f1f5f9]" />
                </button>
              );
            }
            if (kind === 'video' && src) {
              return (
                <video key={`${f.name}-${i}`} controls poster={f.poster} src={src} className="w-full rounded-xl mt-3 bg-black" />
              );
            }
            if (kind === 'video') {
              return (
                <div key={`${f.name}-${i}`} className="mt-3 rounded-xl overflow-hidden bg-[#0f172a] text-white text-center">
                  {f.poster ? <img src={f.poster} alt="" className="w-full max-h-40 object-cover" /> : null}
                  <p className="m-0 py-3 text-[12px]">{f.name} — video prototype</p>
                </div>
              );
            }
            return (
              <div key={`${f.name}-${i}`} className="mt-2 flex items-center gap-2 rounded-xl border border-[#e2e8f0] px-3 py-2.5 bg-[#f8fafc]">
                <span className="flex-1 min-w-0 text-[13px] text-[#334155] truncate">
                  {f.name} · {(f.type || '').split('/').pop()?.toUpperCase() || 'FILE'}
                </span>
                <button
                  type="button"
                  className="shrink-0 inline-flex items-center gap-1 text-[12px] font-medium px-2 py-1 rounded-lg"
                  style={{ color: SALES_APP_COLORS.boldBlue, background: '#eef2ff' }}
                  onClick={() => setPreview(f)}
                >
                  <Eye className="w-3.5 h-3.5" /> Xem
                </button>
                <button
                  type="button"
                  className="shrink-0 inline-flex items-center gap-1 text-[12px] font-medium px-2 py-1 rounded-lg bg-[#f1f5f9] text-[#475569]"
                  onClick={() => downloadFile(f)}
                >
                  <Download className="w-3.5 h-3.5" /> Tải
                </button>
              </div>
            );
          })}

          {promoNames.length > 0 ? (
            <div className="mt-4">
              <h3 className="m-0 mb-2 text-[14px] font-semibold text-[#0f172a]">Chương trình khuyến mãi</h3>
              {promoNames.map((n) => (
                <p key={n} className="m-0 mb-1 text-[13px] text-[#334155]">• {n}</p>
              ))}
            </div>
          ) : null}

          {displayNames.length > 0 ? (
            <div className="mt-4">
              <h3 className="m-0 mb-2 text-[14px] font-semibold text-[#0f172a]">Chương trình trưng bày</h3>
              {displayNames.map((n) => (
                <p key={n} className="m-0 mb-1 text-[13px] text-[#334155]">• {n}</p>
              ))}
            </div>
          ) : null}

          {(item.links || []).length > 0 ? (
            <div className="mt-4">
              <h3 className="m-0 mb-2 text-[14px] font-semibold text-[#0f172a]">Liên quan</h3>
              {(item.links || []).map((l, i) => (
                <a
                  key={`${l.url}-${i}`}
                  href={l.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-[#e2e8f0] px-3 py-2.5 mb-2 text-[13px]"
                  style={{ color: SALES_APP_COLORS.boldBlue }}
                >
                  {l.label || l.url}
                </a>
              ))}
            </div>
          ) : null}
        </article>
      </div>

      {preview ? (
        <div className="absolute inset-0 z-30 bg-black/90 flex flex-col">
          <div className="shrink-0 flex items-center justify-between gap-2 px-3 py-2.5 text-white">
            <span className="text-[13px] font-medium truncate">{preview.name || 'Xem'}</span>
            <span className="flex items-center gap-1">
              <button type="button" className="p-2" aria-label="Tải xuống" onClick={() => downloadFile(preview)}>
                <Download className="w-5 h-5" />
              </button>
              <button type="button" className="p-2" aria-label="Đóng" onClick={() => setPreview(null)}>
                <X className="w-5 h-5" />
              </button>
            </span>
          </div>
          <div className="flex-1 min-h-0 flex items-center justify-center p-3">
            {previewKind === 'image' && previewSrc ? (
              <img src={previewSrc} alt="" className="max-w-full max-h-full object-contain" />
            ) : previewKind === 'video' && previewSrc ? (
              <video controls src={previewSrc} poster={preview.poster} className="max-w-full max-h-full" />
            ) : previewKind === 'pdf' && previewSrc ? (
              <iframe title={preview.name} src={previewSrc} className="w-full h-full bg-white rounded" />
            ) : (
              <p className="text-white text-[13px] text-center px-6">Không hỗ trợ xem trước. Vui lòng tải xuống.</p>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
