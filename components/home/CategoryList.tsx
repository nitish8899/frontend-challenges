import { Category, Challenge } from "@/types";
import { Card, Icon } from "../ui";
import Link from "next/link";

type CategoryListProps = {
  categories: Category[];
  challenges: Challenge[];
};

export function CategoryList(props: CategoryListProps) {
  const { categories, challenges } = props;

  return (
    <div className="mb-8 mt-4 grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-4">
      {categories.map((category) => (
        <Card className="p-3 hover:bg-[var(--color-bg-hover)]" key={`category-${category}`}>
          <Link href={`/${category}`} className="flex items-center gap-3">
            <Icon name={`${category}-color`} size="lg" />
            <div>
              <h3 className="text-lg font-bold capitalize">{category === "css" ? "CSS" : category}</h3>
              <p className="text-[var(--color-fg-subtle)]">
                {challenges.filter((challenge) => challenge.category === category).length} Challenges
              </p>
            </div>
          </Link>
        </Card>
      ))}
    </div>
  );
}
