import { Music, Play, Pause } from 'lucide-react';
import { portfolioData } from '@/data/data';

interface MusicWidgetProps {
  darkMode: boolean;
}

export default function MusicWidget({ darkMode }: MusicWidgetProps) {
  const { currentlyPlaying } = portfolioData;

  return (
    <div className={`col-span-1 h-48 md:h-56 lg:h-64 rounded-2xl p-6 transition-colors backdrop-blur-sm border ${
      darkMode 
        ? 'bg-white/10 border-white/20 text-white' 
        : 'bg-black/10 border-black/20 text-black'
    }`}>
      <div className="flex items-center mb-4">
        <Music size={20} className="mr-2" />
        <h3 className="font-mono text-sm font-semibold">Now Playing</h3>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-center mb-4">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
            darkMode ? 'bg-white/20' : 'bg-black/20'
          }`}>
            {currentlyPlaying.isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </div>
        </div>
        
        <div className="text-center space-y-2">
          <h4 className="font-mono text-sm font-semibold">{currentlyPlaying.song}</h4>
          <p className={`font-mono text-xs ${darkMode ? 'text-white/70' : 'text-black/70'}`}>
            {currentlyPlaying.artist}
          </p>
          <p className={`font-mono text-xs ${darkMode ? 'text-white/60' : 'text-black/60'}`}>
            {currentlyPlaying.album}
          </p>
        </div>
        
        <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-white/20' : 'bg-black/20'}`}>
          <div className="w-1/3 h-full bg-green-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}