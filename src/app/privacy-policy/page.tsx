import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="container px-4 py-32 md:py-48 max-w-screen-2xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
          Privacy Policy
        </h1>
        <p className="text-xl text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
      <Card className="bg-[#0C2C33] border-none text-gray-300 shadow-xl">
        <CardContent className="p-8 md:p-12 space-y-6 text-lg">
          <h3 className="text-2xl font-semibold text-[#1AECBB] mt-4 mb-2">1. Information We Collect</h3>
          <p>We may collect personal information such as your name, email address, and phone number when you voluntarily provide it through our contact forms or when requesting a quote.</p>
          
          <h3 className="text-2xl font-semibold text-[#1AECBB] mt-8 mb-2">2. How We Use Your Information</h3>
          <p>The information we collect is used to communicate with you, provide our services, and improve our website and offerings. We do not sell your personal data to third parties.</p>

          <h3 className="text-2xl font-semibold text-[#1AECBB] mt-8 mb-2">3. Data Security</h3>
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

          <h3 className="text-2xl font-semibold text-[#1AECBB] mt-8 mb-2">4. Contact Us</h3>
          <p>If you have any questions or concerns about this Privacy Policy, please contact us at info@maxsolutionz.com.</p>
        </CardContent>
      </Card>
    </div>
  );
}
