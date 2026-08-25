/**
 * FilePreviewModal — xem trước file đính kèm (PDF / TXT / DOC / DOCX)
 */
(function (DMS) {
  'use strict';

  const WORD_ICON = '<svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true"><rect x="8" y="4" width="32" height="40" rx="3" fill="#2B579A"/><path fill="#fff" d="M16 16h16v2.5H16V16zm0 6h16v2.5H16V22zm0 6h12v2.5H16V28z"/></svg>';

  function kindOf(file) {
    const name = String((file && file.name) || '').toLowerCase();
    const type = String((file && file.type) || '').toLowerCase();
    if (/\.(png|jpe?g|gif|webp|svg)$/i.test(name) || type.indexOf('image/') === 0) return 'image';
    if (/\.(mp4|webm|ogg)$/i.test(name) || type.indexOf('video/') === 0) return 'video';
    if (window.ContractFile) return window.ContractFile.kind(file);
    if (window.TellingStoryShared) return window.TellingStoryShared.fileKind(file);
    return 'other';
  }

  function formatSize(bytes) {
    if (window.ContractFile) return window.ContractFile.formatSize(bytes);
    if (window.TellingStoryShared) return window.TellingStoryShared.formatSize(bytes);
    return '';
  }

  function previewSrc(file) {
    return (file && (file.objectUrl || file.url)) || '';
  }

  function previewBody(file) {
    const kind = kindOf(file);
    if (kind === 'image') {
      const src = previewSrc(file);
      if (!src) return `<div class="ct-file-preview__fallback"><p>Không có dữ liệu hình ảnh.</p></div>`;
      return `<img class="ts-file-preview__img" alt="${DMS.escape(file.name || 'Ảnh')}" src="${DMS.escape(src)}" />`;
    }
    if (kind === 'video') {
      const src = previewSrc(file);
      const poster = file.poster ? ` poster="${DMS.escape(file.poster)}"` : '';
      if (!src) {
        return `<div class="ct-file-preview__fallback">
          <p class="ct-file-preview__fallback-title">Video (prototype)</p>
          <p class="ct-file-preview__fallback-desc">Chưa có nguồn phát. Vui lòng tải file nếu có.</p>
        </div>`;
      }
      return `<video class="ts-file-preview__video" controls${poster} src="${DMS.escape(src)}"></video>`;
    }
    if (kind === 'pdf') {
      const src = previewSrc(file);
      if (!src) {
        return `<div class="ct-file-preview__fallback">
          <p>Không có dữ liệu để xem trước PDF.</p>
        </div>`;
      }
      return `<iframe class="ct-file-preview__frame" title="${DMS.escape(file.name || 'PDF')}" src="${DMS.escape(src)}"></iframe>`;
    }
    if (kind === 'txt') {
      const text = file.textContent;
      if (text != null && String(text) !== '') {
        return `<pre class="ct-file-preview__text">${DMS.escape(String(text))}</pre>`;
      }
      const src = previewSrc(file);
      if (src) {
        return `<iframe class="ct-file-preview__frame" title="${DMS.escape(file.name || 'TXT')}" src="${DMS.escape(src)}"></iframe>`;
      }
      return `<div class="ct-file-preview__fallback"><p>Không có nội dung văn bản để xem trước.</p></div>`;
    }
    if (kind === 'word') {
      return `<div class="ct-file-preview__fallback">
        <div class="ct-file-preview__word-icon">${WORD_ICON}</div>
        <p class="ct-file-preview__fallback-title">Không hỗ trợ xem trước trực tiếp định dạng này.</p>
        <p class="ct-file-preview__fallback-desc">Vui lòng tải file để xem nội dung.</p>
      </div>`;
    }
    return `<div class="ct-file-preview__fallback"><p>Không hỗ trợ xem trước định dạng này.</p></div>`;
  }

  DMS.register('FilePreviewModal', {
    render(props = {}) {
      const file = props.file || {};
      const id = props.id || 'ct-file-preview-modal';
      const kind = kindOf(file);
      const typeLabel = window.ContractFile
        ? window.ContractFile.typeLabel(file)
        : (window.TellingStoryShared ? window.TellingStoryShared.fileTypeLabel(file) : (file.type || 'FILE'));
      const meta = `<div class="ct-file-preview__meta">
        <div class="ct-file-preview__row"><span>Tên file</span><strong>${DMS.escape(file.name || '—')}</strong></div>
        <div class="ct-file-preview__row"><span>Loại file</span><strong>${DMS.escape(typeLabel)}</strong></div>
        <div class="ct-file-preview__row"><span>Dung lượng</span><strong>${DMS.escape(formatSize(file.size) || '—')}</strong></div>
        <div class="ct-file-preview__row"><span>Ngày upload</span><strong>${DMS.escape(file.uploadedAt || '—')}</strong></div>
        <div class="ct-file-preview__row"><span>Người upload</span><strong>${DMS.escape(file.uploadedBy || '—')}</strong></div>
      </div>
      <div class="ct-file-preview__area" data-preview-kind="${DMS.escape(kind)}">${previewBody(file)}</div>`;
      const footer = `${DMS.render('Button', { text: 'Đóng', type: 'default', dataAction: 'ct-preview-close' })}
        ${DMS.render('Button', { text: 'Tải xuống', type: 'primary', dataAction: 'ct-preview-download' })}`;
      return DMS.render('Modal', {
        id,
        title: 'Xem chi tiết file',
        size: 'lg',
        body: `<div class="ct-file-preview">${meta}</div>`,
        footer
      }).replace('class="dms-modal-overlay"', 'class="dms-modal-overlay dms-modal-overlay--nested"');
    }
  });
})(window.DMS);
