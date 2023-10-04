import React, { useEffect } from "react";
import Card from "./Card";
import { getFavourites } from "../../Redux/favourites/actions";
import { useDispatch, useSelector } from "react-redux";

const Favourites = () => {
  const { favourites } = useSelector((state) => state.favouriteReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    getFavourites(dispatch);
  }, []);
  return (
    <div className="px-4 md:px-12 lg:px-24 py-10 flex flex-col">
      <div>
        <p className="text-2xl pb-8">Favourites</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {favourites.map((item, index) => (
          <Card key={index} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
