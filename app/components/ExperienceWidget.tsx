import { Briefcase } from 'lucide-react';
import { portfolioData } from '@/data/data';

interface ExperienceWidgetProps {
  darkMode: boolean;
}

export default function ExperienceWidget({ darkMode }: ExperienceWidgetProps) {
  const { experience } = portfolioData;

  return (
    <div className={`col-span-1 h-64 md:h-72 lg:h-80 rounded-2xl p-6 transition-colors backdrop-blur-sm border overflow-hidden ${
      darkMode 
        ? 'bg-white/10 border-white/20 text-white' 
        : 'bg-black/10 border-black/20 text-black'
    }`}>
      <div className="flex items-center mb-4">
        <Briefcase size={20} className="mr-2" />
        <h3 className="font-mono text-sm font-semibold">Experience</h3>
      </div>
      
      <div className="space-y-4 overflow-y-auto h-[calc(100%-60px)]">
        {experience.map((exp) => (
          <div key={exp.id} className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <h4 className="font-mono text-sm font-semibold">{exp.company}</h4>
            </div>
            <p className={`font-mono text-xs ${darkMode ? 'text-white/70' : 'text-black/70'}`}>
              {exp.position}
            </p>
            <p className={`font-mono text-xs ${darkMode ? 'text-white/60' : 'text-black/60'}`}>
              {exp.description}
            </p>
            <span className={`font-mono text-xs ${darkMode ? 'text-white/50' : 'text-black/50'}`}>
              {exp.duration}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}