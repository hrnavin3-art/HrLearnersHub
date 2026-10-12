
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import CTAButtonPopup from "./Button";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "company", label: "Company" },
    { id: "feature", label: "Feature" },
    { id: "pricing", label: "Pricing" },
    // { id: "career", label: "Career" },
  ];

  // Scroll to section
  const handleScroll = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const navbarHeight = 90;
      const sectionTop = section.offsetTop - navbarHeight;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });

      setActive(id);
    }

    setOpen(false);
  };

  // Active section tracking
  useEffect(() => {
    const handleActiveSection = () => {
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
          scrollY >= sectionTop &&
          scrollY < sectionTop + sectionHeight
        ) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleActiveSection);
    handleActiveSection();

    return () => {
      window.removeEventListener(
        "scroll",
        handleActiveSection
      );
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#01071999] backdrop-blur-2xl">
      {/* MAIN HEADER */}
      <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-between gap-3">
        {/* LOGO */}
        <button
          onClick={() => handleScroll("home")}
          className="w-16 h-16 flex items-center justify-center shrink-0"
          aria-label="Go to Home"
        >
          <img
            src="https://ik.imagekit.io/psltlu4ds/HR%20navin/learners%20Hub%20logo%20%205@4x%20(1).png"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </button>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`relative transition font-medium pb-2 ${
                active === item.id
                  ? "text-[#B1E635]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {item.label}

              {/* ACTIVE UNDERLINE */}
              <span
                className={`absolute left-0 -bottom-0.5 h-[2px] bg-[#B1E635] rounded-full transition-all duration-300 origin-left ${
                  active === item.id
                    ? "w-full scale-x-100"
                    : "w-full scale-x-0"
                }`}
              />
            </button>
          ))}
        </nav>

        {/* DESKTOP REGISTER BUTTON */}
        <div className="hidden md:block shrink-0">
          <CTAButtonPopup className="inline-block lg:text-base text-white  " buttonText="Register now"  />
        </div>

        {/* MOBILE REGISTER BUTTON + MENU */}
        <div className="flex md:hidden items-center gap-3 shrink-0">
          <CTAButtonPopup className="inline-block text-xs text-white "  buttonText="Register now" />

          {/* <button
            onClick={() => setOpen(true)}
            className="text-white"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu size={26} />
          </button> */}
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm w-full h-screen z-30"
        />
      )}

      {/* MOBILE SLIDE-OUT MENU */}
      <div
        className={`fixed top-4 right-4 w-[240px] rounded-2xl
          bg-[#0b0f2a]/95 backdrop-blur-xl border border-white/10
          text-white z-50 transform transition-all duration-300 shadow-2xl
          ${
            open
              ? "translate-x-0 opacity-100"
              : "translate-x-[120%] opacity-0 pointer-events-none"
          }`}
      >
        {/* MENU HEADER */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h3 className="text-sm font-semibold">Menu</h3>

          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        <nav className="flex flex-col p-4 text-sm">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`relative py-3 text-left transition ${
                active === item.id
                  ? "text-[#B1E635]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {item.label}

              {/* ACTIVE UNDERLINE */}
              <span
                className={`absolute left-0 bottom-1 h-[2px] bg-[#B1E635] rounded-full transition-all duration-300 origin-left ${
                  active === item.id
                    ? "w-12 scale-x-100"
                    : "w-12 scale-x-0"
                }`}
              />
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
