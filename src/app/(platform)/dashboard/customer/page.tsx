import { AiOutlineSearch } from "react-icons/ai";
import platStyles from "../../platform.module.css"
import { AiOutlineStar } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiCheckShield } from "react-icons/bi";
import { ReactNode } from "react";
import DashboardHeroCard from "@/components/dashboard/DashboardHeroCard";
import DashboardAppointment from "@/components/dashboard/DashboardAppointment";


interface Benefit {
  icon: ReactNode,
  firstDescription: string,
  secondDescription: string
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


const CustomerDashboardPage = () => {
  return (
    <main id="customer-dashboard 0" className={`${platStyles.page} mt-25`}>
      <div className="relative mb-5 lg:hidden">
        <AiOutlineSearch
          aria-hidden="true"
          size={20}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
        />

        <input
          type="search"
          aria-label="Search for a service"
          placeholder="Search services..."
          className="input w-full pl-10 pr-4"
        />
      </div>
      <DashboardHeroCard title="Keeping you on the road" description="Trusted professionals for a smoother drive." buttonName="Book a service"
        desktopHeroImage="/dashboard/ServHeroDesk.png" mobileHeroImage="/dashboard/ServHeroMobile.png" serviceBenefits={serviceBenefits} />
        
        <DashboardAppointment />
    </main>
  );
};

export default CustomerDashboardPage;