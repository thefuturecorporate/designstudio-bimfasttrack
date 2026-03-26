"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    name: "Bird Valley Township",
    desc: "300-acre masterplan including Bungalows, Deccan Central Mall, and Sinhgad Club with complete landscaping",
    type: "Township",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    name: "City Hospital",
    desc: "Full BIM model covering Architecture, Structure, and MEP with quantity take-off and cost estimation",
    type: "Healthcare",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    name: "Lal Mahal Hotel",
    desc: "Structural design and detailing with integrated Architecture and MEP services",
    type: "Hospitality",
    icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z",
  },
  {
    name: "Bharat IT Park",
    desc: "End-to-end BIM workflow from AutoCAD 2D layouts to Revit 3D models with multi-disciplinary coordination",
    type: "Commercial",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    name: "Modern Valley School",
    desc: "Comprehensive BIM modeling with structural analysis and clash-free integration",
    type: "Education",
    icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
  },
  {
    name: "Prestige Residency",
    desc: "Residential housing design with complete architectural and structural BIM coordination",
    type: "Residential",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    name: "Paanpoi Project",
    desc: "Foundation project for beginners — the starting point where students master BIM fundamentals",
    type: "Foundation",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

export default function ProjectsSection() {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <span className="text-gray-400 text-sm font-bold tracking-widest uppercase">
            Hands-On Experience
          </span>
          <h2 className="font-[var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-black-deep mt-3">
            <span className="text-charcoal">7</span> Industry Projects
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Real-world projects spanning residential, commercial, healthcare, education, and IT domains.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className={`fade-in-up card-hover border border-gray-200 rounded-2xl overflow-hidden group ${
                i === 0 ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Visual Header */}
              <div className="h-32 bg-gradient-to-br from-charcoal to-black-deep bg-blueprint flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                <svg className="w-12 h-12 text-white/20 group-hover:text-white/30 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={project.icon} />
                </svg>
              </div>
              <div className="p-6">
                <span className="text-xs text-primary font-bold uppercase tracking-wider">
                  {project.type}
                </span>
                <h3 className="font-[var(--font-outfit)] text-lg font-bold text-black-deep mt-1 mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
