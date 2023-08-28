import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const AccordianItem = ({ orderList }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="flex">
        <div
          className="w-full flex justify-between cursor-pointer hover:bg-gray-50 py-2 px-2"
          onClick={toggle}
        >
          <div>
            <h4 className="text-base text-gray-400">
              Order on {orderList.orderDate}
            </h4>
          </div>
          <div>{open ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}</div>
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="px-4 py-5 w-full flex justify-between gap-20">
          <div className="flex flex-col w-[30%]">
            <h4 className="text-lg font-semibold">Ordered Items</h4>
            <div className="border border-gray-200"></div>
            <div className="w-full py-3">
              {orderList.orders.map((item) => (
                <>
                <div className="flex py-2 gap-4">
                  <div><img src={item.image} alt={item.title} className="w-20 h-24 object-cover"/></div>
                  <div className="flex flex-col justify-center gap-1">
                    <div><h4 className="text-sm font-semibold">{item.title}</h4></div>
                    <div><h4 className="text-xs">Price:&nbsp;₹&nbsp;{item.price}</h4></div>
                    <div><h4 className="text-xs">Quantity:&nbsp;{item.quantity}</h4></div>
                  </div>
                </div>
                </>
              ))}
            </div>
          </div>
          <div className="flex flex-col w-[30%]">
            <h4 className="text-lg font-semibold">Shipping Address</h4>
            <div className="border border-gray-200"></div>
            <div className="w-full flex flex-col py-5 gap-2">
              <div className="w-full flex justify-between">
                <div><h4 className="text-sm">Full Name</h4></div>
                <div><h4 className="text-sm">{orderList.name}</h4></div>
              </div>
              <div className="w-full flex justify-between">
                <div><h4 className="text-sm">Mobile</h4></div>
                <div><h4 className="text-sm">{orderList.phonenumber}</h4></div>
              </div>
              <div className="w-full flex justify-between">
                <div><h4 className="text-sm">Email</h4></div>
                <div><h4 className="text-sm">{orderList.email}</h4></div>
              </div>
            </div>
            <div className="border border-gray-200"></div>
            <div className="w-full flex flex-col py-5 gap-2">
              <div className="w-full flex justify-between">
                <div><h4 className="text-sm">Address</h4></div>
                <div className="w-[40%]"><h4 className="text-sm truncate text-right">{orderList.address}</h4></div>
              </div>
              <div className="w-full flex justify-between">
                <div><h4 className="text-sm">City</h4></div>
                <div><h4 className="text-sm">{orderList.city}</h4></div>
              </div>
              <div className="w-full flex justify-between">
                <div><h4 className="text-sm">State</h4></div>
                <div><h4 className="text-sm">{orderList.state}</h4></div>
              </div>
              <div className="w-full flex justify-between">
                <div><h4 className="text-sm">Pincode</h4></div>
                <div><h4 className="text-sm">{orderList.pincode}</h4></div>
              </div>
              <div className="w-full flex justify-between">
                <div><h4 className="text-sm">Country</h4></div>
                <div><h4 className="text-sm">{orderList.country}</h4></div>
              </div>
            </div>
            <div className="border border-gray-200"></div>
          </div>
          <div className="flex flex-col w-[30%]">
            <h4 className="text-lg font-semibold">Summary</h4>
            <div className="border border-gray-200"></div>
            <div className="w-full flex flex-col py-5 gap-2">
              <div className="w-full flex justify-between">
                <div><h4 className="text-sm">Order Date</h4></div>
                <div><h4 className="text-sm">{orderList.orderDate}</h4></div>
              </div>
              <div className="w-full flex justify-between">
                <div><h4 className="text-sm">Order Time</h4></div>
                <div><h4 className="text-sm">{orderList.orderDate}</h4></div>
              </div>
            </div>
            <div className="border border-gray-200"></div>
            <div className="w-full flex flex-col py-5 gap-2">
              <div className="w-full flex justify-between">
                <div><h4 className="text-sm">Order ID</h4></div>
                <div><h4 className="text-sm">{orderList.orderID}</h4></div>
              </div>
              <div className="w-full flex justify-between">
                <div><h4 className="text-sm">Payment ID</h4></div>
                <div><h4 className="text-sm">{orderList.paymentID}</h4></div>
              </div>
            </div>
            <div className="border border-gray-200"></div>
            <div className="w-full flex flex-col py-5 gap-2">
              <div className="w-full flex justify-between">
                <div><h4 className="text-sm">Subtotal</h4></div>
                <div><h4 className="text-sm">₹{orderList.subtotal}</h4></div>
              </div>
              <div className="w-full flex justify-between">
                <div><h4 className="text-sm">Quantity</h4></div>
                <div><h4 className="text-sm">{orderList.quantity}</h4></div>
              </div>
              <div className="w-full flex justify-between">
                <div><h4 className="text-sm">Estimated Delivery</h4></div>
                <div><h4 className="text-sm">₹{orderList.delivery}</h4></div>
              </div>
              <div className="w-full flex justify-between">
                <div><h4 className="text-sm">Discount</h4></div>
                <div><h4 className="text-sm">₹{orderList.discount}</h4></div>
              </div>
            </div>
            <div className="border border-gray-200"></div>
            <div className="w-full flex flex-col py-5 gap-2">
              <div className="w-full flex justify-between">
                <div><h4 className="text-sm">Total</h4></div>
                <div><h4 className="text-sm">₹{orderList.total}</h4></div>
              </div>
            </div>
            <div className="border border-gray-200"></div>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default AccordianItem;
