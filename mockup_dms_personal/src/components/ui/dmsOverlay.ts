/** Port overlay positioning from Prototype `component-core.js` — DatePicker/Select không bị table cắt. */

export function ensureOverlayRoot(): HTMLElement {
  let el = document.getElementById('dms-overlay-root');
  if (!el) {
    el = document.createElement('div');
    el.id = 'dms-overlay-root';
    document.body.appendChild(el);
  }
  return el;
}

export function placeOverlay(dropdown: HTMLElement, anchor: HTMLElement, isCalendar = false) {
  const rect = anchor.getBoundingClientRect();
  dropdown.style.position = 'fixed';
  dropdown.style.left = `${Math.max(8, rect.left)}px`;
  dropdown.style.zIndex = '1200';
  if (isCalendar) {
    dropdown.style.width = '280px';
    dropdown.style.minWidth = '280px';
  } else {
    dropdown.style.minWidth = `${rect.width}px`;
    dropdown.style.width = `${Math.max(rect.width, 220)}px`;
  }
  dropdown.style.top = `${rect.bottom + 4}px`;
  const dRect = dropdown.getBoundingClientRect();
  if (dRect.bottom > window.innerHeight - 8) {
    dropdown.style.top = `${Math.max(8, rect.top - dRect.height - 4)}px`;
  }
  if (dRect.right > window.innerWidth - 8) {
    dropdown.style.left = `${Math.max(8, window.innerWidth - dRect.width - 8)}px`;
  }
}
