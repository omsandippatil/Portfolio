import { GitBranch, Star, GitFork } from 'lucide-react';
import { portfolioData } from '@/data/data';

interface OpenSourceWidgetProps {
  darkMode: boolean;
}

export default function OpenSourceWidget({ darkMode }: OpenSourceWidgetProps) {
  const { openSource } = portfolioData;

  return (
    <div className={`col-span-1 h-64 md:h-72 lg:h-80 rounded-2xl p-6 transition-colors backdrop-blur-sm border overflow-hidden ${
      darkMode 
        ? 'bg-white/10 border-white/20 text-white' 
        : 'bg-black/10 border-black/20 text-black'
    }`}>
      <div className="flex items-center mb-4">
        <GitBranch size={20} className="mr-2" />
        <h3 className="font-mono text-sm font-semibold">Open Source</h3>
      </div>
      
      <div className="space-y-4 overflow-y-auto h-[calc(100%-60px)]">
        {openSource.slice(0, 2).map((repo) => (
          <div key={repo.id} className="space-y-2">
            <h4 className="font-mono text-sm font-semibold">{repo.name}</h4>
            <p className={`font-mono text-xs ${darkMode ? 'text-white/70' : 'text-black/70'}`}>
              {repo.description}
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star size={12} />
                <span className="font-mono text-xs">{repo.stars}</span>
              </div>
              <div className="flex items-center gap-1">
                <GitFork size={12} />
                <span className="font-mono text-xs">{repo.forks}</span>
              </div>
            </div>
            <span className={`font-mono text-xs ${darkMode ? 'text-white/60' : 'text-black/60'}`}>
              {repo.language}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}