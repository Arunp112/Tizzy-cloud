import React from "react";
import { useNavigate } from "react-router-dom";

const TizzyMailFeatures = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-[#fffdd0] py-16 px-4 flex flex-col items-center text-center">
      {/* Left Image (Hidden on Mobile) */}
      <img
        src="/email-left.png"
        alt="Email Icon Left"
        className="hidden md:block absolute left-0 bottom-0 w-40 md:w-52"
      />

      {/* Right Image (Hidden on Mobile) */}
      <img
        src="/email-right.png"
        alt="Email Icon Right"
        className="hidden md:block absolute right-0 bottom-0 w-40 md:w-52"
      />

      <div className="max-w-6xl mx-auto z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Features of Tizzy® Mail
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Tizzy Mail can be set up in automatic or manual mode on any device and
          in any email application.
          <br />
          It also has a user-friendly Webmail Interface to access from your browser.
          <br />
          Creating your business email address is very fast and easy on Tizzy®
          Mail, for example:
          <span className="font-semibold text-black">
            {" "}
            sales@YourCompanyName.com
          </span>
        </p>
        <button
          onClick={() => navigate("/plans")}
          className="mt-6 px-6 py-2 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition"
        >
          View plans
        </button>
      </div>

      {/* Optional Sticky Side Button (Hidden for now) */}
      {/* <button className="fixed left-0 top-1/2 transform -translate-y-1/2 rotate-[-90deg] bg-blue-600 text-white px-3 py-2 text-xs font-medium rounded-tr-md rounded-tl-md shadow-md">
        Request a Call Back
      </button> */}
    </div>
  );
};

export default TizzyMailFeatures;
