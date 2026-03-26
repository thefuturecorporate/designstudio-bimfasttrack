"use client";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    name: "Bird Valley Township",
    desc: "300-acre masterplan including Bungalows, Deccan Central Mall, and Sinhgad Club with complete landscaping",
    type: "Township",
    image: "/images/project-township.jpg",
  },
  {
    name: "City Hospital",
    desc: "Full BIM model covering Architecture, Structure, and MEP with quantity take-off and cost estimation",
    type: "Healthcare",
    image: "/images/project-hospital.jpg",
  },
  {
    name: "Lal Mahal Hotel",
    desc: "Structural design and detailing with integrated Architecture and MEP services",
    type: "Hospitality",
    image: "/images/project-hotel.jpg",
  },
  {
    name: "Bharat IT Park",
    desc: "End-to-end BIM workflow from AutoCAD 2D layouts to Revit 3D models with multi-disciplinary coordination",
    type: "Commercial",
    image: "/images/project-itpark.jpg",
  },
  {
    name: "Modern Valley School",
    desc: "Comprehensive BIM modeling with structural analysis and clash-free integration",
    type: "Education",
    image: "/images/project-school.jpg",
  },
  {
    name: "Prestige Residency",
    desc: "Residential housing design with complete architectural and structural BIM coordination",
    type: "Residential",
    image: "/images/project-residency.jpg",
  },
  {
    name: "Paanpoi Project",
    desc: "Foundation project for beginners — the starting point where students master BIM fundamentals",
    type: "Foundation",
    image: "/images/project-construction.jpg",
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
              {/* Project Image */}
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black-deep/20 group-hover:bg-black-deep/10 transition-colors" />
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
