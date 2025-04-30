import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-10 relative overflow-hidden">
      {/* Quote content */}
      <p className="text-gray-700 text-lg sm:text-xl leading-relaxed font-medium mb-6 z-10 relative">
        "{testimonial.message}"
      </p>

      {/* Profile section */}
      <div className="flex items-center gap-4 z-10 relative">
        <img
          src={testimonial.image}
          alt="User"
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border border-gray-200 shadow-sm"
        />
        <div>
          <h4 className="text-blue-600 font-semibold text-base sm:text-lg">
            {testimonial.name}
          </h4>
          <p className="text-sm text-gray-500 uppercase font-semibold tracking-wide">
            {testimonial.location}
          </p>
        </div>
      </div>

      {/* Quotation Icon */}
      <FaQuoteRight className="absolute text-blue-100 text-7xl bottom-4 right-6 z-0" />
    </div>
  );
};

export default TestimonialCard;
