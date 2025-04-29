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
    <section className="bg-white py-8 px-4 text-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 shadow-sm text-left hover:shadow-md transition"
          >
            <div className="flex items-start gap-4">
              <img
                src={item.icon}
                alt={item.title}
                className="w-10 h-10"
                title={item.tooltip}
              />
              <div>
                <h3 className="text-blue-600 font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-700 mt-1">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md">
        View All
      </button>
    </section>
  );
}
