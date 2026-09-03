"use client";
import { useState, useRef } from "react";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const projectsSliderRef = useRef(null);

  // 1. Projects Data (WordPress portfolio work)
  const projects = [
    {
      id: 1,
      title: "Trading Signals",
      domain: "https://frontend-dusky-five-79.vercel.app/",
      url: "https://frontend-dusky-five-79.vercel.app",
      desc: "Forex signals landing page optimized for conversions and clear offer presentation.",
      tech: "React, HTML, CSS,  Mern Stack",
      img: "/images/tarde.png"
    },
    
    {
      id: 2,
      title: "Saige PK",
      domain: "saigepk.com",
      url: "https://saigepk.com/",
      desc: "Corporate presence for a service brand, focused on clean sections and strong typography.",
      tech: "WordPress, Elementor",
      img: "/images/saige.png"
    },
    {
      id: 3,
      title: "Suffi Travel",
      domain: "suffitravel.co.uk",
      url: "https://suffitravel.co.uk/",
      desc: "Travel and tour booking website with clear packages, trust signals and mobile‑first layout.",
      tech: "WordPress, Elementor, Custom Theme",
      img: "/images/sufi.png"
    },
    {
      id: 4,
      title: "Upmark Tech",
      domain: "upmarktech.com",
      url: "https://upmarktech.com",
      desc: "Tech and digital services site with service cards, CTAs and modern gradients.",
      tech: "WordPress, Elementor",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
    },
    {
      id: 5,
      title: "MJFXM",
      domain: "mjfxm.co.uk",
      url: "https://mjfxm.co.uk",
      desc: "Financial brand presence with bold hero, pricing focus and trust badges.",
      tech: "WordPress, Custom Design",
      img: "https://images.unsplash.com/photo-1559525839-b184a4d69821?w=1200",
    },
    {
      id: 6,
      title: "HighClick",
      domain: "highclick.pk",
      url: "https://highclick.pk/",
      desc: "Agency style website with service highlights, portfolio and strong branding.",
      tech: "WordPress, Elementor",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
    },
    {
      id: 7,
      title: "SuperDrive",
      domain: "superdrive.ae",
      url: "https://superdrive.ae/",
      desc: "Automotive / rental style site with bold imagery and clear contact flows.",
      tech: "WordPress, WooCommerce (optional)",
      img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1200",
    },
    {
      id: 8,
      title: "CorePrime Markets",
      domain: "coreprimemarkets.com",
      url: "https://coreprimemarkets.com/",
      desc: "Trading and investment platform site with multi‑section layout and clear CTAs.",
      tech: "WordPress, Custom Theme",
      img: "https://images.unsplash.com/photo-1523287562758-66c7fc58967a?w=1200",
    },
    {
      id: 9,
      title: "BAMS Training",
      domain: "bamstraining.com",
      url: "https://bamstraining.com/",
      desc: "Training and education website with course information and lead capture.",
      tech: "WordPress, LMS Ready",
      img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1200",
    },
    {
      id: 10,
      title: "Curves Fitness Pro",
      domain: "curvesfitnesspro.com",
      url: "https://curvesfitnesspro.com",
      desc: "Fitness brand website featuring programs, transformations and contact forms.",
      tech: "WordPress, Elementor",
      img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200",
    },
    {
      id: 11,
      title: "Ibex Packaging",
      domain: "ibexpackaging.com",
      url: "https://ibexpackaging.com/",
      desc: "Product packaging site with category navigation and strong product visuals.",
      tech: "WordPress, WooCommerce",
      img: "https://images.unsplash.com/photo-1585386959984-a4155223f3f8?w=1200",
    },
    {
      id: 12,
      title: "House Movers UK",
      domain: "housemovers.co.uk",
      url: "https://housemovers.co.uk/",
      desc: "Local services site highlighting moving services, locations and quick quotes.",
      tech: "WordPress, Local SEO",
      img: "https://images.unsplash.com/photo-1585366119957-e9730b6d0f44?w=1200",
    },
    {
      id: 13,
      title: "IEHSAS",
      domain: "iehsas.com",
      url: "https://www.iehsas.com/",
      desc: "Educational / certification website presenting programs and accreditation.",
      tech: "WordPress, Elementor",
      img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200",
    },
    {
      id: 14,
      title: "US Newsy",
      domain: "usnewsy.com",
      url: "https://usnewsy.com",
      desc: "News and blog platform with category pages and article layouts.",
      tech: "WordPress, News Theme",
      img: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=1200",
    },
    {
      id: 15,
      title: "Tech Chrons",
      domain: "techchrons.com",
      url: "https://techchrons.com",
      desc: "Tech blog with modern card‑based layout and readable typography.",
      tech: "WordPress, Blog",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
    },
    {
      id: 16,
      title: "AP Newz",
      domain: "apnewz.net",
      url: "https://apnewz.net",
      desc: "Online news portal optimized for content updates and engagement.",
      tech: "WordPress, News Theme",
      img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200",
    },
    {
      id: 17,
      title: "Huf Postt",
      domain: "hufpostt.com",
      url: "https://hufpostt.com",
      desc: "Magazine style layout with multiple categories and featured posts.",
      tech: "WordPress, Magazine Theme",
      img: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0ea?w=1200",
    },
    {
      id: 18,
      title: "Baristeel Rack",
      domain: "baristeelrack.com",
      url: "https://baristeelrack.com/",
      desc: "Industrial and commercial product site with clear information hierarchy.",
      tech: "WordPress, Corporate",
      img: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=1200",
    },
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      projectType: e.target.projectType?.value || "",
      budget: e.target.budget?.value || "",
      timeline: e.target.timeline?.value || "",
      contactPreference: e.target.contactPreference?.value || "",
      message: e.target.message.value,
    };
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      setLoading(false);
      if (result.success) { setStatus("✅ Sent!"); e.target.reset(); }
      else { setStatus("❌ Error!"); }
    } catch (error) { setLoading(false); setStatus("❌ Error!"); }
  }

  return (
    <main className="text-white scroll-smooth">
      {/* 1. HERO SECTION */}
      <section
        id="home"
        className="min-h-screen flex items-center relative overflow-hidden px-6"
      >
        <div className="z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-10 lg:gap-14 items-center">
          {/* Left: Name & intro (more compact, center-aligned on mobile) */}
          <div className="space-y-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-gray-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Next Js • WordPress • Shopify</span>
            </div>

            <div>
              <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-gray-400 mb-2">
                Portfolio of
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-[3.25rem] lg:text-[3.6rem] font-bold tracking-tight leading-tight">
                <span className="block">Iram</span>
                <span className="block bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                  Khalid
                </span>
              </h1>
            </div>

            <p className="text-gray-400 max-w-xl mx-auto lg:mx-0 text-sm md:text-base leading-relaxed">
              I create{" "}
              <span className="text-white font-semibold">
                premium, conversion‑driven websites
              </span>{" "}
              for agencies and brands worldwide — with a focus on performance,
              clean design and smooth editing experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-8 py-4 bg-blue-500 text-white rounded-full font-semibold text-sm hover:bg-blue-400 transition-all duration-300 active:scale-95 shadow-[0_0_30px_rgba(37,99,235,0.6)]"
              >
                Explore WordPress projects
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-white/15 rounded-full font-semibold text-sm text-gray-100 hover:bg-white/5 transition-all duration-300"
              >
                Discuss your website idea
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-xs text-gray-400 justify-center lg:justify-start">
              <div>
                <p className="font-semibold text-white text-base">5+</p>
                <p className="uppercase tracking-[0.22em] text-[10px] mt-1">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="font-semibold text-white text-base">18</p>
                <p className="uppercase tracking-[0.22em] text-[10px] mt-1">
                  Live WordPress Sites
                </p>
              </div>
              <div>
                <p className="font-semibold text-white text-base">24/7</p>
                <p className="uppercase tracking-[0.22em] text-[10px] mt-1">
                  Client Support
                </p>
              </div>
            </div>
          </div>

          {/* Right: hero "dashboard" preview with three stacked tiles */}
          <div className="relative h-[340px] sm:h-[380px] lg:h-[420px]">
            {/* Glow background */}
            <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.4),transparent_55%),radial-gradient(circle_at_bottom,_rgba(79,70,229,0.35),transparent_60%)] blur-3xl opacity-80" />

            <div className="relative h-full">
              {/* Main tile */}
              <div className="absolute inset-y-6 right-0 left-10 rounded-3xl border border-white/12 bg-black/65 backdrop-blur-2xl p-6 flex flex-col justify-between shadow-[0_24px_60px_rgba(0,0,0,0.85)]">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-blue-300">
                      Services
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      From concept to launch
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-blue-500 via-sky-400 to-indigo-500 flex items-center justify-center shadow-[0_0_24px_rgba(59,130,246,0.7)]">
                    <span className="text-xs font-black tracking-[0.25em] text-white">
                      IK
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-[11px] text-gray-300 mb-4">
                  <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-3 flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-gray-500">
                      Strategy
                    </span>
                    <span className="text-xs font-medium text-white">
                      UX, sitemap & wireframes
                    </span>
                  </div>
                  <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-3 flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-gray-500">
                      Design
                    </span>
                    <span className="text-xs font-medium text-white">
                      Modern, brand‑aligned UI
                    </span>
                  </div>
                  <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-3 flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-gray-500">
                      Build
                    </span>
                    <span className="text-xs font-medium text-white">
                      WordPress / Next.js dev
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-gray-400">
                  <div className="flex items-center gap-2">
                    
                    
                  </div>
                  <span className="hidden sm:inline-flex text-blue-300">
                    Scroll to see portfolio ↓
                  </span>
                </div>
              </div>

              {/* Upper tile: quality focus (abstract dashboard) */}
              <div className="absolute -top-2 left-0 w-[58%] h-[42%] rounded-3xl border border-white/8 bg-white/[0.02] backdrop-blur-2xl -rotate-4 overflow-hidden hidden sm:block">
                <div className="h-full w-full px-4 py-3 flex flex-col justify-between text-[10px] text-gray-200">
                  <div>
                    <p className="uppercase tracking-[0.22em] text-[9px] text-gray-400 mb-1">
                      Quality focus
                    </p>
                    <p className="text-xs font-semibold text-white">
                      What every build is optimized for
                    </p>
                  </div>
                  <div className="space-y-2 mt-2">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] text-gray-300">
                          Performance
                        </span>
                        <span className="text-[9px] text-emerald-300">A+</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full w-[88%] bg-gradient-to-r from-emerald-400 to-emerald-300" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] text-gray-300">SEO</span>
                        <span className="text-[9px] text-sky-300">A</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full w-[82%] bg-gradient-to-r from-sky-400 to-sky-300" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] text-gray-300">UX / UI</span>
                        <span className="text-[9px] text-blue-300">A</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full w-[85%] bg-gradient-to-r from-blue-400 to-indigo-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lower tile: collaboration style (unique, non-project info) */}
              <div className="absolute bottom-0 right-2 w-[50%] h-[40%] rounded-3xl border border-white/8 bg-gradient-to-tr from-blue-500/30 via-sky-400/15 to-transparent rotate-3 overflow-hidden hidden sm:block">
                <div className="h-full w-full bg-black/40 px-4 py-3 flex flex-col justify-between text-[10px] text-gray-200">
                  <div>
                    <p className="uppercase tracking-[0.22em] text-[9px] text-blue-100 mb-1">
                      Collaboration style
                    </p>
                    <p className="text-xs font-semibold text-white">
                      How we’ll work together
                    </p>
                  </div>
                  <div className="space-y-1.5 text-[9px] text-gray-300">
                    <p>• Weekly video or voice updates</p>
                    <p>• Clear milestones & transparent pricing</p>
                    <p>• Loom walkthroughs for handover</p>
                    <p>• Clean admin so you can edit easily</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 flex flex-col items-center gap-2 text-[11px]">
          <span className="uppercase tracking-[0.3em] text-gray-500">
            Scroll
          </span>
          <div className="h-9 w-[1px] bg-gradient-to-b from-gray-500/70 to-transparent relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-3 bg-gray-200 animate-bounce" />
          </div>
        </div>
      </section>

      
      {/* 2. ABOUT SECTION (Updated with your Image) */}
<section id="about" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    
    {/* Left Side: Content */}
    <div className="space-y-6 order-2 md:order-1">
      <h3 className="text-4xl font-bold tracking-tighter text-blue-500">About Me</h3>
      <p className="text-gray-400 text-lg leading-relaxed">
        I am a passionate <span className="text-white font-semibold">Full Stack Developer</span> dedicated to building functional, beautiful, and user-centric web applications.
      </p>
      <p className="text-gray-500 leading-relaxed">
        Next.js aur modern web technologies mein maharat ke saath, mein business problems ko digital solutions mein convert karta hoon. Mera focus hamesha performance aur clean code par hota hai.
      </p>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4 pt-4">
        <div className="bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-blue-500/30 transition">
          <p className="text-3xl font-bold text-white">20+</p>
          <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Projects Done</p>
        </div>
        <div className="bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-blue-500/30 transition">
          <p className="text-3xl font-bold text-white">24/7</p>
          <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Support</p>
        </div>
      </div>
    </div>

    {/* Right Side: Your Image */}
    <div className="relative group order-1 md:order-2 flex justify-center">
      {/* Glow Effect behind image */}
      <div className="absolute inset-0 bg-blue-600/20 blur-[80px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-700"></div>
      
      <div className="relative w-full max-w-[450px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
        <img 
          src="https://smartwebin.com/images/about-pge.png" 
          alt="About Me Illustration" 
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>

  </div>
</section>

      {/* 3. SKILLS SECTION (Modern, categorized) */}
      <section
        id="skills"
        className="py-24 border-t border-white/5 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.2),transparent_55%),rgba(3,7,18,0.95)]"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs md:text-sm tracking-[0.3em] text-blue-500 uppercase mb-4">
              Skills
            </p>
            <h3 className="text-4xl font-bold mb-4 tracking-tighter">
              Skills & Tech Stack
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto">
              From idea to deployment, I use a modern, production-ready stack to
              build fast, scalable and conversion-focused web experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Core Frontend */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-7 hover:border-blue-500/40 hover:bg-white/[0.08] transition-all duration-300">
              <p className="text-[11px] uppercase tracking-[0.28em] text-blue-500 mb-3">
                Frontend
              </p>
              <h4 className="text-xl font-semibold mb-2">Core Frontend</h4>
              <p className="text-xs text-gray-500 mb-4">
                Pixel-perfect, responsive UI with clean, maintainable code.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-blue-500/40 text-xs text-blue-100">
                  Next.js
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200">
                  React
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200">
                  HTML5 / CSS3
                </span>
              </div>
            </div>

            {/* Backend & Database */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-7 hover:border-blue-500/40 hover:bg-white/[0.08] transition-all duration-300">
              <p className="text-[11px] uppercase tracking-[0.28em] text-blue-500 mb-3">
                Backend
              </p>
              <h4 className="text-xl font-semibold mb-2">APIs & Data Layer</h4>
              <p className="text-xs text-gray-500 mb-4">
                Secure, optimized APIs and data handling for real-world apps.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200">
                  Node.js
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200">
                  REST APIs
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200">
                  MongoDB
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200">
                  Authentication
                </span>
              </div>
            </div>

            {/* CMS & E‑Commerce */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-7 hover:border-blue-500/40 hover:bg-white/[0.08] transition-all duration-300">
              <p className="text-[11px] uppercase tracking-[0.28em] text-blue-500 mb-3">
                Platforms
              </p>
              <h4 className="text-xl font-semibold mb-2">CMS & E‑Commerce</h4>
              <p className="text-xs text-gray-500 mb-4">
                High-converting storefronts and marketing sites that are easy to
                manage.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200">
                  Shopify
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200">
                  WordPress
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200">
                  Custom Themes
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200">
                  Performance Optimization
                </span>
              </div>
            </div>

            {/* Tooling */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-7 hover:border-blue-500/40 hover:bg-white/[0.08] transition-all duration-300">
              <p className="text-[11px] uppercase tracking-[0.28em] text-blue-500 mb-3">
                Workflow
              </p>
              <h4 className="text-xl font-semibold mb-2">Dev Tools</h4>
              <p className="text-xs text-gray-500 mb-4">
                A modern toolchain for fast iterations and reliable deliveries.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200">
                  Git & GitHub
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200">
                  VS Code
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200">
                  Figma Handoff
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200">
                  Deployment
                </span>
              </div>
            </div>

            {/* Highlight: Next.js Focus */}
            <div className="bg-gradient-to-br from-blue-600/25 via-blue-600/5 to-transparent border border-blue-500/50 rounded-3xl p-6 md:p-7 hover:shadow-[0_0_40px_rgba(37,99,235,0.35)] transition-all duration-300">
              <p className="text-[11px] uppercase tracking-[0.28em] text-blue-300 mb-3">
                Focus
              </p>
              <h4 className="text-xl font-semibold mb-2">Next.js Specialist</h4>
              <p className="text-xs text-blue-100/80 mb-4">
                SEO-friendly, server-side rendered and app‑router based
                experiences with blazing-fast performance.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-600/30 border border-blue-400/70 text-xs text-blue-50">
                  App Router
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-600/20 border border-blue-300/60 text-xs text-blue-50">
                  API Routes
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-600/20 border border-blue-300/60 text-xs text-blue-50">
                  Image Optimization
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-600/20 border border-blue-300/60 text-xs text-blue-50">
                  SEO & Metadata
                </span>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-7 hover:border-blue-500/40 hover:bg-white/[0.08] transition-all duration-300">
              <p className="text-[11px] uppercase tracking-[0.28em] text-blue-500 mb-3">
                Mindset
              </p>
              <h4 className="text-xl font-semibold mb-2">How I Work</h4>
              <p className="text-xs text-gray-500 mb-4">
                Communication‑first, deadline‑focused and obsessed with clean
                user experience.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200">
                  Problem Solving
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200">
                  Client Collaboration
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200">
                  Documentation
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200">
                  Continuous Learning
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROJECTS SECTION (Horizontal slider) */}
      <section
        id="projects"
        className="py-24 border-t border-white/5 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.16),transparent_55%),rgba(3,7,18,0.98)]"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p className="text-xs md:text-sm tracking-[0.3em] text-blue-500 uppercase mb-3">
                 Portfolio
              </p>
              <h3 className="text-4xl font-bold tracking-tighter mb-3">
                Featured Client Websites
              </h3>
              <p className="text-sm text-gray-500 max-w-xl">
                A selection of live projects across travel, finance, news,
                fitness and corporate niches.
              </p>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-gray-500">
              <button
                type="button"
                onClick={() => {
                  if (!projectsSliderRef.current) return;
                  projectsSliderRef.current.scrollBy({ left: -400, behavior: "smooth" });
                }}
                className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center hover:border-blue-500/60 hover:text-blue-400 hover:bg-white/5 transition-colors"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => {
                  if (!projectsSliderRef.current) return;
                  projectsSliderRef.current.scrollBy({ left: 400, behavior: "smooth" });
                }}
                className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center hover:border-blue-500/60 hover:text-blue-400 hover:bg-white/5 transition-colors"
              >
                ›
              </button>
            </div>
          </div>

          <div className="relative">
            {/* gradient edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black via-black/70 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black via-black/70 to-transparent" />

            <div
              ref={projectsSliderRef}
              className="projects-scroll flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory"
            >
              {projects.map((p) => (
                <article
                  key={p.id}
                  className="snap-center min-w-[320px] md:min-w-[380px] lg:min-w-[420px] group relative overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.85),rgba(3,7,18,0.98))] hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <span className="inline-flex items-center rounded-full bg-black/70 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-gray-200 border border-white/15">
                        Live Project
                      </span>
                      <span className="text-[11px] text-blue-200 font-mono line-clamp-1">
                        {p.tech}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col gap-3">
                    <div>
                      <h4 className="text-lg font-semibold mb-1 flex items-center gap-2">
                        {p.title}
                        <span className="h-1 w-1 rounded-full bg-blue-500 group-hover:scale-125 group-hover:bg-blue-400 transition-transform" />
                      </h4>
                      <p className="text-[11px] text-gray-500 mb-1">{p.domain}</p>
                      <p className="text-sm text-gray-400 line-clamp-3">{p.desc}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 text-[11px] text-gray-300">
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                        UX/UI Design
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                        Responsive
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                        SEO Focused
                      </span>
                    </div>

                    <div className="mt-1 flex items-center justify-between text-[11px] pt-1 border-t border-white/5">
                      <div className="flex items-center gap-2 text-gray-500">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>WordPress, custom‑tailored</span>
                      </div>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300"
                      >
                        <span>Visit</span>
                        <svg
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 17L17 7M9 7H17V15"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section
        id="contact"
        className="py-24 px-6 bg-[radial-gradient(circle_at_bottom,_rgba(37,99,235,0.22),transparent_55%),rgba(3,7,18,0.98)] border-t border-white/5"
      >
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-blue-500 mb-3">
              Contact
            </p>
            <h3 className="text-4xl font-bold tracking-tighter">Let's Talk</h3>
            <p className="mt-3 text-sm text-gray-500">
              Share a brief about your project and I’ll get back within 24 hours.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/70 backdrop-blur-2xl p-6 md:p-7 shadow-[0_24px_70px_rgba(0,0,0,0.9)]">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                type="text"
                placeholder="Name"
                required
                className="w-full p-4 bg-white/[0.03] border border-white/10 rounded-2xl outline-none focus:border-blue-500/60 text-white text-sm"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="w-full p-4 bg-white/[0.03] border border-white/10 rounded-2xl outline-none focus:border-blue-500/60 text-white text-sm"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-gray-300">
                <div className="space-y-1">
                  <label className="block text-[11px] uppercase tracking-[0.22em] text-gray-500">
                    Project type
                  </label>
                  <select
                    name="projectType"
                    className="w-full p-3 rounded-2xl bg-white/[0.03] border border-white/10 outline-none focus:border-blue-500/60 text-white text-xs"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option className="text-black">New website</option>
                    <option className="text-black">Redesign / revamp</option>
                    <option className="text-black">Shopify / WooCommerce store</option>
                    <option className="text-black">Landing page</option>
                    <option className="text-black">Blog / news site</option>
                    <option className="text-black">Other</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="block text-[11px] uppercase tracking-[0.22em] text-gray-500">
                    Budget range (USD)
                  </label>
                  <select
                    name="budget"
                    className="w-full p-3 rounded-2xl bg-white/[0.03] border border-white/10 outline-none focus:border-blue-500/60 text-white text-xs"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select an estimate
                    </option>
                    <option className="text-black">$300 – $700</option>
                    <option className="text-black">$700 – $1,500</option>
                    <option className="text-black">$1,500 – $3,000</option>
                    <option className="text-black">$3,000+</option>
                    <option className="text-black">Not sure yet</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-gray-300">
                <div className="space-y-1">
                  <label className="block text-[11px] uppercase tracking-[0.22em] text-gray-500">
                    Timeline
                  </label>
                  <select
                    name="timeline"
                    className="w-full p-3 rounded-2xl bg-white/[0.03] border border-white/10 outline-none focus:border-blue-500/60 text-white text-xs"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      When do you want to start?
                    </option>
                    <option className="text-black">As soon as possible</option>
                    <option className="text-black">Within 2–4 weeks</option>
                    <option className="text-black">Within 1–2 months</option>
                    <option className="text-black">Just exploring options</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="block text-[11px] uppercase tracking-[0.22em] text-gray-500">
                    Preferred contact
                  </label>
                  <select
                    name="contactPreference"
                    className="w-full p-3 rounded-2xl bg-white/[0.03] border border-white/10 outline-none focus:border-blue-500/60 text-white text-xs"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Choose how I should reply
                    </option>
                    <option className="text-black">Email only</option>
                    <option className="text-black">WhatsApp</option>
                    <option className="text-black">Zoom / Google Meet</option>
                    <option className="text-black">Any is fine</option>
                  </select>
                </div>
              </div>
              <textarea
                name="message"
                rows="4"
                placeholder="Project details, budget, timeline…"
                required
                className="w-full p-4 bg-white/[0.03] border border-white/10 rounded-2xl outline-none focus:border-blue-500/60 text-white text-sm"
              ></textarea>
              <button
                disabled={loading}
                className="w-full bg-blue-600 py-4 rounded-2xl font-bold hover:bg-blue-500 transition-all active:scale-95 shadow-[0_0_30px_rgba(37,99,235,0.6)] text-sm"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
              {status && (
                <p className="text-center text-blue-400 mt-3 text-sm">{status}</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}