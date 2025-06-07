// components/widgets/MusicWidget.tsx
import { portfolioData } from '@/data/data';

export default function MusicWidget() {
  const { currentlyPlaying } = portfolioData;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-mono text-sm font-semibold text-gray-900">Now Playing</h3>
        <div className="flex items-center gap-1">
          {currentlyPlaying.isPlaying && (
            <>
              <div className="w-1 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div className="w-1 h-4 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
              <div className="w-1 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            </>
          )}
        </div>
      </div>
      
      <div className="flex-1 flex flex-col justify-center">
        <div className="w-full h-20 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center">
            <div className="w-0 h-0 border-l-[6px] border-l-gray-300 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-1"></div>
          </div>
        </div>
        
        <div className="space-y-1">
          <p className="font-mono text-sm font-medium text-gray-900 truncate">
            {currentlyPlaying.song}
          </p>
          <p className="font-mono text-xs text-gray-600 truncate">
            {currentlyPlaying.artist}
          </p>
          <p className="font-mono text-xs text-gray-500 truncate">
            {currentlyPlaying.album}
          </p>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex-1 h-1 bg-gray-200 rounded-full">
            <div className="w-1/3 h-full bg-gray-900 rounded-full"></div>
          </div>
        </div>
        <div className="flex justify-between text-xs text-gray-500 font-mono">
          <span>1:23</span>
          <span>3:47</span>
        </div>
      </div>
    </div>
  );
}