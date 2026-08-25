import { useEffect, useState, type ReactNode } from 'react';
import { DmsMultiSelect } from '../../../components/ui/DmsMultiSelect';
import { DmsSelect } from '../../../components/ui/DmsSelect';
import { Toggle } from '../../../components/ui/Toggle';
import type { ContractFile, ContractModule, ContractRecord, ViewerTargetType } from '../types';
import {
  CONTRACT_CUSTOMER_OPTIONS,
  VIEWER_TYPE_OPTIONS,
  findCustomer,
  getContractTypeOptions,
  isCodeTaken,
  parseViewerType,
  toIsoDate,
  typeLabel,
  viewerFieldMeta,
  viewerOptionsFor,
} from '../store';
import { ContractDateRange } from './ContractDateRange';
import { ContractFileTable } from './ContractFileTable';
import { ContractFilePreviewModal } from './ContractFilePreviewModal';
import { StatusTag } from './StatusTag';

export type FormMode = 'create' | 'edit' | 'view';

export interface ContractFormDraft {
  id: string;
  contractCode: string;
  name: string;
  contractTypeId: string;
  customerId: string;
  description: string;
  files: ContractFile[];
  isActive: boolean;
  viewerTargetType: ViewerTargetType;
  viewerTargetIds: string[];
  effectiveFrom: string;
  effectiveTo: string;
}

interface Props {
  open: boolean;
  mode: FormMode;
  module: ContractModule;
  item: ContractRecord | null;
  actor: string;
  onClose: () => void;
  onSave: (draft: ContractFormDraft) => void;
}

function emptyDraft(): ContractFormDraft {
  return {
    id: '',
    contractCode: '',
    name: '',
    contractTypeId: '',
    customerId: '',
    description: '',
    files: [],
    isActive: true,
    viewerTargetType: '',
    viewerTargetIds: [],
    effectiveFrom: '',
    effectiveTo: '',
  };
}

function fromItem(item: ContractRecord | null): ContractFormDraft {
  if (!item) return emptyDraft();
  return {
    id: item.id,
    contractCode: item.contractCode,
    name: item.name,
    contractTypeId: item.contractTypeId || item.type || '',
    customerId: item.customerId || '',
    description: item.description || '',
    files: item.files.map((f) => ({ ...f })),
    isActive: item.isActive !== false,
    viewerTargetType: parseViewerType(item.viewerTargetType),
    viewerTargetIds: parseViewerType(item.viewerTargetType) ? [...(item.viewerTargetIds || [])] : [],
    effectiveFrom: item.effectiveFrom || '',
    effectiveTo: item.effectiveTo || '',
  };
}

export function ContractFormModal({ open, mode, module, item, actor, onClose, onSave }: Props) {
  const locked = mode === 'view';
  const isCustomer = module === 'customer';
  const [draft, setDraft] = useState<ContractFormDraft>(() => fromItem(item));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [dirty, setDirty] = useState(false);
  const [preview, setPreview] = useState<ContractFile | null>(null);

  useEffect(() => {
    if (open) {
      setDraft(fromItem(item));
      setErrors({});
      setDirty(false);
      setPreview(null);
    }
  }, [open, item, mode]);

  if (!open) return null;

  const noun = isCustomer ? 'Hợp đồng khách hàng' : 'Loại hợp đồng';
  const title = mode === 'edit' ? `Chỉnh sửa ${noun}` : mode === 'view' ? `Chi tiết ${noun}` : `Thêm ${noun}`;

  const set = <K extends keyof ContractFormDraft>(key: K, val: ContractFormDraft[K]) => {
    setDraft((prev) => ({ ...prev, [key]: val }));
    setDirty(true);
  };

  const handleClose = () => {
    if (!locked && dirty && !window.confirm('Màn hình đang có dữ liệu, bạn có muốn đóng?')) return;
    onClose();
  };

  const validate = () => {
    const err: Record<string, string> = {};
    if (!draft.contractCode.trim()) err.contractCode = isCustomer ? 'Mã hợp đồng là bắt buộc' : 'Mã loại hợp đồng là bắt buộc';
    else if (isCodeTaken(draft.contractCode, draft.id || undefined, module)) {
      err.contractCode = isCustomer ? 'Mã hợp đồng đã tồn tại.' : 'Mã loại hợp đồng đã tồn tại.';
    }
    if (!draft.name.trim()) err.name = isCustomer ? 'Tên hợp đồng là bắt buộc' : 'Tên loại hợp đồng là bắt buộc';
    if (isCustomer && !draft.contractTypeId) err.contractTypeId = 'Loại hợp đồng là bắt buộc';
    if (!draft.files.length) err.file = isCustomer ? 'File đính kèm là bắt buộc' : 'File hợp đồng mẫu là bắt buộc';
    if (isCustomer && !draft.customerId) err.customer = 'Khách hàng là bắt buộc';
    if (isCustomer) {
      const start = toIsoDate(draft.effectiveFrom);
      const end = toIsoDate(draft.effectiveTo);
      if (start && end && end < start) err.effective = 'Đến ngày phải lớn hơn hoặc bằng Từ ngày';
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const selected = draft.customerId ? findCustomer(draft.customerId) : null;
  const viewerOpts = viewerOptionsFor(draft.viewerTargetType);
  const viewerMeta = viewerFieldMeta(draft.viewerTargetType);
  const typeOptions = getContractTypeOptions(draft.contractTypeId);

  const field = (
    label: string,
    required: boolean,
    errKey: string | undefined,
    html: ReactNode,
    span?: 2 | 'full',
  ) => (
    <div className={`dms-form-item${errKey && errors[errKey] ? ' is-error' : ''}${span === 'full' ? ' ct-form-grid__full' : span === 2 ? ' ct-form-grid__span-2' : ''}`}>
      <label className={`dms-form-item__label${required ? ' is-required' : ''}`}>{label}</label>
      {html}
      {errKey && errors[errKey] ? <div className="dms-form-item__error">{errors[errKey]}</div> : null}
    </div>
  );

  const codeField = field(isCustomer ? 'Mã hợp đồng' : 'Mã loại hợp đồng', true, 'contractCode', (
    <input
      className="dms-input"
      value={draft.contractCode}
      disabled={locked}
      placeholder={isCustomer ? 'Nhập mã hợp đồng' : 'Nhập mã loại hợp đồng'}
      onChange={(e) => set('contractCode', e.target.value)}
    />
  ));
  const nameField = field(isCustomer ? 'Tên hợp đồng' : 'Tên loại hợp đồng', true, 'name', (
    <input
      className="dms-input"
      value={draft.name}
      disabled={locked}
      placeholder={isCustomer ? 'Nhập tên hợp đồng' : 'Nhập tên loại hợp đồng'}
      onChange={(e) => set('name', e.target.value)}
    />
  ));

  const typeField = field('Loại hợp đồng', true, 'contractTypeId', locked ? (
    <input className="dms-input" disabled value={typeLabel(draft.contractTypeId) || '—'} />
  ) : (
    <DmsSelect
      id="ct-form-type"
      placeholder="Chọn loại hợp đồng"
      value={draft.contractTypeId}
      options={typeOptions}
      onChange={(v) => set('contractTypeId', v)}
    />
  ));

  const noteField = field('Ghi chú', false, undefined, (
    <input className="dms-input" disabled={locked} placeholder="Nhập ghi chú" value={draft.description} onChange={(e) => set('description', e.target.value)} />
  ), isCustomer ? undefined : (draft.viewerTargetType ? undefined : 2));

  const dateField = field('Thời gian áp dụng', false, 'effective', (
    <ContractDateRange
      id="ct-form-effective"
      variant="form"
      from={draft.effectiveFrom}
      to={draft.effectiveTo}
      disabled={locked}
      onChange={(from, to) => {
        setDraft((prev) => ({ ...prev, effectiveFrom: from, effectiveTo: to }));
        setDirty(true);
      }}
    />
  ));

  const activeField = field('Trạng thái hoạt động', false, undefined, locked ? (
    <StatusTag status={draft.isActive ? 'Hoạt động' : 'Ngừng hoạt động'} />
  ) : (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Toggle checked={draft.isActive} onChange={(v) => set('isActive', v)} />
      <span style={{ marginLeft: 8 }}>{draft.isActive ? 'Hoạt động' : 'Ngừng hoạt động'}</span>
    </div>
  ));

  const viewerTypeLabel = VIEWER_TYPE_OPTIONS.find((o) => o.value === draft.viewerTargetType)?.label || '—';
  const viewerValueLabel = (draft.viewerTargetIds || [])
    .map((id) => viewerOpts.find((o) => o.value === id)?.label || id)
    .join(', ') || '—';

  const viewerTypeField = field('Đối tượng xem', false, undefined, locked ? (
    <div className="min-h-8 flex items-center">{viewerTypeLabel}</div>
  ) : (
    <DmsSelect
      id="ct-viewer-type"
      placeholder="Chọn đối tượng..."
      value={draft.viewerTargetType}
      options={VIEWER_TYPE_OPTIONS}
      onChange={(v) => {
        setDraft((prev) => ({
          ...prev,
          viewerTargetType: parseViewerType(v),
          viewerTargetIds: [],
        }));
        setDirty(true);
      }}
    />
  ));

  const viewerValueField = draft.viewerTargetType ? field(viewerMeta.label, false, undefined, locked ? (
    <div className="min-h-8 flex items-center">{viewerValueLabel}</div>
  ) : (
    <DmsMultiSelect
      id="ct-viewer-ids"
      placeholder={viewerMeta.placeholder}
      values={draft.viewerTargetIds}
      options={viewerOpts}
      onChange={(vals) => set('viewerTargetIds', vals)}
    />
  )) : null;

  const customerField = field('Khách hàng', true, 'customer', locked ? (
    <input className="dms-input" disabled value={selected ? `${selected.code} — ${selected.name}` : '—'} />
  ) : (
    <DmsSelect
      id="ct-form-customer"
      placeholder="Tìm kiếm / chọn khách hàng"
      value={draft.customerId}
      options={CONTRACT_CUSTOMER_OPTIONS}
      onChange={(v) => set('customerId', v)}
    />
  ));

  const fileField = (
    <ContractFileTable
      files={draft.files}
      sectionTitle={isCustomer ? 'File đính kèm' : 'File hợp đồng mẫu'}
      locked={locked}
      error={errors.file}
      actor={actor}
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

  return (
    <div className="dms-modal-overlay" id="contract-form-modal" onClick={handleClose}>
      <div className="dms-modal dms-modal--xl" onClick={(e) => e.stopPropagation()}>
        <div className="dms-modal__header">
          <h2 className="dms-modal__title">{title}</h2>
          <button type="button" className="dms-modal__close" title="Đóng" onClick={handleClose}>×</button>
        </div>
        <div className="dms-modal__body">
          <div className="dms-form-grid ct-form-grid">
            {codeField}
            {nameField}
            {isCustomer ? typeField : null}
            {isCustomer ? (
              <>
                {customerField}
                {dateField}
                {noteField}
              </>
            ) : (
              <>
                {viewerTypeField}
                {noteField}
                {viewerValueField}
                {activeField}
              </>
            )}
            {fileField}
          </div>
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
      <ContractFilePreviewModal file={preview} onClose={() => setPreview(null)} />
    </div>
  );
}
