import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SALES_APP_COLORS } from '../theme';
import { useAuth } from '../../auth/context/AuthContext';

const ASSET = '/sales-app/login';

/** Brand Vigo — giữ #1437d6 (layout Figma, màu brand project) */
const VIGO = SALES_APP_COLORS.boldBlue;
const TEXT_PRIMARY = '#18181b';
const TEXT_SECONDARY = '#6b7280';
const BORDER = '#e5e7eb';
const PLACEHOLDER = '#18181b';

/**
 * Màn Đăng nhập — bám Figma Salesman-Ver2
 * https://www.figma.com/design/G2wbdoQQMuWWXDhjopOa1x/Salesman-Ver2?node-id=8720-41739
 */
export function SalesAppLoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [employeeCode, setEmployeeCode] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const submit = () => {
    // Mock: chấp nhận mọi input — dùng authService admin/123456 nếu nhập đúng, còn không thì set session trực tiếp qua login fallback
    const result = login(employeeCode.trim() || 'admin', password || '123456', 'admin');
    if (!result.ok) {
      // Vẫn cho mock đăng nhập linh hoạt: ghi session + notify
      localStorage.setItem(
        'dms90_auth_session',
        JSON.stringify({
          username: employeeCode || 'admin',
          role: 'admin',
          displayName: 'Qin Qin',
          expiresAt: Date.now() + 24 * 60 * 60 * 1000,
        }),
      );
      window.dispatchEvent(new Event('dms90:auth-change'));
    }
    navigate('/sales-app/vieng-tham', { replace: true });
  };

  return (
    <div className="relative flex-1 min-h-0 flex flex-col overflow-hidden bg-white">
      {/* Decorative bg (Figma bg_item_report) */}
      <div className="pointer-events-none absolute right-0 top-[-70px] h-[312px] w-full">
        <img
          src={`${ASSET}/bg.png`}
          alt=""
          className="absolute inset-0 size-full object-cover opacity-40"
        />
      </div>

      {/* Top actions: Portal + headset */}
      <div className="absolute left-0 right-0 top-4 z-20 flex items-center justify-between px-6">
        <button
          type="button"
          onClick={() => navigate('/admin/dashboard')}
          className="text-[12px] font-normal leading-normal underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ color: VIGO, outlineColor: VIGO }}
        >
          Trở về Portal
        </button>
        <button type="button" className="size-6 flex items-center justify-center" aria-label="Hỗ trợ">
          <img src={`${ASSET}/headset.svg`} alt="" className="size-full object-contain" width={24} height={24} />
        </button>
      </div>

      {/* Main column */}
      <form
        className="relative z-10 flex flex-1 min-h-0 flex-col pt-[120px]"
        onSubmit={e => {
          e.preventDefault();
          submit();
        }}
      >
        <div className="flex w-full flex-col items-center gap-6 rounded-2xl bg-white/90 px-6">
          <div className="flex w-full flex-col items-center gap-6">
            <img
              src={`${ASSET}/logo.png`}
              alt="Eco salesman"
              className="h-[120px] w-[213px] object-contain"
              width={213}
              height={120}
            />

            <div className="flex w-full flex-col items-start gap-4">
              <p className="w-full text-center text-[14px] leading-[1.5] text-[#6b7280]">
                Đăng nhập với mã nhân viên của bạn
              </p>

              <label className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0" style={{ clip: 'rect(0,0,0,0)' }} htmlFor="sa-login-emp">
                Mã nhân viên
              </label>
              <input
                id="sa-login-emp"
                name="employeeCode"
                autoComplete="username"
                value={employeeCode}
                onChange={e => setEmployeeCode(e.target.value)}
                placeholder="Nhập mã nhân viên"
                className="h-[49px] w-full rounded border bg-white px-2 text-[14px] leading-[1.5] outline-none placeholder:text-[#18181b]"
                style={{ borderColor: BORDER, color: TEXT_PRIMARY }}
                onFocus={e => {
                  e.currentTarget.style.borderColor = VIGO;
                }}
                onBlur={e => {
                  e.currentTarget.style.borderColor = BORDER;
                }}
              />

              <div
                className="flex h-[49px] w-full items-center gap-1.5 rounded border bg-white px-2"
                style={{ borderColor: BORDER }}
              >
                <label className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0" style={{ clip: 'rect(0,0,0,0)' }} htmlFor="sa-login-pass">
                  Mật khẩu
                </label>
                <input
                  id="sa-login-pass"
                  name="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Nhập mật khẩu"
                  className="min-w-0 flex-1 bg-transparent text-[14px] leading-none tracking-[0.02em] outline-none placeholder:text-[#232628]"
                  style={{ color: PLACEHOLDER }}
                />
                <button
                  type="button"
                  className="size-6 shrink-0 overflow-hidden"
                  aria-label={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                  onClick={() => setShowPassword(v => !v)}
                >
                  <img src={`${ASSET}/eye.svg`} alt="" className="size-full object-contain" width={24} height={24} />
                </button>
              </div>

              <button
                type="button"
                className="flex w-full items-center gap-1"
                onClick={() => setRemember(v => !v)}
                aria-pressed={remember}
              >
                <span className="relative size-6 shrink-0 p-[3px]" aria-hidden>
                  {remember ? (
                    <svg width={18} height={18} viewBox="0 0 16 16" fill="none" className="block">
                      <path
                        d="M0 5.333C0 2.388 2.388 0 5.333 0h5.334C13.612 0 16 2.388 16 5.333v5.334C16 13.612 13.612 16 10.667 16H5.333C2.388 16 0 13.612 0 10.667V5.333Z"
                        fill={VIGO}
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.638 4.195a.75.75 0 0 1 0 1.06L6.97 9.92a.75.75 0 0 1-1.06 0L4.195 8.204a.75.75 0 1 1 1.06-1.06L6.44 8.327l4.138-4.132a.75.75 0 0 1 1.06 0Z"
                        fill="#fff"
                      />
                    </svg>
                  ) : (
                    <svg width={18} height={18} viewBox="0 0 16 16" fill="none" className="block">
                      <path
                        d="M0 5.333C0 2.388 2.388 0 5.333 0h5.334C13.612 0 16 2.388 16 5.333v5.334C16 13.612 13.612 16 10.667 16H5.333C2.388 16 0 13.612 0 10.667V5.333Z"
                        fill="#fff"
                      />
                      <path
                        d="M5.333.667h5.334A4.667 4.667 0 0 1 15.333 5.333v5.334A4.667 4.667 0 0 1 10.667 15.333H5.333A4.667 4.667 0 0 1 .667 10.667V5.333A4.667 4.667 0 0 1 5.333.667Z"
                        stroke="#B9C1C7"
                        strokeWidth={1.333}
                        fill="none"
                      />
                    </svg>
                  )}
                </span>
                <span className="text-[14px] leading-[1.5]" style={{ color: TEXT_PRIMARY }}>
                  Ghi nhớ mật khẩu
                </span>
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="flex h-12 w-full items-center justify-center rounded-lg px-4 text-[14px] font-medium leading-[1.5] text-white"
            style={{ background: VIGO }}
          >
            Đăng nhập
          </button>

          <div className="flex w-full flex-col items-center gap-1 text-center text-[14px] leading-[1.5]">
            <button type="button" className="bg-transparent" style={{ color: TEXT_PRIMARY }}>
              Quên mật khẩu?
            </button>
            <p style={{ color: TEXT_PRIMARY }}>
              Bạn chưa có tài khoản?{' '}
              <button type="button" className="bg-transparent font-medium" style={{ color: VIGO }}>
                Đăng ký
              </button>
            </p>
          </div>
        </div>

        <div className="mt-auto flex flex-col items-center gap-2 pb-6 text-center text-[14px] leading-[1.5]">
          <button
            type="button"
            className="bg-transparent underline underline-offset-2"
            style={{ color: VIGO }}
          >
            Chính sách và điều khoản sử dụng
          </button>
          <p style={{ color: TEXT_SECONDARY }}>v1.00 (29)</p>
        </div>
      </form>
    </div>
  );
}
