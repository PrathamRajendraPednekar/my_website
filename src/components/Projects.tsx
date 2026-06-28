import React, { useState } from 'react';
import cityShelfImg from '../assets/homepage.png';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ExternalLink, RotateCw, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    title: "SafeHomeCam",
    tags: ["Computer Vision", "Python"],
    description: "AI-based home security system using real-time face recognition and hand gesture detection. Triggers alarms, SMS alerts, and emergency calls.",
    features: ["Face Recognition", "Hand Gesture Detection", "Real-time Alerts"],
    accent: "#ef4444",
    github: "https://github.com/PrathamRajendraPednekar/SafeHomeCam",
    image: "https://github.com/PrathamRajendraPednekar/SafeHomeCam/raw/main/Images/call.png"
  },
  {
    title: "NLP Hotel Sentiment",
    tags: ["NLP", "Machine Learning", "Jupyter"],
    description: "Classifies hotel reviews into Angry, Neutral, and Good sentiments using text preprocessing and ML techniques.",
    features: ["Text Preprocessing", "Multi-class Classification", "Review Insights"],
    accent: "#22c55e",
    github: "https://github.com/PrathamRajendraPednekar/NLP-Hotel_Review-sentiment-analysis",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=500&auto=format&fit=crop"
  },
  {
    title: "CityShelf",
    tags: ["Full Stack", "React", "Node.js"],
    description: "A local business discovery platform that helps users find trusted chai stalls, tailors, salons, repair shops, and tiffin counters across Indian cities — the shops your city actually loves.",
    features: ["Local Business Search", "Map Integration", "Reviews & Ratings"],
    accent: "#f97316",
    github: "https://github.com/PrathamRajendraPednekar/CityShelf",
    image: cityShelfImg
  },
  {
    title: "David AI",
    tags: ["Voice Assistant", "Python", "GUI"],
    description: "Python-based voice-controlled desktop assistant with task automation, real-time search, chatbot interaction, AI image generation, and an interactive GUI.",
    features: ["Voice Automation", "AI Image Generation", "Interactive GUI"],
    accent: "#7c3aed",
    github: "https://github.com/PrathamRajendraPednekar/David-AI",
    image: "https://github.com/PrathamRajendraPednekar/David-AI/raw/main/copy/GUI_1.png"
  }
];

const Github = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: size, height: size }}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Projects: React.FC = () => {
  const [flipped, setFlipped] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-32 overflow-hidden section-clip-reverse bg-navy/20">
      {/* Ghost Number */}
      <div className="absolute top-20 left-10 text-[15vw] font-sora font-black opacity-[0.03] select-none pointer-events-none">
        03
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-sora font-bold mb-16 flex items-center gap-4"
        >
          <span className="text-accent-blue font-mono text-2xl">03.</span>
          Things I've Built
          <div className="h-[1px] w-32 bg-accent-blue/30 hidden md:block"></div>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-16">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`h-[480px] ${idx % 2 === 1 ? 'md:translate-y-12' : ''}`}
              style={{ perspective: "1500px" }}
            >
              <motion.div
                className="w-full h-full relative"
                initial={false}
                animate={{ rotateY: flipped === idx ? 180 : 0 }}
                transition={{ duration: 0.7, type: "spring", stiffness: 100, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front Side */}
                <div 
                  className={`absolute inset-0 w-full h-full cursor-pointer transition-opacity duration-300 ${flipped === idx ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                  style={{ backfaceVisibility: "hidden" }}
                  onClick={() => setFlipped(idx)}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <Tilt
                    perspective={1000}
                    glareEnable={true}
                    glareMaxOpacity={0.1}
                    glareColor="#ffffff"
                    glarePosition="all"
                    className="h-full"
                  >
                    <div 
                      className="glass p-8 rounded-3xl h-full flex flex-col relative group transition-all duration-300 overflow-hidden"
                      style={{
                        boxShadow: hovered === idx ? `0 0 45px ${project.accent}25` : 'none',
                        borderColor: hovered === idx ? `${project.accent}50` : 'rgba(255, 255, 255, 0.08)',
                        borderWidth: '1px',
                        borderStyle: 'solid'
                      }}
                    >
                      {/* Ghost card number */}
                      <div 
                        className="absolute top-6 right-8 text-6xl font-mono font-black select-none pointer-events-none transition-all duration-300"
                        style={{
                          WebkitTextStroke: hovered === idx ? `1px ${project.accent}33` : '1px rgba(255,255,255,0.05)',
                          color: 'transparent',
                        }}
                      >
                        {`0${idx + 1}`}
                      </div>

                      <div className="flex justify-between items-start mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tIdx) => (
                            <span 
                              key={tIdx} 
                              className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider transition-all duration-300"
                              style={{
                                color: hovered === idx ? project.accent : 'var(--color-muted)',
                                borderColor: hovered === idx ? `${project.accent}44` : 'rgba(255, 255, 255, 0.1)',
                                backgroundColor: hovered === idx ? `${project.accent}15` : 'rgba(255, 255, 255, 0.03)',
                                borderWidth: '1px',
                                borderStyle: 'solid'
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <RotateCw 
                          size={16} 
                          className="transition-colors duration-300" 
                          style={{
                            color: hovered === idx ? project.accent : 'rgba(255, 255, 255, 0.25)'
                          }}
                        />
                      </div>

                      <h3 
                        className="text-2xl font-sora font-bold mb-4 transition-colors duration-300"
                        style={{
                          color: hovered === idx ? project.accent : 'var(--color-text)'
                        }}
                      >
                        {project.title}
                      </h3>

                      <p className="text-muted text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Project Highlights in the "empty space" */}
                      <div className="flex-grow">
                        <div className="space-y-3 mt-2">
                          {project.features.map((feature, fIdx) => (
                            <div 
                              key={fIdx} 
                              className="flex items-center gap-3 text-xs font-dm text-muted/90 group-hover:text-text group-hover:translate-x-1 transition-all duration-300"
                            >
                              <CheckCircle2 
                                size={14} 
                                className="transition-colors duration-300"
                                style={{ color: project.accent }}
                              />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/5">
                        <span className="text-[10px] font-mono text-muted uppercase tracking-widest flex items-center gap-2">
                          <span 
                            className="w-1.5 h-1.5 rounded-full animate-pulse"
                            style={{ backgroundColor: project.accent }}
                          ></span>
                          Click to flip
                        </span>
                        <ExternalLink 
                          size={14} 
                          className="transition-colors duration-300" 
                          style={{ color: hovered === idx ? project.accent : 'rgba(255, 255, 255, 0.3)' }}
                        />
                      </div>

                      {/* Accent glow blob */}
                      <div 
                        className="absolute -bottom-10 -right-10 w-32 h-32 blur-[80px] transition-opacity duration-300 pointer-events-none"
                        style={{ 
                          backgroundColor: project.accent,
                          opacity: hovered === idx ? 0.35 : 0.15 
                        }}
                      ></div>
                    </div>
                  </Tilt>
                </div>

                {/* Back Side */}
                <div 
                  className={`absolute inset-0 w-full h-full flex flex-col glass rounded-3xl p-8 cursor-pointer transition-opacity duration-300 ${flipped === idx ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                  style={{ 
                    transform: "rotateY(180deg)", 
                    backfaceVisibility: "hidden",
                    boxShadow: hovered === idx ? `0 0 45px ${project.accent}25` : 'none',
                    borderColor: hovered === idx ? `${project.accent}50` : 'rgba(255, 255, 255, 0.08)',
                    borderWidth: '1px',
                    borderStyle: 'solid'
                  }}
                  onClick={() => setFlipped(null)}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="relative w-full h-48 rounded-xl overflow-hidden mb-6 border border-white/10 shadow-inner">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl font-sora font-bold mb-3" style={{ color: project.accent }}>
                      Summary
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/5">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-sm font-bold text-text transition-colors duration-300 group/btn"
                      style={{
                        color: hovered === idx ? project.accent : 'var(--color-text)'
                      }}
                    >
                      <Github size={18} />
                      Source Code
                    </a>
                    <span 
                      className="text-[10px] font-mono uppercase tracking-widest animate-pulse"
                      style={{ color: project.accent }}
                    >
                      Tap to go back
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a 
            href="https://github.com/PrathamRajendraPednekar" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 glass rounded-full font-bold hover:bg-accent-blue/10 hover:border-accent-blue transition-all group"
          >
            Explore More Projects
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Github size={20} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
