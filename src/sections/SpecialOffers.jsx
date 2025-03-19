import React from "react";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffers = () => {
  return (
    <div
      className="flex flex-col lg:flex-row gap-10
    "
    >
      <div className="w-full max-w-full">
        <img src={offer}></img>
      </div>
      <div className="flex flex-col justify-center gap-6 items-start">
        <h1 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">Special</span> Offer
        </h1>
        <p className="font-montserrat text-slate-gray text-lg">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
          <br></br>
          <br></br>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex flex-col xl:flex-row gap-3 relative top-3 ">
          <Button label={"Shop Now"} iconURL={arrowRight} />
          <button className="text-slate-gray font-montserrat text-lg border-solid border-[1px] border-slate-gray rounded-full xl:py-3 xl:px-9 w-fit px-3 py-3 ">
            Learn more
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
