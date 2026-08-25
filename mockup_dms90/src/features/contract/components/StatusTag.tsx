const VARIANT: Record<string, string> = {
  'Khởi tạo': 'draft',
  'Đã duyệt': 'approved',
  'Từ chối': 'rejected',
  'Hết hạn': 'default',
  'Hoạt động': 'approved',
  'Ngưng hoạt động': 'default',
  'Ngừng hoạt động': 'default',
};

export function StatusTag({ status }: { status?: string }) {
  const variant = VARIANT[status || ''] || 'default';
  return (
    <span className={`dms-status-tag dms-status-tag--${variant}`}>
      {status || '—'}
    </span>
  );
}
