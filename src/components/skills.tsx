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
    <section className="py-20 px-6 lg:px-20 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
            <span className="text-sm font-medium text-blue-400">TECHNICAL MASTERY</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            Technical <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Skills refined through production experience and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category) => (
            <div key={category.category} className="space-y-8">
              <div className="flex items-center gap-4">
                <div className={`w-3 h-12 bg-gradient-to-b ${category.color} rounded-full`}></div>
                <h3 className="text-3xl font-bold">{category.category}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-lg">{skill.name}</span>
                      <span className="text-blue-400 font-bold">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-3 bg-zinc-800"
                    />
                    <style jsx>{`
                      /* Custom progress bar styling */
                      .progress-bar {
                        background: linear-gradient(to right, var(--from-color), var(--to-color));
                      }
                    `}</style>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Data Science Section */}
        <div className="mt-20 p-8 glassmorphism rounded-2xl border border-zinc-800">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <div className="w-3 h-12 bg-gradient-to-b from-purple-500 to-pink-400 rounded-full"></div>
            Data Science & Machine Learning
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                className={`p-6 rounded-xl bg-gradient-to-br ${skill.color}/10 border ${skill.color.replace('from-', 'border-').replace(' to-', '/30')}`}
              >
                <div className="font-bold text-lg mb-2">{skill.name}</div>
                <div className={`text-sm font-medium ${skill.color.replace('from-', 'text-').split(' ')[0]}`}>
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