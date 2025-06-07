// components/widgets/MapWidget.tsx
import { portfolioData } from '@/data/data';

export default function MapWidget() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden h-full flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-mono text-sm font-semibold text-gray-900">Location</h3>
        <p className="font-mono text-xs text-gray-600">{portfolioData.personal.location}</p>
      </div>
      
      <div className="flex-1 relative bg-gray-50">
        {/* Mock Map Interface */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Grid pattern to simulate map */}
            <div className="grid grid-cols-8 gap-1 opacity-20">
              {Array.from({ length: 64 }, (_, i) => (
                <div key={i} className="w-4 h-4 border border-gray-300"></div>
              ))}
            </div>
            
            {/* Location pin */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="w-1 h-3 bg-red-500 mx-auto"></div>
            </div>
          </div>
        </div>
        
        {/* Map controls */}
        <div className="absolute top-4 right-4 space-y-1">
          <button className="w-8 h-8 bg-white border border-gray-300 rounded flex items-center justify-center shadow-sm">
            <span className="font-mono text-sm">+</span>
          </button>
          <button className="w-8 h-8 bg-white border border-gray-300 rounded flex items-center justify-center shadow-sm">
            <span className="font-mono text-sm">-</span>
          </button>
        </div>
      </div>
      
      <div className="p-3 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="font-mono text-xs text-gray-600">Available for remote work</span>
        </div>
      </div>
    </div>
  );
}