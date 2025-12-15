"use client";

import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    category: "Frontend",
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "React", level: 85 },
      { name: "Next.js", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "TypeScript", level: 90 },
    ]
  },
  {
    category: "Backend",
    color: "from-green-500 to-emerald-400",
    skills: [
      { name: "Django", level: 90 },
      { name: "Django REST", level: 90 },
      { name: "Node.js/Express", level: 85 },
      { name: "API Design", level: 90 },
    ]
  },
  {
    category: "Databases",
    color: "from-purple-500 to-pink-400",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 85 },
      { name: "Supabase", level: 80 },
    ]
  },
  {
    category: "Tools & Platforms",
    color: "from-orange-500 to-red-400",
    skills: [
      { name: "Docker", level: 80 },
      { name: "AWS", level: 80 },
      { name: "Git/GitHub", level: 95 },
      { name: "CI/CD", level: 85 },
    ]
  }
];

export default function Skills() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-20 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-4 md:mb-6">
            <span className="text-xs md:text-sm font-medium text-blue-400">TECHNICAL MASTERY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 break-words hyphens-auto">
            Technical <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto px-4 break-words hyphens-auto">
            Skills refined through production experience and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {skillCategories.map((category) => (
            <div key={category.category} className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-3 md:gap-4">
                <div className={`w-2.5 md:w-3 h-10 md:h-12 bg-gradient-to-b ${category.color} rounded-full flex-shrink-0`}></div>
                <h3 className="text-2xl md:text-3xl font-bold break-words hyphens-auto">{category.category}</h3>
              </div>
              
              <div className="space-y-4 md:space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2 md:space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-base md:text-lg break-words hyphens-auto">{skill.name}</span>
                      <span className="text-blue-400 font-bold text-sm md:text-base">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 md:h-3 bg-zinc-800"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Data Science Section */}
        <div className="mt-12 md:mt-16 lg:mt-20 p-4 md:p-6 lg:p-8 glassmorphism rounded-xl md:rounded-2xl border border-zinc-800">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 flex items-center gap-3 break-words hyphens-auto">
            <div className="w-2.5 md:w-3 h-10 md:h-12 bg-gradient-to-b from-purple-500 to-pink-400 rounded-full flex-shrink-0"></div>
            Data Science & Machine Learning
          </h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: "Python", level: "Advanced", color: "from-yellow-500 to-orange-400" },
              { name: "Pandas", level: "Expert", color: "from-green-500 to-emerald-400" },
              { name: "NumPy", level: "Expert", color: "from-blue-500 to-cyan-400" },
              { name: "Scikit-learn", level: "Advanced", color: "from-orange-500 to-red-400" },
              { name: "Feature Engineering", level: "Expert", color: "from-purple-500 to-pink-400" },
              { name: "ML Pipelines", level: "Advanced", color: "from-cyan-500 to-blue-400" },
              { name: "Data Analysis", level: "Expert", color: "from-emerald-500 to-green-400" },
              { name: "Predictive Modeling", level: "Advanced", color: "from-pink-500 to-rose-400" },
            ].map((skill) => (
              <div 
                key={skill.name} 
                className={`p-3 md:p-4 lg:p-6 rounded-lg md:rounded-xl bg-gradient-to-br ${skill.color}/10 border ${skill.color.replace('from-', 'border-').replace(' to-', '/30')} break-words hyphens-auto`}
              >
                <div className="font-bold text-base md:text-lg mb-1 md:mb-2 break-words">{skill.name}</div>
                <div className={`text-xs md:text-sm font-medium ${skill.color.replace('from-', 'text-').split(' ')[0]}`}>
                  {skill.level}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}