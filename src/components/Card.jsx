import { thumbnailBackground } from "../assets/images";

function Card({ imgURL, bShoe, setBigShoe, isSelected }) {
  const handleClick = () => {
    setBigShoe(bShoe);
  };

  return (
    <div className="flex justify-center items-center relative aspect-square cursor-pointer max-md:w-28 max-md:h-24 w-44 " onClick={handleClick}>
      <div className=" w-[70%] h-[70%] relative z-10 ">
        <img src={imgURL}  alt="shoe thumbnail" />
      </div>
      <div className={`w-[92%] h-[92%]  absolute top-0 left-0 z-0 rounded-2xl ${isSelected ? 'border-2 border-coral-red' : 'border-2 rounded-2xl border-transparent'}`}>
        <img 
          src={thumbnailBackground} 
          alt="background" 
          className="w-full h-full object-cover rounded-2xl" 
        />
      </div>
    </div>
  );
}

export default Card;
