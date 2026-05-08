"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Code2, LineChart, Search, ShoppingCart, Users, Globe2, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { faqs, generateFAQSchema } from "@/data/faqs";

const services = [
  {
    title: "Web Development",
    description: "Custom, responsive, and high-performance websites built with the latest technologies like Next.js and NestJS.",
    icon: <Code2 className="h-8 w-8 text-primary" />,
    image: "/hero.png",
  },
  {
    title: "Digital Marketing",
    description: "Data-driven marketing strategies to increase your brand's visibility and conversion rates.",
    icon: <LineChart className="h-8 w-8 text-primary" />,
    image: "/marketing.png",
  },
  {
    title: "SEO Optimization",
    description: "Improve your search engine rankings and drive organic traffic to your website with our proven SEO techniques.",
    icon: <Search className="h-8 w-8 text-primary" />,
    image: "/seo.png",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema()) }}
      />
      
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          />
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, -90, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/3 -right-32 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          />
        </div>
        
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        
        <div className="container mx-auto max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4"
            >
              🚀 The Ultimate E-commerce & Web Experts
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              Transforming <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-500 animate-gradient-x">Digital Landscapes</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              MaxSolutionz is a premium custom software and e-commerce development agency. We empower businesses globally to scale with highly optimized, conversion-driven digital platforms.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Button size="lg" asChild className="w-full sm:w-auto h-14 px-8 text-lg group relative overflow-hidden">
                <Link href="/services">
                  <span className="relative z-10 flex items-center">
                    Explore Services
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto h-14 px-8 text-lg hover:bg-primary/5 transition-colors border-primary/20">
                <Link href="/contact">Hire Experts</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.3, duration: 1, type: "spring", stiffness: 50 }}
            className="relative lg:ml-auto w-full max-w-lg perspective-1000"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary via-purple-500 to-blue-500 rounded-full blur-3xl opacity-30 animate-pulse" />
            
            <motion.div 
              animate={{ y: [-10, 10, -10] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ rotateX: 10, rotateY: -10, scale: 1.05 }}
              className="relative w-full aspect-square md:aspect-auto md:h-[500px] rounded-3xl overflow-hidden border border-white/20 shadow-[0_0_50px_rgba(var(--primary),0.3)] bg-[#05060A] transform-gpu group cursor-pointer flex items-center justify-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Abstract 3D Data Core */}
              <div className="relative w-56 h-56 md:w-72 md:h-72 flex items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
                {/* Deep Background Glow */}
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 m-auto w-32 h-32 bg-primary/40 rounded-full blur-3xl pointer-events-none"
                />

                {/* Inner Bright Orb */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute inset-0 m-auto w-8 h-8 bg-white rounded-full shadow-[0_0_40px_#fff]"
                />

                {/* Rotating Geometric Rings (The 'Core') */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 m-auto w-full h-full border border-primary/30 rounded-full"
                    style={{
                      rotateZ: i * 30,
                      transformStyle: "preserve-3d"
                    }}
                    animate={{
                      rotateX: [0, 360],
                      rotateY: [0, 360],
                    }}
                    transition={{
                      duration: 12 + i * 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                ))}

                {/* Outer Orbiting Data Nodes */}
                <motion.div 
                  animate={{ rotateZ: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-40px] border border-dashed border-white/10 rounded-full pointer-events-none"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-2 left-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_#3b82f6]"
                  />
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    className="absolute -bottom-2 right-1/4 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_15px_#a855f7]"
                  />
                </motion.div>
              </div>

              {/* High-Tech Grid Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)] opacity-50 pointer-events-none" />

              {/* Scanning Laser Line */}
              <motion.div
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-px bg-primary/60 shadow-[0_0_20px_rgba(var(--primary),1)] z-10 pointer-events-none"
              />
              
              {/* Fake System Output */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-20 pointer-events-none">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse delay-75" />
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse delay-150" />
                </div>
                <div className="text-[10px] font-mono text-primary/80 tracking-widest uppercase">
                  Nexus.Core // Online
                </div>
              </div>
            </motion.div>

            {/* Floating UI Badges */}
            <motion.div 
              animate={{ y: [10, -10, 10], x: [0, 5, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl flex items-center gap-4 z-20"
            >
              <div className="bg-green-500/20 p-3 rounded-full border border-green-500/30">
                <LineChart className="text-green-400 w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Conversion Rate</p>
                <p className="text-xl font-extrabold text-white">+245%</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [-15, 15, -15], x: [0, -5, 0] }} 
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl flex items-center gap-4 z-20"
            >
              <div className="bg-primary/20 p-3 rounded-full border border-primary/30">
                <Code2 className="text-primary w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">System Uptime</p>
                <p className="text-xl font-extrabold text-white">99.99%</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Hire Dedicated Developers Section (SEO Keywords) */}
      <section className="py-24 bg-black/40 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Hire Dedicated eCommerce & WordPress Experts</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                When you <strong>hire dedicated ecommerce developer</strong> teams from MaxSolutionz, you gain access to vetted professionals who treat your project like their own. Whether you need to <strong>hire ecommerce experts</strong> for a complex platform migration or <strong>hire dedicated wordpress developers</strong> to build a lightning-fast custom theme, we have the exact talent you need.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Outsourcing your development shouldn't be a risk. We maintain transparent processes, ensuring that when you <strong>hire ecommerce developers</strong> from us, you retain complete control over your team and project direction.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-primary w-6 h-6" />
                  <span className="font-medium text-white">Vetted Developers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-primary w-6 h-6" />
                  <span className="font-medium text-white">Transparent Hiring</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4 perspective-1000"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {[
                { label: "Hire E-commerce Devs", icon: <ShoppingCart className="w-8 h-8 text-blue-400 mb-4" /> },
                { label: "Hire WordPress Devs", icon: <Code2 className="w-8 h-8 text-blue-400 mb-4" /> },
                { label: "Hire Full-Stack Devs", icon: <ShieldCheck className="w-8 h-8 text-blue-400 mb-4" /> },
                { label: "Hire Web Architects", icon: <Users className="w-8 h-8 text-blue-400 mb-4" /> }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5, z: 20 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="bg-[#11131A] border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center shadow-lg hover:border-primary/50 transition-colors cursor-pointer"
                >
                  {item.icon}
                  <h3 className="text-white font-semibold">{item.label}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialized E-Commerce Solutions (SEO Keywords) */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">We are the CTO's Favorite for E-Commerce</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide unparalleled service with assured quality and performance. If you need a top-tier <strong>woo commerce web developer</strong>, you are in the right place.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 perspective-1000">
            {[
              {
                title: "WooCommerce Specialists",
                desc: "Work with a leading woo commerce expert to optimize your store for high-volume sales. Our woo commerce developers understand complex variations and high-risk gateways."
              },
              {
                title: "Custom Software Solutions",
                desc: "Beyond standard setups, we engineer bespoke SAAS and enterprise platforms designed to integrate seamlessly into your business workflows."
              },
              {
                title: "Conversion Optimization",
                desc: "We analyze user data and implement strategic UX/UI enhancements that drastically reduce cart abandonment and increase AOV."
              }
            ].map((box, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                whileHover={{ scale: 1.03, rotateX: 2, rotateY: -2, z: 30 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, type: "spring", bounce: 0.4 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="h-full bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:border-primary/40 transition-colors relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
                  <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{box.title}</h3>
                  <p className="text-[#8892B0] text-lg leading-relaxed relative z-10">{box.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Section (SEO Keywords) */}
      <section className="py-24 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative perspective-1000"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-primary/20 rounded-3xl blur-2xl" />
              <div className="bg-[#11131A] border border-white/10 rounded-3xl p-10 relative z-10 shadow-2xl">
                <Globe2 className="w-16 h-16 text-primary mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">Serving Global Markets</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-lg text-[#8892B0]">
                    <CheckCircle2 className="w-6 h-6 text-primary" /> USA & North America
                  </li>
                  <li className="flex items-center gap-3 text-lg text-[#8892B0]">
                    <CheckCircle2 className="w-6 h-6 text-primary" /> United Kingdom & Europe
                  </li>
                  <li className="flex items-center gap-3 text-lg text-[#8892B0]">
                    <CheckCircle2 className="w-6 h-6 text-primary" /> UAE & Middle East
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Local Understanding, Global Standards</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We bridge the gap between global enterprise standards and localized market needs. Whether you are looking for a highly skilled <strong>wordpress developer chicago</strong> to understand Midwestern market nuances, or need the top <strong>chicago wordpress developers</strong> for a local brand launch, our team is equipped to deliver.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Likewise, if you are operating on the East Coast and need a rigorous, compliance-heavy platform, our teams act as your dedicated <strong>wordpress developer washington dc</strong>. We handle the technical heavy-lifting so you can focus on scaling your business operations globally.
              </p>
              <Button size="lg" variant="outline" asChild className="h-14 px-8 text-lg hover:bg-white/5">
                <Link href="/projects">View Our International Portfolio</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Snippet (Existing, updated to 3D) */}
      <section className="py-24 relative bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Core Capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We specialize in creating comprehensive digital solutions tailored to your unique business needs and growth objectives.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50, rotateX: 10, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5, z: 20 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
                style={{ transformStyle: "preserve-3d" }}
                className="h-full"
              >
                <Card className="h-full bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl border-white/10 hover:border-primary/50 transition-all duration-500 shadow-2xl relative overflow-hidden group">
                  <div className="h-48 overflow-hidden relative border-b border-white/5">
                    <Image src={service.image} alt={service.title} fill className="object-cover transform group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <CardHeader className="relative z-10 pt-0">
                    <div className="-mt-8 mb-2 relative z-20 bg-[#11131A] w-14 h-14 rounded-xl flex items-center justify-center shadow-lg border border-white/10 group-hover:border-primary/40 group-hover:scale-110 transition-all duration-300">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl mt-2 text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-base text-[#8892B0] leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative bg-black/40 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Find answers to common questions about our development and hiring processes.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-[#11131A] border-white/10 shadow-2xl">
              <CardContent className="p-6 md:p-8">
                <Accordion className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                      <AccordionTrigger className="text-left text-lg hover:text-primary transition-colors text-white">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-[#8892B0] text-base leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden text-center">
        <motion.div 
          className="absolute inset-0 bg-primary/10 -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        
        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Build Something Extraordinary?
          </motion.h2>
          <motion.p 
            className="text-xl text-[#8892B0] mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Contact us today to discuss how we can help you achieve your digital goals. Build your team, scale your infrastructure, and dominate your market.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" asChild className="h-16 px-10 text-xl font-medium shadow-[0_0_30px_rgba(var(--primary),0.3)] hover:shadow-[0_0_50px_rgba(var(--primary),0.5)] hover:scale-105 transition-all">
              <Link href="/contact">Start a Project</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
