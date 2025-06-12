import { User } from 'lucide-react';
import { portfolioData } from '@/data/data';

interface AboutWidgetProps {
  darkMode: boolean;
}

export default function AboutWidget({ darkMode }: AboutWidgetProps) {
  const { personal } = portfolioData;
  
  return (
    <div className={`
      w-full h-auto
      md:col-span-2 md:h-56
      lg:col-span-2 lg:h-64
      rounded-2xl p-6 transition-colors backdrop-blur-sm border ${
      darkMode 
        ? 'bg-white/10 border-white/20 text-white' 
        : 'bg-black/10 border-black/20 text-black'
    }`}>
      <div className="flex items-center mb-4">
        <User size={20} className="mr-2" />
        <h3 className="font-mono text-sm font-semibold">About</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <h2 className="font-mono text-xl font-bold">{personal.name}</h2>
          <p className={`font-mono text-sm ${darkMode ? 'text-white/70' : 'text-black/70'}`}>
            {personal.title}
          </p>
        </div>
        
        <p className={`font-mono text-sm leading-relaxed ${
          darkMode ? 'text-white/80' : 'text-black/80'
        }`}>
          {personal.bio}
        </p>
        
        <div className={`font-mono text-xs ${darkMode ? 'text-white/60' : 'text-black/60'}`}>
          📍 {personal.location}
        </div>
      </div>
    </div>
  );
}