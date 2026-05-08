import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Code2, LineChart, Search, Smartphone, Megaphone } from "lucide-react";

export const metadata = {
  title: "Our Services | MaxSolutionz",
  description: "Explore our comprehensive range of digital services including web development, digital marketing, and SEO.",
};

const allServices = [
  {
    title: "Web Development",
    description: "We build fast, secure, and scalable web applications using modern frameworks like React, Next.js, and Node.js.",
    icon: <Code2 className="h-12 w-12 text-primary" />,
    features: ["Custom Web Applications", "E-commerce Solutions", "Progressive Web Apps (PWAs)", "CMS Integration"],
  },
  {
    title: "Digital Marketing",
    description: "Data-driven marketing campaigns designed to reach your target audience and maximize your ROI.",
    icon: <LineChart className="h-12 w-12 text-primary" />,
    features: ["Social Media Marketing", "Pay-Per-Click (PPC)", "Content Marketing", "Email Campaigns"],
  },
  {
    title: "SEO Optimization",
    description: "Enhance your online visibility and rank higher on search engines with our white-hat SEO strategies.",
    icon: <Search className="h-12 w-12 text-primary" />,
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"],
  },
  {
    title: "Mobile App Development",
    description: "Engaging and intuitive mobile applications for both iOS and Android platforms.",
    icon: <Smartphone className="h-12 w-12 text-primary" />,
    features: ["React Native Apps", "UI/UX Design", "App Store Optimization", "Maintenance & Support"],
  },
  {
    title: "Brand Strategy",
    description: "Develop a strong, cohesive brand identity that resonates with your customers and stands out in the market.",
    icon: <Megaphone className="h-12 w-12 text-primary" />,
    features: ["Brand Identity Design", "Market Positioning", "Voice & Messaging", "Visual Guidelines"],
  }
];

export default function ServicesPage() {
  return (
    <div className="container px-4 py-16 md:py-24 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Our Services</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Comprehensive digital solutions designed to accelerate your growth and establish your dominance in the digital landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allServices.map((service, index) => (
          <Card key={index} className="flex flex-col h-full bg-background border-muted/50 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="mb-4 bg-primary/10 w-fit p-3 rounded-lg">
                {service.icon}
              </div>
              <CardTitle className="text-2xl">{service.title}</CardTitle>
              <CardDescription className="text-base mt-2">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3 mt-4">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
