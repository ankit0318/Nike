import Button from "../components/Button";

const Subscribe = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-10 justify-between items-center p-4">
      <div className=" xl:text-left text-center">
        <h1 className="text-4xl font-bold font-palanquin max-w-xl">
          Sign Up for <span className="text-coral-red">Updates</span> &
          Newsletter
        </h1>
      </div>
   
        <div className="relative max-w-[500px]  mt-4 xl:mt-0  w-full flex flex-col flex-1 xl:flex-row gap-5">
          <input
            placeholder="subscribe@nike.com"
            className="border-[1px] border-slate-gray rounded-full xl:px-10 xl:py-6 px-5 py-3 w-full"
          />
          <div className="xl:absolute xl:right-3 xl:top-3  relative ">
            <Button 
              label={"Sign Up"} 
              imgURL={null}
              className="rounded-r-full rounded-l-none h-full bg-coral-red text-white px-6 "
            />
          </div>
      </div>
    </div>
  );
};

export default Subscribe;