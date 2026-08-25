import { DmsDatePicker } from '../../../components/ui/DmsDatePicker';

interface Props {
  id: string;
  from: string;
  to: string;
  disabled?: boolean;
  variant?: 'filter' | 'form';
  onChange?: (from: string, to: string) => void;
}

export function periodText(from?: string, to?: string) {
  const a = from || '';
  const b = to || '';
  if (!a && !b) return '—';
  if (a && b) return `${a} → ${b}`;
  return a || b;
}

export function ContractDateRange({ id, from, to, disabled, variant = 'filter', onChange }: Props) {
  if (disabled) {
    return <div className="min-h-8 flex items-center">{periodText(from, to)}</div>;
  }
  const pickers = (
    <>
      <DmsDatePicker
        id={`${id}-from`}
        placeholder="Từ ngày"
        value={from}
        onChange={(v) => onChange?.(v, to)}
      />
      <span className={variant === 'filter' ? 'dms-filter-daterange__sep' : 'ct-date-range__sep'} aria-hidden>→</span>
      <DmsDatePicker
        id={`${id}-to`}
        placeholder="Đến ngày"
        value={to}
        onChange={(v) => onChange?.(from, v)}
      />
    </>
  );
  return <div className={variant === 'filter' ? 'dms-filter-daterange' : 'ct-date-range'}>{pickers}</div>;
}
