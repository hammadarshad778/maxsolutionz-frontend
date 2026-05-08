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
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("http://localhost:3001/api/contact", {
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
    <div className="container px-4 py-16 md:py-24 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Contact Us</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind? We'd love to hear from you. Fill out the form below and our team will get back to you shortly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-background/60 border-muted/50 backdrop-blur">
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>We are here to help you.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-4 shrink-0" />
                <div>
                  <h4 className="font-semibold">Office Location</h4>
                  <p className="text-sm text-muted-foreground mt-1">123 Tech Avenue, Suite 400<br/>Innovation City, TX 75001</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary mr-4 shrink-0" />
                <div>
                  <h4 className="font-semibold">Email Us</h4>
                  <p className="text-sm text-muted-foreground mt-1">hello@maxsolutionz.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary mr-4 shrink-0" />
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <p className="text-sm text-muted-foreground mt-1">+1 (555) 123-4567</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className="bg-background/60 border-muted/50 backdrop-blur">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" placeholder="John Doe" required disabled={loading} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required disabled={loading} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Tell us about your project or inquiry..." 
                    className="min-h-[150px]"
                    required 
                    disabled={loading}
                  />
                </div>
                {status === "success" && (
                  <p className="text-green-500 text-sm">Message sent successfully! We will get back to you soon.</p>
                )}
                {status === "error" && (
                  <p className="text-red-500 text-sm">Something went wrong. Please try again later.</p>
                )}
                <Button type="submit" className="w-full sm:w-auto" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
