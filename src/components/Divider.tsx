export default function Divider({ className }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-5 py-1 ${className ?? ''}`}>
      <hr className="gold-rule flex-1 max-w-[4rem]" />
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="shrink-0"
        aria-hidden
      >
        <path
          d="M8 1 L9.2 6.8 L15 8 L9.2 9.2 L8 15 L6.8 9.2 L1 8 L6.8 6.8 Z"
          fill="var(--color-gold-muted)"
          opacity="0.7"
        />
      </svg>
      <hr className="gold-rule flex-1 max-w-[4rem]" />
    </div>
  );
}
