import { Button } from "@/components/ui/button";
import { ArrowDown, Code2, Server, Cloud, Database, Sparkles, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-20 pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto text-center lg:text-left">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 md:gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-500/10 border border-blue-500/30">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
              <span className="text-xs md:text-sm font-medium text-blue-400">Full-Stack Engineer & Founder</span>
            </div>

            <div>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                  Adebanjo
                </span>
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mt-1 md:mt-2">
                  Olajide Opeyemi
                </span>
              </h1>
              
              <div className="mt-4 md:mt-6 lg:mt-8 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
                <span className="text-zinc-300">Building </span>
                <span className="text-blue-400">Scalable</span>
                <span className="text-zinc-300"> Digital </span>
                <span className="text-cyan-400">Experiences</span>
              </div>
              
              <div className="mt-4 md:mt-6 lg:mt-8 flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3">
                {["Django", "React", "Next.js", "PostgreSQL", "AWS", "Docker", "TypeScript", "Tailwind"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 md:px-4 md:py-2 bg-zinc-800/70 backdrop-blur-sm rounded-full text-xs md:text-sm border border-zinc-700 hover:border-blue-500/50 transition-colors break-words hyphens-auto"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl">
                I architect and engineer <span className="text-blue-300 font-semibold">production-ready web applications</span> with deep expertise in backend systems, API design, and modern frontend frameworks.
              </p>

              <div className="p-4 md:p-6 bg-gradient-to-r from-blue-900/20 to-cyan-900/10 rounded-xl md:rounded-2xl border border-blue-500/20">
                <p className="text-zinc-300 text-sm md:text-base">
                  Founder of <Link href="https://kudiwallet.ng" className="font-bold text-green-400 hover:text-green-300 transition-colors break-words">KudiWallet.ng</Link> — a live fintech platform serving <span className="text-blue-300">thousands of users</span> with secure wallet management and payment solutions.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start pt-4">
              <Link href="#projects" className="flex-1 sm:flex-none">
                <Button className="w-full sm:w-auto min-h-[44px] md:min-h-[52px] bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl shadow-lg shadow-blue-500/25">
                  View My Work
                </Button>
              </Link>
              <Link href="/OlajideCV..pdf" target="_blank" className="flex-1 sm:flex-none">
                <Button variant="outline" className="w-full sm:w-auto min-h-[44px] md:min-h-[52px] text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl border-zinc-700 hover:border-blue-500 hover:bg-blue-500/10">
                  Download CV
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Visualization with Profile Image */}
          <div className="flex-1 relative mt-8 lg:mt-0">
            {/* Profile Image Container */}
            <div className="relative mx-auto w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mb-8 md:mb-12">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-xl md:blur-2xl lg:blur-3xl opacity-20 animate-pulse"></div>
              
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-transparent bg-gradient-to-br from-blue-500/30 to-cyan-500/30 p-0.5 md:p-1">
                <div className="w-full h-full rounded-full bg-zinc-900/80 backdrop-blur-sm"></div>
              </div>
              
              {/* Profile Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 md:border-3 lg:border-4 border-zinc-800/50">
                <Image
                  src="/profile/profile.png"
                  alt="Adebanjo Olajide Opeyemi - Full-Stack Software Engineer"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                />
              </div>
              
              {/* Status indicator */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full border-2 md:border-3 lg:border-4 border-zinc-950 shadow-lg shadow-green-500/30">
                <div className="w-full h-full rounded-full bg-green-500 animate-ping opacity-20"></div>
              </div>
              
              {/* Floating tech badges */}
              <div className="absolute -top-2 left-2 sm:-top-3 sm:left-4 md:-top-4 md:left-8 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-zinc-900/80 backdrop-blur-sm rounded-full border border-zinc-700">
                <span className="text-xs sm:text-sm font-medium text-blue-400">Full-Stack</span>
              </div>
              <div className="absolute -bottom-2 right-4 sm:-bottom-3 sm:right-8 md:-bottom-4 md:right-12 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-zinc-900/80 backdrop-blur-sm rounded-full border border-zinc-700">
                <span className="text-xs sm:text-sm font-medium text-cyan-400">Architect</span>
              </div>
            </div>

            {/* Tech Stack Visualization */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {[
                { icon: Code2, label: "Frontend", color: "from-blue-500 to-cyan-500", count: "5+ Years" },
                { icon: Server, label: "Backend", color: "from-green-500 to-emerald-500", count: "5+ Years" },
                { icon: Database, label: "Database", color: "from-purple-500 to-pink-500", count: "Expert" },
                { icon: Cloud, label: "Cloud", color: "from-orange-500 to-red-500", count: "AWS/Azure" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glassmorphism p-4 md:p-6 rounded-xl md:rounded-2xl hover:scale-105 transition-all duration-300"
                >
                  <div className={`bg-gradient-to-br ${item.color} w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4`}>
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <div className="font-bold text-sm md:text-lg mb-1 break-words">{item.label}</div>
                  <div className="text-xs md:text-sm text-zinc-400">{item.count}</div>
                </div>
              ))}
            </div>
            
            {/* Live Project Status */}
            <div className="mt-6 md:mt-8 glassmorphism p-4 md:p-6 rounded-xl md:rounded-2xl">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div className="text-xs md:text-sm font-medium text-zinc-400">Live Projects</div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs text-green-400">Active</span>
                </div>
              </div>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-zinc-800/30 rounded-lg md:rounded-xl">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wallet className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-sm md:text-base truncate">KudiWallet.ng</div>
                    <div className="text-xs md:text-sm text-zinc-500 truncate">Fintech • 1,000+ Users</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 md:mt-16 lg:mt-20 xl:mt-24 text-center">
          <div className="text-xs md:text-sm text-zinc-500 mb-3 md:mb-4">Explore My Portfolio</div>
          <ArrowDown className="w-6 h-6 md:w-8 md:h-8 mx-auto text-blue-500 animate-bounce" />
        </div>
      </div>
    </section>
  );
}