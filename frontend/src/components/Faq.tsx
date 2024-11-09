import React, { useState } from "react";

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is Volunteer Finder?",
      answer:
        "Volunteer Finder helps you connect with local NGOs and initiatives so you can make a positive impact in your community.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply sign up to create a profile, browse through available volunteer opportunities, and start making a difference.",
    },
    {
      question: "Are there any costs involved?",
      answer: "No, Volunteer Finder is completely free to use for volunteers.",
    },
    {
      question: "How do I connect with NGOs?",
      answer:
        "Once you're signed up, you can directly contact NGOs and initiatives listed on the platform to explore volunteer opportunities.",
    },
  ];

  return (
    <section
      className="bg-[#F6F3E4] h-screen">
      <div className="relative z-10 text-blue-900 px-4 max-w-3xl text-center p-20 mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold pb-10">Frequently Asked Questions</h1>
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left font-serif text-xl py-3 px-5 bg-yellow-400 text-blue-900 rounded-lg shadow-lg mb-2 hover:bg-yellow-500 focus:outline-none transition duration-300"
              >
                <div className="flex justify-between items-center">
                  <span>{item.question}</span>
                  <span
                    className={`transform transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    &#9660; {/* Down arrow */}
                  </span>
                </div>
              </button>
              {activeIndex === index && (
                <div className="bg-white text-gray-900 p-4 rounded-lg shadow-md mb-4">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
