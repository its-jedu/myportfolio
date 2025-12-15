"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExternalLink, Github, Wallet, ShoppingBag, Heart, Zap, Users, Shield, Rocket, Cpu, Lock, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    slug: "kudiwallet",
    image: "kudiwallet.png",
    title: "KudiWallet.ng",
    subtitle: "Fintech VTU & Wallet Platform",
    description: "Designed and built a production fintech platform serving thousands of users with wallet management, airtime/data purchases, and payment processing.",
    features: [
      "Integrated multiple payment gateways (Paystack, Xixapay) and VTU APIs",
      "Implemented secure wallet management with transaction PIN and 2FA",
      "Optimized API performance using Redis caching, reducing response times by ~40%",
      "Containerized services with Docker and deployed on AWS with CI/CD pipelines",
      "Built real-time transaction monitoring and admin dashboard"
    ],
    stack: ["Django", "Django REST", "React", "PostgreSQL", "Redis", "AWS", "Docker", "Celery"],
    icon: Wallet,
    status: "Live Production",
    users: "1,000+",
    link: "https://kudiwallet.ng",
    github: "https://github.com/its-jedu/kudiwallet",
    isPrivate: true, // Add this field
    privateMessage: "This repository contains proprietary business logic and security-sensitive code for a live fintech platform.",
    metrics: [
      { icon: Users, label: "Active Users", value: "1,000+" },
      { icon: Zap, label: "Uptime", value: "99.9%" },
      { icon: Shield, label: "Security", value: "PCI DSS" }
    ]
  },
  {
    slug: "norahscent",
    image: "norah.svg",
    title: "NorahScent",
    subtitle: "E-commerce Backend System",
    description: "Architected and deployed a complete backend system for a premium fragrance e-commerce platform with secure payment processing and inventory management.",
    features: [
      "Developed RESTful APIs for product management, cart, and order processing",
      "Integrated Paystack for secure payment processing and subscription management",
      "Built admin dashboard with analytics, inventory tracking, and customer management",
      "Implemented automated email notifications and order fulfillment workflows",
      "Optimized database queries and API responses for high traffic volumes"
    ],
    stack: ["Django", "Django REST", "PostgreSQL", "Paystack API", "Celery", "Redis", "cPanel", "Nginx"],
    icon: ShoppingBag,
    status: "Live Production",
    users: "200+",
    link: "https://www.norahscentlibrary.com",
    github: "https://github.com/yourusername/norahscent",
    isPrivate: true, // Add this field
    privateMessage: "Client proprietary code. Contains sensitive business logic and payment integration implementations.",
    metrics: [
      { icon: Rocket, label: "Monthly Orders", value: "200+" },
      { icon: Cpu, label: "API Response", value: "< 200ms" }
    ]
  },
  {
    slug: "healthcare",
    image: "git.png",
    title: "Healthcare Backend System",
    subtitle: "Medical Workflow Management Platform",
    description: "Engineered a secure healthcare backend system for managing patient records, medical workflows, and asynchronous task processing.",
    features: [
      "Built with FastAPI for high-performance medical data processing",
      "Implemented secure patient data management with role-based access control",
      "Set up async task processing with Celery and Redis for background jobs",
      "Designed RESTful APIs with JWT authentication and rate limiting",
      "Optimized MongoDB queries with indexing and aggregation pipelines"
    ],
    stack: ["FastAPI", "MongoDB", "Redis", "Celery", "JWT", "Docker", "AWS", "WebSockets"],
    icon: Heart,
    status: "Completed",
    users: "Medical Staff",
    link: "https://github.com/its-jedu/HealthCare-AI-Backend",
    github: "https://github.com/its-jedu/HealthCare-AI-Backend",
    isPrivate: false, // Public repository
    metrics: [
      { icon: Shield, label: "Data Security", value: "HIPAA" },
      { icon: Zap, label: "Processing", value: "Async" }
    ]
  }
];

export default function Projects() {
  const [openDialog, setOpenDialog] = useState<string | null>(null);

  const handleCodeClick = (project: typeof projects[0], e: React.MouseEvent) => {
    if (project.isPrivate) {
      e.preventDefault();
      e.stopPropagation();
      setOpenDialog(project.title);
    }
    // If not private, the Link component will handle navigation normally
  };

  return (
    <section id="projects" className="py-20 px-6 lg:px-20 bg-gradient-to-b from-zinc-950 to-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
            <span className="text-sm font-medium text-blue-400">PRODUCTION WORK</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            Featured <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Real-world applications built with scalability, security, and performance in mind
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group bg-zinc-900/50 backdrop-blur-sm border-zinc-800 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={`/projects/${project.image}`}
                  alt={`${project.title} - ${project.subtitle}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>
                
                {/* Status badge */}
                <div className="absolute top-4 left-4">
                  <Badge className={`${project.status === 'Live Production' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-blue-500/20 text-blue-400 border-blue-500/30'}`}>
                    {project.status}
                  </Badge>
                </div>
                
                {/* Private badge for private repos */}
                {project.isPrivate && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-zinc-800/80 backdrop-blur-sm text-zinc-300 border-zinc-700 flex items-center gap-1">
                      <Lock className="w-3 h-3" />
                      Private
                    </Badge>
                  </div>
                )}
                
                {/* Project icon */}
                <div className="absolute bottom-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center">
                  <project.icon className="w-6 h-6 text-blue-400" />
                </div>
              </div>
              
              <CardHeader>
                <div className="space-y-4">
                  <div>
                    <CardTitle className="text-2xl lg:text-3xl font-bold group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-zinc-400 mt-2">
                      {project.subtitle}
                    </CardDescription>
                  </div>
                  
                  {/* User metrics */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-zinc-500" />
                      <span className="text-sm text-zinc-400">{project.users}</span>
                    </div>
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <metric.icon className="w-4 h-4 text-zinc-500" />
                        <span className="text-sm text-zinc-400">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-zinc-300 leading-relaxed">
                  {project.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-blue-400" />
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                        <span className="text-zinc-400 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="bg-zinc-800/50 hover:bg-blue-500/20 hover:text-blue-300 hover:border-blue-500/30 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-6 border-t border-zinc-800">
                  <Link href={project.link} target="_blank" className="flex-1">
                    <Button className="w-full gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                      <ExternalLink className="w-4 h-4" />
                      {project.link === "#" ? "Case Study" : "Live Demo"}
                    </Button>
                  </Link>
                  
                  {/* Conditional Code Button */}
                  {project.isPrivate ? (
                    <Dialog open={openDialog === project.title} onOpenChange={(open) => !open && setOpenDialog(null)}>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="w-full gap-2 border-zinc-700 hover:border-amber-500/50 hover:bg-amber-500/10 text-amber-400 hover:text-amber-300"
                          onClick={(e) => handleCodeClick(project, e)}
                        >
                          <Lock className="w-4 h-4" />
                          View Code
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-zinc-900 border-zinc-800 max-w-md">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2 text-xl">
                            <Lock className="w-5 h-5 text-amber-400" />
                            Repository Access Restricted
                          </DialogTitle>
                          <DialogDescription className="text-zinc-400 pt-4">
                            <div className="space-y-4">
                              <p className="text-zinc-300">
                                The source code for <span className="font-semibold text-blue-300">{project.title}</span> is not publicly available.
                              </p>
                              
                              <div className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                                <p className="text-sm text-zinc-400">
                                  {project.privateMessage || "This repository contains proprietary business logic and security-sensitive code for a live production platform."}
                                </p>
                              </div>
                              
                              <div className="flex items-center gap-3 p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
                                <Eye className="w-5 h-5 text-amber-400" />
                                <div className="text-sm">
                                  <p className="font-medium text-amber-300">Why is this private?</p>
                                  <p className="text-amber-400/80 mt-1">
                                    Live production code often contains sensitive business logic, API keys, and security implementations that cannot be publicly shared.
                                  </p>
                                </div>
                              </div>
                              
                              <div className="pt-4 border-t border-zinc-800">
                                <p className="text-sm text-zinc-400">
                                  <span className="text-blue-300 font-medium">Alternative:</span> Check out my{" "}
                                  <Link 
                                    href="https://github.com/its-jedu" 
                                    className="text-cyan-400 hover:text-cyan-300 underline"
                                    target="_blank"
                                  >
                                    public GitHub profile
                                  </Link>{" "}
                                  for open-source projects and code samples that demonstrate similar technical skills.
                                </p>
                              </div>
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex justify-end gap-3 pt-6">
                          <Button
                            variant="outline"
                            onClick={() => setOpenDialog(null)}
                            className="border-zinc-700 hover:border-zinc-600"
                          >
                            Close
                          </Button>
                          <Link href="https://github.com/its-jedu" target="_blank">
                            <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                              <Github className="w-4 h-4 mr-2" />
                              View Public Repos
                            </Button>
                          </Link>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <Link href={project.github} target="_blank" className="flex-1">
                      <Button variant="outline" className="w-full gap-2 border-zinc-700 hover:border-blue-500 hover:bg-blue-500/10">
                        <Github className="w-4 h-4" />
                        View Code
                      </Button>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800">
            <div className="text-left">
              <h3 className="text-xl font-bold mb-2">More Projects & Contributions</h3>
              <p className="text-zinc-400">
                Explore my public repositories, open-source contributions, and technical experiments on GitHub.
              </p>
            </div>
            <Link href="https://github.com/its-jedu" target="_blank">
              <Button className="gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                <Github className="w-5 h-5" />
                View GitHub
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}