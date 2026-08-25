import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ensureOverlayRoot, placeOverlay } from './dmsOverlay';

function pad(n: number) {
  return String(n).padStart(2, '0');
}

function parseDmy(str?: string): Date | null {
  if (!str) return null;
  const iso = String(str).match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (iso) return new Date(Number(iso[1]), Number(iso[2]) - 1, Number(iso[3]));
  const dmy = String(str).match(/^(\d{2})[/\-](\d{2})[/\-](\d{4})$/);
  if (dmy) return new Date(Number(dmy[3]), Number(dmy[2]) - 1, Number(dmy[1]));
  return null;
}

function toDmy(d: Date) {
  return `${pad(d.getDate())}-${pad(d.getMonth() + 1)}-${d.getFullYear()}`;
}

function monthMatrix(year: number, month: number) {
  const first = new Date(year, month, 1);
  const start = (first.getDay() + 6) % 7;
  const days = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [];
  for (let i = 0; i < start; i++) cells.push(null);
  for (let d = 1; d <= days; d++) cells.push(d);
  return cells;
}

interface Props {
  id?: string;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}

/** React port of Prototype DatePicker — reuse `.dms-datepicker*` CSS. */
export function DmsDatePicker({ id, value, placeholder = 'Chọn ngày', disabled, onChange }: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const selected = parseDmy(value);
  const [view, setView] = useState(() => selected || new Date());

  useEffect(() => {
    if (open) setView(selected || new Date());
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  useLayoutEffect(() => {
    if (!open || !dropRef.current || !inputRef.current) return;
    placeOverlay(dropRef.current, inputRef.current, true);
  }, [open, view]);

  useEffect(() => {
    if (!open) return;
    const reposition = () => {
      if (dropRef.current && inputRef.current) placeOverlay(dropRef.current, inputRef.current, true);
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

  const y = view.getFullYear();
  const m = view.getMonth();
  const cells = monthMatrix(y, m);

  return (
    <div ref={hostRef} className={`dms-datepicker${disabled ? ' is-disabled' : ''}${open ? ' is-open' : ''}`} data-datepicker>
      <input
        ref={inputRef}
        id={id}
        className="dms-input"
        type="text"
        readOnly
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onClick={() => !disabled && setOpen((v) => !v)}
      />
      <span className="dms-datepicker__icon" onClick={() => !disabled && setOpen((v) => !v)}>📅</span>
      {open && !disabled
        ? createPortal(
            <div ref={dropRef} className="dms-datepicker__dropdown dms-overlay-popup">
              <div className="dms-datepicker__head">
                <button type="button" onClick={() => setView(new Date(y, m - 1, 1))}>‹</button>
                <strong>Tháng {m + 1}/{y}</strong>
                <button type="button" onClick={() => setView(new Date(y, m + 1, 1))}>›</button>
              </div>
              <div className="dms-datepicker__week">
                {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map((w) => <span key={w}>{w}</span>)}
              </div>
              <div className="dms-datepicker__grid">
                {cells.map((d, i) => {
                  if (!d) return <span key={`e-${i}`} className="dms-datepicker__day is-empty" />;
                  const isSel = !!(selected && selected.getFullYear() === y && selected.getMonth() === m && selected.getDate() === d);
                  return (
                    <button
                      key={d}
                      type="button"
                      className={`dms-datepicker__day${isSel ? ' is-selected' : ''}`}
                      onClick={() => {
                        onChange(toDmy(new Date(y, m, d)));
                        setOpen(false);
                      }}
                    >
                      {d}
                    </button>
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
