import { useRef, useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface MultiTagSelectProps {
  options: string[];
  selected: string[];
  placeholder?: string;
  onChange: (selected: string[]) => void;
}

export function MultiTagSelect({ options, selected, placeholder = 'Chọn...', onChange }: MultiTagSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const toggle = (opt: string) => {
    onChange(selected.includes(opt) ? selected.filter(s => s !== opt) : [...selected, opt]);
  };

  const remove = (opt: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(selected.filter(s => s !== opt));
  };

  return (
    <div ref={ref} className="relative">
      <div
        onClick={() => setOpen(v => !v)}
        className="relative flex min-h-[41px] cursor-pointer flex-wrap items-center gap-1 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-container)] px-2 py-1 pr-7 transition-colors hover:border-[var(--color-primary)]"
      >
        {selected.length === 0 && (
          <span className="text-sm text-[var(--color-text-secondary)]">{placeholder}</span>
        )}
        {selected.map(s => (
          <span key={s} className="dms-tag dms-tag--default">
            {s}
            <button type="button" onClick={e => remove(s, e)} className="ml-0.5 leading-none">&times;</button>
          </span>
        ))}
        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
      </div>

      {open && (
        <div className="absolute left-0 top-[calc(100%+4px)] z-[300] max-h-52 min-w-full w-64 overflow-y-auto rounded-md border border-[var(--color-border)] bg-[var(--color-bg-container)] py-1 shadow-[var(--shadow-card)]">
          {options.map(opt => (
            <label key={opt} className="flex cursor-pointer items-center gap-2 px-3 py-1.5 text-sm text-[var(--color-text)] hover:bg-[rgba(0,0,0,0.04)]">
              <input
                type="checkbox"
                checked={selected.includes(opt)}
                onChange={() => toggle(opt)}
                className="dms-checkbox__input flex-shrink-0 cursor-pointer"
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
