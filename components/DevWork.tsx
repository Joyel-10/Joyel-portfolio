"use client";
import { useState } from "react";
import {
  Globe,
  Github,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";

const DEVS = [
  {
  id: 1,
  title: "TaskFlow AI — Project Management SaaS",
  type: "SaaS Web Application",
  img: "/projects/Task.png",
  stack: ["Next.js 14", "Node.js", "Express", "MongoDB", "Groq Llama 3.3 70B", "JWT", "Zustand", "Recharts", "Tailwind CSS"],
  desc: "Production-ready AI-powered project management SaaS with role-based access, real-time AI assistant, and analytics dashboard.",
  features: [
    "JWT auth with role-based access (Admin/Member) & bcrypt password hashing",
    "25+ RESTful API endpoints with express-validator input validation",
    "AI assistant powered by Groq Llama 3.3 70B with real-time MongoDB context injection",
    "AI Task Generator — creates structured task lists from a single natural language prompt",
    "Drag-and-drop Kanban board with optimistic UI updates",
    "Real-time analytics dashboard with 7-day completion trend via Recharts",
    "Global auth state with Zustand — persistent across page refreshes",
  ],
  live: "https://task-flow-frontend-neon.vercel.app/",
  git: "https://github.com/Joyel-10",
  status: "Live on Vercel",
  featured: true,
},

{
  id: 2,
  title: "AI Content Studio — Blog Generator SaaS",
  type: "SaaS Web Application",
  img: "/projects/Content.png",
  stack: ["Next.js 14", "TypeScript", "Node.js", "Express", "MongoDB", "Anthropic Claude API", "JWT", "jsPDF", "Framer Motion", "Tailwind CSS"],
  desc: "Full-stack AI SaaS that generates professional blog posts using Anthropic Claude API with multiple tones, lengths, and a Cinematic writing mode.",
  features: [
    "Blog generation via Anthropic Claude API with 10 writing tones & 3 content lengths",
    "Cinematic Mode for story-driven, narrative-style writing",
    "End-to-end JWT authentication with Axios interceptors & auto token injection",
    "Server-side prompt engineering for consistent, high-quality AI output",
    "Client-side PDF export using jsPDF — no backend involvement",
    "Per-user blog history with full CRUD & paginated retrieval via MongoDB Atlas",
    "Glassmorphism UI with Framer Motion animations & full mobile responsiveness",
  ],
  live: "https://ai-content-frontend-iota.vercel.app/",
  git: "https://github.com/Joyel-10",
  status: "Live on Vercel",
  featured: true,
},

  {
    id: 3,
    title: "Inventory Management System",
    type: "Web Application",
    img: "/projects/in.png",
    stack: ["Angular", "TypeScript", "REST API", "Bootstrap"],
    desc: "Inventory tracking system with real-time stock management...",
    features: [
      "Product CRUD with category management",
      "Real-time stock level alerts & notifications",
      "Supplier & purchase order tracking",
      "Sales reports with analytics charts",
      "User authentication & role management",
    ],
    live: "https://inventory-management-beta-weld.vercel.app/",
    git: "https://github.com/Joyel-10/Inventory-Management",
    status: "Live on Vercel",
    featured: false,
  },



  {
    id: 4,
    title: "Waste Management System",
    type: "Full Stack App",

    img: "/projects/wa.png",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    desc: "MERN stack app for managing waste collection routes...",
    features: [
      "Route management for collection scheduling",
      "Waste type categorization & tracking",
      "Real-time pickup status updates",
      "Environmental impact dashboard",
      "Mobile-responsive design",
    ],
    live: "https://waste-management-frontend-opal.vercel.app/",
    git: "https://github.com/Joyel-10/Waste-management-frontend",
    status: "Live on Vercel",
    featured: false,
  },

  {
    id: 5,
    title: "Article Creation Application",
    type: "Content Platform",

    img: "/projects/ar.png",
    stack: ["React.js", "Tailwind CSS", "REST API", "Vercel"],
    desc: "Article writing platform with rich text editor...",
    features: [
      "Rich text editor with formatting tools",
      "Category & tag management system",
      "Draft & publish workflow",
      "Reader analytics dashboard",
      "Responsive reading experience",
    ],
    live: "https://article-creation-frontend.vercel.app/",
    git: "https://github.com/Joyel-10/Article-Creation-frontend",
    status: "Live on Vercel",
    featured: false,
  },

  {
    id: 6,
    title: "SKYLINE: Street Chronicles",
    type: "Browser Racing Game",

    img: "/projects/gm.png",
    stack: ["React", "TypeScript", "Three.js", "Web Audio API"],
    desc: "Cinematic browser-based racing game...",
    features: [
      "3D racing engine built with Three.js",
      "Dynamic weather & lighting system",
      "Original AI-composed music via Flat AI",
      "Career mode with progression system",
      "Touch controls for mobile play",
    ],
    live: "https://skyline-game.vercel.app/",
    git: "https://github.com/Joyel-10/Skyline--Game",
    status: "Featured on LinkedIn",
    featured: true,
  },
];

function DevCard({ p }: { p: (typeof DEVS)[0] }) {
  const [exp, setExp] = useState(false);
  return (
    <div
      className={`card rounded-3xl overflow-hidden group`}
      style={{
        animation: p.featured ? "borderGlow 4s linear infinite" : undefined,
      }}
    >
      {/* Banner */}
      <div className="relative h-40 flex items-end p-5 overflow-hidden">
        {/* Thumbnail */}
        <img
          src={p.img}
          alt={p.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, 55,rgba(0,0,10,.95))`,
          }}
        />

        {/* Big number */}
        <div
          className="absolute top-3 left-5 opacity-10"
          style={{
            fontFamily: "Orbitron,monospace",
            fontWeight: 900,
            fontSize: "6rem",

            lineHeight: 1,
            userSelect: "none",
          }}
        >
          0{p.id}
        </div>

        <div className="relative z-10 w-full">
          <div className="flex flex-wrap items-center gap-2">
            <span className="pill" style={{}}>
              {p.type}
            </span>

            <span
              className="pill"
              style={{
                background: "rgba(0, 145, 97, 0.66)",
                borderColor: "rgba(16,185,129,.3)",
                color: "#000000",
              }}
            >
              ✦ {p.status}
            </span>
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3
          className="font-black text-slate-100 mb-2"
          style={{ fontFamily: "Orbitron,monospace", fontSize: ".88rem" }}
        >
          {p.title}
        </h3>
        <p className="text-slate-400 text-sm mb-4 leading-relaxed">{p.desc}</p>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {p.stack.map((s) => (
            <span key={s} className="pill" style={{}}>
              {s}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-2 mb-4">
          <a
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all hover:scale-105"
            style={{}}
          >
            <Globe size={12} /> Live Demo
          </a>
          <a
            href={p.git}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all hover:scale-105"
            style={{
              fontFamily: "JetBrains Mono,monospace",
              background: "rgba(255,255,255,.04)",
              border: "1px solid rgba(255,255,255,.1)",
              color: "rgba(221, 0, 0, 0.65)",
            }}
          >
            <Github size={12} /> GitHub
          </a>
        </div>

        <button
          onClick={() => setExp(!exp)}
          className="flex items-center gap-2 text-xs font-bold tracking-wide transition-all hover:gap-3"
          style={{ fontFamily: "JetBrains Mono,monospace" }}
        >
          <ExternalLink size={11} />
          {exp ? "Hide Features" : "Key Features"}
          {exp ? <ChevronUp size={11} /> : <ChevronDown size={11} />}
        </button>

        {exp && (
          <ul className="mt-3 space-y-2">
            {p.features.map((f, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm text-slate-400 hover:text-slate-300 transition-colors"
              >
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                  style={{}}
                />
                {f}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function DevWork() {
  return (
    <section id="devwork" className="sp relative overflow-hidden">
      <div
        className="orb w-96 h-96 top-0 right-0"
        style={{
          background: "radial-gradient(circle,rgba(6,182,212,.2),transparent)",
        }}
      />
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-16">
          <div className="sl justify-center mb-5">Web Development</div>
          <h2
            className="font-black"
            style={{
              fontFamily: "Orbitron,monospace",
              fontSize: "clamp(1.9rem,5vw,3.5rem)",
            }}
          >
            Things I've <span className="tg">Built</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Projects I built while learning — each one pushed me further in
            React, Angular, MERN stack, and 3D web experiences.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {DEVS.map((p) => (
            <DevCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
