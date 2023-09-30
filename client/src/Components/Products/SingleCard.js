import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { getSingleProduct } from "../../Redux/products/actions";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";

const SingleCard = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSingleProduct = (id) => {
    getSingleProduct(dispatch, id);
    navigate(`/products/description/${id}`)
  };
  return (
    <div onClick={() => handleSingleProduct(data._id)}>
      <img src={data.img[0]} alt="product" className="w-full object-cover" />
      <div className="flex justify-between items-center mt-2">
        <p className="text-base font-medium max-w-[20ch] truncate">{data.title}</p>
        <p className="flex items-center">
          <AiOutlineStar /> {data.rating}
        </p>
      </div>
      <p className="text-gray-400 max-w-[23ch] truncate text-base">{data.description}</p>
      <p className="text-gray-400 max-w-[23ch] truncate text-base">{data.size.join(", ")}</p>
      <p className="font-medium">₹ {data.price}</p>
    </div>
  );
};

export default SingleCard;
