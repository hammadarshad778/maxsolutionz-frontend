export const faqs = [
  {
    question: "What exactly does MaxSolutionz do?",
    answer: "MaxSolutionz is a full-service digital agency. We specialize in building cutting-edge web applications, executing data-driven digital marketing campaigns, and providing advanced SEO optimization to help businesses grow their online presence.",
  },
  {
    question: "How long does it take to build a website?",
    answer: "The timeline depends on the complexity of the project. A standard business website can take 2-4 weeks, while a complex custom web application using Next.js and NestJS may take 8-12 weeks. We always provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you offer ongoing support after the website is launched?",
    answer: "Absolutely! We provide comprehensive maintenance and support packages to ensure your website remains secure, up-to-date, and continues to perform optimally as your business grows.",
  },
  {
    question: "How does your SEO process work?",
    answer: "Our SEO process includes a complete technical audit, in-depth keyword research, on-page optimization, and strategic link building. We focus on white-hat techniques that provide long-term, sustainable growth in organic search rankings.",
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer customized pricing based on the specific needs and scope of your project. After our initial discovery call, we will provide a detailed proposal with transparent pricing options.",
  }
];

export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}
