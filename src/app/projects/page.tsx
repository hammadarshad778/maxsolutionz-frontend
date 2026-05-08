"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ExternalLink, CheckCircle2 } from "lucide-react";

export default function ProjectsPage() {
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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Featured Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore some of our most impactful work across e-commerce, corporate strategy, and digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects List */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-16 perspective-1000">
          {projects.map((project, index) => (
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
                  <div className="grid md:grid-cols-12 gap-6 lg:gap-12 p-6 md:p-10">
                    <div className="md:col-span-12 lg:col-span-5 flex flex-col justify-center">
                      <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium w-fit mb-6">
                        {project.role}
                      </div>
                      <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                      <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.stack.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-foreground/80">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Button asChild size="lg" className="w-fit gap-2 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-500 text-white shadow-lg shadow-primary/30 hover:shadow-primary/60 hover:scale-110 hover:-translate-y-1 transition-all duration-300 border-none">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          View Live Site <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                      </Button>
                    </div>
                    
                    <div className="md:col-span-12 lg:col-span-7 bg-black/40 rounded-2xl p-6 md:p-8 border border-white/5 group-hover:bg-black/30 transition-colors duration-500 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors duration-500" />
                      <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 relative z-10">
                        Key Solutions Implemented
                      </h3>
                      <ul className="space-y-4">
                        {project.keySolutions.map((solution, i) => {
                          const [boldPart, ...rest] = solution.split(':');
                          const textPart = rest.join(':');
                          return (
                            <motion.li 
                              key={i} 
                              className="flex items-start gap-3"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.3 + (i * 0.1) }}
                            >
                              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                              <span className="text-muted-foreground leading-relaxed">
                                <strong className="text-foreground font-medium">{boldPart}</strong>
                                {textPart ? `:${textPart}` : ''}
                              </span>
                            </motion.li>
                          )
                        })}
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life and achieve your business goals.
          </p>
          <Button size="lg" asChild className="h-14 px-8 text-lg hover:scale-105 transition-all shadow-lg shadow-primary/20">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
