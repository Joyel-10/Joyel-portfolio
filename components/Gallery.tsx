"use client";
import { useState } from "react";
import { X, ZoomIn, ImageIcon, Copy, Check } from "lucide-react";

const IMGS = [
  {
    id: 1,
    title: "Cyberpunk Alley",
    tool: "Nano Banana 2",
    aspect: "wide",
    color: "#6366f1",
    prompt:
      "Cyberpunk noir alley, Tokyo rain, vibrant pink and blue neon, wet asphalt reflections",
  },
  {
    id: 2,
    title: "Midnight Mustang",
    tool: "Nano Banana 2",
    aspect: "wide",
    color: "#0f172a",
    prompt:
      "Green 1969 Mustang on suspension bridge, heavy thunderstorm, lightning bolt, cinematic grain",
  },
  {
    id: 3,
    title: "Monsoon Farming",
    tool: "Nano Banana 2",
    aspect: "wide",
    color: "#166534",
    prompt:
      "Vintage 1980s film, Indian farmers plowing paddy field with oxen, lush palms, rainy sky",
  },
  {
    id: 4,
    title: "Tactical Chronograph",
    tool: "DALL·E 3",
    aspect: "tall",
    color: "#334155",
    prompt:
      "Macro shot, black stainless steel watch with water droplets, high-contrast spotlight",
  },
  {
    id: 5,
    title: "Kerala Sunset",
    tool: "DALL·E 3",
    aspect: "wide",
    color: "#ea580c",
    prompt:
      "Silhouette of man on wooden jetty, Kerala backwaters, traditional houseboats, orange dusk",
  },
  {
    id: 6,
    title: "Shibuya Night",
    tool: "DALL·E 3",
    aspect: "wide",
    color: "#0ea5e9",
    prompt:
      "High-angle Shibuya Crossing, neon billboards, rain-slicked streets, teal and orange grading",
  },
  {
    id: 7,
    title: "Fire-Breathing Titan",
    tool: "Midjourney",
    aspect: "wide",
    color: "#b91c1c",
    prompt:
      "Giant spiked monster breathing fire, burning skyscrapers, lightning, 4K disaster film style",
  },
  {
    id: 8,
    title: "Waterfall Overlook",
    tool: "DALL·E 3",
    aspect: "wide",
    color: "#0891b2",
    prompt:
      "Man on suspension bridge, massive roaring waterfall, misty atmosphere, lush green cliffs",
  },
  {
    id: 9,
    title: "Tunnel Stand-off",
    tool: "Nano Banana 2",
    aspect: "wide",
    color: "#1e293b",
    prompt:
      "Man with vintage car inside wet tunnel, heavy rain at entrance, film noir atmosphere",
  },
  
  {
    id: 10,
    title: 'Ember Knight',
    tool: 'DALL·E 3',
    aspect: 'tall',
    color: '#f97316',
    prompt: 'Cinematic back view of a dark knight in heavy armor holding a flaming sword, standing on a battlefield of fire and embers, dramatic lightning striking through dark storm clouds, hyper-realistic, 8k'
  },
  {
    id: 11,
    title: 'Neon McLaren',
    tool: 'Midjourney',
    aspect: 'square',
    color: '#06b6d4',
    prompt: 'Low-angle close-up of a sleek orange supercar on a rain-slicked city street at night, vibrant teal and magenta neon lighting, water droplets on car body, cinematic reflections, futuristic urban atmosphere'
  }
]
  


function ImgCard({ img, onClick }: { img: any; onClick: () => void }) {
  const [copied, setCopied] = useState(false);

  const copy = (e: any) => {
    e.stopPropagation();
    navigator.clipboard.writeText(img.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const h =
    img.aspect === "tall" ? "h-64" : img.aspect === "wide" ? "h-40" : "h-52";

  return (
    <div
      onClick={onClick}
      className="break-inside-avoid rounded-2xl overflow-hidden cursor-pointer group relative mb-4"
      style={{ border: `1px solid ${img.color}22` }}
    >
      {/* IMAGE */}
      <div className={`w-full ${h} relative overflow-hidden`}>
        <img
          src={`/gallery/${img.id}.jpg`}
          
          alt={img.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* HOVER OVERLAY */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-3"
        style={{
          background: `linear-gradient(to top,rgba(0,0,0,.8),transparent)`,
        }}
      >
        <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-2 bg-white/20">
          <ZoomIn size={14} className="text-white" />
        </div>

        <p className="text-xs font-bold text-white">{img.title}</p>
        <p className="text-[10px] text-white/70 line-clamp-2">{img.prompt}</p>
      </div>

      {/* TOOL TAG */}
      <div className="absolute top-2 right-2 text-[10px] px-2 py-1 rounded-lg bg-black/60 text-white">
        {img.tool}
      </div>

      {/* COPY BUTTON */}
      <button
        onClick={copy}
        className="absolute bottom-2 right-2 w-7 h-7 flex items-center justify-center rounded-lg bg-black/70 hover:scale-110 transition"
      >
        {copied ? (
          <Check size={12} className="text-green-400" />
        ) : (
          <Copy size={12} className="text-white" />
        )}
      </button>
    </div>
  );
}

export default function Gallery() {
  const [sel, setSel] = useState<any>(null);
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(sel.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section  id='gallery' className="p-6">


       {/* Header */}
        <div className="text-center mb-14">
          <div className="sl justify-center mb-5">AI Image Gallery</div>
          <h2 className="font-black" style={{fontFamily:'Orbitron,monospace',fontSize:'clamp(1.9rem,5vw,3.5rem)'}}>
            Visual <span className="tg">Creations</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            AI-generated images crafted with precision prompts using Midjourney, Nano banana 2 & DALL·E 3.
            Hover to see the prompt. Click to expand.
          </p>
        </div>

      {/* GRID */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {IMGS.map((img) => (
          <ImgCard key={img.id} img={img} onClick={() => setSel(img)} />
        ))}
      </div>

      {/* LIGHTBOX */}
      {sel && (
        <div
          onClick={() => setSel(null)}
          className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-2xl w-full bg-black rounded-2xl overflow-hidden"
          >
            {/* IMAGE */}
            <div className="h-72 relative">
              <img
                src={`/gallery/${sel.id}.png`}
                alt={sel.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* INFO */}
            <div className="p-4">
              <h3 className="text-white font-bold">{sel.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{sel.tool}</p>

              <div className="bg-gray-900 p-3 rounded-lg text-sm text-gray-300">
                {sel.prompt}
              </div>

              <button
                onClick={copy}
                className="mt-3 px-4 py-2 bg-indigo-500 rounded-lg text-sm"
              >
                {copied ? "Copied!" : "Copy Prompt"}
              </button>
            </div>

            {/* CLOSE */}
            <button
              onClick={() => setSel(null)}
              className="absolute top-3 right-3 bg-white/10 p-2 rounded-lg"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
