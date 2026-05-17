"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs, generateFAQSchema } from "@/data/faqs";
import { Card, CardContent } from "@/components/ui/card";
import Head from "next/head";

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema()) }}
      />
      <div className="container px-4 py-32 md:py-48 max-w-7xl mx-auto min-h-screen">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4"
          >
            🤔 Got Questions?
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Questions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services, processes, and how we can help your business thrive.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-background/60 border-muted/50 backdrop-blur-sm shadow-xl shadow-primary/5">
            <CardContent className="p-6 md:p-8">
              <Accordion className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                    <AccordionTrigger className="text-left text-lg text-white hover:text-primary transition-colors">
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
    </>
  );
}
