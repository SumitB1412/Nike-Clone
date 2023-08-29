import React from "react";
import AccordianItem from "./AccordianItem";

const Orders = () => {
  const orderList = [
    {
      orders: [{
        title: "Running Shoes",
        image:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3396ee3c-08cc-4ada-baa9-655af12e3120/invincible-3-road-running-shoes-Wwmmlp.png",
        price: "3695",
        quantity: "1",
      },
      {
        title: "Running Shoes",
        image:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3396ee3c-08cc-4ada-baa9-655af12e3120/invincible-3-road-running-shoes-Wwmmlp.png",
        price: "3695",
        quantity: "1",
      },
      {
        title: "Running Shoes",
        image:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3396ee3c-08cc-4ada-baa9-655af12e3120/invincible-3-road-running-shoes-Wwmmlp.png",
        price: "3695",
        quantity: "1",
      },
    ],
      name: "Tester",
      email: "tester@gmail.com",
      phonenumber: "9876543210",
      address: "Test fdgb sljv evkuf wglwu sdds sfsdf ib gtogu",
      city: "Hisar",
      state: "Haryana",
      pincode: "125001",
      country: "India",
      orderDate: "12 July, 2023",
      orderID: "asdfghjkl",
      paymentID: "asdfghjkl",
      quantity: "1",
        subtotal: "3695",
        delivery: "0",
        discount: "1108",
        total: "2587",
    },
    {
      orders: [{
        title: "Running Shoes",
        image:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3396ee3c-08cc-4ada-baa9-655af12e3120/invincible-3-road-running-shoes-Wwmmlp.png",
        price: "3695",
        quantity: "1",
      },
      {
        title: "Running Shoes",
        image:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3396ee3c-08cc-4ada-baa9-655af12e3120/invincible-3-road-running-shoes-Wwmmlp.png",
        price: "3695",
        quantity: "1",
      },
      {
        title: "Running Shoes",
        image:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3396ee3c-08cc-4ada-baa9-655af12e3120/invincible-3-road-running-shoes-Wwmmlp.png",
        price: "3695",
        quantity: "1",
      },
    ],
      name: "Tester",
      email: "tester@gmail.com",
      phonenumber: "9876543210",
      address: "Test",
      city: "Hisar",
      state: "Haryana",
      pincode: "125001",
      country: "India",
      orderDate: "12 July, 2023",
      orderID: "asdfghjkl",
      paymentID: "asdfghjkl",
      quantity: "1",
        subtotal: "3695",
        delivery: "0",
        discount: "1108",
        total: "2587",
    },
    {
      orders: [{
        title: "Running Shoes",
        image:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3396ee3c-08cc-4ada-baa9-655af12e3120/invincible-3-road-running-shoes-Wwmmlp.png",
        price: "3695",
        quantity: "1",
      },
      {
        title: "Running Shoes",
        image:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3396ee3c-08cc-4ada-baa9-655af12e3120/invincible-3-road-running-shoes-Wwmmlp.png",
        price: "3695",
        quantity: "1",
      },
      {
        title: "Running Shoes",
        image:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3396ee3c-08cc-4ada-baa9-655af12e3120/invincible-3-road-running-shoes-Wwmmlp.png",
        price: "3695",
        quantity: "1",
      },
      {
        title: "Running Shoes",
        image:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3396ee3c-08cc-4ada-baa9-655af12e3120/invincible-3-road-running-shoes-Wwmmlp.png",
        price: "3695",
        quantity: "1",
      },
      {
        title: "Running Shoes",
        image:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3396ee3c-08cc-4ada-baa9-655af12e3120/invincible-3-road-running-shoes-Wwmmlp.png",
        price: "3695",
        quantity: "1",
      },
      {
        title: "Running Shoes",
        image:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3396ee3c-08cc-4ada-baa9-655af12e3120/invincible-3-road-running-shoes-Wwmmlp.png",
        price: "3695",
        quantity: "1",
      },
      {
        title: "Running Shoes",
        image:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3396ee3c-08cc-4ada-baa9-655af12e3120/invincible-3-road-running-shoes-Wwmmlp.png",
        price: "3695",
        quantity: "1",
      },
      {
        title: "Running Shoes",
        image:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3396ee3c-08cc-4ada-baa9-655af12e3120/invincible-3-road-running-shoes-Wwmmlp.png",
        price: "3695",
        quantity: "1",
      },
    ],
      name: "Tester",
      email: "tester@gmail.com",
      phonenumber: "9876543210",
      address: "Test",
      city: "Hisar",
      state: "Haryana",
      pincode: "125001",
      country: "India",
      orderDate: "12 July, 2023",
      orderID: "asdfghjkl",
      paymentID: "asdfghjkl",
      quantity: "1",
        subtotal: "3695",
        delivery: "0",
        discount: "1108",
        total: "2587",
    },
  ];
  return (
    <div className="py-10 px-4 md:px-12 lg:px-24 flex flex-col">
      <div>
        <h4 className="text-2xl pb-4">
          Orders<span className="text-base pl-2">[{orderList.length}]</span>
        </h4>
      </div>
      <div className="border border-gray-200"></div>
      <div className="flex flex-col">
      {orderList.map((item) => (
        <>
        <AccordianItem orderList={item} />
      <div className="border border-gray-200"></div>
        </>
        
      ))}
      </div>
    </div>
  );
};

export default Orders;
