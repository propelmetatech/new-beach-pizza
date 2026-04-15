"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { formatPrice } from "@/lib/format";
import { getItemById, getProductPriceSummary, getPurchaseOptions } from "@/lib/menu";

export default function ToastDashboardView() {
  const searchParams = useSearchParams();
  const itemId = searchParams.get("item");
  const optionId = searchParams.get("option");
  const product = itemId ? getItemById(itemId) : null;
  const purchaseOptions = product ? getPurchaseOptions(product) : [];
  const selectedOption =
    purchaseOptions.find((option) => option.id === optionId) ?? purchaseOptions[0] ?? null;
  const priceSummary = product ? getProductPriceSummary(product) : null;

  return (
    <div className="pb-16">
      <section className="page-shell pt-6">
        <div className="surface-card overflow-hidden">
          <div className="grid gap-0 xl:grid-cols-[0.95fr,1.05fr]">
            <div className="hero-shell relative overflow-hidden p-6 text-white sm:p-8 lg:p-10">
              <div className="hero-dots absolute inset-0 opacity-20" />
              <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-white/12 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-brand-accent/20 blur-3xl" />

              <div className="relative max-w-xl">
                <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/72">
                  Toast Dashboard
                </p>
                <h1 className="mt-5 font-heading text-4xl uppercase leading-[0.94] text-white sm:text-5xl">
                  Review your selected item and continue ordering.
                </h1>
                <p className="mt-5 text-base leading-8 text-white/82 sm:text-lg">
                  Add to cart now takes guests here to review the selected item before continuing.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/menu"
                    className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-extrabold uppercase tracking-[0.16em] text-brand-black transition hover:-translate-y-0.5 hover:bg-brand-accent"
                  >
                    Back to menu
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              {product ? (
                <div className="grid gap-6 lg:grid-cols-[320px,1fr]">
                  <div className="relative aspect-square overflow-hidden rounded-[30px] bg-brand-sand">
                    <Image src={product.image} alt={product.name} fill className="object-cover" />
                  </div>

                  <div className="space-y-5">
                    <div className="flex flex-wrap gap-3">
                      <span className="rounded-full bg-brand-primary/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-primary">
                        {product.categoryName}
                      </span>
                    </div>

                    <div>
                      <h2 className="font-heading text-4xl uppercase leading-none text-brand-black sm:text-5xl">
                        {product.name}
                      </h2>
                      {product.description ? (
                        <p className="mt-4 text-base leading-7 text-black/70">
                          {product.description}
                        </p>
                      ) : null}
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[24px] bg-brand-cream p-5">
                        <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-brand-secondary">
                          Selected option
                        </p>
                        <p className="mt-3 text-lg font-black text-brand-black">
                          {selectedOption ? selectedOption.label : "Standard"}
                        </p>
                      </div>

                      <div className="rounded-[24px] bg-brand-cream p-5">
                        <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-brand-secondary">
                          Price
                        </p>
                        <p className="mt-3 text-lg font-black text-brand-black">
                          {selectedOption ? formatPrice(selectedOption.price) : priceSummary?.label}
                        </p>
                      </div>
                    </div>

                    {product.note ? (
                      <div className="rounded-[24px] border border-black/10 p-5">
                        <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-brand-secondary">
                          Good to know
                        </p>
                        <p className="mt-3 text-sm leading-7 text-black/70">{product.note}</p>
                      </div>
                    ) : null}
                  </div>
                </div>
              ) : (
                <div className="rounded-[30px] bg-brand-cream p-8">
                  <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-primary">
                    No item selected
                  </p>
                  <h2 className="mt-4 font-heading text-3xl uppercase leading-none text-brand-black sm:text-4xl">
                    Choose a menu item first.
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-7 text-black/70">
                    Open the menu, pick an item, and use Add to cart to route here with the
                    selected order details.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
