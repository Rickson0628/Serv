import Image from "next/image";
import Link from "next/link";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiRightArrowAlt } from "react-icons/bi";
import platStyles from "../../app/(platform)/platform.module.css";

const ProviderAppointment = () => {
  return (
    <article className="mt-5 w-full space-y-4 rounded-2xl border border-gray-200 bg-white px-5 py-5 shadow-sm transition-transform hover:scale-[1.01]">

      {/* Card Title */}
      <h2 className={`${platStyles.cardTitle} font-semibold`}>
        Upcoming appointment
      </h2>

      {/* Appointment Information */}
      <div className="flex items-center gap-3">

        {/* Provider Image */}
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full md:h-20 md:w-20">
          <Image
            src="/dashboard/icon.jpg"
            alt="Service provider"
            fill
            className="object-cover"
          />
        </div>

        {/* Appointment Details */}
        <div className="flex min-w-0 flex-1 flex-col">

          {/* Service Name */}
          <div className={platStyles.cardSubtitle}>
            Oil change
          </div>

          {/* Date, Time & Arrow */}
          <div className="flex w-full items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted md:text-base">
              <span>Mon, Aug 12</span>
              <span className="h-1 w-1 rounded-full bg-muted" />
              <span>10:00 AM</span>
            </div>

            <BiRightArrowAlt className="shrink-0 text-xl text-muted md:text-2xl" />
          </div>

          {/* Status */}
          <div className="mt-1 flex w-fit items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-600">
            <AiFillCheckCircle size={16} />
            <span>Confirmed</span>
          </div>
        </div>
      </div>

      {/* View Details */}
      <Link
        href="/appointment/customer"
        className="btn-secondary w-full text-primary"
      >
        View Details
      </Link>
    </article>
  );
};

export default ProviderAppointment;