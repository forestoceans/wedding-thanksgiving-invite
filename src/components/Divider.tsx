export default function Divider({ className }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 py-2 ${className ?? ''}`}>
      <span className="block h-px w-12 bg-gold/30" />
      <span className="text-gold text-xs tracking-widest">❀</span>
      <span className="block h-px w-12 bg-gold/30" />
    </div>
  );
}
