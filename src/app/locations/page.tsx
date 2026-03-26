"use client";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const locations = [
  {
    name: "Pimple Saudagar",
    address: "Office No 718, 7th Floor, Spot 18 Mall, Pimple Saudagar, Pimpri Chinchwad, Mana-mandir Society, Rahatani, Pune, Maharashtra 411017",
    phone: "85301 38666",
    mapQuery: "Spot+18+Mall+Pimple+Saudagar+Pune",
  },
  {
    name: "Baner",
    address: "Office No 401, 4th Floor, Sangriya Developers, Shree Capital, Baner Road, Opposite Punjab National Bank, Baner, Pune, Maharashtra 411045",
    phone: "84129 52666",
    mapQuery: "Shree+Capital+Baner+Pune",
  },
  {
    name: "Hadapsar",
    address: "Office No 312, 3rd Floor, Amanora Chambers, Mundhwa-Kharadi Rd, Amanora Park Town, Hadapsar, Pune, Maharashtra 411028",
    phone: "89831 00666",
    mapQuery: "Amanora+Chambers+Hadapsar+Pune",
  },
  {
    name: "Swargate",
    address: "Office No 101, 1st & 2nd floor, Modi Plaza, Opposite Lakshmi Narayan Theatre, Pune Satara Road, Near Swargate Bus Stand, Pune, Maharashtra 411037",
    phone: "85301 37666",
    mapQuery: "Modi+Plaza+Swargate+Pune",
  },
  {
    name: "Bibvewadi",
    address: "1st Floor, Navkar Building, Balaji Nagar, New Nurses Town Co Operative Society, Dhankawadi, Pune, Maharashtra 411043",
    phone: "82373 00666",
    mapQuery: "Navkar+Building+Bibvewadi+Pune",
  },
  {
    name: "Narhe",
    address: "Office No 501/A1 wing, Omkar Nandan, Mumbai Pune Bypass Rd, Kudale Baug, Vadgaon Budruk, Katraj-Dehu Rd Bypass, Narhe, near Navale Chowk, Pune 411041",
    phone: "89832 00666",
    mapQuery: "Omkar+Nandan+Narhe+Pune",
  },
];

export default function LocationsPage() {
  const ref = useScrollAnimation();

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="relative bg-black-deep bg-blueprint pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in-up">
            <span className="text-blue-400 text-sm font-bold tracking-widest uppercase">Find Us Near You</span>
            <h1 className="font-[var(--font-outfit)] text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-3">
              <span className="text-primary">6</span> Centers Across Pune
            </h1>
            <p className="text-gray-400 text-lg mt-4 max-w-3xl">
              Choose a location convenient for you. All centers offer the same premium BIM training experience with state-of-the-art infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((loc, i) => (
              <div
                key={loc.name}
                className="fade-in-up card-hover bg-gray-light border border-gray-200 rounded-2xl overflow-hidden"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Map Preview */}
                <div className="h-48 bg-charcoal/5 relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-blueprint-light" />
                  <div className="relative text-center">
                    <svg className="w-12 h-12 text-primary mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span className="font-[var(--font-outfit)] text-lg font-bold text-black-deep">{loc.name}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-[var(--font-outfit)] text-xl font-bold text-black-deep mb-3">
                    Design Studio — {loc.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{loc.address}</p>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`tel:+91${loc.phone.replace(/\s/g, "")}`}
                      className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold text-sm px-4 py-2 rounded-lg hover:bg-primary/20 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {loc.phone}
                    </a>
                    <a
                      href={`https://www.google.com/maps/search/${loc.mapQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gray-200 text-charcoal font-semibold text-sm px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black-deep">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-[var(--font-outfit)] text-3xl font-extrabold text-white mb-4">
            Visit Your Nearest <span className="text-primary">Center</span>
          </h2>
          <p className="text-gray-400 mb-8">Walk in for a free counseling session at any of our 6 locations.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl transition-all">
              Book a Visit
            </Link>
            <a href="tel:+919049182666" className="border-2 border-white/20 text-white hover:bg-white/5 font-semibold px-8 py-4 rounded-xl transition-all">
              Call: 9049 182 666
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
