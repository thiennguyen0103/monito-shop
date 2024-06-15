"use client";

import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";
import { Button } from "./ui/button";

interface ISectionProps extends PropsWithChildren {
  viewMoreLink: string;
  label: string;
  title: string;
}

const Section = (props: ISectionProps) => {
  const { label, title, viewMoreLink, children } = props;
  const router = useRouter();

  const redirectToViewMore = () => {
    router.push(viewMoreLink);
  };
  return (
    <div className="container">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <div className="font-medium">{label}</div>
          <div className="text-2xl font-bold text-primary">{title}</div>
        </div>
        <Button
          variant="rounded-outline"
          className="hidden sm:inline-flex"
          onClick={redirectToViewMore}
        >
          View More <ChevronRight className="ml-2 h-3 w-3" />
        </Button>
      </div>
      <div className="mb-4">{children}</div>
      <Button
        variant="rounded-outline"
        className="w-full sm:hidden"
        onClick={redirectToViewMore}
      >
        View More <ChevronRight className="ml-2 h-3 w-3" />
      </Button>
    </div>
  );
};

export default Section;
