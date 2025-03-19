import { star } from "../assets/icons";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <div className="flex flex-col justify-start gap-16">
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl font-bold font-palanquin">
          Our <span className="text-coral-red">Popular</span> Products
        </h1>
        <p className="text-slate-gray leading-relaxed font-montserrat  text-base">
          Experience top-notch quality and style with our sought-after <br></br>{" "}
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 [@media(min-width:769px)]:grid-cols-4 gap-16 sm:gap-6">
        {products.map((product) => (
          <div className="flex flex-col gap-9 ">
            <img src={product.imgURL}></img>

            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-2">
                <img src={star}></img>
                <span className="text-slate-gray text-2xl">(4.5)</span>
              </div>
              <h1 className=" font-palanquin font-semibold text-2xl">
                {product.name}
              </h1>
              <h1 className="text-coral-red text-2xl font-montserrat font-semibold ">
                {product.price}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
