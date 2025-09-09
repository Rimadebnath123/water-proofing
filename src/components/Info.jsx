import React from "react";

const Info = () => {
  return (
    <div className="flex-1 border bg-[#10192a] rounded-md p-6">
      <h2 className="text-white font-bold text-xl mb-4.5">Our Office</h2>

      <div className="flex gap-4 items-center my-5">
        <i className="fa-solid fa-location-dot text-lg text-[#1c3b86]"></i>
        <div className="text-gray-400 text-sm">
          <p className="font-semibold text-white">Main Office:</p>
          <p>Swagat Chinar, Chinar Park, Kolkata,</p>
          <p>Kolkata 700157, India</p>
        </div>
      </div>

      <div className="flex gap-4 items-center my-5">
        <i className="fa-solid fa-phone text-lg text-[#1c3b86]"></i>
        <div className="text-gray-400 text-sm">
          <p className="font-semibold text-white">Phone:</p>
          <p>Main: (+91) 90518-19359</p>
          <p>Support: (+91) 79803-33539</p>
        </div>
      </div>

      <div className="flex gap-4 items-center my-5">
        <i className="fa-solid fa-envelope text-lg text-[#1c3b86]"></i>
        <div className="text-gray-400 text-sm">
          <p className="font-semibold text-white">Email:</p>
          <p>ewc.titu@yahoo.in</p>
        </div>
      </div>

      <div className="flex gap-4 items-center mt-4.5">
        <i className="fa-solid fa-clock text-lg text-[#1c3b86]"></i>
        <div className="text-gray-400 text-sm">
          <p className="font-semibold text-white">Business Hours:</p>
          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
          <p>Saturday: 9:00 AM - 2:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
