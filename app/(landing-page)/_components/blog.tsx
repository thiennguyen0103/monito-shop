import BlogCard from "@/components/blog-card";
import Section from "@/components/section";
import { blogs } from "@/data/blog-data";

const Blog = () => {
  return (
    <Section
      label="You already know?"
      title="Useful Pet Knowledge"
      viewMoreLink="/blogs"
    >
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            imageUrl={blog.imageUrl}
            title={blog.title}
            topic={blog.topic}
            description={blog.description}
          />
        ))}
      </div>
    </Section>
  );
};

export default Blog;
