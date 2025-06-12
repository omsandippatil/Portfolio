import { GraduationCap } from 'lucide-react';
import { portfolioData } from '@/data/data';

interface EducationWidgetProps {
  darkMode: boolean;
}

export default function EducationWidget({ darkMode }: EducationWidgetProps) {
  const { education } = portfolioData;

  return (
    <div className={`w-full h-auto md:col-span-2 md:h-64 lg:h-72 rounded-2xl p-6 transition-colors backdrop-blur-sm border overflow-hidden ${
      darkMode 
        ? 'bg-white/10 border-white/20 text-white' 
        : 'bg-black/10 border-black/20 text-black'
    }`}>
      <div className="flex items-center mb-4">
        <GraduationCap size={20} className="mr-2" />
        <h3 className="font-mono text-sm font-semibold">Education</h3>
      </div>
      
      <div className="space-y-4 overflow-y-auto h-[calc(100%-60px)]">
        {education.map((edu) => (
          <div key={edu.id} className="space-y-2">
            <h4 className="font-mono text-sm font-semibold">{edu.institution}</h4>
            <p className={`font-mono text-xs ${darkMode ? 'text-white/70' : 'text-black/70'}`}>
              {edu.degree}
            </p>
            <p className={`font-mono text-xs ${darkMode ? 'text-white/60' : 'text-black/60'}`}>
              {edu.description}
            </p>
            <span className={`font-mono text-xs ${darkMode ? 'text-white/50' : 'text-black/50'}`}>
              {edu.duration}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}