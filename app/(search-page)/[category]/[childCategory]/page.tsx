"use client";

import Breadcrumbs from "@/components/bread-crumbs";
import { usePathname } from "next/navigation";
import FilterBar from "./_components/filter-bar";
import Result from "./_components/result";

interface IChildCategoryProps {
  params: {
    childCategory: string;
    category: string;
  };
}

const ChildCategory = (props: IChildCategoryProps) => {
  const { params } = props;
  const pathname = usePathname();

  return (
    <div className="container pb-12 pt-[100px]">
      <Breadcrumbs />
      <div className="mt-4 flex w-full gap-6">
        <FilterBar />
        <Result title={params.childCategory} />
      </div>
    </div>
  );
};

export default ChildCategory;
