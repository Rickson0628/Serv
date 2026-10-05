import { BsFillPersonFill } from "react-icons/bs";
import { FiCalendar } from "react-icons/fi";
import type { IconType } from "react-icons";
import platStyles from "../../app/(platform)/platform.module.css";
import Link from "next/link";

// Icons used to represent the "How Serv Works" process
const icons: IconType[] = [
  FiCalendar,
  BsFillPersonFill,
  FiCalendar,
];

interface LearnMoreProps {
  firstDescription: string;
  secondDescription: string;
}

const DashboardLearnMore = ({firstDescription,secondDescription}: LearnMoreProps) => {
  return (
    <div className="-mx-4 mt-7 mb-3 flex w-[calc(100%+2rem)] flex-col items-center justify-center gap-4 bg-primary/10 p-5 lg:mx-0 lg:w-full lg:flex-row lg:justify-between lg:p-8">
      
      {/* Left section: process icons + description */}
      <div className="flex flex-col items-center gap-4 lg:flex-row">
        
        {/* Process icons */}
        <div className="flex w-full items-center justify-center gap-2 lg:w-fit">
          {icons.map((Icon, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-1"
            >
              
              {/* Individual process icon */}
              <div className="mx-2 flex items-center justify-center rounded-full bg-white p-4 text-3xl text-primary lg:p-3 lg:text-2xl">
                <Icon />
              </div>

              {/* Dots connecting each icon */}
              {index < icons.length - 1 &&
                Array.from({ length: 5 }).map((_, dotIndex) => (
                  <span
                    key={dotIndex}
                    className="size-1 rounded-full bg-primary"
                  />
                ))}
            </div>
          ))}
        </div>

        {/* Learn more description */}
        <div className="flex flex-col gap-2 lg:gap-0">
          <h2 className={platStyles.cardTitle}>
            How Serv Works
          </h2>

          <div className="text-center text-muted lg:flex lg:gap-1 lg:text-left">
            <p>{firstDescription}</p>
            <p>{secondDescription}</p>
          </div>
        </div>
      </div>

      {/* TODO: Update href once the final Learn More route is created */}
      <Link
        href="/customer/learnmore"
        className="btn-primary w-full lg:w-fit"
      >
        Learn More
      </Link>
    </div>
  );
};

export default DashboardLearnMore;