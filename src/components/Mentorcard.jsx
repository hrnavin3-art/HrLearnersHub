"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CTAButtonPopup from "./Button";

const mentors = [
  {
    name: "Navin",
    role: "Specialist in IT Recruitment and Carrier Coching",
    years: "6+ Years",
 bg: "radial-gradient(circle at center, #282FE0 0%, #0B1445 60%, #020C32 70%)",
    image:
      "https://ik.imagekit.io/psltlu4ds/HR%20navin/Untitled-853-x-1813-px-853-x-1153-px-14.png",
  },
  {
    name: "Melvin",
    role: "8+ Years IT Recruitment & Talent Acquistion (End-to-End)",
    years: "8+ Years",
     bg: "radial-gradient(circle at center, #282FE0 0%, #0B1445 60%, #020C32 70%)",
    image:
      "https://ik.imagekit.io/psltlu4ds/HR%20navin/cropim.png",
  },
  {
    name: "Ramya",
    role: "Communication & Confidence Building",
    years: "5+ Years",
     bg: "radial-gradient(circle at center, #282FE0 0%, #0B1445 60%, #020C32 70%)",
    image:
      "https://ik.imagekit.io/psltlu4ds/HR%20navin/crop2.png",
  },
  {
    name: "Shanthi",
    role: "HR Generalist, Payroll & Compliance",
    years: "7+ Years",
     bg: "radial-gradient(circle at center, #282FE0 0%, #0B1445 60%, #020C32 70%)",
    image:
      "https://ik.imagekit.io/psltlu4ds/HR%20navin/crop3.png",
  },
  {
    name: "Suganya Karthik",
    role: "Advanced HR & Career Guidance",
    years: "9+ Years",
     bg: "radial-gradient(circle at center, #282FE0 0%, #0B1445 60%, #020C32 70%)",
    image:
      "https://ik.imagekit.io/psltlu4ds/HR%20navin/shared%20image%20(1).png",
  },
   {
    name: "Sriram",
    role: "Sourcing Scientist (TA Intelligence | Analytics & Automation Expert) ",
    years: "10+ Years",
     bg: "radial-gradient(circle at center, #282FE0 0%, #0B1445 60%, #020C32 70%)",
    image:
      "https://ik.imagekit.io/psltlu4ds/HR%20navin/shared%20image%20(3).png",
  },
];

// Shared spring config — snappy, no bounce
const SPRING = {
  type: "spring",
  stiffness: 380,
  damping: 36,
  mass: 0.8,
};

export default function MentorSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev === mentors.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? mentors.length - 1 : prev - 1));
  };

  const mentor = mentors[current];
  const prevMentor = mentors[current === 0 ? mentors.length - 1 : current - 1];
  const nextMentor = mentors[current === mentors.length - 1 ? 0 : current + 1];

  return (
    <section className="relative container mx-auto overflow-hidden py-14 md:py-20 px-4 md:px-8">

      {/* TOP CONTENT */}
      <div className="max-w-5xl mx-auto text-center">

        <div className="flex items-center justify-center gap-2">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-black tracking-[1px] font-semibold text-lg md:text-5xl"
          >
            Learn From Multiple Mentors <span className="line-through">NOT ONE TRAINER</span>
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-700 mt-4 md:mt-8 max-w-3xl mx-auto text-sm md:text-xl leading-relaxed"
        >
          Across 60 days, 7–8 working HR professionals guide you.
        </motion.p>

      </div>

      {/* CAROUSEL */}
      <div className="relative max-w-7xl mx-auto mt-10 m md:h-[560px] flex items-center justify-center overflow-hidden">

        {/* LEFT PREVIEW CARD — stays mounted, only animates values */}
        <motion.div
          animate={{ x: -310, rotate: -8, scale: 0.82, opacity: 0.35 }}
          transition={SPRING}
          className="
            hidden lg:block
            absolute
            w-[350px]
            rounded-xl bg-[#f0f0ec] shadow-sm
            overflow-hidden
          "
        >
          <div className="flex flex-col">
            <div className="flex justify-between items-start px-4 mt-7 mb-3">
              <div>
                <h3 className="font-black text-xl">{prevMentor.name}</h3>
                
              </div>
              <span className="text-[11px] bg-white px-3 py-1 rounded-full shadow text-gray-700 whitespace-nowrap">
                {prevMentor.years}
              </span>
            </div>
            <p className=" text-gray-500 mt-1 mb-3 leading-snug h-9 ">
                  {prevMentor.role}
                </p>
            <div
              className="rounded-t-3xl h-[350px] overflow-hidden"
              style={{ background: prevMentor.bg }}
            >
              <img
                src={prevMentor.image}
                alt={prevMentor.name}
                className="w-full h-full object-cover object-top  transition-transform"
              />
            </div>
          </div>
        </motion.div>

        {/* RIGHT PREVIEW CARD — stays mounted, only animates values */}
        <motion.div
          animate={{ x: 310, rotate: 8, scale: 0.82, opacity: 0.35 }}
          transition={SPRING}
          className="
            hidden lg:block
            absolute
            w-[350px]
            rounded-xl bg-[#f0f0ec] shadow-sm
            overflow-hidden
          "
        >
          <div className="flex flex-col">
            <div className="flex justify-between items-start px-4 mt-7 mb-3">
              <div>
                <h3 className="font-black text-xl">{nextMentor.name}</h3>
                <p className=" text-gray-500 mt-1 mb-3 leading-snug h-9 ">
                  {nextMentor.role}
                </p>
              </div>
              <span className="text-[11px] bg-white px-3 py-1 rounded-full shadow text-gray-700 whitespace-nowrap">
                {nextMentor.years}
              </span>
            </div>
            <div
              className="rounded-t-3xl h-[350px] overflow-hidden"
              style={{ background: nextMentor.bg }}
            >
              <img
                src={nextMentor.image}
                alt={nextMentor.name}
                className="w-full h-full object-cover object-top transition-transform"
              />
            </div>
          </div>
        </motion.div>

        {/* ACTIVE CARD */}
        <AnimatePresence mode="popLayout" initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={(dir) => ({
              opacity: 0,
              x: dir > 0 ? 260 : -260,
              rotate: dir > 0 ? 8 : -8,
              scale: 0.88,
            })}
            animate={{
              opacity: 1,
              x: 0,
              rotate: 0,
              scale: 1,
            }}
            exit={(dir) => ({
              opacity: 0,
              x: dir > 0 ? -260 : 260,
              rotate: dir > 0 ? -8 : 8,
              scale: 0.88,
            })}
            transition={SPRING}
            className="
              relative z-20
              w-[380px]
              rounded-xl bg-[#f0f0ec] shadow-sm
              overflow-hidden
            "
          >
            <div className="flex flex-col">
              <div className="flex justify-between items-start px-4 mt-7 mb-3">
                <div>
                  <h3 className="font-black text-xl">{mentor.name}</h3>
                 
                </div>
                <span className="text-[11px] bg-white px-3 py-1 rounded-full shadow text-gray-700 whitespace-nowrap">
                  {mentor.years}
                </span>
              </div>
               <p className=" text-gray-500 px-4  mt-1 mb-4 leading-snug h-9 ">
                    {mentor.role}
                  </p>
              <div
                className="rounded-t-3xl h-[330px] overflow-hidden"
                style={{ background: mentor.bg }}
              >
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover object-top  transition-transform"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* ARROWS */}
      <div className="flex justify-center items-center gap-5 mt-5 lg:mt-10">

        {/* LEFT */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.08 }}
          onClick={prevSlide}
          className="
            md:w-14 md:h-14 w-8 h-8 rounded-full
            bg-white border border-black/10
            shadow-[0_5px_20px_rgba(0,0,0,0.08)]
            flex items-center justify-center
            hover:bg-[#B1E635] hover:text-black text-black
            transition-all duration-300
          "
        >
          <ChevronLeft size={26} />
        </motion.button>

        {/* INDICATORS */}
        <div className="flex gap-3">
          {mentors.map((_, index) => (
            <div
              key={index}
              className={`
                transition-all duration-500 rounded-full
                ${current === index ? "md:w-10 md:h-3 w-5 h-1.5 bg-[#B1E635]" : "md:w-3 md:h-3 w-1.5 h-1.5 bg-black/15"}
              `}
            />
          ))}
        </div>

        {/* RIGHT */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.08 }}
          onClick={nextSlide}
          className="
            md:w-14 w-8 h-8 md:h-14 rounded-full
            bg-white border border-black/10
            shadow-[0_5px_20px_rgba(0,0,0,0.08)]
            flex items-center justify-center
            hover:bg-[#B1E635] hover:text-black text-black
            transition-all duration-300
          "
        >
          <ChevronRight size={26} />
        </motion.button>

      </div>

      {/* FINAL CTA */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mx-auto text-gray-800 text-center"
      >
        <div className="inline-block px-8 py-3 md:py-10">
          <p className="text-lg md:text-4xl leading-relaxed">
            💡 Different mentors.{" "}
            Different strengths.{" "}
            <span className="text-[#B1E635]">One goal: Your Job.</span>
          </p>
        </div>
        <div>
          <CTAButtonPopup />
        </div>
      </motion.div>

    </section>
  );
}