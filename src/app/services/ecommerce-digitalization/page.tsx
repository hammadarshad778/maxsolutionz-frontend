"use client";

import { motion } from "framer-motion";
import { CheckCircle2, BarChart3, Workflow, Users, Globe2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function EcommerceDigitalizationPage() {
  const features = [
    {
      title: "Workflow Automation (n8n & Zapier)",
      description: "We eliminate manual data entry by connecting your CRM, email marketing, and e-commerce backend into a seamless, automated ecosystem.",
      icon: <Workflow className="w-8 h-8 text-primary" />
    },
    {
      title: "Omnichannel Retail Strategy",
      description: "Synchronize your physical inventory with your digital storefronts, expanding your reach across Google Shopping, Facebook, and Instagram seamlessly.",
      icon: <Globe2 className="w-8 h-8 text-primary" />
    },
    {
      title: "B2B Lead Generation Funnels",
      description: "Transition your traditional wholesale operations online with custom portal development, automated quoting systems, and strict B2B access controls.",
      icon: <Users className="w-8 h-8 text-primary" />
    },
    {
      title: "Data Analytics & Reporting",
      description: "Implement advanced tracking architectures using Google Tag Manager and GA4 to provide you with crystal-clear insights into your customer journey.",
      icon: <BarChart3 className="w-8 h-8 text-primary" />
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
            className="max-w-screen-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              <BarChart3 size={16} /> Digital Transformation
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              Strategic E-commerce <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Digitalization</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-10">
              End-to-end digital transformation for retail brands. We integrate advanced analytics, scalable CRM systems, and powerful automation to modernize and scale your operations globally.
            </p>
            <Button size="lg" asChild className="h-14 px-8 text-lg shadow-lg shadow-primary/20 hover:scale-105 transition-all">
              <Link href="/contact">Automate Your Business</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Digital Modernization</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Upgrade your legacy systems and eliminate operational bottlenecks.
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
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Work Smarter, Not Harder</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Scaling a business shouldn't mean scaling your manual workload. Our digital transformation services ensure your software works for you.
              </p>
              <ul className="space-y-6">
                {["Automated Invoice & Receipt Generation", "Real-time Dashboard Analytics", "Custom Customer Portals", "Legacy Data Migration"].map((item, i) => (
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
                <h3 className="text-2xl font-bold mb-4 text-white">Ready to modernize?</h3>
                <p className="text-muted-foreground mb-8 text-lg">Consult with our lead architects to map out a transformation strategy tailored to your exact operational needs.</p>
                <Button size="lg" asChild className="w-full h-14 text-lg">
                  <Link href="/contact">Book a Strategy Session</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
