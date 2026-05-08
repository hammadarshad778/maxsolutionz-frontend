"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, MonitorSmartphone, ShoppingCart, BarChart3, Layers, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const allServices = [
  {
    title: "High-Performance WordPress Design",
    description: "Bespoke, lightning-fast WordPress architectures designed for enterprise scalability, advanced security, and seamless content management.",
    icon: <MonitorSmartphone className="h-10 w-10 text-primary" />,
    features: ["Custom Theme & Plugin Development", "Core Web Vitals Optimization", "Headless WordPress Architectures", "Enterprise-Grade Security"],
    href: "/services/wordpress-design"
  },
  {
    title: "Conversion-Focused WooCommerce Stores",
    description: "Data-driven e-commerce platforms engineered to minimize cart abandonment, maximize AOV, and provide frictionless shopping experiences.",
    icon: <ShoppingCart className="h-10 w-10 text-primary" />,
    features: ["High-Risk Payment Gateway Integration", "Dynamic Product Filtering & Search", "Automated Inventory Sync", "Mobile-First Checkout Flows"],
    href: "/services/woocommerce-stores"
  },
  {
    title: "Strategic E-commerce Digitalization",
    description: "End-to-end digital transformation for retail brands, integrating analytics, CRM, and automation to scale operations globally.",
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    features: ["n8n & Zapier Workflow Automation", "Omnichannel Retail Strategy", "B2B Lead Generation Funnels", "Data Analytics & Reporting"],
    href: "/services/ecommerce-digitalization"
  },
  {
    title: "Advanced Full-Stack Development",
    description: "Custom software solutions built with modern stacks (React, Next.js, Node.js) to solve complex business challenges with robust APIs.",
    icon: <Layers className="h-10 w-10 text-primary" />,
    features: ["Next.js & React Frontend Apps", "Scalable Node.js Backend APIs", "Database Architecture (SQL/NoSQL)", "Cloud Deployment & DevOps"],
    href: "/services/fullstack-development"
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-16">
      {/* Header Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent -z-10" />
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Core Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Engineering high-conversion digital experiences and scalable architectures for ambitious brands worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-10">
          {allServices.map((service, index) => (
            <div
              key={index}
              className="w-full flex flex-col lg:flex-row bg-[#11131A] border border-white/5 rounded-3xl overflow-hidden p-6 md:p-10 gap-8 lg:gap-12 items-stretch transition-colors hover:border-white/10 shadow-2xl shadow-black/50"
            >
              {/* Left Column */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="mb-6 bg-[#1A1D27] w-14 h-14 flex items-center justify-center rounded-2xl border border-white/5">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  {service.title}
                </h2>
                <p className="text-[#8892B0] text-lg mb-8 leading-relaxed max-w-2xl">
                  {service.description}
                </p>

                <Link href={service.href} className="w-fit mt-auto">
                  <div className="inline-flex items-center gap-2 bg-transparent border border-white/20 hover:bg-white/5 text-white transition-all duration-300 rounded-xl px-6 h-12 text-sm font-medium">
                    Explore this service <ArrowRight size={16} />
                  </div>
                </Link>
              </div>

              {/* Right Column */}
              <div className="flex-1 bg-[#0A0B0F] rounded-2xl p-6 md:p-8 border border-white/5 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <h3 className="text-lg font-bold mb-6 text-white relative z-10">
                  Key Features Included
                </h3>
                <ul className="space-y-4 relative z-10">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-white font-medium text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-24 py-20 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Accelerate Your Growth?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with us to build digital solutions that dominate your market and drive measurable results.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 hover:scale-105 shadow-lg shadow-primary/20">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
