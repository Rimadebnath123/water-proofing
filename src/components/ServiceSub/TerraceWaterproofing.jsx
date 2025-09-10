import React from "react";
import CustomerSuccessStories from "./customersucessstories";
import FAQSection from "./FAQSection";
import "./service.css"
import Footer from "../Footer";
import {
  FaSearch,
  FaTools,
  FaPaintRoller,
  FaClipboardCheck,
  FaProjectDiagram,
  FaShieldAlt,
  FaTint,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

// Steps Data
const steps = [
  {
    id: 1,
    title: "Surface Preparation",
    desc: "Thoroughly clean the terrace to remove all dust, debris, and existing loose material.",
    icon: <FaSearch />,
  },
  {
    id: 2,
    title: "Crack Repair",
    desc: "Seal all visible cracks and joints using a flexible, polymer-modified crack filler.",
    icon: <FaTools />,
  },
  {
    id: 3,
    title: "Primer Application",
    desc: "Apply a suitable waterproofing primer to ensure strong adhesion of the subsequent layers.",
    icon: <FaPaintRoller />,
  },
  {
    id: 4,
    title: "Waterproofing Layer",
    desc: "Apply the primary waterproofing membrane or coating in multiple, uniform coats.",
    icon: <FaClipboardCheck />,
  },
  {
    id: 5,
    title: "Joint and Corner Reinforcement",
    desc: "Apply an additional layer of reinforcing mesh or tape at all critical joints and corners.",
    icon: <FaProjectDiagram />, // structure/joint representation
  },
  {
    id: 6,
    title: "Protective Layer",
    desc: "Add a protective screed or topcoat to shield the waterproofing from physical and UV damage.",
    icon: <FaShieldAlt />, // protection shield
  },
  {
    id: 7,
    title: "Drainage Check",
    desc: "Ensure all drainage points are clear and the slope of the terrace is adequate to prevent water stagnation.",
    icon: <FaTint />, // water drop for drainage
  },
];


// Gallery Data
const gallery = [
    {
        id: 1,
        img: "src/assets/b1.jpg",
        text: "Complete leak transformation before & after",
        location: "New York, NY",
        days: 5,
    },
    {
        id: 2,
        img: "src/assets/b2.jpg",
        text: "Water seepage prevention in bathroom",
        location: "New York, NY",
        days: 5,
    },
    {
        id: 3,
        img: "https://www.shutterstock.com/shutterstock/photos/1853927833/display_1500/stock-photo--before-and-after-bathroom-renovation-in-barcelona-1853927833.jpg",
        text: "Wall & tile protection solution",
        location: "New York, NY",
        days: 5,
    },
];


// Component
export default function TerraceWaterproofing() {
    return (
        <div className="font-sans">
            {/* Hero Section */}
            <section
                className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[400px] text-white px-4 sm:px-8 text-center bg-cover bg-center relative"
                style={{
                    backgroundImage: "url('src/assets/Terrace-1.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="relative z-10 max-w-4xl py-10 sm:py-16 md:py-20 px-2">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-6 sm:mt-10 md:mt-12">
                        Terrace Waterproofing Services
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl mx-auto mt-4 sm:mt-6">
                       Ensure the longevity of your terrace with our professional waterproofing service. 
                       We use superior materials and proven techniques to create a durable, weather-resistant barrier that prevents water seepage, protects against thermal stress, and safeguards your property's structural integrity.
                    </p>
                    <button className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 rounded-xl hover:bg-blue-700 text-sm sm:text-base">
                        Request Quote
                    </button>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left Content */}
                    <div className="md:pl-[6rem] lg:pl-[12rem]">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                            Complete Terrace <br /> Waterproofing Solutions
                        </h2>
                        <p className="text-gray-600 mb-6 text-sm sm:text-base md:text-lg">
                           Protect your terrace from leaks and structural damage with our advanced waterproofing solutions. 
                           Our expert service creates a durable, weather-resistant barrier that prevents water seepage, protects against thermal stress, and safeguards your property's structural integrity. 
                        </p>

                        {/* Features */}
                        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 text-gray-700 text-sm sm:text-base">
                            <div className="flex items-center gap-2">
                                <FaClock className="text-blue-600 text-lg sm:text-xl" />
                                <p> Slope Roof Waterproofing</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaShieldAlt className="text-blue-600 text-lg sm:text-xl" />
                                <p>Flat Roof Waterproofing</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaCheckCircle className="text-blue-600 text-lg sm:text-xl" />
                                <p>Canopy/Sajja Waterproofing</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaTools className="text-blue-600 text-lg sm:text-xl" />
                                <p> APP Membrane Waterproofing (3mm, 4mm)</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center md:justify-start md:pl-8 lg:pl-12">
                        <img
                            src="src/assets/professional.jpg"
                            width={300}
                            height={100}
                            alt="Bathroom Waterproofing"
                            className="rounded-lg shadow-md w-64 sm:w-80 md:w-[300px] h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 px-6 max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-12">
                    Our Waterproofing Process
                </h1>

                <div className="relative space-y-10 md:ml-12 custom-shift">
                    <div className="timeline absolute top-0 left-[5.2rem] w-1 h-full bg-blue-600 hidden md:block"></div>

                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="relative flex items-start gap-6 md:ml-16"
                        >
                            {/* Icon (hidden on small screens) */}
                            <div className="relative z-10 w-11 h-11  items-center justify-center bg-blue-600 text-white rounded-full shadow-md hidden md:flex">
                                {step.icon}
                            </div>

                            {/* Step Content */}
                            <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5 shadow-md w-full md:max-w-xl md:ml-10">
                                <h3 className="text-lg sm:text-xl font-semibold">{step.title}</h3>
                                <p className="text-gray-600 text-sm sm:text-base">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </section>


            {/* Gallery Section */}
            <section className="py-16 px-6 bg-gray-50">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Transformation Gallery
                </h2>
                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {gallery.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden relative"
                        >
                            {/* Image Container */}
                            <div className="relative">
                                <img
                                    src={item.img}
                                    alt="Gallery"
                                    className="w-full h-48 object-cover"
                                />

                                {/* Before & After Labels */}
                                <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                                    Before
                                </span>
                                <span className="absolute top-2 right-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                                    After
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <p className="text-gray-800 font-semibold">{item.text}</p>
                                <div className="flex justify-between items-center text-gray-500 text-sm mt-2">
                                    <span>🏢 {item.location}</span>
                                    <span>📅 {item.days} days</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-16 px-6 max-w-4xl mx-auto text-center">
                <CustomerSuccessStories type="terrace" />
            </section>

            {/* FAQ Section */}
            <section className="py-16  bg-gray-100">
                <FAQSection type="terrace" />
            </section>
            <Footer />
        </div>
        
    );
}
