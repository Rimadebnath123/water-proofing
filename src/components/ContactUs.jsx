import React from "react";
import image from "../assets/image.png";

import Info from "./Info.jsx";
import Connect from "./Connect.jsx";
import Form from "./Form.jsx";
import Footer from "./Footer.jsx";


function ContactUs() {
  return (
    <div className="w-full mt-20">
      <div className="flex flex-col items-center mb-12">
        <h2 className="font-bold text-3xl mb-3 text-center">Contact Us</h2>
        <p className="text-center max-w-150">
          Get in touch with our expert team for professional waterproofing solutions and consultations
        </p>
      </div>

      <div className="w-full">
        <div className="flex flex-wrap gap-8 my-8 mx-4 sm:mx-8 lg:mx-36 xl:mx-42">
          <Info />
          <div className="flex-1 mx-6">
            <img src={image} className=" w-full" alt="image" />
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex flex-wrap gap-8 mb-8 mx-4 sm:mx-8 lg:mx-36 xl:mx-42">
          <Connect />
          <Form />
        </div>
      </div>

      <div className="w-full">
        <div className="mb-12 mx-4 sm:mx-8 lg:mx-36 xl:mx-42">
          <div className="border">
            <iframe className='min-w-full min-h-[60vh]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1841.3779311966832!2d88.43680403363706!3d22.625590174248277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f31c1ad0dc7%3A0x60a4a50dcc44bcb0!2sEastern%20Water%20Proofing!5e0!3m2!1sen!2sin!4v1756995762438!5m2!1sen!2sin"
            // style="border:0;" 
            // allowfullscreen="" 
            loading="lazy" 
            // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
      
    </div>
  );
}

export default ContactUs;
