'use client';

import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import AboutWidget from './components/AboutWidget';
import MusicWidget from './components/MusicWidget';
import GitHubWidget from './components/GithubWidget';
import MapWidget from './components/MapWidget';
import ProjectsWidget from './components/ProjectsWidget';
import SkillsWidget from './components/SkillsWidget';
import ExperienceWidget from './components/ExperienceWidget';
import ContactWidget from './components/ContactWidget';
import AchievementsWidget from './components/AchievementsWidget';
import OpenSourceWidget from './components/OpenSourceWidget';
import EducationWidget from './components/EducationWidget';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen transition-all duration-500 ease-out ${
      darkMode ? 'bg-black' : 'bg-white'
    } p-3 sm:p-4 md:p-6 lg:p-8`}>
      <div className="max-w-7xl mx-auto">
        {/* Minimal Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className={`font-mono text-sm font-medium transition-colors duration-300 ${
            darkMode ? 'text-white/60' : 'text-black/60'
          }`}>
            Portfolio
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 ${
              darkMode 
                ? 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/15' 
                : 'bg-black/10 backdrop-blur-md border border-black/20 text-black hover:bg-black/15'
            }`}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Dynamic Widget Grid */}
        <div className="space-y-3 sm:space-y-4 md:space-y-6">
          
          {/* Mobile Layout - About takes full width first */}
          <div className="block sm:hidden">
            <div className="mb-3">
              <AboutWidget darkMode={darkMode} />
            </div>
            
            {/* Row 1: Music + GitHub */}
            <div className="grid grid-cols-2 gap-3 mb-3 h-48">
              <MusicWidget darkMode={darkMode} />
              <GitHubWidget darkMode={darkMode} />
            </div>
            
            {/* Row 2: Skills + Map */}
            <div className="grid grid-cols-2 gap-3 mb-3 h-48">
              <SkillsWidget darkMode={darkMode} />
              <MapWidget darkMode={darkMode} />
            </div>
            
            {/* Row 3: Achievements (full width) */}
            <div className="mb-3">
              <AchievementsWidget darkMode={darkMode} />
            </div>
            
            {/* Row 4: Projects (full width) */}
            <div className="mb-3">
              <ProjectsWidget darkMode={darkMode} />
            </div>
            
            {/* Row 5: Education (full width) */}
            <div className="mb-3">
              <EducationWidget darkMode={darkMode} />
            </div>
            
            {/* Row 6: Experience + Open Source */}
            <div className="grid grid-cols-2 gap-3 mb-3 h-64">
              <ExperienceWidget darkMode={darkMode} />
              <OpenSourceWidget darkMode={darkMode} />
            </div>
            
            {/* Row 7: Contact (full width) */}
            <div>
              <ContactWidget darkMode={darkMode} />
            </div>
          </div>

          {/* Desktop/Tablet Layout */}
          <div className="hidden sm:block">
            
            {/* Row 1: About (rectangle) + Music & GitHub (squares) */}
            <div className="grid grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-3 sm:mb-4 md:mb-6 h-48 sm:h-56 md:h-64">
              <div className="col-span-2">
                <AboutWidget darkMode={darkMode} />
              </div>
              <div className="col-span-1">
                <MusicWidget darkMode={darkMode} />
              </div>
              <div className="col-span-1">
                <GitHubWidget darkMode={darkMode} />
              </div>
            </div>

            {/* Row 2: Skills & Map (squares) + Achievements (rectangle) */}
            <div className="grid grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-3 sm:mb-4 md:mb-6 h-48 sm:h-56 md:h-64">
              <div className="col-span-1">
                <SkillsWidget darkMode={darkMode} />
              </div>
              <div className="col-span-1">
                <MapWidget darkMode={darkMode} />
              </div>
              <div className="col-span-2">
                <AchievementsWidget darkMode={darkMode} />
              </div>
            </div>

            {/* Row 3: Projects + Education */}
            <div className="grid grid-cols-5 gap-3 sm:gap-4 md:gap-6 mb-3 sm:mb-4 md:mb-6 h-56 sm:h-64 md:h-72">
              <div className="col-span-3">
                <ProjectsWidget darkMode={darkMode} />
              </div>
              <div className="col-span-2">
                <EducationWidget darkMode={darkMode} />
              </div>
            </div>

            {/* Row 4: Experience + Open Source */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-3 sm:mb-4 md:mb-6 h-64 sm:h-72 md:h-80">
              <div className="col-span-1">
                <ExperienceWidget darkMode={darkMode} />
              </div>
              <div className="col-span-1">
                <OpenSourceWidget darkMode={darkMode} />
              </div>
            </div>

            {/* Row 5: Contact (full width) */}
            <div className="mb-3 sm:mb-4 md:mb-6">
              <ContactWidget darkMode={darkMode} />
            </div>

          </div>

        </div>

        {/* Footer */}
        <footer className="mt-6 text-center">
          <p className={`font-mono text-xs transition-colors duration-300 ${
            darkMode ? 'text-white/40' : 'text-black/40'
          }`}>
            Built with Next.js & Tailwind
          </p>
        </footer>
      </div>
    </div>
  );
}