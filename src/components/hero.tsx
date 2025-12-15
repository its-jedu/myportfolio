import { Button } from "@/components/ui/button";
import { ArrowDown, Code2, Server, Cloud, Database, Sparkles, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-20 pt-20">
      <div className="max-w-7xl mx-auto text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">Full-Stack Engineer & Founder</span>
            </div>

            <div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                  Adebanjo
                </span>
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mt-2">
                  Olajide Opeyemi
                </span>
              </h1>
              
              <div className="mt-8 text-2xl md:text-3xl font-semibold">
                <span className="text-zinc-300">Building </span>
                <span className="text-blue-400">Scalable</span>
                <span className="text-zinc-300"> Digital </span>
                <span className="text-cyan-400">Experiences</span>
              </div>
              
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
                {["Django", "React", "Next.js", "PostgreSQL", "AWS", "Docker", "TypeScript", "Tailwind"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-zinc-800/70 backdrop-blur-sm rounded-full text-sm border border-zinc-700 hover:border-blue-500/50 transition-colors"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-xl text-zinc-400 max-w-2xl">
                I architect and engineer <span className="text-blue-300 font-semibold">production-ready web applications</span> with deep expertise in backend systems, API design, and modern frontend frameworks.
              </p>

              <div className="p-6 bg-gradient-to-r from-blue-900/20 to-cyan-900/10 rounded-2xl border border-blue-500/20">
                <p className="text-zinc-300">
                  Founder of <Link href="https://kudiwallet.ng" className="font-bold text-green-400 hover:text-green-300 transition-colors">KudiWallet.ng</Link> a live fintech platform serving <span className="text-blue-300">thousands of users</span> with secure wallet management and payment solutions.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link href="#projects">
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-lg px-8 py-6 rounded-xl shadow-lg shadow-blue-500/25">
                  View My Work
                </Button>
              </Link>
              <Link href="/OlajideCV..pdf" target="_blank">
                <Button variant="outline" className="text-lg px-8 py-6 rounded-xl border-zinc-700 hover:border-blue-500 hover:bg-blue-500/10">
                  Download CV
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Visualization with Profile Image */}
          <div className="relative">
            {/* Profile Image Container */}
            <div className="relative mx-auto lg:mx-0 w-80 h-80 lg:w-96 lg:h-96 mb-12">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-br from-blue-500/30 to-cyan-500/30 p-1">
                <div className="w-full h-full rounded-full bg-zinc-900/80 backdrop-blur-sm"></div>
              </div>
              
              {/* Profile Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-zinc-800/50">
                <Image
                  src="/profile/profile.png"
                  alt="Adebanjo Olajide Opeyemi - Full-Stack Software Engineer"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 320px, 384px"
                />
              </div>
              
              {/* Status indicator */}
              <div className="absolute bottom-8 right-8 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full border-4 border-zinc-950 shadow-lg shadow-green-500/30">
                <div className="w-full h-full rounded-full bg-green-500 animate-ping opacity-20"></div>
              </div>
              
              {/* Floating tech badges */}
              <div className="absolute -top-4 left-8 px-4 py-2 bg-zinc-900/80 backdrop-blur-sm rounded-full border border-zinc-700">
                <span className="text-sm font-medium text-blue-400">Full-Stack</span>
              </div>
              <div className="absolute -bottom-4 right-12 px-4 py-2 bg-zinc-900/80 backdrop-blur-sm rounded-full border border-zinc-700">
                <span className="text-sm font-medium text-cyan-400">Architect</span>
              </div>
            </div>

            {/* Tech Stack Visualization */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Code2, label: "Frontend", color: "from-blue-500 to-cyan-500", count: "5+ Years" },
                { icon: Server, label: "Backend", color: "from-green-500 to-emerald-500", count: "5+ Years" },
                { icon: Database, label: "Database", color: "from-purple-500 to-pink-500", count: "Expert" },
                { icon: Cloud, label: "Cloud", color: "from-orange-500 to-red-500", count: "AWS/Azure" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glassmorphism p-6 rounded-2xl hover:scale-105 transition-all duration-300"
                >
                  <div className={`bg-gradient-to-br ${item.color} w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="font-bold text-lg mb-1">{item.label}</div>
                  <div className="text-sm text-zinc-400">{item.count}</div>
                </div>
              ))}
            </div>
            
            {/* Live Project Status */}
            <div className="mt-8 glassmorphism p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-medium text-zinc-400">Live Projects</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs text-green-400">Active</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-zinc-800/30 rounded-xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Wallet className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold">KudiWallet.ng</div>
                    <div className="text-sm text-zinc-500">Fintech • 1,000+ Users</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-24 text-center">
          <div className="text-sm text-zinc-500 mb-4">Explore My Portfolio</div>
          <ArrowDown className="w-8 h-8 mx-auto text-blue-500 animate-bounce" />
        </div>
      </div>
    </section>
  );
}