import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Wale University",
    role: "Frontend & Full-Stack Developer | Next.js & Nest.js",
    period: "Sep. 2025 - Dec. 2025",
    location: "Remote",
    achievements: [
      "Built interactive and responsive web pages using Next.js",
      "Implemented major features including a Coupon Management System",
      "Developed mentor-status middleware (Accepted, Pending, Rejected)",
      "Fixed bugs that improved UX and application reliability",
      "Worked with backend APIs using Nest.js",
      "Collaborated on internal tools and dashboards"
    ],
    stack: ["Next.js", "Nest.js", "TypeScript", "PostgreSQL", "REST APIs"]
  },
  {
    title: "Backend Engineer (Freelance)",
    company: "NorahScent",
    role: "Backend Architecture & Payment Integration",
    period: "Sep. 2025 - Oct     . 2025",
    location: "Remote",
    achievements: [
      "Designed and built full backend architecture",
      "Integrated payment systems and admin workflows",
      "Deployed and maintained production services",
      "Optimized database performance and API responses"
    ],
    stack: ["Django", "PostgreSQL", "Paystack API", "cPanel", "REST APIs"]
  },
  {
    title: "Founder & Full-Stack Developer",
    company: "KudiWallet.ng",
    role: "Product Development & System Architecture",
    period: "Mar. 2025 - Present",
    location: "Nigeria",
    achievements: [
      "Built and scaled a fintech platform to 3,000+ users",
      "Led system design, development, deployment, and optimization",
      "Implemented secure wallet and transaction systems",
      "Managed cloud infrastructure and CI/CD pipelines",
      "Integrated multiple payment gateways and VTU providers"
    ],
    stack: ["Django", "React", "PostgreSQL", "AWS", "Docker", "CI/CD"]
  }
];

export default function Experience() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 break-words hyphens-auto">
            EXPERIENCE & <span className="text-blue-400">IMPACT</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto px-4 break-words hyphens-auto">
            Professional journey with measurable results
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <Card key={exp.title} className="bg-zinc-900/50 border-zinc-800 break-words hyphens-auto">
              <CardHeader className="p-4 sm:p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 md:gap-4">
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-xl sm:text-2xl font-bold break-words hyphens-auto">{exp.title}</CardTitle>
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-2 text-zinc-400 text-sm">
                      <div className="flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        <span className="break-words">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 border-blue-500/30 text-xs md:text-sm mt-3 lg:mt-0 lg:ml-4 w-fit">
                    {exp.role}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-4 sm:p-6 space-y-4 md:space-y-6">
                <div>
                  <h4 className="font-semibold text-base md:text-lg mb-2 md:mb-3 break-words">Key Achievements:</h4>
                  <ul className="space-y-1.5 md:space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 md:gap-3">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-400 mt-1.5 md:mt-2 flex-shrink-0"></div>
                        <span className="text-zinc-300 text-sm md:text-base break-words hyphens-auto">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-base md:text-lg mb-2 md:mb-3 break-words">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {exp.stack.map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-zinc-800/50 text-xs px-2 py-0.5 md:px-3 md:py-1 break-words hyphens-auto">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-12 md:mt-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 break-words hyphens-auto">Education</h3>
          <Card className="bg-zinc-900/50 border-zinc-800">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg md:text-xl font-bold break-words hyphens-auto">B.Sc. Computer Science</h4>
                  <p className="text-zinc-400 text-sm md:text-base mt-1 break-words hyphens-auto">Olabisi Onabanjo University (O.O.U)</p>
                </div>
                <Badge variant="outline" className="bg-zinc-800/50 text-xs md:text-sm w-fit mt-2 sm:mt-0">Graduated</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}