"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const roles = [
  { title: "BIM Modeler", salary: "3-6 LPA", level: "Entry" },
  { title: "BIM Coordinator", salary: "5-10 LPA", level: "Mid" },
  { title: "BIM Manager", salary: "8-15 LPA", level: "Senior" },
  { title: "Structural BIM Engineer", salary: "5-10 LPA", level: "Mid" },
  { title: "MEP BIM Engineer", salary: "5-10 LPA", level: "Mid" },
  { title: "4D/5D BIM Planner", salary: "6-12 LPA", level: "Mid-Senior" },
  { title: "VDC Specialist", salary: "8-15 LPA", level: "Senior" },
  { title: "BIM Consultant", salary: "10-20 LPA", level: "Expert" },
];

export default function CareerSection() {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-gray-light relative overflow-hidden" ref={ref}>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <span className="text-gray-500 text-sm font-bold tracking-widest uppercase">
            Career Outcomes
          </span>
          <h2 className="font-[var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-black-deep mt-3">
            Aim for <span className="text-primary">&#8377;4-20 LPA</span> and Beyond
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            High-demand BIM roles across India and the Gulf — with salaries that grow with your expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {roles.map((role, i) => (
            <div
              key={role.title}
              className="fade-in-up card-hover bg-white border border-gray-200 rounded-2xl p-6"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-xs text-gray-500 font-medium mb-3 uppercase tracking-wider">
                {role.level}
              </div>
              <h3 className="font-[var(--font-outfit)] text-black-deep font-bold text-lg mb-3">
                {role.title}
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-[var(--font-outfit)] font-extrabold text-primary">
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
