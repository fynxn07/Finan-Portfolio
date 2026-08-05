import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiCode, FiServer, FiDatabase, FiCloud, FiTool,
} from 'react-icons/fi';

const skillGroups = [
  {
    title: 'Frontend',
    icon: FiCode,
    mastery: 88,
    skills: ['React.js', 'Redux', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    icon: FiServer,
    mastery: 90,
    skills: ['Python', 'Django', 'Django REST Framework'],
  },
  {
    title: 'Database',
    icon: FiDatabase,
    mastery: 80,
    skills: ['PostgreSQL', 'ORM'],
  },
  {
    title: 'Cloud & DevOps',
    icon: FiCloud,
    mastery: 74,
    skills: ['AWS EC2', 'CI/CD — GitHub Actions', 'Nginx', 'Gunicorn'],
  },
  {
    title: 'Tools',
    icon: FiTool,
    mastery: 88,
    skills: ['Git & GitHub', 'VS Code', 'Postman'],
  },
];

const softSkills = ['Problem Solving', 'Communication', 'Team Collaboration', 'Adaptability'];

const RADIUS = 42;
const CIRC = 2 * Math.PI * RADIUS;

const RingCard = ({ group, index }) => {
  const [inView, setInView] = useState(false);
  const Icon = group.icon;
  const offset = CIRC - (group.mastery / 100) * CIRC;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      onViewportEnter={() => setInView(true)}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
      style={{ transformStyle: 'preserve-3d', perspective: 800 }}
      className="relative rounded-3xl p-7 md:p-8
                 bg-gradient-to-b from-white/[0.07] to-white/[0.02]
                 border border-white/10 backdrop-blur-2xl
                 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]
                 hover:border-[#ff2a2a]/40 hover:shadow-[0_20px_60px_-10px_rgba(255,42,42,0.25)]
                 transition-[border,box-shadow] duration-500"
    >
      {/* subtle inner glow */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#ff2a2a]/[0.06] to-transparent" />

      <div className="relative z-10 flex items-center gap-5 mb-6">
        {/* Circular progress ring */}
        <div className="relative w-[92px] h-[92px] shrink-0">
          <svg width="92" height="92" viewBox="0 0 100 100" className="-rotate-90">
            <circle cx="50" cy="50" r={RADIUS} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="7" />
            <circle
              cx="50" cy="50" r={RADIUS} fill="none"
              stroke="url(#ringGradient)"
              strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray={CIRC}
              strokeDashoffset={inView ? offset : CIRC}
              style={{ transition: 'stroke-dashoffset 1.4s cubic-bezier(0.22,1,0.36,1) 0.15s' }}
            />
            <defs>
              <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff2a2a" />
                <stop offset="100%" stopColor="#ff8a5c" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Icon className="text-white mb-0.5" size={18} />
            <span className="text-white text-xs font-black tabular-nums">{group.mastery}%</span>
          </div>
        </div>

        <h3 className="text-white text-xl md:text-2xl font-black tracking-tight leading-tight">
          {group.title}
        </h3>
      </div>

      {/* Skill chips */}
      <div className="relative z-10 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="px-3.5 py-1.5 rounded-full text-xs md:text-sm font-semibold text-white/85
                       bg-white/[0.06] border border-white/10 backdrop-blur-md
                       hover:bg-[#ff2a2a] hover:text-white hover:border-[#ff2a2a]
                       hover:scale-105 transition-all duration-300 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full bg-black  pt-32 pb-32 px-6 md:px-12 overflow-hidden font-sans"
    >
      {/* Ambient glow orbs — gives depth instead of flat black */}
      <motion.div
        animate={{ y: [0, 30, 0], opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[#ff2a2a]/25 blur-[130px] pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, -25, 0], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-[#ff2a2a]/20 blur-[130px] pointer-events-none"
      />

      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-16 relative z-20">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-[#ff2a2a] font-black tracking-widest uppercase text-xs md:text-sm mb-3"
        >
          What I Work With
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent"
        >
          Skills & Stack
        </motion.h2>
      </div>

      {/* Skill group cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 relative z-20">
        {skillGroups.map((group, i) => (
          <RingCard key={group.title} group={group} index={i} />
        ))}

        {/* Soft skills — glass ribbon, full width on md */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: skillGroups.length * 0.08 }}
          className="relative rounded-3xl p-7 md:p-8 flex flex-col justify-center
                     bg-gradient-to-r from-[#ff2a2a]/90 to-[#ff2a2a]/70
                     border border-white/10 backdrop-blur-2xl
                     shadow-[0_20px_60px_-15px_rgba(255,42,42,0.4)]"
        >
          <h3 className="text-black text-xl md:text-2xl font-black mb-6">Soft Skills</h3>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-black/85 text-white text-xs md:text-sm font-bold tracking-wide
                           hover:scale-105 hover:bg-black transition-transform duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>


      {/* <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div> */}

    </section>
  );
};

export default Skills;