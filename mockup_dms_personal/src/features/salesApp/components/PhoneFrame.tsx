import type { ReactNode } from 'react';

interface PhoneFrameProps {
  children: ReactNode;
  statusTime?: string;
  showLocationArrow?: boolean;
  battery?: string;
}

export function PhoneFrame({ children, statusTime = '14:49', showLocationArrow = false, battery = '69' }: PhoneFrameProps) {
  return (
    <div
      className="hide-scrollbar relative mx-auto flex flex-col overflow-hidden bg-white"
      style={{
        width: 390,
        height: 844,
        borderRadius: 40,
        boxShadow: '0 0 0 10px #111827, 0 20px 60px rgba(0,0,0,0.35)',
        fontFamily: '"Helvetica Neue", Helvetica, Arial, ui-sans-serif, system-ui, sans-serif',
        fontSynthesis: 'none',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      {/* Status bar */}
      <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[15px] font-semibold text-slate-900 shrink-0 z-20 bg-transparent">
        <span>{statusTime}</span>
        <div className="flex items-center gap-1.5">
          {showLocationArrow && <span className="text-[13px]">➤</span>}
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none"><rect x="0" y="7" width="3" height="5" rx="0.5" fill="currentColor"/><rect x="5" y="5" width="3" height="7" rx="0.5" fill="currentColor"/><rect x="10" y="2" width="3" height="10" rx="0.5" fill="currentColor"/><rect x="15" y="0" width="3" height="12" rx="0.5" fill="currentColor"/></svg>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M8 2C10.5 2 12.7 3 14 4.5L15.2 3.2C13.5 1.3 10.9 0 8 0C5.1 0 2.5 1.3 0.8 3.2L2 4.5C3.3 3 5.5 2 8 2Z" fill="currentColor"/><path d="M8 5.5C9.5 5.5 10.8 6.1 11.7 7L8 11L4.3 7C5.2 6.1 6.5 5.5 8 5.5Z" fill="currentColor"/></svg>
          <div className="flex items-center gap-0.5">
            <div className="relative border border-slate-900 rounded-[3px] w-[22px] h-[11px] flex items-center px-[1.5px]">
              <div className="bg-slate-900 rounded-[1px]" style={{ width: `${(Number(battery) / 100) * 17}px`, height: 7 }} />
            </div>
            <span className="text-[10px] ml-0.5">{battery}</span>
          </div>
        </div>
      </div>

      <div className="flex-1 min-h-0 flex flex-col">{children}</div>

      {/* Home indicator */}
      <div className="shrink-0 flex justify-center py-2 bg-white">
        <div className="w-32 h-1 rounded-full bg-slate-900" />
      </div>

      {/* Version badge (matches reference screenshots) */}
      <div className="absolute bottom-16 right-3 bg-slate-700/90 text-white text-[9px] leading-tight text-center rounded-md px-2 py-1 shadow-lg">
        VG<br />v1.0
      </div>
    </div>
  );
}
