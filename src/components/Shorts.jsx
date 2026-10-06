// "use client";
// import React, { useEffect, useState } from "react";
// import { ChevronLeft, ChevronRight, Play } from "lucide-react";
// import { Check, Video, Infinity, Users, Briefcase } from "lucide-react";
// import { Headphones } from "lucide-react";

// // Updated initialData with the new image as the first item
// const initialData = [
//   {
//     img: "https://ik.imagekit.io/psltlu4ds/HR%20navin/WhatsApp%20Image%202025-05-03%20at%2016.51.08_9ba6fc48.jpg?updatedAt=1778004326977",
//     tall: true,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1557862921-37829c790f19",
//     tall: true,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
//     tall: true,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
//     tall: true,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1557862921-37829c790f19",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
//   },
// ];

// // mentors array remains the same
// const mentors = [
//   {
//     id: 1,
//     name: "Navin",
//     role: "IT Recruitment & HR Career Strategy",
//     img: "https://ik.imagekit.io/psltlu4ds/HR%20navin/image%208.png?updatedAt=1777720252004",
//     bg: "from-purple-300 to-purple-600",
//   },
//   {
//     id: 2,
//     name: "Ramya",
//     role: "Communication & Confidence Building",
//     img: "https://ik.imagekit.io/psltlu4ds/HR%20navin/image%208.png?updatedAt=1777720252004",
//     bg: "from-blue-300 to-blue-600",
//   },
//   {
//     id: 3,
//     name: "Melvin",
//     role: "8+ Years IT Recruitment (End-To-End)",
//     img: "https://ik.imagekit.io/psltlu4ds/HR%20navin/image%208.png?updatedAt=1777720252004",
//     bg: "from-yellow-200 to-yellow-400",
//   },
//   {
//     id: 4,
//     name: "Sangeetha",
//     role: "HR Generalist, Payroll & Compliance",
//     img: "https://ik.imagekit.io/psltlu4ds/HR%20navin/image%208.png?updatedAt=1777720252004",
//     bg: "from-green-300 to-green-500",
//   },
//   {
//     id: 5,
//     name: "Suganya",
//     role: "Advanced HR Guidance",
//     img: "https://ik.imagekit.io/psltlu4ds/HR%20navin/image%208.png?updatedAt=1777720252004",
//     bg: "from-gray-300 to-gray-500",
//   },
// ];

// export default function CoverflowCarousel() {
//   const [index, setIndex] = useState(0);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const next = () => setIndex((prev) => (prev + 1) % pages.length);
//   const prev = () => setIndex((prev) => (prev - 1 + pages.length) % pages.length);

//   // Note: pages is not defined in the original code. If needed, uncomment and define chunk and pages.
//   // const chunk = (arr, size) => {
//   //   const res = [];
//   //   for (let i = 0; i < arr.length; i += size) {
//   //     res.push(arr.slice(i, i + size));
//   //   }
//   //   return res;
//   // };
//   // const pages = chunk(initialData, 4);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % mentors.length);
//     }, 2500);
//     return () => clearInterval(interval);
//   }, []);

//   const [items, setItems] = useState(initialData);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [direction, setDirection] = useState("");

//   const nextCarousel = () => {
//     setItems((prev) => {
//       const updated = [...prev];
//       const first = updated.shift();
//       updated.push(first);
//       return updated;
//     });
//   };

//   const prevCarousel = () => {
//     setItems((prev) => {
//       const updated = [...prev];
//       const last = updated.pop();
//       updated.unshift(last);
//       return updated;
//     });
//   };

//   return (
//     <>
//       <section className="py-10 lg:py-16 overflow-hidden">
//         <div className="max-w-7xl mx-auto lg:text-center lg:mb-16 px-4">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//             Learn From Multiple Mentors
//           </h2>
//           <p className="text-gray-600 mt-2">
//             Across 60 days, 7–8 working HR professionals guide you.
//           </p>
//         </div>

//         {/* DESKTOP COVERFLOW */}
//         <div className="hidden md:flex justify-center items-center relative h-[420px]">
//           <div
//             className="relative flex items-center justify-center w-full"
//             style={{ perspective: "1200px" }}
//           >
//             {mentors.map((mentor, idx) => {
//               let position = (idx - activeIndex + mentors.length) % mentors.length;
//               if (position > mentors.length / 2) position -= mentors.length;

//               const rotate = position * -25;
//               const translateX = position * 280;
//               const scale = position === 0 ? 1 : 0.85;
//               const opacity = Math.abs(position) > 2 ? 0 : 1;
//               const zIndex = 10 - Math.abs(position);

//               return (
//                 <div
//                   key={mentor.id}
//                   className="absolute transition-all duration-700 ease-in-out"
//                   style={{
//                     transform: `translateX(${translateX}px) rotateY(${rotate}deg) scale(${scale})`,
//                     zIndex,
//                     opacity,
//                   }}
//                 >
//                   <div className="w-[280px] rounded-2xl bg-[#f1f1f1] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
//                     <div className="flex justify-between items-start mb-3">
//                       <div>
//                         <h3 className="font-semibold text-lg text-gray-900">{mentor.name}</h3>
//                         <p className="text-sm text-gray-600 leading-snug">{mentor.role}</p>
//                       </div>
//                       <span className="text-xs bg-white px-2 py-1 rounded-full shadow text-gray-700">
//                         8+ Years
//                       </span>
//                     </div>
//                     <div className="rounded-xl overflow-hidden mt-3">
//                       <div className={`w-full h-[220px] flex items-end justify-center bg-gradient-to-br ${mentor.bg}`}>
//                         <img src={mentor.img} alt={mentor.name} className="h-full object-contain" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* MOBILE VERSION */}
//         <div className="md:hidden flex justify-center items-center relative h-[340px]">
//           <div className="relative flex items-center justify-center w-full">
//             {mentors.map((mentor, idx) => {
//               let position = (idx - activeIndex + mentors.length) % mentors.length;
//               if (position > mentors.length / 2) position -= mentors.length;

//               const rotate = position * -18;
//               const translateX = Math.round(position * 190);
//               const scale = position === 0 ? 0.9 : 0.82;
//               const opacity = Math.abs(position) > 2 ? 0 : 1;
//               const zIndex = 10 - Math.abs(position);

//               return (
//                 <div
//                   key={mentor.id}
//                   className="absolute transition-all duration-500 ease-out"
//                   style={{
//                     transform: `translateX(${translateX}px) rotateY(${rotate}deg) scale(${scale})`,
//                     zIndex,
//                     opacity,
//                     transformOrigin: "center center",
//                   }}
//                 >
//                   <div className="w-[210px] mx-[8px] rounded-2xl bg-[#f1f1f1] p-3 shadow-[0_8px_25px_rgba(0,0,0,0.08)]">
//                     <div className="flex justify-between items-start mb-2">
//                       <div>
//                         <h3 className="font-semibold text-sm text-gray-900">{mentor.name}</h3>
//                         <p className="text-xs text-gray-600 leading-snug">{mentor.role}</p>
//                       </div>
//                       <span className="text-[10px] bg-white px-2 py-1 rounded-full shadow-sm text-gray-700">
//                         8+ Years
//                       </span>
//                     </div>
//                     <div className="rounded-xl overflow-hidden mt-2">
//                       <div className={`w-full h-[150px] flex items-end justify-center bg-gradient-to-br ${mentor.bg}`}>
//                         <img
//                           src={mentor.img}
//                           alt={mentor.name}
//                           className="h-full object-contain select-none"
//                           draggable={false}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

     

//       {/* Real People Real Result Section */}
//       <section className="bg-[#f5f5f5] py-16 px-4 overflow-hidden">
//         <div className="max-w-7xl mx-auto">
//           {/* TOP */}
//           <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
//             <div>
//               <h2 className="text-3xl md:text-5xl font-bold leading-tight">
//                 Real People <br /> Real Result.
//               </h2>
//               <div className="flex items-center gap-3 mt-4">
//                 <span className="text-sm">Excellent</span>
//                 <div className="flex gap-1">
//                   {[...Array(5)].map((_, i) => (
//                     <div key={i} className="w-5 h-5 bg-green-500 rounded-sm" />
//                   ))}
//                 </div>
//                 <span className="text-sm text-gray-600">500+ reviews</span>
//               </div>
//             </div>

//             {/* BUTTONS */}
//             <div className="flex gap-3">
//               <button
//                 onClick={prevCarousel}
//                 className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
//               >
//                 <ChevronLeft />
//               </button>
//               <button
//                 onClick={nextCarousel}
//                 className="w-11 h-11 rounded-full bg-black text-white shadow-md flex items-center justify-center hover:bg-gray-800 transition-colors"
//               >
//                 <ChevronRight />
//               </button>
//             </div>
//           </div>

//           {/* CAROUSEL */}
//           <div className="relative overflow-hidden">
//             {/* LEFT FADE */}
//             <div className="absolute left-0 top-0 h-full w-10 md:w-24 bg-gradient-to-r from-[#f5f5f5] to-transparent z-20 pointer-events-none"></div>
            
//             {/* RIGHT FADE */}
//             <div className="absolute right-0 top-0 h-full w-10 md:w-24 bg-gradient-to-l from-[#f5f5f5] to-transparent z-20 pointer-events-none"></div>

//             {/* TRACK - Simple horizontal scroll with flex */}
//             <div className="flex justify-start items-start gap-4 md:gap-6 overflow-x-visible">
//               {items.map((item, i) => (
//                 <div
//                   key={i}
//                   className={`
//                     flex-shrink-0
//                     w-[calc(50%-8px)]
//                     md:w-[calc(25%-18px)]
//                     relative rounded-3xl overflow-hidden
//                     bg-white
//                     transition-all duration-300 hover:scale-105 cursor-pointer
//                     ${item.tall ? "h-[320px] md:h-[500px]" : "h-[220px] md:h-[320px] mt-10 md:mt-20"}
//                   `}
//                 >
//                   {/* IMAGE */}
//                   <img src={item.img} alt="" className="w-full h-full object-cover" />

//                   {/* PLAY BUTTON */}
//                   <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity">
//                     <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-xl">
//                       <Play size={20} className="ml-1" fill="black" />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

     
//     </>
//   );
// }


import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import v1 from '../assets/v1.webm'
import v2 from '../assets/v2.webm'
import v3 from '../assets/v3.webm'
import v4 from '../assets/v4.webm'
import v5 from '../assets/v5.webm'
import v6 from '../assets/v6.webm'
import v7 from '../assets/v7.webm'
import p1 from '../assets/p1.avif'
import p2 from '../assets/p2.avif'
import p3 from '../assets/p3.avif'
import p4 from '../assets/p4.avif'
import p5 from '../assets/p5.avif'
import p6 from '../assets/p6.avif'
import p7 from '../assets/p7.avif'

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const people = [
  { id: 1, image: v1, poster: p1 },
  { id: 2, image: v2, poster: p2 },
  { id: 3, image: v3, poster: p3 },
  { id: 4, image: v4, poster: p4 },
  { id: 5, image: v5, poster: p5 },
  { id: 6, image: v6, poster: p6 },
  { id: 7, image: v7, poster: p7 },
];

const avatars = [
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=40&h=40&fit=crop&crop=face",
];

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-white">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function ArrowButton({ onClick, direction }) {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-gray-700">
        {direction === "left"
          ? <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          : <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />}
      </svg>
    </button>
  );
}

/* Card that animates only when animKey changes.
   Single-play is enforced globally in the parent via a captured
   'play' event listener — whenever ANY video starts, all others pause.
   Paused cards always show a dark overlay + play icon.
   `poster` shows a thumbnail image before the video is played. */
function Card({ image, poster, heightClass, animKey, direction, animate }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handleActivate = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.muted = false;
      setIsMuted(false);
      const playPromise = video.play();
      if (playPromise) {
        playPromise.catch(() => {
          // Browser blocked audio on this tap — fall back to muted
          video.muted = true;
          setIsMuted(true);
          video.play().catch(() => {});
        });
      }
    } else {
      video.pause();
    }
  };

  return (
    <div
      key={animKey}
      onClick={handleActivate}
      className={`relative rounded-2xl overflow-hidden shadow-sm w-full cursor-pointer ${heightClass}`}
      style={animate ? {
        animation: `slide${direction} 0.45s cubic-bezier(0.4,0,0.2,1) both`,
      } : {}}
    >
      <video
        ref={videoRef}
        src={image}
        poster={poster}
        className="w-full h-full object-cover"
        muted={isMuted}
        loop
        controls
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      {!isPlaying && (
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      )}
    </div>
  );
}

export default function RealPeopleSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("InRight");
  const total = people.length;

  const sectionRef = useRef(null);

  const prev = () => { setDirection("InLeft");  setIndex((i) => (i - 1 + total) % total); };
  const next = () => { setDirection("InRight"); setIndex((i) => (i + 1) % total); };

  const g = (n) => people[(index + n) % total];

  /* ---- GLOBAL SINGLE-PLAY ENFORCEMENT ----
     'play' events don't bubble, but they CAN be caught in the capture
     phase on an ancestor. So the moment ANY video in this section starts
     playing (tap, click, mobile, desktop — doesn't matter), we pause
     every other video. This can never miss, even after cards remount. */
  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const onAnyPlay = (e) => {
      if (e.target.tagName !== "VIDEO") return;
      root.querySelectorAll("video").forEach((v) => {
        if (v !== e.target && !v.paused) v.pause();
      });
    };

    root.addEventListener("play", onAnyPlay, true); // capture phase!
    return () => root.removeEventListener("play", onAnyPlay, true);
  }, []);

  // Pause everything when the user navigates the carousel, so a
  // remounted/hidden card can't keep playing audio.
  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;
    root.querySelectorAll("video").forEach((v) => {
      if (!v.paused) v.pause();
    });
  }, [index]);

  return (
    <>
      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(70px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-70px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      {/* ================= GALLERY SECTION ================= */}
      <motion.section
        className="relative py-5 lg:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="max-w-7xl mx-auto px-4">

          {/* Heading */}
          <div className="text-center mb-14">
            <div className="flex justify-center items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span className="text-gray-600">
                Gallery
              </span>
            </div>

            <h2 className="text-2xl md:text-6xl font-bold text-[#111827]">
              Celebrating
              <span className="text-[#2A74DB]"> Career Success Stories</span>
            </h2>

            <p className="mt-5 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              Explore our mentorship sessions, team activities,
              and student success stories.
            </p>
          </div>

          {/* BENTO GRID */}
          <div className="grid lg:grid-cols-3 gap-6">

            {/* LARGE LEFT CARD */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="lg:col-span-2 relative md:h-[600px] overflow-hidden rounded-[32px]"
            >
              <img
                src="https://ik.imagekit.io/psltlu4ds/HR%20navin/WhatsApp%20Image%202026-05-28%20at%2011.25.29%20AM%20(1).jpeg"
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="absolute bottom-0 p-8">

                <h3 className="text-white text-sm md:text-4xl font-bold mt-5">
                  Students Who Got Placed
                </h3>

                <p className="text-white/80 hidden md:block mt-3">
                  HR mentorship and industry guidance.
                </p>
              </div>
            </motion.div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-6">

              {/* TEAM */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative h-[287px] overflow-hidden rounded-[32px]"
              >
                <img
                  src="https://ik.imagekit.io/psltlu4ds/HR%20navin/WhatsApp%20Image%202026-05-28%20at%2011.25.29%20AM%20(2).jpeg"
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute bottom-0 p-6">
                  <h3 className="text-white text-sm md:text-2xl font-bold">
                    Our Team
                  </h3>
                </div>
              </motion.div>

              {/* STUDENT */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative lg:h-[287px] h-[300px] overflow-hidden rounded-[32px]"
              >
                <img
                  src="https://ik.imagekit.io/psltlu4ds/HR%20navin/WhatsApp%20Image%202026-05-28%20at%2011.25.29%20AM.jpeg"
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute bottom-0 p-6">
                  <h3 className="text-white text-sm md:text-2xl font-bold">
                    Success Meetups
                  </h3>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </motion.section>

      <section ref={sectionRef} className="w-full bg-white px-5 md:px-8 py-8 md:py-10 font-sans">
        <div className="max-w-7xl mx-auto">

          {/* ── DESKTOP layout (md+) ── */}
          <div className="hidden md:flex flex-row gap-6 items-start">

            {/* LEFT: heading + rating + 2 cards below */}
            <div className="flex-1 flex flex-col gap-4">

              {/* Heading + avatars */}
              <div className="flex flex-row items-start gap-3">
                <div>
                  <h1 className="text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
                    Real People<br />Real Result.
                  </h1>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-sm font-medium text-gray-700">Excellent</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-[18px] h-[18px] bg-[#00b67a] rounded-sm flex items-center justify-center">
                          <StarIcon />
                        </div>
                      ))}
                    </div>
                    <a href="#" className="text-sm text-gray-600 underline underline-offset-2 hover:text-gray-900">
                      500+ reviews
                    </a>
                  </div>
                </div>
                <div className="flex -space-x-2 mt-1 ml-1">
                  {avatars.map((src, i) => (
                    <img key={i} src={src} alt="" className="w-8 h-8 rounded-md border-2 border-white object-cover" />
                  ))}
                </div>
              </div>

              {/* Left 2 cards: card1 (tall, ANIMATES) + card2 (short, static) */}
              <div className="flex gap-3 items-end">
                <div className="flex-1 h-[550px] rounded-2xl overflow-hidden">
                  <Card
                    image={g(0).image} poster={g(0).poster} heightClass="h-full" animKey={`c1-${index}`} direction={direction} animate={true}
                  />
                </div>
                <div className="flex-1 h-[490px] rounded-2xl overflow-hidden">
                  <Card
                    image={g(1).image} poster={g(1).poster} heightClass="h-full" animKey={`c2-${index}`} direction={direction} animate={false}
                  />
                </div>
              </div>
            </div>

            {/* RIGHT: cards start at TOP (items-start), arrows below */}
            <div className="flex-1 flex flex-col gap-4">

              {/* Right 2 cards: card3 (tall, static) + card4 (short, ANIMATES) */}
              <div className="flex gap-3 items-end">
                <div className="flex-1 h-[550px] rounded-2xl overflow-hidden">
                  <Card
                    image={g(2).image} poster={g(2).poster} heightClass="h-full" animKey={`c3-${index}`} direction={direction} animate={false}
                  />
                </div>
                <div className="flex-1 h-[490px] rounded-2xl overflow-hidden">
                  <Card
                    image={g(3).image} poster={g(3).poster} heightClass="h-full" animKey={`c4-${index}`} direction={direction} animate={true}
                  />
                </div>
              </div>

              <div className="flex justify-end items-center gap-2 h-[72px]">
                <ArrowButton onClick={prev} direction="left" />
                <ArrowButton onClick={next} direction="right" />
              </div>
            </div>

          </div>

          {/* ── MOBILE layout (below md) ── */}
          <div className="flex flex-col gap-4 md:hidden">

            {/* Header + arrows on same row */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex md:flex-row flex-col items-start gap-3">
                <div>
                  <h1 className="text-3xl font-extrabold text-gray-900 leading-tight tracking-tight">
                    Real People<br />Real Result.
                  </h1>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-sm font-medium text-gray-700">Excellent</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-[18px] h-[18px] bg-[#00b67a] rounded-sm flex items-center justify-center">
                          <StarIcon />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex -space-x-2 mt-1 ml-1">
                  {avatars.map((src, i) => (
                    <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  ))}
                </div>
              </div>
              <div className="flex gap-2 mt-1 flex-shrink-0">
                <ArrowButton onClick={prev} direction="left" />
                <ArrowButton onClick={next} direction="right" />
              </div>
            </div>

            {/* Mobile 2 cards: big (ANIMATES) + small (static) */}
            <div className="flex gap-3 items-end">
              <div className="flex-[2.5] h-80 rounded-2xl overflow-hidden">
                <Card
                  image={g(0).image} poster={g(0).poster} heightClass="h-full" animKey={`m1-${index}`} direction={direction} animate={true}
                />
              </div>
              <div className="flex-[2.5] h-[17rem] rounded-2xl overflow-hidden">
                <Card
                  image={g(1).image} poster={g(1).poster} heightClass="h-full" animKey={`m2-${index}`} direction={direction} animate={false}
                />
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}