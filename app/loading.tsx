export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background dark:bg-dark-bg">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-border border-t-accent" />
        <p className="text-xs uppercase tracking-widest text-secondary">Loading</p>
      </div>
    </div>
  );
}
