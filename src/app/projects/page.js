import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import IllustratedBackground from "../../components/IllustratedBackground";
import { projectData } from "./project-data";

const projects = Object.entries(projectData);

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <IllustratedBackground />
      <div className="relative mx-auto flex min-h-screen w-full flex-col px-5 py-6 sm:px-7 lg:px-0" style={{ maxWidth: "860px" }}>
        <SiteHeader />

        <section className="space-y-5 py-10">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[#8cc8ff]/70">Projects</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Selected builds
            </h1>
            <p className="mt-4 max-w-2xl font-mono text-sm leading-8 text-white/80 sm:text-base">
              A focused list of <span className="text-[#8cc8ff]">systems work</span>,
              <span className="text-[#d7f0ff]"> low-level experiments</span>, and
              <span className="text-[#9fd4ff]"> operating-system ideas</span>.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map(([slug, project], index) => (
              <Link
                key={slug}
                href={`/projects/${slug}`}
                className="rounded-[18px] border border-white/10 bg-[#070b12] p-4 shadow-[0_0_0_1px_rgba(140,200,255,0.06)] transition-transform duration-300 hover:-translate-y-1 hover:border-[#8cc8ff]/30"
              >
                <div className="rounded-[14px] border border-[#8cc8ff]/18 bg-[#111826] p-3 text-white">
                  <div className="mb-3 flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ffcb6b]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#79d16d]" />
                  </div>
                  <div className="rounded-[10px] bg-[#0d1320] p-4 text-left text-[11px] text-white/90 shadow-inner shadow-black/20">
                    <div className="mb-3 flex items-center justify-between text-[10px] text-[#8cc8ff]">
                      <span>prototype / main</span>
                      <span>0{index + 1}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-2/3 rounded-full bg-white/90" />
                      <div className="h-2 w-5/6 rounded-full bg-white/60" />
                      <div className="h-2 w-3/5 rounded-full bg-white/35" />
                    </div>
                    <div className="mt-4 flex gap-2">
                      <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] text-white/80">init</span>
                      <span className="rounded-full bg-[#8cc8ff]/15 px-2 py-1 text-[10px] text-[#bfe3ff]">
                        kernel
                      </span>
                      <span className="rounded-full bg-[#8cc8ff]/10 px-2 py-1 text-[10px] text-[#9fd4ff]">
                        low-level
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <h2 className="text-lg font-medium text-white">{project.title}</h2>
                  <p className="mt-2 font-mono text-sm leading-7 text-white/80">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#8cc8ff]/18 bg-[#8cc8ff]/8 px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-[#cfeaff]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="mt-4 inline-flex text-sm text-[#8cc8ff]">Open project ↗</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}