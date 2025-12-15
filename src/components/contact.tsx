"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Mail, Linkedin, Github, CheckCircle, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 break-words hyphens-auto">
            LET'S <span className="text-blue-400">CONNECT</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto px-4 break-words hyphens-auto">
            Interested in working together or discussing opportunities?
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">
          {/* Contact Form Card */}
          <Card className="flex-1 bg-zinc-900/50 border-zinc-800">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-xl sm:text-2xl break-words hyphens-auto">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              {isSubmitted ? (
                <div className="text-center py-8 md:py-12">
                  <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-green-500 mx-auto mb-3 md:mb-4" />
                  <h3 className="text-lg md:text-xl font-bold mb-2 break-words">Message Sent!</h3>
                  <p className="text-zinc-400 text-sm md:text-base">I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  {error && (
                    <div className="bg-red-500/10 border border-red-500/30 text-red-500 p-3 rounded-md text-sm">
                      {error}
                    </div>
                  )}
                  <div className="space-y-1.5 md:space-y-2">
                    <Label htmlFor="name" className="text-sm md:text-base">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-zinc-800/50 border-zinc-700 text-sm md:text-base min-h-[44px]"
                      required
                    />
                  </div>
                  <div className="space-y-1.5 md:space-y-2">
                    <Label htmlFor="email" className="text-sm md:text-base">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="bg-zinc-800/50 border-zinc-700 text-sm md:text-base min-h-[44px]"
                      required
                    />
                  </div>
                  <div className="space-y-1.5 md:space-y-2">
                    <Label htmlFor="message" className="text-sm md:text-base">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      className="bg-zinc-800/50 border-zinc-700 text-sm md:text-base min-h-[120px] md:min-h-[150px]"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full min-h-[44px] gap-1.5 md:gap-2 text-sm md:text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 md:w-4 md:h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Info Sidebar */}
          <div className="flex-1 space-y-6 md:space-y-8">
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-4 md:space-y-6">
                  <a
                    href="mailto:olajide.adebanjo06@gmail.com"
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 hover:bg-zinc-800/50 rounded-lg transition-colors min-h-[44px]"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-sm md:text-base break-words hyphens-auto">Email</div>
                      <div className="text-zinc-400 text-xs md:text-sm truncate">olajide.adebanjo06@gmail.com</div>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/in/adebanjoolajide"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 hover:bg-zinc-800/50 rounded-lg transition-colors min-h-[44px]"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-sm md:text-base break-words hyphens-auto">LinkedIn</div>
                      <div className="text-zinc-400 text-xs md:text-sm truncate">linkedin.com/in/adebanjoolajide</div>
                    </div>
                  </a>

                  <a
                    href="https://github.com/its-jedu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 hover:bg-zinc-800/50 rounded-lg transition-colors min-h-[44px]"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Github className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-sm md:text-base break-words hyphens-auto">GitHub</div>
                      <div className="text-zinc-400 text-xs md:text-sm truncate">github.com/its-jedu</div>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Currently Available For */}
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg md:text-xl break-words hyphens-auto">Currently Available For</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-3">
                  {[
                    "Full-time Backend/Frontend Roles",
                    "Fintech & E-commerce Projects",
                    "API Design & Integration",
                    "System Architecture Consulting",
                    "Technical Leadership Positions"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></div>
                      <span className="text-sm md:text-base text-zinc-300 break-words hyphens-auto">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}