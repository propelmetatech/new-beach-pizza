"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" }
];

const toastOrderHref =
  "https://order.toasttab.com/online/new-beach-pizza-llc-5411-seminole-boulevard";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-brand-primary/10 bg-white/90 backdrop-blur-xl">
        <div className="page-shell flex min-h-20 items-center justify-between gap-3 py-4 sm:gap-4">
          <Link href="/" className="flex min-w-0 items-center">
            <div className="relative h-16 w-[11.5rem] shrink-0 sm:h-20 sm:w-[16rem] md:h-24 md:w-[20rem]">
              <Image
                src="/assets/logos/logo.jpeg"
                alt="New Beach Pizza"
                fill
                priority
                sizes="(min-width: 768px) 320px, (min-width: 640px) 256px, 184px"
                className="object-contain"
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => {
              const baseHref = link.href.split("#")[0];
              const isActive =
                pathname === baseHref || (baseHref !== "/" && pathname.startsWith(baseHref));

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-extrabold uppercase tracking-[0.12em] transition ${
                    isActive
                      ? "bg-brand-primary/10 text-brand-primary"
                      : "text-brand-black hover:bg-brand-primary/10 hover:text-brand-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <a
              href={toastOrderHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-primary px-5 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-white shadow-lg shadow-brand-primary/20 transition hover:scale-105 hover:bg-brand-primaryDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent"
            >
              Order Now
            </a>
          </nav>

          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <a
              href={toastOrderHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex whitespace-nowrap rounded-full bg-brand-primary px-3 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white shadow-lg shadow-brand-primary/20 transition hover:scale-105 hover:bg-brand-primaryDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent sm:px-4 sm:py-2.5 sm:text-xs"
            >
              Order
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((current) => !current)}
              className="grid h-11 w-11 place-items-center rounded-full border border-black/10 text-brand-black transition hover:border-brand-primary/30 hover:bg-brand-primary/10 hover:text-brand-primary sm:h-12 sm:w-12"
              aria-label="Toggle navigation"
            >
              <span className="flex flex-col gap-1.5">
                <span className="h-0.5 w-5 bg-current" />
                <span className="h-0.5 w-5 bg-current" />
                <span className="h-0.5 w-5 bg-current" />
              </span>
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div className="border-t border-black/10 bg-white lg:hidden">
            <div className="page-shell grid gap-4 py-5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-extrabold uppercase tracking-[0.16em] text-brand-black"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
}
