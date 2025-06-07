// components/widgets/ContactWidget.tsx
import { portfolioData } from '@/data/data';

export default function ContactWidget() {
  const socialLinks = [
    { name: 'GitHub', url: portfolioData.social.github, icon: '□' },
    { name: 'LinkedIn', url: portfolioData.social.linkedin, icon: '◐' },
    { name: 'Twitter', url: portfolioData.social.twitter, icon: '○' }
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-4 h-4 border border-gray-400 rounded-sm flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
        </div>
        <h3 className="font-mono text-sm font-semibold text-gray-900">Contact</h3>
      </div>
      
      <div className="flex-1 space-y-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-100 border border-gray-200 rounded flex items-center justify-center">
              <span className="font-mono text-xs">@</span>
            </div>
            <div>
              <p className="font-mono text-xs text-gray-600">Email</p>
              <p className="font-mono text-sm text-gray-900">{portfolioData.personal.email}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-100 border border-gray-200 rounded flex items-center justify-center">
              <div className="w-3 h-3 border border-gray-400 rounded-full"></div>
            </div>
            <div>
              <p className="font-mono text-xs text-gray-600">Status</p>
              <p className="font-mono text-sm text-green-600">Available</p>
            </div>
          </div>
        </div>
        
        <div className="pt-4 border-t border-gray-200">
          <p className="font-mono text-xs text-gray-600 mb-3">Social Links</p>
          <div className="space-y-2">
            {socialLinks.map((link) => (
              <div key={link.name} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gray-100 border border-gray-200 rounded flex items-center justify-center">
                  <span className="font-mono text-xs">{link.icon}</span>
                </div>
                <span className="font-mono text-sm text-gray-700">{link.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <button className="w-full py-2 bg-gray-900 text-white font-mono text-sm rounded hover:bg-gray-800 transition-colors">
          Get in touch
        </button>
      </div>
    </div>
  );
}