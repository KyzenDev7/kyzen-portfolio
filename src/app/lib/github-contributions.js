import { contributionWeeks as fallbackContributionWeeks } from "../blog/blog-data";

const GITHUB_CONTRIBUTIONS_URL = "https://github.com/users/KyzenDev7/contributions";

function formatFallbackTooltip(date, level) {
  const parsedDate = new Date(`${date}T00:00:00Z`);
  const month = new Intl.DateTimeFormat("en-US", { month: "long", timeZone: "UTC" }).format(parsedDate);
  const day = new Intl.DateTimeFormat("en-US", { day: "numeric", timeZone: "UTC" }).format(parsedDate);
  const suffix = day.endsWith("1") && day !== "11" ? "st" : day.endsWith("2") && day !== "12" ? "nd" : day.endsWith("3") && day !== "13" ? "rd" : "th";
  const countLabel = level === 0 ? "No contributions" : `${level} contribution${level === 1 ? "" : "s"}`;

  return `${countLabel} on ${month} ${day}${suffix}.`;
}

function parseContributionCells(html) {
  const cells = [];
  const cellPattern = /<td\b[^>]*><\/td>/g;
  let match = cellPattern.exec(html);

  while (match) {
    const cellHtml = match[0];
    const dateMatch = cellHtml.match(/data-date="([^"]+)"/);
    const levelMatch = cellHtml.match(/data-level="([^"]+)"/);
    const idMatch = cellHtml.match(/id="([^"]+)"/);

    if (!dateMatch || !levelMatch || !idMatch) {
      match = cellPattern.exec(html);
      continue;
    }

    const cellId = idMatch[1];
    const tooltipPattern = new RegExp(`<tool-tip[^>]*for="${cellId}"[^>]*>([\\s\\S]*?)<\\/tool-tip>`);
    const tooltipMatch = tooltipPattern.exec(html.slice(match.index, match.index + 1600));

    cells.push({
      id: cellId,
      date: dateMatch[1],
      level: Number.parseInt(levelMatch[1], 10) || 0,
      tooltip: tooltipMatch ? tooltipMatch[1].replace(/\s+/g, " ").trim() : "",
    });
    match = cellPattern.exec(html);
  }

  return cells;
}

function buildWeeksFromCells(cells) {
  if (cells.length === 0) {
    return fallbackContributionWeeks.map((week, weekIndex) =>
      week.map((level, dayIndex) => {
        const date = new Date(Date.UTC(2025, 2, 30 + weekIndex * 7 + dayIndex));

        return {
          date: date.toISOString().slice(0, 10),
          level,
          tooltip: formatFallbackTooltip(date.toISOString().slice(0, 10), level),
        };
      })
    );
  }

  const startDate = new Date(`${cells[0].date}T00:00:00Z`);
  const endDate = new Date(`${cells[cells.length - 1].date}T00:00:00Z`);
  const totalDays = Math.round((endDate.getTime() - startDate.getTime()) / 86_400_000) + 1;
  const weekCount = Math.ceil(totalDays / 7);
  const weeks = Array.from({ length: weekCount }, () => Array(7).fill(0));

  for (const cell of cells) {
    const currentDate = new Date(`${cell.date}T00:00:00Z`);
    const dayOffset = Math.round((currentDate.getTime() - startDate.getTime()) / 86_400_000);
    const weekIndex = Math.floor(dayOffset / 7);
    const weekdayIndex = currentDate.getUTCDay();

    if (!weeks[weekIndex]) {
      continue;
    }

    weeks[weekIndex][weekdayIndex] = {
      date: cell.date,
      level: cell.level,
      tooltip: cell.tooltip || formatFallbackTooltip(cell.date, cell.level),
    };
  }

  return weeks;
}

export async function getGithubContributionWeeks() {
  try {
    const response = await fetch(GITHUB_CONTRIBUTIONS_URL, {
      cache: "no-store",
    });

    if (!response.ok) {
      return buildWeeksFromCells([]);
    }

    const html = await response.text();
    const cells = parseContributionCells(html);
    return buildWeeksFromCells(cells);
  } catch {
    return buildWeeksFromCells([]);
  }
}
