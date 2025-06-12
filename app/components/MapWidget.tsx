import { MapPin } from 'lucide-react';
import { portfolioData } from '@/data/data';

interface MapWidgetProps {
  darkMode: boolean;
}

export default function MapWidget({ darkMode }: MapWidgetProps) {
  const { personal } = portfolioData;

  return (
    <div className={`col-span-1 h-48 md:h-56 lg:h-64 rounded-2xl p-6 transition-colors backdrop-blur-sm border ${
      darkMode 
        ? 'bg-white/10 border-white/20 text-white' 
        : 'bg-black/10 border-black/20 text-black'
    }`}>
      <div className="flex items-center mb-4">
        <MapPin size={20} className="mr-2" />
        <h3 className="font-mono text-sm font-semibold">Location</h3>
      </div>
      
      <div className="flex flex-col items-center justify-center h-[calc(100%-60px)]">
        <div className={`w-16 h-16 rounded-full mb-4 flex items-center justify-center ${
          darkMode ? 'bg-white/20' : 'bg-black/20'
        }`}>
          <MapPin size={24} />
        </div>
        
        <div className="text-center">
          <h4 className="font-mono text-sm font-semibold">{personal.location}</h4>
          <p className={`font-mono text-xs mt-2 ${darkMode ? 'text-white/70' : 'text-black/70'}`}>
            Available for remote work
          </p>
        </div>
      </div>
    </div>
  );
}