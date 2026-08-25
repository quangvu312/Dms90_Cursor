export function FreqBadge({ value }: { value: string }) {
  if (!value) return null;
  return <span className="dms-tag dms-tag--default">{value}</span>;
}
