const base = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

export const PhoneIcon = ({ size = 16 }: { size?: number }) => (
  <svg {...base} width={size} height={size}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg>
);
export const ArrowUpRight = () => (
  <svg {...base} width={12} height={12}><path d="M7 17 17 7M8 7h9v9" /></svg>
);
export const CheckIcon = () => (
  <svg {...base} width={14} height={14}><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
);
export const ShieldIcon = () => (
  <svg {...base} width={18} height={18}><path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3z" /><path d="M12 8v5M12 16v.01" /></svg>
);
export const PinIcon = () => (
  <svg {...base} width={18} height={18}><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
);
export const ClockIcon = () => (
  <svg {...base} width={18} height={18}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const ChevronDown = () => (
  <svg {...base} width={14} height={14}><path d="m6 9 6 6 6-6" /></svg>
);
export const ArrowsH = () => (
  <svg {...base} width={14} height={14}><path d="M4 12h16M8 8l-4 4 4 4M16 8l4 4-4 4" /></svg>
);
