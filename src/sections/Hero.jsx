import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../Constants";
import { bigShoe1 } from "../assets/images";
import { useState } from "react";
import Card from "../components/Card";
const Hero = () => {
  const [bigShoe, setBigShoe] = useState(bigShoe1);

  return (
    <div className=" flex flex-col gap-12 xl:flex-row ">
      <div className="relative  flex flex-col justify-center items-start xl:py-28 xl:w-2/5 max-xl:padding-x">
        <p className="text-coral-red font-montserrat text-xl">
          Our Summer collections
        </p>
        <h1 className="text-8xl font-palanquin font-bold mt-10 max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br></br>
          <span className="mt-3 text-coral-red inline-block"> Nike </span> Shoes
        </h1>
        <p className="text-slate-gray font-montserrat text-lg mt-6 leading-8 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight}></Button>
        <div className="flex gap-16  mt-20 flex-wrap">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="font-bold text-4xl font-palanquin">{stat.value}</p>
              <p className="font-montserrat text-slate-gray leading-7">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col bg-hero min-h-screen lg:w-full justify-between items-center ">
      
        <img
          src={bigShoe}
          className="relative top-[7.5em]"
          width={610}
          height={502}
        />

        <div className="relative top-16 flex flex-row justify-evenly px-2">
          {shoes.map((shoe, index) => (
            <Card
              key={index}
              imgURL={shoe.thumbnail}
              bShoe={shoe.bigShoe}
              setBigShoe={setBigShoe}
              isSelected={bigShoe === shoe.bigShoe}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
