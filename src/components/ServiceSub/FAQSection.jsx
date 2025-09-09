import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How long does bathroom waterproofing last?",
            answer: "With proper maintenance, it can last 8–10 years.",
        },
        {
            question: "Is there a warranty?",
            answer: "Yes, we provide a 5-year warranty for waterproofing services.",
        },
        {
            question: "Why is bathroom waterproofing important?",
            answer: "It prevents water leakage, protects structural integrity, and avoids mold growth.",
        },
        {
            question: "How long does the waterproofing process take?",
            answer: "Typically, it takes 2–4 days depending on the bathroom size and condition.",
        },
        {
            question: "Do I need to vacate my home during the process?",
            answer: "No, you don’t need to vacate. However, the bathroom being treated cannot be used until the process is completed.",
        },
        {
            question: "Can waterproofing be done on old bathrooms?",
            answer: "Yes, waterproofing can be applied to both new and old bathrooms with proper surface preparation.",
        },
        {
            question: "What materials are used for waterproofing?",
            answer: "We use high-quality waterproofing chemicals, membranes, and sealants designed for bathrooms.",
        },
        {
            question: "How do I know if my bathroom needs waterproofing?",
            answer: "Signs include damp walls, peeling paint, water stains, or a musty smell.",
        },
        {
            question: "Is waterproofing expensive?",
            answer: "The cost depends on the bathroom size and condition, but it is a long-term investment that prevents costly repairs.",
        },
        {
            question: "Can I use tiles after waterproofing?",
            answer: "Yes, tiles can be installed on top of waterproofed surfaces without affecting durability.",
        }
    ];


    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 px-6 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8">
                Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 rounded-lg shadow-sm bg-white"
                    >
                        {/* Question */}
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center p-4 text-left font-semibold"
                        >
                            {faq.question}
                            <FaChevronDown
                                className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {/* Answer */}
                        {openIndex === index && (
                            <div className="p-4 pt-0 text-gray-600">{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQSection;
