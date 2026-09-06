import { AiOutlineCar } from "react-icons/ai";
import { BiWrench } from "react-icons/bi";
import WindshieldIcon from "../svg/WindshieldIcon";
import { ElementType } from "react";

// Type for each service category
interface ServiceCategory {
  name: string;
  icon: ElementType;
}

// Service category data
const serviceCategories: ServiceCategory[] = [
  {
    name: "Auto Mechanic",
    icon: BiWrench,
  },
  {
    name: "Auto Detailer",
    icon: AiOutlineCar,
  },
  {
    name: "Windshield Repair",
    icon: WindshieldIcon,
  },
];

const ServiceCategories = () => {
  return (
    <section className="w-full py-5  px-4 sm:px-10 bg-[#AAB2C8]">

      {/* Service Categories Container */}
      <div className="flex items-start justify-center gap-8 md:gap-20 text-white text-center">

        {serviceCategories.map((service) => {
          const Icon = service.icon;

          return (
            /* Service Category */
            <div
              key={service.name}
              className="flex flex-col items-center gap-2"
            >
              {/* Icon Container */}
              <div className="h-10 flex items-center justify-center">
                <Icon className="w-8 h-8 md:w-9 md:h-9" />
              </div>

              {/* Service Name */}
              <p className="text-label font-semibold">
                {service.name}
              </p>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default ServiceCategories;