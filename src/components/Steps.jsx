import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { IoCheckmarkSharp } from "react-icons/io5";
import CTAButtonPopup from "./Button";

/* ---------------- ICONS ---------------- */

const BookIcon = ({ color = "#fff" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const ArrowIcon = ({ color = "#fff" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <circle cx="12" cy="12" r="9" />
    <path d="M10 8l4 4-4 4" />
  </svg>
);

const LightningIcon = ({ color = "#fff" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
  </svg>
);

const PeopleIcon = ({ color = "#fff" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <circle cx="9" cy="8" r="3" />
    <circle cx="17" cy="10" r="3" />
    <path d="M4 20c0-3 2-5 5-5" />
    <path d="M14 20c0-3 2-5 5-5" />
  </svg>
);

const MicIcon = ({ color = "#fff" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <rect x="9" y="3" width="6" height="11" rx="3" />
    <path d="M5 11a7 7 0 0 0 14 0" />
  </svg>
);

const SearchIcon = ({ color = "#fff" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-4-4" />
  </svg>
);

const InternIcon = ({ color = "#fff" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M5 12h10" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);

const STEP_ICONS = [
  BookIcon,
  ArrowIcon,
  LightningIcon,
  PeopleIcon,
  MicIcon,
  SearchIcon,
  InternIcon,
];

/* ---------------- DATA ---------------- */

const STEPS = [
  {
    id: 1,
    title: "HR Recruitment Fundamentals",
    sub: "Learn End-to-End Recruitment Practically",
    points: [
      "Understanding recruitment lifecycle",
      "Resume screening & shortlisting",
      "LinkedIn & Naukri sourcing",
      "IT & Non-IT recruitment basics",
    ],
    outcome: "Build strong recruiter skills from scratch.",
  },
  {
    id: 2,
    title: "Communication & Confidence Building",
    sub: "Improve Professional Communication",
    points: [
      "Interview speaking practice",
      "Voice improvement sessions",
      "Professional email communication",
      "Mock HR calling practice",
    ],
    outcome: "Speak confidently in interviews.",
  },
  {
    id: 3,
    title: "HR Generalist Training",
    sub: "Learn Core HR Operations",
    points: [
      "Payroll basics",
      "Employee onboarding",
      "HR documentation",
      "Compliance fundamentals",
    ],
    outcome: "Gain practical HR operations exposure.",
  },
  {
    id: 4,
    title: "Interview Preparation",
    sub: "Get Ready for Interviews",
    points: [
      "Resume preparation",
      "Mock interviews",
      "Salary negotiation",
      "Corporate interview strategy",
    ],
    outcome: "Attend interviews confidently.",
  },
  {
    id: 5,
    title: "Placement Support",
    sub: "Dedicated Job Assistance",
    points: [
      "Daily job updates",
      "Referral support",
      "Application guidance",
      "Placement follow-up",
    ],
    outcome: "Increase placement opportunities.",
  },
  {
    id: 6,
    title: "Internship Opportunity",
    sub: "Gain Real-Time Exposure",
    points: [
      "Live internship work",
      "Candidate coordination",
      "Recruitment exposure",
      "Experience certificate",
    ],
    outcome: "Build real HR experience.",
  },
  {
    id: 7,
    title: "AI in HR",
    sub: "Learn Future-Ready Skills",
    points: [
      "AI recruitment tools",
      "AI screening techniques",
      "ChatGPT workflows",
      "AI hiring trends",
    ],
    outcome: "Become an AI-enabled HR professional.",
  },
];

/* ---------------- COMPONENT ---------------- */

export default function StepsSection() {
  const progressLineRef = useRef(null);
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    const updateProgress = () => {
      const section = document.getElementById("timeline-section");
      if (!section || !progressLineRef.current) return;

      const rect = section.getBoundingClientRect();
      const totalHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      // Calculate progress based on viewport center
      const centerPoint = viewportHeight / 2;
      let progress;
      
      if (rect.top <= centerPoint && rect.bottom >= centerPoint) {
        // Center is within section
        const pointInSection = centerPoint - rect.top;
        progress = pointInSection / totalHeight;
      } else if (rect.bottom < centerPoint) {
        // Scrolled past section
        progress = 1;
      } else {
        // Haven't reached section yet
        progress = 0;
      }
      
      progress = Math.min(Math.max(progress, 0), 1);
      
      // Smooth easing
      const easedProgress = Math.pow(progress, 0.8);
      const lineHeight = easedProgress * totalHeight;
      
      progressLineRef.current.style.height = `${lineHeight}px`;

      // Detect which step to highlight when line reaches the number
      const timelineItems = document.querySelectorAll(".timeline-step");
      let currentActive = -1;

      timelineItems.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        const sectionRect = section.getBoundingClientRect();
        const numberDot = item.querySelector(".number-dot");
        
        if (numberDot) {
          const dotRect = numberDot.getBoundingClientRect();
          const dotTopRelative = dotRect.top - sectionRect.top;
          const dotBottomRelative = dotRect.bottom - sectionRect.top;
          const dotCenter = (dotTopRelative + dotBottomRelative) / 2;
          
          // Highlight when line reaches the center of the number dot
          if (lineHeight >= dotCenter) {
            currentActive = index;
          }
        } else {
          // Fallback to item position
          const itemTopRelative = itemRect.top - sectionRect.top;
          if (lineHeight >= itemTopRelative + 20) {
            currentActive = index;
          }
        }
      });

      setActiveStep(currentActive);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#020B32] to-[#010897] py-20">
      {/* BG GLOW */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center mb-5"
        >
          <div className="px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-blue-200 text-sm">
            🚀 7-Step HR Placement Roadmap
          </div>
        </motion.div>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white font-bold text-2xl md:text-6xl leading-tight"
        >
          The 7-Step System
          <br />
          That Gets You Placed
        </motion.h1>

        {/* TIMELINE */}
        <div
          id="timeline-section"
          className="relative mt-16 md:mt-24 max-w-5xl mx-auto"
        >
          {/* TIMELINE LINE */}
          <div className="absolute left-3 md:left-6 top-0 h-full w-[4px] md:w-[4px] bg-white/10 rounded-full overflow-hidden">
            {/* ACTIVE GLOW LINE */}
            <div
              ref={progressLineRef}
              className="absolute top-0 left-0 w-full rounded-full transition-all duration-[500ms] ease-out"
              style={{
                height: "0px",
                background:
                  "linear-gradient(to bottom,#60A5FA,#22D3EE,#A3E635)",
                boxShadow: "0 0 25px rgba(34,211,238,0.9)",
              }}
            />
          </div>

          {/* TIMELINE ITEMS */}
          <div className="flex flex-col gap-10 md:gap-20">
            {STEPS.map((step, index) => {
              const Icon = STEP_ICONS[step.id - 1];
              const isActive = activeStep >= index;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="timeline-step relative flex items-start gap-2 md:gap-8"
                >
                  {/* NUMBER DOT - only show color when active */}
                  <div
                    className={`number-dot relative z-20 flex items-center justify-center md:w-12 w-8 h-8 md:h-12 rounded-full border-4 shrink-0 transition-all duration-500
                    ${
                      isActive
                        ? "bg-blue-500 border-cyan-300 shadow-[0_0_45px_rgba(34,211,238,1)] scale-110"
                        : "bg-[#0F172A] border-white/10"
                    }`}
                  >
                    <span
                      className={`font-bold text-xs md:text-sm transition-all duration-500
                      ${
                        isActive
                          ? "text-white scale-110"
                          : "text-white/30"
                      }`}
                    >
                      {step.id}
                    </span>
                  </div>

                  {/* CARD - only show highlight when active */}
                  <motion.div
                    whileHover={{
                      y: isActive ? -8 : 0,
                      scale: isActive ? 1.01 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`relative flex-1 overflow-hidden rounded-[30px] border p-4 md:p-8 shadow-[0_10px_60px_rgba(0,0,0,0.25)] transition-all duration-500
                    ${
                      isActive
                        ? "border-cyan-300/50 bg-white/10 backdrop-blur-xl"
                        : "border-white/5 bg-white/3 backdrop-blur-sm"
                    }`}
                  >
                    {/* CARD GLOW - only when active */}
                    {isActive && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/95 via-[#0B1120]/70 to-transparent" />
                       
                      </>
                    )}

                    {/* BIG NUMBER - faded for inactive */}
                    <div className={`absolute md:top-4 top-1/3 right-5 text-6xl md:text-7xl font-black transition-all duration-500
                      ${isActive ? "text-white/8" : "text-white/3"}`}>
                      0{step.id}
                    </div>

                    {/* TOP */}
                    <div className="relative z-10 flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500
                        ${isActive 
                          ? "bg-gradient-to-br from-cyan-500 to-blue-500 " 
                          : "bg-white/5"}`}>
                        <Icon color={isActive ? "#fff" : "rgba(255,255,255,0.2)"} />
                      </div>

                      <div>
                        <h2 className={`font-bold text-base md:text-3xl leading-tight transition-all duration-500
                          ${isActive ? "text-white" : "text-white/30"}`}>
                          {step.title}
                        </h2>
                        <p className={`text-sm md:text-base mt-2 transition-all duration-500
                          ${isActive ? "text-cyan-200" : "text-white/20"}`}>
                          {step.sub}
                        </p>
                      </div>
                    </div>

                    {/* DIVIDER */}
                    <div className={`h-[1px] w-full my-6 transition-all duration-500
                      ${isActive ? "bg-white" : "bg-white/5"}`} />

                    {/* POINTS */}
                    <div className="space-y-4 relative z-10">
                      {step.points.map((point, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3"
                        >
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-1 shrink-0 transition-all duration-500
                            ${isActive ? "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" : "bg-white/10"}`}>
                            {isActive && <IoCheckmarkSharp className="text-black text-sm" />}
                          </div>
                          <p className={`leading-relaxed text-xs md:text-base transition-all duration-500
                            ${isActive ? "text-white/80" : "text-white/20"}`}>
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* OUTCOME */}
                    <div className={`mt-8 rounded-2xl border md:p-5 p-3 relative z-10 transition-all duration-500
                      ${isActive 
                        ? "border-cyan-400/40 bg-cyan-500/15" 
                        : "border-white/5 bg-white/5"}`}>
                      <p className={`text-sm md:text-base font-bold mb-2 transition-all duration-500
                        ${isActive ? "text-cyan-300" : "text-white/20"}`}>
                        🎯 Outcome
                      </p>
                      <p className={`text-xs md:text-base leading-relaxed transition-all duration-500
                        ${isActive ? "text-white/80" : "text-white/20"}`}>
                        {step.outcome}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-20">
          <CTAButtonPopup buttonText="Join HR Program" />
        </div>
      </div>
    </section>
  );
}