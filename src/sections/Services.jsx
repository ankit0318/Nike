import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          imgURL={service.imgURL}
          label={service.label}
          subtext={service.subtext}
        />
      ))}
    </div>
  );
};

export default Services;
