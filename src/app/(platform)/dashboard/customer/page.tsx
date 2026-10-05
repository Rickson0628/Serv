import { AiOutlineSearch, AiOutlineStar } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiCheckShield } from "react-icons/bi";
import type { ReactNode } from "react";

import DashboardHeroCard from "@/components/dashboard/DashboardHeroCard";
import DashboardAppointmentCard from "@/components/dashboard/DashboardAppointmentCard";
import DashboardCard from "@/components/dashboard/DashboardCard";
import DashboardLearnMore from "@/components/dashboard/DashboardLearnMore";

import platStyles from "../../platform.module.css";

interface Benefit {
  icon: ReactNode;
  firstDescription: string;
  secondDescription: string;
}

interface Service {
  image: string;
  title: string;
  link: string;
}

const serviceBenefits: Benefit[] = [
  {
    icon: <BiCheckShield size={25} />,
    firstDescription: "Trusted",
    secondDescription: "Professionals",
  },
  {
    icon: <BsFillPeopleFill size={25} />,
    firstDescription: "Local",
    secondDescription: "Skilled Workers",
  },
  {
    icon: <AiOutlineStar size={25} />,
    firstDescription: "Quality",
    secondDescription: "Service",
  },
];

// TODO: Replace static popular services with data from the backend
// TODO: Update booking routes once the final booking flow is implemented
const popularServices: Service[] = [
  {
    image: "/dashboard/CarRepair.png",
    title: "Mechanical Repair",
    link: "/booking/auto-mechanic",
  },
  {
    image: "/dashboard/BodyRepair.png",
    title: "Body Work",
    link: "/booking/auto-body",
  },
  {
    image: "/dashboard/WindshieldRepair.png",
    title: "Windshield Repair",
    link: "/booking/auto-windshield",
  },
  {
    image: "/dashboard/CarDetail.png",
    title: "Vehicle Detailing",
    link: "/booking/auto-detail",
  },
];

const CustomerDashboardPage = () => {
  return (
    <main
      id="customer-dashboard"
      className={`${platStyles.page} mt-25`}
    >
      {/* Mobile service search */}
      <div className="relative mb-5 lg:hidden">
        <AiOutlineSearch
          aria-hidden="true"
          size={20}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
        />

        {/* TODO: Connect search input to service/provider search functionality */}
        <input
          type="search"
          aria-label="Search for a service"
          placeholder="Search services..."
          className="input w-full pl-10 pr-4"
        />
      </div>

      {/* Dashboard hero */}
      <DashboardHeroCard
        title="Keeping you on the road"
        description="Trusted professionals for a smoother drive."
        buttonName="Book a service"
        desktopHeroImage="/dashboard/ServHeroDesk.png"
        mobileHeroImage="/dashboard/ServHeroMobile.png"
        serviceBenefits={serviceBenefits}
      />

      {/* TODO: Replace mock appointment data with customer booking data */}
      <DashboardAppointmentCard />

      {/* Popular services */}
      <h2 className={`${platStyles.cardTitle} mt-5 pl-2`}>
        Popular Services
      </h2>

      <div className="mt-3 grid w-full grid-cols-1 gap-4 pl-2 sm:grid-cols-2 lg:grid-cols-4">
        {popularServices.map((service) => (
          <DashboardCard
            key={service.title}
            href={service.link}
            title={service.title}
            image={service.image}
          />
        ))}
      </div>

      {/* How Serv Works */}
      <DashboardLearnMore
        firstDescription="Find trusted local"
        secondDescription="professionals in minutes"
      />
    </main>
  );
};

export default CustomerDashboardPage;