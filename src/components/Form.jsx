import React from "react";

const Form = () => {
  return (
    <div className="flex-1 bg-[#010101] rounded-md p-8">
      <div className="flex gap-4 mb-5">
        <input
          type="text"
          className="flex-1 bg-[#182432] px-3 py-2.5 text-white outline-0 rounded-xs"
          placeholder="First Name"
        />
        <input
          type="text"
          className="flex-1 bg-[#182432] px-3 py-2.5 text-white outline-0 rounded-xs"
          placeholder="Last Name"
        />
      </div>

      <div className="flex my-5">
        <input
          type="email"
          className="flex-1 bg-[#182432] px-3 py-2.5 text-white outline-0 rounded-xs"
          placeholder="Email Address"
        />
      </div>

      <div className="flex my-5">
        <input
          type="phone"
          className="flex-1 bg-[#182432] px-3 py-2.5 text-white outline-0 rounded-xs"
          placeholder="Phone Number"
        />
      </div>

      <div className="flex my-5">
        <input
          type="text"
          className="flex-1 bg-[#182432] px-3 py-2.5 text-white outline-0 rounded-xs"
          placeholder="First Name"
        />
      </div>

      <div className="flex flex-col gap-2 my-5">
        <textarea
          className="flex-1 bg-[#182432] px-3 py-2.5 text-white outline-0 rounded-xs resize-none"
          placeholder="Tell us about your project or query..."
          name=""
          id=""
        ></textarea>
        <p className="text-gray-500 text-sm text-right">Max 500 Characters</p>
      </div>

      <div className="flex mt-5">
        <button className="flex-1 py-2.5 rounded-xs text-center text-white fontse bg-[#1c3b86]">Send Message</button>
      </div>
    </div>
  );
};

export default Form;
