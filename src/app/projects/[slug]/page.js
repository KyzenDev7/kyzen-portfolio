import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../../components/SiteHeader";
import { getProject } from "../project-data";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project not found | Kyzen",
    };
  }

  return {
    title: `${project.title} | Kyzen`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen w-full flex-col px-5 py-6 sm:px-7 lg:px-0" style={{ maxWidth: "900px" }}>
        <SiteHeader />

        <section className="py-10">
          <div className="flex flex-wrap items-center gap-3 text-xs text-white/55">
            <span className="rounded-full border border-[#8cc8ff]/18 px-3 py-1 text-[#cfeaff]">project</span>
            <span className="rounded-full border border-[#8cc8ff]/18 px-3 py-1 text-[#cfeaff]">~/projects/{slug}</span>
            <span className="font-mono text-white/75">{project.path}</span>
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            <span className="text-[#8cc8ff]">{project.title}</span>
          </h1>

          <p className="mt-5 max-w-3xl font-mono text-sm leading-8 text-white/80 sm:text-base">
            {project.longDescription}
          </p>

          <div className="mt-10 space-y-10">
            <div>
              <h2 className="text-sm font-medium uppercase tracking-[0.24em] text-[#8cc8ff]/70">What it explores</h2>
              <p className="mt-4 max-w-3xl font-mono text-sm leading-8 text-white/75 sm:text-base">
                {project.description}
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-white/78">
                {project.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#8cc8ff] shadow-[0_0_12px_rgba(140,200,255,0.75)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-medium uppercase tracking-[0.24em] text-[#8cc8ff]/70">Stack</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-white/65"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm font-medium uppercase tracking-[0.24em] text-[#8cc8ff]/70">Open links</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 transition-colors hover:border-[#8cc8ff]/40 hover:text-[#8cc8ff]"
                >
                  Back home
                </Link>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#e8b07c] px-4 py-2 text-sm font-medium text-[#231f2f] transition-transform hover:-translate-y-0.5"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
