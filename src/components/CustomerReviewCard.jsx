import React from "react";
import { star } from "../assets/icons";

const CustomerReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col w-96 justify-center items-center ">
      <img src={imgURL} className="rounded-full w-32 h-32 object-cover mb-7" />
      <p className="font-montserrat text-lg text-slate-gray text-center mb-5">
        {feedback}
      </p>
      <div className="flex flex-row gap-2 mb-2">
        <img src={star}></img>
        <p className="font-montserrat text-lg text-slate-gray">({rating})</p>
      </div>
      <h1 className="font-palanquin text-3xl font-bold">{customerName}</h1>
    </div>
  );
};

export default CustomerReviewCard;
