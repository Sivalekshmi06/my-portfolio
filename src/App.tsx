import {
  ArrowUpRight,
  Mail,
  Download,
  Code2,
  BriefcaseBusiness,
  GraduationCap,
  Sparkles,
  Menu,
  X,
  ChevronDown,
  ExternalLink,
  Check,
  Copy,
  Layers,
  Database,
  Terminal,
  Cpu,
  Trophy,
  Award,
  MapPin,
  Phone,
  FileCheck2,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import "./App.css";

// Custom LinkedIn Icon
function Linkedin({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// Custom GitHub Icon
function Github({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

// Custom Brand Icons for Technical Stack
function ReactIcon({ size = 22, color = "#61dafb" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
      <circle cx="0" cy="0" r="2.05" fill={color} />
      <g stroke={color} strokeWidth="1.2" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function TSIcon({ size = 22, color = "#38bdf8" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="22" height="22" x="1" y="1" rx="5" fill="rgba(56, 189, 248, 0.12)" stroke={color} strokeWidth="1.6" />
      <path d="M5 8.5h6M8 8.5v8" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M13.5 15c.6.8 1.6 1.2 2.5.8.8-.4 1-1.3.4-1.8l-1.6-.7c-.8-.5-1-1.4-.5-2.2.6-.9 1.8-1 2.7-.4" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function JSIcon({ size = 22, color = "#fbbf24" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="22" height="22" x="1" y="1" rx="5" fill="rgba(251, 191, 36, 0.12)" stroke={color} strokeWidth="1.6" />
      <path d="M8 12.5v3c0 1.2-.8 1.8-1.8 1.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M13.5 15c.6.8 1.6 1.2 2.5.8.8-.4 1-1.3.4-1.8l-1.6-.7c-.8-.5-1-1.4-.5-2.2.6-.9 1.8-1 2.7-.4" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function WebStyleIcon({ size = 22, color = "#f472b6" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 3h16l-1.5 14L12 21l-6.5-4z" />
      <path d="M8 7h8l-.5 4H8.5l.5 4 3 1 3-1 .3-2" />
    </svg>
  );
}

function ComponentIcon({ size = 22, color = "#c084fc" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
}

function ResponsiveIcon({ size = 22, color = "#a78bfa" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="12" x="3" y="3" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <rect width="5" height="8" x="15" y="10" rx="1" fill="#141124" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

function ApiIcon({ size = 22, color = "#34d399" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M3 12h6M15 12h6M12 3v6M12 15v6" />
      <circle cx="3" cy="12" r="1.5" fill={color} />
      <circle cx="21" cy="12" r="1.5" fill={color} />
      <circle cx="12" cy="3" r="1.5" fill={color} />
      <circle cx="12" cy="21" r="1.5" fill={color} />
    </svg>
  );
}

function CSharpIcon({ size = 22, color = "#a855f7" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 7a5 5 0 0 0-7 4.5 5 5 0 0 0 7 4.5" />
      <path d="M14 10h5M14 14h5M15.5 8.5v7M17.5 8.5v7" />
    </svg>
  );
}

function JavaIcon({ size = 22, color = "#fb923c" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19c4 1.5 12 1.5 16 0" />
      <path d="M6 16c3.5 1 9.5 1 12 0" />
      <path d="M10 2c1 1.5-1 3 0 4.5" />
      <path d="M14 2c1 1.5-1 3 0 4.5" />
      <path d="M5 10c0 4 3 6 7 6s7-2 7-6H5z" />
      <path d="M19 11a3 3 0 0 1 0 4" />
    </svg>
  );
}

function SQLIcon({ size = 22, color = "#38bdf8" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
    </svg>
  );
}

function PythonIcon({ size = 22, color = "#60a5fa" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2c-4 0-4.5 1.5-4.5 3v2h5v1H5c-2 0-3 1.5-3 3.5s1 3.5 3 3.5h2v-2c0-1.5 1-2.5 2.5-2.5h4c1 0 1.5-.5 1.5-1.5V5c0-1.5-1-3-3-3z" />
      <circle cx="9.5" cy="4.5" r="1" fill={color} />
      <path d="M12 22c4 0 4.5-1.5 4.5-3v-2h-5v-1h7.5c2 0 3-1.5 3-3.5s-1-3.5-3-3.5h-2v2c0 1.5-1 2.5-2.5 2.5h-4c-1 0-1.5.5-1.5 1.5v4c0 1.5 1 3 3 3z" />
      <circle cx="14.5" cy="19.5" r="1" fill={color} />
    </svg>
  );
}

function GitBranchIcon({ size = 22, color = "#f87171" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="6" y1="3" x2="6" y2="15" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
  );
}

const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend & UI" },
  { id: "backend", label: "Backend & APIs" },
  { id: "languages", label: "Languages" },
  { id: "tools", label: "DevOps & Data" },
];

const bubbleTechs = [
  {
    id: "react",
    name: "React.js",
    category: "frontend",
    categoryLabel: "Core Stack",
    icon: ReactIcon,
    size: 138,
    x: 41,
    y: 38,
    color: "#61dafb",
    glow: "rgba(97, 218, 251, 0.55)",
    animClass: "drift-one",
    isCore: true,
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    categoryLabel: "Core Stack",
    icon: TSIcon,
    size: 132,
    x: 58,
    y: 44,
    color: "#38bdf8",
    glow: "rgba(56, 189, 248, 0.55)",
    animClass: "drift-two",
    isCore: true,
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "languages",
    categoryLabel: "ES6+ Logic",
    icon: JSIcon,
    size: 114,
    x: 27,
    y: 28,
    color: "#fbbf24",
    glow: "rgba(251, 191, 36, 0.55)",
    animClass: "drift-three",
  },
  {
    id: "html-css",
    name: "HTML5 & CSS3",
    category: "frontend",
    categoryLabel: "Styling",
    icon: WebStyleIcon,
    size: 114,
    x: 73,
    y: 25,
    color: "#f472b6",
    glow: "rgba(244, 114, 182, 0.55)",
    animClass: "drift-four",
  },
  {
    id: "components",
    name: "Components",
    category: "frontend",
    categoryLabel: "Atomic Design",
    icon: ComponentIcon,
    size: 116,
    x: 18,
    y: 53,
    color: "#c084fc",
    glow: "rgba(192, 132, 252, 0.55)",
    animClass: "drift-two",
  },
  {
    id: "responsive",
    name: "Responsive UI",
    category: "frontend",
    categoryLabel: "Layouts",
    icon: ResponsiveIcon,
    size: 112,
    x: 83,
    y: 46,
    color: "#a78bfa",
    glow: "rgba(167, 139, 250, 0.55)",
    animClass: "drift-one",
  },
  {
    id: "rest-api",
    name: "REST APIs",
    category: "backend",
    categoryLabel: "Integration",
    icon: ApiIcon,
    size: 114,
    x: 33,
    y: 72,
    color: "#34d399",
    glow: "rgba(52, 211, 153, 0.55)",
    animClass: "drift-three",
  },
  {
    id: "csharp",
    name: "C# & .NET",
    category: "backend",
    categoryLabel: "Backend",
    icon: CSharpIcon,
    size: 110,
    x: 50,
    y: 77,
    color: "#a855f7",
    glow: "rgba(168, 85, 247, 0.55)",
    animClass: "drift-four",
  },
  {
    id: "sql",
    name: "SQL",
    category: "tools",
    categoryLabel: "Database",
    icon: SQLIcon,
    size: 108,
    x: 67,
    y: 72,
    color: "#38bdf8",
    glow: "rgba(56, 189, 248, 0.55)",
    animClass: "drift-two",
  },
  {
    id: "python",
    name: "Python",
    category: "languages",
    categoryLabel: "AI / Hackathon",
    icon: PythonIcon,
    size: 114,
    x: 85,
    y: 74,
    color: "#60a5fa",
    glow: "rgba(96, 165, 250, 0.55)",
    animClass: "drift-one",
  },
  {
    id: "java",
    name: "Java",
    category: "languages",
    categoryLabel: "OOP",
    icon: JavaIcon,
    size: 106,
    x: 13,
    y: 22,
    color: "#fb923c",
    glow: "rgba(251, 146, 60, 0.55)",
    animClass: "drift-four",
  },
  {
    id: "git",
    name: "Git & GitHub",
    category: "tools",
    categoryLabel: "DevOps",
    icon: GitBranchIcon,
    size: 112,
    x: 50,
    y: 15,
    color: "#f87171",
    glow: "rgba(248, 113, 113, 0.55)",
    animClass: "drift-three",
  },
];

const projects = [
  {
    number: "01",
    name: "GreenMath Platform",
    category: "ENTERPRISE PRODUCT DEVELOPMENT",
    badge: "Active Product @ Acies Global",
    description:
      "Contributing to the development and maintenance of a sustainability analytics platform. Engineering responsive UI components, user-friendly interactive interfaces, and handling complex API data interactions with React.js & TypeScript.",
    tech: ["React.js", "TypeScript", "JavaScript", "C#", "REST APIs"],
    highlight: "Sustainability & Analytics Platform",
  },
  {
    number: "02",
    name: "Plumb Guard Shield",
    category: "PATENT-RELATED INNOVATION",
    badge: "Patent Innovation",
    description:
      "A patent-oriented engineering innovation developed to provide robust defensive protection and monitoring for critical pipeline infrastructure, minimizing hazards and operational failure.",
    tech: ["Engineering", "Hardware Design", "Safety Tech", "Research"],
    highlight: "Patented Engineering Solution",
  },
];

const achievements = [
  {
    number: "01",
    icon: Trophy,
    title: "Intel AI Hackathon 2024",
    issuer: "National Podium · 3rd Place",
    category: "HACKATHON WINNER",
    year: "2024",
    description:
      "Secured 3rd place nationally for architecting an innovative AI-driven solution under competitive real-time hackathon evaluation criteria.",
    accent: "purple",
    color: "#b79aff",
    tags: ["National Recognition", "AI Innovation", "Top 3 Podium"],
  },
  {
    number: "02",
    icon: Award,
    title: "NPTEL Soft Skills Elite Honors",
    issuer: "IIT Madras · 73% Silver",
    category: "ELITE CERTIFICATION",
    year: "2024",
    description:
      "Earned Silver Category honors demonstrating top percentile professional communication, workplace leadership, and collaborative team ethics.",
    accent: "violet",
    color: "#c084fc",
    tags: ["Leadership", "Communication", "Top Percentile"],
  },
  {
    number: "03",
    icon: FileCheck2,
    title: "CDAC Artificial Intelligence",
    issuer: "CDAC · 87% Distinction",
    category: "AI CERTIFICATION",
    year: "2024",
    description:
      "Graduated with distinction (87% score) covering core algorithmic models, deep learning fundamentals, and applied intelligence pipelines.",
    accent: "indigo",
    color: "#818cf8",
    tags: ["87% Distinction", "AI Algorithms", "Advanced Computing"],
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Microsoft AI Builder & ML Challenge",
    issuer: "Microsoft Learn · Azure",
    category: "CLOUD CHALLENGE",
    year: "2024",
    description:
      "Completed hands-on enterprise cloud challenges designing automated machine learning pipelines and custom predictive models.",
    accent: "cyan",
    color: "#38bdf8",
    tags: ["Microsoft Azure", "AI Workflows", "Model Training"],
  },
  {
    number: "05",
    icon: Cpu,
    title: "UiPath Process Automation",
    issuer: "UiPath Academy · RPA",
    category: "PROCESS AUTOMATION",
    year: "2024",
    description:
      "Certified in Robotic Process Automation workflow architecture, procedural logic design, and automated bot deployment.",
    accent: "lilac",
    color: "#d8b4fe",
    tags: ["RPA Automation", "Workflow Logic", "Enterprise Bot"],
  },
  {
    number: "06",
    icon: Layers,
    title: "Google Cloud & Analytics",
    issuer: "Google · Cloud Fundamentals",
    category: "CLOUD & ANALYTICS",
    year: "2024",
    description:
      "Certified in cloud fundamentals, performance metrics evaluation, data pipeline monitoring, and user journey analytics.",
    accent: "purple",
    color: "#a855f7",
    tags: ["Google Cloud", "Performance Metrics", "Cloud Fundamentals"],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeAchievement, setActiveAchievement] = useState(0);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0, active: false });
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedIntent, setSelectedIntent] = useState("Full-Time Role");
  const [customMessage, setCustomMessage] = useState("");
  const [contactTilt, setContactTilt] = useState({ x: 0, y: 0, active: false });
  const [bubbleFilter, setBubbleFilter] = useState("all");
  const [activeBubble, setActiveBubble] = useState<string | null>(null);
  const [stageMouse, setStageMouse] = useState({ x: 0, y: 0, active: false });
  const stageRef = useRef<HTMLDivElement>(null);

  const handleStageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setStageMouse({ x: nx, y: ny, active: true });
  };

  const handleStageMouseLeave = () => {
    setStageMouse({ x: 0, y: 0, active: false });
    setActiveBubble(null);
  };

  const intentOptions = [
    {
      id: "Full-Time Role",
      label: "Full-Time Role",
      icon: BriefcaseBusiness,
      subject: "Frontend Engineering Opportunity — Sivalekshmi Balu",
      placeholder:
        "Hi Sivalekshmi, we came across your portfolio and would love to speak with you regarding an exciting frontend engineering role (React / TypeScript)...",
    },
    {
      id: "Project Collaboration",
      label: "Project Collaboration",
      icon: Sparkles,
      subject: "Project Collaboration — Sivalekshmi Balu",
      placeholder:
        "Hi Sivalekshmi, I have an innovative project in development and would love to collaborate with you on modern UI architecture...",
    },
    {
      id: "Tech Consultation",
      label: "Tech Consultation",
      icon: Code2,
      subject: "Frontend Architecture Consultation — Sivalekshmi Balu",
      placeholder:
        "Hi Sivalekshmi, I'd like to consult with you on frontend component architecture and performance optimization...",
    },
    {
      id: "Casual Networking",
      label: "Casual Networking",
      icon: Mail,
      subject: "Tech Networking — Sivalekshmi Balu",
      placeholder:
        "Hi Sivalekshmi, love your portfolio! Let's connect and share insights about modern web development...",
    },
  ];

  const activeIntent =
    intentOptions.find((i) => i.id === selectedIntent) || intentOptions[0];

  const handleContactTiltMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setContactTilt({ x: x * 16, y: -y * 16, active: true });
  };

  const handleContactTiltLeave = () => {
    setContactTilt({ x: 0, y: 0, active: false });
  };

  const email = "sivalakshmibalu105@gmail.com";
  const phone = "+91 9442077114";
  const location = "Bengaluru, India";
  const linkedin = "https://www.linkedin.com/in/sivalekshmi-balu-352937251";
  const github = "https://github.com/Sivalekshmi06";

  const closeMenu = () => setMenuOpen(false);

  const triggerCardSpin = () => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 1250);
  };

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isSpinning) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setCardTilt({ x: x * 22, y: -y * 22, active: true });
  };

  const handleCardMouseLeave = () => {
    setCardTilt({ x: 0, y: 0, active: false });
  };

  const nextAchievement = () => {
    setActiveAchievement((prev) => (prev + 1) % achievements.length);
  };

  const prevAchievement = () => {
    setActiveAchievement((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  const lastWheelTime = useRef<number>(0);

  const handleWheel = (e: React.WheelEvent) => {
    // Detect horizontal trackpad swipe or Shift + scroll or vertical trackpad flick
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : (e.shiftKey ? e.deltaY : 0);
    if (Math.abs(delta) > 20) {
      const now = Date.now();
      if (now - lastWheelTime.current > 380) {
        if (delta > 20) {
          nextAchievement();
        } else {
          prevAchievement();
        }
        lastWheelTime.current = now;
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement;
      if (activeEl && (activeEl.tagName === "INPUT" || activeEl.tagName === "TEXTAREA")) {
        return;
      }

      // Check if achievements section is in view
      const achievementsSection = document.getElementById("achievements");
      if (achievementsSection) {
        const rect = achievementsSection.getBoundingClientRect();
        const inView = rect.top < window.innerHeight * 0.9 && rect.bottom > window.innerHeight * 0.1;
        if (!inView) return;
      }

      if (e.key === "ArrowRight") {
        e.preventDefault();
        nextAchievement();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevAchievement();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleDragStart = (clientX: number) => {
    setDragStartX(clientX);
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging || dragStartX === null) return;
    setDragOffset(clientX - dragStartX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    if (dragOffset < -50) {
      nextAchievement();
    } else if (dragOffset > 50) {
      prevAchievement();
    }
    setIsDragging(false);
    setDragStartX(null);
    setDragOffset(0);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="portfolio">
      {/* Background Gradients & Tech Mesh */}
      <div className="bg-grid-pattern" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* NAVBAR */}
      <header className="navbar-wrapper">
        <div className="navbar">
          <a href="#home" className="logo" onClick={closeMenu}>
            <span className="logo-badge">SB</span>
            <span className="logo-text">Sivalekshmi<span>.</span></span>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            {["Home", "About", "Skills", "Experience", "Projects", "Achievements", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                >
                  {item}
                </a>
              )
            )}
          </nav>

          <div className="nav-actions">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="nav-icon-btn"
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="nav-icon-btn"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a href="#contact" className="nav-cta">
              <span>Let's Talk</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO SECTION WITH THE SLANTING 3D CARD */}
        <section className="hero section" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="pulse" />
              <span>ASSOCIATE @ ACIES GLOBAL</span>
              <span className="dot-divider">•</span>
              <span className="location-text"><MapPin size={12} /> {location}</span>
            </div>

            <p className="eyebrow">HELLO, I'M</p>

            <h1 className="hero-name">
              Sivalekshmi <span className="name-accent">Balu</span>
            </h1>

            <h2 className="hero-tagline">
              Building digital experiences
              <br />
              with <span className="italic-accent">purpose & precision.</span>
            </h2>

            <p className="hero-description">
              Frontend Developer passionate about building high-performance,
              scalable web applications. Currently contributing to enterprise
              product development at <strong>Acies Global</strong>.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="button-primary">
                Explore Work <ArrowUpRight size={17} />
              </a>
              <a
                href="./resume.pdf"
                download="Sivalekshmi_Balu_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                <Download size={16} /> Download CV
              </a>
              <button
                onClick={handleCopyEmail}
                className="button-ghost"
                title="Copy email to clipboard"
              >
                {copied ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                <span>{copied ? "Copied!" : "Copy Email"}</span>
              </button>
            </div>
          </div>

          {/* THE SIGNATURE SLANTING 3D PROFILE VIP PASS */}
          <div
            className="hero-visual"
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            onClick={triggerCardSpin}
            title="Click to spin card"
          >
            <div className="hero-visual-inner">
              <div className="card-ambient-glow" />
              <div className="visual-ring ring-one" />
              <div className="visual-ring ring-two" />
              <div className="visual-ring ring-three" />

              <div
                className={`profile-card ${isSpinning ? "manual-spin" : ""}`}
                style={
                  cardTilt.active && !isSpinning
                    ? {
                        transform: `perspective(1000px) rotateX(${cardTilt.y}deg) rotateY(${cardTilt.x}deg) scale3d(1.04, 1.04, 1.04)`,
                        transition: "transform 0.08s ease-out",
                      }
                    : undefined
                }
              >
                <div
                  className="card-glass-sheen"
                  style={
                    cardTilt.active && !isSpinning
                      ? {
                          opacity: 1,
                          background: `radial-gradient(circle at ${(cardTilt.x / 22 + 0.5) * 100}% ${(cardTilt.y / -22 + 0.5) * 100}%, rgba(255, 255, 255, 0.28) 0%, transparent 60%)`,
                        }
                      : undefined
                  }
                />
                
                {/* 1. Header with Pass Label & Active IST Status */}
                <div className="profile-top">
                  <span className="pass-mono-badge">PORTFOLIO // 2026</span>
                  <div className="pass-live-status">
                    <span className="status-dot-pulse" />
                    <span>IST ACTIVE</span>
                  </div>
                </div>

                {/* Floating Tag 1 (A bit outside on the left as marked) */}
                <div className="hero-card-tag-left">
                  <Code2 size={13} className="spec-code-icon" />
                  <span>React.js & TypeScript Specialist</span>
                </div>

                {/* 2. Center Monogram */}
                <div className="profile-monogram-container">
                  <div className="profile-monogram">SB</div>
                </div>

                {/* Floating Tag 2 (A bit outside on the right as marked) */}
                <div className="hero-card-tag-right">
                  <Trophy size={13} className="ribbon-trophy" />
                  <span>Intel AI Hackathon · 3rd Place</span>
                  <span className="ribbon-tag">PODIUM</span>
                </div>

                {/* 3. Company & Role Info */}
                <div className="profile-bottom">
                  <div>
                    <span className="profile-role">Associate</span>
                    <h3>Acies Global</h3>
                    <p>Design · Develop · Deliver</p>
                  </div>
                  <span className="profile-dot" />
                </div>
              </div>

              {/* Click to spin hint below the card */}
              <div className="spin-badge-hint">
                <Sparkles size={12} className="spin-sparkle" />
                <span>Click to spin card</span>
              </div>
            </div>
          </div>

          <a href="#about" className="scroll-indicator">
            SCROLL TO EXPLORE <ChevronDown size={16} className="bounce-arrow" />
          </a>
        </section>

        {/* ABOUT SECTION */}
        <section className="section about-section" id="about">
          <div className="section-heading">
            <span className="section-label">01 / ABOUT ME</span>
            <h2>
              Engineering precision meets <span>thoughtful design.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-main">
              <p className="about-highlight">
                I believe great software is where thoughtful design meets powerful, clean technology.
              </p>
              <p>
                I am a <strong>Frontend Developer and Associate at Acies Global</strong> in Bengaluru,
                with approximately <strong>1.5 years of experience</strong> in enterprise product development.
                Currently, I contribute to the <strong>GreenMath</strong> platform, engineering responsive UI
                components, handling data visualization dashboards, and optimizing API data interactions.
              </p>
              <p>
                With a background in <strong>Electronics and Communication Engineering (8.1 CGPA)</strong>,
                I bring an analytical mindset, problem-solving agility, and a proven track record including
                a <strong>patent-related engineering project (Plumb Guard Shield)</strong> and securing <strong>3rd place at the Intel AI Hackathon 2024</strong>.
              </p>

              <div className="quick-points">
                <div className="point-item">
                  <span className="point-dot" />
                  <span><strong>Core Specialization:</strong> React.js, TypeScript, JavaScript, Reusable Components</span>
                </div>
                <div className="point-item">
                  <span className="point-dot" />
                  <span><strong>Backend & Data:</strong> C#, Java, SQL, REST APIs</span>
                </div>
                <div className="point-item">
                  <span className="point-dot" />
                  <span><strong>Open to Roles:</strong> Frontend Developer, React Developer, Software Engineer</span>
                </div>
              </div>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <span className="stat-number">1.5+</span>
                <h4>Years Experience</h4>
                <p>Enterprise product development at Acies Global</p>
              </div>
              <div className="stat-card">
                <span className="stat-number">01</span>
                <h4>Patent Innovation</h4>
                <p>Plumb Guard Shield</p>
              </div>
              <div className="stat-card">
                <span className="stat-number">8.1</span>
                <h4>Engineering CGPA / 10</h4>
                <p>ECE graduate from KRCT (2021–2025)</p>
              </div>
              <div className="stat-card">
                <span className="stat-number">Top 3</span>
                <h4>Intel AI Hackathon</h4>
                <p>National recognition for AI innovation</p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION: INTERACTIVE FLOATING TECH BUBBLES */}
        <section className="section skills-section" id="skills">
          <div className="section-heading text-center">
            <span className="section-label">02 / TECHNICAL EXPERTISE</span>
            <h2>
              Tools & Technologies I <span>command.</span>
            </h2>
            <p className="skills-subtext">Weightless interactive constellation of modern frontend systems, backend services, and tools.</p>
          </div>

          {/* Minimal Filter Pills */}
          <div className="bubbles-filter-strip">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`bubble-filter-btn ${bubbleFilter === cat.id ? "active" : ""}`}
                onClick={() => setBubbleFilter(cat.id)}
              >
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Interactive Floating Bubbles Cosmic Canvas */}
          <div
            ref={stageRef}
            className="tech-bubbles-stage"
            onMouseMove={handleStageMouseMove}
            onMouseLeave={handleStageMouseLeave}
          >
            {/* Background Ambient Cosmic Nebulae */}
            <div className="bubbles-stage-glow center-glow" />
            <div className="bubbles-stage-glow left-glow" />
            <div className="bubbles-stage-glow right-glow" />

            {/* Tech Bubbles */}
            {bubbleTechs.map((bubble) => {
              const Icon = bubble.icon;
              const isMatch = bubbleFilter === "all" || bubble.category === bubbleFilter;
              const isHovered = activeBubble === bubble.id;
              const factor = bubble.isCore ? 14 : 20;
              const driftX = stageMouse.active ? stageMouse.x * factor * (bubble.x > 50 ? 1 : -1) : 0;
              const driftY = stageMouse.active ? stageMouse.y * factor * (bubble.y > 50 ? 1 : -1) : 0;

              return (
                <div
                  key={bubble.id}
                  className={`floating-tech-bubble ${bubble.animClass} ${isMatch ? "match" : "dimmed"} ${
                    isHovered ? "hovered" : ""
                  } ${bubble.isCore ? "core-bubble" : ""}`}
                  style={{
                    left: `${bubble.x}%`,
                    top: `${bubble.y}%`,
                    width: `${bubble.size}px`,
                    height: `${bubble.size}px`,
                    "--bubble-color": bubble.color,
                    "--bubble-glow": bubble.glow,
                    transform: `translate(calc(-50% + ${driftX}px), calc(-50% + ${driftY}px)) ${
                      isHovered ? "scale(1.16)" : ""
                    }`,
                  } as React.CSSProperties}
                  onMouseEnter={() => setActiveBubble(bubble.id)}
                  onMouseLeave={() => setActiveBubble(null)}
                  onClick={() => setActiveBubble(bubble.id)}
                >
                  <div className="bubble-glass-reflection" />
                  <div className="bubble-ambient-aura" />
                  
                  <div className="bubble-content">
                    <div className="bubble-icon-wrap">
                      <Icon size={bubble.isCore ? 32 : 26} color={bubble.color} />
                    </div>
                    <span className="bubble-name">{bubble.name}</span>
                    <span className="bubble-category-tag">{bubble.categoryLabel}</span>
                  </div>

                  {bubble.isCore && (
                    <div className="core-pulse-orbit" />
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION SECTION */}
        <section className="section experience-section" id="experience">
          <div className="section-heading">
            <span className="section-label">03 / CAREER TIMELINE</span>
            <h2>
              Experience & <span>Education.</span>
            </h2>
          </div>

          <div className="timeline">
            {/* FULL TIME ROLE */}
            <div className="timeline-item">
              <div className="timeline-icon">
                <BriefcaseBusiness size={20} />
              </div>
              <div className="timeline-content">
                <div className="timeline-badge-row">
                  <span className="timeline-date">2025 — PRESENT</span>
                  <span className="current-badge">CURRENT ROLE</span>
                  <span className="location-tag">Bengaluru, India</span>
                </div>
                <h3>Associate</h3>
                <h4>Acies Global</h4>
                <ul className="timeline-bullets">
                  <li>Contributing to the development and maintenance of the <strong>GreenMath</strong> enterprise platform.</li>
                  <li>Developing and enhancing modular, reusable UI components using <strong>React.js</strong> and <strong>TypeScript</strong>.</li>
                  <li>Integrating complex REST APIs and handling frontend state and data interactions.</li>
                  <li>Building intuitive, user-centric functional modules and component workflows.</li>
                  <li>Debugging, diagnosing, and resolving critical application defects to boost UI performance.</li>
                </ul>
                <div className="tags">
                  <span>React.js</span>
                  <span>TypeScript</span>
                  <span>JavaScript</span>
                  <span>Responsive UI</span>
                  <span>REST APIs</span>
                  <span>C#</span>
                </div>
              </div>
            </div>

            {/* INTERNSHIP */}
            <div className="timeline-item">
              <div className="timeline-icon">
                <Cpu size={20} />
              </div>
              <div className="timeline-content">
                <div className="timeline-badge-row">
                  <span className="timeline-date">APRIL 2025 — MAY 2025</span>
                  <span className="cgpa-pill">INTERNSHIP</span>
                </div>
                <h3>Embedded Systems Intern</h3>
                <h4>DLK Embedded Systems</h4>
                <p>
                  Worked on embedded systems architectures, microcontrollers, and hands-on hardware-software
                  integration, deepening analytical engineering fundamentals.
                </p>
                <div className="tags">
                  <span>Embedded Systems</span>
                  <span>Hardware & Firmware</span>
                  <span>Problem Solving</span>
                </div>
              </div>
            </div>

            {/* COLLEGE EDUCATION */}
            <div className="timeline-item">
              <div className="timeline-icon">
                <GraduationCap size={20} />
              </div>
              <div className="timeline-content">
                <div className="timeline-badge-row">
                  <span className="timeline-date">2021 — 2025</span>
                  <span className="cgpa-pill">CGPA: 8.1 / 10</span>
                </div>
                <h3>Bachelor of Engineering · Electronics & Communication</h3>
                <h4>K. Ramakrishnan College of Technology</h4>
                <p>
                  Graduated with distinction (8.1 CGPA). Developed foundational excellence in digital systems,
                  computational logic, algorithms, and led a patent-related hardware & safety innovation initiative.
                </p>
                <div className="tags">
                  <span>Electronics & Communication</span>
                  <span>8.1 CGPA</span>
                  <span>Innovation</span>
                  <span>Research</span>
                </div>
              </div>
            </div>

            {/* SCHOOL EDUCATION */}
            <div className="timeline-item">
              <div className="timeline-icon">
                <GraduationCap size={20} />
              </div>
              <div className="timeline-content">
                <div className="timeline-badge-row">
                  <span className="timeline-date">2019 — 2021</span>
                  <span className="cgpa-pill">HSC: 86% · SSLC: 84%</span>
                </div>
                <h3>Higher Secondary & Secondary School</h3>
                <h4>Holy Cross Girls Higher Secondary School</h4>
                <p>
                  Built high academic consistency with 86% in Higher Secondary Certificate (HSC) and 84% in Secondary School Leaving Certificate (SSLC).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <span className="section-label">04 / SELECTED WORK</span>
            <h2>
              Projects I've <span>contributed to.</span>
            </h2>
            <p>Enterprise applications and innovation initiatives I have actively contributed to as part of engineering teams.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-index">{project.number}</span>
                  <span className="project-highlight-badge">{project.badge}</span>
                </div>
                <span className="project-category">{project.category}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-footer">
                  <span className="project-link-label">{project.highlight}</span>
                  <ArrowUpRight size={18} className="project-arrow" />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS & CERTIFICATIONS - ACIES GLOBAL STYLE CAROUSEL */}
        <section className="section achievements-section acies-style-section" id="achievements">
          <div className="section-heading">
            <span className="section-label">05 / HONORS & CREDENTIALS</span>
            <h2>
              Achievements & <span>Certifications.</span>
            </h2>
            <p>Explore recognized awards, hackathon rankings, and technical credentials.</p>
          </div>

          <div
            tabIndex={0}
            className={`acies-carousel-wrapper ${isDragging ? "dragging" : ""}`}
            onMouseDown={(e) => handleDragStart(e.clientX)}
            onMouseMove={(e) => handleDragMove(e.clientX)}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={(e) => handleDragStart(e.targetTouches[0].clientX)}
            onTouchMove={(e) => handleDragMove(e.targetTouches[0].clientX)}
            onTouchEnd={handleDragEnd}
            onWheel={handleWheel}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") {
                e.preventDefault();
                nextAchievement();
              } else if (e.key === "ArrowLeft") {
                e.preventDefault();
                prevAchievement();
              }
            }}
          >
            <div
              className="acies-carousel-track"
              style={{
                transform: `translateX(calc(-${activeAchievement} * (var(--slide-w) + var(--slide-gap)) + ${dragOffset}px))`,
                transition: isDragging ? "none" : "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {achievements.map((item, idx) => {
                const Icon = item.icon;
                const isActive = idx === activeAchievement;
                return (
                  <div
                    key={item.number}
                    className={`acies-carousel-card ${isActive ? "active" : ""}`}
                    onClick={() => {
                      if (Math.abs(dragOffset) < 10) {
                        setActiveAchievement(idx);
                      }
                    }}
                    style={{
                      "--card-color": item.color,
                    } as React.CSSProperties}
                  >
                    {/* Rectangular Card Layout (Emblem + Content) */}
                    <div className="acies-card-layout-inner">
                      {/* Rectangular Visual Emblem */}
                      <div className="acies-card-visual-wrap">
                        <div
                          className="acies-avatar-rect"
                          style={{
                            borderColor: item.color,
                          }}
                        >
                          <Icon size={56} className="acies-card-icon" style={{ color: item.color }} />
                        </div>
                      </div>

                      {/* Card Content Info */}
                      <div className="acies-card-info">
                        <div className="acies-meta-row">
                          <span className="acies-category-badge" style={{ color: item.color, borderColor: `${item.color}40` }}>
                            {item.category}
                          </span>
                          <span className="acies-location-label">{item.issuer.toUpperCase()}</span>
                        </div>

                        <h3 className="acies-card-title-caps">
                          {item.title}
                        </h3>

                        <p className="acies-card-description">{item.description}</p>

                        <div className="acies-tags-row">
                          <span className="acies-pill-year">{item.year}</span>
                          {item.tags.map((tag) => (
                            <span key={tag} className="acies-tag-pill">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Clean Swipe Indicators (No Clumsy Pagination Box) */}
            <div className="acies-swipe-indicator">
              <div className="acies-dots-track">
                {achievements.map((item, i) => (
                  <button
                    key={item.number}
                    className={`acies-dot ${i === activeAchievement ? "active" : ""}`}
                    onClick={() => setActiveAchievement(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    style={{
                      "--dot-color": item.color,
                    } as React.CSSProperties}
                  />
                ))}
              </div>
              <span className="acies-swipe-hint">
                <span>← Swipe or drag to explore →</span>
              </span>
            </div>
          </div>
        </section>

        {/* CREATIVE CONTACT STUDIO & HOLOGRAPHIC VIP CARD */}
        <section className="section contact-section" id="contact">
          <div className="section-heading text-center">
            <span className="section-label">06 / GET IN TOUCH</span>
            <h2>
              Let's make something <span>iconic together.</span>
            </h2>
            <p className="contact-lead-subtext">
              Have an exciting engineering role, an ambitious project, or just want to chat tech? Let's connect.
            </p>
          </div>

          <div className="creative-contact-studio">
            {/* Left Column: Interactive Inquiry & Pitch Console */}
            <div className="contact-compose-card">
              <div className="compose-header">
                <span className="compose-badge">
                  <Sparkles size={14} />
                  <span>DIRECT INQUIRY STUDIO</span>
                </span>
                <div className="live-status-chip">
                  <span className="pulse-dot" />
                  <span>Available for frontend roles</span>
                </div>
              </div>

              {/* Step 1: Intent Selection */}
              <div className="compose-section">
                <label className="compose-label">What are you looking to connect on?</label>
                <div className="intent-chips-grid">
                  {intentOptions.map((opt) => {
                    const OptIcon = opt.icon;
                    const isSelected = selectedIntent === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        className={`intent-chip ${isSelected ? "selected" : ""}`}
                        onClick={() => {
                          setSelectedIntent(opt.id);
                          setCustomMessage("");
                        }}
                      >
                        <OptIcon size={14} className="chip-icon" />
                        <span>{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Message Composer */}
              <div className="compose-section">
                <div className="compose-label-row">
                  <label className="compose-label">Your Message or Project Brief</label>
                  <span className="compose-sublabel">Personalized Mail Draft</span>
                </div>
                <div className="compose-textarea-wrap">
                  <textarea
                    rows={4}
                    className="compose-textarea"
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    placeholder={activeIntent.placeholder}
                  />
                  <div className="textarea-corner-glow" />
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="compose-actions-row">
                <a
                  href={`mailto:${email}?subject=${encodeURIComponent(
                    activeIntent.subject
                  )}&body=${encodeURIComponent(
                    customMessage.trim() || activeIntent.placeholder
                  )}`}
                  className="compose-send-btn"
                >
                  <Mail size={16} />
                  <span>Launch Email Draft</span>
                  <ArrowUpRight size={16} />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="compose-copy-btn"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                  <span>{copied ? "Email Copied!" : "Copy Email"}</span>
                </button>
              </div>

              {/* Availability & Response Time Footer */}
              <div className="compose-footer-info">
                <div className="info-item">
                  <MapPin size={13} className="info-icon" />
                  <span>Bengaluru, Karnataka (IST)</span>
                </div>
                <div className="info-divider" />
                <div className="info-item">
                  <span className="dot-fast" />
                  <span>Response within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive 3D Holographic Developer Pass */}
            <div
              className="holographic-pass-wrap"
              onMouseMove={handleContactTiltMove}
              onMouseLeave={handleContactTiltLeave}
              style={{
                transform: contactTilt.active
                  ? `perspective(1000px) rotateX(${contactTilt.y}deg) rotateY(${contactTilt.x}deg) translateY(-6px)`
                  : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
              }}
            >
              <div className="holographic-pass-card">
                {/* Holographic Top Glare Bar */}
                <div className="pass-top-bar">
                  <div className="pass-tag">
                    <span className="pass-tag-mono">DEV_PASS // 2026</span>
                  </div>
                  <div className="pass-online-pill">
                    <span className="pulse-dot" />
                    <span>IST UTC+5:30</span>
                  </div>
                </div>

                {/* Profile Header Block */}
                <div className="pass-profile-header">
                  <div className="pass-monogram-circle">
                    <span>SB</span>
                  </div>
                  <div className="pass-profile-text">
                    <h3 className="pass-name">Sivalekshmi Balu</h3>
                    <p className="pass-role">Associate @ Acies Global</p>
                    <span className="pass-spec">Frontend Engineer · React & TypeScript</span>
                  </div>
                </div>

                {/* Quick Info Grid */}
                <div className="pass-info-grid">
                  <div className="pass-info-cell">
                    <span className="cell-label">DIRECT EMAIL</span>
                    <span className="cell-value">{email}</span>
                  </div>
                  <div className="pass-info-cell">
                    <span className="cell-label">PHONE / WHATSAPP</span>
                    <span className="cell-value">+91 {phone}</span>
                  </div>
                </div>

                {/* Quick Connect Actions (2x2 Matrix) */}
                <div className="pass-actions-matrix">
                  <a
                    href="./resume.pdf"
                    target="_blank"
                    download="Sivalekshmi_Balu_Resume.pdf"
                    className="pass-btn cv-btn"
                  >
                    <Download size={15} />
                    <span>Official Resume</span>
                  </a>

                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="pass-btn linkedin-btn"
                  >
                    <Linkedin size={15} />
                    <span>LinkedIn Profile</span>
                    <ExternalLink size={12} className="pass-ext" />
                  </a>

                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="pass-btn github-btn"
                  >
                    <Github size={15} />
                    <span>GitHub Repos</span>
                    <ExternalLink size={12} className="pass-ext" />
                  </a>

                  <a href={`tel:${phone}`} className="pass-btn call-btn">
                    <Phone size={15} />
                    <span>Call Directly</span>
                  </a>
                </div>

                {/* Card Footer Barcode & Serial */}
                <div className="pass-footer-barcode">
                  <div className="barcode-graphic" />
                  <span className="barcode-serial">SB-BLR-2026-REACT-CORE</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo">
          <span className="logo-badge">SB</span>
          <span className="logo-text">Sivalekshmi Balu</span>
        </a>
        <p className="footer-copy">
          Designed & built with passion by Sivalekshmi Balu · © 2026
        </p>
        <div className="footer-socials">
          <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${email}`} aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
