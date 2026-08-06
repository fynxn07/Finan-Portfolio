// import React from 'react';
// import { useParams, Link, Navigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FiArrowLeft, FiArrowUpRight, FiGithub, FiArrowRight, FiServer } from 'react-icons/fi';
// import projects from '../data/projects';

// const easeOut = [0.22, 1, 0.36, 1];

// const fadeUp = {
//   hidden: { opacity: 0, y: 28 },
//   show: { opacity: 1, y: 0 },
// };

// // Numbered, editorial-style narrative block — the premium "case study"
// // feel comes largely from this pattern (serif display heading, thin
// // number label, generous whitespace) rather than from new colors.
// const Block = ({ index, eyebrow, title, children, delay = 0 }) => (
//   <motion.div
//     variants={fadeUp}
//     initial="hidden"
//     whileInView="show"
//     viewport={{ once: true, amount: 0.35 }}
//     transition={{ duration: 0.7, ease: easeOut, delay }}
//     className="relative pt-10 mb-16 border-t border-gray-100"
//   >
//     <span className="absolute top-10 left-0 text-gray-200 text-5xl font-serif italic select-none hidden md:block">
//       {index}
//     </span>
//     <div className="md:pl-16">
//       <span className="inline-block text-[#ff2a2a] font-black tracking-widest uppercase text-xs mb-3">
//         {eyebrow}
//       </span>
//       <h3 className="text-gray-900 text-2xl md:text-3xl font-black tracking-tight mb-4 font-['Fraunces',_serif]">
//         {title}
//       </h3>
//       <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl">{children}</p>
//     </div>
//   </motion.div>
// );

// const ImageFrame = ({ src, alt, large, className = '' }) => (
//   <div className={`relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden bg-gray-100 border border-gray-200 ${className}`}>
//     <img
//       src={src}
//       alt={alt}
//       loading="lazy"
//       decoding="async"
//       className="w-full h-full object-cover"
//     />
//     {/* subtle top sheen — keeps images feeling like part of the same
//         premium system rather than raw dropped-in photos */}
//     <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/5" />
//   </div>
// );

// const ProjectDetail = () => {
//   const { slug } = useParams();
//   const index = projects.findIndex((p) => p.slug === slug);

//   if (index === -1) return <Navigate to="/#projects" replace />;

//   const project = projects[index];
//   const nextProject = projects[(index + 1) % projects.length];

//   return (
//     <div className="relative w-full bg-white min-h-screen overflow-hidden font-sans">
//       {/* Soft red blush glows, same as the white Projects section — unchanged */}
//       <motion.div
//         animate={{ y: [0, 30, 0], opacity: [0.5, 0.7, 0.5] }}
//         transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
//         className="absolute top-0 -right-40 w-[520px] h-[520px] rounded-full bg-[#ff2a2a]/[0.05] blur-[140px] pointer-events-none"
//       />
//       <motion.div
//         animate={{ y: [0, -25, 0], opacity: [0.4, 0.6, 0.4] }}
//         transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
//         className="absolute bottom-0 -left-40 w-[460px] h-[460px] rounded-full bg-[#ff2a2a]/[0.04] blur-[140px] pointer-events-none"
//       />

//       <div className="relative z-20 max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-32">

//         {/* Back link */}
//         <motion.div
//           initial={{ opacity: 0, x: -16 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Link
//             to="/#projects"
//             className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 text-sm font-semibold mb-10 transition-colors duration-300 group"
//           >
//             <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
//             Back to Projects
//           </Link>
//         </motion.div>

//         {/* Header */}
//         <motion.span
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1, ease: easeOut }}
//           className="inline-block text-[#ff2a2a] font-black tracking-widest uppercase text-xs md:text-sm mb-4"
//         >
//           {project.tag}
//         </motion.span>
//         <motion.h1
//           initial={{ opacity: 0, y: 28 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.15, duration: 0.7, ease: easeOut }}
//           className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-gray-900 mb-7 font-['Fraunces',_serif] leading-[0.95]"
//         >
//           {project.title}
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 24 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.22, ease: easeOut }}
//           className="text-gray-500 text-base md:text-xl leading-relaxed max-w-2xl mb-10 font-light"
//         >
//           {project.description}
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.28, ease: easeOut }}
//           className="flex flex-wrap items-center gap-4 mb-20"
//         >
//           {project.live && (
//             <a
//               href={project.live}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ff2a2a] text-white font-bold text-sm shadow-[0_10px_30px_-8px_rgba(255,42,42,0.5)] hover:shadow-[0_14px_40px_-6px_rgba(255,42,42,0.7)] hover:-translate-y-0.5 transition-all duration-300"
//             >
//               Live Demo <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//             </a>
//           )}
//           <a
//             href={project.github}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black/5 border border-black/10 text-gray-900 font-bold text-sm hover:bg-black/10 hover:-translate-y-0.5 transition-all duration-300"
//           >
//             <FiGithub /> {project.githubBackend ? 'Frontend' : 'Source'}
//           </a>
//           {project.githubBackend && (
//             <a
//               href={project.githubBackend}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black/5 border border-black/10 text-gray-900 font-bold text-sm hover:bg-black/10 hover:-translate-y-0.5 transition-all duration-300"
//             >
//               <FiServer /> Backend
//             </a>
//           )}
//         </motion.div>

//         {/* Hero cover — real (placeholder) image now, swap the URL in data/projects.js */}
//         <motion.div
//           initial={{ opacity: 0, y: 40, scale: 0.98 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{ delay: 0.34, duration: 0.8, ease: easeOut }}
//           className="aspect-[16/9] rounded-3xl p-2 mb-20
//                      bg-white border border-gray-200
//                      shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)]"
//         >
//           <ImageFrame src={project.cover} alt={`${project.title} cover`} large />
//         </motion.div>

//         {/* Meta bar: stack chips */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="flex flex-wrap gap-2 mb-24"
//         >
//           {project.stack.map((tech) => (
//             <span
//               key={tech}
//               className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-gray-700 bg-gray-100 border border-gray-200"
//             >
//               {tech}
//             </span>
//           ))}
//         </motion.div>

//         {/* Narrative sections — editorial numbered layout */}
//         <div className="mb-8">
//           <Block index="01" eyebrow="The Problem" title="What needed solving" delay={0}>
//             {project.problem}
//           </Block>
//           <Block index="02" eyebrow="The Approach" title="How it was built" delay={0.05}>
//             {project.approach}
//           </Block>
//           <Block index="03" eyebrow="Challenges" title="What got hard" delay={0.1}>
//             {project.challenges}
//           </Block>
//           <Block index="04" eyebrow="What I Learned" title="Takeaways" delay={0.15}>
//             {project.learnings}
//           </Block>
//         </div>

//         {/* Key features recap */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6, ease: easeOut }}
//           className="rounded-3xl p-8 md:p-12 mb-24
//                      bg-gradient-to-b from-gray-50 to-white border border-gray-200"
//         >
//           <h3 className="text-gray-900 text-xl md:text-2xl font-black mb-8 font-['Fraunces',_serif]">
//             Key Features
//           </h3>
//           <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
//             {project.points.map((pt) => (
//               <li key={pt} className="flex items-start gap-3 text-gray-600 text-sm md:text-[15px] leading-relaxed">
//                 <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ff2a2a] shrink-0" />
//                 {pt}
//               </li>
//             ))}
//           </ul>
//         </motion.div>

//         {/* Gallery grid — real (placeholder) images, subtle hover lift + zoom */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-24">
//           {project.gallery.map((src, i) => (
//             <motion.div
//               key={src}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.55, delay: i * 0.08, ease: easeOut }}
//               whileHover={{ y: -6 }}
//               className="group aspect-[4/3] rounded-2xl p-1.5 bg-white border border-gray-200 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.15)] overflow-hidden"
//             >
//               <div className="w-full h-full overflow-hidden rounded-xl">
//                 <img
//                   src={src}
//                   alt={`${project.title} screenshot ${i + 1}`}
//                   loading="lazy"
//                   decoding="async"
//                   className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Next project */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6, ease: easeOut }}
//         >
//           <Link
//             to={`/projects/${nextProject.slug}`}
//             className="group flex items-center justify-between rounded-3xl p-8 md:p-12
//                        bg-gradient-to-r from-[#ff2a2a]/[0.06] to-transparent
//                        border border-gray-200 hover:border-[#ff2a2a]/40
//                        transition-colors duration-300"
//           >
//             <div>
//               <p className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-2">Next Project</p>
//               <p className="text-gray-900 text-3xl md:text-5xl font-black tracking-tight font-['Fraunces',_serif]">
//                 {nextProject.title}
//               </p>
//             </div>
//             <FiArrowRight className="text-gray-900 text-2xl group-hover:translate-x-2 transition-transform duration-300 shrink-0" />
//           </Link>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetail;

import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiArrowUpRight, FiGithub, FiArrowRight, FiServer } from 'react-icons/fi';
import projects from '../data/projects';

const easeOut = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const Block = ({ index, eyebrow, title, children, delay = 0 }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.35 }}
    transition={{ duration: 0.7, ease: easeOut, delay }}
    className="relative pt-10 mb-16 border-t border-gray-100"
  >
    <span className="absolute top-10 left-0 text-gray-200 text-5xl font-['Fraunces',_serif] italic select-none hidden md:block">
      {index}
    </span>
    <div className="md:pl-16">
      <span className="inline-block text-[#ff2a2a] font-black tracking-widest uppercase text-xs mb-3">
        {eyebrow}
      </span>
      <h3 className="text-gray-900 text-2xl md:text-3xl font-black tracking-tight mb-4 font-['Fraunces',_serif]">
        {title}
      </h3>
      <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl">{children}</p>
    </div>
  </motion.div>
);

const ImageFrame = ({ src, alt, large, className = '' }) => (
  <div className={`relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden bg-gray-100 border border-gray-200 ${className}`}>
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className="w-full h-full object-cover"
    />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/5" />
  </div>
);

// Minimal, single-purpose header — no logo/name (this page doesn't need
// brand repetition), just "Back to Projects" in the top-LEFT, matching
// the universal back-navigation convention (arrow points left, sits
// left). Transparent over the hero content at the top, gains a solid
// blurred background only once you scroll — the same pattern premium
// editorial sites (Stripe Press, Linear case studies) use, instead of
// a flat opaque bar from the very first frame.
const MiniHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Link
          to="/#projects"
          className="group inline-flex items-center gap-3 text-gray-700 hover:text-gray-900 text-sm font-semibold transition-colors duration-300"
        >
          <span className="w-9 h-9 rounded-full bg-black/5 group-hover:bg-[#ff2a2a] flex items-center justify-center transition-colors duration-300 shrink-0">
            <FiArrowLeft className="text-gray-700 group-hover:text-white transition-all duration-300 group-hover:-translate-x-0.5" size={16} />
          </span>
          Back to Projects
        </Link>
      </div>
    </motion.header>
  );
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);

  if (index === -1) return <Navigate to="/#projects" replace />;

  const project = projects[index];
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <div className="relative w-full bg-white min-h-screen overflow-hidden font-sans">
      <MiniHeader />

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

      <div className="relative z-20 max-w-6xl mx-auto px-6 md:px-12 pt-28 pb-32">

        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, ease: easeOut }}
          className="inline-block text-[#ff2a2a] font-black tracking-widest uppercase text-xs md:text-sm mb-4"
        >
          {project.tag}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: easeOut }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-gray-900 mb-7 font-['Fraunces',_serif] leading-[0.95]"
        >
          {project.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, ease: easeOut }}
          className="text-gray-500 text-base md:text-xl leading-relaxed max-w-2xl mb-10 font-light"
        >
          {project.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, ease: easeOut }}
          className="flex flex-wrap items-center gap-4 mb-20"
        >
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ff2a2a] text-white font-bold text-sm shadow-[0_10px_30px_-8px_rgba(255,42,42,0.5)] hover:shadow-[0_14px_40px_-6px_rgba(255,42,42,0.7)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Live Demo <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black/5 border border-black/10 text-gray-900 font-bold text-sm hover:bg-black/10 hover:-translate-y-0.5 transition-all duration-300"
          >
            <FiGithub /> {project.githubBackend ? 'Frontend' : 'Source'}
          </a>
          {project.githubBackend && (
            <a
              href={project.githubBackend}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black/5 border border-black/10 text-gray-900 font-bold text-sm hover:bg-black/10 hover:-translate-y-0.5 transition-all duration-300"
            >
              <FiServer /> Backend
            </a>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.34, duration: 0.8, ease: easeOut }}
          className="aspect-[16/9] rounded-3xl p-2 mb-20
                     bg-white border border-gray-200
                     shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)]"
        >
          <ImageFrame src={project.cover} alt={`${project.title} cover`} large />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-24"
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

        <div className="mb-8">
          <Block index="01" eyebrow="The Problem" title="What needed solving" delay={0}>
            {project.problem}
          </Block>
          <Block index="02" eyebrow="The Approach" title="How it was built" delay={0.05}>
            {project.approach}
          </Block>
          <Block index="03" eyebrow="Challenges" title="What got hard" delay={0.1}>
            {project.challenges}
          </Block>
          <Block index="04" eyebrow="What I Learned" title="Takeaways" delay={0.15}>
            {project.learnings}
          </Block>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="rounded-3xl p-8 md:p-12 mb-24
                     bg-gradient-to-b from-gray-50 to-white border border-gray-200"
        >
          <h3 className="text-gray-900 text-xl md:text-2xl font-black mb-8 font-['Fraunces',_serif]">
            Key Features
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
            {project.points.map((pt) => (
              <li key={pt} className="flex items-start gap-3 text-gray-600 text-sm md:text-[15px] leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ff2a2a] shrink-0" />
                {pt}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-24">
          {project.gallery.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: easeOut }}
              whileHover={{ y: -6 }}
              className="group aspect-[4/3] rounded-2xl p-1.5 bg-white border border-gray-200 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.15)] overflow-hidden"
            >
              <div className="w-full h-full overflow-hidden rounded-xl">
                <img
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <Link
            to={`/projects/${nextProject.slug}`}
            className="group flex items-center justify-between rounded-3xl p-8 md:p-12
                       bg-gradient-to-r from-[#ff2a2a]/[0.06] to-transparent
                       border border-gray-200 hover:border-[#ff2a2a]/40
                       transition-colors duration-300"
          >
            <div>
              <p className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-2">Next Project</p>
              <p className="text-gray-900 text-3xl md:text-5xl font-black tracking-tight font-['Fraunces',_serif]">
                {nextProject.title}
              </p>
            </div>
            <FiArrowRight className="text-gray-900 text-2xl group-hover:translate-x-2 transition-transform duration-300 shrink-0" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;