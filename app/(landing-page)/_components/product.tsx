"use client";

import ProductCard from "@/components/product-card";
import Section from "@/components/section";
import { products } from "@/data/product-data";

const Product = () => {
  return (
    <Section
      label="Hard to choose right products for your pets?"
      title="Our Products"
      viewMoreLink="/products"
    >
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            imageUrl={product.imageUrl}
            title={product.name}
            size={product?.size}
            category={product.category}
            price={product.price}
            gift={product?.gift}
          />
        ))}
      </div>
    </Section>
  );
};

export default Product;
