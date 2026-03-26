"use client";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stages = [
  {
    stage: "Stage 1: BIM Standard Implementation",
    roles: [
      { title: "BIM Coordinator (Pre-construction)", tasks: "Establishes BIM execution plan, project standards, coordinates early design collaboration", salary: "5-10 LPA", works: "Architects, Structural Engineers, MEP Teams" },
    ],
  },
  {
    stage: "Stage 2: Digital Construction Concept",
    roles: [
      { title: "Conceptual BIM Designer", tasks: "Creates 2D/3D conceptual models for massing, layouts, feasibility", salary: "3-6 LPA", works: "Architects, Interior Designers, Planners" },
      { title: "BIM Modeler (Entry-Level)", tasks: "Converts 2D drawings to 3D BIM models, early coordination", salary: "3-6 LPA", works: "BIM Coordinators, Engineers, Architects" },
    ],
  },
  {
    stage: "Stage 3: Design Phases",
    roles: [
      { title: "Architectural BIM Modeller", tasks: "Develops detailed building elements — walls, doors, windows, facades in Revit", salary: "4-8 LPA", works: "Structural & Interior Designers, BIM Coordinators" },
      { title: "BIM Engineer (Architectural)", tasks: "Discipline-specific design, applying codes and standards to BIM models", salary: "5-10 LPA", works: "BIM Modelers, BIM Coordinator, Clients" },
      { title: "Interior BIM Modeller", tasks: "Creates 3D layouts of interiors, furniture, fixtures & materials", salary: "3-6 LPA", works: "Architects, MEP Designers, 3D Visualizers" },
      { title: "Interior BIM Visualizer", tasks: "Produces photorealistic renderings & walkthroughs", salary: "4-8 LPA", works: "Architects, Marketing Teams" },
      { title: "Structural BIM Modeller", tasks: "Creates structural models (columns, beams, slabs, foundations) in Revit Structure", salary: "4-8 LPA", works: "Architects, Structural Engineers" },
      { title: "Structural Design Engineer", tasks: "Applies engineering calculations, load analysis, code compliance", salary: "5-10 LPA", works: "BIM Modellers, Site Engineers, Project Managers" },
      { title: "MEP BIM Modeller", tasks: "Models ducts, pipes, electrical systems, fire protection", salary: "4-8 LPA", works: "Architects, Structural Engineers" },
      { title: "MEP Design Engineer", tasks: "Performs sizing, load calculations, system design", salary: "5-10 LPA", works: "BIM Modellers, Contractors, Consultants" },
    ],
  },
  {
    stage: "Stage 4: Clash Detection & Coordination",
    roles: [
      { title: "BIM Analyst / BIM Coordinator", tasks: "Runs clash detection in Navisworks, coordinates issue resolution", salary: "5-10 LPA", works: "Architects, Structural & MEP Teams, Contractors" },
      { title: "VDC Specialist", tasks: "Integrates BIM with construction sequencing, logistics, safety planning", salary: "8-15 LPA", works: "BIM Analysts, Project Managers, Site Teams" },
    ],
  },
  {
    stage: "Stage 5: Detail Erection Drawing",
    roles: [
      { title: "Detailing Engineer / BIM Technician", tasks: "Produces shop drawings and erection drawings for fabrication & site execution", salary: "4-8 LPA", works: "Structural Engineers, Contractors, Fabricators" },
    ],
  },
  {
    stage: "Stage 6: Quantity Take-off & Estimation",
    roles: [
      { title: "Quantity Surveyor (BIM)", tasks: "Extracts quantities from BIM models, prepares BOQ", salary: "5-10 LPA", works: "Estimation Engineers, Architects, Project Managers" },
      { title: "Estimation Engineer", tasks: "Costing, budgeting, material estimation for procurement", salary: "5-10 LPA", works: "QS, Finance, Procurement Teams" },
    ],
  },
  {
    stage: "Stage 7: Project Scheduling",
    roles: [
      { title: "4D BIM Planner", tasks: "Links BIM models with schedules, creates 4D simulations", salary: "6-12 LPA", works: "Project Managers, Site Engineers, Contractors" },
      { title: "Project Scheduler / Planning Engineer", tasks: "Develops detailed construction timelines integrated with BIM", salary: "6-12 LPA", works: "BIM Planners, Quantity Surveyors, Execution Teams" },
    ],
  },
];

const crossRoles = [
  { title: "BIM Manager", salary: "8-15 LPA", desc: "Oversees project BIM delivery, quality standards, manages multi-disciplinary BIM teams" },
  { title: "BIM Director", salary: "15-25 LPA", desc: "Defines company-wide BIM strategy, ensures compliance with international standards" },
  { title: "BIM Consultant", salary: "10-20 LPA", desc: "Advises on BIM adoption, audits, standardization, and compliance" },
  { title: "BIM Trainer", salary: "5-10 LPA", desc: "Provides in-house employee training, upskilling professionals in BIM tools" },
  { title: "Digital Transformation Leader", salary: "15-30 LPA", desc: "Integrates BIM with Digital Twins, AI, Cloud, and IoT workflows for smart construction" },
];

export default function CareerRolesPage() {
  const ref = useScrollAnimation();

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="relative bg-gray-light pt-36 pb-20 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in-up">
            <span className="text-gray-500 text-sm font-bold tracking-widest uppercase">Career Pathways</span>
            <h1 className="font-[var(--font-outfit)] text-4xl md:text-5xl lg:text-6xl font-extrabold text-black-deep mt-3">
              <span className="text-primary">20+</span> High-Salary BIM Career Roles
            </h1>
            <p className="text-gray-500 text-lg mt-4 max-w-3xl">
              Every role mapped to the 7-stage BIM workflow. Know exactly where you fit and what you can earn.
            </p>
          </div>
        </div>
      </section>

      {/* Roles by Stage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {stages.map((s, si) => (
              <div key={s.stage} className="fade-in-up" style={{ transitionDelay: `${si * 60}ms` }}>
                <h3 className="font-[var(--font-outfit)] text-xl font-bold text-black-deep mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    {si + 1}
                  </span>
                  {s.stage}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {s.roles.map((role) => (
                    <div key={role.title} className="card-hover bg-gray-light border border-gray-200 rounded-xl p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-[var(--font-outfit)] font-bold text-black-deep">{role.title}</h4>
                        <span className="text-sm font-bold text-primary whitespace-nowrap ml-3">&#8377;{role.salary}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{role.tasks}</p>
                      <p className="text-xs text-gray-400">Works with: {role.works}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Functional Roles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <span className="text-gray-500 text-sm font-bold tracking-widest uppercase">Career Ladder</span>
            <h2 className="font-[var(--font-outfit)] text-3xl md:text-4xl font-extrabold text-black-deep mt-3">
              Cross-Functional & <span className="text-primary">Leadership Roles</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crossRoles.map((role, i) => (
              <div key={role.title} className="fade-in-up card-hover bg-gray-light border border-gray-200 rounded-2xl p-6" style={{ transitionDelay: `${i * 80}ms` }}>
                <h3 className="font-[var(--font-outfit)] text-lg font-bold text-black-deep mb-1">{role.title}</h3>
                <span className="text-primary font-bold">&#8377;{role.salary}</span>
                <p className="text-sm text-gray-500 mt-3">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-[var(--font-outfit)] text-3xl font-extrabold text-black-deep mb-4">
            Get Trained for These Roles — <span className="text-primary">Start Today</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl transition-all">
              Enquire Now
            </Link>
            <Link href="/course" className="border-2 border-gray-300 text-black-deep hover:bg-gray-200 font-semibold px-8 py-4 rounded-xl transition-all">
              View Full Course
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
