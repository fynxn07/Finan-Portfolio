// import React, { useRef, useState } from 'react';
// import { motion } from 'framer-motion';
// import heroVideo from '../../assets/hero video/vedio.mp4';

// const easeOut = [0.22, 1, 0.36, 1];

// const Hero = () => {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const toggleVideo = async (e) => {
//     e.stopPropagation();

//     if (!videoRef.current) return;

//     if (videoRef.current.paused) {
//       try {
//         await videoRef.current.play();
//         setIsPlaying(true);
//       } catch (err) {
//         console.error(err);
//       }
//     } else {
//       videoRef.current.pause();
//       setIsPlaying(false);
//     }
//   };

//   return (
//     <section id="home" className="relative w-full h-screen overflow-hidden bg-black scroll-mt-0">
//       {/* Background Video — preload="metadata" instead of full "auto" so the
//           browser only fetches enough to show the first frame immediately,
//           not the whole file upfront. It still loads fully once played. */}
//       <video
//         ref={videoRef}
//         muted={false}
//         playsInline
//         preload="metadata"
//         onEnded={() => setIsPlaying(false)}
//         onPlay={() => setIsPlaying(true)}
//         onPause={() => setIsPlaying(false)}
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//       >
//         <source src={heroVideo} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full">

//         <div className="flex flex-col items-start text-left max-w-2xl w-full">
//           <motion.h1
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, ease: easeOut }}
//             className="text-white text-3xl md:text-5xl font-bold mb-4 tracking-tight"
//           >
//             Hi, I'm a Python <br /> <span className="text-transparent [-webkit-text-stroke:1.5px_black]">Full Stack Developer</span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, ease: easeOut, delay: 0.15 }}
//             className="text-white text-sm md:text-lg font-semibold mb-8 max-w-md drop-shadow-md"
//           >
//             I build fast, scalable and modern web applications using React, Python and Tailwind CSS.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, ease: easeOut, delay: 0.3 }}
//             className="flex flex-row flex-wrap items-center gap-3 w-full"
//           >
//             <button className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-md">
//               View My Work
//             </button>
//             <button className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-black/40 border border-white text-white font-semibold hover:bg-black/60 transition-all duration-300 backdrop-blur-md">
//               Contact Me
//             </button>
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.85 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, ease: easeOut, delay: 0.45 }}
//           className="mt-8 md:mt-0 flex flex-row md:flex-col items-center gap-2 md:gap-3 cursor-pointer group self-start md:self-auto"
//           onClick={toggleVideo}
//         >
//           <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/30 bg-black/20 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#ff2a2a] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_40px_rgba(255,42,42,0.6)]">
//             {!isPlaying ? (
//               <svg className="w-5 h-5 md:w-8 md:h-8 text-white ml-0.5 md:ml-1" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M8 5v14l11-7z" />
//               </svg>
//             ) : (
//               <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
//               </svg>
//             )}
//           </div>
//           <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
//             {!isPlaying  ? "Play Reel" : "Pause"}
//           </span>
//         </motion.div>
//       </div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.7 }}
//         className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
//       >
//         <div className="animate-bounce">
//           <svg
//             className="w-6 h-6 text-black drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]"
//             fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
//             viewBox="0 0 24 24" stroke="currentColor"
//           >
//             <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
//           </svg>
//         </div>
//       </motion.div>


//     </section>
//   );
// };

// export default Hero;

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import heroVideo from '../../assets/hero video/vedio.mp4';
// You need to add this image yourself — see the note below the code for
// exactly how to generate it from your existing video in ~10 seconds.
import heroPoster from '../../assets/about/posters.png';

const easeOut = [0.22, 1, 0.36, 1];

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = async (e) => {
    e.stopPropagation();

    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      try {
        await videoRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.error(err);
      }
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section id="home" className="relative w-full min-h-screen h-[100dvh] overflow-hidden bg-black scroll-mt-0">
      {/* poster: this is the actual fix for the black screen. Without it,
          browsers (mobile especially) don't reliably paint a paused
          video's first frame at all — there's simply nothing to draw
          until playback starts. A poster is a plain image, so it paints
          instantly and unconditionally, no decode/autoplay race. The
          video element then covers it the moment it actually plays. */}
      <video
        ref={videoRef}
        muted={false}
        playsInline
        preload="auto"
        poster={heroPoster}
        onEnded={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full">

        <div className="flex flex-col items-start text-left max-w-2xl w-full">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="text-white text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Hi, I'm a Python <br />
            <span className="text-transparent [-webkit-text-stroke:1.5px_white]">
              Full Stack Developer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.15 }}
            className="text-white text-sm md:text-lg font-semibold mb-8 max-w-md drop-shadow-md"
          >
            I build fast, scalable and modern web applications using React, Python and Tailwind CSS.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.3 }}
            className="flex flex-row flex-wrap items-center gap-3 w-full"
          >
            <button className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-md">
              View My Work
            </button>
            <button className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-black/40 border border-white text-white font-semibold hover:bg-black/60 transition-all duration-300 backdrop-blur-md">
              Contact Me
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.45 }}
          className="mt-8 md:mt-0 flex flex-row md:flex-col items-center gap-2 md:gap-3 cursor-pointer group self-start md:self-auto"
          onClick={toggleVideo}
        >
          <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/30 bg-black/20 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#ff2a2a] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_40px_rgba(255,42,42,0.6)]">
            {!isPlaying ? (
              <svg className="w-5 h-5 md:w-8 md:h-8 text-white ml-0.5 md:ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            )}
          </div>
          <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
            {!isPlaying ? "Play Reel" : "Pause"}
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-black drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]"
            fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
            viewBox="0 0 24 24" stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;