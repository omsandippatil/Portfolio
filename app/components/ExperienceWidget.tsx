// components/widgets/ExperienceWidget.tsx
import { portfolioData } from '@/data/data';

export default function ExperienceWidget() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-4 h-4 border border-gray-400 rounded-sm">
          <div className="w-full h-1 bg-gray-400 mt-1.5"></div>
        </div>
        <h3 className="font-mono text-sm font-semibold text-gray-900">Experience</h3>
      </div>
      
      <div className="flex-1 space-y-4">
        {portfolioData.experience.map((exp, index) => (
          <div key={exp.id} className="relative">
            {index !== portfolioData.experience.length - 1 && (
              <div className="absolute left-4 top-8 w-px h-full bg-gray-200"></div>
            )}
            
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              </div>
              
              <div className="flex-1 pb-4">
                <div className="flex items-start justify-between mb-1">
                  <h4 className="font-mono text-sm font-medium text-gray-900">
                    {exp.position}
                  </h4>
                  <span className="font-mono text-xs text-gray-500">
                    {exp.duration}
                  </span>
                </div>
                
                <p className="font-mono text-xs text-gray-600 mb-2">
                  {exp.company}
                </p>
                
                <p className="font-mono text-xs text-gray-700">
                  {exp.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <button className="w-full text-center font-mono text-xs text-gray-600 hover:text-gray-900">
          Download Resume →
        </button>
      </div>
    </div>
  );
}