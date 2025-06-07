// components/widgets/GitHubWidget.tsx
import { portfolioData } from '@/data/data';

export default function GitHubWidget() {
  const { github } = portfolioData;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 border-2 border-gray-900 rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-gray-900 rounded-sm"></div>
        </div>
        <div>
          <h3 className="font-mono text-sm font-semibold text-gray-900">GitHub</h3>
          <p className="font-mono text-xs text-gray-600">@{github.username}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center">
          <p className="font-mono text-lg font-semibold text-gray-900">{github.repos}</p>
          <p className="font-mono text-xs text-gray-600">Repositories</p>
        </div>
        <div className="text-center">
          <p className="font-mono text-lg font-semibold text-gray-900">{github.followers}</p>
          <p className="font-mono text-xs text-gray-600">Followers</p>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-xs text-gray-600">Contributions</span>
          <span className="font-mono text-xs font-semibold text-gray-900">{github.contributions}</span>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 91 }, (_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-sm ${
                Math.random() > 0.7 ? 'bg-gray-900' :
                Math.random() > 0.5 ? 'bg-gray-600' :
                Math.random() > 0.3 ? 'bg-gray-400' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>
      
      <div className="flex items-center justify-between text-xs text-gray-500 font-mono">
        <span>Less</span>
        <span>More</span>
      </div>
    </div>
  );
}