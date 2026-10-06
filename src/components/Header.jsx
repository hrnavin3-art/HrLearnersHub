import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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

  const contacts = [
    {
      name: "Sudha",
      number: "6382974304",
    },
    {
      name: "Vikasini",
      number: "7538864115",
    },
    {
      name: "Kadhar",
      number: "7826015352",
    },
  ];

  const getWeeklyContact = () => {
    // Monday, August 10, 2026 = Week 1 (Sudha)
    const rotationStart = new Date("2026-08-10T00:00:00");

    const today = new Date();

    // Remove time portion
    const startDate = new Date(rotationStart);
    startDate.setHours(0, 0, 0, 0);

    const currentDate = new Date(today);
    currentDate.setHours(0, 0, 0, 0);

    // Calculate difference in days
    const differenceInTime =
      currentDate.getTime() - startDate.getTime();

    const differenceInDays =
      Math.floor(
        differenceInTime / (1000 * 60 * 60 * 24)
      );

    // Calculate which week we are in
    const weekNumber =
      Math.floor(differenceInDays / 7);

    // Rotate between 0, 1, 2
    const contactIndex =
      ((weekNumber % contacts.length) + contacts.length) %
      contacts.length;

    return contacts[contactIndex];
  };

  const handleContactClick = () => {
    const contact = getWeeklyContact();

    window.location.href = `tel:${contact.number}`;
  };

  // SCROLL TO SECTION
  const handleScroll = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const navbarHeight = 90;

      const sectionTop =
        section.offsetTop - navbarHeight;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });

      setActive(id);
    }

    setOpen(false);
  };

  // AUTO ACTIVE NAV ON SCROLL
 useEffect(() => {
  const handleActiveSection = () => {
    const sections = navItems.map((item) =>
      document.getElementById(item.id)
    );

    const scrollY = window.scrollY;

    sections.forEach((section) => {
      if (!section) return;

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

  return () => {
    window.removeEventListener("scroll", handleActiveSection);
  };
}, []);

  return (
    <header className="fixed top-0 left-0  bg-[#01071999] backdrop-blur-2xl w-full z-50">

      {/* NAVBAR */}
      <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-between">

        {/* LOGO */}
        <button
          onClick={() => handleScroll("home")}
          className="w-16 h-16 flex items-center justify-center"
        >
          <img
            src="https://ik.imagekit.io/psltlu4ds/HR%20navin/learners%20Hub%20logo%20%205@4x%20(1).png"
            alt="logo"
            className="w-full h-full object-contain"
          />
        </button>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex  items-center gap-8 text-sm">

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`relative transition font-medium pb-2 ${
                active === item.id
                  ? "text-[#B1E635]"
                  : "text-white/70 cursor-pointer hover:text-white"
              }`}
            >
              {item.label}

              {/* SCALE LINE */}
              <span
                className={`absolute left-0 -bottom-0.5 h-[2px] bg-[#B1E635] rounded-full transition-all duration-300 origin-left ${
                  active === item.id
                    ? "w-full scale-x-100"
                    : "w-full scale-x-0"
                }`}
              ></span>
            </button>
          ))}

        </nav>

        {/* DESKTOP BUTTON */}
        <div className="hidden md:block">
          <button
  onClick={handleContactClick}
  className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition"
>
  Contact Us
</button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-white"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* MOBILE NAV */}
      <div
        className={`fixed top-4 right-4 w-[240px]  rounded-2xl
        bg-[#0b0f2a]/95 backdrop-blur-xl border border-white/10
        text-white z-50 transform transition-all duration-300 shadow-2xl
        ${
          open
            ? "translate-x-0 opacity-100"
            : "translate-x-[120%] opacity-0"
        }`}
      >

        {/* TOP */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h3 className="text-sm font-semibold">Menu</h3>

          <button onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>

        {/* LINKS */}
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

              {/* SCALE LINE */}
              <span
                className={`absolute left-0 bottom-1 h-[2px] bg-[#B1E635] rounded-full transition-all duration-300 origin-left ${
                  active === item.id
                    ? "w-12 scale-x-100"
                    : "w-12 scale-x-0"
                }`}
              ></span>
            </button>
          ))}

          {/* BUTTON */}
          <button
            onClick={handleContactClick}
            className="mt-5 bg-white text-black py-3 rounded-xl font-medium hover:bg-gray-200 transition"
          >
            Contact Us
          </button>

        </nav>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-2xl w-full h-screen  z-30"
        />
      )}
    </header>
  );
};

export default Navbar;