interface ToggleProps {
  checked: boolean;
  onChange: (val: boolean) => void;
}

export function Toggle({ checked, onChange }: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      className={`dms-switch${checked ? ' is-checked' : ''}`}
      onClick={() => onChange(!checked)}
    >
      <span className="dms-switch__handle" />
    </button>
  );
}
