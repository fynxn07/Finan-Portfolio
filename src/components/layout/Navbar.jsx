
// import React, { useState, useEffect } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import { FiX, FiMenu, FiArrowUpRight } from 'react-icons/fi';

// const navLinks = ['Home', 'About', 'Services', 'Skills', 'Projects', 'Contact'];
// const easeOut = [0.22, 1, 0.36, 1];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = isOpen ? 'hidden' : '';
//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [isOpen]);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
//         isScrolled && !isOpen
//           ? 'bg-black/60 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.35)]'
//           : 'bg-transparent py-6'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center relative z-[60]">
//         <div className="flex items-center">
//           <a href="#home" className="text-white text-2xl font-black tracking-tight">
//             Finan Roshan<span className="text-red-500">.</span>
//           </a>
//         </div>

//         <div className="hidden md:flex space-x-8">
//           {navLinks.map((link) => (
//             <a
//               key={link}
//               href={`#${link.toLowerCase()}`}
//               className="text-white/80 hover:text-white font-medium relative group transition-colors duration-300"
//             >
//               {link}
//               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
//             </a>
//           ))}
//         </div>

//         <div className="hidden md:block">
//           <a
//             href="#contact"
//             className="px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 backdrop-blur-md"
//           >
//             Hire Me
//           </a>
//         </div>

//         <div className="md:hidden flex items-center">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-white focus:outline-none p-2"
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
//           </button>
//         </div>
//       </div>

//       {/* Full-screen glass mobile menu — replaces the old max-h-96
//           dropdown, which wasn't tall enough for 6 links + Hire Me on
//           most phones, so page content showed through underneath it.
//           This is a proper fixed full-viewport overlay: backdrop-blur
//           over whatever's behind it (usually the Hero video, which reads
//           as premium through the blur), with each link staggering in
//           instead of the whole menu appearing at once. */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.35 }}
//             className="md:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-2xl"
//           >
//             <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#ff2a2a]/20 blur-[100px]" />
//             <div className="pointer-events-none absolute bottom-0 -left-24 w-72 h-72 rounded-full bg-[#ff2a2a]/15 blur-[100px]" />

//             <div className="relative z-10 h-full flex flex-col justify-center px-8 pt-24 pb-16">
//               <div className="flex flex-col gap-1">
//                 {navLinks.map((link, i) => (
//                   <motion.a
//                     key={link}
//                     href={`#${link.toLowerCase()}`}
//                     onClick={() => setIsOpen(false)}
//                     initial={{ opacity: 0, x: -24 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -24 }}
//                     transition={{ duration: 0.4, delay: 0.08 + i * 0.06, ease: easeOut }}
//                     className="group flex items-center justify-between py-4 border-b border-white/10 text-white text-3xl font-black tracking-tight"
//                   >
//                     {link}
//                     <FiArrowUpRight
//                       size={22}
//                       className="text-white/30 group-hover:text-[#ff2a2a] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
//                     />
//                   </motion.a>
//                 ))}
//               </div>

//               <motion.a
//                 href="#contact"
//                 onClick={() => setIsOpen(false)}
//                 initial={{ opacity: 0, y: 16 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: 16 }}
//                 transition={{ duration: 0.4, delay: 0.5, ease: easeOut }}
//                 className="mt-10 inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#ff2a2a] text-white font-black text-lg shadow-[0_10px_30px_-8px_rgba(255,42,42,0.6)] active:scale-[0.98] transition-transform duration-200"
//               >
//                 Hire Me
//               </motion.a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiX, FiMenu, FiArrowUpRight } from 'react-icons/fi';

const navLinks = ['Home', 'About', 'Services', 'Skills', 'Projects', 'Contact'];
const easeOut = [0.22, 1, 0.36, 1];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        isScrolled && !isOpen
          ? 'bg-black/60 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.35)]'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center relative z-[60]">
        <div className="flex items-center">
          <a href="#home" className="text-white text-2xl font-black tracking-tight">
            Finan Roshan
          </a>
        </div>

        {/* Desktop nav — unchanged */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white/80 hover:text-white font-medium relative group transition-colors duration-300"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 backdrop-blur-md"
          >
            Hire Me
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu — refined: small numbered list (Fraunces italic
          index, matching the editorial pattern from Services/ProjectDetail)
          instead of oversized font-black text, tighter spacing, a slimmer
          glass panel instead of a heavy full-bleed overlay. */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-50 bg-black/85 backdrop-blur-2xl"
          >
            <div className="pointer-events-none absolute -top-20 -right-20 w-56 h-56 rounded-full bg-[#ff2a2a]/15 blur-[90px]" />
            <div className="pointer-events-none absolute bottom-0 -left-20 w-56 h-56 rounded-full bg-[#ff2a2a]/10 blur-[90px]" />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.35, ease: easeOut }}
              className="relative z-10 h-full flex flex-col justify-center px-8"
            >
              <span className="text-[#ff2a2a] text-[11px] font-bold tracking-[0.2em] uppercase mb-6">
                Menu
              </span>

              <div className="flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.35, delay: 0.06 + i * 0.045, ease: easeOut }}
                    className="group flex items-center gap-4 py-3.5 border-b border-white/[0.08] active:opacity-60 transition-opacity"
                  >
                    <span className="text-white/25 text-xs font-['Fraunces',_serif] italic w-6 shrink-0">
                      0{i + 1}
                    </span>
                    <span className="text-white text-lg font-semibold tracking-tight flex-1">
                      {link}
                    </span>
                    <FiArrowUpRight
                      size={16}
                      className="text-white/20 group-active:text-[#ff2a2a] transition-colors duration-200"
                    />
                  </motion.a>
                ))}
              </div>

              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.35, delay: 0.36, ease: easeOut }}
                className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full
                           bg-white/[0.06] border border-white/15 backdrop-blur-md
                           text-white font-semibold text-sm
                           active:bg-[#ff2a2a] active:border-[#ff2a2a] transition-colors duration-200"
              >
                Hire Me
                <FiArrowUpRight size={15} />
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;