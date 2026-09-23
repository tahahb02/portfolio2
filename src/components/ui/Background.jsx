export default function Background() {
  return (
    <div className="fixed inset-0 z-[0] pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 technical-grid" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 42% at 78% -5%, var(--glow), transparent 70%), radial-gradient(45% 36% at 8% 105%, var(--glow), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E\")",
        }}
      />
      <div
        className="absolute left-6 top-6 h-4 w-4 border-l border-t border-(--border-strong)"
        style={{ opacity: 0.5 }}
      />
      <div
        className="absolute right-6 top-6 h-4 w-4 border-r border-t border-(--border-strong)"
        style={{ opacity: 0.5 }}
      />
      <div
        className="absolute left-6 bottom-6 h-4 w-4 border-l border-b border-(--border-strong)"
        style={{ opacity: 0.5 }}
      />
      <div
        className="absolute right-6 bottom-6 h-4 w-4 border-r border-b border-(--border-strong)"
        style={{ opacity: 0.5 }}
      />
    </div>
  );
}