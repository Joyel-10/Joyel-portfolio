"use client";
import { useState, useEffect, useRef } from "react";
import { Play, Pause, Music2, Volume2, Disc3 } from "lucide-react";

const TRACKS = [
  {
    id: 1,
    title: "Quiet Circles",
    mood: "Ambient · Cinematic · Chill",
    duration: "2:54",
    color: "#d2d2e6",
    bars: [0.4,0.7,0.5,0.9,0.6,0.8,0.3,0.7,0.5,0.9,0.4,0.8,0.6,0.5,0.9,0.7,0.4,0.8,0.3,0.6],
  },
  {
    id: 2,
    title: "After The Rain",
    mood: "Ambient · Chill · Cinematic",
    duration: "3:08",
    color: "#03ffab",
    bars: [.3,.5,.4,.6,.5,.7,.4,.6,.5,.7,.3,.5,.6,.4,.7,.5,.4,.6,.5,.3],
  },
  {
    id: 3,
    title: "Cyber Drizzle Walk",
    mood: "Cyberpunk · Electronic · Lo-fi",
    duration: "2:40",
    color: "#ac2a2a",
    bars: [.5,.7,.6,.8,.7,.9,.5,.7,.6,.8,.5,.7,.6,.8,.7,.9,.5,.7,.6,.8],
  },
  {
    id: 4,
    title: "Shadows into the morning",
    mood: "Piano · Calm · Emotional",
    duration: "2:30",
    color: "#ffb700",
    bars: [.4,.6,.5,.7,.6,.8,.5,.7,.6,.8,.4,.6,.5,.7,.6,.8,.5,.7,.6,.5],
  },
  {
    id: 5,
    title: "Emotional",
    mood: "Emotional",
    duration: "2:52",
    color: "#00f7ff",
    bars: [0.9,0.4,0.7,0.5,0.8,0.6,0.3,0.9,0.5,0.7,0.4,0.8,0.6,0.3,0.9,0.5,0.7,0.8,0.4,0.6],
  },
  {
    id: 6,
    title: "Wet street smile",
    mood: "Uplifting · Cinematic",
    duration: "2:15",
    color: "#9333ea",
    bars: [0.5,0.8,0.4,0.7,0.9,0.3,0.6,0.5,0.8,0.4,0.9,0.7,0.3,0.6,0.8,0.5,0.4,0.7,0.9,0.3],
  },
];

function TrackCard({ t, playing, onToggle }: any) {
  const [bars, setBars] = useState(t.bars);
  const ref = useRef<any>(null);

  useEffect(() => {
    if (playing) {
      ref.current = setInterval(() => {
        setBars(
          t.bars.map((b: number) =>
            Math.max(0.08, Math.min(0.98, b + (Math.random() - 0.5) * 0.38))
          )
        );
      }, 100);
    } else {
      if (ref.current) clearInterval(ref.current);
      setBars(t.bars);
    }

    return () => {
      if (ref.current) clearInterval(ref.current);
    };
  }, [playing]);

  return (
    <div
      className="card rounded-2xl p-5 transition-all"
      style={{
        borderColor: playing ? t.color : `${t.color}22`,
        boxShadow: playing
          ? `0 0 50px ${t.color}22,0 0 100px ${t.color}0a`
          : "none",
      }}
    >
      {/* Waveform */}
      <div
        className="relative w-full h-16 rounded-xl mb-4 flex items-center overflow-hidden px-2"
        style={{
          background: playing ? `${t.color}12` : "rgba(255,255,255,.02)",
          border: `1px solid ${t.color}${playing ? "44" : "18"}`,
        }}
      >
        <div className="flex items-center gap-[2px] h-10 w-full">
          {bars.map((h: number, i: number) => (
            <div
              key={i}
              className="flex-1 rounded-full"
              style={{
                height: `${h * 100}%`,
                background: playing
                  ? `linear-gradient(to top,${t.color},${t.color}88)`
                  : `${t.color}44`,
                transition: "height .1s ease",
              }}
            />
          ))}
        </div>

        <Volume2
          size={10}
          className="absolute top-1.5 right-2"
          style={{ color: t.color, opacity: 0.45 }}
        />
      </div>

      {/* Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{
              background: `${t.color}15`,
              border: `1px solid ${t.color}28`,
            }}
          >
            <Disc3
              size={15}
              style={{
                color: t.color,
                animation: playing ? "spin 3s linear infinite" : undefined,
              }}
            />
          </div>
          <div>
            <h3 className="font-bold text-slate-100 text-sm">{t.title}</h3>
            <p className="text-xs text-slate-400">{t.mood}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">{t.duration}</span>
          <button
            onClick={onToggle}
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{
              background: playing ? t.color : `${t.color}18`,
            }}
          >
            {playing ? (
              <Pause size={13} className="text-white" />
            ) : (
              <Play size={13} style={{ color: t.color }} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Music() {
  const [playing, setPlaying] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleTrack = (id: number) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    if (playing === id) {
      setPlaying(null);
      return;
    }

    const audio = new Audio(`/music/${id}.mp3`);
    audio.volume = 0.7;
    audio.play();

    audioRef.current = audio;
    setPlaying(id);

    audio.onended = () => {
      setPlaying(null);
      audioRef.current = null;
    };
  };

  return (
    <section id='music' className="sp relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <h2 className="font-black text-3xl mb-3">
            Original Soundscapes
          </h2>
          <p className="text-slate-400">
            AI-composed music tracks. Click play to listen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TRACKS.map((t) => (
            <TrackCard
              key={t.id}
              t={t}
              playing={playing === t.id}
              onToggle={() => toggleTrack(t.id)}
            />
          ))}
        </div>

        <div className="mt-10 text-center text-slate-400 text-sm">
          Composed with Flat AI · Suno · Udio
        </div>
      </div>
    </section>
  );
}