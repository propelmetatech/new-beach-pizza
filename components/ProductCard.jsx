import Image from "next/image";
import { getProductPriceSummary } from "@/lib/menu";

export default function ProductCard({ product, index = 0 }) {
  const priceSummary = getProductPriceSummary(product);

  return (
    <article
      className="surface-card group animate-fade-up overflow-hidden border border-brand-secondary/10 transition duration-500 hover:-translate-y-2 hover:shadow-float"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-black">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-[1deg]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {product.tag ? <span className="feature-badge">{product.tag}</span> : null}
          {product.featured ? (
            <span className="rounded-full bg-brand-accent px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-black shadow-lg shadow-brand-black/10">
              Featured
            </span>
          ) : null}
        </div>
      </div>

      <div className="space-y-4 p-5 sm:p-6">
        <div>
          {product.categoryName ? (
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-brand-primary/75">
              {product.categoryName}
            </p>
          ) : null}
          <h3 className="brand-title mt-3 font-heading text-2xl uppercase leading-none sm:text-[1.75rem]">
            {product.name}
          </h3>
          {product.description ? (
            <p className="mt-3 text-sm leading-6 text-black/68">{product.description}</p>
          ) : null}
          {product.note ? (
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-black/45">
              {product.note}
            </p>
          ) : null}
        </div>

        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-heading text-3xl uppercase leading-none text-brand-black">
              {priceSummary.label}
            </p>
            {priceSummary.helper ? (
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-black/40">
                {priceSummary.helper}
              </p>
            ) : null}
          </div>
          <div className="grid h-12 w-12 place-items-center rounded-full bg-brand-secondary text-[10px] font-extrabold uppercase tracking-[0.14em] text-white shadow-lg shadow-brand-secondary/20 transition duration-300 group-hover:-translate-y-1 group-hover:scale-105">
            Fresh
          </div>
        </div>
      </div>
    </article>
  );
}
