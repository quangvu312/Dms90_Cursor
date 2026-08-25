import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScreenHeader } from './AppHeaders';
import { SALES_APP_COLORS } from '../theme';
import { useAuth } from '../../auth/context/AuthContext';

const ASSET = '/sales-app/settings';
const APP_VERSION = '1.0.00';

type DialogKind = 'logout' | 'delete' | null;

type SettingsRow = {
  key: string;
  label: string;
  icon: string;
  badge?: string;
  danger?: boolean;
  action: 'password' | 'notify' | 'version' | 'logout' | 'delete';
};

const ROWS: SettingsRow[] = [
  { key: 'password', label: 'Đổi mật khẩu', icon: 'icon-security.svg', action: 'password' },
  { key: 'notify', label: 'Cài đặt thông báo', icon: 'icon-bell.svg', action: 'notify' },
  { key: 'version', label: 'Phiên bản ứng dụng', icon: 'icon-mobile.svg', badge: 'Mới', action: 'version' },
  { key: 'logout', label: 'Đăng xuất', icon: 'icon-logout.svg', action: 'logout' },
  { key: 'delete', label: 'Xoá tài khoản', icon: 'icon-delete.svg', danger: true, action: 'delete' },
];

/**
 * Cài đặt ứng dụng — Figma Salesman-Ver2 8655:2521
 * + Đăng xuất / Xoá tài khoản (xác nhận → về login)
 */
export function SettingsPage() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [dialog, setDialog] = useState<DialogKind>(null);
  const [toast, setToast] = useState('');

  const showToast = (msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(''), 2200);
  };

  /** Đăng xuất SM → luôn về login SM (không sang portal) */
  const clearSessionAndGoLogin = () => {
    logout();
    setDialog(null);
    navigate('/sales-app/login', { replace: true });
  };

  const onRow = (row: SettingsRow) => {
    if (row.action === 'logout') {
      setDialog('logout');
      return;
    }
    if (row.action === 'delete') {
      setDialog('delete');
      return;
    }
    if (row.action === 'version') {
      showToast(`Phiên bản hiện tại: ${APP_VERSION}`);
      return;
    }
    showToast('Chức năng đang được bổ sung trong mockup');
  };

  return (
    <div className="relative flex-1 min-h-0 flex flex-col bg-white">
      <ScreenHeader
        title="Cài đặt ứng dụng"
        variant="gradient"
        onBack={() => navigate('/sales-app/khac')}
      />

      <div className="flex-1 min-h-0 overflow-y-auto hide-scrollbar px-3 pt-2 pb-8">
        <div className="flex flex-col">
          {ROWS.map((row, idx) => {
            const isLast = idx === ROWS.length - 1;
            return (
              <button
                key={row.key}
                type="button"
                onClick={() => onRow(row)}
                className={`flex w-full items-center gap-1.5 py-3 text-left bg-transparent border-0 ${
                  isLast ? '' : 'border-b border-[#e5e7eb]'
                } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px]`}
                style={{ outlineColor: SALES_APP_COLORS.boldBlue }}
              >
                <span className="relative size-5 shrink-0 overflow-hidden" aria-hidden>
                  <img
                    src={`${ASSET}/${row.icon}`}
                    alt=""
                    className="size-full object-contain"
                    width={20}
                    height={20}
                    style={row.danger ? { filter: 'none' } : undefined}
                  />
                </span>
                <span
                  className="min-w-0 flex-1 text-[14px] font-normal leading-[1.5]"
                  style={{ color: row.danger ? '#ef4444' : '#18181b' }}
                >
                  {row.label}
                </span>
                {row.badge ? (
                  <span className="shrink-0 rounded px-1.5 bg-[#ef4444] text-[14px] font-bold leading-[1.5] text-white">
                    {row.badge}
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>

        <p className="mt-10 text-center text-[14px] font-normal leading-[1.5] text-[#6b7280] m-0">
          Phiên bản {APP_VERSION}
        </p>
      </div>

      {dialog ? (
        <div
          className="absolute inset-0 z-30 flex items-end justify-center bg-black/40 px-4 pb-8"
          role="presentation"
          onClick={() => setDialog(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="sa-settings-dialog-title"
            className="w-full max-w-[358px] rounded-2xl bg-white p-5 shadow-xl"
            onClick={e => e.stopPropagation()}
          >
            <h2
              id="sa-settings-dialog-title"
              className="m-0 text-center text-[16px] font-medium leading-normal text-[#18181b]"
            >
              {dialog === 'logout' ? 'Đăng xuất?' : 'Xoá tài khoản?'}
            </h2>
            <p className="mt-2 mb-0 text-center text-[14px] font-normal leading-[1.5] text-[#6b7280]">
              {dialog === 'logout'
                ? 'Bạn sẽ cần đăng nhập lại để tiếp tục sử dụng ứng dụng.'
                : 'Tài khoản sẽ bị xoá khỏi phiên mockup. Thao tác này không thể hoàn tác trong demo.'}
            </p>
            <div className="mt-5 flex gap-3">
              <button
                type="button"
                className="flex-1 min-h-11 rounded-lg bg-[#f3f4f6] text-[14px] font-medium text-[#374151]"
                onClick={() => setDialog(null)}
              >
                Hủy
              </button>
              <button
                type="button"
                className="flex-1 min-h-11 rounded-lg text-[14px] font-medium text-white"
                style={{
                  background: dialog === 'logout' ? SALES_APP_COLORS.boldBlue : '#ef4444',
                }}
                onClick={() => {
                  if (dialog === 'logout') {
                    clearSessionAndGoLogin();
                    return;
                  }
                  clearSessionAndGoLogin();
                }}
              >
                {dialog === 'logout' ? 'Đăng xuất' : 'Xoá tài khoản'}
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {toast ? (
        <div
          className="pointer-events-none absolute bottom-6 left-1/2 z-40 max-w-[85%] -translate-x-1/2 rounded-lg bg-[#1f2937]/92 px-3 py-2 text-center text-[13px] text-white"
          role="status"
        >
          {toast}
        </div>
      ) : null}
    </div>
  );
}
