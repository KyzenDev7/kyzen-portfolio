"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function getTerminalPath(pathname) {
  if (pathname === "/") {
    return "~/home";
  }

  if (pathname === "/about") {
    return "~/home/about";
  }

  if (pathname === "/projects") {
    return "~/home/projects";
  }

  if (pathname === "/contact") {
    return "~/home/contact";
  }

  if (pathname === "/blog") {
    return "~/home/blog";
  }

  if (pathname.startsWith("/projects/")) {
    return `~/home${pathname}`;
  }

  return `~/home${pathname}`;
}

export default function SiteHeader() {
  const pathname = usePathname();
  const terminalPath = getTerminalPath(pathname);

  return (
    <header className="sticky top-0 z-10 mb-10 border-b border-white/5 bg-black/90 backdrop-blur-md">
      <div className="flex items-center justify-between gap-4 px-1 py-3 text-sm text-white/70">
        <Link className="font-mono text-white/90 transition-colors hover:text-[#8cc8ff]" href={pathname}>
          <span className="text-[#8cc8ff]">{terminalPath}</span>
        </Link>
        <nav className="hidden gap-8 md:flex">
          <Link className="transition-colors hover:text-[#8cc8ff]" href="/">
            Home
          </Link>
          <Link className="transition-colors hover:text-[#8cc8ff]" href="/about">
            About
          </Link>
          <Link className="transition-colors hover:text-[#8cc8ff]" href="/projects">
            Projects
          </Link>
          <Link className="transition-colors hover:text-[#8cc8ff]" href="/blog">
            Blog
          </Link>
          <Link className="transition-colors hover:text-[#8cc8ff]" href="/contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}