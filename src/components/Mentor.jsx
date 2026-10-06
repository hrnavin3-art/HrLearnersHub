"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { FaPlay } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import MentorSection from "./Mentorcard";

/* ---------------- MENTORS ---------------- */

const mentors = [
  {
    name: "Navin",
    role: "IT Recruitment & HR Career Strategy",
    years: "8+ Years",
    bg: "linear-gradient(160deg,#c9a5f7,#8b3fe8)",
    img: "https://ik.imagekit.io/psltlu4ds/HR%20navin/image%208.png?updatedAt=1777720252004",
  },

  {
    name: "Ramya",
    role: "Communication & Confidence Building",
    years: "8+ Years",
    bg: "linear-gradient(160deg,#82c4f8,#1a6fd4)",
    img: "https://ik.imagekit.io/psltlu4ds/HR%20navin/image%208.png?updatedAt=1777720252004",
  },

  {
    name: "Melvin",
    role: "8+ Years IT Recruitment (End-To-End)",
    years: "8+ Years",
    bg: "linear-gradient(160deg,#ffe97a,#f5c800)",
    img: "https://ik.imagekit.io/psltlu4ds/HR%20navin/image%208.png?updatedAt=1777720252004",
  },

  {
    name: "Sangeetha",
    role: "HR Generalist, Payroll & Compliance",
    years: "8+ Years",
    bg: "linear-gradient(160deg,#74f0a8,#18b85c)",
    img: "https://ik.imagekit.io/psltlu4ds/HR%20navin/image%208.png?updatedAt=1777720252004",
  },

  {
    name: "Suganya",
    role: "Advanced HR Guidance",
    years: "6+ Years",
    bg: "linear-gradient(160deg,#d4d4d4,#a0a0a0)",
    img: "https://ik.imagekit.io/psltlu4ds/HR%20navin/image%208.png?updatedAt=1777720252004",
  },
];

const doubled = [...mentors, ...mentors];

export default function CoverflowCarousel() {

  const containerRef = useRef(null);

  /* ---------------- ANIMATION VARIANTS ---------------- */

  const blurReveal = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(14px)",
    },

    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",

      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

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

  const stagger = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  /* ---------------- SCROLL ---------------- */

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const secondCardY = useTransform(
    scrollYProgress,
    [0, 0.5],
    [120, 0]
  );

  const secondCardScale = useTransform(
    scrollYProgress,
    [0, 0.5],
    [0.95, 1]
  );

  /* ---------------- IMAGES ---------------- */

  const imgs = [
    "https://images.unsplash.com/photo-1557862921-37829c790f19",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126",
  ];

  const [slide, setSlide] = useState(0);

  const mPairs = [
    [0, 1],
    [2, 3],
  ];

  const pair = mPairs[slide % mPairs.length];

  /* ---------------- TRUST STAR ---------------- */

  const TpStar = ({ size = 22 }) => (
    <div
      style={{
        width: size,
        height: size,
        background: "#00b67a",
        borderRadius: 3,
      }}
      className="flex items-center justify-center"
    >
      <svg
        viewBox="0 0 24 24"
        style={{
          width: size * 0.62,
          height: size * 0.62,
          fill: "#fff",
        }}
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    </div>
  );

  /* ---------------- PLAY BUTTON ---------------- */

  const PlayBtn = ({
    size = 46,
    className = "",
  }) => (
    <button
      className={`flex items-center justify-center bg-white rounded-full shadow-lg hover:scale-105 transition-transform cursor-pointer border-0 ${className}`}
      style={{
        width: size,
        height: size,
        flexShrink: 0,
      }}
    >
      <FaPlay
        size={size * 0.33}
        color="#111"
        style={{ marginLeft: 2 }}
      />
    </button>
  );

  /* ---------------- AVATAR STACK ---------------- */

  const AvatarStack = ({ size = 38 }) => {
    const gradients = [
      "linear-gradient(135deg,#c9a882,#a07850)",
      "linear-gradient(135deg,#9ab8d4,#6888a8)",
      "linear-gradient(135deg,#444,#222)",
    ];

    return (
      <div className="flex">
        {gradients.map((bg, i) => (
          <div
            key={i}
            style={{
              width: size,
              height: size,
              borderRadius: 10,
              background: bg,
              border: "2.5px solid #fff",
              marginLeft: i === 0 ? 0 : -10,
              flexShrink: 0,
            }}
          />
        ))}
      </div>
    );
  };

  /* ---------------- VIDEO CARD ---------------- */

  const VideoCard = ({
    imgSrc,
    width,
    height,
    playPos = "center",
    className = "",
  }) => {

    const posMap = {
      "bottom-left":
        "absolute bottom-4 left-4",

      center:
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",

      "center-low":
        "absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2",
    };

    return (
      <div
        className={`relative rounded-2xl overflow-hidden flex-shrink-0 ${className}`}
        style={{
          width,
          height,
          background: "#ccc",
        }}
      >
        <img
          src={imgSrc}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <PlayBtn
          className={
            posMap[playPos] || posMap.center
          }
          size={46}
        />
      </div>
    );
  };

  return (
    <>

      {/* ================= MENTOR SECTION ================= */}

      {/* <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        variants={fadeUp}
        className="py-12 container mx-auto max-w-7xl px-4 relative"
      >

    
        <motion.div
          variants={stagger}
          className="mb-12 z-40"
        >

          <motion.h2
            variants={blurReveal}
            className="text-3xl lg:text-5xl font-semibold"
          >
            Learn From Multiple Mentors
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-400 mt-2 font-light"
          >
            Across 60 days, 7–8 working HR professionals guide you.
          </motion.p>

        </motion.div>

        
        <motion.div
          initial={{
            opacity: 0,
            y: 70,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}

          viewport={{ once: true }}

          className="relative overflow-hidden"
        >

        
          <div className="absolute left-0 top-0 h-full w-12 lg:w-36 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

        
          <div className="absolute right-0 top-0 h-full w-12 lg:w-36 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="absolute w-full h-full -top-6 md:-top-24 lg:-top-32 xl:-top-40 z-10">
            <img
              src="https://ik.imagekit.io/psltlu4ds/HR%20navin/bottom%20curve.png"
              alt=""
            />
          </div>

         
          <div className="absolute w-full h-full -bottom-80 z-10">
            <img
              src="https://ik.imagekit.io/psltlu4ds/HR%20navin/bottom%20curve.png"
              alt=""
            />
          </div>

         
          <div className="marquee-track">

            {doubled.map((m, i) => (

              <motion.div
                key={i}

                initial={{
                  opacity: 0,
                  y: 50,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.7,
                  delay: i * 0.05,
                }}

                viewport={{ once: true }}
              >

                <div className="flex-shrink-0 w-[240px] rounded-lg bg-[#f0f0ec] pt-4 pb-0 shadow-sm">

                  
                  <div className="flex justify-between items-start px-4 mt-7 mb-3">

                    <div>

                      <h3 className="font-black text-xl">
                        {m.name}
                      </h3>

                      <p className="text-xs text-gray-500 mt-1 mb-3 leading-snug h-9 max-w-[150px]">
                        {m.role}
                      </p>

                    </div>

                    <span className="text-[11px] bg-white px-3 py-1 rounded-full shadow text-gray-700 whitespace-nowrap">
                      {m.years}
                    </span>

                  </div>

                  
                  <div
                    className="rounded-t-2xl h-[230px] overflow-hidden"
                    style={{
                      background: m.bg,
                    }}
                  >

                    <img
                      src={m.img}
                      alt={m.name}
                      className="w-full h-full object-cover   hover:-translate-y-2 transition-transform object-top"
                    />

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      
        <style>{`
          .marquee-track {
            display: flex;
            gap: 20px;
            width: max-content;
            animation: slide 30s linear infinite;
          }

          .marquee-track:hover {
            animation-play-state: paused;
          }

          @keyframes slide {
            0% {
              transform: translateX(0);
            }

            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>

      </motion.section> */}

      <MentorSection/>

      {/* ================= 60 DAYS ================= */}

      <section
        ref={containerRef}
        className="py-5 lg:py-16 mb-20 px-4"
      >

        <div className="max-w-5xl mx-auto">

          <div className="relative h-[805px] md:h-[950px]">

            {/* FIRST CARD */}
            <div className="sticky top-24 z-20 w-full">

              {/* HEADING */}
              <motion.h2
                initial={{
                  opacity: 0,
                  y: 40,
                  filter: "blur(14px)",
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}

                transition={{
                  duration: 1,
                }}

                viewport={{ once: true }}

                className="text-xl md:text-5xl font-semibold text-center mb-10"
              >
                60 Day Transformation  roadmap
              </motion.h2>

              {/* CARD */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 80,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.8,
                }}

                viewport={{ once: true }}

                className="bg-[#F3F0EB] rounded-2xl p-6 md:px-8 md:py-14 shadow-sm"
              >

                <div className="flex flex-wrap gap-3 items-center mb-6">

                  <span className="bg-black text-white text-sm md:text-lg px-3 py-1 rounded-full flex items-center gap-2">
                    📅 Month 1
                  </span>

                  <span className="bg-white text-gray-700 text-sm md:text-lg px-3 py-1 rounded-full flex items-center gap-2 shadow-sm">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Daily 2 Hours | Live
                  </span>

                </div>

                <div className="border-t border-black/10 mb-6"></div>

                <h3 className="md:text-4xl font-semibold mb-4 tracking-wide">
                  FOUNDATION + CONFIDENCE
                </h3>

                <ul className="space-y-2 text-sm md:text-xl text-gray-800">
                  <li>• HR Fundamentals & IT Recruitment Basics</li>
                  <li>• Live Sourcing On Naukri & LinkedIn</li>
                  <li>• Resume Screening & ATS Practice</li>
                  <li>• Communication Training + Roleplays</li>
                </ul>

                <div className="mt-6 inline-block bg-white text-gray-700 text-sm md:text-xl px-4 py-2 rounded-lg shadow-sm">
                  Outcome: You Stop Fearing Calls & Interviews
                </div>

              </motion.div>
            </div>

            {/* SECOND CARD */}
            <motion.div
              initial={{
                opacity: 0,
                y: 120,
                filter: "blur(14px)",
              }}

              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}

              transition={{
                duration: 1,
              }}

              viewport={{ once: true }}

              style={{
                y: secondCardY,
                scale: secondCardScale,
              }}

              className="relative z-30 w-full mt-20 md:mt-12"
            >

              <div className="bg-[#B1E635] rounded-2xl p-6 md:px-8 md:py-14 shadow-xl">

                <div className="flex flex-wrap gap-3 items-center mb-6">

                  <span className="bg-black text-white text-sm md:text-lg px-3 py-1 rounded-full flex items-center gap-2">
                    📅 Month 2
                  </span>

                  <span className="bg-[#d8ff75] text-gray-800 text-sm md:text-lg px-3 py-1 rounded-full flex items-center gap-2 shadow-sm">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Daily 2 Hours | Live
                  </span>

                </div>

                <div className="border-t border-black/10 mb-6"></div>

                <h3 className="md:text-4xl font-semibold mb-4 tracking-wide">
                  ADVANCED HR + PLACEMENT
                </h3>

                <ul className="space-y-2 text-sm md:text-xl text-gray-900">
                  <li>• Salary Negotiation & Offer Handling</li>
                  <li>• Interview Coordination & HR Operations</li>
                  <li>• Payroll & HR Generalist Exposure</li>
                  <li>• Mock Interviews + Job Search Strategy</li>
                </ul>

                <div className="mt-6 inline-block bg-white text-gray-800 text-sm md:text-xl px-4 py-2 rounded-lg shadow-sm">
                  Outcome: You Start Attending Interviews With Confidence
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </>
  );
}