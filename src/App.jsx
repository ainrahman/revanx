import { useState, useEffect } from 'react'
import { ArrowDown, Globe, Shield, Terminal, Radar, Target, Zap, LayoutGrid, Car, Database, Smartphone, Check } from 'lucide-react'
import './index.css'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-neon-green selection:text-black">
      
      {/* NAV */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <Radar className="text-neon-green animate-pulse-slow" size={24} />
            <span>REVANX <span className="text-neon-green">TACTICAL</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">CAPABILITIES</a>
            <a href="#armory" className="hover:text-white transition-colors">ARMORY</a>
            <a href="#manifesto" className="hover:text-white transition-colors">MANIFESTO</a>
          </div>
          <button className="bg-neon-green text-black px-5 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">
            ACCESS TERMINAL
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-green/5 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-mono">SYSTEM ONLINE v1.0</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-tight">
            ORDER FROM <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">CHAOS.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            The Field Commander's Bible. We don't sell AI. We sell <strong className="text-white">Cognitive Bandwidth.</strong> 
            Stripped bloat. No complex avatars. Just raw, high-speed lead logistics.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="w-full md:w-auto bg-neon-green text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2">
              <Terminal size={18} /> INITIALIZE DEMO
            </button>
            <button className="w-full md:w-auto px-8 py-4 border border-white/10 text-white font-bold uppercase tracking-widest hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
              READ MANIFESTO
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
          <ArrowDown size={24} />
        </div>
      </section>

      {/* PROBLEM / AGITATION */}
      <section className="py-24 bg-[#080808] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">CHAOS IS THE ENEMY.</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Buried in spreadsheets? Missing calls while showing homes? Losing hot leads to slow responses?
                The old way is costing you commissions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-red-500"><Shield size={16} /></div>
                  <span className="text-gray-300">Leads slipping through cracks in WhatsApp & Email.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-red-500"><Shield size={16} /></div>
                  <span className="text-gray-300">Manual follow-ups wasting 4+ hours daily.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-red-500"><Shield size={16} /></div>
                  <span className="text-gray-300">No clear view of who is ready to buy NOW.</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-green/20 to-transparent blur-3xl opacity-20"></div>
              <div className="bg-black/50 border border-white/10 p-8 rounded-lg relative z-10 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                  <span className="text-xs font-mono text-gray-500">SYSTEM STATUS</span>
                  <span className="text-xs font-mono text-red-500 animate-pulse">CRITICAL OVERLOAD</span>
                </div>
                <div className="space-y-3 font-mono text-sm text-gray-400">
                  <div className="flex justify-between"><span>Unread Messages</span><span className="text-white">428</span></div>
                  <div className="flex justify-between"><span>Missed Calls</span><span className="text-white">12</span></div>
                  <div className="flex justify-between"><span>Follow-ups Due</span><span className="text-white">57</span></div>
                  <div className="h-1 w-full bg-gray-800 rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-red-500 w-[90%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE FEATURES (THE WEAPONS) */}
      <section id="features" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">TACTICAL ADVANTAGE</h2>
            <p className="text-gray-400">Deploying advanced countermeasures.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<LayoutGrid className="text-neon-green" />}
              title="Central Command"
              desc="Unified dashboard. WhatsApp, Email, SMS. One screen to rule them all."
            />
            <FeatureCard 
              icon={<Zap className="text-yellow-400" />}
              title="AI Quick Strike"
              desc="AI drafts replies. You swipe to send. Zero friction response time."
            />
            <FeatureCard 
              icon={<Target className="text-blue-400" />}
              title="Smart Recon"
              desc="Auto-scoring leads based on behavior. Know exactly who to call first."
            />
            <FeatureCard 
              icon={<Car className="text-red-400" />}
              title="Drive Mode"
              desc="Hands-free voice ops. 'Hey Revanx, log that showing.' Eyes on the road."
            />
          </div>
        </div>
      </section>

      {/* THE ARMORY (LATENT CAPABILITIES) */}
      <section id="armory" className="py-24 bg-[#080808] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
             <Shield className="text-gray-500" size={32} />
             <div>
               <h2 className="text-3xl font-bold">THE ARMORY</h2>
               <p className="text-sm text-gray-500 font-mono">LATENT CAPABILITIES [CLASSIFIED]</p>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ArmoryCard title="Agency Analytics" status="READY" desc="Cash flow forecasting & Commission pipelines." />
            <ArmoryCard title="Compliance Shield" status="READY" desc="Quiet Hours & DNC enforcement." />
            <ArmoryCard title="Viral Engine" status="READY" desc="Auto-generates Luxury Social Cards." />
            <ArmoryCard title="Dashboard Copilot" status="R&D" desc="Context-aware AI Agent assistant." />
            <ArmoryCard title="Full Email Sync" status="READY" desc="Bi-directional Gmail/Outlook integration." />
            <ArmoryCard title="Data Intel" status="READY" desc="Deduplication & Competitor Watch." />
          </div>
        </div>
      </section>

      {/* MANIFESTO / MARKETING */}
      <section id="manifesto" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-neon-green/5 skew-y-3 transform origin-top-left pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-black/80 border border-white/10 p-12 backdrop-blur-md rounded-xl">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">AESTHETIC DOCTRINE</h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">TACTICAL LUXURY.</h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Not Silicon Valley Minimalist. <span className="text-neon-green">High-End Military Industrial.</span> 
              Dark Glass. Neon Accents. Monospace. Special Ops meets Penthouse Suite.
            </p>
            <div className="flex flex-wrap gap-4">
               <Badge text="DARK MODE" color="bg-black border-gray-700" />
               <Badge text="NEON ACCENTS" color="bg-neon-green/20 border-neon-green text-neon-green" />
               <Badge text="GLASSMORPHISM" color="bg-white/5 border-white/10 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/10 bg-black text-center">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Radar className="text-gray-600" size={20} />
            <span className="font-bold tracking-widest text-gray-500">REVANX</span>
          </div>
          <p className="text-gray-600 text-sm mb-8">© 2026 Bun Bun Labs. All Rights Reserved.</p>
          <div className="flex justify-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Protocol</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Engagement</a>
            <a href="#" className="hover:text-white transition-colors">Contact HQ</a>
          </div>
        </div>
      </footer>

    </div>
  )
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-[#0A0A0A] border border-white/5 p-8 rounded-lg group hover:border-neon-green/30 transition-all duration-300 hover:-translate-y-1">
      <div className="mb-6 p-3 bg-black border border-white/10 w-fit rounded-lg group-hover:border-neon-green/50 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

function ArmoryCard({ title, status, desc }) {
  return (
    <div className="bg-white/5 border border-white/5 p-6 rounded hover:bg-white/10 transition-colors cursor-default">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-bold text-white">{title}</h4>
        <span className={`text-[10px] font-mono px-2 py-1 rounded ${status === 'READY' ? 'bg-neon-green/10 text-neon-green' : 'bg-purple-500/10 text-purple-400'}`}>
          {status}
        </span>
      </div>
      <p className="text-xs text-gray-400">{desc}</p>
    </div>
  )
}

function Badge({ text, color }) {
  return (
    <span className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-widest border ${color}`}>
      {text}
    </span>
  )
}

export default App
