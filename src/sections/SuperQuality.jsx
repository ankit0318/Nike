import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <div className="flex flex-col [@media(min-width:769px)]:flex-row gap-10 [@media(min-width:1025px)]:gap-60">
      <div className="pt-10 flex flex-col gap-5 items-start">
        <h1 className="text-4xl font-bold font-palanquin">
          We Provide You
          <span className="text-coral-red"> Super Quality</span> Shoes
        </h1>
        <p className="text-slate-gray leading-relaxed font-montserrat text-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
          <br></br>
          <br></br>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <Button label="View Details" iconURL={null} />
      </div>

      <div className="flex justify-center items-center relative w-full max-w-full [@media(min-width:1025px)]:max-w-[522px]">
        <img src={shoe8} alt="Super quality shoe" />
      </div>
    </div>
  );
};

export default SuperQuality;
