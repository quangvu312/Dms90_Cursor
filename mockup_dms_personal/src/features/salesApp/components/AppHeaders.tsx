import type { ReactNode } from 'react';
import { ChevronLeft, User } from 'lucide-react';
import { headerGradient } from '../theme';
import { CURRENT_USER } from '../mockData';

type ScreenHeaderProps = {
  title: string;
  onBack?: () => void;
  right?: ReactNode;
  /** Căn title khi không có nút phải — giữ cân đối với nút back */
  balanceBack?: boolean;
  /**
   * white = Figma form nav (mặc định)
   * gradient = tab Báo cáo / header brand app (Hand-off solid)
   */
  variant?: 'white' | 'gradient';
};

/**
 * Header tiêu đề.
 * - white: Figma Navigation bar (18 Bold, nền trắng)
 * - gradient: AppHeader solid Hand-off (chữ trắng trên brand gradient)
 */
export function ScreenHeader({
  title,
  onBack,
  right,
  balanceBack = true,
  variant = 'white',
}: ScreenHeaderProps) {
  const isGradient = variant === 'gradient';

  return (
    <header
      className={`shrink-0 px-4 ${isGradient ? 'pt-2 pb-3' : 'border-b border-[#e5e7eb]'}`}
      style={isGradient ? { background: headerGradient } : { background: '#ffffff' }}
    >
      <div className={`flex items-center gap-2 ${isGradient ? 'min-h-11' : 'min-h-14'}`}>
        {onBack ? (
          <button
            type="button"
            onClick={onBack}
            className={`w-11 h-11 -ml-2 flex items-center justify-center rounded-lg focus-visible:outline focus-visible:outline-2 ${
              isGradient ? 'text-white focus-visible:outline-white' : 'text-[#1f2937] focus-visible:outline-[#1437d6]'
            }`}
            aria-label="Quay lại"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        ) : balanceBack ? (
          <span className="w-11 h-11 shrink-0" aria-hidden />
        ) : null}
        <h1
          className={`flex-1 text-center font-bold text-[18px] leading-[1.5] m-0 truncate ${
            isGradient ? 'text-white' : 'text-[#1f2937]'
          }`}
        >
          {title}
        </h1>
        {right ?? (balanceBack || onBack ? <span className="w-11 h-11 shrink-0" aria-hidden /> : null)}
      </div>
    </header>
  );
}

type ProfileHeaderProps = {
  workdayStart?: string;
  onEndWorkday?: () => void;
};

/**
 * Header profile + ngày công — tab Khác (giữ gradient; typography Hand-off).
 */
export function ProfileHeader({
  workdayStart = '14:49:14',
  onEndWorkday,
}: ProfileHeaderProps) {
  return (
    <header className="shrink-0 px-4 pt-3 pb-4" style={{ background: headerGradient }}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <User className="w-5 h-5 text-white" aria-hidden />
          </div>
          <div className="min-w-0">
            <p className="text-white text-[14px] font-medium leading-normal truncate m-0">
              {CURRENT_USER.name}
            </p>
            <p className="text-[#bfdbfe] text-[12px] font-normal leading-normal truncate m-0">
              {CURRENT_USER.code}
            </p>
          </div>
        </div>
        <div className="text-right shrink-0">
          <p className="text-[#bfdbfe] text-[11px] font-normal leading-normal m-0">
            Bắt đầu lúc {workdayStart}
          </p>
          <button
            type="button"
            onClick={onEndWorkday}
            className="mt-1 px-3 py-1.5 rounded-lg bg-white text-[12px] font-normal text-[#334155] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Kết thúc ngày công
          </button>
        </div>
      </div>
    </header>
  );
}
