import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";

interface IPetCardProps {
  imageUrl: string;
  title: string;
  gender: string;
  age: string;
  price: string;
}

const PetCard = (props: IPetCardProps) => {
  const { imageUrl, title, gender, age, price } = props;

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
            <span className="text-neutral-60">Gene:</span>
            <span className="ml-2 font-semibold text-neutral-60">{gender}</span>
          </div>
          <div>
            <span className="text-neutral-60">Age:</span>
            <span className="ml-2 font-semibold text-neutral-60">{age}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-4">
        <data value={price} className="text-lg font-bold text-neutral-100">
          {price}
        </data>
      </CardFooter>
    </Card>
  );
};

export default PetCard;
