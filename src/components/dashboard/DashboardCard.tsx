import { CgArrowBottomLeft } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";
import platStyles from "../../app/(platform)/platform.module.css";

interface CardProps {
  image: string;
  title: string;
  href: string;
}

const DashboardCard = ({ title, image, href }: CardProps) => {
  return (
    <Link
      href={href}
      className="group flex w-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-transform hover:scale-[1.01]"
    >
      {/* Image */}
      <div className="relative h-40 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

        <div className="absolute right-3 top-3 z-10 rounded-full border border-gray-100 bg-white p-1 text-base text-muted transition-colors group-hover:border-primary group-hover:text-primary">
          <CgArrowBottomLeft />
        </div>
      </div>

      {/* Title */}
      <h3 className={`${platStyles.cardLowerSubtitle} p-3 text-center`}>
        {title}
      </h3>
    </Link>
  );
};

export default DashboardCard;