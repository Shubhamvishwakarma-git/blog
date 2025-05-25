import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

// ✅ Use content directory at the root level (not in public)
const contentDir = path.join(process.cwd(), "content");

function getAllBlogs() {
  const files = fs.readdirSync(contentDir);

  const blogs = files.map((file) => {
    const fileContent = fs.readFileSync(path.join(contentDir, file), "utf-8");
    const { data } = matter(fileContent);

    return {
      ...data,
      slug: file.replace(".md", ""), // Needed for routing
    };
  });

  return blogs;
}

const blogs = getAllBlogs();

export default function BlogPage() {
  return (
    <section className="bg-muted py-16 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          Our Latest Blogs
        </h1>
        <p className="text-muted-foreground mb-12">
          Explore our most recent and featured blog posts.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="bg-card rounded-xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden flex flex-col border border-border hover:border-primary/40"
            >
              <div className="overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-between flex-1 p-5">
                <div>
                  <h2 className="text-xl font-semibold mb-1 text-foreground hover:text-primary transition-colors duration-200 cursor-pointer">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-2">
                    By{" "}
                    <span className="text-primary font-medium">
                      {blog.author}
                    </span>{" "}
                    |{" "}
                    {new Date(blog.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    href={`/blogpost/${blog.slug}`}
                    className={buttonVariants({
                      variant: "outline",
                      className:
                        "w-full bg-primary text-white hover:bg-primary/90 dark:hover:bg-primary/80 transition duration-200",
                    })}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
