import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import platStyles from "../../app/(platform)/platform.module.css";

interface Benefit {
  icon: ReactNode;
  firstDescription: string;
  secondDescription: string;
}

interface DashboardProps {
  title: string;
  description: string;
  buttonName: string;
  desktopHeroImage: string;
  mobileHeroImage: string;
  serviceBenefits: Benefit[];
}

const DashboardCard = ({
  title,
  description,
  buttonName,
  mobileHeroImage,
  desktopHeroImage,
  serviceBenefits,
}: DashboardProps) => {
  return (
    <article className="relative w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

      {/* TODO: Replace with final responsive hero images if needed */}

      {/* Mobile / Smaller Image */}
      <Image
        src={mobileHeroImage}
        alt="Serv professional"
        fill
        className="object-cover object-[65%_45%] md:object-[65%_15%] lg:hidden"
      />

      {/* Desktop Image */}
      <div className="absolute inset-y-0 right-0 hidden w-[70%] lg:block">
        <Image
          src={desktopHeroImage}
          alt="Serv professional"
          fill
          sizes="70vw"
          className="object-cover object-[60%_45%]"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-y-0 left-0 z-[1] w-[55%] bg-gradient-to-r from-white via-white/95 to-transparent lg:w-[70%] lg:via-white" />

      {/* Content */}
      <div className="relative z-10 flex w-[60%] flex-col gap-3 px-6 py-8 md:py-10 lg:w-[70%] lg:gap-5 lg:py-12">

        {/* Heading */}
        <h2 className={platStyles.cardHeroTitle}>
          {title}
        </h2>

        {/* Accent Line */}
        <div className="h-1.5 w-12 rounded-full bg-primary md:w-15 lg:hidden" />

        {/* Description */}
        <p className={`${platStyles.cardDescription} xl:text-[1.375rem]`}>
          {description}
        </p>

        {/* Desktop Search + Button */}
        <div className="mt-2 hidden gap-2 lg:flex">

          {/* TODO: Connect service search to search/filter functionality */}
          <div className="relative w-[28rem]">
            <AiOutlineSearch
              aria-hidden="true"
              size={20}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            />

            <input
              type="search"
              aria-label="Search for a service"
              placeholder="Search services..."
              className="input h-12 w-full pl-10 pr-4"
            />
          </div>

          {/* TODO: Update booking route once booking flow is finalized */}
          <Link
            href="/book/customer"
            className="btn-primary h-12 w-fit whitespace-nowrap"
          >
            {buttonName}
          </Link>
        </div>

        {/* Mobile / Tablet Button */}
        <Link
          href="/book/customer"
          className="btn-primary w-fit whitespace-nowrap lg:hidden"
        >
          {buttonName}
        </Link>

        {/* Service Benefits */}
        {/* TODO: Move benefits to shared/static data if reused across the platform */}
        <div className="mt-2 hidden items-center gap-15 lg:flex">
          {serviceBenefits.map((service) => (
            <div
              key={`${service.firstDescription}-${service.secondDescription}`}
              className="flex items-center gap-2"
            >
              <div className="flex items-center justify-center rounded-full bg-gray-100 p-4">
                {service.icon}
              </div>

              <div className="flex flex-col font-semibold text-muted">
                <span>{service.firstDescription}</span>
                <span>{service.secondDescription}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default DashboardCard;