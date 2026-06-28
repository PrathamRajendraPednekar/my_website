import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, BarChart, Shield, Layout, Brain } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const achievements = [
  { icon: <Award className="text-yellow-500" size={24} />, title: "Smart India Hackathon 2025", issuer: "College Level Round 1 Selected" },
  { icon: <Brain className="text-purple-500" size={24} />, title: "Generative AI with LLMs", issuer: "Coursera" },
  { icon: <BarChart className="text-green-500" size={24} />, title: "Data Analyst Certification", issuer: "ExcelR Solutions" },
  { icon: <GraduationCap className="text-blue-500" size={24} />, title: "Prompt Engineering for Everyone", issuer: "IBM Cognitive Class" },
  { icon: <Shield className="text-red-500" size={24} />, title: "Cybersecurity Job Simulation", issuer: "JPMorgan Chase (Forage)" },
  { icon: <Layout className="text-orange-500" size={24} />, title: "Accounting Fundamentals", issuer: "TCS iON" }
];

const experiences = [
  {
    icon: <Brain className="text-accent-blue" size={20} />,
    title: "AI/ML Intern",
    company: "KENMARK ITAN Solutions",
    period: "May 2026 – Jul 2026",
    tags: ["AI/ML", "Next.js", "AI Tools"],
    description: "Gained hands-on experience building intelligent applications using modern AI/ML tools and frameworks during the internship. Successfully developed and deployed multiple AI-powered projects while leveraging Next.js for scalable, production-ready web solutions."
  },
  {
    icon: <Briefcase className="text-accent-blue" size={20} />,
    title: "UI/UX Design Intern",
    company: "NSMEDIA Solutions",
    period: "Jul 2022 – Aug 2022",
    tags: ["UI/UX", "Design Thinking"],
    description: "Focused on creating user-centric designs and understanding design patterns during the internship. Successfully applied Design Thinking principles to prototype scalable mobile application interfaces."
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-32 overflow-hidden bg-background">
      {/* Ghost Number */}
      <div className="absolute top-20 right-10 text-[15vw] font-sora font-black opacity-[0.03] select-none pointer-events-none">
        04
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-sora font-bold mb-16 flex items-center justify-end gap-4"
        >
          <div className="h-[1px] w-32 bg-accent-blue/30 hidden md:block"></div>
          Experience & Achievements
          <span className="text-accent-blue font-mono text-2xl">04.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column - Timeline */}
          <div className="relative">
            {/* Static Background Track */}
            <div className="absolute left-0 top-0 w-[2px] h-full bg-white/5 rounded-full"></div>

            {/* Glowing Active Track */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-accent-blue via-accent-violet to-transparent opacity-60 shadow-[0_0_12px_rgba(79,142,247,0.4)] rounded-full"
            >
              {/* Traveling Signal Pulse */}
              <motion.div 
                animate={{ top: ['0%', '100%'] }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="absolute left-[-1px] w-[4px] h-20 bg-gradient-to-b from-transparent via-accent-blue to-transparent blur-[2px] z-10"
              />
            </motion.div>
            
            <div className="space-y-12 pl-8">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  className="relative group"
                >
                  {/* Timeline Concentric Node */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.3 + (idx * 0.2) }}
                    className="absolute -left-[43px] top-1.5 w-6 h-6 rounded-full border border-accent-blue/30 bg-background flex items-center justify-center z-10 transition-all duration-500 group-hover:border-accent-blue group-hover:scale-110"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent-blue shadow-[0_0_8px_#4f8ef7] transition-all duration-500 group-hover:bg-accent-violet group-hover:shadow-[0_0_12px_#7c3aed]"></div>
                  </motion.div>
                  
                  <Tilt
                    perspective={1000}
                    glareEnable={true}
                    glareMaxOpacity={0.1}
                    glareColor="#ffffff"
                    glarePosition="all"
                  >
                    <div className="glass p-8 rounded-2xl hover:border-accent-blue/50 transition-all group-hover:bg-white/5 duration-500 cursor-grab active:cursor-grabbing">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="p-2 bg-accent-blue/10 rounded-lg text-accent-blue">
                          {exp.icon}
                        </div>
                        <h3 className="text-xl font-sora font-bold text-text">{exp.title}</h3>
                      </div>
                      <p className="text-accent-violet font-mono text-sm mb-4 font-semibold tracking-wide">{exp.company} | {exp.period}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.tags.map((tag, tIdx) => {
                          const isEven = tIdx % 2 === 0;
                          const badgeClass = isEven
                            ? "bg-accent-blue/5 border-accent-blue/20 text-accent-blue"
                            : "bg-accent-violet/5 border-accent-violet/20 text-accent-violet";
                          return (
                            <span 
                              key={tIdx} 
                              className={`px-3 py-1 rounded-full border text-[10px] font-mono uppercase tracking-widest ${badgeClass}`}
                            >
                              {tag}
                            </span>
                          );
                        })}
                      </div>

                      <p className="text-muted text-sm leading-relaxed border-l-2 border-white/5 pl-4 group-hover:border-accent-blue/30 transition-colors">
                        {exp.description}
                      </p>
                    </div>
                  </Tilt>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Achievements */}
          <div className="space-y-4">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                whileHover={{ 
                  y: -6, 
                  scale: 1.02, 
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  boxShadow: "0 12px 20px -8px rgba(79, 142, 247, 0.2)"
                }}
                className="glass flex items-center gap-6 p-5 rounded-2xl border-white/5 hover:border-accent-blue/30 transition-all duration-300 group cursor-default"
              >
                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-accent-blue/10 group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-sora font-bold text-text group-hover:text-accent-blue transition-colors duration-300">{item.title}</h4>
                  <p className="text-muted text-xs font-mono uppercase tracking-wider mt-1 opacity-70">{item.issuer}</p>
                </div>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-blue shadow-[0_0_8px_#4f8ef7]"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
