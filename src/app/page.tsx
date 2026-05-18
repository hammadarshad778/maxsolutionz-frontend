"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Code2, LineChart, Search, ShoppingCart, Users, Globe2, ShieldCheck, CheckCircle2, Layout, Smartphone, Database, Cloud, MonitorSmartphone, BarChart3, Layers } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { faqs, generateFAQSchema } from "@/data/faqs";
import { projects } from "@/data/projects";

const services = [
  {
    title: "High-Performance WordPress Design",
    description: "Bespoke, lightning-fast WordPress architectures designed for enterprise scalability, advanced security, and seamless content management.",
    icon: <MonitorSmartphone className="h-8 w-8 text-primary" />,
    image: "/hero.png",
    href: "/services/wordpress-design"
  },
  {
    title: "Conversion-Focused WooCommerce Stores",
    description: "Data-driven e-commerce platforms engineered to minimize cart abandonment, maximize AOV, and provide frictionless shopping experiences.",
    icon: <ShoppingCart className="h-8 w-8 text-primary" />,
    image: "/marketing.png",
    href: "/services/woocommerce-stores"
  },
  {
    title: "Strategic E-commerce Digitalization",
    description: "End-to-end digital transformation for retail brands, integrating analytics, CRM, and automation to scale operations globally.",
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    image: "/seo.png",
    href: "/services/ecommerce-digitalization"
  },
  {
    title: "Advanced Full-Stack Development",
    description: "Custom software solutions built with modern stacks (React, Next.js, Node.js) to solve complex business challenges with robust APIs.",
    icon: <Layers className="h-8 w-8 text-primary" />,
    image: "/hero.png",
    href: "/services/fullstack-development"
  }
];

const testimonials = [
  {
    quote: "MaxSolutionz completely transformed our digital presence. Their team understood our unique challenges and delivered a highly optimized e-commerce platform that increased our conversion rate by 45% in just three months. The ROI has far exceeded our expectations.",
    name: "Sarah Jenkins",
    role: "Director of E-Commerce",
    company1: "RETAIL",
    company2: "TECH",
    icon: <Users className="w-6 h-6 text-primary" />
  },
  {
    quote: "Their attention to detail and technical expertise is unmatched. We needed a complex custom software solution for our logistics network, and they delivered it ahead of schedule. The platform is robust, scalable, and has drastically improved our operational efficiency.",
    name: "Michael Chen",
    role: "Chief Technology Officer",
    company1: "LOGIS",
    company2: "TICS",
    icon: <Globe2 className="w-6 h-6 text-primary" />
  },
  {
    quote: "Working with MaxSolutionz was the best decision we made for our startup. They didn't just build a website; they built a comprehensive digital marketing machine. Our organic traffic has tripled since we launched the new SEO-optimized platform.",
    name: "Amanda Rivera",
    role: "Founder & CEO",
    company1: "START",
    company2: "UP",
    icon: <LineChart className="w-6 h-6 text-primary" />
  }
];


export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema()) }}
      />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 pt-40 pb-32 md:pt-56 md:pb-40 overflow-hidden min-h-[90vh]">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-screen-2xl h-[500px] bg-primary/20 rounded-full blur-[150px] opacity-50 mix-blend-screen" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-screen-2xl h-[300px] bg-blue-500/20 rounded-full blur-[120px] opacity-40 mix-blend-screen" />
        </div>

        <div className="container mx-auto max-w-screen-2xl relative z-10 flex flex-col items-center">

          {/* Floating Glass Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-5 py-2 text-sm font-medium text-white mb-8 shadow-2xl shadow-primary/10 hover:bg-white/10 hover:scale-105 transition-all cursor-pointer group"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-gray-300">Trusted by 100+ Brands Worldwide</span>
            <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
            className="space-y-6 max-w-screen-2xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1]">
              Architecting <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-blue-500 drop-shadow-[0_0_30px_rgba(26,236,187,0.3)]">
                Digital Dominance
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#8892B0] leading-relaxed max-w-2xl mx-auto font-light">
              We engineer high-performance software and conversion-optimized e-commerce platforms that scale your business to new heights.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-blue-500 to-primary rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-500 animate-gradient-x" />
              <Button size="lg" asChild className="w-full sm:w-auto h-16 px-10 text-lg relative bg-background border border-primary/50 overflow-hidden text-white hover:bg-transparent">
                <Link href="/services">
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                  <span className="relative z-10 flex items-center font-bold tracking-wide">
                    Explore Solutions
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto relative group">
              <div className="absolute -inset-1 bg-white/5 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto h-16 px-10 text-lg border-white/20 hover:border-white/50 relative bg-white/5 backdrop-blur-sm text-gray-300 hover:text-white hover:bg-white/10 font-medium tracking-wide">
                <Link href="/contact">Book Free Consultation</Link>
              </Button>
            </motion.div>
          </motion.div>

        </div>

        {/* Floating Abstract 3D Element behind text */}
        <motion.div
          animate={{
            y: [-20, 20, -20],
            rotateZ: [0, 5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-5%] top-[20%] opacity-20 pointer-events-none -z-10 hidden lg:block"
        >
          <div className="w-64 h-64 border border-primary/30 rounded-full flex items-center justify-center relative">
            <div className="w-48 h-48 border border-blue-500/30 rounded-full" />
            <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent rotate-45" />
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hidden md:flex"
        >
          <span className="text-xs uppercase tracking-widest font-semibold opacity-70">Scroll to Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1"
          >
            <div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
        </motion.div>

      </section>

      {/* Hire Dedicated Developers Section (SEO Keywords) */}
      <section className="py-24 bg-black/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 md:px-6 max-w-screen-2xl relative z-10">
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
                { label: "Hire E-commerce Devs", icon: <ShoppingCart className="w-8 h-8 text-primary mb-4" /> },
                { label: "Hire WordPress Devs", icon: <Code2 className="w-8 h-8 text-primary mb-4" /> },
                { label: "Hire Full-Stack Devs", icon: <ShieldCheck className="w-8 h-8 text-primary mb-4" /> },
                { label: "Hire Web Architects", icon: <Users className="w-8 h-8 text-primary mb-4" /> }
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
      <section className="py-24 relative bg-black/40 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-screen-2xl">
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
      <section className="py-24 relative bg-black/40 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-screen-2xl">
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
      <section className="py-24 relative bg-black/40 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-screen-2xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              Core Capabilities
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Services We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We specialize in creating comprehensive digital solutions tailored to your unique business needs and growth objectives.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000">
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
                <Link href={service.href} className="block h-full group">
                  <Card className="h-full bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl border-white/10 hover:border-primary/50 transition-all duration-500 shadow-2xl relative overflow-hidden group-hover:shadow-[0_15px_40px_rgba(var(--primary),0.2)]">
                    <div className="h-48 overflow-hidden relative border-b border-white/5">
                      <Image src={service.image} alt={service.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transform group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <CardHeader className="relative z-10 pt-0">
                      <div className="-mt-8 mb-2 relative z-20 bg-[#11131A] w-14 h-14 rounded-xl flex items-center justify-center shadow-lg border border-white/10 group-hover:border-primary/40 group-hover:scale-110 transition-all duration-300">
                        {service.icon}
                      </div>
                      <CardTitle className="text-2xl mt-2 text-white group-hover:text-primary transition-colors">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10 flex flex-col flex-grow">
                      <CardDescription className="text-base text-[#8892B0] leading-relaxed flex-grow">
                        {service.description}
                      </CardDescription>
                      <div className="mt-6 flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                        Explore this service <ArrowRight className="ml-2 w-5 h-5" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Marquee Section */}
      <section className="py-16 relative overflow-hidden bg-black/40 bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />

        <div className="text-center mb-10 relative z-10">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-medium">Technologies We Work With</p>
        </div>

        {/* Row 1: Left to Right */}
        <div className="relative overflow-hidden mb-4 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from-[#030D0A] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-gradient-to-l after:from-[#030D0A] after:to-transparent">
          <div className="flex animate-marquee-ltr whitespace-nowrap">
            {[
              { name: "React", icon: "react", color: "61DAFB" },
              { name: "Next.js", icon: "nextdotjs", color: "FFFFFF" },
              { name: "Node.js", icon: "nodedotjs", color: "5FA04E" },
              { name: "TypeScript", icon: "typescript", color: "3178C6" },
              { name: "WordPress", icon: "wordpress", color: "21759B" },
              { name: "WooCommerce", icon: "woocommerce", color: "96588A" },
              { name: "Docker", icon: "docker", color: "2496ED" },
              { name: "MongoDB", icon: "mongodb", color: "47A248" },
              { name: "GraphQL", icon: "graphql", color: "E535AB" },
              { name: "Shopify", icon: "shopify", color: "96BF48" },
              { name: "Figma", icon: "figma", color: "F24E1E" },
              { name: "Vercel", icon: "vercel", color: "FFFFFF" },
              { name: "NestJS", icon: "nestjs", color: "E0234E" },
              { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
              { name: "Shadcn UI", icon: "shadcnui", color: "FFFFFF" },
              { name: "React", icon: "react", color: "61DAFB" },
              { name: "Next.js", icon: "nextdotjs", color: "FFFFFF" },
              { name: "Node.js", icon: "nodedotjs", color: "5FA04E" },
              { name: "TypeScript", icon: "typescript", color: "3178C6" },
              { name: "WordPress", icon: "wordpress", color: "21759B" },
              { name: "WooCommerce", icon: "woocommerce", color: "96588A" },
              { name: "Docker", icon: "docker", color: "2496ED" },
              { name: "MongoDB", icon: "mongodb", color: "47A248" },
              { name: "GraphQL", icon: "graphql", color: "E535AB" },
              { name: "Shopify", icon: "shopify", color: "96BF48" },
              { name: "Figma", icon: "figma", color: "F24E1E" },
              { name: "Vercel", icon: "vercel", color: "FFFFFF" },
              { name: "NestJS", icon: "nestjs", color: "E0234E" },
              { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
              { name: "Shadcn UI", icon: "shadcnui", color: "FFFFFF" },
            ].map((tech, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2.5 mx-4 px-5 py-2.5 rounded-full border border-white/8 bg-white/3 backdrop-blur-sm hover:border-white/20 hover:bg-white/5 transition-all cursor-default shrink-0"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://cdn.simpleicons.org/${tech.icon}/${tech.color}`}
                  alt={tech.name}
                  width={18}
                  height={18}
                  className="shrink-0 opacity-80"
                />
                <span className="text-sm font-medium text-white/70">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from-[#030D0A] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-gradient-to-l after:from-[#030D0A] after:to-transparent">
          <div className="flex animate-marquee-rtl whitespace-nowrap">
            {[
              { name: "AWS", icon: "amazonaws", color: "FF9900" },
              { name: "Expo", icon: "expo", color: "FFFFFF" },
              { name: "Appwrite", icon: "appwrite", color: "FD366E" },
              { name: "Cloudinary", icon: "cloudinary", color: "3448C5" },
              { name: "Hostinger", icon: "hostinger", color: "673DE6" },
              { name: "BigCommerce", icon: "bigcommerce", color: "121118" },
              { name: "PHP", icon: "php", color: "777BB4" },
              { name: "MySQL", icon: "mysql", color: "4479A1" },
              { name: "PostgreSQL", icon: "postgresql", color: "4169E1" },
              { name: "Redis", icon: "redis", color: "FF4438" },
              { name: "n8n", icon: "n8n", color: "EA4B71" },
              { name: "Stripe", icon: "stripe", color: "635BFF" },
              { name: "GitHub Actions", icon: "githubactions", color: "2088FF" },
              { name: "Elementor", icon: "elementor", color: "92003B" },
              { name: "JavaScript", icon: "javascript", color: "F7DF1E" },
              { name: "AWS", icon: "amazonaws", color: "FF9900" },
              { name: "Expo", icon: "expo", color: "FFFFFF" },
              { name: "Appwrite", icon: "appwrite", color: "FD366E" },
              { name: "Cloudinary", icon: "cloudinary", color: "3448C5" },
              { name: "Hostinger", icon: "hostinger", color: "673DE6" },
              { name: "BigCommerce", icon: "bigcommerce", color: "121118" },
              { name: "PHP", icon: "php", color: "777BB4" },
              { name: "MySQL", icon: "mysql", color: "4479A1" },
              { name: "PostgreSQL", icon: "postgresql", color: "4169E1" },
              { name: "Redis", icon: "redis", color: "FF4438" },
              { name: "n8n", icon: "n8n", color: "EA4B71" },
              { name: "Stripe", icon: "stripe", color: "635BFF" },
              { name: "GitHub Actions", icon: "githubactions", color: "2088FF" },
              { name: "Elementor", icon: "elementor", color: "92003B" },
              { name: "JavaScript", icon: "javascript", color: "F7DF1E" },
            ].map((tech, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2.5 mx-4 px-5 py-2.5 rounded-full border border-white/8 bg-white/3 backdrop-blur-sm hover:border-white/20 hover:bg-white/5 transition-all cursor-default shrink-0"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://cdn.simpleicons.org/${tech.icon}/${tech.color}`}
                  alt={tech.name}
                  width={18}
                  height={18}
                  className="shrink-0 opacity-80"
                />
                <span className="text-sm font-medium text-white/70">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 relative overflow-hidden bg-black/40 bg-background">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 max-w-screen-2xl relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              Our Work
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of real-world platforms we've engineered — from global e-commerce stores to enterprise software solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.02 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08, type: "spring", bounce: 0.3 }}
                className="h-full"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full group"
                >
                  <div className="h-full bg-[#0D0F14] border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/40 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />

                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-bold text-white leading-snug group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </div>

                    <p className="text-sm text-[#8892B0] leading-relaxed flex-grow line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.stack.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#8892B0] group-hover:border-primary/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button size="lg" variant="outline" asChild className="h-14 px-10 text-lg border-white/20 bg-white/5 hover:bg-white/10 hover:border-primary/40 hover:text-white transition-all group">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative bg-black/40 overflow-hidden bg-background">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 max-w-screen-2xl relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
              Real Results from <br /> MaxSolutionz Implementation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about their experience working with our dedicated teams.
            </p>
          </motion.div>

          <div className="relative max-w-screen-2xl mx-auto mt-12 mb-12 perspective-1000">
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Stacked Layer 2 (Bottom-most) */}
              <div className="absolute -bottom-8 left-[4%] right-[4%] h-full bg-[#0D1F1E]/30 rounded-[2rem] -z-20 border border-white/5 backdrop-blur-sm shadow-xl transition-transform duration-500 hover:translate-y-2" />
              {/* Stacked Layer 1 (Middle) */}
              <div className="absolute -bottom-4 left-[2%] right-[2%] h-full bg-[#0D1F1E]/60 rounded-[2rem] -z-10 border border-white/5 backdrop-blur-md shadow-2xl transition-transform duration-500 hover:translate-y-1" />

              {/* Main Card */}
              <div
                className="bg-[#051614] border border-[#2D4A46] p-8 md:p-14 rounded-[2rem] text-white relative z-10 shadow-[0_20px_50px_rgba(26,236,187,0.1)] hover:shadow-[0_20px_60px_rgba(26,236,187,0.15)] transition-shadow duration-500 cursor-pointer overflow-hidden pb-16"
                onClick={nextTestimonial}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row gap-8 justify-between items-center md:items-stretch"
                  >
                    <div className="flex-1 space-y-8">
                      <p className="text-xl md:text-2xl font-medium leading-relaxed min-h-[140px] md:min-h-[120px]">
                        "{testimonials[activeTestimonial].quote}"<span className="inline-block w-2 h-2 rounded-full bg-primary ml-1 shadow-[0_0_10px_rgba(26,236,187,0.8)] animate-pulse"></span>
                      </p>

                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30 overflow-hidden relative shadow-[0_0_15px_rgba(26,236,187,0.2)]">
                          {testimonials[activeTestimonial].icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white">{testimonials[activeTestimonial].name}</h4>
                          <p className="text-[#C9E4DD] text-sm opacity-90">{testimonials[activeTestimonial].role}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-end justify-end md:justify-center border-t border-white/10 md:border-t-0 md:border-l md:pl-10 md:ml-2 pt-6 md:pt-0 min-w-[150px]">
                      <div className="text-2xl font-black tracking-widest text-white/30 hover:text-white/60 transition-colors uppercase flex flex-col items-end md:items-start justify-end h-full">
                        <div className="mb-2 opacity-50 w-10 h-10 flex items-center justify-center">
                          {testimonials[activeTestimonial].icon}
                        </div>
                        <span className="tracking-[0.2em]">{testimonials[activeTestimonial].company1}</span>
                        <span className="text-primary tracking-[0.2em]">{testimonials[activeTestimonial].company2}</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Carousel Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {testimonials.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeTestimonial ? "w-6 bg-primary" : "w-1.5 bg-white/20"}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative bg-black/40">
        <div className="container mx-auto px-4 md:px-6 max-w-screen-2xl">
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
      <section className="py-24 relative overflow-hidden bg-black/40 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-screen-2xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#0A0C10] p-8 md:p-16 lg:p-20 text-center shadow-2xl"
          >
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[300px] bg-primary/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center w-full">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-8 shadow-[0_0_20px_rgba(26,236,187,0.15)]">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Let's Collaborate
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white max-w-3xl leading-tight">
                Ready to Build Something <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-blue-400">Extraordinary?</span>
              </h2>

              <p className="text-lg md:text-xl text-[#8892B0] max-w-2xl mx-auto mb-10 leading-relaxed">
                Transform your digital presence with our cutting-edge development teams. Scale your infrastructure, optimize for conversions, and dominate your market.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button size="lg" asChild className="h-14 px-8 text-lg font-bold shadow-[0_0_30px_rgba(26,236,187,0.3)] hover:shadow-[0_0_50px_rgba(26,236,187,0.5)] hover:scale-105 transition-all bg-primary text-primary-foreground border-none">
                  <Link href="/contact">
                    Start a Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="h-14 px-8 text-lg font-medium border-white/20 bg-white/5 hover:bg-white/10 hover:text-white transition-all text-gray-300">
                  <Link href="/services">
                    Explore Services
                  </Link>
                </Button>
              </div>
            </div>

            {/* Decorative border gradients */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
