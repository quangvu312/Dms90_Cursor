import type { Contact } from '../types';

interface GeneralInfoTabProps {
  formData: Contact;
  onChange: (name: keyof Contact, value: string | boolean) => void;
}

const COMMENTS_MAX_LENGTH = 999;

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="dms-form-item">
      <label className={`dms-form-item__label${required ? ' is-required' : ''}`}>{label}</label>
      {children}
    </div>
  );
}

export function GeneralInfoTab({ formData, onChange }: GeneralInfoTabProps) {
  return (
    <>
      <div className="dms-card">
        <div className="dms-card__header">
          <h3 className="dms-card__title">Thông tin chính</h3>
        </div>
        <div className="dms-card__body">
          <div className="dms-form-grid">
            <Field label="Mã liên hệ" required>
              <input className="dms-input" value={formData.contactId} disabled />
            </Field>
            <Field label="Vai trò">
              <select className="dms-select" value={formData.role} onChange={(e) => onChange('role', e.target.value)}>
                <option value="">Chọn vai trò</option>
                <option value="Chủ doanh nghiệp">Chủ doanh nghiệp</option>
                <option value="Mua hàng">Mua hàng</option>
                <option value="Người nhận hàng">Người nhận hàng</option>
                <option value="Quản lý">Quản lý</option>
              </select>
            </Field>
            <Field label="Danh xưng">
              <select className="dms-select" value={formData.salutation} onChange={(e) => onChange('salutation', e.target.value)}>
                <option value="">Chọn danh xưng</option>
                <option value="Mr.">Mr.</option>
                <option value="Ms.">Ms.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Dr.">Dr.</option>
              </select>
            </Field>
            <Field label="Họ">
              <input className="dms-input" value={formData.lastName} onChange={(e) => onChange('lastName', e.target.value)} placeholder="Nhập họ..." />
            </Field>
            <Field label="Tên đệm">
              <input className="dms-input" value={formData.middleName} onChange={(e) => onChange('middleName', e.target.value)} placeholder="Nhập tên đệm..." />
            </Field>
            <Field label="Tên" required>
              <input className="dms-input" value={formData.firstName} onChange={(e) => onChange('firstName', e.target.value)} placeholder="Nhập tên..." />
            </Field>
            <Field label="Chức danh">
              <input className="dms-input" value={formData.jobTitle} onChange={(e) => onChange('jobTitle', e.target.value)} placeholder="Ví dụ: Giám đốc, Quản lý..." />
            </Field>
            <Field label="Phân loại">
              <select className="dms-select" value={formData.category} onChange={(e) => onChange('category', e.target.value)}>
                <option value="">Chọn phân loại</option>
                <option value="VIP">VIP</option>
                <option value="Thân thiết">Thân thiết</option>
                <option value="Tiềm năng">Tiềm năng</option>
                <option value="Mới">Mới</option>
              </select>
            </Field>
          </div>
        </div>
      </div>

      <div className="dms-card">
        <div className="dms-card__header">
          <h3 className="dms-card__title">Thông tin liên hệ</h3>
        </div>
        <div className="dms-card__body">
          <div className="dms-form-grid">
            <Field label="Thư điện tử">
              <input className="dms-input" type="email" value={formData.email} onChange={(e) => onChange('email', e.target.value)} placeholder="example@domain.com" />
            </Field>
            <Field label="Số điện thoại chính" required>
              <input className="dms-input" type="tel" value={formData.mainPhone} onChange={(e) => onChange('mainPhone', e.target.value)} placeholder="Ví dụ: 09xxxxxxxx" />
            </Field>
            <Field label="Số Fax">
              <input className="dms-input" value={formData.fax} onChange={(e) => onChange('fax', e.target.value)} placeholder="Ví dụ: +84-24-xxxxxxx" />
            </Field>
          </div>
        </div>
      </div>

      <div className="dms-card">
        <div className="dms-card__header">
          <h3 className="dms-card__title">Tiếp thị</h3>
        </div>
        <div className="dms-card__body">
          <div className="dms-form-grid">
            <Field label="Nguồn tiềm năng">
              <select className="dms-select" value={formData.leadSource} onChange={(e) => onChange('leadSource', e.target.value)}>
                <option value="">Chọn nguồn</option>
                <option value="Ad">Quảng cáo</option>
                <option value="Event">Sự kiện</option>
                <option value="Zalo">Zalo</option>
                <option value="Facebook">Facebook</option>
                <option value="Website">Website</option>
                <option value="Partner Referral">Giới thiệu</option>
                <option value="Trade Show">Triển lãm</option>
              </select>
            </Field>
          </div>
        </div>
      </div>

      <div className="dms-card">
        <div className="dms-card__header">
          <h3 className="dms-card__title">Ghi chú</h3>
        </div>
        <div className="dms-card__body">
          <Field label="Ghi chú">
            <textarea
              className="dms-textarea"
              value={formData.comments}
              onChange={(e) => onChange('comments', e.target.value.slice(0, COMMENTS_MAX_LENGTH))}
              placeholder="Ghi chú thêm về liên hệ này..."
              maxLength={COMMENTS_MAX_LENGTH}
            />
            <p className="dms-pagination__info">{formData.comments.length}/{COMMENTS_MAX_LENGTH}</p>
          </Field>
        </div>
      </div>
    </>
  );
}
