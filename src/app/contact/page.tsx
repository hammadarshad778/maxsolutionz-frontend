"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("idle");

    const formData = new FormData(event.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to submit");
      setStatus("success");
      (event.target as HTMLFormElement).reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container px-4 py-16 md:py-24 max-w-screen-2xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">Contact Us</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind? We'd love to hear from you. Fill out the form below and our team will get back to you shortly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-[#0C2C33] border-none text-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-[#1AECBB]">Get in Touch</CardTitle>
              <CardDescription className="text-gray-300">We are here to help you.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="flex items-start">
                <div className="bg-[#1AECBB]/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-[#1AECBB] shrink-0" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Office Location</h4>
                  <p className="text-sm text-gray-400 mt-1">444 Alaska Avenue<br />Torrance, CA 90503, USA</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#1AECBB]/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-[#1AECBB] shrink-0" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email Us</h4>
                  <p className="text-sm text-gray-400 mt-1">info@maxsolutionz.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#1AECBB]/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-[#1AECBB] shrink-0" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Call Us</h4>
                  <p className="text-sm text-gray-400 mt-1">+1 (787) 987-4526</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className="bg-[#C9E4DD] border-none text-[#030D0A] shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-[#030D0A] font-semibold">First Name</Label>
                    <Input id="firstName" name="firstName" placeholder="John" className="bg-white border-transparent text-[#030D0A] h-12" required disabled={loading} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-[#030D0A] font-semibold">Last Name</Label>
                    <Input id="lastName" name="lastName" placeholder="Doe" className="bg-white border-transparent text-[#030D0A] h-12" required disabled={loading} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#030D0A] font-semibold">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="john@company.com" className="bg-white border-transparent text-[#030D0A] h-12" required disabled={loading} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#030D0A] font-semibold">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" className="bg-white border-transparent text-[#030D0A] h-12" required disabled={loading} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#030D0A] font-semibold">What you need?</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project or inquiry..."
                    className="min-h-[150px] bg-white border-transparent text-[#030D0A]"
                    required
                    disabled={loading}
                  />
                </div>
                <div className="flex items-start space-x-2">
                  <input type="checkbox" id="privacy" name="privacy" required className="mt-1 h-4 w-4 rounded border-gray-300 text-[#1AECBB] focus:ring-[#1AECBB]" />
                  <Label htmlFor="privacy" className="text-sm font-normal text-gray-700">
                    I agree to the privacy policy and consent to having my data processed.
                  </Label>
                </div>
                {status === "success" && (
                  <p className="text-green-600 font-semibold bg-green-100 p-3 rounded-lg">Message sent successfully! We will get back to you soon.</p>
                )}
                {status === "error" && (
                  <p className="text-red-600 font-semibold bg-red-100 p-3 rounded-lg">Something went wrong. Please try again later.</p>
                )}
                <Button type="submit" size="lg" className="w-full sm:w-auto bg-[#1AECBB] text-[#030D0A] hover:bg-[#1AECBB]/80 font-bold px-8 h-12 rounded-xl transition-all" disabled={loading}>
                  {loading ? "Sending..." : "Submit Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
