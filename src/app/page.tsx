"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Code2, LineChart, Search } from "lucide-react";
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
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema()) }}
      />
      {/* Hero Section */}
      <section className="relative flex-1 flex flex-col items-center justify-center text-center px-4 py-32 md:py-48 overflow-hidden">
        {/* Animated Background Blobs */}
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
              🚀 Empowering your digital future
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              Elevate Your <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-500 animate-gradient-x">Digital Presence</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              MaxSolutionz provides state-of-the-art Web Development, targeted Digital Marketing, and advanced SEO strategies to help your business thrive and dominate the market.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Button size="lg" render={<Link href="/services" />} className="w-full sm:w-auto group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Our Services
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
              </Button>
              <Button size="lg" variant="outline" render={<Link href="/contact" />} className="w-full sm:w-auto hover:bg-primary/5 transition-colors border-primary/20">
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            className="relative lg:ml-auto w-full max-w-lg perspective-1000"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/20 bg-background/50 backdrop-blur-sm">
              <Image 
                src="/hero.png" 
                alt="Web Development Workspace" 
                width={800} 
                height={600} 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Snippet */}
      <section className="py-24 bg-muted/30 relative">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We specialize in creating comprehensive digital solutions tailored to your unique business needs and growth objectives.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full bg-background/80 backdrop-blur-sm border-muted/50 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-primary/20 hover:shadow-xl relative overflow-hidden group">
                  <div className="h-48 overflow-hidden relative border-b border-white/5">
                    <Image src={service.image} alt={service.title} fill className="object-cover transform group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <CardHeader className="relative z-10 pt-0">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="-mt-8 mb-2 relative z-20 bg-background w-14 h-14 rounded-xl flex items-center justify-center shadow-lg border border-primary/20"
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle className="text-2xl mt-2">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-base text-muted-foreground leading-relaxed">
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
      <section className="py-24 relative bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Find answers to common questions about our services and processes.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-background/60 border-muted/50 backdrop-blur-sm shadow-xl shadow-primary/5">
              <CardContent className="p-6 md:p-8">
                <Accordion className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                      <AccordionTrigger className="text-left text-lg hover:text-primary transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base leading-relaxed">
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
      <section className="py-32 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-primary/10 -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <motion.h2 
            className="text-4xl font-bold tracking-tight sm:text-5xl mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Contact us today to discuss how we can help you achieve your digital goals. Let's build something extraordinary together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" variant="default" render={<Link href="/contact" />} className="h-14 px-8 text-lg font-medium shadow-lg hover:shadow-primary/25 transition-shadow">
              Start a Project
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
