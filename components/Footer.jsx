import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10 bg-brand-black text-white">
      <div className="page-shell grid gap-10 py-12 md:grid-cols-[1.15fr,1fr,0.75fr] md:items-start">
        <div>
          <div className="relative h-20 w-52">
            <Image
              src="/assets/logos/logo.jpeg"
              alt="New Beach Pizza"
              fill
              sizes="208px"
              className="object-contain object-left"
            />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">
            Fresh pizza, subs, wings, salads, and beach-style favorites served right here in
            Seminole.
          </p>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-brand-accent">
            Contact
          </p>
          <div className="mt-5 space-y-3 text-sm font-semibold leading-6 text-white/80">
            <p>
              New Beach Pizza
              <br />
              5411 Seminole Blvd
              <br />
              Seminole, FL 33772
            </p>
            <p>
              <a className="transition hover:text-brand-accent" href="tel:+17278002888">
                727 800 2888
              </a>
            </p>
            <p>
              <a
                className="break-words transition hover:text-brand-accent"
                href="mailto:Pizzainseminole@gmail.com"
              >
                Pizzainseminole@gmail.com
              </a>
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap gap-3 md:justify-end" aria-label="Footer navigation">
          <Link href="/" className="pill-link !border-white/15 !bg-white/10 !text-white">
            Home
          </Link>
          <Link href="/contact" className="pill-link !border-white/15 !bg-white/10 !text-white">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
