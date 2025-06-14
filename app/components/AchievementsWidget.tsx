import React, { useState, useRef, useEffect } from 'react';
import { Award } from 'lucide-react';
import { portfolioData } from '@/data/data';

interface AchievementsWidgetProps {
  darkMode?: boolean;
}

export default function AchievementsWidget({ darkMode = false }: AchievementsWidgetProps) {
  const { achievements } = portfolioData;
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const scrollPositionRef = useRef(0);
  const isTransitioningRef = useRef(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlowPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const startAutoScroll = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    const scrollSpeed = 0.8; // Smooth consistent speed
    
    const animate = () => {
      if (!scrollContainerRef.current || !contentRef.current || isHovered) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      
      const container = scrollContainerRef.current;
      const content = contentRef.current;
      
      const containerHeight = container.clientHeight;
      const contentHeight = content.scrollHeight;
      const maxScroll = contentHeight - containerHeight;
      
      if (maxScroll <= 0) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      
      // Increment scroll position
      scrollPositionRef.current += scrollSpeed;
      
      // Check if we've reached the end
      if (scrollPositionRef.current >= maxScroll) {
        // Smoothly transition back to top
        if (!isTransitioningRef.current) {
          isTransitioningRef.current = true;
          
          // Quick fade transition
          container.style.transition = 'opacity 200ms ease-out';
          container.style.opacity = '0.7';
          
          setTimeout(() => {
            // Reset scroll position
            scrollPositionRef.current = 0;
            container.scrollTop = 0;
            
            // Fade back in
            setTimeout(() => {
              container.style.opacity = '1';
              setTimeout(() => {
                container.style.transition = '';
                isTransitioningRef.current = false;
              }, 200);
            }, 50);
          }, 100);
        }
      } else {
        container.scrollTop = scrollPositionRef.current;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
  };

  const stopAutoScroll = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = undefined;
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    if (achievements && achievements.length > 0) {
      const timer = setTimeout(() => {
        startAutoScroll();
      }, 500); // Small delay for smooth start

      return () => {
        clearTimeout(timer);
        stopAutoScroll();
      };
    }
  }, [achievements]);

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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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
            <Award size={18} className={`${darkMode ? 'text-white' : 'text-black'}`} />
          </div>
          <h3 className="font-mono text-lg font-bold tracking-tight">Achievements</h3>
        </div>
        
        {/* Scrollable content section */}
        <div 
          ref={scrollContainerRef}
          className="relative z-10 h-[calc(100%-64px)] overflow-y-auto"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <div 
            ref={contentRef}
            className="space-y-4 pb-8"
          >
            {achievements && achievements.length > 0 ? (
              achievements.map((achievement, index) => (
                <div 
                  key={`${achievement.id || achievement.title}-${index}`} 
                  className={`
                    relative p-4 rounded-2xl transition-all duration-300
                    ${darkMode 
                      ? 'bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] hover:border-white/20' 
                      : 'bg-black/[0.03] border border-black/10 hover:bg-black/[0.05] hover:border-black/20'
                    }
                  `}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 mt-1 flex-shrink-0 shadow-lg" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-mono text-sm font-bold mb-1">
                        {achievement.title}
                      </h4>
                      <p className={`font-mono text-xs font-medium mb-2 ${
                        darkMode ? 'text-white/60' : 'text-black/60'
                      }`}>
                        {achievement.organization} • {achievement.year}
                      </p>
                      <p className={`font-mono text-sm leading-relaxed ${
                        darkMode ? 'text-white/80' : 'text-black/80'
                      }`}>
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <Award size={32} className={`mx-auto mb-2 ${darkMode ? 'text-white/30' : 'text-black/30'}`} />
                  <p className={`font-mono text-sm ${darkMode ? 'text-white/60' : 'text-black/60'}`}>
                    No achievements data available
                  </p>
                </div>
              </div>
            )}
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
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}