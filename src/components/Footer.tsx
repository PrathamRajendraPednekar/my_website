import React from 'react';
import { MessageCircle } from 'lucide-react';

const Github = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: size, height: size }}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: size, height: size }}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Youtube = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: size, height: size }}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2h15a2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Column */}
          <div className="text-center md:text-left order-2 md:order-1">
            <p className="text-muted text-sm font-dm">
              Built by <span className="text-text font-medium">Pratham Pednekar</span>
            </p>
          </div>

          {/* Center Column */}
          <div className="flex justify-center order-1 md:order-2">
            <a href="#home" className="text-2xl font-mono text-glow font-bold tracking-tighter hover:scale-110 transition-transform">
              PP
            </a>
          </div>

          {/* Right Column */}
          <div className="flex justify-center md:justify-end space-x-6 order-3">
            {[
              { icon: <Github size={18} />, href: "https://github.com/PrathamRajendraPednekar" },
              { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/pratham-pednekar-1881822b5/" },
              { icon: <Youtube size={18} />, href: "https://www.youtube.com/@PrathamPednekar" },
              { icon: <MessageCircle size={18} />, href: "https://discord.gg/796381565721772032" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent-blue hover:shadow-[0_0_10px_rgba(79,142,247,0.5)] transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center border-t border-white/5 pt-8">
          <p className="text-muted text-[10px] md:text-xs uppercase tracking-[0.2em]">
            © 2025 Pratham Pednekar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
