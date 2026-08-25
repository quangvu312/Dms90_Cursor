import { useEffect, useState, type ReactNode } from 'react';
import { Search, Trash2 } from 'lucide-react';
import type { ContractFile, ContractModule, ContractRecord } from '../types';
import { CONTRACT_TYPES, findCustomer, fromIsoDate, toIsoDate } from '../store';
import { ContractFileField } from './ContractFileField';
import { CustomerPickerModal } from './CustomerPickerModal';
import { ContractFilePreviewModal } from './ContractFilePreviewModal';
import { StatusTag } from './StatusTag';
import { Pagination } from '../../../components/ui/Pagination';

export type FormMode = 'create' | 'edit' | 'view';

interface Draft {
  id: string;
  contractCode: string;
  name: string;
  type: string;
  customerId: string;
  startDate: string;
  endDate: string;
  description: string;
  files: ContractFile[];
}

interface Props {
  open: boolean;
  mode: FormMode;
  module: ContractModule;
  item: ContractRecord | null;
  actor: string;
  now: string;
  onClose: () => void;
  onSave: (draft: Draft) => void;
}

function emptyDraft(): Draft {
  return { id: '', contractCode: '', name: '', type: '', customerId: '', startDate: '', endDate: '', description: '', files: [] };
}

function fromItem(item: ContractRecord | null): Draft {
  if (!item) return emptyDraft();
  return {
    id: item.id,
    contractCode: item.contractCode,
    name: item.name,
    type: item.type,
    customerId: item.customerId || '',
    startDate: item.startDate,
    endDate: item.endDate,
    description: item.description || '',
    files: item.files.map((f) => ({ ...f })),
  };
}

export function ContractFormModal({ open, mode, module, item, actor, now, onClose, onSave }: Props) {
  const locked = mode === 'view';
  const isCustomer = module === 'customer';
  const [draft, setDraft] = useState<Draft>(() => fromItem(item));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [dirty, setDirty] = useState(false);
  const [pickOpen, setPickOpen] = useState(false);
  const [preview, setPreview] = useState<ContractFile | null>(null);
  const [custQ, setCustQ] = useState('');
  const [custPage, setCustPage] = useState(1);
  const [custSize, setCustSize] = useState(10);

  useEffect(() => {
    if (open) {
      setDraft(fromItem(item));
      setErrors({});
      setDirty(false);
      setPickOpen(false);
      setPreview(null);
      setCustQ('');
      setCustPage(1);
    }
  }, [open, item, mode]);

  if (!open) return null;

  const noun = isCustomer ? 'Hợp đồng khách hàng' : 'Hợp đồng mẫu';
  const title = mode === 'edit' ? `Chỉnh sửa ${noun}` : mode === 'view' ? `Chi tiết ${noun}` : isCustomer ? `Thêm ${noun}` : `Tạo mới ${noun}`;

  const set = <K extends keyof Draft>(key: K, val: Draft[K]) => {
    setDraft((prev) => ({ ...prev, [key]: val }));
    setDirty(true);
  };

  const handleClose = () => {
    if (!locked && dirty && !window.confirm('Màn hình đang có dữ liệu, bạn có muốn đóng?')) return;
    onClose();
  };

  const validate = () => {
    const err: Record<string, string> = {};
    if (!draft.name.trim()) err.name = 'Tên hợp đồng là bắt buộc';
    if (!draft.type) err.type = 'Loại hợp đồng là bắt buộc';
    if (!draft.files.length) err.file = 'File đính kèm là bắt buộc';
    if (isCustomer && !draft.customerId) err.customer = 'Khách hàng là bắt buộc';
    const start = toIsoDate(draft.startDate);
    const end = toIsoDate(draft.endDate);
    if (start && end && end < start) err.endDate = 'Đến ngày phải lớn hơn hoặc bằng Từ ngày';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const selected = draft.customerId ? findCustomer(draft.customerId) : null;
  const custHay = custQ.trim().toLowerCase();
  const custRows = selected && (!custHay || `${selected.code} ${selected.name} ${selected.phone} ${selected.address}`.toLowerCase().includes(custHay))
    ? [selected]
    : [];
  const custTotal = custRows.length;
  const custPaged = custRows.slice((custPage - 1) * custSize, custPage * custSize);

  const field = (
    label: string,
    required: boolean,
    errKey: string | undefined,
    html: ReactNode,
    full?: boolean,
  ) => (
    <div className={`dms-form-item${errKey && errors[errKey] ? ' is-error' : ''}`} style={full ? { gridColumn: '1 / -1' } : undefined}>
      <label className={`dms-form-item__label${required ? ' is-required' : ''}`}>{label}</label>
      {html}
      {errKey && errors[errKey] ? <div className="dms-form-item__error">{errors[errKey]}</div> : null}
    </div>
  );

  const nameField = field('Tên hợp đồng', true, 'name', (
    <input className="dms-input" value={draft.name} disabled={locked} placeholder="Nhập tên hợp đồng" onChange={(e) => set('name', e.target.value)} />
  ));
  const startField = field('Từ ngày', false, undefined, (
    <input type="date" className="dms-input" disabled={locked} value={toIsoDate(draft.startDate)} onChange={(e) => set('startDate', fromIsoDate(e.target.value))} />
  ));
  const endField = field('Đến ngày', false, 'endDate', (
    <input type="date" className="dms-input" disabled={locked} value={toIsoDate(draft.endDate)} onChange={(e) => set('endDate', fromIsoDate(e.target.value))} />
  ));
  const typeField = field('Loại hợp đồng', true, 'type', (
    <select className="dms-select" disabled={locked} value={draft.type} onChange={(e) => set('type', e.target.value)}>
      <option value="">Chọn loại hợp đồng</option>
      {CONTRACT_TYPES.map((t) => <option key={t.code} value={t.code}>{t.name}</option>)}
    </select>
  ));
  const noteField = field('Ghi chú', false, undefined, (
    <input className="dms-input" disabled={locked} placeholder="Nhập ghi chú" value={draft.description} onChange={(e) => set('description', e.target.value)} />
  ));
  const fileField = (
    <ContractFileField
      files={draft.files}
      locked={locked}
      error={errors.file}
      actor={actor}
      now={now}
      onChange={(files, fileErr) => {
        setDraft((prev) => ({ ...prev, files }));
        setDirty(true);
        setErrors((prev) => {
          const next = { ...prev };
          if (fileErr) next.file = fileErr;
          else delete next.file;
          return next;
        });
      }}
      onPreview={setPreview}
    />
  );
  const codeField = field('Mã hợp đồng', false, undefined, (
    <input className="dms-input" value={draft.contractCode} disabled readOnly />
  ));

  const grid = mode === 'create'
    ? <>{nameField}{startField}{endField}{fileField}{typeField}{noteField}</>
    : <>{codeField}{nameField}{typeField}{startField}{endField}{noteField}<div style={{ gridColumn: '1 / -1' }}>{fileField}</div></>;

  return (
    <div className="dms-modal-overlay" onClick={handleClose}>
      <div className="dms-modal dms-modal--xl" onClick={(e) => e.stopPropagation()}>
        <div className="dms-modal__header">
          <h2 className="dms-modal__title">{title}</h2>
          <button type="button" className="dms-modal__close" title="Đóng" onClick={handleClose}>×</button>
        </div>
        <div className="dms-modal__body">
          <div className="dms-form-grid">{grid}</div>
          {isCustomer ? (
            <div className="mt-4">
              <label className={`dms-form-item__label is-required`}>Khách hàng</label>
              {errors.customer ? <div className="dms-form-item__error">{errors.customer}</div> : null}
              <div className="flex items-center gap-2 mb-2">
                <div className="flex-1 flex items-center gap-2 px-3 border border-solid border-[#d9d9d9] rounded-md min-h-8">
                  <Search className="w-4 h-4 text-[#8c8c8c]" />
                  <input className="dms-input" style={{ border: 0, boxShadow: 'none', padding: 0, height: 28 }} placeholder="Tìm kiếm..." value={custQ} onChange={(e) => { setCustQ(e.target.value); setCustPage(1); }} />
                </div>
                {locked ? null : (
                  <button type="button" className="dms-btn dms-btn--primary" onClick={() => setPickOpen(true)}>
                    {draft.customerId ? 'Chọn lại' : '+ Thêm'}
                  </button>
                )}
              </div>
              <div className="dms-table-wrapper">
                <table className="dms-table">
                  <thead>
                    <tr>
                      <th>Mã KH</th>
                      <th>Tên khách hàng</th>
                      <th>Số điện thoại</th>
                      <th>Địa chỉ</th>
                      <th>Trạng thái</th>
                      <th>Tùy chỉnh</th>
                    </tr>
                  </thead>
                  <tbody>
                    {custPaged.length === 0 ? (
                      <tr><td colSpan={6}>{locked ? '—' : 'Chọn khách hàng để gắn vào hợp đồng.'}</td></tr>
                    ) : custPaged.map((c) => (
                      <tr key={c.id}>
                        <td>{c.code}</td>
                        <td>{c.name}</td>
                        <td>{c.phone}</td>
                        <td>{c.address}</td>
                        <td><StatusTag status={c.status} /></td>
                        <td>
                          {locked ? null : (
                            <button type="button" className="w-7 h-7 inline-flex items-center justify-center rounded border border-blue-200 text-blue-500" title="Xóa" onClick={() => { set('customerId', ''); setErrors((e) => ({ ...e, customer: 'Khách hàng là bắt buộc' })); }}>
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {custTotal > 0 ? (
                <Pagination page={custPage} total={custTotal} size={custSize} label="khách hàng" sizes={[10, 20, 50]} onPageChange={setCustPage} onSizeChange={(s) => { setCustSize(s); setCustPage(1); }} />
              ) : null}
            </div>
          ) : null}
        </div>
        <div className="dms-modal__footer">
          {locked ? (
            <>
              <button type="button" className="dms-btn dms-btn--primary" onClick={() => window.print()}>In</button>
              <button type="button" className="dms-btn dms-btn--default" onClick={onClose}>Đóng</button>
            </>
          ) : (
            <>
              <button type="button" className="dms-btn dms-btn--default" onClick={handleClose}>Đóng</button>
              <button
                type="button"
                className="dms-btn dms-btn--primary"
                onClick={() => {
                  if (!validate()) return;
                  onSave(draft);
                }}
              >
                Lưu
              </button>
            </>
          )}
        </div>
      </div>
      <CustomerPickerModal
        open={pickOpen}
        selectedId={draft.customerId}
        onClose={() => setPickOpen(false)}
        onConfirm={(c) => {
          set('customerId', c.id);
          setErrors((e) => {
            const next = { ...e };
            delete next.customer;
            return next;
          });
          setPickOpen(false);
        }}
      />
      <ContractFilePreviewModal file={preview} onClose={() => setPreview(null)} />
    </div>
  );
}

export type { Draft as ContractFormDraft };
