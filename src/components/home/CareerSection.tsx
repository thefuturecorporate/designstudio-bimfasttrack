"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const roles = [
  { title: "BIM Modeler", salary: "3-6 LPA", level: "Entry", color: "from-blue-500/20 to-blue-500/5" },
  { title: "BIM Coordinator", salary: "5-10 LPA", level: "Mid", color: "from-emerald-500/20 to-emerald-500/5" },
  { title: "BIM Manager", salary: "8-15 LPA", level: "Senior", color: "from-purple-500/20 to-purple-500/5" },
  { title: "Structural BIM Engineer", salary: "5-10 LPA", level: "Mid", color: "from-orange-500/20 to-orange-500/5" },
  { title: "MEP BIM Engineer", salary: "5-10 LPA", level: "Mid", color: "from-cyan-500/20 to-cyan-500/5" },
  { title: "4D/5D BIM Planner", salary: "6-12 LPA", level: "Mid-Senior", color: "from-pink-500/20 to-pink-500/5" },
  { title: "VDC Specialist", salary: "8-15 LPA", level: "Senior", color: "from-amber-500/20 to-amber-500/5" },
  { title: "BIM Consultant", salary: "10-20 LPA", level: "Expert", color: "from-red-500/20 to-red-500/5" },
];

export default function CareerSection() {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-black-deep bg-blueprint relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <span className="text-gold text-sm font-bold tracking-widest uppercase">
            Career Outcomes
          </span>
          <h2 className="font-[var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-3">
            Aim for <span className="text-gold">&#8377;4-20 LPA</span> and Beyond
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            High-demand BIM roles across India and the Gulf — with salaries that grow with your expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {roles.map((role, i) => (
            <div
              key={role.title}
              className={`fade-in-up card-hover bg-gradient-to-b ${role.color} border border-white/5 rounded-2xl p-6`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-xs text-gray-500 font-medium mb-3 uppercase tracking-wider">
                {role.level}
              </div>
              <h3 className="font-[var(--font-outfit)] text-white font-bold text-lg mb-3">
                {role.title}
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-[var(--font-outfit)] font-extrabold text-gold">
                  &#8377;{role.salary}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in-up">
          <p className="text-gray-500 text-sm">
            Salary ranges based on industry data for India & Gulf region. Actual salary depends on experience, location, and company.
          </p>
        </div>
      </div>
    </section>
  );
}
