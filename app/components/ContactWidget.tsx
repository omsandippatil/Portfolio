import { useState } from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { portfolioData } from '@/data/data';

interface ContactWidgetProps {
  darkMode: boolean;
}

export default function ContactWidget({ darkMode }: ContactWidgetProps) {
  const { personal, social } = portfolioData;
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlowPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const socialLinks = [
    { icon: Github, url: social.github, label: 'GitHub' },
    { icon: Linkedin, url: social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, url: social.twitter, label: 'Twitter' },
  ];

  return (
    <div className="relative group w-full h-full">
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
            <Mail size={18} className={`${darkMode ? 'text-white' : 'text-black'}`} />
          </div>
          <h3 className="font-mono text-lg font-bold tracking-tight">Contact</h3>
        </div>
        
        {/* Content section */}
        <div className="relative z-10 space-y-6">
          {/* Main heading and email */}
          <div className="text-center">
            <h4 className="font-mono text-xl font-bold mb-3">Let's Connect</h4>
            <div className={`inline-block px-4 py-2 rounded-xl backdrop-blur-sm ${
              darkMode 
                ? 'bg-white/[0.08] border border-white/20' 
                : 'bg-black/[0.08] border border-black/20'
            }`}>
              <p className={`font-mono text-sm font-medium ${
                darkMode ? 'text-white/80' : 'text-black/80'
              }`}>
                {personal.email}
              </p>
            </div>
          </div>
          
          {/* Social links with enhanced glass styling */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group/social relative p-3 rounded-xl backdrop-blur-sm
                  transition-all duration-300 ease-out
                  hover:scale-110 hover:-translate-y-1
                  ${darkMode 
                    ? 'bg-white/[0.12] border border-white/25 text-white hover:bg-white/[0.18] hover:border-white/35 shadow-lg hover:shadow-white/10' 
                    : 'bg-black/[0.12] border border-black/25 text-black hover:bg-black/[0.18] hover:border-black/35 shadow-lg hover:shadow-black/20'
                  }
                `}
                aria-label={label}
              >
                {/* Inner glow for social icons */}
                <div className={`absolute inset-0 rounded-xl opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 ${
                  darkMode 
                    ? 'shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]' 
                    : 'shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]'
                }`} />
                <Icon size={20} className="relative z-10" />
              </a>
            ))}
          </div>
          
          {/* Availability notice */}
          <div className="text-center">
            <div className={`inline-block px-3 py-1.5 rounded-lg backdrop-blur-sm ${
              darkMode 
                ? 'bg-white/[0.05] border border-white/15' 
                : 'bg-black/[0.05] border border-black/15'
            }`}>
              <p className={`font-mono text-xs font-medium ${
                darkMode ? 'text-white/60' : 'text-black/60'
              }`}>
                Available for freelance projects and collaborations
              </p>
            </div>
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