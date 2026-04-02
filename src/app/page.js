import Link from "next/link";
import { Poppins } from "next/font/google";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import GithubContributionGraph from "../components/GithubContributionGraph";
import { blogPosts } from "./blog/blog-data";
import { getGithubContributionWeeks } from "./lib/github-contributions";
import { projectData } from "./projects/project-data";

export const dynamic = "force-dynamic";

const featuredProjects = [projectData["luminos"], projectData["bluelark"]];
const heroFont = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const socialLinks = [
  {
    label: "Discord",
    href: "https://discord.com/users/837383364083580969",
    bg: "bg-[#9fe0ff]",
    fg: "text-[#0b1118]",
    iconSrc: "/discord-icon-svgrepo-com.svg",
  },
  {
    label: "GitHub",
    href: "https://github.com/KyzenDev7",
    bg: "bg-[#f1f1f1]",
    fg: "text-[#111111]",
    iconSrc: "/Github-Fill--Streamline-Remix-Fill.svg",
  },
  {
    label: "Email",
    href: "mailto:hello@kyzen7.me",
    bg: "bg-[#ffb366]",
    fg: "text-[#20130b]",
    iconSrc: "/email-icon.svg",
  },
  {
    label: "Bluesky",
    href: "https://bsky.app/profile/kyzen7.me",
    bg: "bg-[#5770f7]",
    fg: "text-white",
    iconSrc: "/bluesky-icon.svg",
  },
  {
    label: "About",
    href: "/about",
    bg: "bg-[#ff9fb0]",
    fg: "text-[#2a0f16]",
    iconSrc: "/globe.svg",
  },
];

export default async function Home() {
  const contributionWeeks = await getGithubContributionWeeks();

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg
          aria-hidden="true"
          viewBox="0 0 1600 1100"
          className="absolute inset-0 h-full w-full opacity-[0.11]"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="jayBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9ad4ff" stopOpacity="0.9" />
              <stop offset="55%" stopColor="#5ea8ff" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#0d2846" stopOpacity="0.35" />
            </linearGradient>
            <linearGradient id="jayWing" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d9f1ff" stopOpacity="0.8" />
              <stop offset="35%" stopColor="#7abef8" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#1a4f87" stopOpacity="0.55" />
            </linearGradient>
          </defs>

          <g transform="translate(840 75) scale(0.9) rotate(2)">
            <path
              d="M170 150 C280 120, 400 165, 440 250 C480 336, 450 430, 360 490 C300 530, 220 545, 150 520 C90 500, 45 445, 40 380 C35 305, 65 215, 170 150 Z"
              fill="url(#jayBody)"
            />
            <path
              d="M130 220 C200 175, 315 165, 375 210 C420 244, 430 305, 404 345 C378 385, 322 410, 255 404 C184 398, 132 360, 112 305 C100 272, 106 242, 130 220 Z"
              fill="url(#jayWing)"
              opacity="0.9"
            />
            <path
              d="M350 260 C470 230, 590 270, 700 350 C620 360, 575 385, 530 420 C490 452, 450 498, 420 560 C382 522, 360 470, 346 418 C333 365, 334 305, 350 260 Z"
              fill="#1b5fa5"
              opacity="0.7"
            />
            <path
              d="M60 360 C-35 430, -75 525, -30 635 C40 610, 132 578, 230 560 C305 546, 380 545, 450 560 C364 510, 296 472, 238 438 C176 401, 114 378, 60 360 Z"
              fill="#8cc8ff"
              opacity="0.5"
            />
            <circle cx="258" cy="270" r="58" fill="#06101c" opacity="0.95" />
            <circle cx="272" cy="257" r="12" fill="#e7f5ff" opacity="0.95" />
            <path d="M308 275 L395 255 L320 314 Z" fill="#d8ecff" opacity="0.85" />
            <path
              d="M206 198 C244 172, 280 166, 322 180 C300 202, 278 218, 245 225 C224 218, 210 210, 206 198 Z"
              fill="#dff3ff"
              opacity="0.65"
            />
            <path
              d="M198 290 C205 320, 214 352, 234 380 C254 409, 285 430, 328 444"
              stroke="#dff3ff"
              strokeOpacity="0.45"
              strokeWidth="7"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M175 320 C155 360, 146 404, 150 445 C170 430, 192 418, 217 410"
              stroke="#8cc8ff"
              strokeOpacity="0.38"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M122 390 C115 458, 125 522, 160 578 C190 624, 235 662, 292 688"
              stroke="#9ad4ff"
              strokeOpacity="0.3"
              strokeWidth="7"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          <g transform="translate(450 820) rotate(-8)" opacity="0.18">
            <path
              d="M0 0 C120 -20, 240 -10, 360 10 C500 34, 640 36, 780 10 C900 -12, 1040 -16, 1160 0"
              stroke="#8cc8ff"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>

      <div
        className="relative mx-auto flex min-h-screen w-full flex-col px-5 py-6 sm:px-7 lg:px-0"
        style={{ maxWidth: "860px" }}
      >
        <SiteHeader />

        <section className="flex flex-1 flex-col justify-center py-12">
          <div style={{ maxWidth: "680px" }}>
            <p className={`${heroFont.className} mb-4 text-sm font-medium tracking-[0.22em] text-[#8cc8ff]/65 uppercase`}>Hey! I&apos;m</p>
            <h1 className={`${heroFont.className} text-4xl font-extrabold tracking-[-0.05em] text-white sm:text-6xl`}>
              <span className="text-[#8cc8ff]">Kyzen</span>
            </h1>
            <p className={`${heroFont.className} mt-5 text-sm font-semibold tracking-[0.12em] text-white/60 sm:text-[1.05rem]`}>
              Programmer | Systems Explorer | Future Founder
                       
            </p>
            <p className="mt-6 font-mono text-[15px] leading-8 text-white/80 sm:text-[16px]" style={{ maxWidth: "640px" }}>
              I build and experiment with <span className="text-[#8cc8ff]">systems</span> while exploring the
              foundations of <span className="text-[#d7f0ff]">technology</span>. Curious about
              <span className="text-[#8cc8ff]"> systems</span>, <span className="text-[#9fd4ff]">space</span>, and the
              future of <span className="text-[#9fd4ff]">computing</span>.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 text-sm text-white/72">
            {socialLinks.map((item) => {
              return (
                <Link
                  key={item.label}
                  aria-label={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") || item.href.startsWith("mailto:") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") || item.href.startsWith("mailto:") ? "noreferrer" : undefined}
                  className={`flex h-16 w-16 items-center justify-center rounded-[14px] border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition-transform hover:-translate-y-0.5 ${item.bg} ${item.fg}`}
                >
                  <Image
                    src={item.iconSrc}
                    alt={`${item.label} icon`}
                    width={28}
                    height={28}
                    className="h-7 w-7 object-contain"
                  />
                </Link>
              );
            })}
          </div>

          <section className="mt-16 space-y-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-[#8cc8ff]/70">Recently updated</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-[28px]">
                  Featured projects
                </h2>
              </div>
              <Link className="text-sm text-white/55 transition-colors hover:text-[#8cc8ff]" href="/projects">
                View all →
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {featuredProjects.map((project, index) => (
                <Link
                  key={project.title}
                  href={`/projects/${index === 0 ? "luminos" : "bluelark"}`}
                  className="group rounded-[18px] border border-white/10 bg-[#070b12]/95 p-4 shadow-[0_0_0_1px_rgba(140,200,255,0.06)] transition-transform duration-300 hover:-translate-y-1 hover:border-[#8cc8ff]/30"
                >
                  <div className="rounded-[14px] border border-[#8cc8ff]/18 bg-[#111826] p-3 text-white shadow-[0_0_30px_rgba(140,200,255,0.04)]">
                    <div className="mb-3 flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ffcb6b]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#79d16d]" />
                    </div>
                    <div className="rounded-[10px] bg-[#0d1320] p-4 text-left text-[11px] text-white/90 shadow-inner shadow-black/20">
                      <div className="mb-3 flex items-center justify-between text-[10px] text-[#8cc8ff]">
                        <span>updated / main</span>
                        <span>0{index + 1}</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 w-2/3 rounded-full bg-white/90" />
                        <div className="h-2 w-5/6 rounded-full bg-white/60" />
                        <div className="h-2 w-3/5 rounded-full bg-white/35" />
                      </div>
                      <div className="mt-4 flex gap-2">
                        <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] text-white/80">live</span>
                        <span className="rounded-full bg-[#8cc8ff]/15 px-2 py-1 text-[10px] text-[#bfe3ff]">
                          systems
                        </span>
                        <span className="rounded-full bg-[#8cc8ff]/10 px-2 py-1 text-[10px] text-[#9fd4ff]">
                          release
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-lg font-medium text-white">{project.title}</h3>
                      <span className="text-xs uppercase tracking-[0.2em] text-[#8cc8ff]/70">new</span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-white/75">{project.description}</p>
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
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-16 space-y-5">
            <div className="rounded-[20px] border border-white/10 bg-[#070b12]/95 p-5 shadow-[0_0_0_1px_rgba(140,200,255,0.05)]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-[#8cc8ff]/70">New blog</p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">Latest posts</h2>
                </div>
                <Link className="text-sm text-white/55 transition-colors hover:text-[#8cc8ff]" href="/blog">
                  Open blog →
                </Link>
              </div>

              <div className="mt-5 space-y-4">
                {blogPosts.slice(0, 2).map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="block rounded-2xl border border-white/10 bg-[#0b111a] p-4 transition-colors hover:border-[#8cc8ff]/30 hover:bg-[#0d1320]">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-base font-medium text-white">{post.title}</h3>
                      <span className="font-mono text-xs text-white/45">{post.date}</span>
                    </div>
                    <p className="mt-3 font-mono text-sm leading-7 text-white/75">{post.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[20px] border border-white/10 bg-[#070b12]/95 p-5 shadow-[0_0_0_1px_rgba(140,200,255,0.05)]">
              <p className="text-sm uppercase tracking-[0.28em] text-[#8cc8ff]/70">GitHub contribution</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">Recent activity</h2>
                <div className="mt-5 pb-2">
                  <GithubContributionGraph weeks={contributionWeeks} />
              </div>
              <div className="mt-4 flex items-center justify-between gap-3 font-mono text-[11px] text-white/55">
                <span>Less</span>
                <div className="flex items-center gap-1.5">
                    {[
                      "bg-[#0e141b]",
                      "bg-[#0f3d2e]",
                      "bg-[#156f4d]",
                      "bg-[#1aa366]",
                      "bg-[#41d17f]",
                    ].map((color, index) => (
                    <span key={color} className={`h-3 w-3 rounded-[3px] ${color}`} title={`Level ${index}`} />
                  ))}
                </div>
                <span>More</span>
              </div>
            </div>
          </section>
        </section>

        <footer className="border-t border-white/10 py-6 text-sm text-white/45">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {socialLinks.map((item) => {
                return (
                  <Link
                    key={`footer-${item.label}`}
                    aria-label={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") || item.href.startsWith("mailto:") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") || item.href.startsWith("mailto:") ? "noreferrer" : undefined}
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 ${item.bg} ${item.fg}`}
                  >
                    <Image
                      src={item.iconSrc}
                      alt={`${item.label} icon`}
                      width={24}
                      height={24}
                      className="h-6 w-6 object-contain"
                    />
                  </Link>
                );
              })}
            </div>
            <div className="flex flex-col gap-1 text-[11px] uppercase tracking-[0.2em] text-white/40 sm:flex-row sm:items-center sm:gap-3">
              <span>© 2026 Kyzen. All rights reserved.</span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
