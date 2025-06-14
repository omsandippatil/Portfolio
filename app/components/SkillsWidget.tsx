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

  // Create rows of skills for better grouping - more skills per row since they're smaller
  const createSkillRows = (skillsArray: string[]) => {
    const rows = [];
    const skillsPerRow = window.innerWidth < 640 ? 3 : 4; // More skills per row
    for (let i = 0; i < skillsArray.length; i += skillsPerRow) {
      rows.push(skillsArray.slice(i, i + skillsPerRow));
    }
    return rows;
  };

  const skillRows = createSkillRows(skills);
  // Duplicate rows for seamless loop
  const duplicatedRows = [...skillRows, ...skillRows];

  return (
    <div 
      className={`relative group col-span-1 h-48 md:h-56 lg:h-64 ${className}`}
    >
      {/* Glassmorphism container with enhanced glass effect */}
      <div 
        className={`
          relative w-full h-full rounded-3xl p-4 sm:p-6 overflow-hidden
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

        {/* Header with skill count - made more compact */}
        <div className="relative z-10 flex items-center justify-between mb-2 sm:mb-3">
          <div className="flex items-center space-x-2">
            <div className={`p-1.5 sm:p-2 rounded-xl backdrop-blur-sm ${
              darkMode 
                ? 'bg-white/10 border border-white/20' 
                : 'bg-black/10 border border-black/20'
            }`}>
              <Zap size={16} className={`sm:w-[18px] sm:h-[18px] ${darkMode ? 'text-white' : 'text-black'}`} />
            </div>
            <div>
              <h3 className="font-mono text-base sm:text-lg font-bold tracking-tight">Skills</h3>
              <p className={`font-mono text-xs ${darkMode ? 'text-white/60' : 'text-black/60'}`}>
                {skills.length} {skills.length === 1 ? 'skill' : 'skills'}
              </p>
            </div>
          </div>
          
          <Sparkles 
            size={14} 
            className={`sm:w-4 sm:h-4 ${darkMode ? 'text-white/40' : 'text-black/40'} animate-pulse`} 
          />
        </div>
        
        {/* Scrolling skills container - extended bigger */}
        <div className="relative z-10 h-24 sm:h-28 md:h-32 lg:h-36 overflow-hidden">
          {skills.length === 0 ? (
            <div className={`w-full h-full flex items-center justify-start ${
              darkMode ? 'text-white/40' : 'text-black/40'
            }`}>
              <p className="font-mono text-sm">No skills data available</p>
            </div>
          ) : (
            <div
              className="animate-marquee-vertical space-y-1.5 sm:space-y-2"
              style={{
                animation: 'marquee-vertical 18s linear infinite'
              }}
            >
              {duplicatedRows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex flex-wrap gap-1.5 sm:gap-2 justify-start">
                  {row.map((skill, skillIndex) => (
                    <div
                      key={`${skill}-${rowIndex}-${skillIndex}`}
                      className={`
                        relative font-mono text-xs px-2 py-1 sm:px-2.5 sm:py-1 rounded-lg
                        backdrop-blur-sm transition-all duration-300
                        cursor-default select-none whitespace-nowrap
                        ${darkMode 
                          ? 'bg-white/[0.06] text-white/80 hover:bg-white/[0.1] hover:text-white/90' 
                          : 'bg-black/[0.06] text-black/80 hover:bg-black/[0.1] hover:text-black/90'
                        }
                        ${hoveredSkill === skill ? 'scale-105' : 'hover:scale-102'}
                      `}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {/* Subtle inner glow for skill pills */}
                      <div className={`absolute inset-0 rounded-lg ${
                        hoveredSkill === skill 
                          ? darkMode 
                            ? 'shadow-[inset_0_0_10px_rgba(255,255,255,0.08)]' 
                            : 'shadow-[inset_0_0_10px_rgba(0,0,0,0.04)]'
                          : ''
                      }`} />
                      
                      <span className="relative z-10 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Subtle edge lighting */}
        <div className={`absolute inset-0 rounded-3xl pointer-events-none ${
          darkMode 
            ? 'shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset]' 
            : 'shadow-[0_0_0_1px_rgba(0,0,0,0.1)_inset]'
        }`} />

        {/* Enhanced top and bottom fade gradients - made stronger and taller */}
        <div className={`absolute top-0 left-0 right-0 h-12 sm:h-14 pointer-events-none z-20 ${
          darkMode 
            ? 'bg-gradient-to-b from-black/40 via-black/20 to-transparent' 
            : 'bg-gradient-to-b from-white/40 via-white/20 to-transparent'
        }`} />
        <div className={`absolute bottom-0 left-0 right-0 h-12 sm:h-14 pointer-events-none z-20 ${
          darkMode 
            ? 'bg-gradient-to-t from-black/40 via-black/20 to-transparent' 
            : 'bg-gradient-to-t from-white/40 via-white/20 to-transparent'
        }`} />
      </div>

      {/* External glow effect */}
      <div className={`absolute inset-0 rounded-3xl opacity-50 blur-xl transition-opacity duration-500 ${
        darkMode 
          ? 'bg-gradient-to-br from-white/5 to-transparent' 
          : 'bg-gradient-to-br from-black/5 to-transparent'
      } group-hover:opacity-70`} />

      <style jsx>{`
        @keyframes marquee-vertical {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        
        .animate-marquee-vertical {
          animation: marquee-vertical 18s linear infinite;
        }
      `}</style>
    </div>
  );
}