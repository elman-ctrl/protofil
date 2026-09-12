'use client';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-paper px-6 text-center text-ink">
      <h1 className="text-2xl font-extrabold">Something went wrong</h1>
      <p className="max-w-md text-slate">
        The portfolio page failed to render. You can retry, or check that the
        API is running.
      </p>
      <button type="button" onClick={reset} className="btn btn-primary chamfer-sm">
        Try again
      </button>
    </div>
  );
}
