import Image from "next/image";
import { getProductPriceSummary } from "@/lib/menu";

export default function ProductCard({ product }) {
  const priceSummary = getProductPriceSummary(product);

  return (
    <article className="surface-card group overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-float">
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-sand">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-80" />
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h3 className="font-heading text-2xl uppercase leading-none text-brand-black sm:text-[1.7rem]">
            {product.name}
          </h3>
          {product.description ? (
            <p className="mt-3 text-sm leading-6 text-black/65">{product.description}</p>
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
        </div>
      </div>
    </article>
  );
}
