export const projectData = {
  "luminos": {
    title: "LuminOS",
    path: "~/projects/luminos",
    description:
      "AI-native Linux distribution focused on privacy, local intelligence, and a polished desktop experience.",
    tags: ["linux", "ai", "privacy"],
    longDescription:
      "LuminOS is a privacy-first Linux distribution built to make everyday computing feel intelligent without giving up control. It combines local AI, a clean desktop, and careful system design so the experience stays fast, understandable, and private.",
    github: "https://github.com/4LuminOS",
    stack: ["Debian 13", "KDE Plasma", "Local AI", "Go tooling"],
    highlights: [
      "AI-native desktop workflow",
      "Privacy-first, offline-first design",
      "Custom ISO build pipeline",
      "Friendly installer and system setup",
    ],
  },
  "bluelark": {
    title: "BluelarkOS",
    path: "~/projects/bluelarkos",
    description:
      "Lightweight Unix-like operating system exploring a hybrid C and Rust architecture.",
    tags: ["os", "rust", "c"],
    longDescription:
      "BluelarkOS is a lightweight, Unix-like operating system in early development. It explores how traditional low-level system design can be strengthened with modern safety principles, combining C for hardware control with Rust for critical components.",
    github: "https://github.com/KyzenDev7",
    stack: ["C", "Rust", "Kernel design", "System fundamentals"],
    highlights: [
      "Hybrid kernel architecture",
      "Memory management and scheduling",
      "System calls and hardware interaction",
      "Modular and experimental development",
    ],
  },
};

export function getProject(slug) {
  return projectData[slug];
}