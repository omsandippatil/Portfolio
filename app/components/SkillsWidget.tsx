import { useState } from 'react';
import { Zap, Sparkles } from 'lucide-react';
import { portfolioData } from '@/data/data';

interface SkillsWidgetProps {
  darkMode?: boolean;
  className?: string;
}

export default function SkillsWidget({ 
  darkMode = false, 
  className = ''
}: SkillsWidgetProps) {
  const { skills } = portfolioData;
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlowPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div 
      className={`relative group col-span-1 h-48 md:h-56 lg:h-64 ${className}`}
    >
      {/* Glassmorphism container with enhanced glass effect */}
      <div 
        className={`
          relative w-full h-full rounded-3xl p-6 overflow-hidden
          backdrop-blur-md backdrop-saturate-150
          border border-opacity-20 shadow-2xl
          transition-all duration-500 ease-out
          ${darkMode 
            ? 'bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-transparent border-white/25 text-white shadow-black/20' 
            : 'bg-gradient-to-br from-black/[0.08] via-black/[0.05] to-transparent border-black/25 text-black shadow-black/10'
          }
        `}
        onMouseMove={handleMouseMove}
      >
        {/* Dynamic light reflection effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glowPosition.x}px ${glowPosition.y}px, ${
              darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'
            } 0%, transparent 50%)`
          }}
        />

        {/* Frosted glass inner glow */}
        <div className={`absolute inset-0 rounded-3xl ${
          darkMode 
            ? 'shadow-[inset_0_0_40px_rgba(255,255,255,0.05)]' 
            : 'shadow-[inset_0_0_40px_rgba(0,0,0,0.03)]'
        }`} />

        {/* Header with skill count */}
        <div className="relative z-10 flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className={`p-2 rounded-xl backdrop-blur-sm ${
              darkMode 
                ? 'bg-white/10 border border-white/20' 
                : 'bg-black/10 border border-black/20'
            }`}>
              <Zap size={18} className={`${darkMode ? 'text-white' : 'text-black'}`} />
            </div>
            <div>
              <h3 className="font-mono text-lg font-bold tracking-tight">Skills</h3>
              <p className={`font-mono text-xs ${darkMode ? 'text-white/60' : 'text-black/60'}`}>
                {skills.length} {skills.length === 1 ? 'skill' : 'skills'}
              </p>
            </div>
          </div>
          
          <Sparkles 
            size={16} 
            className={`${darkMode ? 'text-white/40' : 'text-black/40'} animate-pulse`} 
          />
        </div>
        
        {/* Skills grid with enhanced glass pills */}
        <div 
          className="relative z-10 flex flex-wrap gap-3 overflow-y-auto scrollbar-hide h-20 md:h-28 lg:h-36"
        >
          {skills.length === 0 ? (
            <div className={`w-full h-full flex items-center justify-center ${
              darkMode ? 'text-white/40' : 'text-black/40'
            }`}>
              <p className="font-mono text-sm">No skills data available</p>
            </div>
          ) : (
            skills.map((skill, index) => (
              <div
                key={`${skill}-${index}`}
                className={`
                  relative font-mono text-xs px-4 py-2 rounded-full
                  backdrop-blur-sm border transition-all duration-300
                  cursor-default select-none
                  ${darkMode 
                    ? 'bg-white/[0.08] border-white/25 text-white/90 hover:bg-white/[0.12] hover:border-white/35' 
                    : 'bg-black/[0.08] border-black/25 text-black/90 hover:bg-black/[0.12] hover:border-black/35'
                  }
                  ${hoveredSkill === skill ? 'scale-105 shadow-lg' : 'hover:scale-102'}
                `}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Inner glow for skill pills */}
                <div className={`absolute inset-0 rounded-full ${
                  hoveredSkill === skill 
                    ? darkMode 
                      ? 'shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]' 
                      : 'shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]'
                    : ''
                }`} />
                
                <span className="relative z-10 font-medium">{skill}</span>
              </div>
            ))
          )}
        </div>

        {/* Subtle edge lighting */}
        <div className={`absolute inset-0 rounded-3xl pointer-events-none ${
          darkMode 
            ? 'shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset]' 
            : 'shadow-[0_0_0_1px_rgba(0,0,0,0.1)_inset]'
        }`} />
      </div>

      {/* External glow effect */}
      <div className={`absolute inset-0 rounded-3xl opacity-50 blur-xl transition-opacity duration-500 ${
        darkMode 
          ? 'bg-gradient-to-br from-white/5 to-transparent' 
          : 'bg-gradient-to-br from-black/5 to-transparent'
      } group-hover:opacity-70`} />
    </div>
  );
}