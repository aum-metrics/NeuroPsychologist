import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Using Outfit for headings, Inter for body
import "./globals.css";
import "./scrollbar.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers/Providers";
import { Analytics } from "@vercel/analytics/react";
import { LanguageProvider } from "@/lib/context/LanguageContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "FutureMap Tamil Nadu | Career Navigation System",
  description: "The Definitive Career Navigation System for Tamil Nadu Students (Class 8-12).",
};

import { Sidebar } from "@/components/layout/Sidebar";
import { MobileSidebar } from "@/components/layout/MobileSidebar";

import { GlobalDisclaimer } from "@/components/layout/GlobalDisclaimer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        inter.variable,
        outfit.variable,
        "min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary/30"
      )}>
        <Providers>
          <LanguageProvider>
            {/* AI/SEO: Structured Data for LLMs */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "WebSite",
                  "name": "FutureMap Tamil Nadu",
                  "url": "https://futuremap.tn",
                  "description": "The Definitive Career Navigation System for Tamil Nadu Students.",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://futuremap.tn/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  },
                  "audience": {
                    "@type": "EducationalAudience",
                    "educationalRole": "student",
                    "audienceType": "High School Students in Tamil Nadu"
                  }
                })
              }}
            />
            <GlobalDisclaimer />
            <MobileSidebar />
            <div className="flex min-h-screen">
              <Sidebar />
              <main className="flex-1 md:ml-64 relative flex flex-col">
                {children}
              </main>
            </div>
            <Analytics />
          </LanguageProvider>
        </Providers>
      </body>
    </html>
  );
}
