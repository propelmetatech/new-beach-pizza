import Link from "next/link";

export default function CategorySection({
  id,
  eyebrow,
  title,
  description,
  actionHref,
  actionLabel,
  children
}) {
  return (
    <section id={id} className="page-shell pt-12">
      <div className="mb-6 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand-secondary">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="brand-title mt-3 font-heading text-4xl uppercase leading-none sm:text-5xl">
            {title}
          </h2>
          <div className="mt-4 h-1.5 w-24 rounded-full bg-brand-primary" />
          {description ? (
            <p className="mt-4 max-w-2xl text-base leading-7 text-black/65">{description}</p>
          ) : null}
        </div>

        {actionHref && actionLabel ? (
          <Link href={actionHref} className="pill-link">
            {actionLabel}
          </Link>
        ) : null}
      </div>
      {children}
    </section>
  );
}
