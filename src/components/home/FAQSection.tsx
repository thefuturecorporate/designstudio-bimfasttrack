"use client";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    q: "What qualification is needed to join?",
    a: "Candidates should hold a Diploma, Bachelor's, or Master's degree in Civil Engineering, Architecture, or Interior Design. Working professionals with relevant experience in construction, structural design, MEP services, or project management are also eligible.",
  },
  {
    q: "What is the course duration?",
    a: "The Executive Diploma in BIM is a 6 to 8-month program that covers the complete BIM workflow using industry-standard tools across all 7 stages — from BIM Standards to Project Scheduling.",
  },
  {
    q: "Is placement guaranteed?",
    a: "Yes, we maintain a 100% placement record. Every student receives dedicated interview training, portfolio preparation, and direct industry connections to ensure placement in top BIM roles.",
  },
  {
    q: "Can I join while still in college?",
    a: "Absolutely! The best time to join is from your 2nd year to final year. This way, you build strong software skills and a professional portfolio early — making you placement-ready by graduation.",
  },
  {
    q: "What software will I learn?",
    a: "You'll master 15+ tools including AutoCAD, Revit (Architecture, Structure, MEP), Navisworks, ETABS, SAFE, CSi Detailing, MS Project, Lumion, Filmora, Canva, and the complete MS Office suite.",
  },
  {
    q: "Do you offer online classes?",
    a: "Yes, we offer flexible learning options. You can learn online at your own pace or attend collaborative classroom sessions at any of our 6 centers in Pune — whichever suits your lifestyle and schedule.",
  },
  {
    q: "What makes this different from other BIM courses?",
    a: "Unlike short-term courses that teach individual software, our Executive Diploma covers the complete 7-stage BIM workflow with 7 real industry projects, 15+ tools, and is structured like a practical engineering degree — making you a multi-skilled, project-ready professional.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <span className="text-gray-400 text-sm font-bold tracking-widest uppercase">
            Got Questions?
          </span>
          <h2 className="font-[var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-black-deep mt-3">
            Frequently Asked <span className="text-charcoal">Questions</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="fade-in-up bg-white border border-gray-200 rounded-xl overflow-hidden"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-[var(--font-outfit)] font-semibold text-black-deep pr-4">
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
