// app/page.tsx
import AboutWidget from './components/AboutWidget';
import MusicWidget from './components/MusicWidget';
import GitHubWidget from './components/GithubWidget';
import MapWidget from './components/MapWidget';
import ProjectsWidget from './components/ProjectsWidget';
import SkillsWidget from './components/SkillsWidget';
import ExperienceWidget from './components/ExperienceWidget';
import ContactWidget from './components/ContactWidget';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-mono text-2xl font-bold text-gray-900 mb-2">
            Developer Portfolio
          </h1>
          <p className="font-mono text-sm text-gray-600">
            Crafting digital experiences with modern technologies
          </p>
        </div>

        {/* Widget Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
          {/* Row 1 */}
          <div className="lg:col-span-2 h-64">
            <AboutWidget />
          </div>
          <div className="h-64">
            <MusicWidget />
          </div>
          <div className="h-64">
            <GitHubWidget />
          </div>
          
          {/* Row 2 */}
          <div className="h-64">
            <MapWidget />
          </div>
          <div className="lg:col-span-2 h-64">
            <ProjectsWidget />
          </div>
          <div className="h-64">
            <SkillsWidget />
          </div>
          
          {/* Row 3 */}
          <div className="lg:col-span-2 h-64">
            <ExperienceWidget />
          </div>
          <div className="lg:col-span-2 h-64">
            <ContactWidget />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center">
          <p className="font-mono text-xs text-gray-500">
            Built with Next.js & Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
}