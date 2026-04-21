const gmbHref =
  "https://www.google.com/search?q=New+Beach+Pizza+5411+Seminole+Blvd+Seminole%2C+FL+33772&oq=New+Beach+Pizza+5411+Seminole+Blvd+Seminole%2C+FL+33772&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABiABBiiBDIKCAIQABiABBiiBDIKCAMQABiABBiiBNIBCDExMDhqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/new_beach_pizza?igsh=dmlpejZweXdlOGI1",
    className: "bg-brand-secondary text-white",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M7.8 2h8.4A5.81 5.81 0 0 1 22 7.8v8.4a5.81 5.81 0 0 1-5.8 5.8H7.8A5.81 5.81 0 0 1 2 16.2V7.8A5.81 5.81 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
        />
      </svg>
    )
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1GbotgQqyt/",
    className: "bg-brand-primary text-white",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M14 8.5V7.25c0-.6.4-.75.7-.75H16V3.65A18.6 18.6 0 0 0 13.7 3C11.42 3 10 4.39 10 6.9v1.6H7.5V12H10v9h3.5v-9h2.45l.4-3.5H13.5Z"
        />
      </svg>
    )
  },
  {
    label: "Threads",
    href: "https://www.threads.com/@new_beach_pizza",
    className: "bg-brand-green text-white",
    icon: <span className="text-[23px] font-semibold leading-none">@</span>
  },
  {
    label: "X",
    href: "https://x.com/new_beach_pizza",
    className: "bg-brand-black text-white",
    icon: <span className="text-base font-bold leading-none">X</span>
  },
  {
    label: "Google Business",
    href: gmbHref,
    className: "border border-brand-primary/20 bg-white text-brand-primary",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M12 2.5a6.9 6.9 0 0 0-6.9 6.9c0 4.98 6.16 11.35 6.42 11.62a.68.68 0 0 0 .96 0c.26-.27 6.42-6.64 6.42-11.62A6.9 6.9 0 0 0 12 2.5Zm0 9.56a2.66 2.66 0 1 1 0-5.32 2.66 2.66 0 0 1 0 5.32Z"
        />
      </svg>
    )
  }
];

export default function SocialRail() {
  return (
    <aside
      aria-label="Social links"
      className="fixed right-0 top-1/2 z-[60] flex -translate-y-1/2 rounded-l-[24px] border border-brand-primary/15 bg-brand-cream/95 px-2.5 py-6 shadow-float backdrop-blur-sm sm:px-3 sm:py-7"
    >
      <div className="flex flex-col items-center gap-4 sm:gap-5">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            title={link.label}
            className={`group relative grid h-10 w-10 place-items-center rounded-full shadow-md shadow-black/15 transition hover:-translate-x-1 hover:scale-105 hover:ring-2 hover:ring-brand-accent/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent sm:h-12 sm:w-12 ${link.className}`}
          >
            {link.icon}
            <span className="pointer-events-none absolute right-[calc(100%+12px)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-brand-black px-3 py-1.5 text-xs font-bold text-white opacity-0 shadow-lg transition group-hover:block group-hover:opacity-100 group-focus-visible:block group-focus-visible:opacity-100">
              {link.label}
            </span>
          </a>
        ))}
      </div>
    </aside>
  );
}
