import { Award } from 'lucide-react';
import { portfolioData } from '@/data/data';

interface AchievementsWidgetProps {
  darkMode: boolean;
}

export default function AchievementsWidget({ darkMode }: AchievementsWidgetProps) {
  const { achievements } = portfolioData;

  return (
    <div className={`w-full h-auto md:col-span-2 md:h-56 lg:h-64 rounded-2xl p-6 transition-colors backdrop-blur-sm border overflow-hidden ${
      darkMode 
        ? 'bg-white/10 border-white/20 text-white' 
        : 'bg-black/10 border-black/20 text-black'
    }`}>
      <div className="flex items-center mb-4">
        <Award size={20} className="mr-2" />
        <h3 className="font-mono text-sm font-semibold">Achievements</h3>
      </div>
      
      <div className="space-y-4 overflow-y-auto h-[calc(100%-60px)]">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <h4 className="font-mono text-sm font-semibold">{achievement.title}</h4>
            </div>
            <p className={`font-mono text-xs ${darkMode ? 'text-white/70' : 'text-black/70'}`}>
              {achievement.organization}
            </p>
            <p className={`font-mono text-xs ${darkMode ? 'text-white/60' : 'text-black/60'}`}>
              {achievement.description}
            </p>
            <span className={`font-mono text-xs ${darkMode ? 'text-white/50' : 'text-black/50'}`}>
              {achievement.year}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}