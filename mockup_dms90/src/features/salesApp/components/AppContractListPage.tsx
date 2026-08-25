import { useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ChevronRight, Filter, Search, X } from 'lucide-react';
import { ScreenHeader } from './AppHeaders';
import { SALES_APP_COLORS } from '../theme';
import { getCareCustomers } from '../careRouteCustomers';
import { useContractStore, parseDmy } from '../../contract/store';
import {
  APP_CONTRACT_TYPE_STATUSES,
  APP_CUSTOMER_CONTRACT_STATUSES,
  fmtDate,
  getContractTypes,
  getSharedContractTypeOptions,
  getVisibleCustomerContracts,
  type AppContractType,
  type AppCustomerContract,
} from '../contractData';

/** Internal tab key — `template` alias vẫn đọc được (back-compat) */
export type ContractTab = 'contract-type' | 'customer';

function parseTab(raw: string | null): ContractTab {
  if (raw === 'customer') return 'customer';
  return 'contract-type';
}

function tabParam(tab: ContractTab): string {
  return tab === 'customer' ? 'customer' : 'contract-type';
}

function pillClass(status: string) {
  if (status === 'Đã duyệt' || status === 'Hoạt động') return 'bg-emerald-100 text-emerald-800';
  if (status === 'Khởi tạo' || status === 'Chờ duyệt') return 'bg-amber-100 text-amber-800';
  if (status === 'Từ chối' || status === 'Ngừng hoạt động') return 'bg-red-100 text-red-800';
  return 'bg-slate-100 text-slate-700';
}

function ContractTypeCard({ item }: { item: AppContractType }) {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => navigate(`/sales-app/hop-dong/${item.id}?tab=contract-type`)}
      className="w-full text-left bg-white rounded-2xl shadow-[0_2px_3px_rgba(191,191,191,0.38)] px-3.5 py-3 flex items-center gap-2"
    >
      <div className="min-w-0 flex-1">
        <p className="m-0 text-[14px] font-medium text-[#1f2937] leading-normal">{item.name}</p>
        <p className="m-0 mt-0.5 text-[14px]" style={{ color: SALES_APP_COLORS.boldBlue }}>{item.code}</p>
        <span className={`inline-block mt-1.5 px-2 py-0.5 rounded text-[11px] font-medium ${pillClass(item.status)}`}>{item.status}</span>
      </div>
      <ChevronRight className="w-4 h-4 text-[#9ca3af] shrink-0" />
    </button>
  );
}

function CustomerContractCard({ item }: { item: AppCustomerContract }) {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => navigate(`/sales-app/hop-dong/${item.id}?tab=customer`)}
      className="w-full text-left bg-white rounded-2xl shadow-[0_2px_3px_rgba(191,191,191,0.38)] px-3.5 py-3 flex items-center gap-2"
    >
      <div className="min-w-0 flex-1">
        <p className="m-0 text-[14px] font-medium text-[#1f2937] leading-normal">{item.name}</p>
        <p className="m-0 mt-0.5 text-[14px]" style={{ color: SALES_APP_COLORS.boldBlue }}>{item.code}</p>
        {item.typeLabel ? (
          <>
            <p className="m-0 mt-1.5 text-[11px] font-medium tracking-wide text-[#7587a6]">LOẠI HỢP ĐỒNG</p>
            <p className="m-0 mt-0.5 text-[12px] text-[#6b7280]">{item.typeLabel}</p>
          </>
        ) : null}
        {item.customerName ? (
          <p className="m-0 mt-1 text-[12px] text-[#6b7280]">{item.customerName}</p>
        ) : null}
        <span className={`inline-block mt-1.5 px-2 py-0.5 rounded text-[11px] font-medium ${pillClass(item.status)}`}>{item.status}</span>
        <p className="m-0 mt-1 text-[12px] text-[#6b7280]">{fmtDate(item.startDate)} - {fmtDate(item.endDate)}</p>
      </div>
      <ChevronRight className="w-4 h-4 text-[#9ca3af] shrink-0" />
    </button>
  );
}

type FilterDraft = { contractTypeId: string; customer: string; status: string; from: string; to: string };

const EMPTY_DRAFT: FilterDraft = { contractTypeId: '', customer: '', status: '', from: '', to: '' };

export function AppContractListPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = parseTab(searchParams.get('tab'));
  // Subscribe shared Website store — create/edit/upload phản ánh xuống App
  const { contracts: sharedContracts } = useContractStore();

  const [q, setQ] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [contractTypeId, setContractTypeId] = useState('');
  const [customer, setCustomer] = useState('');
  const [status, setStatus] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [draft, setDraft] = useState<FilterDraft>(EMPTY_DRAFT);

  const setTab = (next: ContractTab) => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set('tab', tabParam(next));
    setSearchParams(nextParams, { replace: true });
    setContractTypeId('');
    setCustomer('');
    setStatus('');
    setFrom('');
    setTo('');
    setDraft(EMPTY_DRAFT);
  };

  const careCustomers = getCareCustomers();
  const contractTypeOptions = useMemo(() => getSharedContractTypeOptions(), [sharedContracts]);
  const isTypeTab = tab === 'contract-type';

  const filterOn = !!(
    status
    || (tab === 'customer' && (contractTypeId || customer || from || to))
  );

  const typeRows = useMemo(() => {
    void sharedContracts;
    const source = getContractTypes();
    const needle = q.trim().toLowerCase();
    return source.filter((c) => {
      if (needle) {
        const hay = `${c.code} ${c.name}`.toLowerCase();
        if (!hay.includes(needle)) return false;
      }
      if (status && c.status !== status) return false;
      return true;
    });
  }, [q, status, sharedContracts]);

  const customerRows = useMemo(() => {
    void sharedContracts;
    const source = getVisibleCustomerContracts();
    const needle = q.trim().toLowerCase();
    const fromDate = parseDmy(from);
    const toDate = parseDmy(to);
    return source.filter((c) => {
      if (needle) {
        const hay = `${c.code} ${c.name} ${c.customerCode || ''} ${c.customerName || ''} ${c.typeLabel}`.toLowerCase();
        if (!hay.includes(needle)) return false;
      }
      if (contractTypeId && c.contractTypeId !== contractTypeId) return false;
      if (customer && c.customerId !== customer && c.customerCode !== customer) return false;
      if (status && c.status !== status) return false;
      const start = parseDmy(c.startDate);
      const end = parseDmy(c.endDate);
      if (fromDate && end && end.getTime() < fromDate.getTime()) return false;
      if (toDate && start && start.getTime() > toDate.getTime()) return false;
      return true;
    });
  }, [q, contractTypeId, customer, status, from, to, sharedContracts]);

  const sourceLen = isTypeTab ? getContractTypes().length : getVisibleCustomerContracts().length;
  const rowsLen = isTypeTab ? typeRows.length : customerRows.length;
  const emptySource = sourceLen === 0;
  const emptySearch = !emptySource && rowsLen === 0;
  const statusOptions = isTypeTab ? APP_CONTRACT_TYPE_STATUSES : APP_CUSTOMER_CONTRACT_STATUSES;

  const openFilter = () => {
    setDraft({ contractTypeId, customer, status, from, to });
    setFilterOpen(true);
  };

  const clearAllFilters = () => {
    setQ('');
    setContractTypeId('');
    setCustomer('');
    setStatus('');
    setFrom('');
    setTo('');
    setDraft(EMPTY_DRAFT);
  };

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-[#f3f4f6] relative">
      <ScreenHeader title="Hợp đồng" onBack={() => navigate('/sales-app/khac')} />

      <div className="shrink-0 flex gap-6 px-4 bg-white border-b border-slate-100" role="tablist">
        {(
          [
            ['contract-type', 'Loại hợp đồng'],
            ['customer', 'Hợp đồng khách hàng'],
          ] as const
        ).map(([key, label]) => {
          const on = tab === key;
          return (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setTab(key)}
              className={`py-3 min-h-11 text-[14px] border-b-2 -mb-px transition-colors focus-visible:outline focus-visible:outline-2 ${
                on ? 'font-medium' : 'text-slate-500 border-transparent'
              }`}
              style={
                on
                  ? { color: SALES_APP_COLORS.boldBlue, borderColor: SALES_APP_COLORS.boldBlue, outlineColor: SALES_APP_COLORS.boldBlue }
                  : { outlineColor: SALES_APP_COLORS.boldBlue }
              }
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="shrink-0 px-4 py-2 flex items-center gap-2 bg-[#f3f4f6]">
        <div className="flex-1 flex items-center gap-2 bg-white border border-slate-200 rounded-full px-3 min-h-11">
          <Search className="w-4 h-4 text-slate-500 shrink-0" aria-hidden />
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={isTypeTab ? 'Tìm mã, tên loại hợp đồng' : 'Tìm mã HĐ, tên HĐ hoặc khách hàng'}
            className="flex-1 text-[13px] text-slate-800 bg-transparent outline-none placeholder:text-slate-500 font-normal min-w-0"
            aria-label={isTypeTab ? 'Tìm loại hợp đồng' : 'Tìm hợp đồng'}
          />
        </div>
        <button
          type="button"
          onClick={openFilter}
          className={`relative w-11 h-11 shrink-0 rounded-xl border bg-white flex items-center justify-center focus-visible:outline focus-visible:outline-2 ${
            filterOn ? 'border-[#1437d6] text-[#1437d6]' : 'border-slate-200 text-slate-600'
          }`}
          style={{ outlineColor: SALES_APP_COLORS.boldBlue }}
          aria-label="Bộ lọc"
        >
          <Filter className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto hide-scrollbar px-4 pb-6 flex flex-col gap-2.5">
        {emptySource ? (
          <div className="pt-16 text-center">
            <p className="m-0 text-[15px] font-medium text-slate-800">
              {isTypeTab ? 'Chưa có loại hợp đồng' : 'Chưa có hợp đồng khách hàng'}
            </p>
          </div>
        ) : emptySearch ? (
          <div className="pt-16 text-center">
            <p className="m-0 text-[15px] font-medium text-slate-800">
              {isTypeTab ? 'Không tìm thấy loại hợp đồng phù hợp' : 'Không tìm thấy hợp đồng phù hợp'}
            </p>
            {filterOn || q ? (
              <button
                type="button"
                className="mt-3 text-[#1437d6] text-[14px] bg-transparent border-0"
                onClick={clearAllFilters}
              >
                Xóa bộ lọc
              </button>
            ) : null}
          </div>
        ) : isTypeTab ? (
          typeRows.map((c) => <ContractTypeCard key={c.id} item={c} />)
        ) : (
          customerRows.map((c) => <CustomerContractCard key={c.id} item={c} />)
        )}
      </div>

      {filterOpen ? (
        <div className="absolute inset-0 z-20 flex flex-col bg-white" role="dialog" aria-modal="true" aria-label="Bộ lọc">
          <div className="flex items-center gap-2 px-4 h-14 border-b border-slate-100 shrink-0">
            <button type="button" className="w-11 h-11 -ml-2 flex items-center justify-center" onClick={() => setFilterOpen(false)} aria-label="Đóng">
              <X className="w-5 h-5" />
            </button>
            <h2 className="flex-1 text-center text-[18px] font-bold m-0 pr-9">Bộ lọc</h2>
          </div>
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
            {tab === 'customer' ? (
              <>
                <label className="block text-[13px] text-slate-600">Loại hợp đồng
                  <select
                    className="mt-1 w-full min-h-11 rounded-lg border border-slate-200 px-3 text-[14px]"
                    value={draft.contractTypeId}
                    onChange={(e) => setDraft((d) => ({ ...d, contractTypeId: e.target.value }))}
                  >
                    <option value="">Tất cả</option>
                    {contractTypeOptions.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                </label>
                <label className="block text-[13px] text-slate-600">Khách hàng
                  <select className="mt-1 w-full min-h-11 rounded-lg border border-slate-200 px-3 text-[14px]" value={draft.customer} onChange={(e) => setDraft((d) => ({ ...d, customer: e.target.value }))}>
                    <option value="">Tất cả</option>
                    {careCustomers.map((c) => <option key={c.code} value={c.code}>{c.code} - {c.name}</option>)}
                  </select>
                </label>
              </>
            ) : null}
            <label className="block text-[13px] text-slate-600">Trạng thái
              <select className="mt-1 w-full min-h-11 rounded-lg border border-slate-200 px-3 text-[14px]" value={draft.status} onChange={(e) => setDraft((d) => ({ ...d, status: e.target.value }))}>
                <option value="">Tất cả</option>
                {statusOptions.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </label>
            {tab === 'customer' ? (
              <>
                <p className="m-0 text-[13px] text-slate-600">Thời gian hiệu lực</p>
                <div className="grid grid-cols-2 gap-2">
                  <label className="text-[12px] text-slate-500">Từ ngày
                    <input type="date" className="mt-1 w-full min-h-11 rounded-lg border border-slate-200 px-2 text-[14px]" value={draft.from} onChange={(e) => setDraft((d) => ({ ...d, from: e.target.value }))} />
                  </label>
                  <label className="text-[12px] text-slate-500">Đến ngày
                    <input type="date" className="mt-1 w-full min-h-11 rounded-lg border border-slate-200 px-2 text-[14px]" value={draft.to} onChange={(e) => setDraft((d) => ({ ...d, to: e.target.value }))} />
                  </label>
                </div>
              </>
            ) : null}
          </div>
          <div className="shrink-0 p-4 border-t border-slate-100 flex gap-3">
            <button
              type="button"
              className="flex-1 min-h-12 rounded-lg border border-slate-200 text-[15px]"
              onClick={() => {
                setDraft(EMPTY_DRAFT);
                setContractTypeId('');
                setCustomer('');
                setStatus('');
                setFrom('');
                setTo('');
              }}
            >
              Làm mới
            </button>
            <button
              type="button"
              className="flex-1 min-h-12 rounded-lg text-white text-[15px] font-medium"
              style={{ background: SALES_APP_COLORS.boldBlue }}
              onClick={() => {
                setContractTypeId(draft.contractTypeId);
                setCustomer(draft.customer);
                setStatus(draft.status);
                setFrom(draft.from);
                setTo(draft.to);
                setFilterOpen(false);
              }}
            >
              Áp dụng
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
