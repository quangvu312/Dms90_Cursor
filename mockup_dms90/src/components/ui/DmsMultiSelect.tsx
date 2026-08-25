import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ensureOverlayRoot, placeOverlay } from './dmsOverlay';
import type { DmsSelectOption } from './DmsSelect';

interface Props {
  id?: string;
  values: string[];
  options: DmsSelectOption[];
  placeholder?: string;
  disabled?: boolean;
  onChange: (values: string[]) => void;
}

/** React port of Prototype MultiSelect — reuse `.dms-multiselect*` CSS. */
export function DmsMultiSelect({
  id,
  values,
  options,
  placeholder = 'Chọn',
  disabled,
  onChange,
}: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const controlRef = useRef<HTMLDivElement>(null);
  const dropRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');

  const selected = values.map(String);
  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return options;
    return options.filter((o) => o.label.toLowerCase().includes(needle) || String(o.value).toLowerCase().includes(needle));
  }, [options, q]);

  useLayoutEffect(() => {
    if (!open || !dropRef.current || !controlRef.current) return;
    placeOverlay(dropRef.current, controlRef.current, false);
  }, [open, q, filtered.length, selected.length]);

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

  const labelOf = (value: string) => options.find((o) => String(o.value) === String(value))?.label || value;

  const toggle = (value: string) => {
    const next = selected.includes(String(value))
      ? selected.filter((v) => v !== String(value))
      : [...selected, String(value)];
    onChange(next);
  };

  return (
    <div
      ref={hostRef}
      className={`dms-multiselect${disabled ? ' is-disabled' : ''}${open ? ' is-open' : ''}`}
      data-multiselect
    >
      <div
        ref={controlRef}
        id={id}
        className="dms-multiselect__control"
        tabIndex={disabled ? -1 : 0}
        role="combobox"
        aria-expanded={open}
        onClick={() => !disabled && setOpen((v) => !v)}
      >
        <div className="dms-multiselect__tags">
          {selected.map((v) => (
            <span key={v} className="dms-multiselect__tag">
              {labelOf(v)}
              {disabled ? null : (
                <span
                  className="dms-multiselect__tag-close"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggle(v);
                  }}
                >
                  ×
                </span>
              )}
            </span>
          ))}
        </div>
        <input className="dms-multiselect__input" placeholder={selected.length ? '' : placeholder} readOnly />
        <span className="dms-multiselect__caret">▾</span>
      </div>
      {open && !disabled
        ? createPortal(
            <div ref={dropRef} className="dms-multiselect__dropdown dms-overlay-popup">
              <input
                type="text"
                className="dms-multiselect__search dms-input"
                placeholder="Tìm kiếm..."
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onMouseDown={(e) => e.stopPropagation()}
              />
              <div className="dms-multiselect__list">
                {filtered.length === 0 ? (
                  <div className="dms-select__empty">Không có dữ liệu</div>
                ) : filtered.map((o) => {
                  const checked = selected.includes(String(o.value));
                  return (
                    <label key={o.value} className="dms-multiselect__option">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggle(String(o.value))}
                      />
                      <span>{o.label}</span>
                    </label>
                  );
                })}
              </div>
            </div>,
            ensureOverlayRoot(),
          )
        : null}
    </div>
  );
}
