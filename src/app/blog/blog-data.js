export const blogPosts = [
  {
    slug: "why-i-started-learning-systems-programming",
    title: "Why I Started Learning Systems Programming",
    date: "Mar 31, 2026",
    excerpt:
      "A personal note on why I chose systems programming, and what I want to understand underneath modern software.",
    content: [
      "Most people start programming by building websites or apps. I decided to go deeper — to understand how systems actually work.",
      "I’ve always been curious about how things are built, especially the parts that are not visible. Operating systems, memory, processes — the core of computing. That curiosity pushed me toward systems programming.",
      "Instead of just using software, I want to understand how it works underneath.",
      "Systems programming is not easy. It requires patience, attention to detail, and a deep understanding of how computers work. But that’s exactly why I chose it.",
      "I don’t just want to write code — I want to understand how memory is managed, how processes run, and how the OS interacts with hardware.",
      "Right now, I’m learning C and low-level programming, Linux and how systems behave, and core OS concepts. I’m also planning and starting my own project: BluelarkOS — a hybrid C + Rust operating system.",
      "BluelarkOS is my attempt to explore how modern safety (Rust) can work with traditional low-level control (C). It’s not about creating the next big OS. It’s about learning deeply and building something real.",
      "I’m not rushing. I’m learning step by step: understanding fundamentals, experimenting, building small parts, and improving gradually.",
      "I’ll be sharing my journey here: what I learn, what I build, and the mistakes and lessons along the way.",
      "This is just the beginning.",
    ],
  },
];

const contributionColumns = 52;
const contributionRows = 7;

export const contributionWeeks = Array.from({ length: contributionColumns }, (_, weekIndex) =>
  Array.from({ length: contributionRows }, (_, dayIndex) => {
    const seasonalWave = Math.sin((weekIndex / contributionColumns) * Math.PI * 4 + dayIndex * 0.7) * 1.4 + 1.4;
    const upwardTrend = Math.floor((weekIndex / contributionColumns) * 2.8);
    const weekdayBias = dayIndex === 0 || dayIndex === 6 ? -1 : 0;
    const focusPulse = weekIndex % 11 === 0 && dayIndex >= 2 && dayIndex <= 4 ? 2 : 0;
    const level = Math.round(seasonalWave + upwardTrend + weekdayBias + focusPulse);

    return Math.max(0, Math.min(4, level));
  })
);
