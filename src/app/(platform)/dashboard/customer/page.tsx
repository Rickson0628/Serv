import { AiOutlineSearch } from "react-icons/ai"; 
import DashboardCard from "@/components/dashboard/DashboardCard";
import platStyles from "../../platform.module.css"

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
      <DashboardCard title="Keeping you on the road" description="Trusted professionals for a smoother drive." buttonName="Book a service" desktopHeroImage="/dashboard/ServHeroDesk.png"
      mobileHeroImage="/dashboard/ServHeroMobile.png" />
    </main>
  );
};

export default CustomerDashboardPage;