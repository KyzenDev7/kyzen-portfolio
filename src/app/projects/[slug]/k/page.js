import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../../../components/SiteHeader";
import { getProject } from "../../project-data";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project not found | Kyzen",
    };
  }

  return {
    title: `${project.title} / k | Kyzen`,
    description: `${project.title} nested directory view`,
  };
}

export default async function ProjectKPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen w-full flex-col px-5 py-6 sm:px-7 lg:px-0" style={{ maxWidth: "860px" }}>
        <SiteHeader />

        <section className="space-y-6">
          <div className="rounded-[18px] border border-white/10 bg-[#070b12] p-5">
            <div className="flex flex-wrap items-center gap-3 text-xs text-white/55">
              <span className="rounded-full border border-[#8cc8ff]/18 px-3 py-1 text-[#cfeaff]">folder</span>
              <span className="rounded-full border border-[#8cc8ff]/18 px-3 py-1 text-[#cfeaff]">{project.deepPath}</span>
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              <span className="text-[#8cc8ff]">k</span>
            </h1>
            <p className="mt-4 max-w-3xl font-mono text-sm leading-8 text-white/80 sm:text-base">
              This is the nested view inside the project directory. It behaves like a deeper
              <span className="text-[#8cc8ff]"> Linux path</span>, so clicking through the project
              can land you at <span className="text-[#d7f0ff]">{project.deepPath}</span>.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/projects/${slug}`}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 transition-colors hover:border-[#8cc8ff]/40 hover:text-[#8cc8ff]"
              >
                Back to project
              </Link>
              <Link
                href="/"
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 transition-colors hover:border-[#8cc8ff]/40 hover:text-[#8cc8ff]"
              >
                Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
