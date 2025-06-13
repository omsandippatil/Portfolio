import { useState } from 'react';
import { User, MapPin } from 'lucide-react';
import { portfolioData } from '@/data/data';

interface AboutWidgetProps {
  darkMode: boolean;
}

export default function AboutWidget({ darkMode }: AboutWidgetProps) {
  const { personal } = portfolioData;
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlowPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div className={`
      relative group w-full h-auto
      md:col-span-2 md:h-56
      lg:col-span-2 lg:h-64
    `}>
      {/* Enhanced glassmorphism container */}
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

        {/* Header section */}
        <div className="relative z-10 flex items-center mb-6">
          <div className={`p-2 rounded-xl backdrop-blur-sm mr-3 ${
            darkMode 
              ? 'bg-white/10 border border-white/20' 
              : 'bg-black/10 border border-black/20'
          }`}>
            <User size={18} className={`${darkMode ? 'text-white' : 'text-black'}`} />
          </div>
          <h3 className="font-mono text-lg font-bold tracking-tight">About</h3>
        </div>
        
        {/* Content section */}
        <div className="relative z-10 space-y-4">
          {/* Name and title */}
          <div>
            <h2 className="font-mono text-2xl font-bold mb-1">{personal.name}</h2>
            <p className={`font-mono text-sm font-medium ${
              darkMode ? 'text-white/70' : 'text-black/70'
            }`}>
              {personal.title}
            </p>
          </div>
          
          {/* Bio */}
          <p className={`font-mono text-sm leading-relaxed ${
            darkMode ? 'text-white/80' : 'text-black/80'
          }`}>
            {personal.bio}
          </p>
          
          {/* Location with enhanced styling */}
          <div className={`flex items-center space-x-2 font-mono text-xs ${
            darkMode ? 'text-white/60' : 'text-black/60'
          }`}>
            <div className={`p-1.5 rounded-lg backdrop-blur-sm ${
              darkMode 
                ? 'bg-white/[0.05] border border-white/15' 
                : 'bg-black/[0.05] border border-black/15'
            }`}>
              <MapPin size={12} />
            </div>
            <span className="font-medium">{personal.location}</span>
          </div>
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