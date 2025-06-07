// components/widgets/AboutWidget.tsx
import { portfolioData } from '@/data/data';

export default function AboutWidget() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 h-full flex flex-col">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
          <span className="text-white font-mono text-lg">AC</span>
        </div>
        <div>
          <h2 className="font-mono text-lg font-semibold text-gray-900">
            {portfolioData.personal.name}
          </h2>
          <p className="font-mono text-sm text-gray-600">
            {portfolioData.personal.title}
          </p>
        </div>
      </div>
      
      <p className="font-mono text-sm text-gray-700 mb-4 flex-1">
        {portfolioData.personal.bio}
      </p>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <div className="w-4 h-4 border border-gray-400 rounded-sm flex items-center justify-center">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          </div>
          <span className="font-mono">{portfolioData.personal.location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <div className="w-4 h-4 border border-gray-400 rounded-sm flex items-center justify-center">
            <div className="w-2 h-1 bg-gray-400"></div>
          </div>
          <span className="font-mono">{portfolioData.personal.email}</span>
        </div>
      </div>
    </div>
  );
}