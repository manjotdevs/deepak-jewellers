import React from "react";
import Button from "./button";

const Card = ({ image, title, content, offer, price }) => {
  return (
    <Button style="custom">
      <div className="bg-gray-950 shadow-lg rounded-3xl w-72 h-96 flex flex-col justify-between p-4">
        <div className="flex items-center justify-center pb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-full rounded-lg object-contain"
          />
        </div>
        <div className="text-left">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
        </div>
        <div className="text-left ml-5 flex flex-1 space-x-5">
          {offer ? <p className="text-red-500">{offer}</p> : null}
          <p className="text-white font-bold">{price}</p>
        </div>
      </div>
    </Button>
  );
};

export default Card;
