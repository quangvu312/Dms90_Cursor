import { useEffect, useRef, useState } from 'react';
import type { CustomerContact } from '../types';

interface CustomerContactsTabProps {
  contacts: CustomerContact[];
  onChange: (contacts: CustomerContact[]) => void;
}

interface DirectoryContact {
  contactCode: string;
  name: string;
  phone: string;
  jobTitle: string;
}

const CONTACT_DIRECTORY: DirectoryContact[] = [
  { contactCode: 'LH-0041', name: 'Nguyễn Văn An', phone: '0901 234 567', jobTitle: 'Giám đốc mua hàng' },
  { contactCode: 'LH-0042', name: 'Trần Thị Bích', phone: '0912 345 678', jobTitle: 'Kế toán trưởng' },
  { contactCode: 'LH-0056', name: 'Lê Hoàng Nam', phone: '0987 654 321', jobTitle: 'Quản lý cửa hàng' },
  { contactCode: 'LH-0059', name: 'Phạm Thu Hà', phone: '0933 221 100', jobTitle: 'Nhân viên kinh doanh' },
  { contactCode: 'LH-0064', name: 'Đỗ Minh Khôi', phone: '0977 888 999', jobTitle: 'Chủ cửa hàng' },
];

export function CustomerContactsTab({ contacts, onChange }: CustomerContactsTabProps) {
  const [query, setQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setDropdownOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const q = query.trim().toLowerCase();
  const results = !q
    ? CONTACT_DIRECTORY
    : CONTACT_DIRECTORY.filter(
        (d) => d.contactCode.toLowerCase().includes(q) || d.name.toLowerCase().includes(q) || d.phone.includes(q),
      );

  const selectedCodes = new Set(contacts.map((c) => c.contactCode));

  const toggleSelect = (d: DirectoryContact) => {
    if (selectedCodes.has(d.contactCode)) {
      onChange(contacts.filter((c) => c.contactCode !== d.contactCode));
    } else {
      onChange([
        ...contacts,
        { id: `new-${Date.now()}-${d.contactCode}`, contactCode: d.contactCode, name: d.name, phone: d.phone, jobTitle: d.jobTitle, status: 'Active' },
      ]);
    }
  };

  return (
    <div>
      <div className="dms-card">
        <div className="dms-card__header">
          <h3 className="dms-card__title">Người liên hệ</h3>
        </div>
        <div className="dms-card__body" ref={wrapRef} style={{ position: 'relative' }}>
          <div className="dms-form-item">
            <input
              className="dms-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setDropdownOpen(true)}
              onClick={() => setDropdownOpen(true)}
              placeholder="Theo Mã | Tên | SĐT người liên hệ"
            />
          </div>
          {dropdownOpen && (
            <div className="dms-card" style={{ position: 'absolute', left: 24, right: 24, zIndex: 20, maxHeight: 220, overflowY: 'auto' }}>
              {results.length === 0 ? (
                <p className="dms-empty__title" style={{ padding: 12 }}>Không tìm thấy người liên hệ phù hợp</p>
              ) : (
                results.map((d) => (
                  <label key={d.contactCode} className="dms-checkbox" style={{ display: 'flex', padding: '8px 12px' }}>
                    <input
                      type="checkbox"
                      className="dms-checkbox__input"
                      checked={selectedCodes.has(d.contactCode)}
                      onChange={() => toggleSelect(d)}
                    />
                    <span>{d.contactCode} — {d.name} — {d.phone}</span>
                  </label>
                ))
              )}
            </div>
          )}
        </div>
      </div>

      <div className="dms-card">
        <div className="dms-card__header">
          <h3 className="dms-card__title">Người liên hệ đã chọn ({contacts.length})</h3>
        </div>
        <div className="dms-card__body">
          <div className="dms-table-wrapper">
            <table className="dms-table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã người liên hệ</th>
                  <th>Tên người liên hệ</th>
                  <th>Số điện thoại</th>
                  <th>Chức vụ</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {contacts.length === 0 ? (
                  <tr>
                    <td colSpan={6}>Chưa chọn người liên hệ nào</td>
                  </tr>
                ) : (
                  contacts.map((c, i) => (
                    <tr key={c.id}>
                      <td>{i + 1}</td>
                      <td>{c.contactCode}</td>
                      <td>{c.name}</td>
                      <td>{c.phone}</td>
                      <td>{c.jobTitle}</td>
                      <td>
                        <span className={`dms-tag ${c.status === 'Active' ? 'dms-tag--green' : 'dms-tag--default'}`}>
                          {c.status === 'Active' ? 'Hoạt động' : 'Ngừng hoạt động'}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
