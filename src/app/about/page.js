import SiteHeader from "../../components/SiteHeader";
import IllustratedBackground from "../../components/IllustratedBackground";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <IllustratedBackground />
      <div className="relative mx-auto flex min-h-screen w-full flex-col px-5 py-6 sm:px-7 lg:px-0" style={{ maxWidth: "860px" }}>
        <SiteHeader />

        <section className="py-10">
          <p className="text-sm uppercase tracking-[0.28em] text-[#8cc8ff]/70">About me</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Who I&apos;m 🤔
          </h1>

          <div className="mt-8 space-y-8 text-sm leading-8 text-white/80 sm:text-base">
            <div className="max-w-3xl space-y-4 font-mono">
              <p>
                Hi, I&apos;m Kyzen 🇮🇳.
              </p>
              <p>
                I&apos;m deeply curious about technology and how systems work at their core. From a young age, I&apos;ve
                been interested in understanding how things are built, how they function, and how they can be improved
                or reimagined.
              </p>
              <p>
                Currently, I&apos;m focused on exploring low-level programming, operating systems, and the fundamentals of
                computing. I enjoy learning step by step, experimenting with ideas, and building a strong foundation
                for the future.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-sm uppercase tracking-[0.24em] text-[#8cc8ff]/70">What I&apos;m Into 🚀</h2>
              <ul className="mt-4 space-y-3 text-white/78">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#8cc8ff]" />
                  <span>Systems &amp; low-level programming</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#8cc8ff]" />
                  <span>Technology and innovation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#8cc8ff]" />
                  <span>Space and future exploration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#8cc8ff]" />
                  <span>Open-source and collaborative projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#8cc8ff]" />
                  <span>Expressing ideas through code</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-sm uppercase tracking-[0.24em] text-[#8cc8ff]/70">A Bit More About Me 🌌</h2>
              <div className="mt-4 max-w-3xl space-y-4 font-mono">
                <p>
                  I believe in continuous learning and long-term growth. I spend most of my time exploring new
                  concepts, experimenting, and improving my skills.
                </p>
                <p>
                  Outside of tech, I enjoy photography, traveling especially mountains and rivers and gaming,
                  with Minecraft being one of my favorites. I&apos;m also interested in physics, as it helps me see and
                  understand the world from a different perspective.
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-sm uppercase tracking-[0.24em] text-[#8cc8ff]/70">Current Learning Path ⚙️</h2>
              <ul className="mt-4 space-y-3 text-white/78">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#8cc8ff]" />
                  <span>C, C++ systems and low-level concepts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#8cc8ff]" />
                  <span>Linux systems &amp; Bash</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#8cc8ff]" />
                  <span>GitHub and open-source workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#8cc8ff]" />
                  <span>Golang</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#8cc8ff]" />
                  <span>Cybersecurity basics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#8cc8ff]" />
                  <span>Python just exploring AI/ML concepts</span>
                </li>
              </ul>
            </div>

            <p className="max-w-3xl font-mono text-white/76">
              Thanks for reading 🙂
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
