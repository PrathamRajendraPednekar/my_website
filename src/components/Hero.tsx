import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Mail, MessageCircle } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const Github = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Youtube = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2h15a2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const Hero: React.FC = () => {
  const [init, setInit] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["AI/ML Engineer", "Data Scientist", "Computer Vision Specialist", "Python Developer"];

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20">
      {/* Background tsParticles */}
      {init && (
        <Particles
          id="tsparticles"
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 120,
            interactivity: {
              events: { onHover: { enable: true, mode: "grab" } },
              modes: { grab: { distance: 140, links: { opacity: 0.5 } } },
            },
            particles: {
              color: { value: "#4f8ef7" },
              links: { color: "#4f8ef7", distance: 150, enable: true, opacity: 0.2, width: 1 },
              move: { enable: true, speed: 1, direction: "none", outModes: { default: "bounce" } },
              number: { density: { enable: true, area: 800 }, value: 50 },
              opacity: { value: 0.3 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 z-0"
        />
      )}

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-blue/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-violet/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-3/5 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Premium Portrait Card */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-10 inline-block"
            >
              <Tilt perspective={1200} glareEnable={true} glareMaxOpacity={0.08} glareColor="#4f8ef7" glarePosition="all" tiltMaxAngleX={6} tiltMaxAngleY={6}>
                <div className="relative w-[220px] rounded-[22px] overflow-hidden group/photo">
                  {/* Animated neon gradient border */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-[2px] rounded-[24px] bg-[conic-gradient(from_0deg,_#4f8ef7,_#7c3aed,_#06b6d4,_#4f8ef7)] opacity-70 blur-[1px] z-0"
                  />

                  {/* Glass card body */}
                  <div className="relative z-10 rounded-[21px] overflow-hidden bg-[#060d1a] p-[3px]">
                    {/* Corner bracket accents */}
                    <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-accent-blue/70 z-20 rounded-tl-sm pointer-events-none" />
                    <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-accent-blue/70 z-20 rounded-tr-sm pointer-events-none" />
                    <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-accent-violet/70 z-20 rounded-bl-sm pointer-events-none" />
                    <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-accent-violet/70 z-20 rounded-br-sm pointer-events-none" />

                    {/* Photo */}
                    <div className="relative rounded-[18px] overflow-hidden h-[260px]">
                      <img
                        src="/profile.jpg"
                        alt="Pratham Pednekar"
                        className="w-full h-full object-cover object-center"
                      />

                      {/* Bottom gradient overlay */}
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#060d1a] via-[#060d1a]/60 to-transparent" />

                      {/* Scan line sweep */}
                      <motion.div
                        animate={{ top: ["-10%", "110%"] }}
                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 3, ease: "linear" }}
                        className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-accent-blue/60 to-transparent pointer-events-none"
                      />

                      {/* Status chip — overlaid on photo bottom */}
                      <div className="absolute bottom-3 left-0 right-0 flex justify-center z-10">
                        <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md border border-green-400/30 px-3 py-1 rounded-full">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                          </span>
                          <span className="font-mono text-[9px] text-green-300 tracking-[0.2em] uppercase">Open to Work</span>
                        </div>
                      </div>
                    </div>

                    {/* Info bar beneath photo */}
                    <div className="px-3 py-2.5 flex items-center justify-between bg-[#060d1a]">
                      <span className="font-mono text-[9px] text-accent-blue/50 tracking-widest uppercase">ID: PP_0x2026</span>
                      <div className="flex gap-1">
                        {["AI", "CV", "Py"].map(tag => (
                          <span key={tag} className="text-[8px] font-mono px-1.5 py-0.5 rounded border border-accent-blue/20 text-accent-blue/50 bg-accent-blue/5">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>

            <p className="mono text-accent-blue font-bold mb-4 tracking-[0.2em] text-sm uppercase">Hi, I'm</p>
            <h1 className="text-6xl md:text-8xl font-sora font-black mb-6 leading-none flex flex-col">
              <span className="shimmer-text">Pratham</span>
              <span className="shimmer-text">Pednekar</span>
            </h1>
            
            <div className="h-12 mb-8">
              <p className="text-2xl md:text-3xl font-dm text-muted flex items-center">
                <span className="text-accent-blue mr-3 font-mono">/</span>
                <span className="role-text">{roles[roleIndex]}</span>
                <motion.span 
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="w-1 h-8 bg-accent-blue ml-2"
                />
              </p>
            </div>

            <p className="text-lg md:text-xl text-muted/80 max-w-xl mb-12 font-dm leading-relaxed">
              <span className="text-accent-blue">🚀</span> Integrated MBA + B.Tech @ NMIMS University | Building intelligent systems that solve real problems
            </p>

            <div className="flex flex-wrap gap-6 mb-16">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent-blue text-white rounded-full font-bold shadow-[0_10px_30px_rgba(79,142,247,0.3)] hover:shadow-[0_15px_40px_rgba(79,142,247,0.5)] transition-all"
              >
                View My Work
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download="Pratham_Pednekar_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-white/20 hover:border-accent-blue/50 rounded-full font-bold backdrop-blur-sm transition-all"
              >
                Download Resume
              </motion.a>
            </div>

            <div className="flex items-center gap-8">
              <a href="https://github.com/PrathamRajendraPednekar" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent-blue transition-colors">
                <Github />
              </a>
              <a href="https://www.linkedin.com/in/pratham-pednekar-1881822b5/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent-blue transition-colors">
                <Linkedin />
              </a>
              <a href="https://youtube.com/@prathampednekar" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent-blue transition-colors">
                <Youtube />
              </a>
              <a href="mailto:prathampednekar1985@gmail.com" className="text-muted hover:text-accent-blue transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://discord.gg/796381565721772032" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent-blue transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Visual Elements */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotate: 5 }}
          animate={{ opacity: 1, x: 0, rotate: -2 }}
          transition={{ delay: 1, duration: 1 }}
          className="hidden md:block md:w-2/5 relative"
        >
          {/* Code Block */}
          <Tilt
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.1}
            glareColor="#ffffff"
            glarePosition="all"
          >
            <div className="glass p-6 rounded-2xl shadow-2xl relative overflow-hidden backdrop-blur-2xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(79,142,247,0.2)]">
              <div className="flex space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <pre className="mono text-sm leading-relaxed">
                <code className="block">
                  <span className="text-[#6a9955]"># Pratham's ML Pipeline</span><br />
                  <span className="text-[#569cd6]">model</span> = Sequential([<br />
                  {"  "}Dense(<span className="text-[#b5cea8]">128</span>, activation=<span className="text-[#ce9178]">'relu'</span>),<br />
                  {"  "}Dropout(<span className="text-[#b5cea8]">0.2</span>),<br />
                  {"  "}Dense(<span className="text-[#b5cea8]">64</span>, activation=<span className="text-[#ce9178]">'relu'</span>),<br />
                  {"  "}Dense(<span className="text-[#b5cea8]">1</span>, activation=<span className="text-[#ce9178]">'sigmoid'</span>)<br />
                  ])<br />
                  <br />
                  <span className="text-[#569cd6]">model</span>.compile(<br />
                  {"  "}optimizer=<span className="text-[#ce9178]">'adam'</span>,<br />
                  {"  "}loss=<span className="text-[#ce9178]">'binary_crossentropy'</span><br />
                  )
                </code>
              </pre>
            </div>
          </Tilt>

          {/* Floating Badges */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 glass px-4 py-2 rounded-full font-mono text-xs text-accent-blue border border-accent-blue/30 shadow-[0_0_15px_rgba(79,142,247,0.3)]"
          >
            AI/ML
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-1/2 -left-8 glass px-4 py-2 rounded-full font-mono text-xs text-accent-violet border border-accent-violet/30 shadow-[0_0_15px_rgba(124,58,237,0.3)]"
          >
            Python
          </motion.div>
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 right-8 glass px-4 py-2 rounded-full font-mono text-xs text-accent-blue border border-accent-blue/30 shadow-[0_0_15px_rgba(79,142,247,0.3)]"
          >
            Computer Vision
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
