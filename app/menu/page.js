import Image from "next/image";
import CategorySection from "@/components/CategorySection";
import ProductCard from "@/components/ProductCard";
import { MENU_GALLERY_IMAGES, getMenuCategories } from "@/lib/menu";

export const metadata = {
  title: "Menu"
};

export default function MenuPage() {
  const categories = getMenuCategories();
  const totalItems = categories.reduce((total, category) => total + category.items.length, 0);
  const heroImage = categories[0]?.coverImage || MENU_GALLERY_IMAGES[0];
  const highlightedCategories = categories.slice(0, 3);

  return (
    <div className="pb-16">
      <section className="page-shell pt-6">
        <div className="surface-card overflow-hidden border border-brand-secondary/10">
          <div className="grid gap-0 xl:grid-cols-[0.96fr,1.04fr]">
            <div className="relative overflow-hidden p-6 sm:p-8 lg:p-10">
              <div className="absolute -left-12 top-0 h-40 w-40 rounded-full bg-brand-accent/25 blur-3xl animate-float-soft" />
              <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-brand-secondary/12 blur-3xl" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.92),transparent_42%)]" />

              <div className="relative max-w-2xl animate-fade-up">
                <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand-secondary">
                  Full Menu
                </p>
                <h1 className="brand-title mt-4 max-w-2xl font-heading text-4xl uppercase leading-none sm:text-5xl md:text-6xl">
                  Explore every category in one polished menu.
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-7 text-black/72">
                  Scroll the full board, jump between categories, and browse every item with real
                  food photos instead of placeholders.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div className="animate-fade-up rounded-[24px] border border-brand-primary/10 bg-white/78 p-4 shadow-sm backdrop-blur-sm">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-brand-primary/70">
                      Categories
                    </p>
                    <p className="mt-2 font-heading text-3xl uppercase leading-none text-brand-black">
                      {categories.length}
                    </p>
                  </div>
                  <div
                    className="animate-fade-up rounded-[24px] border border-brand-primary/10 bg-white/78 p-4 shadow-sm backdrop-blur-sm"
                    style={{ animationDelay: "90ms" }}
                  >
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-brand-primary/70">
                      Menu Items
                    </p>
                    <p className="mt-2 font-heading text-3xl uppercase leading-none text-brand-black">
                      {totalItems}
                    </p>
                  </div>
                  <div
                    className="animate-fade-up rounded-[24px] border border-brand-primary/10 bg-white/78 p-4 shadow-sm backdrop-blur-sm"
                    style={{ animationDelay: "180ms" }}
                  >
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-brand-primary/70">
                      Fresh Daily
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-brand-black">
                      Pizza, pasta, wings, subs, snacks, and more.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <a key={category.id} href={`#${category.id}`} className="menu-chip">
                      {category.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="photo-spotlight relative min-h-[340px] bg-brand-black">
              <Image
                src={heroImage}
                alt="SEMINOLE favourites menu overview"
                fill
                priority
                sizes="(min-width: 1280px) 640px, 100vw"
                className="object-cover animate-pan-slow"
              />
              <div className="absolute left-5 top-5 z-10 grid gap-3">
                {highlightedCategories.map((category, index) => (
                  <div
                    key={category.id}
                    className="animate-fade-up rounded-full border border-white/15 bg-black/30 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-white backdrop-blur-md"
                    style={{ animationDelay: `${120 + index * 90}ms` }}
                  >
                    {category.title}
                  </div>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 z-10 p-6 text-white sm:p-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-white/72">
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
        {categories.map((category, categoryIndex) => (
          <CategorySection
            key={category.id}
            id={category.id}
            eyebrow="Category"
            title={category.title}
            description={category.description}
          >
            <div className="mb-7 grid gap-4 lg:grid-cols-[0.92fr,1.08fr]">
              <div className="surface-card animate-fade-up overflow-hidden border border-brand-secondary/10 p-6 sm:p-7">
                <div className="flex flex-wrap gap-3">
                  <span className="feature-badge">{category.items.length} items</span>
                  {category.pricingNote ? (
                    <span className="rounded-full bg-brand-accent px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-brand-black shadow-lg shadow-brand-accent/20">
                      {category.pricingNote}
                    </span>
                  ) : null}
                </div>

                <p className="mt-5 text-sm leading-7 text-black/68 sm:text-base">
                  {category.heroCopy || category.description || "Browse the items in this category."}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {category.items.slice(0, 4).map((item) => (
                    <span
                      key={item.id}
                      className="rounded-full bg-brand-cream px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-black/80"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="surface-card photo-spotlight animate-fade-up overflow-hidden border border-brand-secondary/10"
                style={{ animationDelay: `${80 + categoryIndex * 20}ms` }}
              >
                <div className="relative min-h-[260px] bg-brand-black">
                  <Image
                    src={category.coverImage}
                    alt={category.title}
                    fill
                    sizes="(min-width: 1024px) 720px, 100vw"
                    className="object-cover animate-pan-slow"
                  />
                  <div className="absolute bottom-5 left-5 z-10 max-w-[280px] rounded-[26px] border border-white/15 bg-black/35 p-4 text-white backdrop-blur-md">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-white/72">
                      Menu Section
                    </p>
                    <p className="mt-2 font-heading text-3xl uppercase leading-none">
                      {category.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {category.items.map((item, index) => (
                <ProductCard key={item.id} product={item} index={index} />
              ))}
            </div>
          </CategorySection>
        ))}
      </div>
    </div>
  );
}
