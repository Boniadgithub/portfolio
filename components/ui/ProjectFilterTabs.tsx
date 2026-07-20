"use client";

import { motion } from "framer-motion";
import { Palette, Code2, LayoutGrid } from "lucide-react";
import type { ProjectType } from "@/lib/data";

export type FilterValue = "all" | ProjectType;

interface Tab {
  value: FilterValue;
  label: string;
  icon: React.ReactNode;
  count: number;
}

interface ProjectFilterTabsProps {
  active: FilterValue;
  counts: Record<FilterValue, number>;
  onChange: (value: FilterValue) => void;
}

export default function ProjectFilterTabs({
  active,
  counts,
  onChange,
}: ProjectFilterTabsProps) {
  const tabs: Tab[] = [
    {
      value: "all",
      label: "All",
      icon: <LayoutGrid size={13} strokeWidth={2} />,
      count: counts.all,
    },
    {
      value: "design",
      label: "Design",
      icon: <Palette size={13} strokeWidth={2} />,
      count: counts.design,
    },
    {
      value: "development",
      label: "Development",
      icon: <Code2 size={13} strokeWidth={2} />,
      count: counts.development,
    },
  ];

  return (
    <div
      role="tablist"
      aria-label="Filter projects by category"
      className="inline-flex items-center gap-1 rounded-full border border-line bg-base-soft/60 p-1 backdrop-blur-sm"
    >
      {tabs.map((tab) => {
        const isActive = active === tab.value;
        return (
          <button
            key={tab.value}
            role="tab"
            id={`tab-${tab.value}`}
            aria-selected={isActive}
            aria-controls={`tabpanel-projects`}
            onClick={() => onChange(tab.value)}
            className={`
              relative flex items-center gap-1.5 rounded-full px-4 py-2
              font-sans text-sm font-medium transition-colors duration-200
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
              ${isActive ? "text-ink-primary" : "text-ink-faint hover:text-ink-secondary"}
            `}
          >
            {/* Animated active pill */}
            {isActive && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-base-raised shadow-sm"
                style={{ zIndex: 0 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              />
            )}

            {/* Content sits above the pill */}
            <span className="relative z-10 flex items-center gap-1.5">
              <span className={`transition-colors duration-200 ${isActive ? "text-accent" : ""}`}>
                {tab.icon}
              </span>
              <span>{tab.label}</span>
              <span
                className={`
                  ml-0.5 rounded-full px-1.5 py-0.5 font-mono text-[10px] leading-none
                  transition-colors duration-200
                  ${isActive
                    ? "bg-accent/10 text-accent"
                    : "bg-line text-ink-faint"}
                `}
              >
                {tab.count}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
