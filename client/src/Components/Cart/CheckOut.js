import React from "react";

const CheckOut = () => {
  return (
    <div className="py-10 px-32 flex">
      <div className="w-[70%] flex flex-col">
        <div>
          <h4 className="text-2xl pb-4">Enter your name and address:</h4>
        </div>
        <div className="py-2">
          <input
            type="text"
            placeholder="First Name*"
            className="w-[90%] border rounded-md border-gray-200 h-[6vh] p-3"
          />
        </div>
        <div className="py-2">
          <input
            type="text"
            placeholder="Last Name*"
            className="w-[90%] border rounded-md border-gray-200 h-[6vh] p-3"
          />
        </div>
        <div className="py-2">
          <input
            type="text"
            placeholder="Address Line 1*"
            className="w-[90%] border rounded-md border-gray-200 h-[6vh] p-3"
          />
        </div>
        <div className="py-2">
          <input
            type="text"
            placeholder="Address Line 2"
            className="w-[90%] border rounded-md border-gray-200 h-[6vh] p-3"
          />
        </div>
        <div className="py-2 flex">
          <div>
            <input
              type="text"
              placeholder="City/Locality*"
              className="w-[142%] border rounded-md border-gray-200 h-[6vh] p-3"
            />
          </div>
          <div className="pl-28">
            <input
              type="text"
              placeholder="Pin Code*"
              className="w-[142%] border rounded-md border-gray-200 h-[6vh] p-3"
            />
          </div>
        </div>
        <div className="py-2 flex">
          <div>
            <input
              type="text"
              placeholder="State/Territory*"
              className="w-[142%] border rounded-md border-gray-200 h-[6vh] p-3"
            />
          </div>
          <div className="pl-28">
            <input
              type="text"
              placeholder="Country*"
              className="w-[142%] border rounded-md border-gray-200 h-[6vh] p-3"
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
            className="w-[90%] border rounded-md border-gray-200 h-[6vh] p-3"
          />
        </div>
        <div className="py-2">
          <input
            type="number"
            placeholder="Mobile*"
            className="w-[90%] border rounded-md border-gray-200 h-[6vh] p-3"
          />
        </div>
      </div>
      <div className="w-[30%] pl-10">
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
            <button className="w-full h-12 rounded-full bg-black text-white  hover:bg-black/70">
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckOut;
