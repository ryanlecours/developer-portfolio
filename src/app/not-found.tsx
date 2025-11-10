// src/app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 px-6 text-center text-neutral-100">
      <div className="max-w-md">
        <h1 className="text-7xl font-bold text-emerald-400">404</h1>
        <h2 className="mt-3 text-2xl font-semibold">Page Not Found</h2>
        <p className="mt-2 text-neutral-400">
          Sorry — the page you’re looking for doesn’t exist or may have been
          moved.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-xl bg-emerald-400 px-4 py-2 text-sm font-medium text-neutral-950 transition hover:bg-emerald-300"
          >
            Go Home
          </Link>
          <a
            href="mailto:hello@ryanlecours.dev"
            className="rounded-xl border border-white/15 px-4 py-2 text-sm text-neutral-200 transition hover:border-white/25 hover:bg-white/5"
          >
            Contact
          </a>
        </div>
      </div>

      <footer className="mt-10 text-xs text-neutral-600">
        © {new Date().getFullYear()} Ryan LeCours
      </footer>
    </main>
  );
}
