import { useState } from 'react';
import { GitBranch, Star, GitFork } from 'lucide-react';
import { portfolioData } from '@/data/data';

interface OpenSourceWidgetProps {
  darkMode: boolean;
}

export default function OpenSourceWidget({ darkMode }: OpenSourceWidgetProps) {
  const { openSource } = portfolioData;
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
      relative group col-span-1 h-64 md:h-72 lg:h-80
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
        <div className="relative z-10 flex items-center mb-4">
          <div className={`p-2 rounded-xl backdrop-blur-sm mr-3 ${
            darkMode 
              ? 'bg-white/10 border border-white/20' 
              : 'bg-black/10 border border-black/20'
          }`}>
            <GitBranch size={18} className={`${darkMode ? 'text-white' : 'text-black'}`} />
          </div>
          <h3 className="font-mono text-lg font-bold tracking-tight">Open Source</h3>
        </div>
        
        {/* Scrolling content container */}
        <div 
          className="relative z-10 h-[calc(100%-80px)] overflow-hidden"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <div className="animate-marquee-vertical">
            {openSource.map((repo, index) => (
              <div key={`${repo.id}-${index}`} className="mb-6 flex-shrink-0 space-y-3">
                {/* Project name with enhanced styling */}
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                    darkMode 
                      ? 'bg-gradient-to-r from-green-400 to-blue-400' 
                      : 'bg-gradient-to-r from-green-500 to-blue-500'
                  }`} />
                  <h4 className="font-mono text-sm font-bold leading-tight">{repo.name}</h4>
                </div>
                
                {/* Description */}
                <p className={`font-mono text-xs leading-relaxed ml-5 ${
                  darkMode ? 'text-white/70' : 'text-black/70'
                }`}>
                  {repo.description}
                </p>
                
                {/* Stats and Language */}
                <div className="flex items-center gap-4 ml-5">
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-lg backdrop-blur-sm ${
                    darkMode 
                      ? 'bg-white/[0.05] border border-white/15' 
                      : 'bg-black/[0.05] border border-black/15'
                  }`}>
                    <Star size={12} />
                    <span className="font-mono text-xs">{repo.stars}</span>
                  </div>
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-lg backdrop-blur-sm ${
                    darkMode 
                      ? 'bg-white/[0.05] border border-white/15' 
                      : 'bg-black/[0.05] border border-black/15'
                  }`}>
                    <GitFork size={12} />
                    <span className="font-mono text-xs">{repo.forks}</span>
                  </div>
                  <div className={`px-2 py-1 rounded-md backdrop-blur-sm font-mono text-xs ${
                    darkMode 
                      ? 'bg-white/[0.05] border border-white/10 text-white/60' 
                      : 'bg-black/[0.05] border border-black/10 text-black/60'
                  }`}>
                    {repo.language}
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate content for seamless loop */}
            {openSource.map((repo, index) => (
              <div key={`${repo.id}-duplicate-${index}`} className="mb-6 flex-shrink-0 space-y-3">
                {/* Project name with enhanced styling */}
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                    darkMode 
                      ? 'bg-gradient-to-r from-green-400 to-blue-400' 
                      : 'bg-gradient-to-r from-green-500 to-blue-500'
                  }`} />
                  <h4 className="font-mono text-sm font-bold leading-tight">{repo.name}</h4>
                </div>
                
                {/* Description */}
                <p className={`font-mono text-xs leading-relaxed ml-5 ${
                  darkMode ? 'text-white/70' : 'text-black/70'
                }`}>
                  {repo.description}
                </p>
                
                {/* Stats and Language */}
                <div className="flex items-center gap-4 ml-5">
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-lg backdrop-blur-sm ${
                    darkMode 
                      ? 'bg-white/[0.05] border border-white/15' 
                      : 'bg-black/[0.05] border border-black/15'
                  }`}>
                    <Star size={12} />
                    <span className="font-mono text-xs">{repo.stars}</span>
                  </div>
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-lg backdrop-blur-sm ${
                    darkMode 
                      ? 'bg-white/[0.05] border border-white/15' 
                      : 'bg-black/[0.05] border border-black/15'
                  }`}>
                    <GitFork size={12} />
                    <span className="font-mono text-xs">{repo.forks}</span>
                  </div>
                  <div className={`px-2 py-1 rounded-md backdrop-blur-sm font-mono text-xs ${
                    darkMode 
                      ? 'bg-white/[0.05] border border-white/10 text-white/60' 
                      : 'bg-black/[0.05] border border-black/10 text-black/60'
                  }`}>
                    {repo.language}
                  </div>
                </div>
              </div>
            ))}
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
      
      <style jsx>{`
        @keyframes marquee-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        
        .animate-marquee-vertical {
          animation: marquee-vertical 20s linear infinite;
        }
        
        .animate-marquee-vertical:hover {
          animation-play-state: paused;
        }
        
        @media (max-width: 768px) {
          .animate-marquee-vertical {
            animation-duration: 15s;
          }
        }
      `}</style>
    </div>
  );
}