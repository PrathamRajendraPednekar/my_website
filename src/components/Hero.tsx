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

        {/* Right Side - Photo Scanner Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: -1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="w-full md:w-2/5 flex justify-center items-center relative order-first md:order-last mb-16 md:mb-0"
        >
          <Tilt
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.15}
            glareColor="#4f8ef7"
            glarePosition="all"
            className="w-full max-w-[320px]"
          >
            <div className="glass p-4 rounded-[2rem] shadow-2xl relative overflow-hidden backdrop-blur-2xl border border-white/10 group transition-all duration-500 hover:shadow-[0_0_50px_rgba(79,142,247,0.25)] hover:border-accent-blue/30">
              
              {/* Outer corner tech brackets */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-accent-blue/40 pointer-events-none"></div>
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-accent-blue/40 pointer-events-none"></div>
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-accent-blue/40 pointer-events-none"></div>
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-accent-blue/40 pointer-events-none"></div>

              {/* Holographic Header Bar */}
              <div className="flex justify-between items-center mb-3 px-1 font-mono text-[9px] text-accent-blue/60 tracking-wider">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse"></span>
                  CV_STREAM::CAM_01
                </span>
                <span>FPS: 60.00</span>
              </div>

              {/* Main Image Container */}
              <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-black/40 border border-white/5">
                <img 
                  src="/profile.png" 
                  alt="Pratham Pednekar" 
                  className="w-full h-full object-cover transition-all duration-700 grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105"
                />

                {/* Laser Scanning line sweep */}
                <div className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent-blue to-transparent shadow-[0_0_10px_#4f8ef7] scanner-laser pointer-events-none"></div>

                {/* YOLO / Face Tracking Overlay Box */}
                <div className="absolute top-[18%] left-[22%] w-[56%] h-[48%] border border-emerald-400/50 rounded-lg pointer-events-none group-hover:border-emerald-400/80 transition-colors">
                  {/* Corner marks */}
                  <div className="absolute -top-0.5 -left-0.5 w-2 h-2 border-t-2 border-l-2 border-emerald-400"></div>
                  <div className="absolute -top-0.5 -right-0.5 w-2 h-2 border-t-2 border-r-2 border-emerald-400"></div>
                  <div className="absolute -bottom-0.5 -left-0.5 w-2 h-2 border-b-2 border-l-2 border-emerald-400"></div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 border-b-2 border-r-2 border-emerald-400"></div>
                  
                  {/* Confidence tag */}
                  <div className="absolute -top-5 left-0 font-mono text-[8px] text-emerald-400 bg-background/90 border border-emerald-400/30 px-1 py-0.5 rounded shadow-[0_0_8px_rgba(52,211,153,0.2)]">
                    FACE::PRATHAM [99.8%]
                  </div>
                </div>

                {/* Grid Overlay Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
              </div>

              {/* Holographic Footer Bar */}
              <div className="mt-3 px-1 flex justify-between items-center font-mono text-[8px] text-muted/40 tracking-wider">
                <span>MODEL: YOLOv8_FACE</span>
                <span>CONFIDENCE: 99.82%</span>
              </div>
            </div>
          </Tilt>

          {/* Floating Badges */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 glass px-4 py-2 rounded-full font-mono text-xs text-accent-blue border border-accent-blue/30 shadow-[0_0_15px_rgba(79,142,247,0.3)] z-20"
          >
            AI/ML
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-1/2 -left-8 glass px-4 py-2 rounded-full font-mono text-xs text-accent-violet border border-accent-violet/30 shadow-[0_0_15px_rgba(124,58,237,0.3)] z-20"
          >
            Python
          </motion.div>
          <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 right-8 glass px-4 py-2 rounded-full font-mono text-xs text-accent-blue border border-accent-blue/30 shadow-[0_0_15px_rgba(79,142,247,0.3)] z-20"
          >
            Computer Vision
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
