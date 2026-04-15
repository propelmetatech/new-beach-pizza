import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10 bg-brand-black text-white">
      <div className="page-shell flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-heading text-3xl leading-none">SEMINOLE favourites</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">
            A cleaner restaurant website focused on simple browsing, category-based discovery, and
            quick ordering.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/" className="pill-link !border-white/15 !bg-white/10 !text-white">
            Home
          </Link>
          <Link href="/contact" className="pill-link !border-white/15 !bg-white/10 !text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
