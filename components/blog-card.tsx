"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { Badge } from "./ui/badge";

interface IBlogCardProps {
  imageUrl: string;
  title: string;
  topic: string;
  description: string;
}

const BlogCard = (props: IBlogCardProps) => {
  const { description, imageUrl, title, topic } = props;
  return (
    <Card className="rounded-[12px] border-none">
      <CardHeader className="p-2">
        <AspectRatio ratio={364 / 240}>
          <Image
            src={imageUrl}
            alt="Image"
            className="h-auto w-auto rounded-[10px] object-contain"
            layout="fill"
          />
        </AspectRatio>
      </CardHeader>
      <CardContent className="px-4 pt-0">
        <Badge className="mb-2 bg-state-blue-sea">{topic}</Badge>
        <h1 className="text-lg font-bold tracking-tight text-neutral-100">
          {title}
        </h1>
        <article className="line-clamp-4">{description}</article>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
