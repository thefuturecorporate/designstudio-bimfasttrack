"use client";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black-deep overflow-hidden">
      {/* Architectural Grid Background */}
      <div className="absolute inset-0 bg-blueprint" />

      {/* Geometric Accent Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-3xl" />
        {/* Diagonal accent lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="100%" x2="100%" y2="0" stroke="#CC0000" strokeWidth="1" />
          <line x1="20%" y1="100%" x2="100%" y2="20%" stroke="#CC0000" strokeWidth="0.5" />
          <line x1="0" y1="80%" x2="80%" y2="0" stroke="#CC0000" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Product Badge */}
        <div className="inline-flex items-center gap-2 bg-charcoal/60 border border-white/10 rounded-full px-5 py-2 mb-8">
          <span className="font-[var(--font-outfit)] text-sm font-bold text-white">
            BIM <span className="text-primary">Fast</span>Track
          </span>
          <span className="text-xs text-gray-400 italic">High-Salary Gateway</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-[var(--font-outfit)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
          India&apos;s Leading{" "}
          <span className="text-primary">Executive Diploma</span>
          <br />
          in <span className="text-white">BIM</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 font-light">
          From Zero Experience to High-Salary BIM Career in{" "}
          <span className="text-white font-semibold">6-8 Months</span>
        </p>

        <p className="text-sm text-gray-500 mb-10">
          Master 15+ Software Tools &bull; 7 Real Industry Projects &bull; 100% Placement Record
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold text-lg px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Start Your BIM Career
          </Link>
          <a
            href="https://wa.me/918237100666?text=Hi%2C%20I%27m%20interested%20in%20the%20Executive%20Diploma%20in%20BIM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white hover:border-white/40 hover:bg-white/5 font-semibold text-lg px-8 py-4 rounded-xl transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            WhatsApp Enquiry
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {[
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              ),
              text: "ISO 9001:2015 Certified",
              color: "text-gray-400",
            },
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              ),
              text: "100% Placement Record",
              color: "text-gray-400",
            },
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              ),
              text: "6 Centers in Pune",
              color: "text-gray-400",
            },
          ].map((badge) => (
            <div key={badge.text} className="flex items-center gap-2">
              <svg className={`w-5 h-5 ${badge.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {badge.icon}
              </svg>
              <span className="text-sm text-gray-400 font-medium">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
