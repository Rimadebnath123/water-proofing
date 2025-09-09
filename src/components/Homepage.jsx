import React from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaHome, FaWrench, FaBuilding, FaAward, FaBars } from 'react-icons/fa';
import { SiVisa } from 'react-icons/si';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";


const HomePage = () => {

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">
      {/* Hero Section with Slider */}
      <section className="relative h-80 md:h-screen flex items-center justify-center text-center text-white mt-10 pt-28 pb-20 ">
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="src/assets/A.N.C water - Made with Clipchamp.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative z-10 px-4 max-w-5xl">
          <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Professional Waterproofing Solutions
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl">
            Protecting your property with premium waterproofing services and guaranteed results for years.
          </p>
          <button className="mt-8 px-6 sm:px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-black hover:text-white transition">
            <Link to="/contact">Get Free Consultation</Link>
          </button>
        </div>
      </section>

      {/* Premium Services */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-3">Our Premium Services</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-16">
          Comprehensive waterproofing solutions designed to protect your investment with industry-leading techniques and materials
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {[{
            title: 'Swimming-Pool Waterproofing',
            desc: 'Durable pool waterproofing with chemical-resistant membranes—built to handle water pressure and chlorine.',
            icon: <FaShieldAlt className="text-4xl text-black" />
          }, {
            title: 'Foundation Sealing',
            desc: 'Professional foundation waterproofing using premium materials to prevent water damage.',
            icon: <FaHome className="text-4xl text-black" />
          }, {
            title: 'Leak Repair Services',
            desc: 'Expert leak detection and repair services with guaranteed results and warranties.',
            icon: <FaWrench className="text-4xl text-black" />
          }].map((s, i) => (
            <div key={i} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-6">{s.icon}</div>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-black text-white p-8 rounded-lg shadow flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Why Choose Eastern Waterproofing?</h3>
            <p className="mb-4">
              With over 15 years of experience, we’ve established ourselves as the premier choice.
            </p>
            <ul className="space-y-2 text-sm">
              <li>✅ Licensed and Insured Professionals</li>
              <li>✅ 5-Year Warranty on All Work</li>
              <li>✅ Premium Materials Only</li>
            </ul>
          </div>
          <div className="h-full">
            <img
              src="https://sika.scene7.com/is/image/sika/glo-waterproofing-membrane-basement-01:1-1?wid=1200&hei=1200&fit=crop%2C1"
              alt="Placeholder Tools"
              className="rounded-lg shadow object-cover h-[60vh] w-full"
            />
          </div>
        </div>
      </section>


      {/* Guaranteed Results */}
<section className="py-16 bg-white">
<div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
<img src="https://t4.ftcdn.net/jpg/03/67/83/39/360_F_367833946_qmkgMz6u8G49VUgor0dUCPyWfOaQdvmJ.jpg" alt="Placeholder Worker" className="rounded shadow w-full object-cover max-h-[400px]" />
<div>
<h3 className="text-2xl font-bold mb-4">Guaranteed Results</h3>
<p className="mb-6 text-gray-600">
Our commitment to excellence ensures each project is completed
with high standards and warranty coverage.
</p>
<div className="flex flex-col sm:flex-row sm:space-x-8 text-center space-y-4 sm:space-y-0">
<div>
<h4 className="text-3xl font-bold text-blue-700">100+</h4>
<p className="text-sm text-gray-600">Projects Completed</p>
</div>
<div>
<h4 className="text-3xl font-bold text-blue-700">99.9%</h4>
<p className="text-sm text-gray-600">Success Rate</p>
</div>
</div>
</div>
</div>
</section>

        {/* Timeline */}
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-3">Our Journey of Excellence</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-16">
        Building trust and expertise through years of dedicated service and
        continuous innovation in waterproofing solutions
      </p>

      <div className="relative max-w-4xl mx-auto">
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>
        <div className="space-y-12">
          {[
            {
              year: "2010",
              title: "Company Founded",
              desc: "Started with a vision to provide premium waterproofing solutions",
            },
            {
              year: "2015",
              title: "100+ Projects",
              desc: "Completed over 100 successful waterproofing projects",
            },
            {
              year: "2020",
              title: "Industry Leader",
              desc: "Recognized as the leading waterproofing contractor in the region",
            },
            {
              year: "2025",
              title: "Innovation Focus",
              desc: "Pioneering new technologies in waterproofing solutions",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              } items-center relative`}
            >
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0
                    ? "md:pr-12 md:text-right"
                    : "md:pl-12 md:text-left"
                }`}
              >
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
              <div className="hidden md:flex w-10 h-10 rounded-full bg-blue-900 text-white border-4 border-white shadow-md absolute left-1/2 transform -translate-x-1/2 items-center justify-center font-bold text-xs">
                {item.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* Certifications */}
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-12">Certifications & Partnerships</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-xl mx-auto">
        {[
          // { icon: <SiVisa />, label: "Licensed Contractor" },
          { icon: "https://rohanahardware.com/pub/media/codazon_cache/brand/400x400/brands/drfixit.jpg", label: "" },
          { icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqdKyUUWOxTs4mRIQ9YK8YW34GdskUMmfnoQ&s", label: "" },
          // { icon: <FaShieldAlt />, label: "Fully Insured" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-center"
          >
            <div className="text-5xl text-black mb-4"><img src={item.icon} alt="" srcset="" /></div>
            <p className="font-semibold text-gray-700">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Contact Form */}
  <section className="py-16 bg-black text-white">
    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-2xl font-bold mb-4">Get Your Free Consultation</h3>
        <p className="text-gray-300 mb-4">
          Contact our experts today for a personalized assessment.
        </p>
        <p className="text-sm mb-1 text-gray-300"> (+91) 90518-19359</p>
        <p className="text-sm mb-1 text-gray-300">
           ewc.titu@yahoo.in
        </p>
        <p className="text-sm mb-4 text-gray-300">
           Swagat Chinar, Chinar Park, Kolkata 700157.
        </p>
        <div className="flex space-x-4 mt-4 text-lg text-white">
          <a href="#" className="hover:text-white transition-colors duration-300">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-white transition-colors duration-300">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-white transition-colors duration-300">
            <FaLinkedinIn />
          </a>
          <a href="#" className="hover:text-white transition-colors duration-300">
            <FaInstagram />
          </a>
        </div>
      </div>
      <form className="bg-gray-800 shadow rounded-lg p-6 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="tel"
          placeholder="Your Phone"
          className="w-full p-3 border border-gray-300 rounded"
        />
        <textarea
          rows="4"
          placeholder="Describe your waterproofing needs..."
          className="w-full p-3 border border-gray-300 rounded"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-3 rounded hover:bg-blue-800 transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-black text-white py-8 px-4 border-t border-gray-700">
    <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <h4 className="font-bold mb-2">Eastern Waterproofing</h4>
        <p className="text-sm text-gray-400">Your trusted partner since 2010.</p>
      </div>
      <div>
        <h4 className="font-bold mb-2">Services</h4>
        <ul className="text-sm space-y-1 text-gray-400">
          <li>Swimming-Pool Waterproofing</li>
          <li>Foundation Sealing</li>
          <li>Leak Repair</li>
          <li>Drainage Systems</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-2">Company</h4>
        <ul className="text-sm space-y-1 text-gray-400">
          <li>About Us</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-2">Resources</h4>
        <ul className="text-sm space-y-1 text-gray-400">
          <li>Blog</li>
          <li>Case Studies</li>
          <li>Warranty</li>
          <li>FAQ</li>
        </ul>
      </div>
    </div>
     <div className="text-center text-xs text-gray-500 mt-8">
      © 2025 Eastern Waterproofing. All rights reserved. | Privacy Policy | Terms of Service
    </div>
  </footer>
</div>
  );
};

export default HomePage;