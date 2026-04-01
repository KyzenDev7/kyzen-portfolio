"use client";

import { useMemo, useState } from "react";

const intensityClasses = [
  "bg-[#0e141b]",
  "bg-[#0f3d2e]",
  "bg-[#156f4d]",
  "bg-[#1aa366]",
  "bg-[#41d17f]",
];

export default function GithubContributionGraph({ weeks }) {
  const [hoveredCell, setHoveredCell] = useState(null);

  const flatCells = useMemo(
    () =>
      weeks.flatMap((week, weekIndex) =>
        week.map((day, dayIndex) => ({
          ...day,
          weekIndex,
          dayIndex,
        }))
      ),
    [weeks]
  );

  const tooltip = hoveredCell
    ? {
        label: hoveredCell.tooltip,
        left: Math.max(12, hoveredCell.left - 4),
        top: Math.max(0, hoveredCell.top - 46),
      }
    : null;

  return (
    <div className="relative pb-12" data-graph-root="true">
      <div className="overflow-x-auto pb-2">
        <div className="grid grid-flow-col grid-rows-7 gap-1.5 min-w-max">
        {flatCells.map((cell) => (
          <button
            key={`${cell.weekIndex}-${cell.dayIndex}-${cell.date}`}
            type="button"
            aria-label={cell.tooltip}
            onMouseEnter={(event) => {
              const cellRect = event.currentTarget.getBoundingClientRect();
              const containerRect = event.currentTarget.closest('[data-graph-root="true"]')?.getBoundingClientRect();

              setHoveredCell({
                tooltip: cell.tooltip,
                left: cellRect.left - (containerRect?.left ?? 0) + cellRect.width / 2,
                top: cellRect.top - (containerRect?.top ?? 0),
              });
            }}
            onMouseLeave={() => setHoveredCell(null)}
            onFocus={(event) => {
              const cellRect = event.currentTarget.getBoundingClientRect();
              const containerRect = event.currentTarget.closest('[data-graph-root="true"]')?.getBoundingClientRect();

              setHoveredCell({
                tooltip: cell.tooltip,
                left: cellRect.left - (containerRect?.left ?? 0) + cellRect.width / 2,
                top: cellRect.top - (containerRect?.top ?? 0),
              });
            }}
            onBlur={() => setHoveredCell(null)}
            className={`h-3.5 w-3.5 rounded-[3px] transition-transform duration-150 hover:scale-110 focus:scale-110 focus:outline-none ${intensityClasses[cell.level] ?? intensityClasses[0]}`}
          />
        ))}
        </div>
      </div>

      {tooltip ? (
        <div
          className="pointer-events-none absolute z-10 rounded-md border border-white/10 bg-[#101721] px-3 py-2 font-mono text-[11px] text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          style={{
            left: `${tooltip.left}px`,
            top: `${tooltip.top}px`,
            transform: "translateX(-50%)",
          }}
        >
          {tooltip.label}
        </div>
      ) : null}
    </div>
  );
}
