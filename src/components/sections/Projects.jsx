

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Link, useNavigate } from 'react-router-dom';
// import { FiGithub, FiArrowUpRight, FiServer } from 'react-icons/fi';
// import projects from '../../data/projects';

// const ProjectCard = ({ project, index }) => {
//   const reversed = index % 2 === 1;
//   const [tilt, setTilt] = useState({ x: 0, y: 0 });

//   const navigate = useNavigate();

//   const openProject = () => {
//     navigate(`/projects/${project.slug}`);
//   };

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const px = (e.clientX - rect.left) / rect.width - 0.5;
//     const py = (e.clientY - rect.top) / rect.height - 0.5;
//     setTilt({ x: py * -6, y: px * 6 });
//   };
//   const resetTilt = () => setTilt({ x: 0, y: 0 });

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.25 }}
//       transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//       className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center ${reversed ? 'md:[&>*:first-child]:order-2' : ''
//         }`}
//     >
//       {/* Cover — real (placeholder) image, links to case study */}
//         <motion.div
//           onClick={openProject}
//           onMouseMove={handleMouseMove}
//           onMouseLeave={resetTilt}
//           animate={{ rotateX: tilt.x, rotateY: tilt.y }}
//           transition={{ type: 'spring', stiffness: 150, damping: 15 }}
//           style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
//           className="relative aspect-[4/3] rounded-3xl p-2 cursor-pointer
//                      bg-white border border-gray-200
//                      shadow-[0_25px_60px_-20px_rgba(0,0,0,0.18)]"
//         >
//           <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[#ff2a2a]/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
//           <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
//             <img
//               src={project.cover}
//               alt={`${project.title} cover`}
//               loading="lazy"
//               decoding="async"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </motion.div>


//       {/* Content */}
//       <div className="relative z-10">
//         <span className="inline-block text-[#ff2a2a] font-black tracking-widest uppercase text-xs md:text-sm mb-3">
//           {project.tag}
//         </span>
//         <h3 className="text-gray-900 text-3xl md:text-4xl font-black tracking-tight mb-4">
//           {project.title}
//         </h3>
//         <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6 max-w-md">
//           {project.description}
//         </p>

//         <ul className="space-y-2.5 mb-7">
//           {project.points.map((pt) => (
//             <li key={pt} className="flex items-start gap-3 text-gray-600 text-sm md:text-[15px]">
//               <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ff2a2a] shrink-0" />
//               {pt}
//             </li>
//           ))}
//         </ul>

//         <div className="flex flex-wrap gap-2 mb-8">
//           {project.stack.map((tech) => (
//             <span
//               key={tech}
//               className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-gray-700
//                          bg-gray-100 border border-gray-200
//                          hover:bg-[#ff2a2a] hover:text-white hover:border-[#ff2a2a]
//                          transition-all duration-300 cursor-default"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>

//         <div className="flex flex-wrap items-center gap-4">
//           <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
//             <button
//               onClick={openProject}
//               className="group inline-flex items-center gap-2 px-6 py-3 rounded-full
//                          bg-[#ff2a2a] text-white font-bold text-sm
//                          shadow-[0_10px_30px_-8px_rgba(255,42,42,0.5)]
//                          hover:shadow-[0_10px_40px_-6px_rgba(255,42,42,0.7)] transition-shadow duration-300"
//             >
//               View Case Study
//               <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//             </button>
//           </motion.div>
//           <motion.a
//             href={project.github}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.04, y: -2 }}
//             whileTap={{ scale: 0.97 }}
//             className="inline-flex items-center gap-2 px-6 py-3 rounded-full
//                        bg-black/5 border border-black/10 text-gray-900 font-bold text-sm
//                        hover:bg-black/10 transition-colors duration-300"
//           >
//             <FiGithub /> {project.githubBackend ? 'Frontend' : 'Source'}
//           </motion.a>
//           {project.githubBackend && (
//             <motion.a
//               href={project.githubBackend}
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.04, y: -2 }}
//               whileTap={{ scale: 0.97 }}
//               className="inline-flex items-center gap-2 px-6 py-3 rounded-full
//                          bg-black/5 border border-black/10 text-gray-900 font-bold text-sm
//                          hover:bg-black/10 transition-colors duration-300"
//             >
//               <FiServer /> Backend
//             </motion.a>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="relative w-full bg-white pt-32 pb-40 px-6 md:px-12 overflow-hidden font-sans "
//     >
//       <motion.div
//         animate={{ y: [0, 30, 0], opacity: [0.5, 0.7, 0.5] }}
//         transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
//         className="absolute top-40 -right-40 w-[520px] h-[520px] rounded-full bg-[#ff2a2a]/[0.05] blur-[140px] pointer-events-none"
//       />
//       <motion.div
//         animate={{ y: [0, -25, 0], opacity: [0.4, 0.6, 0.4] }}
//         transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
//         className="absolute bottom-10 -left-40 w-[460px] h-[460px] rounded-full bg-[#ff2a2a]/[0.04] blur-[140px] pointer-events-none"
//       />

//       <div className="max-w-6xl mx-auto mb-20 relative z-20">
//         <motion.span
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="inline-block text-[#ff2a2a] font-black tracking-widest uppercase text-xs md:text-sm mb-3"
//         >
//           Selected Work
//         </motion.span>
//         <motion.h2
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.08 }}
//           className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 max-w-2xl"
//         >
//           Things I've built end‑to‑end
//         </motion.h2>
//       </div>

//       <div className="max-w-6xl mx-auto flex flex-col gap-28 md:gap-36 relative z-20">
//         {projects.map((project, i) => (
//           <ProjectCard key={project.slug} project={project} index={i} />
//         ))}
//       </div>


//     </section>
//   );
// };

// export default Projects;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FiGithub, FiArrowUpRight, FiServer } from 'react-icons/fi';
import projects from '../../data/projects';
import ScreenshotFrame from '../ui/ScreenshotFrame';

const ProjectCard = ({ project, index }) => {
  const reversed = index % 2 === 1;
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const navigate = useNavigate();

  const openProject = () => {
    navigate(`/projects/${project.slug}`);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 6 });
  };
  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center ${reversed ? 'md:[&>*:first-child]:order-2' : ''
        }`}
    >
      {/* Cover — real screenshot, framed like a browser window so the
          FULL image is always visible, never cropped */}
      <motion.div
        onClick={openProject}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
        style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
        className="relative rounded-3xl p-2 cursor-pointer
                   bg-white border border-gray-200
                   shadow-[0_25px_60px_-20px_rgba(0,0,0,0.18)]"
      >
        <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[#ff2a2a]/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
        <ScreenshotFrame src={project.cover} alt={`${project.title} cover`} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        <span className="inline-block text-[#ff2a2a] font-black tracking-widest uppercase text-xs md:text-sm mb-3">
          {project.tag}
        </span>
        <h3 className="text-gray-900 text-3xl md:text-4xl font-black tracking-tight mb-4">
          {project.title}
        </h3>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6 max-w-md">
          {project.description}
        </p>

        <ul className="space-y-2.5 mb-7">
          {project.points.map((pt) => (
            <li key={pt} className="flex items-start gap-3 text-gray-600 text-sm md:text-[15px]">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ff2a2a] shrink-0" />
              {pt}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-gray-700
                         bg-gray-100 border border-gray-200
                         hover:bg-[#ff2a2a] hover:text-white hover:border-[#ff2a2a]
                         transition-all duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
            <button
              onClick={openProject}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full
                         bg-[#ff2a2a] text-white font-bold text-sm
                         shadow-[0_10px_30px_-8px_rgba(255,42,42,0.5)]
                         hover:shadow-[0_10px_40px_-6px_rgba(255,42,42,0.7)] transition-shadow duration-300"
            >
              View Case Study
              <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                       bg-black/5 border border-black/10 text-gray-900 font-bold text-sm
                       hover:bg-black/10 transition-colors duration-300"
          >
            <FiGithub /> {project.githubBackend ? 'Frontend' : 'Source'}
          </motion.a>
          {project.githubBackend && (
            <motion.a
              href={project.githubBackend}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                         bg-black/5 border border-black/10 text-gray-900 font-bold text-sm
                         hover:bg-black/10 transition-colors duration-300"
            >
              <FiServer /> Backend
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full bg-white pt-32 pb-40 px-6 md:px-12 overflow-hidden font-sans "
    >
      <motion.div
        animate={{ y: [0, 30, 0], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-40 -right-40 w-[520px] h-[520px] rounded-full bg-[#ff2a2a]/[0.05] blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, -25, 0], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-10 -left-40 w-[460px] h-[460px] rounded-full bg-[#ff2a2a]/[0.04] blur-[140px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto mb-20 relative z-20">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-[#ff2a2a] font-black tracking-widest uppercase text-xs md:text-sm mb-3"
        >
          Selected Work
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 max-w-2xl"
        >
          Things I've built end‑to‑end
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-28 md:gap-36 relative z-20">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>


    </section>
  );
};

export default Projects;