"use client";

import { useState } from "react";
import { getDefaultPurchaseOption, getProductPriceSummary, getPurchaseOptions } from "@/lib/menu";
import { formatPrice } from "@/lib/format";

export default function ProductPurchasePanel({ product }) {
  const options = getPurchaseOptions(product);
  const defaultOption = getDefaultPurchaseOption(product);
  const [selectedOptionId, setSelectedOptionId] = useState(defaultOption?.id ?? null);
  const selectedOption = options.find((option) => option.id === selectedOptionId) ?? defaultOption;
  const priceSummary = getProductPriceSummary(product);
  const hasVariants = Boolean(product.variants?.length);

  return (
    <div className="mt-8 rounded-[30px] bg-brand-black p-6 text-white sm:p-7">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-white/60">
            {selectedOption ? "Selected price" : "Pricing"}
          </p>
          <p className="mt-2 font-heading text-4xl uppercase leading-none">
            {selectedOption ? formatPrice(selectedOption.price) : priceSummary.label}
          </p>
        </div>
      </div>

      {hasVariants ? (
        <div className="mt-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-white/60">
            Choose an option
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            {options.map((option) => {
              const isSelected = selectedOption?.id === option.id;

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setSelectedOptionId(option.id)}
                  className={`rounded-full border px-4 py-3 text-left text-sm font-extrabold uppercase tracking-[0.12em] transition ${
                    isSelected
                      ? "border-white bg-white text-brand-black"
                      : "border-white/20 bg-white/5 text-white"
                  }`}
                >
                  {option.label} {formatPrice(option.price)}
                </button>
              );
            })}
          </div>
          {selectedOption?.description ? (
            <p className="mt-3 text-sm leading-6 text-white/70">{selectedOption.description}</p>
          ) : null}
        </div>
      ) : null}

      {!selectedOption ? (
        <p className="mt-4 text-sm leading-6 text-white/70">
          Pricing is still being finalized for this item. Keep it visible on the menu and confirm
          the final number in store.
        </p>
      ) : null}
    </div>
  );
}
