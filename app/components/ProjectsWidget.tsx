import { Code, ExternalLink } from 'lucide-react';
import { portfolioData } from '@/data/data';

interface ProjectsWidgetProps {
  darkMode: boolean;
}

export default function ProjectsWidget({ darkMode }: ProjectsWidgetProps) {
  const { projects } = portfolioData;

  return (
    <div className={`w-full sm:col-span-3 h-auto sm:h-64 lg:h-72 rounded-2xl p-6 transition-colors backdrop-blur-sm border overflow-hidden ${
      darkMode 
        ? 'bg-white/10 border-white/20 text-white' 
        : 'bg-black/10 border-black/20 text-black'
    }`}>
      <div className="flex items-center mb-4">
        <Code size={20} className="mr-2" />
        <h3 className="font-mono text-sm font-semibold">Projects</h3>
      </div>
      
      <div className="space-y-4 overflow-y-auto h-[calc(100%-60px)]">
        {projects.slice(0, 3).map((project) => (
          <div key={project.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-mono text-sm font-semibold">{project.title}</h4>
              <ExternalLink size={14} className={darkMode ? 'text-white/60' : 'text-black/60'} />
            </div>
            <p className={`font-mono text-xs ${darkMode ? 'text-white/70' : 'text-black/70'}`}>
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1">
              {project.tech.map((tech) => (
                <span 
                  key={tech}
                  className={`font-mono text-xs px-2 py-1 rounded-md ${
                    darkMode 
                      ? 'bg-white/20 text-white/80' 
                      : 'bg-black/20 text-black/80'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className={`font-mono text-xs ${
              project.status === 'Live' 
                ? 'text-green-500' 
                : darkMode 
                  ? 'text-white/60' 
                  : 'text-black/60'
            }`}>
              {project.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}