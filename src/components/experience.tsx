import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Wale University",
    role: "Frontend & Full-Stack Developer | Next.js & Nest.js",
    period: "2023",
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
    period: "2022",
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
    period: "2021 - Present",
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
    <section className="py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            EXPERIENCE & <span className="text-blue-400">IMPACT</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Professional journey with measurable results
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={exp.title} className="bg-zinc-900/50 border-zinc-800">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl">{exp.title}</CardTitle>
                    <div className="flex items-center gap-4 mt-2 text-zinc-400">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 border-blue-500/30">
                    {exp.role}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                        <span className="text-zinc-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-zinc-800/50">
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
        <div className="mt-16">
          <h3 className="text-3xl font-bold mb-8">Education</h3>
          <Card className="bg-zinc-900/50 border-zinc-800">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold">B.Sc. Computer Science</h4>
                  <p className="text-zinc-400 mt-1">Olabisi Onabanjo University (O.O.U)</p>
                </div>
                <Badge variant="outline">Graduated</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}