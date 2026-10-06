import React from "react";
import { ArrowRight } from "lucide-react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { RiAwardFill } from "react-icons/ri";
import CTAButtonPopup from "./Button";
import { useEffect, useRef } from "react";

// Simple counter component
const AnimatedNumber = ({ value, suffix = "+" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, value, {
        duration: 2,
        ease: "easeOut"
      });
      return animation.stop;
    }
  }, [isInView, count, value]);

  return (
    <div ref={ref}>
      <h3 className="text-2xl lg:text-7xl font-bold text-black">
        <motion.span>{rounded}</motion.span>
        <span className="text-lg lg:text-3xl align-top ml-1">{suffix}</span>
      </h3>
    </div>
  );
};

const reviews = [
  {
    name: "Vignesh S",
    review:
      "Best learning platform for HR recruitment. End-to-end recruitment training was amazing and staffs are very friendly.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    name: "Safrin Shibana",
    review:
      "Very informative and useful for beginners. Trainers explained practical HR concepts in an easy way.",
    color: "from-green-500 to-emerald-400",
  },
  {
    name: "Hari Priya",
    review:
      "This course gave me practical knowledge and confidence. Useful for career growth and interview preparation.",
    color: "from-yellow-400 to-orange-400",
  },
  {
    name: "Deepalingeswari",
    review:
      "Mentors are supportive and engaging. Highly informative and valuable learning experience.",
    color: "from-purple-500 to-pink-400",
  },
  {
    name: "Raja Ganesh",
    review:
      "Excellent platform for HR aspirants. Real-time examples and practical sessions made concepts easy.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "Priyadharshini",
    review:
      "Placement assistance and mock interviews helped me build confidence and get industry-ready.",
    color: "from-emerald-500 to-lime-400",
  },
];

// duplicate for smooth infinite loop
const duplicatedReviews = [...reviews, ...reviews, ...reviews];

const AboutSection = () => {
  // const mentors = [
  //   {
  //     name: "Navin",
  //     role: "IT Recruitment & HR Career Strategy",
  //     exp: "8+ Years",
  //     img: "/images/m1.png",
  //     bg: "from-purple-400 to-purple-700",
  //   },
  //   {
  //     name: "Ramya",
  //     role: "Communication & Confidence Building",
  //     exp: "8+ Years",
  //     img: "/images/m2.png",
  //     bg: "from-blue-400 to-blue-700",
  //   },
  //   {
  //     name: "Melvin",
  //     role: "IT Recruitment (End-To-End)",
  //     exp: "8+ Years",
  //     img: "/images/m3.png",
  //     bg: "from-yellow-300 to-yellow-500",
  //   },
  //   {
  //     name: "Sangeetha",
  //     role: "HR Generalist, Payroll & Compliance",
  //     exp: "8+ Years",
  //     img: "/images/m4.png",
  //     bg: "from-green-400 to-green-600",
  //   },
  // ];

  // const loopMentors = [...mentors, ...mentors];

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

  const blurReveal = {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 30,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 1,
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

 const row1Reviews = [
  {
    name: "Priyadharshini S",
    text: "The course covered recruitment, payroll, statutory compliance, onboarding, and HR operations. The placement assistance, mock interviews, and resume guidance helped me confidently restart my HR career.",
    accentHex: "#2A74DB",
  },
  {
    name: "Harish O",
    text: "The HR Masterclass gave me practical exposure to JD analysis, sourcing, screening, and interview coordination. The ATS resume guidance and communication training were extremely valuable.",
    accentHex: "#B1E635",
  },
  {
    name: "Sri Harini",
    text: "The program built a strong foundation in end-to-end recruitment and significantly improved my communication skills, making it a valuable learning experience.",
    accentHex: "#f97316",
  },
  {
    name: "Akash P",
    text: "The trainers explain recruitment, payroll, and statutory compliance using real-time examples. Their interview preparation and placement guidance are excellent.",
    accentHex: "#2A74DB",
  },
  {
    name: "Deepa Amburu",
    text: "Through the course and internship, I gained practical experience in sourcing, screening, interview scheduling, and candidate coordination while building confidence for interviews.",
    accentHex: "#B1E635",
  },
];

const row2Reviews = [
  {
    name: "Sushma M",
    text: "The training covered HR from basic to advanced concepts in a practical and easy-to-understand way. With proper guidance, I successfully got placed as an HR Recruiter.",
    accentHex: "#f97316",
  },
  {
    name: "Kalaiselvi M",
    text: "The mentors taught sourcing through Naukri and LinkedIn, communication skills, HR fundamentals, and mock interviews. The support team guided us until placement.",
    accentHex: "#2A74DB",
  },
  {
    name: "Rumana M",
    text: "The internship provided hands-on recruitment experience including sourcing, screening calls, interview coordination, and job portal management. Every session was worth it.",
    accentHex: "#B1E635",
  },
  {
    name: "Jai Shankar",
    text: "The programs are industry-relevant, practical, and delivered by experienced professionals. A highly reliable platform for HR learning and career growth.",
    accentHex: "#f97316",
  },
  {
    name: "Sai Ragavan",
    text: "A great place to learn HR operations, recruitment processes, and HR Generalist functions. The trainers provide practical insights and strong foundational knowledge.",
    accentHex: "#2A74DB",
  },
];

const row3Reviews = [
  {
    name: "Dhivya Sudhakar",
    text: "The practical HR concepts, supportive trainers, and placement assistance helped me secure an internship and build confidence in my HR career.",
    accentHex: "#B1E635",
  },
  {
    name: "Kavinraj D",
    text: "The recruiter course covered sourcing strategies, screening techniques, and job portals in a practical, industry-focused manner with excellent mentor support.",
    accentHex: "#f97316",
  },
  {
    name: "Gnana Priya",
    text: "The mentors clearly explained recruitment lifecycle, sourcing techniques, screening, and onboarding using real-time examples and interactive sessions.",
    accentHex: "#2A74DB",
  },
  {
    name: "Victor Dominic",
    text: "The training and mentorship improved my communication skills and recruitment knowledge, helping me successfully secure a role as a US IT Recruiter.",
    accentHex: "#B1E635",
  },
  {
    name: "Dhivya K",
    text: "The internship provided strong practical exposure and helped me gain placement after completing the program. Highly recommended for HR aspirants.",
    accentHex: "#f97316",
  },
];

const ReviewCard = ({ name, text, accentHex }) => (
  <div
    className="w-[320px] md:w-[380px] shrink-0 bg-white rounded-2xl border border-gray-100 p-5 flex flex-col gap-3  "
    style={{ borderTop: `3px solid ${accentHex}` }}
  >
    <div className="flex items-start justify-between gap-2">
      <div className="flex-1 min-w-0">
        <p className="font-bold text-sm md:text-base text-gray-900 truncate">{name}</p>
        <div className="text-yellow-400 text-sm mt-1">★★★★★</div>
      </div>
      <span className="md:text-[10px] text-[8px] bg-[#EEF2FF] text-[#2A74DB] px-3 py-1 rounded-full whitespace-nowrap">
        Verified
      </span>
    </div>
    <p className="text-gray-600 text-xs md:text-sm leading-relaxed line-clamp-4 min-h-[80px]">
      {text}
    </p>
    <div className="pt-3 border-t border-gray-100 flex items-center gap-2">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
        alt="Google"
        className="w-4 h-4"
      />
      <span className="text-[11px] text-gray-400">Google Review</span>
    </div>
  </div>
);

  return (
    <>
      {/* SECTION 1 */}
      <motion.section
        id="company"
        className="lg:py-16 scroll-mt-12 py-7"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl container px-4 mx-auto">
          {/* TOP ROW */}
          <div className="grid lg:grid-cols-12 gap-6 items-start">
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              className="lg:col-span-3 flex items-center gap-2 text-gray-600"
            >
              <span className="w-2 h-2 bg-orange-500 text-sm lg:text-lg rounded-full"></span>
              <span className="text-sm md:text-base">About HR Learners Hub</span>
            </motion.div>

            {/* Heading */}
            <div className="lg:col-span-9">
              <motion.h2
                variants={blurReveal}
                className="text-base md:text-3xl text-gray-900 leading-snug"
              >
                We empower aspiring HR professionals with real-world IT hiring
                skills beyond classroom learning.
              </motion.h2>

              <div className="grid gap-3  lg:gap-6 lg:mt-12 mt-5 items-start">
                {/* Stats */}
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className=" flex gap-6 lg:gap-16  border-b  border-[#E9E9E9] py-5"
                >
                  {/* Stat 1 */}
                  <motion.div variants={fadeUp}>
                    <AnimatedNumber value={500} suffix="+" />
                    <p className="text-gray-600 text-xs lg:text-sm mt-2">
                      Students Placed
                    </p>
                  </motion.div>

                  {/* Stat 2 */}
                  <motion.div variants={fadeUp}>
                    <AnimatedNumber value={10} suffix="+" />
                    <p className="text-xs lg:text-sm text-gray-600 mt-2">
                      Industry Mentors
                    </p>
                  </motion.div>

                  {/* Stat 3 */}
                  <motion.div variants={fadeUp}>
                    <AnimatedNumber value={100} suffix="+" />
                    <p className="text-xs lg:text-sm text-gray-600 mt-2">
                      Company Tie-Ups
                    </p>
                  </motion.div>
                </motion.div>

                {/* Divider */}
                <div className="hidden md:flex md:col-span-1 justify-center">
                  <div className="w-[2px] h-full bg-gray-300"></div>
                </div>

                {/* Right Content */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="md:col-span-5"
                >
                  <p className="text-gray-600 text-sm md:text-xl leading-relaxed">
                    HR Learners Hub delivers hands-on, placement-focused HR
                    training with real IT hiring, sourcing, communication, and
                    AI tools to make you job-ready.
                  </p>

                  <CTAButtonPopup
                    buttonText="Start your Journey"
                    buttonBg="#000000"
                    gradientFrom="#B1E635"
                    gradientTo="#ffffff"
                    className=" text-white "
                  // submitBtnBg="#B1E635"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <div id="feature">
        {/* SECTION 2 */}
        <motion.section
          className="container mx-auto py-7 lg:py-20 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          <div className="max-w-7xl mx-auto">
            {/* Badge */}


            {/* Wrapper */}
            <div className="relative">
              {/* Background Shadow */}
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                transition={{ duration: 1.2 }}
                src="https://ik.imagekit.io/psltlu4ds/HR%20navin/Vector%20998.png"
                alt="shadow"
                className="hidden lg:block absolute left-0 top-1/3 xl:top-[40%] -translate-y-1/2 w-[80%] opacity-60 blur-xl z-10"
              />

              {/* BLACK CARD */}
              <motion.div
                variants={fadeUp}
                className="relative"
              >
                <div
                  className="flex flex-col lg:flex-row gap-10 items-center justify-between 
                  bg-[#272727]
                  rounded-3xl p-5 py-6 md:px-7 md:py-10 text-white shadow-xl lg:pr-14"
                >
                  {/* LEFT */}
                  <div>
                    <motion.div
                      variants={fadeUp}
                      className="flex items-center gap-2 text-gray-300 mb-5 md:mb-10"
                    >
                      <span className="w-2 h-2 bg-orange-500 lg:text-lg rounded-full"></span>
                      <span className=" text-sm lg:text-base">REAL TALK (Why Most HR Aspirants Fail)</span>
                    </motion.div>
                    <motion.h2
                      variants={blurReveal}
                      className="text-xl md:text-5xl font-semibold leading-snug  mb-8"
                    >
                      Let’s Be Honest. <br />Most
                      HR Students <br className="hidden lg:block" /> Struggle
                      Because:
                    </motion.h2>

                    <motion.ul
                      variants={stagger}
                      className="space-y-5 text-gray-300"
                    >
                      {[
                        "Too much theory, no real HR work",
                        "No understanding of IT recruitment process",
                        "Weak communication & interview fear",
                        "Certificates but no practical confidence",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          variants={fadeUp}
                          className="flex text-sm md:text-xl gap-3 items-start"
                        >
                          <img
                            src="https://ik.imagekit.io/psltlu4ds/HR%20navin/SVG.png"
                            className="w-5 h-5 lg:w-8 lg:h-8 mt-1"
                          />
                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>

                    {/* NOTE SECTION */}
                    <motion.div
                      variants={fadeUp}
                      className="
    mt-8
    relative
    overflow-hidden
    rounded-2xl
    border border-white/10
    bg-gradient-to-r from-white/[0.06] to-white/[0.03]
    backdrop-blur-xl
    p-2 md:p-6
    shadow-[0_10px_40px_rgba(0,0,0,0.35)]
  "
                    >

                      {/* glow blur */}
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#4043FE]/20 blur-3xl rounded-full"></div>

                      {/* content */}
                      <div className="relative flex items-center gap-4">

                        {/* icon */}
                        <div
                          className="
        md:min-w-[52px] h-[30px] w-[40px] md:h-[52px]
        rounded-2xl
        bg-gradient-to-br from-[#4043FE] to-[#6B6EFF]
        flex items-center justify-center
        shadow-lg shadow-[#4043FE]/30
      "
                        >
                          <RiLightbulbFlashFill className="text-white text-2xl" />
                        </div>

                        {/* text */}
                        <div>

                          {/* small label */}
                          <p className="text-[#B1E635] text-[10px] md:text-sm uppercase tex tracking-[0.25em] font-semibold lg:mb-2">
                            That’s exactly why HR Learners Hub exists.
                          </p>



                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* RIGHT */}

                  <motion.div
                    variants={fadeUp}
                    className="relative z-20 
                    border-4 lg:border-none
                    lg:bg-none bg-[radial-gradient(circle_at_center,#282FE0_0%,#020C32_100%)] 
                    px-3 py-6 lg:px-0 lg:py-0 rounded-xl lg:w-[40%]"
                  >
                    <motion.h2
                      variants={blurReveal}
                      className="text-xl md:text-5xl leading-snug font-semibold mb-4 md:mb-8"
                    >
                      What Makes HR
                      Learners Hub
                      Different?
                    </motion.h2>

                    <motion.ul
                      variants={stagger}
                      className="space-y-5 text-sm md:text-base text-gray-200"
                    >
                      {[
                        "100% practical HR training",
                        "End-to-end IT recruitment mastery",
                        "Daily communication & interview practice",
                        "Real-time internship experience",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          variants={fadeUp}
                          className="flex md:text-xl gap-3 items-start"
                        >
                          <img
                            src="https://ik.imagekit.io/psltlu4ds/HR%20navin/SVG%20(1).png"
                            className="w-5 h-5 lg:w-8 lg:h-8 mt-1"
                          />
                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>


                    <motion.p
                      variants={blurReveal}
                      className=" text-gray-300 md:mt-10 mt-5  text-base lg:text-3xl"
                    >
                      <span>Result : </span>
                      You don’t feel like a{" "}
                      <span className="text-[#2A74DB] font-medium">
                        fresher in interviews.
                      </span>
                    </motion.p>
                    <div className=""><CTAButtonPopup className="" /></div>
                  </motion.div>

                </div>


              </motion.div>

              {/* BLUE BG CARD */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="
                  hidden lg:block
                  absolute right-4 xl:right-6
                  -top-10 -bottom-10
                  w-[43%]
                  rounded-3xl
                  p-[12px]
                  z-10
                  overflow-hidden
                  shadow-lg
                  bg-[#E5E5E566]
                "
              >
                <div
                  className="
                    w-full h-full 
                    rounded-2xl
                    bg-[radial-gradient(circle_at_center,#282FE0_0%,#0B1445_60%,#020C32_70%)]
                    bg-no-repeat bg-center
                  "
                />

              </motion.div>


            </div>

            {/* Bottom Text */}

          </div>
        </motion.section>

      

    {/* ================= GOOGLE REVIEWS SECTION ================= */}
<section className="py-14 lg:py-24 container mx-auto overflow-hidden bg-white">
  <div className="max-w-7xl  mx-auto px-4 mb-10">
    <motion.div
      variants={fadeUp}
      className="flex justify-center items-center gap-2 text-gray-600 mb-4"
    >
      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
      <span className="text-sm md:text-base font-medium">What Our Students Say</span>
    </motion.div>
    <motion.h2
      variants={blurReveal}
      className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-12"
    >
      Real Reviews From <span className="text-[#2A74DB]">Real Learners</span>
    </motion.h2>
  </div>

  {/* ROW 1 — left to right */}
  <div className="relative max-w-7xl mx-auto overflow-hidden mb-4">
    <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />
    <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />
    <motion.div
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      className="flex gap-5 w-max"
    >
      {[...row1Reviews, ...row1Reviews].map((item, i) => (
        <ReviewCard key={`row1-${i}`} {...item} />
      ))}
    </motion.div>
  </div>

  {/* ROW 2 — right to left */}
  <div className="relative max-w-7xl mx-auto overflow-hidden mb-4">
    <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />
    <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />
    <motion.div
      animate={{ x: ["-50%", "0%"] }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      className="flex gap-5 w-max"
    >
      {[...row2Reviews, ...row2Reviews].map((item, i) => (
        <ReviewCard key={`row2-${i}`} {...item} />
      ))}
    </motion.div>
  </div>

  {/* ROW 3 — left to right */}
  <div className="relative max-w-7xl mx-auto overflow-hidden">
    <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />
    <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />
    <motion.div
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
      className="flex gap-5 w-max"
    >
      {[...row3Reviews, ...row3Reviews].map((item, i) => (
        <ReviewCard key={`row3-${i}`} {...item} />
      ))}
    </motion.div>
  </div>
</section>

       


        {/* SECTION 3 */}
        <motion.section
          className="relative py-7 lg:py-20 px-4 overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          {/* Background */}
          <img
            src="https://ik.imagekit.io/psltlu4ds/HR%20navin/image%20207994.png"
            alt="background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Content */}
          <div className="relative z-10 container max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              className="flex justify-center items-center gap-2 text-sm lg:text-lg text-gray-600 mb-6"
            >
              <span className="w-2 h-2 bg-orange-500 lg:text-lg rounded-full"></span>
              <span className="md:text-base text-sm">
                Our Promise{" "}
                <span className="line-through opacity-70">
                  NOT A MARKETING LINE
                </span>
              </span>
            </motion.div>

            {/* Heading */}
            <div className="relative inline-block">
              {/* Curve */}
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 0.8, x: 0 }}
                transition={{ duration: 0.8 }}
                src="https://ik.imagekit.io/psltlu4ds/HR%20navin/Vector%20(2).png"
                alt="curve"
                className="hidden md:block absolute left-10 top-40 w-12 opacity-80"
              />

              <motion.h2
                variants={blurReveal}
                className="text-xl md:text-[40px] font-extrabold leading-relaxed md:leading-[1.5] text-gray-800"
              >
                If You Follow Our Process For{" "}

                <span className="relative inline-block mx-2 md:mx-3">

                  <motion.span
                    initial={{
                      scale: 0.7,
                      rotate: 0,
                      opacity: 0,
                    }}
                    whileInView={{
                      scale: 1,
                      rotate: 3,
                      opacity: 1,
                    }}
                    transition={{ duration: 0.7 }}
                    className="
        inline-block
        rotate-3
        bg-[#2A74DB]
        text-white
        text-2xl
        md:text-[40px]
        px-4 md:px-5
        py-2
        rounded-lg
        shadow-[0_0_35px_rgba(42,116,219,0.7)]
      "
                  >
                    60 Days
                  </motion.span>

                </span>

                <br />

                <span className="inline-block mt-5 md:mt-6 text-lg md:text-[35px] font-medium leading-relaxed">
                  You'll Be Interview-Ready, <br className="hidden md:block" />
                  Industry-Ready, And Job-Ready.
                </span>

              </motion.h2>
            </div>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              className="mt-8 text-sm md:text-xl text-gray-700"
            >
              We Don't Promise Shortcuts.{" "}
              <span className="text-blue-600 font-medium">
                We Promise Transformation.
              </span>
            </motion.p>
            <div className="mx-auto"><CTAButtonPopup className=" text-white" /></div>
          </div>


        </motion.section>
      </div>
    </>
  );
};

export default AboutSection;