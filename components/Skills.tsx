'use client'
import { useState } from 'react'

const TABS = ['AI & Creative','Web Development','Tools & Workflow']

const DATA: Record<string,{label:string;color:string;acc:string;items:{n:string;lv:number;tag:string}[]}[]> = {
  'AI & Creative':[
    {label:'AI Video Generation',color:'#6366f1',acc:'#a5b4fc',items:[{n:'Kling AI',lv:88,tag:'Primary'},{n:'Runway ML',lv:82,tag:'Cinematic'},{n:'Pika Labs',lv:78,tag:'Social'},{n:'Veo',lv:70,tag:'Premium'}]},
    {label:'AI Image & Prompts',color:'#06b6d4',acc:'#67e8f9',items:[{n:'Midjourney',lv:90,tag:'Storyboards'},{n:'Prompt Engineering',lv:88,tag:'Core Skill'},{n:'DALL·E 3',lv:80,tag:'Concepts'},{n:'Nano banana 2',lv:95,tag:'Custom'}]},
    {label:'AI Music & Audio',color:'#f59e0b',acc:'#fde68a',items:[{n:'Flat AI',lv:85,tag:'Compositions'},{n:'Suno AI',lv:78,tag:'Vocals'},{n:'Udio',lv:72,tag:'Genre'},{n:'ElevenLabs',lv:68,tag:'Voiceover'}]},
  ],
  'Web Development':[
    {label:'Frontend',color:'#f43f5e',acc:'#fb7185',items:[{n:'React.js',lv:80,tag:'Primary'},{n:'Next.js',lv:75,tag:'Apps'},{n:'JavaScript',lv:88,tag:'Typed'},{n:'HTML&CSS ',lv:85,tag:'Styling'}]},
    {label:'3D & Animation',color:'#9333ea',acc:'#c4b5fd',items:[{n:'Three.js',lv:65,tag:'3D Web'},{n:'CSS Animations',lv:80,tag:'Motion'},{n:'Canvas API',lv:62,tag:'Graphics'},{n:'Angular',lv:75,tag:'Framework'}]},
    {label:'Backend Basics',color:'#10b981',acc:'#6ee7b7',items:[{n:'Node.js',lv:80,tag:'Server'},{n:'Express.js',lv:78,tag:'API'},{n:'MongoDB',lv:78,tag:'NoSQL'},{n:'REST APIs',lv:75,tag:'Integration'}]},
  ],
  'Tools & Workflow':[
    {label:'Video Post-Production',color:'#06b6d4',acc:'#67e8f9',items:[{n:'CapCut',lv:90,tag:'Primary'},{n:'Scene Merging',lv:95,tag:'Workflow'},{n:'Color Grading',lv:74,tag:'Post-FX'},{n:'Premiere Pro',lv:62,tag:'Pro'}]},
    {label:'Dev Tools',color:'#6366f1',acc:'#a5b4fc',items:[{n:'VS Code',lv:92,tag:'IDE'},{n:'Git / GitHub',lv:80,tag:'Version Control'},{n:'Vercel',lv:88,tag:'Deploy'},{n:'Cursor AI',lv:84,tag:'AI Coding'}]},
    {label:'AI Dev Assistants',color:'#f59e0b',acc:'#fde68a',items:[{n:'GitHub Copilot',lv:82,tag:'Code AI'},{n:'Claude',lv:92,tag:'Prompting'},{n:'ChatGPT',lv:88,tag:'Research'},{n:'v0.dev',lv:70,tag:'UI Gen'}]},
  ],
}

function Bar({lv,color,acc}:{lv:number;color:string;acc:string}) {
  const [h,setH]=useState(false)
  return (
    <div className="relative h-1.5 rounded-full overflow-hidden cursor-pointer sbar"
      style={{background:'rgba(255,255,255,.05)'}}
      onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}>
      <div className="h-full rounded-full transition-all duration-700"
        style={{width:`${lv}%`,background:`linear-gradient(90deg,${color},${acc})`,
          boxShadow:h?`0 0 18px ${color}99,0 0 35px ${color}44`:`0 0 8px ${color}55`}}/>
    </div>
  )
}

export default function Skills() {
  const [tab,setTab]=useState(TABS[0])
  return (
    <section id="skills" className="sp relative overflow-hidden" style={{background:'linear-gradient(180deg,transparent,rgba(5,0,26,.6),transparent)'}}>
      <div className="orb w-80 h-80 bottom-0 left-0" style={{background:'radial-gradient(circle,rgba(99,102,241,.22),transparent)'}}/>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <div className="sl justify-center mb-5">Skills & Tools</div>
          <h2 className="font-black" style={{fontFamily:'Orbitron,monospace',fontSize:'clamp(1.9rem,5vw,3.5rem)'}}>
            What I Work <span className="tg">With</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">A growing toolkit across AI creation, web development, and production workflows — still learning, always improving.</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {TABS.map(t=>(
            <button key={t} onClick={()=>setTab(t)}
              className="px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all hover:scale-105"
              style={{fontFamily:'JetBrains Mono,monospace',
                background:tab===t?'linear-gradient(135deg,#4f46e5,#0891b2)':'rgba(99,102,241,.08)',
                border:tab===t?'none':'1px solid rgba(99,102,241,.25)',
                color:tab===t?'white':'#a5b4fc',
                boxShadow:tab===t?'0 0 32px rgba(99,102,241,.42)':'none'}}>
              {t}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {DATA[tab].map((g,gi)=>(
            <div key={g.label} className={`card rounded-3xl p-6 reveal d${gi+1}`} style={{borderColor:`${g.color}22`}}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-10 rounded-full" style={{background:`linear-gradient(to bottom,${g.color},transparent)`}}/>
                <h3 className="font-bold text-slate-100" style={{fontFamily:'Orbitron,monospace',fontSize:'.75rem',letterSpacing:'.1em'}}>{g.label}</h3>
              </div>
              <div className="space-y-5">
                {g.items.map(item=>(
                  <div key={item.n} className="group/it">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="w-1.5 h-1.5 rounded-full" style={{background:g.color,boxShadow:`0 0 6px ${g.color}`}}/>
                        <span className="text-sm font-semibold text-slate-200 group-hover/it:text-white transition-colors">{item.n}</span>
                        <span className="pill" style={{fontSize:'.55rem',padding:'.1rem .5rem',background:`${g.color}12`,borderColor:`${g.color}25`,color:g.color}}>{item.tag}</span>
                      </div>
                      <span className="text-xs font-bold tabular-nums" style={{fontFamily:'JetBrains Mono,monospace',color:g.color}}>{item.lv}%</span>
                    </div>
                    <Bar lv={item.lv} color={g.color} acc={g.acc}/>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
