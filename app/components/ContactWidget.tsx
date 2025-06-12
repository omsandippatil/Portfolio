import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { portfolioData } from '@/data/data';

interface ContactWidgetProps {
  darkMode: boolean;
}

export default function ContactWidget({ darkMode }: ContactWidgetProps) {
  const { personal, social } = portfolioData;

  const socialLinks = [
    { icon: Github, url: social.github, label: 'GitHub' },
    { icon: Linkedin, url: social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, url: social.twitter, label: 'Twitter' },
  ];

  return (
    <div className={`h-full rounded-2xl p-6 transition-colors backdrop-blur-sm border ${
      darkMode 
        ? 'bg-white/10 border-white/20 text-white' 
        : 'bg-black/10 border-black/20 text-black'
    }`}>
      <div className="flex items-center mb-4">
        <Mail size={20} className="mr-2" />
        <h3 className="font-mono text-sm font-semibold">Contact</h3>
      </div>
      
      <div className="space-y-6">
        <div className="text-center">
          <h4 className="font-mono text-lg font-bold mb-2">Let's Connect</h4>
          <p className={`font-mono text-sm ${darkMode ? 'text-white/70' : 'text-black/70'}`}>
            {personal.email}
          </p>
        </div>
        
        <div className="flex justify-center space-x-4">
          {socialLinks.map(({ icon: Icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-colors ${
                darkMode 
                  ? 'bg-white/20 hover:bg-white/30 text-white' 
                  : 'bg-black/20 hover:bg-black/30 text-black'
              }`}
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
        
        <div className="text-center">
          <p className={`font-mono text-xs ${darkMode ? 'text-white/60' : 'text-black/60'}`}>
            Available for freelance projects and collaborations
          </p>
        </div>
      </div>
    </div>
  );
}