import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChallengeBanner from "@/components/home/ChallengeBanner";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Executive Diploma in BIM | Leading BIM Training — Design Studio Institute",
  description:
    "Launch your BIM career with Design Studio's Executive Diploma in BIM. Learn AutoCAD, Revit, Navisworks, ETABS & more. 100% placement. 6 centers in Pune.",
  keywords: [
    "BIM training",
    "Executive Diploma in BIM",
    "BIM course Pune",
    "Revit training",
    "AutoCAD course",
    "BIM career",
    "Design Studio Institute",
    "BIM FastTrack",
  ],
  openGraph: {
    title: "Executive Diploma in BIM | Design Studio Institute",
    description:
      "India's leading BIM training program. 15+ software tools, 7 real projects, 100% placement.",
    type: "website",
    url: "https://www.designstudioinst.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <ChallengeBanner />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
