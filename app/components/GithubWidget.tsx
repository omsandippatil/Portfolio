import { Github, GitBranch, Users, UserPlus } from 'lucide-react';
import { portfolioData } from '@/data/data';

interface GitHubWidgetProps {
  darkMode: boolean;
}

export default function GitHubWidget({ darkMode }: GitHubWidgetProps) {
  const { github } = portfolioData;

  return (
    <div className={`col-span-1 h-48 md:h-56 lg:h-64 rounded-2xl p-6 transition-colors backdrop-blur-sm border ${
      darkMode 
        ? 'bg-white/10 border-white/20 text-white' 
        : 'bg-black/10 border-black/20 text-black'
    }`}>
      <div className="flex items-center mb-4">
        <Github size={20} className="mr-2" />
        <h3 className="font-mono text-sm font-semibold">GitHub</h3>
      </div>
      
      <div className="space-y-4">
        <div className="text-center">
          <h4 className="font-mono text-lg font-bold">{github.contributions}</h4>
          <p className={`font-mono text-xs ${darkMode ? 'text-white/70' : 'text-black/70'}`}>
            Contributions
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <GitBranch size={14} className="mr-1" />
              <span className="font-mono text-sm font-semibold">{github.repos}</span>
            </div>
            <p className={`font-mono text-xs ${darkMode ? 'text-white/70' : 'text-black/70'}`}>
              Repos
            </p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Users size={14} className="mr-1" />
              <span className="font-mono text-sm font-semibold">{github.followers}</span>
            </div>
            <p className={`font-mono text-xs ${darkMode ? 'text-white/70' : 'text-black/70'}`}>
              Followers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}