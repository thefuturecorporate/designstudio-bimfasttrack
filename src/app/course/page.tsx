"use client";
import { useState } from "react";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const modules = [
  {
    num: "01",
    title: "BIM Digital Construction Concept",
    type: "Theory (Recorded Lectures)",
    desc: "Build a solid foundation in construction theory and design principles before mastering software.",
    topics: [
      "Core BIM theory and its role in digital construction",
      "Fundamentals of space planning for efficiency",
      "Building bye-laws and compliance",
      "Green building design for sustainability",
      "Vaastu Shastra principles in modern construction",
    ],
  },
  {
    num: "02",
    title: "Architectural Concept Layout Design",
    type: "AutoCAD & Revit Architecture",
    desc: "Convert initial design vision into precise 2D layouts and conceptual 3D models.",
    topics: [
      "Township Architectural Masterplan (300-acre site)",
      "Residential Floor Plan in AutoCAD",
      "Commercial Space Layout in AutoCAD",
      "Conceptual 3D Model in Revit Architecture",
      "Large-scale site planning & zoning principles",
    ],
  },
  {
    num: "03",
    title: "Structural Design",
    type: "Revit Structure, ETABS & SAFE",
    desc: "Create the structural framework, perform stability analysis, and finalize column, beam, slab dimensions.",
    topics: [
      "Conceptual Structural Model in Revit Structure",
      "Structural Analysis & Design in ETABS",
      "Footing Analysis & Design in SAFE",
      "Detailed Structural Model in Revit Structure",
      "Understanding load distribution & stability",
    ],
  },
  {
    num: "04",
    title: "Clash Detection — Arch + Struct",
    type: "Revit Architecture",
    desc: "Identify conflicts between architectural and structural elements at the design stage.",
    topics: [
      "Clash detection between Arch & Struct models",
      "Identifying design conflicts early using Revit tools",
      "Reducing costly construction errors",
      "Coordinating design changes across teams",
    ],
  },
  {
    num: "05",
    title: "MEP Design",
    type: "Revit MEP",
    desc: "Model complete Mechanical, Electrical, and Plumbing systems for the building.",
    topics: [
      "Plumbing system design and modeling",
      "Electrical system layout and routing",
      "Fire protection system integration",
      "MEP coordination with architectural design",
    ],
  },
  {
    num: "06",
    title: "Clash Detection — All Disciplines",
    type: "Navisworks",
    desc: "Perform interdisciplinary clash detection across Architecture, Structure, and MEP models.",
    topics: [
      "Multi-discipline clash detection in Navisworks",
      "Identifying hard and soft clashes",
      "Coordinating teams to resolve conflicts",
      "Enhancing accuracy and reducing site errors",
    ],
  },
  {
    num: "07",
    title: "Detail Erection Drawing",
    type: "Multi-Software Integration",
    desc: "Produce shop drawings and erection drawings for fabrication and site execution.",
    topics: [
      "Architectural erection drawings in Revit Architecture",
      "Structural erection drawings in Revit Structure",
      "Plumbing & Electrical drawings in Revit MEP",
      "RCC detailing in CSi Detailing",
      "Final detailing integration in AutoCAD",
    ],
  },
  {
    num: "08",
    title: "Quantity Take-off & Estimation",
    type: "Integrated Workflow",
    desc: "Extract discipline-wise quantities from BIM models and prepare cost-ready estimation sheets.",
    topics: [
      "Architecture quantity estimation in Revit",
      "Structure quantity estimation in Revit",
      "MEP quantity estimation in Revit",
      "Bar Bending Schedule in CSi Detailing",
      "Final consolidated estimation in Excel",
    ],
  },
  {
    num: "09",
    title: "Project Scheduling",
    type: "MS Project",
    desc: "Create timelines, manage resources, and track construction progress with Gantt charts.",
    topics: [
      "Breaking down projects into tasks & milestones",
      "Assigning resources, timelines & dependencies",
      "Preparing Gantt charts and tracking progress",
      "Facility management schedule planning",
    ],
  },
  {
    num: "10",
    title: "Interior & Exterior Design + Visualization",
    type: "Lumion, Filmora, Canva",
    desc: "Complete visualization journey — enhance spaces, materials, and create stunning presentations.",
    topics: [
      "Landscape Design for exterior surroundings",
      "Material, lighting & texture with live Lumion-Revit sync",
      "Rendered image editing using Canva",
      "Walkthrough, sun study & animation in Lumion",
      "Project visualization videos with Filmora",
      "Portfolio creation using Canva",
    ],
  },
  {
    num: "11",
    title: "BIM Digital Construction Archived",
    type: "Project Handover",
    desc: "Systematic archiving of all project data, models, and documents for facility management.",
    topics: [
      "Archiving all BIM models across disciplines",
      "Storing project documentation in digital format",
      "Handover of as-built models for operations",
      "Integration with Facility Management Systems",
    ],
  },
  {
    num: "12",
    title: "Job Readiness Training",
    type: "Career Preparation",
    desc: "Interview training, portfolio preparation, resume building, and direct industry connections.",
    topics: [
      "Professional resume building for BIM careers",
      "Portfolio preparation with real projects",
      "Interview training and mock interviews",
      "Direct industry connections and placement",
    ],
  },
];

const deliverables = [
  { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "ISO 9001:2015 Certificate", desc: "Globally recognized certification upon completion" },
  { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", title: "Alumni Community", desc: "Lifetime access to our professional network" },
  { icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z", title: "Video Recordings", desc: "Access to all lecture recordings for revision" },
  { icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", title: "Workbook & Reference Guide", desc: "Comprehensive study materials for every module" },
];

export default function CoursePage() {
  const [expanded, setExpanded] = useState<number | null>(0);
  const ref = useScrollAnimation();

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="relative bg-gray-light pt-36 pb-20 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in-up">
            <span className="text-gray-500 text-sm font-bold tracking-widest uppercase">
              Flagship Program
            </span>
            <h1 className="font-[var(--font-outfit)] text-4xl md:text-5xl lg:text-6xl font-extrabold text-black-deep mt-3">
              Executive Diploma in <span className="text-primary">BIM</span>
            </h1>
            <p className="text-gray-500 text-lg mt-4 max-w-3xl">
              A comprehensive 6-8 month program that trains you in the complete BIM workflow using industry-standard tools. From concept design to project handover.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              {[
                { val: "6-8 Months", label: "Duration" },
                { val: "12 Modules", label: "Curriculum" },
                { val: "15+ Tools", label: "Software" },
                { val: "7 Projects", label: "Hands-on" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-[var(--font-outfit)] text-2xl font-extrabold text-black-deep">{s.val}</div>
                  <div className="text-xs text-gray-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12 Module Breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <span className="text-primary text-sm font-bold tracking-widest uppercase">
              Curriculum
            </span>
            <h2 className="font-[var(--font-outfit)] text-3xl md:text-4xl font-extrabold text-black-deep mt-3">
              12-Module <span className="text-primary">Course Breakdown</span>
            </h2>
          </div>

          <div className="space-y-3 fade-in-up">
            {modules.map((mod, i) => (
              <div
                key={mod.num}
                className={`border rounded-xl overflow-hidden transition-all ${
                  expanded === i ? "border-primary/30 bg-primary/5" : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="w-full flex items-center gap-4 p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className={`font-[var(--font-outfit)] text-lg font-extrabold shrink-0 ${
                    expanded === i ? "text-primary" : "text-gray-300"
                  }`}>
                    {mod.num}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-[var(--font-outfit)] font-bold text-black-deep">
                      {mod.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">{mod.type}</p>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${expanded === i ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expanded === i && (
                  <div className="px-5 pb-5 pl-14">
                    <p className="text-sm text-gray-600 mb-3">{mod.desc}</p>
                    <ul className="space-y-2">
                      {mod.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <span className="text-primary text-sm font-bold tracking-widest uppercase">
              What You Receive
            </span>
            <h2 className="font-[var(--font-outfit)] text-3xl md:text-4xl font-extrabold text-black-deep mt-3">
              Course <span className="text-primary">Deliverables</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverables.map((d, i) => (
              <div key={d.title} className="fade-in-up card-hover bg-white border border-gray-200 rounded-2xl p-8 text-center" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-14 h-14 bg-charcoal/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={d.icon} />
                  </svg>
                </div>
                <h3 className="font-[var(--font-outfit)] font-bold text-black-deep mb-1">{d.title}</h3>
                <p className="text-sm text-gray-600">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-[var(--font-outfit)] text-3xl font-extrabold text-black-deep mb-4">
            Ready to Start Your <span className="text-primary">BIM Journey</span>?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/30">
              Enquire Now
            </Link>
            <a href="https://wa.me/918237100666" target="_blank" rel="noopener noreferrer" className="border-2 border-gray-300 text-black-deep hover:bg-gray-50 font-semibold px-8 py-4 rounded-xl transition-all">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
