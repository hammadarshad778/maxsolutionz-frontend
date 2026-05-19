"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Layers, Server, Smartphone, Cloud } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FullstackDevelopmentPage() {
  const features = [
    {
      title: "Next.js & React Frontend Apps",
      description: "We build highly interactive, SEO-friendly web applications using the latest features of Next.js and React, ensuring an app-like experience in the browser.",
      icon: <Smartphone className="w-8 h-8 text-primary" />
    },
    {
      title: "Scalable Node.js Backend APIs",
      description: "Our custom backend architectures are built with Node.js and Express/NestJS, designed to handle high concurrency and complex data processing effortlessly.",
      icon: <Server className="w-8 h-8 text-primary" />
    },
    {
      title: "Database Architecture",
      description: "From relational PostgreSQL databases to flexible NoSQL MongoDB clusters, we design data structures optimized for rapid retrieval and absolute integrity.",
      icon: <Layers className="w-8 h-8 text-primary" />
    },
    {
      title: "Cloud Deployment & DevOps",
      description: "We orchestrate robust deployment pipelines on AWS or Vercel, integrating CI/CD workflows for zero-downtime updates and bulletproof reliability.",
      icon: <Cloud className="w-8 h-8 text-primary" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-16">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear from-primary/10 to-transparent -z-10" />
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-screen-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              <Layers size={16} /> Software Engineering
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              Advanced Full-Stack <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Development</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-10">
              Custom software solutions built from the ground up using modern technology stacks. We engineer scalable systems that solve complex business challenges with elegant code and robust APIs.
            </p>
            <Button size="lg" asChild className="h-14 px-8 text-lg shadow-lg shadow-primary/20 hover:scale-105 transition-all">
              <Link href="/contact">Start Developing</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">The Modern Stack</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            We utilize the same enterprise-grade technologies trusted by Silicon Valley giants.
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

      <section className="py-20 bg-black/40 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Engineering Excellence</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                When off-the-shelf software fails, we build bespoke applications that perfectly align with your unique operational logic.
              </p>
              <ul className="space-y-6">
                {["Microservices & Monolithic Architectures", "Real-Time WebSockets Integration", "Headless CMS & Commerce", "Strict TypeScript Codebases"].map((item, i) => (
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
                <h3 className="text-2xl font-bold mb-4 text-white">Have a complex technical requirement?</h3>
                <p className="text-muted-foreground mb-8 text-lg">Let our engineering team architect the perfect software solution to propel your business forward.</p>
                <Button size="lg" asChild className="w-full h-14 text-lg">
                  <Link href="/contact">Request a Technical Proposal</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
