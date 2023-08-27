import React from "react";
import { AiOutlineStar } from "react-icons/ai";

const SingleCard = ({ data }) => {
  return (
    <div>
      <img src={data.img[0]} alt="product" className="" />
      <div className="flex justify-between items-center mt-2">
        <p className="font-medium">{data.title}</p>
        <p className="flex items-center">
          <AiOutlineStar /> {data.rating}
        </p>
      </div>
      <p className="text-[gray] text-sm">{data.description}</p>
      <p className="text-[gray] text-sm">
        {data.size.join(", ")}
      </p>
      <p className="font-medium">₹ {data.price}</p>
    </div>
  );
};

export default SingleCard;
