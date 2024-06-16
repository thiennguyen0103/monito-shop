import { convertBreadcrumb } from "@/utils/string";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

interface IBreadCrumbData {
  href: string;
  breadcrumb: string;
}

const Breadcrumbs = () => {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadCrumbData[]>([]);

  useEffect(() => {
    if (pathname) {
      const asPathWithoutQuery = pathname.split("?")[0];
      const linkPath = asPathWithoutQuery.split("/");
      linkPath.shift();

      const pathArray: IBreadCrumbData[] = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: "/" + linkPath.slice(0, i + 1).join("/"),
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [pathname]);

  if (!breadcrumbs.length) {
    return null;
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {breadcrumbs.map((breadcrumb) => {
          return (
            <Fragment key={breadcrumb.href}>
              <BreadcrumbSeparator>
                <ChevronRight />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href={breadcrumb.href} className="capitalize">
                  {convertBreadcrumb(breadcrumb.breadcrumb)}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
