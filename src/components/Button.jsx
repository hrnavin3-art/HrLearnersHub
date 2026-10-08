"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwhqIQrL0LVMPw0EomXnNxe8uDq3VnNa4TUtjar_uNV_Z6wJnKf-pqwMhPxkVXy0x_E/exec";

export default function CTAButtonPopup({
  buttonText = "Book Your Seat Now",
  buttonBg = "#4043FE",
  gradientFrom = "#FFF0F0",
  gradientTo = "transparent",
  submitBtnBg = "#4043FE",
  className = "text-white",
})  {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    completionYear: "",
    degreeDepartment: "",
    committedToHR: "",
    interestedInPaidProgram: "",
  });

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


const handleSubmit = async (e) => {
  e.preventDefault();

  setIsSubmitting(true);

  try {
    const formBody = new URLSearchParams();

    formBody.append("fullName", formData.fullName);
    formBody.append("phone", formData.phone);
    formBody.append("email", formData.email);
    formBody.append("completionYear", formData.completionYear);
    formBody.append(
      "degreeDepartment",
      formData.degreeDepartment
    );
    formBody.append(
      "committedToHR",
      formData.committedToHR
    );
    formBody.append(
      "interestedInPaidProgram",
      formData.interestedInPaidProgram
    );

    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: formBody,
      mode: "no-cors",
    });

    // Show success state on button
    setIsSubmitting("success");

    // Reset form
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      completionYear: "",
      degreeDepartment: "",
      committedToHR: "",
      interestedInPaidProgram: "",
    });

    // Keep success message visible for 2 seconds
    setTimeout(() => {
      setOpen(false);
      setIsSubmitting(false);
    }, 2000);

  } catch (error) {
    console.error("Form submission error:", error);

    // Show error state on button
    setIsSubmitting("error");

    // Keep error message visible for 2 seconds
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  }
};








  const popupContent = open && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(4px)",
        padding: "1rem",
        overflowY: "auto",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setOpen(false);
        }
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 80, scale: 0.8 }}
        transition={{ duration: 0.4 }}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "32rem",
          maxHeight: "90vh",
          overflowY: "auto",
          borderRadius: "28px",
          backgroundColor: "white",
          padding: "1.5rem",
          boxShadow: "0 20px 80px rgba(0,0,0,0.25)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpen(false)}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            width: "2rem",
            height: "2rem",
            borderRadius: "9999px",
            backgroundColor: "rgba(0,0,0,0.05)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            border: "none",
          }}
        >
          <X size={18} color="#333" />
        </button>

        {/* HEADER */}
        <div className="pr-10">
          <h2 className="text-xl md:text-3xl font-bold text-black">
            Book Your Slot
          </h2>

          <p className="text-gray-500 text-sm md:text-base mt-2">
            Fill in your details and we'll contact you.
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="md:mt-8 mt-5 space-y-5"
        >
          {/* FULL NAME */}
          <div className="flex flex-col items-start">
            <label className="text-xs md:text-sm font-medium text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="
                w-full mt-2 px-4 py-3 rounded-xl
                placeholder:text-gray-500
                text-sm md:text-base
                border border-gray-300
                outline-none
                focus:border-[#4043FE]
                focus:ring-1 focus:ring-[#4043FE]
              "
            />
          </div>

          {/* PHONE */}
          <div className="flex flex-col items-start">
            <label className="text-xs md:text-sm font-medium text-gray-700">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter phone number"
              pattern="[0-9]{10}"
              maxLength={10}
              className="
                w-full mt-2 px-4 py-3 rounded-xl
                placeholder:text-gray-500
                text-sm md:text-base
                border border-gray-300
                outline-none
                focus:border-[#4043FE]
                focus:ring-1 focus:ring-[#4043FE]
              "
            />
          </div>

          {/* EMAIL */}
          <div className="flex flex-col items-start">
            <label className="text-xs md:text-sm font-medium text-gray-700">
              E-Mail ID
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
              className="
                w-full mt-2 px-4 py-3 rounded-xl
                placeholder:text-gray-500
                text-sm md:text-base
                border border-gray-300
                outline-none
                focus:border-[#4043FE]
                focus:ring-1 focus:ring-[#4043FE]
              "
            />
          </div>

          {/* YEAR OF UG / PG COMPLETION */}
          <div className="flex flex-col items-start">
            <label className="text-xs md:text-sm font-medium text-gray-700">
              Year of UG/PG Completion
            </label>

            <input
              type="text"
              name="completionYear"
              value={formData.completionYear}
              onChange={handleChange}
              required
              placeholder="Example: 2025"
              className="
                w-full mt-2 px-4 py-3 rounded-xl
                placeholder:text-gray-500
                text-sm md:text-base
                border border-gray-300
                outline-none
                focus:border-[#4043FE]
                focus:ring-1 focus:ring-[#4043FE]
              "
            />
          </div>

          {/* DEGREE & DEPARTMENT */}
          <div className="flex flex-col items-start">
            <label className="text-xs md:text-sm font-medium text-gray-700">
              Degree & Department of UG/PG
            </label>

            <input
              type="text"
              name="degreeDepartment"
              value={formData.degreeDepartment}
              onChange={handleChange}
              required
              placeholder="Example: B.Com - Commerce"
              className="
                w-full mt-2 px-4 py-3 rounded-xl
                placeholder:text-gray-500
                text-sm md:text-base
                border border-gray-300
                outline-none
                focus:border-[#4043FE]
                focus:ring-1 focus:ring-[#4043FE]
              "
            />
          </div>

          {/* HR COMMITMENT */}
          <div className="flex flex-col items-start">
            <label className="text-xs md:text-sm font-medium text-gray-700">
              Are you committed to learning HR skills?
            </label>

            <select
              name="committedToHR"
              value={formData.committedToHR}
              onChange={handleChange}
              required
              className="
                w-full mt-2 px-4 py-3 rounded-xl
                text-sm md:text-base
                border border-gray-300
                outline-none
                bg-white
                focus:border-[#4043FE]
                focus:ring-1 focus:ring-[#4043FE]
              "
            >
              <option value="">Select an option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {/* PAID PROGRAM */}
          <div className="flex flex-col items-start">
            <label className="text-xs md:text-sm font-medium text-gray-700">
              It's a paid program. Are you interested?
            </label>

            <select
              name="interestedInPaidProgram"
              value={formData.interestedInPaidProgram}
              onChange={handleChange}
              required
              className="
                w-full mt-2 px-4 py-3 rounded-xl
                text-sm md:text-base
                border border-gray-300
                outline-none
                bg-white
                focus:border-[#4043FE]
                focus:ring-1 focus:ring-[#4043FE]
              "
            >
              <option value="">Select an option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {/* SUBMIT BUTTON */}
          <button
  type="submit"
  disabled={isSubmitting === true || isSubmitting === "success"}
  style={{
    backgroundColor:
      isSubmitting === "success"
        ? "#16A34A"
        : isSubmitting === "error"
        ? "#DC2626"
        : isSubmitting === true
        ? "#999"
        : submitBtnBg,

    width: "100%",
    color: "white",
    padding: "0.75rem",
    borderRadius: "0.75rem",
    fontWeight: "600",
    border: "none",

    cursor:
      isSubmitting === true ||
      isSubmitting === "success"
        ? "not-allowed"
        : "pointer",

    transition: "all 0.3s ease",
  }}
>
  {isSubmitting === true
    ? "Submitting..."
    : isSubmitting === "success"
    ? "Submitted Successfully ✓"
    : isSubmitting === "error"
    ? "Submission Failed ✕"
    : "Submit Details"}
</button>
        </form>
      </motion.div>
    </motion.div>
  );

  return (
    <>
      {/* CTA BUTTON */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.7,
          type: "spring",
          stiffness: 200,
        }}
        className="inline-block  hover:scale-105 mt-4 transition-transform p-[1.5px] rounded-xl "
        style={{
          background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
        }}
      >
        <button
          onClick={() => setOpen(true)}
          style={{
            backgroundColor: buttonBg,
          }}
          className={`
            px-8
            py-3 
            rounded-xl
            text-sm
            lg:text-xl
            flex
            items-center
            gap-2
            
            transition-all
            duration-300
            cursor-pointer
            ${className}
          `}
        >
          {buttonText}
        </button>
      </motion.div>

      {/* POPUP PORTAL */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {popupContent}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}