import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, MessageCircle, Send, Sparkles, Globe, Cpu, Zap, 
  Activity, ShieldCheck, CheckCircle2, AlertCircle, 
  Brain, Terminal, Database, Code2 
} from 'lucide-react';

const Github = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: size, height: size }}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: size, height: size }}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Youtube = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: size, height: size }}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2h15a2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const contactMethods = [
  { icon: <Mail size={18} />, label: "Email", href: "mailto:prathampednekar1985@gmail.com" },
  { icon: <Linkedin size={18} />, label: "LinkedIn", href: "https://www.linkedin.com/in/pratham-pednekar-1881822b5/" },
  { icon: <Github size={18} />, label: "GitHub", href: "https://github.com/PrathamRajendraPednekar" },
  { icon: <MessageCircle size={18} />, label: "Discord", href: "https://discord.gg/796381565721772032" },
];

const NeuralCore: React.FC = () => {
  const icons = [
    { Icon: Zap, color: "text-yellow-400" },
    { Icon: Brain, color: "text-accent-blue" },
    { Icon: Code2, color: "text-emerald-400" },
    { Icon: Cpu, color: "text-accent-violet" },
    { Icon: Terminal, color: "text-pink-400" },
    { Icon: ShieldCheck, color: "text-blue-400" },
    { Icon: Database, color: "text-orange-400" },
    { Icon: Globe, color: "text-accent-blue" },
  ];

  return (
    <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] flex items-center justify-center">
      {/* Outer Rotating Animation Layer - WITH 8 ICONS */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute w-full h-full border-[1.5px] border-dashed border-accent-blue/20 rounded-full"
      >
        {icons.map((item, i) => {
          const angle = (i * 360) / icons.length;
          return (
            <div 
              key={i} 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-225px) rotate(-${angle}deg)`
              }}
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className={`glass p-3 rounded-xl border-white/10 ${item.color} shadow-lg backdrop-blur-md`}
              >
                <item.Icon size={22} />
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* Core Layer - Image */}
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
          boxShadow: [
            "0 0 30px rgba(79, 142, 247, 0.2)",
            "0 0 60px rgba(79, 142, 247, 0.4)",
            "0 0 30px rgba(79, 142, 247, 0.2)"
          ]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-[65%] h-[65%] rounded-full border-2 border-accent-blue/30 overflow-hidden group shadow-2xl"
      >
        <img 
          src="https://avatars.githubusercontent.com/u/115396830?s=400&u=8734c720e4b5dcf572b903b2bf6cf6a85dcc30ac&v=4" 
          alt="Pratham Pednekar" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-accent-blue/30 via-transparent to-transparent opacity-60"></div>
        
        {/* Scanning Line */}
        <motion.div 
          animate={{ top: ['-10%', '110%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 w-full h-[2px] bg-accent-blue/50 blur-[2px] z-20"
        />
      </motion.div>

      {/* Background Pulse */}
      <div className="absolute inset-0 bg-accent-blue/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
    </div>
  );
};

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const formRef = useRef<HTMLFormElement>(null);

  // Advanced Console States
  const [targetProgress, setTargetProgress] = useState(0);
  const [displayProgress, setDisplayProgress] = useState(0);
  const [focusedField, setFocusedField] = useState<'name' | 'email' | 'message' | null>(null);
  const [bootSequenceComplete, setBootSequenceComplete] = useState(false);
  const [bootLines, setBootLines] = useState<string[]>([]);
  const [activityLogs, setActivityLogs] = useState<string[]>([]);
  const [cursorVisible, setCursorVisible] = useState(true);

  const mountTimeRef = useRef(Date.now());
  const prevEmailValid = useRef(false);
  const prevProgress = useRef(0);
  const prevConsoleState = useRef("OFFLINE");

  // Stricter Email Regex for validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  const isNameValid = formData.name.length > 0;
  const isEmailValid = emailRegex.test(formData.email);
  const isMessageValid = formData.message.length >= 10;
  
  // Strict form validation for submission
  const isFormValidSubmit = formData.name.trim().length > 2 && 
                            isEmailValid && 
                            formData.message.trim().length > 5;

  // 1. Character-based Real-time Progress Calculation
  useEffect(() => {
    const nameLength = formData.name.length;
    const emailLength = formData.email.length;
    const messageLength = formData.message.length;

    const nameProgress = Math.min(nameLength / 12, 1) * 30;
    const emailProgress = isEmailValid ? 30 : Math.min(emailLength / 20, 1) * 20;
    const messageProgress = Math.min(messageLength / 80, 1) * 40;
    
    let calcProgress = Math.floor(nameProgress + emailProgress + messageProgress);
    
    // Cap at 99 unless fully valid (using our submit validation logic)
    if (isFormValidSubmit) {
      setTargetProgress(100);
    } else {
      setTargetProgress(Math.min(99, calcProgress));
    }
  }, [formData, isEmailValid, isFormValidSubmit]);

  // 2. Animated Percentage Ticker (One-by-One Chasing)
  useEffect(() => {
    if (displayProgress === targetProgress) return;

    const step = displayProgress < targetProgress ? 1 : -1;
    const delay = 18; // ms per tick

    const timer = setTimeout(() => {
      setDisplayProgress(prev => prev + step);
    }, delay);

    return () => clearTimeout(timer);
  }, [displayProgress, targetProgress]);

  // ▋ Cursor Blink Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // 6. Typewriter Boot Sequence (on Mount)
  useEffect(() => {
    const bootMessages = [
      "> INITIALIZING TELEMETRY SYSTEM...",
      "> LOADING SIGNAL MODULES...",
      "> SYSTEM READY. AWAITING INPUT."
    ];
    
    const addLog = (msg: string) => {
      const elapsed = Math.floor((Date.now() - mountTimeRef.current) / 1000);
      const pad = (num: number) => num.toString().padStart(2, '0');
      const timestamp = `[00:${pad(elapsed)}]`;
      setActivityLogs(prev => [...prev, `${timestamp} ${msg}`]);
    };

    addLog("SYSTEM POWER ON");

    const timer1 = setTimeout(() => {
      setBootLines(prev => [...prev, bootMessages[0]]);
      addLog("INITIALIZING TELEMETRY...");
    }, 600);

    const timer2 = setTimeout(() => {
      setBootLines(prev => [...prev, bootMessages[1]]);
      addLog("LOADING SIGNAL MODULES...");
    }, 1200);

    const timer3 = setTimeout(() => {
      setBootLines(prev => [...prev, bootMessages[2]]);
      addLog("SYSTEM READY. AWAITING INPUT.");
      setBootSequenceComplete(true);
    }, 1800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  // 8. Auto-scroll Activity Log
  const logEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activityLogs]);

  // Activity Logging Effects
  useEffect(() => {
    if (!bootSequenceComplete) return;
    if (focusedField) {
      const elapsed = Math.floor((Date.now() - mountTimeRef.current) / 1000);
      const pad = (num: number) => num.toString().padStart(2, '0');
      const timestamp = `[00:${pad(elapsed)}]`;
      setActivityLogs(prev => [...prev, `${timestamp} ${focusedField.toUpperCase()} field active...`]);
    }
  }, [focusedField, bootSequenceComplete]);

  useEffect(() => {
    if (!bootSequenceComplete) return;
    if (isEmailValid && !prevEmailValid.current) {
      const elapsed = Math.floor((Date.now() - mountTimeRef.current) / 1000);
      const pad = (num: number) => num.toString().padStart(2, '0');
      const timestamp = `[00:${pad(elapsed)}]`;
      setActivityLogs(prev => [...prev, `${timestamp} EMAIL validated ✓`]);
    }
    prevEmailValid.current = isEmailValid;
  }, [isEmailValid, bootSequenceComplete]);

  // Console State logic
  let consoleState: 'OFFLINE' | 'ESTABLISHING SIGNAL' | 'LINK ESTABLISHED' | 'READY TO TRANSMIT' | 'SIGNAL SENT' = 'OFFLINE';
  if (displayProgress === 100) {
    consoleState = 'SIGNAL SENT';
  } else if (displayProgress >= 80) {
    consoleState = 'READY TO TRANSMIT';
  } else if (displayProgress >= 40) {
    consoleState = 'LINK ESTABLISHED';
  } else if (displayProgress > 0) {
    consoleState = 'ESTABLISHING SIGNAL';
  }

  // Border & Glow Class Mapping
  const borderClass = {
    OFFLINE:               "border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.1)] bg-red-950/5",
    "ESTABLISHING SIGNAL": "border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.1)] bg-orange-950/5",
    "LINK ESTABLISHED":    "border-yellow-400/20 shadow-[0_0_15px_rgba(234,179,8,0.1)] bg-yellow-950/5",
    "READY TO TRANSMIT":   "border-emerald-400/20 shadow-[0_0_15px_rgba(52,211,153,0.1)] bg-emerald-950/5",
    "SIGNAL SENT":         "border-cyan-400/20 shadow-[0_0_15px_rgba(34,211,238,0.1)] bg-cyan-950/5",
  }[consoleState];

  const statusColor = {
    OFFLINE:               "text-red-400 drop-shadow-[0_0_4px_rgba(248,113,113,0.4)]",
    "ESTABLISHING SIGNAL": "text-orange-400 drop-shadow-[0_0_4px_rgba(251,146,60,0.4)]",
    "LINK ESTABLISHED":    "text-yellow-400 drop-shadow-[0_0_4px_rgba(250,204,21,0.4)]",
    "READY TO TRANSMIT":   "text-emerald-400 drop-shadow-[0_0_4px_rgba(52,211,153,0.4)]",
    "SIGNAL SENT":         "text-cyan-400 drop-shadow-[0_0_4px_rgba(34,211,238,0.4)]",
  }[consoleState];

  const dotColor = {
    OFFLINE:               "bg-red-500",
    "ESTABLISHING SIGNAL": "bg-orange-500 animate-pulse",
    "LINK ESTABLISHED":    "bg-yellow-500 animate-pulse",
    "READY TO TRANSMIT":   "bg-emerald-400 animate-ping",
    "SIGNAL SENT":         "bg-cyan-400 animate-pulse",
  }[consoleState];

  // Log state transitions
  useEffect(() => {
    if (!bootSequenceComplete) return;
    if (consoleState !== prevConsoleState.current) {
      const elapsed = Math.floor((Date.now() - mountTimeRef.current) / 1000);
      const pad = (num: number) => num.toString().padStart(2, '0');
      const timestamp = `[00:${pad(elapsed)}]`;
      setActivityLogs(prev => [...prev, `${timestamp} STATUS: ${consoleState}`]);
    }
    prevConsoleState.current = consoleState;
  }, [consoleState, bootSequenceComplete]);

  // Log signal ticks
  useEffect(() => {
    if (!bootSequenceComplete) return;
    if (displayProgress !== prevProgress.current && [10, 25, 50, 75, 100].includes(displayProgress)) {
      const elapsed = Math.floor((Date.now() - mountTimeRef.current) / 1000);
      const pad = (num: number) => num.toString().padStart(2, '0');
      const timestamp = `[00:${pad(elapsed)}]`;
      setActivityLogs(prev => [...prev, `${timestamp} SIGNAL STRENGTH: ${displayProgress}%`]);
    }
    prevProgress.current = displayProgress;
  }, [displayProgress, bootSequenceComplete]);

  // 3. Dynamic Progress Bar Blocks
  const filledBlocks = Math.floor(displayProgress / 5);
  const emptyBlocks = 20 - filledBlocks;
  const progressBars = "█".repeat(filledBlocks) + "░".repeat(emptyBlocks);

  // 5. Immersive Readout Badges
  const okBadge = <span className="text-emerald-400 font-mono">[ OK ]</span>;
  const pendingBadge = <span className="text-gray-500 font-mono">[ PENDING ]</span>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    // Reset error state when user starts typing again
    if (formStatus === 'error') setFormStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValidSubmit) return;

    setFormStatus('submitting');
    
    const body = new FormData(e.currentTarget);
    
    try {
      // Formspree Integration
      const response = await fetch("https://formspree.io/f/xredvpbe", {
        method: "POST",
        body: body,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/5 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-violet/5 blur-[150px] rounded-full pointer-events-none animate-bounce" style={{ animationDuration: '10s' }}></div>

      {/* Ghost Number */}
      <div className="absolute top-20 left-10 text-[15vw] font-sora font-black opacity-[0.03] select-none pointer-events-none">
        05
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-sora font-bold mb-16 flex items-center gap-4"
        >
          <span className="text-accent-blue font-mono text-2xl">05.</span>
          Let's Connect
          <div className="h-[1px] w-32 bg-accent-blue/30 hidden md:block"></div>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Creative Animated Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center lg:items-start"
          >
            <div className="relative mb-12">
              <NeuralCore />
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 glass px-6 py-2 rounded-full border-accent-blue/30 text-sm font-mono text-accent-blue flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                System Active
              </motion.div>
            </div>

            <div className="text-center lg:text-left mt-16">
              <h3 className="text-4xl font-sora font-bold mb-6 text-glow tracking-tight">Handshake Initialized</h3>
              <p className="text-muted text-lg mb-10 max-w-md leading-relaxed">
                Ready to transform your ideas into intelligent architectures. Send a transmission below to start our collaboration.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start max-w-sm">
                {contactMethods.map((method, i) => (
                  <motion.a
                    key={i}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass px-4 py-3 rounded-2xl flex items-center gap-3 border-white/5 hover:border-accent-blue/30 hover:bg-white/5 transition-all"
                  >
                    <span className="text-accent-blue">{method.icon}</span>
                    <span className="text-xs font-bold uppercase tracking-wider">{method.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass p-8 md:p-12 rounded-[2.5rem] border-white/10 relative overflow-hidden backdrop-blur-3xl group shadow-[0_0_50px_rgba(0,0,0,0.3)]">
              {/* Corner Tech Accents */}
              <div className="absolute top-4 left-6 font-mono text-[8px] text-accent-blue/30 select-none tracking-widest hidden sm:block">
                [SYS_OP: CONNECT]
              </div>
              <div className="absolute top-4 right-6 font-mono text-[8px] text-accent-violet/30 select-none tracking-widest hidden sm:block">
                SECURE_LINK_v2.5
              </div>
              <div className="absolute bottom-4 left-6 font-mono text-[8px] text-muted/20 select-none tracking-widest hidden sm:block">
                PORT: 443 // SSL_ON
              </div>
              <div className="absolute bottom-4 right-6 font-mono text-[8px] text-muted/20 select-none tracking-widest hidden sm:block">
                GRID_LOC: 34.0522 // -118.2437
              </div>

              {/* Glowing Outer Border Wrapper */}
              <div className="absolute inset-0 border border-white/10 rounded-[2.5rem] group-hover:border-accent-blue/30 transition-colors duration-500 pointer-events-none"></div>

              {/* Form Title */}
              <div className="mb-6">
                <h4 className="text-3xl font-sora font-bold mb-1 flex items-center gap-3">
                  Transmission Form
                  <Sparkles className="text-accent-blue animate-pulse" size={24} />
                </h4>
                <p className="text-[9px] font-mono text-muted/40 tracking-[0.22em] uppercase mb-4 animate-pulse">
                  Establishing secure handshake pipeline...
                </p>
                <div className="w-16 h-[2px] bg-accent-blue rounded-full"></div>
              </div>

              {/* Telemetry Console Panel */}
              <div className={`mb-8 p-5 rounded-2xl border font-mono text-xs space-y-3 relative overflow-hidden shadow-inner transition-all duration-500 ${borderClass}`}>
                <div className="absolute top-0 left-0 w-[2px] h-full bg-accent-blue/30"></div>
                
                {!bootSequenceComplete ? (
                  /* 6. Typewriter Boot Sequence Area */
                  <div className="font-mono text-[10px] text-accent-blue space-y-1.5 py-2 min-h-[90px]">
                    {bootLines.map((line, i) => (
                      <div key={i} className="tracking-wide">{line}</div>
                    ))}
                    <div className="w-1.5 h-3 bg-accent-blue animate-[pulse_1s_infinite] inline-block ml-0.5"></div>
                  </div>
                ) : (
                  /* Normal Telemetry Console */
                  <>
                    <div className="flex justify-between items-center">
                      <span className="text-muted/50 text-[10px] tracking-wider uppercase">SYS_STATUS:</span>
                      <span className={`${statusColor} flex items-center gap-2 text-[11px] font-bold`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`}></span>
                        {consoleState}
                        <span className="animate-[pulse_1s_infinite] font-bold">_</span>
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                      <span className="text-muted/50 text-[10px] tracking-wider uppercase">SIGNAL_STR:</span>
                      <span className="text-accent-blue text-[11px] font-bold tracking-tight select-all drop-shadow-[0_0_3px_rgba(79,142,247,0.3)]">
                        {progressBars} {displayProgress}%
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/5 text-[9px] text-center tracking-wider font-semibold">
                      <div className="flex flex-col items-center">
                        <span className="block text-muted/30 mb-0.5">ID_VAL</span>
                        <span className="flex items-center gap-0.5 min-h-[15px]">
                          {formData.name.length > 0 ? okBadge : pendingBadge}
                          {focusedField === 'name' && cursorVisible && <span className="text-accent-blue font-bold animate-[pulse_0.5s_infinite]">▋</span>}
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="block text-muted/30 mb-0.5">FREQ_VAL</span>
                        <span className="flex items-center gap-0.5 min-h-[15px]">
                          {isEmailValid ? okBadge : pendingBadge}
                          {focusedField === 'email' && cursorVisible && <span className="text-accent-blue font-bold animate-[pulse_0.5s_infinite]">▋</span>}
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="block text-muted/30 mb-0.5">DATA_VAL</span>
                        <span className="flex items-center gap-0.5 min-h-[15px]">
                          {formData.message.length >= 10 ? okBadge : pendingBadge}
                          {focusedField === 'message' && cursorVisible && <span className="text-accent-blue font-bold animate-[pulse_0.5s_infinite]">▋</span>}
                        </span>
                      </div>
                    </div>

                    {/* 8. Scrolling Activity Log */}
                    <div className="h-20 overflow-y-auto no-scrollbar font-mono text-[9px] text-accent-blue/50 mt-3 border-t border-white/5 pt-2 space-y-1">
                      {activityLogs.map((log, i) => (
                        <div key={i} className="flex gap-2">
                          <span className="text-muted/30">{log.substring(0, 8)}</span>
                          <span className="text-accent-blue/60">{log.substring(9)}</span>
                        </div>
                      ))}
                      <div ref={logEndRef} />
                    </div>
                  </>
                )}
              </div>

              {formStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center space-y-4"
                >
                  <div className="w-20 h-20 bg-accent-blue/20 rounded-full flex items-center justify-center text-accent-blue mb-4">
                    <CheckCircle2 size={40} />
                  </div>
                  <h5 className="text-2xl font-sora font-bold">Transmission Received</h5>
                  <p className="text-muted max-w-xs">Your message has been successfully routed. I'll respond shortly.</p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="mt-6 text-accent-blue font-mono text-sm hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form 
                  ref={formRef}
                  onSubmit={handleSubmit} 
                  className="space-y-8 relative z-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between ml-1">
                        <label className="text-[10px] font-mono text-accent-blue/60 uppercase tracking-[0.3em]">Identity</label>
                        {formData.name.length > 0 && <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></span>}
                      </div>
                      <div className="relative group/input">
                        <span className="absolute left-5 top-1/2 -translate-y-1/2 font-mono text-accent-blue text-sm opacity-40 pointer-events-none group-focus-within/input:opacity-100 transition-opacity font-bold">&gt;</span>
                        <input 
                          name="name"
                          type="text" 
                          required
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Name / Organization"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl pl-10 pr-6 py-5 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/30 transition-all placeholder:text-muted/20 font-mono text-sm focus:shadow-[0_0_20px_rgba(79,142,247,0.15)] focus:bg-accent-blue/5"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between ml-1">
                        <label className="text-[10px] font-mono text-accent-blue/60 uppercase tracking-[0.3em]">Frequency</label>
                        {isEmailValid && <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></span>}
                      </div>
                      <div className="relative group/input">
                        <span className="absolute left-5 top-1/2 -translate-y-1/2 font-mono text-accent-blue text-sm opacity-40 pointer-events-none group-focus-within/input:opacity-100 transition-opacity font-bold">&gt;</span>
                        <input 
                          name="email"
                          type="email" 
                          required
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="email@domain.com"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl pl-10 pr-6 py-5 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/30 transition-all placeholder:text-muted/20 font-mono text-sm focus:shadow-[0_0_20px_rgba(79,142,247,0.15)] focus:bg-accent-blue/5"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between ml-1">
                      <label className="text-[10px] font-mono text-accent-blue/60 uppercase tracking-[0.3em]">Transmission Data</label>
                      {formData.message.length >= 10 && <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></span>}
                    </div>
                    <div className="relative group/input">
                      <span className="absolute left-5 top-6 font-mono text-accent-blue text-sm opacity-40 pointer-events-none group-focus-within/input:opacity-100 transition-opacity font-bold">&gt;</span>
                      <textarea 
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Briefly describe your requirements or inquiry..."
                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-10 pr-6 py-5 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/30 transition-all placeholder:text-muted/20 resize-none font-mono text-sm focus:shadow-[0_0_20px_rgba(79,142,247,0.15)] focus:bg-accent-blue/5"
                      ></textarea>
                    </div>
                  </div>

                  {formStatus === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex flex-col items-center gap-2 text-red-400 text-sm font-mono bg-red-400/10 p-4 rounded-xl border border-red-400/20"
                    >
                      <div className="flex items-center gap-2">
                        <AlertCircle size={16} />
                        Transmission failed (404/Network Error).
                      </div>
                      <p className="text-[10px] opacity-70">
                        Note: The Formspree endpoint may not be activated yet.
                      </p>
                    </motion.div>
                  )}
                  
                  <motion.button 
                    type="submit"
                    disabled={formStatus === 'submitting' || !isFormValidSubmit}
                    whileHover={isFormValidSubmit ? { scale: 1.02 } : {}}
                    whileTap={isFormValidSubmit ? { scale: 0.98 } : {}}
                    className={`w-full py-6 rounded-2xl font-bold flex items-center justify-center gap-4 transition-all overflow-hidden relative group ${
                      isFormValidSubmit 
                        ? 'bg-accent-blue text-white shadow-[0_20px_40px_rgba(79,142,247,0.2)] hover:shadow-[0_25px_50px_rgba(79,142,247,0.4)]' 
                        : 'bg-white/5 text-muted/40 cursor-not-allowed border border-white/5'
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-3 text-lg">
                      {formStatus === 'submitting' ? 'Transmitting...' : 'Execute Connection'}
                      {isFormValidSubmit && <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                    </span>
                    {isFormValidSubmit && (
                      <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-violet opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    )}
                    {isFormValidSubmit && (
                      <motion.div 
                        animate={{ left: ['-100%', '200%'] }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                        className="absolute top-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-20 pointer-events-none"
                      />
                    )}
                  </motion.button>

                  {!isFormValidSubmit && (formData.name || formData.email || formData.message) && (
                    <p className="text-center text-[10px] text-accent-violet opacity-60 font-mono tracking-widest uppercase">
                      {formData.name.trim().length <= 2 ? 'Identity Required (min 3 chars)' : 
                       !isEmailValid ? 'Enter Valid Email Frequency' : 
                       'Transmission Data Too Short (min 6 chars)'}
                    </p>
                  )}
                </form>
              )}

              {/* Card Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/5 via-transparent to-accent-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"></div>
              
              {/* Decorative internal elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/10 blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-violet/10 blur-3xl pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
