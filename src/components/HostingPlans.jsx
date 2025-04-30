import React, { useState } from "react";
import { Plus, Minus, Check } from "lucide-react";

const PlanCard = ({
  title,
  price,
  renew,
  features,
  id,
  openCard,
  setOpenCard,
}) => {
  const isOpen = openCard === id;

  return (
    <div className="relative bg-white rounded-2xl shadow-xl p-6 w-full md:w-[320px] transition-all duration-300 hover:shadow-2xl">
      {/* Top Icon */}
      <div
        onClick={() => setOpenCard(isOpen ? null : id)}
        className="absolute bottom-4 right-4 cursor-pointer bg-gray-100 hover:bg-blue-100 rounded-full p-2 transition"
      >
        {isOpen ? (
          <Minus className="text-blue-600" size={20} />
        ) : (
          <Plus className="text-blue-600" size={20} />
        )}
      </div>

      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      <img
        src="/basic-logo.png"
        alt="Basic"
        className="mx-auto w-12 h-12 my-4"
      />
      <p className="text-2xl font-bold text-gray-900">
        ₹{price}
        <span className="text-sm font-medium text-gray-600">
          {" "}
          /Per user /Per Year
        </span>
      </p>
      <p className="text-sm text-gray-600 mt-1">Renews at ₹{renew}</p>
      <p className="text-sm text-gray-600">GST 18% Additional</p>
      <p className="text-sm text-gray-600 text-left font-semibold">Details</p>

      {/* Animated Features */}
      <div
        className={`transition-all duration-700 overflow-hidden ${
          isOpen ? "max-h-[1000px] mt-4" : "max-h-0"
        }`}
      >
        <ul className="text-left text-sm text-gray-700 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="text-blue-600" size={16} />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const HostingPlans = () => {
  const [openCard, setOpenCard] = useState(null);

  return (
    <div className="py-16 px-4 bg-gradient-to-b from-white to-blue-50 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">
        Tizzy® Cloud Business Email Hosting Plans
      </h2>
      <div className="w-16 h-1 bg-blue-500 rounded mx-auto mb-10"></div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Plan Cards */}
        <PlanCard
          id="basic"
          title="Tizzy® Mail Basic 10 GB"
          price="792"
          renew="792"
          features={[
            "10 GB Email Storage",
            "Basic Webmail Interface",
            "No Email Client Setup",
            "Limited Mobile Access",
          ]}
          openCard={openCard}
          setOpenCard={setOpenCard}
        />

        {/* Connector Circle */}
        <div className="w-16 h-16 rounded-full bg-white border shadow flex items-center justify-center text-sm font-semibold text-gray-700">
          <div className="leading-tight">
            Up <br /> To
          </div>
        </div>

        <PlanCard
          id="corporate"
          title="Tizzy® Mail Corporate 1 TB"
          price="8000"
          renew="8000"
          features={[
            "Space per Email ID 1 TB",
            "User Friendly Webmail Access",
            "Email Client Setup",
            "Mobile Webmail",
            "300 GB Data Transfer Bandwidth Per Month",
            "250 Outgoing Emails Limit Per Hour",
          ]}
          openCard={openCard}
          setOpenCard={setOpenCard}
        />
      </div>

      <button className="mt-10 bg-blue-600 text-white px-7 py-2 rounded-lg hover:bg-white hover:text-black hover:border transition duration-300 ease-in-out">
        View All Plans
      </button>
    </div>
  );
};

export default HostingPlans;
