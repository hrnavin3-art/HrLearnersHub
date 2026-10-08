import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "company", label: "Company" },
    { id: "feature", label: "Feature" },
    { id: "pricing", label: "Pricing" },
    // { id: "career", label: "Career" },
  ];

  /* =====================================================
     CONTACT NUMBERS
  ===================================================== */

  const baseContacts = [
    "6382974304",
    "7538864115",
    "7695967560",
  ];

  

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

    // Keep rotation between 0, 1 and 2
    const rotation =
      ((monthsPassed % baseContacts.length) +
        baseContacts.length) %
      baseContacts.length;

    // Rotate the array
    return [
      ...baseContacts.slice(rotation),
      ...baseContacts.slice(0, rotation),
    ];
  };

  /* =====================================================
     CALL HANDLER
  ===================================================== */

  const handleCall = (number) => {
    window.location.href = `tel:${number}`;
  };

  /* =====================================================
     CONTACT POPUP
  ===================================================== */

  const handleContactClick = () => {
    // Close mobile menu
    setOpen(false);

    // Open contact popup
    setShowContactPopup(true);
  };

  /* =====================================================
     SCROLL TO SECTION
  ===================================================== */

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

    // Close mobile menu
    setOpen(false);
  };



  useEffect(() => {
    const handleActiveSection = () => {
      const sections = navItems.map((item) =>
        document.getElementById(item.id)
      );

      const scrollY = window.scrollY;

      sections.forEach((section) => {
        if (!section) return;

        const sectionTop =
          section.offsetTop - 120;

        const sectionHeight =
          section.offsetHeight;

        if (
          scrollY >= sectionTop &&
          scrollY < sectionTop + sectionHeight
        ) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener(
      "scroll",
      handleActiveSection
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleActiveSection
      );
    };
  }, []);



  const contacts = getMonthlyContacts();

  return (
    <>
  

      <header className="fixed top-0 left-0 bg-[#01071999] backdrop-blur-2xl w-full z-50">

     

        <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-between">

       

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

          {/* =================================================
              DESKTOP MENU
          ================================================= */}

          <nav className="hidden md:flex items-center gap-8 text-sm">

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() =>
                  handleScroll(item.id)
                }
                className={`relative transition font-medium pb-2 ${
                  active === item.id
                    ? "text-[#B1E635]"
                    : "text-white/70 cursor-pointer hover:text-white"
                }`}
              >
                {item.label}

                {/* ACTIVE LINE */}

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

          {/* =================================================
              DESKTOP CONTACT BUTTON
          ================================================= */}

          <div className="hidden md:block">

            <button
              onClick={handleContactClick}
              className="
                bg-white
                text-black
                px-5
                py-2
                rounded-full
                text-sm
                font-medium
                hover:bg-gray-200
                transition
              "
            >
              Contact Us
            </button>

          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white"
          >
            <Menu size={28} />
          </button>

        </div>


        <div
          className={`fixed top-4 right-4 w-[240px] rounded-2xl
          bg-[#0b0f2a]/95 backdrop-blur-xl border border-white/10
          text-white z-50 transform transition-all duration-300 shadow-2xl
          ${
            open
              ? "translate-x-0 opacity-100"
              : "translate-x-[120%] opacity-0"
          }`}
        >

          {/* =================================================
              MOBILE MENU HEADER
          ================================================= */}

          <div className="flex items-center justify-between p-4 border-b border-white/10">

            <h3 className="text-sm font-semibold">
              Menu
            </h3>

            <button
              onClick={() => setOpen(false)}
            >
              <X size={22} />
            </button>

          </div>


          <nav className="flex flex-col p-4 text-sm">

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() =>
                  handleScroll(item.id)
                }
                className={`relative py-3 text-left transition ${
                  active === item.id
                    ? "text-[#B1E635]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}

                {/* ACTIVE LINE */}

                <span
                  className={`absolute left-0 bottom-1 h-[2px] bg-[#B1E635] rounded-full transition-all duration-300 origin-left ${
                    active === item.id
                      ? "w-12 scale-x-100"
                      : "w-12 scale-x-0"
                  }`}
                />
              </button>
            ))}

    

            <button
              onClick={handleContactClick}
              className="
                mt-5
                bg-white
                text-black
                py-3
                rounded-xl
                font-medium
                hover:bg-gray-200
                transition
              "
            >
              Contact Us
            </button>

          </nav>

        </div>

        {/* =================================================
            MOBILE OVERLAY
        ================================================= */}

        {open && (
          <div
            onClick={() => setOpen(false)}
            className="
              fixed
              inset-0
              bg-black/60
              backdrop-blur-2xl
              w-full
              h-screen
              z-30
            "
          />
        )}

      </header>

      {showContactPopup && (
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
          onClick={() =>
            setShowContactPopup(false)
          }
        >


          <div
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
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* =================================================
                POPUP HEADER
            ================================================= */}

            <div className="flex items-center justify-between mb-6">

              <div>
                <h3 className="text-xl font-bold text-white">
                  Contact Us
                </h3>

                <p className="text-sm text-gray-400 mt-1">
                  Select a number to call
                </p>
              </div>

              {/* CLOSE BUTTON */}

              <button
                onClick={() =>
                  setShowContactPopup(false)
                }
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

            {/* =================================================
                PHONE NUMBERS
            ================================================= */}

            <div className="space-y-3">

              {contacts.map((number) => (
                <button
                  key={number}
                  onClick={() =>
                    handleCall(number)
                  }
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

                </button>
              ))}

            </div>

          </div>

        </div>
      )}
    </>
  );
};

export default Navbar;