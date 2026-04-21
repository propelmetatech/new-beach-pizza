"use client";

import { startTransition, useState } from "react";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";

export default function HomeCategoryExplorer({ categories }) {
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0]?.id ?? "");
  const activeCategory =
    categories.find((category) => category.id === activeCategoryId) ?? categories[0] ?? null;

  if (!activeCategory) {
    return null;
  }

  const highlightedItems = activeCategory.items.slice(0, 3);

  return (
    <div className="pb-16">
      <div className="category-rail-shell sticky top-20 z-40 border-b border-black/10 backdrop-blur-xl">
        <div className="page-shell relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-10 bg-gradient-to-r from-white/95 to-transparent sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-10 bg-gradient-to-l from-white/95 to-transparent sm:block" />
        </div>
        <div className="category-rail page-shell overflow-x-auto">
          <div className="flex w-max min-w-full items-center gap-5 py-4 sm:gap-6">
            {categories.map((category, index) => {
              const isActive = category.id === activeCategory.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() =>
                    startTransition(() => {
                      setActiveCategoryId(category.id);
                    })
                  }
                  className={`relative whitespace-nowrap rounded-full px-1 pb-2 pt-1 text-sm font-extrabold uppercase tracking-[0.14em] transition ${
                    isActive ? "text-brand-black" : "text-brand-black/60 hover:text-brand-primary"
                  }`}
                >
                  <span className="mr-2 text-[10px] text-brand-primary/60">0{index + 1}</span>
                  {category.title}
                  <span
                    className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-brand-primary transition-all ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <section className="page-shell pt-6">
        <div className="surface-card overflow-hidden border border-brand-secondary/10">
          <div key={activeCategory.id} className="grid gap-0 xl:grid-cols-[0.95fr,1.05fr]">
            <div className="relative overflow-hidden p-6 sm:p-8 lg:p-10">
              <div className="absolute -left-12 top-0 h-40 w-40 rounded-full bg-brand-accent/25 blur-3xl animate-float-soft" />
              <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-brand-secondary/12 blur-3xl" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.92),transparent_42%)]" />

              <div className="relative max-w-2xl animate-fade-up">
                <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-secondary">
                  SEMINOLE favourites
                </p>
                <h1 className="brand-title mt-4 font-heading text-4xl uppercase leading-[0.92] sm:text-5xl md:text-6xl">
                  {activeCategory.title}
                </h1>
                <p className="mt-5 max-w-xl text-base leading-8 text-black/72 sm:text-lg">
                  {activeCategory.description || "Freshly prepared menu favorites in this section."}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full bg-brand-secondary px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-white shadow-lg shadow-brand-secondary/20">
                    {activeCategory.items.length} items
                  </span>
                  {activeCategory.pricingNote ? (
                    <span className="rounded-full bg-brand-accent px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-brand-black shadow-lg shadow-brand-accent/20">
                      {activeCategory.pricingNote}
                    </span>
                  ) : null}
                </div>

                {highlightedItems.length ? (
                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {highlightedItems.map((item, index) => (
                      <div
                        key={item.id}
                        className="animate-fade-up rounded-[24px] border border-brand-primary/10 bg-white/78 p-4 shadow-sm backdrop-blur-sm"
                        style={{ animationDelay: `${120 + index * 90}ms` }}
                      >
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-brand-primary/70">
                          {item.tag || "Guest Pick"}
                        </p>
                        <p className="mt-2 text-sm font-semibold leading-6 text-brand-black">
                          {item.name}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="photo-spotlight relative min-h-[360px] bg-brand-black">
              <Image
                src={activeCategory.coverImage}
                alt={activeCategory.title}
                fill
                priority
                sizes="(min-width: 1280px) 640px, 100vw"
                className="object-cover animate-pan-slow"
              />
              <div className="absolute left-5 top-5 z-10 max-w-[240px] rounded-[24px] border border-white/15 bg-black/30 p-4 text-white backdrop-blur-md animate-float-soft">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-white/70">
                  {activeCategory.boardName || "Menu Board"}
                </p>
                <p className="mt-3 font-heading text-2xl uppercase leading-none">
                  {activeCategory.items[0]?.name || activeCategory.title}
                </p>
              </div>
              <div className="absolute bottom-5 right-5 z-10 max-w-[280px] rounded-[26px] border border-white/15 bg-white/10 p-4 text-white backdrop-blur-md animate-fade-up">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-brand-accent">
                  Chef Notes
                </p>
                <p className="mt-3 text-sm leading-6 text-white/82">
                  {activeCategory.heroCopy ||
                    activeCategory.description ||
                    "Freshly prepared menu favorites in this section."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell pt-8">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-secondary">
              Browse The Board
            </p>
            <h2 className="brand-title mt-3 font-heading text-4xl uppercase leading-none sm:text-5xl">
              {activeCategory.title}
            </h2>
            <div className="mt-4 h-1.5 w-24 rounded-full bg-brand-primary" />
            <p className="mt-4 max-w-2xl text-base leading-7 text-black/65">
              {activeCategory.heroCopy || activeCategory.description || "Browse the items below."}
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {activeCategory.items.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
