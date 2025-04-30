import React from "react";
import FeatureCards from "../components/FeatureCards";
import SocialIcons from "../components/SocialIcons";
import TestimonialsSlider from "../components/TestimonialsSlider";
import HostingPlans from "../components/HostingPlans";
import TizzyMailFeatures from "../components/TizzyMailFeatures";
import FeatureTabs from "../components/FeatureTabs";
import FAQSection from "../components/FAQSection";
import ActivateService from "../components/ActivateService";

const Home = () => {
  return (
    <section className="font-sans">
      <div className="bg-gradient-to-br from-white to-blue-50 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
          {/* Left Text */}
          <div className="text-center md:text-left space-y-4 md:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
              <span className="text-blue-600">Premium</span> Cloud Business{" "}
              <br />
              Email Hosting <span className="text-yellow-500">Indian</span>{" "}
              Company
            </h1>
            <p className="text-gray-600 text-base sm:text-lg">
              Save time and grow your business with our world-class faster cloud
              email services.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-3xl hover:bg-blue-700">
              Start Now
            </button>
            <div className="flex justify-between w-full mt-8 sm:mt-16">
              <span>
                <img
                  src="https://www.tizzycloud.com/img/im/google-partner.png"
                  alt="google cloud logo"
                  width="150px"
                  className="mx-auto md:mx-0"
                />
              </span>
              <span>
                <img
                  src="https://www.tizzycloud.com/img/im/microsoft-partner.png"
                  alt="Microsoft logo"
                  width="150px"
                  className="mx-auto md:mx-0"
                />
              </span>
            </div>
            <SocialIcons />
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 relative">
            <img
              src="https://www.tizzycloud.com/img/im/banners/banner-img.png"
              alt="Hero"
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div>
        <FeatureCards />
      </div>

      {/* Testimonials Slider Section */}
      <div>
        <TestimonialsSlider />
      </div>

      {/* Hosting Plans Section */}
      <div>
        <HostingPlans />
      </div>

      {/* Tizzy Mail Features Section */}
      <div>
        <TizzyMailFeatures />
      </div>

      {/* Feature Tabs Section */}
      <div className="max-w-7xl mx-auto my-10">
        <FeatureTabs />
      </div>

      {/* FAQ Section */}
      <div>
        <FAQSection />
      </div>

      {/* Activate Service Section */}
      <div>
        <ActivateService />
      </div>

      {/* Request Call Back Button */}
      <button className="hidden md:block fixed left-0 top-1/2 transform -translate-y-1/2 rotate-[-90deg] bg-blue-600 text-white px-3 py-2 text-xs font-medium rounded-tr-md rounded-tl-md shadow-md">
        Request a Call Back
      </button>
    </section>
  );
};

export default Home;
