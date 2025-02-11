import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  BadgeCheck, 
  ChevronDown, 
  ExternalLink,
  Mail,
  ArrowUp,
  Code,
  Database,
  LineChart,
  Brain,
  Award
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.5}px)`,
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text">AS</span>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#experience" className="text-gray-700 hover:text-blue-600">Experience</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #2563eb10 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-teal-100/50 to-transparent rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>

        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden">
          {['top-1/4 left-1/4', 'top-1/3 right-1/4', 'bottom-1/4 left-1/3', 'bottom-1/3 right-1/3'].map((position, index) => (
            <div 
              key={index}
              className={`absolute ${position} transform -translate-x-1/2 -translate-y-1/2 opacity-10`}
              style={{ 
                animation: `float ${3 + index}s ease-in-out infinite alternate`,
                animationDelay: `${index * 0.5}s`
              }}
            >
              {index === 0 && <Code size={48} className="text-blue-600" />}
              {index === 1 && <Database size={48} className="text-teal-600" />}
              {index === 2 && <LineChart size={48} className="text-blue-600" />}
              {index === 3 && <Brain size={48} className="text-teal-600" />}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <div className="flex flex-col items-center text-center">
            {/* Profile Section */}
            <div className="mb-8 relative">
              <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-white shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2">
                <BadgeCheck className="w-8 h-8 text-blue-600" />
              </div>
            </div>

            {/* Name and Title */}
            <div className="relative mb-6">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
                Ashna Susan Saji
              </h1>
              <p className="text-xl text-gray-600 mb-4">(She/Her)</p>
              <div className="flex items-center justify-center gap-2 text-2xl md:text-3xl font-medium bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text">
                Delivering Data-Driven Solutions
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-12">
              {[
                { icon: Award, label: 'Years Experience', value: '4+' },
                { icon: Database, label: 'Projects Completed', value: '50+' },
                { icon: LineChart, label: 'Data Points Analyzed', value: '1M+' },
              ].map(({ icon: Icon, label, value }, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{value}</div>
                  <div className="text-sm text-gray-600">{label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <span className="relative z-10">View My Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <button className="group relative px-8 py-4 bg-white text-blue-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ring-1 ring-blue-100">
                <span className="relative z-10 flex items-center gap-2">
                  Let's Connect <ArrowUp className="w-4 h-4 transform rotate-45" />
                </span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              <a 
                href="#" 
                className="group relative p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <Github className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
              </a>
              <a 
                href="#" 
                className="group relative p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
              </a>
              <a 
                href="#" 
                className="group relative p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <Mail className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-gray-300 rounded-full p-1">
                <div 
                  className="w-1.5 h-1.5 bg-gray-300 rounded-full"
                  style={{ animation: 'scroll 1.5s ease-in-out infinite' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                alt="Professional headshot"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-xl">
                <p className="font-medium">4+ Years Experience</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-gray-600 mb-6">
                Data Analytics professional with expertise in transforming complex datasets into actionable insights. 
                Passionate about leveraging data to drive business decisions and create meaningful impact.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-medium mb-2">Core Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'SQL', 'Power BI', 'Tableau'].map((skill) => (
                      <span key={skill} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-medium mb-2">Certifications</h3>
                  <ul className="text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <BadgeCheck className="w-4 h-4 text-blue-500" />
                      Data Science Professional
                    </li>
                    <li className="flex items-center gap-2">
                      <BadgeCheck className="w-4 h-4 text-blue-500" />
                      Advanced Analytics
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Professional Journey</h2>
          <div className="space-y-8">
            {[
              {
                title: 'Senior Data Analyst',
                company: 'Tech Corp',
                period: '2022 - Present',
                achievements: [
                  'Led data analytics initiatives resulting in 10% revenue growth',
                  'Developed automated reporting systems',
                ]
              },
              {
                title: 'Data Analyst',
                company: 'Data Solutions Inc',
                period: '2020 - 2022',
                achievements: [
                  'Implemented machine learning models',
                  'Optimized database performance',
                ]
              }
            ].map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <p className="text-gray-600">{job.company}</p>
                  </div>
                  <span className="text-gray-500">{job.period}</span>
                </div>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <ChevronDown className="w-4 h-4 text-blue-500" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Sales Analytics Dashboard',
                description: 'Interactive dashboard for real-time sales monitoring',
                tech: ['Power BI', 'SQL', 'Python'],
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Customer Segmentation',
                description: 'ML-based customer segmentation analysis',
                tech: ['Python', 'Scikit-learn', 'Tableau'],
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Predictive Analytics',
                description: 'Forecasting model for inventory management',
                tech: ['Python', 'TensorFlow', 'Power BI'],
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Let's Connect</h2>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
            <div className="mt-8 flex justify-center gap-6">
              <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <Mail className="w-5 h-5" />
                contact@example.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">© 2024 Ashna Susan Saji. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
}

export default App;