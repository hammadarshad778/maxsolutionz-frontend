"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShoppingCart, CreditCard, LineChart, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function WooCommerceStoresPage() {
  const features = [
    {
      title: "Mobile-First Checkout Flows",
      description: "With over 70% of e-commerce traffic coming from mobile, we engineer frictionless, multi-step checkout processes that drastically reduce cart abandonment.",
      icon: <ShoppingCart className="w-8 h-8 text-primary" />
    },
    {
      title: "High-Risk Payment Integration",
      description: "We specialize in integrating complex and high-risk payment gateways required for specific industries, ensuring secure and uninterrupted transaction processing.",
      icon: <CreditCard className="w-8 h-8 text-primary" />
    },
    {
      title: "Advanced Inventory Management",
      description: "Seamlessly sync thousands of SKUs, manage complex product variations, and automate stock levels with robust backend database structuring.",
      icon: <LayoutDashboard className="w-8 h-8 text-primary" />
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      description: "We build stores based on consumer psychology and data analytics, utilizing strategic UI/UX to maximize your Average Order Value (AOV).",
      icon: <LineChart className="w-8 h-8 text-primary" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-16">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent -z-10" />
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              <ShoppingCart size={16} /> E-Commerce Solutions
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              Conversion-Focused <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">WooCommerce Stores</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-10">
              Data-driven e-commerce platforms engineered to minimize cart abandonment, maximize Average Order Value, and provide frictionless shopping experiences for the modern consumer.
            </p>
            <Button size="lg" asChild className="h-14 px-8 text-lg shadow-lg shadow-primary/20 hover:scale-105 transition-all">
              <Link href="/contact">Build Your Store</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Retail Architecture</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            We don't just set up templates; we engineer custom retail ecosystems.
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
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Scale Your Revenue</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Whether you are selling physical goods, digital subscriptions, or B2B bulk orders, our WooCommerce builds are designed for infinite scalability.
              </p>
              <ul className="space-y-6">
                {["Compliance & Age Verification Logic", "Dynamic Product Filtering", "Custom Shipping & Tax Calculators", "ERP & CRM Integrations"].map((item, i) => (
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
                <h3 className="text-2xl font-bold mb-4 text-white">Ready to dominate your market?</h3>
                <p className="text-muted-foreground mb-8 text-lg">Let's discuss how a custom-engineered store can double your conversion rates and streamline your fulfillment.</p>
                <Button size="lg" asChild className="w-full h-14 text-lg">
                  <Link href="/contact">Schedule an E-commerce Audit</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
