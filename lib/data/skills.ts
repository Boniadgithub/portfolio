export interface Skill {
  id: string;
  name: string;
  /** Inline SVG string — viewBox must be set, fill/stroke use currentColor where possible */
  icon: string;
  /** Optional accent color for the badge glow */
  color: string;
}

export const skills: Skill[] = [
  {
    id: "react",
    name: "React",
    color: "#61DAFB",
    icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="20" cy="20" rx="3.2" ry="3.2" fill="#61DAFB"/>
      <ellipse cx="20" cy="20" rx="18" ry="6.5" stroke="#61DAFB" stroke-width="1.6" fill="none" transform="rotate(0 20 20)"/>
      <ellipse cx="20" cy="20" rx="18" ry="6.5" stroke="#61DAFB" stroke-width="1.6" fill="none" transform="rotate(60 20 20)"/>
      <ellipse cx="20" cy="20" rx="18" ry="6.5" stroke="#61DAFB" stroke-width="1.6" fill="none" transform="rotate(120 20 20)"/>
    </svg>`,
  },
  {
    id: "nextjs",
    name: "Next.js",
    color: "#ffffff",
    icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4C11.163 4 4 11.163 4 20c0 8.836 7.163 16 16 16 4.833 0 9.156-2.142 12.128-5.543L18.37 14.4V28h-2.74V11.2h3.04l13.376 17.674A15.932 15.932 0 0036 20C36 11.163 28.837 4 20 4z" fill="currentColor"/>
      <path d="M26.96 11.2h2.76V25.6l-2.76-3.6V11.2z" fill="currentColor"/>
    </svg>`,
  },
  {
    id: "typescript",
    name: "TypeScript",
    color: "#3178C6",
    icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="32" height="32" rx="3" fill="#3178C6"/>
      <path d="M22.4 28V22.7h4.2v-2.5H16V22.7h4.1V28h2.3z" fill="white"/>
      <path d="M13 25.9c.4.8 1.1 1.4 2.1 1.8.8.3 1.6.4 2.5.4 1 0 1.8-.2 2.5-.5.7-.3 1.2-.8 1.5-1.4.3-.6.5-1.2.5-1.9 0-.8-.2-1.5-.7-2-.5-.6-1.3-1-2.3-1.3l-1.4-.4c-.5-.1-.9-.3-1.1-.5-.2-.2-.3-.5-.3-.8 0-.3.1-.6.4-.8.3-.2.6-.3 1.1-.3.6 0 1 .1 1.3.4.3.2.5.6.6 1h2.2c-.1-.9-.5-1.7-1.2-2.3-.7-.6-1.7-.9-2.9-.9-.8 0-1.5.2-2.1.5-.6.3-1 .7-1.4 1.3-.3.5-.5 1.1-.5 1.8 0 .9.3 1.7.8 2.2.5.5 1.3.9 2.3 1.2l1.3.4c.6.2 1 .4 1.2.6.2.2.3.5.3.8 0 .4-.2.7-.5.9-.3.2-.8.3-1.3.3-.6 0-1.1-.1-1.4-.4-.4-.3-.6-.7-.7-1.2H13z" fill="white"/>
    </svg>`,
  },
  {
    id: "javascript",
    name: "JavaScript",
    color: "#F7DF1E",
    icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="32" height="32" rx="3" fill="#F7DF1E"/>
      <path d="M22.3 27.5c.4.7.9 1.2 1.9 1.2 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.1-1.7-1.6l-.6-.2c-1.7-.7-2.8-1.6-2.8-3.5 0-1.7 1.3-3 3.3-3 1.5 0 2.5.5 3.2 1.8l-1.8 1.1c-.4-.7-.8-.9-1.4-.9-.6 0-1 .4-1 .9 0 .6.4.9 1.3 1.3l.6.2c2 .9 3.1 1.7 3.1 3.6 0 2.1-1.6 3.2-3.8 3.2-2.1 0-3.5-1-4.2-2.4l1.9-1.1-.6.6zM14 27.7c.3.5.5.9 1.1.9.6 0 .9-.2.9-1.2V21h2.3v6.5c0 2-1.2 2.9-2.9 2.9-1.6 0-2.5-.8-2.9-1.8L14 27.7z" fill="#333"/>
    </svg>`,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    color: "#06B6D4",
    icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 9c-4.4 0-7.2 2.2-8.4 6.6 1.68-2.2 3.64-3.025 5.88-2.475.938.234 1.61.914 2.353 1.667C21.09 16.06 22.715 17.75 26.4 17.75c4.4 0 7.2-2.2 8.4-6.6-1.68 2.2-3.64 3.025-5.88 2.475-.938-.234-1.61-.914-2.353-1.667C25.31 10.69 23.685 9 20 9zM11.6 17.75C7.2 17.75 4.4 19.95 3.2 24.35c1.68-2.2 3.64-3.025 5.88-2.475.938.234 1.61.914 2.353 1.667C12.69 24.81 14.315 26.5 18 26.5c4.4 0 7.2-2.2 8.4-6.6-1.68 2.2-3.64 3.025-5.88 2.475-.938-.234-1.61-.914-2.353-1.667C16.91 19.44 15.285 17.75 11.6 17.75z" fill="#06B6D4"/>
    </svg>`,
  },
  {
    id: "nodejs",
    name: "Node.js",
    color: "#8CC84B",
    icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4L5 12.5v15L20 36l15-8.5v-15L20 4z" fill="none" stroke="#8CC84B" stroke-width="1.6"/>
      <path d="M20 9.5v21M9 14.8l11 6.2 11-6.2" stroke="#8CC84B" stroke-width="1.4" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: "express",
    name: "Express.js",
    color: "#ffffff",
    icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 22.4c3.8-5.8 9.1-9.6 16-9.6 3.7 0 7 1 9.9 2.8l-1.5 2.1c-2.4-1.5-5-2.4-8.4-2.4-5.5 0-9.9 3.2-13 7.7L4 22.4z" fill="currentColor"/>
      <path d="M36 22.4c-3.8-5.8-9.1-9.6-16-9.6-3.7 0-7 1-9.9 2.8l1.5 2.1c2.4-1.5 5-2.4 8.4-2.4 5.5 0 9.9 3.2 13 7.7L36 22.4z" fill="currentColor"/>
      <circle cx="20" cy="22" r="3" fill="currentColor"/>
    </svg>`,
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    color: "#4169E1",
    icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="20" cy="12" rx="12" ry="5" stroke="#4169E1" stroke-width="1.6" fill="none"/>
      <path d="M8 12v10c0 2.76 5.37 5 12 5s12-2.24 12-5V12" stroke="#4169E1" stroke-width="1.6" fill="none"/>
      <path d="M8 17c0 2.76 5.37 5 12 5s12-2.24 12-5" stroke="#4169E1" stroke-width="1.6" fill="none"/>
      <line x1="20" y1="27" x2="20" y2="34" stroke="#4169E1" stroke-width="1.6" stroke-linecap="round"/>
      <line x1="16" y1="34" x2="24" y2="34" stroke="#4169E1" stroke-width="1.6" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: "prisma",
    name: "Prisma",
    color: "#2D3748",
    icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 33L20 5l14 28-14-8L6 33z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" fill="none"/>
      <line x1="20" y1="5" x2="20" y2="25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: "drizzle",
    name: "Drizzle ORM",
    color: "#C5F74F",
    icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 14h10M8 20h10M8 26h10" stroke="#C5F74F" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M22 14h10M22 20h10M22 26h10" stroke="#C5F74F" stroke-width="2.2" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: "figma",
    name: "Figma",
    color: "#F24E1E",
    icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="4" width="8" height="8" rx="4" fill="#F24E1E"/>
      <rect x="20" y="4" width="8" height="8" rx="4" fill="#FF7262"/>
      <rect x="12" y="12" width="8" height="8" rx="0" fill="#A259FF"/>
      <rect x="12" y="20" width="8" height="8" rx="4" fill="#1ABCFE"/>
      <circle cx="24" cy="16" r="4" fill="#0ACF83"/>
    </svg>`,
  },
  {
    id: "uxdesign",
    name: "UI/UX Design",
    color: "#FF6B6B",
    icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="8" width="28" height="18" rx="3" stroke="#FF6B6B" stroke-width="1.6" fill="none"/>
      <line x1="20" y1="26" x2="20" y2="32" stroke="#FF6B6B" stroke-width="1.6" stroke-linecap="round"/>
      <line x1="14" y1="32" x2="26" y2="32" stroke="#FF6B6B" stroke-width="1.6" stroke-linecap="round"/>
      <circle cx="14" cy="17" r="3" stroke="#FF6B6B" stroke-width="1.4" fill="none"/>
      <path d="M22 14l4 3-4 3" stroke="#FF6B6B" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    id: "framermotion",
    name: "Framer Motion",
    color: "#BB4B96",
    icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 8h20v12H10z" fill="#BB4B96"/>
      <path d="M10 20h10l10 12H10z" fill="#9E3D80"/>
      <path d="M20 20l10 12" stroke="#7B2D62" stroke-width="0" fill="none"/>
    </svg>`,
  },
  {
    id: "git",
    name: "Git",
    color: "#F05032",
    icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36.3 18.7L21.3 3.7a2.4 2.4 0 00-3.4 0l-3.4 3.4 4.3 4.3a2.85 2.85 0 013.6 3.6l4.2 4.2a2.85 2.85 0 11-1.7 1.7L21 16.9v10.2a2.85 2.85 0 11-2.3 0v-10.3a2.85 2.85 0 01-1.5-3.7L12.9 8.7l-9.2 9.3a2.4 2.4 0 000 3.4L18.7 36.3a2.4 2.4 0 003.4 0l14.2-14.2a2.4 2.4 0 000-3.4z" fill="#F05032"/>
    </svg>`,
  },
  {
    id: "github",
    name: "GitHub",
    color: "#ffffff",
    icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M20 4C11.163 4 4 11.163 4 20c0 7.08 4.592 13.088 10.963 15.207.8.147 1.093-.347 1.093-.77 0-.38-.013-1.387-.02-2.72-4.452.968-5.39-2.145-5.39-2.145-.728-1.85-1.777-2.342-1.777-2.342-1.453-.993.11-.973.11-.973 1.606.113 2.452 1.65 2.452 1.65 1.426 2.444 3.741 1.739 4.653 1.33.146-1.034.559-1.739 1.016-2.138-3.553-.404-7.287-1.777-7.287-7.91 0-1.748.624-3.178 1.647-4.298-.165-.404-.714-2.034.156-4.24 0 0 1.344-.43 4.4 1.64 1.276-.354 2.645-.53 4.003-.537 1.358.007 2.726.183 4.003.537 3.054-2.07 4.396-1.64 4.396-1.64.873 2.206.323 3.836.159 4.24 1.025 1.12 1.645 2.55 1.645 4.298 0 6.147-3.74 7.502-7.304 7.898.575.495 1.086 1.47 1.086 2.963 0 2.14-.02 3.867-.02 4.392 0 .427.287.925 1.1.768C31.413 33.08 36 27.076 36 20c0-8.837-7.163-16-16-16z" fill="currentColor"/>
    </svg>`,
  },
  {
    id: "firebase",
    name: "Firebase",
    color: "#FFCA28",
    icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 30l5.5-20 5.5 10.5L22 12l10 18H8z" fill="#FFCA28"/>
      <path d="M8 30l5.5-20 5.5 10.5" fill="#FFA000"/>
      <path d="M22 12l-3 8.5L22.5 30 32 30 22 12z" fill="#FF8F00"/>
    </svg>`,
  },
  {
    id: "openai",
    name: "OpenAI",
    color: "#10a37f",
    icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M34.2 17.1a8.4 8.4 0 00-.72-6.9 8.5 8.5 0 00-9.14-4.08 8.4 8.4 0 00-6.33-2.82 8.5 8.5 0 00-8.1 5.88 8.4 8.4 0 00-5.6 4.08 8.51 8.51 0 001.05 9.98 8.4 8.4 0 00.72 6.9 8.5 8.5 0 009.14 4.08 8.4 8.4 0 006.33 2.82 8.51 8.51 0 008.11-5.9 8.4 8.4 0 005.6-4.07 8.51 8.51 0 00-1.06-9.97zM22.03 32.3a6.3 6.3 0 01-4.04-1.46l.2-.11 6.7-3.87a1.1 1.1 0 00.56-.97v-9.46l2.83 1.63c.03.015.05.044.06.077v7.83a6.34 6.34 0 01-6.31 6.32zM7.1 26.8a6.3 6.3 0 01-.75-4.24l.2.12 6.7 3.87c.347.2.773.2 1.12 0L22 22.28v3.26a.1.1 0 01-.04.09l-6.77 3.91A6.34 6.34 0 017.1 26.8zm-1.74-14.7a6.3 6.3 0 013.28-2.78v7.95c-.001.396.21.763.55.963l7.57 4.37-2.83 1.63a.1.1 0 01-.1 0l-6.77-3.91a6.34 6.34 0 01-1.7-8.19zm23.26 5.43L21.05 13.1l2.83-1.63a.1.1 0 01.1 0l6.77 3.91a6.33 6.33 0 01-.98 11.42v-7.95a1.1 1.1 0 00-.55-.96zm2.82-4.27l-.2-.12-6.7-3.87a1.1 1.1 0 00-1.12 0L16 17.52v-3.26a.1.1 0 01.04-.09l6.77-3.9a6.33 6.33 0 019.43 6.56v.43zM14.83 21.4l-2.83-1.63a.1.1 0 01-.06-.08v-7.83a6.33 6.33 0 0110.38-4.86l-.2.11-6.7 3.87a1.1 1.1 0 00-.56.97l-.03 9.45zm1.53-3.3l3.3-1.9 3.3 1.9v3.8l-3.3 1.9-3.3-1.9v-3.8z" fill="#10a37f"/>
    </svg>`,
  },
  {
    id: "prompteng",
    name: "Prompt Engineering",
    color: "#a78bfa",
    icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="10" width="28" height="20" rx="3" stroke="#a78bfa" stroke-width="1.6" fill="none"/>
      <path d="M12 20l4-4 4 4 4-4 4 4" stroke="#a78bfa" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="32" cy="10" r="5" fill="#a78bfa"/>
      <path d="M30 10h4M32 8v4" stroke="white" stroke-width="1.4" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: "aievaluation",
    name: "AI Evaluation",
    color: "#34d399",
    icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 28l8-10 6 6 10-16" stroke="#34d399" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="32" cy="12" r="3" fill="#34d399"/>
      <path d="M5 34h30" stroke="#34d399" stroke-width="1.4" stroke-linecap="round" opacity="0.4"/>
    </svg>`,
  },
  {
    id: "responsive",
    name: "Responsive Design",
    color: "#38bdf8",
    icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="8" width="24" height="18" rx="2" stroke="#38bdf8" stroke-width="1.6" fill="none"/>
      <rect x="28" y="14" width="8" height="12" rx="1.5" stroke="#38bdf8" stroke-width="1.4" fill="none"/>
      <line x1="10" y1="30" x2="20" y2="30" stroke="#38bdf8" stroke-width="1.6" stroke-linecap="round"/>
      <line x1="15" y1="26" x2="15" y2="30" stroke="#38bdf8" stroke-width="1.4" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: "restapi",
    name: "REST APIs",
    color: "#fb923c",
    icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="20" r="4" stroke="#fb923c" stroke-width="1.6" fill="none"/>
      <circle cx="30" cy="12" r="4" stroke="#fb923c" stroke-width="1.6" fill="none"/>
      <circle cx="30" cy="28" r="4" stroke="#fb923c" stroke-width="1.6" fill="none"/>
      <line x1="14" y1="18.5" x2="26" y2="13.5" stroke="#fb923c" stroke-width="1.4" stroke-linecap="round"/>
      <line x1="14" y1="21.5" x2="26" y2="26.5" stroke="#fb923c" stroke-width="1.4" stroke-linecap="round"/>
    </svg>`,
  },
];
