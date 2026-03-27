import Link from "next/link";

export default function ChallengeBanner() {
  return (
    <div className="bg-primary text-white">
      <Link
        href="/challenge"
        className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center gap-3 hover:bg-primary-dark transition-colors"
      >
        <span className="bg-white text-primary text-xs font-extrabold px-2 py-0.5 rounded uppercase tracking-wide shrink-0">
          FREE
        </span>
        <span className="text-sm md:text-base font-semibold text-center">
          3-Day High-Paying BIM Career Challenge — Register Now
        </span>
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
