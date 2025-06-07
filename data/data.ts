// data.ts
export const portfolioData = {
  personal: {
    name: "Alex Chen",
    title: "Full Stack Developer",
    bio: "Crafting digital experiences with modern technologies",
    location: "San Francisco, CA",
    email: "alex@example.com",
    avatar: "/avatar.jpg"
  },
  
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern shopping experience with Next.js",
      tech: ["Next.js", "TypeScript", "Stripe"],
      status: "Live",
      url: "https://example.com"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative workspace for teams",
      tech: ["React", "Node.js", "PostgreSQL"],
      status: "Development",
      url: "https://example.com"
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Real-time data visualization",
      tech: ["React", "D3.js", "Python"],
      status: "Live",
      url: "https://example.com"
    }
  ],

  experience: [
    {
      id: 1,
      company: "TechCorp",
      position: "Senior Developer",
      duration: "2022 - Present",
      description: "Leading frontend development team"
    },
    {
      id: 2,
      company: "StartupXYZ",
      position: "Full Stack Developer",
      duration: "2020 - 2022",
      description: "Built scalable web applications"
    }
  ],

  skills: [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
    "Python", "PostgreSQL", "MongoDB", "AWS", "Docker"
  ],

  social: {
    github: "https://github.com/alexchen",
    linkedin: "https://linkedin.com/in/alexchen",
    twitter: "https://twitter.com/alexchen"
  },

  currentlyPlaying: {
    song: "Midnight City",
    artist: "M83",
    album: "Hurry Up, We're Dreaming",
    isPlaying: true
  },

  github: {
    username: "alexchen",
    repos: 42,
    followers: 128,
    following: 89,
    contributions: 1247
  }
};