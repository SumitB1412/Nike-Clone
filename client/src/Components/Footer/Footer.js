import React from "react";

const Footer = () => {
  return (
    <div className="mx-auto bottom-0 w-full bg-black px-4 text-white">
      <div className="flex flex-col md:flex-row  px-6">
        <div className="flex flex-col py-24">
          <h4 className="text-sm">FIND A STORE</h4>
          <h4 className="py-3 text-sm">BECOME A MEMBER</h4>
          <h4 className="pb-3 text-sm">Send Us Feedback</h4>
          <h4 className="text-sm">STUDENT DISCOUNTS</h4>
        </div>
        <div className="hidden md:flex flex-col py-20 pl-20">
          <h4 className="text-sm pb-3">GET HELP</h4>
          <p className="text-sm text-gray-400">Order Status</p>
          <p className="text-sm pt-6 text-gray-400">Delivery</p>
          <p className="text-sm pt-6 text-gray-400">Returns</p>
          <p className="text-sm pt-6 text-gray-400">Payment Options</p>
          <p className="text-sm pt-6 text-gray-400">
            Contact Us On Nike.com Inquiries
          </p>
          <p className="text-sm pt-6 text-gray-400">
            Contact Us On All Other Inquiries
          </p>
        </div>
        <div className="hidden md:flex flex-col py-20 pl-20">
          <h4 className="text-sm pb-3">ABOUT NIKE</h4>
          <p className="text-sm text-gray-400">News</p>
          <p className="text-sm pt-6 text-gray-400">Careers</p>
          <p className="text-sm pt-6 text-gray-400">Investors</p>
          <p className="text-sm pt-6 text-gray-400">Sustainability</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
