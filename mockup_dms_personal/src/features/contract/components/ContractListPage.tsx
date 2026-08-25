import { useMemo, useState } from 'react';
import { useAuth } from '../../auth/context/AuthContext';
import type { ContractFilters, ContractModule, ContractRecord } from '../types';
import { EMPTY_CONTRACT_FILTERS } from '../types';
import { nextContractCode, nowLabel, parseDmy, useContractStore } from '../store';
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
  const [confirm, setConfirm] = useState<{ mode: 'delete' | 'approve'; item: ContractRecord } | null>(null);

  const toast = (message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 2800);
  };

  const filtered = useMemo(() => {
    const from = parseDmy(applied.from);
    const to = parseDmy(applied.to);
    const q = applied.q.trim().toLowerCase();
    return store.contracts.filter((it) => {
      if ((it.module || 'customer') !== module) return false;
      if (q) {
        const hay = `${it.contractCode} ${it.name}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (applied.type && it.type !== applied.type) return false;
      if (applied.status && it.status !== applied.status) return false;
      if (from || to) {
        const start = parseDmy(it.startDate);
        if (!start) return false;
        if (from && start.getTime() < from.getTime()) return false;
        if (to && start.getTime() > to.getTime() + 86400000 - 1) return false;
      }
      return true;
    });
  }, [store.contracts, module, applied]);

  const pages = Math.max(1, Math.ceil(filtered.length / size) || 1);
  const safePage = Math.min(page, pages);
  const rows = filtered.slice((safePage - 1) * size, safePage * size);

  const isCustomer = module === 'customer';
  const listTitle = isCustomer ? 'Danh sách Hợp đồng khách hàng' : 'Danh sách Hợp đồng mẫu';
  const parentLabel = 'Quản lý hợp đồng';
  const childLabel = isCustomer ? 'Hợp đồng khách hàng' : 'Hợp đồng mẫu';

  const handleSearch = () => {
    const from = parseDmy(draftFilters.from);
    const to = parseDmy(draftFilters.to);
    if (from && to && to.getTime() < from.getTime()) {
      toast('Ngày kết thúc phải lớn hơn hoặc bằng Ngày bắt đầu', 'warning');
      return;
    }
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
        name: draft.name.trim(),
        type: draft.type,
        files: draft.files,
        startDate: draft.startDate,
        endDate: draft.endDate,
        description: draft.description,
        customerId: isCustomer ? draft.customerId : '',
        updatedBy: actor,
        updatedAt: now,
      });
      setForm(null);
      toast('Cập nhật hợp đồng thành công');
      return;
    }
    store.upsert({
      id: `${module}-${Date.now()}`,
      module,
      contractCode: nextContractCode(module),
      name: draft.name.trim(),
      type: draft.type,
      status: 'Khởi tạo',
      customerId: isCustomer ? draft.customerId : '',
      files: draft.files,
      startDate: draft.startDate,
      endDate: draft.endDate,
      description: draft.description,
      createdBy: actor,
      createdAt: now,
      updatedBy: actor,
      updatedAt: now,
    });
    setForm(null);
    toast('Tạo hợp đồng thành công');
  };

  return (
    <div>
      <ul className="dms-breadcrumb">
        <li className="dms-breadcrumb__item"><span className="dms-breadcrumb__link">{parentLabel}</span></li>
        <li className="dms-breadcrumb__item"><span className="dms-breadcrumb__current">{childLabel}</span></li>
      </ul>
      <div className="dms-page-header">
        <h1 className="dms-page-header__title">{listTitle}</h1>
      </div>
      <ContractFilterBar
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
        onApprove={(row) => setConfirm({ mode: 'approve', item: row })}
        onDelete={(row) => setConfirm({ mode: 'delete', item: row })}
        onCreate={() => setForm({ mode: 'create', item: null })}
      />
      {form ? (
        <ContractFormModal
          open
          mode={form.mode}
          module={module}
          item={form.item}
          actor={actor}
          now={nowLabel()}
          onClose={() => setForm(null)}
          onSave={saveDraft}
        />
      ) : null}
      <ConfirmActionModal
        mode={confirm?.mode || null}
        item={confirm?.item || null}
        onClose={() => setConfirm(null)}
        onDelete={() => {
          if (confirm) store.remove(confirm.item.id);
          setConfirm(null);
          toast('Xóa hợp đồng thành công');
        }}
        onApprove={() => {
          if (confirm) store.updateStatus(confirm.item.id, 'Đã duyệt', actor);
          setConfirm(null);
          toast('Duyệt hợp đồng thành công');
        }}
        onReject={() => {
          if (confirm) store.updateStatus(confirm.item.id, 'Từ chối', actor);
          setConfirm(null);
          toast('Từ chối hợp đồng thành công');
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
