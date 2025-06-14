import { useState, useEffect, useRef } from 'react';
import { Code, ExternalLink } from 'lucide-react';
import { portfolioData } from '@/data/data';

interface ProjectsWidgetProps {
  darkMode: boolean;
}

export default function ProjectsWidget({ darkMode }: ProjectsWidgetProps) {
  const { projects } = portfolioData;
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlowPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollTop = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      scrollTop += scrollSpeed;
      
      const scrollHeight = scrollContainer.scrollHeight;
      const clientHeight = scrollContainer.clientHeight;
      const maxScroll = scrollHeight - clientHeight;
      
      if (scrollTop >= maxScroll) {
        scrollTop = 0;
      }
      
      scrollContainer.scrollTop = scrollTop;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [projects]);

  return (
    <div className={`
      relative group w-full h-auto
      sm:col-span-3 sm:h-64 
      lg:h-72
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
            <Code size={18} className={`${darkMode ? 'text-white' : 'text-black'}`} />
          </div>
          <h3 className="font-mono text-lg font-bold tracking-tight">Projects</h3>
        </div>
        
        {/* Projects content section */}
        <div 
          ref={scrollContainerRef}
          className="relative z-10 space-y-4 h-[calc(100%-80px)] overflow-hidden"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitScrollbar: 'none'
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          {/* Duplicate projects for seamless loop */}
          {[...projects, ...projects].map((project, index) => (
            <div key={`${project.id}-${index}`} className="space-y-3 mb-6">
              {/* Project header */}
              <div className="flex items-center justify-between">
                <h4 className="font-mono text-sm font-bold">{project.title}</h4>
                <div className={`p-1.5 rounded-lg backdrop-blur-sm ${
                  darkMode 
                    ? 'bg-white/[0.05] border border-white/15' 
                    : 'bg-black/[0.05] border border-black/15'
                }`}>
                  <ExternalLink size={12} className={darkMode ? 'text-white/60' : 'text-black/60'} />
                </div>
              </div>
              
              {/* Project description */}
              <p className={`font-mono text-xs leading-relaxed ${
                darkMode ? 'text-white/70' : 'text-black/70'
              }`}>
                {project.description}
              </p>
              
              {/* Tech stack */}
              <div className="flex flex-wrap gap-1">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={`${tech}-${index}-${techIndex}`}
                    className={`font-mono text-xs px-2 py-1 rounded-lg backdrop-blur-sm border font-medium ${
                      darkMode 
                        ? 'bg-white/10 border-white/20 text-white/80' 
                        : 'bg-black/10 border-black/20 text-black/80'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Project status */}
              <div className={`flex items-center space-x-2 font-mono text-xs font-medium ${
                project.status === 'Live' 
                  ? 'text-green-500' 
                  : darkMode 
                    ? 'text-white/60' 
                    : 'text-black/60'
              }`}>
                <div className={`w-2 h-2 rounded-full ${
                  project.status === 'Live' 
                    ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]' 
                    : darkMode 
                      ? 'bg-white/40' 
                      : 'bg-black/40'
                }`} />
                <span>{project.status}</span>
              </div>
            </div>
          ))}
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