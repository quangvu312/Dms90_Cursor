import { useState } from 'react';

interface SectionCardProps {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export function SectionCard({ title, defaultOpen = true, children }: SectionCardProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="dms-card">
      <div className="dms-card__header">
        <h3 className="dms-card__title">{title}</h3>
        <button type="button" className="dms-btn dms-btn--link" onClick={() => setOpen((v) => !v)}>
          {open ? 'Thu gọn' : 'Mở rộng'}
        </button>
      </div>
      {open && <div className="dms-card__body">{children}</div>}
    </div>
  );
}
