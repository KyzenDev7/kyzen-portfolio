import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../../components/SiteHeader";
import { blogPosts } from "../blog-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return { title: "Blog | Kyzen" };
  }

  return {
    title: `${post.title} | Kyzen`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen w-full flex-col px-5 py-6 sm:px-7 lg:px-0" style={{ maxWidth: "860px" }}>
        <SiteHeader />

        <article className="py-10">
          <p className="text-sm uppercase tracking-[0.28em] text-[#8cc8ff]/70">Blog</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{post.title}</h1>
          <p className="mt-4 font-mono text-sm text-white/45">{post.date}</p>

          <div className="mt-8 space-y-5 font-mono text-sm leading-8 text-white/80 sm:text-base">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 transition-colors hover:border-[#8cc8ff]/40 hover:text-[#8cc8ff]" href="/blog">
              Back to blog
            </Link>
            <Link className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 transition-colors hover:border-[#8cc8ff]/40 hover:text-[#8cc8ff]" href="/">
              Home
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}