import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Store,
  Image as ImageIcon,
  ClipboardList,
  Gift,
  Award,
  ChevronDown,
  ChevronUp,
  Pencil,
  Star,
  RefreshCw,
} from 'lucide-react';
import { NEW_CUSTOMERS_GROUPED, VISIT_CUSTOMERS } from '../mockData';
import { getCareCustomers } from '../careRouteCustomers';
import { SALES_APP_COLORS } from '../theme';
import { ScreenHeader } from './AppHeaders';

type SectionKey = 'chung' | 'daidien' | 'phanloai' | 'vitri';

const ACTIONS = [
  { key: 'anh', label: 'Hình ảnh điểm bán', icon: ImageIcon, dot: true },
  { key: 'phan-tich', label: 'Phân tích điểm bán', icon: Store, dot: false },
  { key: 'lich-su', label: 'Lịch sử đơn hàng', icon: ClipboardList, dot: false },
  { key: 'trung-bay', label: 'CT trưng bày', icon: Gift, dot: false },
  { key: 'tich-luy', label: 'CT tích luỹ', icon: Award, dot: false },
] as const;

const BADGES = [
  { key: 'tiem-nang', label: 'Tiềm năng', tone: 'gold' as const },
  { key: 'eco', label: 'ECO', tone: 'blue' as const },
  { key: 'ecopay', label: 'ECOpay', tone: 'sky' as const },
  { key: 'eco-co', label: 'ECO Co…', tone: 'gold' as const },
];

/** Thông tin điểm bán — Hand-off; entry từ list khách hàng */
export function CustomerDetailPage() {
  const navigate = useNavigate();
  const { id = '' } = useParams();
  const [expanded, setExpanded] = useState<Record<SectionKey, boolean>>({
    chung: true,
    daidien: true,
    phanloai: true,
    vitri: true,
  });
  const [actionPage, setActionPage] = useState(0);

  const store = useMemo(() => {
    const fromVisit = VISIT_CUSTOMERS.find(c => c.code === id);
    const fromCare = getCareCustomers().find(c => c.code === id);
    const fromNew = NEW_CUSTOMERS_GROUPED.flatMap(g => g.items).find(c => c.id === id);
    if (fromVisit) {
      return {
        name: fromVisit.name.replace(/^\[Cici\]\s*/, ''),
        phone: fromVisit.phone,
        address: fromVisit.address,
        code: fromVisit.code,
      };
    }
    if (fromCare) {
      return {
        name: fromCare.name.replace(/^\[Cici\]\s*/, ''),
        phone: fromCare.phone || '0909909999',
        address: fromCare.address,
        code: fromCare.code,
      };
    }
    if (fromNew) {
      return {
        name: fromNew.name,
        phone: '0909909999',
        address: fromNew.address,
        code: fromNew.id,
      };
    }
    return {
      name: 'Cô Ba Lagi',
      phone: '(+84) 964 113 022',
      address: '34 Hoàng Việt, Quận Tân Bình, Phường 4, TP. Hồ Chí Minh.',
      code: id || 'CH4652946',
    };
  }, [id]);

  const toggle = (key: SectionKey) => {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
        <div className="flex-1 min-h-0 flex flex-col bg-[#f3f4f6]">
          <ScreenHeader
            title="Thông tin điểm bán"
            onBack={() => navigate('/sales-app/khach-hang')}
          />

          <div className="flex-1 min-h-0 overflow-y-auto hide-scrollbar pb-6">
            <div className="bg-white px-5 pt-4 pb-5">
              <div className="relative overflow-hidden rounded-xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-5">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-transparent pointer-events-none" aria-hidden />
                <div className="relative flex gap-3 items-start">
                  <div
                    className="w-[60px] h-[60px] rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'color-mix(in srgb, #1437d6 12%, white)' }}
                    aria-hidden
                  >
                    <Store className="w-7 h-7" style={{ color: SALES_APP_COLORS.boldBlue }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[14px] font-bold text-[#1f2937] leading-5 m-0">{store.name}</p>
                    <p className="text-[14px] text-[#1f2937] leading-5 m-0 mt-1 tabular-nums">{store.phone}</p>
                    <p className="text-[14px] text-[#1f2937] leading-5 m-0 mt-1">{store.address}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 mt-4 overflow-x-auto hide-scrollbar">
                {BADGES.map(b => (
                  <span
                    key={b.key}
                    className={`shrink-0 inline-flex items-center gap-0.5 pl-1 pr-2 py-0.5 rounded-full border text-[12px] font-medium ${
                      b.tone === 'gold'
                        ? 'bg-amber-50 border-amber-400 text-amber-800'
                        : b.tone === 'sky'
                          ? 'bg-sky-50 border-sky-400 text-sky-800'
                          : 'bg-blue-50 border-[#1437d6] text-[#1437d6]'
                    }`}
                  >
                    {b.key === 'tiem-nang' && <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" aria-hidden />}
                    {b.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white mt-2 px-4 py-4">
              <div className="flex justify-between gap-1">
                {ACTIONS.map(a => {
                  const Icon = a.icon;
                  return (
                    <button
                      key={a.key}
                      type="button"
                      className="flex-1 flex flex-col items-center gap-1.5 min-h-[72px] focus-visible:outline focus-visible:outline-2 rounded-lg"
                      style={{ outlineColor: SALES_APP_COLORS.boldBlue }}
                    >
                      <span className="relative w-11 h-11 rounded-full border border-[#e5e7eb] bg-white flex items-center justify-center text-[#1437d6]">
                        <Icon className="w-5 h-5" aria-hidden />
                        {a.dot && (
                          <span className="absolute top-0.5 right-0.5 w-2 h-2 rounded-full bg-red-500" aria-label="Có cập nhật" />
                        )}
                      </span>
                      <span className="text-[10px] text-[#4b5563] text-center leading-tight px-0.5">{a.label}</span>
                    </button>
                  );
                })}
              </div>
              <div className="flex justify-center gap-1.5 mt-3" role="tablist" aria-label="Trang hành động">
                {[0, 1].map(i => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={actionPage === i}
                    onClick={() => setActionPage(i)}
                    className={`h-1.5 rounded-full transition-all ${actionPage === i ? 'w-3.5 bg-[#1437d6]' : 'w-1.5 bg-slate-200'}`}
                  />
                ))}
              </div>
            </div>

            <div className="px-4 mt-3 space-y-3">
              <InfoSection
                title="Thông tin chung"
                expanded={expanded.chung}
                onToggle={() => toggle('chung')}
                onEdit={() => undefined}
                preview={
                  <>
                    <FieldRow label="Mã điểm bán" value={store.code} />
                    <FieldRow
                      label="Tên điểm bán"
                      value={store.name}
                      trailing={<RefreshCw className="w-4 h-4 text-[#1437d6]" aria-hidden />}
                    />
                    <FieldRow label="Số điện thoại" value="0909909999" />
                    <FieldRow label="Email" value="abc@gmail.com" />
                  </>
                }
                extra={
                  <>
                    <FieldRow label="Nhà phân phối" value="NPP001 - Nhà Phân Phối Tổng Hợp" />
                    <FieldRow label="Tuyến Bán Hàng" value="TBH001 - Tuyến Sales 0001" />
                    <FieldRow label="Tần suất" value="F4 - 1 tuần 1 lần" />
                    <FieldRow label="Ngày đi tuyến" value="Thứ 4" />
                  </>
                }
              />
              <InfoSection
                title="Thông tin người đại diện"
                expanded={expanded.daidien}
                onToggle={() => toggle('daidien')}
                onEdit={() => undefined}
                preview={
                  <>
                    <FieldRow label="Tên chủ điểm bán" value="Võ Hoàng Yến" />
                    <FieldRow label="Số CMND/CCCD" value="025640799" />
                    <FieldRow label="Ngày cấp" value="25/01/2018" />
                    <FieldRow label="Nơi cấp" value="CA Thành phố Hồ Chí Minh" />
                  </>
                }
                extra={
                  <FieldRow
                    label="Hộ khẩu thường trú"
                    value="388 Nguyễn Văn Luông, Phường 12, Quận 6, TP. Hồ Chí Minh"
                  />
                }
              />
              <InfoSection
                title="Phân loại điểm bán"
                expanded={expanded.phanloai}
                onToggle={() => toggle('phanloai')}
                onEdit={() => undefined}
                preview={
                  <>
                    <FieldRow label="Vị trí điểm bán" value="—" />
                    <FieldRow label="Loại điểm bán" value="Điện máy và đồ gia dụng" />
                    <FieldRow label="Hạng điểm bán" value="—" />
                    <FieldRow label="Kênh bán hàng" value="—" />
                  </>
                }
              />
              <InfoSection
                title="Thông tin vị trí"
                expanded={expanded.vitri}
                onToggle={() => toggle('vitri')}
                onEdit={() => undefined}
                preview={
                  <>
                    <FieldRow label="Tỉnh/Thành phố" value="Hồ Chí Minh" />
                    <FieldRow label="Quận/Huyện" value="Quận 6" />
                    <FieldRow label="Phường/Xã" value="Phường 12" />
                    <FieldRow label="Địa chỉ" value="388 Nguyễn Văn Luông" />
                    <div className="pt-2">
                      <p className="text-[14px] font-bold text-[#1f2937] mb-2 border-b-2 border-[#1437d6] inline-block pb-0.5">
                        Định vị trên bản đồ
                      </p>
                      <div className="relative w-full h-36 rounded-lg overflow-hidden bg-slate-200 border border-slate-100">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-[#1437d6] flex items-center justify-center shadow-lg border-2 border-white">
                            <Store className="w-4 h-4 text-white" aria-hidden />
                          </div>
                        </div>
                      </div>
                      <p className="text-center text-[12px] text-[#4b5563] mt-2 tabular-nums">
                        Kinh độ: 394242, Vĩ độ: 274390
                      </p>
                    </div>
                  </>
                }
              />
            </div>
          </div>
        </div>
  );
}

function InfoSection({
  title,
  expanded,
  onToggle,
  onEdit,
  preview,
  extra,
}: {
  title: string;
  expanded: boolean;
  onToggle: () => void;
  onEdit?: () => void;
  preview: React.ReactNode;
  extra?: React.ReactNode;
}) {
  return (
    <section className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-3.5 pt-3.5 pb-2">
        <h2 className="text-[16px] font-bold text-[#1f2937] m-0">
          <span className="border-b-2 border-[#1437d6] pb-0.5 inline-block">{title}</span>
        </h2>
        {onEdit && (
          <button
            type="button"
            onClick={onEdit}
            className="w-11 h-11 flex items-center justify-center rounded-lg text-[#4b5563] focus-visible:outline focus-visible:outline-2"
            style={{ outlineColor: SALES_APP_COLORS.boldBlue }}
            aria-label={`Chỉnh sửa ${title}`}
          >
            <Pencil className="w-4 h-4" />
          </button>
        )}
      </div>
      <div className="px-3.5 pb-2 space-y-3">
        {preview}
        {expanded && extra}
      </div>
      {extra && (
        <div className="px-3.5 py-2.5 flex justify-center border-t border-slate-100">
          <button
            type="button"
            onClick={onToggle}
            className="flex items-center gap-1 text-[13px] font-medium text-[#1437d6] min-h-11 px-2 focus-visible:outline focus-visible:outline-2"
            style={{ outlineColor: SALES_APP_COLORS.boldBlue }}
            aria-expanded={expanded}
          >
            {expanded ? (
              <>
                Thu gọn <ChevronUp className="w-4 h-4" aria-hidden />
              </>
            ) : (
              <>
                Xem thêm <ChevronDown className="w-4 h-4" aria-hidden />
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}

function FieldRow({
  label,
  value,
  trailing,
}: {
  label: string;
  value: string;
  trailing?: React.ReactNode;
}) {
  return (
    <div className="flex justify-between items-start gap-3">
      <span className="text-[12px] text-[#4b5563] shrink-0">{label}</span>
      <span className="text-[12px] text-[#1f2937] text-right leading-snug inline-flex items-center gap-1.5 justify-end min-w-0">
        <span className="min-w-0 break-words">{value}</span>
        {trailing}
      </span>
    </div>
  );
}
