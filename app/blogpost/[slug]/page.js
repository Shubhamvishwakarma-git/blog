import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import Image from "next/image";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeFormat from "rehype-format";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";

export default async function Page({ params }) {
  const { slug } = params;

  // Sanitize slug to avoid path traversal attack
  if (!slug || typeof slug !== "string" || slug.includes("..")) {
    notFound();
  }

  const filepath = path.join(process.cwd(), "content", `${slug}.md`);

  if (!fs.existsSync(filepath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { content, data } = matter(fileContent);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeFormat)
    .use(rehypePrettyCode, {
      transformers: [
        transformerCopyButton({
          theme: "github-dark",
          visibility: "always",
          feedbackDuration: 3000,
        }),
      ],
    })
    .use(rehypeStringify)
    .process(content);

  const htmlContent = processedContent.toString();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-foreground space-y-12">
      {/* Banner Image */}
      {data.image && (
        <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-2xl shadow-xl">
          <Image
            src={data.image}
            alt={data.title || "Blog banner image"}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-2xl"
            priority
          />
        </div>
      )}

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center text-primary leading-tight">
        {data.title || "Untitled Blog"}
      </h1>

      {/* Author and Date */}
      <div className="text-sm text-muted-foreground text-center">
        <span>By </span>
        <span className="text-primary font-medium">
          {data.author || "Unknown Author"}
        </span>{" "}
        &nbsp;|&nbsp;
        <time dateTime={data.date}>
          {data.date
            ? new Date(data.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "Date Unknown"}
        </time>
      </div>

      {/* Description */}
      {data.description && (
        <blockquote className="border-l-4 border-primary/60 pl-5 italic text-muted-foreground bg-muted/60 p-5 rounded-lg max-w-2xl mx-auto">
          “{data.description}”
        </blockquote>
      )}

      {/* Markdown Content */}
      <article
        className="prose dark:prose-invert max-w-none prose-img:rounded-xl prose-pre:rounded-lg prose-pre:bg-muted/80 prose-code:text-[0.9em] prose-headings:font-bold prose-headings:border-b-2 prose-headings:border-[var(--primary)] prose-headings:pb-1 prose-a:text-primary hover:prose-a:underline prose-blockquote:border-l-primary/60 prose-blockquote:pl-4 prose-blockquote:italic prose-li:marker:text-primary space-y-6"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}
