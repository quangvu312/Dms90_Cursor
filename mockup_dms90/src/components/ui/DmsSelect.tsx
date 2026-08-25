import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ensureOverlayRoot, placeOverlay } from './dmsOverlay';

export interface DmsSelectOption {
  value: string;
  label: string;
}

interface Props {
  id?: string;
  value: string;
  options: DmsSelectOption[];
  placeholder?: string;
  disabled?: boolean;
  searchable?: boolean;
  onChange: (value: string) => void;
}

/** React port of Prototype Select — reuse `.dms-select*` CSS. */
export function DmsSelect({
  id,
  value,
  options,
  placeholder = 'Chọn',
  disabled,
  searchable = true,
  onChange,
}: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const controlRef = useRef<HTMLDivElement>(null);
  const dropRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');

  const selected = options.find((o) => String(o.value) === String(value));
  const display = selected ? selected.label : '';
  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return options;
    return options.filter((o) => o.label.toLowerCase().includes(needle) || String(o.value).toLowerCase().includes(needle));
  }, [options, q]);

  useLayoutEffect(() => {
    if (!open || !dropRef.current || !controlRef.current) return;
    placeOverlay(dropRef.current, controlRef.current, false);
  }, [open, q, filtered.length]);

  useEffect(() => {
    if (!open) return;
    const reposition = () => {
      if (dropRef.current && controlRef.current) placeOverlay(dropRef.current, controlRef.current, false);
    };
    const onDoc = (e: MouseEvent) => {
      const t = e.target as Node;
      if (hostRef.current?.contains(t) || dropRef.current?.contains(t)) return;
      setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    window.addEventListener('scroll', reposition, true);
    window.addEventListener('resize', reposition);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      window.removeEventListener('scroll', reposition, true);
      window.removeEventListener('resize', reposition);
    };
  }, [open]);

  useEffect(() => {
    if (!open) setQ('');
  }, [open]);

  return (
    <div
      ref={hostRef}
      className={`dms-select${disabled ? ' is-disabled' : ''}${open ? ' is-open' : ''}`}
      data-select
    >
      <select id={id} className="dms-select__native" disabled={disabled} value={value} onChange={(e) => onChange(e.target.value)} tabIndex={-1}>
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      <div
        ref={controlRef}
        className="dms-select__control"
        tabIndex={disabled ? -1 : 0}
        role="combobox"
        aria-expanded={open}
        onClick={() => !disabled && setOpen((v) => !v)}
        onKeyDown={(e) => {
          if (disabled) return;
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setOpen((v) => !v);
          }
        }}
      >
        <span className={`dms-select__display${display ? '' : ' is-placeholder'}`}>{display || placeholder}</span>
        <span className="dms-select__caret">▾</span>
      </div>
      {open && !disabled
        ? createPortal(
            <div ref={dropRef} className="dms-select__dropdown dms-overlay-popup">
              {searchable ? (
                <input
                  type="text"
                  className="dms-select__search dms-input"
                  placeholder="Tìm kiếm..."
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  onMouseDown={(e) => e.stopPropagation()}
                />
              ) : null}
              <div className="dms-select__list">
                {filtered.length === 0 ? (
                  <div className="dms-select__empty">Không có dữ liệu</div>
                ) : filtered.map((o) => (
                  <div
                    key={o.value}
                    className={`dms-select__option${String(o.value) === String(value) ? ' is-selected' : ''}`}
                    role="option"
                    onClick={() => {
                      onChange(o.value);
                      setOpen(false);
                    }}
                  >
                    {o.label}
                  </div>
                ))}
              </div>
            </div>,
            ensureOverlayRoot(),
          )
        : null}
    </div>
  );
}
