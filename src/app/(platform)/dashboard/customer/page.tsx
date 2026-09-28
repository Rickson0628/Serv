import { AiOutlineSearch } from "react-icons/ai";
import platStyles from "../../platform.module.css"
import { AiOutlineStar } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiCheckShield } from "react-icons/bi";
import { ReactNode } from "react";
import DashboardHeroCard from "@/components/dashboard/DashboardHeroCard";
import DashboardAppointmentCard from "@/components/dashboard/DashboardAppointmentCard";
import DashboardCard from "@/components/dashboard/DashboardCard";


interface Benefit {
  icon: ReactNode,
  firstDescription: string,
  secondDescription: string
}

interface Service {
  image: string,
  title: string,
  link: string
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

const popularServices: Service[] = [
  {
    image: "/dashboard/CarRepair.png",
    title: "Mechanical Repair",
    link:"/booking/auto-mechanic"
  },
  {
    image: "/dashboard/BodyRepair.png",
    title: "Body Work",
    link:"/booking/auto-body"
  },
  {
    image: "/dashboard/WindshieldRepair.png",
    title: "Windshield Repair",
     link:"/booking/auto-windshield"
  },
  {
    image: "/dashboard/CarDetail.png",
    title: "Vehicle Detailing",
    link:"/booking/auto-detail"
    
  },
]



const CustomerDashboardPage = () => {
  return (
    <main id="customer-dashboard" className={`${platStyles.page} mt-25`}>
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

      <DashboardAppointmentCard />



      <div className={`${platStyles.cardTitle} mt-5 pl-2`}>Popular Services</div>
     <div className="mt-3 grid w-full grid-cols-1 gap-4 pl-2 sm:grid-cols-2 lg:grid-cols-4">
        {popularServices.map((service) => (
          <DashboardCard href={service.link} title={service.title} image={service.image} key={service.title} />
        ))}
      </div>
    </main>
  );
};

export default CustomerDashboardPage;