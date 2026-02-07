import { useState, useEffect } from 'react'
import { ArrowRight, Shield, Zap, LayoutGrid, Car, Database, Smartphone, Check, Lock, Globe, ChevronDown, Menu, X } from 'lucide-react'
import './index.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    setMobileMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-dark-bg text-white min-h-screen font-sans selection:bg-neon-green selection:text-black overflow-x-hidden">
      
      {/* NAVIGATION */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter flex items-center gap-2">
            <span className="text-neon-green">///</span> REVANX
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <button onClick={() => scrollTo('features')} className="hover:text-white transition-colors">Features</button>
            <button onClick={() => scrollTo('enterprise')} className="hover:text-white transition-colors">Enterprise</button>
            <button onClick={() => scrollTo('security')} className="hover:text-white transition-colors">Security</button>
            <a href="/login" className="text-white hover:text-neon-green transition-colors">Login</a>
            <button className="bg-white text-black px-5 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-neon-green transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-6 text-center">
             <button onClick={() => scrollTo('features')} className="text-gray-400 hover:text-white">Features</button>
             <button onClick={() => scrollTo('enterprise')} className="text-gray-400 hover:text-white">Enterprise</button>
             <button onClick={() => scrollTo('security')} className="text-gray-400 hover:text-white">Security</button>
             <button className="bg-neon-green text-black py-3 rounded font-bold uppercase">Get Started</button>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-neon-green/10 rounded-[100%] blur-[120px] pointer-events-none opacity-50"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-widest text-gray-300 font-mono">AI-POWERED REAL ESTATE CRM</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Close More Deals.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Automate the Chaos.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Revanx is the intelligent operating system for modern brokerages. 
            Unified communication, behavior-based lead scoring, and automated workflows.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="w-full md:w-auto bg-neon-green text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(57,255,20,0.3)]">
              Start Free Trial
            </button>
            <button className="w-full md:w-auto px-8 py-4 rounded-full border border-white/10 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
              View Demo <ArrowRight size={16} />
            </button>
          </div>

          {/* DASHBOARD PREVIEW */}
          <div className="mt-20 relative mx-auto max-w-5xl">
            <div className="absolute inset-0 bg-neon-green/20 blur-3xl -z-10 rounded-full opacity-20"></div>
            <div className="bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              <div className="h-8 bg-[#111] border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
              </div>
              <div className="p-8 aspect-video flex items-center justify-center bg-[url('https://placehold.co/1200x800/111/333?text=Revanx+Dashboard+Preview')] bg-cover bg-center">
                 {/* Placeholder for actual dashboard screenshot */}
                 <div className="text-center">
                    <p className="text-gray-500 font-mono text-sm">INTERACTIVE DASHBOARD PREVIEW</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS / TRUST */}
      <section className="py-10 border-y border-white/5 bg-black/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-8">Trusted by Forward-Thinking Brokerages</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos would go here */}
            <span className="text-xl font-bold">ZILLOW</span>
            <span className="text-xl font-bold">RE/MAX</span>
            <span className="text-xl font-bold">KELLER WILLIAMS</span>
            <span className="text-xl font-bold">EXP REALTY</span>
            <span className="text-xl font-bold">CENTURY 21</span>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section id="features" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="mb-16 md:flex justify-between items-end border-b border-white/10 pb-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Intelligent Infrastructure</h2>
              <p className="text-gray-400 max-w-xl">
                Built for speed. Designed for closure. Revanx replaces your fragmented toolset with one cohesive power center.
              </p>
            </div>
            <div className="hidden md:block">
              <button className="text-neon-green font-mono text-xs uppercase flex items-center gap-2 hover:gap-4 transition-all">
                Explore All Features <ArrowRight size={14} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<LayoutGrid className="text-neon-green" />}
              title="Unified Command Center"
              desc="WhatsApp, Email, and SMS in one stream. Never toggle between apps again. See every conversation history in context."
            />
            <FeatureCard 
              icon={<Zap className="text-neon-green" />}
              title="AI Quick-Response"
              desc="Our AI drafts context-aware replies instantly. You review and swipe to send. Reduce response time by 90%."
            />
            <FeatureCard 
              icon={<Database className="text-neon-green" />}
              title="Smart Lead Scoring"
              desc="Stop guessing who to call. Revanx analyzes behavior and ranks leads by 'Hotness', so you focus on ready buyers."
            />
            <FeatureCard 
              icon={<Car className="text-neon-green" />}
              title="Drive Mode"
              desc="A voice-first interface designed for the road. 'Hey Revanx, log a showing for 123 Main St'. Hands-free productivity."
            />
            <FeatureCard 
              icon={<Globe className="text-neon-green" />}
              title="Full Email Sync"
              desc="Bi-directional sync with Gmail and Outlook. Turn your inbox into a deal pipeline automatically."
            />
             <FeatureCard 
              icon={<Smartphone className="text-neon-green" />}
              title="Mobile Native"
              desc="The full power of the desktop dashboard, optimized for your pocket. Manage your empire from anywhere."
            />
          </div>
        </div>
      </section>

      {/* ENTERPRISE / ARMORY */}
      <section id="enterprise" className="py-24 bg-[#080808] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <div className="inline-block bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest mb-6">
                Enterprise Grade
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">The Armory for Brokerages.</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Scale your agency with tools designed for high-volume teams. Revanx provides the oversight, compliance, and analytics needed to grow.
              </p>
              
              <div className="space-y-6">
                <ListItem title="Agency Analytics" desc="Cash flow forecasting and real-time commission pipelines." />
                <ListItem title="Compliance Shield" desc="Automated 'Quiet Hours' enforcement and DNC list filtering." />
                <ListItem title="Viral Engine" desc="Auto-generate luxury social media assets for every new listing." />
                <ListItem title="Data Deduplication" desc="AI-powered cleaning for messy imported CRM data." />
              </div>
            </div>
            <div className="flex-1 w-full relative">
               <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full opacity-20"></div>
               <div className="grid grid-cols-2 gap-4">
                 <div className="bg-black border border-white/10 p-6 rounded-xl aspect-square flex flex-col justify-center items-center text-center">
                    <h3 className="text-4xl font-bold text-white mb-2">24/7</h3>
                    <p className="text-xs text-gray-500 font-mono uppercase">Uptime Reliability</p>
                 </div>
                 <div className="bg-black border border-white/10 p-6 rounded-xl aspect-square flex flex-col justify-center items-center text-center translate-y-8">
                    <h3 className="text-4xl font-bold text-neon-green mb-2">100%</h3>
                    <p className="text-xs text-gray-500 font-mono uppercase">Data Ownership</p>
                 </div>
                 <div className="bg-black border border-white/10 p-6 rounded-xl aspect-square flex flex-col justify-center items-center text-center">
                    <h3 className="text-4xl font-bold text-blue-400 mb-2">GDPR</h3>
                    <p className="text-xs text-gray-500 font-mono uppercase">Compliance Ready</p>
                 </div>
                 <div className="bg-black border border-white/10 p-6 rounded-xl aspect-square flex flex-col justify-center items-center text-center translate-y-8">
                    <h3 className="text-4xl font-bold text-white mb-2">AES-256</h3>
                    <p className="text-xs text-gray-500 font-mono uppercase">Encryption Standard</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY / PRIVACY */}
      <section id="security" className="py-24">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <Shield size={48} className="mx-auto text-gray-600 mb-6" />
          <h2 className="text-3xl font-bold mb-6">Your Data is Sacred.</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            We understand that your client list is your livelihood. Revanx is built with a security-first architecture. 
            We do not sell your data. We do not train public models on your private conversations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/5 px-4 py-2 rounded-full text-xs font-mono text-gray-300 flex items-center gap-2">
              <Lock size={12} /> END-TO-END ENCRYPTION
            </span>
            <span className="bg-white/5 px-4 py-2 rounded-full text-xs font-mono text-gray-300 flex items-center gap-2">
              <Shield size={12} /> SOC-2 COMPLIANT INFRASTRUCTURE
            </span>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-neon-green/10"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Ready to Upgrade?</h2>
          <p className="text-xl text-gray-400 mb-10">Join the waitlist for Revanx Enterprise.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Enter your work email" className="bg-black/50 border border-white/20 rounded px-6 py-4 text-white focus:outline-none focus:border-neon-green w-full" />
            <button className="bg-neon-green text-black font-bold uppercase tracking-widest px-8 py-4 rounded hover:bg-white transition-colors whitespace-nowrap">
              Request Access
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-12 border-t border-white/10 text-sm">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-xl font-black mb-4 flex items-center gap-2">
              <span className="text-neon-green">///</span> REVANX
            </div>
            <p className="text-gray-600">
              © 2026 Bun Bun Labs.<br/>All rights reserved.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-neon-green transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-neon-green transition-colors">Enterprise</a></li>
              <li><a href="#" className="hover:text-neon-green transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-neon-green transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-neon-green transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-neon-green transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-500">
              <li><a href="/privacy" className="hover:text-neon-green transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-neon-green transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </footer>

    </div>
  )
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-[#0F0F0F] border border-white/5 p-8 rounded-2xl hover:border-neon-green/30 transition-all duration-300 hover:-translate-y-1 group">
      <div className="mb-6 w-12 h-12 bg-black rounded-lg flex items-center justify-center text-gray-400 group-hover:text-neon-green group-hover:scale-110 transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
    </div>
  )
}

function ListItem({ title, desc }) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 bg-neon-green/10 p-1 rounded">
        <Check size={14} className="text-neon-green" />
      </div>
      <div>
        <h4 className="font-bold text-white text-sm">{title}</h4>
        <p className="text-gray-500 text-sm">{desc}</p>
      </div>
    </div>
  )
}

export default App
