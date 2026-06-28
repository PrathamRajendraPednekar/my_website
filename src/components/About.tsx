import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-16 md:py-32 overflow-hidden section-clip bg-navy/30">
      {/* Ghost Number */}
      <div className="absolute top-20 left-10 text-[15vw] font-sora font-black opacity-[0.03] select-none pointer-events-none">
        01
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-sora font-bold mb-10 md:mb-16 flex items-center gap-4"
        >
          <span className="text-accent-blue font-mono text-2xl">01.</span>
          About Me
          <div className="h-[1px] w-32 bg-accent-blue/30 hidden md:block"></div>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-12 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="relative group">
              {/* Profile Photo Placeholder */}
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-accent-blue/50 p-2 bg-background relative z-10 transition-transform duration-500 group-hover:scale-105">
                <div className="w-full h-full rounded-full bg-accent-blue/10 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://avatars.githubusercontent.com/u/115396830?s=400&u=8734c720e4b5dcf572b903b2bf6cf6a85dcc30ac&v=4" 
                    alt="Pratham Pednekar" 
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
              </div>
              
              {/* Rotating Dashed Outer Ring */}
              <div className="absolute inset-[-10px] rounded-full border-2 border-dashed border-accent-blue/30 animate-[spin_10s_linear_infinite] pointer-events-none"></div>
              <div className="absolute inset-[-20px] rounded-full border border-dashed border-accent-violet/20 animate-[spin_15s_linear_infinite_reverse] pointer-events-none"></div>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3 w-full">
              {[
                "🎓 NMIMS University",
                "📍 Mumbai, India",
                "💼 Open to Internships",
                "🤖 AI/ML Enthusiast"
              ].map((stat, i) => (
                <div key={i} className="glass px-4 py-3 rounded-xl text-xs md:text-sm font-medium text-center hover:border-accent-blue/40 transition-colors">
                  {stat}
                </div>
              ))}
            </div>

            {/* Currently Learning Badge */}
            <div className="mt-8 flex items-center gap-3 glass px-5 py-2 rounded-full border-green-500/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-mono text-green-400/80">Exploring LLMs & Generative AI</span>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <p className="text-muted text-base md:text-lg leading-relaxed">
              I'm Pratham, a Computer Engineering student at NMIMS pursuing an Integrated MBA + B.Tech (2024–2028). 
              I previously completed a Diploma in Computer Engineering from Mumbai University (2020–2023). 
              I'm deeply passionate about AI, Machine Learning, Computer Vision, and NLP — building systems that 
              are intelligent, useful, and impactful.
            </p>
            <p className="text-muted text-base md:text-lg leading-relaxed">
              I also completed a UI/UX Design internship at NSMEDIA Solutions and have been selected in 
              Smart India Hackathon 2025 at the college level. My goal is to leverage data and algorithms 
              to solve complex real-world problems.
            </p>

            {/* Education Timeline */}
            <div className="mt-8 space-y-6">
              {[
                {
                  title: "Integrated MBA + B.Tech, Computer Engineering",
                  org: "NMIMS University",
                  period: "2024 – 2028"
                },
                {
                  title: "Diploma, Computer Engineering",
                  org: "Mumbai University",
                  period: "2020 – 2023"
                }
              ].map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="glass rounded-xl overflow-hidden group hover:border-accent-blue/30 transition-all"
                >
                  <div className="bg-white/5 px-4 py-2 flex items-center justify-between border-b border-white/5">
                    <div className="flex space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                    </div>
                    <span className="text-[10px] mono text-muted uppercase tracking-widest">{edu.period}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-accent-blue font-bold mb-1">{edu.title}</h3>
                    <p className="text-sm text-muted">{edu.org}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
