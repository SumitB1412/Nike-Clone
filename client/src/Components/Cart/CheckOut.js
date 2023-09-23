import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { postOrderData } from "../../Redux/orders/actions";
import { emailValidator, isCheckOutFormEmpty, mobileValidator, pinCodeValidator } from "../../utils/formValidator";

const CheckOut = () => {
  const initState = {
    firstName: "",
    lastName: "",
    addressLine1: "",
    addressLine2: "",
    locality: "",
    pinCode: "",
    state: "",
    country: "",
    email: "",
    mobile: "",
  };
  const [form, setForm] = useState(initState);
  const handleInputChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {

    e.preventDefault();

    const isEmpty = isCheckOutFormEmpty({form});
    if(!isEmpty.status){
      return alert(isEmpty.message);
    }

    const isEmail = emailValidator(form.email);
    if(!isEmail.status){
      return alert(isEmail.message);
    }

    const isMobile = mobileValidator(form.mobile);
    if(!isMobile.status){
      return alert(isMobile.message);
    }

    const isPinCode = pinCodeValidator(form.pinCode);
    if(!isPinCode.status){
      return alert(isPinCode.message);
    }

    dispatch(postOrderData(form));
  };
  return (
    <div className="py-10 px-4 md:px-12 lg:px-24 lg:flex">
      <div className="w-full lg:w-[70%] flex flex-col">
        <div>
          <h4 className="text-2xl pb-4">Enter your name and address:</h4>
        </div>
        <div className="py-2">
          <input
            name="firstName"
            type="text"
            placeholder="First Name*"
            onChange={handleInputChange}
            className="w-[97.5%] border rounded-md border-gray-200 h-[6vh] p-3"
          />
        </div>
        <div className="py-2">
          <input
            name="lastName"
            type="text"
            placeholder="Last Name*"
            onChange={handleInputChange}
            className="w-[97.5%] border rounded-md border-gray-200 h-[6vh] p-3"
          />
        </div>
        <div className="py-2">
          <input
            name="addressLine1"
            type="text"
            placeholder="Address Line 1*"
            onChange={handleInputChange}
            className="w-[97.5%] border rounded-md border-gray-200 h-[6vh] p-3"
          />
        </div>
        <div className="py-2">
          <input
            name="addressLine2"
            type="text"
            placeholder="Address Line 2"
            onChange={handleInputChange}
            className="w-[97.5%] border rounded-md border-gray-200 h-[6vh] p-3"
          />
        </div>
        <div className="flex flex-col w-full lg:flex-row lg:justify-between">
          <div className="py-2 w-full">
            <input
              name="locality"
              type="text"
              placeholder="City/Locality*"
              onChange={handleInputChange}
              className="w-[97.5%] lg:w-[95%] border rounded-md border-gray-200 h-[6vh] p-3"
            />
          </div>
          <div className="py-2 w-full">
            <input
              name="pinCode"
              type="number"
              placeholder="Pin Code*"
              onChange={handleInputChange}
              className="w-[97.5%] lg:w-[95%] border rounded-md border-gray-200 h-[6vh] p-3"
            />
          </div>
        </div>
        <div className="flex flex-col w-full lg:flex-row lg:justify-between">
          <div className="py-2 w-full">
            <input
              name="state"
              type="text"
              placeholder="State/Territory*"
              onChange={handleInputChange}
              className="w-[97.5%] lg:w-[95%] border rounded-md border-gray-200 h-[6vh] p-3"
            />
          </div>
          <div className="py-2 w-full">
            <input
              name="country"
              type="text"
              placeholder="Country*"
              onChange={handleInputChange}
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
            name="email"
            type="email"
            placeholder="Email*"
            onChange={handleInputChange}
            className="w-[97.5%] border rounded-md border-gray-200 h-[6vh] p-3"
          />
        </div>
        <div className="py-2">
          <input
            name="mobile"
            type="number"
            placeholder="Mobile*"
            onChange={handleInputChange}
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
            <Link to={"/orders"}>
              <button
                onClick={handleSubmit}
                className="w-full h-12 rounded-full bg-black text-white  hover:bg-black/70"
              >
                Place Order
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckOut;
