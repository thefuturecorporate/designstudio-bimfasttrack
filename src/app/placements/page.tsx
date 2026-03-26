"use client";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCounter } from "@/hooks/useCounter";

function PlacementStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCounter(value);
  return (
    <div ref={ref} className="text-center">
      <div className="font-[var(--font-outfit)] text-4xl md:text-5xl font-extrabold text-white">
        {count}{suffix}
      </div>
      <div className="text-sm text-gray-400 mt-2">{label}</div>
    </div>
  );
}

const placementProcess = [
  { num: "01", title: "Skill Building", desc: "Master 15+ software tools through hands-on projects" },
  { num: "02", title: "Portfolio Prep", desc: "Build a professional portfolio with real BIM projects" },
  { num: "03", title: "Interview Training", desc: "Mock interviews, resume review, and soft skills coaching" },
  { num: "04", title: "Industry Connect", desc: "Direct connections with top AEC firms and BIM companies" },
  { num: "05", title: "Placement", desc: "Get placed in high-salary BIM roles across India & Gulf" },
];

const companies = [
  "Pinnacle Infotech", "Tata Consulting Engineers", "L&T Technology Services",
  "Excelize", "Rebcon Group", "Virtual Building Studio", "Mars BIM",
  "Neilsoft", "AECOM", "Atkins", "WSP", "Shapoorji Pallonji",
];

export default function PlacementsPage() {
  const ref = useScrollAnimation();

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="relative bg-black-deep bg-blueprint pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-green-500/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in-up">
            <span className="text-green-400 text-sm font-bold tracking-widest uppercase">Proven Track Record</span>
            <h1 className="font-[var(--font-outfit)] text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-3">
              <span className="text-green-400">100%</span> Placement Record
            </h1>
            <p className="text-gray-400 text-lg mt-4 max-w-3xl">
              Our graduates work at leading construction firms, multinational consultancies, and BIM-focused organizations in India and the Gulf.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <PlacementStat value={100} suffix="%" label="Placement Rate" />
            <PlacementStat value={500} suffix="+" label="Students Placed" />
            <PlacementStat value={50} suffix="+" label="Hiring Partners" />
            <PlacementStat value={12} suffix=" LPA" label="Highest Package" />
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <span className="text-primary text-sm font-bold tracking-widest uppercase">Our Process</span>
            <h2 className="font-[var(--font-outfit)] text-3xl md:text-4xl font-extrabold text-black-deep mt-3">
              From Training to <span className="text-primary">Placement</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {placementProcess.map((step, i) => (
              <div key={step.num} className="fade-in-up text-center" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-[var(--font-outfit)] text-lg font-extrabold text-primary">{step.num}</span>
                </div>
                <h3 className="font-[var(--font-outfit)] font-bold text-black-deep text-sm">{step.title}</h3>
                <p className="text-xs text-gray-600 mt-1">{step.desc}</p>
                {i < placementProcess.length - 1 && (
                  <div className="hidden md:block absolute top-7 right-0 translate-x-1/2">
                    <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <span className="text-primary text-sm font-bold tracking-widest uppercase">Hiring Partners</span>
            <h2 className="font-[var(--font-outfit)] text-3xl md:text-4xl font-extrabold text-black-deep mt-3">
              Our Students Work At
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {companies.map((company, i) => (
              <div key={company} className="fade-in-up card-hover bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-center h-20" style={{ transitionDelay: `${i * 50}ms` }}>
                <span className="font-[var(--font-outfit)] text-sm font-bold text-charcoal text-center">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black-deep">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-[var(--font-outfit)] text-3xl font-extrabold text-white mb-4">
            Be Our Next <span className="text-green-400">Success Story</span>
          </h2>
          <p className="text-gray-400 mb-8">Join hundreds of BIM professionals who launched their careers with us.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl transition-all">
              Start Your Journey
            </Link>
            <a href="https://wa.me/918237100666" target="_blank" rel="noopener noreferrer" className="border-2 border-white/20 text-white hover:bg-white/5 font-semibold px-8 py-4 rounded-xl transition-all">
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
