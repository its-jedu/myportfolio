import Image from 'next/image';

export default function About() {
  return (
    <section className="py-20 px-6 lg:px-20 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                About <span className="text-blue-400">Me</span>
              </h2>
              
              <div className="space-y-6 text-lg text-zinc-300">
                <p>
                  I'm a <span className="font-semibold text-blue-300">full-stack software engineer</span> with over five years of experience building scalable web applications using Django, Node/Express.js, React.js, Next.js, and PostgreSQL/MySQL.
                </p>
                
                <p>
                  I'm the founder of <span className="font-bold text-green-400">KudiWallet.ng</span>, a live fintech platform where I designed and implemented end-to-end systems including wallet management, payment integrations, secure transaction flows, APIs, and cloud deployment.
                </p>
                
                <p>
                  I have strong experience in <span className="font-semibold">API design and integration</span>, asynchronous task processing, cloud deployment, and working in startup environments where reliability and speed matter.
                </p>
                
                <div className="bg-zinc-800/50 p-6 rounded-xl border-l-4 border-blue-500">
                  <p className="text-zinc-300">
                    In addition to web development, I have a background in <span className="font-semibold">data science and machine learning</span>, having worked on data preprocessing, feature engineering, and predictive modeling for real-world use cases.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {[
                { value: '5+', label: 'Years Experience' },
                { value: '2K+', label: 'Platform Users' },
                { value: '20+', label: 'Projects' },
                { value: '100%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-zinc-800/30 rounded-lg">
                  <div className="text-3xl font-bold text-blue-400">{stat.value}</div>
                  <div className="text-sm text-zinc-400 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Elements */}
          <div className="space-y-8">
            {/* Code Example */}
            <div className="bg-zinc-900/70 rounded-2xl p-6 border border-zinc-800">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-sm text-zinc-400">backend_architecture.py</span>
              </div>
              <pre className="text-sm font-mono text-zinc-300 overflow-x-auto">
{`# My Development Approach
class DevelopmentPhilosophy:
    def __init__(self):
        self.principles = [
            "Clean, maintainable code",
            "Scalable architecture",
            "Security-first mindset",
            "Thorough testing",
            "Documentation as code"
        ]
    
    def build(self, project):
        return f"Building {project} with:"
        + "\\n- Django/Next.js stack"
        + "\\n- PostgreSQL optimization"
        + "\\n- Cloud deployment"
        + "\\n- CI/CD pipelines"`}
              </pre>
            </div>

            {/* Tech Stack Visualization */}
            <div className="p-6 glassmorphism rounded-2xl">
              <h3 className="text-xl font-bold mb-6">Core Development Stack</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { name: 'Django', color: 'bg-green-500/20', text: 'text-green-400' },
                  { name: 'Next.js', color: 'bg-black/20', text: 'text-blue-400' },
                  { name: 'PostgreSQL', color: 'bg-blue-500/20', text: 'text-blue-400' },
                  { name: 'React', color: 'bg-cyan-500/20', text: 'text-cyan-400' },
                  { name: 'AWS', color: 'bg-orange-500/20', text: 'text-orange-400' },
                  { name: 'Docker', color: 'bg-blue-600/20', text: 'text-blue-300' },
                ].map((tech) => (
                  <div key={tech.name} className={`${tech.color} p-4 rounded-lg text-center`}>
                    <span className={`font-semibold ${tech.text}`}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Touch */}
            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <h4 className="font-bold text-lg">Beyond Code</h4>
                <p className="text-zinc-400 text-sm">
                  When I'm not coding, I play video games, read and contribute to projects, mentor aspiring developers, and explore new technologies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
            I'm passionate about solving complex problems with elegant code. Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors inline-block"
            >
              Let's Connect
            </a>
            <a 
              href="/resume.pdf" 
              className="px-8 py-3 glassmorphism hover:bg-white/10 rounded-lg font-semibold transition-colors inline-block"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}