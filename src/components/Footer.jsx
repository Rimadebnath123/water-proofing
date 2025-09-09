import React from "react";

const Footer = () => {
  return (
    // <div className="w-full bg-[#10192a] py-8">
    //   <div className="flex justify-center flex-wrap gap-8 mx-4 sm:mx-8 lg:mx-36 xl:mx-42">
    //     <div className="flex-1">
    //       <div>
    //         <h2 className="text-white font-bold text-xl mb-3">
    //           Eastern Waterproofing
    //         </h2>
    //       </div>
    //       <div>
    //         <p className="text-gray-400 text-sm mb-3">
    //           Your trusted partner in premium waterproofing solutions since
    //           2010.
    //         </p>
    //       </div>
    //       <div className="flex gap-2.5 text-xl text-gray-400">
    //         <i className="fa-brands fa-cc-visa"></i>
    //         <i className="fa-brands fa-cc-paypal"></i>
    //       </div>
    //     </div>

    //     <div className="flex-1">
    //       <div>
    //         <h3 className="text-white font-bold text-base mb-3.5">Services</h3>
    //       </div>
    //       <div>
    //         <ul className="text-gray-400 text-sm">
    //           <li className="my-1.25">Basement Waterproofing</li>
    //           <li className="my-1.25">Foundation Sealing</li>
    //           <li className="my-1.25">Leak Repair</li>
    //           <li className="my-1.25">Drainage Systems</li>
    //         </ul>
    //       </div>
    //     </div>

    //     <div className="flex-1">
    //       <div>
    //         <h3 className="text-white font-bold text-base mb-3.5">Company</h3>
    //       </div>
    //       <div>
    //         <ul className="text-gray-400 text-sm">
    //           <li className="my-1.25">About Us</li>
    //           <li className="my-1.25">Our Team</li>
    //           <li className="my-1.25">Careers</li>
    //           <li className="my-1.25">Contact</li>
    //         </ul>
    //       </div>
    //     </div>

    //     <div className="flex-1">
    //       <div>
    //         <h3 className="text-white font-bold text-base mb-3.5">Resources</h3>
    //       </div>
    //       <div>
    //         <ul className="text-gray-400 text-sm">
    //           <li className="my-1.25">Blog</li>
    //           <li className="my-1.25">Case Studies</li>
    //           <li className="my-1.25">Warrranty</li>
    //           <li className="my-1.25">FAQ</li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="mt-10">
    //     <p className="text-center text-gray-400 text-sm">
    //       &copy; 2024 Eastern Waterproofing. All rights reserved. | Privacy
    //       Policy | Terms of Service
    //     </p>
    //   </div>
    // </div>
    
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
  );
};

export default Footer;
