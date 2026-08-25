import { useMemo, useState } from 'react';
import { useAuth } from '../../auth/context/AuthContext';
import type { ContractFilters, ContractModule, ContractRecord } from '../types';
import { EMPTY_CONTRACT_FILTERS } from '../types';
import { nowLabel, periodsOverlap, useContractStore } from '../store';
import { ContractFilterBar } from './ContractFilterBar';
import { ContractTable } from './ContractTable';
import { ContractFormModal, type ContractFormDraft, type FormMode } from './ContractFormModal';
import { ConfirmActionModal } from './ConfirmActionModal';

interface Props {
  module: ContractModule;
}

export function ContractListPage({ module }: Props) {
  const { user } = useAuth();
  const actor = user?.displayName || user?.username || 'Admin';
  const store = useContractStore();
  const [draftFilters, setDraftFilters] = useState<ContractFilters>(EMPTY_CONTRACT_FILTERS);
  const [applied, setApplied] = useState<ContractFilters>(EMPTY_CONTRACT_FILTERS);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [toasts, setToasts] = useState<{ id: number; message: string; type: 'success' | 'info' | 'warning' }[]>([]);
  const [form, setForm] = useState<{ mode: FormMode; item: ContractRecord | null } | null>(null);
  const [confirm, setConfirm] = useState<ContractRecord | null>(null);

  const toast = (message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 2800);
  };

  const filtered = useMemo(() => {
    const q = applied.q.trim().toLowerCase();
    return store.contracts.filter((it) => {
      if ((it.module || 'customer') !== module) return false;
      if (q) {
        const hay = `${it.contractCode} ${it.name}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (module === 'customer' && applied.type && String(it.contractTypeId || '') !== String(applied.type)) return false;
      if (module === 'template' && applied.active) {
        const wantActive = applied.active === 'true';
        if ((it.isActive !== false) !== wantActive) return false;
      }
      if (module === 'customer' && applied.customerId && String(it.customerId || '') !== String(applied.customerId)) {
        return false;
      }
      if (module === 'customer' && (applied.effectiveFrom || applied.effectiveTo)) {
        if (!periodsOverlap(it.effectiveFrom, it.effectiveTo, applied.effectiveFrom, applied.effectiveTo)) return false;
      }
      return true;
    });
  }, [store.contracts, module, applied]);

  const pages = Math.max(1, Math.ceil(filtered.length / size) || 1);
  const safePage = Math.min(page, pages);
  const rows = filtered.slice((safePage - 1) * size, safePage * size);

  const isCustomer = module === 'customer';
  const listTitle = isCustomer ? 'Danh sách Hợp đồng khách hàng' : 'Danh sách Loại hợp đồng';
  const parentLabel = 'Quản lý hợp đồng';
  const childLabel = isCustomer ? 'Hợp đồng khách hàng' : 'Loại hợp đồng';

  const handleSearch = () => {
    setApplied({ ...draftFilters });
    setPage(1);
  };

  const saveDraft = (draft: ContractFormDraft) => {
    const now = nowLabel();
    if (draft.id) {
      const existing = store.contracts.find((c) => c.id === draft.id);
      if (!existing) return;
      store.upsert({
        ...existing,
        contractCode: draft.contractCode.trim(),
        name: draft.name.trim(),
        contractTypeId: isCustomer ? draft.contractTypeId : '',
        files: draft.files,
        description: draft.description,
        customerId: isCustomer ? draft.customerId : '',
        isActive: isCustomer ? undefined : draft.isActive,
        viewerTargetType: isCustomer ? undefined : draft.viewerTargetType,
        viewerTargetIds: isCustomer ? undefined : draft.viewerTargetIds,
        effectiveFrom: isCustomer ? draft.effectiveFrom : undefined,
        effectiveTo: isCustomer ? draft.effectiveTo : undefined,
        updatedBy: actor,
        updatedAt: now,
      });
      setForm(null);
      toast(isCustomer ? 'Cập nhật hợp đồng thành công' : 'Cập nhật loại hợp đồng thành công');
      return;
    }
    store.upsert({
      id: `${module}-${Date.now()}`,
      module,
      contractCode: draft.contractCode.trim(),
      name: draft.name.trim(),
      contractTypeId: isCustomer ? draft.contractTypeId : '',
      customerId: isCustomer ? draft.customerId : '',
      files: draft.files,
      description: draft.description,
      isActive: isCustomer ? undefined : draft.isActive,
      viewerTargetType: isCustomer ? undefined : draft.viewerTargetType,
      viewerTargetIds: isCustomer ? undefined : draft.viewerTargetIds,
      effectiveFrom: isCustomer ? draft.effectiveFrom : undefined,
      effectiveTo: isCustomer ? draft.effectiveTo : undefined,
      createdBy: actor,
      createdAt: now,
      updatedBy: actor,
      updatedAt: now,
    });
    setForm(null);
    toast(isCustomer ? 'Tạo hợp đồng thành công' : 'Tạo loại hợp đồng thành công');
  };

  return (
    <div className="contract-page">
      <ul className="dms-breadcrumb">
        <li className="dms-breadcrumb__item"><span className="dms-breadcrumb__link">{parentLabel}</span></li>
        <li className="dms-breadcrumb__item"><span className="dms-breadcrumb__current">{childLabel}</span></li>
      </ul>
      <div className="dms-page-header">
        <h1 className="dms-page-header__title">{listTitle}</h1>
      </div>
      <ContractFilterBar
        module={module}
        filters={draftFilters}
        onChange={setDraftFilters}
        onSearch={handleSearch}
        onReset={() => {
          setDraftFilters(EMPTY_CONTRACT_FILTERS);
          setApplied(EMPTY_CONTRACT_FILTERS);
          setPage(1);
        }}
      />
      <ContractTable
        module={module}
        rows={rows}
        total={filtered.length}
        page={safePage}
        size={size}
        onPageChange={setPage}
        onSizeChange={(s) => { setSize(s); setPage(1); }}
        onView={(row) => setForm({ mode: 'view', item: row })}
        onEdit={(row) => setForm({ mode: 'edit', item: row })}
        onDelete={(row) => setConfirm(row)}
        onCreate={() => setForm({ mode: 'create', item: null })}
        onToggleActive={isCustomer ? undefined : (row, isActive) => store.setActive(row.id, isActive, actor)}
      />
      {form ? (
        <ContractFormModal
          open
          mode={form.mode}
          module={module}
          item={form.item}
          actor={actor}
          onClose={() => setForm(null)}
          onSave={saveDraft}
        />
      ) : null}
      <ConfirmActionModal
        item={confirm}
        onClose={() => setConfirm(null)}
        onDelete={() => {
          if (confirm) store.remove(confirm.id);
          setConfirm(null);
          toast(isCustomer ? 'Xóa hợp đồng thành công' : 'Xóa loại hợp đồng thành công');
        }}
      />
      <div className="dms-toast-container">
        {toasts.map((t) => (
          <div key={t.id} className={`dms-toast dms-toast--${t.type}`}>{t.message}</div>
        ))}
      </div>
    </div>
  );
}

export function ContractTemplatePage() {
  return <ContractListPage module="template" />;
}

export function ContractCustomerPage() {
  return <ContractListPage module="customer" />;
}
