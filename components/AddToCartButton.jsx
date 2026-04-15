"use client";

import { useRouter } from "next/navigation";
import { getPurchaseOptions } from "@/lib/menu";

export default function AddToCartButton({ product, optionId, className = "", label }) {
  const router = useRouter();
  const options = getPurchaseOptions(product);
  const selectedOption = options.find((option) => option.id === optionId) ?? options[0] ?? null;
  const isDisabled = !selectedOption;
  const buttonLabel = label || (isDisabled ? "Ask in store" : "Add to cart");

  function handleClick() {
    if (!selectedOption) {
      return;
    }

    const params = new URLSearchParams({
      item: product.id
    });

    if (selectedOption.id) {
      params.set("option", selectedOption.id);
    }

    router.push(`/toast-dashboard?${params.toString()}`);
  }

  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={handleClick}
      className={`inline-flex items-center justify-center rounded-full border border-black/10 px-5 py-3 text-sm font-extrabold uppercase tracking-[0.16em] transition ${
        isDisabled
          ? "cursor-not-allowed bg-black/10 text-black/45"
          : "bg-brand-primary text-white shadow-lg shadow-brand-primary/20 hover:-translate-y-0.5 hover:bg-brand-primaryDark"
      } ${className}`}
    >
      {buttonLabel}
    </button>
  );
}
