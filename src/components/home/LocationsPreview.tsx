"use client";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const locations = [
  { name: "Pimple Saudagar", landmark: "Spot 18 Mall, 7th Floor", phone: "85301 38666" },
  { name: "Baner", landmark: "Shree Capital, 4th Floor", phone: "84129 52666" },
  { name: "Hadapsar", landmark: "Amanora Chambers, 3rd Floor", phone: "89831 00666" },
  { name: "Swargate", landmark: "Modi Plaza, 1st & 2nd Floor", phone: "85301 37666" },
  { name: "Bibvewadi", landmark: "Navkar Building, 1st Floor", phone: "82373 00666" },
  { name: "Narhe", landmark: "Omkar Nandan, 5th Floor", phone: "89832 00666" },
];

export default function LocationsPreview() {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <span className="text-gray-400 text-sm font-bold tracking-widest uppercase">
            Our Centers
          </span>
          <h2 className="font-[var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-black-deep mt-3">
            <span className="text-charcoal">6</span> Centers Across Pune
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Choose a location convenient for you. All centers offer the same premium training experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {locations.map((loc, i) => (
            <div
              key={loc.name}
              className="fade-in-up card-hover bg-gray-light border border-gray-200 rounded-xl p-6 flex items-start gap-4"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-[var(--font-outfit)] font-bold text-black-deep">
                  {loc.name}
                </h3>
                <p className="text-sm text-gray-500 mt-0.5">{loc.landmark}</p>
                <a href={`tel:+91${loc.phone.replace(/\s/g, "")}`} className="text-sm text-primary font-medium mt-1 inline-block hover:underline">
                  {loc.phone}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 fade-in-up">
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
          >
            View All Locations with Maps
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
