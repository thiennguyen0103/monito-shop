import PetCard from "@/components/pet-card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sorts } from "@/constants/sorts";
import { newestPetData } from "@/data/pet-data";
import { convertBreadcrumb } from "@/utils/string";

interface IResultProps {
  title: string;
}

const Result = (props: IResultProps) => {
  const { title } = props;

  return (
    <div className="flex-1">
      <div className="flex items-center justify-between">
        <div className="inline-flex items-end gap-3">
          <h2 className="text-2xl font-bold capitalize text-primary">
            {convertBreadcrumb(title)}
          </h2>
          <div className="text-sm font-medium text-neutral-60">
            <data value="52">52</data> <span>puppies</span>
          </div>
        </div>
        <Select>
          <SelectTrigger className="max-w-[165px]">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            {sorts.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="mt-2">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {newestPetData.map((pet) => (
            <PetCard
              key={pet.id}
              imageUrl={pet.imageUrl}
              title={pet.name}
              age={pet.age}
              gender={pet.age}
              price={pet.price}
            />
          ))}
        </div>
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">28</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default Result;
