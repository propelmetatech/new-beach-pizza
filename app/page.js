import HomeCategoryExplorer from "@/components/HomeCategoryExplorer";
import { getMenuCategories } from "@/lib/menu";

export default function HomePage() {
  const categories = getMenuCategories();

  return <HomeCategoryExplorer categories={categories} />;
}
