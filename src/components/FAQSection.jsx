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
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-500 text-sm sm:text-base mb-10">
          We are glad to answer your questions. For any other queries, email us at
          <br />
          <span className="text-blue-600 font-medium">sales@tizzycloud.com</span>
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              layout
              initial={{ borderRadius: 16 }}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-blue-700 font-medium hover:bg-blue-50 transition-all sm:text-base text-sm"
              >
                <span className="pr-4">
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
                    className="px-6 pb-5 pt-1 text-gray-700 text-sm sm:text-base"
                  >
                    Ans. {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
