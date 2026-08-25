import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, ChevronRight, ChevronDown, Camera, CheckCircle2, Lock, Trash2, Plus } from 'lucide-react';
import { primaryButtonGradient } from '../theme';
import { AddContactSlideOver } from './AddContactSlideOver';
import { ScreenHeader } from './AppHeaders';
import { VN_PROVINCES } from '../../contacts/vnAdministrativeUnits';
import { lookupTaxCode } from '../../customer/taxLookup';

interface Contact {
  id: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  rawData?: any;
}

interface Address {
  id: string;
  city: string;
  ward: string;
  addressLine1: string;
  isShipping: boolean;
  isFromApi?: boolean;
}

function FieldInput({ label, required, placeholder, disabled, type = 'text', value, onChange }: { label?: string; required?: boolean; placeholder: string; disabled?: boolean; type?: string; value?: string; onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div>
      {label && (
        <p className="text-[12px] text-slate-500 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </p>
      )}
      <div className={`relative w-full rounded-xl border border-slate-200 focus-within:border-blue-400 ${disabled ? 'bg-slate-50' : 'bg-white'}`}>
        {!label && value && (
          <div className="absolute left-3.5 top-1.5 text-[11px] text-slate-400 pointer-events-none">
            {placeholder}
          </div>
        )}
        <input
          type={type}
          disabled={disabled}
          value={value}
          onChange={onChange}
          placeholder={label ? placeholder : ''}
          className={`w-full px-3.5 ${!label && value ? 'pt-5 pb-1.5 font-medium' : 'py-3'} bg-transparent text-[13.5px] focus:outline-none ${
            disabled ? 'text-slate-400' : 'text-slate-700'
          }`}
        />
        {!label && !value && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[13.5px] text-slate-400 pointer-events-none">
            {placeholder} {required && <span className="text-red-500">*</span>}
          </div>
        )}
      </div>
    </div>
  );
}

function FieldSelect({ placeholder, required, value, disabled, onClick }: { placeholder: string; required?: boolean; value?: string; disabled?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl border border-slate-200 text-left ${disabled ? 'bg-slate-50' : 'bg-white'}`}
    >
      <div className="flex-1 flex flex-col justify-center">
        {value ? (
          <>
            <span className="text-[12.5px] text-slate-400 mb-0.5">{placeholder}</span>
            <span className="text-[14.5px] text-slate-700 font-medium">{value}</span>
          </>
        ) : (
          <span className="text-[14.5px] text-slate-400">
            {placeholder} {required && <span className="text-red-500">*</span>}
          </span>
        )}
      </div>
      <ChevronRight className="w-5 h-5 text-slate-700 shrink-0 ml-2" />
    </button>
  );
}

function FieldNativeSelect({ placeholder, required, value, disabled, options, onChange }: {
  placeholder: string; required?: boolean; value: string; disabled?: boolean; options: string[]; onChange: (v: string) => void;
}) {
  return (
    <div className={`relative w-full rounded-xl border border-slate-200 focus-within:border-blue-400 ${disabled ? 'bg-slate-50' : 'bg-white'}`}>
      {value && (
        <div className="absolute left-3.5 top-1.5 text-[11px] text-slate-400 pointer-events-none z-10">
          {placeholder}
        </div>
      )}
      <select
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full appearance-none px-3.5 ${value ? 'pt-5 pb-1.5 font-medium' : 'py-3'} bg-transparent text-[13.5px] focus:outline-none ${
          disabled ? 'text-slate-400' : 'text-slate-700'
        } ${!value ? 'text-transparent' : ''}`}
      >
        <option value="" className="text-slate-400">{placeholder}</option>
        {options.map((o) => <option key={o} value={o} className="text-slate-700">{o}</option>)}
      </select>
      {!value && (
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[13.5px] text-slate-400 pointer-events-none">
          {placeholder} {required && <span className="text-red-500">*</span>}
        </div>
      )}
      <ChevronRight className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 rotate-90" />
    </div>
  );
}

function ReadonlyField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[12px] text-slate-500 mb-1">{label}</p>
      <div className="w-full flex items-center justify-between gap-2 px-3.5 py-3 rounded-xl border border-slate-200 bg-slate-50 text-[13.5px] text-slate-400">
        <span className="truncate">{value || '—'}</span>
        <Lock className="w-3.5 h-3.5 shrink-0" />
      </div>
    </div>
  );
}

function CollapsibleSection({ title, children, defaultOpen = true }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div>
      <div 
        className="flex items-center justify-between mb-3 cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-[14px] font-bold text-slate-800 border-b-2 border-slate-800 pb-2 inline-block m-0">
          {title}
        </h3>
        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
      </div>
      {isOpen && (
        <div className="animate-in fade-in duration-200">
          {children}
        </div>
      )}
    </div>
  );
}

type TabType = 'thongtin' | 'diachi' | 'lienhe';

export function CreateCustomerPage() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<TabType>('thongtin');

  const [isPerson, setIsPerson] = useState<boolean>(false);
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');

  const [taxCode, setTaxCode] = useState('');
  const [lastCheckedTaxCode, setLastCheckedTaxCode] = useState('');
  const [isCheckingTax, setIsCheckingTax] = useState(false);
  const [taxIdentityLocked, setTaxIdentityLocked] = useState(false);
  const [taxVerified, setTaxVerified] = useState<boolean | null>(null);
  const [taxLookupError, setTaxLookupError] = useState('');
  
  const [billingAddressString, setBillingAddressString] = useState('');
  const [isBillingAddressChecked, setIsBillingAddressChecked] = useState(false);
  const [taxValidityStatus, setTaxValidityStatus] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [fax, setFax] = useState('');
  const [creditLimit, setCreditLimit] = useState('');

  const [addresses, setAddresses] = useState<Address[]>([]);
  const [showAddContact, setShowAddContact] = useState(false);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);

  const fullName = [lastName, middleName, firstName].filter(Boolean).join(' ');

  const handleCheckTaxCode = async () => {
    if (!taxCode) return;
    setTaxLookupError('');
    setIsCheckingTax(true);
    setTaxVerified(null);
    
    try {
      const result = await lookupTaxCode(taxCode);
      setIsCheckingTax(false);

      if (!result) {
        setTaxLookupError('Không tìm thấy thông tin cho Mã số thuế/CCCD này. Vui lòng kiểm tra lại và thử lại.');
        setTaxVerified(false);
        setLastCheckedTaxCode(taxCode);
        return;
      }

      setTaxVerified(true);
      if (result.kind === 'individual') {
        setIsPerson(true);
        if (result.lastName) setLastName(result.lastName);
        if (result.middleName) setMiddleName(result.middleName);
        if (result.firstName) setFirstName(result.firstName);
      } else {
        setIsPerson(false);
        if (result.companyName) setCompanyName(result.companyName);
      }
      
      if (result.address) {
        setBillingAddressString(`${result.address.addressLine1}, ${result.address.ward}, ${result.address.city}`);
        setIsBillingAddressChecked(true);
      }
      if (result.validityStatus) {
        setTaxValidityStatus(result.validityStatus);
      }
      setTaxIdentityLocked(true);
      setLastCheckedTaxCode(taxCode);
    } catch (e: any) {
      setIsCheckingTax(false);
      setTaxVerified(false);
      if (e.message === 'TIMEOUT') {
        setTaxLookupError('Không tìm thấy thông tin cho Mã số thuế/CCCD này. Vui lòng kiểm tra lại và thử lại.');
        setLastCheckedTaxCode(taxCode);
      } else {
        setTaxLookupError('Đã xảy ra lỗi kết nối. ' + e.message);
      }
    }
  };

  const handleTaxCodeChange = (v: string) => {
    setTaxCode(v);
    setTaxLookupError('');
    // Không clear taxIdentityLocked để giữ nguyên thông tin đã check trước đó
  };

  // Removed global default billing/shipping checks

  const addNewAddress = () => {
    setAddresses(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        city: '',
        ward: '',
        addressLine1: '',
        isShipping: prev.length === 0, // only true if it's the first address
      }
    ]);
  };

  const removeAddress = (id: string) => {
    setAddresses(prev => prev.filter(a => a.id !== id));
  };

  const updateAddress = (id: string, field: keyof Address, value: any) => {
    setAddresses(prev => prev.map(a => {
      if (a.id !== id) return a;
      return { ...a, [field]: value };
    }));
  };

  const handleSave = () => {
    const savedTaxCode = lastCheckedTaxCode || taxCode;
    if (taxVerified === false) {
      alert(`Đã lưu khách hàng (MST: ${savedTaxCode}) với cờ tax_verified = false.`);
    } else {
      alert(`Đã lưu khách hàng thành công! (MST: ${savedTaxCode})`);
    }
    navigate('/sales-app/khach-hang');
  };

  return (
        <div className="flex-1 min-h-0 flex flex-col bg-slate-50">
          <ScreenHeader
            title="Tạo mới khách hàng"
            onBack={() => navigate('/sales-app/khach-hang')}
          />

          <div className="shrink-0 flex gap-2 px-4 pt-3 pb-1 overflow-x-auto hide-scrollbar">
            <button
              onClick={() => setTab('thongtin')}
              className={`px-3 py-2 flex-1 text-center rounded-lg text-[12.5px] font-semibold whitespace-nowrap ${tab === 'thongtin' ? 'bg-slate-800 text-white' : 'bg-white text-slate-500 border border-slate-200'}`}
            >
              Thông tin
            </button>
            <button
              onClick={() => setTab('diachi')}
              className={`px-3 py-2 flex-1 text-center rounded-lg text-[12.5px] font-semibold whitespace-nowrap ${tab === 'diachi' ? 'bg-slate-800 text-white' : 'bg-white text-slate-500 border border-slate-200'}`}
            >
              Địa chỉ
            </button>
            <button
              onClick={() => setTab('lienhe')}
              className={`px-3 py-2 flex-1 text-center rounded-lg text-[12.5px] font-semibold whitespace-nowrap ${tab === 'lienhe' ? 'bg-slate-800 text-white' : 'bg-white text-slate-500 border border-slate-200'}`}
            >
              Liên hệ
            </button>
          </div>

          <div className="flex-1 min-h-0 overflow-y-auto hide-scrollbar px-4 py-3 space-y-5">
            {tab === 'thongtin' && (
              <>
                <CollapsibleSection title="Định danh khách hàng">
                  <div className="space-y-3">
                    <div className="flex gap-2 bg-slate-200/50 p-1 rounded-xl">
                      <button
                        onClick={() => setIsPerson(false)}
                        className={`flex-1 py-2 rounded-lg text-[13px] font-medium transition-colors ${!isPerson ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                      >
                        Công ty
                      </button>
                      <button
                        onClick={() => setIsPerson(true)}
                        className={`flex-1 py-2 rounded-lg text-[13px] font-medium transition-colors ${isPerson ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                      >
                        Cá nhân
                      </button>
                    </div>

                    <div>
                      <p className="text-[12px] text-slate-500 mb-1">Mã số thuế / CCCD <span className="text-red-500">*</span></p>
                      <div className="flex gap-2">
                        <input
                          value={taxCode}
                          onChange={(e) => handleTaxCodeChange(e.target.value)}
                          placeholder="Nhập mã số thuế..."
                          className={`flex-1 min-w-0 px-3.5 py-3 rounded-xl border border-slate-200 text-[13.5px] placeholder-slate-400 focus:outline-none focus:border-blue-400 bg-white text-slate-700`}
                        />
                        <button
                          onClick={handleCheckTaxCode}
                          disabled={isCheckingTax || !taxCode || (taxCode === lastCheckedTaxCode && taxVerified !== null)}
                          className="shrink-0 px-3 rounded-xl bg-blue-600 text-white text-[12.5px] font-semibold flex items-center gap-1.5 disabled:opacity-60 active:scale-95 transition-transform"
                        >
                          {isCheckingTax ? (
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                          ) : (
                            <CheckCircle2 className="w-4 h-4" />
                          )}
                          Kiểm tra
                        </button>
                      </div>
                      {taxIdentityLocked && taxVerified === true && (
                        <p className="mt-1.5 flex items-center gap-1 text-[11px] font-medium text-emerald-600">
                          <CheckCircle2 className="w-3 h-3" /> Hợp lệ — đã tự động điền thông tin từ masothue.com
                        </p>
                      )}
                      {taxLookupError && (
                        <p className="mt-1.5 flex items-start gap-1 text-[11px] font-medium text-red-600 leading-snug">
                          <AlertTriangle className="w-3 h-3 mt-0.5 shrink-0" /> {taxLookupError}
                        </p>
                      )}
                    </div>

                    {isPerson ? (
                      <>
                        <div className="flex gap-2">
                          <div className="flex-1">
                            <FieldInput placeholder="Họ" value={lastName} onChange={(e) => setLastName(e.target.value)} disabled={taxIdentityLocked} required />
                          </div>
                          <div className="flex-1">
                            <FieldInput placeholder="Tên đệm" value={middleName} onChange={(e) => setMiddleName(e.target.value)} disabled={taxIdentityLocked} />
                          </div>
                        </div>
                        <FieldInput placeholder="Tên" value={firstName} onChange={(e) => setFirstName(e.target.value)} disabled={taxIdentityLocked} required />
                        <FieldInput label="Tên đầy đủ" placeholder="Tên đầy đủ" value={fullName} disabled />
                      </>
                    ) : (
                      <FieldInput placeholder="Tên công ty" value={companyName} onChange={(e) => setCompanyName(e.target.value)} disabled={taxIdentityLocked} required />
                    )}

                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <input
                          type="checkbox"
                          checked={isBillingAddressChecked}
                          onChange={(e) => setIsBillingAddressChecked(e.target.checked)}
                          className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300 accent-blue-600"
                        />
                        <span className="text-[12.5px] font-medium text-slate-700">Địa chỉ hóa đơn</span>
                      </div>
                      {isBillingAddressChecked && (
                        <div className={`relative w-full rounded-xl border border-slate-200 focus-within:border-blue-400 ${taxIdentityLocked && billingAddressString ? 'bg-slate-50' : 'bg-white'}`}>
                          {billingAddressString && (
                            <div className="absolute left-3.5 top-1.5 text-[11px] text-slate-400 pointer-events-none">Địa chỉ hóa đơn</div>
                          )}
                          <textarea
                            value={billingAddressString}
                            onChange={(e) => setBillingAddressString(e.target.value)}
                            disabled={taxIdentityLocked && billingAddressString.length > 0}
                            rows={2}
                            placeholder=""
                            className={`w-full px-3.5 ${billingAddressString ? 'pt-5 pb-1.5 font-medium' : 'py-3'} bg-transparent text-[13.5px] focus:outline-none resize-none ${(taxIdentityLocked && billingAddressString) ? 'text-slate-400' : 'text-slate-700'}`}
                          />
                          {!billingAddressString && (
                            <div className="absolute left-3.5 top-3 text-[13.5px] text-slate-400 pointer-events-none">
                              Nhập địa chỉ hóa đơn...
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {taxIdentityLocked && taxValidityStatus && (
                      <ReadonlyField label="Trạng thái MST" value={taxValidityStatus} />
                    )}

                    <FieldInput placeholder="Số điện thoại" required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    <FieldInput placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <FieldInput placeholder="Fax" value={fax} onChange={(e) => setFax(e.target.value)} />
                    
                    <FieldSelect placeholder="Tuyến bán hàng" value="15/6 - chuyển store - tuyến 2" />
                    <FieldSelect placeholder="Tần suất" required />
                    <FieldSelect placeholder="Ngày đi tuyến" required />
                  </div>
                </CollapsibleSection>

                <CollapsibleSection title="Phân loại và kênh">
                  <div className="space-y-3">
                    <FieldSelect placeholder="Nhóm khách hàng" />
                    <FieldSelect placeholder="Đơn vị kinh doanh" />
                    <FieldSelect placeholder="Kênh bán hàng" />
                    <FieldSelect placeholder="Phân loại khách hàng" />
                    <FieldSelect placeholder="Hạng khách hàng" />
                    <FieldSelect placeholder="Vị trí khách hàng" />
                  </div>
                </CollapsibleSection>

                <CollapsibleSection title="Thông tin tài chính">
                  <div className="space-y-3">
                    <FieldSelect placeholder="Điều khoản thanh toán" />
                    <FieldInput placeholder="Hạn mức tín dụng" type="number" value={creditLimit} onChange={(e) => setCreditLimit(e.target.value)} />
                  </div>
                </CollapsibleSection>

                <CollapsibleSection title="Hình ảnh khách hàng">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[12.5px] text-slate-500">Hình ảnh khách hàng (0/10)</span>
                  </div>
                  <button className="w-20 h-20 rounded-xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center gap-1 text-slate-400">
                    <Camera className="w-5 h-5" />
                    <span className="text-[10px]">(0/10)</span>
                  </button>
                </CollapsibleSection>
              </>
            )}

            {tab === 'diachi' && (
              <div className="flex flex-col h-full bg-slate-50">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-[14px] font-bold text-slate-800">Danh sách địa chỉ ({addresses.length})</h3>
                  <button
                    onClick={addNewAddress}
                    className="px-3 py-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 font-semibold text-[13px] flex items-center gap-1 active:bg-blue-100"
                  >
                    <Plus className="w-4 h-4" /> Thêm địa chỉ
                  </button>
                </div>
                
                {addresses.length === 0 && (
                  <div className="text-center text-slate-400 text-[13px] py-10 bg-white rounded-xl border border-slate-200 shadow-sm">
                    Chưa có địa chỉ nào. Vui lòng thêm mới.
                  </div>
                )}
                
                <div className="space-y-4 pb-4">
                  {addresses.map((addr, index) => (
                    <div key={addr.id} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm relative">
                      {addr.isFromApi && index === 0 && (
                        <p className="mb-3 flex items-center gap-1 text-[11px] font-medium text-emerald-600">
                          <CheckCircle2 className="w-3 h-3" /> Địa chỉ đã tự động điền từ masothue.com
                        </p>
                      )}
                      
                      <button 
                        onClick={() => removeAddress(addr.id)}
                        className="absolute top-4 right-4 text-slate-300 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                      <div className="space-y-3 mt-1 pr-6">
                        {addr.isFromApi ? (
                          <ReadonlyField label="Tỉnh/Thành phố" value={addr.city} />
                        ) : (
                          <FieldNativeSelect
                            placeholder="Tỉnh/Thành phố"
                            required
                            value={addr.city}
                            options={VN_PROVINCES.map((p) => p.name)}
                            onChange={(v) => { updateAddress(addr.id, 'city', v); updateAddress(addr.id, 'ward', ''); }}
                          />
                        )}
                        
                        {addr.isFromApi ? (
                          <ReadonlyField label="Phường/Xã" value={addr.ward} />
                        ) : (
                          <FieldNativeSelect
                            placeholder="Phường/Xã"
                            required
                            value={addr.ward}
                            disabled={!addr.city}
                            options={VN_PROVINCES.find((p) => p.name === addr.city)?.wards ?? []}
                            onChange={(v) => updateAddress(addr.id, 'ward', v)}
                          />
                        )}

                        {addr.isFromApi ? (
                          <ReadonlyField label="Số nhà/Tên đường" value={addr.addressLine1} />
                        ) : (
                        <div className={`relative w-full rounded-xl border border-slate-200 focus-within:border-blue-400 ${addr.isFromApi ? 'bg-slate-50' : 'bg-white'}`}>
                          {addr.addressLine1 && (
                            <div className="absolute left-3.5 top-1.5 text-[11px] text-slate-400 pointer-events-none">
                              Số nhà/Tên đường
                            </div>
                          )}
                          <textarea
                            placeholder=""
                            rows={2}
                            value={addr.addressLine1}
                            onChange={(e) => updateAddress(addr.id, 'addressLine1', e.target.value)}
                            className={`w-full px-3.5 ${addr.addressLine1 ? 'pt-5 pb-1.5 font-medium' : 'py-3'} bg-transparent text-[13.5px] focus:outline-none resize-none ${addr.isFromApi ? 'text-slate-400' : 'text-slate-700'}`}
                          />
                          {!addr.addressLine1 && (
                            <div className="absolute left-3.5 top-3 text-[13.5px] text-slate-400 pointer-events-none">
                              Số nhà/Tên đường <span className="text-red-500">*</span>
                            </div>
                          )}
                        </div>
                        )}

                        {index === 0 ? (
                          <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
                            <label className="flex items-center gap-2.5 text-[13px] text-blue-700 font-medium cursor-pointer">
                              <input
                                type="checkbox"
                                checked={addr.isShipping}
                                onChange={(e) => updateAddress(addr.id, 'isShipping', e.target.checked)}
                                className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300 accent-blue-600"
                              />
                              Địa chỉ giao hàng
                            </label>
                          </div>
                        ) : (
                          <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
                            <span className="text-[13px] text-slate-700 font-medium px-1">Địa chỉ khác</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tab === 'lienhe' && (
              <div className="flex flex-col h-full bg-slate-50">
                <div className="flex justify-end mb-3">
                  <button
                    onClick={() => { setEditingContact(null); setShowAddContact(true); }}
                    className="px-3 py-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 font-semibold text-[13px] flex items-center gap-1 active:bg-blue-100"
                  >
                    <Plus className="w-4 h-4" /> Thêm mới
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto hide-scrollbar space-y-3 pb-10">
                  {contacts.map(contact => (
                    <div 
                      key={contact.id} 
                      className="flex items-start gap-3 p-3.5 bg-white border border-slate-200 rounded-xl shadow-sm cursor-pointer hover:border-blue-300"
                      onClick={() => { setEditingContact(contact); setShowAddContact(true); }}
                    >
                      <div className="flex-1 min-w-0">
                         <div className="flex items-center justify-between">
                           <span className="font-semibold text-slate-800 text-[14px] truncate">{contact.name}</span>
                           <span className="text-[11px] text-slate-500 font-medium px-1.5 py-0.5 bg-slate-100 rounded">{contact.id}</span>
                         </div>
                         <p className="text-[12.5px] text-slate-500 mt-1">{contact.title}</p>
                         <p className="text-[12px] text-slate-400 mt-1">{contact.phone} • {contact.email}</p>
                      </div>
                      <button 
                        onClick={(e) => { e.stopPropagation(); setContacts(contacts.filter(c => c.id !== contact.id)); }}
                        className="shrink-0 p-1.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-[18px] h-[18px]" />
                      </button>
                    </div>
                  ))}
                  {contacts.length === 0 && (
                    <div className="text-center text-slate-500 text-[13px] py-10 bg-white rounded-xl border border-slate-200 shadow-sm">
                      Chưa có người liên hệ nào.
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="shrink-0 p-4 border-t border-slate-100 bg-white z-10">
            <button
              onClick={handleSave}
              className="w-full py-3.5 rounded-xl font-semibold text-sm text-white shadow-md active:scale-[0.99] transition-transform"
              style={{ background: primaryButtonGradient }}
            >
              Tạo mới khách hàng
            </button>
          </div>
          
          <AddContactSlideOver 
            isOpen={showAddContact} 
            onClose={() => setShowAddContact(false)} 
            onSave={(data) => {
              if (editingContact) {
                setContacts(contacts.map(c => c.id === editingContact.id ? { ...c, ...data } : c));
              } else {
                setContacts([...contacts, { id: 'LH_' + Math.random().toString(36).substr(2, 5).toUpperCase(), ...data }]);
              }
              setShowAddContact(false);
            }} 
            initialData={editingContact}
          />
        </div>
  );
}
