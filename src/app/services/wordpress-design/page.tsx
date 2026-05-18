"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MonitorSmartphone, Code, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function WordPressDesignPage() {
  const features = [
    {
      title: "Bespoke Theme Development",
      description: "We code custom WordPress themes from scratch, ensuring zero bloat, pixel-perfect design, and absolute control over your brand's digital identity.",
      icon: <Code className="w-8 h-8 text-primary" />
    },
    {
      title: "Core Web Vitals Optimization",
      description: "Our architectures are built for extreme speed. We optimize server response times, implement advanced caching, and guarantee top-tier Google Lighthouse scores.",
      icon: <Zap className="w-8 h-8 text-primary" />
    },
    {
      title: "Enterprise-Grade Security",
      description: "We harden your WordPress installation with customized firewalls, secure authentication protocols, and proactive malware scanning to protect your data.",
      icon: <ShieldCheck className="w-8 h-8 text-primary" />
    },
    {
      title: "Headless Architectures",
      description: "For unparalleled performance and omni-channel delivery, we can decouple your WordPress backend using Next.js or React as a lightning-fast frontend.",
      icon: <MonitorSmartphone className="w-8 h-8 text-primary" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent -z-10" />
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-screen-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              <MonitorSmartphone size={16} /> Web Development Service
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              High-Performance <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">WordPress Design</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-10">
              We engineer bespoke, lightning-fast WordPress architectures designed for enterprise scalability, advanced security, and seamless content management. Stop relying on slow templates and upgrade to a custom-coded powerhouse.
            </p>
            <Button size="lg" asChild className="h-14 px-8 text-lg shadow-lg shadow-primary/20 hover:scale-105 transition-all">
              <Link href="/contact">Discuss Your Project</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Engineering Approach</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            We don't just build websites; we engineer digital assets that perform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
            >
              <div className="mb-6 bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Checklist Section */}
      <section className="py-20 bg-black/40 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Built for Growth</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                A premium WordPress site is the foundation of your digital marketing. We ensure every technical aspect is perfectly aligned with your business objectives.
              </p>
              <ul className="space-y-6">
                {["100% Custom Code Architecture", "Advanced SEO Semantic Structuring", "Zero-Bloat Plugin Policy", "Frictionless API Integrations"].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 text-lg font-medium"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-3xl blur-3xl -z-10" />
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4 text-white">Ready to upgrade your web presence?</h3>
                <p className="text-muted-foreground mb-8 text-lg">Our engineering team is ready to audit your current setup or architect your next big launch from scratch.</p>
                <Button size="lg" asChild className="w-full h-14 text-lg">
                  <Link href="/contact">Get a Technical Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
