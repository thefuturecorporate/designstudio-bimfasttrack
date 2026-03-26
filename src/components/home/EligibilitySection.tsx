"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const qualifications = [
  {
    title: "Civil Engineering",
    degrees: "Diploma / B.E. / B.Tech / M.Tech",
    desc: "Perfect foundation for mastering BIM workflows in structural and construction engineering.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Architecture",
    degrees: "B.Arch / M.Arch graduates",
    desc: "Leverage your design skills with advanced BIM modeling, visualization, and coordination expertise.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    title: "Interior Design",
    degrees: "Interior Design graduates",
    desc: "Expand into BIM-driven interior modeling, visualization walkthroughs, and material scheduling.",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Working Professionals",
    degrees: "Construction / Design industry experience",
    desc: "Upskill with industry-standard BIM tools to transition into higher-paying BIM roles.",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
];

export default function EligibilitySection() {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <span className="text-gray-400 text-sm font-bold tracking-widest uppercase">
            Eligibility
          </span>
          <h2 className="font-[var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-black-deep mt-3">
            Who Should <span className="text-charcoal">Join</span>?
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            From 2nd year students to experienced professionals — if you&apos;re in construction or design, this is for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualifications.map((q, i) => (
            <div
              key={q.title}
              className="fade-in-up card-hover bg-white border border-gray-200 rounded-2xl p-8 text-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-16 h-16 bg-charcoal/5 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={q.icon} />
                </svg>
              </div>
              <h3 className="font-[var(--font-outfit)] text-lg font-bold text-black-deep mb-1">
                {q.title}
              </h3>
              <p className="text-xs text-gray-500 font-semibold mb-3">{q.degrees}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{q.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
