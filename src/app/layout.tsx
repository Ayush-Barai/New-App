import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PrepHub - SEO-First Technical & HR Interview Questions Hub",
  description: "Master coding, system design, databases, DevOps, and behavioral interviews with structured, high-quality questions and detailed answers.",
  metadataBase: new URL("https://prephub.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prephub.vercel.app",
    title: "PrepHub - Master Technical & HR Interviews",
    description: "Prepare for your engineering interviews with curated, detailed questions and step-by-step solutions.",
    siteName: "PrepHub",
  },
  twitter: {
    card: "summary_large_image",
    title: "PrepHub - Master Technical Interviews",
    description: "Curated technical questions and expert-formulated behavioral templates.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://prephub.vercel.app/#organization",
    "name": "PrepHub",
    "url": "https://prephub.vercel.app",
    "logo": "https://prephub.vercel.app/icon.png",
    "sameAs": [
      "https://github.com/prephub",
      "https://twitter.com/prephub"
    ]
  };

  const webSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://prephub.vercel.app/#website",
    "url": "https://prephub.vercel.app",
    "name": "PrepHub",
    "description": "Master technical and HR interviews with curated questions and answers.",
    "publisher": {
      "@id": "https://prephub.vercel.app/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://prephub.vercel.app/interview?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 font-sans">
        <JsonLd schema={[orgSchema, webSchema]} />
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

