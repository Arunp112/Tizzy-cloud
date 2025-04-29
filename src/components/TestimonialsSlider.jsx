import React, { useEffect, useState } from "react";
import testimonials from "../data/testimonialsData";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSlider = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setFade(true);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-[#f0f8ff] to-white py-16 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-blue-600 font-medium uppercase tracking-wide text-sm bg-blue-100 px-4 py-1 rounded-full">
          Testimonial
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto text-base">
          Hear from real users who’ve experienced the benefits of our platform.
        </p>
      </div>

      {/* Card */}
      <div
        className={`transition-opacity duration-700 ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <TestimonialCard testimonial={testimonials[current]} />
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-3 mt-10">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrent(idx);
              setFade(false);
              setTimeout(() => setFade(true), 100);
            }}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              idx === current
                ? "bg-blue-600 scale-125 shadow-md shadow-blue-400"
                : "bg-blue-200 hover:bg-blue-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSlider;
