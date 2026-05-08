"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Users, Shield } from "lucide-react";
import Image from "next/image";

const values = [
  {
    title: "Innovation First",
    description: "We constantly explore the latest technologies like Next.js and AI to provide bleeding-edge solutions.",
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
  },
  {
    title: "Client Centric",
    description: "Your success is our success. We build digital experiences tailored specifically to your unique goals.",
    icon: <Users className="h-8 w-8 text-primary" />,
  },
  {
    title: "Results Driven",
    description: "Whether it's SEO or marketing, we rely on data and analytics to ensure maximum ROI for your campaigns.",
    icon: <Target className="h-8 w-8 text-primary" />,
  },
  {
    title: "Uncompromising Quality",
    description: "We adhere to the highest standards of code quality, security, and design aesthetics in everything we ship.",
    icon: <Shield className="h-8 w-8 text-primary" />,
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex-1 flex flex-col items-center justify-center text-center px-4 py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 translate-x-1/3 -translate-y-1/3"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4"
          >
            👋 Nice to meet you
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            We are <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-500 animate-gradient-x">MaxSolutionz</span>
          </h1>
          <p className="text-xl text-muted-foreground md:px-20 leading-relaxed max-w-3xl mx-auto">
            A passionate team of developers, marketers, and SEO specialists dedicated to elevating your brand in the digital landscape.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-muted/30 relative">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/10 bg-background/50 backdrop-blur-sm"
            >
              <Image 
                src="/marketing.png" 
                alt="Our Workspace" 
                width={800} 
                height={600} 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At MaxSolutionz, we believe that every business deserves a world-class digital presence. Founded on the principles of innovation and excellence, our mission is to bridge the gap between complex technology and tangible business growth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether we are architecting a custom web application from scratch or orchestrating a comprehensive SEO strategy, we pour our expertise and passion into every pixel and line of code. We don't just build websites; we build scalable digital platforms designed to convert.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work, our culture, and our partnerships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-background/80 backdrop-blur-sm border-muted/50 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-primary/10">
                  <CardContent className="p-8 flex items-start gap-6">
                    <div className="bg-primary/10 p-4 rounded-2xl">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
