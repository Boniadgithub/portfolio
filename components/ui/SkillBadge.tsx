"use client";

import { memo } from "react";
import type { Skill } from "@/lib/data/skills";

interface SkillBadgeProps {
  skill: Skill;
}

const SkillBadge = memo(function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <div
      className="skill-badge group"
      style={{ "--badge-color": skill.color } as React.CSSProperties}
      aria-label={skill.name}
    >
      {/* Icon */}
      <span
        className="skill-badge__icon"
        dangerouslySetInnerHTML={{ __html: skill.icon }}
        aria-hidden="true"
      />

      {/* Label */}
      <span className="skill-badge__label">{skill.name}</span>

      {/* Separator dot */}
      <span className="skill-badge__sep" aria-hidden="true" />
    </div>
  );
});

export default SkillBadge;
