import SiteHeader from "../../components/SiteHeader";
import IllustratedBackground from "../../components/IllustratedBackground";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <IllustratedBackground />
      <div className="relative mx-auto flex min-h-screen w-full flex-col px-5 py-6 sm:px-7 lg:px-0" style={{ maxWidth: "860px" }}>
        <SiteHeader />

        <section className="py-10">
          <p className="text-sm uppercase tracking-[0.28em] text-[#8cc8ff]/70">Contact</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Let&apos;s build something serious
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            Reach out for any questions or open source collaboration.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 transition-colors hover:border-[#8cc8ff]/40 hover:text-[#8cc8ff]" href="https://github.com/KyzenDev7">
              GitHub
            </a>
            <a className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 transition-colors hover:border-[#8cc8ff]/40 hover:text-[#8cc8ff]" href="https://discord.com/users/837383364083580969">
              Discord
            </a>
            <a className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 transition-colors hover:border-[#8cc8ff]/40 hover:text-[#8cc8ff]" href="mailto:hello@kyzen7.me">
              Email
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}