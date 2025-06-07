// components/widgets/ProjectsWidget.tsx
import { portfolioData } from '@/data/data';

export default function ProjectsWidget() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-mono text-sm font-semibold text-gray-900">Projects</h3>
        <div className="w-4 h-4 border border-gray-400 rounded-sm flex items-center justify-center">
          <div className="w-2 h-0.5 bg-gray-400"></div>
          <div className="w-0.5 h-2 bg-gray-400 absolute"></div>
        </div>
      </div>
      
      <div className="flex-1 space-y-4 overflow-y-auto">
        {portfolioData.projects.slice(0, 3).map((project) => (
          <div key={project.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-mono text-sm font-medium text-gray-900">
                {project.title}
              </h4>
              <span className={`px-2 py-1 text-xs font-mono rounded-full ${
                project.status === 'Live' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {project.status}
              </span>
            </div>
            
            <p className="font-mono text-xs text-gray-600 mb-3">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-1">
              {project.tech.slice(0, 3).map((tech) => (
                <span 
                  key={tech}
                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-mono rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <button className="w-full text-center font-mono text-xs text-gray-600 hover:text-gray-900">
          View all projects →
        </button>
      </div>
    </div>
  );
}