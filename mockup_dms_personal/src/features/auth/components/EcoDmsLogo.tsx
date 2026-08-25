export function EcoDmsLogo() {
  return (
    <div className="flex items-center justify-center gap-2.5 mb-1">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md flex-shrink-0"
        style={{ background: 'linear-gradient(135deg, #f59e0b, #f97316)' }}
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
          <path d="M12 3L3 7.5V16.5L12 21L21 16.5V7.5L12 3Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M3 7.5L12 12L21 7.5" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
          <line x1="12" y1="12" x2="12" y2="21" stroke="white" strokeWidth="1.8" />
        </svg>
      </div>
      <span className="text-2xl font-bold" style={{ color: '#1e3a5f', letterSpacing: '0.12em' }}>
        ecodms
      </span>
    </div>
  );
}
