import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiArrowUpRight, FiGithub, FiArrowRight } from 'react-icons/fi';
import projects from '../data/projects';

const easeOut = [0.22, 1, 0.36, 1];

// Light-theme mockup cover, matching the white Projects section
const MockCover = ({ title, large }) => (
  <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-200 bg-white/60">
      <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
      <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
      <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
    </div>
    <div className="relative flex items-center justify-center h-[calc(100%-2.5rem)]">
      <div className={`absolute rounded-full bg-[#ff2a2a]/10 blur-[80px] ${large ? 'w-64 h-64' : 'w-32 h-32'}`} />
      <span className={`relative text-black/10 font-black tracking-tighter select-none ${large ? 'text-8xl md:text-9xl' : 'text-4xl'}`}>
        {title.slice(0, 2).toUpperCase()}
      </span>
    </div>
  </div>
);

const Block = ({ eyebrow, title, children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: easeOut, delay }}
    className="mb-14"
  >
    <span className="inline-block text-[#ff2a2a] font-black tracking-widest uppercase text-xs mb-3">
      {eyebrow}
    </span>
    <h3 className="text-gray-900 text-2xl md:text-3xl font-black tracking-tight mb-4">{title}</h3>
    <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl">{children}</p>
  </motion.div>
);

const ProjectDetail = () => {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);

  if (index === -1) return <Navigate to="/#projects" replace />;

  const project = projects[index];
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <div className="relative w-full bg-white min-h-screen overflow-hidden font-sans">
      {/* Soft red blush glows, same as the white Projects section */}
      <motion.div
        animate={{ y: [0, 30, 0], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 -right-40 w-[520px] h-[520px] rounded-full bg-[#ff2a2a]/[0.05] blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, -25, 0], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-0 -left-40 w-[460px] h-[460px] rounded-full bg-[#ff2a2a]/[0.04] blur-[140px] pointer-events-none"
      />

      <div className="relative z-20 max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-32">

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 text-sm font-semibold mb-10 transition-colors duration-300 group"
          >
            <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-block text-[#ff2a2a] font-black tracking-widest uppercase text-xs md:text-sm mb-3"
        >
          {project.tag}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-4xl md:text-7xl font-black tracking-tight text-gray-900 mb-6"
        >
          {project.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mb-8"
        >
          {project.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="flex flex-wrap items-center gap-4 mb-16"
        >
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ff2a2a] text-white font-bold text-sm shadow-[0_10px_30px_-8px_rgba(255,42,42,0.5)] hover:shadow-[0_10px_40px_-6px_rgba(255,42,42,0.7)] transition-shadow duration-300"
            >
              Live Demo <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black/5 border border-black/10 text-gray-900 font-bold text-sm hover:bg-black/10 transition-colors duration-300"
          >
            <FiGithub /> Source
          </a>
        </motion.div>

        {/* Hero cover */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: easeOut }}
          className="aspect-[16/9] rounded-3xl p-2 mb-20
                     bg-white border border-gray-200
                     shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)]"
        >
          <MockCover title={project.title} large />
        </motion.div>

        {/* Meta bar: stack chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-20"
        >
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-gray-700 bg-gray-100 border border-gray-200"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Narrative sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          <Block eyebrow="The Problem" title="What needed solving" delay={0}>
            {project.problem}
          </Block>
          <Block eyebrow="The Approach" title="How it was built" delay={0.05}>
            {project.approach}
          </Block>
          <Block eyebrow="Challenges" title="What got hard" delay={0.1}>
            {project.challenges}
          </Block>
          <Block eyebrow="What I Learned" title="Takeaways" delay={0.15}>
            {project.learnings}
          </Block>
        </div>

        {/* Key features recap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="rounded-3xl p-8 md:p-10 mb-24
                     bg-gray-50 border border-gray-200"
        >
          <h3 className="text-gray-900 text-xl md:text-2xl font-black mb-6">Key Features</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {project.points.map((pt) => (
              <li key={pt} className="flex items-start gap-3 text-gray-600 text-sm md:text-[15px]">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ff2a2a] shrink-0" />
                {pt}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Gallery grid — swap the null placeholders for real screenshots */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-24">
          {project.gallery.map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: easeOut }}
              whileHover={{ y: -6 }}
              className="aspect-[4/3] rounded-2xl p-1.5 bg-white border border-gray-200 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.15)]"
            >
              <MockCover title={project.title} />
            </motion.div>
          ))}
        </div>

        {/* Next project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <Link
            to={`/projects/${nextProject.slug}`}
            className="group flex items-center justify-between rounded-3xl p-8 md:p-10
                       bg-gradient-to-r from-[#ff2a2a]/[0.06] to-transparent
                       border border-gray-200 hover:border-[#ff2a2a]/40
                       transition-colors duration-300"
          >
            <div>
              <p className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-2">Next Project</p>
              <p className="text-gray-900 text-2xl md:text-4xl font-black tracking-tight">{nextProject.title}</p>
            </div>
            <FiArrowRight className="text-gray-900 text-2xl group-hover:translate-x-2 transition-transform duration-300 shrink-0" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;