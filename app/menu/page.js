import Image from "next/image";
import CategorySection from "@/components/CategorySection";
import ProductCard from "@/components/ProductCard";
import { getMenuCategories } from "@/lib/menu";

export const metadata = {
  title: "Menu"
};

export default function MenuPage() {
  const categories = getMenuCategories();

  return (
    <div className="pb-16">
      <section className="page-shell pt-6">
        <div className="surface-card overflow-hidden">
          <div className="grid gap-0 xl:grid-cols-[1.02fr,0.98fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand-secondary">
                Full Menu
              </p>
              <h1 className="mt-4 max-w-2xl font-heading text-4xl uppercase leading-none text-brand-black sm:text-5xl">
                Explore every category in one simple menu.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-black/70">
                Browse by category and open any item for details.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {categories.map((category) => (
                  <a key={category.id} href={`#${category.id}`} className="menu-chip">
                    {category.title}
                  </a>
                ))}
              </div>
            </div>
            <div className="relative min-h-[320px] bg-brand-black">
              <Image
                src="/images/hero-pizza.svg"
                alt="SEMINOLE favourites menu overview"
                fill
                priority
                className="object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/45 via-brand-secondary/20 to-brand-black/70" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-white/70">
                  Menu Overview
                </p>
                <h2 className="mt-3 font-heading text-3xl uppercase leading-none sm:text-4xl">
                  Salads, shrimp, pies, pasta, wings, wraps, burgers, desserts, and subs.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-shell pt-8 space-y-8">
        {categories.map((category) => (
          <CategorySection
            key={category.id}
            id={category.id}
            eyebrow="Category"
            title={category.title}
            description={category.description}
          >
            <div className="mb-6 overflow-hidden rounded-[28px] border border-black/10 bg-white">
              <div className="grid gap-0 md:grid-cols-[220px,1fr]">
                <div className="relative min-h-[180px] bg-brand-sand">
                  <Image src={category.coverImage} alt={category.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-3">
                    <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-secondary">
                      {category.items.length} items
                    </p>
                    {category.pricingNote ? (
                      <span className="rounded-full bg-brand-primary/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-brand-primary">
                        {category.pricingNote}
                      </span>
                    ) : null}
                  </div>
                  <h2 className="mt-3 font-heading text-4xl uppercase leading-none text-brand-black">
                    {category.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-black/65 sm:text-base">
                    {category.heroCopy || category.description || "Browse the items in this category."}
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {category.items.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </CategorySection>
        ))}
      </div>
    </div>
  );
}
