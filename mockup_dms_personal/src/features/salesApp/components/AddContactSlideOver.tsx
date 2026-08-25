import { useState, useEffect } from 'react';
import { X, ChevronRight, AlertCircle } from 'lucide-react';
import { primaryButtonGradient } from '../theme';
import { ScreenHeader } from './AppHeaders';

interface AddContactSlideOverProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
  initialData?: any;
}

type ContactTab = 'basic' | 'address';

export function AddContactSlideOver({ isOpen, onClose, onSave, initialData }: AddContactSlideOverProps) {
  const [tab, setTab] = useState<ContactTab>('basic');
  
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [title, setTitle] = useState('');
  
  const [receiverName, setReceiverName] = useState('');
  const [isReceiverNameEdited, setIsReceiverNameEdited] = useState(false);
  
  const [phone, setPhone] = useState('');
  const [receiverPhone, setReceiverPhone] = useState('');
  const [isReceiverPhoneEdited, setIsReceiverPhoneEdited] = useState(false);
  const [email, setEmail] = useState('');
  const [isSearchingPhone, setIsSearchingPhone] = useState(false);
  const [searchStatus, setSearchStatus] = useState<'idle' | 'found' | 'not-found'>('idle');

  const handlePhoneSearch = () => {
    if (!phone) return;
    setIsSearchingPhone(true);
    setSearchStatus('idle');
    // Giả lập gọi API quản lý người liên hệ
    setTimeout(() => {
      setIsSearchingPhone(false);
      // Giả sử tìm thấy liên hệ có SĐT 0901234567
      if (phone === '0901234567') {
        setLastName('Nguyễn');
        setMiddleName('Văn');
        setFirstName('A');
        setEmail('a@example.com');
        setSearchStatus('found');
      } else {
        setLastName('');
        setMiddleName('');
        setFirstName('');
        setEmail('');
        setSearchStatus('not-found');
      }
    }, 800);
  };

  useEffect(() => {
    if (!isReceiverNameEdited) {
      const fullName = [lastName, middleName, firstName].filter(Boolean).join(' ');
      setReceiverName(fullName);
    }
  }, [lastName, middleName, firstName, isReceiverNameEdited]);

  useEffect(() => {
    if (!isReceiverPhoneEdited) {
      setReceiverPhone(phone);
    }
  }, [phone, isReceiverPhoneEdited]);

  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        setPhone(initialData.phone || '');
        setEmail(initialData.email || '');
        setTitle(initialData.title || '');
        if (initialData.rawData) {
          setLastName(initialData.rawData.lastName || '');
          setMiddleName(initialData.rawData.middleName || '');
          setFirstName(initialData.rawData.firstName || '');
          setReceiverName(initialData.rawData.receiverName || '');
          setReceiverPhone(initialData.rawData.receiverPhone || '');
        } else {
          setLastName('');
          setMiddleName('');
          setFirstName(initialData.name || '');
        }
      } else {
        setPhone('');
        setEmail('');
        setTitle('');
        setLastName('');
        setMiddleName('');
        setFirstName('');
        setReceiverName('');
        setReceiverPhone('');
      }
      setTab('basic');
    }
  }, [isOpen, initialData]);

  const handleSave = () => {
    onSave({
      name: [lastName, middleName, firstName].filter(Boolean).join(' '),
      title,
      phone,
      email,
      rawData: { lastName, middleName, firstName, receiverName, receiverPhone }
    });
  };

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-50 flex flex-col bg-slate-50 animate-in slide-in-from-bottom-full duration-300">
      <ScreenHeader
        title="Thêm mới Liên hệ"
        balanceBack={false}
        right={
          <button
            type="button"
            onClick={onClose}
            className="w-11 h-11 flex items-center justify-center rounded-lg text-[#1f2937] hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1437d6]"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        }
      />

      {/* Tabs */}
      <div className="shrink-0 flex gap-2 px-4 pt-3 pb-1 bg-white border-b border-slate-100">
        <button
          onClick={() => setTab('basic')}
          className={`px-3 py-2 flex-1 text-center rounded-lg text-[12.5px] font-semibold ${tab === 'basic' ? 'bg-slate-800 text-white' : 'bg-slate-50 text-slate-500 border border-slate-200'}`}
        >
          Thông tin cơ bản
        </button>
        <button
          onClick={() => setTab('address')}
          className={`px-3 py-2 flex-1 text-center rounded-lg text-[12.5px] font-semibold ${tab === 'address' ? 'bg-slate-800 text-white' : 'bg-slate-50 text-slate-500 border border-slate-200'}`}
        >
          Địa chỉ
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {tab === 'basic' && (
          <>
            <div>
              <h3 className="text-[13px] font-bold text-slate-800 mb-2">Thông tin chính</h3>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <div className="relative flex-1 rounded-xl border border-slate-200 focus-within:border-blue-400 bg-white">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => { setPhone(e.target.value); setSearchStatus('idle'); }}
                      className="w-full h-full px-3 py-2.5 bg-transparent text-[13px] focus:outline-none text-slate-700"
                    />
                    {!phone && (
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[13px] text-slate-400 pointer-events-none">
                        Số điện thoại chính <span className="text-red-500">*</span>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={handlePhoneSearch}
                    disabled={isSearchingPhone || !phone}
                    className="shrink-0 px-4 py-2.5 rounded-xl bg-slate-800 text-white font-semibold text-[13px] disabled:opacity-50 flex items-center justify-center min-w-[80px]"
                  >
                    {isSearchingPhone ? <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" /> : 'Tìm kiếm'}
                  </button>
                </div>
                {searchStatus === 'not-found' && (
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-700 text-[12.5px]">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    Chưa tồn tại liên hệ này. Vui lòng nhập thông tin để tạo mới.
                  </div>
                )}
                {searchStatus === 'found' && (
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 text-[12.5px]">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    Đã tìm thấy liên hệ, thông tin được điền tự động.
                  </div>
                )}
                <FieldSelect placeholder="Vai trò" />
                <FieldSelect placeholder="Danh xưng" />
                <div className="flex gap-2">
                  <div className="flex-1"><FieldInput placeholder="Họ" required value={lastName} onChange={(e) => setLastName(e.target.value)} /></div>
                  <div className="flex-1"><FieldInput placeholder="Tên đệm" value={middleName} onChange={(e) => setMiddleName(e.target.value)} /></div>
                </div>
                <FieldInput placeholder="Tên" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <FieldInput placeholder="Chức danh" value={title} onChange={(e) => setTitle(e.target.value)} />
                <FieldSelect placeholder="Phân loại" />
              </div>
            </div>

            <div>
              <h3 className="text-[13px] font-bold text-slate-800 mb-2">Thông tin liên hệ</h3>
              <div className="space-y-3">
                <FieldInput placeholder="Thư điện tử" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <FieldInput placeholder="Số Fax" />
              </div>
            </div>

            <div>
              <h3 className="text-[13px] font-bold text-slate-800 mb-2">Tiếp thị</h3>
              <div className="space-y-3">
                <FieldSelect placeholder="Nguồn tiềm năng" />
              </div>
            </div>
          </>
        )}

        {tab === 'address' && (
          <>
            <div>
              <h3 className="text-[13px] font-bold text-slate-800 mb-2">Chi tiết địa chỉ</h3>
              <div className="space-y-3 bg-white p-3 rounded-xl border border-slate-200">
                <div className="flex flex-col gap-2 py-1">
                  <Checkbox label="Địa chỉ giao hàng mặc định" />
                </div>
                <FieldInput placeholder="Nhãn địa chỉ (VD: Nhà riêng...)" />
                <FieldInput placeholder="Tên người nhận" value={receiverName} onChange={(e) => { setReceiverName(e.target.value); setIsReceiverNameEdited(true); }} />
                <FieldInput placeholder="Số điện thoại nhận hàng" value={receiverPhone} onChange={(e) => { setReceiverPhone(e.target.value); setIsReceiverPhoneEdited(true); }} />
                <FieldInput placeholder="Số nhà/ Tên đường" />
                <FieldSelect placeholder="Tỉnh/ Thành phố" />
                <FieldSelect placeholder="Phường/Xã" />
                <FieldInput placeholder="Mã bưu chính" />
                <FieldInput placeholder="Ghi chú" />
              </div>
            </div>
            <button className="w-full py-2.5 rounded-xl border border-dashed border-blue-300 text-blue-600 font-medium text-[13px] bg-blue-50/50">
              + Thêm địa chỉ khác
            </button>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="shrink-0 p-4 bg-white border-t border-slate-100 flex gap-3">
        <button onClick={onClose} className="flex-1 py-3 rounded-xl font-semibold text-[13.5px] text-slate-700 bg-slate-100 border border-slate-200 active:bg-slate-200">
          Đóng
        </button>
        <button onClick={handleSave} className="flex-1 py-3 rounded-xl font-semibold text-[13.5px] text-white active:scale-[0.99] transition-transform" style={{ background: primaryButtonGradient }}>
          Lưu
        </button>
      </div>
    </div>
  );
}

function FieldInput({ placeholder, required, type = 'text', value, onChange, disabled }: { placeholder: string; required?: boolean; type?: string; value?: string; onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; disabled?: boolean }) {
  return (
    <div className={`relative w-full rounded-xl border border-slate-200 focus-within:border-blue-400 ${disabled ? 'bg-slate-50' : 'bg-white'}`}>
      <input
        type={type}
        disabled={disabled}
        value={value}
        onChange={onChange}
        placeholder=""
        className={`w-full px-3 py-2.5 bg-transparent text-[13px] focus:outline-none ${disabled ? 'text-slate-400' : 'text-slate-700'}`}
      />
      {!value && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[13px] text-slate-400 pointer-events-none">
          {placeholder} {required && <span className="text-red-500">*</span>}
        </div>
      )}
    </div>
  );
}

function FieldSelect({ placeholder }: { placeholder: string }) {
  return (
    <button className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-left">
      <span className="text-[13px] text-slate-400">{placeholder}</span>
      <ChevronRight className="w-4 h-4 text-slate-300 shrink-0" />
    </button>
  );
}

function Checkbox({ label }: { label: string }) {
  return (
    <label className="flex items-center gap-2 text-[12.5px] text-slate-600 cursor-pointer">
      <input type="checkbox" className="w-3.5 h-3.5 rounded text-blue-600 border-slate-300 accent-blue-600" />
      {label}
    </label>
  );
}
