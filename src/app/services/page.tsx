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
    href: "/contact"
  },
  {
    title: "Conversion-Focused WooCommerce Stores",
    description: "Data-driven e-commerce platforms engineered to minimize cart abandonment, maximize AOV, and provide frictionless shopping experiences.",
    icon: <ShoppingCart className="h-10 w-10 text-primary" />,
    features: ["High-Risk Payment Gateway Integration", "Dynamic Product Filtering & Search", "Automated Inventory Sync", "Mobile-First Checkout Flows"],
    href: "/contact"
  },
  {
    title: "Strategic E-commerce Digitalization",
    description: "End-to-end digital transformation for retail brands, integrating analytics, CRM, and automation to scale operations globally.",
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    features: ["n8n & Zapier Workflow Automation", "Omnichannel Retail Strategy", "B2B Lead Generation Funnels", "Data Analytics & Reporting"],
    href: "/contact"
  },
  {
    title: "Advanced Full-Stack Development",
    description: "Custom software solutions built with modern stacks (React, Next.js, Node.js) to solve complex business challenges with robust APIs.",
    icon: <Layers className="h-10 w-10 text-primary" />,
    features: ["Next.js & React Frontend Apps", "Scalable Node.js Backend APIs", "Database Architecture (SQL/NoSQL)", "Cloud Deployment & DevOps"],
    href: "/contact"
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

      {/* Services Grid */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 perspective-1000">
          {allServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: 10, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              whileHover={{ scale: 1.03, rotateX: 2, rotateY: -2, z: 20 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
              style={{ transformStyle: "preserve-3d" }}
              className="h-full"
            >
              <Link href={service.href} className="block h-full group">
                <Card className="h-full flex flex-col overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:border-primary/50 hover:shadow-[0_15px_40px_rgba(var(--primary),0.2)] transition-all duration-500 relative">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors duration-500" />
                  
                  <CardContent className="p-8 md:p-10 flex flex-col flex-grow relative z-10">
                    <div className="mb-6 bg-primary/10 w-16 h-16 flex items-center justify-center rounded-2xl border border-primary/20 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                      {service.icon}
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                      {service.title}
                    </h2>
                    
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed flex-grow">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                          <span className="text-base text-foreground/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-auto flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                      Discuss this service <ArrowRight className="ml-2 w-5 h-5" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
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
