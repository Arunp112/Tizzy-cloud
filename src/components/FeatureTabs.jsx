import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    title: "Faster Desktop and Mobile Webmail",
    content:
      "New Faster and Improved User-Friendly Webmail Interface. Fully Indexed Search engine returns results almost immediately. Forgot Password Feature, Skin or Layout change and much more is available in our latest Webmail version.",
    image: "https://www.tizzycloud.com/img/webmail.png",
  },
  {
    title: "Faster POP, IMAP and SMTP Protocols",
    content:
      "Optimized protocols for improved email synchronization and delivery speed on all devices.",
    image: "https://www.tizzycloud.com/img/fast.png",
  },
  {
    title: "Integrated Spam, Antivirus and Email Filtering",
    content:
      "Keep your inbox safe with built-in protection against spam and harmful content.",
    image: "https://www.tizzycloud.com/img/spam.png",
  },
  {
    title: "DNS Management",
    content:
      "Easily manage your DNS records to ensure smooth email routing and domain control.",
    image: "https://www.tizzycloud.com/img/DNS.png",
  },
  {
    title: "Dedicated Control Panel",
    content:
      "Get full control with our intuitive panel to manage accounts, settings, and reports.",
    image: "https://www.tizzycloud.com/img/plesk.png",
  },
  {
    title: "SSL/TLS Security",
    content:
      "All communications are protected using strong encryption protocols.",
    image: "https://www.tizzycloud.com/img/security.png",
  },
];

const FeatureTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
      {/* Sidebar Tabs */}
      <div className="md:w-1/3 space-y-3">
        {features.map((item, index) => (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            key={index}
            onClick={() => setActiveTab(index)}
            className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-xl transition-all border ${
              activeTab === index
                ? "bg-blue-100 text-blue-700 font-semibold"
                : "hover:bg-gray-100"
            }`}
          >
            <span className="font-medium">{item.title}</span>
          </motion.button>
        ))}
      </div>

      {/* Content Area */}
      <div className="md:w-2/3">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="space-y-5"
          >
            <motion.h2
              layout
              className="text-3xl font-bold text-blue-700 tracking-tight"
            >
              {features[activeTab].title}
            </motion.h2>
            <p className="text-gray-600 text-lg">{features[activeTab].content}</p>
            {features[activeTab].image && (
              <motion.img
                src={features[activeTab].image}
                alt={features[activeTab].title}
                className="rounded-xl w-full max-w-xl shadow-md"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FeatureTabs;
