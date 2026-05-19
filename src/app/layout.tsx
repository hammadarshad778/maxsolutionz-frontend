import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MaxSolutionz | Web Development, SEO & Digital Marketing",
  description: "MaxSolutionz provides cutting-edge services in web development, digital marketing, and SEO to elevate your digital presence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col bg-transparent text-foreground relative`} suppressHydrationWarning>
        <AnimatedBackground />
        <Navbar />
        <NuqsAdapter>
          <main className="flex-1 relative z-10">
            {children}
          </main>
        </NuqsAdapter>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
