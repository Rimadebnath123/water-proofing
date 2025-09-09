import React from "react";

const Connect = () => {
  return (
    <div className="flex-1 h-fit px-8 py-6 rounded-md shadow-sm shadow-gray-500">
      <h2 className="font-bold text-xl mb-3">Connect With Us</h2>
      <ul>
        <li className="flex gap-2 items-center text-[#1c3b86] my-2.5">
          <i className="fa-brands fa-facebook"></i>
          <p>Eastern Waterproofing</p>
        </li>
        <li className="flex gap-2 items-center text-[#1c3b86] my-2.5">
          <i className="fa-brands fa-twitter"></i>
          <p>@EasternWP</p>
        </li>
        <li className="flex gap-2 items-center text-[#1c3b86] my-2.5">
          <i className="fa-brands fa-linkedin"></i>
          <p>Eastern Waterproofing Inc.</p>
        </li>
        <li className="flex gap-2 items-center text-[#1c3b86] my-2.5">
          <i className="fa-brands fa-instagram"></i>
          <p>@eastern_waterproofing</p>
        </li>
      </ul>
    </div>
  );
};

export default Connect;
