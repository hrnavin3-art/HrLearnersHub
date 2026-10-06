import React from "react";
import {
  Check,
  Video,
  Infinity,
  Users,
  Briefcase,
} from "lucide-react";

import { motion } from "framer-motion";
import CTAButtonPopup from "./Button";

const Pricing = () => {

  /* ---------------- ANIMATIONS ---------------- */

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
        duration: 0.5,
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

  return (
    <div>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
        className="bg-[#f4f4f4] scroll-mt-12 py-16 px-4"
      >

        <div className="max-w-7xl container mx-auto">

          {/* HEADING */}
          <motion.h2
            variants={blurReveal}
            className="text-center text-xl md:text-5xl font-bold mb-4 text-gray-800"
          >
            Pricing That Removes Fear
          </motion.h2>

          <motion.p
            variants={blurReveal}
            className="text-center text-gray-500 max-w-3xl mx-auto mb-12 text-base md:text-lg"
          >
            Total Program Value: ₹20,000 — designed to be risk-free
            with our Pay-After-Placement model.
          </motion.p>

          {/* TOP CARD */}
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
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}

            viewport={{ once: true }}

            className="relative rounded-3xl p-5 md:px-8 md:py-14 text-white mb-10 bg-gradient-to-r from-[#2f6edc] to-[#0f5cc9] overflow-hidden"
          >

            {/* ABSOLUTE CIRCLES */}
            <div className="bg-gradient-to-r from-[#1161D2] to-[#2380FF] absolute hidden md:block right-16 -top-12 z-30 w-36 opacity-70 rounded-full h-32"></div>

            <div className="bg-gradient-to-r from-[#1768D8] to-[#0963DF] absolute hidden md:block right-0 -top-12 z-20 w-36 opacity-65 rounded-full h-32"></div>

            {/* HEADER */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 mb-8"
            >

              <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                <img
                  src="https://ik.imagekit.io/psltlu4ds/HR%20navin/Frame%202147224409.png"
                  alt="icon"
                />
              </div>

              <div>

                <div className="flex flex-wrap items-center gap-2">

                  <h3 className="font-semibold md:text-2xl">
                    PAY-AFTER-PLACEMENT MODEL
                  </h3>

                  <span className="bg-yellow-400 whitespace-nowrap text-black text-[8px] lg:text-xs px-2 py-1 rounded">
                    Best Value
                  </span>

                  <span className="bg-lime-400 whitespace-nowrap text-black text-[8px] lg:text-xs px-2 py-1 rounded font-semibold">
                    Risk-Free
                  </span>

                </div>

                <p className=" text-xs md:text-sm text-white/80 leading-relaxed mt-2 max-w-xl">
                  Designed to make career growth accessible without financial pressure.
                </p>

              </div>
            </motion.div>

            {/* PRICE SECTION */}
            <motion.div
              variants={stagger}
              className="flex flex-col xl:flex-row xl:items-center gap-6"
            >

              {/* DURING */}
              <div className="flex gap-4 items-center">
                <motion.div
                  variants={fadeUp}
                  className="whitespace-nowrap"
                >

                  <p className="text-white/70 text-sm md:text-base mb-1">
                    Pay During Training
                  </p>

                  <p className="md:text-5xl text-lg font-bold">
                    ₹10,000
                  </p>

                </motion.div>

                <div className="h-14 hidden xl:block w-[1px] bg-white/30"></div>

                {/* AFTER */}
                <motion.div
                  variants={fadeUp}
                  className="whitespace-nowrap"
                >

                  <p className="text-white/70 text-sm md:text-base mb-1">
                    Pay After Placement
                  </p>

                  <p className="md:text-5xl text-lg font-bold">
                    ₹10,000
                  </p>

                </motion.div>

                <div className="h-14 hidden xl:block w-[1px] bg-white/30"></div>
              </div>

              {/* FEATURES */}
              <motion.div
                variants={stagger}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs lg:text-base w-full"
              >

                {[
                  "Recruitment Training",
                  "Communication Training",
                  "Interview Preparation",
                  "Job Search Strategy",
                  "Placement Support",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex items-center gap-2"
                  >
                    <Check size={16} />
                    {item}
                  </motion.div>
                ))}

              </motion.div>

              {/* BUTTON */}
              {/* <motion.button
                whileHover={{
                  scale: 1.03,
                }}

                whileTap={{
                  scale: 0.98,
                }}

                className="xl:ml-auto whitespace-nowrap bg-white/90 text-gray-900 px-10 py-3 rounded-xl text-sm md:text-base font-semibold shadow border border-white/40 hover:bg-white"
              >
                Get started
              </motion.button> */}

              
                 <CTAButtonPopup
  buttonText="Get started"
  buttonBg="#ffffff"
  gradientFrom="#ffffff"
  gradientTo="#ffffff"
  className="xl:ml-auto mx-auto  md:text-left text-black whitespace-nowrap mt-0"
  
/>
               

            </motion.div>
          </motion.div>

          {/* OPTIONAL ADDONS */}
          <motion.div
            variants={fadeUp}
            className="bg-white rounded-3xl p-5 md:p-7 mb-10 border border-gray-200"
          >

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
                <Briefcase className="text-blue-600" size={22} />
              </div>

              <div>
                <h3 className="md:text-2xl font-bold text-gray-800">
                  Optional Add-ons
                </h3>

                <p className="text-gray-500 text-xs md:text-sm">
                  Career customization based on your goal.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">

              {/* GENERALIST */}
              <div className="rounded-2xl border border-gray-200 p-4 md:p-6">
                <h4 className="font-semibold md:text-xl text-gray-800">
                  HR Generalist Program
                </h4>

                <p className="text-gray-500 mt-3 text-sm md:text-base leading-relaxed">
                  Learn payroll, onboarding, HR documentation,
                  operations, employee management, and compliance basics.
                </p>

                <div className="mt-5 inline-flex rounded-full bg-green-100 text-green-700 px-4 py-2 text-xs md:text-sm font-semibold">
                  ₹5,000 after placement
                </div>
              </div>

              {/* INTERNSHIP */}
              <div className="rounded-2xl border border-gray-200 p-4 md:p-6">
                <h4 className="font-semibold md:text-xl text-gray-800">
                  Real-Time Internship
                </h4>

                <p className="text-gray-500 mt-3  text-sm md:text-base leading-relaxed">
                  Gain consulting-style HR experience through live
                  recruitment workflows and real client requirements.
                </p>

                <div className="mt-5 inline-flex rounded-full bg-blue-100 text-blue-700 px-4 py-2 text-xs md:text-sm font-semibold">
                  ₹5,000 after placement
                </div>
              </div>

            </div>

            <p className=" text-xs md:text-sm text-gray-500 mt-6">
              👉 Choose based on your goal. Upgrade anytime.
            </p>

          </motion.div>

          {/* CARDS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="bg-[#e9e6e3] rounded-3xl p-4 md:p-6 grid md:grid-cols-2 xl:grid-cols-4 gap-6"
          >

            {[
              {
                title: "Recruitment Only",
                desc: "Core hiring & placement-focused training.",
                during: "₹10,000",
                after: "₹10,000",
                total: "₹20,000",
                color: "bg-[#CCDCFF] border border-[#7EA7FF]",
                icon: "https://ik.imagekit.io/psltlu4ds/HR%20navin/profile-2user.png?updatedAt=1778004321209",

                features: [
                  "Recruitment Training",
                  "Communication Training",
                  "Interview Preparation",
                  "Placement Support",
                ],
              },

              {
                title: "Recruitment + Generalist",
                desc: "Expand into complete HR operations.",
                during: "₹15,000",
                after: "₹5,000",
                total: "₹20,000",
                color: "bg-[#9BE8D2] border border-[#1BE0A8]",
                icon: "https://ik.imagekit.io/psltlu4ds/HR%20navin/briefcase.png?updatedAt=1778004321314",

                features: [
                  "Everything in Recruitment",
                  "HR Generalist Program",
                  "Documentation Training",
                  "Operations Exposure",
                ],
              },

              {
                title: "Recruitment + Internship",
                desc: "Gain practical real-world HR experience.",
                during: "₹15,000",
                after: "₹5,000",
                total: "₹20,000",
                color: "bg-[#E8C79A] border border-[#E59421]",
                icon: "https://ik.imagekit.io/psltlu4ds/HR%20navin/teacher.png?updatedAt=1778004321092",

                features: [
                  "Everything in Recruitment",
                  "Real-Time Internship",
                  "Live Recruitment Workflow",
                  "Client Hiring Exposure",
                ],
              },

              {
                title: "Full Program -[Recruitment + Generalist +Internship] ",
                desc: "Complete career-ready HR transformation.",
                during: "₹20,000",
                after: "₹0",
                total: "₹20,000",
                color: "bg-[#D7C8FF] border border-[#9C74FF]",
                icon: "https://ik.imagekit.io/psltlu4ds/HR%20navin/Frame%202147224409.png",

                features: [
                  "Recruitment Training",
                  "HR Generalist Program",
                  "Real-Time Internship",
                  "Priority Placement Support",
                ],
              },
            ].map((item, i) => (

              <motion.div
                key={i}

                variants={fadeUp}

               

                className="bg-white rounded-2xl p-4 lg:p-5 shadow-sm"
              >

                {/* TOP */}
                <div className="flex items-center gap-3 ">

                  <div className="p-2 md:w-20 md:h-20 w-14 h-14 rounded-full">
                    <img
                      src={item.icon}
                      alt="icon"
                    />
                  </div>

                  <div>

                    <h3 className="font-semibold text-base  lg:text-xl">
                      {item.title}
                    </h3>

                    

                  </div>
                  
                </div>
                {/* <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                      {item.desc}
                    </p> */}

                <div className="border-t border-[#E9EAEB] my-2 md:my-4"></div>

                {/* PRICING */}
                <div className="flex items-center justify-between text-sm">

                  <div className="text-center flex-1">

                    <p className="font-semibold text-lg md:text-2xl">
                      {item.during}
                    </p>

                    <p className="text-gray-400 text-xs md:text-sm">
                      During Training
                    </p>

                  </div>

                  <div className="w-[1px] h-10 bg-gray-200"></div>

                  <div className="text-center flex-1">

                    <p className="font-semibold text-lg md:text-2xl">
                      {item.after}
                    </p>

                    <p className="text-gray-400 text-xs lg:text-sm">
                      After Placement
                    </p>

                  </div>
                </div>

                <div className="border-t border-[#E9EAEB] my-4"></div>

                {/* TOTAL */}
                <div className={`${item.color}  flex  flex-row items-center justify-center gap-3 rounded-xl text-center py-2  md:py-4 mt-4`}>

                  <p className=" text-sm md:text-base text-gray-600">
                    TOTAL VALUE :
                  </p>

                  <h4 className=" text-lg md:text-3xl font-bold">
                    {item.total}
                  </h4>

                </div>

                {/* BUTTON */}
                {/* <motion.button
                  whileHover={{
                    scale: 1.02,
                  }}

                  whileTap={{
                    scale: 0.98,
                  }}

                  className="w-full mt-4 border border-gray-300 text-sm md:text-base rounded-xl  py-3 bg-[#2A74DB] hover:bg-gray-200 font-medium"
                >
                 Enroll Now
                </motion.button> */}

               
                  <div className="flex items-center justify-center">
                    <CTAButtonPopup buttonText="Enroll now "  className='   text-white font-medium '  />
                  </div>
              

                <div className="border-t border-[#E9EAEB] my-4"></div>

                {/* FEATURES */}
                <motion.ul
                  variants={stagger}
                  className="space-y-3 text-xs md:text-sm text-gray-700"
                >

                  {item.features.map((f, idx) => (

                    <motion.li
                      key={idx}
                      variants={fadeUp}
                      className="flex items-center text-xs lg:text-base gap-3"
                    >

                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-green-600" />
                      </div>

                      {f}

                    </motion.li>
                  ))}

                </motion.ul>
              </motion.div>
            ))}

          </motion.div>

          {/* EMI SECTION */}
          <motion.div
            variants={fadeUp}
            className="mt-10 rounded-3xl bg-gradient-to-r from-[#0f5cc9] to-[#2f6edc] text-white p-4 md:p-8 overflow-hidden relative"
          >

            <div className="absolute right-0 top-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">

              <div>
                <h3 className="md:text-3xl text-lg font-bold">
                  💳 Flexible EMI Options
                </h3>

                <p className="text-white/70 mt-3 leading-relaxed text-sm md:text-lg">
                  Weekly EMI: ₹1,500 – ₹2,500
                  <br />
                  One-time / Two-split / EMI available.
                </p>
              </div>

              <div className="bg-white/10 border border-white/10 lg:rounded-2xl rounded-lg px-3 md:px-6 py-2 md:py-5 backdrop-blur-xl">
                <p className="md:text-lg text-xs font-semibold leading-relaxed">
                  Money should never stop your career growth.
                </p>
              </div>


            </div>
            <CTAButtonPopup
             buttonText="Start your Journey"
  buttonBg="#000000"
  gradientFrom="#B1E635"
  gradientTo="#ffffff"
  className=""
  />

          </motion.div>

        </div>
      </motion.section>
    </div>
  );
};

export default Pricing;