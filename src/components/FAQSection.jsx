import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is Cloud Business Email Hosting Service?",
    answer:
      "Cloud Business Email Hosting Service is a service that provides professional email solutions hosted on the cloud, enabling secure, reliable, and scalable email communication for businesses.",
  },
  {
    question: "What is Tizzy®Mail?",
    answer:
      "Tizzy®Mail is a cloud-based business email platform that offers secure and customizable email hosting tailored for enterprises.",
  },
  {
    question: "We have not heard about Tizzy®Mail so How old is Tizzy®Mail?",
    answer:
      "Tizzy®Mail has been providing email hosting services since 2015, serving a growing number of businesses globally.",
  },
  {
    question: "How do we migrate to Tizzy®Mail?",
    answer:
      "Migration to Tizzy®Mail is seamless. Our team assists you through the process, including data transfer and DNS updates. Contact support for a detailed guide.",
  },
  {
    question: "How to renew the services next year?",
    answer:
      "Renewal can be done through the admin dashboard or by contacting our sales team at sales@tizzycloud.com.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-gray-500 mb-8">
        We are glad to answer the frequently asked questions. You can email us
        on
        <br /> <span className="text-blue-600">sales@tizzycloud.com</span> for
        any further queries.
      </p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            layout
            initial={{ borderRadius: 16 }}
            className="border rounded-2xl shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center text-blue-600 font-medium hover:bg-blue-50 rounded-2xl"
            >
              <span>
                {index + 1}) {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="px-6 pb-4 text-gray-700"
                >
                  <div>Ans. {faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
