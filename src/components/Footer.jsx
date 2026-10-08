"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// icons
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import CTAButtonPopup from "./Button";

export default function CTASection() {
  /* ---------------- POPUP STATE ---------------- */

  const [showMentorPopup, setShowMentorPopup] = useState(false);

  /* ---------------- ANIMATIONS ---------------- */

  const shaggyVariants = {
    initial: {
      scale: 0.8,
      rotate: -8,
      opacity: 0,
    },

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
        staggerChildren: 0.15,
      },
    },
  };

  /* ---------------- CONTACT NUMBERS ---------------- */

  const baseContacts = [
    "6382974304",
    "7538864115",
    "7826015352",
  ];

  /* ---------------- MONTHLY CONTACT ROTATION ---------------- */

  const getMonthlyContacts = () => {
    // Rotation starts from August 2026
    const startDate = new Date("2026-08-01T00:00:00");
    const today = new Date();

    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();

    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();

    // Calculate how many months have passed
    const monthsPassed =
      (currentYear - startYear) * 12 +
      (currentMonth - startMonth);

    // Rotate between 0, 1 and 2
    const rotation =
      ((monthsPassed % baseContacts.length) +
        baseContacts.length) %
      baseContacts.length;

    // Return rotated order
    return [
      ...baseContacts.slice(rotation),
      ...baseContacts.slice(0, rotation),
    ];
  };

  // Current month's contact order
  const contacts = getMonthlyContacts();

  /* ---------------- CALL HANDLER ---------------- */

  const handleCall = (number) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <>
      {/* ================= CTA SECTION ================= */}

      <motion.section
        id="career"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        variants={fadeUp}
        className="relative overflow-hidden scroll-mt-12 text-white py-24 px-4"
      >
        {/* ================= BACKGROUND IMAGE ================= */}

        <img
          src="https://ik.imagekit.io/psltlu4ds/HR%20navin/590eec95af33dcb393e4eb733384544ab95653c7.jpg?updatedAt=1777720251045"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />

        {/* ================= CONTENT ================= */}

        <motion.div
          variants={stagger}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          {/* ================= QUOTE TEXT ================= */}

          <motion.p
            variants={blurReveal}
            className="text-gray-300 text-lg lg:text-2xl mb-6 relative leading-relaxed"
          >
            {/* LEFT QUOTE */}

            <motion.span
              initial={{
                opacity: 0,
                scale: 0.5,
                rotate: -20,
              }}
              whileInView={{
                opacity: 0.4,
                scale: 1,
                rotate: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              viewport={{
                once: true,
              }}
              className="md:text-4xl text-lg absolute -left-2 md:left-16 top-0 md:top-[-10px] opacity-40"
            >
              <FaQuoteLeft />
            </motion.span>

            Seats are limited to maintain quality mentoring.

            {/* RIGHT QUOTE */}

            <motion.span
              initial={{
                opacity: 0,
                scale: 0.5,
                rotate: 20,
              }}
              whileInView={{
                opacity: 0.4,
                scale: 1,
                rotate: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              viewport={{
                once: true,
              }}
              className="md:text-4xl text-lg absolute -right-2 md:right-16 top-0 md:top-[-10px] opacity-40"
            >
              <FaQuoteRight />
            </motion.span>
          </motion.p>

          {/* ================= MAIN TEXT ================= */}

          <motion.h2
            variants={blurReveal}
            className="text-xl md:text-5xl font-bold text-center leading-tight flex flex-col items-center gap-4 mt-5"
          >
            <div className="flex items-center gap-3">
              {/* GLOW BOX */}

              <span className="relative inline-block">
                <motion.span
                  variants={shaggyVariants}
                  initial="initial"
                  animate="animate"
                  className="
                    inline-block
                    rotate-[6deg]
                    bg-[#B1E635]
                    text-black
                    shadow-xl
                    text-xl
                    md:text-5xl
                    shadow-[#B1E635]
                    px-2
                    md:py-3
                    py-2
                    rounded-xl
                  "
                >
                  60
                </motion.span>

                <span className="absolute inset-0 blur-xl bg-lime-400/60 rounded-xl -z-10"></span>
              </span>

              <span>Days From Now</span>
            </div>

            <span className="md:text-3xl text-gray-200 text-sm md:text-base font-normal mt-5 max-w-3xl">
              You’ll either stay confused —
              <br className="hidden md:block" />
              or you’ll be working as an HR.
              <span className="font-bold">
                The choice is yours.
              </span>
            </span>
          </motion.h2>

          {/* ================= BUTTONS ================= */}

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            {/* EXISTING CTA BUTTON */}

            <CTAButtonPopup className="flex items-center" />

            {/* TALK TO HR MENTOR BUTTON */}

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={() => setShowMentorPopup(true)}
              className="
                border
                border-white/20
                bg-white/10
                backdrop-blur-md
                px-10
                md:px-14
                py-3
                rounded-xl
                text-white
                transition
                hover:bg-white/20
              "
            >
              Talk to HR Mentor
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ================= HR MENTOR POPUP ================= */}

      {showMentorPopup && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/70
            backdrop-blur-sm
            px-4
          "
          onClick={() => setShowMentorPopup(false)}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={(e) => e.stopPropagation()}
            className="
              w-full
              max-w-md
              rounded-2xl
              bg-[#111]
              border
              border-white/10
              p-6
              shadow-2xl
            "
          >
            {/* ================= POPUP HEADER ================= */}

            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Talk to HR Mentor
                </h3>

                <p className="text-sm text-gray-400 mt-1">
                  Select a number to call
                </p>
              </div>

              {/* CLOSE BUTTON */}

              <button
                onClick={() => setShowMentorPopup(false)}
                className="
                  text-gray-400
                  hover:text-white
                  text-2xl
                  transition
                "
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* ================= PHONE NUMBERS ================= */}

            <div className="space-y-3">
              {contacts.map((number) => (
                <motion.button
                  key={number}
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  onClick={() => handleCall(number)}
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    hover:bg-white/10
                    px-5
                    py-4
                    transition
                  "
                >
                  <span className="text-white text-lg font-medium">
                    {number}
                  </span>

                  <span className="text-[#B1E635] text-xl">
                    📞
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}