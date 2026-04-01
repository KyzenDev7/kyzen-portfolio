import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import IllustratedBackground from "../../components/IllustratedBackground";
import { blogPosts } from "./blog-data";

export default function BlogPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <IllustratedBackground />
      <div className="relative mx-auto flex min-h-screen w-full flex-col px-5 py-6 sm:px-7 lg:px-0" style={{ maxWidth: "860px" }}>
        <SiteHeader />

        <section className="py-10">
          <p className="text-sm uppercase tracking-[0.28em] text-[#8cc8ff]/70">Blog</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Notes and updates
          </h1>
          <p className="mt-4 max-w-3xl font-mono text-sm leading-8 text-white/80 sm:text-base">
            New blog released on <span className="text-[#8cc8ff]">31 March 2026</span>.
          </p>

          <div className="mt-10 grid gap-4">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block rounded-[18px] border border-white/10 bg-[#070b12] p-5 transition-colors hover:border-[#8cc8ff]/30 hover:bg-[#0d1320]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[#8cc8ff]/70">latest post</p>
                    <h2 className="mt-2 text-lg font-medium text-white">{post.title}</h2>
                  </div>
                  <span className="font-mono text-xs text-white/45">{post.date}</span>
                </div>
                <p className="mt-4 font-mono text-sm leading-8 text-white/78">{post.excerpt}</p>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex gap-3">
            <Link className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 transition-colors hover:border-[#8cc8ff]/40 hover:text-[#8cc8ff]" href="/">
              Back home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
