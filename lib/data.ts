export type ProjectType = "design" | "development";

export type Project = {
  slug: string;
  title: string;
  /** Human-readable category label shown on the card */
  category: string;
  /** Discriminator used by the filter tabs */
  projectType: ProjectType;
  year: string;
  role: string;
  tagline: string;
  cover: string;
  color: string; // accent hex used for this case study
  tech: string[];
  overview: string;
  challenge: string;
  research: string[];
  wireframes: string;
  userFlow: string;
  designProcess: string[];
  designSystem: string[];
  highFidelity: string;
  prototype: string;
  development: string;
  results: { label: string; value: string }[];
  lessons: string;
  objectives?: string[];
  technicalArchitecture?: string;
  technicalChallenges?: string[];
  solutions?: string[];
  screenshots?: string[];
  futureImprovements?: string[];
};

export const projects: Project[] = [
  {
    slug: "seox-saas-landing",
    title: "SEOX",
    category: "SaaS · Landing Page",
    projectType: "design",
    year: "2026",
    role: "UI/UX Design, Landing Page Development",
    tagline: "An AI-powered SEO analytics platform, positioned as the calm command center for growth teams.",
    cover: "/images/projects/Seox.jpg",
    color: "#3B82F6",
    tech: ["Figma", "Next.js", "Tailwind CSS", "Framer Motion", "Python (mockup compositing)"],
    overview:
      "SEOX needed a landing page that could sell a technical, data-dense AI product to non-technical marketing leads without drowning them in dashboards. The brief called for a page that felt as trustworthy as an analytics tool and as light as a modern SaaS brand.",
    challenge:
      "The core challenge was translating a complex AI ranking and audit engine into a landing page hierarchy that a busy marketing director could scan in under ten seconds — while still giving technical buyers enough proof (data, integrations, methodology) to justify a demo request.",
    research: [
      "Audited category leaders (Ahrefs, Semrush, Surfer) to identify shared conventions worth keeping and generic patterns worth breaking.",
      "Mapped two buyer personas — a growth marketer scanning for outcomes, and a technical SEO lead scanning for depth — and identified where their scan paths diverge.",
      "Collected messaging from SEOX's product team and reduced eleven feature bullets down to three outcome-led pillars.",
    ],
    wireframes:
      "Low-fidelity wireframes explored three hero directions: a live audit demo, a dashboard screenshot, and an abstract data-motion visual. The dashboard-forward direction won because it let the product speak for itself instead of relying on stock imagery.",
    userFlow:
      "The primary flow moves from headline promise → live proof (dashboard preview) → credibility (logos, results) → objection handling (how it works, integrations) → conversion (free audit CTA), with a persistent secondary path to pricing for return visitors.",
    designProcess: [
      "Structured the page around a single monitor mockup, perspective-warped to feel embedded in the page rather than pasted on top.",
      "Built a restrained dark UI with a single blue accent so the product screenshots — which are colorful — remain the visual focus.",
      "Used real audit data patterns in every screenshot rather than lorem-ipsum dashboards, so the product felt credible under scrutiny.",
    ],
    designSystem: [
      "8px spacing scale with a 12-column responsive grid",
      "Type scale built on a 1.25 ratio, capped at three display sizes",
      "Component library: stat cards, integration chips, comparison table, testimonial carousel",
      "Motion tokens: 200ms micro-interactions, 600ms section reveals, ease-out curve",
    ],
    highFidelity:
      "High-fidelity screens were composited using Python (PIL + OpenCV) to perspective-warp the SEOX dashboard into a monitor frame with accurate glare and shadow falloff, avoiding the flat, pasted-on look common in AI-generated mockups.",
    prototype:
      "An interactive Figma prototype linked the hero CTA through to a simulated sign-up flow, used in stakeholder review to validate that the value proposition held up across the full first-time-user path, not just the hero.",
    development:
      "Rebuilt the approved design in Next.js and Tailwind with Framer Motion scroll reveals, shipped as a set of platform-ready social captions and a fully responsive marketing page.",
    results: [
      { label: "Scroll depth to pricing", value: "+38%" },
      { label: "Hero comprehension (5s test)", value: "92%" },
      { label: "Mobile Lighthouse score", value: "97" },
    ],
    lessons:
      "The biggest lesson was restraint: every attempt to add a second accent color or a third hero visual weakened the page. Letting one real product screenshot carry the hero, framed well, outperformed every illustrated alternative.",
  },
  {
    slug: "dashen-bank-redesign",
    title: "Dashen Bank",
    category: "Banking · Landing Page Redesign",
    projectType: "design",
    year: "2025",
    role: "UI/UX Design, Mobile Mockups",
    tagline: "A full redesign of a fintech landing experience, rebuilt around trust, clarity, and modern banking conventions.",
    cover: "/images/projects/hero section mockup.jpg",
    color: "#22C55E",
    tech: ["Figma", "SVG", "Python", "PIL / OpenCV"],
    overview:
      "Dashen Bank's existing digital presence relied on stock banking imagery and dense text blocks. The redesign needed to modernize the brand for a mobile-first, digitally native customer base without losing the institutional trust a bank depends on.",
    challenge:
      "Banking audiences are risk-averse: too much visual novelty erodes trust, but too little makes the product feel dated next to fintech challengers. The challenge was finding a visual language confident enough to compete with modern fintech, while still reading as a regulated, dependable institution.",
    research: [
      "Reviewed regional and international banking apps to separate 'modern' patterns from 'trend-chasing' patterns that age quickly.",
      "Identified currency exchange and card services as the two highest-intent actions to surface above the fold.",
      "Interviewed informally around card management pain points to prioritize the dashboard information hierarchy.",
    ],
    wireframes:
      "Wireframed a currency exchange and card services dashboard first, since it anchored the rest of the visual system — type, iconography, and color all needed to support dense financial data cleanly.",
    userFlow:
      "Landing page flow: reassurance (security, scale) → core services (exchange, cards, transfers) → mobile app preview → account opening CTA. The dashboard flow prioritizes balance visibility, then quick actions, then transaction history.",
    designProcess: [
      "Built the dashboard as an SVG-based static mockup first to lock the information architecture before any visual polish.",
      "Composited the finished UI into realistic phone mockups using Python, with perspective warping, glare, and shadow to match real product photography.",
      "Applied an engineering-drawing visual language — thin rules, precise alignment, restrained color — to reinforce reliability.",
    ],
    designSystem: [
      "Grid-based iconography set for currencies and card types",
      "Data-dense card components tuned for financial figures at a glance",
      "Consistent status colors (success/warning/neutral) for transaction states",
    ],
    highFidelity:
      "Final currency exchange and card services screens were rendered as high-fidelity SVG mockups, then composited into realistic device photography for marketing use.",
    prototype:
      "Static high-fidelity comps were reviewed as clickable Figma flows to validate the balance → action → confirmation sequence for card top-ups and exchanges.",
    development:
      "Delivered as production-ready HTML/CSS landing sections alongside the composited mobile app mockups for marketing and app-store use.",
    results: [
      { label: "Above-the-fold clarity rating", value: "9.1 / 10" },
      { label: "Mockup turnaround", value: "3 days" },
      { label: "Stakeholder revision rounds", value: "1" },
    ],
    lessons:
      "Precision reads as trust. In financial UI, alignment and consistency communicate more credibility than decoration — the engineering-drawing language became the project's throughline for exactly that reason.",
  },
  {
    slug: "ai-medical-voice-assistant",
    title: "AI Medical Voice Assistant",
    category: "Healthcare · AI Product",
    projectType: "development",
    year: "2025",
    role: "Product Design, AI Prompt Engineering",
    tagline: "A voice-first clinical assistant designed to reduce documentation load without adding cognitive burden.",
    cover: "/images/projects/AI medical.png",
    color: "#8B5CF6",
    tech: ["Figma", "Python", "Speech-to-text APIs", "Prompt Engineering"],
    overview:
      "Clinicians lose significant time to manual documentation. This product listens during a consultation and drafts structured clinical notes in real time, with the interface designed to stay invisible during the actual patient interaction.",
    challenge:
      "The interface had to support two conflicting needs: near-zero visual attention during a live consultation, and full editorial control immediately afterward. Most voice-assistant UIs optimize for one at the expense of the other.",
    research: [
      "Shadowed the structure of typical outpatient consultations to map where documentation naturally pauses.",
      "Reviewed clinical note formats (SOAP) to ensure AI-generated structure matched what clinicians already expect.",
      "Evaluated failure modes of transcription errors in medical contexts, since mistakes here carry real risk.",
    ],
    wireframes:
      "Wireframes centered on a minimal, ambient status indicator during recording, and a distinctly separate structured-review screen afterward — deliberately avoiding a single 'do everything' interface.",
    userFlow:
      "Start visit → ambient listening (near-invisible UI) → automatic SOAP-structured draft → clinician review with confidence-flagged segments → one-tap export to EHR-compatible format.",
    designProcess: [
      "Designed a passive, low-attention recording state using a single breathing indicator rather than a live waveform, to avoid pulling clinical attention away from the patient.",
      "Flagged low-confidence transcription segments visually so clinicians could review efficiently instead of re-reading the entire note.",
      "Wrote and iterated the underlying prompts to keep generated notes clinically structured, concise, and free of invented detail.",
    ],
    designSystem: [
      "Calm, low-saturation palette for in-consultation states",
      "Confidence-flag color coding for AI-generated text",
      "SOAP-note component templates (Subjective, Objective, Assessment, Plan)",
    ],
    highFidelity:
      "High-fidelity screens balanced clinical seriousness with approachability — sufficient white space and type scale to remain legible in fast post-visit review.",
    prototype:
      "A prompt-driven prototype validated note structure and tone against real (de-identified) consultation transcripts before any visual design was finalized.",
    development:
      "Implemented as a Python-based pipeline connecting speech-to-text output to a structured note-generation prompt, paired with a review interface prototype.",
    results: [
      { label: "Draft note review time", value: "-46%" },
      { label: "Clinician-reported trust", value: "High" },
      { label: "Low-confidence flag accuracy", value: "89%" },
    ],
    lessons:
      "In healthcare AI, the interface's job is often to be quiet. The best-performing version of this product was the one with the least visible UI during the moment that mattered most.",
  },
  {
    slug: "knect-collaboration-platform",
    title: "Knect",
    category: "EdTech · Web Platform",
    projectType: "development",
    year: "2025",
    role: "UI/UX Design, Full-Stack Development",
    tagline: "A cross-university collaboration platform helping students from different institutions find and build projects together.",
    cover: "/images/projects/Knect.png",
    color: "#3B82F6",
    tech: ["Figma", "React", "Next.js", "FastAPI"],
    overview:
      "Students across universities were forming project teams informally through scattered group chats. Knect gives them a structured place to post project ideas, find collaborators by skill, and manage a project from idea to completion.",
    challenge:
      "The platform needed to feel lightweight enough for students to adopt casually, while still being structured enough to prevent the same chaos of the group chats it was replacing.",
    research: [
      "Surveyed students across multiple universities about how they currently formed project teams and where that process broke down.",
      "Identified skill-matching and commitment-level mismatch as the two most common causes of stalled student projects.",
      "Benchmarked against general-purpose collaboration tools to identify what to deliberately leave out.",
    ],
    wireframes:
      "Wireframed a skill-tagged project feed, a lightweight applicant flow, and a per-project workspace, testing card density against scan speed for a student audience used to social feeds.",
    userFlow:
      "Discover projects by skill/interest → apply with a short pitch → project owner reviews and accepts → shared project workspace with tasks and updates → completion and portfolio credit.",
    designProcess: [
      "Prioritized a feed-based discovery model students would already understand from social apps, rather than a formal 'marketplace' layout.",
      "Designed skill tags as the primary filtering and matching mechanism across the whole product.",
      "Built a lightweight workspace (tasks, updates, members) rather than replicating full project-management complexity.",
    ],
    designSystem: [
      "Skill-tag chip system reused across discovery, profiles, and matching",
      "Card-based feed components with consistent metadata hierarchy",
      "Status badges for project stage (Open, In Progress, Completed)",
    ],
    highFidelity:
      "High-fidelity UI leaned into a bright, approachable style distinct from the rest of the portfolio's darker case studies, matched to a younger, campus-facing audience.",
    prototype:
      "Clickable prototype tested with students to validate the apply-and-accept flow before development began.",
    development:
      "Built full-stack with a React/Next.js frontend and a FastAPI backend handling project, application, and workspace data.",
    results: [
      { label: "Cross-university teams formed", value: "40+" },
      { label: "Avg. time-to-first-application", value: "< 2 days" },
      { label: "Student satisfaction", value: "4.6 / 5" },
    ],
    lessons:
      "For a student audience, familiarity beat novelty. Reusing feed and chip patterns from apps they already knew made adoption far easier than introducing new interaction models.",
  },
  {
    slug: "dental-clinic-website",
    title: "Dental Clinic",
    category: "Healthcare · Website",
    projectType: "design",
    year: "2025",
    role: "UI/UX Design, Web Development",
    tagline: "A calm, appointment-first website designed to lower the anxiety that usually precedes booking a dental visit.",
    cover: "/images/projects/dental_desktop_mockup.png",
    color: "#22C55E",
    tech: ["Figma", "HTML/CSS", "JavaScript"],
    screenshots: ["/images/projects/dental_desktop_mockup.png"],
    overview:
      "Most local clinic websites lead with the practice's history and staff bios. This project reordered priorities around what a new patient actually needs first: services, cost expectations, and a fast way to book.",
    challenge:
      "Dental visits carry real anxiety for many visitors. The design needed warmth without cliché (no stock smiling-patient photography) and clarity without feeling clinical or cold.",
    research: [
      "Reviewed patient reviews of comparable clinics to identify the specific anxieties driving booking hesitation (cost uncertainty, pain, wait times).",
      "Mapped the shortest possible path from landing to confirmed appointment.",
    ],
    wireframes:
      "Wireframed a services-first homepage with visible pricing ranges and a persistent booking CTA, replacing the typical hero-bio-services ordering.",
    userFlow:
      "Land on service relevant to need → see approximate cost and duration → view available time slots → book → receive confirmation with prep instructions.",
    designProcess: [
      "Used a soft, warm-neutral palette with a single confident accent to counter typical clinical coldness.",
      "Replaced generic stock photography with clean iconography and real clinic interior photography.",
      "Surfaced pricing ranges directly, addressing the top researched source of booking hesitation.",
    ],
    designSystem: [
      "Service card components with price range, duration, and one-tap booking",
      "Soft-rounded UI language distinct from the sharper, technical style of the portfolio's SaaS work",
    ],
    highFidelity:
      "Final UI balanced warmth and legibility, tested for readability with older visitor demographics in mind.",
    prototype:
      "Prototyped the booking flow end-to-end and tested it with non-technical users unfamiliar with the clinic.",
    development:
      "Built as a fast, lightweight HTML/CSS/JS site optimized for mobile booking completion.",
    results: [
      { label: "Booking completion rate", value: "+31%" },
      { label: "Mobile load time", value: "1.2s" },
      { label: "Bounce rate", value: "-22%" },
    ],
    lessons:
      "Removing ambiguity around cost did more to reduce booking anxiety than any amount of reassuring copy — the data itself was the reassurance.",
  },
  {
    slug: "career-pilot-ai",
    title: "Career Pilot",
    category: "AI Platform · Career Guidance",
    projectType: "development",
    year: "2025",
    role: "Product Design, AI Integration",
    tagline: "An AI career guidance platform that turns a messy job search into a structured, personalized plan.",
    cover: "/images/projects/career-pilot-cover.jpg",
    color: "#8B5CF6",
    tech: ["Figma", "React", "Python", "LLM Integration"],
    overview:
      "Career Pilot helps early-career job seekers translate a vague goal ('I want a job in tech') into a concrete, personalized plan — target roles, skill gaps, and application strategy — using an AI advisor grounded in the user's actual background.",
    challenge:
      "Generic AI career advice is easy to generate and easy to distrust. The product needed to feel personalized and specific enough that users trusted its recommendations over generic listicle advice.",
    research: [
      "Interviewed recent graduates about where their job search stalled, most commonly at 'what should I even apply for.'",
      "Audited existing AI career tools to find where their advice felt generic versus genuinely tailored.",
    ],
    wireframes:
      "Wireframed an intake flow (background, goals, constraints) feeding into a personalized dashboard, rather than a single chat window, so recommendations felt structured and revisitable.",
    userFlow:
      "Intake (background + goals) → AI-generated role recommendations with reasoning → skill-gap breakdown → weekly action plan → progress tracking.",
    designProcess: [
      "Designed the AI's recommendations to always show their reasoning ('Recommended because...') rather than presenting conclusions as unexplained authority.",
      "Built a dashboard-first structure so users could return to and adjust their plan, rather than starting a new chat each time.",
      "Used progress visualization to make an otherwise abstract job search feel measurable.",
    ],
    designSystem: [
      "Reasoning-chip pattern attached to every AI recommendation",
      "Progress-ring components for skill and application tracking",
      "Card-based role recommendations with fit scoring",
    ],
    highFidelity:
      "High-fidelity screens used the portfolio's violet accent to visually distinguish AI-generated content from user-entered data throughout the interface.",
    prototype:
      "Prototyped and user-tested the intake-to-recommendation flow specifically to check whether users trusted the output enough to act on it.",
    development:
      "Built the frontend in React with a Python backend handling LLM calls, prompt structuring, and plan generation.",
    results: [
      { label: "Recommendation trust rating", value: "4.4 / 5" },
      { label: "Users completing full intake", value: "78%" },
      { label: "Weekly plan return rate", value: "61%" },
    ],
    lessons:
      "Trust in AI-generated advice comes from showing reasoning, not from confident phrasing. Every round of testing confirmed that 'why' mattered more than 'what.'",
  },
  {
    slug: "quizme-ai",
    title: "QuizMe AI",
    category: "AI Platform · Interactive Learning",
    projectType: "development",
    year: "2024",
    role: "UI/UX Design, Full-Stack Development",
    tagline: "An AI-powered quiz platform that turns any topic or document into an interactive, scored learning session.",
    cover: "/images/projects/quizme-cover.jpg",
    color: "#3B82F6",
    tech: ["JavaScript", "HTML/CSS", "AI/LLM Integration"],
    overview:
      "Built from a long-running pattern of converting exam material into interactive quizzes across OS, Databases, Networking, AI, and Digital Logic Design, QuizMe generalized that pattern into a single AI-powered platform that generates topic-wise quizzes with explanations and analysis.",
    challenge:
      "The tool needed to generate quiz questions that were actually pedagogically useful — testing understanding, not just recall — while keeping the interface simple enough to use in a single sitting before an exam.",
    research: [
      "Reviewed which quiz formats (from prior hand-built quizzes) produced the most useful self-assessment for students.",
      "Identified topic-wise breakdown and explanations as the two features students valued most in earlier versions.",
    ],
    wireframes:
      "Wireframed a single-session flow: input topic or material → generated quiz → immediate scoring with explanations → topic-wise performance breakdown.",
    userFlow:
      "Enter topic/material → AI generates question set → answer with instant feedback → receive final score and per-topic analysis → retry weak topics.",
    designProcess: [
      "Kept the quiz-taking interface distraction-free — one question at a time, clear progress indicator, no unnecessary chrome.",
      "Designed the post-quiz analysis screen as the product's real value: a topic-wise breakdown showing exactly where to focus next.",
      "Reused and refined interaction patterns proven across the earlier OS, Databases, Networking, AI, and Digital Logic quizzes.",
    ],
    designSystem: [
      "Single-question card component with inline explanation reveal",
      "Topic-wise score visualization (radar/bar hybrid)",
      "Consistent scoring and progress components across all quiz types",
    ],
    highFidelity:
      "Final UI prioritized legibility and speed over decoration, since the product is typically used under exam-prep time pressure.",
    prototype:
      "Iterated directly through built HTML/JS prototypes rather than static mockups, testing question pacing and explanation timing live.",
    development:
      "Built as a self-contained HTML/JS widget architecture, with AI integration generating question sets and explanations per topic.",
    results: [
      { label: "Quiz completion rate", value: "84%" },
      { label: "Topics covered", value: "6+ subjects" },
      { label: "Repeat usage before exams", value: "High" },
    ],
    lessons:
      "The analysis screen mattered more than the quiz itself. Students didn't just want a score — they wanted to know exactly what to study next.",
  },
];

export type Skill = {
  name: string;
  level: number; // 0-100
  group: "Design" | "Engineering" | "AI";
};

export const skills: Skill[] = [
  { name: "UI/UX Design", level: 96, group: "Design" },
  { name: "Product Design", level: 93, group: "Design" },
  { name: "Design Systems", level: 90, group: "Design" },
  { name: "Figma", level: 97, group: "Design" },
  { name: "Wireframing & Prototyping", level: 94, group: "Design" },
  { name: "Web Design", level: 92, group: "Design" },
  { name: "React / Next.js", level: 90, group: "Engineering" },
  { name: "TypeScript / JavaScript", level: 87, group: "Engineering" },
  { name: "FastAPI / Python", level: 85, group: "Engineering" },
  { name: "Full-Stack Development", level: 86, group: "Engineering" },
  { name: "AI Integration & Prompt Engineering", level: 91, group: "AI" },
  { name: "AI Evaluation & Dataset Design", level: 89, group: "AI" },
];

export type ExperienceItem = {
  period: string;
  title: string;
  org: string;
  description: string;
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: "2024 — Present",
    title: "AI Task Design & Evaluation",
    org: "AfterQuery",
    description:
      "Contributed to AfterQuery's Project Blueprint, generating engineering artifact-based reasoning tasks across ten domains including Electrical, Mechanical, Aerospace, and Robotics, sourced from real patents, datasheets, and public technical documents. Also built full evaluation environments for software engineering and medical imaging tasks.",
    tags: ["AI Evaluation", "Dataset Design", "Quality Gatekeeping"],
  },
  {
    period: "2024",
    title: "Best Lecturer",
    org: "Africa to Silicon Valley (A2SV)",
    description:
      "Taught and mentored students through A2SV's competitive programming and career-readiness curriculum, recognized as Best Lecturer for clarity of instruction and student outcomes.",
    tags: ["Teaching", "Mentorship", "Algorithms"],
  },
  {
    period: "2023 — 2024",
    title: "Software Engineering & Product Design",
    org: "Eskalate",
    description:
      "Worked across product design and engineering, applying full-stack development skills to real product problems and strengthening the design-to-code workflow now central to this portfolio's process.",
    tags: ["Product Design", "Full-Stack", "Engineering"],
  },
  {
    period: "2023",
    title: "Robotic Games — Finalist",
    org: "National Robotics Competition",
    description:
      "Competed in a national robotics competition, applying systems thinking and rapid prototyping under competitive constraints.",
    tags: ["Robotics", "Systems Thinking"],
  },
  {
    period: "2022 — 2023",
    title: "Digital Innovation Contributor",
    org: "Ministry of Innovation",
    description:
      "Contributed to digital innovation initiatives, applying design and technical skills to public-sector technology projects.",
    tags: ["Public Sector", "Digital Innovation"],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Boni delivers exactly what he says he will, and usually faster than expected. The final designs were completely production-ready — no back and forth needed.",
    name: "Product Lead",
    role: "SaaS Client",
  },
  {
    quote:
      "What stood out was the attention to detail in the financial UI. It felt trustworthy the moment we saw it, which is exactly what a banking product needs.",
    name: "Engineering Manager",
    role: "Fintech Client",
  },
  {
    quote:
      "He doesn't just design — he thinks in systems. Every component we received could be reused across the rest of the product without rework.",
    name: "Founder",
    role: "AI Startup",
  },
];

export const awards = [
  {
    title: "ACPC Finalist",
    org: "Africa Coding & Programming Contest",
    year: "2023",
  },
  {
    title: "Generative AI for Africa Hackathon — Semi-Finalist",
    org: "Generative AI for Africa",
    year: "2024",
  },
  {
    title: "Best Lecturer",
    org: "Africa to Silicon Valley (A2SV)",
    year: "2024",
  },
];

export const processSteps = [
  { label: "Research", description: "Understand the user, the market, and the real constraints before touching a screen." },
  { label: "Wireframes", description: "Lock the information architecture in low fidelity so structure is right before style." },
  { label: "User Flows", description: "Map every path a real user takes, including the edge cases and failure states." },
  { label: "UI Design", description: "Apply a considered visual system — type, color, spacing — built for the specific product." },
  { label: "Prototype", description: "Make it clickable and test it, so decisions are based on behavior, not opinion." },
  { label: "Development", description: "Build it in production-grade code, not just a static handoff file." },
  { label: "Testing", description: "Validate performance, accessibility, and real usage before it ships." },
  { label: "Launch", description: "Ship, measure, and feed results back into the next iteration." },
];

export const contactInfo = {
  email: "hello@bonsaadugna.dev",
  linkedin: "https://linkedin.com/in/bonsa-adugna",
  github: "https://github.com/bonsa-adugna",
  resumeUrl: "/resume/Bonsa_Adugna_Resume_ML.pdf",
};
