"use client";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stages = [
  {
    number: "01",
    title: "BIM Standard Implementation",
    description: "Establishes BIM execution plan, project standards, naming conventions, LOD requirements, and coordination protocols for the entire project lifecycle.",
    tools: ["BIM Execution Plan", "LOD Standards", "Naming Conventions"],
  },
  {
    number: "02",
    title: "Digital Construction Concept",
    description: "Creates 2D/3D conceptual models for massing, layouts, and feasibility studies. Converts initial design vision into precise digital models.",
    tools: ["AutoCAD", "Revit Architecture"],
  },
  {
    number: "03",
    title: "Design Phases (Arch, Struct, MEP)",
    description: "Multi-disciplinary design covering Architecture, Structure, MEP, and Interior/Exterior. Full model creation with engineering calculations and code compliance.",
    tools: ["Revit (Arch/Struct/MEP)", "ETABS", "SAFE"],
  },
  {
    number: "04",
    title: "Clash Detection & Coordination",
    description: "Identifies and resolves conflicts between architectural, structural, and MEP models before construction begins — saving crores in rework costs.",
    tools: ["Navisworks", "Revit"],
  },
  {
    number: "05",
    title: "Detail Erection Drawings",
    description: "Produces shop drawings and erection drawings for fabrication and site execution. RCC detailing, steel connections, and MEP routing sheets.",
    tools: ["Revit", "CSi Detailing", "AutoCAD"],
  },
  {
    number: "06",
    title: "Quantity Take-off & Estimation",
    description: "Extracts discipline-specific quantities directly from BIM models. Prepares BOQ, Bar Bending Schedule, and consolidated cost estimation sheets.",
    tools: ["Revit", "Navisworks", "Excel"],
  },
  {
    number: "07",
    title: "Project Scheduling",
    description: "Links BIM models with construction schedules for 4D simulation. Creates Gantt charts, milestones, and resource allocation for on-time delivery.",
    tools: ["MS Project", "Navisworks"],
  },
];

export default function WorkflowSection() {
  const [active, setActive] = useState<number | null>(null);
  const ref = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-gray-light relative overflow-hidden" ref={ref}>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <span className="text-gray-500 text-sm font-bold tracking-widest uppercase">
            The Complete Workflow
          </span>
          <h2 className="font-[var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-black-deep mt-3">
            7-Stage BIM <span className="text-primary">Workflow</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Master the exact workflow used by global AEC firms — from concept to handover.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 timeline-line hidden sm:block" />

          <div className="space-y-4">
            {stages.map((stage, i) => (
              <div
                key={stage.number}
                className="fade-in-up"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <button
                  onClick={() => setActive(active === i ? null : i)}
                  className="w-full text-left"
                >
                  <div className={`relative flex items-start gap-4 md:gap-6 p-5 md:p-6 rounded-xl transition-all ${
                    active === i
                      ? "bg-white border border-primary/30"
                      : "bg-white border border-gray-200 hover:bg-gray-50"
                  }`}>
                    {/* Number Circle */}
                    <div className={`shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-[var(--font-outfit)] font-extrabold text-sm transition-all ${
                      active === i
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-500 border border-gray-200"
                    }`}>
                      {stage.number}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-[var(--font-outfit)] text-lg font-bold text-black-deep">
                          {stage.title}
                        </h3>
                        <svg
                          className={`w-5 h-5 text-gray-500 shrink-0 transition-transform ${
                            active === i ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>

                      {active === i && (
                        <div className="mt-3 space-y-3 animate-[fadeIn_0.3s_ease-out]">
                          <p className="text-sm text-gray-500 leading-relaxed">
                            {stage.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {stage.tools.map((tool) => (
                              <span
                                key={tool}
                                className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
