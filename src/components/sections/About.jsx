// import React, { useState, useEffect, useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { SiReact, SiPython, SiDjango, SiPostgresql } from 'react-icons/si';
// import { FiBriefcase } from 'react-icons/fi';
// import stackImage from '../../assets/about/image.png';
// import GlowOrbs from '../ui/GlowOrbs';

// const stats = [
//   { label: 'Years Learning', value: 3, suffix: '+' },
//   { label: 'Projects Completed', value: 5, suffix: '+' },
//   { label: 'Technologies', value: 15, suffix: '+' },
//   { label: 'Certifications', value: 1, suffix: '' },
// ];

// const techCards = [
//   { icon: SiReact, name: 'React', color: '#61DAFB' },
//   { icon: SiPython, name: 'Python', color: '#FFD43B' },
//   { icon: SiDjango, name: 'Django', color: '#0C4B33' },
//   { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
// ];

// const easeOut = [0.22, 1, 0.36, 1];

// const Counter = ({ value, suffix }) => {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, amount: 0.6 });
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!inView) return;

//     let frameId;

//     const duration = 1200;
//     const start = performance.now();

//     const tick = (now) => {
//       const progress = Math.min((now - start) / duration, 1);
//       const eased = 1 - Math.pow(1 - progress, 3);

//       setCount(Math.round(eased * value));

//       if (progress < 1) {
//         frameId = requestAnimationFrame(tick);
//       }
//     };

//     frameId = requestAnimationFrame(tick);

//     return () => cancelAnimationFrame(frameId);
//   }, [inView, value]);

//   return (
//     <span ref={ref} className="tabular-nums">
//       {count}{suffix}
//     </span>
//   );
// };

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="relative bg-[#ff2a2a] pt-28 pb-40 px-6 md:px-12 w-full overflow-hidden font-sans"
//     >
//       <GlowOrbs tone="dark" />

//       <div className="max-w-6xl mx-auto relative z-20">

//         <motion.span
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="inline-block text-black/70 font-black tracking-widest uppercase text-xs md:text-sm mb-3"
//         >
//           Get To Know Me
//         </motion.span>

//         <div className="flex flex-col md:flex-row gap-16 items-start">

//           <motion.div
//             initial={{ opacity: 0, y: -40, rotate: -6 }}
//             whileInView={{ opacity: 1, y: 0, rotate: -3 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.9, ease: easeOut }}
//             whileHover={{ rotate: 0, scale: 1.03 }}
//             className="flex flex-col items-center w-full md:w-[300px] shrink-0 mt-8 md:mt-4 mx-auto md:mx-0"
//           >
//             <div className="relative flex justify-center w-full">
//               <div className="absolute -top-28 left-1/2 w-2.5 h-36 bg-black/80 -translate-x-1/2 shadow-inner z-0 rounded-full" />
//               <div className="absolute -top-5 left-1/2 w-6 h-11 bg-gray-300 rounded border border-gray-400 -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]" />

//               <div className="relative bg-black/90 backdrop-blur-xl w-full max-w-[280px] rounded-2xl p-3 shadow-[0_25px_50px_rgba(0,0,0,0.45)] border border-white/10 z-20">
//                 <div className="absolute -top-3 left-1/2 w-16 h-6 bg-black/90 rounded-t-xl -translate-x-1/2 flex justify-center items-center">
//                   <div className="w-8 h-2 bg-black/40 rounded-full shadow-inner" />
//                 </div>
//                 <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-white/5 border border-white/10">
//                   <img
//                     src={stackImage}
//                     alt="Finan Roshan"
//                     loading="lazy"
//                     decoding="async"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="pt-3 pb-1 text-center">
//                   <p className="text-white font-black text-sm">Finan Roshan K</p>
//                   <p className="text-[#ff2a2a] text-[11px] font-bold tracking-widest uppercase">Full Stack Dev</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           <div className="flex-1 w-full">
//             <motion.h2
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.1, ease: easeOut }}
//               className="text-4xl md:text-6xl font-black text-black mb-5 tracking-tight"
//             >
//               Hello!
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.18, ease: easeOut }}
//               className="text-black/85 text-base md:text-lg font-semibold mb-4 leading-relaxed max-w-xl"
//             >
//               I'm <span className="font-black uppercase">Finan Roshan</span>, a full-stack developer
//               based in Kerala, dedicated to crafting clean, functional, and highly scalable web
//               applications with React and Django REST Framework.
//             </motion.p>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.24, ease: easeOut }}
//               className="text-black/70 text-sm md:text-base font-medium mb-9 leading-relaxed max-w-xl"
//             >
//               I completed my BCA at Gems Arts and Science College (University of Calicut) in 2025,
//               and I'm currently growing as a Frontend / Full Stack Intern at Bridgeon Solutions —
//               shipping real REST APIs, PostgreSQL-backed features, and production deployments,
//               not just tutorials.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.3, ease: easeOut }}
//               className="flex items-center gap-4 bg-black/85 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4 mb-10 max-w-xl shadow-[0_15px_40px_rgba(0,0,0,0.35)]"
//             >
//               <div className="w-11 h-11 rounded-xl bg-[#ff2a2a]/20 border border-[#ff2a2a]/40 flex items-center justify-center text-[#ff2a2a] shrink-0">
//                 <FiBriefcase size={18} />
//               </div>
//               <div>
//                 <p className="text-white/40 text-[11px] font-bold tracking-widest uppercase">Currently</p>
//                 <p className="text-white text-sm md:text-[15px] font-bold">
//                   Frontend / Full Stack Intern @ Bridgeon Solutions
//                 </p>
//               </div>
//             </motion.div>

//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
//               {stats.map((s, i) => (
//                 <motion.div
//                   key={s.label}
//                   initial={{ opacity: 0, y: 24 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.35 + i * 0.08, ease: easeOut }}
//                   whileHover={{ y: -4,scale: 1.06 }}
//                   className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
//                 >
//                   <p className="text-white text-2xl md:text-3xl font-black mb-1">
//                     <Counter value={s.value} suffix={s.suffix} />
//                   </p>
//                   <p className="text-white/50 text-[10px] md:text-xs font-bold tracking-wide uppercase">
//                     {s.label}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>

//             <div className="flex flex-wrap gap-4">
//               {techCards.map(({ icon: Icon, name, color }, i) => (
//                 <motion.div
//                   key={name}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.6 + i * 0.08, ease: easeOut }}
//                   style={{ willChange: "transform" }}
//                   whileHover={{ y: -6, scale: 1.06 }}
//                   className="group flex items-center gap-3 bg-black/85 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-[0_10px_25px_rgba(0,0,0,0.3)] hover:border-white/25 transition-colors duration-300"
//                 >
//                   <Icon size={22} style={{ color }} />
//                   <span className="text-white text-sm font-bold">{name}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Torn paper divider — matches the WHITE Services section that follows */}
//       <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 translate-y-1">
//         <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
//           <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
//         </svg>
//       </div>

//       <motion.div
//         animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
//         transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
//         className="absolute top-10 right-10 md:right-20 text-black/25"
//       >
//         <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
//         </svg>
//       </motion.div>
//       <motion.div
//         animate={{ y: [0, 14, 0], rotate: [0, -8, 0] }}
//         transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
//         className="absolute bottom-32 left-4 md:left-20 text-black/25"
//       >
//         <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
//         </svg>
//       </motion.div>
//     </section>
//   );
// };

// export default About;


import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SiReact, SiPython, SiDjango, SiPostgresql } from 'react-icons/si';
import { FiBriefcase } from 'react-icons/fi';
import stackImage from '../../assets/about/image.png';
import GlowOrbs from '../ui/GlowOrbs';

const stats = [
  { label: 'Years Learning', value: 3, suffix: '+' },
  { label: 'Projects Completed', value: 5, suffix: '+' },
  { label: 'Technologies', value: 15, suffix: '+' },
  { label: 'Certifications', value: 1, suffix: '' },
];

const techCards = [
  { icon: SiReact, name: 'React', color: '#61DAFB' },
  { icon: SiPython, name: 'Python', color: '#FFD43B' },
  { icon: SiDjango, name: 'Django', color: '#0C4B33' },
  { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
];

const easeOut = [0.22, 1, 0.36, 1];

const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let frameId;

    const duration = 1200;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(eased * value));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

const About = () => {
  return (
    <section
      id="about"
      // Gradient instead of a flat color — a single flat dark red directly
      // under a bright video created a hard, ugly seam. This starts bright
      // (matching the video's tone right at the transition point) and
      // deepens toward the bottom, so it reads as one continuous blended
      // surface instead of two mismatched blocks stacked on each other.
      className="relative bg-gradient-to-b from-[#ff2a2a] via-[#d21414] to-[#8a0203] pt-28 pb-40 px-6 md:px-12 w-full overflow-hidden font-sans"
    >
      <GlowOrbs tone="dark" />

      <div className="max-w-6xl mx-auto relative z-20">

        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-black/70 font-black tracking-widest uppercase text-xs md:text-sm mb-3"
        >
          Get To Know Me
        </motion.span>

        <div className="flex flex-col md:flex-row gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, y: -40, rotate: -6 }}
            whileInView={{ opacity: 1, y: 0, rotate: -3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: easeOut }}
            whileHover={{ rotate: 0, scale: 1.03 }}
            className="flex flex-col items-center w-full md:w-[300px] shrink-0 mt-8 md:mt-4 mx-auto md:mx-0"
          >
            <div className="relative flex justify-center w-full">
              <div className="absolute -top-28 left-1/2 w-2.5 h-36 bg-black/80 -translate-x-1/2 shadow-inner z-0 rounded-full" />
              <div className="absolute -top-5 left-1/2 w-6 h-11 bg-gray-300 rounded border border-gray-400 -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]" />

              <div className="relative bg-black/90 backdrop-blur-xl w-full max-w-[280px] rounded-2xl p-3 shadow-[0_25px_50px_rgba(0,0,0,0.45)] border border-white/10 z-20">
                <div className="absolute -top-3 left-1/2 w-16 h-6 bg-black/90 rounded-t-xl -translate-x-1/2 flex justify-center items-center">
                  <div className="w-8 h-2 bg-black/40 rounded-full shadow-inner" />
                </div>
                <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-white/5 border border-white/10">
                  <img
                    src={stackImage}
                    alt="Finan Roshan"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-3 pb-1 text-center">
                  <p className="text-white font-black text-sm">Finan Roshan K</p>
                  <p className="text-[#ff2a2a] text-[11px] font-bold tracking-widest uppercase">Full Stack Dev</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex-1 w-full">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, ease: easeOut }}
              className="text-4xl md:text-6xl font-black text-black mb-5 tracking-tight"
            >
              Hello!
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18, ease: easeOut }}
              className="text-black/85 text-base md:text-lg font-semibold mb-4 leading-relaxed max-w-xl"
            >
              I'm <span className="font-black uppercase">Finan Roshan</span>, a full-stack developer
              based in Kerala, dedicated to crafting clean, functional, and highly scalable web
              applications with React and Django REST Framework.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.24, ease: easeOut }}
              className="text-black/70 text-sm md:text-base font-medium mb-9 leading-relaxed max-w-xl"
            >
              I completed my BCA at Gems Arts and Science College (University of Calicut) in 2025,
              and I'm currently growing as a Frontend / Full Stack Intern at Bridgeon Solutions —
              shipping real REST APIs, PostgreSQL-backed features, and production deployments,
              not just tutorials.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, ease: easeOut }}
              className="flex items-center gap-4 bg-black/85 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4 mb-10 max-w-xl shadow-[0_15px_40px_rgba(0,0,0,0.35)]"
            >
              <div className="w-11 h-11 rounded-xl bg-[#ff2a2a]/20 border border-[#ff2a2a]/40 flex items-center justify-center text-[#ff2a2a] shrink-0">
                <FiBriefcase size={18} />
              </div>
              <div>
                <p className="text-white/40 text-[11px] font-bold tracking-widest uppercase">Currently</p>
                <p className="text-white text-sm md:text-[15px] font-bold">
                  Frontend / Full Stack Intern @ Bridgeon Solutions
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.08, ease: easeOut }}
                  whileHover={{ y: -4, scale: 1.06 }}
                  className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                >
                  <p className="text-white text-2xl md:text-3xl font-black mb-1">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-white/50 text-[10px] md:text-xs font-bold tracking-wide uppercase">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {techCards.map(({ icon: Icon, name, color }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.08, ease: easeOut }}
                  style={{ willChange: "transform" }}
                  whileHover={{ y: -6, scale: 1.06 }}
                  className="group flex items-center gap-3 bg-black/85 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-[0_10px_25px_rgba(0,0,0,0.3)] hover:border-white/25 transition-colors duration-300"
                >
                  <Icon size={22} style={{ color }} />
                  <span className="text-white text-sm font-bold">{name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Torn paper divider — matches the WHITE Services section that follows */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 right-10 md:right-20 text-black/25"
      >
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </motion.div>
      <motion.div
        animate={{ y: [0, 14, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        className="absolute bottom-32 left-4 md:left-20 text-black/25"
      >
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </motion.div>
    </section>
  );
};

export default About;