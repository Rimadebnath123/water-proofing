import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = {
  bathroom: [
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
  ],
  foundation: [
    {
      question: "Why is foundation waterproofing important?",
      answer: "It prevents water seepage, protects the structural integrity, and extends the life of the building.",
    },
    {
      question: "How long does foundation waterproofing last?",
      answer: "With proper maintenance, it can last 10–15 years or more.",
    },
    {
      question: "What materials are used in foundation waterproofing?",
      answer: "Bituminous membranes, cementitious coatings, liquid-applied membranes, and drain boards are commonly used.",
    },
    {
      question: "Can foundation waterproofing stop existing leaks?",
      answer: "Yes, but surface preparation and crack filling are required before applying the waterproofing system.",
    },
    {
      question: "When should foundation waterproofing be done?",
      answer: "Ideally during construction, but it can also be retrofitted in existing structures.",
    },
    {
      question: "Is drainage necessary along with waterproofing?",
      answer: "Yes, proper drainage prevents hydrostatic pressure buildup against the foundation.",
    },
    {
      question: "Does waterproofing protect against mold?",
      answer: "Yes, it prevents moisture penetration that causes mold and mildew inside walls.",
    },
    {
      question: "Can all types of soil affect foundation waterproofing?",
      answer: "Yes, clay soil retains water longer than sandy soil, which may increase the risk of seepage.",
    },
    {
      question: "How much time does it take?",
      answer: "Depending on the area, foundation waterproofing may take 3–7 days.",
    },
    {
      question: "Is it expensive?",
      answer: "It’s a one-time investment that prevents costly structural repairs in the future.",
    },
  ],

  swimmingpool: [
    {
      question: "Why is waterproofing important for swimming pools?",
      answer: "It prevents leakage, reduces water loss, and protects surrounding structures.",
    },
    {
      question: "Can waterproofing be applied to old pools?",
      answer: "Yes, with proper surface preparation and repair, old pools can be waterproofed effectively.",
    },
    {
      question: "How long does swimming pool waterproofing last?",
      answer: "It typically lasts 8–12 years depending on maintenance and usage.",
    },
    {
      question: "What materials are used for swimming pool waterproofing?",
      answer: "Cementitious coatings, liquid-applied membranes, and epoxy-based products are used.",
    },
    {
      question: "Does waterproofing affect the tiles?",
      answer: "No, tiles can be installed on top of the waterproofing layer without issues.",
    },
    {
      question: "Can leaks be fixed with waterproofing?",
      answer: "Yes, cracks and leaks can be sealed before applying waterproof coatings.",
    },
    {
      question: "How long does the waterproofing process take?",
      answer: "It usually takes 4–7 days depending on pool size and condition.",
    },
    {
      question: "Do I need to empty the pool for waterproofing?",
      answer: "Yes, the pool must be drained, cleaned, and dried before waterproofing begins.",
    },
    {
      question: "Is swimming pool waterproofing eco-friendly?",
      answer: "Yes, we use non-toxic, chlorine-resistant coatings that are safe for pool use.",
    },
    {
      question: "Can waterproofing prevent algae growth?",
      answer: "Yes, by preventing water seepage, it reduces damp conditions that promote algae.",
    },
  ],

  terrace: [
    {
      question: "Why should terraces be waterproofed?",
      answer: "It prevents leakage into rooms, protects ceiling plaster, and increases building life.",
    },
    {
      question: "What is the lifespan of terrace waterproofing?",
      answer: "Good quality terrace waterproofing can last 7–10 years.",
    },
    {
      question: "Can tiles be laid after waterproofing?",
      answer: "Yes, tiles can be installed without affecting waterproofing durability.",
    },
    {
      question: "What materials are used for terrace waterproofing?",
      answer: "Liquid-applied membranes, cementitious coatings, and polyurethane coatings are common.",
    },
    {
      question: "How long does terrace waterproofing take?",
      answer: "It usually takes 2–5 days depending on the size and condition of the terrace.",
    },
    {
      question: "Can waterproofing be done on old terraces?",
      answer: "Yes, with proper cleaning and repair, old terraces can be waterproofed.",
    },
    {
      question: "Does terrace waterproofing stop heat penetration?",
      answer: "Yes, certain coatings also act as heat reflectors, keeping interiors cooler.",
    },
    {
      question: "Will waterproofing change the terrace look?",
      answer: "No, coatings are applied smoothly and can be tiled or painted over.",
    },
    {
      question: "Can terrace waterproofing be done during monsoon?",
      answer: "No, it requires a dry surface and should be done before or after rainy seasons.",
    },
    {
      question: "Is it a permanent solution?",
      answer: "With maintenance, it is a long-term solution that prevents costly damage.",
    },
  ],

  wall: [
    {
      question: "Why is wall waterproofing important?",
      answer: "It prevents seepage, dampness, and paint peeling while protecting structural strength.",
    },
    {
      question: "What are the common signs that my walls need waterproofing?",
      answer: "Damp patches, efflorescence (white powder), peeling paint, and mold growth indicate the need for waterproofing.",
    },
    {
      question: "How long does wall waterproofing last?",
      answer: "With quality materials and proper application, it can last 8–10 years.",
    },
    {
      question: "Can waterproofing be applied on already painted walls?",
      answer: "Yes, but the surface needs to be cleaned and prepared before application.",
    },
    {
      question: "What materials are used for wall waterproofing?",
      answer: "We use waterproof coatings, sealants, and elastomeric paints designed to withstand moisture.",
    },
    {
      question: "Does waterproofing stop mold growth?",
      answer: "Yes, it prevents water penetration that causes mold and fungus on walls.",
    },
    {
      question: "Can interior and exterior walls both be waterproofed?",
      answer: "Yes, both inside and outside walls can be treated depending on the source of moisture.",
    },
    {
      question: "How much time does wall waterproofing take?",
      answer: "It usually takes 1–3 days depending on wall size and condition.",
    },
    {
      question: "Will waterproofing affect wall painting?",
      answer: "No, in fact it improves paint durability by preventing moisture damage.",
    },
    {
      question: "Is wall waterproofing costly?",
      answer: "It is cost-effective compared to frequent repainting and repairs caused by dampness.",
    },
  ],
};


const FAQSection = ({ type }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = faqData[type] || [];

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
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
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
