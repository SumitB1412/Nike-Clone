import React from "react";
import {Link} from 'react-router-dom';

const CheckOut = () => {
  return (
    <div className="py-10 px-4 md:px-12 lg:px-24 lg:flex">
      <div className="w-full lg:w-[70%] flex flex-col">
        <div>
          <h4 className="text-2xl pb-4">Enter your name and address:</h4>
        </div>
        <div className="py-2">
          <input
            type="text"
            placeholder="First Name*"
            className="w-[97.5%] border rounded-md border-gray-200 h-[6vh] p-3"
          />
        </div>
        <div className="py-2">
          <input
            type="text"
            placeholder="Last Name*"
            className="w-[97.5%] border rounded-md border-gray-200 h-[6vh] p-3"
          />
        </div>
        <div className="py-2">
          <input
            type="text"
            placeholder="Address Line 1*"
            className="w-[97.5%] border rounded-md border-gray-200 h-[6vh] p-3"
          />
        </div>
        <div className="py-2">
          <input
            type="text"
            placeholder="Address Line 2"
            className="w-[97.5%] border rounded-md border-gray-200 h-[6vh] p-3"
          />
        </div>
        <div className="flex flex-col w-full lg:flex-row lg:justify-between">
          <div className="py-2 w-full">
            <input
              type="text"
              placeholder="City/Locality*"
              className="w-[97.5%] lg:w-[95%] border rounded-md border-gray-200 h-[6vh] p-3"
            />
          </div>
          <div className="py-2 w-full">
            <input
              type="text"
              placeholder="Pin Code*"
              className="w-[97.5%] lg:w-[95%] border rounded-md border-gray-200 h-[6vh] p-3"
            />
          </div>
        </div>
        <div className="flex flex-col w-full lg:flex-row lg:justify-between">
          <div className="py-2 w-full">
            <input
              type="text"
              placeholder="State/Territory*"
              className="w-[97.5%] lg:w-[95%] border rounded-md border-gray-200 h-[6vh] p-3"
            />
          </div>
          <div className="py-2 w-full">
            <input
              type="text"
              placeholder="Country*"
              className="w-[97.5%] lg:w-[95%] border rounded-md border-gray-200 h-[6vh] p-3"
            />
          </div>
        </div>
        <div>
          <h4 className="text-2xl pt-12 pb-4">
            What's your contact information?
          </h4>
        </div>
        <div className="py-2">
          <input
            type="email"
            placeholder="Email*"
            className="w-[97.5%] border rounded-md border-gray-200 h-[6vh] p-3"
          />
        </div>
        <div className="py-2">
          <input
            type="number"
            placeholder="Mobile*"
            className="w-[97.5%] border rounded-md border-gray-200 h-[6vh] p-3"
          />
        </div>
      </div>
      <div className="w-full lg:w-[30%] lg:pl-10">
        <h4 className="text-2xl">Summary</h4>
        <div className="flex flex-col font-light">
          <div className="pt-6 pb-1 flex justify-between">
            <div>Subtotal</div>
            <div>₹3695.00</div>
          </div>
          <div className="py-1 flex justify-between">
            <div>Quantity</div>
            <div>4</div>
          </div>
          <div className="py-1 flex justify-between">
            <div>Delivery Charges</div>
            <div>₹100.00</div>
          </div>
          <div className="py-1 pb-3 flex justify-between">
            <div>Discount</div>
            <div>₹0.0</div>
          </div>
          <div className="border border-gray-200"></div>
          <div className="py-4 flex justify-between">
            <div>Total</div>
            <div>₹3695.00</div>
          </div>
          <div className="border border-gray-200"></div>
          <div className="pt-7">
          <Link to={'/orders'}><button className="w-full h-12 rounded-full bg-black text-white  hover:bg-black/70">
              Place Order
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckOut;
