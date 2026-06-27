import React from 'react';
import { motion } from 'framer-motion';
import { Database, Brain, BarChart3, Wrench, Users, Terminal, Code2, Cpu, Globe, Rocket } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const skillCategories = [
  {
    title: "Programming",
    icon: <Code2 className="text-accent-blue" size={32} />,
    color: "accent-blue",
    skills: ["Python", "C++", "JavaScript", "SQL", "R"]
  },
  {
    title: "AI / ML Core",
    icon: <Brain className="text-accent-violet" size={32} />,
    color: "accent-violet",
    skills: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "Hugging Face"]
  },
  {
    title: "Computer Vision",
    icon: <Cpu className="text-blue-400" size={32} />,
    color: "blue-400",
    skills: ["OpenCV", "MediaPipe", "YOLO", "Image Processing"]
  },
  {
    title: "NLP",
    icon: <Globe className="text-emerald-400" size={32} />,
    color: "emerald-400",
    skills: ["NLTK", "SpaCy", "Transformers", "BERT", "LLMs"]
  },
  {
    title: "Data Science",
    icon: <BarChart3 className="text-orange-400" size={32} />,
    color: "orange-400",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI"]
  },
  {
    title: "Dev & Tools",
    icon: <Wrench className="text-pink-400" size={32} />,
    color: "pink-400",
    skills: ["Git", "GitHub", "Docker", "Jupyter", "Colab"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    x: 100, 
    rotateY: 45,
    scale: 0.8
  },
  visible: { 
    opacity: 1, 
    x: 0, 
    rotateY: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative py-32 overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent-blue/10 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-violet/10 blur-[120px] rounded-full"></div>

      {/* Ghost Number */}
      <div className="absolute top-20 right-10 text-[15vw] font-sora font-black opacity-[0.03] select-none pointer-events-none">
        02
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-sora font-bold flex items-center gap-4">
            <span className="text-accent-blue font-mono text-2xl md:text-3xl">02.</span>
            Tech Arsenal
            <div className="h-[2px] flex-grow bg-gradient-to-r from-accent-blue/50 to-transparent ml-4"></div>
          </h2>
          <p className="text-muted mt-6 max-w-2xl text-lg font-dm">
            A comprehensive list of technologies and tools I use to bring intelligent solutions to life.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group"
            >
              <Tilt
                perspective={1000}
                glareEnable={true}
                glareMaxOpacity={0.1}
                glareColor="#ffffff"
                glarePosition="all"
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                className="h-full"
              >
                <div className="glass p-8 rounded-[2rem] border-white/5 h-full relative overflow-hidden transition-all duration-500 hover:border-accent-blue/30 hover:shadow-[0_20px_50px_rgba(79,142,247,0.1)]">
                  {/* Card Background Glow */}
                  <div className={`absolute -top-24 -right-24 w-48 h-48 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full blur-3xl bg-accent-blue/20`}></div>
                  
                  <div className="flex items-start justify-between mb-8">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-accent-blue/30 transition-all duration-300">
                      {category.icon}
                    </div>
                    <div className="text-accent-blue/20 group-hover:text-accent-blue/40 transition-colors">
                      <Rocket size={40} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-sora font-bold mb-6 tracking-tight group-hover:text-accent-blue transition-colors">
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-mono text-muted/80 group-hover:text-text group-hover:border-white/20 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Decorative Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent translate-y-1 group-hover:translate-y-0 transition-transform duration-500"></div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
