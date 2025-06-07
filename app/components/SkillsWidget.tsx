// components/widgets/SkillsWidget.tsx
import { portfolioData } from '@/data/data';

export default function SkillsWidget() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-4 h-4 border border-gray-400 rounded-sm flex items-center justify-center">
          <div className="w-2 h-2 border border-gray-400"></div>
        </div>
        <h3 className="font-mono text-sm font-semibold text-gray-900">Skills</h3>
      </div>
      
      <div className="flex-1">
        <div className="grid grid-cols-2 gap-2">
          {portfolioData.skills.map((skill, index) => (
            <div 
              key={skill}
              className="px-3 py-2 bg-gray-50 border border-gray-200 rounded text-center"
            >
              <span className="font-mono text-xs text-gray-700">{skill}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-xs text-gray-500 font-mono">
          <span>Proficiency</span>
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}