import Blog from "./_components/blog";
import Hero from "./_components/hero";
import News from "./_components/news";
import Product from "./_components/product";

export default function Home() {
  return (
    <main className="mb-8 space-y-8">
      <Hero />
      <News />
      <Product />
      <Blog/>
    </main>
  );
}
