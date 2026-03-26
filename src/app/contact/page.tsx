"use client";
import { useState, FormEvent } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const qualifications = [
  "Diploma in Civil Engineering",
  "B.E. / B.Tech Civil",
  "M.Tech Civil",
  "B.Arch / M.Arch",
  "Interior Design",
  "Working Professional",
  "Student (2nd-4th Year)",
  "Other",
];

const preferredLocations = [
  "Pimple Saudagar",
  "Baner",
  "Hadapsar",
  "Swargate",
  "Bibvewadi",
  "Narhe",
  "Online",
];

export default function ContactPage() {
  const ref = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      qualification: (form.elements.namedItem("qualification") as HTMLSelectElement).value,
      location: (form.elements.namedItem("location") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      // TODO: Connect to Supabase when proxy is ready
      // const res = await fetch(process.env.NEXT_PUBLIC_SUPABASE_URL + '/rest/v1/leads', { ... });
      console.log("Lead data:", data);
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try WhatsApp or call us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="relative bg-black-deep bg-blueprint pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in-up">
            <span className="text-gold text-sm font-bold tracking-widest uppercase">Get In Touch</span>
            <h1 className="font-[var(--font-outfit)] text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-3">
              Start Your <span className="text-primary">BIM Career</span> Today
            </h1>
            <p className="text-gray-400 text-lg mt-4 max-w-3xl">
              Fill the form below or reach us directly via WhatsApp or phone. Our team will guide you through the enrollment process.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3 fade-in-up">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
                  <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-[var(--font-outfit)] text-2xl font-bold text-green-800 mb-2">
                    Enquiry Submitted!
                  </h3>
                  <p className="text-green-700">
                    Our team will contact you within 24 hours. For immediate assistance, WhatsApp us.
                  </p>
                  <a
                    href="https://wa.me/919049182666"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-xl mt-6"
                  >
                    WhatsApp Us Now
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-gray-light border border-gray-200 rounded-2xl p-8 space-y-5">
                  <h2 className="font-[var(--font-outfit)] text-2xl font-bold text-black-deep mb-2">
                    Enquiry Form
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        name="name"
                        type="text"
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                      <input
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Qualification</label>
                      <select
                        name="qualification"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white text-gray-700"
                      >
                        <option value="">Select qualification</option>
                        {qualifications.map((q) => (
                          <option key={q} value={q}>{q}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Location</label>
                      <select
                        name="location"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white text-gray-700"
                      >
                        <option value="">Select location</option>
                        {preferredLocations.map((l) => (
                          <option key={l} value={l}>{l}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Any questions or details you'd like to share..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary hover:bg-primary-dark text-white font-bold text-lg py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Submitting..." : "Submit Enquiry"}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6 fade-in-up" style={{ transitionDelay: "200ms" }}>
              <div className="bg-gray-light border border-gray-200 rounded-2xl p-8">
                <h3 className="font-[var(--font-outfit)] text-lg font-bold text-black-deep mb-6">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  <a href="tel:+919049182666" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-black-deep">Phone</div>
                      <div className="text-sm text-gray-600">+91 9049 182 666</div>
                      <div className="text-sm text-gray-600">+91 8983 100 666</div>
                    </div>
                  </a>

                  <a href="mailto:info@designstudioinst.com" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-black-deep">Email</div>
                      <div className="text-sm text-gray-600">info@designstudioinst.com</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-black-deep">Website</div>
                      <div className="text-sm text-gray-600">www.designstudioinst.com</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA Card */}
              <div className="bg-[#25D366]/10 border border-[#25D366]/20 rounded-2xl p-8 text-center">
                <svg className="w-12 h-12 text-[#25D366] mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <h3 className="font-[var(--font-outfit)] text-lg font-bold text-[#128C7E] mb-2">
                  Prefer WhatsApp?
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get instant replies on WhatsApp. Our team is available Mon-Sat, 9 AM to 7 PM.
                </p>
                <a
                  href="https://wa.me/919049182666?text=Hi%2C%20I%27m%20interested%20in%20the%20Executive%20Diploma%20in%20BIM.%20Please%20share%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold px-6 py-3 rounded-xl transition-all"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
