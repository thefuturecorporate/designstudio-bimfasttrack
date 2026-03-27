"use client";
import { useState } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfwanO-snry3Z9UpT_7tfDZEoJOOcrRjV6zxBdI4eyqorKxdQ/viewform";
const WHATSAPP_URL = "https://wa.me/918237100666";
const PHONE = "+918237100666";

const painPoints = [
  "You want a high-paying job after Civil Engineering",
  "You don't want to settle for a low-paying site job",
  "You want better growth, salary, and future",
  "You want an IT-style career path",
  "You need the right roadmap to achieve it",
];

const beforeItems = [
  "Confused after Civil Engineering",
  "Low-paying site job options",
  "No clear career roadmap",
  "Years of exam struggle",
  "Slow growth and frustration",
];

const afterItems = [
  "Clear BIM career roadmap",
  "Industry-ready skill direction",
  "IT-driven career opportunity",
  "Better salary growth potential",
  "Smarter future with confidence",
];

const days = [
  {
    day: "DAY 1",
    title: "Big Opportunity & Career Clarity",
    points: [
      "Discover the real scope of BIM & Digital Construction",
      "Understand where high-paying jobs exist",
      "Learn why most Civil graduates stay stuck",
      "Get clear career direction toward IT-driven roles",
      "Build your career direction with confidence",
    ],
    outcome: "What to STOP & What to BUILD",
  },
  {
    day: "DAY 2",
    title: "Skills & 90-Day Fast Track",
    points: [
      "Understand what it takes to get high-paying opportunities",
      "Learn in-demand technical skills",
      "Avoid common mistakes and time waste",
      "See how you can become job-ready in 90 days",
      "Introduction to 3-Layer BIM SmartTrack System",
    ],
    outcome: "90-Day Execution Roadmap",
  },
  {
    day: "DAY 3",
    title: "Complete Blueprint & Next Step",
    points: [
      "Get your complete BIM career blueprint",
      "Understand the full course framework & system",
      "Learn how to move from learning to earning",
      "Build your next-step execution roadmap",
      "Know exactly what to do after this challenge",
    ],
    outcome: "Clear Portfolio & Learning Path",
  },
];

const whoShouldJoin = [
  "Civil Engineering Students",
  "Final Year / Undergraduate Students",
  "Fresh Civil Engineering Graduates",
  "Job Seekers looking for better opportunities",
  "Civil Engineers confused about their career path",
  "Those who want a high-paying, IT-driven career",
  "Those who want to move beyond low-paying site jobs",
  "Anyone serious about building a BIM career",
];

const whoShouldNot = [
  "Those looking for overnight success without effort",
  "Those not serious about learning new skills",
  "Those who are happy with low-growth career options",
  "Those who don't want to upgrade themselves",
  "Those not willing to take action after the challenge",
];

const bonuses = [
  {
    num: "1",
    title: "Career Role Clarity Map",
    points: ["Design vs BIM vs Execution roles", "Which roles pay more & why", "Skills required for each role"],
  },
  {
    num: "2",
    title: "90-Day Action Plan",
    points: ["Weekly learning roadmap", "Daily practice structure", "Job application strategy"],
  },
  {
    num: "3",
    title: "Portfolio Blueprint",
    points: ["Project structure", "Workflow standards", "Interview-ready presentation"],
  },
];

const faqs = [
  { q: "Is this webinar really free?", a: "Yes, this 3-day challenge is completely FREE for live attendees." },
  { q: "Who can join this challenge?", a: "Civil Engineering students, undergraduates, fresh graduates, and job seekers can join." },
  { q: "Do I need BIM software knowledge before joining?", a: "No, this challenge is designed even for beginners who want career clarity and direction." },
  { q: "Will this help me if I am confused about my future?", a: "Yes, this challenge is specially designed for students and freshers who need a clear roadmap." },
  { q: "Is this useful for freshers with no experience?", a: "Yes, especially for freshers who want to understand the right path toward high-paying opportunities." },
  { q: "Will you explain what skills are required?", a: "Yes, you will understand the technical skills, roadmap, and industry requirements." },
  { q: "Will I get a roadmap after attending?", a: "Yes, you will get clarity on the BIM career path and your next steps." },
];

function CTAButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/30 text-lg ${className}`}
    >
      Register FREE Now
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </a>
  );
}

export default function ChallengePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const ref = useScrollAnimation();

  return (
    <div ref={ref}>
      {/* Hero Section */}
      <section className="relative bg-black-deep pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(204,0,0,0.08),transparent_60%)]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in-up">
            <span className="inline-block bg-primary/10 border border-primary/30 text-primary text-sm font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              Attention Civil Engineering Graduates
            </span>
            <h1 className="font-[var(--font-outfit)] text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              3-Day High-Paying<br />
              <span className="text-primary">BIM Career Challenge</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mt-6 max-w-3xl mx-auto">
              High-paying BIM job opportunities exist even for freshers & undergraduates.
              Don&apos;t stay trapped in low-paying site jobs or years of exam struggle.
            </p>
            <p className="text-white text-lg font-semibold mt-4">
              Learn the proven <span className="text-primary">3-Layer BIM SmartTrack System</span>
            </p>
            <p className="text-gray-300 text-xl font-bold mt-2">
              Build a high-paying, IT-driven BIM career in 90 days
            </p>

            <div className="mt-10">
              <CTAButton />
              <p className="text-gray-500 text-sm mt-3">FREE for Live Attendees Only</p>
            </div>
          </div>

          {/* Challenge Details */}
          <div className="fade-in-up mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", val: "3 Days", sub: "LIVE Online" },
              { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", val: "Weekend", sub: "Upcoming Soon" },
              { icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129", val: "Hinglish", sub: "English + Hindi" },
              { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", val: "For All", sub: "Civil / Arch / Interior" },
            ].map((d) => (
              <div key={d.val} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <svg className="w-6 h-6 text-primary mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={d.icon} />
                </svg>
                <div className="font-[var(--font-outfit)] text-white font-bold">{d.val}</div>
                <div className="text-gray-500 text-xs mt-0.5">{d.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points — "If Even ONE of These Feels True…" */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="font-[var(--font-outfit)] text-3xl md:text-4xl font-extrabold text-black-deep">
              If Even <span className="text-primary">ONE</span> of These Feels True...
            </h2>
          </div>
          <div className="space-y-4 fade-in-up">
            {painPoints.map((point) => (
              <div key={point} className="flex items-center gap-4 bg-gray-light border border-gray-200 rounded-xl p-5">
                <svg className="w-6 h-6 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
                <span className="text-black-deep font-medium">{point}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 fade-in-up">
            <CTAButton />
          </div>
        </div>
      </section>

      {/* Before vs After */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="font-[var(--font-outfit)] text-3xl md:text-4xl font-extrabold text-black-deep">
              BEFORE vs <span className="text-primary">AFTER</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-in-up">
            {/* Before */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="font-[var(--font-outfit)] text-xl font-bold text-black-deep mb-6 text-center">BEFORE</h3>
              <div className="space-y-4">
                {beforeItems.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* After */}
            <div className="bg-black-deep border border-white/10 rounded-2xl p-8">
              <h3 className="font-[var(--font-outfit)] text-xl font-bold text-white mb-6 text-center">AFTER</h3>
              <div className="space-y-4">
                {afterItems.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Day Breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 fade-in-up">
            <span className="text-primary text-sm font-bold tracking-widest uppercase">Curriculum</span>
            <h2 className="font-[var(--font-outfit)] text-3xl md:text-4xl font-extrabold text-black-deep mt-3">
              What You Will Build in <span className="text-primary">3 Days</span>
            </h2>
          </div>
          <div className="space-y-8 fade-in-up">
            {days.map((d, i) => (
              <div key={d.day} className="bg-gray-light border border-gray-200 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-5">
                  <span className="bg-primary text-white font-[var(--font-outfit)] font-extrabold text-sm px-4 py-2 rounded-lg">
                    {d.day}
                  </span>
                  <h3 className="font-[var(--font-outfit)] text-xl font-bold text-black-deep">{d.title}</h3>
                </div>
                <ul className="space-y-3 mb-5">
                  {d.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="bg-primary/10 border border-primary/20 rounded-lg px-4 py-3 inline-block">
                  <span className="text-sm font-bold text-primary">Outcome: {d.outcome}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 fade-in-up">
            <CTAButton />
          </div>
        </div>
      </section>

      {/* Who Should Join / Not Join */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Should Join */}
            <div className="fade-in-up">
              <h2 className="font-[var(--font-outfit)] text-2xl font-extrabold text-black-deep mb-6">
                Who Should <span className="text-primary">Join</span>
              </h2>
              <div className="space-y-3">
                {whoShouldJoin.map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 border border-gray-200">
                    <svg className="w-5 h-5 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Should Not */}
            <div className="fade-in-up">
              <h2 className="font-[var(--font-outfit)] text-2xl font-extrabold text-black-deep mb-6">
                Who Should <span className="text-gray-400">Not</span> Join
              </h2>
              <div className="space-y-3">
                {whoShouldNot.map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 border border-gray-200">
                    <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-500 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <span className="text-primary text-sm font-bold tracking-widest uppercase">Your Mentors</span>
            <h2 className="font-[var(--font-outfit)] text-3xl md:text-4xl font-extrabold text-black-deep mt-3">
              BIM & Design Career <span className="text-primary">40+ Mentors</span>
            </h2>
            <p className="text-gray-600 mt-2">15+ Years in AEC & Digital Construction</p>
          </div>

          <div className="fade-in-up flex flex-col items-center">
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg max-w-md w-full">
              <Image
                src="/images/mentors.jpg"
                alt="BIM Career Mentors — Mr. Kaustubh Panse, Mr. Alok Sasane, Ms. Pooja Lupane and 40+ more"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10 text-center">
              {[
                { val: "10,000+", label: "Students Trained" },
                { val: "3,000+", label: "Portfolios Built" },
                { val: "5,000+", label: "Parents Counselled" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-[var(--font-outfit)] text-2xl font-extrabold text-black-deep">{s.val}</div>
                  <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-20 bg-black-deep">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 fade-in-up">
            <h2 className="font-[var(--font-outfit)] text-3xl md:text-4xl font-extrabold text-white">
              What You Get <span className="text-primary">(Even If You Pay &#8377;0)</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-in-up">
            {bonuses.map((b) => (
              <div key={b.num} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-primary text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center">
                    {b.num}
                  </span>
                  <h3 className="font-[var(--font-outfit)] font-bold text-white">{b.title}</h3>
                </div>
                <ul className="space-y-2">
                  {b.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-gray-400">
                      <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-6 fade-in-up">
            <p className="text-gray-500 text-sm">Normally Paid — <span className="text-primary font-bold">FREE for Live Attendees Only</span></p>
          </div>
          <div className="text-center mt-10 fade-in-up">
            <CTAButton />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="font-[var(--font-outfit)] text-3xl md:text-4xl font-extrabold text-black-deep">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </div>
          <div className="space-y-3 fade-in-up">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-black-deep pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-[var(--font-outfit)] text-3xl md:text-4xl font-extrabold text-white mb-4">
            Register Now & Join the FREE<br />3-Day High-Paying BIM Career Challenge
          </h2>
          <p className="text-white/80 text-lg mb-8">FREE for Live Attendees Only</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl transition-all hover:shadow-lg text-lg"
            >
              Register FREE Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-xl transition-all hover:bg-white/10"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Sticky Bottom CTA (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 flex gap-2 z-50 md:hidden">
        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-primary text-white font-bold text-center py-3 rounded-xl text-sm"
        >
          Register FREE Now
        </a>
        <a
          href={`tel:${PHONE}`}
          className="bg-black-deep text-white font-bold px-4 py-3 rounded-xl"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
