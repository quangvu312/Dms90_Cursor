import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ActionType = 'edit' | 'approve' | 'delete' | 'view';

const TITLES: Record<ActionType, string> = {
  edit: 'Chỉnh sửa',
  approve: 'Duyệt',
  delete: 'Xóa',
  view: 'Xem chi tiết',
};

function svgFill(d: string) {
  return (
    <svg viewBox="64 64 896 896" width="16" height="16" fill="currentColor" aria-hidden focusable="false">
      <path d={d} />
    </svg>
  );
}

/** Ant Design Outlined paths — copy từ Prototype/components/ActionIconButton/script.js */
const ICONS: Record<ActionType, ReactNode> = {
  edit: svgFill('M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z'),
  approve: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  delete: svgFill('M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-504-72h304v72H360v-72zm371.3 656H292.7l-24.2-512h487l-24.2 512z'),
  view: svgFill('M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z'),
};

const COLOR_TYPE: Record<ActionType, string> = {
  edit: 'edit',
  approve: 'approve',
  delete: 'delete',
  view: 'view',
};

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type: ActionType;
  title?: string;
}

/** React port of Prototype ActionIconButton — reuse `.dms-action-icon-btn*` CSS. */
export function ActionIconButton({ type, title, disabled, className = '', ...rest }: Props) {
  const label = title || TITLES[type];
  const colorType = COLOR_TYPE[type];
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      disabled={disabled}
      className={`dms-action-icon-btn dms-action-icon-btn--${colorType}${disabled ? ' is-disabled' : ''}${className ? ` ${className}` : ''}`}
      {...rest}
    >
      {ICONS[type]}
    </button>
  );
}

export function TableActions({ children }: { children: ReactNode }) {
  return <div className="dms-action-buttons">{children}</div>;
}
