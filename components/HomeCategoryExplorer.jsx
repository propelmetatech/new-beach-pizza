"use client";

import { useState } from "react";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";

export default function HomeCategoryExplorer({ categories }) {
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0]?.id ?? "");
  const activeCategory =
    categories.find((category) => category.id === activeCategoryId) ?? categories[0] ?? null;

  if (!activeCategory) {
    return null;
  }

  return (
    <div className="pb-16">
      <div className="category-rail-shell sticky top-20 z-40 border-b border-black/10 backdrop-blur-xl">
        <div className="page-shell relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-10 bg-gradient-to-r from-white/95 to-transparent sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-10 bg-gradient-to-l from-white/95 to-transparent sm:block" />
        </div>
        <div className="category-rail page-shell overflow-x-auto">
          <div className="flex w-max min-w-full items-center gap-8 py-4">
            {categories.map((category) => {
              const isActive = category.id === activeCategory.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategoryId(category.id)}
                  className={`relative whitespace-nowrap pb-2 text-sm font-extrabold uppercase tracking-[0.14em] transition ${
                    isActive ? "text-brand-primary" : "text-brand-black/60 hover:text-brand-primary"
                  }`}
                >
                  {category.title}
                  <span
                    className={`absolute bottom-0 left-0 h-1 rounded-full bg-brand-primary transition-all ${
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
        <div className="surface-card overflow-hidden">
          <div className="grid gap-0 xl:grid-cols-[1.05fr,0.95fr]">
            <div className="hero-shell relative overflow-hidden p-6 text-white sm:p-8 lg:p-10">
              <div className="hero-dots absolute inset-0 opacity-20" />
              <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-white/12 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-brand-accent/20 blur-3xl" />

              <div className="relative max-w-2xl">
                <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-white/70">
                  SEMINOLE favourites
                </p>
                <h1 className="mt-4 font-heading text-4xl uppercase leading-[0.94] text-white sm:text-5xl">
                  {activeCategory.title}
                </h1>
                <p className="mt-5 max-w-xl text-base leading-8 text-white/82 sm:text-lg">
                  {activeCategory.description || "Freshly prepared menu favorites in this section."}
                </p>
                {activeCategory.pricingNote ? (
                  <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.18em] text-white/70">
                    {activeCategory.pricingNote}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="relative min-h-[340px] bg-brand-black">
              <Image
                src={activeCategory.coverImage}
                alt={activeCategory.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                <h3 className="font-heading text-3xl uppercase leading-none sm:text-4xl">
                  {activeCategory.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell pt-8">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-heading text-4xl uppercase leading-none text-brand-black sm:text-5xl">
              {activeCategory.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-black/65">
              {activeCategory.heroCopy || activeCategory.description || "Browse the items below."}
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {activeCategory.items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
