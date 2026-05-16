import { Card, CardContent } from "@/components/ui/card";

export default function TermsOfServicePage() {
  return (
    <div className="container px-4 py-32 md:py-48 max-w-4xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
          Terms of Service
        </h1>
        <p className="text-xl text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
      <Card className="bg-[#0C2C33] border-none text-gray-300 shadow-xl">
        <CardContent className="p-8 md:p-12 space-y-6 text-lg">
          <h3 className="text-2xl font-semibold text-[#1AECBB] mt-4 mb-2">1. Acceptance of Terms</h3>
          <p>By accessing and using the Max Solutionz website, you accept and agree to be bound by the terms and provision of this agreement.</p>
          
          <h3 className="text-2xl font-semibold text-[#1AECBB] mt-8 mb-2">2. Use of Services</h3>
          <p>You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website.</p>

          <h3 className="text-2xl font-semibold text-[#1AECBB] mt-8 mb-2">3. Intellectual Property</h3>
          <p>All content included on this site, such as text, graphics, logos, images, and software, is the property of Max Solutionz and protected by intellectual property laws.</p>

          <h3 className="text-2xl font-semibold text-[#1AECBB] mt-8 mb-2">4. Changes to Terms</h3>
          <p>We reserve the right to modify these terms at any time. Your continued use of the website following any changes indicates your acceptance of the new terms.</p>
        </CardContent>
      </Card>
    </div>
  );
}
