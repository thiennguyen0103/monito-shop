"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";

interface IProductCardProps {
  imageUrl: string;
  title: string;
  category: string;
  size?: string;
  price: string;
  gift?: string;
}

const ProductCard = (props: IProductCardProps) => {
  const { category, imageUrl, price, title, size, gift } = props;
  return (
    <Card className="rounded-[12px] border-none">
      <CardHeader className="p-2">
        <AspectRatio>
          <Image
            src={imageUrl}
            alt="Image"
            className="h-auto w-auto rounded-[10px] object-cover"
            layout="fill"
          />
        </AspectRatio>
      </CardHeader>
      <CardContent className="px-4 pb-0 pt-4">
        <h1 className="text-lg font-bold tracking-tight text-neutral-100">
          {title}
        </h1>
        <div className="flex flex-wrap items-center gap-2">
          <div>
            <span className="text-neutral-60">Product:</span>
            <span className="ml-2 font-semibold text-neutral-60">
              {category}
            </span>
          </div>
          {size ? (
            <div>
              <span className="text-neutral-60">Size:</span>
              <span className="ml-2 font-semibold text-neutral-60">{size}</span>
            </div>
          ) : null}
        </div>
      </CardContent>
      <CardFooter className="px-4">
        <div className="w-full">
          <data value={price} className="text-lg font-bold text-neutral-100">
            {price}
          </data>
          {gift ? (
            <div className="p-2 inline-flex items-center gap-2 mt-2 bg-[#FCEED5] w-full rounded-lg">
              <Image src="/gift.svg" alt="Gift" width={20} height={20} />
              <span className="text-primary font-bold">{gift}</span>
            </div>
          ) : null}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
