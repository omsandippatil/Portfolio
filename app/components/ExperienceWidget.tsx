import { useState, useEffect, useRef } from 'react';
import { Briefcase } from 'lucide-react';
import { portfolioData } from '@/data/data';

interface ExperienceWidgetProps {
  darkMode: boolean;
}

export default function ExperienceWidget({ darkMode }: ExperienceWidgetProps) {
  const { experience } = portfolioData;
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
    let scrollSpeed = 0.5; // Pixels per frame
    let currentScroll = 0;

    const smoothScroll = () => {
      if (!scrollContainer) return;

      currentScroll += scrollSpeed;
      
      // Check if we've scrolled past the content height
      const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      
      if (currentScroll >= maxScroll) {
        currentScroll = 0; // Reset to top for seamless loop
      }
      
      scrollContainer.scrollTop = currentScroll;
      animationId = requestAnimationFrame(smoothScroll);
    };

    // Start animation after a brief delay
    const startAnimation = () => {
      animationId = requestAnimationFrame(smoothScroll);
    };

    const timer = setTimeout(startAnimation, 1000);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(smoothScroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animationId);
      scrollContainer?.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Duplicate content for seamless loop
  const duplicatedExperience = [...experience, ...experience];

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
        <div className="relative z-10 flex items-center mb-6">
          <div className={`p-2 rounded-xl backdrop-blur-sm mr-3 ${
            darkMode 
              ? 'bg-white/10 border border-white/20' 
              : 'bg-black/10 border border-black/20'
          }`}>
            <Briefcase size={18} className={`${darkMode ? 'text-white' : 'text-black'}`} />
          </div>
          <h3 className="font-mono text-lg font-bold tracking-tight">Experience</h3>
        </div>
        
        {/* Scrolling content section */}
        <div 
          ref={scrollContainerRef}
          className="relative z-10 h-[calc(100%-80px)] overflow-hidden"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitScrollbar: 'none'
          }}
        >
          <div className="space-y-6 pb-6">
            {duplicatedExperience.map((exp, index) => (
              <div key={`${exp.id}-${index}`} className="space-y-3 flex-shrink-0">
                {/* Company name with enhanced styling */}
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                    darkMode 
                      ? 'bg-gradient-to-r from-blue-400 to-cyan-400' 
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                  }`} />
                  <h4 className="font-mono text-sm font-bold leading-tight">
                    {exp.company}
                  </h4>
                </div>
                
                {/* Position */}
                <p className={`font-mono text-xs font-medium leading-relaxed ml-5 ${
                  darkMode ? 'text-white/80' : 'text-black/80'
                }`}>
                  {exp.position}
                </p>
                
                {/* Description */}
                <p className={`font-mono text-xs leading-relaxed ml-5 ${
                  darkMode ? 'text-white/70' : 'text-black/70'
                }`}>
                  {exp.description}
                </p>
                
                {/* Duration with enhanced styling */}
                <div className={`flex items-center ml-5 ${
                  darkMode ? 'text-white/60' : 'text-black/60'
                }`}>
                  <div className={`px-2 py-1 rounded-lg backdrop-blur-sm ${
                    darkMode 
                      ? 'bg-white/[0.05] border border-white/15' 
                      : 'bg-black/[0.05] border border-black/15'
                  }`}>
                    <span className="font-mono text-xs font-medium">
                      {exp.duration}
                    </span>
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
    </div>
  );
}