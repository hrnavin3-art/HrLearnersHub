import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BsArrowRightShort } from "react-icons/bs";

import CTAButtonPopup from "./Button";

const mentors = [
  {
    name: "Navin",
    role: "Specialist in IT Recruitment & Career Coaching",
    exp: "8+ Yrs",
    img: "https://ik.imagekit.io/psltlu4ds/HR%20navin/Untitled-853-x-1813-px-853-x-1153-px-14.png",
    company: "Meta",
    bg: "radial-gradient(circle at center, #282FE0 0%, #0B1445 60%, #020C32 70%)",
  },
  {
    name: "Melvin",
    role: "IT Recruitment & Talent Acquisition (End-to-End)",
    exp: "5+ Yrs ",
    img: "https://ik.imagekit.io/psltlu4ds/HR%20navin/123.png",
    company: "Microsoft",
    bg: "radial-gradient(circle at center, #282FE0 0%, #0B1445 60%, #020C32 70%)",
  },
  {
    name: "Ramya",
    role: "Communication & Confidence Building",
    exp: "5+ Years",
    img: "https://ik.imagekit.io/psltlu4ds/HR%20navin/45.png",
    company: "Disney",
    bg: "radial-gradient(circle at center, #282FE0 0%, #0B1445 60%, #020C32 70%)",
  },
  {
    name: "Sriram",
    role: " Analytics & Automation Expert",
    exp: "10+ Years",
    img: "https://ik.imagekit.io/psltlu4ds/HR%20navin/shared%20image%20(3)1.png",
    company: "Google",
    bg: "radial-gradient(circle at center, #282FE0 0%, #0B1445 60%, #020C32 70%)",
  },
  {
    name: "Shanthi",
    role: "HR Recruitment Specialist & Internship Mentor",
    exp: "5+ Years",
    img: "https://ik.imagekit.io/psltlu4ds/HR%20navin/crop3.png",
    company: "Google",
    bg: "radial-gradient(circle at center, #282FE0 0%, #0B1445 60%, #020C32 70%)",
  },
  {
    name: "Suganya Karthik",
    role: "Advanced HR & Career Guidance",
    exp: "9+ Years",
    img: "https://ik.imagekit.io/psltlu4ds/HR%20navin/upf.png",
    company: "Google",
    bg: "radial-gradient(circle at center, #282FE0 0%, #0B1445 60%, #020C32 70%)",
  },
];



 
  

 
  
 


// Duplicate more times for seamless infinite loop
const loopMentors = [...mentors, ...mentors, ...mentors, ...mentors];

// Slow continuous shaggy animation variants for the "60" badge
const shaggyVariants = {
  initial: { scale: 0.8, rotate: -8, opacity: 0 },
  animate: {
    scale: 1,
    rotate: [6, -3, 5, -2, 4, -1, 3, 0, 2, 6],
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      rotate: {
        duration: 3,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  },
};

const Hero = () => {
  return (
    <section id="/" className="relative overflow-hidden text-white px-4 pt-24 pb-16">

      {/* Background */}
      <img
        src="https://ik.imagekit.io/psltlu4ds/HR%20navin/e2cd13c5695d245f7a7413b6b88742e0a16c798a.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover object-[center_10%] z-0"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">

        <motion.div 
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.1 }}
  className="
    inline-flex w-fit
    px-4 py-1 text-sm
    bg-white/10
    border border-white/20
    items-center gap-3 justify-center
    rounded-full mb-6
  "
>
  <img
    src="https://ik.imagekit.io/psltlu4ds/Vector%20(5).png"
    className="w-5 h-5"
    alt="logo"
  />

AI powered HR Training
</motion.div>

        <motion.h1 
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-2xl md:text-7xl font-bold leading-normal"
        >
          Become a job ready IT <br /> HR in{" "}
          <motion.span
            variants={shaggyVariants}
            initial="initial"
            animate="animate"
            className="inline-block"
          >
            <span className="inline-block rotate-[6deg] bg-[#B1E635] text-gray-700 shadow-xl text-2xl md:text-5xl shadow-[#B1E635] px-2 py-2 md:py-3 rounded-xl">
              60
            </span>
          </motion.span>{" "}
          Days
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4   max-w-2xl text-base py-6 lg:text-xl mx-auto"
        >
          Even If You Have No HR Experience, Career Gaps, or Weak Communication 
        </motion.p>
          <motion.p 
          initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4  text-gray-300  max-w-2xl text-base  lg:text-xl mx-auto"
        >
         
                </motion.p>

        {/* Features */}      <div className=" md:text-base text-sm text-[#6B6EFF] font-semibold flex  items-center justify-center">
<BsArrowRightShort className="text-[#6B6EFF] "size={28} />
           <h1> This will help you to get placed</h1>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center text-sm  text-[#B3B3B6] lg:text-base gap-4 md:gap-6 my-6 "
        >
   
          <div className="flex items-center gap-2">
            <img src="https://ik.imagekit.io/psltlu4ds/HR%20navin/Group.png" className="w-7 h-7" alt="internship" />
            <span>Internship Program</span>
          </div>

          <div className="flex items-center gap-2">
            <img src="https://ik.imagekit.io/psltlu4ds/HR%20navin/sound.png" className="w-7 h-7" alt="placement" />
            <span>Placement Support</span>
          </div>

          <div className="flex items-center gap-2">
            <img src="https://ik.imagekit.io/psltlu4ds/HR%20navin/flash.png" className="w-7 h-7" alt="ai tools" />
            <span>AI Tools for HR</span>
          </div>

          <div className="flex items-center gap-2">
            <img src="https://ik.imagekit.io/psltlu4ds/HR%20navin/Group%201707481681.png" className="w-7 h-7" alt="projects" />
            <span>Training + Real Projects</span>
          </div>
        </motion.div>

        {/* CTA */}
       <CTAButtonPopup className=" inline-block"/>

       
      </div>

      {/* 🔥 CAROUSEL - SMOOTH & STUTTER-FREE */}
      <div className="relative mt-16 max-w-7xl mx-auto overflow-hidden">
        <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.8 }}
    className="mb-10 relative z-30"
  >
    <p className="text-[#C7FF6B] text-xs md:text-base font-semibold tracking-[0.2em] uppercase">
       Learn From Top Industry Mentors
    </p>

   
  </motion.div>
        <div className="pointer-events-none absolute -left-2 md:left-0 top-0 h-full w-16 md:w-24 bg-gradient-to-r from-[#020617] to-transparent z-20"></div>
        <div className="pointer-events-none absolute -right-1 md:right-0 top-0 h-full w-12 md:w-20 bg-gradient-to-l from-[#020617] to-transparent z-20"></div>

    <motion.div
  className="flex gap-4 md:gap-6 w-max"
  animate={{
    x: ["0%", "-25%"],
  }}
  transition={{
    repeat: Infinity,
    duration: 8,
    ease: "linear",
    repeatType: "loop",
  }}
>
   {loopMentors.map((mentor, index) => (
  <motion.div
    key={index}
    className="group relative w-[140px] sm:min-w-[180px] lg:min-w-[250px]"
  >

    {/* glass border only */}
  <div className="p-[2px] md:p-[2.5px] border-white/40 rounded-[26px] md:rounded-[34px] bg-gradient-to-br from-white/40 via-white/15 to-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.35)] md:shadow-[0_10px_40px_rgba(0,0,0,0.35)]">

  {/* main card */}
  <div className="relative overflow-hidden rounded-[24px] md:rounded-[32px] bg-[#1B2030]/95 border border-white/10">

    {/* soft top reflection */}
    <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-70 pointer-events-none"></div>

    {/* smooth continuous shine */}
    <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
      <div className="absolute top-0 -left-[40%] h-full w-[30%] rotate-12 bg-white/10 blur-2xl animate-[shine_5s_linear_infinite]"></div>
    </div>

    {/* image - reduced height on mobile */}
    <div className="relative overflow-hidden">
      <img
        src={mentor.img}
        alt={mentor.name}
        className="w-full h-[140px] md:h-[180px] lg:h-[300px] object-cover bg-[radial-gradient(circle_at_center,#282FE0_0%,#0B1445_60%,#020C32_100%)] transition-transform duration-700 group-hover:scale-105"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E111A] via-black/30 to-transparent"></div>
    </div>

    {/* company - smaller on mobile */}
    <div className="absolute top-2 right-2 md:top-3 md:right-3 z-20 px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
      <p className="text-white text-[8px] sm:text-[10px] md:text-xs font-medium tracking-wide">
        {mentor.exp}
      </p>
    </div>

    {/* content - compact on mobile */}
    <div className="absolute bottom-0 left-0 right-0 z-20 p-3 sm:p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent">

      <div className="w-6 md:w-8 lg:w-12 h-[1px] md:h-[3px] rounded-full bg-[#C7FF6B] mb-1 lg:mb-3"></div>

      <h3 className="text-white text-xs sm:text-sm md:text-xl font-semibold tracking-wide">
        {mentor.name}
      </h3>

      {/* <p className="text-white/80 text-[10px] sm:text-xs md:text-sm mt-0.5 md:mt-1 leading-relaxed">
       
      </p> */}

      <div className="mt-1.5 md:mt-3 lg:mt-4 flex items-center justify-between">

        <p className="text-[#C7FF6B] text-[8px] sm:text-[11px] md:text-xs italic font-medium tracking-wide">
           {mentor.role}
        </p>

        <div className="flex items-center gap-1">
          <div className="h-[1px] w-6 md:w-10 bg-gradient-to-r from-[#C7FF6B] to-transparent"></div>
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#C7FF6B]"></div>
        </div>

      </div>
    </div>
  </div>
</div>
  </motion.div>
))}
        </motion.div>
      </div>
       <style>{`
    @keyframes shine {
      0% {
        transform: translateX(0);
        opacity: 0;
      }

      15% {
        opacity: 1;
      }

      50% {
        opacity: 1;
      }

      100% {
        transform: translateX(450%);
        opacity: 0;
      }
    }

    .shine-effect {
      animation: shine 5s linear infinite;
    }
  `}</style>
    </section>
  );
};

export default Hero;