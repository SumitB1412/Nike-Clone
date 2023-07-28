import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import product1 from "./product1.webp";
import product2 from "./product2.webp";
import product3 from "./product3.webp";
import product4 from "./product4.webp";
import product5 from "./product5.webp";
import product6 from "./product6.webp";

const Carousels = () => {
  const data = [
    {
      image: product1,
      name: "Air Force 1",
    },
    {
      image: product2,
      name: "Air Jordan 1",
    },
    {
      image: product3,
      name: "Air Max",
    },
    {
      image: product4,
      name: "Nike Blazer",
    },
    {
      image: product5,
      name: "Metcon",
    },
    {
      image: product6,
      name: "Peagus Running Shoes",
    },
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min:  1001},
      items: 4,
    },
    tablet: {
        breakpoint: { max: 1000, min: 751 },
        items: 3,
    },
    midtablet:{
        breakpoint: { max: 750, min: 401 },
        items: 2,
    },
    mobile: {
      breakpoint: { max: 400, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="px-12 py-16">
      <p className="text-2xl pb-9">Always Iconic</p>
      <Carousel responsive={responsive} >
          {data.map((item, index) => (
            <div>
              <img
                src={item.image}
                alt="index"
                className="h-[290px] shadow-lg"
              />
              <p className="text-sm text-gray-500 pt-2">{item.name}</p>
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default Carousels;
