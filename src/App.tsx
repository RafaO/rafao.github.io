import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, BookOpen, Terminal, Users } from 'lucide-react';
import { BlogPost as BlogPostComponent } from './components/BlogPost';
import { getBlogPosts, type BlogPost } from './lib/getBlogPosts';

function App() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    setBlogPosts(getBlogPosts());
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold mb-4">{personalInfo.name}</h1>
          <p className="text-xl mb-6 text-blue-200">{personalInfo.title}</p>
          <div className="flex space-x-4">
            <a href={personalInfo.social.github} className="text-blue-200 hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
            <a href={personalInfo.social.linkedin} className="text-blue-200 hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href={`mailto:${personalInfo.social.email}`} className="text-blue-200 hover:text-white transition-colors"><Mail className="w-6 h-6" /></a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {selectedPost ? (
          <div>
            <button 
              onClick={() => setSelectedPost(null)}
              className="mb-8 text-blue-400 hover:text-blue-300 transition-colors"
            >
              ← Back to all posts
            </button>
            <BlogPostComponent 
              title={selectedPost.title}
              date={selectedPost.date}
              content={selectedPost.content}
            />
          </div>
        ) : (
          <>
            {/* About Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
              <div className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
                <p className="text-gray-300 leading-relaxed mb-4">
                  {personalInfo.about}
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {personalInfo.aboutSecondary}
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {personalInfo.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Career Timeline */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white">Career Journey</h2>
              <div className="space-y-6">
                {careers.map((career, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{career.role}</h3>
                        <p className="text-blue-400">{career.company}</p>
                      </div>
                      <span className="text-gray-400">{career.period}</span>
                    </div>
                    <p className="mt-4 text-gray-300">{career.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects Grid */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <a 
                    key={index} 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700 transition-all duration-300 hover:border-blue-500 hover:shadow-2xl hover:-translate-y-1"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* Blog Posts */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white">Latest Blog Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {blogPosts.map((post, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700 cursor-pointer hover:border-blue-500 transition-colors"
                    onClick={() => setSelectedPost(post)}
                  >
                    <div className="p-6">
                      <p className="text-blue-400 mb-2">{post.date}</p>
                      <h3 className="text-xl font-semibold mb-3 text-white">{post.title}</h3>
                      <p className="text-gray-300 mb-4">{post.excerpt}</p>
                      <span className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                        Read More →
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills Section */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-white">Skills & Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
                    <div className="text-blue-400">{skill.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{skill.title}</h3>
                    <ul className="text-gray-300 space-y-2">
                      {skill.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </main>

      <footer className="bg-gray-800 text-gray-300 mt-20 border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href={personalInfo.social.github} className="text-gray-400 hover:text-blue-400 transition-colors"><Github className="w-5 h-5" /></a>
              <a href={personalInfo.social.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href={`mailto:${personalInfo.social.email}`} className="text-gray-400 hover:text-blue-400 transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const personalInfo = {
  name: "Rafael Ortega",
  title: "Engineering Manager | Saber.tech",
  about: "Experienced software engineering manager with a strong track record of leading cross-functional teams across diverse domains—from mobile app development to backend and frontend systems. I thrive on solving complex problems, staying goal-oriented, and empowering teams to grow while maintaining high technical standards.",
  aboutSecondary: "I've played a key role in designing core mobile architectures across industries like fintech, travel, and IoT. I've also helped shape engineering strategies for cloud migrations, microservices, and scalable system design. My focus is on enabling long-term success by aligning technology with business goals—without compromising code quality or developer growth.",
  skills: [
    "Kotlin",
    "Java",
    "Flutter",
    "AWS",
    "Docker",
    "Jenkins",
    "Cloud Architecture",
    "Engineering Leadership"
  ],
  social: {
    github: "https://github.com/rafao",
    linkedin: "https://linkedin.com/in/rafao",
    email: "rafao1989@hotmail.com"
  }
};

const careers = [
  {
    role: "Engineering Manager",
    company: "Saber.tech",
    period: "March 2022 - Present",
    description: "Leading cross 4 functional team responsible for the lotteries business area of the Lottoland site."
  },
  {
    role: "Engineering Manager",
    company: "Ciklum",
    period: "March 2020 - March 2022",
    description: "Leading the engineering department of mobile apps in Ciklum to support the Lottoland apps across diferent markets and jurisdictions."
  },
  {
    role: "Android Technical Architect",
    company: "Sync money",
    period: "Jun 2018 - March 2020",
    description: "Developed and maintained key features for Elastic Cloud, focusing on cloud infrastructure and platform reliability. Led technical initiatives and mentored junior engineers."
  },
  {
    role: "Senior Android Engineer",
    company: "Trivago",
    period: "Jun 2016 - June 2018",
    description: "Worked on Elastic Cloud platform development, implementing core features and improving platform stability. Contributed to the development of cloud infrastructure management tools."
  },
  {
    role: "Android Engineer",
    company: "iExergy GmbH",
    period: "Sep 2012 - Jun 2016",
    description: "Developed and maintained enterprise applications for major clients. Specialized in Java development and worked with various web technologies."
  }
];

const projects = [
  {
    title: "Mixafy",
    description: "Leading the development of WebContainer technology at Saber.tech, enabling full Node.js environments to run directly in the browser.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000",
    technologies: ["WebAssembly", "TypeScript", "Node.js", "Browser APIs"],
    url: "https://github.com/RafaO/mixify"
  },
  {
    title: "Elastic Cloud Platform",
    description: "Led the development of key features in Elastic Cloud, improving platform reliability and user experience.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    technologies: ["Cloud Infrastructure", "Kubernetes", "JavaScript", "Go"],
    url: "https://www.elastic.co/cloud"
  }
];

const skills = [
  {
    title: "Technical Leadership",
    icon: <Terminal className="w-8 h-8 text-blue-400 mb-4" />,
    items: [
      "Team Management",
      "Technical Strategy",
      "Architecture Design",
      "Project Planning",
      "Performance Optimization"
    ]
  },
  {
    title: "Developer Tools",
    icon: <Users className="w-8 h-8 text-blue-400 mb-4" />,
    items: [
      "WebContainers",
      "Cloud Platforms",
      "Development Environments",
      "Build Tools",
      "Developer Experience"
    ]
  },
  {
    title: "Core Skills",
    icon: <BookOpen className="w-8 h-8 text-blue-400 mb-4" />,
    items: [
      "Web Technologies",
      "Cloud Infrastructure",
      "Team Leadership",
      "Agile Methodologies",
      "Technical Mentorship"
    ]
  }
];

export default App;