"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const suites = [
  {
    name: "Autodesk Product Suite",
    tools: [
      { name: "AutoCAD", desc: "2D Drafting & Technical Drawings" },
      { name: "Revit Architecture", desc: "Building Design & Documentation" },
      { name: "Revit Structure", desc: "Structural Modeling & Analysis" },
      { name: "Revit MEP", desc: "Mechanical, Electrical & Plumbing" },
      { name: "Navisworks", desc: "Clash Detection & Coordination" },
    ],
  },
  {
    name: "CSI Software Suite",
    tools: [
      { name: "ETABS", desc: "Structural Analysis & Design" },
      { name: "SAFE", desc: "Foundation Design & Analysis" },
      { name: "CSi Detailing", desc: "RCC & Steel Detailing" },
    ],
  },
  {
    name: "Microsoft Product Suite",
    tools: [
      { name: "MS Project", desc: "Project Scheduling & Planning" },
      { name: "Excel", desc: "Quantity Estimation & BOQ" },
      { name: "Word", desc: "Documentation & Reports" },
      { name: "PowerPoint", desc: "Presentations & Proposals" },
    ],
  },
  {
    name: "Visualization & Media",
    tools: [
      { name: "Lumion", desc: "3D Rendering & Walkthroughs" },
      { name: "Filmora", desc: "Video Editing & Presentations" },
      { name: "Canva", desc: "Portfolio & Graphics Design" },
    ],
  },
];

export default function SoftwareSection() {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <span className="text-gray-400 text-sm font-bold tracking-widest uppercase">
            Tools You&apos;ll Master
          </span>
          <h2 className="font-[var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-black-deep mt-3">
            <span className="text-charcoal">15+</span> Industry Software
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Four powerful software suites covering the complete BIM ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {suites.map((suite, i) => (
            <div
              key={suite.name}
              className="fade-in-up card-hover bg-white border border-gray-200 rounded-2xl p-8"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-6 h-6 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h3 className="font-[var(--font-outfit)] text-lg font-bold text-black-deep">
                  {suite.name}
                </h3>
              </div>
              <div className="space-y-3">
                {suite.tools.map((tool) => (
                  <div key={tool.name} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-charcoal shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="text-sm font-semibold text-black-deep">{tool.name}</span>
                      <span className="text-sm text-gray-500"> — {tool.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
