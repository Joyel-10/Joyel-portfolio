"use client";
import { useState } from "react";
import { Play, Film, ChevronDown, ChevronUp, Sparkles } from "lucide-react";

const VID = [
  {
    id: 1,
    file: "Tron.mp4",
    thumb: "tron.jpg",
    title: "Cyberpunk",
    cat: "Cinematic",
    tool: "PIKALAB",
    color: "#6366f1",
    desc: "5 scenes — concrete tunnel at night, heavy rain, vintage car, slow camera push. Scene-by-scene with 5s generations merged in CapCut.",
    scenes: [
      "Wide: Tunnel entrance, rain curtain falling, night ambience",
      "Mid: Vintage car parked inside tunnel, wet asphalt reflections",
      "Close: Man silhouette beside car, dramatic rim light",
      "Push: Camera glides slowly forward into tunnel depth",
    ],
    prompt:
      "Cinematic night concrete tunnel, heavy rain curtain, vintage car, dramatic silhouette, wet reflections, slow push, moody 4K, shallow DOF",
    tags: ["Cinematic", "Night", "Neon"],
  },

  {
    id: 2,
    file: "F!.mp4",
    thumb: "f1.jpg",
    title: "F1 Racing",
    cat: "Sports",
    tool: "KlingAI",
    color: "#fffb01",
    desc: "4 scenes horizontal 16:9 — Cinematic 4K Formula 1 racing montage, photorealistic, hyper-detailed, 60fps, IMAX film style",
    scenes: [
      "Rear chase camera following a red and black Formula 1 car speeding down a race track at golden hour with high speed motion blur",
      "Low-angle ground-level shot as the Formula 1 car zooms toward the camera at twilight with stadium lights, lens flares, and tire smoke",
      "Extreme close-up macro shot of the front carbon fiber wing and spinning tires",
      "Wide shot of the car crossing the finish line on a wet track with reflections, fireworks in the background, checkered flag waving and cheering crowd",
    ],
    prompt:
      "Cinematic 4K F1 racing montage. A rear-view chase camera following a red and black Formula 1 car speeding down a race track at golden hour, high speed motion blur.  A low-angle ground-level shot as the car zooms toward the camera at twilight, stadium lights creating lens flares and smoke trailing the tires. Extreme close-up macro shot of the front carbon fiber wing and spinning tires.  Wide shot of the car crossing the finish line on a wet track with reflections, fireworks exploding in the background, a checkered flag waving in the foreground, and a cheering crowd in the grandstands. Photorealistic, hyper-detailed, 60fps, IMAX style.",

    tags: ["Cinematic", "4K", "Motion Blur"],
  },

  {
    id: 3,
    file: "AD1.mp4",
    thumb: "AD.jpg",
    title: "Advertisement",
    cat: "Product Ad",
    tool: "Runway",
    color: "#ff0000",
    desc: "2 scenes slow motion particles, dust explosion simulation, cinematic lighting, camera orbit, product commercial, studio lighting, macro lens, motion blur.",
    scenes: [
      "Open: Dark background, shoe appears in slow motion",
      "Action: Dust explosion bursts around the shoe with particles and debris",
      "Orbit: Camera orbit around the shoe with dramatic lighting",
      "End: Final hero shot with text 'Unleash the Explosion'",
    ],
    prompt:
      "Start with dark background, a running shoe appears in slow motion, suddenly dust explosion bursts around the shoe, particles flying everywhere, shockwave effect, slow motion debris, camera orbit around the shoe, dramatic lighting, product reveal commercial style, text appears cinematic product advertisement, 4K, high speed camera, ultra realistic",
    tags: ["Advertisement", "Lifestyle"],
  },

  {
    id: 4,
    file: "Car.mp4",
    thumb: "car.jpg",
    title: "Car Intro ",
    cat: "Thriller",
    tool: "Pika Labs",
    color: "#f59e0b",
    desc: "Cinematic thriller montage: man walking in foggy warehouse, luxury sports car in wet garage, driving through rainy neon city at night, silhouette man in misty alley, moody teal blue lighting, film grain",
    scenes: [
      "Warehouse Shot — Man in white suit walking through a foggy abandoned warehouse with volumetric light",
      "Garage Shot — Black luxury sports car with headlights in a wet steamy garage",
      "POV Driving Shot — High speed driving through rainy neon city at night",
      "Alley Shot — Silhouette man in trench coat standing in a misty city alley",
    ],
    prompt:
      "Cinematic thriller montage featuring a man in a foggy warehouse, a luxury sports car in a wet garage, high-speed night driving through a neon city, and a mysterious silhouette in a misty alley. Moody lighting, teal-blue color grading, film grain, IMAX style, 4K.",

    tags: ["Automotive", "Commercial", "Studio"],
  },

  {
    id: 6,
    file: "WAR.mp4",
    thumb: "war.jpg",
    title: "Action Teaser",
    cat: "War",
    tool: "PIKA LAB",
    color: "#f43f5e",
    desc: "Cinematic war montage showing tanks in a foggy battlefield, soldiers in combat, explosions, a helicopter crash, and a destroyed post-war landscape. Hyper-realistic, intense, film style",
    scenes: [
      "Wide Shot — Tanks moving through foggy muddy battlefield",
      "Over Shoulder Shot — Soldier looking over smoke-filled battlefield",
      "Action Shot — Soldier firing rifle with explosions and burning house",
      "Aerial Shot — Military helicopter crashing and exploding",
      "Impact Shot — Mortar hitting trench with debris in slow motion",
      "Final Wide Shot — Post-war destroyed landscape with smoke and scorched trees",
    ],
    prompt:
      "A cinematic 4K montage of a gritty, realistic war scene. Shot 1: A wide high-angle shot of several tanks driving through a desolate, foggy landscape with cracked, muddy terrain. Shot 2: An over-the-shoulder shot of a soldier in a helmet looking out over a smoke-filled battlefield. Shot 3: A low-angle action shot of a soldier firing an assault rifle with a burning house and explosions in the background. Shot 4: A wide aerial shot of a military helicopter crashing and exploding into a massive orange fireball. Shot 5: A close-up of a mortar hitting a trench, with dirt and debris flying everywhere in slow motion. Shot 6: A final static wide shot of a post-war landscape with scorched trees and smoke under a dim sun. Hyper-realistic, 60fps, IMAX film style, moody and intense color grading.",

    tags: ["Action", "Film", "War"],
  },

  {
    id: 5,
    file: "Nature.mp4",
    thumb: "man.jpg",
    title: "Mountain Travel",
    cat: "Travel",
    tool: "VEED",
    color: "#10b981",
    desc: "Cinematic nature montage featuring a man walking through a sunlit forest, crossing green hills under a blue sky, a fast river leading to a misty waterfall, and a panoramic mountain sunset. Peaceful atmosphere.",
    scenes: [
      "Forest Shot — Man walking on a sunlit forest path with golden sun rays through trees",
      "Hill Shot — Wide tracking shot of man walking across a green hill under blue sky",
      "River Shot — Low angle moving over river toward a misty jungle waterfall",
      "Mountain Shot — Panoramic sunset mountains with clouds in the valleys",
    ],
    prompt:
      "A cinematic 4K nature montage. Shot 1: A man with a backpack walking down a sunlit forest path, bright golden sunbeams filtering through tall pine trees. Shot 2: A wide tracking shot of a man walking across a vast, vibrant green grassy hill under a bright blue sky with cinematic clouds. Shot 3: A dynamic low-angle shot moving quickly over a rushing river toward a massive, misty waterfall surrounded by lush jungle. Shot 4: A panoramic sunset view of layered mountain silhouettes with thick white clouds nestled in the valleys. Photorealistic, hyper-detailed, peaceful atmosphere, 60fps, shot on 35mm film.",

    tags: ["Travel", "Aerial", "Nature"],
  },

  {
    id: 7,
    file: "Man.mp4",
    thumb: "na.jpg",
    title: "Morning",
    cat: "Nature",
    tool: "Veo",
    color: "#9333ea",
    desc: "Cinematic video of a man on a mountain at golden hour and later sitting by a campfire under a starry night sky, photorealistic, atmospheric.",
    scenes: [
      "Wide Shot — Man standing on mountain peak above sea of clouds at golden hour",
      "Zoom Out Shot — Camera slowly revealing vast mountains and valley",
      "Night Shot — Man sitting near campfire on mountain ridge",
      "Sky Shot — Milky Way galaxy and stars over silhouetted mountains",
    ],
    prompt:
      "Cinematic short film with two scenes. Scene 1: A wide cinematic shot from behind a man standing on a rocky mountain ledge overlooking a vast valley covered by a sea of clouds during golden hour. Sunlight creates soft lens flares and warm lighting over rolling green hills and pine forests. The camera slowly zooms out revealing massive mountain peaks. Scene 2: Night scene of the same man sitting beside a campfire on a mountain ridge under a clear sky filled with the Milky Way and thousands of stars. Snow-capped mountains are silhouetted in the background while warm firelight illuminates the jacket. Photorealistic, cinematic lighting, 4K, atmospheric, film style.",

    tags: ["Mountains", "Photorealistic", "Life"],
  },

  {
    id: 8,
    file: "Mustang.mp4",
    thumb: "mas.jpg",
    title: "Mustang",
    cat: "Automotive",
    tool: "Veo3",
    color: "#5e5865",
    desc: " Black 1969 Mustang speeding across a metal bridge in a thunderstorm, low-angle chase shot, rain, water splashes, lightning, fog, glowing taillights, moody blue cinematic lighting, photorealistic, 4K, IMAX style.",
    scenes: [
      "Chase Shot — Mustang speeding across bridge in heavy rain",
      "Action Shot — Water splashing from tires on wet road",
      "Atmosphere — Lightning, fog, and thunderstorm environment",
      "Detail Shot — Glowing red taillights in rain",
      "Final Shot — Wide cinematic bridge view with moody lighting",
    ],
    prompt:
      "Cinematic 4K tracking shot of a black classic 1969 Mustang speeding across a massive metal truss bridge during a heavy thunderstorm. Shot from a low-angle chase camera perspective, capturing water splashing from tires on the rain-slicked asphalt. The scene features dramatic lightning bolts striking in the background, thick atmospheric fog, and glowing red taillights. High contrast, moody blue color grading, hyper-realistic, 60fps, IMAX film style.",

    tags: ["Rain", "Lightning", "Chase Shot"],
  },

  {
    id: 9,
    file: "NEon.mp4",
    thumb: "cyber.jpg",
    title: "Cyberpunk City Walk",
    cat: "Character",
    tool: "Runway ML & Hailuo",
    color: "#06b6d4",
    desc: "Cinematic cyberpunk montage featuring a neon city in heavy rain, mysterious hooded figures, neon reflections, a close-up face with neon lights, and a futuristic street explosion. Moody teal and magenta lighting, Blade Runner style",
    scenes: [
      "Tracking Shot — Hooded man walking through neon street in heavy rain",
      "Low Angle Shot — Mysterious figure with glowing face under streetlamp",
      "Close-up Shot — Woman face with raindrops and neon reflections in eyes",
      "Wide Action Shot — Caped figure walking through steam with explosion in background",
      "Street Shot — Two hooded figures meeting on neon hologram street",
    ],
    prompt:
      "Cyberpunk city night, tracking shot, man walking, neon wet road reflections, 35mm lens, shallow DOF, cinematic 4K film look",
    tags: ["Cyberpunk", "Neon", "Rain"],
  },
];

function VCard({ v }: { v: (typeof VID)[0] }) {
  const [exp, setExp] = useState(false);
  const [started, setStarted] = useState(false);
  return (
    <div
      className="card rounded-3xl overflow-hidden group"
      style={{ borderColor: `${v.color}22` }}
    >
      {/* Video */}
      <div
        className="relative h-52 scan overflow-hidden"
        style={{
          background: `linear-gradient(135deg,${v.color}22,rgba(0,0,10,.95))`,
        }}
      >
        <div className="absolute inset-0 pgrid opacity-10" />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(ellipse at center,${v.color}25,transparent 70%)`,
          }}
        />
        {!started ? (
          <>
            {/* Thumbnail Image */}
            <img
              src={`/thumbnails/${v.thumb}`}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setStarted(true)}
                className="pbtn w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg,${v.color},${v.color}99)`,
                  boxShadow: `0 0 45px ${v.color}66`,
                  border: "2px solid rgba(255,255,255,.22)",
                }}
              >
                <Play size={20} className="text-white ml-1" fill="white" />
              </button>
            </div>
          </>
        ) : (
          <video
            src={`/${v.file}`}
            className="w-full h-full object-cover"
            autoPlay
            controls
            playsInline
          />
        )}
        <div
          className="absolute top-3 right-3 pill"
          style={{
            background: `${v.color}18`,
            borderColor: `${v.color}40`,
            color: v.color,
          }}
        >
          {v.tool}
        </div>
        <div className="absolute top-3 left-3 pill">{v.cat}</div>
        <div
          className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
          style={{
            background: "rgba(0,0,10,.8)",
            border: `1px solid ${v.color}33`,
          }}
        >
          <Film size={9} style={{ color: v.color }} />
          <span
            style={{
              fontFamily: "JetBrains Mono,monospace",
              fontSize: ".58rem",
              color: v.color,
            }}
          >
            {v.scenes.length} scenes
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3
          className="font-black text-slate-100 mb-1.5"
          style={{ fontFamily: "Orbitron,monospace", fontSize: ".88rem" }}
        >
          {v.title}
        </h3>
        <p className="text-slate-400 text-sm mb-3 leading-relaxed">{v.desc}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {v.tags.map((t) => (
            <span key={t} className="pill">
              {t}
            </span>
          ))}
        </div>

        <button
          onClick={() => setExp(!exp)}
          className="flex items-center gap-2 text-xs font-bold tracking-wide transition-all hover:gap-3"
          style={{ fontFamily: "JetBrains Mono,monospace", color: v.color }}
        >
          <Sparkles size={11} />
          {exp ? "Hide Scene Breakdown" : "Scene Breakdown"}
          {exp ? <ChevronUp size={11} /> : <ChevronDown size={11} />}
        </button>

        {exp && (
          <div className="mt-4 space-y-2">
            <div
              className="rounded-xl p-3 mb-2"
              style={{
                background: "rgba(99,102,241,.06)",
                border: "1px solid rgba(99,102,241,.18)",
              }}
            >
              <div
                style={{
                  fontFamily: "JetBrains Mono,monospace",
                  fontSize: ".6rem",
                  fontWeight: 700,
                  color: "#a5b4fc",
                  marginBottom: "6px",
                  letterSpacing: ".08em",
                }}
              >
                FINAL PROMPT
              </div>
              <p
                style={{
                  fontFamily: "JetBrains Mono,monospace",
                  fontSize: ".68rem",
                  color: "rgba(148,163,184,.75)",
                  lineHeight: 1.6,
                }}
              >
                {v.prompt}
              </p>
            </div>
            {v.scenes.map((s, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl p-3 hover:scale-[1.01] transition-transform"
                style={{
                  background: `${v.color}0d`,
                  border: `1px solid ${v.color}22`,
                }}
              >
                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    background: `${v.color}22`,
                    border: `1px solid ${v.color}40`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "JetBrains Mono,monospace",
                      fontSize: ".6rem",
                      fontWeight: 700,
                      color: v.color,
                    }}
                  >
                    {i + 1}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "JetBrains Mono,monospace",
                    fontSize: ".68rem",
                    color: "rgba(148,163,184,.7)",
                    lineHeight: 1.5,
                  }}
                >
                  {s}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Videos() {
  return (
    <section
      id="videos"
      className="sp relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg,transparent,rgba(5,0,26,.5),transparent)",
      }}
    >
      <div
        className="orb w-96 h-96 -bottom-20 -left-20"
        style={{
          background:
            "radial-gradient(circle,rgba(99,102,241,.28),transparent)",
        }}
      />
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-16">
          <div className="sl justify-center mb-5">AI Video Projects</div>
          <h2
            className="font-black"
            style={{
              fontFamily: "Orbitron,monospace",
              fontSize: "clamp(1.9rem,5vw,3.5rem)",
            }}
          >
            Scene by Scene <span className="tg">Storytelling</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Every video was built scene-by-scene — each shot a separate 5s AI
            generation, then merged in CapCut. Click any card to see the full
            breakdown.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VID.map((v) => (
            <VCard key={v.id} v={v} />
          ))}
        </div>
      </div>
    </section>
  );
}
