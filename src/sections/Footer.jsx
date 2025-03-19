import { facebook, instagram, twitter } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <div className=" text-white p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      <div className="flex flex-col gap-5">
        <img src={footerLogo} alt="Nike Logo" className="w-20" />
        <p>
          Get shoes ready for the new term at your nearest Nike store. Find Your
          perfect Size In Store. Get Rewards
        </p>
        <div className="flex flex-row gap-5">
          <span
            href="#"
            className="flex bg-white rounded-full justify-center items-center w-10 h-10 "
          >
            <img src={facebook} className="w-[60%]"></img>
          </span>
          <span
            href="#"
            className="flex bg-white rounded-full justify-center items-center w-10 h-10"
          >
            <img src={twitter} className="w-[60%]"></img>
          </span>
          <span
            href="#"
            className="flex bg-white rounded-full justify-center items-center w-10 h-10"
          >
            <img src={instagram} className="w-[60%]"></img>
          </span>
        </div>
      </div>
      {footerLinks.map((footer) => (
        <>
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold">{footer.title}</h3>
            {footer.links.map((product) => (
              <a href={product.link}>{product.name}</a>
            ))}
          </div>
        </>
      ))}
      <div className="col-span-full text-center mt-10">
        <p>© Copyright. All rights reserved.</p>
        <a href="#" className="text-white">
          Terms & Conditions
        </a>
      </div>
    </div>
  );
};

export default Footer;
