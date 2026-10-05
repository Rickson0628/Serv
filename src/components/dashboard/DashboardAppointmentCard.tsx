import Image from "next/image";
import Link from "next/link";
import { AiFillCheckCircle } from "react-icons/ai";
import platStyles from "../../app/(platform)/platform.module.css";

const DashboardAppointmentCard = () => {
  return (
    <article className="mt-5 w-full space-y-4 lg:space-y-2 rounded-2xl border border-gray-200 bg-white bg-[radial-gradient(circle_at_90%_10%,rgba(0,122,255,0.08),transparent_55%)] px-5 py-4 shadow-sm">

      {/* Card Title */}
      <h2 className={`${platStyles.cardTitle} font-semibold`}>
        Upcoming appointment
      </h2>

      {/* Appointment Row */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8">

        {/* Appointment Information */}
        <div className="flex min-w-0 flex-1 items-center gap-3">

          {/* TODO: Replace hardcoded provider image with appointment/provider data */}

          {/* Provider Image */}
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full lg:h-[72px] lg:w-[72px]">
            <Image
              src="/dashboard/icon.jpg"
              alt="Service provider"
              fill
              sizes="(min-width: 1024px) 72px, 64px"
              className="object-cover"
            />
          </div>

          {/* Appointment Details */}
          <div className="flex min-w-0 flex-1 flex-col">

            {/* TODO: Replace hardcoded appointment details with dynamic data */}

            {/* Service Name */}
            <div className={platStyles.cardSubtitle}>
              Oil Change
            </div>

            {/* Date & Time */}
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted md:text-base">
              <span>Mon, Aug 12</span>
              <span className="h-1 w-1 rounded-full bg-muted" />
              <span>10:00 AM</span>
            </div>

            {/* TODO: Render status and status color based on appointment status */}

            {/* Mobile Status */}
            <div className="mt-1 flex w-fit items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-600 lg:hidden">
              <AiFillCheckCircle size={16} />
              <span>Confirmed</span>
            </div>
          </div>
        </div>

   

        {/* Mobile View Details */}
        <Link
          href="/appointment/customer"
          className="btn-secondary w-full text-primary lg:hidden"
        >
          View Details
        </Link>

        {/* Desktop Status + Actions */}
        <div className="hidden shrink-0 items-center gap-6 lg:flex">

          {/* Status */}
          <div className="flex w-fit items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-md font-medium text-green-600">
            <AiFillCheckCircle size={16} />
            <span>Confirmed</span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">


            <Link
              href="/messages/customer"
              className="btn-secondary whitespace-nowrap text-primary"
            >
              Message
            </Link>

          
            <Link
              href="/appointment/customer"
              className="btn-primary whitespace-nowrap"
            >
              Reschedule
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DashboardAppointmentCard;