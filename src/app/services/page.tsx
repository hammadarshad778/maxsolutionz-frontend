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
        <div className="flex flex-col gap-16 perspective-1000">
          {allServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, rotateX: 15, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2, z: 20 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card className="overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-primary/50 hover:shadow-[0_20px_50px_rgba(var(--primary),0.15)] transition-all duration-500 relative group">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-12 gap-6 lg:gap-12 p-6 md:p-10">
                    <div className="md:col-span-12 lg:col-span-5 flex flex-col justify-center">
                      <div className="mb-6 bg-primary/10 w-16 h-16 flex items-center justify-center rounded-2xl border border-primary/20 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                        {service.icon}
                      </div>
                      <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <Link href={service.href} className="w-fit">
                        <div className="inline-flex items-center gap-2 bg-transparent border-2 border-white/20 hover:border-primary text-foreground hover:text-primary shadow-none hover:shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:scale-105 transition-all duration-300 rounded-md px-8 h-12 text-base font-medium relative overflow-hidden group/btn">
                          <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
                          <span className="relative z-10 flex items-center gap-2">
                            Explore this service <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </Link>
                    </div>
                    
                    <div className="md:col-span-12 lg:col-span-7 bg-black/40 rounded-2xl p-6 md:p-8 border border-white/5 group-hover:bg-black/30 transition-colors duration-500 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors duration-500" />
                      <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 relative z-10">
                        Key Features Included
                      </h3>
                      <ul className="space-y-4">
                        {service.features.map((feature, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + (i * 0.1) }}
                          >
                            <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                            <span className="text-muted-foreground leading-relaxed text-lg">
                              <strong className="text-foreground font-medium">{feature}</strong>
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
