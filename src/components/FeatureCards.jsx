import React from "react";

const features = [
  {
    title: "Email Send/Receive Speed",
    description: "Fastest Outlook/Any Email Application Sync Speed",
    icon: "https://www.tizzycloud.com/assets/img/startup/gif/message.gif",
    tooltip: "Email Performance",
  },
  {
    title: "Backup and Restore",
    description: "Automated 30 days scheduled backup on AWS S3 Bucket",
    icon: "https://www.tizzycloud.com/assets/img/startup/gif/diagram.gif",
    tooltip: "Automated Backup",
  },
  {
    title: "AWS Security Standards",
    description:
      "AWS Foundational Security Best Practices , CIS AWS Foundations Benchmark & PCI DSS",
    icon: "https://www.tizzycloud.com/assets/img/startup/gif/shield.gif",
    tooltip: "Cloud Security Standards",
  },
];

export default function FeatureCards() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start gap-6">
              <img
                src={item.icon}
                alt={item.title}
                className="w-16 h-16 object-contain"
                title={item.tooltip}
              />
              <div>
                <h3 className="text-xl font-semibold text-blue-600">{item.title}</h3>
                <p className="text-base text-gray-700 mt-2">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-all duration-300">
        View All
      </button>
    </section>
  );
}
