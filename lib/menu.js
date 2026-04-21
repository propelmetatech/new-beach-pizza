import boards from "@/data/boards.json";
import mainBoardCategories from "@/data/main-board.json";
import counterBoardCategories from "@/data/counter-board.json";
import { formatPrice } from "@/lib/format";

export const MENU_GALLERY_IMAGES = [
  "/images/image1.png",
  "/images/image2.jpeg",
  "/images/image3.png",
  "/images/image4.avif",
  "/images/image5.png",
  "/images/image6.png",
  "/images/image7.png"
];

const categories = [...mainBoardCategories, ...counterBoardCategories];
const categoriesWithUploadedPhotos = (() => {
  let itemImageCursor = 0;

  return categories.map((category, categoryIndex) => ({
    ...category,
    coverImage: MENU_GALLERY_IMAGES[(categoryIndex + 1) % MENU_GALLERY_IMAGES.length],
    items: category.items.map((item) => ({
      ...item,
      image: MENU_GALLERY_IMAGES[itemImageCursor++ % MENU_GALLERY_IMAGES.length]
    }))
  }));
})();

function cleanCopy(value) {
  if (typeof value !== "string") {
    return value;
  }

  return value
    .replaceAll("â€™", "'")
    .replaceAll("â€˜", "'")
    .replaceAll("â€œ", '"')
    .replaceAll("â€\u009d", '"')
    .replaceAll("â€“", "-")
    .replaceAll("â€”", "-");
}

function enrichCategory(category) {
  const board = boards.find((entry) => entry.id === category.boardId);
  const categoryDescription =
    category.id === "beach-snacks"
      ? "Share or don't - we won't judge"
      : cleanCopy(category.description);

  return {
    ...category,
    title: cleanCopy(category.title),
    description: categoryDescription,
    heroCopy: cleanCopy(category.heroCopy),
    pricingNote: cleanCopy(category.pricingNote),
    boardName: cleanCopy(board?.title),
    boardDescription: cleanCopy(board?.description),
    items: category.items.map((item) => ({
      ...item,
      name: cleanCopy(item.name),
      description: cleanCopy(item.description),
      note: cleanCopy(item.note),
      tag: cleanCopy(item.tag),
      priceLabel: cleanCopy(item.priceLabel),
      categoryId: category.id,
      categoryName: cleanCopy(category.title),
      boardId: category.boardId,
      boardName: cleanCopy(board?.title)
    }))
  };
}

export function getMenuCategories(boardId) {
  return categoriesWithUploadedPhotos
    .filter((category) => (boardId ? category.boardId === boardId : true))
    .map(enrichCategory);
}

export function getMenuBoards() {
  return boards.map((board) => ({
    ...board,
    categories: getMenuCategories(board.id)
  }));
}

export function getAllMenuItems() {
  return getMenuCategories().flatMap((category) => category.items);
}

export function getItemById(id) {
  return getAllMenuItems().find((item) => item.id === id);
}

export function getRelatedItems(categoryId, currentId) {
  return getAllMenuItems()
    .filter((item) => item.categoryId === categoryId && item.id !== currentId)
    .slice(0, 3);
}

export function getPurchaseOptions(product) {
  if (Array.isArray(product.variants)) {
    return product.variants.filter((variant) => typeof variant.price === "number");
  }

  if (typeof product.price === "number") {
    return [
      {
        id: "standard",
        label: "Standard",
        price: product.price
      }
    ];
  }

  return [];
}

export function getDefaultPurchaseOption(product) {
  return getPurchaseOptions(product)[0] ?? null;
}

export function getProductPriceSummary(product) {
  if (Array.isArray(product.variants)) {
    const pricedVariants = product.variants.filter((variant) => typeof variant.price === "number");

    if (!pricedVariants.length) {
      return {
        label: product.priceLabel || "Ask in store",
        helper: product.note || null,
        unavailable: true
      };
    }

    const lowestPrice = Math.min(...pricedVariants.map((variant) => variant.price));

    return {
      label: `From ${formatPrice(lowestPrice)}`,
      helper: pricedVariants
        .map((variant) => `${variant.label} ${formatPrice(variant.price)}`)
        .join(" | "),
      unavailable: false
    };
  }

  if (typeof product.price === "number") {
    return {
      label: formatPrice(product.price),
      helper: product.note || null,
      unavailable: false
    };
  }

  return {
    label: product.priceLabel || "Ask in store",
    helper: product.note || null,
    unavailable: true
  };
}
