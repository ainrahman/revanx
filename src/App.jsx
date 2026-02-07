import { useState, useEffect } from 'react'
import { ArrowRight, Check, Zap, LayoutGrid, Database, Smartphone, Users, Globe, Play, Menu, X, ArrowUpRight } from 'lucide-react'
import './index.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollTo = (id) => {
    setMobileMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-bg-light text-text-main min-h-screen font-sans overflow-x-hidden selection:bg-brand-accent selection:text-white">
      
      {/* NAVIGATION */}
      <nav className="fixed w-full z-50 bg-bg-light/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold font-display tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white">
               <Zap size={16} fill="white" />
            </div>
            <span>Revanx</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
            <button onClick={() => scrollTo('features')} className="hover:text-black transition-colors">Features</button>
            <button onClick={() => scrollTo('benefits')} className="hover:text-black transition-colors">Benefits</button>
            <button onClick={() => scrollTo('pricing')} className="hover:text-black transition-colors">Pricing</button>
            <a href="/login" className="text-black hover:text-brand-accent transition-colors">Login</a>
            <button className="bg-black text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-gray-800 transition-all hover:shadow-lg">
              Get Started
            </button>
          </div>

          <button className="md:hidden text-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-6 text-center shadow-xl">
             <button onClick={() => scrollTo('features')} className="text-text-muted hover:text-black">Features</button>
             <button onClick={() => scrollTo('benefits')} className="text-text-muted hover:text-black">Benefits</button>
             <button onClick={() => scrollTo('pricing')} className="text-text-muted hover:text-black">Pricing</button>
             <button className="bg-black text-white py-3 rounded-lg font-bold">Get Started</button>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-bg-subtle relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-8 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
              <span className="text-xs font-medium text-text-muted uppercase tracking-wide">AI Automation for Real Estate</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-6 leading-[1.1] text-balance">
              Close More Deals with <br/>
              <span className="text-brand-accent relative inline-block">
                Intelligent Automation
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-accent/20" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
              </span>
            </h1>
            
            <p className="text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
              We harness your data, understand your leads, and use AI to help your brokerage rise above the noise. The best part? We execute, too.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-gray-800 hover:translate-y-[-2px] transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-2">
                Start Free Trial <ArrowRight size={18} />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white border border-gray-200 text-black font-bold text-base hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-sm">
                <Play size={18} fill="black" /> Watch Demo
              </button>
            </div>
          </div>

          {/* HERO VISUAL / DASHBOARD MOCKUP */}
          <div className="relative mx-auto max-w-6xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent to-purple-600 rounded-2xl blur opacity-20 animate-pulse"></div>
            <div className="relative bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9] flex items-center justify-center">
              <div className="text-center p-12">
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left w-full max-w-4xl">
                    <StatCard label="Response Time" value="< 2m" sub="Reduced by 95%" trend="up" />
                    <StatCard label="Active Leads" value="1,248" sub="+12% this week" trend="up" />
                    <StatCard label="Deals Closed" value="$4.2M" sub="YTD Volume" trend="up" />
                 </div>
                 <p className="mt-12 text-sm text-gray-400 font-mono">REVANX DASHBOARD PREVIEW</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-12 border-b border-gray-100 bg-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-medium text-text-muted mb-8">TRUSTED BY INNOVATIVE TEAMS AT</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-black font-display tracking-tight">ZILLOW</span>
            <span className="text-xl font-black font-display tracking-tight">RE/MAX</span>
            <span className="text-xl font-black font-display tracking-tight">KW</span>
            <span className="text-xl font-black font-display tracking-tight">COMPASS</span>
            <span className="text-xl font-black font-display tracking-tight">EXP</span>
          </div>
        </div>
      </section>

      {/* BENEFITS / BEFORE & AFTER */}
      <section id="benefits" className="py-24 bg-bg-light">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
            <div className="flex-1">
              <h2 className="text-4xl font-bold font-display mb-6 leading-tight">
                Why Choose Revanx?<br/>
                <span className="text-text-muted">Real Results, Real Fast.</span>
              </h2>
              <p className="text-text-muted text-lg mb-8 leading-relaxed">
                Most CRMs are just databases. Revanx is an active agent. It nurtures leads, schedules showings, and updates your pipeline while you sleep.
              </p>
              
              <div className="space-y-6">
                <BenefitRow title="20% More Conversations" desc="AI engages leads instantly, turning silent prospects into active chats." />
                <BenefitRow title="60% Lower Cost" desc="Replace 3 different tools (CRM, Email Marketing, Scheduler) with one." />
                <BenefitRow title="Real-Time Sync" desc="Connect with your team instantly to track progress and updates." />
              </div>
            </div>
            
            {/* COMPARISON CARD */}
            <div className="flex-1 w-full bg-bg-subtle p-8 rounded-3xl border border-gray-200 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl -z-10"></div>
               <div className="grid grid-cols-2 gap-8 text-center relative z-10">
                 <div className="space-y-2">
                   <p className="text-sm text-text-muted uppercase font-bold">Before Revanx</p>
                   <div className="text-3xl font-bold text-gray-400">2h / day</div>
                   <p className="text-xs text-gray-500">Manual Follow-up Time</p>
                 </div>
                 <div className="space-y-2">
                   <p className="text-sm text-brand-accent uppercase font-bold">With Revanx</p>
                   <div className="text-5xl font-bold text-black">0m</div>
                   <p className="text-xs text-gray-500">Fully Automated</p>
                 </div>
               </div>
               <div className="mt-8 pt-8 border-t border-gray-200">
                 <div className="flex justify-between items-center text-sm font-medium">
                   <span>Lead Conversion Rate</span>
                   <span className="text-green-600 flex items-center gap-1">+145% <ArrowUpRight size={14}/></span>
                 </div>
                 <div className="w-full bg-gray-200 h-2 rounded-full mt-2 overflow-hidden">
                   <div className="h-full bg-black w-[85%] rounded-full"></div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID (BENTO STYLE) */}
      <section id="features" className="py-24 bg-bg-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold font-display mb-4">All Features in One Tool</h2>
            <p className="text-text-muted text-lg">Discover features that simplify workflows & grow your business.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            
            {/* FEATURE 1: LARGE */}
            <div className="md:col-span-2 bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group overflow-hidden relative">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-brand-accent mb-6">
                  <Zap size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Automated Workflows</h3>
                <p className="text-text-muted max-w-md">Streamline tasks and boost efficiency with powerful, scalable AI-powered automation tools for growing teams.</p>
              </div>
              <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              {/* Abstract Visual */}
              <div className="absolute right-8 bottom-8 flex gap-2">
                 <div className="w-16 h-24 bg-gray-100 rounded-lg animate-pulse"></div>
                 <div className="w-16 h-32 bg-brand-accent/20 rounded-lg animate-pulse delay-75"></div>
                 <div className="w-16 h-16 bg-gray-100 rounded-lg animate-pulse delay-150"></div>
              </div>
            </div>

            {/* FEATURE 2 */}
            <div className="bg-black text-white p-8 rounded-3xl border border-gray-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-6">
                  <Database size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Real-Time Data</h3>
                <p className="text-gray-400 text-sm">Gain deep insights with advanced analytics to guide smarter decisions.</p>
              </div>
              <div className="mt-4 flex gap-2">
                <div className="h-1 flex-1 bg-white/20 rounded-full"></div>
                <div className="h-1 flex-1 bg-white/20 rounded-full"></div>
                <div className="h-1 flex-1 bg-white rounded-full"></div>
              </div>
            </div>

            {/* FEATURE 3 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
               <div>
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-6">
                  <LayoutGrid size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Unified Inbox</h3>
                <p className="text-text-muted text-sm">WhatsApp, Email, SMS—all in one place.</p>
               </div>
               <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-100 text-xs text-gray-500">
                 <div className="flex justify-between mb-1"><span>New Lead</span><span>Just now</span></div>
                 <div className="font-bold text-black">"Hi, is 123 Main St still avail?"</div>
               </div>
            </div>

            {/* FEATURE 4: LARGE */}
            <div className="md:col-span-2 bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden">
               <div className="relative z-10">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                  <Smartphone size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-2">AI-Powered Support</h3>
                <p className="text-text-muted max-w-md">Enhance customer experience with AI-driven virtual assistants available 24/7 for support and engagement.</p>
               </div>
               <div className="absolute right-0 bottom-0 w-64 h-64 bg-purple-50 rounded-tl-full opacity-50"></div>
            </div>

          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display mb-4">Simple Pricing For All</h2>
            <p className="text-text-muted text-lg">Flexible plans that scale with your team.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* STARTER */}
            <PricingCard 
              name="Starter" 
              price="$800" 
              desc="Ideal for solo agents ready to explore AI automation."
              features={["Basic AI Tools", "Limited Automation", "Real-Time Reporting", "Email Support"]} 
            />
            
            {/* PRO */}
            <PricingCard 
              name="Pro" 
              price="$1,700" 
              desc="Built for top producers who want an edge."
              features={["Advanced AI Tools", "Custom Workflows", "AI-Powered Analytics", "Priority Support", "WhatsApp Integration"]} 
              highlight={true}
            />
            
            {/* ENTERPRISE */}
            <PricingCard 
              name="Enterprise" 
              price="$4,700" 
              desc="For brokerages aiming to lead their industry."
              features={["Fully Custom AI", "Unlimited Integrations", "Dedicated Account Manager", "SLA Guarantee", "Team Training"]} 
            />

          </div>
        </div>
      </section>

      {/* CTA / FOOTER */}
      <footer className="bg-black text-white pt-24 pb-12">
        <div className="container mx-auto px-6">
          
          <div className="flex flex-col md:flex-row justify-between items-start mb-24 border-b border-white/10 pb-16">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Ready to transform your business?</h2>
              <p className="text-gray-400 text-lg mb-8">Join the hundreds of brokerages using Revanx to automate their growth.</p>
              <button className="bg-white text-black px-8 py-4 rounded-xl font-bold text-base hover:bg-gray-200 transition-colors">
                Book a Discovery Call
              </button>
            </div>
            <div className="mt-8 md:mt-0">
               <div className="flex items-center gap-2 mb-4">
                 <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black font-bold">R</div>
                 <span className="text-xl font-bold">Revanx</span>
               </div>
               <p className="text-gray-500 max-w-xs">AI solutions built for the innovators of tomorrow. Based in Casablanca, operating globally.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-400">
            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Social</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-gray-600">
            © 2026 Revanx Inc. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  )
}

function StatCard({ label, value, sub, trend }) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
      <p className="text-xs text-text-muted uppercase font-bold mb-2">{label}</p>
      <div className="text-3xl font-bold text-black mb-1">{value}</div>
      <div className={`text-xs font-medium flex items-center gap-1 ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
        {trend === 'up' ? <ArrowUpRight size={12} /> : null} {sub}
      </div>
    </div>
  )
}

function BenefitRow({ title, desc }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 w-6 h-6 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0">
        <Check size={14} />
      </div>
      <div>
        <h4 className="text-lg font-bold text-black">{title}</h4>
        <p className="text-text-muted leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

function PricingCard({ name, price, desc, features, highlight }) {
  return (
    <div className={`p-8 rounded-3xl border flex flex-col ${highlight ? 'bg-black text-white border-black shadow-xl scale-105' : 'bg-white text-black border-gray-200'}`}>
      <div className="mb-8">
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-4xl font-bold">{price}</span>
          <span className={`text-sm ${highlight ? 'text-gray-400' : 'text-text-muted'}`}>/month</span>
        </div>
        <p className={`text-sm ${highlight ? 'text-gray-400' : 'text-text-muted'}`}>{desc}</p>
      </div>
      
      <div className="flex-1 space-y-4 mb-8">
        {features.map((feat, i) => (
          <div key={i} className="flex items-center gap-3 text-sm">
            <Check size={16} className={highlight ? 'text-white' : 'text-black'} />
            <span>{feat}</span>
          </div>
        ))}
      </div>
      
      <button className={`w-full py-4 rounded-xl font-bold text-sm transition-colors ${highlight ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
        Choose {name}
      </button>
    </div>
  )
}

export default App
