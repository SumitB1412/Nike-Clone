import React from "react";
import CartCard from "./CartCard";

const Cart = () => {
    const product = [
        {
          title: "Nike Invicible 3",
          gender: "Female",
          description: "Best Ever Running Shoes",
          category: "Shoes",
          price: "3695.00",
          size: ["Small", "Medium", "Large"],
          color: "Black",
          rating: "4.4",
          img: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3396ee3c-08cc-4ada-baa9-655af12e3120/invincible-3-road-running-shoes-Wwmmlp.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/00afad82-be65-49db-a1c9-1f2b3c3c079f/invincible-3-road-running-shoes-Wwmmlp.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ee344bd7-5a64-423c-9c85-3a6dce10a68f/invincible-3-road-running-shoes-Wwmmlp.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/132be235-f9f5-4e45-91fe-d93d5590ffe4/invincible-3-road-running-shoes-Wwmmlp.png",
          ],
        },
        {
            title: "Nike Invicible 3",
            gender: "Female",
            description: "Best Ever Running Shoes",
            category: "Shoes",
            price: "3695.00",
            size: ["Small", "Medium", "Large"],
            color: "Black",
            rating: "4.4",
            img: [
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3396ee3c-08cc-4ada-baa9-655af12e3120/invincible-3-road-running-shoes-Wwmmlp.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/00afad82-be65-49db-a1c9-1f2b3c3c079f/invincible-3-road-running-shoes-Wwmmlp.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ee344bd7-5a64-423c-9c85-3a6dce10a68f/invincible-3-road-running-shoes-Wwmmlp.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/132be235-f9f5-4e45-91fe-d93d5590ffe4/invincible-3-road-running-shoes-Wwmmlp.png",
            ],
          },
      ];
  return <div className="py-10 px-24 flex">
    <div className="w-[70%]">
        <h4 className="text-2xl">Bag</h4>
        <div className="flex flex-col py-4 gap-4">
            {product.map(item => (
                <>
                  <CartCard product={item} />
                    <div className="border border-gray-200"></div>  
                </>
                
            ))}
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
                <button className="w-full h-12 rounded-full bg-black text-white  hover:bg-black/70">Member Checkout</button>
            </div>
        </div>
    </div>
  </div>;
};

export default Cart;
